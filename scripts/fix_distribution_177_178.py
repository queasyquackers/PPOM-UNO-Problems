"""One-shot reshuffler: balance correctAnswerIndex distribution for L177 and L178.

Strategy: parse the JS file (wrapping `window.Test_LXXX = [...];`), interpret
the array as JSON, and for each question move the correct option to a target
index drawn from a pre-computed sequence that gives 4 of each (0..4) over 20
questions and avoids consecutive repeats.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# 4 of each index, no consecutive repeats, varied across the two files.
L177_TARGETS = [2, 4, 1, 3, 0, 2, 4, 1, 3, 0, 4, 2, 0, 3, 1, 4, 0, 2, 3, 1]
L178_TARGETS = [3, 0, 2, 4, 1, 3, 0, 2, 4, 1, 3, 0, 2, 4, 1, 3, 0, 2, 4, 1]


def reshuffle(path: Path, target_indices):
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^(window\.Test_L\d+\s*=\s*)(\[.*\])(\s*;?\s*)$", text, re.DOTALL)
    if not m:
        raise SystemExit(f"Could not parse {path}")
    prefix, json_text, suffix = m.groups()
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
    reshuffle(ROOT / "Test_L177.js", L177_TARGETS)
    reshuffle(ROOT / "Test_L178.js", L178_TARGETS)
