
import sys
from pypdf import PdfReader

# "Lecture # 61. A. Leder, D.O. (PPT - updated 1.29.26).pdf"
pdf_path = "d:/PPOM-UNO-Problems/pdfs/Lecture # 61. A. Leder, D.O. (PPT - updated 1.29.26).pdf"
output_path = "d:/PPOM-UNO-Problems/extracted_L61_text.txt"

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
