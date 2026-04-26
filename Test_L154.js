// Thinking Process:
// 1. High-Yield Concept: Differentiating acute vs. chronic leukemias and identifying hallmark translocations/markers.
// 2. The "Trap": Confusing the translocations (t(9;22) vs t(15;17) vs t(14;18)) or their associated proteins.
// 3. Key Distractor: t(9;22) BCR-ABL (Philadelphia chromosome), which is for CML but can rarely be seen in adult ALL.
// 4. Vignette Strategy: Use classic demographic clues (child with ALL, adult with CLL/CML) and pathognomonic findings (Auer rods, smudge cells) to guide the student.
//
// PDF Mapping Check: Found
// PDF Filename: Lecture #154. M. Plummer, M.D. (StudySheet) updated 4.23.26.pdf
// Mapping Key: 16-Hematology: Leukemias, Lymphomas, and Plasma Cell Neoplasms (L154)
// Status: Verified

const Test_L154 = [
  {
    "id": 1,
    "category": "Hematology: Leukemia Classification",
    "questionText": "The diagnosis of an acute leukemia (AML or ALL) requires a specific quantitative threshold of immature cells in the bone marrow or peripheral blood. What is the minimum percentage of blasts required for this diagnosis?",
    "options": [
      {
        "text": "5%",
        "explanation": "Incorrect. A blast count of 5% or more in the bone marrow is abnormal but falls within the range for myelodysplastic syndrome (MDS). This would be the correct answer if the question concerned the threshold for 'MDS with excess blasts-1'."
      },
      {
        "text": "10%",
        "explanation": "Incorrect. While 10% blasts is highly suspicious, it does not meet the WHO diagnostic criteria for acute leukemia. This would be the correct answer if the question concerned 'MDS with excess blasts-2'."
      },
      {
        "text": "20%",
        "explanation": "Correct. According to standard diagnostic criteria mentioned by the lecturer, all ACUTE leukemias must have >20% blasts in the bone marrow or peripheral blood to be classified as such, rather than a chronic or myelodysplastic process."
      },
      {
        "text": "30%",
        "explanation": "Incorrect. 30% was the older FAB criteria, but the modern threshold used in medical education and clinical practice is lower. This would be the correct answer if the question asked about historical FAB classification systems."
      },
      {
        "text": "50%",
        "explanation": "Incorrect. 50% is well above the diagnostic threshold. While many patients present with counts this high, it is not the *minimum* required. This would be the correct answer if the question asked about a 'very high' blast burden."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "A blast count >20% in the bone marrow or blood is the defining threshold for Acute Leukemia.",
    "pdfPage": 1,
    "pdfQuote": "All ACUTE leukemias have >20% blasts in bone marrow"
  },
  {
    "id": 2,
    "category": "Hematology: APL Translocation",
    "questionText": "Acute Promyelocytic Leukemia (APL) is a medical emergency due to its high risk of disseminated intravascular coagulation (DIC). Which of the following chromosomal translocations is the hallmark driver of this malignancy?",
    "options": [
      {
        "text": "t(9;22)",
        "explanation": "Incorrect. The t(9;22) translocation creates the BCR-ABL fusion protein and is diagnostic for CML. This would be the correct answer if the question focused on the Philadelphia chromosome."
      },
      {
        "text": "t(8;14)",
        "explanation": "Incorrect. The t(8;14) translocation involves c-MYC and is characteristic of Burkitt Lymphoma. This would be the correct answer if the question described a 'starry sky' histology."
      },
      {
        "text": "t(14;18)",
        "explanation": "Incorrect. The t(14;18) translocation involves Bcl-2 and is found in Follicular Lymphoma. This would be the correct answer if the question focused on anti-apoptotic protein overexpression."
      },
      {
        "text": "t(15;17)",
        "explanation": "Correct. APL is defined by the t(15;17) translocation, which fuses the PML gene with the Retinoic Acid Receptor Alpha (RARA) gene. This fusion protein blocks promyelocyte maturation, a block that can be overcome with All-Trans Retinoic Acid (ATRA)."
      },
      {
        "text": "t(11;14)",
        "explanation": "Incorrect. The t(11;14) translocation involves Cyclin D1 and is characteristic of Mantle Cell Lymphoma. This would be the correct answer if the question mentioned bcl-1/PRAD-1 overexpression."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Acute Promyelocytic Leukemia (APL) is defined by the t(15;17) translocation and presents a high risk for DIC.",
    "pdfPage": 3,
    "pdfQuote": "Acute promyelocytic leukemia (APL) translocation (15;17)"
  },
  {
    "id": 3,
    "category": "Hematology: ALL Markers",
    "questionText": "A 5-year-old child presents with bruising and fatigue. Flow cytometry of the bone marrow aspirate shows a population of immature cells. Which of the following markers, if positive, would definitively indicate a lymphoblastic (lymphoid) rather than a myeloblastic (myeloid) origin?",
    "options": [
      {
        "text": "Myeloperoxidase (MPO)",
        "explanation": "Incorrect. MPO is a marker for the myeloid lineage and is used to identify AML. This would be the correct answer if the question asked for a marker definitive for myeloid blasts."
      },
      {
        "text": "Terminal deoxynucleotidyl transferase (Tdt)",
        "explanation": "Correct. Tdt is a DNA polymerase expressed only in immature lymphoid cells (pre-B and pre-T lymphoblasts). It is absent in myeloid blasts, making it a critical marker for diagnosing ALL."
      },
      {
        "text": "Nonspecific Esterase",
        "explanation": "Incorrect. Esterase is a marker for the monocytic and myeloid lineages. This would be the correct answer if the question concerned identifying Acute Monocytic Leukemia."
      },
      {
        "text": "CD15",
        "explanation": "Incorrect. CD15 is a marker seen on neutrophils and Reed-Sternberg cells in Hodgkin Lymphoma. This would be the correct answer if the question concerned the 'owl-eye' cells of HL."
      },
      {
        "text": "CD30",
        "explanation": "Incorrect. CD30 is an activation marker seen on RS cells and some mature lymphomas. This would be the correct answer if the question focused on the immunophenotype of classical Hodgkin Lymphoma."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Tdt (Terminal deoxynucleotidyl transferase) is a specific marker for lymphoblasts and is used to diagnose ALL.",
    "pdfPage": 3,
    "pdfQuote": "Lymphoblasts are Tdt + (versus myeloblasts which are negative)"
  },
  {
    "id": 4,
    "category": "Hematology: CML Presentation",
    "questionText": "Chronic Myelogenous Leukemia (CML) is a myeloproliferative disorder that often presents with massive splenomegaly. Which of the following findings on a peripheral blood differential is highly suspicious for a myeloproliferative process like CML?",
    "options": [
      {
        "text": "Increased basophils",
        "explanation": "Correct. An absolute increase in basophils (basophilia) is a suspicious and characteristic finding in myeloproliferative disorders, particularly CML. This is a key differentiator from a reactive leukocytosis (leukemoid reaction)."
      },
      {
        "text": "Presence of smudge cells",
        "explanation": "Incorrect. Smudge cells are fragile lymphocytes found in CLL, not typically a feature of the myeloid proliferation in CML. This would be the correct answer if the question focused on the most common adult leukemia."
      },
      {
        "text": "Reed-Sternberg cells",
        "explanation": "Incorrect. RS cells are found in lymph node biopsies of patients with Hodgkin Lymphoma, not in the peripheral blood of CML patients. This would be the correct answer if the question focused on 'owl-eye' giant cells."
      },
      {
        "text": "Hypersegmented neutrophils",
        "explanation": "Incorrect. Hypersegmented neutrophils are a sign of megaloblastic anemia (B12/Folate deficiency). This would be the correct answer if the question concerned impaired DNA synthesis."
      },
      {
        "text": "Auer rods",
        "explanation": "Incorrect. Auer rods are found in myeloblasts in acute leukemias (AML), particularly APL. CML is a chronic disorder where mature myeloid cells predominate. This would be the correct answer if the question focused on APL and DIC risk."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Basophilia (increased basophils) is a characteristic finding in myeloproliferative disorders like CML.",
    "pdfPage": 3,
    "pdfQuote": "all MPDs have increased basophilia as well as increased neutrophils"
  },
  {
    "id": 5,
    "category": "Hematology: CLL Pathognomonic Finding",
    "questionText": "A 72-year-old male is found to have an absolute lymphocyte count of 35,000/μL. On peripheral blood smear, the lymphocytes appear mature but are easily ruptured during slide preparation. What is the name given to these characteristic fragile cells?",
    "options": [
      {
        "text": "Lacunar cells",
        "explanation": "Incorrect. Lacunar cells are a variant of Reed-Sternberg cells found in Nodular Sclerosis Hodgkin Lymphoma. This would be the correct answer if the question focused on lymph node biopsy findings in a young female."
      },
      {
        "text": "Smudge cells",
        "explanation": "Correct. Smudge cells (or basket cells) are fragile, partially disintegrated lymphocytes seen on the peripheral smear of patients with Chronic Lymphocytic Leukemia (CLL). They result from the mechanical trauma of making the smear."
      },
      {
        "text": "Popcorn cells",
        "explanation": "Incorrect. Popcorn cells (L and H variants) are seen in Nodular Lymphocyte Predominant Hodgkin Lymphoma. This would be the correct answer if the question focused on the non-classical subtype of HL."
      },
      {
        "text": "Burr cells",
        "explanation": "Incorrect. Burr cells (echinocytes) are red blood cell abnormalities seen in uremia or Pyruvate Kinase deficiency. This would be the correct answer if the question focused on neonatal hemolytic anemia."
      },
      {
        "text": "Schistocytes",
        "explanation": "Incorrect. Schistocytes are fragmented RBCs indicating mechanical hemolysis. This would be the correct answer if the question concerned TTP or mechanical heart valves."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Smudge cells are fragile lymphocytes characteristic of Chronic Lymphocytic Leukemia (CLL).",
    "pdfPage": 4,
    "pdfQuote": "Smudge cells on peripheral smear"
  },
  {
    "id": 6,
    "category": "Hematology: Multiple Myeloma Criteria",
    "questionText": "Multiple Myeloma is a plasma cell neoplasm that causes significant end-organ damage. The clinical presentation is often remembered by the 'CRAB' mnemonic. What does the 'R' in this mnemonic represent?",
    "options": [
      {
        "text": "Respiratory failure",
        "explanation": "Incorrect. While infections can lead to respiratory issues, it is not a core part of the diagnostic mnemonic. This would be the correct answer if the question focused on the most common cause of death in MM (infection)."
      },
      {
        "text": "Renal dysfunction",
        "explanation": "Correct. The 'R' in CRAB stands for Renal dysfunction (or failure). This is primarily caused by the toxicity of monoclonal free light chains (Bence-Jones proteins) being filtered by and clogging the renal tubules."
      },
      {
        "text": "Reticulocytosis",
        "explanation": "Incorrect. Reticulocytosis indicates active RBC production, but MM typically presents with anemia (the 'A' in CRAB) due to marrow replacement. This would be the correct answer if the question concerned the response to hemolysis."
      },
      {
        "text": "Rheumatoid Arthritis",
        "explanation": "Incorrect. While bone pain occurs, it is due to lytic lesions, not autoimmune joint inflammation. This would be the correct answer if the question concerned the association of cold agglutinins with Mycoplasma."
      },
      {
        "text": "Richter transformation",
        "explanation": "Incorrect. Richter transformation is the conversion of CLL into an aggressive lymphoma. It is not part of the Multiple Myeloma criteria. This would be the correct answer if the question asked about a sudden clinical worsening of CLL."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The CRAB mnemonic for Multiple Myeloma stands for HyperCalcemia, Renal failure, Anemia, and Bone lesions.",
    "pdfPage": 4,
    "pdfQuote": "CRAB: hyperCalcemia, Renal dysfunctions, Anemia, Bone lesions"
  },
  {
    "id": 7,
    "category": "Hematology: Follicular Lymphoma",
    "questionText": "Follicular lymphoma is a low-grade B-cell lymphoma that often transforms into more aggressive types. It is characterized by the overexpression of the Bcl-2 protein. Which chromosomal translocation is responsible for this finding?",
    "options": [
      {
        "text": "t(8;14)",
        "explanation": "Incorrect. This translocation involves c-MYC and is the driver of Burkitt Lymphoma. This would be the correct answer if the question asked about a highly proliferative 'starry sky' mass."
      },
      {
        "text": "t(14;18)",
        "explanation": "Correct. The t(14;18) translocation in Follicular Lymphoma places the anti-apoptotic Bcl-2 gene next to the immunoglobulin heavy chain locus, leading to its constitutive overexpression and prolonging cell survival."
      },
      {
        "text": "t(9;22)",
        "explanation": "Incorrect. This is the Philadelphia chromosome seen in CML. This would be the correct answer if the question focused on tyrosine kinase inhibitors as targeted therapy."
      },
      {
        "text": "t(15;17)",
        "explanation": "Incorrect. This is the translocation for APL. This would be the correct answer if the question focused on promyelocyte maturation arrest."
      },
      {
        "text": "t(11;14)",
        "explanation": "Incorrect. This is the translocation for Mantle Cell Lymphoma. This would be the correct answer if the question focused on Cyclin D1 overexpression."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Follicular lymphoma is driven by the t(14;18) translocation, which leads to the overexpression of the anti-apoptotic protein Bcl-2.",
    "pdfPage": 4,
    "pdfQuote": "Translocation t;(14;18) ... Overexpression of Bcl-2"
  },
  {
    "id": 8,
    "category": "Hematology: Burkitt Lymphoma",
    "questionText": "Burkitt Lymphoma is an extremely aggressive B-cell lymphoma with three clinical forms. Which clinical form is most commonly associated with a mandibular (jaw) mass and Epstein-Barr Virus (EBV) infection?",
    "options": [
      {
        "text": "Sporadic form",
        "explanation": "Incorrect. The sporadic form is more common in North America and typically presents as an abdominal mass (ileocecal). This would be the correct answer if the question focused on a North American child with gut obstruction."
      },
      {
        "text": "Endemic form",
        "explanation": "Correct. The endemic form is common in equatorial Africa, is nearly 100% associated with EBV, and characteristically presents as a mandibular or maxillary mass in children."
      },
      {
        "text": "Immunosuppression-related form",
        "explanation": "Incorrect. This form is most commonly seen in HIV patients and can present in various locations. This would be the correct answer if the question focused on a patient with a low CD4 count."
      },
      {
        "text": "Nodular sclerosis form",
        "explanation": "Incorrect. Nodular sclerosis is a subtype of Hodgkin Lymphoma, not Burkitt. This would be the correct answer if the question focused on lacunar cells and collagen bands."
      },
      {
        "text": "Marginal zone form",
        "explanation": "Incorrect. Marginal zone lymphoma is a different entity, often associated with MALTomas. This would be the correct answer if the question focused on H. pylori-associated gastritis."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Endemic (African) Burkitt Lymphoma is strongly associated with EBV and often presents as a mandibular mass.",
    "pdfPage": 5,
    "pdfQuote": "Endemic form is more common in Africa and tends to be mandibular (jaw mass)"
  },
  {
    "id": 9,
    "category": "Hematology: Hodgkin Lymphoma Markers",
    "questionText": "Classical Hodgkin Lymphoma is diagnosed by identifying the pathognomonic Reed-Sternberg (RS) cells. Which of the following surface marker profiles is characteristic of these giant multinucleated cells in the classical subtypes?",
    "options": [
      {
        "text": "CD19+, CD20+",
        "explanation": "Incorrect. These are mature B-cell markers. While RS cells originate from B-cells, they lose their normal B-cell markers in the classical subtypes. This would be the correct answer if the question focused on the 'non-classical' nodular lymphocyte predominant subtype."
      },
      {
        "text": "CD3+, CD4+",
        "explanation": "Incorrect. These are T-cell markers. RS cells are not of T-cell origin. This would be the correct answer if the question focused on Mycosis Fungoides."
      },
      {
        "text": "CD15+, CD30+",
        "explanation": "Correct. The Reed-Sternberg cells in the four classical subtypes of Hodgkin Lymphoma (Nodular Sclerosis, Mixed Cellularity, Lymphocyte Rich, Lymphocyte Depleted) are typically positive for CD15 and CD30 but negative for CD20 and CD45."
      },
      {
        "text": "CD5+, CD23+",
        "explanation": "Incorrect. These are the markers for CLL/SLL. This would be the correct answer if the question focused on mature B-cell leukemia in the elderly."
      },
      {
        "text": "Tdt+, CD10+",
        "explanation": "Incorrect. These are markers of immature lymphoblasts found in ALL. This would be the correct answer if the question focused on a pediatric mediastinal mass."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Reed-Sternberg cells in classical Hodgkin Lymphoma are characteristically CD15+ and CD30+.",
    "pdfPage": 6,
    "pdfQuote": "Reed-Sternberg cells ... CD 15 and CD 30 markers"
  },
  {
    "id": 10,
    "category": "Hematology: Nodular Sclerosis HL",
    "questionText": "Nodular Sclerosis is the most common subtype of Hodgkin Lymphoma. Which of the following histological features defines the specific variant of the Reed-Sternberg cell seen in this subtype?",
    "options": [
      {
        "text": "Popcorn cell",
        "explanation": "Incorrect. Popcorn cells are found in the 'non-classical' nodular lymphocyte predominant subtype. This would be the correct answer if the question focused on CD20+ RS variants."
      },
      {
        "text": "Lacunar cell",
        "explanation": "Correct. The RS variant in Nodular Sclerosis is the 'lacunar cell,' which appears to sit in a clear space (lacuna) due to artifactual cytoplasmic retraction during slide processing. This subtype also features thick bands of collagen."
      },
      {
        "text": "Cerebriform cell",
        "explanation": "Incorrect. Cells with 'cerebriform' nuclei are characteristic of Mycosis Fungoides (T-cell lymphoma). This would be the correct answer if the question focused on skin involvement."
      },
      {
        "text": "Hairy cell",
        "explanation": "Incorrect. Hairy cells are seen in Hairy Cell Leukemia and have fine cytoplasmic projections. This would be the correct answer if the question focused on a 'dry tap' bone marrow and TRAP positivity."
      },
      {
        "text": "Smudge cell",
        "explanation": "Incorrect. Smudge cells are fragile lymphocytes in CLL. This would be the correct answer if the question focused on peripheral blood findings in the elderly."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Nodular Sclerosis Hodgkin Lymphoma features 'lacunar' variants of Reed-Sternberg cells and sclerotic collagen bands.",
    "pdfPage": 6,
    "pdfQuote": "Nodular sclerosis ... RS variant known as “lacunar” cell"
  },
  {
    "id": 11,
    "category": "Hematology: Marginal Zone Lymphoma",
    "questionText": "Marginal Zone Lymphoma is a low-grade B-cell lymphoma often arising in extranodal tissues. Which of the following infections is most strongly associated with the development of gastric MALToma?",
    "options": [
      {
        "text": "Epstein-Barr Virus (EBV)",
        "explanation": "Incorrect. EBV is associated with Burkitt and certain Hodgkin subtypes, but not primarily with MALToma. This would be the correct answer if the question focused on the endemic jaw mass."
      },
      {
        "text": "Helicobacter pylori",
        "explanation": "Correct. Marginal zone lymphoma of the mucosa-associated lymphoid tissue (MALToma) in the stomach is driven by chronic inflammation from H. pylori infection. Remarkably, early-stage MALTomas may regress with antibiotic therapy targeting the bacteria."
      },
      {
        "text": "Hepatitis C Virus (HCV)",
        "explanation": "Incorrect. HCV is associated with some B-cell lymphomas but is not the primary driver of MALToma. This would be the correct answer if the question focused on cryoglobulinemia-associated lymphoma."
      },
      {
        "text": "Human T-lymphotropic virus (HTLV-1)",
        "explanation": "Incorrect. HTLV-1 is the driver for Adult T-cell Leukemia/Lymphoma. This would be the correct answer if the question focused on a patient from the Caribbean with hypercalcemia and skin rash."
      },
      {
        "text": "Parvovirus B19",
        "explanation": "Incorrect. Parvovirus B19 causes aplastic crisis in sickle cell disease, not lymphomas. This would be the correct answer if the question focused on an abrupt stop in erythropoiesis."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Gastric MALToma is a marginal zone lymphoma strongly associated with Helicobacter pylori infection.",
    "pdfPage": 5,
    "pdfQuote": "Helicobacter pylori infection in stomach ... associated with MALToma development"
  },
  {
    "id": 12,
    "category": "Hematology: T-ALL Presentation",
    "questionText": "Acute Lymphoblastic Leukemia (ALL) can be of B-cell or T-cell origin. Which of the following is the most characteristic clinical presentation of T-cell ALL (T-ALL)?",
    "options": [
      {
        "text": "Massive splenomegaly in an adult",
        "explanation": "Incorrect. This describes CML. T-ALL is a pediatric/adolescent disease. This would be the correct answer if the question focused on the Philadelphia chromosome."
      },
      {
        "text": "Anterior mediastinal mass in an adolescent male",
        "explanation": "Correct. T-ALL characteristically presents as an anterior mediastinal mass (arising from the thymus) in adolescent males. It can cause superior vena cava syndrome or airway compression."
      },
      {
        "text": "Punched-out bone lesions in the skull",
        "explanation": "Incorrect. This is the hallmark of Multiple Myeloma. This would be the correct answer if the question described an M-spike on SPEP."
      },
      {
        "text": "Mandibular jaw mass in an African child",
        "explanation": "Incorrect. This is the endemic form of Burkitt Lymphoma. While both are aggressive pediatric cancers, Burkitt is a mature B-cell lymphoma, not an acute lymphoblastic leukemia. This would be the correct answer if the question mentioned t(8;14)."
      },
      {
        "text": "Painless lymphadenopathy with 'owl-eye' cells",
        "explanation": "Incorrect. This describes Hodgkin Lymphoma. This would be the correct answer if the question focused on CD15/CD30 markers."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "T-cell ALL often presents as an enlarging mediastinal mass in an adolescent male.",
    "pdfPage": 3,
    "pdfQuote": "T-cell ALL usually presents as a mediastinal mass in an adolescent male"
  },
  {
    "id": 13,
    "category": "Hematology: Myeloproliferative Risks",
    "questionText": "Myeloproliferative disorders (MPDs) like CML, Polycythemia Vera, and Essential Thrombocytosis carry a risk of long-term transformation. What is a common end-stage histological finding in these patients as the disease progresses?",
    "options": [
      {
        "text": "Transformation to Hodgkin Lymphoma",
        "explanation": "Incorrect. Myeloid disorders do not transform into Hodgkin's disease. This would be the correct answer if the question were about a hypothetical and non-existent pathway."
      },
      {
        "text": "Bone marrow replacement with fibrosis",
        "explanation": "Correct. Many chronic myeloproliferative disorders can progress to a 'spent phase' characterized by primary myelofibrosis, where the hypercellular marrow is replaced by thick bands of fibrous tissue."
      },
      {
        "text": "Development of hypersegmented neutrophils",
        "explanation": "Incorrect. This is a sign of megaloblastic anemia, not an end-stage progression of MPDs. This would be the correct answer if the question focused on folate deficiency."
      },
      {
        "text": "Loss of all CD markers less than 10",
        "explanation": "Incorrect. CD markers < 10 are typically T-cell markers; their loss is not a standard finding in myeloid fibrosis. This would be the correct answer if the question focused on T-cell lineage identification."
      },
      {
        "text": "Formation of smudge cells in the blood",
        "explanation": "Incorrect. This is the hallmark of CLL. This would be the correct answer if the question focused on mature B-cell fragile lymphocytes."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Chronic myeloproliferative disorders can progress to primary myelofibrosis, where the marrow is replaced by fibrous tissue.",
    "pdfPage": 3,
    "pdfQuote": "primary myelofibrosis means the bone marrow is replaced with fibrosis"
  },
  {
    "id": 14,
    "category": "Hematology: CML Targeted Therapy",
    "questionText": "Chronic Myelogenous Leukemia (CML) is uniquely driven by a constitutively active tyrosine kinase. What is the name of the fusion protein targeted by drugs like imatinib in this disease?",
    "options": [
      {
        "text": "PML-RARA",
        "explanation": "Incorrect. This is the fusion protein in APL, targeted by ATRA. This would be the correct answer if the question focused on promyelocyte maturation."
      },
      {
        "text": "BCR-ABL",
        "explanation": "Correct. The t(9;22) translocation fuses the BCR gene with the ABL gene, creating the BCR-ABL fusion protein. This constitutively active tyrosine kinase drives the myeloid proliferation in CML."
      },
      {
        "text": "Bcl-2",
        "explanation": "Incorrect. Bcl-2 is an anti-apoptotic protein overexpressed in Follicular Lymphoma. This would be the correct answer if the question focused on preventing programmed cell death."
      },
      {
        "text": "c-MYC",
        "explanation": "Incorrect. c-MYC is a transcription factor overexpressed in Burkitt Lymphoma. This would be the correct answer if the question focused on rapid metabolic and cell cycle acceleration."
      },
      {
        "text": "Cyclin D1",
        "explanation": "Incorrect. Cyclin D1 is overexpressed in Mantle Cell Lymphoma. This would be the correct answer if the question focused on the G1 to S phase transition in lymphomas."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The BCR-ABL fusion protein is the diagnostic driver of CML and is targeted by tyrosine kinase inhibitors.",
    "pdfPage": 3,
    "pdfQuote": "Philadelphia chromosome t(9;22) CML only"
  },
  {
    "id": 15,
    "category": "Hematology: Hemostasis Disorders",
    "questionText": "A patient is diagnosed with Thrombotic Thrombocytopenic Purpura (TTP). According to the 'Hemorrhage/Thrombosis' review section, which specific enzyme deficiency is associated with the 'pentad' presentation of this disease?",
    "options": [
      {
        "text": "G6PD",
        "explanation": "Incorrect. G6PD deficiency causes oxidative hemolysis, not the microthrombi of TTP. This would be the correct answer if the question focused on bite cells and fava beans."
      },
      {
        "text": "ADAMTS13",
        "explanation": "Correct. TTP is caused by a deficiency of the ADAMTS13 enzyme, which normally cleaves large von Willebrand factor multimers. Without it, multimers accumulate and cause widespread platelet-rich microthrombi."
      },
      {
        "text": "UMP Synthase",
        "explanation": "Incorrect. UMP synthase defect causes Orotic Aciduria. This would be the correct answer if the question focused on megaloblastic anemia refractory to B12."
      },
      {
        "text": "Factor VIII",
        "explanation": "Incorrect. Factor VIII deficiency causes Hemophilia A. This would be the correct answer if the question focused on X-linked inheritance and deep tissue bleeding."
      },
      {
        "text": "Pyruvate Kinase",
        "explanation": "Incorrect. PK deficiency causes extravascular hemolysis and ATP depletion. This would be the correct answer if the question focused on burr cells."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "TTP is caused by a deficiency in the ADAMTS13 enzyme, leading to large vWF multimers and microthrombi.",
    "pdfPage": 7,
    "pdfQuote": "Thrombotic thrombocytopenic purpura (pentad. ADAMST13 deficiency)"
  },
  {
    "id": 16,
    "category": "Hematology: APL Application",
    "questionText": "A 48-year-old female presents to the emergency department with severe bleeding from her gums and widespread petechiae. Her CBC reveals a WBC of 55,000/μL with 40% blasts that contain needle-like cytoplasmic inclusions. Coagulation studies show an elevated PT, elevated PTT, and a markedly elevated D-dimer. Which of the following treatments should be started immediately to induce maturation of the malignant cells and reduce the risk of fatal bleeding?",
    "options": [
      {
        "text": "Imatinib",
        "explanation": "Incorrect. Imatinib targets BCR-ABL in CML, which does not typically present with acute DIC. This would be the correct answer if the patient had t(9;22) and massive splenomegaly."
      },
      {
        "text": "All-Trans Retinoic Acid (ATRA)",
        "explanation": "Correct. This patient has Acute Promyelocytic Leukemia (APL), suggested by the Auer rods (needle-like inclusions) and the acute DIC presentation. ATRA is a vitamin A derivative that forces the malignant promyelocytes to mature, bypassing the block caused by the t(15;17) translocation and preventing the release of procoagulants."
      },
      {
        "text": "Rituximab",
        "explanation": "Incorrect. Rituximab is an anti-CD20 antibody used for mature B-cell lymphomas. Myeloblasts in APL do not express CD20. This would be the correct answer if the question focused on Diffuse Large B-cell Lymphoma."
      },
      {
        "text": "Hydroxyurea",
        "explanation": "Incorrect. Hydroxyurea is used for sickle cell disease to increase HbF or to lower counts in MPDs, but it is not the primary treatment for acute APL. This would be the correct answer if the question focused on RNR inhibition in HbSS."
      },
      {
        "text": "Eculizumab",
        "explanation": "Incorrect. Eculizumab targets C5 in PNH. It has no role in the treatment of acute leukemia. This would be the correct answer if the patient had Budd-Chiari syndrome and dark morning urine."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "APL is a medical emergency requiring immediate ATRA therapy to resolve the risk of DIC and induce blast maturation.",
    "pdfPage": 3,
    "pdfQuote": "Acute promyelocytic leukemia (APL) ... Rx All-Trans Retinoic Acid"
  },
  {
    "id": 17,
    "category": "Hematology: T-ALL Application",
    "questionText": "A 14-year-old male presents with sudden onset of shortness of breath and facial swelling. A chest X-ray reveals a large anterior mediastinal mass compressing the superior vena cava. A biopsy of the mass shows high-grade immature cells that are Tdt positive. Which of the following additional findings is most likely in this patient?",
    "options": [
      {
        "text": "Associated with Down Syndrome",
        "explanation": "Correct. The lecturer explicitly notes that Acute Lymphoblastic Leukemia (ALL) may be associated with Down Syndrome. This patient's presentation of a mediastinal mass and Tdt+ blasts is diagnostic for T-ALL."
      },
      {
        "text": "Associated with H. pylori infection",
        "explanation": "Incorrect. This association is specific to gastric MALToma (Marginal Zone Lymphoma). This would be the correct answer if the patient had chronic abdominal pain and a low-grade B-cell mass."
      },
      {
        "text": "Positive for the t(15;17) translocation",
        "explanation": "Incorrect. This is the translocation for APL (myeloid), not T-ALL (lymphoid). This would be the correct answer if the question mentioned Auer rods."
      },
      {
        "text": "Presence of 'owl-eye' Reed-Sternberg cells",
        "explanation": "Incorrect. These are the hallmark of Hodgkin Lymphoma. While HL can present with a mediastinal mass, it would not consist of Tdt+ lymphoblasts. This would be the correct answer if the question focused on CD15/CD30+ cells."
      },
      {
        "text": "Smudge cells on peripheral smear",
        "explanation": "Incorrect. Smudge cells are seen in CLL, a chronic mature B-cell leukemia of the elderly. This would be the correct answer if the patient was 70 years old with lymphocytosis."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "ALL is the most common childhood malignancy and has a known association with Down Syndrome.",
    "pdfPage": 3,
    "pdfQuote": "Acute lymphoblastic leukemia (ALL) ... May be associated with Down Syndrome"
  },
  {
    "id": 18,
    "category": "Hematology: CML vs. Leukemoid",
    "questionText": "A 55-year-old female is found to have a WBC count of 120,000/μL during a routine exam. The differential shows an increase in neutrophils, myelocytes, and a basophil count of 4%. Physical exam reveals a palpable spleen tip 6 cm below the costal margin. Which of the following genetic findings would confirm the diagnosis of Chronic Myelogenous Leukemia in this patient?",
    "options": [
      {
        "text": "Presence of the BCR-ABL fusion gene",
        "explanation": "Correct. CML is defined by the t(9;22) translocation, which creates the BCR-ABL fusion gene (the Philadelphia chromosome). This distinguishes it from a reactive leukemoid reaction (which would have a low LAP score and no translocation)."
      },
      {
        "text": "Overexpression of the c-MYC oncogene",
        "explanation": "Incorrect. c-MYC overexpression is the hallmark of Burkitt Lymphoma, which presents with aggressive masses, not chronic myeloid expansion. This would be the correct answer if the question mentioned a 'starry sky' histology."
      },
      {
        "text": "Overexpression of Bcl-2 protein",
        "explanation": "Incorrect. This is characteristic of Follicular Lymphoma. This would be the correct answer if the question focused on a low-grade B-cell lymphoma with t(14;18)."
      },
      {
        "text": "Absence of the CD20 surface marker",
        "explanation": "Incorrect. CD20 is a B-cell marker and is not used to diagnose myeloid disorders like CML. This would be the correct answer if the question asked why RS cells in classical HL are hard to identify as B-cells."
      },
      {
        "text": "A blast count of 25% in the marrow",
        "explanation": "Incorrect. A blast count >20% would indicate that the CML has transformed into an acute leukemia (Blast Crisis), rather than being in the stable chronic phase. This would be the correct answer if the question focused on 'Blast Crisis'."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "The t(9;22) translocation creating the BCR-ABL gene is diagnostic for Chronic Myelogenous Leukemia (CML).",
    "pdfPage": 3,
    "pdfQuote": "Philadelphia chromosome t(9;22) CML only"
  },
  {
    "id": 19,
    "category": "Hematology: Multiple Myeloma Labs",
    "questionText": "A 65-year-old male presents with severe lower back pain and fatigue. Laboratory studies reveal a serum calcium of 11.5 mg/dL and a creatinine of 2.2 mg/dL. An X-ray of the spine shows multiple lytic 'punched-out' lesions. A bone marrow biopsy is performed. Which of the following findings is required to establish the diagnosis of Multiple Myeloma?",
    "options": [
      {
        "text": ">20% blasts in the bone marrow",
        "explanation": "Incorrect. This is the criteria for acute leukemia. MM is a mature plasma cell neoplasm. This would be the correct answer if the question concerned AML or ALL."
      },
      {
        "text": ">10% plasma cells in the bone marrow",
        "explanation": "Correct. According to the study sheet, the diagnosis of Multiple Myeloma requires a finding of >10% plasma cells (or plasmablasts) in the bone marrow, along with evidence of end-organ damage (CRAB criteria)."
      },
      {
        "text": "Presence of 'lacunar' variants of RS cells",
        "explanation": "Incorrect. Lacunar cells are characteristic of Nodular Sclerosis Hodgkin Lymphoma. This would be the correct answer if the question focused on lymph node biopsy findings in HL."
      },
      {
        "text": "Positive direct Coombs test",
        "explanation": "Incorrect. MM is not a primary autoimmune hemolytic process. While anemia is present, it is due to marrow replacement. This would be the correct answer if the question focused on Warm AIHA."
      },
      {
        "text": "Absence of the M-spike on SPEP",
        "explanation": "Incorrect. The M-spike (monoclonal protein) is a classic finding *present* in MM, not absent. This would be the correct answer if the question concerned non-secretory states (which are rare)."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Multiple Myeloma is diagnosed by >10% plasma cells in the marrow plus end-organ damage (CRAB).",
    "pdfPage": 4,
    "pdfQuote": ">10% plasma cells, plasmablasts (bone marrow)"
  },
  {
    "id": 20,
    "category": "Hematology: Burkitt Application",
    "questionText": "An 8-year-old child in Equatorial Africa is brought to a clinic with a rapidly enlarging, painful mass of the mandible. A biopsy reveals a dense infiltrate of small B-cells interspersed with pale macrophages giving a 'starry sky' appearance. What is the molecular mechanism driving this malignancy?",
    "options": [
      {
        "text": "Constitutively active BCR-ABL tyrosine kinase",
        "explanation": "Incorrect. This drives CML. While CML can occur in children, the mandibular mass and 'starry sky' histology are specific for Burkitt. This would be the correct answer if the question mentioned basophilia and t(9;22)."
      },
      {
        "text": "Overexpression of c-MYC leading to excessive cell growth",
        "explanation": "Correct. Burkitt Lymphoma is driven by the t(8;14) translocation, which moves the c-MYC oncogene next to the heavy chain Ig locus. This leads to massive overexpression of c-MYC, a transcription factor that accelerates the cell cycle and metabolism."
      },
      {
        "text": "Fusion of the PML gene with RARA",
        "explanation": "Incorrect. This drives APL. This would be the correct answer if the question focused on Auer rods and the risk of massive bleeding."
      },
      {
        "text": "Deletion of the PIGA gene in a stem cell",
        "explanation": "Incorrect. This causes PNH. This would be the correct answer if the question focused on dark morning urine and complement-mediated lysis."
      },
      {
        "text": "Inhibition of apoptosis by Bcl-2 overexpression",
        "explanation": "Incorrect. This is the mechanism for Follicular Lymphoma, a low-grade cancer. Burkitt is a high-grade, highly proliferative cancer. This would be the correct answer if the question focused on t(14;18)."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Burkitt Lymphoma is driven by c-MYC overexpression due to the t(8;14) translocation, appearing histologically as a 'starry sky'.",
    "pdfPage": 5,
    "pdfQuote": "t(8;14) - leads to overexpression of MYC, resulting in excessive cell growth"
  },
  {
    "id": 21,
    "category": "Hematology: CLL Markers",
    "questionText": "A 68-year-old male is asymptomatic but found to have a WBC of 28,000/μL with 85% mature-appearing lymphocytes. Smudge cells are seen on smear. Flow cytometry shows that these B-cells express a marker typically found on T-cells. Which specific marker is this?",
    "options": [
      {
        "text": "CD19",
        "explanation": "Incorrect. CD19 is a standard B-cell marker and is not normally found on T-cells. This would be the correct answer if the question asked for a pan-B-cell marker."
      },
      {
        "text": "CD20",
        "explanation": "Incorrect. CD20 is a standard B-cell marker and the target for rituximab. This would be the correct answer if the question asked about targeted immunotherapy."
      },
      {
        "text": "CD5",
        "explanation": "Correct. Chronic Lymphocytic Leukemia (CLL) is unique because the malignant B-cells co-express CD5, a marker normally found only on T-cells. Other markers include CD19, CD20, and CD23."
      },
      {
        "text": "CD15",
        "explanation": "Incorrect. CD15 is found on neutrophils and Reed-Sternberg cells. This would be the correct answer if the question focused on Hodgkin Lymphoma subtypes."
      },
      {
        "text": "CD30",
        "explanation": "Incorrect. CD30 is found on activated cells and RS cells. This would be the correct answer if the question concerned the phenotype of classical HL."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Malignant B-cells in CLL characteristically co-express the T-cell marker CD5.",
    "pdfPage": 4,
    "pdfQuote": "CD19, CD20, CD 23, and CD5 [CLL]"
  },
  {
    "id": 22,
    "category": "Hematology: Hodgkin Lymphoma Spread",
    "questionText": "A 25-year-old female presents with painless enlargement of her cervical lymph nodes and occasional night sweats. A biopsy reveals Nodular Sclerosis Hodgkin Lymphoma. Which of the following features is most characteristic of the spread of this disease compared to Non-Hodgkin Lymphoma?",
    "options": [
      {
        "text": "Early involvement of the Waldeyer ring",
        "explanation": "Incorrect. Involvement of the oropharyngeal lymphoid tissue (Waldeyer ring) is more common in NHL. This would be the correct answer if the question focused on extranodal NHL sites."
      },
      {
        "text": "Spreads in a contiguous fashion along node chains",
        "explanation": "Correct. Hodgkin Lymphoma characteristically spreads in an orderly, contiguous fashion from one lymph node group to the next. In contrast, Non-Hodgkin Lymphoma often spreads in a non-contiguous, unpredictable pattern."
      },
      {
        "text": "Frequent extranodal involvement of the GI tract",
        "explanation": "Incorrect. Extranodal spread is rare in HL but common in NHL (e.g., MALToma). This would be the correct answer if the question focused on Marginal Zone Lymphoma."
      },
      {
        "text": "Involvement of the mandibular bone",
        "explanation": "Incorrect. This is the characteristic site for endemic Burkitt Lymphoma. This would be the correct answer if the question mentioned EBV and African children."
      },
      {
        "text": "Frequent presence of circulating tumor cells in the blood",
        "explanation": "Incorrect. HL is a disease of the nodes; circulating 'Reed-Sternberg' cells are not seen. This would be the correct answer if the question focused on the definition of Leukemia."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Hodgkin Lymphoma characteristically spreads in a contiguous fashion along lymph node chains.",
    "pdfPage": 6,
    "pdfQuote": "Hodgkin lymphoma – tends to spread in contiguous fashion"
  },
  {
    "id": 23,
    "category": "Hematology: Richter Transformation",
    "questionText": "A patient with a 5-year history of stable, low-grade Chronic Lymphocytic Leukemia (CLL) suddenly develops rapidly enlarging lymph nodes, fever, and weight loss. A biopsy of a new node shows sheets of large, aggressive B-cells. What is the term for this clinical progression?",
    "options": [
      {
        "text": "Blast crisis",
        "explanation": "Incorrect. Blast crisis is the transformation of CML into acute leukemia (AML or ALL). This would be the correct answer if the patient had t(9;22) and a sudden increase in myeloblasts."
      },
      {
        "text": "Richter transformation",
        "explanation": "Correct. Richter transformation is the sudden transformation of CLL (or another low-grade B-cell lymphoma) into an aggressive, high-grade Diffuse Large B-cell Lymphoma (DLBCL). It is marked by a rapid decline in the patient's condition."
      },
      {
        "text": "Leukemoid reaction",
        "explanation": "Incorrect. A leukemoid reaction is a benign, reactive increase in WBCs in response to infection. This would be the correct answer if the question focused on high LAP scores during sepsis."
      },
      {
        "text": "Aplastic crisis",
        "explanation": "Incorrect. Aplastic crisis is a sudden stop in RBC production due to Parvovirus B19 in patients with hemolytic anemia. This would be the correct answer if the patient had sickle cell and a 0% reticulocyte count."
      },
      {
        "text": "Spent phase",
        "explanation": "Incorrect. The 'spent phase' refers to the development of bone marrow fibrosis in myeloproliferative disorders. This would be the correct answer if the question focused on primary myelofibrosis."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Richter transformation is the sudden conversion of CLL into an aggressive Diffuse Large B-cell Lymphoma.",
    "pdfPage": 4,
    "pdfQuote": "Usually low grade but 10% may transform to diffuse large B cell lymphoma (which can also happen in CLL)"
  },
  {
    "id": 24,
    "category": "Hematology: Hairy Cell Leukemia",
    "questionText": "A 55-year-old male presents with massive splenomegaly and pancytopenia. Several attempts at a bone marrow aspiration have resulted in a 'dry tap'. A biopsy shows cells with fine cytoplasmic projections. Which of the following stains is classically positive in this condition?",
    "options": [
      {
        "text": "Prussian Blue",
        "explanation": "Incorrect. Prussian Blue is used to visualize iron stores and ringed sideroblasts. This would be the correct answer if the question focused on lead poisoning or sideroblastic anemia."
      },
      {
        "text": "Tartrate-resistant acid phosphatase (TRAP)",
        "explanation": "Correct. This is the classic presentation of Hairy Cell Leukemia. The 'hairy' projections on the cells and the 'dry tap' (due to marrow fibrosis) are hallmark features. These cells are characteristically TRAP positive."
      },
      {
        "text": "Crystal Violet",
        "explanation": "Incorrect. Crystal violet (supravital stain) is used to visualize Heinz bodies in G6PD deficiency. This would be the correct answer if the question focused on bite cells and oxidative stress."
      },
      {
        "text": "Periodic acid-Schiff (PAS)",
        "explanation": "Incorrect. PAS is used for glycogen or fungal walls and is sometimes positive in ALL, but it is not the diagnostic stain for Hairy Cell. This would be the correct answer if the question focused on Whipple's disease."
      },
      {
        "text": "Sudan Black",
        "explanation": "Incorrect. Sudan Black stains lipids and is used to identify myeloid cells in AML. This would be the correct answer if the question focused on identifying Auer rods."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Hairy Cell Leukemia presents with a 'dry tap' bone marrow and cells that are TRAP positive.",
    "pdfPage": 4,
    "pdfQuote": "extensive splenomegaly, “dry” bone marrow tap ... historically TRAP positive"
  },
  {
    "id": 25,
    "category": "Hematology: Mycosis Fungoides",
    "questionText": "A patient presents with various stages of skin rashes, including plaques and nodules. A skin biopsy reveals an infiltrate of CD4+ T-cells with distinctive 'cerebriform' nuclei. What is the most likely diagnosis?",
    "options": [
      {
        "text": "Chronic Lymphocytic Leukemia",
        "explanation": "Incorrect. CLL is a B-cell leukemia and does not typically present as a primary skin rash with T-cell markers. This would be the correct answer if the question focused on CD5+ B-cells and smudge cells."
      },
      {
        "text": "Mycosis Fungoides",
        "explanation": "Correct. Mycosis Fungoides is a cutaneous T-cell lymphoma. The malignant cells are CD4+ T-cells that characteristically have 'cerebriform' (brain-like) nuclei. When these cells enter the blood, the condition is called Sezary Syndrome."
      },
      {
        "text": "Marginal Zone Lymphoma",
        "explanation": "Incorrect. This is a B-cell lymphoma often associated with MALT. This would be the correct answer if the question focused on H. pylori and the stomach."
      },
      {
        "text": "Nodular Sclerosis HL",
        "explanation": "Incorrect. This is a B-cell derived giant cell tumor of the nodes. This would be the correct answer if the question focused on lacunar cells and young females."
      },
      {
        "text": "Mantle Cell Lymphoma",
        "explanation": "Incorrect. This is a B-cell lymphoma with t(11;14). This would be the correct answer if the question focused on Cyclin D1."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Mycosis Fungoides is a cutaneous T-cell lymphoma featuring CD4+ cells with cerebriform nuclei.",
    "pdfPage": 5,
    "pdfQuote": "Mycosis Fungoides ... CD4+ T cells with “cerebriform” nuclei"
  },
  {
    "id": 26,
    "category": "Hematology: Mantle Cell Lymphoma",
    "questionText": "Mantle cell lymphoma is a rare B-cell lymphoma driven by the t(11;14) translocation. Which cell cycle regulator is overexpressed as a result of this mutation?",
    "options": [
      {
        "text": "Bcl-2",
        "explanation": "Incorrect. Bcl-2 is overexpressed in Follicular Lymphoma via t(14;18). This would be the correct answer if the question focused on inhibiting apoptosis."
      },
      {
        "text": "Cyclin D1",
        "explanation": "Correct. In Mantle Cell Lymphoma, the t(11;14) translocation moves the Cyclin D1 gene (CCND1) to the IgH locus. This leads to overexpression of Cyclin D1, which promotes the G1 to S phase transition in the cell cycle."
      },
      {
        "text": "c-MYC",
        "explanation": "Incorrect. c-MYC is overexpressed in Burkitt Lymphoma. This would be the correct answer if the question focused on t(8;14) and 'starry sky' morphology."
      },
      {
        "text": "BCR-ABL",
        "explanation": "Incorrect. This is the tyrosine kinase in CML. This would be the correct answer if the question focused on the Philadelphia chromosome."
      },
      {
        "text": "PML-RARA",
        "explanation": "Incorrect. This is the fusion protein in APL. This would be the correct answer if the question focused on ATRA therapy."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Mantle cell lymphoma is characterized by the t(11;14) translocation and overexpression of Cyclin D1.",
    "pdfPage": 5,
    "pdfQuote": "Mantle cell lymphoma ... cyclin D1 overexpression, t(11;14)"
  },
  {
    "id": 27,
    "category": "Hematology: vWD Pathology",
    "questionText": "von Willebrand Disease (vWD) is a common inherited bleeding disorder. According to the study sheet's review of hemorrhage, what is the primary clinical deficit in these patients?",
    "options": [
      {
        "text": "Inability to form a stable fibrin clot",
        "explanation": "Incorrect. This describes hemophilia (secondary hemostasis). vWD is a primary hemostasis defect. This would be the correct answer if the question focused on Factor VIII or IX deficiency."
      },
      {
        "text": "Impaired platelet adhesion to the subendothelium",
        "explanation": "Correct. von Willebrand Factor (vWF) is required for platelets to adhere to the exposed subendothelial collagen via the GpIb receptor. Deficiency leads to impaired primary hemostasis and a prolonged bleeding time."
      },
      {
        "text": "Deficiency of the ADAMTS13 protease",
        "explanation": "Incorrect. This is the cause of TTP. This would be the correct answer if the question focused on the pentad of symptoms including fever and neurological changes."
      },
      {
        "text": "Inhibition of vitamin K-dependent factors",
        "explanation": "Incorrect. This is the mechanism of warfarin. This would be the correct answer if the question focused on Factors II, VII, IX, and X."
      },
      {
        "text": "Excessive production of D-dimers",
        "explanation": "Incorrect. D-dimers are a sign of active clot lysis, as in DIC. This would be the correct answer if the question focused on APL-induced coagulopathy."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "von Willebrand Factor is essential for platelet adhesion to the subendothelium; its deficiency is a common cause of easy bruising and mucosal bleeding.",
    "pdfPage": 7,
    "pdfQuote": "von Willebrand disease (do not need to know subtypes)"
  },
  {
    "id": 28,
    "category": "Hematology: DIC in APL",
    "questionText": "Disseminated Intravascular Coagulation (DIC) is a catastrophic complication of Acute Promyelocytic Leukemia (APL). What is the primary trigger released from the malignant cells that initiates the coagulation cascade?",
    "options": [
      {
        "text": "Large von Willebrand multimers",
        "explanation": "Incorrect. These accumulate in TTP due to ADAMTS13 deficiency. This would be the correct answer if the question focused on the lack of multimer cleavage."
      },
      {
        "text": "Procoagulant substances from Auer rods",
        "explanation": "Correct. The blasts in APL are filled with primary granules and Auer rods. When these cells are destroyed (by the disease or by starting chemo), they release tissue factor-like procoagulants that trigger systemic activation of coagulation (DIC)."
      },
      {
        "text": "Anti-EPO neutralizing antibodies",
        "explanation": "Incorrect. These cause Pure Red Cell Aplasia in patients on ESAs. This would be the correct answer if the question focused on epoetin alfa complications."
      },
      {
        "text": "Soluble B-cell receptor fragments",
        "explanation": "Incorrect. These are not a standard trigger for DIC. This would be the correct answer if the question were about a hypothetical B-cell activation marker."
      },
      {
        "text": "Excessive c-MYC protein",
        "explanation": "Incorrect. c-MYC is an intracellular transcription factor and does not directly trigger the coagulation cascade. This would be the correct answer if the question focused on Burkitt lymphoma genetics."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "APL blasts contain Auer rods that, when released, can trigger life-threatening DIC.",
    "pdfPage": 3,
    "pdfQuote": "Auer Rods ... May be associated with DIC"
  },
  {
    "id": 29,
    "category": "Hematology: HL EBV Association",
    "questionText": "Certain subtypes of Hodgkin Lymphoma have a much higher association with Epstein-Barr Virus (EBV) than others. Which classical subtype is noted by the lecturer as having the highest association with EBV?",
    "options": [
      {
        "text": "Nodular Sclerosis",
        "explanation": "Incorrect. While common, it has a lower EBV association than some other types. This would be the correct answer if the question focused on the most common HL subtype overall."
      },
      {
        "text": "Mixed Cellularity",
        "explanation": "Incorrect. This subtype has a high EBV association (~70%), but the lecturer specifically highlights another. This would be the correct answer if the question focused on an HL subtype rich in various inflammatory cells."
      },
      {
        "text": "Lymphocyte-depleted",
        "explanation": "Correct. According to the study sheet, the Lymphocyte-depleted subtype of Hodgkin Lymphoma has the highest association with EBV infection. It also typically has the worst prognosis."
      },
      {
        "text": "Lymphocyte-rich",
        "explanation": "Incorrect. This subtype is relatively rare and has an excellent prognosis, with a lower EBV association than the depleted type. This would be the correct answer if the question focused on the subtype with the best clinical outcome."
      },
      {
        "text": "Nodular lymphocyte predominant",
        "explanation": "Incorrect. This is the 'non-classical' subtype and is not typically associated with EBV. This would be the correct answer if the question focused on the CD20+ RS variant."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Lymphocyte-depleted Hodgkin Lymphoma has the highest association with EBV and carries a poor prognosis.",
    "pdfPage": 6,
    "pdfQuote": "Lymphocyte-depleted – highest association with EBV"
  },
  {
    "id": 30,
    "category": "Hematology: Plasma Cell Neoplasms",
    "questionText": "Serum Protein Electrophoresis (SPEP) is a critical tool for diagnosing plasma cell disorders. Which finding on an SPEP is most characteristic of Multiple Myeloma?",
    "options": [
      {
        "text": "A broad, polyclonal gamma peak",
        "explanation": "Incorrect. A polyclonal peak indicates a reactive process (infection/inflammation). This would be the correct answer if the question focused on a normal immune response."
      },
      {
        "text": "A narrow, monoclonal M-spike",
        "explanation": "Correct. Multiple Myeloma features a clonal proliferation of plasma cells, all producing the same antibody. This results in a sharp, narrow 'M-spike' in the gamma globulin region of the SPEP."
      },
      {
        "text": "A markedly increased albumin peak",
        "explanation": "Incorrect. Albumin is often *decreased* in MM due to the massive production of globulins and potential renal loss. This would be the correct answer if the question focused on dehydration-induced hemoconcentration."
      },
      {
        "text": "Absence of the alpha-1 peak",
        "explanation": "Incorrect. This is the finding in alpha-1 antitrypsin deficiency. This would be the correct answer if the question focused on early-onset emphysema and liver cirrhosis."
      },
      {
        "text": "Increased beta globulin with normal gamma",
        "explanation": "Incorrect. While some IgA myelomas show a beta-spike, the most classic and general finding mentioned is the monoclonal M-spike in the gamma region. This would be the correct answer if the question focused on iron-transporting proteins (transferrin)."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "A monoclonal M-spike on SPEP is a classic diagnostic finding in Multiple Myeloma.",
    "pdfPage": 4,
    "pdfQuote": "monoclonal protein, M spike, seen best on serum electrophoresis (SPEP)"
  }
];

window.Test_L154 = Test_L154;
