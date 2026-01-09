window.Test_L5 = [
    {
        "id": 1,
        "category": "Neuroimaging: Stroke Protocol",
        "questionText": "A 65-year-old male presents to the ER with acute onset right-sided hemiplegia and aphasia starting 45 minutes ago. What is the most appropriate initial imaging modality?",
        "options": [
            {
                "text": "MRI Brain with Contrast",
                "explanation": "Incorrect. Too slow, and contrast is not needed initially."
            },
            {
                "text": "MRI Brain without Contrast (DWI)",
                "explanation": "Incorrect. While most sensitive for ischemia, it is not the FIRST line. We must rule out hemorrhage first to determine tPA eligibility, and MRI takes too long (claustrophobia, screening)."
            },
            {
                "text": "Non-Contrast CT Head",
                "explanation": "Correct. The immediate goal is to rule out intracranial hemorrhage (which shows up bright white). If negative, the patient may be a candidate for thrombolytics (tPA). CT is fast (<30s)."
            },
            {
                "text": "CT Angiography",
                "explanation": "Incorrect. Usually done AFTER the non-contrast head CT."
            },
            {
                "text": "Catheter Angiography",
                "explanation": "Incorrect. Invasive."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Key takeaway: Acute Stroke -> Non-Contrast CT first to rule out bleed. Time is Brain.",
        "pdfPage": 3
    },
    {
        "id": 2,
        "category": "Neuroimaging: MRI Contraindications",
        "questionText": "You wish to order an MRI for a 40-year-old female with multiple sclerosis symptoms. Which of the following in her history is an absolute contraindication to MRI?",
        "options": [
            {
                "text": "Dental Fillings",
                "explanation": "Incorrect. Amalgam fillings are safe (may cause artifact)."
            },
            {
                "text": "Total Hip Replacement (Titanium)",
                "explanation": "Incorrect. Most modern orthopedic hardware is MRI safe (titanium/stainless steel non-ferromagnetic)."
            },
            {
                "text": "Cardiac Pacemaker (Older model)",
                "explanation": "Correct. Older pacemakers have ferromagnetic components and leads that can heat up or move in the strong magnetic field, causing death or arrhythmia."
            },
            {
                "text": "Pregnancy (2nd Trimester)",
                "explanation": "Incorrect. MRI is preferred over CT in pregnancy (no radiation)."
            },
            {
                "text": "Claustrophobia",
                "explanation": "Incorrect. Relative contraindication (can use sedation/open MRI)."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Key takeaway: 'Magnet moves Metal'. Pacemakers/Cochlear implants/Metallic foreign bodies in eye = NO MRI.",
        "pdfPage": 3
    },
    {
        "id": 3,
        "category": "Neuroimaging: CT Physics",
        "questionText": "On a standard Non-Contrast CT of the head, acute hemorrhage appears:",
        "options": [
            {
                "text": "Hypodense (Dark/Black)",
                "explanation": "Incorrect. This is CSF or old infarction (encephalomalacia)."
            },
            {
                "text": "Isodense (Grey)",
                "explanation": "Incorrect. Brain parenchyma."
            },
            {
                "text": "Hyperdense (Bright White)",
                "explanation": "Correct. High protein/hemoglobin content significantly attenuates X-rays, appearing bright (60-90 Hounsfield Units)."
            },
            {
                "text": "Invisible",
                "explanation": "Incorrect."
            },
            {
                "text": "Blue",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Key takeaway: Acute Blood = White on CT. Chronic Blood = Dark on CT.",
        "pdfPage": 18
    },
    {
        "id": 4,
        "category": "Neuroimaging: Trauma",
        "questionText": "A 22-year-old football player is hit hard and loses consciousness. A Non-Contrast CT shows a lens-shaped (biconvex) hyperdensity that does not cross suture lines. What is the diagnosis?",
        "options": [
            {
                "text": "Subdural Hematoma",
                "explanation": "Incorrect. Crescent-shaped, crosses sutures."
            },
            {
                "text": "Epidural Hematoma",
                "explanation": "Correct. Rupture of Middle Meningeal Artery. Bound by sutures (where dura attaches to skull) -> Lens/Lemon shape."
            },
            {
                "text": "Subarachnoid Hemorrhage",
                "explanation": "Incorrect. Blood in sulci/cisterns (Star shape)."
            },
            {
                "text": "Intraventricular Hemorrhage",
                "explanation": "Incorrect."
            },
            {
                "text": "Diffuse Axonal Injury",
                "explanation": "Incorrect. Petechial hemorrhages at grey-white junction."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Epidural = Lens (Lemon). Subdural = Crescent (Banana).",
        "pdfPage": 14
    },
    {
        "id": 5,
        "category": "Neuroimaging: MRI Sequences",
        "questionText": "Which MRI sequence is most sensitive for detecting acute ischemic stroke within minutes of onset?",
        "options": [
            {
                "text": "T1-weighted",
                "explanation": "Incorrect. Anatomy."
            },
            {
                "text": "T2-weighted",
                "explanation": "Incorrect. Shows edema later (hours)."
            },
            {
                "text": "FLAIR",
                "explanation": "Incorrect. Good for MS plaques."
            },
            {
                "text": "Diffusion Weighted Imaging (DWI)",
                "explanation": "Correct. Detects restriction of water movement (cytotoxic edema) almost immediately. Ischemia appears BRIGHT on DWI and DARK on ADC."
            },
            {
                "text": "Gradient Echo (GRE)",
                "explanation": "Incorrect. Assessing for blood (microbleeds)."
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Key takeaway: DWI detects Stroke immediately (Bright). CT takes 12-24h to show ischemia (Dark).",
        "pdfPage": 3
    },
    {
        "id": 6,
        "category": "Neuroimaging: Contrast",
        "questionText": "What is the primary risk associated with Gadolinium-based contrast agents used in MRI?",
        "options": [
            {
                "text": "Anaphylaxis (common)",
                "explanation": "Incorrect. Much rarer than with iodinated CT contrast."
            },
            {
                "text": "Nephrogenic Systemic Fibrosis (NSF)",
                "explanation": "Correct. In patients with severe renal failure (GFR < 30), gadolinium can deposit in tissues causing skin thickening and organ fibrosis."
            },
            {
                "text": "Radiation Burn",
                "explanation": "Incorrect. No radiation in MRI."
            },
            {
                "text": "Thyroid Storm",
                "explanation": "Incorrect."
            },
            {
                "text": "Hypoglycemia",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Check Kidney Function (GFR) before giving Gadolinium. NSF is rare but serious.",
        "pdfPage": 27
    },
    {
        "id": 7,
        "category": "Neuroimaging: Enhancement Patterns",
        "questionText": "A Ring-Enhancing lesion on a post-contrast CT scan is classically associated with:",
        "options": [
            {
                "text": "Meningioma",
                "explanation": "Incorrect. Homogeneous (diffuse) enhancement with a 'Dural Tail'."
            },
            {
                "text": "Abscess",
                "explanation": "Correct. Central necrosis (pus) does not enhance, the vascular capsule enhances -> Ring."
            },
            {
                "text": "Multiple Sclerosis",
                "explanation": "Incorrect. Plaques (Dawson's fingers)."
            },
            {
                "text": "Stroke",
                "explanation": "Incorrect. Gyriform enhancement (subacute)."
            },
            {
                "text": "Normal Brain",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Ring Enhancing Lesion Mnemonic 'MAGICAL DR': Metastasis, Abscess, Glioblastoma, Infarct, Contusion, AIDS, Lymphoma, Demyelination, Radiation.",
        "pdfPage": 15
    },
    {
        "id": 8,
        "category": "Neuroimaging: Pediatric",
        "questionText": "Why is MRI preferred over CT for investigating developmental delay or seizures in a child?",
        "options": [
            {
                "text": "It is faster",
                "explanation": "Incorrect. CT is faster (no sedation usually needed)."
            },
            {
                "text": "It is cheaper",
                "explanation": "Incorrect."
            },
            {
                "text": "Absence of Ionizing Radiation",
                "explanation": "Correct. Children are more radiosensitive (rapidly dividing cells). Repeated CTs increase lifetime cancer risk. ALARA principle."
            },
            {
                "text": "Better visualization of bone",
                "explanation": "Incorrect. CT is better for bone."
            },
            {
                "text": "Less motion artifact",
                "explanation": "Incorrect. MRI is worse for motion."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Key takeaway: ALARA (As Low As Reasonably Achievable). Avoid radiation in kids/pregnancy if possible.",
        "pdfPage": 12
    },
    {
        "id": 9,
        "category": "Neuroimaging: Windows",
        "questionText": "When modifying the 'Window' of a CT scan from 'Brain Window' to 'Bone Window', you are changing:",
        "options": [
            {
                "text": "The amount of radiation delivered",
                "explanation": "Incorrect. Radiation happened during acquisition."
            },
            {
                "text": "The post-processing display settings (Contrast/Brightness)",
                "explanation": "Correct. It's a software manipulation of the Hounsfield Units displayed to maximize contrast for specific tissues."
            },
            {
                "text": "The patient's position",
                "explanation": "Incorrect."
            },
            {
                "text": "The intravenous contrast",
                "explanation": "Incorrect."
            },
            {
                "text": "The magnetic field strength",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: One scan can be viewed in multiple windows (Bone, Soft Tissue, Brain, Lung) by the radiologist.",
        "pdfPage": 7
    },
    {
        "id": 10,
        "category": "Neuroimaging: SAH",
        "questionText": "A 'Star-shaped' hyperdensity in the suprasellar cisterns is characteristic of:",
        "options": [
            {
                "text": "Subdural Hematoma",
                "explanation": "Incorrect."
            },
            {
                "text": "Epidural Hematoma",
                "explanation": "Incorrect."
            },
            {
                "text": "Subarachnoid Hemorrhage (SAH)",
                "explanation": "Correct. Blood fills the basal cisterns outlining the brainstem and Circle of Willis, looking like a star."
            },
            {
                "text": "Intraparenchymal Hemorrhage",
                "explanation": "Incorrect."
            },
            {
                "text": "Normal anatomy",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Key takeaway: SAH fills the 'spaces' (cisterns/sulci).",
        "pdfPage": 10
    },
    {
        "id": 11,
        "category": "Neuroimaging: T1 vs T2",
        "questionText": "In a T2-weighted MRI image, Cerebrospinal Fluid (CSF) appears:",
        "options": [
            {
                "text": "Dark (Hypointense)",
                "explanation": "Incorrect. That's T1 or FLAIR."
            },
            {
                "text": "Bright (Hyperintense)",
                "explanation": "Correct. T2 = H2O is Bright. CSF is mostly water."
            },
            {
                "text": "Grey (Isointense)",
                "explanation": "Incorrect."
            },
            {
                "text": "Red",
                "explanation": "Incorrect."
            },
            {
                "text": "Invisible",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: T2: H2O is Bright (WW2: Water is White on 2).",
        "pdfPage": 2
    },
    {
        "id": 12,
        "category": "Neuroimaging: Modalities",
        "questionText": "A pregnant woman presents with a severe headache and suspected venous sinus thrombosis. The preferred imaging modality is:",
        "options": [
            {
                "text": "CT Venogram",
                "explanation": "Incorrect. Radiation risk."
            },
            {
                "text": "MR Venogram (MRV)",
                "explanation": "Correct. Can see venous flow without radiation. Can be done without contrast (Time-of-Flight)."
            },
            {
                "text": "X-ray of Skull",
                "explanation": "Incorrect."
            },
            {
                "text": "PET Scan",
                "explanation": "Incorrect. Radiation."
            },
            {
                "text": "Lumbar Puncture alone",
                "explanation": "Incorrect. Need to rule out mass effect first."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: MRV is excellent for dural venous sinus thrombosis, especially in pregnancy.",
        "pdfPage": 3
    },
    {
        "id": 13,
        "category": "Neuroimaging: Hounsfield Units",
        "questionText": "Air has a Hounsfield Unit (HU) value of approximately:",
        "options": [
            {
                "text": "+1000",
                "explanation": "Incorrect. Bone."
            },
            {
                "text": "+60",
                "explanation": "Incorrect. Blood."
            },
            {
                "text": "0",
                "explanation": "Incorrect. Water."
            },
            {
                "text": "-1000",
                "explanation": "Correct. Air absorbs typically no X-rays, so it is the blackest thing on CT."
            },
            {
                "text": "-50",
                "explanation": "Incorrect. Fat."
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Key takeaway: Measurements of HU can tell you if a lesion is Fat (-50), Water (0), or Blood (+60).",
        "pdfPage": 6
    },
    {
        "id": 14,
        "category": "Neuroimaging: Ultrasound",
        "questionText": "Carotid Ultrasound aids primarily in the diagnosis of:",
        "options": [
            {
                "text": "Intracranial Aneurysms",
                "explanation": "Incorrect. Bone blocks the sound."
            },
            {
                "text": "Extracranial Carotid Stenosis",
                "explanation": "Correct. Evaluates the cervical ICA/ECA for atherosclerotic plaque and flow velocity (Doppler)."
            },
            {
                "text": "Brain Tumor",
                "explanation": "Incorrect."
            },
            {
                "text": "Multiple Sclerosis",
                "explanation": "Incorrect."
            },
            {
                "text": "Meningitis",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: U/S is gold standard for SCREENING carotid stenosis. Cheap, safe, portable.",
        "pdfPage": 32
    },
    {
        "id": 15,
        "category": "Neuroimaging: Posterior Fossa",
        "questionText": "Why is CT poor for visualizing the Posterior Fossa (Brainstem/Cerebellum)?",
        "options": [
            {
                "text": "Fluid content",
                "explanation": "Incorrect."
            },
            {
                "text": "Beam Hardening Artifact",
                "explanation": "Correct. Thick bone of the petrous temporal bones creates streak artifacts that obscure the brainstem."
            },
            {
                "text": "Lack of blood flow",
                "explanation": "Incorrect."
            },
            {
                "text": "Patient positioning",
                "explanation": "Incorrect."
            },
            {
                "text": "Radiation dose",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: For Brainstem pathology (e.g., Wallenberg syndrome), MRI is mandatory. CT will miss it.",
        "pdfPage": 5
    },
    {
        "id": 16,
        "category": "Neuroimaging: FLAIR",
        "questionText": "FLAIR (Fluid Attenuated Inversion Recovery) sequences are most useful for detecting:",
        "options": [
            {
                "text": "Bone fractures",
                "explanation": "Incorrect."
            },
            {
                "text": "Lipomas",
                "explanation": "Incorrect."
            },
            {
                "text": "Periventricular Plaques (MS) or Edema",
                "explanation": "Correct. By suppressing the bright CSF signal (making it dark), periventricular hyperintensities (which are also fluid/edema) stand out beautifully."
            },
            {
                "text": "Acute Hemorrhage",
                "explanation": "Incorrect. CT or GRE."
            },
            {
                "text": "Flow velocity",
                "explanation": "Incorrect. Angiography."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Key takeaway: FLAIR = T2 minus CSF. Best for demyelinating disease (MS).",
        "pdfPage": 20
    },
    {
        "id": 17,
        "category": "Neuroimaging: Angiography",
        "questionText": "The 'Gold Standard' for evaluation of cerebral interactional vascular anatomy (e.g., before coiling an aneurysm) is:",
        "options": [
            {
                "text": "CTA",
                "explanation": "Incorrect. Excellent, but not the gold standard."
            },
            {
                "text": "MRA",
                "explanation": "Incorrect. Good screening."
            },
            {
                "text": "Digital Subtraction Angiography (Conventional Cath Angio)",
                "explanation": "Correct. Invasive, highest spatial and temporal resolution. Allows treatment (intervention) at the same time."
            },
            {
                "text": "Duplex Ultrasound",
                "explanation": "Incorrect."
            },
            {
                "text": "Plain X-ray",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Key takeaway: DSA (Cath Lab) is invasive but definitive. CTA/MRA are non-invasive screenings.",
        "pdfPage": 37
    },
    {
        "id": 18,
        "category": "Neuroimaging: Contrast Allergy",
        "questionText": "A patient with a documented severe anaphylactic reaction to iodinated contrast typically pre-medicated with:",
        "options": [
            {
                "text": "Antibiotics",
                "explanation": "Incorrect."
            },
            {
                "text": "Steroids and Antihistamines",
                "explanation": "Correct. Prednisone and Benadryl protocol reduces risk (but doesn't eliminate it). Or, switch to MRI/Non-contrast if possible."
            },
            {
                "text": "Adrenaline",
                "explanation": "Incorrect. Treatment, not prophylaxis."
            },
            {
                "text": "Insulin",
                "explanation": "Incorrect."
            },
            {
                "text": "Aspirin",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Shellfish allergy is NO LONGER considered cross-reactive with iodine contrast, but 'Contrast Allergy' is.",
        "pdfPage": 16
    },
    {
        "id": 19,
        "category": "Neuroimaging: Artifacts",
        "questionText": "Motion artifact is significantly more problematic in:",
        "options": [
            {
                "text": "CT",
                "explanation": "Incorrect. Fast acquisition freezes motion."
            },
            {
                "text": "MRI",
                "explanation": "Correct. Acquisition takes minutes. If patient moves, the whole sequence is blurry/useless. Requires cooperative patient."
            },
            {
                "text": "Ultrasound",
                "explanation": "Incorrect. Real-time."
            },
            {
                "text": "X-ray",
                "explanation": "Incorrect."
            },
            {
                "text": "Fluoroscopy",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Confused/Agitated patient? CT is better than MRI.",
        "pdfPage": 20
    },
    {
        "id": 20,
        "category": "Neuroimaging: T1 Bright",
        "questionText": "On a T1-weighted MRI, which tissue normally appears bright (Hyperintense)?",
        "options": [
            {
                "text": "CSF",
                "explanation": "Incorrect. Dark on T1."
            },
            {
                "text": "Water",
                "explanation": "Incorrect. Dark on T1."
            },
            {
                "text": "Fat",
                "explanation": "Correct. Subcutaneous fat, marrow fat, etc. is bright on T1. 'Anatomy' scan."
            },
            {
                "text": "Air",
                "explanation": "Incorrect. Dark (no signal)."
            },
            {
                "text": "Bone Cortex",
                "explanation": "Incorrect. Dark (no protons)."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Key takeaway: T1: Fat is Bright. T2: Fat is also bright (unless suppressed), but Water is brightest.",
        "pdfPage": 6
    },
    {
        "id": 21,
        "category": "Neuroimaging: CT Indications",
        "questionText": "The \"Thunderclap Headache\" (Worst headache of life) requires rule-out of SAH. If the CT is negative but clinical suspicion remains high (e.g., <6 hours since onset CT is 100%, but >6h sensitivity drops), what is the next step?",
        "options": [
            {
                "text": "Send home",
                "explanation": "Incorrect."
            },
            {
                "text": "Lumbar Puncture (LP)",
                "explanation": "Correct. Look for Xanthochromia (yellow supernatant) or RBCs. Though older teaching, failure to diagnose SAH is fatal."
            },
            {
                "text": "EEG",
                "explanation": "Incorrect."
            },
            {
                "text": "Carotid Ultrasound",
                "explanation": "Incorrect."
            },
            {
                "text": "Physical Therapy",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: CT Negative for SAH? -> Lumbar Puncture is the classic next step (though modern CT is very good).",
        "pdfPage": 3
    },
    {
        "id": 22,
        "category": "Neuroimaging: Meningioma",
        "questionText": "A dural-based mass that enhances homogeneously and avidly with contrast is likely a:",
        "options": [
            {
                "text": "Glioblastoma",
                "explanation": "Incorrect. Ring enhancing, necrotic center, in parenchyma."
            },
            {
                "text": "Meningioma",
                "explanation": "Correct. Extra-axial, slow growing, 'Dural Tail' sign."
            },
            {
                "text": "Cyst",
                "explanation": "Incorrect. Does not enhance (fluid)."
            },
            {
                "text": "Infarct",
                "explanation": "Incorrect."
            },
            {
                "text": "Hematoma",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Meningiomas are 'Bright Lightbulbs' on post-contrast MRI.",
        "pdfPage": 14
    },
    {
        "id": 23,
        "category": "Neuroimaging: Functional MRI",
        "questionText": "Functional MRI (fMRI) relies on detecting:",
        "options": [
            {
                "text": "Electrical impulses directly",
                "explanation": "Incorrect. That's EEG/MEG."
            },
            {
                "text": "BOLD signal (Blood Oxygen Level Dependent) changes",
                "explanation": "Correct. Active neurons use O2, changing the ratio of oxy- to deoxyhemoglobin, which have different magnetic properties."
            },
            {
                "text": "Glucose metabolism",
                "explanation": "Incorrect. PET."
            },
            {
                "text": "Water diffusion",
                "explanation": "Incorrect. DWI."
            },
            {
                "text": "Neurotransmitter levels",
                "explanation": "Incorrect. SPECT/PET."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: fMRI maps brain activity for pre-surgical planning (e.g., avoid Broca's area).",
        "pdfPage": 29
    },
    {
        "id": 24,
        "category": "Neuroimaging: PET Scan",
        "questionText": "PET scans usually utilize which radiotracer to map metabolic activity (e.g., in metastatic cancer)?",
        "options": [
            {
                "text": "Technetium-99",
                "explanation": "Incorrect. Bone scan/VQ."
            },
            {
                "text": "FDG (Fluorodeoxyglucose)",
                "explanation": "Correct. Glucose analog. Cancer cells (and brain) use lots of glucose -> Hot spots."
            },
            {
                "text": "Gadolinium",
                "explanation": "Incorrect. MRI contrast."
            },
            {
                "text": "Iodine",
                "explanation": "Incorrect. CT contrast."
            },
            {
                "text": "Barium",
                "explanation": "Incorrect. GI fluoroscopy."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: PET = Metabolism. High sugar use = Cancer (or Infection).",
        "pdfPage": 12
    },
    {
        "id": 25,
        "category": "Neuroimaging: Hydrocephalus",
        "questionText": "Enlargement of the temporal horns of the lateral ventricles is an early sign of:",
        "options": [
            {
                "text": "Atrophy",
                "explanation": "Incorrect. Ex Vacuo."
            },
            {
                "text": "Hydrocephalus",
                "explanation": "Correct. Mickey Mouse ears ballooning. Suggests increased pressure."
            },
            {
                "text": "Dehydration",
                "explanation": "Incorrect. Small ventricles."
            },
            {
                "text": "Tumor",
                "explanation": "Incorrect. Unless causing the hydrocephalus."
            },
            {
                "text": "Stroke",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Temporal horns should be barely visible. If big -> Hydrocephalus.",
        "pdfPage": 3
    },
    {
        "id": 26,
        "category": "Neuroimaging: CT Density",
        "questionText": "Which structure should be the brightest (most hyperdense) on a standard non-contrast CT brain window?",
        "options": [
            {
                "text": "Grey Matter",
                "explanation": "Incorrect."
            },
            {
                "text": "White Matter",
                "explanation": "Incorrect. Darker than grey (fat in myelin)."
            },
            {
                "text": "CSF",
                "explanation": "Incorrect. Black."
            },
            {
                "text": "Petrous Temporal Bone",
                "explanation": "Correct. Bone is +1000 HU."
            },
            {
                "text": "Calcified Pineal Gland",
                "explanation": "Incorrect. Bright, but bone is bigger/brighter typically implies the skull."
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Key takeaway: Bone is White.",
        "pdfPage": 7
    },
    {
        "id": 27,
        "category": "Neuroimaging: Pregnancy",
        "questionText": "A 28-year-old pregnant female (1st trimester) presents with suspected appendicitis. What is the imaging modality of choice to avoid fetal radiation?",
        "options": [
            {
                "text": "CT Abdomen/Pelvis",
                "explanation": "Incorrect. High radiation dose to fetus."
            },
            {
                "text": "Ultrasound",
                "explanation": "Correct. US (and then MRI if equivocal) is the pathway."
            },
            {
                "text": "X-ray",
                "explanation": "Incorrect."
            },
            {
                "text": "PET",
                "explanation": "Incorrect."
            },
            {
                "text": "Exploratory Laparoscopy",
                "explanation": "Incorrect. Too invasive."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Ultrasound/MRI are radiation-free. Use in pregnancy.",
        "pdfPage": 4
    },
    {
        "id": 28,
        "category": "Neuroimaging: DWI vs ADC",
        "questionText": "If a lesion is Bright on DWI and Dark on ADC map, it represents:",
        "options": [
            {
                "text": "T2 Shine-through",
                "explanation": "Incorrect. (Bright on both)."
            },
            {
                "text": "True Restricted Diffusion (Acute Stroke/Abscess)",
                "explanation": "Correct. The mismatch confirms it is true restriction, not just edema."
            },
            {
                "text": "Cyst",
                "explanation": "Incorrect. Dark on DWI (free movement)."
            },
            {
                "text": "Normal CSF",
                "explanation": "Incorrect."
            },
            {
                "text": "Fat",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: DWI bright + ADC dark = Acute Stroke.",
        "pdfPage": 18
    },
    {
        "id": 29,
        "category": "Neuroimaging: Contrast Extravasation",
        "questionText": "Enhancement of a lesion implies disturbance of the:",
        "options": [
            {
                "text": "Blood-Brain Barrier (BBB)",
                "explanation": "Correct. Contrast normally stays in vessels. If it leaks into parenchyma (enhancement), the BBB is broken (Tumor, Infection, Acute Inflammation)."
            },
            {
                "text": "Blood-CSF Barrier",
                "explanation": "Incorrect."
            },
            {
                "text": "Skull integrity",
                "explanation": "Incorrect."
            },
            {
                "text": "Ventricular system",
                "explanation": "Incorrect."
            },
            {
                "text": "Myelin sheath",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Key takeaway: Enhancement = Broken BBB.",
        "pdfPage": 39
    },
    {
        "id": 30,
        "category": "Neuroimaging: Spinal Cord",
        "questionText": "For suspected spinal cord compression (myelopathy), the gold standard visualization is:",
        "options": [
            {
                "text": "CT Spine",
                "explanation": "Incorrect. Good for bone, poor for cord."
            },
            {
                "text": "MRI Spine",
                "explanation": "Correct. Visualizes cord signal, discs, nerves, and ligaments."
            },
            {
                "text": "X-ray Spine",
                "explanation": "Incorrect. Bones only."
            },
            {
                "text": "Bone Scan",
                "explanation": "Incorrect. Metastasis."
            },
            {
                "text": "Myelogram",
                "explanation": "Incorrect. Invasive (inject contrast into CSF). Used if MRI contraindicated."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Cord pathology = MRI.",
        "pdfPage": 21
    },
    {
        "id": 31,
        "category": "Neuroimaging: Iodine",
        "questionText": "Iodinated contrast is cleared primarily by the:",
        "options": [
            {
                "text": "Liver",
                "explanation": "Incorrect. Gadolinium (some types) / Biliary."
            },
            {
                "text": "Lungs",
                "explanation": "Incorrect."
            },
            {
                "text": "Kidneys",
                "explanation": "Correct. Contrast induced nephropathy is a risk in pre-existing renal failure. Fluids (Hydration) are protective."
            },
            {
                "text": "Skin",
                "explanation": "Incorrect."
            },
            {
                "text": "Spleen",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Key takeaway: Hydrate patients before CT Contrast to protect kidneys.",
        "pdfPage": 13
    },
    {
        "id": 32,
        "category": "Neuroimaging: Midline Shift",
        "questionText": "On a CT head, 'Midline Shift' refers to:",
        "options": [
            {
                "text": "Movement of the patient typically",
                "explanation": "Incorrect."
            },
            {
                "text": "Displacement of the septum pellucidum/pineal past the centerline",
                "explanation": "Correct. Indicates mass effect (herniation risk). >5mm is concerning."
            },
            {
                "text": "Asymmetry of the ventricles normally",
                "explanation": "Incorrect."
            },
            {
                "text": "Rotation of the scan",
                "explanation": "Incorrect."
            },
            {
                "text": "Tumor growth",
                "explanation": "Incorrect. It is the effect of the tumor."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Midline shift = ICP gradient = Herniation risk.",
        "pdfPage": 3
    },
    {
        "id": 33,
        "category": "Neuroimaging: CTA vs MRA",
        "questionText": "To evaluate the carotid arteries for dissection in a trauma patient, CTA is often preferred over MRA because:",
        "options": [
            {
                "text": "It has no radiation",
                "explanation": "Incorrect."
            },
            {
                "text": "It is faster and less susceptible to motion",
                "explanation": "Correct. Trauma patients move. MRI takes too long. CTA is robust."
            },
            {
                "text": "It creates better soft tissue pictures",
                "explanation": "Incorrect."
            },
            {
                "text": "It uses safer contrast",
                "explanation": "Incorrect."
            },
            {
                "text": "It shows nerve injury",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Trauma = CT/CTA. Elective/Outpatient = MRI/MRA.",
        "pdfPage": 11
    },
    {
        "id": 34,
        "category": "Neuroimaging: Brain Death",
        "questionText": "A Nuclear Medicine Brain Scan (HMPAO) showing 'Empty Skull Sign' (no uptake in brain) is used to confirm:",
        "options": [
            {
                "text": "Alzheimer's",
                "explanation": "Incorrect."
            },
            {
                "text": "Brain Death",
                "explanation": "Correct. No blood flow = No uptake = Brain Death."
            },
            {
                "text": "Epilepsy",
                "explanation": "Incorrect."
            },
            {
                "text": "Tumor",
                "explanation": "Incorrect."
            },
            {
                "text": "Stroke",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Brain Death = No flow.",
        "pdfPage": 2
    },
    {
        "id": 35,
        "category": "Neuroimaging: Fat Suppression",
        "questionText": "Why is Fat Suppression (STIR or Fat-Sat) used in Orbital MRI?",
        "options": [
            {
                "text": "To make the globe look rounder",
                "explanation": "Incorrect."
            },
            {
                "text": "To distinguish optic nerve pathology (inflammation) from orbital fat",
                "explanation": "Correct. The orbit is full of bright fat on T1/T2. Suppressing it allows visualization of the enhancing Optic Nerve (Optic Neuritis)."
            },
            {
                "text": "To reduce radiation",
                "explanation": "Incorrect."
            },
            {
                "text": "To see bone",
                "explanation": "Incorrect."
            },
            {
                "text": "To warm the patient",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Key takeaway: Fat Sat is crucial for Orbit and Spine imaging to see pathology amidst the fat.",
        "pdfPage": 18
    }
];
