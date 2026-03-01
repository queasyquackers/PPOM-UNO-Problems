import re
import sys

def clean_srt(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match blocks like:
    # 1
    # 00:00:02,520 --> 00:00:05,360
    # Hello, class. This
    # lecture will focus
    
    # We can just match the parts we want to remove
    content = re.sub(r'^\d+$\n', '', content, flags=re.MULTILINE)
    content = re.sub(r'^\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}$\n', '', content, flags=re.MULTILINE)
    
    # Replace newlines with spaces
    content = re.sub(r'\n+', ' ', content)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content.strip())

if __name__ == '__main__':
    clean_srt(sys.argv[1], sys.argv[2])
