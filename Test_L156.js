// Thinking Process:
// 1. High-Yield Concept: This lecture covers conventional cytotoxic chemotherapy. Core concepts include (a) cell-cycle phase specificity and the central role of intact p53/MMR/apoptosis machinery for cell death, (b) class mechanisms of alkylators, platinums, antimetabolites (folate, fluoropyrimidine, cytidine, purine), antitumor antibiotics (anthracyclines), microtubule agents (vincas, taxanes), and topoisomerase inhibitors (camptothecins, etoposide), and (c) the dose-limiting / signature toxicities that the lecturer repeatedly emphasized: cisplatin nephrotoxicity, carboplatin myelosuppression, oxaliplatin cold-triggered neuropathy, anthracycline cumulative cardiomyopathy, cyclophosphamide hemorrhagic cystitis (acrolein -> mesna), vincristine neuropathy/constipation, paclitaxel neuropathy, irinotecan diarrhea (UGT1A1*28), bleomycin lung, 5-FU hand-foot/coronary vasospasm/DPD deficiency, methotrexate rescue with leucovorin, cytarabine cerebellar toxicity, 6-MP + allopurinol interaction, and sequencing rules (T before P; A before T).
// 2. The "Trap": Vignettes describe an adverse-effect pattern or mechanism without naming the drug. Buzzword "matching" distractors (e.g., "cisplatin" answer when the vignette is really anthracycline cardiotoxicity, or "vincristine" when constipation IS the answer but mechanism is wrong) force second-step reasoning. Sequencing questions exploit reflexive "alphabetize" thinking.
// 3. Key Distractor: Confusing drug-class signatures (myelosuppression vs nephrotoxicity vs neuropathy vs cardiotoxicity); confusing taxane vs vinca mechanism (stabilize vs prevent polymerization); confusing topo-I vs topo-II inhibitors; confusing MTX rescue vs FOLFOX leucovorin role.
// 4. Vignette Strategy: Pin down the diagnosis with specifics (cumulative anthracycline dose w/ LV dysfunction; cold-triggered acral paresthesias = oxaliplatin; gross hematuria on high-dose IV pulse with bladder mucosal irritation = cyclophosphamide acrolein; rising creatinine post-cisplatin; cerebellar ataxia post-high-dose cytarabine; severe diarrhea after FOLFIRI w/ UGT1A1 polymorphism; allopurinol + 6-MP interaction in ALL prophylaxis). Include realistic vitals and labs where useful.
//
// PDF Mapping Check: Found
// PDF Filename: Lecture # 156. L. Goldstein, Pharm.D. (PPT).pdf
// Mapping Key: 17-Pharmacology: Antineoplastic Agents 1 (L156)
// Status: Verified

window.Test_L156 = [
  {
    "id": 1,
    "category": "Pharmacology: Cell Cycle & Apoptosis",
    "questionText": "A 54-year-old man with chronic lymphocytic leukemia is given a single-agent cytotoxic drug that creates DNA adducts but produces minimal tumor response after several cycles. Genomic sequencing of his tumor reveals a biallelic TP53 mutation. Which cellular event is most directly impaired in his tumor cells, allowing them to escape the drug's effect?",
    "options": [
      { "text": "Recognition of the DNA adduct by mismatch repair proteins", "explanation": "Incorrect. MMR proteins like MSH2 and MLH1 recognize the lesion and create strand breaks; the lecturer noted recognition is the first step but TP53 mutation does not abolish this step. This would be the correct answer if the tumor demonstrated loss of MLH1 expression rather than a TP53 mutation." },
      { "text": "Triggering of the apoptotic pathway downstream of DNA damage", "explanation": "Correct. The lecturer repeatedly stressed that cytotoxic chemotherapy requires functional p53 (and other checkpoint proteins) to convert recognized DNA damage into apoptosis. Without p53, recognition and even some repair signaling can still occur, but the damaged cell fails to commit to apoptosis and proceeds through S phase and mitosis. This is a major reason single agents fail and why combination regimens with overlapping mechanisms are required to overwhelm tumor repair capacity." },
      { "text": "Influx of the drug through nucleoside or copper transporters", "explanation": "Incorrect. Transporter expression governs intracellular drug accumulation, not the apoptotic decision step. This would be the correct answer if resistance was due to loss of CTR1 (cisplatin) or reduced folate carrier (methotrexate)." },
      { "text": "Cross-linking between adjacent guanine residues in DNA", "explanation": "Incorrect. Adduct formation is a chemical step driven by the drug, not the host cell; it occurs whether p53 is present or absent. This would be the correct answer if the tumor expressed an altered glutathione system that neutralized the alkylating intermediate before it reached DNA." },
      { "text": "Activation of the G2/M checkpoint by ATM/ATR kinases", "explanation": "Incorrect. ATM/ATR checkpoint signaling can still occur with mutated p53, although downstream apoptosis fails; the lecturer focused on apoptosis commitment as the missing step. This would be the correct answer if the patient had an ATM-deficient lymphoma rather than a TP53 mutation." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Conventional cytotoxic chemotherapy ultimately kills cells via apoptosis. Tumors with mutated or absent p53 (or other defective checkpoint proteins) accumulate DNA damage but fail to die — a key mechanism of intrinsic drug resistance and a reason combination regimens are used.",
    "pdfPage": 13,
    "pdfQuote": "p53 gene product or other checkpoint proteins are mutated"
  },
  {
    "id": 2,
    "category": "Pharmacology: Alkylating Agents",
    "questionText": "Which step is the central cytotoxic event by which a cell-cycle nonspecific chemotherapy class produces DNA damage that triggers apoptosis?",
    "options": [
      { "text": "Stabilization of microtubule polymers preventing depolymerization", "explanation": "Incorrect. This is the taxane mechanism, which targets the M phase of the cell cycle and is not cell-cycle nonspecific. This would be the correct answer if the question described an agent producing mitotic arrest in metaphase." },
      { "text": "Inhibition of topoisomerase II stabilizing a cleavable complex", "explanation": "Incorrect. This is the mechanism of anthracyclines and epipodophyllotoxins, not the alkylators. This would be the correct answer if the agent caused irreversible double-strand breaks via a drug–DNA–topoisomerase ternary complex." },
      { "text": "Incorporation of a fluorinated nucleotide into RNA disrupting mRNA processing", "explanation": "Incorrect. This describes 5-fluorouracil, an S-phase antimetabolite, not a cell-cycle nonspecific alkylator. This would be the correct answer if the vignette described a thymidylate-synthase-blocking pyrimidine analog." },
      { "text": "Nucleophilic attack on N7 guanine producing DNA cross-links", "explanation": "Correct. Alkylating agents transfer an alkyl group, most commonly to the N7 position of guanine, producing inter- and intrastrand cross-links, abnormal base pairing, miscoding, and strand breakage. The damage is then recognized by the mismatch-repair pathway, which generates strand breaks during attempted repair; these unrepairable lesions activate p53-driven apoptosis. Because they damage DNA independently of replication, alkylators work in every phase of the cell cycle." },
      { "text": "Generation of iron-dependent semiquinone free radicals oxidizing DNA bases", "explanation": "Incorrect. Free-radical generation is a hallmark of anthracyclines (and bleomycin), not classic alkylators. This would be the correct answer if the drug also caused cumulative cardiomyopathy." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Alkylators (e.g., cyclophosphamide, ifosfamide) are cell-cycle NONspecific. They alkylate N7 of guanine, producing cross-links whose recognition by intact MMR/p53 machinery is what triggers apoptosis.",
    "pdfPage": 19,
    "pdfQuote": "Nucleophilic attack of unstable aziridine ring"
  },
  {
    "id": 3,
    "category": "Pharmacology: Alkylating Agents",
    "questionText": "An oral alkylating prodrug is activated by hepatic CYP2B6 through 4-hydroxylation; its active metabolite alkylates DNA, while a separate byproduct concentrates in the urinary bladder and damages the urothelium. Which molecule is the urotoxic byproduct, and what is the appropriate co-administered protective agent?",
    "options": [
      { "text": "Phosphoramide mustard; leucovorin", "explanation": "Incorrect. Phosphoramide mustard is the ANTITUMOR active metabolite, not the urotoxic species, and leucovorin rescues methotrexate or potentiates 5-FU. This would be the correct answer if the question asked which metabolite produces the cytotoxic effect on the tumor." },
      { "text": "Aldophosphamide; allopurinol", "explanation": "Incorrect. Aldophosphamide is an intermediate that is converted either to active drug or to acrolein; allopurinol prevents tumor lysis hyperuricemia and is not bladder protective. This would be the correct answer if the question described prophylaxis against urate nephropathy from massive tumor cell lysis." },
      { "text": "Acrolein; mesna with vigorous hydration", "explanation": "Correct. Cyclophosphamide (and ifosfamide) generate acrolein, an α,β-unsaturated aldehyde that is excreted in urine and directly damages bladder urothelium causing hemorrhagic cystitis. Mesna (sodium 2-mercaptoethanesulfonate) provides a free sulfhydryl that conjugates and inactivates acrolein in the urine; aggressive saline hydration further dilutes the toxic metabolite. The lecturer emphasized this is the prototypical drug-toxin → antidote relationship for urotoxicity." },
      { "text": "Carboxyphosphamide; amifostine", "explanation": "Incorrect. Carboxyphosphamide is the INACTIVE detoxified product of aldehyde dehydrogenase action and is not toxic; amifostine is a free-radical scavenger used for cisplatin nephroprotection. This would be the correct answer if the question described inactive metabolite produced when ALDH overexpression confers resistance." },
      { "text": "4-Ketocyclophosphamide; N-acetylcysteine", "explanation": "Incorrect. 4-Ketocyclophosphamide is an inactive metabolite of cyclophosphamide, and N-acetylcysteine is used for acetaminophen toxicity (not chemotherapy urotoxicity). This would be the correct answer if the patient had hepatic failure from acetaminophen overdose." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Acrolein causes cyclophosphamide/ifosfamide hemorrhagic cystitis. Mesna's free sulfhydryl conjugates acrolein in the urine — coupled with vigorous IV hydration, it sharply reduces this dose-limiting urotoxicity.",
    "pdfPage": 25,
    "pdfQuote": "Mesna conjugates and inactivates acrolein"
  },
  {
    "id": 4,
    "category": "Pharmacology: Platinum Analogs",
    "questionText": "A platinum-based anticancer drug is taken up by tumor cells largely through the CTR1 copper transporter, then activated by aquation that allows it to attack the N7 of guanine and form intrastrand crosslinks. Which mechanism is the PREDOMINANT cause of acquired resistance to this class?",
    "options": [
      { "text": "Decreased intracellular drug accumulation due to reduced uptake", "explanation": "Correct. The lecturer specifically called decreased uptake (downregulation/decreased expression of CTR1) the PREDOMINANT mechanism of resistance to platinum analogs, although efflux via ATP7A/ATP7B, inactivation by glutathione/metallothionein, and enhanced DNA repair also contribute. Because the drug is a metal that enters via copper machinery, the copper transport system dominates pharmacokinetics inside the tumor cell." },
      { "text": "Increased expression of aldehyde dehydrogenase metabolizing the active drug", "explanation": "Incorrect. ALDH-mediated detoxification is the resistance mechanism for cyclophosphamide/ifosfamide (it inactivates aldophosphamide), not platinum drugs. This would be the correct answer if the question described a CYP-activated alkylating prodrug." },
      { "text": "Mutation of β-tubulin reducing drug binding affinity", "explanation": "Incorrect. β-tubulin mutation is a resistance mechanism for vinca alkaloids and taxanes, not platinum drugs. This would be the correct answer if the resistant tumor failed therapy with a microtubule-targeting agent." },
      { "text": "Loss of UGT1A1 activity preventing glucuronidation of the active metabolite", "explanation": "Incorrect. UGT1A1 polymorphism affects irinotecan/SN-38 toxicity, not platinum resistance. This would be the correct answer if a patient developed severe diarrhea after the IRI component of FOLFIRI." },
      { "text": "Overexpression of dihydrofolate reductase with reduced drug affinity", "explanation": "Incorrect. Altered DHFR is a methotrexate resistance mechanism. This would be the correct answer if the resistant tumor had failed an antifolate antimetabolite." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Cisplatin/carboplatin/oxaliplatin enter cells primarily via the CTR1 copper transporter. Downregulation of CTR1 (and upregulation of ATP7A/B copper efflux pumps) is the dominant pharmacokinetic basis of platinum resistance.",
    "pdfPage": 30,
    "pdfQuote": "Decreased uptake is the predominant mechanism"
  },
  {
    "id": 5,
    "category": "Pharmacology: Antimetabolites",
    "questionText": "A patient with high-risk childhood acute lymphoblastic leukemia receives a high-dose intravenous infusion of an antifolate. To prevent severe bone-marrow and mucosal toxicity, the team plans a rescue agent ~24 hours later. Which substance is given for the rescue, and why does it work?",
    "options": [
      { "text": "Mesna, because it conjugates the toxic aldehyde produced by the drug", "explanation": "Incorrect. Mesna conjugates acrolein from cyclophosphamide/ifosfamide and has no role with methotrexate. This would be the correct answer if the rescue was being given for hemorrhagic cystitis prophylaxis." },
      { "text": "Allopurinol, because it inhibits xanthine oxidase and prevents tumor lysis", "explanation": "Incorrect. Allopurinol prevents uric-acid-related nephropathy from tumor lysis but does not rescue host cells from antifolate toxicity. This would be the correct answer if the question asked about preventing acute kidney injury during induction lysis of a large leukemic burden." },
      { "text": "Glutathione, because it neutralizes free radicals generated during drug activation", "explanation": "Incorrect. Glutathione handles platinum and anthracycline detoxification; methotrexate toxicity is not mediated by free radicals. This would be the correct answer if the toxicity was from anthracycline-induced oxidative stress." },
      { "text": "Amifostine, because it scavenges reactive oxygen species before they damage DNA", "explanation": "Incorrect. Amifostine is used to reduce cisplatin nephrotoxicity and some radiation toxicity, not to rescue antifolate-induced cytopenia. This would be the correct answer if the patient was receiving high-dose cisplatin without adequate hydration." },
      { "text": "Leucovorin, because it bypasses blocked DHFR and restores reduced folate", "explanation": "Correct. Leucovorin is a reduced folate that is converted to methylene-tetrahydrofolate without requiring DHFR; this restores thymidylate and purine synthesis in normal cells, rescuing bone marrow, hepatocytes, and GI mucosa. The lecturer emphasized leucovorin reverses myelosuppression, mucositis/stomatitis, and hepatotoxicity, but does NOT reverse methotrexate-induced neurotoxicity or pulmonary toxicity, and is given after high-dose infusion." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Leucovorin (folinic acid) supplies reduced folate downstream of DHFR, rescuing normal cells from high-dose methotrexate toxicity (marrow, GI, liver). It does NOT reverse MTX neurotoxicity or pneumonitis.",
    "pdfPage": 43,
    "pdfQuote": "Leucovorin rescue: Converted to active methylene-FH4"
  },
  {
    "id": 6,
    "category": "Pharmacology: Antimetabolites",
    "questionText": "A pyrimidine analog used as first-line therapy for metastatic colorectal cancer is converted intracellularly to FdUMP, which forms a ternary complex with thymidylate synthase and a reduced folate cofactor. Which adjuvant agent — when given as part of the standard regimen — STABILIZES this ternary complex to enhance cytotoxicity?",
    "options": [
      { "text": "Mesna", "explanation": "Incorrect. Mesna inactivates acrolein from cyclophosphamide/ifosfamide and has no role in stabilizing the thymidylate synthase complex. This would be the correct answer if the regimen included high-dose alkylator with urotoxic risk." },
      { "text": "Allopurinol", "explanation": "Incorrect. Allopurinol prevents tumor lysis-related hyperuricemia and is used with 6-mercaptopurine to manage drug interactions, but does not interact with the TS complex. This would be the correct answer if the goal were preventing urate nephropathy during induction." },
      { "text": "Dexrazoxane", "explanation": "Incorrect. Dexrazoxane is an iron chelator used to mitigate anthracycline cardiotoxicity. This would be the correct answer if the regimen included high cumulative doxorubicin doses with declining ejection fraction." },
      { "text": "Leucovorin (folinic acid)", "explanation": "Correct. In the FOLFOX and FOLFIRI regimens, leucovorin (folinic acid) is converted intracellularly to methylene-tetrahydrofolate, which stabilizes the FdUMP–thymidylate synthase ternary complex. This INCREASES thymidylate synthase inhibition and therefore enhances 5-FU efficacy. Note: this is a distinct role from leucovorin's RESCUE function with methotrexate — same molecule, opposite therapeutic logic." },
      { "text": "Mercaptopurine", "explanation": "Incorrect. 6-MP is a purine antimetabolite used in ALL, not a TS-complex stabilizer. This would be the correct answer if the regimen targeted lymphoid leukemia maintenance therapy." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "In FOLFOX/FOLFIRI, leucovorin POTENTIATES 5-FU by stabilizing the FdUMP–thymidylate synthase complex — opposite role from its 'rescue' use with methotrexate, where it bypasses blocked DHFR.",
    "pdfPage": 47,
    "pdfQuote": "Folinic acid—5-FU—thymidylate form ternary complex"
  },
  {
    "id": 7,
    "category": "Pharmacology: Antimetabolites",
    "questionText": "A cytidine analog with an arabinose sugar instead of ribose is converted intracellularly by deoxycytidine kinase to its active triphosphate, which competitively inhibits DNA polymerase-α and is incorporated into the elongating DNA strand. Loss of which enzyme is the PRIMARY mechanism by which tumor cells develop resistance to this drug?",
    "options": [
      { "text": "Cytidine deaminase", "explanation": "Incorrect. Loss of cytidine deaminase would DECREASE drug inactivation and actually INCREASE intracellular active drug; high deaminase activity is associated with reduced efficacy. This would be the correct answer if the question asked which enzyme is OVER-expressed in resistant cells." },
      { "text": "Dihydropyrimidine dehydrogenase", "explanation": "Incorrect. DPD catabolizes 5-fluorouracil (a pyrimidine antimetabolite); it is not involved in cytarabine metabolism. This would be the correct answer if the question described severe toxicity from a fluoropyrimidine in a DPD-deficient patient." },
      { "text": "Deoxycytidine kinase", "explanation": "Correct. Cytarabine must be triphosphorylated to Ara-CTP to be cytotoxic; deoxycytidine kinase performs the rate-limiting first phosphorylation. Loss or downregulation of deoxycytidine kinase is the PRIMARY resistance mechanism in AML cells. Additional mechanisms include reduced transporter uptake and increased deactivation by cytidine deaminase, but the lecturer explicitly named loss of deoxycytidine kinase as the predominant mechanism." },
      { "text": "Thymidylate synthase", "explanation": "Incorrect. Thymidylate synthase is the target of 5-FU/FdUMP, not cytarabine. This would be the correct answer if the resistance question concerned a fluoropyrimidine." },
      { "text": "Thiopurine methyltransferase", "explanation": "Incorrect. TPMT metabolizes 6-mercaptopurine and 6-thioguanine; it is not involved in cytarabine activation. This would be the correct answer if the question discussed a poor metabolizer with severe 6-MP myelosuppression." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Cytarabine (Ara-C) requires phosphorylation by deoxycytidine kinase to its active Ara-CTP form. Loss of deoxycytidine kinase is the dominant mechanism of AML cell resistance to cytarabine.",
    "pdfPage": 51,
    "pdfQuote": "Loss of deoxycytidine kinase (primary mechanism)"
  },
  {
    "id": 8,
    "category": "Pharmacology: Microtubule Inhibitors",
    "questionText": "Two classes of antineoplastic drugs both target β-tubulin but produce opposite biophysical effects on the microtubule. Which pair correctly describes the mechanism of each class?",
    "options": [
      { "text": "Vinca alkaloids stabilize microtubules; taxanes prevent polymerization", "explanation": "Incorrect. This reverses the two mechanisms — a classic distractor. This would be the correct answer if the question were intentionally mislabeling the classes; on Boards it will simply be wrong." },
      { "text": "Both vinca alkaloids and taxanes covalently alkylate β-tubulin", "explanation": "Incorrect. Neither class alkylates tubulin; the binding is non-covalent. This would be the correct answer if the drugs were a class of irreversible electrophilic tubulin modifiers (none are in standard practice)." },
      { "text": "Both classes inhibit topoisomerase II to prevent spindle formation", "explanation": "Incorrect. Topoisomerase II inhibition is the mechanism of anthracyclines and etoposide and acts on DNA, not the spindle. This would be the correct answer if the question were about epipodophyllotoxins." },
      { "text": "Vincas block polymerization; taxanes prevent depolymerization", "explanation": "Correct. Vinca alkaloids (vincristine, vinblastine, vinorelbine) bind β-tubulin and BLOCK polymerization, so the mitotic spindle never forms. Taxanes (paclitaxel, docetaxel) bind β-tubulin with high affinity and STABILIZE existing microtubules, preventing the depolymerization required for chromosome segregation. Both ultimately cause M-phase arrest in metaphase, leading to apoptosis. Both classes also cause peripheral neuropathy as a major class toxicity due to axonal microtubule dependence." },
      { "text": "Vinca alkaloids inhibit kinesin motor proteins; taxanes inhibit dynein", "explanation": "Incorrect. Neither class targets motor proteins; they act on tubulin itself. This would be the correct answer if the agents were experimental kinesin spindle protein inhibitors." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Vincas BLOCK polymerization (no spindle forms); taxanes STABILIZE the spindle (it can't disassemble). Both cause metaphase arrest and both cause peripheral neuropathy because axons depend on microtubule dynamics.",
    "pdfPage": 70,
    "pdfQuote": "block polymerization with alpha tubulin"
  },
  {
    "id": 9,
    "category": "Pharmacology: Topoisomerase Inhibitors",
    "questionText": "A prodrug used in metastatic colorectal cancer is converted by carboxylesterase to its active metabolite SN-38, which traps topoisomerase I on nicked DNA so that the replication fork collides with the complex, producing double-strand breaks. Patients homozygous for which polymorphism are at increased risk of severe diarrhea and neutropenia from this drug?",
    "options": [
      { "text": "TPMT*3A (thiopurine methyltransferase deficiency)", "explanation": "Incorrect. TPMT deficiency increases toxicity of thiopurines (6-MP, 6-TG, azathioprine), not irinotecan. This would be the correct answer if the drug were 6-mercaptopurine in an ALL maintenance regimen." },
      { "text": "DPYD*2A (dihydropyrimidine dehydrogenase deficiency)", "explanation": "Incorrect. DPD deficiency causes severe toxicity from fluoropyrimidines (5-FU, capecitabine), not irinotecan. This would be the correct answer if the patient had life-threatening mucositis after the 'F' component of FOLFOX." },
      { "text": "UGT1A1*28 (Gilbert-type promoter polymorphism)", "explanation": "Correct. SN-38 (the active metabolite of irinotecan) is detoxified by glucuronidation through UGT1A1. Patients homozygous for the UGT1A1*28 allele have reduced UGT activity, leading to accumulation of SN-38 and severe diarrhea (often the dose-limiting toxicity) and neutropenia. Dose reduction is recommended for these patients. The lecturer specifically highlighted this pharmacogenomic interaction." },
      { "text": "CYP2D6 poor-metabolizer phenotype", "explanation": "Incorrect. CYP2D6 polymorphism affects tamoxifen (endoxifen formation), codeine, and some antidepressants, not irinotecan glucuronidation. This would be the correct answer if the affected drug were tamoxifen in adjuvant breast cancer therapy." },
      { "text": "G6PD deficiency", "explanation": "Incorrect. G6PD deficiency causes oxidant-induced hemolysis with drugs like dapsone, primaquine, and sulfas — not irinotecan-related diarrhea. This would be the correct answer if the toxicity were hemolytic anemia after an oxidant drug." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Irinotecan → carboxylesterase → SN-38 (active) → UGT1A1 glucuronidation. Homozygous UGT1A1*28 carriers accumulate SN-38 and develop severe diarrhea/neutropenia; dose reduction is recommended.",
    "pdfPage": 76,
    "pdfQuote": "UGT1A1*28 → deficient UGT activity"
  },
  {
    "id": 10,
    "category": "Pharmacology: Antitumor Antibiotics",
    "questionText": "A broad-spectrum antineoplastic agent damages DNA by THREE complementary mechanisms: (1) inhibition of topoisomerase II forming a ternary complex with DNA, (2) intercalation between adjacent base pairs, and (3) generation of iron-dependent semiquinone free radicals that oxidize DNA, proteins, and membranes. The hallmark CUMULATIVE-DOSE toxicity of this drug class involves which organ?",
    "options": [
      { "text": "Kidney (progressive interstitial nephritis)", "explanation": "Incorrect. Nephrotoxicity is the dose-limiting toxicity of cisplatin, not anthracyclines. This would be the correct answer if the question described a platinum analog with high emetogenic potential." },
      { "text": "Lung (irreversible interstitial fibrosis)", "explanation": "Incorrect. Pulmonary fibrosis (\"bleomycin lung\" or \"busulfan lung\") characterizes bleomycin and busulfan, not anthracyclines. This would be the correct answer if the agent were the 'B' in the BEP testicular cancer regimen." },
      { "text": "Peripheral nerves (acute cold-induced paresthesia)", "explanation": "Incorrect. Cold-induced acute neuropathy is the signature of oxaliplatin, not anthracyclines. This would be the correct answer if the patient developed jaw pain when drinking cold water during a colorectal regimen." },
      { "text": "Bladder (hemorrhagic cystitis from a metabolite)", "explanation": "Incorrect. Hemorrhagic cystitis is the cyclophosphamide/ifosfamide acrolein toxicity. This would be the correct answer if the patient had gross hematuria after high-dose alkylator without mesna." },
      { "text": "Heart (irreversible dilated cardiomyopathy and left ventricular failure)", "explanation": "Correct. Anthracyclines (doxorubicin, daunorubicin) cause cumulative-dose, irreversible cardiomyopathy that progresses to left ventricular dysfunction and acute heart failure. The mechanism is at least partly free-radical–mediated oxidative damage to cardiomyocyte membranes and mitochondria; iron chelation (e.g., dexrazoxane) is protective. The risk rises sharply above ~450–550 mg/m² cumulative doxorubicin exposure, and concurrent trastuzumab or cyclophosphamide further increases the risk." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Anthracycline cardiotoxicity is CUMULATIVE-DOSE related, IRREVERSIBLE, and presents as dilated cardiomyopathy → LV failure. Concurrent trastuzumab or cyclophosphamide magnifies the risk.",
    "pdfPage": 64,
    "pdfQuote": "cumulative dose-related, irreversible"
  },
  {
    "id": 11,
    "category": "Pharmacology: Platinum Analogs",
    "questionText": "A 62-year-old man with stage III non-small-cell lung cancer is admitted for his second cycle of combination chemotherapy. He received aggressive IV normal saline before and during the infusion, but two days later he reports decreased urine output. His creatinine has risen from 0.9 to 2.1 mg/dL, his urine sediment shows granular casts, and his serum magnesium is 1.2 mg/dL (low). He has had persistent nausea and vomiting requiring scheduled antiemetics, and he describes new high-pitched tinnitus. Which agent in his regimen is most likely responsible for the acute renal injury?",
    "options": [
      { "text": "A drug whose dose-limiting toxicity is myelosuppression with relatively little renal or GI toxicity", "explanation": "Incorrect. This describes carboplatin, whose dose-limiting toxicity is bone marrow suppression and which does NOT typically cause severe nephrotoxicity even without vigorous hydration. This would be the correct answer if the patient presented with thrombocytopenia and febrile neutropenia rather than AKI." },
      { "text": "A drug that produces acute, cold-triggered acral paresthesias as its hallmark toxicity", "explanation": "Incorrect. This describes oxaliplatin, whose dose-limiting toxicity is acute (cold-exacerbated) and delayed progressive peripheral neuropathy, not nephrotoxicity. This would be the correct answer if the patient developed jaw/throat dysesthesia when drinking cold liquids." },
      { "text": "A prodrug activated by CYP2B6 whose metabolite damages bladder epithelium causing hematuria", "explanation": "Incorrect. This describes cyclophosphamide and its acrolein metabolite; the toxicity would be hemorrhagic cystitis, not AKI with hypomagnesemia and ototoxicity. This would be the correct answer if the patient had painful gross hematuria." },
      { "text": "A microtubule-stabilizing taxane requiring CYP3A4 metabolism", "explanation": "Incorrect. Taxanes (paclitaxel/docetaxel) cause neutropenia and peripheral neuropathy, not the renal-ototoxic-emetogenic triad described. This would be the correct answer if the patient had glove-and-stocking neuropathy with neutropenia." },
      { "text": "A metal-containing drug requiring chloride diuresis to prevent proximal tubule injury", "explanation": "Correct. The clinical picture — acute creatinine rise, granular casts, hypomagnesemia from proximal tubular wasting, severe emesis, and ototoxicity — is classic cisplatin nephrotoxicity. Cisplatin's dose-limiting toxicity is nephrotoxicity, mitigated by vigorous normal saline (chloride) diuresis ± a loop diuretic; the chloride stabilizes the drug in the inert dichloride form before glomerular filtration. Persistent emesis and ototoxicity are concurrent cisplatin-specific class effects." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Cisplatin's dose-limiting toxicity is NEPHROTOXICITY (proximal tubule injury, magnesium wasting). Prevent with vigorous normal saline hydration ± loop diuretic. It is also highly emetogenic and ototoxic.",
    "pdfPage": 34,
    "pdfQuote": "Nephrotoxicity vigorous chloride diuresis"
  },
  {
    "id": 12,
    "category": "Pharmacology: Platinum Analogs",
    "questionText": "A 58-year-old woman is undergoing adjuvant chemotherapy for stage III colon cancer. Within minutes of beginning her infusion she begins shaking her hands and complaining that her fingertips and throat feel \"electric\" when she drinks her ice water. Five months later she has persistent stocking-glove paresthesias even between cycles. There is no rise in creatinine and her CBC remains adequate. Which mechanism-of-action description best identifies the agent responsible for this toxicity pattern?",
    "options": [
      { "text": "A platinum drug with a bulky cyclohexane ligand causing cold-exacerbated peripheral neuropathy", "explanation": "Correct. This is oxaliplatin, whose dose-limiting toxicity is peripheral neuropathy in two forms: an acute neuropathy precipitated/exacerbated by cold exposure (cold drinks, cold air, opening freezers) and a delayed cumulative sensory neuropathy. Its bulky 1,2-diaminocyclohexane ligand creates a different DNA distortion than cisplatin/carboplatin, making it active against MMR-deficient tumors and explaining its role as a component of FOLFOX in colorectal cancer. Unlike cisplatin, nephrotoxicity is not a major issue." },
      { "text": "A platinum drug with chloride ligands and a terminal half-life up to 5 days whose major dose-limiting toxicity is nephrotoxicity", "explanation": "Incorrect. This is cisplatin; nephrotoxicity not cold-triggered neuropathy is its hallmark. This would be the correct answer if the patient had AKI and ototoxicity instead." },
      { "text": "A platinum drug that is less reactive and whose major dose-limiting toxicity is myelosuppression rather than peripheral nervous system damage", "explanation": "Incorrect. This describes carboplatin (myelosuppression-dominant). This would be the correct answer if the dose-limiting issue were thrombocytopenia rather than neuropathy." },
      { "text": "An anthracycline that generates iron-dependent semiquinone free radicals and causes cumulative cardiomyopathy", "explanation": "Incorrect. Anthracyclines are not platinum agents and their hallmark is cardiotoxicity, not cold-triggered neuropathy. This would be the correct answer if the patient had a declining ejection fraction after total dose >450 mg/m²." },
      { "text": "A camptothecin that traps topoisomerase I on nicked DNA and is dose-limited by neutropenia and severe diarrhea", "explanation": "Incorrect. This describes irinotecan; its toxicities are diarrhea and neutropenia, not cold-exacerbated paresthesias. This would be the correct answer if the same FOLFOX-derivative patient had severe acute diarrhea and required loperamide and atropine." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Oxaliplatin's dose-limiting toxicity is peripheral neuropathy — uniquely characterized by cold-EXACERBATED acute paresthesias plus a delayed progressive sensory neuropathy. It is a backbone of FOLFOX for colorectal cancer.",
    "pdfPage": 34,
    "pdfQuote": "Peripheral neuropathy acute (exacerbated by cold)"
  },
  {
    "id": 13,
    "category": "Pharmacology: Alkylating Agents",
    "questionText": "A 9-year-old girl with relapsed Burkitt lymphoma is being treated with high-dose intravenous chemotherapy. On the second day of admission she develops suprapubic pain, urinary frequency, and gross hematuria. Urinalysis shows numerous red blood cells, abundant transitional epithelial cells, and no bacteria. Her creatinine, electrolytes, and coagulation studies are normal. Which intervention, ALREADY planned with the infusion, was intended to prevent this complication?",
    "options": [
      { "text": "Leucovorin rescue 24 hours after the infusion to bypass blocked dihydrofolate reductase", "explanation": "Incorrect. Leucovorin rescue is for high-dose methotrexate, not for cyclophosphamide-induced cystitis. This would be the correct answer if the patient developed mucositis and pancytopenia after high-dose MTX." },
      { "text": "Allopurinol pretreatment to inhibit xanthine oxidase and prevent urate nephropathy", "explanation": "Incorrect. Allopurinol prevents tumor lysis syndrome (uric acid nephropathy), not direct bladder mucosal injury. This would be the correct answer if she had hyperuricemia and rising creatinine without urothelial injury." },
      { "text": "Dexrazoxane infusion to chelate iron and prevent free-radical–mediated cardiomyocyte injury", "explanation": "Incorrect. Dexrazoxane protects against anthracycline cardiotoxicity, not hemorrhagic cystitis. This would be the correct answer if the toxicity in question were a declining LV ejection fraction during doxorubicin therapy." },
      { "text": "Amifostine to scavenge reactive oxygen species in the renal tubular cells", "explanation": "Incorrect. Amifostine has been used to mitigate cisplatin nephrotoxicity and some radiation toxicity, not to prevent acrolein-mediated bladder injury. This would be the correct answer if the patient was on a high-dose cisplatin regimen at risk for AKI." },
      { "text": "Aggressive IV hydration plus a sulfhydryl-donating uroprotectant", "explanation": "Correct. The picture is classic acrolein-induced hemorrhagic cystitis from cyclophosphamide (or ifosfamide). The prevention strategy is vigorous IV hydration (to dilute acrolein in the bladder) PLUS mesna — a sulfhydryl-donating molecule that conjugates the α,β-unsaturated carbonyl of acrolein in the urinary tract, neutralizing its toxicity. Mesna is given before, during, and after the cyclophosphamide infusion at high doses." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Cyclophosphamide/ifosfamide → acrolein → hemorrhagic cystitis. Prevention: hyperhydration + mesna (sulfhydryl conjugates acrolein in urine). Suspect this in any cyclophosphamide patient with new hematuria and dysuria.",
    "pdfPage": 25,
    "pdfQuote": "Hemorrhagic cystitis due to acrolein"
  },
  {
    "id": 14,
    "category": "Pharmacology: Antitumor Antibiotics",
    "questionText": "A 47-year-old woman with HER2-positive breast cancer has completed four cycles of an adjuvant regimen that includes a red-colored intravenous drug derived from Streptomyces peucetius, along with cyclophosphamide and trastuzumab. She now has dyspnea on exertion and bilateral lower-extremity edema. Echocardiogram shows a new LV ejection fraction of 35% (baseline 60%) with global hypokinesis; troponin is mildly elevated. Which mechanism best explains how the chemotherapy contributed to her cardiomyopathy?",
    "options": [
      { "text": "Direct alkylation of cardiomyocyte DNA via N7 guanine cross-linking", "explanation": "Incorrect. While cyclophosphamide can produce acute cardiotoxicity at very high doses, the cumulative cardiomyopathy described in a patient who received a red anthracycline plus trastuzumab is anthracycline-mediated, not alkylation-mediated. This would be the correct answer if the patient developed pericarditis-myocarditis acutely after very high-dose cyclophosphamide conditioning for transplant." },
      { "text": "Iron-dependent free-radical damage to cardiomyocyte membranes and mitochondria", "explanation": "Correct. The red drug is doxorubicin. Anthracycline cardiotoxicity arises substantially from iron-dependent generation of semiquinone and ROS that damage cardiomyocyte DNA, proteins, and membranes (cardiomyocytes are particularly vulnerable due to low antioxidant capacity). This produces a cumulative-dose, irreversible dilated cardiomyopathy. Concurrent trastuzumab (HER2 blockade) and cyclophosphamide both amplify the cardiac risk — the lecturer emphasized this combination interaction." },
      { "text": "Stabilization of cardiomyocyte microtubules preventing depolymerization during contraction", "explanation": "Incorrect. Taxane mechanism, not anthracycline; taxanes do not produce this cumulative cardiomyopathy. This would be the correct answer if the cardiotoxicity were attributed to paclitaxel rather than the red drug." },
      { "text": "Inhibition of cardiomyocyte dihydrofolate reductase causing thymidine depletion", "explanation": "Incorrect. Antifolate mechanism (methotrexate) — methotrexate does not cause anthracycline-style cumulative cardiomyopathy. This would be the correct answer if the patient had been on high-dose methotrexate for CNS lymphoma." },
      { "text": "Trapping of topoisomerase I on cardiac DNA producing single-strand breaks", "explanation": "Incorrect. Topo-I trapping is the camptothecin (irinotecan/topotecan) mechanism and causes diarrhea/myelosuppression, not cardiomyopathy. This would be the correct answer if the patient had severe diarrhea after FOLFIRI." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Anthracycline cardiotoxicity is largely free-radical mediated. Combination with trastuzumab and/or cyclophosphamide magnifies risk. Monitor LV function with serial echo/MUGA — toxicity is cumulative and irreversible.",
    "pdfPage": 62,
    "pdfQuote": "Semiquinone and oxygen free radicals"
  },
  {
    "id": 15,
    "category": "Pharmacology: Microtubule Inhibitors",
    "questionText": "A 7-year-old boy with newly diagnosed acute lymphoblastic leukemia is receiving induction therapy. After his second weekly dose of one of his IV agents he develops symmetric distal paresthesias, decreased deep tendon reflexes in the ankles, foot drop, and severe constipation with abdominal distention; his abdomen is tympanitic and bowel sounds are decreased. A bedside team member notes that the same drug must NEVER be given by an alternative route because of an unrelated, often-fatal toxicity. Which agent best explains his current symptoms?",
    "options": [
      { "text": "A vinca alkaloid blocking tubulin polymerization; never given intrathecally", "explanation": "Correct. Vincristine is the cornerstone of pediatric ALL induction. Its dose-limiting toxicity is neurotoxicity — sensorimotor peripheral neuropathy (paresthesias, areflexia, foot drop), autonomic dysfunction producing severe constipation (sometimes paralytic ileus and abdominal pain), and cranial nerve involvement. Vincristine is ABSOLUTELY contraindicated intrathecally — accidental IT administration causes ascending paralysis and death. The lecturer specifically flagged this 'never event.'" },
      { "text": "A taxane that stabilizes microtubules and causes neutropenia as its dose-limiting effect", "explanation": "Incorrect. Taxanes also cause neuropathy but are not standard in pediatric ALL induction, do not typically cause autonomic-mediated constipation/ileus, and are not contraindicated intrathecally for the same reason. This would be the correct answer if the patient were an adult woman receiving adjuvant breast cancer therapy with glove-stocking neuropathy and neutropenia." },
      { "text": "An anthracycline whose dose-limiting toxicity is cumulative cardiomyopathy", "explanation": "Incorrect. Daunorubicin/doxorubicin are used in ALL, but their toxicity profile is cardiomyopathy and myelosuppression — not the neuro-autonomic syndrome here. This would be the correct answer if the patient had a declining ejection fraction." },
      { "text": "A folate antagonist that requires leucovorin rescue to prevent mucositis", "explanation": "Incorrect. Methotrexate (intrathecal or systemic) is part of ALL therapy but does not cause peripheral neuropathy with autonomic constipation as its dose-limiting effect. This would be the correct answer if the patient had severe mucositis and pancytopenia." },
      { "text": "A camptothecin that traps topoisomerase I, with diarrhea as the dose-limiting effect", "explanation": "Incorrect. Topotecan/irinotecan are not standard ALL induction drugs and cause diarrhea rather than constipation. This would be the correct answer if the patient had severe diarrhea on FOLFIRI for colon cancer." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Vincristine is the treatment of choice for inducing remission in childhood ALL. Dose-limiting toxicity = sensorimotor + autonomic neuropathy (constipation/ileus). NEVER give intrathecally — fatal ascending paralysis.",
    "pdfPage": 69,
    "pdfQuote": "Intrathecal admin contraindicated"
  },
  {
    "id": 16,
    "category": "Pharmacology: Antimetabolites",
    "questionText": "A 71-year-old woman with metastatic colorectal cancer is receiving an oral fluoropyrimidine prodrug for palliation. Two weeks into the first cycle she develops painful erythema, swelling, and peeling skin on her palms and soles severe enough to interfere with walking and grasping. She also reports an episode of substernal chest pressure that resolved with nitroglycerin in the ED; troponin was normal. Which drug and adverse-effect mechanism best explain her presentation?",
    "options": [
      { "text": "Methotrexate — cumulative hepatotoxicity and dose-dependent pulmonary toxicity from DHFR blockade", "explanation": "Incorrect. Methotrexate causes mucositis and (rarely) cutaneous reactions but not the classic palmar-plantar erythrodysesthesia or coronary vasospasm pattern. This would be the correct answer if she developed acute pneumonitis or had a stomatitis-pancytopenia picture." },
      { "text": "Cytarabine — chemical conjunctivitis and cerebellar ataxia", "explanation": "Incorrect. High-dose cytarabine causes chemical conjunctivitis (treated with steroid eye drops) and cerebellar toxicity, not hand-foot syndrome with chest pain. This would be the correct answer if she developed ataxia and slurred speech after high-dose Ara-C." },
      { "text": "6-Mercaptopurine — hepatotoxicity and hyperuricemia", "explanation": "Incorrect. 6-MP toxicities are myelosuppression and hepatotoxicity, not acral erythema or coronary vasospasm. This would be the correct answer if she had elevated transaminases and bone marrow suppression while on 6-MP for ALL maintenance." },
      { "text": "Capecitabine — hand-foot syndrome and coronary vasospasm from 5-FU conversion", "explanation": "Correct. Capecitabine is an ORAL prodrug converted intracellularly (especially in tumor) to 5-fluorouracil. Two characteristic fluoropyrimidine toxicities are: (1) hand-foot syndrome (palmar-plantar erythrodysesthesia / acral erythema with desquamation) — especially common with continuous-exposure capecitabine; and (2) coronary artery vasospasm leading to angina, MI, arrhythmia, or even heart failure, rare but potentially fatal. The lecturer emphasized both as fluoropyrimidine-specific toxicities." },
      { "text": "Irinotecan — secretory diarrhea and cholinergic flushing", "explanation": "Incorrect. Irinotecan's signature toxicities are diarrhea and acute cholinergic syndrome (treated with atropine), not hand-foot syndrome or coronary spasm. This would be the correct answer if she had explosive diarrhea or rhinorrhea/lacrimation during infusion." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Fluoropyrimidines (5-FU, capecitabine) classically cause palmar-plantar erythrodysesthesia ('hand-foot syndrome') — especially capecitabine — AND can rarely cause coronary artery vasospasm with angina/MI. Suspect DPD deficiency if toxicity is severe at standard doses.",
    "pdfPage": 47,
    "pdfQuote": "Coronary artery vasospasm leading to cardiac ischemia"
  },
  {
    "id": 17,
    "category": "Pharmacology: Antimetabolites",
    "questionText": "An 8-year-old boy with newly diagnosed acute lymphoblastic leukemia is on a maintenance regimen that includes a daily oral thiopurine. To prevent uric acid nephropathy from massive lymphoblast turnover during induction, his oncologist prescribes an additional medication. Several days later his white count drops profoundly and he develops severe mucositis. Which mechanism best explains his unexpected toxicity?",
    "options": [
      { "text": "Inhibition of dihydrofolate reductase shunting methotrexate toward intracellular accumulation", "explanation": "Incorrect. DHFR inhibition is the methotrexate mechanism, not the basis of the 6-MP / allopurinol interaction. This would be the correct answer if a sulfonamide displacing MTX from albumin caused increased free MTX levels." },
      { "text": "Inhibition of xanthine oxidase shunting 6-MP toward toxic active nucleotides", "explanation": "Correct. Allopurinol inhibits xanthine oxidase, which is one of the two key catabolic enzymes for 6-mercaptopurine (the other being TPMT). When xanthine oxidase is blocked, 6-MP is shunted toward formation of toxic 6-thioguanine nucleotides, dramatically increasing myelosuppression and mucositis. The clinically appropriate response is to reduce the 6-MP dose to ~25% of usual when allopurinol is co-administered. The lecturer explicitly flagged this drug interaction." },
      { "text": "Induction of CYP3A4 increasing systemic clearance of 6-mercaptopurine", "explanation": "Incorrect. Allopurinol inhibits xanthine oxidase — it does not induce CYP3A4; and inducers would DECREASE, not increase, drug levels. This would be the correct answer if the question described a CYP3A4 inhibitor like ketoconazole co-administered with a CYP3A4-metabolized agent." },
      { "text": "Increased expression of hypoxanthine-guanine phosphoribosyl transferase (HGPRT) converting 6-MP to inactive metabolites", "explanation": "Incorrect. HGPRT is required to ACTIVATE 6-MP; loss (not gain) reduces activation. Increased HGPRT would not cause toxicity. This would be the correct answer if the question asked about a resistance mechanism mediated by loss of activating enzyme." },
      { "text": "Reduced glucuronidation by UGT1A1 causing accumulation of an active metabolite", "explanation": "Incorrect. UGT1A1 polymorphism affects irinotecan's SN-38, not 6-MP. This would be the correct answer if a colorectal cancer patient on FOLFIRI developed severe diarrhea and neutropenia." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Allopurinol + 6-mercaptopurine = SHUNT toward toxic nucleotides via xanthine oxidase inhibition. Reduce 6-MP dose to ~25% when co-prescribed for tumor lysis prophylaxis. (Same logic for azathioprine.)",
    "pdfPage": 55,
    "pdfQuote": "Allopurinol inhibits xanthine oxidase"
  },
  {
    "id": 18,
    "category": "Pharmacology: Antimetabolites",
    "questionText": "A 42-year-old man with newly diagnosed acute myeloid leukemia receives high-dose cytarabine consolidation. Forty-eight hours into therapy he develops dysmetria, ataxia, dysarthria, and intention tremor; his nystagmus is bidirectional but cranial nerves are otherwise intact. Imaging shows no acute stroke. Which property of the drug best explains the localization of his toxicity?",
    "options": [
      { "text": "Trapping of topoisomerase I on cerebellar Purkinje cell DNA producing single-strand breaks", "explanation": "Incorrect. Cytarabine does not act on topoisomerase I; this is the camptothecin mechanism. This would be the correct answer if the agent were irinotecan, which does not typically cause cerebellar toxicity." },
      { "text": "Iron-dependent free-radical generation in highly oxidative cerebellar tissue", "explanation": "Incorrect. This is the anthracycline mechanism, and anthracyclines do not cross the BBB or cause cerebellar syndrome. This would be the correct answer if the drug were doxorubicin causing CNS toxicity (which actually it does not, due to P-gp efflux from brain)." },
      { "text": "Acrolein-induced direct neurotoxicity to cerebellar Purkinje cells", "explanation": "Incorrect. Acrolein causes bladder toxicity, not cerebellar toxicity. This would be the correct answer if the toxicity were hemorrhagic cystitis rather than cerebellar dysfunction." },
      { "text": "Distribution into the CNS and CSF with cerebellar vulnerability at high doses", "explanation": "Correct. Cytarabine penetrates the CNS (it is used intrathecally for some leukemias and also reaches the brain after high systemic doses). High-dose cytarabine produces a characteristic cerebellar syndrome (ataxia, dysmetria, dysarthria, nystagmus) and at higher exposures can cause cerebral toxicity (seizures, coma). The lecturer specifically highlighted cytarabine's CNS distribution as the reason for these toxicities; intrathecal administration adds arachnoiditis risk. Onset typically within hours-to-days of high-dose therapy is classic." },
      { "text": "β-tubulin polymerization blockade leading to disrupted cerebellar microtubule transport", "explanation": "Incorrect. Vinca alkaloids affect peripheral nerves through axonal microtubule dysfunction but rarely produce isolated cerebellar syndrome; cytarabine cerebellar toxicity is the classic Boards association. This would be the correct answer if the patient had peripheral neuropathy on vincristine." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "High-dose cytarabine causes cerebellar toxicity (ataxia, dysarthria, dysmetria, nystagmus) because it distributes into the CNS. Stop the drug at first sign — toxicity can be irreversible in older patients.",
    "pdfPage": 52,
    "pdfQuote": "Cerebellar toxicity, high dose or intrathecal"
  },
  {
    "id": 19,
    "category": "Pharmacology: Combination Chemotherapy",
    "questionText": "A 65-year-old woman with stage IV ovarian cancer is scheduled to receive sequential infusions of paclitaxel and carboplatin. The pharmacy must determine the order of administration. According to the principle reviewed in lecture, why is the taxane given BEFORE the platinum agent in sequential infusion?",
    "options": [
      { "text": "Paclitaxel must reach steady-state plasma concentration before platinum DNA cross-linking begins or efficacy is lost", "explanation": "Incorrect. The rationale is not steady-state kinetics but rather a sequence-dependent interaction observed in clinical trials. This would be the correct answer if paclitaxel were a continuously-infused agent dependent on steady-state for activity." },
      { "text": "Platinum given first reduces paclitaxel clearance, worsening myelosuppression and reducing efficacy", "explanation": "Correct. Clinical trial pharmacokinetic data showed that when paclitaxel was given AFTER cisplatin, paclitaxel clearance decreased — leading to increased taxane exposure, greater myelosuppression, and (paradoxically) reduced antitumor efficacy. The mechanism is incompletely understood, but the practical rule (\"T before P\") applies to taxane–platinum sequencing. The lecturer specifically stated this rule and noted the same prudent ordering is extended to other taxane/platinum combinations." },
      { "text": "Platinum agents must always be given before any other drug to allow their long terminal half-life to overlap with subsequent agents", "explanation": "Incorrect. Long terminal half-life is a property of cisplatin but does not dictate ordering with taxanes; the rule is the opposite of what this option states. This would be the correct answer if a question asked about cisplatin's prolonged terminal half-life dictating infusion duration." },
      { "text": "The platinum agent must be given before the taxane to avoid hypersensitivity reactions to the taxane solvent", "explanation": "Incorrect. Taxane hypersensitivity (largely from the Cremophor EL vehicle) is managed with premedication (steroids, H1/H2 blockers), not by changing the order with platinum. This would be the correct answer if the question concerned taxane premedication." },
      { "text": "Platinum drugs induce CYP3A4, decreasing taxane bioavailability if given simultaneously", "explanation": "Incorrect. Platinum drugs do not significantly induce CYP3A4 (taxanes are CYP3A4 substrates), and this is not the mechanism described in lecture. This would be the correct answer if asking about a known CYP3A4 inducer–substrate interaction (e.g., rifampin + a taxane)." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Sequencing rule: \"T before P\" (taxane before platinum). Reversing the order reduces taxane clearance, worsening myelosuppression while reducing efficacy. (Similarly: \"A before T\" — anthracycline before taxane.)",
    "pdfPage": 33,
    "pdfQuote": "Administer taxane before platinum to limit myelosuppression"
  },
  {
    "id": 20,
    "category": "Pharmacology: Topoisomerase Inhibitors",
    "questionText": "A 28-year-old man is diagnosed with a non-seminomatous germ-cell testicular tumor with retroperitoneal lymphadenopathy. He is started on the standard \"BEP\" curative regimen. Three months later, after completing therapy, he reports increasing dyspnea on exertion and a non-productive cough. Pulmonary function tests show a restrictive pattern with markedly reduced DLCO; high-resolution CT shows bilateral lower-lobe reticular changes consistent with interstitial fibrosis. Which agent in his regimen is MOST likely responsible for this delayed pulmonary toxicity, and what is its general mechanism of action?",
    "options": [
      { "text": "Cisplatin — covalent platinum–DNA adduct formation with intrastrand cross-linking at N7 guanine", "explanation": "Incorrect. Cisplatin causes nephrotoxicity, ototoxicity, peripheral neuropathy, and severe emesis — pulmonary fibrosis is not its hallmark and is not its mechanism. This would be the correct answer if the patient presented with AKI, tinnitus, and hypomagnesemia mid-cycle." },
      { "text": "Etoposide — topoisomerase II inhibition trapping a drug–DNA–enzyme ternary complex with irreversible double-strand breaks", "explanation": "Incorrect. Etoposide's dose-limiting toxicity is myelosuppression, and its hallmark long-term risk is secondary acute leukemia — NOT pulmonary fibrosis. This would be the correct answer if the patient developed therapy-related AML 2 years after the regimen." },
      { "text": "An alkylating agent transferring an alkyl group to the N7 of guanine producing inter- and intrastrand cross-links", "explanation": "Incorrect. While busulfan (a classical alkylator) does cause 'busulfan lung,' it is not a component of the BEP testicular cancer regimen. The agent in BEP responsible for pulmonary fibrosis is bleomycin, not an alkylator. This would be the correct answer if the patient had received high-dose busulfan conditioning for stem cell transplant." },
      { "text": "Bleomycin — an antitumor antibiotic generating iron-dependent free radicals that cause pulmonary fibrosis", "explanation": "Correct. Bleomycin (the 'B' in BEP) is an antitumor antibiotic that complexes with DNA and Fe2+ to generate reactive oxygen species causing DNA strand breaks. Its signature delayed toxicity is dose-related pulmonary fibrosis (\"bleomycin lung\") — restrictive lung disease with reduced DLCO and interstitial fibrosis on imaging. The lecturer mentioned bleomycin lung as analogous to busulfan lung and emphasized BEP for testicular cancer is frequently curative despite this risk. Patients are monitored with serial DLCO." },
      { "text": "A vinca alkaloid blocking tubulin polymerization with axonal microtubule disruption", "explanation": "Incorrect. Vincas cause peripheral neuropathy and constipation, not pulmonary fibrosis, and are not part of BEP. This would be the correct answer if the patient had stocking-glove paresthesias and ileus." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "In the curative BEP regimen for testicular cancer, BLEOMYCIN causes the signature delayed pulmonary fibrosis ('bleomycin lung') via iron-dependent free-radical DNA damage. Monitor DLCO; risk rises with cumulative dose and FiO2 exposure during anesthesia.",
    "pdfPage": 100,
    "pdfQuote": "Bleomycin causes pulmonary fibrosis"
  }
];
