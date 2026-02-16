import sys
import re
from pypdf import PdfReader

pdf_path = "d:/PPOM-UNO-Problems/pdfs/Lecture # 70. A. Patel, D.O. (PPT).pdf"
transcript_path = "d:/PPOM-UNO-Problems/transcripts/Lecture #70_ DPR_ History and Physical Exam_ Pediatrics Part 1_ Birth to 5yo Faculty_ A. Patel, D.O..srt"
output_path = "d:/PPOM-UNO-Problems/extracted_L70_text.txt"

def extract_pdf_text(path):
    try:
        reader = PdfReader(path)
        text = ""
        for i, page in enumerate(reader.pages):
            text += f"--- Page {i+1} ---\n"
            text += page.extract_text() + "\n"
        return text
    except Exception as e:
        return f"Error extracting PDF: {e}"

def clean_srt(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        # Remove timestamps and index numbers
        lines = content.split('\n')
        cleaned_lines = []
        for line in lines:
            if re.match(r'^\d+$', line.strip()): continue
            if re.match(r'^\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}$', line.strip()): continue
            if line.strip() == '': continue
            cleaned_lines.append(line.strip())
        return " ".join(cleaned_lines)
    except Exception as e:
        return f"Error reading transcript: {e}"

pdf_text = extract_pdf_text(pdf_path)
transcript_text = clean_srt(transcript_path)

final_output = f"=== PDF CONTENT ===\n{pdf_text}\n\n=== TRANSCRIPT CONTENT ===\n{transcript_text}"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(final_output)

print(f"Successfully extracted content to {output_path}")
