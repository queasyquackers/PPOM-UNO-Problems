
import sys
from pypdf import PdfReader

# Correct path found in previous step
pdf_path = "d:/PPOM-UNO-Problems/pdfs/Lecture # 68. G. Otazu, Ph.D. (PPT).pdf"
output_path = "d:/PPOM-UNO-Problems/extracted_L68_pdf_text.txt"

try:
    reader = PdfReader(pdf_path)
    text = ""
    for i, page in enumerate(reader.pages):
        text += f"--- Page {i+1} ---\n"
        text += page.extract_text() + "\n"
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(text)
    
    print(f"Successfully extracted text to {output_path}")

except Exception as e:
    print(f"Error extracting text: {e}")
