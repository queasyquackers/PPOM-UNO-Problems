// Thinking Process (v5 batch — Questions 1-20):
// 1. High-Yield Concept: Differentiating Hodgkin from Non-Hodgkin lymphomas; identifying lymphoma subtypes by morphology, immunophenotype, translocations, and clinical context.
// 2. The "Trap": Confusing CD5+ B-cell malignancies (CLL vs MCL, separated by CD23), conflating endemic vs sporadic vs immunodeficiency Burkitt, or mistaking transformed disease (Richter) for new primary.
// 3. Key Distractor: For HL vs NHL — both have lymphadenopathy and B symptoms; the discriminator is Reed-Sternberg cell (CD15+CD30+, CD45-), contiguous spread, bimodal age, and the alcohol-induced pain clue.
// 4. Vignette Strategy: Use geography (endemic Burkitt = African jaw), age (HL bimodal), associated chronic infection/autoimmunity (H. pylori → gastric MALT; Sjögren → parotid MALT; Hashimoto → thyroid MALT), and pathognomonic morphology (starry sky, popcorn cells, lacunar cells) to force differentiation.
//
// PDF Mapping Check: Found
// PDF Filename: Lecture #154. M. Plummer, M.D. (StudySheet) updated 4.23.26.pdf
// Mapping Key: 17-Hematology: Lymphomas (L155)
// Status: Verified
//
// Block 1 (Q1-Q10): First-Order High-Yield differentiation questions per v5 prompt.
// Block 2 (Q11-Q20): 2nd/3rd-order application vignettes (4-8 sentence stems with demographics, HPI, exam, labs).
// Block 3 (Q21-Q40): Original 20 first-order lymphoma differentiation questions.

const Test_L155 = [
  {
    "id": 1,
    "category": "Hematology: Reed-Sternberg Cell Identification",
    "questionText": "A pathologist reviews a lymph node biopsy from a patient with suspected Hodgkin lymphoma. She identifies a large binucleate cell with two mirror-image nuclei, each containing a single prominent eosinophilic nucleolus surrounded by a clear halo, producing an 'owl-eye' appearance. Which immunophenotype confirms this cell is a classical Reed-Sternberg cell?",
    "options": [
      { "text": "CD19+, CD20+, CD45+ (typical mature B-cell profile)", "explanation": "Incorrect. This describes a typical mature B-cell phenotype as seen in most non-Hodgkin B-cell lymphomas (e.g., DLBCL, follicular). Classical Reed-Sternberg cells are derived from B cells but have characteristically LOST most B-cell markers (often CD20-) and are CD45-NEGATIVE. This would be the correct answer if the question were describing a B-cell NHL such as DLBCL." },
      { "text": "CD3+, CD4+ (helper T cell)", "explanation": "Incorrect. CD3 and CD4 mark mature T cells; classical Reed-Sternberg cells are derived from B-cell lineage despite their loss of typical B markers. This would be the correct answer if the question were describing the malignant cells of mycosis fungoides or Sezary syndrome." },
      { "text": "CD15+, CD30+, with characteristic LOSS of CD45 and (usually) CD20", "explanation": "Correct. Classical Reed-Sternberg cells uniquely express both CD15 (a granulocyte marker, Lewis X) and CD30 (Ki-1, a member of the TNF receptor family) while characteristically LACKING CD45 (common leukocyte antigen, present on essentially all other hematopoietic cells). They typically also lack CD20. This unusual immunophenotype is diagnostic and has therapeutic implications: brentuximab vedotin is an anti-CD30 antibody-drug conjugate used in HL." },
      { "text": "TdT+, CD10+, CD19+ (pro/pre-B lymphoblast)", "explanation": "Incorrect. TdT and CD10 mark immature lymphoblasts seen in B-ALL. Reed-Sternberg cells are derived from mature germinal center B cells and have lost both TdT and CD10. This would be the correct answer if the lymph node biopsy showed sheets of TdT+ blasts in a child with B-ALL." },
      { "text": "CD33+, CD13+, myeloperoxidase positive", "explanation": "Incorrect. CD33, CD13, and MPO are myeloid lineage markers diagnostic of AML. Reed-Sternberg cells are of B-cell origin and are MPO-negative. This would be the correct answer if the marrow biopsy showed myeloblasts with Auer rods." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Classical Reed-Sternberg cell = CD15+ CD30+, with characteristic LOSS of CD45 and (usually) CD20. Brentuximab vedotin targets CD30.",
    "pdfPage": 4,
    "pdfQuote": "Reed-Sternberg"
  },
  {
    "id": 2,
    "category": "Hematology: HL Subtype Prognosis",
    "questionText": "A medical student is studying classical Hodgkin lymphoma subtypes. Which of the following correctly orders the classical HL subtypes from BEST to WORST prognosis (with appropriate therapy)?",
    "options": [
      { "text": "Lymphocyte-depleted > Mixed cellularity > Nodular sclerosing > Lymphocyte-rich", "explanation": "Incorrect. This list is essentially reversed — lymphocyte-depleted has the WORST prognosis, while lymphocyte-rich has the BEST. The mnemonic is: more reactive lymphocytes = better prognosis; more malignant cells = worse prognosis. This would be the correct answer if the question asked from worst to best." },
      { "text": "Lymphocyte-rich > Nodular sclerosing > Mixed cellularity > Lymphocyte-depleted", "explanation": "Correct. The classical HL subtypes ordered by prognosis are: (1) LYMPHOCYTE-RICH (best — abundant reactive lymphocytes diluting RS cells); (2) NODULAR SCLEROSING (most common, young women, mediastinal mass, fibrous bands and lacunar cells); (3) MIXED CELLULARITY (older patients, EBV-associated, eosinophil-rich background); (4) LYMPHOCYTE-DEPLETED (worst — few reactive cells, many RS cells; HIV-associated, elderly). The principle: the more reactive immune infiltrate present, the better the prognosis." },
      { "text": "Nodular sclerosing > Lymphocyte-depleted > Mixed cellularity > Lymphocyte-rich", "explanation": "Incorrect. This ordering is wrong — lymphocyte-depleted has the WORST prognosis among classical subtypes, not the second-best. This would be the correct answer if lymphocyte-depleted were a favorable subtype, which it is not." },
      { "text": "Mixed cellularity > Lymphocyte-rich > Nodular sclerosing > Lymphocyte-depleted", "explanation": "Incorrect. Lymphocyte-rich, not mixed cellularity, has the best prognosis. Mixed cellularity is intermediate and is associated with EBV and older patients. This would be the correct answer if the relationship between reactive infiltrate and prognosis were reversed." },
      { "text": "All classical HL subtypes have equal prognosis with modern therapy", "explanation": "Incorrect. While modern therapy has dramatically improved outcomes across all subtypes, there remain meaningful prognostic differences, with lymphocyte-depleted carrying the worst prognosis especially in advanced stage. This would be the correct answer if treatment had completely eliminated subtype-based prognostic differences." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: HL prognosis = LR > NS > MC > LD. More reactive lymphocytes diluting RS cells = better outcome. NLPHL (non-classical) has the best prognosis overall.",
    "pdfPage": 4,
    "pdfQuote": "lymphocyte-depleted"
  },
  {
    "id": 3,
    "category": "Hematology: BCL-2 Mechanism in Follicular Lymphoma",
    "questionText": "A 60-year-old patient with newly diagnosed follicular lymphoma has the t(14;18) translocation confirmed by FISH. Which of the following best describes how this translocation drives lymphomagenesis?",
    "options": [
      { "text": "It produces a constitutively active tyrosine kinase that drives uncontrolled proliferation", "explanation": "Incorrect. This describes the BCR-ABL fusion produced by t(9;22) in CML — a gain-of-function tyrosine kinase. Follicular lymphoma's t(14;18) creates overexpression (not enzymatic activation) of an anti-apoptotic protein. This would be the correct answer if the question were about CML pathogenesis." },
      { "text": "It blocks myeloid differentiation at the promyelocyte stage, blockable with all-trans retinoic acid", "explanation": "Incorrect. This describes the PML-RARA fusion of t(15;17) in acute promyelocytic leukemia (APL), where ATRA reverses the differentiation block. Follicular lymphoma involves overexpression of an anti-apoptotic protein. This would be the correct answer if the patient had APL." },
      { "text": "It juxtaposes BCL-2 next to the IgH enhancer on chromosome 14, driving BCL-2 overexpression and blocking apoptosis in germinal center B cells", "explanation": "Correct. The t(14;18) translocation places the BCL-2 gene (chromosome 18) under control of the active IgH enhancer (chromosome 14), causing constitutive overexpression of the anti-apoptotic BCL-2 protein. BCL-2 normally inhibits mitochondrial apoptosis by blocking BAX/BAK. Germinal center B cells, which are programmed to die if they fail to make a useful antibody, instead accumulate. Indolent waxing/waning lymphadenopathy results. Therapy now includes BCL-2 inhibitors (venetoclax) targeting this exact mechanism." },
      { "text": "It deregulates c-MYC, driving extremely rapid cell proliferation with a 'starry sky' histology", "explanation": "Incorrect. c-MYC deregulation describes the t(8;14) translocation of Burkitt lymphoma, not follicular lymphoma. Burkitt is the fastest-growing human tumor with 'starry sky' histology. This would be the correct answer if the patient had Burkitt lymphoma with a rapidly enlarging jaw or abdominal mass." },
      { "text": "It overexpresses cyclin D1, accelerating G1-to-S phase cell cycle progression", "explanation": "Incorrect. Cyclin D1 overexpression results from the t(11;14) translocation of mantle cell lymphoma, not follicular lymphoma. This would be the correct answer if the patient had MCL with CD5+CD20+CD23-NEGATIVE flow cytometry." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Follicular lymphoma = t(14;18) → BCL-2 overexpression → blocked apoptosis. Venetoclax (BCL-2 inhibitor) targets this mechanism.",
    "pdfPage": 5,
    "pdfQuote": "BCL-2"
  },
  {
    "id": 4,
    "category": "Hematology: Burkitt Histology",
    "questionText": "A lymph node biopsy from an African child with a rapidly enlarging jaw mass shows sheets of medium-sized monomorphic B cells with a high mitotic rate. Scattered throughout the dark sea of malignant cells are pale clear spaces containing macrophages with phagocytosed apoptotic debris, producing a distinct visual pattern. What is this pattern called, and what is its mechanism?",
    "options": [
      { "text": "Pautrier microabscesses — neoplastic T cells clustering within the epidermis", "explanation": "Incorrect. Pautrier microabscesses describe the epidermotropic infiltrates of CD4+ T cells with cerebriform nuclei seen in mycosis fungoides, not Burkitt lymphoma. This would be the correct answer if the biopsy were a skin biopsy showing cutaneous T-cell lymphoma." },
      { "text": "Lacunar cells — RS-cell variants in artifactual lacunar spaces in nodular sclerosing HL", "explanation": "Incorrect. Lacunar cells are seen in NODULAR SCLEROSING Hodgkin lymphoma, not Burkitt. They appear as RS variants surrounded by clear spaces due to formalin retraction. This would be the correct answer if the biopsy showed fibrous bands dividing the node into nodules in a young woman with a mediastinal mass." },
      { "text": "'Starry sky' appearance — tingible body macrophages clearing apoptotic debris in a sea of rapidly proliferating malignant cells", "explanation": "Correct. The 'starry sky' pattern is the histologic hallmark of Burkitt lymphoma. The 'stars' are tingible body macrophages — benign reactive macrophages phagocytosing the abundant apoptotic bodies generated by the extremely high proliferation rate (Ki-67 nearly 100%, the highest of any human tumor). The 'sky' is the dark sea of malignant medium-sized B cells. This appearance, combined with t(8;14) c-MYC and EBV positivity (endemic form), confirms Burkitt." },
      { "text": "Popcorn cells — L&H Reed-Sternberg variants of nodular lymphocyte-predominant Hodgkin lymphoma", "explanation": "Incorrect. Popcorn cells (L&H cells) are the malignant cells of NLPHL — a non-classical Hodgkin lymphoma variant. They are CD20+, CD45+, CD15- CD30- and behave more like a B-cell NHL. This would be the correct answer if the biopsy showed a vaguely nodular pattern with B-cell positive malignant cells in a young male with painless cervical lymphadenopathy." },
      { "text": "Owl-eye nuclei — binucleate Reed-Sternberg cells of classical HL", "explanation": "Incorrect. Owl-eye nuclei describe the binucleate classical Reed-Sternberg cells of Hodgkin lymphoma. They are not the starry sky pattern. This would be the correct answer if the biopsy were diagnostic of classical HL with characteristic RS cells." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Burkitt = 'starry sky' (tingible body macrophages clearing apoptotic debris) + t(8;14) c-MYC + Ki-67 ~100%. Endemic = African jaw + EBV; sporadic = abdominal; immunodeficiency = HIV.",
    "pdfPage": 5,
    "pdfQuote": "starry sky"
  },
  {
    "id": 5,
    "category": "Hematology: MALT Lymphoma Triggers",
    "questionText": "Mucosa-associated lymphoid tissue (MALT) lymphomas arise from chronic antigenic stimulation. Which underlying condition is correctly matched with the organ in which a MALT lymphoma is likely to develop?",
    "options": [
      { "text": "Chronic ulcerative colitis — colonic MALT lymphoma", "explanation": "Incorrect. Ulcerative colitis raises colorectal CARCINOMA risk but is not the classic trigger for MALT lymphoma in the colon. The colonic MALT association is not a classic teaching point. This would be the correct answer if the question were about colorectal cancer surveillance." },
      { "text": "Sjögren syndrome — parotid (salivary gland) MALT lymphoma", "explanation": "Correct. Sjögren syndrome is characterized by chronic lymphocytic infiltration of salivary and lacrimal glands. The persistent antigenic stimulation in the parotid gland creates a population of B cells at risk for clonal expansion and MALT lymphoma development — Sjögren patients have a 16-44 fold increased risk of NHL, especially parotid MALT lymphoma. Other classic MALT associations: H. pylori → gastric MALT (eradication can cure early disease); Hashimoto thyroiditis → thyroid MALT; Chlamydia psittaci → ocular adnexa MALT; Borrelia → cutaneous MALT." },
      { "text": "Chronic hepatitis B infection — splenic marginal zone MALT lymphoma", "explanation": "Incorrect. The classic chronic viral hepatitis-marginal zone lymphoma association is with HEPATITIS C, not B. Even then, the lymphoma is splenic marginal zone or nodal marginal zone, classically not 'splenic MALT.' This would be the correct answer if asking about HCV and lymphoma." },
      { "text": "Celiac disease — gastric MALT lymphoma", "explanation": "Incorrect. Celiac disease predisposes to enteropathy-associated T-cell lymphoma (EATL) of the small bowel and to small bowel adenocarcinoma — not to gastric MALT. The classic gastric MALT trigger is H. pylori. This would be the correct answer if asking about a refractory celiac patient developing EATL." },
      { "text": "Rheumatoid arthritis — pulmonary MALT lymphoma", "explanation": "Incorrect. While RA carries a modestly increased lymphoma risk (especially DLBCL), pulmonary MALT is more classically associated with autoimmune diseases like Sjögren syndrome with secondary lung involvement, not specifically RA. This would be the correct answer if RA-associated DLBCL were the topic." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: MALT lymphoma chronic antigen triggers — H. pylori → gastric; Sjögren → parotid; Hashimoto → thyroid; Chlamydia psittaci → ocular adnexa; Borrelia → skin.",
    "pdfPage": 5,
    "pdfQuote": "MALT"
  },
  {
    "id": 6,
    "category": "Hematology: Bimodal Age Distribution",
    "questionText": "Hodgkin lymphoma is unique among lymphomas for its bimodal age distribution. Which subtype predominantly accounts for the YOUNG ADULT peak (ages 15-35), and which best accounts for the OLDER ADULT peak (ages >55)?",
    "options": [
      { "text": "Young peak: Lymphocyte-depleted | Older peak: Nodular sclerosing", "explanation": "Incorrect. This is reversed: nodular sclerosing dominates the young peak (especially in young women), while mixed cellularity and lymphocyte-depleted are more common in older patients. This would be the correct answer if the demographic patterns of the two subtypes were swapped." },
      { "text": "Young peak: Nodular sclerosing | Older peak: Mixed cellularity (often EBV-associated)", "explanation": "Correct. The young adult peak (15-35) of Hodgkin lymphoma is dominated by NODULAR SCLEROSING HL, classically presenting in young women with an anterior mediastinal mass. The older peak (>55) is enriched for MIXED CELLULARITY HL, which has a stronger association with EBV (~70%) and tends to occur in immunocompromised or socioeconomically disadvantaged populations. Nodular lymphocyte-predominant HL (non-classical) typically presents in young/middle-aged males with peripheral lymphadenopathy." },
      { "text": "Young peak: Burkitt lymphoma | Older peak: Chronic lymphocytic leukemia/SLL", "explanation": "Incorrect. Burkitt and CLL are non-Hodgkin lymphomas — they are not the subtypes responsible for Hodgkin lymphoma's bimodal pattern. This would be the correct answer if the question were about overall lymphoma age distribution rather than HL subtype-specific peaks." },
      { "text": "Young peak: NLPHL | Older peak: Lymphocyte-rich classical HL", "explanation": "Incorrect. While NLPHL does often present in young/middle-aged males, it is not THE dominant subtype of the young peak of HL. Lymphocyte-rich classical HL is rare and is not specifically tied to the older peak. This would be the correct answer if these two subtypes individually dominated each peak, which they do not." },
      { "text": "Young peak: Mantle cell lymphoma | Older peak: Follicular lymphoma", "explanation": "Incorrect. Both MCL and follicular lymphoma are non-Hodgkin lymphomas of older adults; they do not describe HL's bimodal pattern. This would be the correct answer if discussing the typical age of NHL onset." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: HL bimodal — young peak (15-35) dominated by nodular sclerosing (young women, mediastinal); older peak (>55) enriched for mixed cellularity (EBV-associated).",
    "pdfPage": 4,
    "pdfQuote": "bimodal"
  },
  {
    "id": 7,
    "category": "Hematology: NHL Translocation Identification",
    "questionText": "A pathology resident is reviewing four lymphoma specimens. Each shows mature B-cell morphology but different translocations on FISH. Which translocation-to-lymphoma pairing is CORRECT?",
    "options": [
      { "text": "t(8;14) c-MYC → mantle cell lymphoma", "explanation": "Incorrect. t(8;14) deregulates c-MYC and is characteristic of BURKITT lymphoma — not mantle cell. Burkitt features starry sky histology and Ki-67 near 100%. This would be the correct answer if the lymphoma were Burkitt, not MCL." },
      { "text": "t(11;14) cyclin D1 → follicular lymphoma", "explanation": "Incorrect. t(11;14) places cyclin D1 (CCND1) under the IgH enhancer and is characteristic of MANTLE CELL LYMPHOMA — not follicular. Mantle cell is CD5+ CD23-NEGATIVE. This would be the correct answer if the lymphoma were MCL." },
      { "text": "t(14;18) BCL-2 → follicular lymphoma (most common indolent NHL)", "explanation": "Correct. The t(14;18) translocation juxtaposes the BCL-2 anti-apoptotic gene with the IgH enhancer on chromosome 14, producing constitutive BCL-2 overexpression and impaired apoptosis. This translocation is found in ~85% of follicular lymphomas, the most common indolent non-Hodgkin lymphoma. Clinical presentation: waxing/waning painless lymphadenopathy in middle-aged adults. Indolent course; generally incurable but long survival." },
      { "text": "t(2;5) NPM-ALK → diffuse large B-cell lymphoma", "explanation": "Incorrect. The t(2;5) NPM-ALK fusion is characteristic of ANAPLASTIC LARGE CELL LYMPHOMA (ALCL), a T-cell lymphoma — not DLBCL. ALCL cells are strongly CD30+ and are treated with brentuximab. This would be the correct answer if the lymphoma were ALK-positive ALCL." },
      { "text": "t(9;22) BCR-ABL → splenic marginal zone lymphoma", "explanation": "Incorrect. t(9;22) BCR-ABL is the Philadelphia chromosome of CML and a subset of B-ALL; it is not associated with splenic marginal zone lymphoma. This would be the correct answer if the patient had CML or Ph+ ALL." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: NHL translocation cheat sheet — Burkitt t(8;14) c-MYC | Follicular t(14;18) BCL-2 | Mantle cell t(11;14) cyclin D1 | ALK+ ALCL t(2;5) NPM-ALK.",
    "pdfPage": 5,
    "pdfQuote": "t(14;18)"
  },
  {
    "id": 8,
    "category": "Hematology: CLL vs MCL Differentiation",
    "questionText": "Two patients present with lymphocytosis and lymphadenopathy. Flow cytometry on both shows CD5+ CD19+ CD20+ B cells. Which additional marker is the SINGLE BEST first-line discriminator between chronic lymphocytic leukemia (CLL) and mantle cell lymphoma (MCL)?",
    "options": [
      { "text": "CD3 — positive in MCL, negative in CLL", "explanation": "Incorrect. CD3 is a T-cell marker; both CLL and MCL are B-cell malignancies and both are CD3-negative. CD3 is not a discriminator between these two diseases. This would be the correct answer if comparing T-cell vs B-cell origin." },
      { "text": "CD23 — POSITIVE in CLL, NEGATIVE in mantle cell lymphoma", "explanation": "Correct. Both CLL and MCL share the unusual CD5+ B-cell immunophenotype (CD19+, CD20+, CD5+), which makes them confusable on initial flow. CD23 is the workhorse discriminator: CLL is characteristically CD23-POSITIVE while MCL is CD23-NEGATIVE. Confirmatory testing in suspected MCL adds cyclin D1 (positive in MCL from t(11;14), negative in CLL) and SOX11. This distinction is clinically critical because MCL is aggressive (poor prognosis) while CLL is generally indolent." },
      { "text": "CD33 — positive in CLL, negative in MCL", "explanation": "Incorrect. CD33 is a myeloid marker (found on AML blasts); both CLL and MCL are negative. This would be the correct answer if comparing myeloid vs lymphoid malignancy." },
      { "text": "TdT — positive in MCL, negative in CLL", "explanation": "Incorrect. TdT marks immature lymphoblasts (ALL); both CLL and MCL are mature B-cell malignancies and both are TdT-negative. This would be the correct answer if distinguishing acute lymphoblastic leukemia from a mature B-cell lymphoma." },
      { "text": "CD15 — positive in CLL, negative in MCL", "explanation": "Incorrect. CD15 is a marker of Reed-Sternberg cells in classical HL and is not typically expressed by either CLL or MCL. This would be the correct answer if comparing classical HL to one of these B-cell malignancies." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: CLL vs MCL (both CD5+ CD19+ CD20+) — CD23 POSITIVE = CLL (indolent); CD23 NEGATIVE + cyclin D1+ = MCL (aggressive).",
    "pdfPage": 5,
    "pdfQuote": "CD23"
  },
  {
    "id": 9,
    "category": "Hematology: Indolent vs Aggressive NHL Paradox",
    "questionText": "A medical student is confused by the paradox that aggressive non-Hodgkin lymphomas (e.g., DLBCL, Burkitt) are often more CURABLE than indolent ones (e.g., follicular, MALT). Which mechanism best explains this counterintuitive observation?",
    "options": [
      { "text": "Indolent lymphomas have intrinsic resistance to all available chemotherapy regimens", "explanation": "Incorrect. Indolent lymphomas do respond to chemotherapy and can have dramatic temporary responses; the problem is that residual disease persists and recurs. They are not intrinsically chemoresistant in the way that, for example, melanoma traditionally was. This would be the correct answer if indolent lymphomas had no chemosensitivity, which is not the case." },
      { "text": "Aggressive lymphomas have rapidly dividing cells that are highly susceptible to cell-cycle-targeted cytotoxic chemotherapy, allowing curative responses; indolent lymphomas grow slowly and many cells are in G0, escaping these drugs", "explanation": "Correct. Most cytotoxic chemotherapy drugs (alkylators, topoisomerase inhibitors, antimetabolites, taxanes) preferentially kill rapidly dividing cells. Aggressive lymphomas with high proliferation rates (Burkitt Ki-67 ~100%; DLBCL ~60-80%) are highly chemosensitive and can be cured with R-CHOP or DA-EPOCH-R. Indolent lymphomas grow slowly with most cells in G0/G1, escaping these drugs — chemo provides remission but not cure. The teaching: high proliferation = vulnerable to chemo = potentially curable; low proliferation = chemo-resistant = chronic incurable disease." },
      { "text": "Indolent lymphomas always transform to acute leukemia within 5 years of diagnosis", "explanation": "Incorrect. Indolent lymphomas CAN transform (e.g., follicular → DLBCL; CLL → DLBCL = Richter transformation), but this is not a universal 5-year event. Transformation occurs in a minority and confers worse prognosis when it does happen. This would be the correct answer if all indolent lymphomas universally transformed quickly, which is not the case." },
      { "text": "Aggressive lymphomas express CD20 while indolent ones do not, so rituximab works only on the aggressive ones", "explanation": "Incorrect. Both indolent and aggressive B-cell lymphomas express CD20, and rituximab is used in both (R-CHOP for DLBCL, R-bendamustine for follicular, R-CHOP for MCL, etc.). This would be the correct answer if CD20 expression were restricted to aggressive lymphomas, which is incorrect." },
      { "text": "Aggressive lymphomas spontaneously regress, while indolent lymphomas do not", "explanation": "Incorrect. Aggressive lymphomas do not generally spontaneously regress — they grow rapidly and require urgent treatment. Indolent lymphomas occasionally have spontaneous regressions but are usually slowly progressive. This would be the correct answer if disease tempo and spontaneous regression were reversed, which they are not." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Aggressive NHL = high proliferation = chemo-vulnerable = potentially CURABLE (DLBCL, Burkitt). Indolent NHL = low proliferation = chemo-resistant in G0 = INCURABLE but long survival (follicular, MALT).",
    "pdfPage": 5,
    "pdfQuote": "indolent"
  },
  {
    "id": 10,
    "category": "Hematology: Multiple Myeloma vs Waldenstrom Differentiation",
    "questionText": "Both multiple myeloma and Waldenstrom macroglobulinemia are plasma-cell-related neoplasms with monoclonal protein production. Which feature most reliably DISTINGUISHES Waldenstrom from multiple myeloma?",
    "options": [
      { "text": "Presence of a monoclonal protein on serum electrophoresis", "explanation": "Incorrect. Both diseases produce monoclonal gammopathy on SPEP; this is not a discriminator. This would be the correct answer if only one of these diseases had a monoclonal protein." },
      { "text": "Hypercalcemia with lytic bone lesions and renal failure (CRAB criteria)", "explanation": "Incorrect. CRAB features (hyperCalcemia, Renal failure, Anemia, Bone lytic lesions) are characteristic of MULTIPLE MYELOMA, not Waldenstrom. Waldenstrom does NOT typically cause lytic bone lesions or hypercalcemia. This would be the correct answer if asking what features point to MM rather than away from Waldenstrom." },
      { "text": "Monoclonal IgM (not IgG/IgA), with HYPERVISCOSITY syndrome and absence of lytic bone lesions", "explanation": "Correct. Waldenstrom macroglobulinemia is characterized by monoclonal IgM (a large pentameric molecule) produced by lymphoplasmacytoid cells. The pentameric IgM causes HYPERVISCOSITY syndrome (Raynaud, blurred vision, retinal vein 'sausage links,' headache, mucosal bleeding) — a feature distinctly UNCOMMON in MM because MM's IgG/IgA are smaller monomers. Waldenstrom also does NOT typically produce lytic bone lesions or hypercalcemia (unlike MM). >90% of Waldenstrom cases carry the MYD88 L265P mutation. Acute hyperviscosity is managed with PLASMAPHERESIS." },
      { "text": "Presence of Bence-Jones proteins (free light chains) in the urine", "explanation": "Incorrect. Bence-Jones proteins are classic for MULTIPLE MYELOMA (urinary light chains) but can also occur in Waldenstrom in smaller quantities. This is not a clean discriminator. This would be the correct answer if Bence-Jones were unique to one of the two diseases." },
      { "text": "Bone marrow infiltration by plasma cells", "explanation": "Incorrect. Both diseases involve bone marrow infiltration, though by different cells: MM by mature plasma cells (often >10% with CRAB criteria), Waldenstrom by lymphoplasmacytoid cells. This is not the best discriminator. This would be the correct answer if only one disease had marrow involvement." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: MM vs Waldenstrom — MM has IgG/IgA + CRAB (lytic bones, hypercalcemia, renal failure). Waldenstrom has IgM + HYPERVISCOSITY (no lytic bones). MYD88 L265P in Waldenstrom; plasmapheresis for acute hyperviscosity.",
    "pdfPage": 4,
    "pdfQuote": "Waldenstrom"
  },
  {
    "id": 11,
    "category": "Hematology: Burkitt Tumor Lysis Syndrome",
    "questionText": "A 9-year-old African boy presents to a pediatric oncology service with a rapidly enlarging right mandibular mass over 3 weeks. He has had decreased oral intake and a 4 kg weight loss. Exam reveals a firm non-tender 8 cm mass distorting the jaw, with cervical lymphadenopathy. Vitals: T 38.1°C, HR 110, BP 100/60, RR 22. Labs show WBC 12,000 (60% atypical lymphocytes), Hgb 10, platelets 220K, LDH 4,500 (markedly elevated), uric acid 9, creatinine 1.1, potassium 4.6, phosphorus 4.2, calcium 9.0. Biopsy of the jaw mass shows medium-sized monomorphic B cells with a starry sky appearance and Ki-67 of 100%. Which intervention is most critical to initiate BEFORE starting chemotherapy?",
    "options": [
      { "text": "Empiric broad-spectrum antibiotics with vancomycin and cefepime", "explanation": "Incorrect. While the patient has a low-grade fever, there is no clear focus of infection or neutropenia, and antibiotics are not the critical pre-chemotherapy intervention in this scenario. The dominant immediate risk is tumor lysis syndrome from chemotherapy-induced massive cell death. This would be the correct answer if the patient had febrile neutropenia after chemotherapy initiation." },
      { "text": "Aggressive IV hydration and rasburicase to prevent acute tumor lysis syndrome", "explanation": "Correct. This patient has classic ENDEMIC BURKITT LYMPHOMA (African child, jaw mass, starry sky, Ki-67 100%, markedly elevated LDH). Burkitt has the highest spontaneous and chemotherapy-induced TUMOR LYSIS SYNDROME (TLS) risk of any lymphoma due to its enormous tumor burden and near-100% proliferation rate. Massive cytotoxic cell lysis releases intracellular contents: uric acid (→ AKI from urate nephropathy), potassium (→ arrhythmia), phosphorus (→ hypocalcemia from CaPO4 precipitation → AKI). PROPHYLACTIC IV hydration + rasburicase (recombinant urate oxidase that converts uric acid to allantoin) is mandatory BEFORE starting chemotherapy in high-grade lymphoma." },
      { "text": "Begin alkaline diuresis with sodium bicarbonate to enhance methotrexate clearance", "explanation": "Incorrect. While urinary alkalinization can be used for high-dose methotrexate clearance, the dominant pre-chemo concern in this Burkitt patient is tumor lysis syndrome prophylaxis (hydration + rasburicase), not yet methotrexate-specific support. Also, sodium bicarbonate is no longer routinely used in TLS — rasburicase has replaced its role. This would be the correct answer if the patient were actively receiving high-dose methotrexate and needed urinary alkalinization." },
      { "text": "Initiate corticosteroid pulse therapy as the entirety of treatment", "explanation": "Incorrect. While corticosteroids do have activity in lymphoma, they are not curative for Burkitt and are typically a component of combination chemotherapy (e.g., CODOX-M/IVAC, DA-EPOCH-R), not standalone therapy. Steroids alone would also paradoxically initiate tumor lysis without proper prophylaxis. This would be the correct answer if discussing initial steroid response in indolent lymphoma." },
      { "text": "Schedule elective surgical excision of the mandibular mass first, then chemotherapy", "explanation": "Incorrect. Burkitt lymphoma is exquisitely chemosensitive and surgically excising the primary mass first would unnecessarily delay systemic therapy of this rapidly growing tumor. Surgery is generally not part of definitive lymphoma management. This would be the correct answer if the disease were a localized solid tumor like Wilms or a benign neoplasm requiring debulking." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Burkitt lymphoma has the highest tumor lysis syndrome risk of any lymphoma — give aggressive IV hydration + RASBURICASE before chemotherapy. Watch for hyperuricemia, hyperkalemia, hyperphosphatemia, hypocalcemia, and AKI.",
    "pdfPage": 5,
    "pdfQuote": "Burkitt"
  },
  {
    "id": 12,
    "category": "Hematology: CLL Richter Transformation",
    "questionText": "A 72-year-old man with stable Rai stage 1 CLL diagnosed 6 years ago presents with rapidly enlarging cervical lymphadenopathy over the past 2 months, B symptoms (drenching night sweats, 8 kg weight loss), and increasing fatigue. He has been managed with watchful waiting. Vitals: T 38.4°C, HR 96, BP 130/80. Exam reveals a 6 cm right cervical node and matted left axillary nodes; spleen tip 5 cm below the costal margin. Labs: WBC 95,000 (90% lymphocytes), Hgb 9.0, platelets 80K, LDH 1,200 (rising from baseline 220). Excisional biopsy of the cervical node shows sheets of large pleomorphic CD20+ B cells with high mitotic activity that effaces the nodal architecture, distinct from the small-cell CLL infiltrate in adjacent areas. What is the most likely diagnosis?",
    "options": [
      { "text": "Progression of CLL to accelerated phase with proliferation centers", "explanation": "Incorrect. CLL accelerated phase ('CLL with proliferation centers') refers to expanded proliferation centers within otherwise typical small-cell CLL — not transformation to a sheet of large cells with distinct morphology. The biopsy here shows true transformation, not just proliferation centers. This would be the correct answer if the biopsy showed an expansion of typical CLL with increased numbers of paraimmunoblasts but maintained CLL morphology." },
      { "text": "Richter transformation of CLL to diffuse large B-cell lymphoma", "explanation": "Correct. Richter transformation is the development of an aggressive lymphoma (most commonly DLBCL, less commonly classical Hodgkin lymphoma) in a patient with previously known CLL/SLL. It occurs in ~5-10% of CLL patients and is heralded by: (1) rapidly enlarging or asymmetric lymphadenopathy, (2) constitutional B symptoms, (3) rising LDH, and (4) cytopenias. Risk factors include TP53 mutation, unmutated IGHV, and treatment history. The biopsy showing sheets of large CD20+ B cells with distinct morphology from background CLL confirms the diagnosis. Prognosis is poor (median survival <1 year) compared to indolent CLL. Treatment involves intensified chemoimmunotherapy or stem cell transplant." },
      { "text": "New primary follicular lymphoma unrelated to the CLL", "explanation": "Incorrect. A new follicular lymphoma is much less likely than transformation of the underlying CLL in this clinical context (rapidly enlarging nodes, rising LDH, B symptoms). The biopsy showing large pleomorphic B cells is also inconsistent with follicular lymphoma, which has a characteristic nodular pattern of small cleaved cells and centroblasts. This would be the correct answer if the biopsy showed a nodular pattern of small cleaved cells with t(14;18)." },
      { "text": "Mantle cell lymphoma developing de novo", "explanation": "Incorrect. MCL would typically show a uniform population of small-to-medium CD5+ B cells with CD23-NEGATIVE phenotype and cyclin D1 positivity, not sheets of large pleomorphic cells. The clinical context strongly favors Richter transformation. This would be the correct answer if biopsy showed CD5+ CD20+ CD23-NEGATIVE cyclin D1+ cells with classic MCL morphology." },
      { "text": "Reactive lymphadenopathy from a viral illness", "explanation": "Incorrect. Reactive lymphadenopathy does not typically produce 6 cm matted nodes, B symptoms, splenomegaly, or sheets of large pleomorphic B cells on biopsy. The clinical picture and biopsy findings are diagnostic of malignant transformation. This would be the correct answer in a healthy patient with mild self-limited reactive cervical lymphadenitis." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Richter transformation = CLL transforms to aggressive lymphoma (usually DLBCL). Suspect when CLL patient develops rapidly enlarging nodes + B symptoms + rising LDH. Poor prognosis.",
    "pdfPage": 2,
    "pdfQuote": "Richter"
  },
  {
    "id": 13,
    "category": "Hematology: H. pylori MALT Treatment",
    "questionText": "A 55-year-old woman presents with chronic epigastric pain, early satiety, and a 5 kg weight loss over 3 months. Upper endoscopy reveals diffuse nodularity and an ulcerated lesion in the gastric antrum. Gastric biopsy shows infiltration by small lymphoid cells with plasmacytoid features in a marginal zone pattern; rapid urease test on the biopsy is positive. Endoscopic ultrasound shows the lesion confined to the gastric mucosa and submucosa without regional lymphadenopathy. Cytogenetics show absence of the t(11;18) translocation. Which is the most appropriate FIRST-LINE therapy?",
    "options": [
      { "text": "Surgical gastrectomy with regional lymph node dissection", "explanation": "Incorrect. Surgical gastrectomy is unnecessary and overly morbid for early-stage gastric MALT lymphoma, which is highly chemosensitive and often responds to H. pylori eradication alone. Surgery would be considered only for complications (perforation, refractory bleeding) or in advanced disease. This would be the correct answer if this were gastric adenocarcinoma with regional involvement." },
      { "text": "Triple therapy for H. pylori eradication (PPI + clarithromycin + amoxicillin) with endoscopic surveillance", "explanation": "Correct. Early-stage gastric MALT lymphoma associated with H. pylori is unique in oncology: H. PYLORI ERADICATION ALONE can be curative in 60-90% of patients with localized disease (stage IE/IIE) WITHOUT t(11;18). The chronic H. pylori antigenic stimulation drives the lymphoma; removing the antigen allows the clone to regress. Triple therapy (PPI + clarithromycin + amoxicillin for 14 days) is standard. Patients with t(11;18) translocation are less likely to respond to eradication alone and typically need additional therapy (rituximab, radiation, or chemoimmunotherapy). Endoscopic surveillance is needed to confirm regression and watch for recurrence." },
      { "text": "Immediate R-CHOP chemotherapy (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone)", "explanation": "Incorrect. R-CHOP is the standard treatment for AGGRESSIVE B-cell lymphomas like DLBCL — but this patient has a low-grade indolent MALT lymphoma with a favorable feature (H. pylori positive, no t(11;18), localized disease). R-CHOP would be overtreatment with unnecessary toxicity. This would be the correct answer if the biopsy showed DLBCL or if the MALT had transformed to DLBCL." },
      { "text": "Local radiation therapy to the gastric region only", "explanation": "Incorrect. While radiation IS an effective second-line therapy for H. pylori-negative MALT lymphoma or for cases that fail H. pylori eradication, first-line therapy in this H. pylori-positive patient with no t(11;18) is antibiotic eradication. Radiation is reserved for non-responders or relapses. This would be the correct answer if the patient had H. pylori-negative gastric MALT or t(11;18)-positive MALT that did not respond to eradication." },
      { "text": "Single-agent rituximab infusions every 3 weeks for 6 cycles", "explanation": "Incorrect. Single-agent rituximab is reasonable for MALT lymphoma that has failed H. pylori eradication, but is not first-line in an antibiotic-naive patient with H. pylori-positive localized disease. The standard initial approach is eradication therapy. This would be the correct answer if the patient had relapsed after H. pylori eradication." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Gastric MALT lymphoma + H. pylori positive + no t(11;18) → H. pylori eradication alone can be CURATIVE in 60-90%. Unique scenario where antibiotics treat a lymphoma!",
    "pdfPage": 5,
    "pdfQuote": "MALT"
  },
  {
    "id": 14,
    "category": "Hematology: Primary CNS Lymphoma in HIV",
    "questionText": "A 42-year-old man with poorly controlled HIV (CD4 count 35 cells/µL, viral load 250,000) presents with a 6-week history of progressive headache, confusion, and right-sided weakness. He is not on antiretroviral therapy. Vitals: T 37.8°C, BP 132/78, HR 88. Exam reveals right hemiparesis and a positive Babinski. MRI brain shows a single 4 cm ring-enhancing lesion in the left periventricular white matter. CSF analysis is positive for Epstein-Barr virus (EBV) by PCR. Toxoplasma IgG is negative. Which is the most likely diagnosis?",
    "options": [
      { "text": "Cerebral toxoplasmosis with reactivation", "explanation": "Incorrect. Toxoplasmosis is a major differential for ring-enhancing lesions in HIV/AIDS, but this patient has NEGATIVE Toxoplasma IgG, making prior infection (and thus reactivation) unlikely. Toxoplasmosis also typically presents with MULTIPLE ring-enhancing lesions rather than a single lesion, and EBV PCR in CSF would be negative. This would be the correct answer if the patient had positive Toxoplasma IgG, multiple lesions, and negative EBV PCR." },
      { "text": "Primary CNS lymphoma (EBV-driven diffuse large B-cell lymphoma)", "explanation": "Correct. Primary CNS lymphoma (PCNSL) in HIV is essentially always EBV-driven diffuse large B-cell lymphoma arising in the brain. Classic clues: (1) ADVANCED HIV (CD4 typically <50), (2) often a SINGLE periventricular ring-enhancing lesion (vs multiple in toxoplasmosis), (3) NEGATIVE Toxoplasma serology, (4) POSITIVE EBV PCR in CSF (sensitive and specific in HIV PCNSL). MRI alone cannot distinguish PCNSL from toxoplasmosis in immunocompromised patients, but the combination of clinical features here strongly suggests lymphoma. Diagnostic confirmation is by stereotactic biopsy. Treatment includes high-dose methotrexate-based chemotherapy and aggressive ART. SPECT or PET can show increased uptake (lymphoma) vs decreased uptake (toxoplasmosis) as an additional discriminator." },
      { "text": "Progressive multifocal leukoencephalopathy (PML)", "explanation": "Incorrect. PML is caused by JC virus reactivation in immunocompromised patients and presents with multifocal white-matter lesions that DO NOT enhance with contrast (because the BBB is preserved). This patient has a ring-ENHANCING lesion. This would be the correct answer if MRI showed non-enhancing multifocal white-matter lesions and JC virus PCR were positive in CSF." },
      { "text": "Cryptococcal meningitis with mass-like cryptococcoma", "explanation": "Incorrect. Cryptococcal CNS disease typically presents with subacute meningitis (headache, fever, altered mental status) and the CSF analysis shows positive cryptococcal antigen, elevated opening pressure, and yeast on India ink staining. Cryptococcomas (mass lesions) are uncommon and the CSF EBV PCR would not be positive. This would be the correct answer if the CSF were positive for cryptococcal antigen rather than EBV PCR." },
      { "text": "HIV-associated dementia (HAND) with focal cortical atrophy", "explanation": "Incorrect. HIV-associated neurocognitive disorder typically presents with subacute or chronic cognitive decline (memory, attention) and shows diffuse cortical atrophy on MRI, not a focal ring-enhancing lesion. The acute focal neurology and ring-enhancing mass in this case are inconsistent with HAND. This would be the correct answer if the MRI showed diffuse atrophy and the clinical picture were chronic cognitive decline without focal neurologic deficits." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Primary CNS lymphoma in HIV = EBV-driven DLBCL of the brain. Clues: CD4 <50, SINGLE periventricular ring-enhancing lesion, EBV+ in CSF, Toxo IgG negative. Distinguish from toxoplasmosis (multiple lesions, Toxo IgG+).",
    "pdfPage": 5,
    "pdfQuote": "EBV"
  },
  {
    "id": 15,
    "category": "Hematology: Nodular Sclerosing HL Presentation",
    "questionText": "A 24-year-old female college student presents with a 2-month history of progressively worsening shortness of breath, dry cough, and a sensation of facial fullness when bending over. She denies fever or weight loss. Vitals: T 37.0°C, HR 92, BP 110/70, RR 18, O2 sat 96% on room air. Exam reveals fullness of the supraclavicular fossa and dilated neck veins. CBC normal. ESR 65 (elevated). Chest CT shows a 9 cm anterior mediastinal mass abutting the SVC with mild compression but no thrombosis. Excisional biopsy of a supraclavicular node shows large mononuclear cells in characteristic 'lacunar' spaces surrounded by fibrous bands dividing the node into nodules, with CD15+ CD30+ cells admixed with reactive lymphocytes. Which is the most likely diagnosis?",
    "options": [
      { "text": "T-cell acute lymphoblastic leukemia (T-ALL)", "explanation": "Incorrect. T-ALL classically presents in adolescent males with an anterior mediastinal mass (thymic) and SVC syndrome, similar in some features to nodular sclerosing HL. However, T-ALL would show TdT-positive lymphoblasts on biopsy (not lacunar cells with fibrous bands and CD15+CD30+ cells), and is much more aggressive at presentation. This would be the correct answer if the biopsy showed sheets of TdT+ CD3+ blasts." },
      { "text": "Primary mediastinal large B-cell lymphoma (PMLBCL)", "explanation": "Incorrect. PMLBCL also presents in young women with a bulky anterior mediastinal mass and SVC symptoms, making it a key differential. However, PMLBCL would show sheets of large CD19+ CD20+ CD30 variably positive B cells with fibrosis but NOT the classic lacunar cells, fibrous nodular bands, and CD15+CD30+CD45- RS variants of nodular sclerosing HL. This would be the correct answer if biopsy showed diffuse sheets of large B cells without RS cells or lacunar morphology." },
      { "text": "Nodular sclerosing classical Hodgkin lymphoma", "explanation": "Correct. The clinical and pathologic features classically match nodular sclerosing HL: (1) YOUNG WOMAN (most common demographic), (2) anterior MEDIASTINAL MASS with mild SVC symptoms, (3) histology showing LACUNAR CELLS (RS variants in formalin-retraction artifactual spaces) and FIBROUS BANDS dividing the node into nodules, (4) immunophenotype CD15+ CD30+ (classical HL pattern). NSHL accounts for ~70% of classical HL cases. Treatment is ABVD chemotherapy ± radiation; cure rates are excellent (>90%) in early stage. Watch for emerging targeted agents — brentuximab vedotin (anti-CD30 antibody-drug conjugate) is now used in front-line and relapsed disease." },
      { "text": "Granulomatous mediastinitis from histoplasmosis", "explanation": "Incorrect. Histoplasmosis can cause mediastinal lymphadenopathy and even fibrosing mediastinitis with SVC syndrome, particularly in the Ohio/Mississippi River valleys. However, the biopsy would show granulomas with yeast forms, not lacunar cells with fibrous nodular bands and CD15+CD30+ cells. This would be the correct answer if the biopsy showed necrotizing granulomas with intracellular yeast." },
      { "text": "Reactive thymic hyperplasia from infectious mononucleosis", "explanation": "Incorrect. Mono can cause cervical lymphadenopathy and mild splenomegaly but does not produce a 9 cm anterior mediastinal mass with SVC symptoms. The biopsy findings of lacunar cells and fibrous bands are also incompatible with reactive thymic hyperplasia. This would be the correct answer if the patient had typical mono (pharyngitis, cervical adenopathy, atypical lymphocytes, positive heterophile)." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Young woman + anterior mediastinal mass + LACUNAR cells in fibrous nodular bands + CD15+CD30+ = nodular sclerosing HL (~70% of classical HL).",
    "pdfPage": 4,
    "pdfQuote": "nodular sclerosis"
  },
  {
    "id": 16,
    "category": "Hematology: Sezary Syndrome",
    "questionText": "A 65-year-old man with an 8-year history of chronic pruritic patches and plaques on his trunk (previously diagnosed as 'psoriasis' and treated with topical steroids) now presents with erythroderma involving >80% of his body surface area, intense pruritus, and lymphadenopathy. Vitals: T 38.0°C, HR 100, BP 130/80. Exam shows diffuse skin erythema with scaling, generalized lymphadenopathy, and hepatosplenomegaly. CBC shows WBC 25,000 with atypical lymphocytes; flow cytometry of peripheral blood shows CD4+ CD7-NEGATIVE T cells with cerebriform nuclei. Skin biopsy reveals Pautrier microabscesses (clusters of atypical lymphocytes in the epidermis). Which is the most likely diagnosis?",
    "options": [
      { "text": "Mycosis fungoides (classic patch/plaque stage)", "explanation": "Incorrect. While the patient does have a history of mycosis fungoides (the chronic pruritic patches and plaques), the current presentation with ERYTHRODERMA (>80% body surface), peripheral blood involvement (atypical CD4+ T cells with cerebriform nuclei), and lymphadenopathy represents PROGRESSION to Sezary syndrome — the leukemic phase. The diagnosis is now Sezary, not just mycosis fungoides. This would be the correct answer if the patient had only skin patches/plaques without circulating malignant cells or erythroderma." },
      { "text": "Sezary syndrome (leukemic phase of cutaneous T-cell lymphoma)", "explanation": "Correct. Sezary syndrome is the leukemic/disseminated phase of mycosis fungoides, defined by the triad of: (1) ERYTHRODERMA (>80% body surface erythema), (2) GENERALIZED LYMPHADENOPATHY, and (3) CIRCULATING SEZARY CELLS (malignant CD4+ T cells with cerebriform nuclei in the peripheral blood — typically >1000/µL or >5% of lymphocytes). Loss of CD7 on these cells is characteristic. Skin biopsy shows Pautrier microabscesses. Prognosis is poor (median survival 2-4 years). Treatment: PUVA, total skin electron beam, extracorporeal photopheresis, romidepsin (HDAC inhibitor), or brentuximab if CD30+." },
      { "text": "Adult T-cell leukemia/lymphoma (HTLV-1 associated)", "explanation": "Incorrect. ATLL is also a CD4+ T-cell malignancy but classically shows LYTIC BONE LESIONS, HYPERCALCEMIA, hepatosplenomegaly, and characteristic 'FLOWER CELLS' (multilobed nuclei) on peripheral smear. ATLL is also associated with HTLV-1 (endemic in Japan, Caribbean) and does not typically present with the chronic cutaneous patch/plaque progression to erythroderma seen here. This would be the correct answer if the patient had lytic bone lesions, hypercalcemia, and flower cells with positive HTLV-1 serology." },
      { "text": "Atopic dermatitis with secondary bacterial infection", "explanation": "Incorrect. Atopic dermatitis does not produce circulating atypical CD4+ T cells with cerebriform nuclei or Pautrier microabscesses on biopsy. The chronic progression from pruritic patches to erythroderma with peripheral blood and nodal involvement is inconsistent with atopic dermatitis. This would be the correct answer if biopsy showed spongiotic dermatitis with normal lymphocytes." },
      { "text": "Drug-induced erythroderma (DRESS syndrome)", "explanation": "Incorrect. DRESS (drug reaction with eosinophilia and systemic symptoms) typically begins 2-8 weeks after a culprit drug (anticonvulsants, sulfa, allopurinol), and skin biopsy shows reactive lymphocytes, not malignant CD4+ T cells with cerebriform nuclei. The 8-year history of chronic skin lesions also predates any acute drug exposure. This would be the correct answer if the patient had a clear recent drug exposure with reactive infiltrate on biopsy." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Sezary syndrome = leukemic phase of mycosis fungoides. Triad: (1) erythroderma >80% body surface, (2) generalized lymphadenopathy, (3) circulating Sezary cells (CD4+ cerebriform nuclei, CD7-loss). Skin biopsy: Pautrier microabscesses.",
    "pdfPage": 6,
    "pdfQuote": "Sezary"
  },
  {
    "id": 17,
    "category": "Hematology: Waldenstrom Hyperviscosity Management",
    "questionText": "A 68-year-old woman presents to the ED with blurred vision, severe headache, nosebleeds, and episodic confusion that began earlier today. She also reports months of fatigue and intermittent Raynaud symptoms. Vitals: T 37.2°C, BP 142/88, HR 80, RR 16. Funduscopic exam shows dilated, segmented retinal veins ('sausage links') with retinal hemorrhages. Labs: Hgb 8.5, WBC 4.2, platelets 110K, BUN 24, Cr 1.2, total protein 11.2 (markedly elevated). SPEP shows a large monoclonal IgM spike (kappa). Serum viscosity is 6.0 cP (normal <1.8). Bone marrow biopsy shows infiltration by lymphoplasmacytoid cells with positive MYD88 L265P mutation. Which is the most appropriate IMMEDIATE intervention to manage her acute symptoms?",
    "options": [
      { "text": "Begin oral ibrutinib (BTK inhibitor) at full dose immediately", "explanation": "Incorrect. While ibrutinib is now first-line systemic therapy for Waldenstrom macroglobulinemia (especially in MYD88 L265P-mutant disease), it takes time to reduce IgM levels and does NOT acutely resolve the hyperviscosity syndrome that is causing imminent neurologic and ophthalmologic damage. The acute medical emergency requires rapid mechanical removal of the offending IgM, not delayed pharmacologic suppression. This would be the correct answer for definitive long-term management after the acute hyperviscosity is addressed." },
      { "text": "Aggressive IV hydration with normal saline alone", "explanation": "Incorrect. IV hydration may modestly improve symptoms but does not remove the high-molecular-weight IgM driving hyperviscosity. Aggressive hydration in the setting of severe hyperviscosity is also potentially harmful because it can precipitate heart failure without addressing the underlying problem. This would be the correct answer for milder symptoms while definitive therapy is arranged." },
      { "text": "PLASMAPHERESIS (plasma exchange) to acutely remove circulating IgM", "explanation": "Correct. Symptomatic hyperviscosity in Waldenstrom macroglobulinemia (manifested by neurologic symptoms, retinal hemorrhages with 'sausage link' vein dilation, mucosal bleeding) is a MEDICAL EMERGENCY. PLASMAPHERESIS rapidly removes the offending high-molecular-weight pentameric IgM, dramatically reducing serum viscosity and improving symptoms within hours. Because IgM is largely intravascular (its large size keeps it from distributing into tissues), plasmapheresis is particularly effective. After acute stabilization, definitive systemic therapy (ibrutinib, rituximab + bendamustine, or rituximab + cyclophosphamide/dexamethasone) is initiated to reduce IgM production." },
      { "text": "Emergent radiation therapy to the bone marrow", "explanation": "Incorrect. Radiation does not acutely reduce the circulating IgM and is not standard therapy for Waldenstrom. The lymphoplasmacytic infiltrate is systemic, making whole-marrow radiation inappropriate. This would be the correct answer in localized solid tumors or limited-stage indolent lymphomas that respond to focal radiation." },
      { "text": "Single-agent rituximab monotherapy infusion now", "explanation": "Incorrect. Rituximab is an important component of definitive Waldenstrom therapy but takes weeks to reduce IgM levels. More importantly, rituximab can paradoxically cause an IgM 'FLARE' (transient rise) in the first 1-2 months in many Waldenstrom patients, potentially WORSENING hyperviscosity. For this reason, plasmapheresis is performed first when hyperviscosity is present, and rituximab is sometimes delayed or given with extra precautions in patients with very high IgM levels. This would be the correct answer for low-IgM Waldenstrom without acute hyperviscosity." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Acute hyperviscosity in Waldenstrom = PLASMAPHERESIS now (rapidly removes intravascular IgM). Then definitive therapy with ibrutinib or R-bendamustine. Beware of rituximab IgM flare worsening hyperviscosity.",
    "pdfPage": 5,
    "pdfQuote": "hyperviscosity"
  },
  {
    "id": 18,
    "category": "Hematology: DLBCL First-Line Therapy",
    "questionText": "A 64-year-old man presents with rapidly enlarging painless right cervical lymphadenopathy over 6 weeks, drenching night sweats, and 7 kg weight loss. Vitals: T 38.1°C, HR 96, BP 138/82. Exam reveals a 5 cm right cervical node and left axillary nodes; no hepatosplenomegaly. Excisional biopsy shows diffuse effacement of nodal architecture by sheets of large CD20+ CD19+ Bcl-6+ MUM-1+ B cells with high mitotic activity (Ki-67 80%). FISH for c-MYC and BCL-2 rearrangements is negative ('non-double-hit'). PET/CT shows multiple FDG-avid nodes above and below the diaphragm. Echocardiogram shows EF 60%. Which is the most appropriate first-line treatment regimen?",
    "options": [
      { "text": "Watchful waiting with serial CT every 3 months", "explanation": "Incorrect. DLBCL is an AGGRESSIVE non-Hodgkin lymphoma that grows rapidly and is fatal within months if untreated. Watchful waiting is appropriate ONLY for indolent lymphomas (follicular, MALT) in asymptomatic patients — not for aggressive lymphomas. This would be the correct answer if the patient had asymptomatic low-burden follicular lymphoma with no GELF criteria for treatment." },
      { "text": "R-CHOP (rituximab + cyclophosphamide + doxorubicin + vincristine + prednisone) for 6 cycles", "explanation": "Correct. R-CHOP remains the standard first-line therapy for DLBCL (the most common NHL in adults). The regimen combines: RITUXIMAB (anti-CD20 monoclonal antibody — flipped the curve for B-cell lymphomas), CYCLOPHOSPHAMIDE (alkylator), DOXORUBICIN/Hydroxydaunorubicin (anthracycline, requires baseline EF assessment — the patient's EF 60% is adequate), VINCRISTINE/Oncovin (vinca alkaloid), PREDNISONE (steroid). Six cycles for advanced-stage disease. Cure rates ~60-70% in standard-risk DLBCL. Recently, polatuzumab vedotin (anti-CD79b ADC) has replaced vincristine in 'Pola-R-CHP' for some patients based on the POLARIX trial. Double-hit lymphomas (c-MYC + BCL-2 rearrangements) often require more intensive regimens like DA-EPOCH-R." },
      { "text": "Allogeneic stem cell transplant as first-line therapy", "explanation": "Incorrect. Allogeneic transplant is not first-line therapy for newly diagnosed DLBCL; it is reserved for relapsed/refractory disease after multiple lines of therapy fail, often after autologous transplant. This would be the correct answer in refractory disease setting after failure of CAR-T or autologous SCT." },
      { "text": "Single-agent ibrutinib (BTK inhibitor) for 12 months", "explanation": "Incorrect. Ibrutinib has activity in some B-cell malignancies (CLL, MCL, Waldenstrom, MZL, ABC-subtype DLBCL) but is not first-line monotherapy for DLBCL. R-CHOP is the standard. Ibrutinib has been studied as an addition to R-CHOP in non-GCB DLBCL with limited overall benefit. This would be the correct answer for relapsed CLL or first-line MCL." },
      { "text": "Single-agent venetoclax (BCL-2 inhibitor) indefinitely", "explanation": "Incorrect. Venetoclax is highly effective in CLL and some BCL-2-rearranged lymphomas but is not first-line monotherapy for DLBCL. The standard remains R-CHOP-based chemoimmunotherapy. This would be the correct answer for relapsed CLL." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: DLBCL first-line = R-CHOP × 6 (rituximab + cyclophosphamide + doxorubicin + vincristine + prednisone). Check EF before doxorubicin. Cure ~60-70%. Double-hit lymphoma (MYC + BCL-2) → DA-EPOCH-R.",
    "pdfPage": 5,
    "pdfQuote": "diffuse large B-cell"
  },
  {
    "id": 19,
    "category": "Hematology: Endemic Burkitt Co-Infections",
    "questionText": "A 7-year-old boy from rural Uganda presents to a regional clinic with a 4-week history of a rapidly enlarging mass distorting the right side of his jaw, causing tooth displacement and difficulty eating. He has chronic intermittent fevers and a history of multiple episodes of malaria documented over the past 3 years. Vitals: T 37.8°C, HR 110, BP 100/65. Exam shows a 9 cm firm mass of the right mandible without overlying skin changes; mild splenomegaly. Labs show Hgb 9.0, WBC 8.5, platelets 230K, LDH markedly elevated. FNA of the mass is performed. Cytogenetics reveal t(8;14). Tumor cell EBV LMP-1 stain is strongly positive. Which TWO co-factors are most strongly implicated in the pathogenesis of his specific variant of this lymphoma?",
    "options": [
      { "text": "HIV co-infection and HPV exposure", "explanation": "Incorrect. HIV is implicated in the IMMUNODEFICIENCY variant of Burkitt (not endemic), and HPV is associated with cervical/oropharyngeal carcinoma, not Burkitt lymphoma. This patient's profile (rural African child, jaw mass, recurrent malaria) is classic endemic Burkitt, not immunodeficiency-associated. This would be the correct answer if the patient had HIV and was developing immunodeficiency-associated Burkitt." },
      { "text": "Epstein-Barr virus (EBV) and chronic Plasmodium falciparum malaria infection", "explanation": "Correct. ENDEMIC BURKITT lymphoma in equatorial Africa is strongly associated with two co-factors: (1) EBV INFECTION (present in ~95% of endemic cases; EBV LMP-1 drives proliferation), and (2) CHRONIC P. FALCIPARUM MALARIA (causes B-cell hyperplasia, impaired T-cell control of EBV, and AID-mediated genomic instability that promotes c-MYC translocations). The geographic distribution of endemic Burkitt overlaps almost perfectly with the holoendemic malaria belt of equatorial Africa. The classic clinical presentation is a JAW or facial mass in a child age 4-7. The t(8;14) c-MYC translocation is universal across all Burkitt variants (endemic, sporadic, immunodeficiency-associated)." },
      { "text": "Cytomegalovirus (CMV) and HHV-8 (Kaposi's sarcoma virus)", "explanation": "Incorrect. Neither CMV nor HHV-8 is implicated in endemic Burkitt lymphoma. HHV-8 causes Kaposi sarcoma and primary effusion lymphoma. CMV is a TORCH infection and reactivates in immunocompromised patients. This would be the correct answer if the patient had HHV-8-driven Kaposi or PEL." },
      { "text": "HTLV-1 and chronic Strongyloides infection", "explanation": "Incorrect. HTLV-1 is associated with adult T-cell leukemia/lymphoma (endemic in Japan and the Caribbean, not equatorial Africa) and HTLV-1 sometimes accelerates Strongyloides hyperinfection — neither has a defined role in endemic Burkitt. This would be the correct answer if the patient had ATLL with disseminated strongyloidiasis." },
      { "text": "Hepatitis C virus (HCV) and chronic schistosomiasis", "explanation": "Incorrect. HCV is associated with splenic marginal zone lymphoma and HCC, not Burkitt. Schistosomiasis is associated with squamous cell carcinoma of the bladder (S. haematobium) and chronic hepatosplenic disease (S. mansoni/japonicum), but not Burkitt lymphoma. This would be the correct answer if asking about HCV-associated lymphoma or schistosomiasis-related bladder cancer." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Endemic Burkitt = African child + JAW mass + t(8;14) c-MYC + EBV (~95%) + chronic P. falciparum malaria co-factor. Geographic overlap with malaria belt is the clue.",
    "pdfPage": 5,
    "pdfQuote": "endemic"
  },
  {
    "id": 20,
    "category": "Hematology: Brentuximab Vedotin Mechanism",
    "questionText": "A 28-year-old man with relapsed classical Hodgkin lymphoma (nodular sclerosing subtype, previously treated with ABVD) is being started on a targeted antibody-drug conjugate that exploits a specific surface marker on Reed-Sternberg cells. The drug delivers a tubulin-disrupting payload (monomethyl auristatin E) preferentially to these cells. Which target does this drug exploit?",
    "options": [
      { "text": "CD20 — used by rituximab in B-cell non-Hodgkin lymphomas", "explanation": "Incorrect. CD20 is the target of rituximab, used in B-cell NHLs (DLBCL, follicular, MCL, CLL) and a few other conditions. However, classical Reed-Sternberg cells are characteristically CD20-NEGATIVE (or only weakly positive), so rituximab is not generally effective in classical HL. Rituximab IS used in NLPHL (which is CD20+). This would be the correct answer if the patient had a CD20+ B-cell NHL or NLPHL." },
      { "text": "CD30 — used by brentuximab vedotin in classical Hodgkin lymphoma and ALK+ ALCL", "explanation": "Correct. BRENTUXIMAB VEDOTIN is an anti-CD30 monoclonal antibody conjugated to MONOMETHYL AURISTATIN E (MMAE), a microtubule-disrupting agent. CD30 (Ki-1) is strongly expressed on Reed-Sternberg cells of classical Hodgkin lymphoma and on the malignant cells of anaplastic large cell lymphoma (ALCL). Upon binding CD30 on the tumor cell surface, the conjugate is internalized and the MMAE payload is released intracellularly, killing the cancer cell while sparing CD30-negative tissues. Brentuximab is now used in front-line classical HL (A-AVD instead of ABVD in advanced stage) and in relapsed HL or ALCL. It is also used in CD30+ peripheral T-cell lymphomas and CD30+ mycosis fungoides/Sezary." },
      { "text": "CD52 — used by alemtuzumab in T-cell prolymphocytic leukemia", "explanation": "Incorrect. CD52 is the target of alemtuzumab, used historically in CLL and currently in T-cell prolymphocytic leukemia. CD52 is broadly expressed on lymphocytes and depletion causes profound immunosuppression. Reed-Sternberg cells do not specifically express CD52 as a therapeutic target. This would be the correct answer if the patient had T-PLL." },
      { "text": "CD79b — used by polatuzumab vedotin in DLBCL", "explanation": "Incorrect. CD79b is the target of polatuzumab vedotin, used in relapsed DLBCL and now in front-line DLBCL (Pola-R-CHP regimen, POLARIX trial). Classical HL Reed-Sternberg cells are not CD79b-expressing in a therapeutically meaningful way. This would be the correct answer if the patient had DLBCL receiving Pola-R-CHP." },
      { "text": "BCMA — used by belantamab mafodotin in multiple myeloma", "explanation": "Incorrect. BCMA (B-cell maturation antigen) is highly expressed on plasma cells and is the target of multiple anti-myeloma therapies (belantamab, CAR-T cells like idecabtagene/ciltacabtagene, bispecific antibodies). Reed-Sternberg cells do not express BCMA. This would be the correct answer if the patient had multiple myeloma." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Brentuximab vedotin = anti-CD30 antibody + MMAE (microtubule-disrupting payload). Used in classical HL, ALCL, and CD30+ peripheral T-cell or cutaneous lymphomas. Front-line HL: A-AVD replaces ABVD in advanced stage.",
    "pdfPage": 4,
    "pdfQuote": "CD30"
  },
  {
    "id": 21,
    "category": "Hematology: HL vs NHL",
    "questionText": "Which feature most reliably distinguishes HODGKIN lymphoma from NON-HODGKIN lymphoma?",
    "options": [
      { "text": "B symptoms (fever, weight loss, night sweats)", "explanation": "Incorrect. B symptoms can occur in BOTH HL and NHL; they are not specific." },
      { "text": "Presence of Reed-Sternberg cells (CD15+ CD30+ binucleate 'owl-eye' cells)", "explanation": "Correct. Reed-Sternberg cells are the pathognomonic finding of classical Hodgkin lymphoma. They are large binucleate cells with prominent eosinophilic nucleoli ('owl-eye' appearance), expressing CD15 and CD30 (but NOT CD45 or B-cell markers like CD20). RS cells are vastly outnumbered by reactive inflammatory cells, which is why HL has a low malignant cell count compared to NHL." },
      { "text": "Lymphadenopathy", "explanation": "Incorrect. Both HL and NHL cause lymphadenopathy." },
      { "text": "Splenomegaly", "explanation": "Incorrect. Can occur in both." },
      { "text": "Bone marrow involvement", "explanation": "Incorrect. NHL more commonly involves marrow at diagnosis than HL, but bone marrow involvement is not the defining feature." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "REED-STERNBERG cells (CD15+CD30+, 'owl-eye' binucleate) = Hodgkin lymphoma. CD45- and CD20- on classical HL — opposite of B-cell NHL.",
    "pdfPage": 4,
    "pdfQuote": "Reed-Sternberg"
  },
  {
    "id": 22,
    "category": "Hematology: HL vs NHL Spread",
    "questionText": "Which is true regarding the SPREAD of Hodgkin lymphoma compared to non-Hodgkin lymphoma?",
    "options": [
      { "text": "HL spreads contiguously from one nodal group to adjacent ones; NHL spreads in a 'skip' pattern", "explanation": "Correct. Classical HL classically spreads in an orderly, contiguous fashion from one lymph node group to the next anatomically adjacent group (e.g., cervical → mediastinal → para-aortic). This pattern allows curative radiation in early-stage disease. NHL is more likely to involve multiple non-contiguous nodal sites at presentation and to involve extranodal sites." },
      { "text": "HL spreads in a 'skip' pattern; NHL spreads contiguously", "explanation": "Incorrect. This is reversed." },
      { "text": "Both spread identically", "explanation": "Incorrect. The spread patterns are notably different and a key clinical distinction." },
      { "text": "HL never spreads to extranodal sites", "explanation": "Incorrect. HL can involve extranodal sites in advanced disease; NHL just does it more often." },
      { "text": "NHL is always contained to one lymph node group at presentation", "explanation": "Incorrect. NHL is often widespread at presentation." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "HL = contiguous orderly spread (radiation curable). NHL = scattered, often multiple nodal groups + extranodal at diagnosis.",
    "pdfPage": 4,
    "pdfQuote": "contiguous"
  },
  {
    "id": 23,
    "category": "Hematology: HL Subtypes",
    "questionText": "Which is the MOST COMMON subtype of classical Hodgkin lymphoma, typically presenting in young women with a mediastinal mass?",
    "options": [
      { "text": "Mixed cellularity HL", "explanation": "Incorrect. Mixed cellularity is the second most common subtype; associated with EBV and immunocompromised patients." },
      { "text": "Lymphocyte-rich HL", "explanation": "Incorrect. Lymphocyte-rich is rare and has the best prognosis." },
      { "text": "Lymphocyte-depleted HL", "explanation": "Incorrect. Lymphocyte-depleted is the rarest classical subtype with the worst prognosis." },
      { "text": "Nodular sclerosis HL", "explanation": "Correct. Nodular sclerosis is the most common subtype of classical HL (~70%), with a distinct female predilection and typical young-adult onset. Histology shows fibrous bands dividing the lymph node into nodules and 'lacunar cells' (RS cell variants in lacunar spaces). Often presents with anterior mediastinal mass." },
      { "text": "Nodular lymphocyte-predominant HL", "explanation": "Incorrect. NLPHL is a separate entity (not classical HL), with 'popcorn cells' (L&H cells), CD20+ CD45+ (NOT CD15+CD30+), and indolent behavior." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "HL subtypes by frequency: Nodular sclerosing (most common, young women) > Mixed cellularity (EBV) > Lymphocyte-rich > Lymphocyte-depleted (worst).",
    "pdfPage": 4,
    "pdfQuote": "nodular sclerosis"
  },
  {
    "id": 24,
    "category": "Hematology: HL Subtypes",
    "questionText": "Which Hodgkin lymphoma subtype is most strongly associated with EBV infection and presents most often in immunocompromised patients (e.g., HIV)?",
    "options": [
      { "text": "Nodular sclerosing HL", "explanation": "Incorrect. NSHL is the most common subtype but is not the most EBV-associated." },
      { "text": "Mixed cellularity HL", "explanation": "Correct. Mixed cellularity HL has the strongest association with EBV (~70% of cases) and tends to occur in older patients, HIV-positive patients, and resource-limited settings. Histology shows RS cells in a mixed background of lymphocytes, eosinophils, plasma cells, neutrophils, and histiocytes." },
      { "text": "Lymphocyte-rich HL", "explanation": "Incorrect. LRHL is rare with the best prognosis." },
      { "text": "Lymphocyte-depleted HL", "explanation": "Incorrect. Lymphocyte-depleted is the rarest classical subtype with worst prognosis and is associated with HIV but less so with EBV than mixed cellularity." },
      { "text": "Nodular lymphocyte-predominant HL", "explanation": "Incorrect. NLPHL is NOT classical HL and is not EBV-associated." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Mixed cellularity HL = strongest EBV association + older/immunocompromised patients (HIV).",
    "pdfPage": 4,
    "pdfQuote": "EBV"
  },
  {
    "id": 25,
    "category": "Hematology: NLPHL",
    "questionText": "Which feature distinguishes NODULAR LYMPHOCYTE-PREDOMINANT Hodgkin lymphoma (NLPHL) from classical Hodgkin lymphoma?",
    "options": [
      { "text": "Reed-Sternberg cells are CD15+ CD30+ in NLPHL", "explanation": "Incorrect. This describes classical HL. NLPHL cells (L&H or 'popcorn' cells) are CD15- and CD30-." },
      { "text": "'Popcorn cells' (L&H cells) that are CD20+ CD45+ but CD15- CD30-", "explanation": "Correct. NLPHL is a distinct entity with characteristic 'popcorn cells' (LP or L&H cells) that retain B-cell markers (CD20+, CD45+) but LACK the classical Hodgkin markers (CD15-, CD30-). This makes NLPHL behave more like a B-cell NHL — indolent course, can transform to DLBCL, often treated with rituximab. Excellent prognosis." },
      { "text": "Aggressive course with rapid progression", "explanation": "Incorrect. NLPHL is INDOLENT with excellent prognosis." },
      { "text": "Strong EBV association", "explanation": "Incorrect. NLPHL is NOT EBV-associated." },
      { "text": "Predominantly affects elderly patients", "explanation": "Incorrect. NLPHL typically presents in young/middle-aged males with peripheral (often cervical) lymphadenopathy." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "NLPHL = popcorn cells (L&H) = CD20+CD45+ CD15-CD30-. Indolent, often treated like B-cell NHL with rituximab. Excellent prognosis.",
    "pdfPage": 4,
    "pdfQuote": "lymphocyte-predominant"
  },
  {
    "id": 26,
    "category": "Hematology: Follicular Lymphoma",
    "questionText": "Which translocation defines FOLLICULAR LYMPHOMA, and what is the consequence for the cells?",
    "options": [
      { "text": "t(9;22) creating BCR-ABL tyrosine kinase", "explanation": "Incorrect. t(9;22) is CML." },
      { "text": "t(15;17) creating PML-RARA fusion", "explanation": "Incorrect. t(15;17) is APL." },
      { "text": "t(14;18) placing BCL-2 under the IgH enhancer → overexpression of BCL-2 → impaired apoptosis", "explanation": "Correct. Follicular lymphoma is defined by t(14;18) which juxtaposes BCL-2 (chromosome 18) next to the immunoglobulin heavy chain enhancer (chromosome 14). Overexpression of the anti-apoptotic protein BCL-2 prevents normal programmed death of germinal center B cells, allowing their accumulation. Follicular lymphoma is the most common INDOLENT NHL in adults; presents with painless, waxing/waning lymphadenopathy. Excellent prognosis but generally incurable." },
      { "text": "t(11;14) placing cyclin D1 under the IgH enhancer", "explanation": "Incorrect. t(11;14) is mantle cell lymphoma." },
      { "text": "t(8;14) placing c-MYC under the IgH enhancer", "explanation": "Incorrect. t(8;14) is Burkitt lymphoma." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Follicular lymphoma = t(14;18) → BCL-2 overexpression → impaired apoptosis. INDOLENT, waxing/waning lymphadenopathy. Incurable but long survival.",
    "pdfPage": 5,
    "pdfQuote": "t(14;18)"
  },
  {
    "id": 27,
    "category": "Hematology: Burkitt Lymphoma",
    "questionText": "An African child presents with a rapidly enlarging jaw mass. Biopsy shows sheets of monomorphic medium-sized B cells with a 'starry sky' appearance. Which translocation is responsible?",
    "options": [
      { "text": "t(14;18) BCL-2 — follicular lymphoma", "explanation": "Incorrect. This is follicular lymphoma; doesn't produce starry sky or jaw mass." },
      { "text": "t(8;14) c-MYC — Burkitt lymphoma", "explanation": "Correct. Burkitt lymphoma is defined by t(8;14) which places c-MYC under the IgH enhancer, driving its overexpression. This produces the FASTEST-GROWING human tumor (almost 100% proliferation rate, Ki-67 ~100%). The 'starry sky' histology comes from tingible body macrophages clearing the rapidly dying tumor cells against a background of small dark malignant B cells. Three forms: ENDEMIC (African jaw, EBV+, children), SPORADIC (abdominal, ileocecal), and IMMUNODEFICIENCY (HIV)." },
      { "text": "t(11;14) cyclin D1 — mantle cell lymphoma", "explanation": "Incorrect. MCL doesn't have starry sky histology." },
      { "text": "t(15;17) PML-RARA — APL", "explanation": "Incorrect. t(15;17) is APL." },
      { "text": "t(9;22) BCR-ABL — CML", "explanation": "Incorrect. t(9;22) is CML." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Burkitt = t(8;14) c-MYC = starry sky histology + African JAW (endemic) or abdominal (sporadic). EBV-associated (endemic). Fastest growing tumor.",
    "pdfPage": 5,
    "pdfQuote": "t(8;14)"
  },
  {
    "id": 28,
    "category": "Hematology: Mantle Cell Lymphoma",
    "questionText": "A 60-year-old man has widespread lymphadenopathy, splenomegaly, and bone marrow involvement. Flow cytometry shows CD5+ CD20+ B cells that are CD23-NEGATIVE. Which translocation defines this disease?",
    "options": [
      { "text": "t(14;18) BCL-2", "explanation": "Incorrect. t(14;18) is follicular lymphoma; usually CD5-." },
      { "text": "t(8;14) c-MYC", "explanation": "Incorrect. Burkitt lymphoma; CD5-." },
      { "text": "t(11;14) placing cyclin D1 (CCND1) under the IgH enhancer", "explanation": "Correct. Mantle cell lymphoma is defined by t(11;14) which causes overexpression of cyclin D1 (CCND1), driving G1→S cell cycle progression. MCL cells are mature B cells (CD19+, CD20+) that aberrantly coexpress CD5 (a normally T-cell marker). The critical discriminator from CLL: MCL is CD23-NEGATIVE while CLL is CD23-POSITIVE. MCL is aggressive with poor prognosis." },
      { "text": "t(15;17) PML-RARA", "explanation": "Incorrect. t(15;17) is APL." },
      { "text": "BCL-6 rearrangement", "explanation": "Incorrect. BCL-6 rearrangements are characteristic of diffuse large B-cell lymphoma (DLBCL), not MCL." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "MCL = t(11;14) cyclin D1 = CD5+CD20+CD23-NEGATIVE (vs CLL which is CD23+). Aggressive course.",
    "pdfPage": 5,
    "pdfQuote": "t(11;14)"
  },
  {
    "id": 29,
    "category": "Hematology: MCL vs CLL",
    "questionText": "Both CLL and mantle cell lymphoma are CD5+ CD20+ B-cell malignancies. Which marker reliably DISTINGUISHES them?",
    "options": [
      { "text": "CD3", "explanation": "Incorrect. CD3 is a T-cell marker; both CLL and MCL are CD3-." },
      { "text": "CD19", "explanation": "Incorrect. CD19 is a B-cell marker; both CLL and MCL are CD19+." },
      { "text": "CD23 — POSITIVE in CLL, NEGATIVE in MCL", "explanation": "Correct. The classic immunophenotypic distinction: CLL is CD23+ (an activation marker), while MCL is CD23-. Additional helpers: MCL strongly expresses CYCLIN D1 (from t(11;14)), which is negative in CLL. MCL also has FMC7+ while CLL is FMC7- (CLL has CLLU1+). The CD23 status is the single most reliable initial discriminator." },
      { "text": "CD15", "explanation": "Incorrect. CD15 is a Hodgkin lymphoma marker (RS cells)." },
      { "text": "TdT", "explanation": "Incorrect. TdT is a marker of lymphoblasts (ALL), and is negative in mature B-cell malignancies including both CLL and MCL." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "CLL vs MCL (both CD5+): CD23 POSITIVE = CLL. CD23 NEGATIVE + cyclin D1+ = MCL.",
    "pdfPage": 5,
    "pdfQuote": "CD23"
  },
  {
    "id": 30,
    "category": "Hematology: Marginal Zone Lymphoma (MALT)",
    "questionText": "A patient with chronic Helicobacter pylori gastritis develops a low-grade B-cell lymphoma in the gastric mucosa. Which lymphoma subtype is most likely?",
    "options": [
      { "text": "Burkitt lymphoma", "explanation": "Incorrect. Burkitt is associated with EBV (endemic) or HIV, not H. pylori." },
      { "text": "Mantle cell lymphoma", "explanation": "Incorrect. MCL is not associated with H. pylori." },
      { "text": "Mucosa-associated lymphoid tissue (MALT) lymphoma (extranodal marginal zone B-cell lymphoma)", "explanation": "Correct. MALT lymphoma is the classic example of how chronic antigenic stimulation can drive lymphomagenesis. Gastric MALT lymphoma is strongly associated with H. pylori — and remarkably, EARLY-stage disease can often be cured by H. pylori eradication ALONE (without chemotherapy). Other MALT lymphomas: salivary glands in Sjögren syndrome, thyroid in Hashimoto thyroiditis, ocular adnexa with Chlamydia psittaci, lung. t(11;18) in some cases." },
      { "text": "Follicular lymphoma", "explanation": "Incorrect. Follicular lymphoma is not driven by H. pylori." },
      { "text": "Hodgkin lymphoma", "explanation": "Incorrect. HL is not driven by H. pylori." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Gastric MALT lymphoma = chronic H. pylori. Early stage often CURED by H. pylori eradication alone (unique scenario!). Other MALT: Sjögren (parotid), Hashimoto (thyroid).",
    "pdfPage": 5,
    "pdfQuote": "MALT"
  },
  {
    "id": 31,
    "category": "Hematology: DLBCL",
    "questionText": "Which is the MOST COMMON non-Hodgkin lymphoma in adults?",
    "options": [
      { "text": "Follicular lymphoma", "explanation": "Incorrect. Follicular is the most common INDOLENT NHL but not the most common overall." },
      { "text": "Diffuse large B-cell lymphoma (DLBCL)", "explanation": "Correct. DLBCL is the most common NHL in adults (~30% of all NHL). It is an AGGRESSIVE lymphoma of large mature B cells that diffusely efface lymph node architecture. Can arise de novo or from transformation of indolent lymphomas (e.g., Richter from CLL, transformation of follicular). Treated with R-CHOP (rituximab + CHOP). Aggressive but potentially curable in many cases." },
      { "text": "Burkitt lymphoma", "explanation": "Incorrect. Burkitt is less common; mostly affects children/young adults." },
      { "text": "Mantle cell lymphoma", "explanation": "Incorrect. MCL accounts for ~6% of NHL." },
      { "text": "Marginal zone lymphoma", "explanation": "Incorrect. MZL is less common than DLBCL or follicular." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "DLBCL = MOST COMMON NHL in adults. Aggressive but potentially curable with R-CHOP. Can arise from transformation of indolent lymphomas.",
    "pdfPage": 5,
    "pdfQuote": "diffuse large B-cell"
  },
  {
    "id": 32,
    "category": "Hematology: Mycosis Fungoides / Sezary",
    "questionText": "A patient presents with chronic itchy patches, plaques, and tumors on the skin that have evolved over years. Biopsy shows atypical CD4+ T cells with cerebriform nuclei infiltrating the epidermis (Pautrier microabscesses). Which is the diagnosis?",
    "options": [
      { "text": "Diffuse large B-cell lymphoma involving skin", "explanation": "Incorrect. DLBCL is a B-cell lymphoma; doesn't show CD4+ T cells with cerebriform nuclei." },
      { "text": "Hodgkin lymphoma, lymphocyte-predominant subtype", "explanation": "Incorrect. HL doesn't classically present as a skin-limited progression." },
      { "text": "Mycosis fungoides (cutaneous T-cell lymphoma)", "explanation": "Correct. Mycosis fungoides is the most common cutaneous T-cell lymphoma. CD4+ T cells with characteristically cerebriform ('brain-like') nuclei infiltrate the epidermis, forming Pautrier microabscesses. Disease progresses through stages: patches → plaques → tumors, often over many years. When malignant cells circulate in the blood and skin shows erythroderma, the disease is called SEZARY SYNDROME (the leukemic phase of MF)." },
      { "text": "Adult T-cell leukemia/lymphoma (ATLL)", "explanation": "Incorrect. ATLL is HTLV-1 associated and presents with lytic bone lesions, hypercalcemia, flower cells in blood — not a chronic skin progression." },
      { "text": "Hairy cell leukemia", "explanation": "Incorrect. Hairy cell is a B-cell malignancy with splenomegaly, not skin lesions." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Mycosis fungoides = cutaneous T-cell lymphoma. CD4+ T cells with CEREBRIFORM nuclei + Pautrier microabscesses. Sezary syndrome = leukemic phase + erythroderma.",
    "pdfPage": 6,
    "pdfQuote": "mycosis fungoides"
  },
  {
    "id": 33,
    "category": "Hematology: HL Bimodal Age",
    "questionText": "Hodgkin lymphoma has a classic bimodal age distribution. Which age groups are the two peaks?",
    "options": [
      { "text": "Infants and elderly", "explanation": "Incorrect. HL is rare in infants." },
      { "text": "Young adults (15-35) and adults >55", "explanation": "Correct. HL classically shows a bimodal age distribution with one peak in young adults (15-35 years, often with nodular sclerosing subtype) and a second smaller peak in older adults (>55 years, often with mixed cellularity subtype, more EBV-associated). This bimodal pattern is distinctive and helps differentiate HL from most NHLs, which generally increase steadily with age." },
      { "text": "Children (2-5) and middle-aged adults (40-50)", "explanation": "Incorrect. HL is uncommon in young children." },
      { "text": "Adolescents (12-18) and very elderly (>80)", "explanation": "Incorrect. These age ranges are too narrow / extreme to describe the bimodal peaks." },
      { "text": "Newborns and teenagers", "explanation": "Incorrect. HL is essentially never seen in newborns." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "HL = BIMODAL age: young adults (15-35, NSHL) + older adults (>55, mixed cellularity). NHL generally rises with age.",
    "pdfPage": 4,
    "pdfQuote": "bimodal"
  },
  {
    "id": 34,
    "category": "Hematology: B Symptoms",
    "questionText": "What are the 'B symptoms' that contribute to lymphoma staging?",
    "options": [
      { "text": "Bone pain, bleeding, bruising", "explanation": "Incorrect. These are not the defined B symptoms." },
      { "text": "Bruising, bleeding, bone marrow failure", "explanation": "Incorrect. These describe complications of leukemia rather than the B symptoms of lymphoma staging." },
      { "text": "Fever (>38°C), drenching night sweats, and unintentional weight loss (>10% body weight over 6 months)", "explanation": "Correct. The B symptoms are constitutional symptoms that indicate more aggressive disease and worsen prognosis: (1) unexplained fever >38°C, (2) drenching night sweats, and (3) unintentional weight loss >10% of body weight in 6 months. Presence of B symptoms adds a 'B' suffix to the Ann Arbor stage (e.g., stage IIB), upstaging prognosis." },
      { "text": "Pruritus, alcohol-induced pain, fatigue", "explanation": "Incorrect. These are other lymphoma-associated symptoms (especially alcohol-induced pain in HL) but are NOT the defined B symptoms for staging." },
      { "text": "Splenomegaly, hepatomegaly, lymphadenopathy", "explanation": "Incorrect. These are findings, not B symptoms." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "B symptoms = (1) fever >38°C, (2) drenching night sweats, (3) >10% weight loss in 6 months. Their presence upstages disease (Stage IIB > IIA).",
    "pdfPage": 4,
    "pdfQuote": "B symptoms"
  },
  {
    "id": 35,
    "category": "Hematology: Burkitt Variants",
    "questionText": "Burkitt lymphoma has three clinical variants. Which variant is associated with HIV/AIDS?",
    "options": [
      { "text": "Endemic (African)", "explanation": "Incorrect. Endemic Burkitt is associated with EBV and Plasmodium falciparum co-infection in equatorial Africa, presenting with jaw masses in children." },
      { "text": "Sporadic", "explanation": "Incorrect. Sporadic Burkitt occurs worldwide outside endemic areas and typically presents with abdominal masses (ileocecal) in children/young adults." },
      { "text": "Immunodeficiency-associated (HIV)", "explanation": "Correct. The third Burkitt variant is the immunodeficiency-associated form, seen primarily in HIV-positive patients. It can be one of the AIDS-defining malignancies. Burkitt also occurs in post-transplant lymphoproliferative disorder. All Burkitt variants share the t(8;14) c-MYC translocation and starry sky histology, but EBV positivity is highest in endemic (~95%), intermediate in immunodeficiency-associated (~30-40%), and low in sporadic (~15%)." },
      { "text": "Pediatric familial", "explanation": "Incorrect. There is no specific 'pediatric familial' Burkitt variant." },
      { "text": "Geriatric T-cell variant", "explanation": "Incorrect. There is no such variant; Burkitt is always a B-cell lymphoma." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Burkitt 3 forms: ENDEMIC (African jaw, EBV+) | SPORADIC (abdominal, ileocecal) | IMMUNODEFICIENCY (HIV/AIDS).",
    "pdfPage": 5,
    "pdfQuote": "Burkitt"
  },
  {
    "id": 36,
    "category": "Hematology: HL Markers",
    "questionText": "Reed-Sternberg cells in classical Hodgkin lymphoma express which immunophenotype?",
    "options": [
      { "text": "CD19+ CD20+ CD45+ (typical B-cell pattern)", "explanation": "Incorrect. Classical HL RS cells are typically CD20- and CD45-, distinguishing them from B-cell NHL." },
      { "text": "CD15+ CD30+, CD45-NEGATIVE, CD20- (variable)", "explanation": "Correct. Reed-Sternberg cells of classical HL express CD15 (Lewis X) and CD30 (Ki-1) but characteristically LACK CD45 (common leukocyte antigen) and usually lack CD20. This unusual immunophenotype is a key diagnostic feature. Brentuximab vedotin (anti-CD30 antibody-drug conjugate) is a targeted therapy used in HL." },
      { "text": "CD3+ CD4+ (helper T cell)", "explanation": "Incorrect. RS cells are derived from B cells, not T cells, despite the loss of typical B-cell markers." },
      { "text": "CD33+ CD13+ (myeloid)", "explanation": "Incorrect. These are myeloid markers (AML)." },
      { "text": "TdT+ CD10+ (lymphoblastic)", "explanation": "Incorrect. These are markers of immature B-lymphoblasts (B-ALL)." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Classical HL RS cells: CD15+ CD30+ CD45- CD20- (variable). Brentuximab (anti-CD30) is a targeted therapy.",
    "pdfPage": 4,
    "pdfQuote": "CD15"
  },
  {
    "id": 37,
    "category": "Hematology: Hodgkin Alcohol Pain",
    "questionText": "Which symptom, although uncommon, is considered nearly pathognomonic for Hodgkin lymphoma when present?",
    "options": [
      { "text": "Alcohol-induced pain in involved lymph nodes", "explanation": "Correct. Pain in enlarged lymph nodes after alcohol consumption is a classic, although uncommon (only ~10% of patients), finding in Hodgkin lymphoma. Highly specific when present. Other associated findings: pruritus, eosinophilia (driven by eosinophil-attracting cytokines from RS cells), and cyclical Pel-Ebstein fever (alternating periods of fever and apyrexia)." },
      { "text": "Hypercalcemia", "explanation": "Incorrect. Hypercalcemia is much more characteristic of adult T-cell leukemia/lymphoma (ATLL) and multiple myeloma." },
      { "text": "Lytic bone lesions", "explanation": "Incorrect. Lytic bone lesions are characteristic of multiple myeloma or ATLL, not HL." },
      { "text": "Hyperviscosity syndrome", "explanation": "Incorrect. Hyperviscosity is classic for Waldenstrom macroglobulinemia (IgM)." },
      { "text": "Erythroderma", "explanation": "Incorrect. Erythroderma is seen in Sezary syndrome (cutaneous T-cell lymphoma)." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Alcohol-induced lymph node pain = nearly pathognomonic for HL (when present). Also watch for Pel-Ebstein cyclical fever and pruritus.",
    "pdfPage": 4,
    "pdfQuote": "alcohol"
  },
  {
    "id": 38,
    "category": "Hematology: Lymphoma Translocations Summary",
    "questionText": "Which lymphoma is correctly matched to its translocation/oncogene?",
    "options": [
      { "text": "Burkitt — t(14;18) BCL-2", "explanation": "Incorrect. t(14;18) BCL-2 is FOLLICULAR lymphoma. Burkitt is t(8;14) c-MYC." },
      { "text": "Follicular — t(11;14) cyclin D1", "explanation": "Incorrect. t(11;14) cyclin D1 is MANTLE CELL. Follicular is t(14;18) BCL-2." },
      { "text": "Mantle cell — t(8;14) c-MYC", "explanation": "Incorrect. t(8;14) c-MYC is BURKITT. Mantle cell is t(11;14) cyclin D1." },
      { "text": "Burkitt — t(8;14) c-MYC; Follicular — t(14;18) BCL-2; Mantle cell — t(11;14) cyclin D1", "explanation": "Correct. The three classic NHL translocations and their oncogenes: BURKITT = t(8;14) deregulating c-MYC (proliferation) | FOLLICULAR = t(14;18) deregulating BCL-2 (anti-apoptosis) | MANTLE CELL = t(11;14) deregulating cyclin D1 (cell cycle). All three juxtapose the oncogene next to the IgH enhancer on chromosome 14, hijacking B-cell transcription to drive overexpression." },
      { "text": "All three lymphomas share the same translocation", "explanation": "Incorrect. Each has a distinct translocation." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "NHL translocation cheat sheet: Burkitt t(8;14) c-MYC | Follicular t(14;18) BCL-2 | Mantle cell t(11;14) cyclin D1. All hijack IgH enhancer.",
    "pdfPage": 5,
    "pdfQuote": "translocation"
  },
  {
    "id": 39,
    "category": "Hematology: Indolent vs Aggressive NHL",
    "questionText": "Which NHL is correctly categorized as INDOLENT (slow-growing, generally incurable but long survival)?",
    "options": [
      { "text": "Burkitt lymphoma — indolent", "explanation": "Incorrect. Burkitt is the most AGGRESSIVE NHL (fastest growing). But aggressive lymphomas are paradoxically often more curable than indolent ones because they're chemo-sensitive." },
      { "text": "Diffuse large B-cell lymphoma — indolent", "explanation": "Incorrect. DLBCL is AGGRESSIVE." },
      { "text": "Follicular lymphoma — indolent", "explanation": "Correct. Follicular lymphoma is the prototypical INDOLENT NHL. Patients can have waxing/waning lymphadenopathy for years. Generally incurable with standard therapy but slow-growing, so many patients live a long time. 'Watch and wait' is acceptable for asymptomatic disease. Other indolent NHLs: MALT/marginal zone, CLL/SLL, hairy cell, lymphoplasmacytic lymphoma (Waldenstrom). Transformation to DLBCL (Richter-like) can occur." },
      { "text": "Mantle cell lymphoma — indolent", "explanation": "Incorrect. MCL is generally AGGRESSIVE with poor prognosis." },
      { "text": "Lymphoblastic lymphoma — indolent", "explanation": "Incorrect. Lymphoblastic lymphoma (closely related to T-ALL) is HIGHLY AGGRESSIVE." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "INDOLENT NHL: follicular, MALT/MZL, CLL/SLL, hairy cell, Waldenstrom. AGGRESSIVE: DLBCL, MCL, Burkitt, lymphoblastic. Indolent = incurable but long survival; aggressive = curable but deadly fast.",
    "pdfPage": 5,
    "pdfQuote": "indolent"
  },
  {
    "id": 40,
    "category": "Hematology: Waldenstrom Macroglobulinemia",
    "questionText": "An older patient presents with fatigue, lymphadenopathy, and HYPERVISCOSITY symptoms (blurred vision, headache, mucosal bleeding). SPEP shows a monoclonal IgM spike. Bone marrow shows lymphoplasmacytoid cells. Which diagnosis is this?",
    "options": [
      { "text": "Multiple myeloma", "explanation": "Incorrect. Multiple myeloma typically has IgG or IgA monoclonal protein (not IgM) and presents with CRAB symptoms (hyperCalcemia, Renal failure, Anemia, Bone lytic lesions). MM rarely causes hyperviscosity because IgG/IgA are smaller than IgM." },
      { "text": "Waldenstrom macroglobulinemia (lymphoplasmacytic lymphoma)", "explanation": "Correct. Waldenstrom macroglobulinemia (WM) is an indolent NHL of lymphoplasmacytoid cells (B-cells with plasma cell features) that secrete monoclonal IgM. The large IgM molecules cause HYPERVISCOSITY syndrome (Raynaud's, blurred vision, retinal vein engorgement with 'sausage links,' headache, mucosal bleeding). MYD88 L265P mutation in >90%. Treatment: rituximab + bendamustine, or BTK inhibitors (ibrutinib). Acute hyperviscosity = plasmapheresis." },
      { "text": "Chronic lymphocytic leukemia (CLL)", "explanation": "Incorrect. CLL doesn't typically cause hyperviscosity or monoclonal IgM spike." },
      { "text": "Hairy cell leukemia", "explanation": "Incorrect. Hairy cell shows pancytopenia + splenomegaly + TRAP+ cells, not IgM spike." },
      { "text": "Burkitt lymphoma", "explanation": "Incorrect. Burkitt is an aggressive lymphoma in younger patients, not associated with IgM spike or hyperviscosity." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Waldenstrom (LPL): monoclonal IgM → HYPERVISCOSITY syndrome (blurred vision, mucosal bleeding, Raynaud). MYD88 L265P mutation. Plasmapheresis for acute symptoms.",
    "pdfPage": 5,
    "pdfQuote": "Waldenstrom"
  }
];

window.Test_L155 = Test_L155;
