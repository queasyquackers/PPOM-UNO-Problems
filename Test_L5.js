// Test_L5.js
window.Test_L5 = [
  {
    "id": 1,
    "category": "Neuroimaging Modalities",
    "questionText": "Which of the following imaging modalities exposes the patient to ionizing radiation?",
    "options": [
      {
        "text": "Magnetic Resonance Imaging (MRI)",
        "explanation": "Incorrect. MRI uses magnetic fields and radio waves, not ionizing radiation."
      },
      {
        "text": "Carotid Doppler Ultrasound",
        "explanation": "Incorrect. Ultrasound uses sound waves."
      },
      {
        "text": "Computed Tomography (CT)",
        "explanation": "Correct. CT scans use helical X-ray beams, which are a form of ionizing radiation. This is a key disadvantage to consider, especially in pediatrics and pregnancy."
      },
      {
        "text": "Electroencephalography (EEG)",
        "explanation": "Incorrect. EEG measures electrical activity."
      },
      {
        "text": "Transcranial Doppler",
        "explanation": "Incorrect. This is also ultrasound-based."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "CT scans expose patients to ionizing radiation (X-rays), whereas MRI and Ultrasound do not.",
    "pdfPage": 12
  },
  {
    "id": 2,
    "category": "Neuroimaging Modalities",
    "questionText": "What is the primary contraindication for performing an MRI in a patient?",
    "options": [
      {
        "text": "Iodine allergy",
        "explanation": "Incorrect. Iodine is used in CT contrast, not MRI. MRI uses Gadolinium."
      },
      {
        "text": "Elevated creatinine",
        "explanation": "Incorrect. This is a relative contraindication for Gadolinium contrast, but not for a non-contrast MRI itself."
      },
      {
        "text": "Ferromagnetic metallic implants",
        "explanation": "Correct. The strong magnetic field can move ferromagnetic objects (e.g., old aneurysm clips, metal in the eye, certain pacemakers) causing severe injury or death. Screening is critical."
      },
      {
        "text": "Claustrophobia",
        "explanation": "Incorrect. While a significant challenge, it can be managed with sedation or open MRI; it is not an absolute physical contraindication like metal."
      },
      {
        "text": "Pregnancy",
        "explanation": "Incorrect. MRI is preferred over CT in pregnancy due to lack of radiation."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Ferromagnetic implants (pacemakers, old clips) are absolute contraindications for MRI due to the missile effect or heating.",
    "pdfPage": 23
  },
  {
    "id": 3,
    "category": "Clinical Indications",
    "questionText": "A 65-year-old male presents to the ER with acute onset of left-sided weakness and facial droop that started 45 minutes ago. What is the initial diagnostic imaging study of choice?",
    "options": [
      {
        "text": "Non-contrast MRI Brain",
        "explanation": "Incorrect. While more sensitive, MRI takes too long. In acute ****** code, speed is key."
      },
      {
        "text": "Non-contrast CT Head",
        "explanation": "Correct. A non-contrast CT is the standard first-line test for acute ****** symptoms primarily to rule out intracranial hemorrhage before potential tPA administration. It is fast (<30s)."
      },
      {
        "text": "CT Angiogram of Head and Neck",
        "explanation": "Incorrect. This may be done subsequently, but the non-contrast CT is first."
      },
      {
        "text": "Carotid Ultrasound",
        "explanation": "Incorrect. This is for workup of stenosis, not acute emergent ****** triage."
      },
      {
        "text": "Lumbar Puncture",
        "explanation": "Incorrect. Contraindicated with mass effect and not first-line for ischemic ******."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Non-contrast CT Head is the gold standard initial imaging for suspected stroke to rule out hemorrhage.",
    "pdfPage": 11
  },
  {
    "id": 4,
    "category": "Neuroimaging Modalities",
    "questionText": "Which CT 'window' would be best for evaluating a skull fracture?",
    "options": [
      {
        "text": "Brain window",
        "explanation": "Incorrect. Optimizes contrast between grey and white matter."
      },
      {
        "text": "Soft tissue window",
        "explanation": "Incorrect. For muscles and fat."
      },
      {
        "text": "Bone window",
        "explanation": "Correct. Bone windows use a wide window width to visualize the high-density cortical bone and medullary cavity, allowing detection of fractures."
      },
      {
        "text": "Lung window",
        "explanation": "Incorrect."
      },
      {
        "text": "Subdural window",
        "explanation": "Incorrect. Used to see blood collection."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "CT 'Windows' are software adjustments to highlight specific densities. Bone windows are essential for fractures.",
    "pdfPage": 7
  },
  {
    "id": 5,
    "category": "Contrast Agents",
    "questionText": "Nephrogenic Systemic Fibrosis (NSF) is a rare but serious complication associated with which contrast agent in patients with severe renal impairment?",
    "options": [
      {
        "text": "Iodinated contrast",
        "explanation": "Incorrect. associated with Contrast-Induced Nephropathy (CIN)."
      },
      {
        "text": "Barium sulfate",
        "explanation": "Incorrect. Used in GI studies."
      },
      {
        "text": "Gadolinium-based contrast",
        "explanation": "Correct. Gadolinium, used in MRI, is linked to NSF (skin thickening, organ fibrosis) in patients with GFR < 30."
      },
      {
        "text": "Technetium-99m",
        "explanation": "Incorrect. Used in nuclear medicine."
      },
      {
        "text": "Microbubble contrast",
        "explanation": "Incorrect. Used in ultrasound."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Gadolinium MRI contrast can cause Nephrogenic Systemic Fibrosis (NSF) in patients with severe renal failure (GFR < 30).",
    "pdfPage": 27
  },
  {
    "id": 6,
    "category": "Clinical Indications",
    "questionText": "A 30-year-old pregnant female presents with a new onset seizure. To evaluate for a structural brain lesion while minimizing risk to the fetus, what is the preferred imaging modality?",
    "options": [
      {
        "text": "CT Head with contrast",
        "explanation": "Incorrect. Radiation and iodine cross the placenta."
      },
      {
        "text": "CT Head without contrast",
        "explanation": "Incorrect. Ionizing radiation is teratogenic/carcinogenic risk."
      },
      {
        "text": "MRI Brain without contrast",
        "explanation": "Correct. MRI uses no ionizing radiation and is preferred in pregnancy. Gadolinium is generally avoided if possible, so non-contrast is the safest initial structural screen."
      },
      {
        "text": "Plain film X-ray",
        "explanation": "Incorrect. Low yield for brain parenchyma and still uses radiation."
      },
      {
        "text": "PET Scan",
        "explanation": "Incorrect. Uses radiotracers."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "MRI is the preferred neuroimaging modality in pregnancy and pediatrics to avoid ionizing radiation.",
    "pdfPage": 21
  },
  {
    "id": 7,
    "category": "Neuroanatomy/Imaging",
    "questionText": "On a standard T1-weighted MRI image, cerebrospinal fluid (CSF) appears:",
    "options": [
      {
        "text": "Bright (Hyperintense)",
        "explanation": "Incorrect. CSF is bright on T2."
      },
      {
        "text": "Dark (Hypointense)",
        "explanation": "Correct. Water/CSF is dark on T1 and bright on T2. (Mnemonic: H2O is bright on T2)."
      },
      {
        "text": "Isointense to gray matter",
        "explanation": "Incorrect."
      },
      {
        "text": "Isointense to white matter",
        "explanation": "Incorrect."
      },
      {
        "text": "Enhancing",
        "explanation": "Incorrect. Normal CSF does not enhance."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "MRI Physics: Fluid (CSF) is DARK on T1 and BRIGHT on T2.",
    "pdfPage": 20
  },
  {
    "id": 8,
    "category": "Clinical Indications",
    "questionText": "Which imaging modality is the 'Gold Standard' for detecting early ischemic strokes (within the first few hours) that may be occult on CT?",
    "options": [
      {
        "text": "CT Angiography",
        "explanation": "Incorrect. Shows vessels, not necessarily the parenchymal swallow."
      },
      {
        "text": "Diffusion-Weighted MRI (DWI)",
        "explanation": "Correct. DWI is the most sensitive sequence for detecting acute ischemia (cytotoxic edema), often showing changes within minutes, whereas CT may be normal for hours."
      },
      {
        "text": "T1-weighted MRI",
        "explanation": "Incorrect. Anatomical, not sensitive for acute edema."
      },
      {
        "text": "Carotid Ultrasound",
        "explanation": "Incorrect. Evaluates source, not the brain injury."
      },
      {
        "text": "Skull X-ray",
        "explanation": "Incorrect. Useless for ******, useful for fractures."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Diffusion-Weighted Imaging (DWI) on MRI is the most sensitive technique for acute ischemic stroke, detecting infarcts minutes after onset.",
    "pdfPage": 22
  },
  {
    "id": 9,
    "category": "Neuroimaging Modalities",
    "questionText": "What is a major advantage of Carotid Duplex Ultrasound compared to CT Angiography?",
    "options": [
      {
        "text": "Higher spatial resolution",
        "explanation": "Incorrect. CTA usually has better spatial mapping."
      },
      {
        "text": "Ability to image intracranial vessels",
        "explanation": "Incorrect. Ultrasound cannot penetrate the skull effectively; it is limited to cervical (neck) vessels."
      },
      {
        "text": "Low cost and portability",
        "explanation": "Correct. Ultrasound is cheap, can be done at the bedside (portable), and has no radiation/contrast risk."
      },
      {
        "text": "Operator independence",
        "explanation": "Incorrect. Ultrasound is highly operator-dependent."
      },
      {
        "text": "Visualization of the aortic arch",
        "explanation": "Incorrect. Usually limited by sternum/depth."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Carotid Ultrasound is inexpensive, portable, and radiation-free, but it is operator-dependent and limited to the neck (cervical) vessels.",
    "pdfPage": 31
  },
  {
    "id": 10,
    "category": "Contrast Agents",
    "questionText": "Before administering IV iodinated contrast for a CT scan, which laboratory value is most critical to check?",
    "options": [
      {
        "text": "Liver enzymes (AST/ALT)",
        "explanation": "Incorrect."
      },
      {
        "text": "Serum Creatinine",
        "explanation": "Correct. Creatinine assesses renal function. Contrast-Induced Nephropathy (CIN) is a risk, especially if Cr > 1.5 mg/dL."
      },
      {
        "text": "Hemoglobin A1c",
        "explanation": "Incorrect. Diabetes is a risk factor, but Cr is the acute metric."
      },
      {
        "text": "White Blood Cell count",
        "explanation": "Incorrect."
      },
      {
        "text": "Platelet count",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Screen for Serum Creatinine before CT contrast. Avoid if Cr > 1.5 to prevent contrast-induced nephropathy.",
    "pdfPage": 17
  },
  {
    "id": 11,
    "category": "Clinical Indications",
    "questionText": "Ring-enhancement on a post-contrast CT scan of the brain is classically associated with which pathology?",
    "options": [
      {
        "text": "Ischemic stroke",
        "explanation": "Incorrect. Usually hypodense."
      },
      {
        "text": "Multiple Sclerosis",
        "explanation": "Incorrect. Shows white matter plaques."
      },
      {
        "text": "Brain Abscess",
        "explanation": "Correct. Abscesses (and high-grade tumors like Glioblastoma) typically show a ring of enhancement surrounding a necrotic center due to blood-brain barrier breakdown at the capsule."
      },
      {
        "text": "Meningioma",
        "explanation": "Incorrect. Typically shows homogenous/diffuse enhancement."
      },
      {
        "text": "Subarachnoid Hemorrhage",
        "explanation": "Incorrect. Blood in cisterns, no ring."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Ring enhancement represents a breakdown of the blood-brain barrier at the periphery of a lesion. Primary differentials: Abscess or High-Grade Tumor (Glioblastoma/Metastasis).",
    "pdfPage": 15
  },
  {
    "id": 12,
    "category": "Neuroimaging Modalities",
    "questionText": "Which modality is considered 'invasive' and carries risks of vessel dissection or access site hematoma?",
    "options": [
      {
        "text": "CT Angiography",
        "explanation": "Incorrect. IV line only."
      },
      {
        "text": "MR Angiography",
        "explanation": "Incorrect. IV line only."
      },
      {
        "text": "Carotid Ultrasound",
        "explanation": "Incorrect. Non-invasive."
      },
      {
        "text": "Conventional (Catheter) Angiography",
        "explanation": "Correct. This involves physical catheterization of the femoral or radial artery and threading it to the brain. It is the gold standard but carries surgical risks."
      },
      {
        "text": "PET Scan",
        "explanation": "Incorrect. IV line only."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Conventional Angiography is invasive (catheter-based) but offers the unique advantage of simultaneous intervention (e.g., coiling an aneurysm, thrombectomy).",
    "pdfPage": 38
  },
  {
    "id": 13,
    "category": "Clinical Indications",
    "questionText": "A patient with a suspected brain tumor has a negative non-contrast CT. What is the next logical underlying step to visualize the lesion?",
    "options": [
      {
        "text": "Skull X-rays",
        "explanation": "Incorrect."
      },
      {
        "text": "MRI or CT with IV contrast",
        "explanation": "Correct. Isodense tumors may blend in with brain tissue. Contrast enhancement (iodine for CT, gadolinium for MRI) highlights the tumor due to vascularity and BBB breakdown."
      },
      {
        "text": "Repeat non-contrast CT in 24 hours",
        "explanation": "Incorrect."
      },
      {
        "text": "Carotid Ultrasound",
        "explanation": "Incorrect."
      },
      {
        "text": "EEG",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Contrast is essential for tumor evaluation. Meningiomas show intense diffuse enhancement.",
    "pdfPage": 13
  },
  {
    "id": 14,
    "category": "Neuroimaging Modalities",
    "questionText": "In CT imaging, 'hyperdense' (bright white) acute material usually represents:",
    "options": [
      {
        "text": "CSF",
        "explanation": "Incorrect. Dark (black)."
      },
      {
        "text": "Air",
        "explanation": "Incorrect. Darkest (black)."
      },
      {
        "text": "Acute Hemorrhage",
        "explanation": "Correct. Fresh blood (hemoglobin) is dense and attenuates X-rays significantly, appearing bright white on CT."
      },
      {
        "text": "Fat",
        "explanation": "Incorrect. Dark/Hypodense."
      },
      {
        "text": "Edema",
        "explanation": "Incorrect. Hypodense (dark gray)."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "On non-contrast CT, Acute Blood = Bright (Hyperdense). This makes NCCT ideal for ruling out bleeds.",
    "pdfPage": 10
  },
  {
    "id": 15,
    "category": "Clinical Indications",
    "questionText": "A diabetic patient taking Metformin is scheduled for a contrast CT. What is the standard precaution?",
    "options": [
      {
        "text": "Give the Metformin immediately before the scan",
        "explanation": "Incorrect."
      },
      {
        "text": "Discontinue Metformin for 48 hours after the procedure",
        "explanation": "Correct. If contrast induces kidney injury, Metformin accumulation can cause fatal lactic acidosis. It is held until renal function is verified stable."
      },
      {
        "text": "Switch to MRI contrast",
        "explanation": "Incorrect."
      },
      {
        "text": "No precautions needed",
        "explanation": "Incorrect."
      },
      {
        "text": "Give prophylactic antibiotics",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Stop Metformin for 48 hours after IV contrast administration to prevent Lactic Acidosis in the setting of potential renal injury.",
    "pdfPage": 17
  },
  {
    "id": 16,
    "category": "Neuroimaging Modalities",
    "questionText": "Which imaging technique relies on detecting the 'spin-lattice' (T1) and 'spin-spin' (T2) relaxation times of protons?",
    "options": [
      {
        "text": "CT Scan",
        "explanation": "Incorrect. Uses X-ray attenuation."
      },
      {
        "text": "PET Scan",
        "explanation": "Incorrect. Uses positron emission."
      },
      {
        "text": "MRI",
        "explanation": "Correct. MRI aligns protons with a magnet, excites them with RF pulses, and measures the relaxation times (T1/T2) to create images."
      },
      {
        "text": "Ultrasound",
        "explanation": "Incorrect. Uses sound reflectance."
      },
      {
        "text": "Angiography",
        "explanation": "Incorrect. Fluoroscopic X-ray."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "MRI exploits proton relaxation properties (T1 and T2) to generate tissue contrast.",
    "pdfPage": 19
  },
  {
    "id": 17,
    "category": "Clinical Indications",
    "questionText": "A carotid bruit is heard on physical exam. What is the most cost-effective non-invasive screening tool to evaluate for carotid stenosis?",
    "options": [
      {
        "text": "Carotid Duplex Ultrasound",
        "explanation": "Correct. It directly visualizes the vessel and measures flow velocity to estimate stenosis severity."
      },
      {
        "text": "Conventional Angiogram",
        "explanation": "Incorrect. Too invasive for screening."
      },
      {
        "text": "CT Angiography",
        "explanation": "Incorrect. Higher cost and radiation."
      },
      {
        "text": "MRA",
        "explanation": "Incorrect. Higher cost."
      },
      {
        "text": "PET Scan",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "A carotid bruit implies turbulent flow/stenosis. Carotid Ultrasound is the first-line screen.",
    "pdfPage": 32
  },
  {
    "id": 18,
    "category": "Neuroimaging Modalities",
    "questionText": "Digital Subtraction Angiography (DSA) or 'Conventional Angio' allows for therapeutic intervention. Which of the following is an example of an interventional neuroradiology procedure?",
    "options": [
      {
        "text": "Taking a plain X-ray",
        "explanation": "Incorrect."
      },
      {
        "text": "Coil embolization of an aneurysm",
        "explanation": "Correct. A catheter is advanced into the aneurysm, and coils are deployed to clot it off, preventing rupture."
      },
      {
        "text": "Administering oral contrast",
        "explanation": "Incorrect."
      },
      {
        "text": "Measuring brain activity",
        "explanation": "Incorrect."
      },
      {
        "text": "Biopsy of the thyroid",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Conventional Angiography is not just diagnostic; it is therapeutic (e.g., coiling aneurysms, thrombectomy for stroke, stenting).",
    "pdfPage": 37
  },
  {
    "id": 19,
    "category": "Neuroimaging Modalities",
    "questionText": "Which imaging modality generally provides the best anatomical detail for posterior fossa structures (brainstem and cerebellum) due to lack of bone artifact?",
    "options": [
      {
        "text": "CT Head",
        "explanation": "Incorrect. CT suffers from 'beam hardening' artifact from the dense skull base, obscuring the posterior fossa."
      },
      {
        "text": "MRI Brain",
        "explanation": "Correct. MRI is not affected by bone density artifacts, making it superior for viewing the brainstem, cerebellum, and spinal cord."
      },
      {
        "text": "Skull X-ray",
        "explanation": "Incorrect."
      },
      {
        "text": "Ultrasound",
        "explanation": "Incorrect."
      },
      {
        "text": "Angiogram",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "MRI is superior to CT for posterior fossa (brainstem/cerebellum) pathology because CT images are degraded by bone artifact in that region.",
    "pdfPage": 21
  },
  {
    "id": 20,
    "category": "Neuroimaging Modalities",
    "questionText": "The unit used to quantify radiodensity in CT scans (e.g., Water = 0, Air = -1000, Bone = +1000) is:",
    "options": [
      {
        "text": "Tesla",
        "explanation": "Incorrect. Unit of magnetic field strength (MRI)."
      },
      {
        "text": "Sievert",
        "explanation": "Incorrect. Unit of radiation dose equivalent."
      },
      {
        "text": "Hounsfield Unit (HU)",
        "explanation": "Correct. Hounsfield Units measure attenuation. Water is the reference at 0 HU."
      },
      {
        "text": "Pascal",
        "explanation": "Incorrect. Pressure."
      },
      {
        "text": "Hertz",
        "explanation": "Incorrect. Frequency."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "CT density is measured in Hounsfield Units (HU). Air is black (-1000), Bone is white (+1000), Water is gray (0).",
    "pdfPage": 6
  },
  {
    "id": 21,
    "category": "Contrast Agents",
    "questionText": "A patient experiences hives and mild tachycardia immediately after CT contrast administration. This is classified as:",
    "options": [
      {
        "text": "Nephrogenic Systemic Fibrosis",
        "explanation": "Incorrect. Delayed fibrotic reaction."
      },
      {
        "text": "Contrast-Induced Nephropathy",
        "explanation": "Incorrect. Kidney injury appearing days later."
      },
      {
        "text": "Anaphylactoid/Allergic Reaction",
        "explanation": "Correct. An immediate hypersensitivity reaction managed with antihistamines (Benadryl) and steroids (and Epinephrine if severe)."
      },
      {
        "text": "Lactic Acidosis",
        "explanation": "Incorrect."
      },
      {
        "text": "Thyrotoxicosis",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Mild allergic reactions (hives) to contrast are treated with Diphenhydramine (Benadryl). Severe anaphylaxis requires Epinephrine.",
    "pdfPage": 16
  },
  {
    "id": 22,
    "category": "Clinical Indications",
    "questionText": "In the setting of head trauma, why is CT preferred over MRI?",
    "options": [
      {
        "text": "Higher sensitivity for edema",
        "explanation": "Incorrect. MRI is better for edema."
      },
      {
        "text": "Speed and detection of fractures/acute bleed",
        "explanation": "Correct. Trauma patients may be unstable. CT is instant and excellently displays bone fractures and acute life-threatening hemorrhages."
      },
      {
        "text": "Lack of radiation",
        "explanation": "Incorrect. CT has radiation."
      },
      {
        "text": "Better for diffuse axonal injury",
        "explanation": "Incorrect. MRI is actually better for DAI, but CT is still first-line for the treatable bleeds."
      },
      {
        "text": "Lower cost",
        "explanation": "Incorrect. While true, speed/utility is the primary clinical driver."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Trauma = CT. It is fast and best for bone/blood.",
    "pdfPage": 10
  },
  {
    "id": 23,
    "category": "Neuroimaging Modalities",
    "questionText": "Which MRI sequence is most useful for suppressing the signal from CSF (making it dark) to better visualize periventricular white matter lesions, such as in Multiple Sclerosis?",
    "options": [
      {
        "text": "T1",
        "explanation": "Incorrect."
      },
      {
        "text": "T2",
        "explanation": "Incorrect. CSF is bright, which can hide bright MS plaques nearby."
      },
      {
        "text": "FLAIR (Fluid Attenuated Inversion Recovery)",
        "explanation": "Correct. FLAIR is essentially a T2 image where the bright CSF signal is nullified (turned dark). This makes periventricular bright lesions (like MS plaques or edema) stand out clearly."
      },
      {
        "text": "DWI",
        "explanation": "Incorrect. Used for ******/ischemia."
      },
      {
        "text": "SWI",
        "explanation": "Incorrect. Susceptibility weighted (for blood)."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "FLAIR sequences suppress bright CSF fluid, making it easier to spot periventricular pathology like MS plaques or edema.",
    "pdfPage": 20
  },
  {
    "id": 24,
    "category": "Clinical Indications",
    "questionText": "Your patient has a 'Thunderclap Headache' (worst of life). CT Head is negative. What is the next diagnostic step to rule out Subarachnoid Hemorrhage?",
    "options": [
      {
        "text": "Send patient home",
        "explanation": "Incorrect. Dangerous."
      },
      {
        "text": "Lumbar Puncture",
        "explanation": "Correct. CT can miss small or old SAH (sensitivity drops over time). LP looks for xanthochromia (yellow CSF from broken down RBCs) or RBCs."
      },
      {
        "text": "Carotid Ultrasound",
        "explanation": "Incorrect."
      },
      {
        "text": "Skull X-ray",
        "explanation": "Incorrect."
      },
      {
        "text": "EEG",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "If SAH is suspected but CT is negative, perform a Lumbar Puncture.",
    "pdfPage": 3
  },
  {
    "id": 25,
    "category": "Neuroimaging Modalities",
    "questionText": "What does the term 'ALARA' stand for in the context of radiology safety?",
    "options": [
      {
        "text": "Always Leave A Ray Absorbed",
        "explanation": "Incorrect."
      },
      {
        "text": "As Low As Reasonably Achievable",
        "explanation": "Correct. The guiding principle of radiation safety: use the minimum radiation dose necessary to achieve the diagnostic goal."
      },
      {
        "text": "As Long As Resonance Allows",
        "explanation": "Incorrect."
      },
      {
        "text": "All Lesions Are Radiographically Apparent",
        "explanation": "Incorrect."
      },
      {
        "text": "Avoid Long Acting Radioactive Agents",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "ALARA: As Low As Reasonably Achievable. The mantra for minimizing radiation exposure.",
    "pdfPage": 12
  },
  {
    "id": 26,
    "category": "Neuroimaging Modalities",
    "questionText": "Which type of artifact can degrade a Carotid Ultrasound image?",
    "options": [
      {
        "text": "Beam hardening",
        "explanation": "Incorrect. CT artifact."
      },
      {
        "text": "Motion artifact",
        "explanation": "Correct. Patient movement degrades all imaging, but ultrasound also suffers from body habitus (fat attenuates sound) and calcification 'shadowing'."
      },
      {
        "text": "Metal streak artifact",
        "explanation": "Incorrect. CT artifact (though metal blocks ultrasound too)."
      },
      {
        "text": "Aliasing",
        "explanation": "Correct (partially), but the question usually refers to patient factors like body habitus."
      },
      {
        "text": "Body Habitus / Depth",
        "explanation": "Correct. Ultrasound waves cannot penetrate deep through thick subcutaneous fat, leading to poor image quality (degradation)."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Ultrasound quality is limited by 'Depth' and 'Air/Bone'. Obesity (body habitus) significantly degrades image quality.",
    "pdfPage": 33
  },
  {
    "id": 27,
    "category": "Clinical Indications",
    "questionText": "A 50-year-old male with a prosthetic heart valve needs neuroimaging. Which valve type allows for an MRI?",
    "options": [
      {
        "text": "Old Stard-Edwards ball-in-cage (Ferromagnetic)",
        "explanation": "Incorrect. Contraindicated."
      },
      {
        "text": "Modern Titanium or Bioprosthetic valve",
        "explanation": "Correct. Most modern non-ferromagnetic valves are MRI compatible (though one should always check the exact model/database)."
      },
      {
        "text": "Any mechanical valve",
        "explanation": "Incorrect. Must check safety."
      },
      {
        "text": "None",
        "explanation": "Incorrect."
      },
      {
        "text": "All valves are safe",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Always check MRI compatibility for implants. Titanium is non-ferromagnetic and usually safe.",
    "pdfPage": 23
  },
  {
    "id": 28,
    "category": "Neuroimaging Modalities",
    "questionText": "In a Conventional Angiogram, from which access point is the catheter most commonly threaded?",
    "options": [
      {
        "text": "Jugular vein",
        "explanation": "Incorrect. Used for central lines."
      },
      {
        "text": "Common Femoral Artery within the groin",
        "explanation": "Correct. The femoral artery is the standard access point for cerebral angiography (though radial artery access is increasing)."
      },
      {
        "text": "Carotid artery directly",
        "explanation": "Incorrect. Dangerous stroke risk."
      },
      {
        "text": "Subclavian vein",
        "explanation": "Incorrect."
      },
      {
        "text": "Aorta",
        "explanation": "Incorrect. Direct aortic stick is not done."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Conventional Angiogram usually accesses the Common Femoral Artery (groin) to thread a catheter up to the brain.",
    "pdfPage": 34
  },
  {
    "id": 29,
    "category": "Neuroimaging Modalities",
    "questionText": "Which imaging modality allows for visualization of blood flow direction and velocity using color coding?",
    "options": [
      {
        "text": "Plain CT",
        "explanation": "Incorrect."
      },
      {
        "text": "Doppler Ultrasound",
        "explanation": "Correct. The Doppler effect measures frequency shifts from moving RBCs to calculate velocity and direction (Blue Away, Red Towards - BART)."
      },
      {
        "text": "T1 MRI",
        "explanation": "Incorrect."
      },
      {
        "text": "X-ray",
        "explanation": "Incorrect."
      },
      {
        "text": "PET",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Doppler Ultrasound uses frequency shifts to measure Velocity and Direction of blood flow.",
    "pdfPage": 29
  },
  {
    "id": 30,
    "category": "Clinical Indications",
    "questionText": "What is the primary role of identifying a 'penumbra' in ****** imaging?",
    "options": [
      {
        "text": "It represents dead tissue",
        "explanation": "Incorrect. That's the core."
      },
      {
        "text": "It represents salvageable tissue",
        "explanation": "Correct. The penumbra is the area of brain that is ischemic (perfused poorly) but not yet infarcted (dead). Therapies like thrombectomy aim to reperfuse this area to save it."
      },
      {
        "text": "It indicates hemorrhage",
        "explanation": "Incorrect."
      },
      {
        "text": "It shows old strokes",
        "explanation": "Incorrect."
      },
      {
        "text": "It confirms tumor",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The Penumbra is salvageable ischemic brain tissue at risk of infarction. 'Time is Brain' refers to saving the penumbra.",
    "pdfPage": 22
  },
  {
    "id": 31,
    "category": "Contrast Agents",
    "questionText": "Which medication is typically kept on the 'crash cart' in the radiology suite for severe anaphylactoid reactions?",
    "options": [
      {
        "text": "Metformin",
        "explanation": "Incorrect."
      },
      {
        "text": "Ibuprofen",
        "explanation": "Incorrect."
      },
      {
        "text": "Epinephrine",
        "explanation": "Correct. IM Epinephrine is the first-line treatment for anaphylaxis (hypotension, airway swelling)."
      },
      {
        "text": "Insulin",
        "explanation": "Incorrect."
      },
      {
        "text": "Vitamin K",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Epinephrine is life-saving for severe contrast anaphylaxis.",
    "pdfPage": 16
  },
  {
    "id": 32,
    "category": "Neuroanatomy/Imaging",
    "questionText": "What does a 'hypodense' (dark) area on a non-contrast CT scan of the brain typically represent in the context of a stroke?",
    "options": [
      {
        "text": "Acute hemorrhage",
        "explanation": "Incorrect. Bright."
      },
      {
        "text": "Calcification",
        "explanation": "Incorrect. Bright."
      },
      {
        "text": "Ischemic Infarction / Edema",
        "explanation": "Correct. As cells die and swell (cytotoxic edema), water content increases, making the tissue less dense (darker) than normal brain. This usually appears 6+ hours after onset."
      },
      {
        "text": "Contrast extravasation",
        "explanation": "Incorrect. Bright."
      },
      {
        "text": "Bone",
        "explanation": "Incorrect. Bright."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Ischemic stroke = Hypodense (Dark) on CT (takes time to show up). Hemorrhagic stroke = Hyperdense (Bright) on CT (shows up immediately).",
    "pdfPage": 10
  },
  {
    "id": 33,
    "category": "Clinical Indications",
    "questionText": "Which imaging modality uses a 'transducer'?",
    "options": [
      {
        "text": "CT",
        "explanation": "Incorrect. X-ray tube."
      },
      {
        "text": "MRI",
        "explanation": "Incorrect. Coils."
      },
      {
        "text": "Ultrasound",
        "explanation": "Correct. The handheld probe is called a transducer; it emits and receives sound waves."
      },
      {
        "text": "Angiogram",
        "explanation": "Incorrect. Catheter."
      },
      {
        "text": "X-ray",
        "explanation": "Incorrect. Emitter/Plate."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Ultrasound probes are called Transducers.",
    "pdfPage": 29
  },
  {
    "id": 34,
    "category": "Neuroimaging Modalities",
    "questionText": "Which view is NOT a standard plane of reconstruction for CT/MRI images?",
    "options": [
      {
        "text": "Axial",
        "explanation": "Incorrect. Standard."
      },
      {
        "text": "Coronal",
        "explanation": "Incorrect. Standard."
      },
      {
        "text": "Sagittal",
        "explanation": "Incorrect. Standard."
      },
      {
        "text": "Oblique",
        "explanation": "Correct. While possible, the three primary orthogonal planes taught and displayed are Axial, Coronal, and Sagittal."
      },
      {
        "text": "Transverse",
        "explanation": "Incorrect. Same as Axial."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "The standard orthogonal planes are Axial, Coronal, and Sagittal.",
    "pdfPage": 5
  },
  {
    "id": 35,
    "category": "Clinical Indications",
    "questionText": "Arteriovenous Malformations (AVMs) are congenital lesions where arteries connect directly to veins without capillaries. Which modality is best for both diagnosing the detailed vascular supply and treating the AVM?",
    "options": [
      {
        "text": "CT Angiogram",
        "explanation": "Incorrect. Diagnostic only."
      },
      {
        "text": "MRI",
        "explanation": "Incorrect. Diagnostic only."
      },
      {
        "text": "Conventional Angiogram",
        "explanation": "Correct. Offers highest spatial resolution to map the feeders and allows for embolization (glue/coils) during the same session."
      },
      {
        "text": "Ultrasound",
        "explanation": "Incorrect. Cannot see deep brain vessels well."
      },
      {
        "text": "X-ray",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Conventional Angiogram is the best functional study for AVMs and allows for embolization.",
    "pdfPage": 37
  }
];
