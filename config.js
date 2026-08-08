
// Block + section metadata.
const BLOCK_INFO = {
    name: "Block 3",
    subtitle: "Medical Sciences",
    volumeRoman: "I",
};

const SECTIONS = [
    { id: "neuro",  romanNumeral: "I",   name: "Neurology",                       dek: "The brain and the body.",        weeks: [1, 2, 3, 4] },
    { id: "psych",  romanNumeral: "II",  name: "Psychiatry",                      dek: "Mind and behavior.",             weeks: [6, 7, 8, 9] },
    { id: "msk",    romanNumeral: "III", name: "Musculoskeletal & Rheumatology",  dek: "Bone, joint, immune.",           weeks: [12, 13, 14, 15] },
    { id: "hemonc", romanNumeral: "IV",  name: "Hematology-Oncology",             dek: "Blood, marrow, malignancy.",     weeks: [17, 18, 19, 20] },
    // Cardiovascular (semester 2). Scaffolded empty, ready for lectures 1–41.
    // Tests are matched by a "Cardio-" name prefix (see getTestSection) rather
    // than by week, so their lecture numbers can stay 1–41 without colliding.
    { id: "cardio", romanNumeral: "V",   name: "Cardiovascular",                  dek: "The heart and circulation.",     weeks: [] },
];

// Map a test name (e.g. "6-Pharm: Sedative Hypnotics (L48)") to its section.
// Pathoma-prefixed tests (e.g. "Pathoma-Acute Leukemia (6.2)") live under Section IV (Hematology-Oncology).
// Cardio-prefixed tests (e.g. "Cardio-Hemodynamics (L1)") live under Section V (Cardiovascular).
function getTestSection(testName) {
    if (/^Cardio-/.test(testName)) {
        return SECTIONS.find(s => s.id === "cardio") || null;
    }
    if (/^Pathoma-/.test(testName)) {
        return SECTIONS.find(s => s.id === "hemonc") || null;
    }
    const weekMatch = testName.match(/^(\d+)-/);
    if (!weekMatch) return null;
    const week = parseInt(weekMatch[1], 10);
    return SECTIONS.find(s => s.weeks.includes(week)) || null;
}

if (typeof window !== "undefined") {
    window.BLOCK_INFO = BLOCK_INFO;
    window.SECTIONS = SECTIONS;
    window.getTestSection = getTestSection;
}
// NOTE: `testsToLoad` itself is attached after the array literal below,
// since the const is hoisted but not initialized until the assignment runs.

const testsToLoad = [

    // --- Week 1 (L1-13) ---
    { name: "1-OMM: Basics of Diagnosis (L1a)", data: window.Test_L1a },
    { name: "1-OMM: Diagnosis of the Pelvis (L1b)", data: window.Test_L1b },
    { name: "1-Neuroembryology (L2)", data: window.Test_L2 },
    { name: "1-Neuroanatomy: Meninges & CSF (L3)", data: window.Test_L3 },
    { name: "1-Blood Supply of the CNS (L4)", data: window.Test_L4 },
    { name: "1-Clinical Apps of Neuroimaging (L5)", data: window.Test_L5 },
    { name: "1-Spinal Cord Anatomy (L6)", data: window.Test_L6 },
    { name: "1-Brain Stem I (L7)", data: window.Test_L7 },
    { name: "1-Brain Stem II (L8)", data: window.Test_L8 },
    { name: "1-Reticular Formation (L9)", data: window.Test_L9 },
    { name: "1-Autonomic Nervous System (L10)", data: window.Test_L10 },
    { name: "1-Hypothalamus (L11)", data: window.Test_L11 },
    { name: "1-Thalamus Anatomy & Phys (L12)", data: window.Test_L12 },
    { name: "1-Clinical Decision Making (L13)", data: window.Test_L13 },

    // --- Week 2 (L14-26) ---
    { name: "2-General Sensory System (L15)", data: window.Test_L15 },
    { name: "2-Visual System (L16)", data: window.Test_L16 },
    { name: "2-Auditory System (L17)", data: window.Test_L17 },
    { name: "2-Vestibular System (L18)", data: window.Test_L18 },
    { name: "2-Pharm: Cholinomimetics (L19)", data: window.Test_L19 },
    { name: "2-Pharm: Indirect Cholinomimetics (L20)", data: window.Test_L20 },
    { name: "2-Pharm: Antimuscarinics (L21)", data: window.Test_L21 },
    { name: "2-Pharm: Ganglionic/NM Blockers (L22)", data: window.Test_L22 },
    { name: "2-Path: Auditory/Vestibular (L23)", data: window.Test_L23 },
    { name: "2-Neuro: Olfaction/Taste (L24)", data: window.Test_L24 },
    { name: "2-Neuro: Limbic System (L25)", data: window.Test_L25 },
    { name: "2-Clin: Neuro Exam I (L26)", data: window.Test_L26 },

    // Week 3
    { name: "3-OMM: Lab 17 Prep (L27)", data: window.Test_L27 },
    { name: "3-Neuro: Neocortex (L28)", data: window.Test_L28 },
    { name: "3-Neuro: Neocortical Dev (L29)", data: window.Test_L29 },
    { name: "3-Neuro: Motor Systems I (L30)", data: window.Test_L30 },
    { name: "3-Neuro: Basal Ganglia (L31)", data: window.Test_L31 },
    { name: "3-Neuro: Cerebellum (L32)", data: window.Test_L32 },
    { name: "3-Pharm: Sympathomimetics I (L33)", data: window.Test_L33 },
    { name: "3-Pharm: Sympathomimetics II (L34)", data: window.Test_L34 },
    { name: "3-Neuro: Cranial Nerves I-VI (L35)", data: window.Test_L35 },
    { name: "3-Neuro: Cranial Nerves VII-XII (L36)", data: window.Test_L36 },
    { name: "3-DPR: Neuro Exam - Motor/Reflex (L37)", data: window.Test_L37 },

    // Week 4
    { name: "4-OMM: Sacral Diagnosis (L38)", data: window.Test_L38 },
    { name: "4-Pharm: Adrenergic Antagonists (L39)", data: window.Test_L39 },
    { name: "4-Neuro: Spinal Cord Syndromes (L40)", data: window.Test_L40 },
    { name: "4-Neuro: Localization (L41)", data: window.Test_L41 },
    { name: "4-Path: Demyelinating Diseases (L42)", data: window.Test_L42 },
    { name: "4-Pharm: Multiple Sclerosis (L43)", data: window.Test_L43 },
    { name: "4-Ophtho: Introduction (L44)", data: window.Test_L44 },
    { name: "4-Neuro: Structure-Function Integration (L45)", data: window.Test_L45 },
    { name: "4-Neuro: Sensory Exam/Special Tests (L46)", data: window.Test_L46 },

    // --- Week 6 (L48-59) ---
    { name: "6-Pharmacology: Sedative Hypnotics (L48)", data: window.Test_L48 },
    { name: "6-Neurology: Sleep & Sleep Disturbances (L49)", data: window.Test_L49 },
    { name: "6-Neurology: Seizures & Epilepsy (L50)", data: window.Test_L50 },
    { name: "6-Neurology: Memory Disorders (L51)", data: window.Test_L51 },
    { name: "6-Pharmacology: Antiseizure Drugs I (L52)", data: window.Test_L52 },
    { name: "6-Pharmacology: Antiseizure Drugs II (L53)", data: window.Test_L53 },
    { name: "6-Neurology: Aphasia & Stroke (L54)", data: window.Test_L54 },
    { name: "6-Neurology: Cerebrovascular Disease (L55)", data: window.Test_L55 },
    { name: "6-Neurology: Neurodegenerative Diseases (L56)", data: window.Test_L56 },
    { name: "6-Neurology: Parkinson's Variants (L57)", data: window.Test_L57 },
    { name: "6-Pharmacology: Parkinson & Alzheimer (L58)", data: window.Test_L58 },
    { name: "6-Geriatrics: Aging Patient H&P (L59)", data: window.Test_L59 },
    { name: "6-Week 6 CUMULATIVE EXAM (L48-59)", data: window.Test_Cumulative_Week6 },

    // --- Week 7 ---
    { name: "7-OMM: Sacral MET 2 (L60)", data: window.Test_L60 },
    { name: "7-Neurology: Gait & Movement (L61)", data: window.Test_L61 },
    { name: "7-Neurology: Brachial Plexus (L62)", data: window.Test_L62 },
    { name: "7-Neurology: Headache (L63)", data: window.Test_L63 },
    { name: "7-Pharmacology: General Anesthetics 1 (L64)", data: window.Test_L64 },
    { name: "7-Pharmacology: General Anesthetics 2 (L65)", data: window.Test_L65 },
    { name: "7-Pharmacology: Local Anesthetics (L66)", data: window.Test_L66 },
    { name: "7-Pharmacology: Opioid Analgesics (L67)", data: window.Test_L67 },
    { name: "7-Physiology: Drug Addiction (L68)", data: window.Test_L68 },
    { name: "7-Psychiatry: Substance Use Disorders (L69)", data: window.Test_L69 },
    { name: "7-Pediatrics: H&P Part 1 (L70)", data: window.Test_L70 },
    { name: "7-Week 7 CUMULATIVE EXAM (L48-70)", data: window.Test_Cumulative_Week7 },

    // --- Week 8 ---
    { name: "8-OMM: Basics of Diagnosis AC/SC/GH (L71)", data: window.Test_L71 },
    { name: "8-Neurooncology: Gliomas & Ependymomas (L72)", data: window.Test_L72 },
    { name: "8-Neuronal Tumors, Medulloblastoma & Meningioma (L73)", data: window.Test_L73 },
    { name: "8-Neuro Birth Defects (L74)", data: window.Test_L74 },
    { name: "8-Pediatric Neuro 1 (L75)", data: window.Test_L75 },
    { name: "8-Pediatric Neuro II (L76)", data: window.Test_L76 },
    { name: "8-Neurodevelopment & Behav Problems (L77)", data: window.Test_L77 },
    { name: "8-ADHD & Adolescent Development (L78)", data: window.Test_L78 },
    { name: "8-Pharmacologic Management of ADHD (L79)", data: window.Test_L79 },
    { name: "8-Bipolar and Depressive Disorders (L80)", data: window.Test_L80 },
    { name: "8-Anxiety Disorders (L81)", data: window.Test_L81 },
    { name: "8-Schizophrenia and Psychotic Disorders (L82)", data: window.Test_L82 },
    { name: "8-Unusual Neurological Diseases (L83)", data: window.Test_L83 },
    { name: "8-Pediatrics Part 2 (L84)", data: window.Test_L84 },
    { name: "8-Week 6-8 CUMULATIVE EXAM", data: window.Test_Cumulative_Wk6_8 },

    // --- Week 9 ---
    { name: "9-Pharmacology: Antidepressants and Mood Stabilizers (L86)", data: window.Test_L86 },
    { name: "9-Pharmacology: Antipsychotics (L87)", data: window.Test_L87 },
    { name: "9-Psychotherapy: Basic Theoretical Principles (L88)", data: window.Test_L88 },
    { name: "9-Neuropsychological Testing (L89)", data: window.Test_L89 },
    { name: "9-Personality Disorders (L90)", data: window.Test_L90 },
    { name: "9-Eating Disorders (L91)", data: window.Test_L91 },
    { name: "9-Sexual Disorders (L92)", data: window.Test_L92 },
    { name: "9-Clinical Decision Making: Capacity & Commitment (L93)", data: window.Test_L93 },
    { name: "9-Disaster Psychiatry & PTSD (L94)", data: window.Test_L94 },
    { name: "9-Special Issues in Psychiatry (L95)", data: window.Test_L95 },
    { name: "9-Adolescent Wellness (L96)", data: window.Test_L96 },
    { name: "9-Week 6-9 CUMULATIVE EXAM", data: window.Test_Cumulative_Wk6_9 },

    // --- Week 12 ---
    { name: "12-CNS Viral Infections (L98)", data: window.Test_L98 },
    { name: "12-CNS Bacterial Infections (L99)", data: window.Test_L99 },
    { name: "12-CNS Fungal & Parasitic Infections (L100)", data: window.Test_L100 },
    { name: "12-Pharm: Antiherpes Antiviral Agents (L101)", data: window.Test_L101 },
    { name: "12-Pharm: CNS Infections (L102)", data: window.Test_L102 },
    { name: "12-Path: Skeletal Muscle (L103)", data: window.Test_L103 },
    { name: "12-Path: Bone & Joints Pt 1 (L104)", data: window.Test_L104 },
    { name: "12-Path: Bone & Joints Pt 2 (L105)", data: window.Test_L105 },
    { name: "12-Path: Pathology of Soft Tissue (L106)", data: window.Test_L106 },
    { name: "12-DPR: Hand & Wrist Exam (L107)", data: window.Test_L107 },
    { name: "12-DPR: Shoulder & Elbow (L108)", data: window.Test_L108 },
    { name: "12-Week 12 CUMULATIVE EXAM", data: window.Test_Cumulative_Week12 },

    // --- Week 13 ---
    { name: "13-OMM: Diagnosis of the Elbow and Wrist (L109)", data: window.Test_L109 },
    { name: "13-Intro to Orthopedics of Upper Extremity (L110)", data: window.Test_L110 },
    { name: "13-Orthopedics: Lower Extremity (L111)", data: window.Test_L111 },
    { name: "13-Orthopedic Concerns of Spine (L112)", data: window.Test_L112 },
    { name: "13-Imaging of the MSK System (L113)", data: window.Test_L113 },
    { name: "13-Intro to MSK Ultrasound (L114)", data: window.Test_L114 },
    { name: "13-Sports Medicine: Overuse Injuries (L115)", data: window.Test_L115 },
    { name: "13-Pediatric Orthopedics (L116)", data: window.Test_L116 },
    { name: "13-Pharm: Pharmacology of NSAIDs (L117)", data: window.Test_L117 },
    { name: "13-Pharm: Pharmacology of NSAIDs Part 2 (L118)", data: window.Test_L118 },
    { name: "13-Innate Immunity Part 1 (L119)", data: window.Test_L119 },
    { name: "13-Innate Immunity Part 2 (L120)", data: window.Test_L120 },
    { name: "13-DPR: History and Physical Exam of the Spine (L121)", data: window.Test_L121 },
    { name: "13-Week 13 CUMULATIVE EXAM", data: window.Test_Cumulative_Week13 },

    // --- Week 14 ---
    { name: "14-Adaptive Immunity Part 1 (L123)", data: window.Test_L123 },
    { name: "14-Adaptive Immunity Part 2 (L124)", data: window.Test_L124 },
    { name: "14-Immunologically Mediated Diseases (L125)", data: window.Test_L125 },
    { name: "14-Mechanisms of Autoimmunity (L126)", data: window.Test_L126 },
    { name: "14-Rheumatology 1: Diseases of Joints (L127)", data: window.Test_L127 },
    { name: "14-Rheumatology 2: Systemic Rheumatologic Disease (L128)", data: window.Test_L128 },
    { name: "14-Rheumatology 3: Diseases Affecting Muscle (L129)", data: window.Test_L129 },
    { name: "14-Pharm: Pharmacology of Gout and Pseudogout (L130)", data: window.Test_L130 },
    { name: "14-Pediatric Rheumatology (L131)", data: window.Test_L131 },
    { name: "14-Pharm: Pharmacology of DMARDs I (L132)", data: window.Test_L132 },
    { name: "14-Pharm: Pharmacology of DMARDs II (L133)", data: window.Test_L133 },
    { name: "14-DPR: Hip and Knee Exam (L134)", data: window.Test_L134 },
    { name: "14-DPR: Ankle and Foot Exam (L135)", data: window.Test_L135 },
    { name: "14-Week 14 CUMULATIVE EXAM", data: window.Test_Cumulative_Week14 },

    // --- Week 15 ---
    { name: "15-Test of Immune Function (L137)", data: window.Test_L137 },
    { name: "15-Diagnosis of Immediate Hypersensitivity (L138)", data: window.Test_L138 },
    { name: "15-Allergens and Allergic Rhinitis (L139)", data: window.Test_L139 },
    { name: "15-Anaphylaxis and Allergic Reactions (L140)", data: window.Test_L140 },
    { name: "15-Immunogenetics, Lymphocyte Activation, Immune Reg. and Tolerance 1 (L141)", data: window.Test_L141 },
    { name: "15-Immunogenetics, Lymphocyte Activation, Immune Reg. and Tolerance 2 (L142)", data: window.Test_L142 },
    { name: "15-Pharmacology Immunosuppressants Part 1 (L143)", data: window.Test_L143 },
    { name: "15-Pharmacology Immunosuppressants Part 2 (L144)", data: window.Test_L144 },
    { name: "15-Clinical Approach to Immunodeficiencies (L145)", data: window.Test_L145 },
    { name: "15-Pediatric Immunology (L146)", data: window.Test_L146 },
    { name: "15-Public & Global Health: Role of Immunizations (L147)", data: window.Test_L147 },
    { name: "15-Week 12-15 CUMULATIVE EXAM", data: window.Test_Cumulative_Wk12_15 },

    // --- Week 17 ---
    { name: "17-Hematology: ABO Groups, Rh Disease (L149)", data: window.Test_L149 },
    { name: "17-Hematology: Hematopoiesis (L150)", data: window.Test_L150 },
    { name: "17-Hematology: Laboratory Medicine and Anemias Part 1 (L151)", data: window.Test_L151 },
    { name: "17-Hematology: Laboratory Medicine and Anemias Part 1 - Vignettes Part 2 (L151)", data: window.Test_L151_Part2 },
    { name: "17-Hematology: Laboratory Medicine and Anemias Part 2 (L152)", data: window.Test_L152 },
    { name: "17-Hematology: Laboratory Medicine and Anemias Part 2 - Vignettes Part 2 (L152)", data: window.Test_L152_Part2 },
    { name: "17-Hematology: Pharmacology of Anemias (L153)", data: window.Test_L153 },
    { name: "17-Hematology: Leukemias, Lymphomas, and Plasma Cell Neoplasms (L154)", data: window.Test_L154 },
    { name: "17-Hematology: Leukemias - Vignettes Part 2 (L154)", data: window.Test_L154_Part2 },
    { name: "17-Hematology: Lymphomas (L155)", data: window.Test_L155 },
    { name: "17-Hematology: Lymphomas - Vignettes Part 2 (L155)", data: window.Test_L155_Part2 },
    { name: "17-Pharmacology: Antineoplastic Agents 1 (L156)", data: window.Test_L156 },
    { name: "17-Pharmacology: Antineoplastic Agents 2 (L157)", data: window.Test_L157 },
    { name: "17-Hematology: Pathology: Hemostasis (L158)", data: window.Test_L158 },
    { name: "17-Clinical Medicine: Introduction to the Gynecological and Obstetrical History (L159)", data: window.Test_L159 },
    { name: "17-Week 17 CUMULATIVE EXAM", data: window.Test_Cumulative_Week17 },

    // --- Week 18 ---
    { name: "18-Hematology: Pathology of Hemorrhage (L161)", data: window.Test_L161 },
    { name: "18-Hematology: Pathology of Thrombosis (L162)", data: window.Test_L162 },
    { name: "18-Hematology: Pediatric Considerations in Hematology and Oncology (L163)", data: window.Test_L163 },
    { name: "18-Pharmacology: Drugs Used in Coagulation Disorders, Part 1 (L164)", data: window.Test_L164 },
    { name: "18-Pharmacology: Drugs Used in Coagulation Disorders, Part 2 (L165)", data: window.Test_L165 },
    { name: "18-Microbiology: Emerging Blood Borne Infections (L166)", data: window.Test_L166 },
    { name: "18-Microbiology: Emerging Blood Borne Infections - Vignettes Part 2 (L166)", data: window.Test_L166_Part2 },
    { name: "18-Microbiology: HIV, AIDS and Human Retroviruses (L167)", data: window.Test_L167 },
    { name: "18-Microbiology: Hemorrhagic Viral Infections (L168)", data: window.Test_L168 },
    { name: "18-Microbiology: Opportunistic Infections (L169)", data: window.Test_L169 },
    { name: "18-DPR: Introduction to Behavioral Medicine (L170)", data: window.Test_L170 },
    { name: "18-Week 18 CUMULATIVE EXAM", data: window.Test_Cumulative_Week18 },

    { name: "19-Pharmacology: Chemotherapy of Malaria (L172)", data: window.Test_L172 },
    { name: "19-Pharmacology: Chemotherapy of Protozoal Infections (L173)", data: window.Test_L173 },
    { name: "19-Histology: Skin Part 1 - Epidermis, Dermis, Hypodermis (L174)", data: window.Test_L174 },
    { name: "19-Histology: Skin Part 2 - Hair, Nails, Glands, Sensory Receptors (L175)", data: window.Test_L175 },
    { name: "19-Microbiology: Skin and Mucous Membrane Infections (L176)", data: window.Test_L176 },
    { name: "19-Microbiology: Zoonotic Infections (L177)", data: window.Test_L177 },
    { name: "19-Pharmacology of Antifungal Agents (L178)", data: window.Test_L178 },
    { name: "19-DPR: History and Physical Exam of the Integumentary System (L179)", data: window.Test_L179 },
    { name: "19-Dermatology: Viral Exanthems (L180)", data: window.Test_L180 },
    { name: "19-Non-Neoplastic Skin Pathology (L181)", data: window.Test_L181 },
    { name: "19-Pathology: Skin Tumors (L182)", data: window.Test_L182 },
    { name: "19-Week 19 CUMULATIVE EXAM", data: window.Test_Cumulative_Week19 },

    { name: "20-Pharmacology: Antiretroviral Drugs Part 1 (L184)", data: window.Test_L184 },
    { name: "20-Pharmacology: Antiretroviral Drugs Part 2 (L185)", data: window.Test_L185 },
    { name: "20-Dermatology: Stasis Dermatitis and Papulosquamous Eruptions (L186)", data: window.Test_L186 },
    { name: "20-Dermatology: Dermatologic Signs of Systemic Diseases (L187)", data: window.Test_L187 },
    { name: "20-Dermatology: Evaluation of Pigmented Lesions (L188)", data: window.Test_L188 },
    { name: "20-Dermatology: Dermatologic Emergencies (L189)", data: window.Test_L189 },
    { name: "20-Physiology: Thermoregulation (L190)", data: window.Test_L190 },
    { name: "20-Cold Related Injuries & Emergency Treatment of Hypothermia (L191)", data: window.Test_L191 },
    { name: "20-Emergency Treatment of Hyperthermia (L192)", data: window.Test_L192 },
    { name: "20-Week 20 CUMULATIVE EXAM", data: window.Test_Cumulative_Week20 },

    // --- Pathoma (Section IV supplemental: Chapter 6 White Blood Cell Disorders) ---
    { name: "Pathoma-Acute Leukemia (6.2)", data: window.Test_Pathoma_6_2 },
    { name: "Pathoma-Chronic Leukemia (6.3)", data: window.Test_Pathoma_6_3 },
    { name: "Pathoma-Myeloproliferative Disorders (6.4)", data: window.Test_Pathoma_6_4 },
    { name: "Pathoma-LAD, Lymphoma, & Hodgkin Lymphoma (6.5-6.7)", data: window.Test_Pathoma_6_5_7 },
    { name: "Cardio-Physiology: Cardiac Action Potentials (CV22)", data: window.Test_CV22 },
    { name: "Cardio-OMM: Balanced Ligamentous Tension (BLT) (CV1)", data: window.Test_CV1 },
    { name: "Cardio-OMM: Balanced Ligamentous Tension (BLT) (CV2)", data: window.Test_CV2 },
    { name: "Cardio-Anatomy: Genitourinary Embryology (CV3)", data: window.Test_CV3 },
    { name: "Cardio-Physiology: Solute Transport & Fluid Movement (CV4)", data: window.Test_CV4 },
    { name: "Cardio-Physiology: Organization of the Urinary System (CV6)", data: window.Test_CV6 },
    { name: "Cardio-Physiology: GFR, Renal Blood Flow & Clearance (CV7)", data: window.Test_CV7 },
    { name: "Cardio-Physiology: Regulation of Sodium & Water Excretion (CV8)", data: window.Test_CV8 },
    { name: "Cardio-Physiology: K+, Ca++, Mg++ & Phosphate Transport (CV9)", data: window.Test_CV9 },
    { name: "Cardio-Physiology: Urea, Glucose & Organic Solute Transport (CV10)", data: window.Test_CV10 },
    { name: "Cardio-OMM: Osteopathy in the Cranial Field (CV11)", data: window.Test_CV11 },
    { name: "Cardio-OMM: SBS Strain Patterns (CV12)", data: window.Test_CV12 },
    { name: "Cardio-OMM: Intro to the Cranial Field & OA Decompression (CV13)", data: window.Test_CV13 },
    { name: "Cardio-OMM: Cranial Strain Patterns, Condylar Decompression & Lifts (CV21)", data: window.Test_CV21 },
];

if (typeof window !== "undefined") {
    window.testsToLoad = testsToLoad;
}
