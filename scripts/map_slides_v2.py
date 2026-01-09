import fitz  # PyMuPDF
import json
import sys
import re
from collections import Counter

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    pages_text = []
    for i, page in enumerate(doc):
        text = page.get_text("text")
        pages_text.append(text)
    return pages_text

def score_page(text, keywords):
    text_lower = text.lower()
    score = 0
    for keyword in keywords:
        if keyword.lower() in text_lower:
            score += 1
    return score

def get_keywords(text):
    # Simple keyword extraction: remove common words, keep nouns/verbs ideally
    # For now, just split and filter small words
    words = re.findall(r'\b\w+\b', text.lower())
    stopwords = {'the', 'and', 'is', 'of', 'to', 'a', 'in', 'that', 'with', 'for', 'are', 'on', 'as', 'be', 'this', 'an', 'or', 'by', 'not', 'it', 'from', 'which', 'at', 'but', 'was', 'have', 'has', 'patient', 'presents', 'incorrect', 'correct', 'explanation'}
    keywords = [w for w in words if w not in stopwords and len(w) > 3]
    return keywords

def map_questions(pdf_path, questions):
    pages_text = extract_text_from_pdf(pdf_path)
    results = {}

    for q in questions:
        q_text = q.get('questionText', '')
        # Add correct answer text to keywords
        correct_idx = q.get('correctAnswerIndex', -1)
        options = q.get('options', [])
        ans_text = ""
        if 0 <= correct_idx < len(options):
            ans_text = options[correct_idx].get('text', '')

        # Combine question and answer for search
        search_text = q_text + " " + ans_text
        keywords = get_keywords(search_text)
        
        best_page = 1
        max_score = 0
        
        for i, page_text in enumerate(pages_text):
            score = score_page(page_text, keywords)
            if score > max_score:
                max_score = score
                best_page = i + 1 # 1-based index
        
        # Heuristic: if max_score is too low (e.g. 0 or 1), might be a miss. 
        # But we must return something. Default to 1 if no match? 
        # Or maybe keep it null? The user asked to map "based on corresponding PDF".
        # If uncertain, maybe map to 1 or leave it. 
        # I'll return the best page found.
        
        results[q['id']] = best_page

    return results

if __name__ == '__main__':
    # Usage: python map_slides_v2.py <pdf_path> <json_questions_file>
    if len(sys.argv) < 3:
        print("Usage: python map_slides_v2.py <pdf_path> <json_questions_file>")
        sys.exit(1)

    pdf_path = sys.argv[1]
    json_path = sys.argv[2]
    
    with open(json_path, 'r', encoding='utf-8') as f:
        questions = json.load(f)

    mapping = map_questions(pdf_path, questions)
    print(json.dumps(mapping, indent=2))
