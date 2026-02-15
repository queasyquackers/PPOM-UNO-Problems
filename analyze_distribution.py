import json
import re
from collections import Counter

file_path = r"d:\PPOM-UNO-Problems\Test_Cumulative_Week6.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the array content
match = re.search(r'window\.Test_Cumulative_Week6\s*=\s*\[(.*?)\];', content, re.DOTALL)
if not match:
    print("Could not find the array in the file.")
    exit(1)

array_content = match.group(1)
json_str = re.sub(r'//.*', '', array_content)
json_str = re.sub(r',\s*([\]}])', r'\1', json_str)

try:
    data = json.loads(f"[{json_str}]")
except json.JSONDecodeError as e:
    print(f"JSON Parse Error: {e}")
    exit(1)

total = len(data)
counts = Counter(q.get('correctAnswerIndex', 0) for q in data)

mapping = {0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E'}

print(f"Total Questions: {total}")
print("-" * 30)
for i in range(5):
    count = counts.get(i, 0)
    percentage = (count / total) * 100
    print(f"{mapping[i]}: {count} ({percentage:.1f}%)")
