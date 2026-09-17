// CPR Block 1 - Week 3 Cumulative Exam (Lectures CV21-CV31)
// 40 items: 25 first-order recall and 15 board-style, rebuilt on the v6 generation
// rules - high-yield points only, no arithmetic, every lab value given with its normal range.
// OMM lectures carry recall items only.
// Per lecture: CV21 2R/0B, CV22 2R/2B, CV23 2R/2B, CV24 2R/1B, CV25 2R/1B, CV26 2R/2B, CV27 2R/1B, CV28 2R/1B, CV29 2R/1B, CV30 3R/2B, CV31 4R/2B
const Test_Cumulative_CPR_Wk3 = [
  {
    "id": 1,
    "category": "Osteopathic Cranial Manipulation: Strain Patterns",
    "questionText": "A cranial lateral strain takes its name from the movement of which reference point?",
    "options": [
      {
        "text": "Direction of the index fingers",
        "explanation": "Incorrect. Index fingers follow the greater wing. This would be the correct answer if the question had asked about greater wing direction."
      },
      {
        "text": "Side of the convexity",
        "explanation": "Incorrect. The convexity names a sidebending-rotation. This would be the correct answer if the question had asked about sidebending-rotation."
      },
      {
        "text": "Side of the superior greater wing",
        "explanation": "Incorrect. The superior greater wing side names a torsion. This would be the correct answer if the question had asked about torsion."
      },
      {
        "text": "Direction of the basisphenoid",
        "explanation": "Correct. A lateral strain is named for the direction of the basisphenoid, the side the fifth fingers move toward. The index fingers move the opposite way, following the greater wing of the sphenoid."
      },
      {
        "text": "Direction of hand rotation",
        "explanation": "Incorrect. Hand rotation separates superior from inferior shear. This would be the correct answer if the question had asked about vertical shears."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: A cranial lateral strain is named for the basisphenoid's direction, toward the fifth fingers; the index fingers move oppositely, following the greater wing.",
    "lectureSource": "CV21: Cranial Strain Patterns, Condylar Decompression and Lifts",
    "pdfLecture": "CV21",
    "pdfPage": 5,
    "pdfQuote": "Review of Non-Physiologic Strain Patterns",
    "itemType": "recall"
  },
  {
    "id": 2,
    "category": "Cardiovascular: Cardiac Action Potentials",
    "questionText": "A 68-year-old man comes to the emergency department with 2 hours of palpitations. Pulse is 146/min and irregularly irregular, and blood pressure is 128/76 mm Hg. ECG shows atrial fibrillation. He receives an intravenous drug that lowers the ventricular rate by slowing the phase 0 upstroke of AV nodal cells. Which current is this drug most likely inhibiting?",
    "options": [
      {
        "text": "L-type calcium current",
        "explanation": "Correct. AV nodal cells generate slow-response action potentials whose phase 0 upstroke is caused by opening of L-type Ca2+ channels. Blocking that current slows nodal depolarization and conduction, lowering this patient's ventricular rate. Voltage-gated Na+ current is the strongest competitor, but it drives phase 0 only in fast-response cells such as Purkinje fibers and ventricular myocytes."
      },
      {
        "text": "T-type calcium current",
        "explanation": "Incorrect. T-type current contributes to phase 4 pacemaker drift, not the nodal upstroke this drug slows. This would be the correct answer if the drug flattened spontaneous diastolic depolarization."
      },
      {
        "text": "Voltage-gated sodium current",
        "explanation": "Incorrect. AV nodal cells in this patient generate slow-response potentials whose upstroke does not depend on fast Na+ channels. This would be the correct answer if the drug slowed phase 0 in ventricular myocytes."
      },
      {
        "text": "Inward rectifier potassium current",
        "explanation": "Incorrect. IK1 contributes to phase 3 repolarization and its deactivation to phase 4, not to the nodal upstroke. This would be the correct answer if a drug prolonged phase 3 repolarization in ventricular myocytes."
      },
      {
        "text": "Sodium-calcium exchanger current",
        "explanation": "Incorrect. The exchanger restores ion gradients in phase 4 and does not generate the upstroke. This would be the correct answer if the drug impaired Ca2+ extrusion during relaxation."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Slow-response AV nodal action potentials depolarize in phase 0 via L-type Ca2+ current, so blocking it slows nodal conduction; fast Na+ current drives Purkinje and ventricular upstrokes.",
    "lectureSource": "CV22: Cardiac Action Potentials",
    "pdfLecture": "CV22",
    "pdfPage": 8,
    "pdfQuote": "Fast versus Slow APs",
    "itemType": "board"
  },
  {
    "id": 3,
    "category": "Cardiac Electrophysiology: Pacemaking and Conduction",
    "questionText": "Spontaneous phase 4 depolarization in sinoatrial nodal cells is driven mainly by which current?",
    "options": [
      {
        "text": "Voltage-gated fast Na+ current",
        "explanation": "Incorrect. This drives fast-response fibers. This would be the correct answer if the question had asked about Purkinje upstrokes."
      },
      {
        "text": "L-type Ca2+ current",
        "explanation": "Incorrect. This drives slow nodal upstrokes. This would be the correct answer if the question had asked about AV nodal upstrokes."
      },
      {
        "text": "Funny current, If",
        "explanation": "Correct. The funny current through HCN channels is a hyperpolarization-activated nonselective Na+/K+ current that drives phase 4 pacemaker depolarization. T-type Ca2+ current and decaying IK1 only assist it, and it differs from the fast Na+ current of fast-response fibers."
      },
      {
        "text": "Acetylcholine-sensitive K+ current",
        "explanation": "Incorrect. This vagal K+ current hyperpolarizes nodal cells. This would be the correct answer if the question had asked about acetylcholine."
      },
      {
        "text": "SR Ca2+ release, calcium clock",
        "explanation": "Incorrect. This calcium clock supplements the membrane clock. This would be the correct answer if the question had asked about SR Ca2+ release."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Phase 4 pacemaker depolarization in the SA node is driven mainly by the funny current, a nonselective Na+/K+ current through HCN channels.",
    "lectureSource": "CV23: Cardiac Impulse Conduction and Autonomic Control",
    "pdfLecture": "CV23",
    "pdfPage": 4,
    "pdfQuote": "Mechanisms of pacemaking activity",
    "itemType": "recall"
  },
  {
    "id": 4,
    "category": "Endothelial Cells: Nitric Oxide Signaling",
    "questionText": "Acetylcholine triggers endothelial nitric oxide release by binding which receptor?",
    "options": [
      {
        "text": "Bradykinin receptor",
        "explanation": "Incorrect. An inflammatory mediator receptor. This would be the correct answer if the question had asked about allergic vasodilation by bradykinin."
      },
      {
        "text": "Nicotinic acetylcholine receptor",
        "explanation": "Incorrect. A non-endothelial acetylcholine receptor. This would be the correct answer if the question had asked about skeletal muscle."
      },
      {
        "text": "Alpha adrenergic receptor",
        "explanation": "Incorrect. The smooth muscle epinephrine receptor. This would be the correct answer if the question had asked about epinephrine vasoconstriction."
      },
      {
        "text": "Endothelin ETA receptor",
        "explanation": "Incorrect. The smooth muscle receptor for endothelin-1. This would be the correct answer if the question had asked about endothelin-induced vasoconstriction."
      },
      {
        "text": "Muscarinic receptor",
        "explanation": "Correct. Cholinergic nerves innervate the endothelium, and acetylcholine binds muscarinic M3 receptors to raise calcium and release nitric oxide. Adrenergic receptors instead mediate responses of the smooth muscle layer."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Acetylcholine binds endothelial muscarinic M3 receptors, raising calcium and releasing nitric oxide; adrenergic receptors act on the vascular smooth muscle layer.",
    "lectureSource": "CV24: Vascular Endothelial Cells",
    "pdfLecture": "CV24",
    "pdfPage": 15,
    "pdfQuote": "Nitric Oxide Signaling Cascade",
    "itemType": "recall"
  },
  {
    "id": 5,
    "category": "Vascular Smooth Muscle: Contraction and Relaxation",
    "questionText": "In small resistance arteries, increased intraluminal pressure produces which vascular smooth muscle response?",
    "options": [
      {
        "text": "Increased cGMP and vasodilation",
        "explanation": "Incorrect. Raised cGMP relaxes smooth muscle. This would be the correct answer if the question had asked about sodium nitroprusside."
      },
      {
        "text": "Myosin dephosphorylation and vasodilation",
        "explanation": "Incorrect. Phosphatase action ends cross-bridging. This would be the correct answer if the question had asked about relaxation."
      },
      {
        "text": "Increased cAMP and vasodilation",
        "explanation": "Incorrect. Raised cAMP relaxes smooth muscle. This would be the correct answer if the question had asked about prostacyclin."
      },
      {
        "text": "Depolarization and vasoconstriction",
        "explanation": "Correct. Myogenic tone: increased intraluminal pressure stretches the cell, which depolarizes, admits Ca2+ and constricts, independent of nerves or hormones. Decreased intraluminal pressure does the opposite and causes vasodilation."
      },
      {
        "text": "SERCA calcium reuptake and vasodilation",
        "explanation": "Incorrect. SERCA lowers cytosolic Ca2+. This would be the correct answer if the question had asked about Ca2+ removal."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Myogenic tone: raised intraluminal pressure stretches small-artery smooth muscle, which depolarizes, admits Ca2+ and constricts independent of nerves or hormones; lower pressure causes vasodilation.",
    "lectureSource": "CV25: Vascular Smooth Muscle Cells",
    "pdfLecture": "CV25",
    "pdfPage": 14,
    "pdfQuote": "Myogenic Tone",
    "itemType": "recall"
  },
  {
    "id": 6,
    "category": "ECG Basics: Conduction Velocity",
    "questionText": "Conduction velocity through the heart is slowest in which tissue?",
    "options": [
      {
        "text": "Purkinje fibers",
        "explanation": "Incorrect. The His-Purkinje system has the fastest conduction velocity. This would be the correct answer if the question had asked about fastest conduction."
      },
      {
        "text": "Atrial muscle",
        "explanation": "Incorrect. Atrial muscle outpaces ventricular muscle. This would be the correct answer if the question had asked which myocardium conducts faster."
      },
      {
        "text": "Ventricular muscle",
        "explanation": "Incorrect. Ventricular muscle outpaces the AV node. This would be the correct answer if the question had asked which myocardium conducts slower."
      },
      {
        "text": "AV node",
        "explanation": "Correct. Conduction velocity is slowest in the AV node, which delays the impulse passing from atria to ventricles. The His-Purkinje system is fastest, followed by atrial muscle and then ventricular muscle."
      },
      {
        "text": "Bundle branches",
        "explanation": "Incorrect. Bundle branches conduct rapidly. This would be the correct answer if the question had asked what follows the bundle of His."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Cardiac conduction is slowest in the AV node, delaying atrial-to-ventricular transmission, and fastest in the His-Purkinje system, then atrial, then ventricular muscle.",
    "lectureSource": "CV26: Basic ECG - Leads, Vectors and Intervals",
    "pdfLecture": "CV26",
    "pdfPage": 5,
    "pdfQuote": "Pacemaker Speeds & Conduction Velocity",
    "itemType": "recall"
  },
  {
    "id": 7,
    "category": "Cardiovascular: ECG Localization of Ischemia",
    "questionText": "A 62-year-old man comes to the emergency department because of crushing substernal chest pain and diaphoresis for 1 hour. ECG shows ST segment elevation in leads II, III, and aVF, with no ST elevation in V1-V6. Which of the following is the most likely cause of these findings?",
    "options": [
      {
        "text": "Left anterior descending occlusion",
        "explanation": "Incorrect. LAD occlusion elevates ST segments in V1-V4, which are normal in this patient. This would be the correct answer if ST elevation appeared across the septal and anterior leads V1-V4."
      },
      {
        "text": "Diffuse subendocardial ischemia",
        "explanation": "Incorrect. Subendocardial ischemia causes ST depression, but this patient has ST elevation. This would be the correct answer if the ECG showed ST depression without ST elevation."
      },
      {
        "text": "Left circumflex artery occlusion",
        "explanation": "Incorrect. The circumflex supplies the lateral wall, and this patient has no ST elevation in V5-V6. This would be the correct answer if ST elevation appeared in I, aVL, V5, and V6."
      },
      {
        "text": "Left main stem occlusion",
        "explanation": "Incorrect. Left main occlusion would affect both LAD and circumflex territories, yet V1-V6 show no ST elevation here. This would be the correct answer if ST elevation involved the anterior and lateral leads together."
      },
      {
        "text": "Right coronary artery occlusion",
        "explanation": "Correct. The right coronary artery supplies the inferior wall, viewed by leads II, III, and aVF. ST elevation in these contiguous leads marks transmural inferior ischemia. The left circumflex is the closest competitor, but its lateral territory is seen in I, aVL, V5, and V6, not the inferior leads."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: ST elevation in II, III and aVF marks transmural inferior ischemia from right coronary artery occlusion; left circumflex lateral territory appears in I, aVL, V5 and V6.",
    "lectureSource": "CV27: EKG Introduction",
    "pdfLecture": "CV27",
    "pdfPage": 7,
    "pdfQuote": "Corresponding Leads*",
    "itemType": "board"
  },
  {
    "id": 8,
    "category": "Cardiac Cycle: ECG and Mechanical Events",
    "questionText": "The P wave of the ECG immediately precedes which mechanical event?",
    "options": [
      {
        "text": "Ventricular relaxation",
        "explanation": "Incorrect. Ventricular relaxation follows the T wave. This would be the correct answer if the question had asked about the T wave."
      },
      {
        "text": "Ventricular contraction",
        "explanation": "Incorrect. Ventricular contraction follows the QRS. This would be the correct answer if the question had asked about the QRS."
      },
      {
        "text": "Atrial contraction",
        "explanation": "Correct. Atrial depolarization (P wave) precedes atrial contraction, seen as the atrial pressure a wave about 0.1 s later. Electrical events come before mechanical events, so the QRS instead precedes ventricular contraction."
      },
      {
        "text": "Aortic valve closure",
        "explanation": "Incorrect. Aortic valve closure produces S2. This would be the correct answer if the question had asked about S2."
      },
      {
        "text": "Mitral valve opening",
        "explanation": "Incorrect. Mitral valve opening starts rapid filling. This would be the correct answer if the question had asked about the y descent."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Electrical events precede mechanical ones: the P wave precedes atrial contraction (the a wave) by about 0.1 s, and QRS precedes ventricular contraction.",
    "lectureSource": "CV28: Cardiac Cycle Part I",
    "pdfLecture": "CV28",
    "pdfPage": 10,
    "pdfQuote": "Atrial Systole",
    "itemType": "recall"
  },
  {
    "id": 9,
    "category": "Cardiac Mechanics: Pressure-Volume Relationships",
    "questionText": "The end-systolic pressure-volume relationship of the left ventricle reflects which property?",
    "options": [
      {
        "text": "Passive chamber compliance",
        "explanation": "Incorrect. Passive compliance is described by the EDPVR. This would be the correct answer if the question had asked about the end-diastolic relationship."
      },
      {
        "text": "Diastolic filling volume",
        "explanation": "Incorrect. End-diastolic volume is preload. This would be the correct answer if the question had asked about preload."
      },
      {
        "text": "Arterial afterload pressure",
        "explanation": "Incorrect. Afterload is the arterial pressure opposing ejection. This would be the correct answer if the question had asked about hypertension."
      },
      {
        "text": "Inotropic state",
        "explanation": "Correct. The ESPVR is the maximal pressure the ventricle can develop at any volume, so it reflects contractility, shifting right when contractility falls and left when it rises. Passive stiffness is instead described by the EDPVR."
      },
      {
        "text": "Isovolumetric relaxation rate",
        "explanation": "Incorrect. Relaxation rate depends on SR calcium uptake. This would be the correct answer if the question had asked about maximal negative dP/dt."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: The ESPVR, maximal pressure developable at any volume, reflects contractility, shifting left with increased and right with decreased inotropy; EDPVR describes passive stiffness.",
    "lectureSource": "CV29: Cardiac Cycle Part II",
    "pdfLecture": "CV29",
    "pdfPage": 8,
    "pdfQuote": "Ventricular Pressure-Volume",
    "itemType": "recall"
  },
  {
    "id": 10,
    "category": "Renal: Diuretic Pharmacology",
    "questionText": "A 68-year-old man with chronic heart failure takes furosemide for leg edema. Two weeks after starting daily ibuprofen for back pain, his urine output decreases and his weight increases by 3 kg. His salt intake and furosemide dose are unchanged. Which of the following mechanisms best explains his reduced diuretic response?",
    "options": [
      {
        "text": "Afferent arteriolar constriction",
        "explanation": "Correct. NSAIDs block renal PGE2 and PGI2 synthesis, removing prostaglandin-mediated afferent dilation. The new ibuprofen lowers his renal blood flow and GFR and promotes Na+ and water retention, so urine output falls and weight rises. Distal nephron hypertrophy also blunts loop diuretics but develops slowly with chronic use."
      },
      {
        "text": "Distal nephron hypertrophy",
        "explanation": "Incorrect. Distal hypertrophy develops with chronic loop use and does not explain a decline that began with ibuprofen. This would be the correct answer if resistance developed gradually on long-term furosemide alone."
      },
      {
        "text": "Efferent arteriolar dilation",
        "explanation": "Incorrect. Efferent dilation follows angiotensin II blockade, and he takes no ACE inhibitor or ARB. This would be the correct answer if a patient on lisinopril and furosemide had rising creatinine."
      },
      {
        "text": "Reduced intestinal drug absorption",
        "explanation": "Incorrect. Nothing about ibuprofen alters oral furosemide absorption. This would be the correct answer if a heart failure patient with bowel wall edema failed maximal oral furosemide."
      },
      {
        "text": "Loss of the medullary gradient",
        "explanation": "Incorrect. Loss of the gradient is furosemide's own effect and impairs urine concentration, not diuretic response. This would be the correct answer if a furosemide-treated patient could not concentrate urine despite ADH."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: NSAIDs block renal PGE2 and PGI2, removing prostaglandin-mediated afferent arteriolar dilation; lower renal blood flow and GFR promote Na+ and water retention and blunt loop diuretic response.",
    "lectureSource": "CV30: Diuretic Agents Part 1",
    "pdfLecture": "CV30",
    "pdfPage": 21,
    "pdfQuote": "Influence of Prostaglandins on Diuretic Efficacy and Inhibition by NSAIDs",
    "itemType": "board"
  },
  {
    "id": 11,
    "category": "Diuretics: Thiazide Mechanisms",
    "questionText": "Thiazide blockade of NCC in the distal convoluted tubule increases calcium reabsorption mainly by enhancing which transporter?",
    "options": [
      {
        "text": "Apical TRPM6 channel",
        "explanation": "Incorrect. TRPM6 is the DCT magnesium channel. This would be the correct answer if the question had asked about thiazide magnesium wasting."
      },
      {
        "text": "Basolateral PMCA1b ATPase",
        "explanation": "Incorrect. PMCA1b is a secondary calcium ATPase. This would be the correct answer if the question had asked about fine-tuning calcium export."
      },
      {
        "text": "Apical NKCC2 cotransporter",
        "explanation": "Incorrect. NKCC2 is the TAL cotransporter. This would be the correct answer if the question had asked about the loop diuretic target."
      },
      {
        "text": "Apical ROMK channel",
        "explanation": "Incorrect. ROMK is the principal cell potassium channel. This would be the correct answer if the question had asked about potassium secretion."
      },
      {
        "text": "Basolateral NCX1 exchanger",
        "explanation": "Correct. NCC blockade lowers intracellular Na+, enhancing basolateral NCX1 (3 Na+ in, 1 Ca2+ out), which strengthens the gradient for apical Ca2+ entry through TRPV5. PMCA1b only fine-tunes calcium export as a secondary mechanism."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Thiazide NCC blockade lowers intracellular Na+, enhancing basolateral NCX1 Ca2+ exit and apical TRPV5 Ca2+ entry, so distal calcium reabsorption increases.",
    "lectureSource": "CV31: Diuretic Agents Part 2",
    "pdfLecture": "CV31",
    "pdfPage": 11,
    "pdfQuote": "Thiazide diuretics increase local calcium export",
    "itemType": "recall"
  },
  {
    "id": 12,
    "category": "Osteopathic Cranial Manipulation: Indications and Contraindications",
    "questionText": "Which of the following is an absolute contraindication to osteopathic cranial manipulation?",
    "options": [
      {
        "text": "Acute skull fracture",
        "explanation": "Correct. Acute skull fracture is an absolute contraindication, as are acute intracranial hemorrhage, absence of somatic dysfunction and lack of consent. Coagulopathy, increased intracranial pressure and a space-occupying lesion are relative contraindications instead."
      },
      {
        "text": "Increased intracranial pressure",
        "explanation": "Incorrect. Raised intracranial pressure is a relative contraindication. This would be the correct answer if the question had asked about relative contraindications."
      },
      {
        "text": "Coagulopathy",
        "explanation": "Incorrect. Coagulopathy is a relative contraindication. This would be the correct answer if the question had asked about relative contraindications."
      },
      {
        "text": "Intracranial space-occupying lesion",
        "explanation": "Incorrect. A space-occupying lesion is a relative contraindication. This would be the correct answer if the question had asked about relative contraindications."
      },
      {
        "text": "Post-concussive syndrome",
        "explanation": "Incorrect. Post-concussive syndrome is an indication for cranial treatment. This would be the correct answer if the question had asked about indications."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Acute skull fracture, acute intracranial hemorrhage, absent somatic dysfunction and no consent absolutely contraindicate cranial manipulation; coagulopathy, raised intracranial pressure and mass lesions are relative.",
    "lectureSource": "CV21: Cranial Strain Patterns, Condylar Decompression and Lifts",
    "pdfLecture": "CV21",
    "pdfPage": 10,
    "pdfQuote": "Absolute Contraindications (May Relative Contraindications:",
    "itemType": "recall"
  },
  {
    "id": 13,
    "category": "Cardiovascular: Cardiac Action Potentials",
    "questionText": "A 54-year-old woman comes to the office with palpitations after 4 days of repeated vomiting. Serum potassium is 2.6 mEq/L (N=3.5-5.0). Which change in her ventricular myocyte action potential is most likely?",
    "options": [
      {
        "text": "Slowed phase 0 upstroke",
        "explanation": "Incorrect. Her potassium is below normal, which does not depolarize the membrane to slow Na+ channel recovery. This would be the correct answer if serum potassium were above normal with a widened QRS."
      },
      {
        "text": "Loss of the phase 2 plateau",
        "explanation": "Incorrect. Her ventricular myocytes remain fast-response cells with a plateau. This would be the correct answer if the recording came from an SA or AV nodal cell."
      },
      {
        "text": "Delayed phase 3 repolarization",
        "explanation": "Correct. Her serum potassium of 2.6 mEq/L is low, indicating hypokalemia. Low K+ decreases K+ permeability with fewer K+ channels open, delaying repolarization, prolonging action potential duration and the QT interval, and raising arrhythmia risk. Slowed phase 0 upstroke is the strongest competitor, but it occurs with hyperkalemia."
      },
      {
        "text": "Inactivated Na+ channels at rest",
        "explanation": "Incorrect. Her low potassium moves the resting potential more negative, not above threshold. This would be the correct answer if a high-K+ cardioplegia solution were arresting the heart during surgery."
      },
      {
        "text": "Increased resting K+ permeability",
        "explanation": "Incorrect. Her low potassium decreases, not increases, K+ permeability. This would be the correct answer if serum potassium were elevated with peaked T waves on ECG."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Hypokalemia decreases K+ permeability, delaying phase 3 repolarization, prolonging action potential duration and QT, and raising arrhythmia risk; hyperkalemia instead slows the phase 0 upstroke.",
    "lectureSource": "CV22: Cardiac Action Potentials",
    "pdfLecture": "CV22",
    "pdfPage": 26,
    "pdfQuote": "K+ (Hypokalemia) and Cardiac AP",
    "itemType": "board"
  },
  {
    "id": 14,
    "category": "Cardiovascular: Cardiac Conduction",
    "questionText": "A 67-year-old woman comes to the emergency department because of palpitations for 2 hours. Pulse is 150/min and irregularly irregular, and blood pressure is 128/78 mm Hg. ECG shows atrial fibrillation with a rapid ventricular rate. A drug is chosen to slow impulse conduction through the atrioventricular node. Blocking which ion channel will most effectively achieve this?",
    "options": [
      {
        "text": "L-type calcium channel",
        "explanation": "Correct. AV nodal cells fire slow-response action potentials whose upstroke depends on L-type Ca2+ current. Blocking it further slows AV conduction and lowers this patient's rapid ventricular rate. A sodium channel blocker is worse because fast Na+ current drives Purkinje and ventricular conduction, not nodal conduction."
      },
      {
        "text": "HCN funny channel",
        "explanation": "Incorrect. Blocking If mainly slows SA node phase 4 rather than AV nodal conduction in this patient. This would be the correct answer if slowing sinus rate in sinus tachycardia were the goal."
      },
      {
        "text": "Fast sodium channel",
        "explanation": "Incorrect. Her goal is slower AV nodal conduction, and nodal upstrokes do not rely on fast Na+ current. This would be the correct answer if slowing Purkinje and ventricular conduction were the goal."
      },
      {
        "text": "T-type calcium channel",
        "explanation": "Incorrect. T-type Ca2+ current assists SA nodal phase 4 depolarization, not the AV nodal upstroke that sets her conduction speed. This would be the correct answer if slowing diastolic depolarization in sinus tachycardia were the goal."
      },
      {
        "text": "Muscarinic K+ channel",
        "explanation": "Incorrect. Blocking the acetylcholine-sensitive K+ channel removes a vagal brake and would speed her AV conduction. This would be the correct answer if reversing vagally mediated AV nodal slowing were the goal."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: AV nodal conduction depends on L-type Ca2+ current, so blocking L-type calcium channels slows AV conduction and ventricular rate; fast Na+ current governs Purkinje and ventricular conduction.",
    "lectureSource": "CV23: Cardiac Impulse Conduction and Autonomic Control",
    "pdfLecture": "CV23",
    "pdfPage": 20,
    "pdfQuote": "Mechanisms of slow conduction",
    "itemType": "board"
  },
  {
    "id": 15,
    "category": "Cardiovascular: Endothelial Dysfunction",
    "questionText": "A 62-year-old man comes to the clinic for follow-up of poorly controlled hypertension and type 2 diabetes mellitus. Blood pressure is 162/98 mm Hg. Brachial artery ultrasound shows little increase in artery diameter after release of a brief cuff occlusion. Which of the following is the most likely mechanism contributing to his elevated blood pressure?",
    "options": [
      {
        "text": "Decreased PDE-5 activity",
        "explanation": "Incorrect. Less cGMP breakdown would enhance nitric oxide vasodilation and lower his blood pressure. This would be the correct answer if a patient with pulmonary arterial hypertension improved on sildenafil."
      },
      {
        "text": "Decreased endothelin-1 signaling",
        "explanation": "Incorrect. Dysfunctional endothelium in diabetes makes more endothelin-1, not less. This would be the correct answer if a patient with pulmonary arterial hypertension improved on bosentan."
      },
      {
        "text": "Increased alpha-adrenergic signaling",
        "explanation": "Incorrect. This acts on smooth muscle and would not blunt his flow-mediated dilation. This would be the correct answer if a patient received epinephrine for anaphylactic hypotension."
      },
      {
        "text": "Decreased nitric oxide availability",
        "explanation": "Correct. His blunted dilation after cuff release shows impaired endothelial function, since the flow surge normally releases nitric oxide. Dysfunctional endothelium releases less nitric oxide, raising vasoconstrictor tone and blood pressure. Increased alpha-adrenergic signaling also constricts but would not explain the failed endothelium-dependent dilation."
      },
      {
        "text": "Increased histamine-mediated NO release",
        "explanation": "Incorrect. Histamine-driven nitric oxide causes vasodilation and hypotension. This would be the correct answer if a patient had urticaria and hypotension after allergen exposure."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Blunted brachial dilation after cuff release signals endothelial dysfunction, meaning less nitric oxide release, increased vasoconstrictor tone and higher blood pressure, as in hypertension and diabetes.",
    "lectureSource": "CV24: Vascular Endothelial Cells",
    "pdfLecture": "CV24",
    "pdfPage": 24,
    "pdfQuote": "Endothelial dysfunction causes hypertension (HTN)",
    "itemType": "board"
  },
  {
    "id": 16,
    "category": "Vascular Smooth Muscle: Contraction and Relaxation",
    "questionText": "The most important route for removing cytosolic Ca2+ from vascular smooth muscle cells is which protein?",
    "options": [
      {
        "text": "Plasma membrane Na+/Ca2+ exchanger",
        "explanation": "Incorrect. It exchanges Na+ for Ca2+ at the membrane. This would be the correct answer if the question had asked about Na+-coupled extrusion."
      },
      {
        "text": "SERCA pump",
        "explanation": "Correct. SERCA, the Ca2+-ATPase of the sarcoplasmic reticulum, is the most important route for removing cytosolic Ca2+ and permitting relaxation. The plasma membrane exchanger and Ca2+ pump also extrude Ca2+ but contribute less."
      },
      {
        "text": "Voltage-gated L-type Ca2+ channel",
        "explanation": "Incorrect. The L-type channel admits extracellular Ca2+. This would be the correct answer if the question had asked about Ca2+ entry."
      },
      {
        "text": "IP3-gated SR Ca2+ release channel",
        "explanation": "Incorrect. This channel releases stored Ca2+. This would be the correct answer if the question had asked about alpha-1 signaling."
      },
      {
        "text": "Plasma membrane Ca2+ pump",
        "explanation": "Incorrect. It extrudes Ca2+ across the sarcolemma. This would be the correct answer if the question had asked about ATP-driven sarcolemmal extrusion."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: SERCA, the sarcoplasmic reticulum Ca2+-ATPase, is the main route removing cytosolic Ca2+ to relax vascular smooth muscle; plasma membrane exchanger and pump contribute less.",
    "lectureSource": "CV25: Vascular Smooth Muscle Cells",
    "pdfLecture": "CV25",
    "pdfPage": 21,
    "pdfQuote": "Ca++ Removal from VSMC",
    "itemType": "recall"
  },
  {
    "id": 17,
    "category": "Cardiovascular: ECG Intervals",
    "questionText": "A 26-year-old man comes to the office after his brother and uncle died suddenly in early adulthood. He has no symptoms. ECG shows a QT interval longer than half of the R-R interval, with a normal PR interval and QRS duration. Which complication is this patient at greatest risk for?",
    "options": [
      {
        "text": "Atrial fibrillation",
        "explanation": "Incorrect. A long QT reflects delayed ventricular repolarization, not an atrial problem. This would be the correct answer if the ECG showed an irregular rhythm without organized P waves."
      },
      {
        "text": "AV nodal heart block",
        "explanation": "Incorrect. His PR interval is normal, so AV nodal conduction is intact. This would be the correct answer if the ECG showed a prolonged PR interval."
      },
      {
        "text": "Sinoatrial pacemaker failure",
        "explanation": "Incorrect. His long QT reflects ventricular repolarization, not SA node dysfunction. This would be the correct answer if the SA node failed and the AV node took over at 40-60/min."
      },
      {
        "text": "ST-elevation infarction",
        "explanation": "Incorrect. He has no chest pain, and a prolonged QT does not signal infarction. This would be the correct answer if a patient had crushing chest pain with ST elevation in contiguous leads."
      },
      {
        "text": "Torsades de pointes",
        "explanation": "Correct. A QT interval longer than half the R-R interval is prolonged. With a family history of sudden death, this suggests congenital long QT syndrome, which mainly raises the risk of torsades de pointes. Atrial fibrillation is less likely because the defect is ventricular repolarization."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: A QT longer than half the R-R interval is prolonged; with family sudden death this suggests congenital long QT, mainly raising torsades de pointes risk from abnormal ventricular repolarization.",
    "lectureSource": "CV26: Basic ECG - Leads, Vectors and Intervals",
    "pdfLecture": "CV26",
    "pdfPage": 12,
    "pdfQuote": "QT Interval",
    "itemType": "board"
  },
  {
    "id": 18,
    "category": "ECG Interpretation: ST Segment",
    "questionText": "Which ECG segment is the true isoelectric baseline for judging ST elevation or depression?",
    "options": [
      {
        "text": "PR segment",
        "explanation": "Incorrect. It follows atrial depolarization. This would be the correct answer if the question had asked about atrial conduction delay."
      },
      {
        "text": "QT interval",
        "explanation": "Incorrect. It spans ventricular depolarization and repolarization. This would be the correct answer if the question had asked about torsades risk."
      },
      {
        "text": "TP segment",
        "explanation": "Correct. The TP segment, between ventricular repolarization and the next atrial depolarization, is the true isoelectric line. ST elevation or depression is judged against it, not against the ST segment itself."
      },
      {
        "text": "J point",
        "explanation": "Incorrect. Where QRS ends and ST begins. This would be the correct answer if the question had asked where ST measurement starts."
      },
      {
        "text": "QRS complex",
        "explanation": "Incorrect. It reflects ventricular depolarization. This would be the correct answer if the question had asked about bundle branch block."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Judge ST elevation or depression against the TP segment, the true isoelectric baseline.",
    "lectureSource": "CV27: EKG Introduction",
    "pdfLecture": "CV27",
    "pdfPage": 11,
    "pdfQuote": "ST Segment",
    "itemType": "recall"
  },
  {
    "id": 19,
    "category": "Cardiac Cycle: Ventricular Systole",
    "questionText": "During the reduced ejection phase, blood keeps leaving the left ventricle mainly because of what driving force?",
    "options": [
      {
        "text": "Ventricle-to-aorta pressure gradient",
        "explanation": "Incorrect. This gradient drives rapid ejection. This would be the correct answer if the question had asked about rapid ejection."
      },
      {
        "text": "Inertia imparted to the blood",
        "explanation": "Correct. In reduced ejection, left ventricular pressure falls slightly below aortic pressure, yet blood still leaves because of the inertia given to it by contraction. In rapid ejection, by contrast, ventricular pressure exceeds aortic pressure and the gradient drives flow."
      },
      {
        "text": "Papillary muscle contraction",
        "explanation": "Incorrect. Papillary muscles restrain AV leaflets. This would be the correct answer if the question had asked about AV valve bulging."
      },
      {
        "text": "Atrial primer pump contraction",
        "explanation": "Incorrect. The primer pump tops off filling. This would be the correct answer if the question had asked about atrial systole."
      },
      {
        "text": "Atrium-to-ventricle pressure gradient",
        "explanation": "Incorrect. This gradient drives ventricular filling. This would be the correct answer if the question had asked about rapid filling."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: In reduced ejection, left ventricular pressure falls slightly below aortic pressure, yet blood keeps leaving by inertia; in rapid ejection the pressure gradient drives flow.",
    "lectureSource": "CV28: Cardiac Cycle Part I",
    "pdfLecture": "CV28",
    "pdfPage": 21,
    "pdfQuote": "Ventricular systole: Reduced Ejection Phase",
    "itemType": "recall"
  },
  {
    "id": 20,
    "category": "Cardiac Mechanics: Stroke Volume Regulation",
    "questionText": "Increased afterload decreases stroke volume and increases which cardiac variable?",
    "options": [
      {
        "text": "End-diastolic volume",
        "explanation": "Incorrect. End-diastolic volume is preload. This would be the correct answer if the question had asked about increased venous return."
      },
      {
        "text": "Ejection fraction",
        "explanation": "Incorrect. Ejection fraction is SV over EDV and falls. This would be the correct answer if the question had asked about echocardiographic function."
      },
      {
        "text": "Contractility",
        "explanation": "Incorrect. Contractility is the intrinsic inotropic state. This would be the correct answer if the question had asked about norepinephrine."
      },
      {
        "text": "Venous return",
        "explanation": "Incorrect. Venous return is blood returning to the heart. This would be the correct answer if the question had asked about venous constriction."
      },
      {
        "text": "End-systolic volume",
        "explanation": "Correct. A greater afterload lowers stroke volume, so more blood remains in the ventricle and end-systolic volume rises. Increased venous return, by contrast, raises end-diastolic volume with end-systolic volume unchanged."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Increased afterload lowers stroke volume and raises end-systolic volume; increased venous return raises end-diastolic volume with end-systolic volume unchanged.",
    "lectureSource": "CV29: Cardiac Cycle Part II",
    "pdfLecture": "CV29",
    "pdfPage": 15,
    "pdfQuote": "Effect of Afterload",
    "itemType": "recall"
  },
  {
    "id": 21,
    "category": "Diuretics: Carbonic Anhydrase Inhibitors",
    "questionText": "The mild metabolic acidosis caused by carbonic anhydrase inhibitors is accompanied by which serum electrolyte change?",
    "options": [
      {
        "text": "Increased serum potassium",
        "explanation": "Incorrect. These drugs are mildly potassium-wasting. This would be the correct answer if the question had asked about potassium-sparing diuretics."
      },
      {
        "text": "Increased serum chloride",
        "explanation": "Correct. Carbonic anhydrase inhibitors cause urinary bicarbonate loss, and chloride is reabsorbed to maintain electroneutrality, producing a hyperchloremic metabolic acidosis. Serum potassium falls mildly rather than rises, because these drugs are mildly potassium-wasting."
      },
      {
        "text": "Increased serum calcium",
        "explanation": "Incorrect. CAIs increase urinary calcium excretion, favoring kidney stones. This would be the correct answer if the question had asked about thiazide diuretics."
      },
      {
        "text": "Decreased serum magnesium",
        "explanation": "Incorrect. Magnesium loss follows TAL potential loss. This would be the correct answer if the question had asked about loop diuretics."
      },
      {
        "text": "Increased serum uric acid",
        "explanation": "Incorrect. Hyperuricemia raises gout risk. This would be the correct answer if the question had asked about loop diuretic toxicities."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Carbonic anhydrase inhibitors cause urinary bicarbonate loss with compensatory chloride reabsorption, producing hyperchloremic metabolic acidosis and mild potassium wasting.",
    "lectureSource": "CV30: Diuretic Agents Part 1",
    "pdfLecture": "CV30",
    "pdfPage": 27,
    "pdfQuote": "CA inhibition leads to massive bicarbonate loss in urine.",
    "itemType": "recall"
  },
  {
    "id": 22,
    "category": "Renal: Diuretic Pharmacology",
    "questionText": "A 76-year-old woman is brought to the emergency department for 2 days of confusion. Three weeks ago she began hydrochlorothiazide for hypertension, and she drinks several liters of water daily. She appears euvolemic. Serum sodium is 123 mEq/L (N=135-145). Which of the following mechanisms best explains this laboratory finding?",
    "options": [
      {
        "text": "Loss of medullary concentrating gradient",
        "explanation": "Incorrect. Her thiazide leaves the medullary gradient intact, and ADH still concentrates her urine. This would be the correct answer if a patient on a loop diuretic had lost concentrating ability."
      },
      {
        "text": "Collecting duct resistance to ADH",
        "explanation": "Incorrect. ADH resistance causes free water loss and polyuria, not water retention with a low sodium. This would be the correct answer if a patient on chronic lithium developed polyuria."
      },
      {
        "text": "Enhanced ENaC sodium reabsorption",
        "explanation": "Incorrect. Increased distal ENaC activity drives K+ and H+ secretion, not dilution of serum sodium. This would be the correct answer if a thiazide-treated patient developed hypokalemic metabolic alkalosis."
      },
      {
        "text": "Osmotic water shift into plasma",
        "explanation": "Incorrect. She received no retained osmotic solute to pull water into plasma. This would be the correct answer if mannitol accumulated in a patient with severe renal impairment."
      },
      {
        "text": "Impaired dilution with preserved concentration",
        "explanation": "Correct. Thiazides block NCC in a diluting segment, impairing free water excretion while ADH-driven AQP2 insertion still concentrates urine. Her sodium of 123 is low, indicating dilutional hyponatremia from water retained in excess of sodium. Loop diuretics impair concentration too, so their hyponatremia risk is lower."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Thiazides impair urinary dilution while ADH-driven concentration is preserved, so free water retention causes dilutional hyponatremia; loops impair concentration too and carry lower hyponatremia risk.",
    "lectureSource": "CV31: Diuretic Agents Part 2",
    "pdfLecture": "CV31",
    "pdfPage": 15,
    "pdfQuote": "Thiazide Diuretics: Adverse Effects (most are dose-dependent)",
    "itemType": "board"
  },
  {
    "id": 23,
    "category": "Cardiac Action Potentials: Excitation-Contraction Coupling",
    "questionText": "In cardiac excitation-contraction coupling, Ca2+ entering through L-type channels triggers SR Ca2+ release through which channel?",
    "options": [
      {
        "text": "Dihydropyridine receptor",
        "explanation": "Incorrect. The L-type voltage sensor. This would be the correct answer if the question had asked what senses depolarization."
      },
      {
        "text": "SERCA",
        "explanation": "Incorrect. Pumps Ca2+ back into the SR. This would be the correct answer if the question had asked about relaxation."
      },
      {
        "text": "Sodium-calcium exchanger",
        "explanation": "Incorrect. Extrudes Ca2+ from the cell. This would be the correct answer if the question had asked about sarcolemmal Ca2+ removal."
      },
      {
        "text": "Ryanodine receptor",
        "explanation": "Correct. In calcium-induced calcium release, trigger Ca2+ through L-type (dihydropyridine) channels opens the ryanodine receptor, the SR Ca2+ release channel. SERCA later pumps Ca2+ back into the SR."
      },
      {
        "text": "IP3 receptor",
        "explanation": "Incorrect. Agonist-driven SR release. This would be the correct answer if the question had asked about vascular smooth muscle."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Trigger Ca2+ through L-type (dihydropyridine) channels opens the ryanodine receptor to release SR Ca2+; SERCA re-sequesters it for relaxation.",
    "lectureSource": "CV22: Cardiac Action Potentials",
    "pdfLecture": "CV22",
    "pdfPage": 28,
    "pdfQuote": "Excitation-Contraction Coupling",
    "itemType": "recall"
  },
  {
    "id": 24,
    "category": "Cardiovascular: Cardiac Conduction",
    "questionText": "A 24-year-old man becomes pale and lightheaded while having blood drawn and loses consciousness briefly. Pulse is 30/min and regular, and blood pressure is 82/50 mm Hg. ECG during the episode shows no P waves and a slow regular ventricular rhythm. Which structure is most likely generating his heart rhythm during this episode?",
    "options": [
      {
        "text": "His-Purkinje system",
        "explanation": "Correct. Strong vagal stimulation, as during this fainting episode, suppresses both the SA and AV nodes, so ventricular escape beats take over. The absent P waves and rate of 30/min fit the His-Purkinje range of 20-40/min. The AV node is less likely because it paces at 40-60/min."
      },
      {
        "text": "Atrioventricular node",
        "explanation": "Incorrect. A rate of 30/min is below the AV nodal backup range, and strong vagal tone suppresses the AV node too. This would be the correct answer if the rate were 40-60/min without P waves."
      },
      {
        "text": "Sinoatrial node",
        "explanation": "Incorrect. Absent P waves show his sinus node is not firing. This would be the correct answer if the ECG showed normal P waves before each QRS at 60-100/min."
      },
      {
        "text": "Bachmann bundle",
        "explanation": "Incorrect. Bachmann bundle is an atrial muscle pathway that conducts but does not pace, and his P waves are absent. This would be the correct answer if slowed right-to-left atrial spread in sinus rhythm were localized."
      },
      {
        "text": "Internodal atrial pathways",
        "explanation": "Incorrect. Internodal pathways are atrial muscle bundles that conduct but do not pace, and no P waves are present. This would be the correct answer if slowed top-to-bottom right atrial spread in sinus rhythm were localized."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: When strong vagal tone suppresses both SA and AV nodes, His-Purkinje escape takes over at 20-40/min with no P waves; the AV node paces at 40-60/min.",
    "lectureSource": "CV23: Cardiac Impulse Conduction and Autonomic Control",
    "pdfLecture": "CV23",
    "pdfPage": 35,
    "pdfQuote": "Vagal stimulation on heart rate",
    "itemType": "board"
  },
  {
    "id": 25,
    "category": "Endothelial Cells: Vascular Hemodynamics",
    "questionText": "Blood flow velocity across the vascular system is inversely proportional to which variable?",
    "options": [
      {
        "text": "Total cross-sectional area",
        "explanation": "Correct. Velocity falls as total cross-sectional area rises, so it is highest in the aorta and lowest in the capillaries, favoring exchange. Total blood flow, by contrast, is inversely proportional to resistance."
      },
      {
        "text": "Endothelial NO release",
        "explanation": "Incorrect. The main endothelial vasodilator signal. This would be the correct answer if the question had asked about endothelium-dependent relaxation."
      },
      {
        "text": "Wall elastin content",
        "explanation": "Incorrect. A tunica externa component with collagen. This would be the correct answer if the question had asked about the outermost vessel layer."
      },
      {
        "text": "Systemic blood pressure",
        "explanation": "Incorrect. Cardiac output times peripheral resistance. This would be the correct answer if the question had asked what arterioles help set."
      },
      {
        "text": "Tunica media thickness",
        "explanation": "Incorrect. The smooth muscle layer. This would be the correct answer if the question had asked what is thicker in arteries than veins."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Blood flow velocity is inversely proportional to total cross-sectional area: highest in the aorta, lowest in capillaries, favoring exchange; total flow varies inversely with resistance.",
    "lectureSource": "CV24: Vascular Endothelial Cells",
    "pdfLecture": "CV24",
    "pdfPage": 26,
    "pdfQuote": "Blood Flow Dynamics across the",
    "itemType": "recall"
  },
  {
    "id": 26,
    "category": "Cardiovascular: Vascular Smooth Muscle Pharmacology",
    "questionText": "A 64-year-old man with long-standing diabetes mellitus comes to the emergency department because of severe headache and blurred vision. Blood pressure is 224/132 mm Hg. An intravenous infusion of sodium nitroprusside is started, and blood pressure falls within minutes. Which intracellular change most directly causes this drug's vasodilating effect?",
    "options": [
      {
        "text": "Increased cAMP in smooth muscle",
        "explanation": "Incorrect. Nitroprusside releases nitric oxide, which does not act through adenylate cyclase. This would be the correct answer if prostacyclin were binding its G-protein receptor on smooth muscle."
      },
      {
        "text": "Endothelial nitric oxide release",
        "explanation": "Incorrect. Nitroprusside supplies nitric oxide itself, and his diabetic endothelium is dysfunctional. This would be the correct answer if acetylcholine were acting on healthy endothelial muscarinic receptors."
      },
      {
        "text": "L-type Ca2+ channel blockade",
        "explanation": "Incorrect. Nitroprusside does not block membrane Ca2+ channels. This would be the correct answer if nifedipine or amlodipine were given for hypertension."
      },
      {
        "text": "Increased cGMP in smooth muscle",
        "explanation": "Correct. Nitroprusside is a nitric oxide donor acting directly on vascular smooth muscle. Its nitric oxide activates guanylyl cyclase, converting GTP to cGMP and causing relaxation, so it works despite diabetic endothelial dysfunction. Endothelial nitric oxide release is worse because this drug bypasses the endothelium."
      },
      {
        "text": "Reduced alpha-1 IP3 signaling",
        "explanation": "Incorrect. Nitroprusside does not act on adrenergic receptors or IP3-driven SR Ca2+ release. This would be the correct answer if an alpha-1 blocker opposed sympathetic norepinephrine."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Nitroprusside donates nitric oxide directly to smooth muscle, activating guanylyl cyclase to raise cGMP and relax vessels, so it works despite endothelial dysfunction.",
    "lectureSource": "CV25: Vascular Smooth Muscle Cells",
    "pdfLecture": "CV25",
    "pdfPage": 27,
    "pdfQuote": "VSMC Relaxation",
    "itemType": "board"
  },
  {
    "id": 27,
    "category": "ECG Basics: Axis",
    "questionText": "The QRS axis on a standard ECG is best assessed with which pair of leads?",
    "options": [
      {
        "text": "Leads II and aVF",
        "explanation": "Incorrect. Both leads point toward the legs. This would be the correct answer if the question had asked about two downward leads."
      },
      {
        "text": "Leads aVR and aVF",
        "explanation": "Incorrect. They are not perpendicular. This would be the correct answer if the question had asked about two augmented leads."
      },
      {
        "text": "Leads I and aVF",
        "explanation": "Correct. Leads I and aVF are perpendicular, so an upright QRS in both places the axis between 0 and +90 degrees. Leads II and aVF both point downward and are not perpendicular."
      },
      {
        "text": "Leads V1 and V2",
        "explanation": "Incorrect. These are precordial leads. This would be the correct answer if the question had asked about fourth intercostal space leads."
      },
      {
        "text": "Leads V4 and V6",
        "explanation": "Incorrect. They are chest leads. This would be the correct answer if the question had asked about midclavicular and midaxillary leads."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Leads I and aVF are perpendicular and assess QRS axis; an upright QRS in both places the axis between 0 and +90 degrees.",
    "lectureSource": "CV26: Basic ECG - Leads, Vectors and Intervals",
    "pdfLecture": "CV26",
    "pdfPage": 30,
    "pdfQuote": "Normal Axis!",
    "itemType": "recall"
  },
  {
    "id": 28,
    "category": "ECG Interpretation: Axis",
    "questionText": "Left ventricular hypertrophy most characteristically shifts the QRS axis in which direction?",
    "options": [
      {
        "text": "Right axis deviation",
        "explanation": "Incorrect. Seen with right ventricular hypertrophy. This would be the correct answer if the question had asked about right ventricular hypertrophy."
      },
      {
        "text": "Normal axis",
        "explanation": "Incorrect. I and aVF both positive. This would be the correct answer if the question had asked about a healthy heart."
      },
      {
        "text": "Extreme axis deviation",
        "explanation": "Incorrect. I and aVF both negative. This would be the correct answer if the question had asked about both leads negative."
      },
      {
        "text": "Axis unchanged",
        "explanation": "Incorrect. Added LV mass shifts the vector. This would be the correct answer if the question had asked about atrial enlargement."
      },
      {
        "text": "Left axis deviation",
        "explanation": "Correct. Left ventricular hypertrophy pulls the mean vector leftward, producing left axis deviation (lead I positive, aVF negative). Right ventricular hypertrophy instead causes right axis deviation."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Left ventricular hypertrophy causes left axis deviation; right ventricular hypertrophy causes right axis deviation.",
    "lectureSource": "CV27: EKG Introduction",
    "pdfLecture": "CV27",
    "pdfPage": 26,
    "pdfQuote": "Causes of Axis Deviation",
    "itemType": "recall"
  },
  {
    "id": 29,
    "category": "Cardiovascular: Heart Sounds",
    "questionText": "A 68-year-old man with a 20-year history of poorly controlled hypertension comes for a routine examination. Echocardiography shows a markedly thickened left ventricular wall. Cardiac auscultation reveals an extra low-pitched sound heard just before S1. This extra sound is most likely produced during which phase of the cardiac cycle?",
    "options": [
      {
        "text": "Rapid early ventricular filling",
        "explanation": "Incorrect. This sound falls just before S1, not early in diastole after S2. This would be the correct answer if a healthy child had an extra sound early in diastole, an S3."
      },
      {
        "text": "Atrial contraction in late diastole",
        "explanation": "Correct. This is an S4 gallop, produced during atrial systole as the atrium contracts against a stiff hypertrophied ventricle. Longstanding hypertension with a thick left ventricular wall and a sound just before S1 fit this. An S3 is the strongest competitor, but it occurs in the rapid filling phase."
      },
      {
        "text": "Isovolumetric ventricular contraction",
        "explanation": "Incorrect. Isovolumetric contraction begins with AV valve closure, which produces S1 itself, not a sound before it. This would be the correct answer if the sound were a normal S1."
      },
      {
        "text": "Isovolumetric ventricular relaxation",
        "explanation": "Incorrect. Isovolumetric relaxation begins with semilunar valve closure, far from S1. This would be the correct answer if the sound were a normal S2 from aortic valve closure."
      },
      {
        "text": "Diastasis, slow ventricular filling",
        "explanation": "Incorrect. Diastasis ends at the P wave, before the atrial contraction that immediately precedes S1. This would be the correct answer if a Wiggers tracing showed slow filling ending at the P wave."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: An S4 gallop, heard just before S1, arises in late diastole as the atrium contracts against a stiff hypertrophied ventricle, as in longstanding hypertension; S3 occurs in rapid filling.",
    "lectureSource": "CV28: Cardiac Cycle Part I",
    "pdfLecture": "CV28",
    "pdfPage": 29,
    "pdfQuote": "S3 gallop is associated with",
    "itemType": "board"
  },
  {
    "id": 30,
    "category": "Cardiovascular: Contractility and Calcium",
    "questionText": "A 67-year-old man with a prior myocardial infarction has 3 months of worsening exertional dyspnea. Echocardiography shows a dilated left ventricle with poor systolic wall motion. He begins an oral drug that inhibits the myocyte Na+/K+ ATPase, and his exercise tolerance improves. Which of the following most directly increases his myocardial contractile force?",
    "options": [
      {
        "text": "Increased intracellular sodium",
        "explanation": "Incorrect. Sodium rises first but only slows Na+/Ca2+ exchange; calcium activates contraction. This would be the correct answer if myocyte sodium content were measured right after sodium pump inhibition."
      },
      {
        "text": "Increased cytosolic calcium",
        "explanation": "Correct. Inhibiting the Na+/K+ ATPase raises intracellular sodium, which slows the Na+/Ca2+ exchanger. Less calcium is extruded, so cytosolic calcium rises and contractile force increases in this failing ventricle. Raised sodium is only the upstream step; calcium is what activates contraction."
      },
      {
        "text": "Decreased afterload",
        "explanation": "Incorrect. His drug inhibits the sodium pump rather than dilating arterioles. This would be the correct answer if he had been started on an arterial vasodilator."
      },
      {
        "text": "Increased norepinephrine release",
        "explanation": "Incorrect. His agent acts on myocyte ion transport, not sympathetic nerves. This would be the correct answer if contractility rose during sympathetic activation, as with exercise."
      },
      {
        "text": "Increased end-diastolic volume",
        "explanation": "Incorrect. A Frank-Starling rise in stroke volume follows greater filling, not pump inhibition. This would be the correct answer if stroke volume rose after increased venous return."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Na+/K+ ATPase inhibition raises intracellular sodium, slowing the Na+/Ca2+ exchanger so less calcium is extruded; the rise in cytosolic calcium increases contractile force in a failing ventricle.",
    "lectureSource": "CV29: Cardiac Cycle Part II",
    "pdfLecture": "CV29",
    "pdfPage": 22,
    "pdfQuote": "Sodium pump with Digoxin - the",
    "itemType": "board"
  },
  {
    "id": 31,
    "category": "Renal: Diuretic Pharmacology",
    "questionText": "A 72-year-old woman with chronic heart failure has worsening leg edema despite maximal oral furosemide given in divided doses. She follows a low-sodium diet and takes no NSAIDs. Examination shows pitting edema to the knees. CT of the abdomen shows diffuse bowel wall edema. Which of the following changes to her oral diuretic regimen is most appropriate?",
    "options": [
      {
        "text": "Add a thiazide diuretic",
        "explanation": "Incorrect. Sequential nephron blockade comes after drug delivery is fixed, and her bowel wall edema points to poor furosemide absorption. This would be the correct answer if edema persisted on torsemide."
      },
      {
        "text": "Add oral acetazolamide",
        "explanation": "Incorrect. Acetazolamide is a weak diuretic and nothing suggests alkalosis in her. This would be the correct answer if a patient had loop diuretic-induced metabolic alkalosis needing rapid correction."
      },
      {
        "text": "Add oral spironolactone",
        "explanation": "Incorrect. Spironolactone does not fix poor furosemide absorption from her gut edema. This would be the correct answer if a patient with cirrhosis and ascites needed an aldosterone antagonist with furosemide."
      },
      {
        "text": "Switch to oral torsemide",
        "explanation": "Correct. Torsemide has predictable oral absorption and a longer half-life than furosemide. Her bowel wall edema indicates reduced intestinal absorption of furosemide, explaining failure of maximal divided doses. Adding a thiazide is a later step once drug delivery is adequate."
      },
      {
        "text": "Increase the furosemide dose",
        "explanation": "Incorrect. She already takes the maximal oral dose, and gut edema limits its absorption. This would be the correct answer if edema persisted on a submaximal furosemide dose with good absorption."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: When bowel wall edema impairs oral furosemide absorption in heart failure, switch to torsemide, which has predictable oral absorption and longer half-life, before adding a thiazide.",
    "lectureSource": "CV30: Diuretic Agents Part 1",
    "pdfLecture": "CV30",
    "pdfPage": 35,
    "pdfQuote": "Loop Diuretics: Pharmacokinetic Properties",
    "itemType": "board"
  },
  {
    "id": 32,
    "category": "Diuretics: Potassium-Sparing Agents",
    "questionText": "Amiloride reduces potassium secretion by principal cells mainly through which change?",
    "options": [
      {
        "text": "Reduced medullary osmotic gradient",
        "explanation": "Incorrect. The medullary gradient concentrates urine. This would be the correct answer if the question had asked about loop diuretic action."
      },
      {
        "text": "Reduced distal NCC cotransport",
        "explanation": "Incorrect. NCC mediates DCT NaCl reabsorption. This would be the correct answer if the question had asked about the thiazide target."
      },
      {
        "text": "Reduced lumen-negative transepithelial voltage",
        "explanation": "Correct. Blocking ENaC stops the Na+ entry that leaves the lumen negative, removing the electrical gradient that drives K+ out through ROMK. K+ is retained with hyperkalemia risk, unlike thiazides, which raise distal Na+ delivery and K+ secretion."
      },
      {
        "text": "Reduced afferent prostaglandin dilation",
        "explanation": "Incorrect. Prostaglandins dilate the afferent arteriole. This would be the correct answer if the question had asked about NSAID effects on GFR."
      },
      {
        "text": "Reduced organic cation secretion",
        "explanation": "Incorrect. OCT secretion delivers amiloride to the nephron. This would be the correct answer if the question had asked about drug delivery."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Amiloride blocks ENaC, removing the lumen-negative voltage that drives K+ secretion through ROMK, so K+ is retained with hyperkalemia risk.",
    "lectureSource": "CV31: Diuretic Agents Part 2",
    "pdfLecture": "CV31",
    "pdfPage": 25,
    "pdfQuote": "Ion Transport in the Principal Cells",
    "itemType": "recall"
  },
  {
    "id": 33,
    "category": "Cardiac Action Potentials: Refractory Period",
    "questionText": "Cardiac muscle resists tetanic contraction mainly because of which property of the myocyte?",
    "options": [
      {
        "text": "Fast phase 0 sodium upstroke",
        "explanation": "Incorrect. Rapid Na+ entry in fast-response cells. This would be the correct answer if the question had asked about ventricular phase 0."
      },
      {
        "text": "Long effective refractory period",
        "explanation": "Correct. The cardiac effective refractory period lasts almost as long as the entire muscle twitch, so a second stimulus cannot summate. Skeletal muscle, by contrast, has a short refractory period that allows summation and tetanus."
      },
      {
        "text": "Calcium-induced calcium release",
        "explanation": "Incorrect. The E-C coupling trigger for SR release. This would be the correct answer if the question had asked about ryanodine receptors."
      },
      {
        "text": "Spontaneous phase 4 depolarization",
        "explanation": "Incorrect. Pacemaker drift in SA nodal cells. This would be the correct answer if the question had asked about automaticity."
      },
      {
        "text": "High resting K+ permeability",
        "explanation": "Incorrect. Holds myocytes near EK at rest. This would be the correct answer if the question had asked about phase 4."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Cardiac muscle cannot be tetanized because its effective refractory period lasts nearly the whole twitch, so stimuli cannot summate as in skeletal muscle.",
    "lectureSource": "CV22: Cardiac Action Potentials",
    "pdfLecture": "CV22",
    "pdfPage": 39,
    "pdfQuote": "Long cardiac ERP prevents tetanus",
    "itemType": "recall"
  },
  {
    "id": 34,
    "category": "Cardiac Electrophysiology: Pacemaking and Conduction",
    "questionText": "Sympathetic stimulation raises myocardial contractility through increased L-type Ca2+ current and which other change?",
    "options": [
      {
        "text": "Increased funny current, If",
        "explanation": "Incorrect. This raises heart rate. This would be the correct answer if the question had asked about positive chronotropy."
      },
      {
        "text": "Increased IK-ACh K+ current",
        "explanation": "Incorrect. This vagal current hyperpolarizes nodal cells. This would be the correct answer if the question had asked about negative dromotropy."
      },
      {
        "text": "Increased SR Ca2+ release",
        "explanation": "Correct. Beta1-Gs-cAMP-PKA signaling increases L-type Ca2+ entry and activates the ryanodine receptor to release more SR Ca2+, raising contractility. Increased funny current instead mediates the positive chronotropic effect."
      },
      {
        "text": "Increased fast Na+ entry",
        "explanation": "Incorrect. Fast Na+ entry drives Purkinje upstrokes. This would be the correct answer if the question had asked about ventricular conduction."
      },
      {
        "text": "Increased T-type Ca2+ current",
        "explanation": "Incorrect. This current aids nodal phase 4 depolarization. This would be the correct answer if the question had asked about pacemaker helper currents."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Beta1 stimulation via cAMP-PKA raises contractility by increasing L-type Ca2+ entry and ryanodine receptor SR Ca2+ release; increased funny current mediates the chronotropic effect.",
    "lectureSource": "CV23: Cardiac Impulse Conduction and Autonomic Control",
    "pdfLecture": "CV23",
    "pdfPage": 38,
    "pdfQuote": "Signaling pathway mediating",
    "itemType": "recall"
  },
  {
    "id": 35,
    "category": "Cardiovascular: ECG Intervals",
    "questionText": "A 61-year-old man comes to the emergency department because of substernal chest pain for 30 minutes. He has hypertension and diabetes mellitus. A stat ECG shows depression of the ST segment in several contiguous leads, with a normal PR interval and QRS duration. Which process most likely explains this ECG finding?",
    "options": [
      {
        "text": "Transmural injury",
        "explanation": "Incorrect. Transmural injury produces ST elevation, but this patient has ST depression. This would be the correct answer if the ECG showed ST elevation in contiguous leads, as in a STEMI."
      },
      {
        "text": "AV nodal delay",
        "explanation": "Incorrect. AV nodal delay prolongs the PR interval, and his PR interval is normal. This would be the correct answer if the ECG showed a PR interval longer than 200 ms."
      },
      {
        "text": "Long QT syndrome",
        "explanation": "Incorrect. Long QT syndrome prolongs the QT interval rather than depressing the ST segment. This would be the correct answer if the QT exceeded half the R-R interval."
      },
      {
        "text": "Hyperkalemia",
        "explanation": "Incorrect. Hyperkalemia changes T-wave amplitude, not the ST segment, and no potassium disorder is suggested. This would be the correct answer if the ECG showed tall peaked T waves."
      },
      {
        "text": "Subendocardial ischemia",
        "explanation": "Correct. ST depression indicates subendocardial ischemia. His chest pain with ST depression in contiguous leads points to ischemia confined to the inner myocardium. Transmural injury is the closest competitor but produces ST elevation rather than depression."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: In chest pain, ST depression in contiguous leads indicates subendocardial ischemia confined to the inner myocardium; transmural injury produces ST elevation instead.",
    "lectureSource": "CV26: Basic ECG - Leads, Vectors and Intervals",
    "pdfLecture": "CV26",
    "pdfPage": 33,
    "pdfQuote": "Summary Slide w/ some extra information",
    "itemType": "board"
  },
  {
    "id": 36,
    "category": "Diuretics: Loop Diuretics",
    "questionText": "Loop diuretics increase urinary Mg2+ and Ca2+ excretion by abolishing which of the following?",
    "options": [
      {
        "text": "Medullary osmotic gradient",
        "explanation": "Incorrect. This gradient concentrates urine. This would be the correct answer if the question had asked how loops impair urine concentration."
      },
      {
        "text": "Proximal NHE3 exchange",
        "explanation": "Incorrect. NHE3 exchanges proximal Na+ for H+. This would be the correct answer if the question had asked about carbonic anhydrase inhibitors."
      },
      {
        "text": "Lumen-positive transepithelial potential",
        "explanation": "Correct. In the thick ascending limb, K+ back-leak through ROMK creates a lumen-positive potential that drives paracellular Mg2+ and Ca2+ reabsorption. Blocking NKCC2 eliminates this potential, so both cations are excreted, unlike carbonic anhydrase inhibitors, which barely affect Mg2+."
      },
      {
        "text": "Aldosterone-induced ENaC expression",
        "explanation": "Incorrect. ENaC expression favors K+ secretion. This would be the correct answer if the question had asked about MR antagonist potassium sparing."
      },
      {
        "text": "Tubuloglomerular feedback",
        "explanation": "Incorrect. Macula densa signaling sets afferent tone. This would be the correct answer if the question had asked how CAIs lower GFR."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Loop diuretics block NKCC2, abolishing the ROMK-generated lumen-positive potential in the thick ascending limb that drives paracellular Mg2+ and Ca2+ reabsorption, so both are excreted.",
    "lectureSource": "CV30: Diuretic Agents Part 1",
    "pdfLecture": "CV30",
    "pdfPage": 36,
    "pdfQuote": "Normal function:",
    "itemType": "recall"
  },
  {
    "id": 37,
    "category": "Diuretics: Potassium-Sparing Agents",
    "questionText": "The effect of mineralocorticoid receptor antagonists on urinary electrolyte excretion increases as which patient variable rises?",
    "options": [
      {
        "text": "Serum magnesium concentration",
        "explanation": "Incorrect. Serum magnesium falls with thiazide TRPM6 downregulation. This would be the correct answer if the question had asked about thiazide hypomagnesemia."
      },
      {
        "text": "Plasma aldosterone concentration",
        "explanation": "Correct. MR antagonists competitively block aldosterone at cytosolic receptors, so the higher the aldosterone level, the greater their effect on Na+ excretion and K+ retention. ENaC inhibitors instead block the luminal channel directly without competing with aldosterone."
      },
      {
        "text": "Plasma osmolality",
        "explanation": "Incorrect. Plasma osmolality rises with mannitol. This would be the correct answer if the question had asked about osmotic diuretic action."
      },
      {
        "text": "Serum lithium concentration",
        "explanation": "Incorrect. Lithium rises when thiazides increase proximal reabsorption. This would be the correct answer if the question had asked about lithium toxicity."
      },
      {
        "text": "Serum digoxin concentration",
        "explanation": "Incorrect. Digoxin assays are altered by spironolactone. This would be the correct answer if the question had asked about lab assay interference."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Mineralocorticoid receptor antagonists competitively block aldosterone, so their natriuretic and K+-retaining effect grows as plasma aldosterone rises; ENaC inhibitors act regardless of aldosterone.",
    "lectureSource": "CV31: Diuretic Agents Part 2",
    "pdfLecture": "CV31",
    "pdfPage": 31,
    "pdfQuote": "MR Antagonists are competitive antagonists of aldosterone.",
    "itemType": "recall"
  },
  {
    "id": 38,
    "category": "Diuretics: Loop Diuretics",
    "questionText": "Loop diuretic ototoxicity results from inhibition of which transporter?",
    "options": [
      {
        "text": "NKCC1 cotransporter",
        "explanation": "Correct. Loop diuretics inhibit NKCC1 in the inner ear, disrupting the endolymph K+ balance needed for hearing. Their diuretic effect instead comes from NKCC2 blockade in the thick ascending limb."
      },
      {
        "text": "NKCC2 cotransporter",
        "explanation": "Incorrect. NKCC2 is the thick ascending limb diuretic target. This would be the correct answer if the question had asked about natriuresis."
      },
      {
        "text": "ENaC sodium channel",
        "explanation": "Incorrect. ENaC mediates distal Na+ reabsorption. This would be the correct answer if the question had asked about amiloride's potassium-sparing site."
      },
      {
        "text": "NCC symporter",
        "explanation": "Incorrect. NCC is the distal Na+-Cl- symporter. This would be the correct answer if the question had asked about the thiazide target."
      },
      {
        "text": "ROMK potassium channel",
        "explanation": "Incorrect. ROMK secretes K+ down a lumen-negative gradient. This would be the correct answer if the question had asked about potassium wasting."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Loop diuretic ototoxicity comes from inner ear NKCC1 inhibition disrupting endolymph K+ balance; the diuretic effect comes from NKCC2 blockade in the thick ascending limb.",
    "lectureSource": "CV30: Diuretic Agents Part 1",
    "pdfLecture": "CV30",
    "pdfPage": 44,
    "pdfQuote": "Loop Diuretics: Adverse Effects",
    "itemType": "recall"
  },
  {
    "id": 39,
    "category": "Diuretics: Osmotic Agents",
    "questionText": "Mannitol exerts its greatest osmotic diuretic effect in which nephron segment?",
    "options": [
      {
        "text": "Thick ascending limb",
        "explanation": "Incorrect. The thick ascending limb holds NKCC2. This would be the correct answer if the question had asked about loop diuretic action."
      },
      {
        "text": "Proximal tubule",
        "explanation": "Correct. Mannitol is filtered but not reabsorbed, so it holds water in the lumen of water-permeable segments, mainly the proximal tubule and descending limb. It acts little in water-impermeable segments such as the thick ascending limb."
      },
      {
        "text": "Early distal convoluted tubule",
        "explanation": "Incorrect. The early DCT holds NCC. This would be the correct answer if the question had asked about thiazide action."
      },
      {
        "text": "Cortical collecting duct",
        "explanation": "Incorrect. Collecting ducts are a lesser mannitol site. This would be the correct answer if the question had asked about ENaC blockade."
      },
      {
        "text": "Connecting tubule",
        "explanation": "Incorrect. The connecting tubule is an aldosterone-sensitive site. This would be the correct answer if the question had asked about potassium-sparing diuretics."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Mannitol is filtered but not reabsorbed, holding water in water-permeable segments, mainly proximal tubule and descending limb, with little action in the thick ascending limb.",
    "lectureSource": "CV31: Diuretic Agents Part 2",
    "pdfLecture": "CV31",
    "pdfPage": 40,
    "pdfQuote": "Osmotic Diuretics Increase Water Excretion",
    "itemType": "recall"
  },
  {
    "id": 40,
    "category": "Renal: Diuretic Pharmacology",
    "questionText": "A 67-year-old man with left-sided heart failure is admitted with a traumatic brain injury and rising intracranial pressure. He receives intravenous mannitol, and his neurologic status improves. Six hours later he develops acute dyspnea, bilateral crackles, and an oxygen saturation of 86% on room air. Which of the following is the most likely mechanism of his new findings?",
    "options": [
      {
        "text": "Plasma volume expansion raising preload",
        "explanation": "Correct. Mannitol stays in the ECF, raises plasma osmolality and pulls water into the vasculature, increasing venous return and pulmonary capillary pressure. His left-sided heart failure cannot handle this load, producing crackles and hypoxemia. Nephrotoxic kidney injury is less likely without oliguria or rising creatinine."
      },
      {
        "text": "Dehydration from rapid diuresis",
        "explanation": "Incorrect. Crackles and hypoxemia reflect fluid excess in his lungs, not water loss. This would be the correct answer if excessive mannitol dosing caused hypernatremia and hypovolemia."
      },
      {
        "text": "Acute kidney injury from nephrotoxicity",
        "explanation": "Incorrect. No oliguria or creatinine rise is described, and his failing heart explains the rapid lung findings. This would be the correct answer if creatinine rose after mannitol in pre-existing kidney dysfunction."
      },
      {
        "text": "Mannitol accumulation in brain tissue",
        "explanation": "Incorrect. Brain accumulation would worsen cerebral edema, not cause crackles and hypoxemia. This would be the correct answer if continuous infusion raised intracranial pressure again."
      },
      {
        "text": "Water shift into lung cells",
        "explanation": "Incorrect. Mannitol raises plasma osmolality and draws water out of cells, not into them. This would be the correct answer if plasma osmolality had fallen below that of cells."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Mannitol raises plasma osmolality and pulls water into the vasculature, increasing venous return and pulmonary capillary pressure; left-sided heart failure cannot handle this load, causing crackles and hypoxemia.",
    "lectureSource": "CV31: Diuretic Agents Part 2",
    "pdfLecture": "CV31",
    "pdfPage": 42,
    "pdfQuote": "Osmotic Diuretics: Adverse Effects / Cautions",
    "itemType": "board"
  }
];

window.Test_Cumulative_CPR_Wk3 = Test_Cumulative_CPR_Wk3;
