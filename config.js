
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

    // Part 2
    { name: "Part 2 - Neuro: Cranial Nerves I-VI (L35)", data: window.Test_L35_Part2 },
    { name: "Part 2 - Neuro: Cranial Nerves VII-XII (L36)", data: window.Test_L36_Part2 },
    { name: "Part 2 - Hypothalamus (L11)", data: window.Test_L11_Part2 },
    { name: "Part 2 - Thalamus Anatomy & Phys (L12)", data: window.Test_L12_Part2 },
    { name: "Part 2 - Vestibular System (L18)", data: window.Test_L18_Part2 },
    { name: "Part 2 - Path: Auditory/Vestibular (L23)", data: window.Test_L23_Part2 },
    { name: "Part 2 - Neuro: Motor Systems I (L30)", data: window.Test_L30_Part2 },
    { name: "Part 2 - Pharm: Sympathomimetics I (L33)", data: window.Test_L33_Part2 },
    { name: "Part 2 - Neuro: Localization (L41)", data: window.Test_L41_Part2 },
    { name: "Part 2 - Pharm: MS (L43)", data: window.Test_L43_Part2 },
    { name: "Part 2 - Ophtho: Disorders (L44)", data: window.Test_L44_Part2 }
];
