const Test_L157 = [
  {
    "id": 1,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "What is the primary cellular target of Imatinib in the treatment of Chronic Myelogenous Leukemia (CML)?",
    "options": [
      {
        "text": "The extracellular domain of the HER2 receptor",
        "explanation": "Incorrect. This is the target of Trastuzumab."
      },
      {
        "text": "The intracellular ATP-binding pocket of the BCR-ABL tyrosine kinase",
        "explanation": "Correct. Imatinib is a small molecule inhibitor that specifically blocks the ATP-binding site of the constitutively active BCR-ABL tyrosine kinase (the product of the Philadelphia chromosome), preventing downstream signaling and tumor cell proliferation."
      },
      {
        "text": "Soluble Vascular Endothelial Growth Factor (VEGF)",
        "explanation": "Incorrect. This is the target of Bevacizumab."
      },
      {
        "text": "The CD20 surface marker on B lymphocytes",
        "explanation": "Incorrect. This is the target of Rituximab."
      },
      {
        "text": "The 26S proteasome complex",
        "explanation": "Incorrect. This is the target of Bortezomib."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Imatinib specifically targets the BCR-ABL kinase in CML; mutations like T315I can lead to resistance.",
    "pdfPage": 26,
    "pdfQuote": "BCR::ABL1 inhibitors occupy the ATP binding pocket → prevent substrate phosphorylation and downstream activation of signals"
  },
  {
    "id": 2,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "A 62-year-old male with metastatic colorectal cancer is considered for treatment with Cetuximab. Genetic testing of the tumor reveals a KRAS mutation. What is the clinical significance of this finding?",
    "options": [
      {
        "text": "Cetuximab will be highly effective in this patient",
        "explanation": "Incorrect. KRAS mutations confer resistance to EGFR inhibitors."
      },
      {
        "text": "The patient is at increased risk for Cetuximab-induced cardiotoxicity",
        "explanation": "Incorrect. Cardiotoxicity is more associated with HER2 inhibitors like Trastuzumab."
      },
      {
        "text": "Cetuximab is unlikely to be effective because the KRAS mutation allows signaling downstream of the blocked EGFR",
        "explanation": "Correct. Cetuximab inhibits the Epidermal Growth Factor Receptor (EGFR). However, if the KRAS gene (which is downstream of EGFR) is mutated and 'always on,' blocking the receptor above it will have no effect on tumor growth."
      },
      {
        "text": "The KRAS mutation makes the tumor uniquely sensitive to Bevacizumab",
        "explanation": "Incorrect. While bevacizumab might be used, the KRAS status specifically dictates the failure of EGFR inhibitors (Cetuximab/Panitumumab)."
      },
      {
        "text": "The patient will require a 50% dose reduction of Cetuximab",
        "explanation": "Incorrect. The drug is essentially contraindicated or considered ineffective in this scenario."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Always test KRAS status in colorectal cancer; EGFR inhibitors (Cetuximab) only work in KRAS wild-type tumors.",
    "pdfPage": 31,
    "pdfQuote": "Cetuximab and panitumumab are NOT effective in tumors expressing mutations of KRAS oncogene"
  },
  {
    "id": 3,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "Which targeted therapy is associated with a severe risk of impaired wound healing and wound dehiscence, requiring it to be withheld before and after major surgery?",
    "options": [
      {
        "text": "Rituximab",
        "explanation": "Incorrect. Rituximab's major risks are infusion reactions and infection reactivation."
      },
      {
        "text": "Bevacizumab",
        "explanation": "Correct. Bevacizumab neutralizes VEGF, which is critical for angiogenesis and wound repair. Inhibiting VEGF leads to hypertension, bleeding, and profound impairment of wound healing."
      },
      {
        "text": "Imatinib",
        "explanation": "Incorrect. While it has side effects like periorbital edema, wound healing is not its primary surgical concern."
      },
      {
        "text": "Trastuzumab",
        "explanation": "Incorrect. Trastuzumab's primary concern is cardiac function."
      },
      {
        "text": "Bortezomib",
        "explanation": "Incorrect. Bortezomib is associated with peripheral neuropathy."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Bevacizumab (VEGF inhibitor) = No surgery! (Stop weeks before and after).",
    "pdfPage": 32,
    "pdfQuote": "Adverse effects are related to impairment of angiogenesis including... poor wound healing / wound dehiscence"
  },
  {
    "id": 4,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "What is the primary mechanism by which the immune checkpoint inhibitor Nivolumab works?",
    "options": [
      {
        "text": "It blocks the CTLA-4 receptor on T-cells",
        "explanation": "Incorrect. This is the mechanism of Ipilimumab."
      },
      {
        "text": "It blocks the PD-1 receptor on T-cells to release the 'brakes' on the immune response",
        "explanation": "Correct. Nivolumab and Pembrolizumab are monoclonal antibodies that block the Programmed Death-1 (PD-1) receptor on T-cells, preventing tumor cells from using the PD-L1 ligand to suppress T-cell activity."
      },
      {
        "text": "It directly lyses tumor cells via complement-dependent cytotoxicity",
        "explanation": "Incorrect. While it enhances the immune response, its primary action is checkpoint blockade, not direct lysis."
      },
      {
        "text": "It binds to soluble PD-L1 in the serum",
        "explanation": "Incorrect. While PD-L1 inhibitors exist (e.g., Atezolizumab), Nivolumab specifically targets the PD-1 receptor on the T-cell."
      },
      {
        "text": "It genetically engineers T-cells to express a new receptor",
        "explanation": "Incorrect. This describes CAR T-cell therapy."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Checkpoint inhibitors like Nivolumab (anti-PD-1) 'release the brakes' on the patient's own immune system.",
    "pdfPage": 64,
    "pdfQuote": "PD-1 Inhibitors... Block PD-1:PD-L1 interaction → release immune suppression"
  },
  {
    "id": 5,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "A patient being treated with an immune checkpoint inhibitor develops severe abdominal pain and bloody diarrhea. After ruling out infection, the oncologist diagnoses immune-mediated colitis. What is the first-line treatment for this immune-related adverse event (irAE)?",
    "options": [
      {
        "text": "Increasing the dose of the checkpoint inhibitor",
        "explanation": "Incorrect. This would worsen the autoimmune-like reaction."
      },
      {
        "text": "High-dose systemic corticosteroids (e.g., Methylprednisolone)",
        "explanation": "Correct. Severe irAEs are caused by an overactive immune system attacking healthy tissue. The standard management is to pause the immunotherapy and administer high-dose corticosteroids to suppress the inflammation."
      },
      {
        "text": "Immediate surgical resection of the affected colon",
        "explanation": "Incorrect. Surgery is only for complications like perforation; the initial treatment is medical immunosuppression."
      },
      {
        "text": "Administration of Allopurinol",
        "explanation": "Incorrect. Allopurinol is for Tumor Lysis Syndrome, not colitis."
      },
      {
        "text": "Broad-spectrum antibiotics and aggressive IVF",
        "explanation": "Incorrect. While supportive care is needed, corticosteroids are the definitive treatment for the underlying immune mechanism."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Immune-related side effects (irAEs) = Corticosteroids. High-dose steroids are the 'off-switch' for these reactions.",
    "pdfPage": 65,
    "pdfQuote": "Immune-related adverse events... Treatment is based on the severity of the observed toxicity (Cessation of therapy, GC/Corticosteroids)"
  },
  {
    "id": 6,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "Lenalidomide is a cornerstone in the treatment of Multiple Myeloma. What is its unique molecular mechanism of action?",
    "options": [
      {
        "text": "Direct inhibition of the 20S core of the proteasome",
        "explanation": "Incorrect. This is the mechanism of Bortezomib."
      },
      {
        "text": "Binding to cereblon (CRBN) to facilitate the ubiquitination and degradation of specific transcription factors",
        "explanation": "Correct. Lenalidomide (an IMiD) acts as a molecular 'glue'. it binds to the cereblon E3 ubiquitin ligase complex, which then targets specific transcription factors (like IKZF1 and IKZF3) for degradation by the proteasome, leading to myeloma cell death."
      },
      {
        "text": "Binding to CD38 to induce antibody-dependent cellular cytotoxicity (ADCC)",
        "explanation": "Incorrect. This is the mechanism of Daratumumab."
      },
      {
        "text": "Inhibition of the CDK4/6 complex to arrest the cell cycle in G1",
        "explanation": "Incorrect. This is the mechanism of Palbociclib."
      },
      {
        "text": "Competitive inhibition of BCR-ABL kinase",
        "explanation": "Incorrect. This is Imatinib's mechanism."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Lenalidomide (IMiD) = Cereblon Binder = Ubiquitination/Degradation of tumor proteins.",
    "pdfPage": 52,
    "pdfQuote": "LEN binds cereblon (CRBN)... recruits substrates... for ubiquitination... proteasome degradation of transcription factors"
  },
  {
    "id": 7,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "A 28-year-old male is being treated for a B-cell lymphoma. Two days after receiving his first dose of CAR T-cell therapy (Tisagenlecleucel), he develops a fever of 103°F, profound hypotension, and tachycardia. What is the name of this life-threatening syndrome associated with massive T-cell activation?",
    "options": [
      {
        "text": "Tumor Lysis Syndrome",
        "explanation": "Incorrect. While possible, the clinical picture of rapid hemodynamic collapse shortly after T-cell infusion is classic for CRS."
      },
      {
        "text": "Cytokine Release Syndrome (CRS)",
        "explanation": "Correct. CRS is a systemic inflammatory response triggered by the activation and proliferation of CAR T-cells, which release massive amounts of cytokines (like IL-6). It presents with fever, hypotension, and organ failure."
      },
      {
        "text": "Immune Effector Cell-Associated Neurotoxicity Syndrome (ICANS)",
        "explanation": "Incorrect. ICANS presents with neurological symptoms (confusion, seizures, encephalopathy), not primary hemodynamic collapse (though they can overlap)."
      },
      {
        "text": "Hand-Foot Syndrome",
        "explanation": "Incorrect. This is a skin toxicity of 5-FU/capecitabine."
      },
      {
        "text": "Hemorrhagic Cystitis",
        "explanation": "Incorrect. This is a toxicity of cyclophosphamide."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "CAR-T Therapy = Cytokine Release Syndrome. Manage with IL-6 blockers like Tocilizumab.",
    "pdfPage": 67,
    "pdfQuote": "Cytokine release syndrome... characterized by fever and multiple organ dysfunction... Hospitalize at the first sign... tocilizumab"
  },
  {
    "id": 8,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "Which targeted agent inhibits the Cyclin-Dependent Kinase (CDK) 4/6 complex, effectively preventing the phosphorylation of the retinoblastoma (Rb) protein?",
    "options": [
      {
        "text": "Olaparib",
        "explanation": "Incorrect. Olaparib is a PARP inhibitor."
      },
      {
        "text": "Palbociclib",
        "explanation": "Correct. Palbociclib and other '-ciclibs' are CDK4/6 inhibitors. By inhibiting these kinases, they keep Rb in its active, hypophosphorylated state, which prevents the cell from progressing from G1 to the S phase."
      },
      {
        "text": "Lapatinib",
        "explanation": "Incorrect. Lapatinib is a dual EGFR/HER2 tyrosine kinase inhibitor."
      },
      {
        "text": "Daratumumab",
        "explanation": "Incorrect. Daratumumab targets CD38."
      },
      {
        "text": "Ipilimumab",
        "explanation": "Incorrect. Ipilimumab is an anti-CTLA-4 checkpoint inhibitor."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "CDK4/6 inhibitors (Palbociclib) stop the cell at the G1/S boundary by keeping the Rb 'gatekeeper' active.",
    "pdfPage": 42,
    "pdfQuote": "CDK4/6 inhibitors... inhibit CDK4/6 which prevents... transition specifically from the G1 phase the S phase."
  },
  {
    "id": 9,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "A patient with an advanced ovarian cancer harboring a deleterious BRCA1 mutation is prescribed Olaparib. What is the mechanism of action of this drug?",
    "options": [
      {
        "text": "Inducing double-strand DNA breaks via topoisomerase II inhibition",
        "explanation": "Incorrect. This describes etoposide."
      },
      {
        "text": "Inhibiting Poly(ADP-ribose) polymerase (PARP) to prevent single-strand DNA repair",
        "explanation": "Correct. Olaparib is a PARP inhibitor. In BRCA-mutated cells (which already have defective double-strand break repair), inhibiting PARP (which handles single-strand repair) creates a state of 'synthetic lethality' where the cell cannot repair any DNA damage and undergoes apoptosis."
      },
      {
        "text": "Binding to the VEGF receptor to block angiogenesis",
        "explanation": "Incorrect. This is the mechanism of drugs like Sunitinib or Bevacizumab."
      },
      {
        "text": "Genetically modifying T-cells to express chimeric receptors",
        "explanation": "Incorrect. This describes CAR T-cell therapy."
      },
      {
        "text": "Blocking the PD-L1 ligand on the surface of tumor cells",
        "explanation": "Incorrect. This describes Atezolizumab."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "PARP inhibitors + BRCA mutations = Synthetic Lethality. The tumor is cornered with no way to fix its DNA.",
    "pdfPage": 44,
    "pdfQuote": "PARP inhibitors (“paribs) in tumors with deleterious BRCA1/2 mutations... prevents tumor cells from repairing DNA"
  },
  {
    "id": 10,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "What is the primary surface marker targeted by Rituximab, and which cell type is affected?",
    "options": [
      {
        "text": "CD19 on B-cell precursors",
        "explanation": "Incorrect. While CD19 is on B-cells, Rituximab specifically targets CD20."
      },
      {
        "text": "CD20 on mature B-cells",
        "explanation": "Correct. Rituximab is a monoclonal antibody against CD20, a surface protein found on mature B-cells and most B-cell malignancies (CLL, NHL). It is absent on plasma cells and stem cells."
      },
      {
        "text": "CD38 on plasma cells",
        "explanation": "Incorrect. This is the target of Daratumumab."
      },
      {
        "text": "HER2 on breast cancer cells",
        "explanation": "Incorrect. This is the target of Trastuzumab."
      },
      {
        "text": "EGFR on colorectal cancer cells",
        "explanation": "Incorrect. This is the target of Cetuximab."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Rituximab targets CD20; it 'Rips' the mature B-cells out of the body.",
    "pdfPage": 45,
    "pdfQuote": "CD20 is a transmembrane protein expressed on 95% of B cells... CD20 is a useful biomarker... Rituximab"
  },
  {
    "id": 11,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "A 55-year-old female with HER2-positive breast cancer is receiving Trastuzumab. She presents with progressive shortness of breath and pedal edema. An echocardiogram shows an LVEF of 40% (Baseline 60%). Which of the following statements regarding this cardiotoxicity is most accurate compared to Doxorubicin-induced cardiotoxicity?",
    "options": [
      {
        "text": "It is typically irreversible and results in permanent damage",
        "explanation": "Incorrect. Unlike anthracyclines (Doxorubicin), Trastuzumab-induced cardiotoxicity is often reversible upon discontinuation."
      },
      {
        "text": "It is generally reversible and is NOT related to the generation of free radicals",
        "explanation": "Correct. Trastuzumab-induced cardiotoxicity involves a decrease in contractility (Type II cardiotoxicity) that is typically reversible and dose-independent, unlike the cumulative, free-radical mediated, irreversible damage (Type I) caused by Doxorubicin."
      },
      {
        "text": "It is caused by the accumulation of acrolein in the myocardium",
        "explanation": "Incorrect. Acrolein is for bladder toxicity."
      },
      {
        "text": "The risk is decreased when given concurrently with anthracyclines",
        "explanation": "Incorrect. Concurrent use with anthracyclines *significantly increases* the risk of heart failure."
      },
      {
        "text": "It is the result of an immune checkpoint blockade on cardiomyocytes",
        "explanation": "Incorrect. This is the mechanism of ICI-induced myocarditis, not Trastuzumab."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Trastuzumab Cardiotoxicity = Reversible / No Free Radicals. Doxorubicin = Irreversible / Free Radicals.",
    "pdfPage": 39,
    "pdfQuote": "Cardiac failure the most serious toxicity... Decreased left ventricular ejection fraction... Highest risk with anthracycline chemotherapy regimen"
  },
  {
    "id": 12,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "A patient with Chronic Myelogenous Leukemia (CML) develops resistance to Imatinib. Genetic analysis shows a T315I mutation in the BCR-ABL kinase domain. Which of the following drugs is specifically designed to overcome this mutation?",
    "options": [
      {
        "text": "Dasatinib",
        "explanation": "Incorrect. Dasatinib is a 2nd generation TKI but is still ineffective against the T315I mutation."
      },
      {
        "text": "Nilotinib",
        "explanation": "Incorrect. Like dasatinib, nilotinib fails in the presence of T315I."
      },
      {
        "text": "Ponatinib",
        "explanation": "Correct. Ponatinib is a 'pan-BCR-ABL' inhibitor designed with a unique structure (triple-bond linkage) that allows it to bind even when the 'gatekeeper' T315I mutation is present. Asciminib is also effective."
      },
      {
        "text": "Bevacizumab",
        "explanation": "Incorrect. This targets VEGF, not BCR-ABL."
      },
      {
        "text": "Trastuzumab",
        "explanation": "Incorrect. This targets HER2."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "T315I = The 'Gatekeeper' mutation. Use Ponatinib to kick the door down.",
    "pdfPage": 24,
    "pdfQuote": "Tumor cells harboring the T315I mutation is susceptible only to ponatinib and asciminib"
  },
  {
    "id": 13,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "Immunomodulatory imide drugs (IMiDs) like Thalidomide and Lenalidomide are highly effective but carry a strict Black Box Warning. What is the most critical contraindication for these drugs?",
    "options": [
      {
        "text": "Metastatic brain lesions",
        "explanation": "Incorrect. Not a primary contraindication."
      },
      {
        "text": "Pregnancy, due to severe teratogenicity (phocomelia)",
        "explanation": "Correct. IMiDs are notoriously teratogenic, causing severe limb defects (phocomelia). They are strictly contraindicated in pregnancy, and both men and women must use stringent contraceptive measures (REMS program)."
      },
      {
        "text": "Current treatment with a PD-1 inhibitor",
        "explanation": "Incorrect. They are sometimes used in combination."
      },
      {
        "text": "History of mild hypertension",
        "explanation": "Incorrect. This is a risk for VEGF inhibitors, not a strict contraindication for IMiDs."
      },
      {
        "text": "Isolated periorbital edema",
        "explanation": "Incorrect. This is a manageable side effect of imatinib."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Thalidomide/Lenalidomide = 'The Limb Drug'. Never give to a pregnant patient.",
    "pdfPage": 55,
    "pdfQuote": "Thalidomide: Pregnancy Contraindicated... Stunted limb growth (phocomelia)"
  },
  {
    "id": 14,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "Daratumumab is a monoclonal antibody used in Multiple Myeloma. It targets a marker that is highly expressed on myeloma cells but absent on stem cells. What is this target?",
    "options": [
      {
        "text": "CD20",
        "explanation": "Incorrect. CD20 is for Rituximab/B-cells."
      },
      {
        "text": "CD19",
        "explanation": "Incorrect. CD19 is targeted by CAR T-cells in leukemias."
      },
      {
        "text": "CD38",
        "explanation": "Correct. Daratumumab targets CD38, which is highly expressed on plasma cells (and thus Multiple Myeloma cells). Its mechanism includes ADCC and complement-mediated lysis."
      },
      {
        "text": "BCMA",
        "explanation": "Incorrect. While BCMA is targeted in myeloma, it is the target for specific CAR T-cell therapies (like Idecabtagene), not Daratumumab."
      },
      {
        "text": "Cereblon",
        "explanation": "Incorrect. Cereblon is the intracellular target of IMiDs."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Multiple Myeloma Targeted Trio: Daratumumab (CD38), Bortezomib (Proteasome), Lenalidomide (IMiD).",
    "pdfPage": 59,
    "pdfQuote": "Anti-CD38 Agent: Daratumumab... CD38 is a cell surface glycoprotein highly expressed on myeloma cells"
  },
  {
    "id": 15,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "What is the primary mechanism of Bortezomib in the treatment of Multiple Myeloma?",
    "options": [
      {
        "text": "Binding to the 26S proteasome to inhibit the degradation of pro-apoptotic proteins",
        "explanation": "Correct. Bortezomib is a proteasome inhibitor. By blocking the 26S proteasome, it prevents the degradation of inhibitory proteins (like IκB), thereby blocking the NF-κB pathway and allowing pro-apoptotic signals to accumulate, leading to tumor cell death."
      },
      {
        "text": "Inhibiting the ATP-binding site of the HER2 receptor",
        "explanation": "Incorrect. This describes lapatinib."
      },
      {
        "text": "Blocking the PD-L1 ligand on tumor cells",
        "explanation": "Incorrect. This describes Atezolizumab."
      },
      {
        "text": "Stabilizing microtubules to trigger M-phase arrest",
        "explanation": "Incorrect. This describes taxanes."
      },
      {
        "text": "Upregulating the expression of cereblon",
        "explanation": "Incorrect. IMiDs *bind* cereblon, but bortezomib acts directly on the proteasome."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Bortezomib = 'The Trash Can Lid'. It stops the proteasome from cleaning up pro-apoptotic proteins.",
    "pdfPage": 58,
    "pdfQuote": "Mechanism of action: Bind 20S core of 26S proteasome... inhibits proteolysis of ubiquinated proteins"
  },
  {
    "id": 16,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "A patient with advanced melanoma is receiving Ipilimumab. This drug works by blocking which of the following immune checkpoints?",
    "options": [
      {
        "text": "PD-1",
        "explanation": "Incorrect. Nivolumab and Pembrolizumab block PD-1."
      },
      {
        "text": "PD-L1",
        "explanation": "Incorrect. Atezolizumab blocks PD-L1."
      },
      {
        "text": "CTLA-4",
        "explanation": "Correct. Ipilimumab is a monoclonal antibody that blocks CTLA-4 on T-cells. CTLA-4 normally acts as an 'off-switch' by outcompeting the co-stimulatory signal (CD28) for binding to B7 (CD80/86) on antigen-presenting cells."
      },
      {
        "text": "CD20",
        "explanation": "Incorrect. CD20 is not an immune checkpoint."
      },
      {
        "text": "HER2",
        "explanation": "Incorrect. HER2 is a growth factor receptor."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "CTLA-4 blockade (Ipilimumab) acts earlier in the immune response (priming phase) compared to PD-1 blockade.",
    "pdfPage": 64,
    "pdfQuote": "CTLA-4 Inhibitors: Ipilimumab: Blocks CTLA-4 → allows for enhanced T-cell activation"
  },
  {
    "id": 17,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "Which of the following describes the 'synthetic lethality' exploited by PARP inhibitors?",
    "options": [
      {
        "text": "Combining two conventional chemotherapies to overcome efflux pumps",
        "explanation": "Incorrect. This is synergy, not synthetic lethality."
      },
      {
        "text": "The drug is only toxic to cells that have a pre-existing defect in a parallel DNA repair pathway (e.g., BRCA mutation)",
        "explanation": "Correct. PARP inhibitors block single-strand break repair. In a normal cell, the cell can use homologous recombination (via BRCA) to fix the resulting damage. In a BRCA-mutated cell, both pathways are now gone, and the cell cannot survive. The 'lethality' is only achieved through the 'synthesis' of the drug's effect and the genetic mutation."
      },
      {
        "text": "Using a monoclonal antibody to deliver a toxin to a specific receptor",
        "explanation": "Incorrect. This describes antibody-drug conjugates."
      },
      {
        "text": "Genetically engineering T-cells to target a unique tumor antigen",
        "explanation": "Incorrect. This describes CAR T-cell therapy."
      },
      {
        "text": "Blocking a tyrosine kinase to prevent autophosphorylation",
        "explanation": "Incorrect. This is standard kinase inhibition."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Synthetic Lethality: 1 (BRCA mutation) + 1 (PARP inhibitor) = 0 (Cancer cell death).",
    "pdfPage": 44,
    "pdfQuote": "The use of PARP inhibitors in tumors with deleterious BRCA1/2 mutations... prevents tumor cells from repairing DNA, making them vulnerable to apoptosis."
  },
  {
    "id": 18,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "What is the suffix typically used for small molecule tyrosine kinase inhibitors that act intracellularly?",
    "options": [
      {
        "text": "-mab",
        "explanation": "Incorrect. -mab stands for Monoclonal Antibody (extracellular)."
      },
      {
        "text": "-tinib",
        "explanation": "Correct. Small molecule tyrosine kinase inhibitors typically end in '-tinib' (e.g., Imatinib, Erlotinib). If they inhibit multiple kinases, they might end in '-nib' (e.g., Sunitinib)."
      },
      {
        "text": "-ciclib",
        "explanation": "Incorrect. -ciclib is for CDK inhibitors."
      },
      {
        "text": "-parib",
        "explanation": "Incorrect. -parib is for PARP inhibitors."
      },
      {
        "text": "-osone",
        "explanation": "Incorrect. -osone is typically for glucocorticoids like dexamethasone."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Remember: -mab = massive (Monoclonal Antibody, stays outside). -tinib = tiny (Small molecule, goes inside).",
    "pdfPage": 21,
    "pdfQuote": "Small molecules Passively diffuse into cytosol... Nomenclature: All have the suffix “tinibs” or “nibs”"
  },
  {
    "id": 19,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "A patient receiving Rituximab for Non-Hodgkin Lymphoma presents with sudden onset confusion, speech changes, and motor weakness. An MRI of the brain suggests Progressive Multifocal Leukoencephalopathy (PML). What is the underlying cause of this rare but serious complication?",
    "options": [
      {
        "text": "Direct neurotoxicity of the drug on oligodendrocytes",
        "explanation": "Incorrect. Rituximab is not directly neurotoxic."
      },
      {
        "text": "Reactivation of the latent JC virus due to B-cell depletion",
        "explanation": "Correct. Rituximab profoundly depletes B-cells. This immunosuppression can lead to the reactivation of the latent JC virus, which attacks oligodendrocytes and causes PML."
      },
      {
        "text": "A severe infusion reaction causing cerebral ischemia",
        "explanation": "Incorrect. Infusion reactions cause hypotension but not viral-mediated PML."
      },
      {
        "text": "Generation of free radicals in the central nervous system",
        "explanation": "Incorrect. This is not the mechanism."
      },
      {
        "text": "Cross-reactivity of the antibody with neural antigens",
        "explanation": "Incorrect. PML is a viral reactivation, not an autoimmune cross-reaction."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Rituximab Risks: Infusion rx, Hepatitis B reactivation, and PML (JC virus).",
    "pdfPage": 47,
    "pdfQuote": "ADVERSE EFFECTS... Reactivation of latent HBV infection; PML"
  },
  {
    "id": 20,
    "category": "Pharmacology: Antineoplastic Agents 2",
    "questionText": "What is the primary function of Vascular Endothelial Growth Factor (VEGF) that is targeted by drugs like Bevacizumab?",
    "options": [
      {
        "text": "Promoting the proliferation of malignant B-cells",
        "explanation": "Incorrect. This is the role of other growth factors."
      },
      {
        "text": "Stimulating the formation of new blood vessels (angiogenesis) to supply the tumor",
        "explanation": "Correct. VEGF is the primary driver of angiogenesis. Tumors secrete VEGF to recruit new blood vessels, providing the oxygen and nutrients needed to grow beyond a few millimeters. Bevacizumab neutralizes VEGF to 'starve' the tumor."
      },
      {
        "text": "Acting as an 'off-switch' for T-cell activation",
        "explanation": "Incorrect. This describes checkpoint ligands like PD-L1."
      },
      {
        "text": "Triggering the release of cytokines during CAR T-cell therapy",
        "explanation": "Incorrect. This is done by the engineered T-cells."
      },
      {
        "text": "Phosphorylating the Rb protein to initiate the cell cycle",
        "explanation": "Incorrect. This is done by CDK4/6."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "No VEGF = No blood vessels = Tumor starvation.",
    "pdfPage": 18,
    "pdfQuote": "Vascular endothelial growth factor-A (VEGF-A) is a member of the VEGF family and primary regulator of angiogenesis."
  }
];

window.Test_L157 = Test_L157;
