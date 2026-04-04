#!/usr/bin/env bash
# orchestrator.sh — Build BiostatTextbook (Quarto) with Claude Code
set -euo pipefail

PROJECT_DIR="${PROJECT_DIR:-$(pwd)}"
PROMPTS_DIR="${PROJECT_DIR}/prompts"
STATUS_FILE="${PROJECT_DIR}/build/status.toml"
MAX_PARALLEL="${MAX_PARALLEL:-10}"
MAX_TURNS=50

mkdir -p "${PROJECT_DIR}/build"

is_complete() {
    grep -q "^\[prompt_${1}\]" "$STATUS_FILE" 2>/dev/null && \
    grep -A1 "^\[prompt_${1}\]" "$STATUS_FILE" | grep -q 'status = "complete"'
}

run_prompt() {
    local f=$1 id=$(basename "$1" .md | grep -oP '\d{3}')
    is_complete "$id" && { echo "Skip $id"; return 0; }
    echo "[$(date +%H:%M:%S)] Running $id"
    printf '\n[prompt_%s]\nstatus = "running"\nstarted = "%s"\n' \
        "$id" "$(date -Iseconds)" >> "$STATUS_FILE"
    if claude -p "$f" --allowedTools bash,write,edit,read \
        --max-turns $MAX_TURNS 2>&1 | tee "build/log_${id}.txt"; then
        sed -i "/prompt_${id}/,/status/{s/running/complete/}" "$STATUS_FILE"
    else
        sed -i "/prompt_${id}/,/status/{s/running/failed/}" "$STATUS_FILE"
        return 1
    fi
}
export -f run_prompt is_complete
export PROJECT_DIR STATUS_FILE MAX_TURNS

# Phase 1: Foundation (sequential)
echo "=== PHASE 1: Foundation ==="
for p in 001 002 003 004; do
    run_prompt "${PROMPTS_DIR}/foundation/prompt_${p}"*.md || exit 1
done
quarto render --to html 2>&1 | tail -5 || exit 1

# Phase 2: Chapters (parallel)
echo "=== PHASE 2: Chapters (parallel x${MAX_PARALLEL}) ==="
find "${PROMPTS_DIR}/chapters/" -name '*.md' | sort | \
    parallel -j "$MAX_PARALLEL" --progress run_prompt {}

# Phase 3: Integration (sequential)
echo "=== PHASE 3: Integration ==="
for p in 050 051 052 053; do
    run_prompt "${PROMPTS_DIR}/integration/prompt_${p}"*.md
done

# Phase 4: QA + Deploy (sequential)
echo "=== PHASE 4: QA & Deploy ==="
for p in 060 061 062 063; do
    run_prompt "${PROMPTS_DIR}/qa/prompt_${p}"*.md
done

quarto render
echo "=== BUILD COMPLETE ==="
