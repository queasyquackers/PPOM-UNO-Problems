import sys
import os

def extract_text_from_srt(srt_path):
    with open(srt_path, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    text_lines = []
    
    for line in lines:
        line = line.strip()
        if not line: continue
        if line.isdigit(): continue
        if '-->' in line: continue
        text_lines.append(line)
    
    return ' '.join(text_lines)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python extract_single_srt.py <srt_path> <output_path>")
        sys.exit(1)
        
    srt_path = sys.argv[1]
    output_path = sys.argv[2]
    
    text = extract_text_from_srt(srt_path)
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(text)
    print(f"Extracted {len(text)} chars to {output_path}")
