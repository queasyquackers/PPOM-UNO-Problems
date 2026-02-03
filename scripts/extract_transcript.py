import re
import sys
import os

def extract_text_from_srt(srt_path, output_path):
    """Extract plain text from .srt subtitle file"""
    try:
        with open(srt_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        text_lines = []
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
            if line.isdigit():
                continue
            if '-->' in line:
                continue
            text_lines.append(line)
        
        text = ' '.join(text_lines)
        
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
            
        print(f"Successfully extracted transcript to {output_path}")
        
    except Exception as e:
        print(f"Error extracting transcript from {srt_path}: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python extract_transcript.py <srt_path> <output_path>")
        sys.exit(1)
    
    srt_path = sys.argv[1]
    output_path = sys.argv[2]
    extract_text_from_srt(srt_path, output_path)
