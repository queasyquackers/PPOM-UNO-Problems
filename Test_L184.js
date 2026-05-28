// Thinking Process:
// 1. High-Yield Concept: Antiretroviral pharmacology Part 1 - NRTI/NtRTI and INSTI mechanism, resistance, toxicity, and combination principles. Core themes: chain termination via missing 3' OH, intracellular phosphorylation as prodrug activation, M184V/K65R resistance, mitochondrial DNA polymerase gamma toxicity (lactic acidosis/hepatic steatosis/lipoatrophy/neuropathy/myopathy), tenofovir renal (Fanconi) + bone toxicity, TAF vs TDF intracellular vs plasma levels, HLA-B*5701 screening before abacavir, HBV co-infection withdrawal flare, INSTI mechanism (no human integrase), CYP3A4 boosting (elvitegravir/cobicistat), polyvalent cation chelation, cabotegravir IM long-acting, IRIS.
// 2. The "Trap": Confusing 1st vs 2nd generation drugs, M184V being a problem for 3TC/FTC but actually RESTORING tenofovir/zidovudine susceptibility, TAF/TDF salt form differences in toxicity, abacavir alcohol DDI, never combine TDF+ABC or 3TC+FTC, NRTIs as prodrugs that need host kinase phosphorylation.
// 3. Key Distractor: "Right drug, wrong patient" - e.g., starting abacavir without HLA testing, restarting tenofovir/lamivudine/emtricitabine in HBV co-infection causing flare, using PI/INSTI when NRTI toxicity is the syndrome, polyvalent cation chelation.
// 4. Vignette Strategy: Mechanism-first stems describing AE pathophysiology (lactic acidosis with hepatic steatosis = DNA pol gamma; Fanconi = tenofovir; hypersensitivity in 6 wks = abacavir; HBV flare on withdrawal = TDF/3TC/FTC; IM gluteal injection = cabotegravir-rilpivirine) without naming the drug class. Force mechanism -> identity reasoning.
//
// PDF Mapping Check: Found
// PDF Filename: Lecture # 184. L. Goldstein, Pharm.D. (PPT).pdf
// Mapping Key: L184 / 20-Pharmacology: Antiretroviral Drugs Part 1 (L184)
// Status: Verified

window.Test_L184 = [
  {
    "id": 1,
    "category": "Pharmacology: Antiretroviral - HIV Replication Targets",
    "questionText": "A lecturer is reviewing the HIV replication cycle, emphasizing that current antiretroviral therapy works by interrupting discrete steps. One step requires a viral enzyme that converts the single-stranded RNA genome into double-stranded proviral DNA after the virus enters the host cell, and this enzyme is known to be highly error-prone, which drives the high mutation rate of HIV. Which step of the replication cycle does this enzyme catalyze?",
    "options": [
      { "text": "Fusion of the viral envelope with the host cell membrane.", "explanation": "Incorrect. Fusion is mediated by viral glycoproteins gp120 and gp41 docking with CD4 and a coreceptor; no nucleic acid conversion occurs at this stage. This would be the correct answer if asking what step is blocked by enfuvirtide or maraviroc-type entry-blocking agents." },
      { "text": "Insertion of proviral DNA into the host cell chromosome.", "explanation": "Incorrect. Integration is performed by the viral integrase enzyme acting on already-formed proviral DNA, not RNA, and integrase is not described as error-prone. This would be the correct answer if asking what step is blocked by the INSTI class such as dolutegravir or bictegravir." },
      { "text": "Cleavage of the gag-pol polyprotein into functional mature proteins.", "explanation": "Incorrect. Proteolytic cleavage occurs late in the cycle during virion maturation and is performed by HIV protease, not on nucleic acid. This would be the correct answer if asking which step is blocked by a boosted protease inhibitor like darunavir/ritonavir." },
      { "text": "Assembly and budding of new virions from the host cell membrane.", "explanation": "Incorrect. Assembly and budding occur after viral proteins are produced and processed; they do not involve a nucleic-acid-copying enzyme. This would be the correct answer if asking which step is targeted by capsid inhibitors such as lenacapavir." },
      { "text": "Conversion of viral single-stranded RNA into proviral double-stranded DNA.", "explanation": "Correct. Reverse transcriptase is the HIV-encoded RNA-dependent DNA polymerase that copies the viral RNA genome into proviral DNA before integration. The lecturer specifically taught that this enzyme lacks proofreading and is highly error-prone, producing the huge variety of HIV variants that underlies transmitted drug resistance and rapid emergence of resistance when monotherapy is used. NRTIs and NNRTIs both target this step." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: HIV reverse transcriptase copies viral RNA into proviral DNA, lacks proofreading, and drives the high mutation rate that mandates combination ART to prevent resistance.",
    "pdfPage": 9,
    "pdfQuote": "reverse transcriptase is error prone"
  },
  {
    "id": 2,
    "category": "Pharmacology: Antiretroviral - Combination ART Principles",
    "questionText": "A 28-year-old woman is newly diagnosed with HIV-1, has a viral load of 110,000 copies/mL, a CD4 count of 410 cells/microliter, normal renal and hepatic function, a negative HLA-B*5701, and is hepatitis B surface antigen negative. She is treatment-naive and has no prior virologic failure. The pharmacology lecturer emphasized that the current standard of care for initial antiretroviral therapy in a treatment-naive patient uses a backbone of two drugs from one specific class together with a single drug from another class as the preferred 'base'. Which preferred regimen architecture should be initiated?",
    "options": [
      { "text": "Two protease inhibitors plus a non-nucleoside reverse transcriptase inhibitor.", "explanation": "Incorrect. The lecturer specifically taught that the preferred backbone is two NRTIs, not two PIs, and that PIs are not first-line in treatment-naive patients today. This would be the correct answer if combining two PIs were a recommended salvage strategy, which it is not." },
      { "text": "Two non-nucleoside reverse transcriptase inhibitors plus one integrase strand transfer inhibitor.", "explanation": "Incorrect. The backbone is built from two NRTIs, not two NNRTIs; NNRTIs and PIs serve as the 'base' alternative when an INSTI cannot be used. This would be the correct answer if NNRTIs functioned as the backbone, which they do not." },
      { "text": "Two nucleoside/nucleotide reverse transcriptase inhibitors plus an integrase strand transfer inhibitor.", "explanation": "Correct. The lecturer stated that the preferred initial regimen for a treatment-naive patient is two NRTIs as the backbone plus an INSTI as the base. INSTIs (dolutegravir, bictegravir) are highly effective, well tolerated, and have a high barrier to resistance, which is why they have displaced NNRTIs and boosted PIs as the preferred base. The NRTI backbone is typically tenofovir + emtricitabine or abacavir + lamivudine." },
      { "text": "One nucleoside reverse transcriptase inhibitor plus one integrase strand transfer inhibitor plus one fusion inhibitor.", "explanation": "Incorrect. The current standard uses two NRTIs in the backbone, not one, and fusion inhibitors are reserved for heavily treatment-experienced patients. This would be the correct answer if salvage therapy with an injectable fusion inhibitor were being constructed for multidrug-resistant virus." },
      { "text": "A long-acting intramuscular integrase inhibitor plus an oral non-nucleoside reverse transcriptase inhibitor.", "explanation": "Incorrect. Cabotegravir + rilpivirine is a two-drug regimen reserved for already virologically suppressed, stable patients without prior failures or HBV; it is not initial therapy for a treatment-naive patient. This would be the correct answer if the patient had been virologically suppressed for months on a three-drug oral regimen and wanted to switch to a long-acting injectable." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Preferred initial ART in treatment-naive patients = 2 NRTIs (backbone) + 1 INSTI (base). Alternatives for the base are an NNRTI or a boosted PI when an INSTI cannot be used.",
    "pdfPage": 16,
    "pdfQuote": "Two NRTIs and an INSTI"
  },
  {
    "id": 3,
    "category": "Pharmacology: Antiretroviral - NRTI Mechanism (Chain Termination)",
    "questionText": "An antiretroviral nucleoside analog enters the host cell, is sequentially phosphorylated to a triphosphate by host kinases, and is then incorporated by the viral polymerase into a growing proviral DNA strand. Because the sugar of the analog is missing a specific structural feature, the next nucleotide cannot be added and elongation halts. Which structural feature is absent, and what is the immediate consequence?",
    "options": [
      { "text": "Absent 3' hydroxyl group on the ribose, preventing formation of the next phosphodiester bond.", "explanation": "Correct. The lecturer explicitly taught that NRTIs are activated intracellularly to their triphosphate forms and are incorporated into the elongating proviral DNA strand by HIV reverse transcriptase. Because their sugar lacks a 3'-hydroxyl group, the 5'-phosphate of the next incoming nucleotide has no 3'-OH partner with which to form a phosphodiester bond, so chain elongation terminates. The same drugs also competitively inhibit incorporation of the natural nucleotide at the same site." },
      { "text": "Absent 5' phosphate group, preventing recognition by the viral polymerase active site.", "explanation": "Incorrect. NRTIs are phosphorylated intracellularly precisely to acquire the 5'-triphosphate that allows them to be recognized and incorporated by reverse transcriptase. This would be the correct answer if NRTIs lacked any phosphate, but the active forms are di- or triphosphates." },
      { "text": "Substitution of the nitrogenous base, blocking base pairing with the template.", "explanation": "Incorrect. The base is still capable of pairing with the template, which is exactly why the analog gets incorporated in the first place; the block occurs after incorporation. This would be the correct answer if the drug acted as a non-pairing nucleobase analog rather than as a chain terminator." },
      { "text": "Loss of the ribose 2' hydroxyl, preventing reverse transcriptase from recognizing the analog.", "explanation": "Incorrect. DNA nucleotides naturally lack a 2'-hydroxyl (deoxyribose), so this is not a mechanism of HIV polymerase inhibition. This would be the correct answer if the question were distinguishing RNA from DNA nucleotides chemically." },
      { "text": "Addition of an acyclic side chain that competitively inhibits the polymerase without being incorporated.", "explanation": "Incorrect. The lecturer described NRTIs as incorporated chain terminators, not non-incorporated competitive inhibitors. This would be the correct answer if describing the mechanism of acyclic non-incorporating polymerase inhibitors from other viral systems." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: NRTIs are intracellular prodrugs (triphosphate active form) that act as chain terminators because they lack a 3'-OH on the ribose; they also competitively inhibit incorporation of native nucleotides.",
    "pdfPage": 21,
    "pdfQuote": "absence of the 3 prime hydroxyl group"
  },
  {
    "id": 4,
    "category": "Pharmacology: Antiretroviral - NRTI Resistance (M184V/I)",
    "questionText": "A patient on a regimen containing emtricitabine has a single point mutation detected in HIV reverse transcriptase at amino acid 184, with methionine substituted by valine. The lecturer pointed out that this particular substitution confers high-level resistance to certain NRTIs but paradoxically restores or improves susceptibility to others in the same class. To which NRTI does this single mutation confer high-level resistance?",
    "options": [
      { "text": "Tenofovir disoproxil fumarate.", "explanation": "Incorrect. The M184V/I substitution actually improves susceptibility of HIV to tenofovir; it does not cause high-level resistance to it. This would be the correct answer if the question were asking which mutation specifically reduces tenofovir activity (that would be K65R)." },
      { "text": "Zidovudine.", "explanation": "Incorrect. The lecturer emphasized that the M184V/I mutation actually restores susceptibility to zidovudine, not confers resistance to it. This would be the correct answer if asking which NRTI resistance pattern is reversed by the 184 mutation." },
      { "text": "Abacavir.", "explanation": "Incorrect. M184V causes only low-level reduced susceptibility to abacavir; it does not confer high-level resistance. This would be the correct answer if a low-level reduction in abacavir susceptibility were being graded as 'high-level', which it is not." },
      { "text": "Lamivudine.", "explanation": "Correct. The lecturer specifically taught that a single amino-acid substitution at position 184 (methionine to valine or isoleucine) confers high-level resistance to lamivudine and to its fluorinated analog emtricitabine. Because lamivudine and emtricitabine are structurally nearly identical (emtricitabine is fluorinated lamivudine), the mutation cross-blocks both. Interestingly, the same mutation restores susceptibility of HIV to tenofovir and zidovudine, which is why these drugs are often paired in salvage regimens." },
      { "text": "Tenofovir alafenamide.", "explanation": "Incorrect. TAF is the same parent drug as TDF; M184V improves susceptibility to tenofovir regardless of the salt form. This would be the correct answer if TAF behaved differently from TDF at the resistance level, which it does not." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: M184V/I = single point mutation that confers HIGH-level resistance to lamivudine and emtricitabine but RESTORES susceptibility to tenofovir and zidovudine.",
    "pdfPage": 23,
    "pdfQuote": "M184 methionine to valine or isoleucine"
  },
  {
    "id": 5,
    "category": "Pharmacology: Antiretroviral - NRTI Mitochondrial Toxicity",
    "questionText": "Antiretroviral nucleoside analogs are intended to inhibit a viral polymerase and do not affect human nuclear DNA polymerases, but the lecturer emphasized one host polymerase that they DO inhibit, with serious clinical consequences. Inhibition of which host enzyme is responsible for the syndrome of lactic acidosis, hepatic steatosis, lipoatrophy, myopathy, and peripheral neuropathy seen with this drug class?",
    "options": [
      { "text": "Nuclear DNA polymerase alpha responsible for lagging-strand synthesis.", "explanation": "Incorrect. NRTIs do not significantly inhibit nuclear DNA polymerase alpha; if they did, every dividing cell would be affected. This would be the correct answer if NRTIs caused acute bone marrow ablation indistinguishable from cytotoxic chemotherapy, which they do not." },
      { "text": "Mitochondrial DNA polymerase gamma.", "explanation": "Correct. The lecturer specifically taught that NRTIs do not inhibit human polymerases except for the mitochondrial DNA polymerase gamma. Inhibition of pol-gamma impairs replication of mitochondrial DNA, leading to mitochondrial dysfunction in tissues with high oxidative demand. The resulting syndrome includes lactic acidosis (often with hepatic steatosis), lipoatrophy, myopathy, peripheral neuropathy, and possibly pancreatitis and cardiomyopathy. It is most severe with first-generation NRTIs (zalcitabine, stavudine, didanosine, zidovudine), and the offending drug must be stopped immediately." },
      { "text": "Cytoplasmic DNA polymerase beta involved in base-excision repair.", "explanation": "Incorrect. Polymerase beta repairs short patches of nuclear DNA and is not the molecular target underlying mitochondrial toxicity. This would be the correct answer if the clinical syndrome were a DNA-repair deficiency, which it is not." },
      { "text": "Telomerase reverse transcriptase in dividing somatic cells.", "explanation": "Incorrect. Telomerase activity is low in most somatic cells and inhibition would manifest over years as accelerated cellular senescence, not as acute lactic acidosis. This would be the correct answer if the question were about long-term cellular aging in stem-cell compartments." },
      { "text": "RNA polymerase II responsible for messenger RNA transcription.", "explanation": "Incorrect. Inhibition of RNA polymerase II would cause global transcriptional arrest with rapid cell death, not a chronic mitochondrial-toxicity syndrome. This would be the correct answer if the toxicity were that of an alpha-amanitin-like toxin, which NRTIs are not." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: NRTI mitochondrial toxicity = inhibition of HOST mitochondrial DNA polymerase gamma -> lactic acidosis, hepatic steatosis, lipoatrophy, myopathy, peripheral neuropathy (and possibly pancreatitis, bone marrow suppression, cardiomyopathy).",
    "pdfPage": 25,
    "pdfQuote": "DNA polymerase gamma in the mitochondria"
  },
  {
    "id": 6,
    "category": "Pharmacology: Antiretroviral - Tenofovir Renal Toxicity",
    "questionText": "A patient on a long-standing antiretroviral regimen for HIV-1 develops increasing serum creatinine, glucosuria with normal serum glucose, proteinuria, hypophosphatemia, and polyuria. Urinalysis is consistent with proximal tubular dysfunction. The lecturer emphasized that one nucleotide reverse transcriptase inhibitor is well known to cause this constellation through renal proximal tubular injury. Which medication is most likely responsible?",
    "options": [
      { "text": "Lamivudine.", "explanation": "Incorrect. Lamivudine is renally cleared but is not associated with proximal tubular dysfunction or Fanconi syndrome; it is generally very well tolerated. This would be the correct answer if the patient had developed worsening HBV after discontinuation of a 3TC-containing regimen in HBV co-infection, but not for proximal tubular dysfunction." },
      { "text": "Abacavir.", "explanation": "Incorrect. Abacavir's signature adverse effect is HLA-B*5701-associated hypersensitivity, not proximal tubular dysfunction. This would be the correct answer if the patient developed a multi-organ hypersensitivity reaction with fever and rash within the first 6 weeks of starting therapy." },
      { "text": "Emtricitabine.", "explanation": "Incorrect. Emtricitabine is structurally nearly identical to lamivudine and is generally well tolerated; its distinctive adverse effect is palmar/plantar hyperpigmentation, not Fanconi syndrome. This would be the correct answer if the patient presented with new pigmentation of the palms and soles." },
      { "text": "Zidovudine.", "explanation": "Incorrect. Zidovudine's signature adverse effects are bone marrow suppression (anemia/neutropenia) and mitochondrial toxicity (myopathy), not proximal tubular dysfunction. This would be the correct answer if the patient had developed macrocytic anemia and granulocytopenia after starting IV AZT." },
      { "text": "Tenofovir disoproxil fumarate.", "explanation": "Correct. The lecturer specifically taught that tenofovir causes kidney and bone adverse effects, more so with the disoproxil fumarate salt (TDF) because of higher plasma concentrations. The constellation of increased serum creatinine, proteinuria, glucosuria (with normal blood glucose), hypophosphatemia, and polyuria reflects proximal tubular dysfunction (Fanconi syndrome) and may progress to acute kidney injury, chronic kidney disease, and nephrogenic diabetes insipidus. Renal function must be monitored on tenofovir, and the alafenamide salt (TAF) is associated with less long-term renal and bone toxicity because it achieves lower plasma but higher intracellular concentrations." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Tenofovir (especially TDF) -> proximal tubular dysfunction (Fanconi syndrome), AKI/CKD, nephrogenic diabetes insipidus, and decreased bone mineral density. Monitor renal function; TAF has less long-term renal/bone toxicity.",
    "pdfPage": 28,
    "pdfQuote": "proximal tubular dysfunction Fanconi syndrome"
  },
  {
    "id": 7,
    "category": "Pharmacology: Antiretroviral - TAF vs TDF Pharmacokinetics",
    "questionText": "A pharmacology lecturer is contrasting two salt forms of the same antiretroviral parent drug. Form A is rapidly converted to the parent drug after absorption and the parent drug then circulates in plasma and is taken up into cells. Form B circulates as itself and is first metabolized to the parent drug only after it has entered the host cell. Compared with Form A, Form B is administered at lower doses, achieves lower plasma concentrations, and yet produces higher intracellular concentrations of the active triphosphate metabolite. Which property best explains why Form B is associated with less long-term renal and bone toxicity?",
    "options": [
      { "text": "Greater hepatic first-pass metabolism eliminating systemic active drug.", "explanation": "Incorrect. The lecturer emphasized that tenofovir undergoes minimal hepatic metabolism and is renally cleared; the difference between TDF and TAF is not first-pass hepatic clearance. This would be the correct answer if the drug were heavily CYP-metabolized like a statin, which it is not." },
      { "text": "Selective active transport into renal tubular cells with rapid efflux from lymphocytes.", "explanation": "Incorrect. This would actually predict more renal toxicity and less lymphocyte exposure, which is the opposite of TAF's pharmacology. This would be the correct answer if the drug behaved like cidofovir, which accumulates in renal tubular cells and causes nephrotoxicity." },
      { "text": "Reduced systemic exposure while delivering equal or greater active drug inside cells.", "explanation": "Correct. The lecturer contrasted tenofovir disoproxil fumarate (TDF, Form A) with tenofovir alafenamide (TAF, Form B). TDF is rapidly hydrolyzed in plasma to tenofovir, which then circulates and exposes kidney and bone to high systemic levels. TAF circulates intact, is taken up into target cells, and is only then converted to tenofovir and phosphorylated; this delivers higher active drug to lymphocytes while keeping plasma tenofovir levels (and therefore renal/bone exposure) lower. Lower systemic tenofovir = less proximal tubular and bone mineral density toxicity over time." },
      { "text": "P-glycoprotein induction that decreases bone marrow uptake of the drug.", "explanation": "Incorrect. TAF is a P-glycoprotein substrate that can be removed from circulation by P-gp inducers (reducing efficacy), but P-gp does not selectively spare bone marrow nor explain reduced renal toxicity. This would be the correct answer if a drug's protective mechanism were P-gp-mediated efflux from bone marrow, which is not what is described here." },
      { "text": "Higher protein binding limiting glomerular filtration of the active triphosphate metabolite.", "explanation": "Incorrect. The active triphosphate is intracellular and is not filtered as such; protein binding of the parent tenofovir is low. This would be the correct answer if the question concerned a highly protein-bound drug whose free fraction governed renal exposure, which is not the TDF/TAF distinction." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: TAF circulates intact and is activated intracellularly -> LOW plasma tenofovir but HIGH intracellular active drug -> less long-term kidney and bone toxicity than TDF (which delivers tenofovir to plasma rapidly).",
    "pdfPage": 27,
    "pdfQuote": "TAF circulates as itself"
  },
  {
    "id": 8,
    "category": "Pharmacology: Antiretroviral - Abacavir HLA-B*5701",
    "questionText": "A 32-year-old man newly diagnosed with HIV is to start an antiretroviral regimen that includes a guanosine-analog NRTI metabolized by alcohol dehydrogenase. The lecturer emphasized that ALL patients must undergo one specific pharmacogenomic test before this drug is given because carriers of a particular allele can develop a potentially fatal multi-organ reaction with fever, rash, gastrointestinal symptoms, and dyspnea within the first 6 weeks, and the drug must never be restarted in a patient who has had such a reaction. Which test is mandatory before initiating this medication?",
    "options": [
      { "text": "Glucose-6-phosphate dehydrogenase (G6PD) activity assay.", "explanation": "Incorrect. G6PD screening is required for drugs that cause oxidant hemolysis such as primaquine, dapsone, or sulfonamides, not abacavir. This would be the correct answer if the planned drug were primaquine for hypnozoite eradication." },
      { "text": "Coreceptor tropism assay for CCR5 versus CXCR4.", "explanation": "Incorrect. Tropism testing is required before maraviroc to confirm CCR5-tropic virus; it does not predict an immune-mediated hypersensitivity. This would be the correct answer if the planned drug were the CCR5 antagonist maraviroc." },
      { "text": "Reverse transcriptase genotypic resistance testing for M184V/I.", "explanation": "Incorrect. Genotypic resistance testing predicts virologic failure of certain NRTIs, not hypersensitivity, and does not gate the use of abacavir. This would be the correct answer if the goal were to predict which patients will have lamivudine/emtricitabine resistance." },
      { "text": "HLA-B*5701 allele genotyping.", "explanation": "Correct. The lecturer specifically taught that ALL patients must be screened for the HLA-B*5701 allele before initiating abacavir, because carriers are at very high risk of a potentially fatal multi-organ hypersensitivity reaction (fever, rash, GI symptoms, respiratory symptoms, malaise, hypotension), typically within the first 6 weeks. Abacavir is absolutely contraindicated in HLA-B*5701-positive patients and must never be restarted in any patient who has had a hypersensitivity reaction. Abacavir is the guanosine analog converted intracellularly to carbovir triphosphate, metabolized by alcohol dehydrogenase and UGT." },
      { "text": "Hepatitis B surface antigen and core antibody testing.", "explanation": "Incorrect. HBV serology is required to anticipate hepatitis flare on withdrawal of tenofovir, lamivudine, or emtricitabine in co-infected patients; it does not predict abacavir hypersensitivity. This would be the correct answer if the safety concern were post-discontinuation HBV reactivation." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Mandatory HLA-B*5701 testing BEFORE abacavir. Positive allele = absolute contraindication. Never rechallenge a patient who has had a hypersensitivity reaction.",
    "pdfPage": 33,
    "pdfQuote": "HLA-B 5701 allele all patients screened"
  },
  {
    "id": 9,
    "category": "Pharmacology: Antiretroviral - INSTI Mechanism Selectivity",
    "questionText": "A new antiretroviral class blocks the catalytic activity of a viral enzyme that inserts the proviral DNA into the host chromosome. The lecturer emphasized that this class is completely selective for HIV with essentially no human off-target activity. Which property of human cells best explains the high selectivity of this drug class?",
    "options": [
      { "text": "Human cells lack the enzyme integrase entirely.", "explanation": "Correct. The lecturer explicitly taught that INSTIs (integrase strand transfer inhibitors such as dolutegravir, bictegravir, raltegravir, elvitegravir, cabotegravir) block the catalytic activity of HIV-encoded integrase to prevent insertion of proviral DNA into the host chromosome. Because human beings do not have an integrase enzyme, these drugs have no host target and are completely selective for HIV. This selectivity contributes to their excellent tolerability and underlies their first-line status." },
      { "text": "Human integrase is expressed only in germ cells and is therefore protected.", "explanation": "Incorrect. Humans do not have integrase at all; the answer is not tissue-restricted expression. This would be the correct answer if humans had a tissue-restricted integrase, which we do not." },
      { "text": "The drug is selectively concentrated in HIV-infected lymphocytes by an active transporter.", "explanation": "Incorrect. Selectivity is conferred by the absence of the host target, not by selective uptake into infected cells. This would be the correct answer if selectivity were due to a CD4-targeted prodrug, which INSTIs are not." },
      { "text": "Human integrase activity is suppressed only when the drug is bound to magnesium.", "explanation": "Incorrect. INSTIs do chelate metal ions in the integrase active site, but humans have no integrase for that mechanism to act on. This would be the correct answer if selectivity were based on differential metal cofactor binding between viral and human enzymes, which is not the case." },
      { "text": "INSTIs are prodrugs activated only by HIV protease.", "explanation": "Incorrect. INSTIs are not prodrugs requiring HIV protease activation; this would even create a circular dependence on the very virus they are meant to suppress. This would be the correct answer if a drug were engineered to be activated by viral protease, which is not how INSTIs work." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: INSTIs block HIV integrase, which has NO human ortholog -> complete selectivity for HIV, excellent tolerability, and first-line status for ART.",
    "pdfPage": 41,
    "pdfQuote": "human beings do not have integrase"
  },
  {
    "id": 10,
    "category": "Pharmacology: Antiretroviral - HBV Co-infection",
    "questionText": "A 45-year-old man with HIV-1 and chronic hepatitis B has been virologically suppressed for years on a regimen containing tenofovir, emtricitabine, and dolutegravir. His provider stops his medications without substituting an alternative active against hepatitis B. Two weeks later he presents with new jaundice, AST 1,400 U/L, ALT 1,800 U/L, and total bilirubin 8 mg/dL. Which mechanism best explains his presentation?",
    "options": [
      { "text": "Immune reconstitution inflammatory syndrome unmasking subclinical HBV.", "explanation": "Incorrect. IRIS occurs when the host immune system rebuilds and recognizes previously subclinical pathogens; it is associated with starting ART in a low-CD4 patient, not with stopping it. This would be the correct answer if a patient with CD4 of 30 had been started on ART and 3 weeks later developed inflammatory hepatitis from underlying HBV." },
      { "text": "Acute hepatitis from rebound HIV viremia infecting hepatocytes.", "explanation": "Incorrect. HIV does not infect hepatocytes directly to produce a hepatitis picture; rebound viremia would manifest with rising HIV viral load and falling CD4, not with massive transaminitis. This would be the correct answer if HIV were a hepatotropic virus, which it is not." },
      { "text": "Mitochondrial toxicity from accumulated nucleotide analogs released after stopping the regimen.", "explanation": "Incorrect. Stopping NRTIs reduces intracellular drug exposure rather than increasing it; mitochondrial toxicity also evolves over months on therapy, not 2 weeks off it. This would be the correct answer if the patient had been ON long-term zidovudine or stavudine and developed lactic acidosis with hepatic steatosis." },
      { "text": "Drug-induced cholestatic hepatitis from cobicistat-mediated transporter inhibition.", "explanation": "Incorrect. Cobicistat is not part of this regimen and the pattern of injury here is hepatocellular with profoundly elevated transaminases, not cholestatic. This would be the correct answer if the patient were on an elvitegravir/cobicistat-containing regimen and presented with predominantly elevated alkaline phosphatase and bilirubin without high transaminases." },
      { "text": "Severe acute exacerbation of HBV replication after withdrawal of antivirals that had been suppressing HBV.", "explanation": "Correct. The lecturer specifically taught that tenofovir, lamivudine, and emtricitabine all suppress HBV in addition to HIV. In HIV/HBV co-infected patients, abrupt withdrawal of any of these drugs without substituting an alternative anti-HBV agent allows HBV replication to surge, producing a severe acute exacerbation that can manifest as fulminant hepatitis. This is why HBV serology must be checked before any regimen change involving these NRTIs, and co-infected patients should remain on at least one anti-HBV-active agent." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Tenofovir, lamivudine, and emtricitabine all suppress HBV. In HIV/HBV co-infected patients, withdrawing these drugs WITHOUT another anti-HBV agent -> severe HBV flare and potentially fatal hepatitis.",
    "pdfPage": 29,
    "pdfQuote": "withdrawal severe acute exacerbation of HBV"
  },
  {
    "id": 11,
    "category": "Pharmacology: Antiretroviral - Combination Errors",
    "questionText": "A 38-year-old woman with HIV-1 was switched 3 months ago from her prior regimen to a new fixed-dose combination containing tenofovir alafenamide together with another nucleotide/nucleoside reverse transcriptase inhibitor classified as a guanosine analog, plus an integrase inhibitor. Despite confirmed adherence, her viral load has risen from undetectable to 18,000 copies/mL. Resistance testing detects no new resistance mutations. Renal function and liver enzymes are normal. The pharmacist reviewing her regimen recognizes a specific combination error the lecturer specifically warned against. Which combination is responsible for this high rate of virologic failure?",
    "options": [
      { "text": "Lamivudine plus emtricitabine, because both are cytidine analogs and compete for intracellular phosphorylation.", "explanation": "Incorrect. The lecturer did teach that lamivudine and emtricitabine should not be combined because they compete with each other, but this patient is on a guanosine analog plus tenofovir, not two cytidine analogs. This would be the correct answer if her regimen contained both 3TC and FTC together." },
      { "text": "Abacavir plus lamivudine, because both are converted to the same intracellular triphosphate.", "explanation": "Incorrect. Abacavir is converted to carbovir triphosphate (guanosine analog) and lamivudine is a cytidine analog; they are not the same triphosphate and abacavir + lamivudine is one of the preferred NRTI backbones. This would be the correct answer if these drugs shared a metabolic activation pathway, which they do not." },
      { "text": "Tenofovir plus abacavir, an inferior NRTI backbone that guidelines advise against.", "explanation": "Correct. The lecturer explicitly warned that tenofovir (TDF or TAF) should not be paired with abacavir because the combination is associated with high rates of virologic failure even in the absence of resistance mutations. The standard NRTI backbones are tenofovir + emtricitabine OR abacavir + lamivudine, not tenofovir + abacavir. Recognizing and changing this NRTI backbone is the next best step." },
      { "text": "Tenofovir plus emtricitabine, because this fixed-dose backbone causes excessive renal toxicity.", "explanation": "Incorrect. Tenofovir + emtricitabine is one of the recommended preferred NRTI backbones, not a contraindicated pairing; renal toxicity is monitored but does not cause virologic failure. This would be the correct answer if standard backbones were considered toxic combinations, which they are not." },
      { "text": "An integrase inhibitor plus any NRTI, because INSTIs antagonize NRTI activation.", "explanation": "Incorrect. INSTIs are routinely combined with two NRTIs as the preferred initial regimen; there is no antagonism. This would be the correct answer if INSTIs blocked NRTI phosphorylation, which they do not." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: NEVER combine tenofovir with abacavir (high rate of virologic failure). NEVER combine lamivudine with emtricitabine (intracellular competition reduces efficacy). Standard backbones: TDF/TAF + FTC or ABC + 3TC.",
    "pdfPage": 30,
    "pdfQuote": "tenofovir with abacavir high rates virologic failure"
  },
  {
    "id": 12,
    "category": "Pharmacology: Antiretroviral - Zidovudine in Pregnancy/Perinatal",
    "questionText": "A 24-year-old woman with HIV-1 presents in active labor at 39 weeks gestation. She has not received prenatal antiretroviral therapy, and her last documented viral load 2 weeks ago was 12,000 copies/mL. The obstetric and HIV teams plan an intervention to reduce the risk of vertical transmission to the neonate, and they also plan to continue this same medication to the newborn after delivery. The lecturer specifically taught that one first-generation thymidine-analog NRTI retains an important clinical role specifically for this perinatal indication, often given intravenously to the mother during delivery. Which medication is most likely being administered?",
    "options": [
      { "text": "Tenofovir disoproxil fumarate orally.", "explanation": "Incorrect. While tenofovir is approved in pregnancy as part of an ART regimen, the lecturer specifically singled out one first-generation thymidine-analog NRTI for the IV intrapartum/neonatal indication, which tenofovir is not. This would be the correct answer if asking which first-line NRTI is preferred for chronic oral ART in pregnancy." },
      { "text": "Abacavir orally.", "explanation": "Incorrect. Abacavir requires pre-treatment HLA-B*5701 screening and has no established intrapartum/neonatal IV role; it would be dangerous to initiate without genotype testing. This would be the correct answer if the question were about adult chronic oral therapy with a known negative HLA-B*5701." },
      { "text": "Emtricitabine intramuscularly.", "explanation": "Incorrect. Emtricitabine is given orally, not intramuscularly, and has no special perinatal IV indication. This would be the correct answer if FTC had an IM long-acting form for prophylaxis, which it does not." },
      { "text": "Zidovudine intravenously.", "explanation": "Correct. The lecturer specifically taught that even though zidovudine (AZT) is a first-generation NRTI with limited use in modern adult chronic ART, it retains two major roles: IV perinatal infusion during labor to prevent vertical transmission and treatment of the neonate. Its short intracellular half-life and historical IV formulation make it the agent of choice for this acute peripartum/neonatal indication." },
      { "text": "Cabotegravir intramuscularly.", "explanation": "Incorrect. Cabotegravir IM is contraindicated in pregnant patients and those planning pregnancy and is used for chronic maintenance or PrEP in selected non-pregnant adults; it is not used for intrapartum prevention of vertical transmission. This would be the correct answer if a stable, virologically suppressed non-pregnant adult wanted to switch to a long-acting injectable maintenance regimen." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Zidovudine (first-generation thymidine NRTI) retains an important role as IV perinatal infusion to prevent vertical HIV transmission and for neonatal post-exposure therapy.",
    "pdfPage": 36,
    "pdfQuote": "perinatal IV infusion to prevent vertical transmission"
  },
  {
    "id": 13,
    "category": "Pharmacology: Antiretroviral - Emtricitabine Hyperpigmentation",
    "questionText": "A 30-year-old woman of African ancestry has been on a tenofovir-alafenamide-based regimen with one of the cytidine-analog NRTIs and an integrase inhibitor for 6 months. She presents because of newly noticed darkened patches on the palms of her hands and the soles of her feet. She has no joint pain, no oral lesions, normal CBC, normal renal and liver chemistries, and an undetectable viral load. Which medication in her regimen is most likely responsible for this finding?",
    "options": [
      { "text": "Tenofovir alafenamide.", "explanation": "Incorrect. Tenofovir's hallmark adverse effects are renal proximal tubular dysfunction and decreased bone mineral density, not palmar/plantar hyperpigmentation. This would be the correct answer if the patient had hypophosphatemia, glucosuria, and worsening creatinine." },
      { "text": "Emtricitabine.", "explanation": "Correct. The lecturer specifically taught that emtricitabine can cause a distinctive drug-specific hyperpigmentation, typically of the palms and soles. The finding is cosmetically apparent (especially in darker-skinned patients), but is otherwise benign and does not require discontinuation in the absence of patient distress. Recognizing this as drug-related rather than systemic disease (e.g., adrenal insufficiency, Peutz-Jeghers) avoids unnecessary workup." },
      { "text": "Dolutegravir.", "explanation": "Incorrect. INSTI class effects are weight gain, nausea, diarrhea, headache, and insomnia, with rare depression/suicidality in patients with prior psychiatric disease; palmar/plantar pigmentation is not an INSTI effect. This would be the correct answer if the patient had developed significant weight gain, insomnia, and headache after starting the INSTI." },
      { "text": "Lamivudine.", "explanation": "Incorrect. Lamivudine is structurally related to emtricitabine but the lecturer attributed the hyperpigmentation specifically to emtricitabine, not lamivudine. This would be the correct answer if hyperpigmentation were a lamivudine-specific effect, which it is not in this lecture." },
      { "text": "Abacavir.", "explanation": "Incorrect. Abacavir is associated with HLA-B*5701-linked multi-organ hypersensitivity, not isolated palmar/plantar hyperpigmentation. This would be the correct answer if the patient had fever, rash, GI symptoms, and dyspnea within the first 6 weeks of starting abacavir." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Emtricitabine = drug-specific palmar/plantar hyperpigmentation (benign, cosmetic). Recognize as drug-related to avoid unnecessary endocrine/GI workup.",
    "pdfPage": 31,
    "pdfQuote": "hyperpigmentation palms and soles emtricitabine"
  },
  {
    "id": 14,
    "category": "Pharmacology: Antiretroviral - INSTI + Polyvalent Cations",
    "questionText": "A patient on a fixed-dose antiretroviral regimen that contains an integrase strand transfer inhibitor has been virologically suppressed but is now found to have a rising HIV viral load. She admits that several months ago she started taking calcium carbonate and an iron supplement for osteoporosis and iron deficiency, taking each at the same time as her HIV pill 'so I don't forget.' The lecturer specifically warned that oral absorption of this class is reduced by a particular interaction. What is the best counseling for this patient?",
    "options": [
      { "text": "Separate the INSTI from the polyvalent cation-containing products by at least 2 hours.", "explanation": "Correct. The lecturer specifically taught that oral absorption of INSTIs can be reduced by polyvalent cations (calcium, magnesium, iron, aluminum-containing antacids and supplements) because the cations chelate the drug in the gut. The recommended management is to separate the INSTI dose from the polyvalent cation by at least 2 hours so that absorption is not impaired. Failing to separate them can cause subtherapeutic INSTI levels and virologic failure even in adherent patients." },
      { "text": "Stop the calcium and iron supplements indefinitely because they are absolutely contraindicated with the INSTI.", "explanation": "Incorrect. The lecturer did not teach absolute contraindication; the issue is chelation in the gut at the time of co-administration, which can be managed by separating the doses. This would be the correct answer if these cations were truly contraindicated, which they are not." },
      { "text": "Switch from the INSTI to a boosted protease inhibitor because all INSTIs are inactivated by cations.", "explanation": "Incorrect. INSTIs are not inactivated chemically; they are simply absorbed less when co-ingested with polyvalent cations, and dose separation solves the problem without requiring a regimen change. This would be the correct answer if INSTIs were truly inactivated by cation exposure, which they are not." },
      { "text": "Increase the INSTI dose to overcome chelation with calcium and iron.", "explanation": "Incorrect. Dose escalation of an INSTI for cation interaction is not the lecturer's recommendation and risks dose-dependent toxicity. This would be the correct answer if dose adjustment were the standard management of this interaction, which it is not." },
      { "text": "Take the INSTI at the same time as the cations but with a high-fat meal to overcome the interaction.", "explanation": "Incorrect. A high-fat meal does not prevent chelation of INSTIs by polyvalent cations; only temporal separation reliably preserves absorption. This would be the correct answer if the interaction were food-effect-based, which it is not." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Polyvalent cations (Ca, Mg, Fe, Al antacids/supplements) chelate INSTIs in the gut. SEPARATE the doses by at least 2 hours to avoid subtherapeutic levels and virologic failure.",
    "pdfPage": 43,
    "pdfQuote": "antacids should not be taken at the same time"
  },
  {
    "id": 15,
    "category": "Pharmacology: Antiretroviral - Cobicistat/CYP3A4 Boosting",
    "questionText": "A fixed-dose antiretroviral combination pill contains an integrase strand transfer inhibitor, tenofovir, and emtricitabine. The lecturer pointed out that this particular fixed-dose combination also contains a fourth ingredient that has no antiviral activity of its own but is included specifically to increase the plasma concentration of the integrase inhibitor by inhibiting one host metabolic enzyme. What is the function and target of this fourth ingredient?",
    "options": [
      { "text": "A potent inducer of CYP3A4 that increases activation of the integrase inhibitor prodrug.", "explanation": "Incorrect. The fourth ingredient is an INHIBITOR of CYP3A4, not an inducer, and INSTIs in clinical use are not prodrugs requiring CYP activation. This would be the correct answer if induction (rather than inhibition) of CYP3A4 raised drug levels, which it does not." },
      { "text": "A P-glycoprotein inhibitor at the renal tubule that prolongs tenofovir half-life.", "explanation": "Incorrect. Cobicistat does affect transporters and can raise tenofovir levels, but its primary role and the one taught here is CYP3A4 inhibition to boost elvitegravir. This would be the correct answer if the boosting were specifically aimed at prolonging tenofovir half-life, which is not its main purpose." },
      { "text": "A pharmacokinetic enhancer that inhibits CYP3A4, raising plasma concentrations of the INSTI substrate.", "explanation": "Correct. The lecturer specifically taught that elvitegravir is a CYP3A4 substrate that requires boosting, and cobicistat (the fourth ingredient denoted 'c' in fixed-dose combinations such as elvitegravir/cobicistat/tenofovir/emtricitabine) is a CYP3A4 inhibitor with no antiviral activity. Cobicistat increases elvitegravir plasma concentrations enough to allow once-daily dosing. This same boosting strategy is also used with certain protease inhibitors. Inhibiting CYP3A4 also drives many drug-drug interactions that must be screened for." },
      { "text": "An inhibitor of UGT1A1 that prevents glucuronidation of bictegravir.", "explanation": "Incorrect. Bictegravir is a UGT1A1/CYP3A4 substrate, but bictegravir is dosed without a pharmacokinetic enhancer; the boosted INSTI is elvitegravir. This would be the correct answer if bictegravir required UGT inhibition for adequate exposure, which it does not." },
      { "text": "An immune adjuvant that potentiates host CD8 responses against integrated provirus.", "explanation": "Incorrect. Cobicistat has no immunologic activity; it is purely a pharmacokinetic booster. This would be the correct answer if HIV regimens included an immunostimulant, which standard ART does not." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Elvitegravir requires boosting with cobicistat (CYP3A4 inhibitor) for once-daily dosing. Raltegravir is not a CYP substrate and needs no booster. Bictegravir and dolutegravir do not require boosting.",
    "pdfPage": 42,
    "pdfQuote": "elvitegravir CYP3A4 substrate needs boosting"
  },
  {
    "id": 16,
    "category": "Pharmacology: Antiretroviral - IRIS",
    "questionText": "A 32-year-old man with newly diagnosed AIDS (CD4 count 28 cells/microliter, viral load 850,000 copies/mL) is started on a regimen of tenofovir alafenamide, emtricitabine, and bictegravir. Three weeks into therapy, his CD4 has risen to 95 cells/microliter and his viral load has dropped to 1,200 copies/mL. He now develops fever, cervical and mediastinal lymphadenopathy, and worsening cough. A lymph node biopsy shows necrotizing granulomas with acid-fast bacilli that were not clinically apparent before therapy. Which mechanism best explains this new clinical syndrome?",
    "options": [
      { "text": "Hypersensitivity reaction to one of his new antiretroviral medications.", "explanation": "Incorrect. The pattern of necrotizing granulomas with acid-fast bacilli localized to lymph nodes is not consistent with a drug hypersensitivity reaction, which would typically be a systemic morbilliform rash, fever, and multi-organ involvement closer to drug initiation. This would be the correct answer if he had abacavir on board (he does not) and presented with diffuse rash, GI upset, and dyspnea within 6 weeks of starting." },
      { "text": "Direct viral co-infection of the lymph nodes by HIV producing granulomatous inflammation.", "explanation": "Incorrect. HIV itself does not produce necrotizing granulomas; the AFB on biopsy points to a mycobacterial pathogen being recognized. This would be the correct answer if HIV directly caused granulomatous lymphadenitis, which it does not." },
      { "text": "Mitochondrial toxicity from inhibition of host DNA polymerase gamma in lymphoid tissue.", "explanation": "Incorrect. Mitochondrial toxicity from NRTIs produces lactic acidosis, hepatic steatosis, lipoatrophy, and neuropathy/myopathy, not necrotizing granulomatous lymphadenitis with AFB. This would be the correct answer if he had developed lactic acidosis, hepatomegaly, and lipoatrophy on long-term first-generation NRTIs." },
      { "text": "Acute virologic failure with rebound HIV viremia driving lymph node necrosis.", "explanation": "Incorrect. His viral load dropped sharply and CD4 rose; this is the OPPOSITE of virologic failure. This would be the correct answer if his viral load had risen on therapy and CD4 had fallen, indicating treatment failure." },
      { "text": "Reconstitution of host immunity now recognizing and attacking a previously subclinical opportunistic infection.", "explanation": "Correct. The lecturer described immune reconstitution inflammatory syndrome (IRIS) as a class effect of effective ART. As viral load drops and the CD4 count rises in a profoundly immunosuppressed patient, the host immune system 'wakes up' and begins to recognize and attack subclinical opportunistic infections (in this case mycobacterial lymphadenitis) or malignancies, producing a paradoxical inflammatory syndrome. ART is generally continued and the unmasked OI is treated; corticosteroids may be added for severe IRIS. The 28 -> 95 CD4 rise and 850,000 -> 1,200 viral load drop confirm immune reconstitution." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: IRIS = class effect of ART. As CD4 rises and viral load drops, reconstituted immunity unmasks/attacks subclinical OIs or malignancies. Continue ART, treat the OI, consider steroids for severe inflammation.",
    "pdfPage": 18,
    "pdfQuote": "immune reconstitution inflammatory syndrome"
  },
  {
    "id": 17,
    "category": "Pharmacology: Antiretroviral - Abacavir-Alcohol Interaction",
    "questionText": "A 41-year-old man with HIV-1 has been on a regimen including abacavir/lamivudine for 2 years with full virologic suppression. He recently began drinking 4-5 alcoholic drinks per evening. He reports new nausea and headache. The pharmacology lecturer described one specific drug-drug interaction between abacavir and ethanol that explains a measurable change in his blood pharmacokinetics. Which mechanism best explains this interaction?",
    "options": [
      { "text": "Ethanol induces CYP3A4, decreasing abacavir plasma levels.", "explanation": "Incorrect. Abacavir is not primarily a CYP3A4 substrate; it is metabolized hepatically by alcohol dehydrogenase and glucuronosyltransferase, so CYP3A4 induction is not the relevant pathway. This would be the correct answer if abacavir were a CYP3A4 substrate, which it is not." },
      { "text": "Ethanol displaces abacavir from albumin, decreasing the free fraction.", "explanation": "Incorrect. Abacavir is not highly protein bound and ethanol does not substantially alter abacavir's free fraction. This would be the correct answer if abacavir behaved like a highly protein-bound drug such as warfarin, which it does not." },
      { "text": "Ethanol induces uridine diphosphate glucuronosyltransferase, decreasing abacavir plasma levels.", "explanation": "Incorrect. Ethanol primarily inhibits other drug metabolism via shared ADH usage; in this lecture the AUC change is attributed to ADH competition, not UGT induction. This would be the correct answer if the question were about chronic ethanol's effects on glucuronidation pathways, which is not the mechanism taught here." },
      { "text": "Ethanol competes with abacavir for alcohol dehydrogenase, increasing abacavir plasma levels.", "explanation": "Correct. The lecturer specifically taught that abacavir undergoes hepatic metabolism by alcohol dehydrogenase and glucuronosyltransferase. Because ethanol is the prototype substrate for alcohol dehydrogenase, concurrent ingestion competes with abacavir for the enzyme, slowing abacavir's metabolism and raising its plasma levels. The patient should be counseled about reducing alcohol intake and monitored for abacavir-related adverse effects." },
      { "text": "Ethanol inhibits P-glycoprotein in the gut, increasing abacavir oral absorption.", "explanation": "Incorrect. Abacavir is well absorbed orally and its interaction with ethanol is hepatic-metabolic, not transporter-mediated. This would be the correct answer if abacavir were a P-gp substrate whose absorption depended on gut efflux, which is not the mechanism described." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Abacavir is metabolized by alcohol dehydrogenase + UGT. Ethanol competes for ADH -> increased abacavir levels. Counsel on alcohol use.",
    "pdfPage": 34,
    "pdfQuote": "alcohol can increase abacavir levels"
  },
  {
    "id": 18,
    "category": "Pharmacology: Antiretroviral - Cabotegravir/Rilpivirine LA",
    "questionText": "A 35-year-old man with HIV-1 has been fully virologically suppressed for 18 months on a daily oral 3-drug regimen, has no baseline resistance to either of two specific drugs the team is considering, is HBsAg-negative, has no prior virologic failures, is not on interacting medications, and is not pregnancy-capable. He travels frequently for work and tells his physician he is sick of taking a pill every day and wants the 'shot' he heard about. The team starts him on a 1-month oral lead-in with cabotegravir + rilpivirine and then transitions him to long-acting intramuscular injections of both drugs. Where must these long-acting intramuscular injections be administered, and what specific patient factor is therefore a relative limitation?",
    "options": [
      { "text": "Deltoid muscle; limited in patients with rotator cuff disease.", "explanation": "Incorrect. The injections are not given in the deltoid; they must go into the gluteal muscles. This would be the correct answer if the formulation were a small-volume vaccine-style IM injection, which long-acting cabotegravir/rilpivirine is not." },
      { "text": "Gluteal muscle; limited in patients with buttocks implants or dermal fillers.", "explanation": "Correct. The lecturer specifically emphasized that cabotegravir/rilpivirine long-acting can only be administered into the gluteal muscles, and therefore may not be an option for patients who have gluteal implants or fillers because those alter tissue and prevent reliable IM deposition and absorption. The lead-in oral phase ensures tolerability before the depot is given every 4 or 8 weeks. Eligibility also requires suppressed virus, no resistance to either drug, no active HBV (without other anti-HBV coverage), not pregnant/planning pregnancy, and no interacting concomitant medications." },
      { "text": "Subcutaneous abdominal fat; limited in patients with significant lipoatrophy.", "explanation": "Incorrect. Long-acting cabotegravir/rilpivirine is intramuscular, not subcutaneous, and is not abdominal. This would be the correct answer if the drug were an SC depot like long-acting insulin, which it is not." },
      { "text": "Vastus lateralis; limited in patients with peripheral neuropathy.", "explanation": "Incorrect. The injection is not given in the thigh. This would be the correct answer if cabotegravir/rilpivirine were a thigh-injected long-acting agent, which it is not." },
      { "text": "Ventrogluteal site; limited only by needle length and clinician training.", "explanation": "Incorrect. The lecturer specifically noted gluteal-only administration with a unique patient-anatomy limitation (implants/fillers), not a general training issue. This would be the correct answer if generic IM technique were the constraint, but the specific lecture point was about implants/fillers." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Cabotegravir/rilpivirine LA is INJECTED INTO GLUTEAL muscle only; gluteal implants or fillers may make it unsuitable. Eligibility: virologically suppressed, no resistance, no HBV (unless treated), not pregnant, no interacting meds.",
    "pdfPage": 47,
    "pdfQuote": "administered into the gluteal muscles"
  },
  {
    "id": 19,
    "category": "Pharmacology: Antiretroviral - Pre-Exposure Prophylaxis",
    "questionText": "A 28-year-old HIV-negative man at substantial risk of acquiring HIV-1 through sexual exposure is seeking pre-exposure prophylaxis. He has poor adherence to daily oral medications and prefers a long-acting parenteral option. The lecturer described one antiretroviral medication that, as a single agent (without rilpivirine), can be used for maintenance pre-exposure prophylaxis given as a long-acting intramuscular injection every 2 months. Which class does this PrEP-approved long-acting injectable belong to?",
    "options": [
      { "text": "Integrase strand transfer inhibitor.", "explanation": "Correct. The lecturer specifically taught that cabotegravir (an INSTI) is also used as a long-acting intramuscular agent for pre-exposure prophylaxis maintenance in HIV-negative individuals, administered roughly once every 2 months. Note the distinction: for HIV TREATMENT, cabotegravir is paired with rilpivirine; for PrEP, cabotegravir is used alone. INSTIs' high barrier to resistance, potency, and tolerability make this a viable strategy in patients who cannot adhere to daily oral PrEP." },
      { "text": "Non-nucleoside reverse transcriptase inhibitor.", "explanation": "Incorrect. Rilpivirine is an NNRTI but it is partnered with cabotegravir for HIV TREATMENT in suppressed patients, not used as monotherapy LA PrEP. This would be the correct answer if rilpivirine alone were approved as a long-acting PrEP agent, which it is not." },
      { "text": "Nucleotide reverse transcriptase inhibitor.", "explanation": "Incorrect. Tenofovir/emtricitabine (NRTI/NtRTI) is used for oral daily PrEP, but the long-acting IM agent the lecturer emphasized for PrEP is not an NtRTI. This would be the correct answer if asking which class is used for daily ORAL PrEP, which is TDF/FTC or TAF/FTC." },
      { "text": "Boosted protease inhibitor.", "explanation": "Incorrect. Protease inhibitors are not used for PrEP; they are reserved as treatment-base alternatives and require boosting. This would be the correct answer if PIs were the long-acting PrEP option, which they are not." },
      { "text": "Fusion inhibitor.", "explanation": "Incorrect. Fusion inhibitors like enfuvirtide are subcutaneously injected twice daily salvage agents, not long-acting PrEP. This would be the correct answer if fusion inhibitors had a long-acting PrEP formulation, which they do not." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Cabotegravir alone (an INSTI) is used as long-acting IM PrEP for HIV-negative individuals every 2 months. Cabotegravir + rilpivirine is for treatment of suppressed HIV-positive patients.",
    "pdfPage": 48,
    "pdfQuote": "pre-exposure prophylaxis cabotegravir"
  },
  {
    "id": 20,
    "category": "Pharmacology: Antiretroviral - Viral Suppression Goals",
    "questionText": "A 29-year-old woman with newly diagnosed HIV-1 (baseline viral load 250,000 copies/mL, CD4 320 cells/microliter) is started on a preferred initial 3-drug ART regimen. She is highly adherent and tolerates the medications well. The lecturer specifically taught what the OUTCOME of effective initial therapy should look like at the prescribed time point. Which set of outcomes constitutes the lecturer's stated goal of antiretroviral therapy in this patient?",
    "options": [
      { "text": "Plasma HIV RNA less than 1,000 copies/mL within 4 weeks and a CD4 increase of more than 500 cells/microliter in the first year.", "explanation": "Incorrect. The lecturer's target is undetectable (not <1,000) and within 24 weeks (not 4), and the CD4 increase target is 50-150 in the first year, not >500. This would be the correct answer if the goals were faster and bigger numerically, which they are not." },
      { "text": "Undetectable plasma HIV RNA within 24 weeks and a CD4 increase of 50-150 cells/microliter in the first year.", "explanation": "Correct. The lecturer explicitly stated that the goals of antiretroviral therapy include maximally and durably suppressing plasma HIV RNA (i.e., viral load) to undetectable, restoring and preserving immunologic function (CD4 count), reducing HIV-associated morbidity, prolonging duration and quality of survival, and preventing transmission. The specific quantitative outcome targets she gave were undetectable viral load within 24 weeks of starting treatment and a CD4 count increase of approximately 50-150 cells per microliter in the first year." },
      { "text": "Eradication of integrated proviral DNA from all reservoirs within 1 year of starting treatment.", "explanation": "Incorrect. Current ART suppresses replication but does NOT eradicate integrated proviral DNA from latent reservoirs; this is why therapy is lifelong. This would be the correct answer if a cure (eradication) were the achievable goal of standard ART, which it is not." },
      { "text": "Normalization of CD4 to greater than 1,000 cells/microliter within 12 weeks of starting treatment.", "explanation": "Incorrect. CD4 normalization to >1,000 in 12 weeks is unrealistic; the lecturer's stated CD4 target is 50-150 cells/microliter increase in the FIRST YEAR. This would be the correct answer if recovery were that fast and that complete, which it is not." },
      { "text": "Discontinuation of antiretroviral therapy once viral load is undetectable for 6 months.", "explanation": "Incorrect. The lecturer stressed that ART is lifelong; treatment is never electively discontinued because HIV rebounds and resistance can emerge. This would be the correct answer if HIV were curable by a finite course of therapy, which it is not." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: ART goals = undetectable viral load by 24 weeks AND CD4 rise of 50-150 cells/microliter in the first year. ART is LIFELONG; non-adherence is the leading cause of treatment failure.",
    "pdfPage": 17,
    "pdfQuote": "undetectable viral load within 24 weeks"
  }
];
