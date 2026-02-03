
import re
import math
import argparse
from collections import Counter

def get_cosine_similarity(vec1, vec2):
    intersection = set(vec1.keys()) & set(vec2.keys())
    numerator = sum([vec1[x] * vec2[x] for x in intersection])
    sum1 = sum([vec1[x]**2 for x in vec1.keys()])
    sum2 = sum([vec2[x]**2 for x in vec2.keys()])
    denominator = math.sqrt(sum1) * math.sqrt(sum2)
    if not denominator:
        return 0.0
    return numerator / denominator

def text_to_vector(text):
    words = re.findall(r'\w+', text.lower())
    return Counter(words)

def parse_pdf_text(filepath):
    pages = {}
    current_page = 0
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by === PAGE X ===
    # Assuming text extracted with the format "=== PAGE X ==="
    # Regex to split and keep delimiters would be complex, simpler to just iterate or split
    
    # Split by page marker
    parts = re.split(r'(=== PAGE \d+ ===)', content)
    
    current_page_num = 0
    for part in parts:
        if part.startswith('=== PAGE'):
            try:
                current_page_num = int(re.search(r'\d+', part).group())
            except:
                continue
        else:
            if current_page_num > 0:
                pages[current_page_num] = part.strip()
    
    return pages

def parse_js_questions(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # We want to modify the file content, so we likely need regex to verify we are targeting the right area
    # But for analysis, let's just extract the blocks.
    # Actually, to update the file in place safely, it is better to read the whole file,
    # find properties, and replace them.
    
    return content

def find_best_page(question_text, correct_answer, explanation, pages):
    # Combine query text
    query = f"{question_text} {correct_answer} {explanation}"
    query_vec = text_to_vector(query)
    
    best_page = 1
    best_score = 0.0
    
    for page_num, page_text in pages.items():
        page_vec = text_to_vector(page_text)
        score = get_cosine_similarity(query_vec, page_vec)
        if score > best_score:
            best_score = score
            best_page = page_num
            
    return best_page, best_score

def update_file(js_path, txt_path):
    print(f"Processing {js_path} using {txt_path}...")
    pages = parse_pdf_text(txt_path)
    
    if not pages:
        print("Error: No pages found in text file.")
        return

    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Simple regex to iterate through object blocks would be hard because of nesting.
    # However, standard structure is consistent: 
    # { 
    #   "id": ..., 
    #   ... 
    #   "pdfPage": X 
    # }
    
    # Let's try to match the whole question block roughly to extract text for matching
    # Then replace the pdfPage line within that block.
    
    # We can assume objects are separated by "}," or "}, {".
    
    # Strategy:
    # 1. Split content into object chunks (semi-reliable) or use a state-machine parser.
    # Given the clean formatting seen in view_file, regex might suffice.
    
    # Let's use a pattern that captures the relevant fields to build the query, and the location of pdfPage to replace it.
    
    # Iterate through matches
    # Pattern to capture essential fields. Non-greedy matching where appropriate.
    # We essentially walk through the file.
    
    new_content = ""
    last_pos = 0
    
    # Pattern to find the start of a question object and its content
    # Look for "id": ... and verify it's a question block
    
    # Improved Regex: Catch the block from "{" containing "id" until "pdfPage": \d+
    # Wait, pdfPage is at the end. 
    
    # Find all "pdfPage": \d+ locations. Backward search for "questionText", "options".
    
    # Let's iterate over "pdfPage": ... occurrences? No, we need context.
    
    # Let's try to parse the array.
    # Assuming standard formatting:
    # window.Test_XX = [
    #   {
    #     ...
    #   },
    #   ...
    # ]
    
    # Split by `"id":` might be safer.
    
    parts = content.split('"id":')
    new_content = parts[0] # Header
    
    for i in range(1, len(parts)):
        chunk = parts[i]
        
        # Determine boundaries
        # Chunk starts with the ID number (e.g. " 1," or " 1,\n")
        # And goes until the next "id": or end of file.
        
        # Extract qText
        q_match = re.search(r'"questionText":\s*"(.*?)",', chunk, re.DOTALL)
        q_text = q_match.group(1).encode('utf-8').decode('unicode_escape') if q_match else ""
        
        # Extract options (simplified - just grab all text in options block)
        # Find "options": [ ... ]
        # This is hard with regex due to nesting level.
        
        # Fallback: Just search for "explanation": "Correct. ..."
        # because the Correct explanation usually sums up the key concept.
        
        # Search for the correct explanation specifically
        corr_expl_match = re.search(r'"explanation":\s*"Correct\.\s*(.*?)"', chunk, re.DOTALL)
        explanation = corr_expl_match.group(1) if corr_expl_match else ""
        
        # Search for correct answer?
        # Maybe unnecessary if we have the explanation. The explanation is usually rich.
        
        if q_text:
            best_page, score = find_best_page(q_text, "", explanation, pages)
            
            # Replace pdfPage
            # Find "pdfPage": \d+
            chunk = re.sub(r'"pdfPage":\s*\d+', f'"pdfPage": {best_page}', chunk)
            print(f"  Q ID {i}: Best Page {best_page} (Score: {score:.4f})")
        
        new_content += '"id":' + chunk
        
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Updated {js_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("js_file", help="Path to Test_Lx.js")
    parser.add_argument("txt_file", help="Path to Lx.txt")
    args = parser.parse_args()
    
    update_file(args.js_file, args.txt_file)
