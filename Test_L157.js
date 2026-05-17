// Thinking Process:
// 1. High-Yield Concept: Mechanism-driven adverse effects and class identification of targeted anticancer drugs — BCR-ABL TKIs (imatinib/ponatinib + T315I), EGFR/VEGF mAbs (cetuximab, panitumumab, bevacizumab — KRAS wild-type rule), HER2 inhibitors (trastuzumab cardiotoxicity, ADCs), CDK4/6 (Rb), PARP (BRCA), CD20 (rituximab + HBV reactivation), multiple myeloma VRd (bortezomib NF-kB, lenalidomide cereblon/IMiD teratogen, daratumumab CD38), immune checkpoint inhibitors (CTLA-4, PD-1, PD-L1) with immune-related adverse events (colitis, hypophysitis, pneumonitis), and CAR-T (cytokine release syndrome, ICANS).
// 2. The "Trap": Buzzword pairing without mechanism reasoning — e.g., choosing "trastuzumab" because "HER2" appears, or picking dermatologic toxicity for everything because most TKIs cause rash. Students must reason from the described pathophysiology (wound dehiscence → VEGF; phocomelia → IMiD; encephalopathy after T-cell therapy → ICANS).
// 3. Key Distractor: "Right drug for the wrong patient" — e.g., cetuximab for KRAS-mutant colorectal cancer (it fails), or HBV-positive patient about to start rituximab without screening.
// 4. Vignette Strategy: Mechanism-first stems that withhold the drug name and force student to identify the agent or its mechanism from the adverse-effect pattern. Block 1 (Q1-10) tests core MOA/classification/AE mechanisms. Block 2 (Q11-20) integrates these into clinical vignettes with PMH, vitals, exam, labs.
//
// PDF Mapping Check: Found
// PDF Filename: Lecture # 157. L. Goldstein, Pharm.D. (PPT).pdf
// Mapping Key: 17-Pharmacology: Antineoplastic Agents 2 (L157)
// Status: Verified

window.Test_L157 = [
  {
    "id": 1,
    "category": "Pharmacology: Targeted Therapy Nomenclature",
    "questionText": "An oral antineoplastic agent ending in the suffix '-tinib' passively diffuses across the plasma membrane and acts at an intracellular target. Which molecular action best describes how this drug class produces its antitumor effect?",
    "options": [
      { "text": "It binds an extracellular epitope of a growth-factor receptor and prevents ligand binding.", "explanation": "Incorrect. This describes the mechanism of monoclonal antibody (-mab) targeted agents such as cetuximab or trastuzumab, which act on the extracellular receptor domain. This would be the correct answer if the suffix had been '-mab' rather than '-tinib'." },
      { "text": "It occupies the intracellular ATP-binding site of a tyrosine kinase.", "explanation": "Correct. Small-molecule '-tinib' / '-nib' drugs diffuse into the cytosol and competitively block the ATP-binding pocket of tyrosine kinase domains, preventing autophosphorylation and shutting down growth/survival signaling. Because they require cellular uptake and intracellular binding, they are formulated as oral drugs; most are CYP3A4 and P-glycoprotein substrates, which explains their drug-interaction profile." },
      { "text": "It is a chimeric antigen receptor T cell engineered to recognize a specific tumor antigen.", "explanation": "Incorrect. CAR-T therapies are autologous T cells, not orally absorbed small molecules. This would be correct if the patient had received a one-time infusion of genetically engineered T cells targeting CD19 or BCMA." },
      { "text": "It is a soluble decoy that neutralizes circulating vascular endothelial growth factor before it can bind its receptor.", "explanation": "Incorrect. This describes bevacizumab, an injected monoclonal antibody, not an oral small-molecule kinase inhibitor. This would be the correct answer if the drug were bevacizumab used for metastatic colorectal cancer." },
      { "text": "It binds the 20S core of the 26S proteasome and prevents proteolysis of ubiquitinated proteins.", "explanation": "Incorrect. This is the mechanism of the proteasome inhibitors (bortezomib, carfilzomib, ixazomib), whose suffix is '-zomib,' not '-tinib.' This would be correct if the question described a drug used in VRd induction for multiple myeloma." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Suffix recognition is a high-yield shortcut: '-tinib/-nib' = small-molecule intracellular tyrosine kinase inhibitor (oral, CYP3A4); '-mab' = monoclonal antibody (parenteral, extracellular target); '-zomib' = proteasome inhibitor; '-ciclib' = CDK4/6 inhibitor; '-parib' = PARP inhibitor.",
    "pdfPage": 21,
    "pdfQuote": "Block the intracellular ATP binding sites"
  },
  {
    "id": 2,
    "category": "Pharmacology: BCR-ABL Inhibitor Resistance",
    "questionText": "A patient with chronic myeloid leukemia treated with a first-generation BCR-ABL inhibitor relapses, and sequencing reveals a threonine-to-isoleucine point mutation at residue 315 (T315I) within the kinase domain. Which of the following agents retains activity against this specific resistance mutation?",
    "options": [
      { "text": "Imatinib", "explanation": "Incorrect. T315I is the canonical 'gatekeeper' mutation that confers resistance to imatinib by sterically preventing tight binding within the ATP pocket. This would be correct if the patient had a different kinase-domain mutation that did not involve the gatekeeper residue." },
      { "text": "Dasatinib", "explanation": "Incorrect. Dasatinib is a second-generation BCR-ABL inhibitor and is more potent against many resistance mutations than imatinib, but T315I still confers resistance to it. This would be correct for most BCR-ABL kinase-domain mutations other than T315I." },
      { "text": "Nilotinib", "explanation": "Incorrect. Nilotinib is also a second-generation inhibitor that overcomes many resistance mutations but is ineffective against T315I for the same steric reason as dasatinib. This would be correct for a different point mutation." },
      { "text": "Ponatinib", "explanation": "Correct. Ponatinib has multiple contact points within the kinase domain, so an individual point mutation like T315I has less effect on overall binding. Of the BCR-ABL inhibitors, only ponatinib and asciminib (an allosteric inhibitor that holds BCR-ABL in an inactive conformation) retain activity against T315I-mutated CML. Ponatinib carries a black-box risk of arterial occlusive events." },
      { "text": "Bosutinib", "explanation": "Incorrect. Bosutinib is a second-generation BCR-ABL inhibitor for chronic-phase CML, but like imatinib, dasatinib, and nilotinib it is ineffective against the T315I gatekeeper mutation. This would be correct in a treatment-naive chronic-phase CML patient without T315I." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "T315I is the BCR-ABL 'gatekeeper' mutation: only ponatinib (multiple contact points) and asciminib (allosteric inhibitor) retain efficacy.",
    "pdfPage": 24,
    "pdfQuote": "Only ponatinib and asciminib are effective"
  },
  {
    "id": 3,
    "category": "Pharmacology: EGFR Antibodies and KRAS",
    "questionText": "Before initiating an anti-EGFR monoclonal antibody for metastatic colorectal cancer, the tumor must be tested for a specific mutation that predicts complete lack of response. Which mutation, present in 40-50% of colorectal tumors, makes anti-EGFR antibody therapy ineffective?",
    "options": [
      { "text": "BCR-ABL fusion (Philadelphia chromosome)", "explanation": "Incorrect. The BCR-ABL fusion drives CML and is the target of imatinib-class drugs, not a marker in colorectal cancer. This would be correct if the question concerned selection of a tyrosine kinase inhibitor for newly diagnosed CML." },
      { "text": "BRCA1/2 deleterious mutation", "explanation": "Incorrect. Deleterious BRCA1/2 mutations make tumors *sensitive* to PARP inhibitors such as olaparib (synthetic lethality), not resistant to EGFR antibodies. This would be correct if the question were about choosing a PARP inhibitor for ovarian or HER2-negative metastatic breast cancer." },
      { "text": "KRAS oncogene mutation", "explanation": "Correct. KRAS encodes a small GTPase downstream of EGFR in the RAF/MEK/ERK pathway. When KRAS is constitutively activated by mutation, signaling continues independently of upstream receptor blockade, so blocking EGFR with cetuximab or panitumumab fails. Only KRAS wild-type colorectal tumors are candidates for these antibodies, which are typically combined with FOLFOX or FOLFIRI." },
      { "text": "HER2 (ERBB2) amplification", "explanation": "Incorrect. HER2 amplification defines a subset of breast and gastric cancers treated with trastuzumab/pertuzumab; it is not the marker that predicts cetuximab failure in colorectal cancer. This would be the correct answer if the patient had a HER2-positive breast tumor being considered for anti-HER2 therapy." },
      { "text": "T315I point mutation in the ABL1 kinase domain", "explanation": "Incorrect. T315I is a BCR-ABL resistance mutation relevant to CML treatment with imatinib-class drugs, not colorectal cancer. This would be correct in a relapsed CML patient being switched to ponatinib or asciminib." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Cetuximab and panitumumab require KRAS wild-type status — KRAS mutations downstream of EGFR drive the pathway regardless of receptor blockade. Test before treating.",
    "pdfPage": 31,
    "pdfQuote": "NOT effective in tumors expressing mutations of KRAS"
  },
  {
    "id": 4,
    "category": "Pharmacology: VEGF Inhibitor Adverse Effects",
    "questionText": "A monoclonal antibody neutralizes circulating VEGF-A and is added to chemotherapy regimens for metastatic colorectal cancer. Several of its characteristic adverse effects — hypertension, hemorrhage, impaired wound healing, wound dehiscence, and gastrointestinal perforation — share a common underlying mechanism. Which physiologic process best explains this constellation of toxicities?",
    "options": [
      { "text": "Inhibition of microtubule polymerization in mitotic spindle assembly", "explanation": "Incorrect. Microtubule inhibition produces neutropenia and peripheral neuropathy (taxanes, vincristine), not hypertension and wound dehiscence. This would be correct for adverse effects of paclitaxel or vincristine." },
      { "text": "Generation of free radicals causing dose-dependent cardiomyopathy", "explanation": "Incorrect. This describes anthracycline (doxorubicin) cardiotoxicity, which presents as a dilated cardiomyopathy and heart failure, not impaired wound healing. This would be correct if the patient developed reduced LV ejection fraction after cumulative doxorubicin exposure." },
      { "text": "Activation of cytotoxic T lymphocytes against normal host tissues", "explanation": "Incorrect. T-cell mediated autoimmunity describes the immune-related adverse events of checkpoint inhibitors (colitis, hypophysitis, pneumonitis), not the vascular toxicities of VEGF blockade. This would be correct if the patient had been on ipilimumab or nivolumab." },
      { "text": "Inhibition of DNA strand-break repair in normal proliferating cells", "explanation": "Incorrect. This is the mechanism of PARP inhibitors, whose toxicity profile is dominated by myelosuppression and a small risk of secondary myelodysplastic syndrome / AML, not vascular events. This would be correct if the patient were on olaparib for BRCA-mutated cancer." },
      { "text": "Suppression of angiogenesis and endothelial maintenance signaling", "explanation": "Correct. VEGF-A is the primary regulator of angiogenesis and also maintains endothelial integrity, vasomotor tone, and the renal glomerular filtration barrier. Neutralizing VEGF impairs endothelial survival and new vessel formation, producing hypertension (loss of NO-mediated vasodilation), hemorrhage and GI perforation (defective microvascular repair), and poor wound healing or dehiscence (failure to form granulation tissue at surgical sites)." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Anti-VEGF toxicities (HTN, bleeding, thrombosis, poor wound healing, GI perforation) are predictable consequences of blocking endothelial maintenance and angiogenesis — hold the drug perioperatively.",
    "pdfPage": 23,
    "pdfQuote": "Inhibition of angiogenesis"
  },
  {
    "id": 5,
    "category": "Pharmacology: HER2 Antibody Toxicity",
    "questionText": "A monoclonal antibody directed against the extracellular domain IV of a receptor tyrosine kinase overexpressed in about 15% of invasive breast cancers carries a black-box warning for what serious cardiac adverse effect, which is amplified when the drug is given with anthracycline-based regimens?",
    "options": [
      { "text": "Decreased left-ventricular ejection fraction with heart failure", "explanation": "Correct. Trastuzumab (and pertuzumab) cause a typically reversible decline in LVEF and overt congestive heart failure because HER2 signaling is required for cardiomyocyte survival and stress adaptation. Risk is sharply increased when combined with anthracyclines (doxorubicin), so baseline cardiac assessment and serial monitoring of LVEF are mandatory; underlying cardiac disease should be ruled out before therapy." },
      { "text": "Coronary vasospasm precipitating acute myocardial infarction", "explanation": "Incorrect. Coronary vasospasm is classically associated with 5-fluorouracil and capecitabine, not HER2-targeted antibodies. This would be correct if the patient developed chest pain during a 5-FU infusion." },
      { "text": "Long-QT syndrome and torsades de pointes due to hERG channel blockade", "explanation": "Incorrect. QT prolongation is a more typical concern with certain small-molecule kinase inhibitors such as ribociclib and ponatinib, not trastuzumab. This would be correct if the drug were ribociclib being initiated for HR-positive breast cancer." },
      { "text": "Constrictive pericarditis from cumulative mediastinal fibrosis", "explanation": "Incorrect. Constrictive pericarditis is a late complication of mediastinal radiation, not HER2 antibody therapy. This would be correct in a Hodgkin lymphoma survivor years after mantle radiation." },
      { "text": "Accelerated atherosclerosis from chronic dyslipidemia", "explanation": "Incorrect. Targeted HER2 antibodies do not produce dyslipidemia-driven atherosclerosis as a class effect. This would be more relevant to long-term hormonal manipulation or glucocorticoid therapy." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Trastuzumab cardiotoxicity = decreased LVEF / CHF, additive with anthracyclines, usually reversible after holding the drug — check baseline echo and monitor.",
    "pdfPage": 39,
    "pdfQuote": "Highest risk with anthracycline chemotherapy regimen"
  },
  {
    "id": 6,
    "category": "Pharmacology: CDK4/6 Inhibitor Mechanism",
    "questionText": "A class of oral antineoplastic agents (suffix '-ciclib') is used as preferred first-line therapy combined with an aromatase inhibitor for hormone-receptor-positive, HER2-negative metastatic breast cancer. By blocking the kinase that phosphorylates the retinoblastoma (Rb) tumor-suppressor protein, these drugs prevent cells from completing which transition?",
    "options": [
      { "text": "G2 to M phase, blocking mitotic spindle formation", "explanation": "Incorrect. The G2/M checkpoint involves CDK1-cyclin B, not CDK4/6, and is the target of agents that disrupt the mitotic spindle (taxanes, vinca alkaloids). This would be correct if the question concerned paclitaxel." },
      { "text": "G1 to S phase, blocking initiation of DNA replication", "explanation": "Correct. Cyclin D binds CDK4/6 to hyperphosphorylate Rb, which releases the E2F-DP1 transcription factor and licenses transcription of genes required for S-phase entry. Palbociclib, ribociclib, and abemaciclib competitively inhibit CDK4/6, keeping Rb hypophosphorylated and locking the cell in G1. Estrogen signaling drives cyclin D expression in HR-positive breast cancer, which is why combining a CDK4/6 inhibitor with an aromatase inhibitor (which depletes estrogen) is synergistic." },
      { "text": "M to G1 phase, blocking cytokinesis", "explanation": "Incorrect. CDK4/6 inhibitors do not act at cytokinesis. This would be correct for a drug that disrupted the contractile ring or actomyosin function, which is not part of this lecture." },
      { "text": "S to G2 phase, blocking completion of DNA synthesis", "explanation": "Incorrect. CDK4/6 inhibitors act before S phase begins. This would be more relevant to an antimetabolite that stalled replication forks during DNA synthesis." },
      { "text": "G0 to G1 entry, blocking growth-factor-induced cell-cycle re-entry", "explanation": "Incorrect. CDK4/6 acts at the restriction point within G1, not at exit from G0. This would be correct if the drug specifically prevented cells from leaving quiescence in response to mitogens." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "CDK4/6 inhibitors arrest cells at the G1/S checkpoint by keeping Rb hypophosphorylated — pair with an aromatase inhibitor for HR+/HER2− breast cancer.",
    "pdfPage": 42,
    "pdfQuote": "transition specifically from the G1 phase the S phase"
  },
  {
    "id": 7,
    "category": "Pharmacology: PARP Inhibitor Synthetic Lethality",
    "questionText": "An oral antineoplastic agent (suffix '-parib') is approved for tumors harboring deleterious germline mutations in tumor-suppressor genes that normally mediate homologous recombination repair of double-strand DNA breaks. Which mechanism best explains why this class is selectively lethal to such tumor cells?",
    "options": [
      { "text": "It directly alkylates guanine residues, producing interstrand DNA cross-links.", "explanation": "Incorrect. Alkylation and cross-linking are the mechanisms of cyclophosphamide and platinum agents, not PARP inhibitors. This would be the correct answer for a question about a classic alkylating agent." },
      { "text": "It induces formation of an antibody-drug conjugate that delivers a microtubule poison.", "explanation": "Incorrect. This describes ado-trastuzumab emtansine and similar antibody-drug conjugates, not PARP inhibitors. This would be correct for a HER2-positive breast cancer patient previously treated with trastuzumab and a taxane." },
      { "text": "It inhibits single-strand DNA-break repair (synthetic lethality).", "explanation": "Correct. PARP1 and PARP2 sense and initiate repair of single-strand DNA breaks. When PARP is inhibited, single-strand breaks persist and collapse into double-strand breaks at replication forks. A normal cell repairs these double-strand breaks via homologous recombination using BRCA1/BRCA2. A BRCA-mutated tumor cell cannot — this is 'synthetic lethality.' Toxicities include myelosuppression and a small risk (~0.3%) of secondary myelodysplastic syndrome and AML." },
      { "text": "It blocks ribosomal subunit assembly to halt protein synthesis in rapidly dividing cells.", "explanation": "Incorrect. Ribosomal inhibition is not a mechanism in targeted oncology presented here. This would be more relevant to certain antibiotics rather than antineoplastics." },
      { "text": "It selectively activates p53 to trigger apoptosis in cells lacking MDM2.", "explanation": "Incorrect. PARP inhibitors do not act through direct p53 stabilization. This would be more relevant to investigational MDM2 antagonists and is outside the scope of the lecture." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "PARP inhibitors + BRCA-mutated tumors = synthetic lethality. The normal cell still has BRCA-mediated HR repair, so toxicity is limited to predictable myelosuppression.",
    "pdfPage": 44,
    "pdfQuote": "prevents tumor cells from repairing DNA"
  },
  {
    "id": 8,
    "category": "Pharmacology: IMiD Teratogenicity",
    "questionText": "An oral immunomodulatory imide drug used in the standard induction regimen for multiple myeloma binds cereblon, a substrate adaptor of the E3 ubiquitin-protein ligase complex, leading to ubiquitination and proteasomal degradation of IKZF1/3 transcription factors. This class is absolutely contraindicated in pregnancy because of which characteristic teratogenic effect?",
    "options": [
      { "text": "Severe limb-reduction defects (phocomelia)", "explanation": "Correct. Thalidomide, lenalidomide, and pomalidomide are notorious for causing phocomelia (stunted limb growth) along with cardiac, GI, external-ear, eye, and genitourinary malformations, with fetal mortality reported. Because the drugs are present in semen, males must also use condoms during therapy and for at least 4 weeks after completion. This is the basis of the REMS program for IMiD prescribing." },
      { "text": "Neural-tube defects from folate antagonism", "explanation": "Incorrect. Neural-tube defects are characteristic of folate antagonists such as methotrexate and certain antiepileptics, not IMiDs. This would be correct in a question about methotrexate or valproate exposure during early pregnancy." },
      { "text": "Vaginal clear-cell adenocarcinoma in female offspring exposed in utero", "explanation": "Incorrect. This is the classic transgenerational effect of diethylstilbestrol (DES), not IMiDs. It would be correct in a question about a daughter of a woman who took DES during pregnancy." },
      { "text": "Ebstein anomaly of the tricuspid valve", "explanation": "Incorrect. Ebstein anomaly is the cardiac malformation classically linked to lithium exposure in the first trimester, not lenalidomide. This would be correct if the mother had been on lithium for bipolar disorder." },
      { "text": "Permanent staining of developing dental enamel and bone", "explanation": "Incorrect. Tetracycline-class antibiotics cause tooth and bone discoloration in the fetus and young children, not IMiDs. This would be correct if the question concerned doxycycline use in pregnancy." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Thalidomide / lenalidomide / pomalidomide cause phocomelia — REMS program mandates contraception (both sexes; drug is in semen) and pregnancy testing.",
    "pdfPage": 55,
    "pdfQuote": "Stunted limb growth (phocomelia)"
  },
  {
    "id": 9,
    "category": "Pharmacology: Proteasome Inhibitor Mechanism",
    "questionText": "A parenteral agent used in the preferred 'VRd' induction regimen for newly diagnosed multiple myeloma reversibly binds the chymotrypsin-like active site of the 20S core of the 26S proteasome. Which downstream consequence is most directly responsible for selectively killing malignant plasma cells?",
    "options": [
      { "text": "Direct intercalation between DNA base pairs disrupting replication", "explanation": "Incorrect. DNA intercalation describes anthracyclines such as doxorubicin, not proteasome inhibitors. This would be correct for a question about doxorubicin's mechanism." },
      { "text": "Covalent cross-linking of DNA strands preventing transcription", "explanation": "Incorrect. DNA cross-linking is the mechanism of platinum agents and alkylating drugs, not proteasome inhibitors. This would be correct for cisplatin or cyclophosphamide." },
      { "text": "Inhibition of dihydrofolate reductase blocking thymidylate synthesis", "explanation": "Incorrect. DHFR inhibition is the mechanism of methotrexate, an antimetabolite from Part 1 of this lecture series, not the proteasome inhibitors of Part 2. This would be correct if the question described methotrexate." },
      { "text": "Failure to degrade I-kappa-B, blocking NF-kappa-B activation", "explanation": "Correct. The proteasome normally degrades ubiquitinated I-kappa-B, freeing NF-kappa-B to translocate to the nucleus and drive transcription of survival and growth genes. Myeloma cells are addicted to constitutive NF-kappa-B signaling. Proteasome blockade traps I-kappa-B with NF-kappa-B in the cytoplasm and also lets misfolded ubiquitinated proteins accumulate, triggering apoptosis. Characteristic toxicities include peripheral neuropathy (especially with bortezomib), thrombocytopenia, and herpes-zoster reactivation." },
      { "text": "Generation of reactive oxygen species selectively in cardiomyocytes", "explanation": "Incorrect. Cardiomyocyte ROS generation is the mechanism of anthracycline cardiotoxicity. This would be correct for the cumulative-dose cardiomyopathy of doxorubicin, not myeloma cell killing by bortezomib." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Bortezomib (proteasome inhibitor) → I-kappa-B accumulates → NF-kappa-B stays inactive → myeloma cell apoptosis. Watch for stocking-glove peripheral neuropathy.",
    "pdfPage": 58,
    "pdfQuote": "prevents NF-kB activation"
  },
  {
    "id": 10,
    "category": "Pharmacology: CTLA-4 vs PD-1 Checkpoint Mechanisms",
    "questionText": "Two classes of immune checkpoint inhibitors release the brakes on cytotoxic T lymphocytes by different mechanisms. Which of the following correctly pairs the checkpoint with its physiologic role?",
    "options": [
      { "text": "PD-1 is expressed on antigen-presenting cells and delivers the primary T-cell activation signal.", "explanation": "Incorrect. PD-1 is expressed on T cells (and B cells, NK cells, monocytes, dendritic cells) and delivers an *inhibitory* signal, not activating. This statement reverses both the location and the function of PD-1." },
      { "text": "CTLA-4 is expressed on tumor cells and directly inhibits perforin release.", "explanation": "Incorrect. CTLA-4 is expressed on T cells, not tumor cells, and it does not affect perforin release directly. The tumor-cell-expressed checkpoint ligand is PD-L1." },
      { "text": "PD-L1 is the receptor on cytotoxic T cells that binds CD80/86.", "explanation": "Incorrect. PD-L1 is a ligand expressed by tumor cells and other tissues; the receptor on T cells is PD-1. CD80/86 binds CTLA-4 (and CD28), not PD-L1." },
      { "text": "Both CTLA-4 and PD-1 act at the same step by directly killing the T cell through caspase activation.", "explanation": "Incorrect. Checkpoint receptors deliver inhibitory signals that dampen activation; they do not directly kill T cells via caspases. The drugs work by removing these inhibitory signals." },
      { "text": "CTLA-4 on T cells binds CD80/86, outcompeting CD28.", "explanation": "Correct. CTLA-4, expressed on activated T cells, acts as an 'off switch' early during T-cell priming in the lymph node by outcompeting the co-stimulatory receptor CD28 for binding to CD80/CD86 on antigen-presenting cells. Ipilimumab (and tremelimumab) block CTLA-4 to enhance T-cell activation and proliferation. PD-1 on peripheral T cells binds PD-L1 (often expressed by tumor cells), delivering an inhibitory signal that promotes T-cell exhaustion in the tumor microenvironment; pembrolizumab/nivolumab block PD-1 and atezolizumab blocks PD-L1." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "CTLA-4 = early off-switch during priming (lymph node); PD-1 / PD-L1 = late off-switch during effector phase (tumor). Combined CTLA-4 + PD-1 blockade is more effective but more toxic.",
    "pdfPage": 13,
    "pdfQuote": "CTLA-4 expressed on T cells acts as an off switch"
  },
  {
    "id": 11,
    "category": "Pharmacology: Imatinib-Induced Periorbital Edema and Rash",
    "questionText": "A 54-year-old man with chronic-phase Philadelphia-chromosome-positive chronic myeloid leukemia has been taking an oral targeted therapy for 8 weeks. He returns complaining of puffy eyelids that are most prominent in the morning and a mild acneiform rash on his back and chest. Physical exam confirms bilateral periorbital edema without erythema and scattered papulopustular lesions. CBC shows resolving leukocytosis. He has no jaundice and creatinine is normal. Which mechanism best explains his new symptoms?",
    "options": [
      { "text": "IgE-mediated type I hypersensitivity to a monoclonal antibody infused two weeks ago", "explanation": "Incorrect. This patient is on an oral CML therapy (a '-tinib'), not a monoclonal antibody infusion, and acute IgE hypersensitivity would present immediately during or shortly after infusion with urticaria, bronchospasm, or hypotension. This would be correct if the patient had developed dyspnea and hypotension during a first infusion of rituximab or cetuximab." },
      { "text": "Glomerular capillary injury producing nephrotic-range proteinuria and secondary hypoalbuminemia", "explanation": "Incorrect. While VEGF inhibitors can cause proteinuria, this patient's creatinine is normal, edema is localized to the periorbital region, and BCR-ABL TKIs are not classic causes of nephrotic syndrome. This would be correct if the patient were on bevacizumab and had 3+ proteinuria with hypoalbuminemia." },
      { "text": "Off-target inhibition of PDGFR and c-KIT in normal tissues by a tyrosine kinase inhibitor", "explanation": "Correct. Imatinib (and the other BCR-ABL TKIs) inhibit not only BCR-ABL but also PDGFR and c-KIT, which are required for normal homeostasis in skin and periorbital interstitial tissue. The result is the characteristic class toxicity of acneiform rash with desquamation and frequent periorbital edema. Mild rashes are managed with topical steroids; severe rashes may require dose reduction. This is a mechanism-related, predictable adverse effect, not an allergy." },
      { "text": "Tumor lysis syndrome with hyperuricemia and uric acid deposition in skin", "explanation": "Incorrect. Tumor lysis syndrome would present acutely after initiating treatment of a highly proliferative malignancy with hyperkalemia, hyperphosphatemia, hyperuricemia, hypocalcemia, and acute kidney injury — not periorbital edema with acneiform rash 8 weeks in. This would be correct in a Burkitt lymphoma patient 24-48 hours after first cytotoxic dose." },
      { "text": "Reactivation of latent hepatitis B virus with cholestatic skin findings", "explanation": "Incorrect. HBV reactivation is a particular concern with rituximab and other B-cell-depleting therapies, not BCR-ABL TKIs, and would manifest with elevated transaminases and jaundice rather than periorbital edema. This would be correct in a CD20-positive lymphoma patient with HBcAb positivity starting rituximab without screening." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Imatinib-induced periorbital edema and acneiform rash are class effects of BCR-ABL TKIs (off-target PDGFR/c-KIT inhibition) — manage rash with topical steroids, reduce dose if severe.",
    "pdfPage": 25,
    "pdfQuote": "Imatinib-induced periorbital edema occurs frequently"
  },
  {
    "id": 12,
    "category": "Pharmacology: Bevacizumab and Surgical Wound Dehiscence",
    "questionText": "A 62-year-old woman with metastatic colorectal cancer has been on a combination chemotherapy regimen that includes a monoclonal antibody. Three weeks ago she underwent an elective colostomy. Today, she presents with serosanguinous drainage from her surgical incision and on exam the wound edges have separated. Vitals: BP 168/96, HR 88, T 37.0 C. Urinalysis shows 2+ protein. Which mechanism best explains the wound-healing failure and her new hypertension?",
    "options": [
      { "text": "Neutralization of soluble VEGF-A impairing endothelial maintenance", "explanation": "Correct. Bevacizumab binds soluble VEGF-A and prevents it from activating endothelial VEGF receptors. Endothelial cells require VEGF signaling for nitric oxide-mediated vasodilation (loss → hypertension and proteinuria), for proliferation and migration into the wound bed (loss → impaired granulation tissue and wound dehiscence), and for maintaining vascular integrity (loss → hemorrhage and GI perforation). Bevacizumab should be held for several weeks before and after elective surgery for this reason." },
      { "text": "Inhibition of nucleotide biosynthesis in rapidly dividing fibroblasts", "explanation": "Incorrect. Antimetabolites such as 5-fluorouracil suppress fibroblast proliferation modestly but do not classically produce both hypertension and wound dehiscence. This would be more relevant to a question about 5-FU's effect on rapidly dividing GI mucosal cells (mucositis)." },
      { "text": "Constitutive immune activation by T cells recognizing surgical antigens", "explanation": "Incorrect. This describes the immune-related adverse events of checkpoint inhibitors (e.g., colitis, pneumonitis), not wound dehiscence with hypertension. This would be correct if the patient were on ipilimumab and developed colitis and hypophysitis." },
      { "text": "Stocking-glove sensory neuropathy from microtubule disruption", "explanation": "Incorrect. Peripheral neuropathy from taxanes or vincristine does not impair wound healing or cause hypertension. This would be correct for a patient on paclitaxel reporting numb fingertips and toes." },
      { "text": "Off-target inhibition of HER2 signaling in cardiomyocytes", "explanation": "Incorrect. HER2 blockade produces a cardiomyopathy with decreased LVEF, not wound dehiscence or hypertension. This would be correct in a HER2-positive breast cancer patient on trastuzumab developing dyspnea and orthopnea." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Anti-VEGF (bevacizumab) impairs endothelial function: hypertension, proteinuria, hemorrhage, and wound dehiscence are predictable — hold the drug 4-6 weeks around surgery.",
    "pdfPage": 32,
    "pdfQuote": "Wound dehiscence (separation of previously closed wound)"
  },
  {
    "id": 13,
    "category": "Pharmacology: Trastuzumab and Anthracycline Cardiotoxicity",
    "questionText": "A 48-year-old woman with HER2-positive invasive ductal breast carcinoma has been on a regimen that included doxorubicin and cyclophosphamide followed by a taxane plus a monoclonal antibody targeting HER2. After 6 months she develops progressive dyspnea on exertion, bilateral lower-extremity edema, and orthopnea. Vitals: BP 110/70, HR 104, RR 22, O2 sat 92% on room air. Exam reveals bibasilar crackles and an S3 gallop. Echocardiogram shows LVEF of 35% (baseline 60%). Which mechanism best explains her cardiac dysfunction?",
    "options": [
      { "text": "Acute coronary thrombosis from a hypercoagulable state induced by VEGF blockade", "explanation": "Incorrect. Her chemotherapy regimen does not include a VEGF inhibitor, and the presentation is congestive heart failure rather than acute coronary syndrome. This would be correct in a patient on bevacizumab presenting with chest pain and ST-elevation MI." },
      { "text": "Blockade of HER2 signaling needed for cardiomyocyte survival", "explanation": "Correct. HER2 (ERBB2) signaling is essential for cardiomyocyte survival under stress. Trastuzumab disrupts this protective pathway, producing decreased LVEF and overt heart failure. The risk is markedly amplified when given concurrently with or after anthracyclines such as doxorubicin, which independently injure cardiomyocytes through reactive oxygen species and topoisomerase-IIb mediated DNA damage. Baseline cardiac assessment and serial LVEF monitoring are required. Trastuzumab cardiotoxicity is often reversible if caught early." },
      { "text": "Hypersensitivity myocarditis from cumulative paclitaxel exposure", "explanation": "Incorrect. Paclitaxel hypersensitivity occurs acutely during infusion (cremophor vehicle), not as a delayed cardiomyopathy. This would be correct if the patient had developed urticaria and bronchospasm minutes into her first taxane infusion." },
      { "text": "Constrictive pericarditis from cyclophosphamide-induced fibrosis", "explanation": "Incorrect. High-dose cyclophosphamide can cause hemorrhagic myocarditis, but routine doses do not cause constrictive pericarditis; the clinical picture and S3 gallop with low EF fit cardiomyopathy, not constriction. This would be correct in a patient with elevated JVP, Kussmaul sign, and pericardial knock after high-dose conditioning chemotherapy." },
      { "text": "Tako-tsubo (stress) cardiomyopathy precipitated by emotional distress of cancer diagnosis", "explanation": "Incorrect. Tako-tsubo produces apical ballooning and typically recovers within weeks; it is not linked to trastuzumab and would not be expected after 6 months of therapy. This would be correct in a patient with acute emotional trigger and a characteristic apical ballooning pattern on echo." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Trastuzumab + anthracyclines = additive cardiotoxicity. Always check baseline LVEF and monitor; the cardiomyopathy is often reversible if the drug is held in time.",
    "pdfPage": 39,
    "pdfQuote": "Decreased left ventricular ejection fraction and congestive heart failure"
  },
  {
    "id": 14,
    "category": "Pharmacology: Rituximab and HBV Reactivation Screening",
    "questionText": "A 67-year-old man with newly diagnosed CD20-positive diffuse large B-cell lymphoma is about to begin standard combination immunochemotherapy that includes a monoclonal antibody targeting B-cell surface protein, cyclophosphamide, doxorubicin, vincristine, and prednisone. His past medical history is notable for a remote injection-drug use. Routine pre-treatment laboratories show normal LFTs but positive hepatitis B core antibody (anti-HBc) with a detectable HBV-DNA level. Which complication is he at greatest risk for if antiviral prophylaxis is not initiated before this therapy?",
    "options": [
      { "text": "Acute hemorrhagic cystitis from acrolein metabolite accumulation", "explanation": "Incorrect. Hemorrhagic cystitis is a cyclophosphamide adverse effect mitigated by hydration and mesna, unrelated to HBV serology. This would be correct in a patient receiving high-dose cyclophosphamide without adequate prophylaxis." },
      { "text": "Vincristine-induced ascending paralysis from cumulative axonal toxicity", "explanation": "Incorrect. Vincristine causes a length-dependent peripheral sensorimotor neuropathy, not ascending paralysis, and is unrelated to hepatitis B status. This would be correct if the patient developed progressive distal paresthesias and footdrop on therapy." },
      { "text": "Progressive multifocal leukoencephalopathy from JC virus reactivation within 48 hours of first dose", "explanation": "Incorrect. PML is a recognized but very rare and typically late complication of rituximab, with onset over months, not hours, and is not the dominant infectious risk in this patient with documented HBV exposure. This would be correct in a long-term rituximab patient developing subacute hemiparesis and aphasia." },
      { "text": "Reactivation of hepatitis B virus with fulminant hepatic failure", "explanation": "Correct. B-cell depleting therapy with anti-CD20 monoclonal antibodies (rituximab and others) removes the immune control of latent HBV. Patients with prior HBV exposure (anti-HBc positive, with or without HBsAg) can experience reactivation, which can progress to acute hepatitis, hepatic decompensation, and fulminant liver failure. All patients should be screened for HBV before rituximab; high-risk populations should also be screened for TB, HCV, and HIV. Antiviral prophylaxis (e.g., entecavir or tenofovir) is started before and continued during/after therapy." },
      { "text": "Tumor lysis syndrome producing hyperkalemia and acute kidney injury 24 hours after the first infusion", "explanation": "Incorrect. While tumor lysis syndrome can complicate treatment of bulky CD20+ lymphoma, the specific risk highlighted by this patient's HBV serology is HBV reactivation. Tumor lysis would be addressed with hydration, rasburicase or allopurinol — not antiviral prophylaxis. This would be correct in a patient with rapidly progressive lymphoma and rising LDH after first dose." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Screen all rituximab candidates for HBV (HBsAg, anti-HBc) — reactivation can be fulminant. Add antiviral prophylaxis (entecavir/tenofovir) if anti-HBc positive.",
    "pdfPage": 47,
    "pdfQuote": "Reactivation of latent HBV infection"
  },
  {
    "id": 15,
    "category": "Pharmacology: Bortezomib Peripheral Neuropathy",
    "questionText": "A 64-year-old man with newly diagnosed multiple myeloma is receiving a standard three-drug induction regimen consisting of a parenteral proteasome inhibitor, an oral immunomodulatory imide, and dexamethasone. After three cycles he reports symmetric burning pain and numbness in his toes that has progressed to his ankles, with similar sensations in his fingertips. He denies weakness. On exam, vibratory sensation is decreased in the feet and ankle reflexes are absent. Which agent in his regimen most likely accounts for his new symptoms, and through what mechanism?",
    "options": [
      { "text": "Dexamethasone-induced peripheral neuropathy from chronic hyperglycemia and microvascular injury", "explanation": "Incorrect. Although chronic glucocorticoid use can worsen pre-existing diabetic neuropathy, dexamethasone is not the primary cause of stocking-glove peripheral neuropathy emerging acutely during myeloma induction. This would be more relevant in a long-term steroid user with poorly controlled diabetes." },
      { "text": "Lenalidomide cereblon binding directly damaging myelin sheaths of peripheral nerves", "explanation": "Incorrect. Lenalidomide can cause peripheral neuropathy but less commonly than bortezomib, and its mechanism does not involve direct myelin destruction. Thalidomide is more strongly associated with sensory neuropathy in this class. In this vignette, bortezomib is the most likely culprit." },
      { "text": "Daratumumab-induced complement-dependent cytotoxicity against Schwann cells", "explanation": "Incorrect. Daratumumab targets CD38 on plasma cells and is not the regimen component implicated; its hallmark toxicities are infusion reactions, bone marrow suppression, and infection reactivation rather than peripheral neuropathy. This would be correct only if the question described an autoimmune neuropathy in a patient without bortezomib exposure." },
      { "text": "Cumulative anthracycline exposure causing axonal demyelination", "explanation": "Incorrect. Doxorubicin is not part of the VRd regimen described and does not characteristically cause peripheral neuropathy. This would be correct in a lymphoma patient on R-CHOP developing cardiomyopathy, not in this myeloma vignette." },
      { "text": "Proteasome inhibition in dorsal root ganglion neurons", "explanation": "Correct. Bortezomib is well known to cause a distal, symmetric, predominantly sensory ('stocking-glove') peripheral neuropathy, sometimes with mixed sensorimotor features. The mechanism involves proteasome inhibition in dorsal root ganglion neurons with accumulation of misfolded ubiquitinated proteins, mitochondrial dysfunction, and disruption of axonal transport. Subcutaneous dosing and weekly schedules reduce — but do not eliminate — this risk. Carfilzomib substitutes are associated with less neuropathy but more cardiovascular and renal toxicity." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Bortezomib → painful, stocking-glove sensory (or mixed) peripheral neuropathy. Carfilzomib spares the nerves but raises cardiac and renal risk.",
    "pdfPage": 56,
    "pdfQuote": "Peripheral neuropathy, sensory (stocking-glove)"
  },
  {
    "id": 16,
    "category": "Pharmacology: Checkpoint Inhibitor Colitis",
    "questionText": "A 58-year-old woman with metastatic melanoma is enrolled in an immunotherapy protocol using an anti-CTLA-4 monoclonal antibody combined with an anti-PD-1 antibody. Six weeks into therapy she develops 8-10 watery, sometimes bloody bowel movements per day, crampy abdominal pain, and a low-grade fever. Vitals: T 38.1 C, HR 108, BP 102/64. Exam shows diffuse abdominal tenderness without rebound. Stool studies are negative for C. difficile, Salmonella, and Shigella. Colonoscopy reveals diffuse erythema, friability, and patchy ulcerations. Which mechanism best explains her clinical presentation?",
    "options": [
      { "text": "Direct cytotoxic injury to colonic crypt cells by an oral antimetabolite", "explanation": "Incorrect. Antimetabolite-induced mucositis (e.g., 5-fluorouracil) can cause diarrhea, but this patient is on immunotherapy, not an antimetabolite, and the inflammatory ulcerative findings on colonoscopy are characteristic of immune-mediated colitis. This would be correct in a colorectal cancer patient on 5-FU presenting with mucositis." },
      { "text": "Reactivation of latent cytomegalovirus from B-cell depletion", "explanation": "Incorrect. CMV colitis can occur in profoundly immunosuppressed patients (e.g., transplant or HIV/AIDS), but checkpoint inhibitors do not deplete B cells — they activate T cells. Stool studies and biopsy findings in this vignette are consistent with immune-related colitis rather than CMV. This would be correct in a transplant patient with characteristic owl-eye intranuclear inclusions on biopsy." },
      { "text": "T-cell-mediated autoimmune inflammation of colonic mucosa", "explanation": "Correct. Checkpoint inhibitor therapy removes the normal brakes on cytotoxic T-cell activation, and the trade-off is immune-related adverse events affecting essentially any organ. Colitis is one of the most common — and most dangerous — of these, with diarrhea, abdominal pain, and ulcerative inflammation that mimics inflammatory bowel disease. Immune-related adverse events are more frequent and severe with CTLA-4 inhibition than with PD-1/PD-L1 inhibition alone, and combination therapy compounds the risk. Management requires early recognition, holding the drug, and treating with high-dose glucocorticoids — escalating to infliximab if refractory." },
      { "text": "Microvascular thrombosis from VEGF blockade causing ischemic colitis", "explanation": "Incorrect. The regimen does not include a VEGF inhibitor, and the colonoscopy findings (diffuse inflammation and ulceration) are not those of ischemic colitis, which classically involves the watershed splenic flexure. This would be correct in a bevacizumab patient with focal ischemic mucosa in the descending colon." },
      { "text": "Lactose intolerance unmasked by mucosal atrophy from glucocorticoid therapy", "explanation": "Incorrect. This patient has not received glucocorticoids, and lactase deficiency does not produce bloody stools, fever, or endoscopic ulceration. This would be correct in a patient with watery diarrhea after dairy ingestion and normal colonoscopy." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Immune-related colitis is the most common serious irAE with CTLA-4 blockade. Early recognition + hold drug + high-dose steroids; infliximab if steroid-refractory.",
    "pdfPage": 65,
    "pdfQuote": "Immune-related adverse events are more common with CTLA-4"
  },
  {
    "id": 17,
    "category": "Pharmacology: Checkpoint Inhibitor Hypophysitis",
    "questionText": "A 71-year-old man with metastatic non-small-cell lung cancer has been on an immune checkpoint inhibitor for 12 weeks. He presents with 4 weeks of severe persistent headaches, fatigue, nausea, and decreased libido. Vitals: BP 96/58, HR 96, T 36.2 C. Labs: Na 128 mEq/L, K 4.2, glucose 64 mg/dL, AM cortisol 1.8 ug/dL (low), ACTH undetectable, TSH 0.3 mIU/L with free T4 0.5 ng/dL (low). MRI of the pituitary shows diffuse enlargement and homogeneous enhancement of the gland and stalk. Which mechanism best explains his endocrine derangement?",
    "options": [
      { "text": "T-cell mediated autoimmune hypophysitis", "explanation": "Correct. Inflammation of endocrine glands — pituitary (hypophysitis), thyroid, and adrenal — is a characteristic immune-related adverse event of checkpoint inhibitors, more common with CTLA-4 inhibition. T-cell infiltration produces gland enlargement followed by failure. Hypophysitis presents with severe persistent headache, central hypocortisolism (low ACTH, low cortisol), central hypothyroidism (low TSH, low T4), and hypogonadism. Treatment is glucocorticoid replacement for the deficiencies (often permanent) and high-dose steroids if needed; immune checkpoint inhibitor therapy may be continued or held depending on severity." },
      { "text": "Pituitary metastasis from primary lung adenocarcinoma compressing portal vessels", "explanation": "Incorrect. While pituitary metastasis is possible, the diffuse symmetric enlargement and homogeneous enhancement on MRI in a patient on checkpoint inhibitor therapy strongly favor hypophysitis. A metastatic lesion typically appears as a focal mass. This would be correct if MRI showed a focal lesion with bony destruction." },
      { "text": "Direct compression of the optic chiasm by tumor lysis edema", "explanation": "Incorrect. The presentation is endocrine failure, not visual loss from chiasmal compression, and tumor lysis would not produce gradual pan-hypopituitarism. This would be correct if the patient had bitemporal hemianopia and acute pituitary apoplexy." },
      { "text": "Renal salt wasting from VEGF-induced glomerular injury", "explanation": "Incorrect. The patient is on a checkpoint inhibitor, not a VEGF inhibitor, and the constellation of low cortisol, low TSH, and low T4 indicates central endocrine failure, not isolated renal salt wasting. This would be correct in a bevacizumab patient with proteinuria and isolated hyponatremia." },
      { "text": "Steroid-induced suppression of the hypothalamic-pituitary-adrenal axis", "explanation": "Incorrect. There is no indication that this patient is on chronic glucocorticoids, and exogenous steroid suppression typically presents with low ACTH but normal-sized pituitary, not the enlarged gland seen here. This would be correct in a patient on long-term high-dose prednisone." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "ICI hypophysitis = headache + central hypocortisolism + central hypothyroidism + enlarged pituitary on MRI. Endocrine deficits are often permanent; replace hormones.",
    "pdfPage": 65,
    "pdfQuote": "Inflammation of the pituitary (hypophysitis)"
  },
  {
    "id": 18,
    "category": "Pharmacology: CAR-T Cytokine Release Syndrome",
    "questionText": "A 22-year-old man with relapsed B-cell acute lymphoblastic leukemia receives an infusion of autologous T cells that have been ex vivo engineered to express a chimeric antigen receptor targeting CD19. Five days later, he develops fever to 40.1 C, hypotension (BP 78/40), tachycardia, hypoxia requiring supplemental oxygen, and confusion. Labs show ferritin >10,000 ng/mL, markedly elevated IL-6, and rising creatinine and transaminases. Which pathophysiologic process best explains his presentation?",
    "options": [
      { "text": "Type I IgE-mediated anaphylaxis to the murine antibody fragment in the CAR construct", "explanation": "Incorrect. While anti-CAR immunogenicity exists, the constellation of high fever, IL-6 elevation, multi-organ involvement, and onset days after infusion is characteristic of cytokine release syndrome, not anaphylaxis (which would occur within minutes and present with urticaria/bronchospasm). This would be correct if the reaction occurred during the infusion itself with hives." },
      { "text": "Reactivation of latent CMV producing disseminated viremia", "explanation": "Incorrect. CMV reactivation does occur in heavily immunosuppressed patients but typically presents as colitis, pneumonitis, or retinitis without the explosive cytokine pattern and very high ferritin seen here. This would be correct in a stem-cell transplant recipient with CMV antigenemia and pneumonitis." },
      { "text": "Tumor lysis syndrome from rapid leukemic cell death after CAR-T engagement", "explanation": "Incorrect. Tumor lysis can occur but produces hyperuricemia, hyperkalemia, hyperphosphatemia, hypocalcemia, and acute kidney injury — not the cytokine-driven shock physiology and IL-6 surge characteristic of CRS. This would be correct in a Burkitt or ALL patient with rising potassium and urate within the first 1-2 days of cytotoxic therapy." },
      { "text": "Massive cytokine release from activated engineered T cells", "explanation": "Correct. Cytokine release syndrome (CRS) is the signature acute toxicity of CAR-T therapy. Engineered T cells engaging their target antigen become rapidly activated and proliferate, releasing large amounts of IFN-gamma, TNF-alpha, and especially IL-6, which in turn activate macrophages and amplify the response. The result is a sepsis-like picture with fever, hypotension, hypoxia, capillary leak, multi-organ dysfunction, and characteristically very high ferritin. Onset is typically 1-22 days post-infusion. Management is supportive care plus tocilizumab (IL-6 receptor antagonist) and/or glucocorticoids for severe disease. Patients are monitored for at least 4 weeks after CAR-T administration." },
      { "text": "Septic shock from neutropenic gut translocation of gram-negative bacteria", "explanation": "Incorrect. Although CAR-T patients can become neutropenic and develop sepsis, the timing 5 days after infusion with very high IL-6 and ferritin is classic for CRS, and stool/blood cultures would be expected to be negative initially. This would be correct in a febrile neutropenic patient with documented bacteremia and clear infectious source." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "CAR-T cytokine release syndrome = sepsis-like fever + hypotension + very high ferritin + IL-6. Treat with tocilizumab (anti-IL-6R) ± steroids; monitor at least 4 weeks.",
    "pdfPage": 67,
    "pdfQuote": "Acute systemic inflammatory syndrome"
  },
  {
    "id": 19,
    "category": "Pharmacology: CAR-T ICANS Neurotoxicity",
    "questionText": "A 56-year-old woman with relapsed diffuse large B-cell lymphoma receives CD19-directed CAR-T therapy. On day 7 she initially appears well, but on day 10 her nurse notes she has become confused, with slurred speech and inability to write a coherent sentence. Over the next 12 hours she develops tremor, brief generalized seizure, and progressive obtundation. CT head is unremarkable; lumbar puncture shows mildly elevated protein; EEG shows generalized slowing. She is afebrile and normotensive. Which mechanism best explains her neurologic deterioration?",
    "options": [
      { "text": "Ischemic stroke from anti-VEGF mediated thromboembolism", "explanation": "Incorrect. CAR-T therapy does not block VEGF, and the clinical syndrome (encephalopathy with tremor, seizure, language dysfunction, normal CT) is not consistent with a focal vascular event. This would be correct in a bevacizumab patient with sudden focal hemiparesis and infarct on imaging." },
      { "text": "Progressive multifocal leukoencephalopathy from JC virus reactivation", "explanation": "Incorrect. PML produces focal subacute deficits with characteristic white-matter lesions on MRI over weeks to months, not the abrupt encephalopathy and seizures seen here on day 10 post-CAR-T. This would be correct in a long-term rituximab or natalizumab patient with progressive hemiparesis and white-matter lesions on MRI." },
      { "text": "Methotrexate-induced leukoencephalopathy", "explanation": "Incorrect. The patient has not received methotrexate, and the temporal association is clearly with CAR-T infusion. This would be correct in a leukemia patient with high-dose intrathecal methotrexate developing stroke-like episodes." },
      { "text": "CNS infiltration by relapsed lymphoma", "explanation": "Incorrect. While CNS relapse is possible, the timing exactly aligned with CAR-T administration and the EEG/LP findings without focal mass effect point to ICANS rather than tumor recurrence. This would be correct if MRI showed leptomeningeal enhancement and CSF cytology showed malignant lymphocytes." },
      { "text": "Immune effector cell-associated neurotoxicity syndrome (ICANS)", "explanation": "Correct. ICANS is the second hallmark CAR-T toxicity, occurring in 20-70% of patients with onset days to weeks after infusion. The pathophysiology involves systemic inflammatory cytokines (especially from CRS) disrupting the blood-brain barrier and producing CNS inflammation, plus passive transfer of CAR-T cells into the CSF. Clinical features progress from a characteristic expressive aphasia and impaired handwriting to confusion, tremor, seizures, cerebral edema, coma, and death. Treatment is supportive care, high-dose glucocorticoids (which cross the BBB better than tocilizumab), antiseizure prophylaxis, and ICU monitoring." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "ICANS = expressive aphasia → confusion → seizures → coma days to weeks after CAR-T. Steroids cross the BBB; tocilizumab does not, so steroids are first-line for ICANS.",
    "pdfPage": 67,
    "pdfQuote": "Immune effector cell neurotoxicity syndrome"
  },
  {
    "id": 20,
    "category": "Pharmacology: Multiple Myeloma VRd Regimen",
    "questionText": "A 65-year-old man presents with new bone pain, fatigue, and is found to have an IgG kappa monoclonal protein, 40% clonal plasma cells in bone marrow, lytic lesions on skeletal survey, hemoglobin 9.2 g/dL, calcium 11.6 mg/dL, and creatinine 1.8 mg/dL. He is classified as standard-risk multiple myeloma and started on the preferred initial three-drug induction regimen. Which combination of drugs constitutes this standard 'VRd' regimen?",
    "options": [
      { "text": "Vincristine, rituximab, and doxorubicin", "explanation": "Incorrect. This is a lymphoma-style combination, not the standard myeloma induction. Rituximab targets CD20, which is *absent* on terminally differentiated plasma cells, so it has no role in myeloma. This would be correct in a CD20-positive B-cell lymphoma." },
      { "text": "Bortezomib, lenalidomide, and dexamethasone", "explanation": "Correct. VRd is the standard initial induction regimen for newly diagnosed standard-risk multiple myeloma: bortezomib (Velcade) — a proteasome inhibitor that prevents NF-kB activation in myeloma cells; lenalidomide (Revlimid) — an IMiD that binds cereblon and triggers proteasomal degradation of IKZF1/3 transcription factors; and dexamethasone — a glucocorticoid that directly induces apoptosis in myeloma cells. For high-risk transplant-eligible patients, daratumumab (anti-CD38) is added (DVRd)." },
      { "text": "Vinblastine, ribociclib, and decitabine", "explanation": "Incorrect. Ribociclib is a CDK4/6 inhibitor used for HR-positive HER2-negative breast cancer; decitabine is a hypomethylating agent for MDS/AML. Neither belongs in myeloma induction. This would be the wrong combination for any standard regimen." },
      { "text": "Venetoclax, rituximab, and daunorubicin", "explanation": "Incorrect. Venetoclax is a BCL-2 inhibitor used in CLL and AML (not myeloma standard induction), and rituximab does not work in myeloma because plasma cells lack CD20. This would be relevant to CLL therapy, not multiple myeloma." },
      { "text": "Vincristine, ruxolitinib, and dasatinib", "explanation": "Incorrect. Ruxolitinib is a JAK inhibitor for myelofibrosis/polycythemia vera, and dasatinib is a BCR-ABL inhibitor for CML. Neither is a myeloma drug. This would be a nonsensical regimen for multiple myeloma." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "VRd = bortezomib (V, proteasome inhibitor) + lenalidomide (R, IMiD) + dexamethasone (d). For high-risk transplant-eligible patients, add daratumumab (anti-CD38) → DVRd.",
    "pdfPage": 50,
    "pdfQuote": "VRd or DRd"
  }
];
