// Thinking Process:
// 1. High-Yield Concept: Dr. Goldstein's lecture covers four therapeutic categories: (a) iron supplementation for microcytic IDA (oral vs IV, drug interactions, regulation by hepcidin/stores), (b) folate vs B12 supplementation for megaloblastic anemia (methyl-folate trap, neurologic risk of treating B12 deficiency with folate alone), (c) ESAs for anemia of CKD/chemo (JAK-STAT activation of EPOR, boxed-warning thrombotic risk, Hb ceiling ~11), and (d) hydroxyurea for sickle cell anemia (ribonucleotide reductase inhibition → stress erythropoiesis → HbF induction, plus NO-mediated cGMP pathway).
// 2. The "Trap": Students confuse folate (corrects anemia but masks B12-related neuro damage) with B12; mistake the goal of ESA therapy as "normalize Hb" rather than "lowest Hb that avoids transfusion"; forget that hydroxyurea works via stress erythropoiesis to induce HbF (NOT by direct anti-sickling); confuse drugs reduced by iron (levothyroxine, quinolones, levodopa) with drugs that reduce iron absorption (antacids, bisphosphonates, tetracyclines).
// 3. Key Distractor: Folate monotherapy for any megaloblastic anemia; "increase Hb to normal" as ESA goal; PPI/antacid pairing with iron; iron dextran without test dose.
// 4. Vignette Strategy: Stems use the mechanism-first rule — present an adverse-effect pattern (HTN+thrombosis in CKD patient → ESA; progressive paresthesia after starting a B-vitamin → folate masking B12; teratogenicity + neutropenia in sickle patient → hydroxyurea) and force the student to identify the drug/MOA from physiology rather than name recognition.
//
// PDF Mapping Check: Found
// PDF Filename: Lecture # 153. L. Goldstein, Pharm.D. (PPT).pdf
// Mapping Key: 17-Hematology: Pharmacology of Anemias (L153)
// Status: Verified

window.Test_L153 = [
  {
    "id": 1,
    "category": "Pharmacology: Iron Absorption Physiology",
    "questionText": "An enterocyte in the duodenum is internalizing dietary iron from a plant-based meal. Before the iron can be transported across the apical membrane by divalent metal transporter 1 (DMT1), what conversion must occur in the intestinal lumen?",
    "options": [
      { "text": "Conversion of Fe2+ to Fe3+ by duodenal cytochrome b", "explanation": "Incorrect. This reverses the direction of the reaction Dr. Goldstein described. Duodenal cytochrome b reduces, rather than oxidizes, iron, and DMT1 transports only the reduced (ferrous) form. This would be the correct answer if describing iron loading onto transferrin in the bloodstream, where iron is carried in the Fe3+ state." },
      { "text": "Binding of Fe3+ to intrinsic factor for receptor-mediated uptake", "explanation": "Incorrect. Intrinsic factor binds vitamin B12, not iron, and uptake occurs in the terminal ileum rather than the duodenum. This would be the correct answer if the question concerned vitamin B12 absorption in a patient who has functional gastric parietal cells." },
      { "text": "Reduction of Fe3+ to Fe2+ by duodenal cytochrome b", "explanation": "Correct. The lecturer emphasized that non-heme iron from plants is in the Fe3+ (oxidized) form, but only Fe2+ can be transported by DMT1. Gastric acid first solubilizes Fe3+ from food proteins, and the brush-border ferrireductase duodenal cytochrome b then reduces Fe3+ to Fe2+, which DMT1 imports. Vitamin C accelerates this same reduction step." },
      { "text": "Polymerization of Fe2+ into a ferritin core for storage", "explanation": "Incorrect. Ferritin is the intracellular storage form found inside enterocytes, hepatocytes, and macrophages — not a luminal modification required for absorption. This would be the correct answer if the question asked how an enterocyte holds onto iron when body stores are already replete." },
      { "text": "Complexation of Fe3+ with hepcidin to release ferroportin", "explanation": "Incorrect. Hepcidin is a hepatic peptide hormone that binds basolateral ferroportin and triggers its internalization, sequestering iron — it is not a luminal absorption cofactor. This would be the correct answer if the question asked how chronic inflammation reduces serum iron levels." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Only Fe2+ (heme iron or reduced non-heme iron) is absorbed by DMT1. Gastric acid solubilizes plant Fe3+; duodenal cytochrome b (aided by vitamin C) reduces it to Fe2+.",
    "pdfPage": 10,
    "pdfQuote": "Fe3+ is reduced by duodenal cytochrome b"
  },
  {
    "id": 2,
    "category": "Pharmacology: Iron Deficiency Anemia",
    "questionText": "A 34-year-old woman with newly diagnosed iron deficiency anemia is started on the most common first-line oral iron supplement. Which laboratory value most directly and specifically reflects her total body iron stores and is the most sensitive test for the underlying deficiency?",
    "options": [
      { "text": "Mean corpuscular volume (MCV)", "explanation": "Incorrect. MCV will be low (microcytic) in established iron deficiency, but it reflects the consequence of inadequate hemoglobinization rather than directly measuring stores, and it falls only after stores are exhausted. This would be the correct answer if asking which CBC index classifies the morphologic category of the anemia." },
      { "text": "Total iron binding capacity (TIBC)", "explanation": "Incorrect. TIBC rises in iron deficiency because transferrin upregulates, but it is an indirect marker of transport capacity, not a measure of body iron stores. This would be the correct answer if you were asked which laboratory value increases as the liver compensates by producing more transferrin." },
      { "text": "Serum hemoglobin concentration", "explanation": "Incorrect. Hemoglobin defines whether anemia is present and quantifies its severity, but it does not specifically measure iron stores — many anemias share a low hemoglobin. This would be the correct answer if asked which value is used to dose erythropoiesis-stimulating agents." },
      { "text": "Serum ferritin", "explanation": "Correct. Dr. Goldstein highlighted that serum ferritin directly measures iron stores and that a low ferritin level is the most sensitive and specific test for iron deficiency. Other supportive markers — low hemoglobin/hematocrit, low MCV, low serum iron, high TIBC — confirm the diagnosis but are less specific than ferritin." },
      { "text": "Serum hepcidin level", "explanation": "Incorrect. Hepcidin regulates iron absorption and recycling by internalizing ferroportin, but it is not the standard clinical test for iron stores in this setting. This would be the correct answer if asking which hormone causes anemia of chronic inflammation by sequestering iron." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Serum ferritin = body iron stores. A low ferritin is the single most sensitive and specific laboratory test for iron deficiency anemia.",
    "pdfPage": 11,
    "pdfQuote": "Serum ferritin directly measures iron stores"
  },
  {
    "id": 3,
    "category": "Pharmacology: Iron-Drug Interactions",
    "questionText": "A 67-year-old patient is started on oral ferrous sulfate for iron deficiency anemia. He takes several other chronic medications. Which of the following drugs would have its absorption REDUCED if taken simultaneously with the iron supplement?",
    "options": [
      { "text": "Acetaminophen (paracetamol)", "explanation": "Incorrect. Acetaminophen absorption is not meaningfully affected by oral iron supplements and does not form chelation complexes with divalent cations. This would be the correct answer if the question concerned a drug whose hepatic metabolism is unchanged by iron." },
      { "text": "Levothyroxine", "explanation": "Correct. The lecturer specifically listed levothyroxine, quinolone antibiotics, levodopa, and phosphate supplements among the drugs whose absorption is reduced when co-administered with iron. Iron binds these drugs in the gut lumen and forms insoluble complexes; dosing must be separated to maintain efficacy." },
      { "text": "Lisinopril", "explanation": "Incorrect. Lisinopril is not on the list of drugs whose bioavailability is altered by iron co-administration. This would be the correct answer if asking which antihypertensive has a dry cough as its classic mechanism-based adverse effect." },
      { "text": "Atorvastatin", "explanation": "Incorrect. Statin absorption is not clinically reduced by oral iron in the manner Dr. Goldstein described. This would be the correct answer if asking which class is affected by CYP3A4 inhibitors such as macrolides." },
      { "text": "Metformin", "explanation": "Incorrect. Metformin is not part of the iron interaction list the lecturer emphasized. This would be the correct answer if asking which antidiabetic can independently cause vitamin B12 deficiency over years of use." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Iron REDUCES absorption of levothyroxine, quinolones, levodopa, and phosphate. Iron absorption is REDUCED by antacids, bisphosphonates, and tetracyclines. Separate doses.",
    "pdfPage": 13,
    "pdfQuote": "Iron can reduce absorption of levothyroxine, quinolone antibiotics, levodopa"
  },
  {
    "id": 4,
    "category": "Pharmacology: IV Iron Therapy",
    "questionText": "A 52-year-old woman with malabsorption is to receive a parenteral iron preparation. The prescriber selects low-molecular-weight iron dextran. Which of the following best describes a unique safety requirement for this product that does NOT apply to other available IV iron formulations?",
    "options": [
      { "text": "Administration of a small test dose before the first full dose", "explanation": "Correct. Dr. Goldstein emphasized that low-molecular-weight iron dextran requires a test dose before the first therapeutic dose because of the anaphylactoid reaction risk inherited from the now-withdrawn high-molecular-weight formulation. The other available IV iron products do not require this test dose, though all may cause infusion-related effects." },
      { "text": "Continuous cardiac telemetry during the full infusion to detect arrhythmias", "explanation": "Incorrect. Continuous telemetry is not a standard requirement for IV iron infusions in general; routine vital sign monitoring is sufficient. This would be the correct answer if asking about IV potassium replacement at high rates." },
      { "text": "Mandatory IV chelation with deferoxamine afterward", "explanation": "Incorrect. Deferoxamine is used for iron overload (e.g., from chronic transfusions), not as a routine companion to IV iron replacement. This would be the correct answer if asking about management of acute iron poisoning or transfusional hemosiderosis." },
      { "text": "Concurrent administration of vitamin C to enhance reduction", "explanation": "Incorrect. Vitamin C enhances oral non-heme iron absorption by reducing Fe3+ to Fe2+ in the gut lumen — it is not required for parenteral iron, which bypasses absorption entirely. This would be the correct answer if asking how to maximize the bioavailability of an oral ferrous sulfate dose." },
      { "text": "Premedication with corticosteroids for all patients", "explanation": "Incorrect. Premedication may be considered for patients with a history of asthma or inflammatory arthritis to mitigate infusion-related exacerbations, but it is not mandated for every patient. This would be the correct answer if the patient had a known prior infusion reaction requiring prophylaxis." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Low-molecular-weight iron dextran requires a test dose before the first infusion due to anaphylactoid risk. Other IV iron products do not require a test dose.",
    "pdfPage": 12,
    "pdfQuote": "Test dose prior to first dose"
  },
  {
    "id": 5,
    "category": "Pharmacology: Folate Metabolism",
    "questionText": "A medication that competitively inhibits dihydrofolate reductase (DHFR) in human cells can produce a megaloblastic anemia with chronic use. Which mechanism most directly explains how DHFR inhibition causes megaloblastic erythropoiesis?",
    "options": [
      { "text": "Trapping of folate as methyltetrahydrofolate, mimicking B12 deficiency", "explanation": "Incorrect. The methyl-folate trap is the consequence of vitamin B12 deficiency, not DHFR inhibition. DHFR inhibitors block reduction of folate to its active forms upstream of the methyl-folate cycle. This would be the correct answer if the question described a patient with low B12 stores due to atrophic gastritis." },
      { "text": "Reduced conversion of folic acid to tetrahydrofolate, depleting cofactors for thymidylate synthesis", "explanation": "Correct. DHFR reduces dietary and supplemental folic acid (and dihydrofolate generated during thymidylate synthesis) to tetrahydrofolate (THF). Loss of THF halts the one-carbon transfers required for thymidylate and purine synthesis, so DNA replication stalls while RNA and protein synthesis continue — producing megaloblasts. The lecturer specifically named methotrexate, trimethoprim, and pyrimethamine as DHFR inhibitors." },
      { "text": "Direct destruction of intrinsic factor in gastric parietal cells", "explanation": "Incorrect. Autoimmune destruction of parietal cells/intrinsic factor causes pernicious anemia (a B12 deficiency), not folate-related megaloblastosis from DHFR inhibition. This would be the correct answer if describing classic pernicious anemia." },
      { "text": "Accumulation of methylmalonyl-CoA disrupting neuronal lipids", "explanation": "Incorrect. Methylmalonyl-CoA accumulation arises in vitamin B12 deficiency from loss of methylmalonyl-CoA mutase function and causes the neurologic syndrome — not the megaloblastic anemia of folate antagonists. This would be the correct answer if the stem asked which biochemical abnormality explains the paresthesias of pernicious anemia." },
      { "text": "Inhibition of ribonucleotide reductase, preventing deoxyribonucleotide formation and halting S-phase DNA synthesis in erythroid precursors", "explanation": "Incorrect. Ribonucleotide reductase is the target of hydroxyurea, not DHFR inhibitors. While both stall DNA synthesis, the lecturer placed DHFR inhibitors in the folate metabolism arm. This would be the correct answer if asking how hydroxyurea induces stress erythropoiesis in sickle cell disease." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "DHFR inhibitors (methotrexate, trimethoprim, pyrimethamine) deplete tetrahydrofolate, halt thymidylate/purine synthesis, and produce megaloblastic anemia.",
    "pdfPage": 19,
    "pdfQuote": "DHFR inhibitors: methotrexate, trimethoprim, pyrimethamine"
  },
  {
    "id": 6,
    "category": "Pharmacology: Vitamin B12 Absorption",
    "questionText": "A patient with pernicious anemia receives oral cyanocobalamin tablets and has minimal hematologic response. The bioavailability of oral cyanocobalamin in pernicious anemia is approximately 1.2%. Which physiologic disruption best explains this poor absorption?",
    "options": [
      { "text": "Autoimmune destruction of gastric parietal cells and intrinsic factor", "explanation": "Correct. Pernicious anemia is caused by autoimmune attack on gastric parietal cells and intrinsic factor (IF). Without IF, vitamin B12 cannot complex with IF in the duodenum, travel to the distal ileum, and be internalized by IF-receptor endocytosis. Because oral B12 bypasses essentially none of this requirement, parenteral (IM) administration becomes necessary." },
      { "text": "Lack of brush-border glutamate carboxypeptidase activity in the jejunal mucosa", "explanation": "Incorrect. Glutamate carboxypeptidase hydrolyzes polyglutamated folate to monoglutamate forms in the small bowel — it has nothing to do with B12 absorption. This would be the correct answer if asking how dietary folate is processed before DHFR can act on it." },
      { "text": "Saturation of duodenal divalent metal transporter 1 (DMT1)", "explanation": "Incorrect. DMT1 transports ferrous iron, not vitamin B12, and saturation explains why iron absorption falls at high doses. This would be the correct answer if asking why a single large oral iron dose yields diminishing returns." },
      { "text": "Decreased transcobalamin synthesis in the liver", "explanation": "Incorrect. Transcobalamins transport absorbed B12 in the bloodstream but are not required for intestinal absorption itself; their loss does not cause oral bioavailability to fall to ~1%. This would be the correct answer if the question concerned plasma transport of B12 to peripheral tissues." },
      { "text": "Inhibition of ferroportin by hepcidin in enterocytes", "explanation": "Incorrect. Hepcidin/ferroportin govern iron — not B12 — efflux from enterocytes. This would be the correct answer if asking why patients with chronic inflammation develop anemia despite adequate dietary iron." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Pernicious anemia = autoimmune loss of intrinsic factor. Oral B12 bioavailability falls to ~1%, so IM cyanocobalamin (or high-dose oral/intranasal maintenance) is required.",
    "pdfPage": 22,
    "pdfQuote": "Cyanocobalamin oral bioavailability: 1.2% in patients with pernicious anemia"
  },
  {
    "id": 7,
    "category": "Pharmacology: Hydroxocobalamin",
    "questionText": "A first responder arrives at an apartment fire and finds an unconscious adult with no obvious burns. Suspecting cyanide poisoning from smoke inhalation, the team administers a high-dose IV antidote that also happens to be one of the two parenteral cobalamin forms used to treat vitamin B12 deficiency. By which mechanism does this agent detoxify cyanide?",
    "options": [
      { "text": "Inhibition of cytochrome c oxidase to displace cyanide from the enzyme", "explanation": "Incorrect. Cyanide poisons cells precisely by inhibiting cytochrome c oxidase; the antidote does not enhance that inhibition. This would be the correct answer if describing the mechanism of cyanide toxicity itself rather than its antidote." },
      { "text": "Inducing methemoglobinemia to bind cyanide as cyanomethemoglobin", "explanation": "Incorrect. This is the mechanism of nitrites in the older cyanide antidote kit (amyl/sodium nitrite), not of hydroxocobalamin. This would be the correct answer if the antidote chosen were sodium nitrite rather than the cobalamin derivative." },
      { "text": "Donating a sulfur to rhodanese to convert cyanide to thiocyanate", "explanation": "Incorrect. Sodium thiosulfate serves as the sulfur donor for rhodanese-mediated conversion of cyanide to thiocyanate. This would be the correct answer if the question asked about the second component of the traditional cyanide antidote kit." },
      { "text": "Binding cyanide to form cyanocobalamin, which is excreted in urine", "explanation": "Correct. Hydroxocobalamin contains a hydroxyl group at the cobalt center that exchanges with free cyanide, generating non-toxic cyanocobalamin that is excreted in the urine. The lecturer noted that hydroxocobalamin can be given IV (or intraosseously) at very high doses — about 5 g x 2 — for cyanide poisoning, in contrast to the ~1 mg dose used for B12 deficiency." },
      { "text": "Chelating cyanide through a hexadentate iron-binding site", "explanation": "Incorrect. The cobalt atom at the corrin ring center — not iron — accepts the cyanide ligand in hydroxocobalamin. This would be the correct answer if asking how deferoxamine chelates excess iron in transfusional iron overload." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Hydroxocobalamin (B12a) detoxifies cyanide by exchanging its OH group for CN, forming cyanocobalamin excreted in urine. Used at much higher doses (about 5 g IV) than for anemia (about 1 mg IM).",
    "pdfPage": 22,
    "pdfQuote": "IV or IO for treatment of cyanide poisoning"
  },
  {
    "id": 8,
    "category": "Pharmacology: ESA Mechanism",
    "questionText": "A recombinant glycoprotein used in anemia of chronic kidney disease produces its hematologic effect by binding a receptor on erythroid progenitor cells, triggering receptor dimerization and downstream signaling. Which intracellular signaling pathway is activated by this receptor binding to drive red cell production?",
    "options": [
      { "text": "cAMP / protein kinase A pathway", "explanation": "Incorrect. The cAMP-PKA pathway is downstream of Gs-coupled receptors such as beta-adrenergic receptors, not the erythropoietin receptor. This would be the correct answer if asking how isoproterenol increases cardiac contractility." },
      { "text": "JAK/STAT pathway with downstream PI3K/AKT and MAPK", "explanation": "Correct. Dr. Goldstein emphasized that ESAs (epoetin alfa, darbepoetin alfa, methoxy PEG-epoetin beta) bind the erythropoietin receptor (EPOR) on bone-marrow erythroid progenitors. The receptors dimerize, activate JAK2, and trigger STAT-mediated transcription along with PI3K/AKT and MAPK signaling. This reduces apoptosis of progenitors, increases reticulocyte maturation, and increases RBC production." },
      { "text": "Direct stimulation of endogenous EPO release from peritubular cells", "explanation": "Incorrect. The lecturer was explicit: ESAs are themselves recombinant EPO and act directly on EPOR — they do NOT stimulate endogenous EPO secretion. This would be the correct answer if describing how hypoxia-inducible factor (HIF) stabilizers work." },
      { "text": "IP3 / DAG release through Gq-coupled signaling", "explanation": "Incorrect. The EPOR is a cytokine-family receptor associated with JAK kinases, not a Gq-coupled receptor. This would be the correct answer if asking how alpha1-adrenergic stimulation contracts vascular smooth muscle." },
      { "text": "Nuclear hormone receptor binding to hormone response elements", "explanation": "Incorrect. EPO is a hydrophilic peptide hormone that cannot cross the plasma membrane and acts at a surface receptor, not a nuclear receptor. This would be the correct answer if discussing the mechanism of glucocorticoids or thyroid hormone." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "ESAs bind EPOR -> receptor dimerization -> JAK/STAT (with PI3K/AKT and MAPK) -> reduced erythroid apoptosis, increased reticulocyte maturation, and RBC production.",
    "pdfPage": 27,
    "pdfQuote": "JAK/STAT signaling pathway"
  },
  {
    "id": 9,
    "category": "Pharmacology: ESA Goal of Therapy",
    "questionText": "A nephrologist is initiating an erythropoiesis-stimulating agent for a patient with anemia of chronic kidney disease. The pharmacist confirms the therapeutic goal. Which of the following best states the goal of ESA therapy as described in the lecture?",
    "options": [
      { "text": "Normalize hemoglobin to the population mean for age and sex", "explanation": "Incorrect. The lecturer was emphatic that the goal is NOT to push hemoglobin into the normal range, because higher hemoglobin values increase cardiovascular and thrombotic events. This would be the correct answer if no boxed warning existed and if there were no excess mortality at higher hemoglobin targets." },
      { "text": "Achieve a hemoglobin level greater than 13 g/dL to maximize systemic oxygen delivery to peripheral tissues", "explanation": "Incorrect. Aiming above ~11 g/dL increases mortality, MI, stroke, and venous thromboembolism in CKD patients. This would be the correct answer if hemoglobin elevation had no associated cardiovascular harm." },
      { "text": "Reduce the need for red blood cell transfusions using the lowest effective dose", "explanation": "Correct. The lecturer repeatedly framed the goal of ESA therapy as 'safely reducing the need for RBC transfusions by using the lowest dose required to alleviate anemia,' while minimizing thrombotic and cardiovascular risk. Serum hemoglobin should not exceed roughly 10-11 g/dL because higher values are associated with increased mortality and cardiovascular events." },
      { "text": "Suppress endogenous erythropoietin to prevent receptor downregulation", "explanation": "Incorrect. ESAs activate EPOR like endogenous EPO; there is no therapeutic suppression of native EPO release in this paradigm. This would be the correct answer if the question described a treatment for polycythemia vera." },
      { "text": "Replace iron stores in patients with chronic blood loss", "explanation": "Incorrect. Iron stores are replaced with iron, not with an ESA — though iron must be monitored during ESA therapy to ensure adequate substrate for erythropoiesis. This would be the correct answer if asking about the goal of oral or IV iron supplementation." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "ESA goal: reduce transfusion need using the LOWEST effective dose. Do not push Hb above ~10-11 g/dL — higher targets increase MI, stroke, and VTE.",
    "pdfPage": 28,
    "pdfQuote": "reduce the need for RBC transfusions"
  },
  {
    "id": 10,
    "category": "Pharmacology: Hydroxyurea MOA",
    "questionText": "A medication used as first-line therapy for sickle cell anemia binds iron molecules in the catalytic subunit of an enzyme that converts ribonucleotides to deoxyribonucleotides. Which downstream effect most directly explains how this drug reduces vaso-occlusive crises?",
    "options": [
      { "text": "Stress erythropoiesis that shifts marrow toward immature RBCs expressing gamma-globin, raising HbF", "explanation": "Correct. Inhibition of ribonucleotide reductase slows DNA synthesis in rapidly dividing erythroid precursors and produces mild bone-marrow suppression. The marrow responds with 'stress erythropoiesis' — generating new immature RBCs (stress erythroid precursors) that preferentially express gamma-globin genes, raising fetal hemoglobin (HbF). HbF interrupts HbS polymerization, reducing sickling and vaso-occlusion." },
      { "text": "Direct dissolution of polymerized hemoglobin S in deoxygenated red cells", "explanation": "Incorrect. The drug does not depolymerize HbS directly; rather, it increases fetal hemoglobin, which is what inhibits HbS polymerization. This would be the correct answer if the question described a hypothetical molecule that binds HbS itself." },
      { "text": "Selective antibody-mediated blockade of P-selectin on endothelial cells", "explanation": "Incorrect. P-selectin blockade is the mechanism of crizanlizumab, not of the ribonucleotide reductase inhibitor. This would be the correct answer if describing an adjunctive monoclonal antibody for sickle cell." },
      { "text": "Increased NAD+ availability that reduces oxidative stress in sickled RBCs", "explanation": "Incorrect. That mechanism describes L-glutamine, an adjunctive sickle cell therapy that alters the NADH/NAD+ redox balance — not the ribonucleotide reductase inhibitor. This would be the correct answer if the stem described an oral powder used twice daily as an adjunct." },
      { "text": "Stimulation of erythropoietin receptor JAK/STAT signaling in bone-marrow progenitor cells with dimerization of cell-surface receptors", "explanation": "Incorrect. EPOR/JAK-STAT activation is the mechanism of ESAs used for CKD and chemotherapy-induced anemia, not of the sickle cell first-line agent. This would be the correct answer if the question concerned darbepoetin alfa in a dialysis patient." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Hydroxyurea inhibits ribonucleotide reductase -> stress erythropoiesis -> new RBCs that preferentially express gamma-globin -> increased HbF -> decreased HbS polymerization -> decreased vaso-occlusion.",
    "pdfPage": 35,
    "pdfQuote": "halts the cell cycle in S phase, induces stress erythropoiesis"
  },
  {
    "id": 11,
    "category": "Pharmacology: Iron Deficiency Management",
    "questionText": "A 28-year-old woman presents with 4 months of progressive fatigue and pale skin. Her menses are heavy. Vitals: BP 118/72, HR 96, RR 14, T 98.4 F. Conjunctivae are pale; cardiac exam reveals a soft systolic flow murmur. Labs: Hb 8.6 g/dL, MCV 72 fL, serum ferritin 7 ng/mL (low), TIBC elevated. She has no GI symptoms, no prior surgeries, and tolerates pills well. She is started on the most common oral iron preparation. To MAXIMIZE absorption of each dose, which counseling instruction is most appropriate?",
    "options": [
      { "text": "Take with a large glass of milk to buffer GI upset", "explanation": "Incorrect. Calcium in milk forms insoluble complexes with non-heme iron and significantly reduces absorption, as the lecturer specifically noted. This would be the correct answer if asking how to reduce iron absorption deliberately (which is never the goal in iron deficiency)." },
      { "text": "Take immediately before bedtime with a calcium-containing chewable antacid to reduce GI discomfort", "explanation": "Incorrect. Antacids raise gastric pH and the calcium itself chelates iron — both reduce absorption. This would be the correct answer if attempting to reduce iron absorption in a patient with hemochromatosis (in which case the more appropriate strategy would be phlebotomy)." },
      { "text": "Take on an empty stomach, ideally with a small amount of orange juice", "explanation": "Correct. Oral iron is best absorbed on an empty stomach because foods, polyphenols in coffee/tea, calcium-rich milk, and fiber all form insoluble complexes with non-heme iron. Vitamin C from citrus is a strong reducing agent that converts Fe3+ to Fe2+, enhancing absorption. The combination optimizes uptake at each dose." },
      { "text": "Take with morning coffee to time the dose with breakfast routine", "explanation": "Incorrect. Polyphenols (tannins) in coffee and tea form insoluble complexes with iron and reduce absorption — this is the opposite of what is desired. This would be the correct answer if convenience overrode efficacy, which is unacceptable when treating a documented deficiency." },
      { "text": "Take with the patient's once-weekly bisphosphonate tablet", "explanation": "Incorrect. Bisphosphonates are explicitly listed among the drugs that reduce iron absorption (along with antacids and tetracyclines); the two should be separated. This would be the correct answer if intentionally trying to demonstrate the chelation interaction in a pharmacy lab." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Oral iron: empty stomach + vitamin C source = maximal absorption. Avoid concurrent coffee, tea, dairy, antacids, bisphosphonates, and tetracyclines.",
    "pdfPage": 11,
    "pdfQuote": "Take on empty stomach"
  },
  {
    "id": 12,
    "category": "Pharmacology: Iron Replacement Selection",
    "questionText": "A 47-year-old woman with Crohn disease and chronic terminal ileal inflammation has microcytic anemia (Hb 8.4 g/dL, ferritin 6 ng/mL). She has tried two different oral iron preparations over the past 6 months and developed severe abdominal pain and nausea on each, with no rise in hemoglobin and persistently low ferritin. She is hemodynamically stable. Vitals: BP 122/76, HR 88, RR 14, T 98.6 F. Which of the following is the most appropriate next step in management?",
    "options": [
      { "text": "Switch to a higher dose of the same oral ferrous sulfate, taken three times daily with meals", "explanation": "Incorrect. She has demonstrated both intolerance and lack of efficacy from oral iron, and taking iron with meals further reduces absorption. Pushing oral therapy harder will not overcome malabsorption. This would be the correct answer if she had been tolerating oral iron but simply needed dose escalation." },
      { "text": "Initiate epoetin alfa subcutaneously to drive erythropoiesis", "explanation": "Incorrect. ESAs require adequate iron substrate to be effective and are indicated for anemia of CKD, MDS, or chemotherapy-induced anemia — not for iron deficiency anemia caused by malabsorption. Starting an ESA in a patient with depleted iron stores would be futile and would expose her unnecessarily to thrombotic and cardiovascular risk. This would be the correct answer if she had non-dialysis CKD with documented EPO deficiency and adequate iron stores." },
      { "text": "Begin oral folic acid 5 mg daily", "explanation": "Incorrect. Her anemia is microcytic with low ferritin — classic iron deficiency, not megaloblastic. Folate would not address the cause. This would be the correct answer if her MCV were elevated and labs showed low serum folate with normal B12." },
      { "text": "Begin parenteral iron therapy", "explanation": "Correct. Dr. Goldstein listed the precise scenario described here — oral iron ineffective or poorly tolerated, malabsorption syndromes, chronic inflammatory disease — as indications for IV iron. She meets multiple criteria. IV iron bypasses GI absorption entirely and avoids further GI irritation. A non-dextran IV preparation is convenient because no test dose is required; if low-molecular-weight iron dextran is chosen, a test dose precedes the first infusion." },
      { "text": "Transfuse 2 units of packed red blood cells now", "explanation": "Incorrect. She is hemodynamically stable and asymptomatic at rest; transfusion is not warranted purely for her Hb of 8.4 in chronic iron deficiency when the underlying replacement can be delivered effectively by IV iron. This would be the correct answer if she had ongoing hemorrhage, hemodynamic compromise, or active end-organ ischemia." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "IV iron is indicated when oral iron is ineffective/intolerable, with malabsorption (e.g., Crohn's, gastric bypass), chronic inflammation, ongoing blood loss, or high demand (hemodialysis, ESAs).",
    "pdfPage": 11,
    "pdfQuote": "Oral iron is ineffective or poorly tolerated"
  },
  {
    "id": 13,
    "category": "Pharmacology: Folate and B12 — Methyl-Folate Trap",
    "questionText": "A 68-year-old strict vegan presents with 6 months of progressive fatigue and new-onset numbness and tingling in both feet. Vitals are normal. Exam reveals decreased vibratory sensation, an unsteady gait, and a smooth tongue. Labs: Hb 9.8 g/dL, MCV 116 fL, peripheral smear shows hypersegmented neutrophils and oval macrocytes. Without checking B12 or folate levels, a clinician begins empiric high-dose oral folic acid. Over 6 weeks the anemia resolves, but his paresthesias progress to spastic gait and he develops new neuropsychiatric symptoms. Which mechanism best explains the worsening neurologic disease?",
    "options": [
      { "text": "Direct neurotoxicity of folate metabolites in peripheral nerves", "explanation": "Incorrect. Folic acid itself is not neurotoxic; the neurologic syndrome is caused by an unrecognized B12 deficiency, not by folate. This would be the correct answer if folic acid had an established axonopathy at the doses used, which it does not." },
      { "text": "Hydroxyurea-induced ribonucleotide reductase inhibition in posterior column neurons, blocking deoxyribonucleotide synthesis and producing progressive demyelination of ascending sensory tracts that mimics B12 deficiency", "explanation": "Incorrect. The patient was not given hydroxyurea, and that drug does not produce dorsal-column dysfunction. This would be the correct answer if the patient had sickle cell disease on hydroxyurea presenting with a different complication." },
      { "text": "Iron-induced oxidative injury to the peripheral nerves", "explanation": "Incorrect. He was not given iron, and iron supplementation does not cause this neurologic syndrome. This would be the correct answer if asking about CNS hemosiderosis in transfusion-dependent patients (not at this dose or exposure)." },
      { "text": "Erythropoietin-stimulated nerve demyelination through JAK/STAT", "explanation": "Incorrect. ESAs were not given and do not cause demyelination. This would be the correct answer if discussing seizures occasionally reported in the first few months of ESA therapy due to rapid blood pressure shifts (not myelin damage)." },
      { "text": "Folate corrected DNA synthesis and resolved anemia, but did not restore methylmalonyl-CoA mutase function, allowing abnormal myelin synthesis to progress", "explanation": "Correct. Folate monotherapy can correct the megaloblastic anemia of B12 deficiency by providing tetrahydrofolate for thymidylate synthesis. However, B12 is required for methylmalonyl-CoA mutase; without B12, methylmalonyl-CoA and propionyl-CoA accumulate, generating abnormal fatty acids that disrupt myelin. Folate does NOT restore mutase activity, so neurologic damage progresses 'unmasked' — and can be irreversible. The lecturer explicitly warned against folic acid monotherapy without confirming B12 levels." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "NEVER treat megaloblastic anemia with folate alone before checking B12. Folate corrects the anemia but does NOT prevent — and can mask — progressive, potentially irreversible B12 neurologic injury.",
    "pdfPage": 19,
    "pdfQuote": "Folic acid monotherapy unmasks vitamin B12 deficiency"
  },
  {
    "id": 14,
    "category": "Pharmacology: Vitamin B12 Therapy",
    "questionText": "A 72-year-old woman presents with fatigue, glossitis, and paresthesias. Labs: Hb 9.2 g/dL, MCV 114 fL, serum B12 110 pg/mL (low), folate normal. Anti-intrinsic-factor antibodies are positive. She is offered cyanocobalamin as a supplement and prefers to avoid daily injections if possible. Which administration plan is most consistent with the pharmacokinetic principles taught in the lecture?",
    "options": [
      { "text": "IM cyanocobalamin 1000 mcg daily for 1 to 2 weeks, then monthly maintenance", "explanation": "Correct. The lecturer specifically described this loading-then-maintenance regimen. IM administration bypasses the absent intrinsic factor and ensures reliable delivery; the rapid loading replenishes hepatic B12 stores within 1 to 2 weeks, after which monthly IM dosing maintains adequate levels for the rest of her life. Intranasal cyanocobalamin (about 6% bioavailability relative to IM) is an option for maintenance in patients who cannot tolerate injections." },
      { "text": "Oral cyanocobalamin 1 mg daily, expecting full restoration of B12 stores within 2 weeks", "explanation": "Incorrect. In pernicious anemia, oral bioavailability is only about 1.2% because of lost intrinsic factor; relying on oral dosing as primary therapy is unreliable. This would be the correct answer if she had isolated dietary insufficiency with normal intrinsic factor and functional gut absorption." },
      { "text": "Single high-dose IV hydroxocobalamin 5 g now, repeated in 8 hours, with no further therapy", "explanation": "Incorrect. The 5 g x 2 dosing is the regimen for cyanide poisoning, not for B12-deficiency anemia, and a one-time loading dose without maintenance does not address her ongoing autoimmune destruction of intrinsic factor. This would be the correct answer if she were unconscious after smoke inhalation from a structure fire." },
      { "text": "Oral folic acid 1 mg daily as monotherapy because it bypasses intrinsic factor", "explanation": "Incorrect. Folate will not correct her B12 deficiency and risks masking her neurologic disease, which can become irreversible. This would be the correct answer only if labs confirmed isolated low folate with a normal B12." },
      { "text": "Stop all supplementation and recheck B12 in 3 to 5 years when hepatic stores deplete", "explanation": "Incorrect. Her stores are already depleted (she is symptomatic with neurologic findings); waiting will allow potentially irreversible myelin damage to progress. This would be the correct answer if she were a healthy patient with normal B12 levels who had just adopted a vegan diet today." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Pernicious anemia: IM cyanocobalamin 1000 mcg daily x 1 to 2 weeks (loading), then monthly maintenance. Intranasal is an option for maintenance only.",
    "pdfPage": 22,
    "pdfQuote": "1000 mcg daily, 1-2 weeks then monthly maintenance"
  },
  {
    "id": 15,
    "category": "Pharmacology: ESA Adverse Effects",
    "questionText": "A 58-year-old man with anemia of chronic kidney disease (Hb 8.4 g/dL) is started on a recombinant glycoprotein injection. After 6 weeks, his Hb has risen to 12.6 g/dL. His BP rises from 138/84 to 162/98. He then presents to the emergency department with new left-sided weakness and dysarthria; CT shows an acute ischemic stroke. Which mechanism best explains how his medication contributed to this complication?",
    "options": [
      { "text": "Direct immunoglobulin-mediated vasculitis of cerebral arteries with secondary thrombosis and endothelial injury from circulating anti-EPO antibodies", "explanation": "Incorrect. While ESAs can elicit anti-EPO antibodies that cause pure red cell aplasia, they do not cause antibody-mediated cerebral vasculitis. This would be the correct answer if the patient developed worsening anemia rather than a stroke after months of therapy." },
      { "text": "Increased blood viscosity from a Hb above the recommended ceiling, with worsened hypertension and thrombosis", "explanation": "Correct. The lecturer emphasized that ESAs increase blood viscosity, worsen hypertension, and increase thrombotic events (MI, stroke, VTE) — risks formalized in a US Boxed Warning. CKD patients with Hb greater than 11 g/dL are at greater risk. Driving his Hb to 12.6 likely exceeded the safe target (10 to 11 g/dL), increasing viscosity and arterial thrombosis risk; the BP rise compounded stroke risk." },
      { "text": "Hepcidin-mediated iron sequestration in macrophages", "explanation": "Incorrect. Hepcidin-driven iron sequestration limits iron availability for erythropoiesis but does not by itself cause stroke. This would be the correct answer if asking why this CKD patient might fail to respond to his ESA despite adequate dosing." },
      { "text": "Methyl-folate trap from impaired methionine synthase", "explanation": "Incorrect. The methyl-folate trap belongs to B12 deficiency physiology and produces megaloblastic anemia, not ischemic stroke from an ESA. This would be the correct answer if asking why a vegan with low B12 develops macrocytic anemia." },
      { "text": "Inhibition of ribonucleotide reductase causing hypoxic ischemia", "explanation": "Incorrect. Ribonucleotide reductase inhibition is the mechanism of hydroxyurea in sickle cell disease and does not explain stroke from an ESA. This would be the correct answer if this patient had sickle cell disease and developed an unrelated stroke during ribonucleotide reductase inhibitor therapy." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "ESAs: US Boxed Warning for death, MI, stroke, VTE, and vascular access thrombosis. Keep Hb at the LOWEST level avoiding transfusion (about 10 to 11 g/dL or less).",
    "pdfPage": 29,
    "pdfQuote": "ESAs increase the risk of death, MI, stroke, venous thromboembolism"
  },
  {
    "id": 16,
    "category": "Pharmacology: ESA — Pure Red Cell Aplasia",
    "questionText": "A 64-year-old woman with chronic kidney disease has received subcutaneous epoetin alfa for 18 months with previously stable hemoglobin around 10.5 g/dL. Over the past 2 months, despite dose escalation, her Hb falls to 7.2 g/dL. Reticulocyte count is near zero; iron studies are adequate; vitamin B12 and folate levels are normal. A bone marrow biopsy shows absent erythroid precursors with preserved myeloid and megakaryocyte lineages. Which mechanism best explains this clinical picture?",
    "options": [
      { "text": "Iron sequestration by hepcidin secondary to inflammation", "explanation": "Incorrect. Hepcidin-mediated iron sequestration would impair erythropoiesis through low iron availability, but iron studies were noted to be adequate, and bone marrow would still show erythroid precursors. This would be the correct answer if her ferritin were very high with low transferrin saturation." },
      { "text": "Methotrexate-like DHFR inhibition producing megaloblastic erythropoiesis", "explanation": "Incorrect. The patient is not on a DHFR inhibitor, and folate/B12 are normal; the marrow would show megaloblastic changes rather than aplasia if this were the mechanism. This would be the correct answer if she had been on chronic methotrexate with macrocytic anemia and megaloblastic marrow." },
      { "text": "Ribonucleotide reductase inhibition halting DNA synthesis in marrow precursors", "explanation": "Incorrect. She is not on hydroxyurea or another ribonucleotide reductase inhibitor; this mechanism would also produce pancytopenia rather than isolated red cell aplasia. This would be the correct answer if she had sickle cell disease on dose-escalated hydroxyurea." },
      { "text": "Neutralizing anti-erythropoietin antibodies suppressing erythroid progenitor proliferation", "explanation": "Correct. Pure red cell aplasia from anti-EPO antibodies is a rare but recognized complication, primarily seen in CKD patients receiving subcutaneous epoetin alfa, exactly as Dr. Goldstein described. The neutralizing antibodies cross-react with both the exogenous ESA and endogenous EPO, abolishing erythroid progenitor support and producing severe anemia with absent erythroid precursors on biopsy — while myeloid and megakaryocyte lineages remain intact." },
      { "text": "Hydroxocobalamin-induced cyanide displacement consuming B12 stores", "explanation": "Incorrect. She did not receive hydroxocobalamin or have a cyanide exposure, and this mechanism does not produce pure red cell aplasia. This would be the correct answer if asking how cyanide poisoning is detoxified rather than what is causing her bone marrow finding." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Sudden ESA failure with absent erythroid precursors on marrow biopsy = neutralizing anti-EPO antibodies -> pure red cell aplasia. Reported primarily in CKD patients on subcutaneous epoetin alfa.",
    "pdfPage": 29,
    "pdfQuote": "Pure red cell aplasia due to development of neutralizing anti-EPO antibodies"
  },
  {
    "id": 17,
    "category": "Pharmacology: Hydroxyurea in Sickle Cell",
    "questionText": "An 18-year-old man with homozygous sickle cell disease has averaged 4 vaso-occlusive crises per year and one prior episode of acute chest syndrome. He is currently asymptomatic and well-hydrated. Vitals: BP 118/72, HR 82, RR 14, T 98.6 F. CBC: Hb 8.0 g/dL, MCV 88 fL, WBC 9.4, platelets 320. His physician recommends starting an oral disease-modifying medication. Which monitoring parameter is the MOST important to follow during initiation and dose titration?",
    "options": [
      { "text": "Serum creatinine every 3 months only", "explanation": "Incorrect. Renal function should be monitored, but it is not the primary dose-limiting toxicity of this drug, and quarterly checks would miss the early myelosuppressive effects. This would be the correct answer if the drug were a nephrotoxic agent such as cisplatin." },
      { "text": "Liver function tests weekly for the first year", "explanation": "Incorrect. Hepatic monitoring is not the central concern with this drug, although it is metabolized in the liver. This would be the correct answer if the drug were an isoniazid- or methotrexate-type hepatotoxin requiring serial transaminase surveillance." },
      { "text": "Complete blood count with differential frequently, especially during initiation and dose titration", "explanation": "Correct. The lecturer identified myelosuppression — chiefly neutropenia, but also anemia and thrombocytopenia — as the major dose-limiting toxicity of hydroxyurea, and explicitly recommended frequent monitoring of CBC with differential, especially during initiation and dose titration. This allows safe dose escalation to therapeutic HbF induction while minimizing risk of severe cytopenias." },
      { "text": "Electrocardiogram every visit to assess for QT prolongation", "explanation": "Incorrect. This drug does not cause significant QT prolongation; serial ECG monitoring is not part of the recommended plan. This would be the correct answer if asking about therapy with methadone, certain antiarrhythmics, or some macrolides." },
      { "text": "Daily home blood pressure readings to detect hypertension", "explanation": "Incorrect. Hypertension is the classic monitoring parameter for ESAs, not for this sickle cell medication. This would be the correct answer if the patient with CKD were starting epoetin alfa." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Hydroxyurea's dose-limiting toxicity is myelosuppression (especially neutropenia). Monitor CBC with differential frequently during initiation and dose titration.",
    "pdfPage": 37,
    "pdfQuote": "Frequent monitoring of CBC with differential"
  },
  {
    "id": 18,
    "category": "Pharmacology: Hydroxyurea Counseling",
    "questionText": "A 24-year-old man with sickle cell disease has been on a first-line oral disease-modifying agent for 3 years and is doing well, with fewer crises and a rise in fetal hemoglobin. He and his fiancee plan to conceive a child later this year. He asks whether he can continue his current medication while trying to conceive. Which counseling point most accurately reflects the reproductive considerations described in the lecture?",
    "options": [
      { "text": "The drug has no effect on fertility or reproduction at standard doses", "explanation": "Incorrect. The lecturer explicitly noted teratogenicity in animal studies, potential fetal harm, possible damage to spermatozoa and testicular tissue, and risk of azoospermia or oligospermia. This would be the correct answer if the drug had a clean reproductive safety profile, which it does not." },
      { "text": "The drug is safe in pregnancy but contraindicated in breastfeeding only", "explanation": "Incorrect. Breastfeeding is not recommended, but the drug is also not safe in pregnancy — both are concerns. This would be the correct answer if the drug were category B with proven gestational safety and only milk-distribution concerns." },
      { "text": "Only female partners need contraception; the drug does not affect male fertility", "explanation": "Incorrect. Sperm and testicular toxicity were specifically described, including azoospermia and oligospermia. Male contraception is part of the recommendation. This would be the correct answer if the drug had no documented effect on spermatogenesis." },
      { "text": "He should double his dose 4 weeks before attempted conception to accelerate HbF rise", "explanation": "Incorrect. Dose escalation around conception would intensify both myelosuppressive and reproductive toxicity without therapeutic benefit. This would be the correct answer if intensifying HbF induction were both safe and clinically indicated before pregnancy, which it is not." },
      { "text": "Both partners should use effective contraception during therapy and for at least 6 months to 1 year after stopping", "explanation": "Correct. The lecturer was specific: the drug is teratogenic in animal studies, may damage spermatozoa, and can cause fetal harm. Both males and females of reproductive potential should use effective contraception during therapy and for at least 6 months to 1 year following therapy. He should discuss alternative disease-modifying options with his hematologist if pregnancy is desired soon." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Hydroxyurea: teratogenic and gonadotoxic. Both male and female patients of reproductive potential should use effective contraception during therapy and for 6 to 12 months after.",
    "pdfPage": 37,
    "pdfQuote": "use effective contraception during and for at least 6 months to 1 year"
  },
  {
    "id": 19,
    "category": "Pharmacology: Iron Absorption Regulation",
    "questionText": "A 60-year-old man with longstanding rheumatoid arthritis presents with fatigue. Labs show normocytic anemia, normal MCV, low serum iron, and INAPPROPRIATELY HIGH serum ferritin. His physician explains the mechanism: a hepatic peptide hormone is upregulated by his chronic inflammatory state, binds basolateral ferroportin on enterocytes and macrophages, and causes its internalization. Which downstream effect most directly explains his anemia pattern?",
    "options": [
      { "text": "Increased erythropoietin production driving polycythemia", "explanation": "Incorrect. The patient is anemic, not polycythemic, and the hepatic peptide described regulates iron rather than EPO. This would be the correct answer if the question described high-altitude exposure with secondary erythrocytosis." },
      { "text": "Selective inhibition of ribonucleotide reductase in erythroid precursors", "explanation": "Incorrect. That mechanism describes hydroxyurea and would not produce the iron-restricted pattern described. This would be the correct answer if the patient were on hydroxyurea with macrocytic-leaning indices." },
      { "text": "Autoimmune destruction of gastric parietal cells reducing intrinsic factor", "explanation": "Incorrect. Loss of intrinsic factor causes pernicious anemia with macrocytic indices, hypersegmented neutrophils, and neurologic symptoms — not the normocytic, iron-restricted pattern here. This would be the correct answer if the labs showed elevated MCV with low serum B12." },
      { "text": "Increased duodenal cytochrome b activity reducing all dietary Fe2+", "explanation": "Incorrect. Duodenal cytochrome b reduces Fe3+ to Fe2+ to facilitate absorption — its increased activity would enhance, not impair, iron uptake. This would be the correct answer if higher dCytB activity caused iron overload (it does not, in this way)." },
      { "text": "Reduced dietary iron absorption and sequestration of recycled iron inside macrophages", "explanation": "Correct. Hepcidin, made in hepatocytes and upregulated by inflammation, binds ferroportin and triggers its internalization. This blocks iron export from enterocytes (decreasing dietary absorption) and from macrophages (trapping recycled iron from senescent RBCs). The result is low serum iron with high ferritin — the classic 'anemia of chronic inflammation' pattern. The lecturer noted that chronic inflammatory disease increases hepcidin, sequestering iron, and is an indication for IV iron when oral iron fails." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Hepcidin (made in hepatocytes, induced by inflammation) binds ferroportin and internalizes it — blocking enterocyte and macrophage iron export. Result: low serum iron + high ferritin (anemia of chronic inflammation).",
    "pdfPage": 10,
    "pdfQuote": "Hepcidin is a peptide hormone synthesized in hepatocytes"
  },
  {
    "id": 20,
    "category": "Pharmacology: Sickle Cell Acute Pain Management",
    "questionText": "A 22-year-old man with sickle cell disease arrives at the emergency department with a severe vaso-occlusive pain crisis: diffuse limb pain rated 9/10, dehydration, and tachycardia. He has been well-maintained on a first-line oral disease-modifying agent (hydroxyurea) for the past 2 years with fewer crises overall. The intern asks whether to acutely double the dose of his maintenance agent to abort the crisis. What is the most appropriate response, based on the principles taught in this lecture?",
    "options": [
      { "text": "Yes — double the maintenance medication to acutely depolymerize hemoglobin S during the crisis", "explanation": "Incorrect. The first-line agent works gradually, over weeks to months, by inducing HbF through stress erythropoiesis; it does NOT acutely depolymerize HbS. Doubling the dose during a crisis would not relieve pain and would risk additional myelosuppression. This would be the correct answer if the drug had direct rapid anti-sickling activity, which it does not." },
      { "text": "Stop the maintenance medication immediately; it is the cause of his acute crisis", "explanation": "Incorrect. Hydroxyurea does not precipitate vaso-occlusive crises; in fact, it reduces their frequency. Discontinuation removes a protective therapy. This would be the correct answer if the medication had a clear causal link to his acute presentation, which it does not." },
      { "text": "Initiate IV crizanlizumab as a single emergency dose to abort this crisis", "explanation": "Incorrect. Crizanlizumab is an anti-P-selectin antibody intended for chronic prevention as an add-on to reduce frequency of acute pain episodes — not for aborting an active crisis. This would be the correct answer if asking which adjunctive therapy might be added later for ongoing frequent crises despite hydroxyurea." },
      { "text": "Start oral L-glutamine powder packets twice daily in the ED to immediately reverse vaso-occlusion", "explanation": "Incorrect. L-glutamine is also a disease-modifying agent acting via redox state alterations over time, not an acute crisis abortive. This would be the correct answer if discussing long-term oral adjuncts for frequency reduction in a well patient." },
      { "text": "Continue the maintenance medication at the usual dose and manage the acute crisis with hydration and analgesia; the disease-modifying agents are intended for use when the patient is well, not for acute pain", "explanation": "Correct. The lecturer was explicit: hydroxyurea, crizanlizumab, and L-glutamine are disease-modifying therapies intended to be started when the individual is well and are NOT appropriate for treating acute pain. The maintenance regimen reduces frequency of crises over time but does nothing to abort an acute event. Acute crisis management is supportive (hydration, analgesia, oxygen as needed), while the disease-modifying agent continues at its usual dose." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Hydroxyurea, crizanlizumab, and L-glutamine are DISEASE-MODIFYING therapies — started when the patient is WELL to reduce crisis frequency. They are NOT used to treat acute vaso-occlusive pain.",
    "pdfPage": 32,
    "pdfQuote": "not appropriate for treating acute pain"
  }
];
