import json
import random
import re

file_path = r"d:\PPOM-UNO-Problems\Test_Cumulative_Week6.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the array content
match = re.search(r'window\.Test_Cumulative_Week6\s*=\s*\[(.*?)\];', content, re.DOTALL)
if not match:
    print("Could not find the array in the file.")
    exit(1)

array_content = match.group(1)

# Remove JS style comments for JSON parsing
# Remove // comments
json_str = re.sub(r'//.*', '', array_content)
# Remove trailing commas before } or ] which are valid in JS but not JSON
# This is tricky with regex, but let's try a simple approach or use a loose parser if possible.
# Actually, the file seems to have trailing commas (e.g., after the last option). 
# standard json.loads might fail.
# Let's try to clean it up.
json_str = re.sub(r',\s*([\]}])', r'\1', json_str)

try:
    # Wrap in [] to make it a valid JSON array
    data = json.loads(f"[{json_str}]")
except json.JSONDecodeError as e:
    print(f"JSON Parse Error: {e}")
    # Fallback: maybe the regex removed too much or too little.
    # Let's accept that we might need a more robust parser or just regex replacement for the "correctAnswerIndex".
    # But shuffling options requires parsing.
    # Let's try to fix common JSON issues.
    # The file has keys in quotes, so it's close to JSON.
    print("Attempting manual fix...")
    exit(1)

print(f"Successfully parsed {len(data)} questions.")

# Shuffle answers
for q in data:
    options = q['options']
    correct_prio_index = q.get('correctAnswerIndex', 0)
    
    # Identify the correct option object (to track it)
    # Use the index
    correct_option = options[correct_prio_index]
    
    # Shuffle
    random.shuffle(options)
    
    # Find new index
    new_correct_index = options.index(correct_option)
    q['correctAnswerIndex'] = new_correct_index

# Reconstruct the file content with comments
output_lines = []
output_lines.append("window.Test_Cumulative_Week6 = [")

# Batch headers
batch_headers = {
    0: "    // --- BATCH 1: Lectures 48-53 (Seizures, Sleep, Sedatives, Memory) ---",
    25: "    // --- BATCH 2: Lectures 54-56 (Stroke, Aphasia, Neurodegenerative) ---",
    50: "    // --- BATCH 3: Lectures 57-59 (Parkinson's, Pharmacology, Geriatrics) ---"
}

# Batch footers
batch_footers = {
    24: "    // --- END OF BATCH 1 ---",
    49: "    // --- END OF BATCH 2 ---",
    74: "    // --- END OF BATCH 3 ---"
}

for i, q in enumerate(data):
    if i in batch_headers:
        output_lines.append(batch_headers[i])
    
    # helper to dump json with indentation
    q_str = json.dumps(q, indent=4)
    # indent the whole object
    q_str = "\n".join("    " + line for line in q_str.splitlines())
    
    comma = "," if i < len(data) - 1 else ""
    output_lines.append(q_str + comma)
    
    if i in batch_footers:
        output_lines.append(batch_footers[i])

output_lines.append("];")
output_lines.append("") # trailing newline

new_content = "\n".join(output_lines)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully randomized answers and rewrote file.")
