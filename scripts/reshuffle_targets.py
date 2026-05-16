"""Reshuffle correctAnswerIndex for a window.Test_LNNN file to a target sequence.

Usage:
    python scripts/reshuffle_targets.py <test_file.js> <comma_separated_targets>

Example:
    python scripts/reshuffle_targets.py Test_L179.js 1,3,0,2,4,1,3,0,2,4,0,3,1,4,2,0,3,1,4,2
"""
import json
import re
import sys
from pathlib import Path


def reshuffle(path: Path, target_indices):
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^(window\.Test_L\d+\s*=\s*)(\[.*\])(\s*;?\s*)$", text, re.DOTALL)
    if not m:
        raise SystemExit(f"Could not parse {path}")
    prefix, json_text, _ = m.groups()
    questions = json.loads(json_text)
    assert len(questions) == len(target_indices), (
        f"{path.name}: have {len(questions)} questions, expected {len(target_indices)}"
    )
    for q, target_idx in zip(questions, target_indices):
        current = q["correctAnswerIndex"]
        if current == target_idx:
            continue
        opts = q["options"]
        correct = opts.pop(current)
        opts.insert(target_idx, correct)
        q["correctAnswerIndex"] = target_idx
    new_json = json.dumps(questions, indent=2, ensure_ascii=False)
    path.write_text(prefix + new_json + ";\n", encoding="utf-8")
    counts = [0] * 5
    for q in questions:
        counts[q["correctAnswerIndex"]] += 1
    print(f"{path.name}: A={counts[0]} B={counts[1]} C={counts[2]} D={counts[3]} E={counts[4]}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)
    path = Path(sys.argv[1])
    targets = [int(x) for x in sys.argv[2].split(",")]
    reshuffle(path, targets)
