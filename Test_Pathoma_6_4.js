// Thinking Process:
// 1. High-Yield Concept: Myeloproliferative disorders = neoplastic proliferation of MATURE myeloid lineages (all 3 elevated, named by predominant cell): CML (granulocytes, t(9;22), basophilia, LAP-negative), PV (RBCs, JAK2, hyperviscosity, Budd-Chiari, post-bath itch, low EPO), ET (platelets, JAK2, no hyperuricemia because anucleate, rarely transforms), Myelofibrosis (megakaryocyte PDGF → marrow fibrosis, teardrop cells, leukoerythroblastic smear).
// 2. The "Trap": Confusing PV's LOW EPO (negative feedback in primary disease) with reactive polycythemia's HIGH EPO. CML's LAP-NEGATIVE granulocytes vs LAP-POSITIVE leukemoid reaction. Teardrop cells = myelofibrosis (not iron deficiency). CML transformation can be AML OR ALL (mutation is in HSC).
// 3. Key Distractor: Reactive polycythemia from RCC ectopic EPO (correct for high EPO + normal SaO2) when PV is being tested (low EPO). Leukemoid reaction when CML is being tested.
// 4. Vignette Strategy: Use post-bath itch and Budd-Chiari for PV; teardrop + leukoerythroblastic smear for myelofibrosis; absent hyperuricemia for ET; LAP-negative + basophilia for CML; high EPO for reactive polycythemia to rule out PV.
//
// PDF Mapping Check: Missing (newly added)
// PDF Filename: 6.4 Myeloproliferative Disorders.pdf
// Mapping Key: Pathoma-Myeloproliferative Disorders (6.4)
// Status: Verified — added to scripts/pdf_mapping.js in this change.

window.Test_Pathoma_6_4 = [
  {
    "id": 1,
    "category": "Hematology: Myeloproliferative Disorder Definition",
    "questionText": "A myeloproliferative disorder is distinguished from other leukemic processes by the differentiation state of the abnormal cells. Which best characterizes the cellular content of these disorders and the basis for subclassification into specific entities?",
    "options": [
      {
        "text": "Proliferation of immature lymphoid blasts arrested before differentiation in the marrow, subclassified by surface marker phenotype",
        "explanation": "Incorrect. Immature lymphoid blasts define ALL, not a myeloproliferative disorder. This would be the correct answer if the question described TDT+ blasts in marrow >20% with cytopenias and acute presentation."
      },
      {
        "text": "Neoplastic proliferation of mature myeloid cells with all lineages increased, subclassified by which lineage predominates",
        "explanation": "Correct. The lecturer was explicit: in a myeloproliferative disorder, neoplastic accumulation involves all myeloid lineages — RBCs, granulocytes, and platelets are all increased — but the disease is named for whichever lineage predominates. RBCs predominant → polycythemia vera, granulocytes → CML, platelets/megakaryocytes → essential thrombocythemia, megakaryocyte-driven marrow fibrosis → myelofibrosis."
      },
      {
        "text": "Neoplastic proliferation of mature circulating lymphocytes with aberrant CD5/CD20 co-expression and smudge cells on smear",
        "explanation": "Incorrect. Mature lymphocyte proliferation with CD5/CD20 co-expression defines CLL, a chronic LYMPHOID leukemia rather than a myeloproliferative disorder. This would be the correct answer if the question concerned an older patient with smudge cells and aberrant B-cell marker co-expression."
      },
      {
        "text": "Proliferation of mature CD4+ T-cells in skin and lymph nodes driven by chronic HTLV-1 retroviral infection",
        "explanation": "Incorrect. CD4+ T-cell proliferation with HTLV-1 association defines ATLL, a mature T-cell chronic leukemia, not a myeloproliferative disorder. This would be the correct answer if the patient had rash, lymphadenopathy, lytic bone lesions, and hypercalcemia with HTLV-1 exposure history."
      },
      {
        "text": "Maturation arrest in erythroid lineage producing macrocytosis with ineffective hematopoiesis and pancytopenia in older adults",
        "explanation": "Incorrect. Maturation arrest with ineffective erythropoiesis describes myelodysplastic syndrome rather than a myeloproliferative disorder, which is the opposite biology — mature cells overproduced rather than dysplastic maturation arrest. This would be the correct answer if marrow showed hypercellularity with dysplastic precursors and peripheral cytopenias rather than mature lineage proliferation."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Myeloproliferative disorders = neoplastic proliferation of MATURE myeloid cells with all 3 lineages elevated; named by the predominant cell.",
    "pdfPage": 1,
    "pdfQuote": "neoplastic proliferation of mature myeloid cells"
  },
  {
    "id": 2,
    "category": "Hematology: CML Driver Mutation",
    "questionText": "A 55-year-old man is found to have marked leukocytosis (WBC 92,000/µL) dominated by mature granulocytes plus a prominent basophilia, with a hypercellular marrow on biopsy. Cytogenetics reveal a translocation between chromosomes 9 and 22. Which best identifies the molecular consequence of this translocation and its downstream effect?",
    "options": [
      {
        "text": "Translocation of c-MYC under the immunoglobulin heavy chain promoter, driving rapid mitotic activity in intermediate-sized B cells",
        "explanation": "Incorrect. c-MYC translocation to immunoglobulin heavy chain (t(8;14)) drives Burkitt lymphoma rather than the granulocytic process described here. This would be the correct answer if the patient had a jaw or abdominal mass with starry-sky histology consistent with Burkitt lymphoma."
      },
      {
        "text": "Translocation of BCL-2 to the immunoglobulin heavy chain locus, blocking apoptosis in germinal center B cells",
        "explanation": "Incorrect. BCL-2 to immunoglobulin heavy chain (t(14;18)) drives follicular lymphoma by inhibiting apoptosis, not the granulocytic CML described here. This would be the correct answer if the patient had painless lymphadenopathy with neoplastic follicles lacking tingible body macrophages."
      },
      {
        "text": "Disruption of the retinoic acid receptor producing maturation arrest at the promyelocyte stage with abundant Auer rods and DIC risk",
        "explanation": "Incorrect. Retinoic acid receptor disruption (t(15;17)) drives acute promyelocytic leukemia, an acute myeloid process with DIC risk — not the mature granulocyte proliferation with basophilia described here. This would be the correct answer if the patient had MPO+ promyelocytes packed with Auer rods and prolonged PT/PTT with low fibrinogen."
      },
      {
        "text": "Fusion of BCR and ABL producing increased tyrosine kinase activity that drives overproduction of the neoplastic mature myeloid cells",
        "explanation": "Correct. The lecturer specifically taught that CML is driven by t(9;22), which fuses BCR and ABL into a constitutively active tyrosine kinase. Tyrosine kinase is a signal transducer (oncogene) that transmits growth signals to the nucleus, so its overexpression drives overgrowth of the neoplastic granulocyte lineage. First-line therapy is imatinib, a designer drug developed to specifically inhibit this aberrant kinase activity."
      },
      {
        "text": "Overexpression of cyclin D from t(11;14), accelerating the G1-to-S transition in mantle-zone B-cells with corresponding histologic expansion of the mantle compartment around residual germinal centers in the affected nodes",
        "explanation": "Incorrect. Cyclin D overexpression from t(11;14) drives mantle cell lymphoma by accelerating G1-to-S transition, not the granulocyte expansion of CML. This would be the correct answer if biopsy had shown a neoplastic process expanding the mantle zone immediately around follicles with cyclin D positivity."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: CML = t(9;22) producing BCR-ABL fusion protein with increased tyrosine kinase activity; first-line therapy is imatinib, a designer TKI.",
    "pdfPage": 2,
    "pdfQuote": "BCR and ABL"
  },
  {
    "id": 3,
    "category": "Hematology: Imatinib Mechanism",
    "questionText": "A 53-year-old woman with newly diagnosed CML is started on imatinib as first-line treatment. Which best describes the molecular target of this agent and the rationale for its selection as front-line therapy?",
    "options": [
      {
        "text": "Imatinib specifically blocks the excessive tyrosine kinase activity generated by the BCR-ABL fusion protein, halting the aberrant growth signal driving the leukemia",
        "explanation": "Correct. The lecturer specifically named imatinib as the first-line treatment for CML and explained that it is a designer drug developed to block the excessive tyrosine kinase activity created by the BCR-ABL fusion. By interrupting the aberrant growth signal that the constitutively active kinase transmits to the nucleus, imatinib halts the neoplastic granulocyte expansion that defines CML."
      },
      {
        "text": "Imatinib inhibits adenosine deaminase, causing toxic adenosine accumulation in neoplastic B cells with resulting apoptotic cell death within the malignant clone",
        "explanation": "Incorrect. Adenosine deaminase inhibition with toxic adenosine accumulation describes 2-CDA in hairy cell leukemia, not imatinib in CML. This would be the correct answer if the patient had splenomegaly with red-pulp expansion, dry tap on marrow aspiration, and TRAP-positive cells with hairy projections."
      },
      {
        "text": "Imatinib binds the disrupted retinoic acid receptor and restores maturation of trapped promyelocytes into circulating neutrophils with resolution of the underlying DIC",
        "explanation": "Incorrect. Binding the disrupted RAR to restore promyelocyte maturation describes ATRA in APL, not imatinib in CML. This would be the correct answer if the patient had APL with t(15;17), Auer-rod–rich promyelocytes, and prolonged PT/PTT with low fibrinogen consistent with DIC."
      },
      {
        "text": "Imatinib crosslinks DNA strands within rapidly dividing neoplastic cells, producing double-strand breaks that trigger apoptosis through accumulated unrepairable damage within the malignant clone over time",
        "explanation": "Incorrect. DNA crosslinking with double-strand breaks describes alkylating agents (cyclophosphamide), not imatinib. This would be the correct answer if the patient were being treated with a classical alkylator-based induction regimen rather than a targeted tyrosine kinase inhibitor."
      },
      {
        "text": "Imatinib is an anti-CD20 monoclonal antibody that binds the surface marker on neoplastic B cells and triggers complement-mediated lysis with antibody-dependent cellular cytotoxicity from natural killer cells in circulation",
        "explanation": "Incorrect. Anti-CD20 monoclonal antibody describes rituximab, which is used in B-cell lymphomas like follicular lymphoma, not imatinib in CML. This would be the correct answer if the patient had a CD20+ B-cell lymphoma being treated with anti-CD20 immunotherapy."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Imatinib is a designer TKI that specifically blocks the BCR-ABL tyrosine kinase activity, halting the aberrant growth signal driving CML.",
    "pdfPage": 2,
    "pdfQuote": "imatinib basically blocks the excessive tyrosine kinase"
  },
  {
    "id": 4,
    "category": "Hematology: CML Basophilia",
    "questionText": "A 60-year-old man presents with fatigue, abdominal fullness, and a WBC of 78,000/µL. Differential shows a left shift with increased granulocytes including early precursors and a distinctly elevated absolute basophil count. Which best identifies the diagnostic significance of the basophil elevation in this clinical context?",
    "options": [
      {
        "text": "Basophilia indicates parasitic infection from helminth exposure, with eosinophilia frequently co-occurring and the patient warranting empiric antiparasitic therapy after thorough exposure history",
        "explanation": "Incorrect. Basophilia in this context is the lecturer-emphasized marker of CML rather than a parasitic infection clue. This would be the correct answer if the question concerned chronic eosinophilia in a returning traveler with intestinal helminthic infection, which was not described in the lecture for CML."
      },
      {
        "text": "Basophilia is a nonspecific finding seen across all myeloproliferative disorders, including polycythemia vera and essential thrombocythemia, and does not distinguish CML from other entities or from reactive processes such as infection",
        "explanation": "Incorrect. The lecturer specifically emphasized that basophilia is highly associated with CML and helps distinguish CML from a leukemoid reaction; it is not nonspecific. This would be the correct answer if the question incorrectly suggested basophilia were generic to all MPDs and to reactive leukocytosis."
      },
      {
        "text": "Basophilia indicates a transformation phase to acute leukemia, signaling an impending blast crisis with rapid transition that demands immediate marrow biopsy with cytogenetics to confirm the transformation event in this patient",
        "explanation": "Incorrect. Transformation to acute leukemia is heralded by an enlarging spleen and progressive blast accumulation, not by basophilia per se. This would be the correct answer if the question had described a previously stable CML patient with a newly enlarging spleen and rising blast count consistent with accelerated or blast-phase disease."
      },
      {
        "text": "Basophilia indicates an immune-mediated hemolysis driven by autoantibody from a CLL-derived B-cell clone, with Coombs-positive warm IgG hemolysis producing the anemia symptoms in this patient's clinical presentation as described",
        "explanation": "Incorrect. Autoimmune hemolysis driven by CLL-derived autoantibody is unrelated to basophilia and is a complication of CLL (a chronic LYMPHOID leukemia), not the granulocytic process described here. This would be the correct answer if the patient had CLL with new anemia and a positive direct Coombs test."
      },
      {
        "text": "Basophilia is highly associated with CML and helps distinguish it from a leukemoid reaction, which does not produce a basophil elevation",
        "explanation": "Correct. The lecturer emphasized multiple times that basophilia is highly associated with CML, and that it is one of the three discriminators (alongside LAP staining and the t(9;22) translocation) used to distinguish CML from a leukemoid reaction. In a reactive process with high WBC and a left shift from infection, basophils do NOT rise — so an absolute basophilia in this picture points specifically toward CML."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Basophilia is highly associated with CML and helps distinguish it from a leukemoid reaction.",
    "pdfPage": 2,
    "pdfQuote": "basophilia is highly associated with chronic myeloid leukemia"
  },
  {
    "id": 5,
    "category": "Hematology: CML vs Leukemoid Reaction",
    "questionText": "A clinician evaluating a patient with WBC 65,000/µL dominated by mature granulocytes with a left shift must distinguish CML from a leukemoid reaction. Among the discriminators the lecturer described, which best characterizes the leukocyte alkaline phosphatase (LAP) pattern in each entity, and why?",
    "options": [
      {
        "text": "Both processes are LAP-positive because LAP is constitutively expressed in all mature granulocytes regardless of whether the proliferation is neoplastic or reactive",
        "explanation": "Incorrect. The lecturer specifically taught that LAP expression discriminates between reactive and neoplastic granulocytes, so both being positive would not match the lecture. This would be the correct answer if LAP were a non-discriminating marker, but the lecturer used it precisely because it distinguishes."
      },
      {
        "text": "Both processes are LAP-negative because LAP is an enzyme of bone osteoblasts and is not expressed in any peripheral granulocyte population regardless of inflammatory stimulus or neoplastic clonal expansion in this clinical context",
        "explanation": "Incorrect. LAP is a granulocyte enzyme (in secondary granules), not an osteoblast enzyme; and the lecturer's discriminator only works because LAP expression DIFFERS between reactive and neoplastic granulocytes. This would be the correct answer if LAP were not a useful clinical discriminator, which contradicts the lecture entirely."
      },
      {
        "text": "Leukemoid reaction is LAP-positive (granulocytes generated to fight infection use the enzyme); CML is LAP-negative (neoplastic granulocytes have no functional intent)",
        "explanation": "Correct. The lecturer explained this with a memorable metaphor: leukemoid-reaction granulocytes are made to fight infection and therefore express LAP (it is useful for inflammation), so they stain LAP-positive. The neoplastic granulocytes of CML, by contrast, 'have no intention of fighting infection — they're basically having a party' and therefore are LAP-NEGATIVE. The pattern (CML LAP-, reactive LAP+) is one of three lecturer-named discriminators."
      },
      {
        "text": "CML is LAP-positive because the neoplastic clone retains enzyme expression for granule maturation, whereas leukemoid reactions are LAP-negative because rapidly generated immature granulocytes have not yet packaged the enzyme into secondary granules during the brief reactive expansion",
        "explanation": "Incorrect. This reverses the lecturer's teaching: CML is LAP-negative and reactive is LAP-positive, with the rationale tied to functional intent rather than maturation timing. This would be the correct answer if the lecture had emphasized maturation tempo as the discriminator, which it explicitly did not."
      },
      {
        "text": "Both entities show variable LAP staining that depends on the specific stage of disease, with mid-phase CML showing higher LAP than early CML, and severe infection showing intermittent LAP loss correlating with the duration of inflammation in this patient",
        "explanation": "Incorrect. The lecturer's framework was a clean dichotomy (CML LAP-, reactive LAP+), not a phase-dependent variability. This would be the correct answer if the question rejected the lecturer's clean dichotomy in favor of a phase-dependent model, which the lecture explicitly did not endorse."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: CML granulocytes are LAP-negative ('neoplastic party'); reactive (leukemoid) granulocytes are LAP-positive (functional infection-fighting).",
    "pdfPage": 3,
    "pdfQuote": "leukocyte alkaline phosphatase"
  },
  {
    "id": 6,
    "category": "Hematology: Polycythemia Vera Driver Mutation",
    "questionText": "A 64-year-old man with elevated hemoglobin (hematocrit 60%) and concurrent mild leukocytosis and thrombocytosis is suspected of having polycythemia vera. Which somatic mutation is most directly associated with this disease, and at what cell-signaling node does it act?",
    "options": [
      {
        "text": "BCR-ABL fusion product driving constitutively active tyrosine kinase signaling that promotes neoplastic mature granulocyte expansion with associated basophilia",
        "explanation": "Incorrect. BCR-ABL is the driver of CML, not polycythemia vera. This would be the correct answer if the patient had marked leukocytosis dominated by mature granulocytes with basophilia, LAP-negative cytochemistry, and t(9;22) on cytogenetics."
      },
      {
        "text": "c-MYC translocation driving high mitotic activity in intermediate-sized B-cells with characteristic starry-sky histology when present in nodal architecture in patients with this disease",
        "explanation": "Incorrect. c-MYC translocation drives Burkitt lymphoma rather than polycythemia vera. This would be the correct answer if the patient had a rapidly growing extranodal mass with tingible body macrophages and intermediate-sized lymphoid cells."
      },
      {
        "text": "Cyclin D overexpression accelerating G1-to-S progression in mantle-zone B-cells expanding the region immediately adjacent to germinal centers in the affected nodal compartments",
        "explanation": "Incorrect. Cyclin D overexpression drives mantle cell lymphoma rather than polycythemia vera. This would be the correct answer if biopsy revealed a neoplastic process expanding the mantle zone around follicles with cyclin D positivity."
      },
      {
        "text": "JAK2 kinase mutation, which the lecturer identified as the super-high-yield driver of polycythemia vera",
        "explanation": "Correct. The lecturer was explicit: polycythemia vera is driven by a JAK2 kinase mutation, and this is super high-yield for examinations. The same mutation also underlies essential thrombocythemia and myelofibrosis, so the JAK2 association is shared across non-CML myeloproliferative disorders in the lecturer's framework."
      },
      {
        "text": "BCL-2 overexpression preventing apoptosis in germinal-center B-cells through stabilization of the mitochondrial membrane and inhibition of cytochrome c release into the cytoplasmic compartment of those cells",
        "explanation": "Incorrect. BCL-2 overexpression drives follicular lymphoma by blocking apoptosis in germinal-center B cells, not polycythemia vera. This would be the correct answer if biopsy had revealed neoplastic follicles lacking tingible body macrophages with positive BCL-2 expression in germinal centers."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Polycythemia vera is driven by a JAK2 kinase mutation — super high-yield. (Same mutation drives ET and myelofibrosis.)",
    "pdfPage": 4,
    "pdfQuote": "JAK2 kinase mutation"
  },
  {
    "id": 7,
    "category": "Hematology: Polycythemia Vera Pruritus",
    "questionText": "A 62-year-old woman with polycythemia vera reports intense itching that consistently develops within minutes of stepping out of a hot shower and lasts roughly 30 minutes. Which mechanism best explains this characteristic symptom?",
    "options": [
      {
        "text": "Hyperviscosity-induced microvascular ischemia of cutaneous nerve endings producing transient neuropathic itch worsened by vasodilation in the warm bath water with sustained ischemic discharge of itch fibers",
        "explanation": "Incorrect. Hyperviscosity produces blurry vision and headache in PV but not the post-bath itch — the lecturer attributed this symptom to mast-cell histamine release rather than to ischemia. This would be the correct answer if the symptom were neuropathic with no temporal link to bathing or mast-cell biology."
      },
      {
        "text": "Excess histamine release from increased mast cells, set off by the act of bathing — a classic post-bath itch in polycythemia vera",
        "explanation": "Correct. The lecturer specifically taught that polycythemia vera produces an increase in mast cells in addition to red cells, and that bathing can set off the mast cells to release their histamine — producing the very classic itching after bathing. This is a high-yield examination feature distinct from the hyperviscosity headache and blurred vision."
      },
      {
        "text": "Eosinophilic dermatitis driven by Reed-Sternberg cell secretion of IL-5 producing recurrent itchy cutaneous plaques with palpable eosinophilic infiltrate on biopsy of the affected skin patches noted in this case",
        "explanation": "Incorrect. IL-5 secretion by Reed-Sternberg cells drives eosinophilia in the mixed-cellularity Hodgkin lymphoma subtype, not the polycythemia vera post-bath itch. This would be the correct answer if the patient had Hodgkin lymphoma with a B-symptom-driven eosinophilic skin process."
      },
      {
        "text": "Cutaneous T-cell infiltration analogous to mycosis fungoides, producing pruritic plaques and patches with Pautrier microabscesses on epidermal biopsy of the affected skin compartments in this patient with myeloproliferative disease",
        "explanation": "Incorrect. Cutaneous T-cell infiltration with Pautrier microabscesses defines mycosis fungoides, not polycythemia vera. This would be the correct answer if the patient had chronic pruritic patches and plaques with biopsy showing intraepidermal mature CD4+ T-cell clusters."
      },
      {
        "text": "Bile-acid–driven cholestatic pruritus from concurrent hepatic congestion produced by Budd-Chiari syndrome, with painless jaundice and pruritus arising in the lower extremities first and then spreading to the trunk over weeks",
        "explanation": "Incorrect. Budd-Chiari syndrome can complicate polycythemia vera (hepatic vein thrombosis), but the post-bath itch is mast-cell histamine driven rather than cholestatic. This would be the correct answer if the patient had jaundice, hepatomegaly, and ascites with documented hepatic-vein thrombosis."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Post-bath itch in polycythemia vera = mast-cell histamine release; the increased mast cells are part of the PV expansion.",
    "pdfPage": 4,
    "pdfQuote": "itching after bathing"
  },
  {
    "id": 8,
    "category": "Hematology: PV Venous Thrombosis",
    "questionText": "A 58-year-old woman with newly diagnosed polycythemia vera presents to the ED with one week of right upper quadrant pain, ascites, and tender hepatomegaly. Imaging confirms thrombosis of the hepatic vein. Which best names this complication and explains its strong association with the underlying disease?",
    "options": [
      {
        "text": "Mesenteric venous thrombosis from compression by an enlarging spleen producing congestion of the splanchnic circulation in patients with myeloproliferative disorders driving sustained portal hypertension over weeks of insidious illness",
        "explanation": "Incorrect. The patient has thrombosis of the hepatic vein, not the mesenteric vein, and the lecturer named the hepatic-vein thrombosis specifically as Budd-Chiari syndrome. This would be the correct answer if imaging had revealed mesenteric vein thrombosis producing intestinal ischemia rather than hepatic outflow obstruction."
      },
      {
        "text": "Portal vein thrombosis from cirrhosis of the liver with subsequent splanchnic venous congestion, sometimes seen in older patients with metabolic syndrome and chronic liver disease accumulating thrombotic risk over years of decompensated cirrhosis",
        "explanation": "Incorrect. Portal vein thrombosis is anatomically distinct from hepatic vein thrombosis (the lecturer specifically described thrombosis of the hepatic vein for Budd-Chiari), and is not the named PV-associated thrombosis. This would be the correct answer if the patient had cirrhotic portal vein thrombosis rather than hepatic outflow obstruction from the PV-driven prothrombotic state."
      },
      {
        "text": "Renal vein thrombosis driving secondary nephrotic-range proteinuria and progressive deterioration of glomerular filtration in patients with hypercoagulable myeloproliferative states presenting with leg edema and progressive renal dysfunction over time",
        "explanation": "Incorrect. Renal vein thrombosis is associated with nephrotic syndrome and other prothrombotic states, not specifically with PV per the lecture. This would be the correct answer if the patient had nephrotic-range proteinuria with renal vein thrombus rather than hepatic-vein thrombosis with ascites and tender hepatomegaly."
      },
      {
        "text": "Budd-Chiari syndrome — hepatic vein thrombosis producing infarction of the liver, with polycythemia vera being the most common underlying cause",
        "explanation": "Correct. The lecturer specifically taught that polycythemia vera produces an increased risk of venous thrombosis from hyperviscosity, and that Budd-Chiari syndrome (thrombosis of the hepatic vein producing liver infarction) is the classic and high-yield venous thrombosis. He further noted that polycythemia vera is the most common cause of Budd-Chiari syndrome — a pairing examiners frequently target."
      },
      {
        "text": "Cerebral venous sinus thrombosis with non-specific headache, papilledema, and intermittent altered mental status from venous outflow obstruction in patients with hypercoagulable myeloproliferative states presenting acutely to the emergency department with focal deficits",
        "explanation": "Incorrect. Although PV does increase risk of cerebral venous thrombosis in principle, the lecturer specifically highlighted Budd-Chiari (hepatic vein) as the classic high-yield venous thrombosis. This would be the correct answer if imaging had revealed cerebral venous sinus thrombus rather than hepatic vein thrombus, which is the anatomic finding described here."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Budd-Chiari syndrome = hepatic vein thrombosis with liver infarction; polycythemia vera is the most common cause.",
    "pdfPage": 4,
    "pdfQuote": "Budd-Chiari syndrome"
  },
  {
    "id": 9,
    "category": "Hematology: PV Treatment",
    "questionText": "A 60-year-old man with newly diagnosed polycythemia vera has hematocrit 62%, normal SaO2, and a low erythropoietin level. Which intervention is the first-line treatment, and what is the rationale?",
    "options": [
      {
        "text": "Phlebotomy to decrease the red blood cell mass directly, the lecturer-named first-line treatment for polycythemia vera",
        "explanation": "Correct. The lecturer was explicit that the treatment of polycythemia vera is to decrease the red blood cell mass, accomplished by phlebotomy. Without treatment, death usually occurs within one year. Hydroxyurea is reserved as a second-line option. The rationale is that excess red cell mass drives the hyperviscosity-related complications (blurry vision, headache, venous thrombosis including Budd-Chiari, flushed face), so reducing the mass directly addresses the disease."
      },
      {
        "text": "Imatinib targeting BCR-ABL tyrosine kinase activity, since polycythemia vera shares with CML the underlying mechanism of constitutive growth signaling from an oncogenic kinase fusion product in the affected lineage of the myeloid compartment of the marrow",
        "explanation": "Incorrect. Imatinib targets BCR-ABL in CML, not the JAK2-mutated polycythemia vera; the lecturer named phlebotomy as the PV first-line therapy. This would be the correct answer if the patient had t(9;22)-driven CML with mature granulocyte proliferation and basophilia."
      },
      {
        "text": "ATRA to bind a disrupted retinoic acid receptor and restore maturation, applicable to processes in which a t(15;17) translocation produces accumulation of immature precursors instead of expansion of mature cells across the hematopoietic compartments of marrow tissues",
        "explanation": "Incorrect. ATRA binds the disrupted RAR in APL, not the JAK2-driven mature red cell expansion of polycythemia vera. This would be the correct answer if the patient had APL with t(15;17), Auer-rod–rich promyelocytes, and a DIC picture at presentation."
      },
      {
        "text": "2-CDA to inhibit adenosine deaminase, causing toxic adenosine accumulation in malignant cells, a strategy reserved for chronic B-cell processes with red-pulp splenic expansion and TRAP-positive immunostain on biopsy confirming the lineage of the proliferating cells",
        "explanation": "Incorrect. 2-CDA (cladribine) is the treatment for hairy cell leukemia, not polycythemia vera. This would be the correct answer if the patient had splenomegaly with red-pulp expansion, dry tap on marrow aspiration, and TRAP-positive cells with hairy projections."
      },
      {
        "text": "Rituximab as anti-CD20 monoclonal antibody to deplete malignant B cells with complement-mediated lysis and antibody-dependent cellular cytotoxicity from natural killer cells circulating in the bloodstream after each infusion of the agent in this case",
        "explanation": "Incorrect. Anti-CD20 antibody treats CD20+ B-cell lymphomas (e.g., follicular lymphoma), not polycythemia vera. This would be the correct answer if the patient had a symptomatic CD20+ B-cell lymphoma being treated with anti-CD20 immunotherapy rather than a JAK2-driven myeloproliferative disorder."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: First-line treatment for polycythemia vera = phlebotomy (decreases red cell mass directly). Hydroxyurea is second-line; untreated PV → death within ~1 year.",
    "pdfPage": 5,
    "pdfQuote": "phlebotomy"
  },
  {
    "id": 10,
    "category": "Hematology: PV vs Reactive Polycythemia",
    "questionText": "A 58-year-old woman has hematocrit 60%. The team must determine whether this is polycythemia vera or a reactive polycythemia from another cause. Which combination of SaO2 and erythropoietin level best fits polycythemia vera and explains why?",
    "options": [
      {
        "text": "Low SaO2 with high erythropoietin, because hypoxia from chronic lung disease drives erythropoietin production with a secondary rise in red cell mass as a compensatory adaptation to chronic oxygen deficit at the alveolar interface",
        "explanation": "Incorrect. Low SaO2 with high EPO describes a reactive polycythemia driven by hypoxia (e.g., chronic lung disease), not polycythemia vera. This would be the correct answer if the patient had a documented hypoxic disorder with low SaO2 driving EPO-mediated red-cell expansion as an adaptive response."
      },
      {
        "text": "Normal SaO2 with high erythropoietin, because an ectopic EPO source (such as a renal cell carcinoma) drives the polycythemia in the absence of hypoxia in this patient",
        "explanation": "Incorrect. Normal SaO2 with HIGH EPO describes ectopic EPO production from a tumor (classically renal cell carcinoma) — a reactive polycythemia, not PV. This would be the correct answer if the patient had a renal mass producing ectopic EPO with normal oxygenation rather than primary PV."
      },
      {
        "text": "Normal SaO2 with low erythropoietin, because in polycythemia vera there is no oxygenation problem and the elevated red cell mass suppresses erythropoietin via negative feedback",
        "explanation": "Correct. The lecturer explained the discriminating profile: in polycythemia vera there is no problem with oxygenation, so SaO2 is normal; and the markedly elevated red-cell mass suppresses erythropoietin via negative feedback, so EPO is decreased. This pattern (normal SaO2, low EPO) differs from reactive polycythemia from hypoxia (low SaO2, high EPO) and reactive polycythemia from ectopic EPO production (normal SaO2, high EPO)."
      },
      {
        "text": "Low SaO2 with low erythropoietin, because the kidney's response to hypoxia is impaired during chronic primary marrow disease producing the polycythemic phenotype in the absence of a normal compensatory rise in erythropoietin",
        "explanation": "Incorrect. The lecturer did not describe this combined profile; PV is normal SaO2 with low EPO, and hypoxic polycythemia is low SaO2 with high EPO. This would be the correct answer if a patient had a disordered EPO response to hypoxia, which the lecture did not describe for any of the discussed entities."
      },
      {
        "text": "Normal SaO2 with normal erythropoietin level reflecting an idiopathic red cell expansion without alteration in the oxygenation–erythropoietin feedback axis, requiring genetic testing for a JAK2-mutated phenotype to confirm the diagnosis and stratify the next steps",
        "explanation": "Incorrect. The lecturer specifically named the LOW EPO finding in PV (due to negative feedback) — not a normal value — as the discriminator from reactive processes. This would be the correct answer if the question rejected the negative-feedback teaching, which the lecture explicitly endorsed."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: PV = normal SaO2 + LOW EPO (negative feedback). Reactive polycythemia: hypoxic disease = low SaO2 + high EPO; RCC ectopic EPO = normal SaO2 + high EPO.",
    "pdfPage": 5,
    "pdfQuote": "the erythropoietin would actually be decreased"
  },
  {
    "id": 11,
    "category": "Hematology: Essential Thrombocythemia",
    "questionText": "A 67-year-old man is found incidentally to have a platelet count of 1,150,000/µL with mildly elevated WBC and hemoglobin. Marrow biopsy shows hypercellularity with prominent megakaryocyte proliferation. Cytogenetics reveal a JAK2 kinase mutation. Which clinical feature is most consistent with the lecturer's characterization of this disease?",
    "options": [
      {
        "text": "Markedly increased risk of hyperuricemia and gout from rapid turnover of nuclear material in the overproduced platelet population, due to high purine load generated as new platelets accumulate in circulation rapidly within several weeks",
        "explanation": "Incorrect. The lecturer specifically taught that essential thrombocythemia does NOT cause significant hyperuricemia or gout, because platelets are pieces of megakaryocyte cytoplasm without a nucleus, so there is no excess purine turnover. This would be the correct answer if the question concerned polycythemia vera or CML, where the overproduction of nucleated cells does drive hyperuricemia."
      },
      {
        "text": "Symptoms of hyperviscosity including blurry vision and headache plus a flushed face and itching after bathing, with hepatic vein thrombosis producing Budd-Chiari syndrome as the most life-threatening complication of this disease entity in this patient",
        "explanation": "Incorrect. Hyperviscosity, post-bath itch, flushed face, and Budd-Chiari syndrome are clinical features of polycythemia vera (red-cell mass excess), not essential thrombocythemia. This would be the correct answer if the patient had elevated hematocrit with these PV-specific features rather than isolated thrombocytosis."
      },
      {
        "text": "Aggressive transformation to acute leukemia within months of diagnosis with rapid blast accumulation in marrow at greater than 20% as the disease enters a fulminant phase requiring intensive induction therapy in this case",
        "explanation": "Incorrect. The lecturer specifically taught that ET rarely transforms to acute leukemia (unlike CML, PV, and PMF, which more often do). This would be the correct answer if the patient had CML, PV, or PMF entering a transformation or accelerated phase with rising blast counts."
      },
      {
        "text": "Marrow fibrosis from megakaryocyte-derived PDGF deposition producing a leukoerythroblastic smear with teardrop cells and massive splenomegaly from extramedullary hematopoiesis after years of indolent disease followed by progressive fibrotic burnout in this patient over time",
        "explanation": "Incorrect. PDGF-driven marrow fibrosis with teardrop cells and leukoerythroblastic smear defines primary myelofibrosis (the spent-phase MPD), not ET. The lecturer specifically said ET rarely progresses to marrow fibrosis. This would be the correct answer if the patient had primary myelofibrosis with the classic teardrop morphology and massive splenomegaly."
      },
      {
        "text": "Increased risk of bleeding or thrombosis from non-functioning or over-functioning platelets, with low risk of progression to either marrow fibrosis or acute leukemia",
        "explanation": "Correct. The lecturer described ET as producing either bleeding (platelets don't function) or thrombosis (platelets over-function), and emphasized that this disease rarely progresses to marrow fibrosis (spent phase) and rarely transforms to acute leukemia. He further highlighted that there is no significant risk for hyperuricemia or gout because platelets are anucleate cytoplasm fragments. These features distinguish ET from the other myeloproliferative disorders."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: ET = JAK2-driven platelet overproduction with bleeding/thrombosis risk; rarely transforms to fibrosis or acute leukemia; NO significant hyperuricemia/gout (platelets are anucleate).",
    "pdfPage": 6,
    "pdfQuote": "essential thrombocythemia"
  },
  {
    "id": 12,
    "category": "Hematology: ET — Absence of Hyperuricemia",
    "questionText": "Most myeloproliferative disorders carry an increased risk of hyperuricemia and gout, but the lecturer named essential thrombocythemia as a notable exception. Which mechanism best explains why ET — unlike PV or CML — fails to drive hyperuricemia despite its high cell turnover?",
    "options": [
      {
        "text": "Platelets uniquely express a uric-acid-clearing surface enzyme that prevents purine accumulation in plasma despite their high turnover, with the enzyme being uniquely expressed on platelet membranes in normal physiology and persisting at high levels in ET overproduction across the affected megakaryocyte lineage in this disease entity",
        "explanation": "Incorrect. The lecturer did not describe a uric-acid clearing platelet enzyme; instead he explained the absence of hyperuricemia by the lack of nuclear material in platelets. This would be the correct answer if such an enzyme existed and the lecturer had named it, which he did not."
      },
      {
        "text": "Platelets are pieces of megakaryocyte cytoplasm without a nucleus, so when overproduced there is no excess nuclear (purine) turnover to drive uric acid accumulation",
        "explanation": "Correct. The lecturer explained this mechanism explicitly: he asked how platelets develop and answered that they are just pieces of megakaryocyte cytoplasm without a nucleus. Therefore when platelets are overproduced in essential thrombocythemia, there is no excess nuclear (purine) material being turned over, and consequently no significant hyperuricemia or gout. This contrasts with PV (RBC nuclei must be removed and degraded) and CML (granulocyte turnover) where the nuclear material drives uric acid generation."
      },
      {
        "text": "Hyperuricemia is present in ET but is masked by simultaneous renal hyperfiltration from the prothrombotic state, with renal clearance of uric acid running at supranormal rates due to platelet-driven endothelial activation in the glomerular capillary network of these patients with myeloproliferative disease",
        "explanation": "Incorrect. The lecturer did not describe renal hyperfiltration in ET; he attributed the absence of hyperuricemia to lack of nuclear material in platelets. This would be the correct answer if the lecturer had endorsed a renal-clearance explanation rather than the cytoplasm-only mechanism."
      },
      {
        "text": "Megakaryocytes selectively shunt purine metabolism toward salvage rather than degradation in this disease, preventing accumulation of uric acid downstream of the purine breakdown pathway in patients with the JAK2-mutated thrombocytotic phenotype on bone marrow biopsy in this case",
        "explanation": "Incorrect. The lecturer did not describe selective purine salvage in megakaryocytes; the explanation given was that platelets are anucleate cytoplasm fragments. This would be the correct answer if the lecturer had endorsed a salvage-vs-degradation reroute, which he did not."
      },
      {
        "text": "The slow tempo of ET overproduction prevents any meaningful turnover of nuclear material during the disease course, with platelets accumulating gradually over months rather than the explosive rate that would otherwise drive uric acid generation downstream of purine degradation in this clinical scenario",
        "explanation": "Incorrect. Tempo is not the lecturer's explanation; he attributed it to platelets lacking nuclei in the first place. Hyperuricemia in PV and CML occurs despite the chronic indolent tempo of those diseases. This would be the correct answer if the discriminator were tempo of turnover, which the lecture explicitly did not endorse."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: ET does NOT cause hyperuricemia/gout because platelets are anucleate cytoplasm fragments — no purine load to degrade.",
    "pdfPage": 6,
    "pdfQuote": "platelet really doesn't have a nucleus"
  },
  {
    "id": 13,
    "category": "Hematology: Myelofibrosis Pathogenesis",
    "questionText": "A 67-year-old man has fatigue, massive splenomegaly extending to the iliac crest, and progressive cytopenias. Marrow aspiration yields a dry tap; biopsy reveals dense collagenous fibrosis replacing normal hematopoietic tissue. Which best explains the molecular mechanism driving the marrow fibrosis in this disease?",
    "options": [
      {
        "text": "Mast cells in the disease overproduce histamine, driving fibroblast activation and collagen deposition within the marrow stroma as the histamine-rich myeloproliferation matures over years toward terminal marrow scarring and burnt-out architecture",
        "explanation": "Incorrect. Mast cell histamine is the mechanism of post-bath itch in polycythemia vera, not the driver of marrow fibrosis in myelofibrosis. This would be the correct answer if the question concerned the cutaneous itch of PV after bathing rather than the marrow fibrosis of PMF."
      },
      {
        "text": "Reed-Sternberg cells secrete cytokines including IL-5 that drive fibroblast proliferation and broad bands of collagen deposition through the involved tissues with subsequent loss of normal architecture in the affected compartment of the marrow and the surrounding lymph nodes",
        "explanation": "Incorrect. Reed-Sternberg cytokine secretion (including IL-5) drives the reactive infiltrate of Hodgkin lymphoma (especially nodular sclerosis fibrosis around nodes), not the marrow fibrosis of PMF. This would be the correct answer if the patient had Hodgkin lymphoma with broad bands of fibrosis cutting a lymph node into nodules."
      },
      {
        "text": "BCR-ABL fusion in mature granulocytes secretes a paracrine fibrogenic signal triggering marrow fibroblast deposition of collagen in the surrounding stroma with progressive replacement of normal hematopoietic elements by collagenous matrix in this lineage-restricted disease entity",
        "explanation": "Incorrect. BCR-ABL drives mature granulocyte expansion in CML; the lecturer did not describe BCR-ABL as the driver of marrow fibrosis in PMF. This would be the correct answer if the question incorrectly attributed PMF fibrosis to BCR-ABL signaling, which the lecture did not endorse."
      },
      {
        "text": "Translocation of BCL-2 to immunoglobulin heavy chain inhibits apoptosis in marrow stromal cells, allowing accumulation of senescent fibroblasts that deposit excess collagen into the marrow space producing the classic fibrotic replacement seen on biopsy in this disease entity over time",
        "explanation": "Incorrect. t(14;18) BCL-2 overexpression drives follicular lymphoma by blocking germinal-center apoptosis, not the marrow fibrosis of PMF. This would be the correct answer if biopsy showed neoplastic follicles lacking tingible body macrophages with positive BCL-2 expression rather than collagenous marrow replacement."
      },
      {
        "text": "Megakaryocytes (driven by a JAK2 mutation) overproduce platelet-derived growth factor (PDGF), which then drives marrow fibrosis",
        "explanation": "Correct. The lecturer was explicit: myelofibrosis is a neoplastic proliferation of mature myeloid cells, particularly the megakaryocytes, driven by a JAK2 kinase mutation. The megakaryocytes overproduce platelet-derived growth factor (PDGF), and the PDGF drives the marrow fibrosis (deposition of pink collagen replacing the normal fat and hematopoietic elements). This mechanism explains the dry tap, the leukoerythroblastic smear, and the teardrop cells."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Myelofibrosis = JAK2-driven megakaryocyte proliferation; megakaryocytes overproduce PDGF, which drives the marrow fibrosis.",
    "pdfPage": 7,
    "pdfQuote": "platelet-derived growth factor"
  },
  {
    "id": 14,
    "category": "Hematology: Teardrop Cells",
    "questionText": "A 70-year-old man with primary myelofibrosis has a peripheral smear showing scattered red cells with a tapered, teardrop-like shape. Which best explains the mechanism producing this morphologic finding in this disease context?",
    "options": [
      {
        "text": "Red cells generated within residual marrow are stretched as they squeeze through the fibrotic marrow space, producing the teardrop shape on egress",
        "explanation": "Correct. The lecturer explained that although most hematopoiesis in myelofibrosis shifts to the spleen (extramedullary), some residual hematopoiesis continues in the bone marrow. Because the marrow is totally fibrosed, red cells generated there are stretched as they try to leave the marrow space — squeezed into teardrop shapes as they pass through the fibrous tissue. This is the mechanism behind the teardrop cells that are commonly seen on the smear in PMF."
      },
      {
        "text": "Microangiopathic mechanical fragmentation of red cells by fibrin strands within the microcirculation, producing irregular schistocytes and helmet cells alongside teardrops in the peripheral blood smear of these patients with marrow disease over time",
        "explanation": "Incorrect. Microangiopathic fragmentation produces schistocytes and helmet cells in conditions like TTP and HUS, not teardrop cells from marrow egress through fibrotic tissue. This would be the correct answer if the smear showed schistocytes with thrombocytopenia consistent with a microangiopathic hemolytic process."
      },
      {
        "text": "Oxidative damage to hemoglobin produces Heinz bodies that distort the red cell shape into a tapered configuration, with bite cells also visible alongside the teardrops on the same smear preparation in patients with myeloproliferative disease entities",
        "explanation": "Incorrect. Heinz bodies and bite cells indicate G6PD deficiency or other oxidative hemolysis, not the marrow fibrosis–driven teardrop morphology of PMF. This would be the correct answer if the patient had episodic hemolysis after oxidative drug exposure with bite cells on smear."
      },
      {
        "text": "Auto-antibody coating of red cells produces spherocytic deformation with secondary teardrop shape after macrophage partial phagocytosis of the antibody-coated portion in the splenic sinusoids during routine splenic transit in patients with primary marrow disease",
        "explanation": "Incorrect. Antibody coating and partial phagocytosis produce spherocytes (autoimmune hemolytic anemia or hereditary spherocytosis), not the tapered teardrop morphology of PMF. This would be the correct answer if the patient had Coombs-positive warm IgG hemolysis with spherocytes on smear."
      },
      {
        "text": "Crystallized hemoglobin tetramers within red cells produce a tapered red cell shape during a hemoglobinopathy, with sickle cells and target cells also commonly appearing alongside the teardrop cells in the peripheral blood smear of these patients with hereditary disease",
        "explanation": "Incorrect. Sickle cells reflect hemoglobinopathy (hemoglobin S polymerization), not the marrow fibrosis–driven teardrop shape of PMF. This would be the correct answer if the patient had a hemoglobinopathy with sickle and target cells on smear."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Teardrop cells in myelofibrosis form as red cells are stretched while squeezing through fibrotic marrow.",
    "pdfPage": 7,
    "pdfQuote": "stretched as they try to leave"
  },
  {
    "id": 15,
    "category": "Hematology: Leukoerythroblastic Smear",
    "questionText": "A 72-year-old woman with primary myelofibrosis has a peripheral smear showing immature white and red cell precursors including nucleated red blood cells circulating in significant numbers. Which best explains the mechanism behind this so-called leukoerythroblastic smear pattern?",
    "options": [
      {
        "text": "Reactive bone marrow stimulation by exogenous erythropoietin or granulocyte colony-stimulating factor releases immature precursors prematurely into the bloodstream while reticulin gates remain intact within the marrow itself during the prolonged stimulation period of these patients with myeloproliferative disease entities",
        "explanation": "Incorrect. Exogenous cytokines may release some immature cells but the lecturer's specific mechanism for the leukoerythroblastic smear in PMF is failure of the splenic counterpart to reticulin gates during extramedullary hematopoiesis. This would be the correct answer if the question concerned reactive cytokine-driven precursor release rather than the splenic-EMH mechanism of PMF."
      },
      {
        "text": "Marrow infiltration by metastatic carcinoma destroys the reticulin gates within the bone marrow, allowing direct egress of immature cells into peripheral circulation in this patient with chronic myeloproliferative disease",
        "explanation": "Incorrect. Marrow infiltration by metastatic carcinoma can produce a leukoerythroblastic picture as well, but the lecturer's specific mechanism for PMF was the absence of reticulin gates in the spleen during extramedullary hematopoiesis, not metastatic destruction of marrow gates. This would be the correct answer if the patient had a marrow infiltrating metastatic malignancy rather than a JAK2-driven primary PMF."
      },
      {
        "text": "Extramedullary hematopoiesis in the spleen lacks the reticulin gates of marrow that normally prohibit egress of immature cells, allowing them to spill into peripheral blood",
        "explanation": "Correct. The lecturer explained the leukoerythroblastic smear as follows: when hematopoiesis is forced into the spleen (extramedullary, especially in massive amounts), the spleen lacks the reticulin gates that normally control egress of immature cells from marrow. As a result, immature white and red cell precursors (leuko-erythro-blastic, with nucleated RBCs) spill into peripheral blood. This is a high-yield mechanism specific to PMF."
      },
      {
        "text": "Sustained JAK2 signaling directly upregulates expression of egress chemokine receptors on immature precursors, allowing them to leave the marrow before becoming fully mature in patients with primary myelofibrosis driven by the kinase mutation in this disease entity",
        "explanation": "Incorrect. JAK2 signaling drives the proliferation in PMF, but the lecturer's specific mechanism for the leukoerythroblastic smear was the absence of reticulin gates in splenic extramedullary hematopoiesis, not chemokine-mediated egress. This would be the correct answer if the lecturer had described a chemokine-driven release mechanism, which he did not."
      },
      {
        "text": "Autoimmune destruction of marrow stromal cells weakens the architectural support of the reticulin gates, allowing premature release of immature cells into peripheral circulation in patients with chronic myeloproliferative disease driven by a JAK2 mutation overlapping with autoimmune marrow injury in this case",
        "explanation": "Incorrect. The lecturer did not describe autoimmune destruction of marrow stroma as the mechanism; the leukoerythroblastic smear in PMF reflects splenic extramedullary hematopoiesis without reticulin gating. This would be the correct answer if the question described an autoimmune marrow injury context rather than primary myelofibrosis."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Leukoerythroblastic smear in myelofibrosis = immature WBCs/RBCs (including nucleated RBCs) spilling from extramedullary hematopoiesis in the spleen, which lacks marrow's reticulin gates.",
    "pdfPage": 7,
    "pdfQuote": "leukoerythroblastic smear"
  },
  {
    "id": 16,
    "category": "Hematology: CML Transformation",
    "questionText": "A 62-year-old man with established CML (t(9;22) confirmed) develops accelerated disease and now has a marrow biopsy showing >25% blasts. The team is asked to predict what lineage the acute leukemia might follow upon transformation. Which best characterizes the possibilities and the reason behind them?",
    "options": [
      {
        "text": "Transformation in CML is always to AML, because the BCR-ABL fusion only affects mature granulocyte–lineage precursors and cannot influence lymphoid progenitors at any stage of differentiation",
        "explanation": "Incorrect. The lecturer specifically taught that CML transformation can be either AML OR ALL because the underlying mutation is in the hematopoietic stem cell, which has the capacity to produce both lineages. This would be the correct answer if the BCR-ABL mutation were restricted to a committed myeloid progenitor, which the lecturer explicitly refuted."
      },
      {
        "text": "Transformation can be to either AML or ALL, because the underlying t(9;22) mutation is in the hematopoietic stem cell with the capacity to generate either lineage",
        "explanation": "Correct. The lecturer used a whiteboard explanation to make this point: the BCR-ABL mutation in CML must be at the hematopoietic stem cell level, because the stem cell is what has the capacity to overproduce granulocytes. Because the HSC can become either myeloid (→ AML) or lymphoid (→ ALL), transformation in CML can go either way — an important principle and a classic examination point."
      },
      {
        "text": "Transformation is always to ALL because the BCR-ABL fusion preferentially drives lymphoid progenitors at the time of acute transformation in patients with chronic phase CML reaching the accelerated and blast-phase stages of disease over time",
        "explanation": "Incorrect. CML can transform to either AML or ALL — not exclusively to ALL — because the mutation is at the stem-cell level capable of both lineages. This would be the correct answer if BCR-ABL had a preferentially lymphoid effect, which the lecturer's whiteboard explanation explicitly rejected."
      },
      {
        "text": "Transformation always produces acute promyelocytic leukemia specifically, with t(15;17) being acquired as a secondary cytogenetic event on top of the primary t(9;22) translocation during the transformation phase of these patients with chronic phase disease",
        "explanation": "Incorrect. APL is t(15;17)-driven and arises de novo, not as a CML transformation product. The lecturer specifically said CML transformation produces AML OR ALL, not APL. This would be the correct answer if the patient had de novo APL with t(15;17), Auer-rod–rich promyelocytes, and DIC features."
      },
      {
        "text": "Transformation is always to acute megakaryoblastic leukemia, because the BCR-ABL fusion has a unique tropism toward the megakaryocyte lineage during the blast crisis phase, with the patient developing thrombocytopenia and bleeding from megakaryoblast accumulation in marrow",
        "explanation": "Incorrect. Megakaryoblastic AML is associated with Down syndrome under age 5, not with CML transformation. The lecturer specifically said CML transformation can be to AML OR ALL because the mutation is in the HSC. This would be the correct answer if the patient were a Down syndrome child under age 5 with MPO-negative megakaryoblastic blasts."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: CML transformation can be to AML OR ALL — because the BCR-ABL mutation is at the hematopoietic stem cell level, with capacity for both lineages.",
    "pdfPage": 3,
    "pdfQuote": "transformation to either AML or to ALL"
  },
  {
    "id": 17,
    "category": "Hematology: CML Phase Progression",
    "questionText": "A 58-year-old woman with established CML in chronic phase has stable splenomegaly that has been unchanged for two years. On a routine follow-up visit, exam reveals new enlargement of her spleen on top of the prior baseline, accompanied by rising WBC and increased basophil percentage. Which best identifies what this new finding likely heralds?",
    "options": [
      {
        "text": "Reactive splenomegaly from a concurrent viral infection, with the changes likely to resolve within several weeks of supportive care without intervention or change in therapy for the underlying CML diagnosis in this patient",
        "explanation": "Incorrect. The lecturer specifically taught that an enlarging spleen in a CML patient is a marker of accelerated phase, not reactive infection. This would be the correct answer if the patient had a documented viral infection with reactive splenic changes that resolved spontaneously, which does not match the chronic CML context here."
      },
      {
        "text": "Imatinib-induced splenomegaly from secondary marrow stimulation, with the spleen enlarging as a side effect of the targeted therapy rather than as a manifestation of disease activity in this patient with chronic phase CML on first-line therapy",
        "explanation": "Incorrect. Imatinib is not associated with splenomegaly as a side effect; the lecturer specifically attributed enlarging spleen to disease progression (accelerated phase) rather than to therapy. This would be the correct answer if the question concerned a drug toxicity of imatinib, which the lecture did not describe."
      },
      {
        "text": "Transition to small lymphocytic lymphoma involving the spleen, with the disease shifting from a granulocytic process to a mature B-cell lymphoid process during the accelerated phase of CML in patients who acquire secondary CD5/CD20 co-expression on the proliferating lymphoid population",
        "explanation": "Incorrect. Small lymphocytic lymphoma is the nodal phase of CLL (mature B cells with CD5/CD20), unrelated to CML accelerated-phase splenomegaly. This would be the correct answer if the patient had developed a separate CLL/SLL process rather than CML disease progression."
      },
      {
        "text": "Marker of the accelerated phase of CML, often heralding transformation to acute leukemia",
        "explanation": "Correct. The lecturer specifically taught that in CML, the chronic phase often has stable splenomegaly, but an enlarging spleen (newly increasing in size) is a marker of the accelerated phase and usually heralds transformation to an acute leukemia. The associated rising WBC and basophil percentage are consistent with accelerated-phase disease progression."
      },
      {
        "text": "Budd-Chiari syndrome from hepatic vein thrombosis is the most likely explanation, with the enlarging spleen reflecting downstream portal congestion in this patient with a hypercoagulable myeloproliferative state and rising leukocyte count over the past several months on therapy",
        "explanation": "Incorrect. Budd-Chiari syndrome is the classic venous thrombosis in polycythemia vera (hepatic vein thrombosis with liver infarction), not the explanation for enlarging spleen in CML accelerated phase. This would be the correct answer if the patient had PV with ascites, tender hepatomegaly, and imaging confirmation of hepatic vein thrombosis."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: An enlarging spleen in a CML patient = accelerated phase, often heralding transformation to acute leukemia.",
    "pdfPage": 3,
    "pdfQuote": "enlarging spleen"
  },
  {
    "id": 18,
    "category": "Hematology: MPD Hyperuricemia",
    "questionText": "A 65-year-old man with newly diagnosed polycythemia vera (hematocrit 60%) develops acute monoarthritis of his first metatarsophalangeal joint. Aspiration of the joint reveals negatively birefringent needle-shaped crystals. Which best explains the mechanism underlying this complication of his underlying myeloproliferative disease?",
    "options": [
      {
        "text": "Overproduction of red blood cells generates nuclear material that, when the red cells lose their nucleus during maturation, drives purine degradation and uric acid accumulation",
        "explanation": "Correct. The lecturer specifically used PV as the example of how myeloproliferative disorders produce hyperuricemia and gout: every red blood cell produced has a nucleus that must be removed during maturation, and the degradation of that nuclear material runs through the purine degradation pathway with uric acid as the end product. Massive red-cell overproduction therefore drives sustained uric acid generation, predisposing to gout. The same logic applies to CML granulocyte overproduction."
      },
      {
        "text": "Direct deposition of monosodium urate crystals by neoplastic mast cells within the involved joint synovium drives the acute monoarthritis as a paraneoplastic complication of myeloproliferative disease entity expansion in this case with progressive symptom severity",
        "explanation": "Incorrect. Mast cells in PV produce histamine driving post-bath itch, not monosodium urate deposition. The lecturer attributed hyperuricemia in MPDs to nuclear material turnover during cell overproduction. This would be the correct answer if the lecturer had described a mast-cell–urate connection, which he did not."
      },
      {
        "text": "Autoimmune destruction of the joint cartilage by anti-citrullinated antibody binding triggers crystal precipitation as a secondary phenomenon in patients with myeloproliferative disease overlapping with rheumatoid arthritis in this patient who has both diseases concurrently in clinic",
        "explanation": "Incorrect. Anti-citrullinated antibody describes rheumatoid arthritis, not gout in MPDs. The lecturer's mechanism was nuclear material turnover with purine degradation producing uric acid. This would be the correct answer if the patient had RA with anti-CCP antibodies and pannus-driven joint destruction rather than gout."
      },
      {
        "text": "Renal failure from cast nephropathy reduces uric acid clearance, allowing crystal deposition in the joint with subsequent monoarthritis in this patient with myeloproliferative disease developing acute kidney injury from light chain–mediated tubular obstruction in the renal medulla",
        "explanation": "Incorrect. Cast nephropathy from light chains describes multiple myeloma, not the mechanism of hyperuricemia in PV. The lecturer attributed it to nuclear material turnover. This would be the correct answer if the patient had multiple myeloma with light-chain cast nephropathy rather than PV."
      },
      {
        "text": "Mycotic invasion of the joint synovium with secondary urate crystal precipitation drives the monoarthritis after a primary infectious nidus in patients with myeloproliferative disease–associated immunocompromise, with cultures of synovial fluid revealing the organism over several days in this scenario",
        "explanation": "Incorrect. Mycotic septic arthritis is unrelated to the purine-driven hyperuricemia of MPDs. This would be the correct answer if the patient had a documented fungal septic arthritis on synovial fluid culture rather than crystal-proven gout."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Hyperuricemia/gout in MPDs (PV, CML) reflects massive nuclear material turnover during overproduction of nucleated cells, which drives purine degradation to uric acid.",
    "pdfPage": 1,
    "pdfQuote": "hyperuricemia and gout"
  },
  {
    "id": 19,
    "category": "Hematology: PV Clinical Vignette",
    "questionText": "A 64-year-old man presents with two months of headaches, blurry vision, and intermittent facial flushing. Temperature 36.9°C, BP 156/92 mmHg, HR 78/min. Examination shows a plethoric (ruddy) face and splenomegaly extending 4 cm below the costal margin. Labs show hemoglobin 19.8 g/dL, hematocrit 60%, WBC 14,000/µL, platelets 590,000/µL, SaO2 98% on room air, serum erythropoietin markedly decreased. He also reports intense itching after his daily hot shower. Which best characterizes the most likely diagnosis and the underlying driver?",
    "options": [
      {
        "text": "Reactive polycythemia from chronic lung disease driving sustained hypoxemia, with elevated erythropoietin as a compensatory response to the chronic alveolar oxygen deficit in this patient's clinical context as described in the vignette",
        "explanation": "Incorrect. Hypoxic reactive polycythemia would show LOW SaO2 and HIGH EPO; this patient has normal SaO2 (98%) and LOW EPO, which discriminates the picture as primary PV. This would be the correct answer if the patient had documented COPD with low SaO2 and elevated EPO."
      },
      {
        "text": "Reactive polycythemia from ectopic erythropoietin production by a renal cell carcinoma, with markedly elevated erythropoietin and normal SaO2 driving the red cell mass expansion in this patient with a paraneoplastic process behind the polycythemia in this clinical scenario as described",
        "explanation": "Incorrect. Ectopic EPO from RCC would produce normal SaO2 with HIGH EPO; this patient has normal SaO2 with LOW EPO, which is the classic PV pattern. This would be the correct answer if the patient had a renal mass on imaging with elevated EPO and a normal oxygenation profile."
      },
      {
        "text": "Essential thrombocythemia with platelet hyperfunction driving microvascular ischemia in the brain producing the headache and visual symptoms in this patient with elevated platelet count and JAK2-mutated bone marrow on biopsy from the iliac crest in this scenario",
        "explanation": "Incorrect. ET features predominantly elevated platelets without the hematocrit elevation, post-bath itch, or plethoric face described here. This would be the correct answer if the patient had isolated thrombocytosis with normal hematocrit and only platelet-related ischemic symptoms."
      },
      {
        "text": "Chronic myeloid leukemia with mature granulocyte expansion producing the symptoms via hyperviscosity, with a t(9;22) translocation driving the underlying disease and basophilia distinguishing it from a leukemoid reaction in this case on cytogenetics in this presentation",
        "explanation": "Incorrect. CML produces marked WBC elevation dominated by mature granulocytes with basophilia, not the dominantly elevated hematocrit with post-bath itch and plethoric face described here. This would be the correct answer if the patient had WBC > 50,000/µL with mature granulocytes and basophilia consistent with CML rather than PV."
      },
      {
        "text": "Polycythemia vera, a JAK2-driven myeloproliferative disorder presenting with hyperviscosity (headache, blurry vision), plethoric face, splenomegaly, and post-bath itching from increased mast cells, with normal SaO2 and low EPO confirming the primary process",
        "explanation": "Correct. The presentation hits every PV feature the lecturer named: hyperviscosity (headache, blurry vision), plethoric face, splenomegaly, post-bath itching from mast cell histamine, and the discriminating laboratory pattern of normal SaO2 (no hypoxia, ruling out hypoxic reactive polycythemia) with LOW EPO (negative feedback from the elevated red cell mass, ruling out ectopic EPO production). The underlying driver is a JAK2 kinase mutation."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: PV = JAK2-driven myeloproliferative disorder with hyperviscosity, plethoric face, splenomegaly, post-bath itch (mast-cell histamine), normal SaO2 and LOW EPO.",
    "pdfPage": 4,
    "pdfQuote": "polycythemia vera"
  },
  {
    "id": 20,
    "category": "Hematology: CML Clinical Vignette",
    "questionText": "A 56-year-old man presents with fatigue, early satiety, and unintentional weight loss. Examination shows splenomegaly extending 6 cm below the costal margin. Labs: hemoglobin 11.4 g/dL, platelets 480,000/µL, WBC 96,000/µL with mature granulocyte predominance, early granulocyte precursors, and a distinct basophilia. Leukocyte alkaline phosphatase staining of granulocytes is negative. Cytogenetics reveal t(9;22). Which best characterizes the diagnosis, the molecular driver, and the rationale for first-line therapy?",
    "options": [
      {
        "text": "Leukemoid reaction from occult infection with reactive granulocyte expansion producing a benign neutrophil-rich leukocytosis without clonal transformation in this patient with chronic disease over several weeks of observation in clinic",
        "explanation": "Incorrect. Leukemoid reaction would be LAP-POSITIVE (cells made to fight infection), would lack basophilia, and would lack the t(9;22) translocation — the lecturer's three discriminators. This would be the correct answer if the patient had a documented infection with LAP-positive granulocytes, no basophilia, and no cytogenetic abnormality."
      },
      {
        "text": "Polycythemia vera driven by JAK2 mutation, with the symptoms reflecting hyperviscosity and the splenomegaly driven by red cell mass expansion as the primary myeloid lineage involved in this patient's bone marrow disease entity over time as described",
        "explanation": "Incorrect. PV would show elevated hemoglobin (this patient has hemoglobin 11.4 g/dL), normal SaO2 with LOW EPO, post-bath itch, and would not be driven by t(9;22) or show LAP-negative granulocytes with basophilia. This would be the correct answer if the patient had elevated hematocrit, plethoric face, post-bath itch, and JAK2 rather than BCR-ABL."
      },
      {
        "text": "Chronic myeloid leukemia driven by t(9;22) BCR-ABL fusion producing constitutive tyrosine kinase activity; first-line therapy is imatinib, a designer drug that specifically blocks the aberrant kinase",
        "explanation": "Correct. The vignette matches CML completely: mature granulocyte expansion with early precursors and basophilia, LAP-NEGATIVE granulocytes ('neoplastic party' rather than infection-fighting), and t(9;22) on cytogenetics — all three of the lecturer's discriminators from a leukemoid reaction are met. The underlying driver is the BCR-ABL fusion producing constitutive tyrosine kinase activity, and first-line therapy is imatinib, a designer tyrosine kinase inhibitor."
      },
      {
        "text": "Acute promyelocytic leukemia driven by t(15;17) disrupting the retinoic acid receptor, with promyelocyte accumulation and Auer-rod–driven DIC requiring urgent ATRA therapy in this patient with elevated white count and marrow blasts on biopsy in this case as described",
        "explanation": "Incorrect. APL is driven by t(15;17) (not t(9;22)) and presents with promyelocytes packed with Auer rods plus DIC, not the mature granulocyte/basophilia profile here. This would be the correct answer if cytogenetics had shown t(15;17), the marrow had MPO-positive promyelocytes with abundant Auer rods, and the patient had prolonged PT/PTT, low fibrinogen, and elevated D-dimer."
      },
      {
        "text": "Adult T-cell leukemia/lymphoma driven by HTLV-1 infection, with the cytopenias and splenomegaly reflecting marrow infiltration by mature CD4-positive T-cells producing the secondary clinical picture in this patient with chronic disease and risk factors for retroviral infection in the past",
        "explanation": "Incorrect. ATLL is a mature CD4+ T-cell disease with rash, lytic bone lesions, and hypercalcemia — not the granulocytic process driven by t(9;22) described here. This would be the correct answer if the patient had a rash, lytic skeletal lesions, hypercalcemia, and HTLV-1 exposure history."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: CML = mature granulocyte proliferation + basophilia + LAP-negative + t(9;22) BCR-ABL; first-line therapy is imatinib (TKI).",
    "pdfPage": 2,
    "pdfQuote": "imatinib"
  }
];
