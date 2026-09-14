// CPR Block 1 - Week 3 Cumulative Exam (Lectures CV21-CV31)
// 50 application-level questions, interleaved across:
//   CV21  OMM: Cranial Strain Patterns, Condylar Decompression & Lifts
//   CV22  Physiology: Cardiac Action Potentials
//   CV23  Physiology: Cardiac Impulse Conduction & Autonomic Control
//   CV24  Physiology: Vascular Endothelial Cells
//   CV25  Physiology: Vascular Smooth Muscle Cells
//   CV26  Physiology: Basic ECG - Leads, Vectors & Intervals
//   CV27  Physiology: EKG Introduction
//   CV28  Physiology: Cardiac Cycle Part I
//   CV29  Physiology: Cardiac Cycle Part II - Loops, Laws & Cardiac Output
//   CV30  Pharmacology: Diuretic Agents Part 1
//   CV31  Pharmacology: Diuretic Agents Part 2
const Test_Cumulative_CPR_Wk3 = [
  {
    "id": 1,
    "category": "Cardiology: STEMI Localization",
    "questionText": "A 62-year-old man presents with 45 minutes of crushing substernal chest pain, diaphoresis, and nausea. His blood pressure is 88/54 mmHg and his lungs are clear. The ECG shows ST elevation of 3 mm in leads II, III, and aVF with reciprocal ST depression in I and aVL. He becomes profoundly hypotensive after a single sublingual nitroglycerin tablet. Which vessel is most likely occluded, and what additional ECG step should have been taken before giving the nitrate?",
    "options": [
      {
        "text": "Left anterior descending artery; anterior leads V1 through V4 should have been re-examined for reciprocal change",
        "explanation": "Incorrect. The left anterior descending artery supplies the anterior wall and interventricular septum, and its occlusion produces ST elevation in V1 through V4. Leads II, III, and aVF look at the inferior wall. This would be the correct answer if the ST elevation were in the precordial rather than the inferior leads."
      },
      {
        "text": "Left circumflex artery; posterior leads V7 through V9 should have been obtained to confirm a posterior infarct",
        "explanation": "Incorrect. The left circumflex supplies the lateral wall and, in a left-dominant circulation, part of the inferior wall, and posterior leads are indeed the correct additional step when tall R waves and ST depression appear in V1 through V3. However, the pattern here is a straightforward inferior infarct with a hemodynamic clue pointing to the right ventricle. This would be the correct answer if V1 through V3 had shown ST depression with prominent R waves."
      },
      {
        "text": "Right coronary artery; right-sided leads, particularly V4R, should have been obtained to look for right ventricular infarction",
        "explanation": "Correct. ST elevation in II, III, and aVF with reciprocal depression in I and aVL localizes the infarct to the inferior wall, which is supplied by the right coronary artery in the roughly 85 percent of people who are right-dominant. Up to half of inferior infarcts extend to the right ventricle, and the combination of hypotension with clear lung fields is the classic clue. Right ventricular infarction should be confirmed with right-sided precordial leads, where ST elevation in V4R is the single most useful finding. The distinction is critical because a failing right ventricle is exquisitely preload-dependent: it cannot generate adequate output without a high filling pressure, so nitrates, which venodilate and reduce preload, can precipitate the catastrophic hypotension seen here. Management is fluid loading and avoidance of nitrates and diuretics."
      },
      {
        "text": "Left main coronary artery; the finding of diffuse ST depression with elevation in aVR should have been sought",
        "explanation": "Incorrect. Left main or severe multivessel disease classically produces widespread ST depression with ST elevation in aVR and often V1, a pattern of global subendocardial ischemia rather than focal transmural injury. The localized inferior elevation described here does not fit. This would be the correct answer if the ECG showed ST depression in seven or more leads with elevation in aVR."
      },
      {
        "text": "Posterior descending artery in isolation; an echocardiogram rather than additional leads is the appropriate next step",
        "explanation": "Incorrect. The posterior descending artery is a branch, usually of the right coronary artery, and naming it alone does not identify the culprit vessel in a way that guides intervention. Echocardiography is useful adjunctively but should not delay the additional leads or reperfusion. This would be the correct answer if the question asked how to assess wall motion after reperfusion."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Inferior STEMI (II, III, aVF) means right coronary artery in about 85 percent of people. ALWAYS get V4R, because up to half extend to the right ventricle. Hypotension with CLEAR LUNGS after nitroglycerin is RV infarct until proven otherwise; treat with fluids, not nitrates or diuretics.",
    "lectureSource": "CV27: EKG Introduction"
  },
  {
    "id": 2,
    "category": "Cardiac Electrophysiology: Sodium Channel States",
    "questionText": "A 58-year-old man with frequent premature ventricular complexes is treated with lidocaine. An electrophysiologist notes that the drug has little effect on normal myocardium at a normal heart rate but strongly suppresses ectopic activity arising from an ischemic region where the resting membrane potential is depolarized to about minus 60 mV. Which property of the cardiac fast sodium channel best explains this selectivity?",
    "options": [
      {
        "text": "The channel is permanently open at depolarized potentials, so any blocker is more effective in ischemic tissue",
        "explanation": "Incorrect. Voltage-gated sodium channels do not remain open at depolarized potentials; they open only transiently during phase 0 and then rapidly inactivate. A permanently open channel would produce a sustained inward current incompatible with a normal action potential. This would be the correct answer if the fast sodium channel did not inactivate."
      },
      {
        "text": "Sodium channels are absent from ischemic myocardium, so the drug must act on calcium channels instead",
        "explanation": "Incorrect. Sodium channels are present in ischemic myocardium; the problem is that they are largely inactivated because the tissue is chronically depolarized. Lidocaine is a class IB agent whose target is the sodium channel, not the L-type calcium channel, which is the target of class IV agents. This would be the correct answer if the drug in question were verapamil."
      },
      {
        "text": "The channel's activation gate closes more slowly in ischemic tissue, prolonging phase 0 and exposing the binding site",
        "explanation": "Incorrect. This reverses the kinetics. The activation gate (the m gate) is fast and opens on depolarization; the inactivation gate (the h gate) is slower and closes to terminate the current. Ischemia does slow conduction, but through reduced sodium channel availability rather than through a slowed activation gate. This would be the correct answer if activation rather than inactivation determined drug binding."
      },
      {
        "text": "Ischemic tissue has more gap junctions, which concentrates the drug locally within the affected region",
        "explanation": "Incorrect. Ischemia causes gap junctions to CLOSE, largely because of intracellular acidosis and calcium overload, and that uncoupling is one reason conduction slows and reentry becomes possible. Drug concentration is also not determined by gap junction density. This would be the correct answer if ischemia increased intercellular coupling."
      },
      {
        "text": "The channel cycles among resting, open, and inactivated states, and lidocaine preferentially binds the latter two",
        "explanation": "Correct. The cardiac fast sodium channel has two gates and therefore three states. At a normal resting potential near minus 90 mV it is in the resting (closed but available) state; depolarization opens the fast activation gate, producing the enormous inward current of phase 0; and the slower inactivation gate then closes, leaving the channel unavailable until repolarization below about minus 60 mV allows it to reset. Local anesthetic-class antiarrhythmics show use-dependence and state-dependence: they bind poorly to the resting state and well to the open and inactivated states. In chronically depolarized ischemic tissue a large fraction of channels sits in the inactivated state and never fully recovers, so drug binding is high; in normal tissue at a normal rate, channels spend most of their time resting and recover fully between beats, so binding is minimal. This selectivity is why lidocaine suppresses ischemic ventricular arrhythmias with little effect on normal conduction, and the same principle explains why all sodium channel blockers become more potent at faster heart rates."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Fast sodium channels have three states: RESTING (available), OPEN (phase 0), and INACTIVATED (unavailable until repolarized past about -60 mV). Class I drugs are use- and state-dependent, binding open and inactivated channels, which is why they target fast, depolarized, ischemic tissue selectively.",
    "lectureSource": "CV22: Cardiac Action Potentials"
  },
  {
    "id": 3,
    "category": "Renal Pharmacology: Loop Diuretics",
    "questionText": "A 71-year-old woman with acute decompensated heart failure receives intravenous furosemide. Within 30 minutes, before any significant diuresis has occurred, her dyspnea improves noticeably and her jugular venous pressure falls. Her nurse questions how the drug could be working before urine output has increased. Which of the following best explains this early benefit?",
    "options": [
      {
        "text": "Furosemide stimulates renal prostaglandin production, causing venodilation that reduces preload before the natriuresis begins",
        "explanation": "Correct. Loop diuretics have an early, prostaglandin-mediated venodilator effect that is independent of and precedes their diuretic action. Furosemide stimulates renal production of vasodilatory prostaglandins, particularly PGE2 and PGI2, which increase venous capacitance and reduce cardiac preload within minutes. This lowers pulmonary capillary wedge pressure and relieves congestion before any meaningful volume has been excreted. The clinical corollary is important: NSAIDs, by inhibiting cyclooxygenase, blunt both this venodilator effect and the renal vasodilation that supports drug delivery, which is a major reason NSAIDs cause diuretic resistance and worsen heart failure. The subsequent natriuresis follows once enough drug is secreted into the tubular lumen to inhibit NKCC2."
      },
      {
        "text": "Furosemide directly inhibits cardiac NKCC2, improving myocardial contractility",
        "explanation": "Incorrect. NKCC2 is expressed in the thick ascending limb of the loop of Henle and in a few other epithelia, not in cardiac myocytes, and loop diuretics have no direct positive inotropic action. This would be the correct answer if the drug had a cardiac transporter target, as digoxin does with the Na-K-ATPase."
      },
      {
        "text": "Furosemide is filtered at the glomerulus and reaches its site of action immediately, so the diuresis has in fact already begun undetected",
        "explanation": "Incorrect. Loop diuretics are highly protein-bound, so very little is filtered; they reach their luminal site of action by being SECRETED through the proximal tubular organic anion transporters. More importantly, dismissing the early effect as an unnoticed diuresis misses the real and separately demonstrable hemodynamic mechanism. This would be the correct answer if loop diuretics acted from the blood side of the tubular cell."
      },
      {
        "text": "Furosemide blocks the angiotensin II receptor, producing immediate arterial vasodilation and afterload reduction",
        "explanation": "Incorrect. Furosemide has no angiotensin receptor activity; in fact it ACTIVATES the renin-angiotensin-aldosterone system by reducing sodium chloride delivery sensed at the macula densa and by causing volume contraction, which is one reason loop diuretics are paired with RAAS blockade in heart failure. This would be the correct answer if she had received losartan."
      },
      {
        "text": "Furosemide increases myocardial oxygen delivery by dilating the coronary arteries through ATP-sensitive potassium channel opening",
        "explanation": "Incorrect. Coronary vasodilation through KATP channel opening is a mechanism of drugs such as nicorandil and of endogenous metabolic autoregulation, not of loop diuretics. The relief of dyspnea here is due to reduced preload rather than to improved coronary flow. This would be the correct answer if the drug given were a potassium channel opener for angina."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: IV loop diuretics work in two phases: an early PROSTAGLANDIN-mediated VENODILATION that drops preload within minutes, then the natriuresis. NSAIDs block both this and the renal vasodilation that sustains drug delivery, which is a leading cause of diuretic resistance.",
    "lectureSource": "CV30: Diuretic Agents Part 1"
  },
  {
    "id": 4,
    "category": "Vascular Physiology: Nitric Oxide Signaling",
    "questionText": "In a vascular reactivity study, isolated aortic rings are precontracted with phenylephrine. Acetylcholine produces a dose-dependent relaxation in intact rings but causes contraction in rings whose luminal surface has been gently rubbed. Sodium nitroprusside relaxes both preparations equally. Adding N-nitro-L-arginine methyl ester to the intact rings abolishes the acetylcholine response. Which of the following best explains these results?",
    "options": [
      {
        "text": "Acetylcholine acts directly on smooth muscle M3 receptors to cause relaxation, and rubbing damaged those receptors",
        "explanation": "Incorrect. Muscarinic receptors on vascular SMOOTH MUSCLE, when reached directly, cause contraction, which is exactly what is seen in the rubbed rings. Relaxation in intact vessels is indirect and requires an intermediary cell layer. This would be the correct answer if smooth muscle muscarinic receptors were relaxant."
      },
      {
        "text": "Rubbing removed the smooth muscle layer, so no relaxation is possible in the denuded rings",
        "explanation": "Incorrect. If the smooth muscle had been removed, the rings could neither contract to phenylephrine nor relax to nitroprusside, yet the denuded rings do both. Gentle rubbing removes only the delicate single-cell-thick luminal layer. This would be the correct answer if the rubbing had destroyed the media."
      },
      {
        "text": "Nitroprusside requires an intact endothelium, which is why it worked only in the unrubbed rings",
        "explanation": "Incorrect. The vignette states explicitly that nitroprusside relaxed BOTH preparations equally, and that is its defining pharmacologic feature: it is an endothelium-INDEPENDENT nitric oxide donor that releases NO spontaneously and acts directly on smooth muscle guanylyl cyclase. This is why it remains effective when the endothelium is diseased. This would be the correct answer if nitroprusside were endothelium-dependent."
      },
      {
        "text": "Acetylcholine acts on endothelial M3 receptors to activate eNOS, and the nitric oxide produced raises cyclic GMP in smooth muscle",
        "explanation": "Correct. This is the classic Furchgott experiment that established the existence of endothelium-derived relaxing factor, later identified as nitric oxide. Acetylcholine binds M3 receptors on ENDOTHELIAL cells, raising intracellular calcium, which activates calcium-calmodulin-dependent endothelial nitric oxide synthase to convert L-arginine to nitric oxide and citrulline. Nitric oxide is a small lipophilic gas that diffuses into the adjacent smooth muscle, activates soluble guanylyl cyclase, raises cyclic GMP, and activates protein kinase G, which lowers intracellular calcium and dephosphorylates myosin light chain to produce relaxation. L-NAME is a competitive arginine analogue that inhibits eNOS, so it abolishes the response, and removing the endothelium does the same while exposing the direct contractile effect of acetylcholine on smooth muscle muscarinic receptors. This assay is the basis of flow-mediated dilation testing, which detects endothelial dysfunction in hypertension, diabetes, and hypercholesterolemia."
      },
      {
        "text": "Acetylcholine stimulates endothelin-1 release from endothelium, and endothelin causes relaxation through ETB receptors",
        "explanation": "Incorrect. Endothelin-1 is the most potent endogenous vasoconstrictor, and although ETB receptors on the endothelium do mediate a secondary nitric oxide release, the dominant effect of endothelin through ETA receptors on smooth muscle is powerful and sustained CONSTRICTION. Acetylcholine is also not a principal stimulus for endothelin release. This would be the correct answer if the question described the mechanism of bosentan in pulmonary arterial hypertension."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: ACh relaxes vessels only through an INTACT ENDOTHELIUM (M3 receptor, calcium, eNOS, NO, guanylyl cyclase, cGMP, PKG). Remove the endothelium and ACh CONSTRICTS. Nitroprusside and nitrates are endothelium-INDEPENDENT NO donors and still work when the endothelium is diseased.",
    "lectureSource": "CV24: Vascular Endothelial Cells"
  },
  {
    "id": 5,
    "category": "Cardiology: Preload and Frank-Starling",
    "questionText": "A pressure-volume loop is recorded from a patient before and after a 500 mL saline bolus. After the bolus, the loop's right-hand vertical border shifts rightward, the loop becomes taller and wider, the end-systolic pressure-volume point falls on the same line as before, and stroke volume increases from 62 to 81 mL. Heart rate and blood pressure are unchanged. Which of the following best interprets this change?",
    "options": [
      {
        "text": "Contractility has increased, as shown by the rightward shift of the end-diastolic point of the loop",
        "explanation": "Incorrect. Contractility is represented by the slope of the end-systolic pressure-volume relationship, and the vignette specifies that the end-systolic point still lies on the SAME line, meaning the slope is unchanged. A rightward shift of the end-diastolic point reflects filling, not inotropy. This would be the correct answer if the end-systolic point had moved up and to the left onto a steeper line."
      },
      {
        "text": "Preload has increased, and the larger stroke volume is a Frank-Starling effect at unchanged contractility",
        "explanation": "Correct. The right-hand vertical border of a pressure-volume loop is the isovolumetric contraction phase, and its position marks end-diastolic volume, so a rightward shift means increased preload. Because the end-systolic point still falls on the same end-systolic pressure-volume relationship, contractility is unchanged; the ventricle is simply operating further along the same curve. This is the Frank-Starling mechanism: greater end-diastolic volume stretches sarcomeres toward their optimal overlap of about 2.2 micrometers and, more importantly in cardiac muscle, increases the calcium sensitivity of the myofilaments, so more force and a larger stroke volume are generated from the same contractile state. The loop is wider because stroke volume, its width, has increased, and taller because a larger volume ejected against the same vascular properties generates a slightly higher systolic pressure."
      },
      {
        "text": "Afterload has fallen, which is why stroke volume rose without any change in diastolic filling volume",
        "explanation": "Incorrect. Reduced afterload does raise stroke volume, but it does so by shifting the end-systolic point down and to the LEFT along the same ESPVR, allowing the ventricle to empty further, and it does not shift the end-diastolic border rightward on the first beat. The vignette describes increased filling, not reduced resistance to ejection. This would be the correct answer if a vasodilator had been given."
      },
      {
        "text": "The end-systolic pressure-volume relationship has shifted rightward, indicating systolic dysfunction",
        "explanation": "Incorrect. A rightward, less steep ESPVR does indicate reduced contractility, but the vignette states that the end-systolic point remains on the SAME line. Confusing the end-diastolic border with the ESPVR is the error here. This would be the correct answer if the slope of the end-systolic line had decreased after an intervention such as a beta blocker."
      },
      {
        "text": "The end-diastolic pressure-volume relationship has become steeper, indicating impaired ventricular relaxation",
        "explanation": "Incorrect. A steeper end-diastolic pressure-volume relationship means a stiff, poorly compliant ventricle, as in restrictive or hypertrophic disease, and it produces high filling pressures for small volume increases with a narrowed loop. Here the loop widened and stroke volume rose, which is the opposite. This would be the correct answer if the patient had heart failure with preserved ejection fraction and a small, stiff ventricle."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: On a PV loop, WIDTH is stroke volume. The right border is end-diastolic volume (preload); the ESPVR SLOPE is contractility; the end-systolic point position along that line reflects afterload. Same ESPVR plus rightward shift equals Frank-Starling, not increased inotropy.",
    "lectureSource": "CV29: Cardiac Cycle Part II"
  },
  {
    "id": 6,
    "category": "OMM: Cranial Lifts",
    "questionText": "A physician performs a technique in which she engages the paired bones of the cranial vault bilaterally, disengages them slightly from the sphenoid along the line of the sutural bevel, and holds until a release is palpated. She explains that the direction of disengagement must follow the plane of the suture involved, and that the goal is to free the paired bones from the sphenoid at their articulation. Which statement about these lift techniques is most accurate?",
    "options": [
      {
        "text": "The parietal lift disengages the parietals from the frontal bone at the coronal suture, with traction applied anteriorly",
        "explanation": "Incorrect. The parietal lift addresses the articulation of the PARIETALS with the sphenoid and temporal bones along the squamous and sphenoparietal sutures, and the vector is medial compression followed by superior lift, not anterior traction at the coronal suture. This would be the correct answer if the technique targeted the frontoparietal articulation."
      },
      {
        "text": "Lift techniques are performed as rapid thrusts driven through the sutural barrier once all slack has been taken up",
        "explanation": "Incorrect. There is no thrust in any cranial technique. Lifts are slow, sustained, low-force maneuvers that hold a gentle disengagement and wait for release, consistent with the indirect, inherent-force principles of the cranial field. This would be the correct answer if the technique described were HVLA."
      },
      {
        "text": "The frontal lift is performed by pressing the frontal bone posteriorly into the sphenoid to close the sphenofrontal suture",
        "explanation": "Incorrect. The direction is exactly backward. The frontal lift DISENGAGES the frontal bone from the sphenoid by drawing it gently anteriorly and superiorly after a slight medial compression; pressing posteriorly would compress rather than free the articulation. This would be the correct answer if the aim were to approximate rather than separate the bones."
      },
      {
        "text": "Lifts are indicated in acute skull fracture, where superior traction across the vault decompresses the fracture line",
        "explanation": "Incorrect. Acute skull fracture is an ABSOLUTE contraindication to all cranial technique, along with acute intracranial hemorrhage, raised intracranial pressure, cerebrospinal fluid leak, acute stroke, and acute intracranial infection. Applying traction across a fracture risks displacement and vascular or dural injury. This would be the correct answer if fracture were an indication rather than a contraindication."
      },
      {
        "text": "Both lifts gently free the bevel with medial compression, then superior traction, anterior for the frontal, until release",
        "explanation": "Correct. The cranial sutures are beveled rather than flat, so the paired vault bones interlock with the sphenoid and temporal bones along an angled plane. Both the frontal lift and the parietal lift therefore begin with a small medial compression, which disengages the beveled surfaces, before traction is applied along the plane of the suture. In the frontal lift the operator contacts the frontal bone laterally, compresses slightly medially, then draws the bone anteriorly and superiorly to free it from the sphenoid at the sphenofrontal suture. In the parietal lift the operator contacts the parietals above the squamous suture, compresses medially, then lifts superiorly to free them from the sphenoid and temporal bones. Both are held with sustained light force until softening and release are palpated, and both aim to normalize membranous tension and improve venous and cerebrospinal fluid dynamics."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Cranial sutures are BEVELED, so lifts begin with slight MEDIAL COMPRESSION to disengage before traction along the sutural plane. Frontal lift frees the frontal from the sphenoid anteriorly and superiorly; parietal lift frees the parietals from sphenoid and temporal superiorly. Never thrust.",
    "lectureSource": "CV21: Cranial Strain Patterns, Condylar Decompression and Lifts"
  },
  {
    "id": 7,
    "category": "Cardiology: ECG Axis",
    "questionText": "A 68-year-old man with COPD has an ECG showing a predominantly negative QRS in lead I and a predominantly positive QRS in lead aVF. The R wave in V1 is taller than the S wave is deep, and there is right atrial enlargement. Which of the following correctly identifies the axis and offers the most consistent explanation?",
    "options": [
      {
        "text": "Left axis deviation, consistent with a left anterior fascicular block rather than with chronic lung disease",
        "explanation": "Incorrect. Left axis deviation is defined by a positive QRS in lead I with a negative QRS in aVF, the opposite of this tracing, and it is associated with left anterior fascicular block, inferior infarction, and left ventricular hypertrophy. This would be the correct answer if lead I were positive and aVF negative."
      },
      {
        "text": "Normal axis, since lead aVF is positive, which by itself would place the QRS axis within the normal range",
        "explanation": "Incorrect. A normal axis requires BOTH lead I and aVF to be positive, which places the mean vector between 0 and plus 90 degrees. Checking only one lead is insufficient, because a negative lead I already excludes a normal axis. This would be the correct answer if lead I were also positive."
      },
      {
        "text": "Right axis deviation, due to right ventricular hypertrophy from chronic hypoxic pulmonary vasoconstriction",
        "explanation": "Correct. The quickest axis method uses leads I and aVF as a two-quadrant check: both positive is normal, I positive with aVF negative is left axis deviation, I negative with aVF positive is right axis deviation, and both negative is extreme axis. Here lead I is negative and aVF positive, giving right axis deviation between plus 90 and plus 180 degrees. The mean QRS vector points toward the region of greatest muscle mass, so right ventricular hypertrophy pulls it rightward. The supporting findings fit: a tall R in V1 reflects increased rightward and anterior forces, and right atrial enlargement indicates chronic right-sided pressure loading. In COPD, chronic alveolar hypoxia causes hypoxic pulmonary vasoconstriction, which raises pulmonary vascular resistance and imposes a sustained pressure load on the right ventricle, producing cor pulmonale."
      },
      {
        "text": "Extreme axis deviation, which in this clinical setting would indicate a rhythm of ventricular origin",
        "explanation": "Incorrect. Extreme axis, sometimes called the northwest axis, requires BOTH lead I and aVF to be negative and does suggest a ventricular origin, hyperkalemia, or lead misplacement. Here aVF is positive. This would be the correct answer if both leads were negative with a wide QRS."
      },
      {
        "text": "Right axis deviation, most likely due to a left posterior fascicular block given the patient's age",
        "explanation": "Incorrect. The axis determination is right, but left posterior fascicular block is an uncommon cause of right axis deviation and is a diagnosis of exclusion, made only after right ventricular hypertrophy, lateral infarction, and a vertical heart have been ruled out; it also would not explain the tall R in V1 or the right atrial enlargement. This would be the correct answer if there were no evidence of right ventricular or pulmonary disease."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Quick axis check with leads I and aVF. Both up is normal; I up, aVF down is LAD; I down, aVF up is RAD; both down is extreme. The QRS vector points TOWARD hypertrophied muscle, so RAD plus tall R in V1 plus right atrial enlargement equals right ventricular hypertrophy, classically cor pulmonale.",
    "lectureSource": "CV26: Basic ECG - Leads, Vectors and Intervals"
  },
  {
    "id": 8,
    "category": "Cardiac Electrophysiology: Pacemaker Current",
    "questionText": "A 64-year-old man with stable angina and a resting heart rate of 82/min on maximal beta blockade is started on ivabradine. His heart rate falls to 62/min with no change in blood pressure, no change in PR or QRS intervals, and no reduction in contractility. Which current does this drug inhibit, and why does its blockade lower heart rate without these other effects?",
    "options": [
      {
        "text": "The L-type calcium current, which generates phase 0 in nodal tissue, so blockade slows both the sinus rate and AV conduction",
        "explanation": "Incorrect. Blocking the L-type calcium current, as verapamil and diltiazem do, would slow AV conduction and prolong the PR interval and would also reduce contractility in working myocardium, none of which occurred. The clean selectivity described points to a different target. This would be the correct answer if the drug were a non-dihydropyridine calcium channel blocker."
      },
      {
        "text": "The funny current If, a mixed inward sodium-potassium current activated by hyperpolarization driving sinoatrial phase 4",
        "explanation": "Correct. Nodal cells have no stable resting potential; after repolarizing to about minus 60 mV they undergo spontaneous phase 4 depolarization until threshold is reached, and the rate of that drift sets the heart rate. The funny current is the principal initiator: HCN channels activate on HYPERPOLARIZATION, which is why the current is called funny, and carry a mixed inward sodium and potassium current that begins the drift. Sympathetic stimulation raises cyclic AMP, which binds HCN channels directly and steepens the slope, while acetylcholine lowers cyclic AMP and flattens it. Ivabradine selectively blocks If, so phase 4 depolarization is slowed and the sinus rate falls. Because If is essentially confined to the sinoatrial node, the drug does not touch AV nodal conduction, ventricular repolarization, vascular tone, or contractility, which is exactly the clean profile described and the reason it is useful in patients already maximally beta-blocked."
      },
      {
        "text": "The delayed rectifier potassium current IKr, whose blockade prolongs repolarization and lengthens the QT interval",
        "explanation": "Incorrect. IKr blockade is the mechanism of class III agents such as sotalol and dofetilide; it prolongs the action potential and the QT interval and carries a risk of torsades de pointes. It does not primarily slow the sinus rate, and no QT change was described. This would be the correct answer if the ECG had shown QT prolongation."
      },
      {
        "text": "The fast sodium current, which sets the rapid phase 0 upstroke velocity of the sinoatrial node action potential",
        "explanation": "Incorrect. Nodal cells are relatively depolarized at their maximum diastolic potential, so their fast sodium channels are largely inactivated and contribute little; their phase 0 is generated by the L-type calcium current instead. This is exactly why nodal upstrokes are slow and why nodal conduction velocity is low. This would be the correct answer if the tissue in question were ventricular myocardium or His-Purkinje fibers."
      },
      {
        "text": "The inward rectifier potassium current IK1, which stabilizes the resting membrane potential of the sinoatrial nodal cell",
        "explanation": "Incorrect. The near-absence of IK1 in nodal tissue is precisely why those cells have no stable resting potential and can drift toward threshold. IK1 is abundant in atrial and ventricular myocytes, where it clamps the resting potential near the potassium equilibrium potential. This would be the correct answer if the question asked what maintains the resting potential of a ventricular myocyte."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Phase 4 in the SA node is driven by the FUNNY CURRENT If (HCN channels, inward Na and K, activated by hyperpolarization, modulated directly by cAMP). Sympathetics steepen the slope, acetylcholine flattens it. Ivabradine blocks If and lowers rate alone, with no effect on conduction, contractility, or blood pressure.",
    "lectureSource": "CV23: Cardiac Impulse Conduction and Autonomic Control"
  },
  {
    "id": 9,
    "category": "Pharmacology: Thiazide Diuretics",
    "questionText": "A 66-year-old woman with hypertension and recurrent calcium oxalate kidney stones is switched from a loop diuretic to hydrochlorothiazide. Over the next three months her 24-hour urinary calcium falls substantially and she forms no new stones, but her serum calcium rises slightly to 10.6 mg/dL and her serum sodium falls to 130 mEq/L. Which of the following best explains the effect on calcium handling?",
    "options": [
      {
        "text": "Thiazides block NCC in the distal convoluted tubule, so lower cell sodium enhances basolateral sodium-calcium exchange",
        "explanation": "Correct. Thiazides inhibit the apical sodium-chloride cotransporter NCC in the distal convoluted tubule. With less sodium entering the cell apically, intracellular sodium falls, which steepens the inward sodium gradient across the basolateral membrane and drives the NCX sodium-calcium exchanger to extrude more calcium from cell to blood. That lowers intracellular calcium, which in turn favors continued apical calcium entry through TRPV5, so net transcellular calcium reabsorption increases and urinary calcium falls. Volume contraction adds to the effect by increasing proximal calcium reabsorption alongside sodium. This is why thiazides are first-line for hypercalciuric stone formers and are used in osteoporosis, and also why they can unmask primary hyperparathyroidism, as the mild hypercalcemia here suggests should be evaluated."
      },
      {
        "text": "Thiazides inhibit NKCC2, which abolishes the lumen-positive potential and reduces paracellular calcium loss",
        "explanation": "Incorrect. NKCC2 in the thick ascending limb is the target of LOOP diuretics, and blocking it abolishes the lumen-positive potential and therefore INCREASES calcium and magnesium excretion. Thiazides act downstream in the distal convoluted tubule on NCC. This would be the correct answer if the drug in question were furosemide, whose calciuric effect is exploited in hypercalcemia."
      },
      {
        "text": "Thiazides directly stimulate parathyroid hormone secretion, which increases calcium reabsorption in the distal tubule",
        "explanation": "Incorrect. Thiazides do not stimulate the parathyroid glands, and the mild hypercalcemia they cause would if anything suppress PTH. When a thiazide is associated with a clearly elevated calcium AND an inappropriately non-suppressed PTH, the correct interpretation is unmasked primary hyperparathyroidism rather than a drug effect on the gland. This would be the correct answer if thiazides were parathyroid secretagogues."
      },
      {
        "text": "Thiazides inhibit carbonic anhydrase, which alkalinizes the urine and thereby reduces the supersaturation of calcium oxalate",
        "explanation": "Incorrect. Thiazides do have weak carbonic anhydrase-inhibiting activity historically related to their sulfonamide structure, but that is not the mechanism of their hypocalciuric effect, and urinary alkalinization would not lower urinary calcium. Alkalinizing the urine also promotes calcium PHOSPHATE precipitation. This would be the correct answer if the drug were acetazolamide."
      },
      {
        "text": "Thiazides increase distal sodium delivery, and calcium follows sodium by solvent drag in the collecting duct",
        "explanation": "Incorrect. Thiazides reduce sodium reabsorption at their site of action, so distal sodium delivery rises, but calcium is not reabsorbed by solvent drag in the collecting duct; there is no significant calcium transport there. Distal calcium handling is a regulated transcellular process in the distal convoluted tubule. This would be the correct answer if calcium were reabsorbed passively alongside sodium in the collecting duct."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: THIAZIDES cause calcium RETENTION (block NCC, low intracellular Na, more basolateral Na-Ca exchange), so they treat hypercalciuric stones and help bone density. LOOPS cause calcium WASTING (abolish the lumen-positive potential), so they treat hypercalcemia. Both waste magnesium and potassium.",
    "lectureSource": "CV31: Diuretic Agents Part 2"
  },
  {
    "id": 10,
    "category": "Cardiology: Heart Sounds",
    "questionText": "A 74-year-old man with long-standing hypertension is examined. He has a sustained, non-displaced apical impulse and a low-frequency extra sound heard just before S1 at the apex with the bell, which disappears when he develops atrial fibrillation two months later. His ejection fraction is 62 percent and echocardiography shows concentric left ventricular hypertrophy. Which of the following best explains this extra heart sound?",
    "options": [
      {
        "text": "It is an S3, produced by rapid early diastolic filling into a dilated, volume-overloaded ventricle",
        "explanation": "Incorrect. An S3 occurs in EARLY diastole, immediately after S2, during the rapid filling phase, and it is associated with a dilated, poorly compliant, volume-overloaded ventricle such as in systolic heart failure or severe mitral regurgitation. The sound here is late diastolic, just before S1, and the ventricle is concentrically hypertrophied with a normal ejection fraction. This would be the correct answer if the extra sound followed S2 in a patient with a dilated ventricle."
      },
      {
        "text": "It is an opening snap of the mitral valve, reflecting rheumatic mitral stenosis, heard just after S2",
        "explanation": "Incorrect. An opening snap is a high-frequency EARLY diastolic sound heard shortly after S2, best with the diaphragm, and it is followed by a diastolic rumble; it reflects a stenotic but still pliable mitral valve. Its timing and frequency are both wrong for the sound described. This would be the correct answer if the sound were a sharp high-pitched click after S2 with a diastolic rumble and a loud S1."
      },
      {
        "text": "It is a pericardial knock from constrictive pericarditis, caused by abrupt cessation of ventricular filling",
        "explanation": "Incorrect. A pericardial knock is an early diastolic sound occurring slightly earlier and higher-pitched than an S3, produced when filling halts abruptly against a rigid pericardium, and it is accompanied by elevated venous pressure with a prominent y descent and Kussmaul sign. This patient has hypertensive heart disease rather than pericardial constriction. This would be the correct answer if he had elevated neck veins with a prominent y descent and a rigid calcified pericardium."
      },
      {
        "text": "It is an S4, from atrial contraction against a stiff, hypertrophied ventricle, requiring organized atria",
        "explanation": "Correct. The S4 is a late diastolic, low-frequency sound produced when the atrium contracts and ejects blood into a ventricle whose compliance is reduced, so the atrial kick generates an audible vibration. Every element of the vignette fits: long-standing hypertension produces concentric left ventricular hypertrophy through a pressure-overload stimulus, which raises chamber stiffness while preserving systolic function, giving the sustained apical impulse and the normal ejection fraction. The decisive clue is its disappearance with atrial fibrillation, because an S4 requires effective atrial contraction and therefore cannot exist without organized atrial activity. This is also why these patients tolerate atrial fibrillation poorly: a stiff ventricle depends heavily on the atrial contribution to filling, which can supply 30 to 40 percent of end-diastolic volume rather than the usual 15 to 20 percent."
      },
      {
        "text": "It is a systolic ejection click from a bicuspid aortic valve, heard just after S1 in early systole",
        "explanation": "Incorrect. An ejection click is a SYSTOLIC sound occurring just after S1, high-pitched, and associated with a congenitally abnormal but mobile semilunar valve. The sound described precedes S1 and is low-frequency, placing it in late diastole. This would be the correct answer if a high-pitched sound followed S1 and preceded a systolic ejection murmur."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: S4 is LATE diastolic (atrial kick into a STIFF ventricle: hypertension, aortic stenosis, HCM, ischemia) and is impossible in atrial fibrillation. S3 is EARLY diastolic (rapid filling into a DILATED, volume-overloaded ventricle) and can be normal in youth, athletes, and pregnancy.",
    "lectureSource": "CV28: Cardiac Cycle Part I"
  },
  {
    "id": 11,
    "category": "Cardiac Electrophysiology: Potassium Disorders",
    "questionText": "A 58-year-old man on dialysis misses two sessions. His serum potassium is 7.8 mEq/L. The ECG shows peaked T waves, a PR interval of 260 ms, loss of visible P waves, and a QRS of 150 ms that is beginning to merge with the T wave. The nephrologist explains that a single ionic change accounts for every one of these findings. Which mechanism best explains the widened QRS?",
    "options": [
      {
        "text": "Hyperkalemia increases potassium conductance, which accelerates repolarization and widens the QRS",
        "explanation": "Incorrect. Increased potassium conductance does occur and does accelerate phase 3 repolarization, but that effect shortens the action potential and produces the peaked, narrow-based T waves, not the widened QRS. Repolarization changes appear in the T wave; the QRS reflects depolarization. This would be the correct answer if the question asked why the T waves became peaked."
      },
      {
        "text": "Hyperkalemia depolarizes the resting potential, which inactivates fast sodium channels and slows phase 0",
        "explanation": "Correct. Resting membrane potential in working myocardium is set close to the potassium equilibrium potential, which by the Nernst relationship depends on the ratio of extracellular to intracellular potassium. Raising extracellular potassium makes that ratio less negative, so the cell depolarizes from about minus 90 toward minus 65 mV. Although this initially brings the cell closer to threshold and increases excitability, sustained depolarization drives the inactivation gates of fast sodium channels closed, so fewer channels are available. The result is a slower, smaller phase 0 upstroke, which directly reduces conduction velocity. Slowed conduction lengthens the PR interval, then flattens and finally eliminates the P wave as atrial tissue becomes inexcitable, and it widens the QRS. As the QRS broadens and merges with the T wave the tracing becomes a sine wave, which immediately precedes ventricular fibrillation or asystole. Calcium is given first because it raises the threshold potential and restores the gap without changing the potassium level."
      },
      {
        "text": "Hyperkalemia blocks L-type calcium channels, reducing the plateau and prolonging ventricular depolarization",
        "explanation": "Incorrect. Potassium does not block L-type calcium channels, and the plateau is phase 2, which contributes to the ST segment and QT interval rather than to QRS width. The QRS reflects the speed and synchrony of ventricular depolarization, which is a sodium-current phenomenon in working myocardium. This would be the correct answer if the abnormality were a shortened QT from hypercalcemia."
      },
      {
        "text": "Hyperkalemia uncouples gap junctions, so each ventricular myocyte must be depolarized independently",
        "explanation": "Incorrect. Gap junction uncoupling does slow conduction and occurs with intracellular acidosis and calcium overload during ischemia, so the general principle is sound. However, hyperkalemia acts through the resting membrane potential and sodium channel availability, not by closing connexin channels. This would be the correct answer if the tissue were acutely ischemic with intracellular acidosis."
      },
      {
        "text": "Hyperkalemia stimulates the Na-K-ATPase, hyperpolarizing the cell and delaying its arrival at threshold",
        "explanation": "Incorrect. Extracellular potassium does stimulate the Na-K-ATPase, but the pump moves only three sodium out for two potassium in and contributes just a few millivolts; it cannot overcome the far larger effect of the altered potassium gradient. The net effect of hyperkalemia is DEPOLARIZATION, not hyperpolarization, which is the opposite of what is stated. This would be the correct answer if pump activity dominated the resting potential."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Hyperkalemia raises (depolarizes) the resting potential, which INACTIVATES fast sodium channels and slows conduction. ECG progression is peaked T waves, then PR prolongation, then loss of P waves, then QRS widening, then a sine wave. Give calcium first: it raises threshold immediately without lowering potassium.",
    "lectureSource": "CV22: Cardiac Action Potentials"
  },
  {
    "id": 12,
    "category": "Vascular Physiology: Contraction Cascade",
    "questionText": "A patient in hypertensive emergency is given a drug that raises cyclic AMP in vascular smooth muscle. Her arterial pressure falls without any change in the intracellular calcium concentration measured in an experimental preparation of her vessels. A student asks how relaxation can occur if calcium has not changed. Which step in the smooth muscle contractile cascade best explains this?",
    "options": [
      {
        "text": "Cyclic AMP activates protein kinase A, which phosphorylates and inhibits myosin light chain kinase",
        "explanation": "Correct. Vascular smooth muscle contraction is regulated through phosphorylation of the myosin regulatory light chain rather than through a troponin-tropomyosin system, since smooth muscle has no troponin. Calcium binds calmodulin, and the calcium-calmodulin complex activates myosin light chain kinase, which phosphorylates the light chain and permits actin-myosin cross-bridge cycling. Anything that reduces MLCK activity or increases myosin light chain phosphatase activity therefore causes relaxation even at constant calcium, a phenomenon called calcium desensitization. Cyclic AMP acting through protein kinase A does exactly this: it phosphorylates MLCK at a site that lowers its affinity for calcium-calmodulin. This is the mechanism by which beta-2 agonists, prostacyclin, and PDE inhibitors relax vascular and bronchial smooth muscle. The parallel cyclic GMP pathway, activated by nitric oxide, works largely by activating myosin light chain phosphatase and by lowering calcium."
      },
      {
        "text": "Cyclic AMP displaces calcium from troponin C, removing the tropomyosin block on the actin filament",
        "explanation": "Incorrect. Smooth muscle contains no troponin at all; that regulatory system belongs to striated muscle, where calcium binding to troponin C moves tropomyosin off the myosin binding sites. In smooth muscle regulation is on the MYOSIN side through light chain phosphorylation. This would be the correct answer if the tissue were skeletal or cardiac muscle."
      },
      {
        "text": "Cyclic AMP opens voltage-gated calcium channels, and the calcium influx paradoxically inhibits contraction",
        "explanation": "Incorrect. Opening voltage-gated calcium channels increases calcium entry and promotes contraction, and increased calcium does not inhibit the contractile apparatus. The vignette also specifies that intracellular calcium did not change. This would be the correct answer if calcium entry were inhibitory in smooth muscle."
      },
      {
        "text": "Cyclic AMP causes depolarization, which closes the calcium channels through voltage inactivation",
        "explanation": "Incorrect. Depolarization opens rather than closes L-type calcium channels in smooth muscle and would promote contraction. Vasodilators typically act by HYPERPOLARIZING the membrane, for instance by opening potassium channels, which closes voltage-gated calcium channels. This would be the correct answer if depolarization were relaxing."
      },
      {
        "text": "Cyclic AMP activates the sarcoplasmic reticulum calcium release channel, depleting the stores completely",
        "explanation": "Incorrect. Depleting stores by triggering release would transiently RAISE cytosolic calcium and cause contraction, contradicting both the mechanism and the observation of unchanged calcium. Store depletion also activates store-operated calcium entry, which would sustain rather than relieve contraction. This would be the correct answer if relaxation were achieved by exhausting intracellular calcium stores."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Smooth muscle has NO TROPONIN. Regulation is Ca-calmodulin activating MLCK, which phosphorylates the myosin light chain to allow cross-bridge cycling. cAMP/PKA inhibits MLCK and cGMP/PKG activates myosin light chain phosphatase, so BOTH can relax the vessel at unchanged calcium (calcium desensitization).",
    "lectureSource": "CV25: Vascular Smooth Muscle Cells"
  },
  {
    "id": 13,
    "category": "Cardiology: Conduction Abnormalities",
    "questionText": "A 70-year-old man has an ECG showing a QRS duration of 96 ms, a mean axis of minus 55 degrees, small q waves with tall R waves in leads I and aVL, and small r waves with deep S waves in II, III, and aVF. There are no pathologic Q waves elsewhere and no criteria for left ventricular hypertrophy. Which of the following best explains this pattern?",
    "options": [
      {
        "text": "Complete left bundle branch block, in which delayed left ventricular activation shifts the mean axis leftward",
        "explanation": "Incorrect. Complete left bundle branch block requires a QRS duration of at least 120 ms with broad notched or slurred R waves in I, aVL, V5, and V6 and deep S waves in V1. This patient's QRS is 96 ms, which is normal, so a complete bundle branch block is excluded. This would be the correct answer if the QRS were 150 ms with a broad monophasic R in V6."
      },
      {
        "text": "Inferior myocardial infarction, in which loss of inferior forces shifts the mean QRS axis leftward",
        "explanation": "Incorrect. Inferior infarction is a genuine and important cause of left axis deviation, but it produces pathologic Q waves in II, III, and aVF, whereas this tracing shows small initial r waves in those leads, which argues against infarction. The vignette also states there are no pathologic Q waves. This would be the correct answer if II, III, and aVF showed Q waves of 40 ms or more."
      },
      {
        "text": "Left ventricular hypertrophy, in which the increased leftward muscle mass drags the mean axis leftward",
        "explanation": "Incorrect. Left ventricular hypertrophy can shift the axis leftward and is on the differential for left axis deviation, but the vignette states that voltage criteria for hypertrophy are absent, and hypertrophy would not by itself produce the specific qR pattern in I and aVL with rS in the inferior leads. This would be the correct answer if the Sokolow-Lyon or Cornell voltage criteria were met."
      },
      {
        "text": "Wolff-Parkinson-White pre-excitation through a right-sided accessory pathway that bypasses the AV node",
        "explanation": "Incorrect. Pre-excitation produces a short PR interval with a delta wave slurring the QRS upstroke and a widened QRS; neither a short PR nor a delta wave is described here. Accessory pathway location does influence the axis, but the diagnostic features are absent. This would be the correct answer if the PR interval were 96 ms with a delta wave."
      },
      {
        "text": "Left anterior fascicular block, in which late anterosuperior activation swings the vector up and leftward",
        "explanation": "Correct. The left bundle divides into an anterior fascicle, which is thin and supplied by a single artery, and a thicker, dual-supplied posterior fascicle, which is why anterior fascicular block is far more common. When the anterior fascicle fails, the anterosuperior and lateral left ventricular wall is activated late through spread from the posterior fascicle territory, so initial forces travel inferiorly and rightward, giving small r waves in II, III, and aVF, and the dominant later forces travel superiorly and leftward, giving small q waves with tall R waves in I and aVL. The mean axis is shifted to between minus 45 and minus 90 degrees. Because activation still reaches the ventricle through the intact posterior fascicle and the Purkinje network, total activation time is only slightly prolonged, so the QRS remains under 120 ms, which is the feature that distinguishes fascicular from bundle branch block."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Left ANTERIOR fascicular block gives axis -45 to -90 degrees, qR in I and aVL, rS in II, III, aVF, and a QRS UNDER 120 ms. Fascicular blocks barely widen the QRS; bundle branch blocks widen it past 120 ms. The anterior fascicle is thin with a single blood supply, so it fails far more often.",
    "lectureSource": "CV27: EKG Introduction"
  },
  {
    "id": 14,
    "category": "Cardiology: Contractility",
    "questionText": "A patient in cardiogenic shock is given dobutamine. Serial pressure-volume loops show that the end-systolic pressure-volume points from several loops now fall along a steeper line passing through a similar volume intercept, end-systolic volume has decreased from 118 to 74 mL, and stroke volume has risen from 38 to 66 mL. End-diastolic volume is nearly unchanged. Which of the following statements is most accurate?",
    "options": [
      {
        "text": "Preload has increased, since stroke volume rose",
        "explanation": "Incorrect. Preload is represented by end-diastolic volume, which the vignette states is nearly unchanged. Stroke volume can rise through increased preload, decreased afterload, or increased contractility, so the rise alone does not identify the mechanism; the shape and position of the loop do. This would be the correct answer if the right-hand border of the loop had shifted rightward."
      },
      {
        "text": "Afterload has fallen, which is shown by the steeper end-systolic pressure-volume relationship",
        "explanation": "Incorrect. A fall in afterload allows the ventricle to eject further along the SAME end-systolic pressure-volume relationship, moving the end-systolic point down and to the left without changing the slope. A change in the slope itself is not an afterload phenomenon. This would be the correct answer if the end-systolic point had moved along an unchanged line after a vasodilator."
      },
      {
        "text": "Contractility has increased, since the slope of the end-systolic pressure-volume relationship has risen",
        "explanation": "Correct. The end-systolic pressure-volume relationship is constructed from the upper-left corners of multiple loops recorded at different loading conditions, and its slope, called end-systolic elastance, is the best available load-independent index of contractility. A positive inotrope such as dobutamine, acting through beta-1 receptors to raise cyclic AMP, protein kinase A activity, L-type calcium channel phosphorylation, and phospholamban phosphorylation, increases the calcium available to the myofilaments and steepens that slope. The ventricle can therefore generate the same pressure at a smaller volume, so end-systolic volume falls, the loop widens, and stroke volume and ejection fraction rise even without a change in filling. The cost is increased myocardial oxygen consumption, which is why inotropes improve hemodynamics but may worsen outcomes if used indiscriminately."
      },
      {
        "text": "The end-diastolic pressure-volume relationship has shifted downward, indicating improved compliance",
        "explanation": "Incorrect. The end-diastolic pressure-volume relationship describes passive filling properties and is the lower border of the loop; the changes described all involve the end-systolic relationship. Although positive inotropes can modestly improve relaxation through phospholamban phosphorylation and faster calcium reuptake, that is not what these data demonstrate. This would be the correct answer if the lower border of the loop had shifted downward at unchanged systolic properties."
      },
      {
        "text": "Heart rate must have increased, since cardiac output cannot rise without it",
        "explanation": "Incorrect. Cardiac output is the product of heart rate and stroke volume, so an increase in stroke volume alone raises output. The vignette gives no heart rate change, and pressure-volume loops do not display rate. This would be the correct answer if stroke volume were fixed."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The SLOPE of the ESPVR (end-systolic elastance) is the load-independent measure of CONTRACTILITY. Inotropes steepen it, so end-systolic volume falls and stroke volume rises at unchanged filling. Ejection fraction, by contrast, is load-dependent and a poorer index of true inotropic state.",
    "lectureSource": "CV29: Cardiac Cycle Part II"
  },
  {
    "id": 15,
    "category": "Renal Pharmacology: Carbonic Anhydrase Inhibitors",
    "questionText": "A 34-year-old man plans a rapid ascent to 4500 meters and is prescribed acetazolamide starting the day before. He asks how a diuretic prevents altitude sickness. Which of the following best explains the therapeutic rationale?",
    "options": [
      {
        "text": "It blocks NKCC2 in the thick ascending limb, producing a brisk diuresis that reduces cerebral edema",
        "explanation": "Incorrect. That is the mechanism of loop diuretics, not of acetazolamide, and the benefit at altitude does not come from volume removal. Aggressive diuresis at altitude would in fact be counterproductive given the dehydration that accompanies high ventilation in cold dry air. This would be the correct answer if the drug prescribed were furosemide."
      },
      {
        "text": "It increases hemoglobin oxygen affinity, improving arterial saturation at low inspired oxygen tension",
        "explanation": "Incorrect. The drug does not shift the oxyhemoglobin dissociation curve leftward as a primary action, and a leftward shift would impair rather than assist oxygen unloading at the tissues. The acclimatization benefit comes from acid-base manipulation that permits greater ventilation. This would be the correct answer if the therapeutic goal were increased hemoglobin affinity, as occurs physiologically in fetal hemoglobin."
      },
      {
        "text": "It stimulates erythropoietin release from the kidney, speeding the rise in red cell mass and oxygen carriage",
        "explanation": "Incorrect. Erythropoietin rises naturally within hours of ascent as a consequence of hypoxia, but the resulting increase in red cell mass takes one to several weeks and cannot account for a benefit seen within a day or two. Acetazolamide is not an erythropoietin secretagogue. This would be the correct answer if the question concerned adaptations over several weeks of altitude residence."
      },
      {
        "text": "It inhibits carbonic anhydrase in the proximal tubule, wasting bicarbonate and permitting hyperventilation",
        "explanation": "Correct. On ascent, hypoxia drives the peripheral chemoreceptors and produces hyperventilation, but the resulting respiratory alkalosis acts on the central chemoreceptors to restrain further ventilation, which limits how much the body can compensate in the first days. Normal acclimatization removes that brake by renal bicarbonate excretion over two to three days. Acetazolamide accomplishes the same thing pharmacologically: by inhibiting carbonic anhydrase in the proximal tubule it blocks the reclamation of filtered bicarbonate, producing a bicarbonaturia and a self-limited hyperchloremic metabolic acidosis. Ventilation can then increase further, raising PaO2 and reducing symptoms. The characteristic paresthesias reflect the acidosis, and the drug's diuretic effect is weak and self-limited because downstream segments reabsorb the delivered sodium and because the acidosis itself removes the substrate for the drug's action."
      },
      {
        "text": "It opens ATP-sensitive potassium channels in the pulmonary vasculature, preventing hypoxic vasoconstriction",
        "explanation": "Incorrect. Blunting hypoxic pulmonary vasoconstriction is a genuine strategy for high-altitude pulmonary edema, accomplished with nifedipine, tadalafil, or dexamethasone, but that is a different mechanism and a different indication from acetazolamide's role in preventing acute mountain sickness. This would be the correct answer if the prophylaxis described were nifedipine for HAPE."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Acetazolamide inhibits carbonic anhydrase, blocking proximal bicarbonate reabsorption. The induced metabolic acidosis lifts the alkalotic brake on ventilation and speeds acclimatization. It is a WEAK diuretic (downstream segments compensate and it self-limits), and it causes hyperchloremic acidosis, paresthesias, and hypokalemia.",
    "lectureSource": "CV30: Diuretic Agents Part 1"
  },
  {
    "id": 16,
    "category": "Cardiac Physiology: Atrioventricular Node",
    "questionText": "A 76-year-old woman in atrial fibrillation has an atrial rate of roughly 450/min but a ventricular response of only 96/min. Her cardiologist explains that a specific structure is protecting her ventricles from being driven at the atrial rate. Which property of that structure is most responsible for this protection?",
    "options": [
      {
        "text": "The fibrous cardiac skeleton conducts slowly, which filters rapid atrial impulses before they reach the ventricle",
        "explanation": "Incorrect. The fibrous cardiac skeleton does not conduct at all; it is a non-conducting collagenous framework that electrically insulates the atria from the ventricles completely. That insulation is what makes the AV node the sole normal pathway, but the rate filtering itself is a property of the node, not the skeleton. This would be the correct answer if the skeleton conducted slowly rather than not at all."
      },
      {
        "text": "The bundle of His has a refractory period long enough to block alternate impulses before they reach the ventricles",
        "explanation": "Incorrect. The His bundle and Purkinje system conduct very rapidly and have relatively short refractory periods; their role is fast, synchronized delivery of the impulse to the ventricular myocardium. Rate-limiting protection resides upstream at the node. This would be the correct answer if the His-Purkinje system were the slow-conducting element."
      },
      {
        "text": "The sinoatrial node overdrive-suppresses the fibrillatory atrial waves, limiting how many of them reach the ventricles",
        "explanation": "Incorrect. Overdrive suppression describes how a faster pacemaker suppresses slower subsidiary pacemakers, and in atrial fibrillation the sinoatrial node is itself overwhelmed and suppressed rather than exerting control. It has no gatekeeping role over conduction to the ventricles. This would be the correct answer if the sinus node lay between the atria and ventricles."
      },
      {
        "text": "The AV node conducts slowly by L-type calcium current and shows decremental conduction with a long refractory period",
        "explanation": "Correct. The atrioventricular node is composed of small, poorly coupled cells that are relatively depolarized at rest, so their fast sodium channels are largely inactivated and phase 0 is generated by the slow inward L-type calcium current. This gives a conduction velocity of only about 0.05 m/s, the slowest in the heart, producing the normal 100 ms delay reflected in the PR interval that allows atrial contraction to complete ventricular filling before systole. The node also exhibits decremental conduction: the faster impulses arrive, the more each is delayed, and beyond a certain rate impulses fail to conduct entirely. Combined with a refractory period that is long relative to its action potential and that lengthens further at high rates, this makes the node a natural rate-limiting filter. This is also why the therapeutic targets for rate control in atrial fibrillation are precisely the determinants of nodal conduction: beta blockers, non-dihydropyridine calcium channel blockers, and digoxin through vagal enhancement."
      },
      {
        "text": "The AV node depolarizes by fast sodium current but is protected by dense gap junctions that dissipate the impulse",
        "explanation": "Incorrect. Both halves of this statement are wrong. Nodal phase 0 is calcium-dependent rather than sodium-dependent, and nodal cells have FEW gap junctions, which raises intercellular resistance and is one reason conduction is slow. Abundant gap junctions, as in Purkinje fibers, speed conduction rather than dissipating it. This would be the correct answer if gap junction density and conduction velocity were inversely related."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: The AV node is slow (about 0.05 m/s) because phase 0 is L-type CALCIUM current in small, poorly coupled cells. Its decremental conduction and long refractory period make it the rate-limiting gate in atrial fibrillation and flutter, which is why beta blockers, verapamil/diltiazem, and digoxin control rate.",
    "lectureSource": "CV23: Cardiac Impulse Conduction and Autonomic Control"
  },
  {
    "id": 17,
    "category": "Hematology: von Willebrand Factor",
    "questionText": "A 19-year-old woman reports heavy menstrual bleeding since menarche, frequent epistaxis, and prolonged bleeding after dental extraction. Platelet count is normal, PT is normal, and aPTT is mildly prolonged at 38 seconds. Factor VIII activity is 38 percent and ristocetin cofactor activity is markedly reduced. Which statement best explains the role of the deficient protein and the origin of the mildly prolonged aPTT?",
    "options": [
      {
        "text": "The protein is synthesized by hepatocytes and directly activates factor X, so its deficiency prolongs the prothrombin time, not the aPTT",
        "explanation": "Incorrect. Direct activation of factor X in the common pathway would prolong the PT as well as the aPTT, and this patient's PT is normal. The protein in question is also of endothelial and megakaryocyte origin rather than hepatic. This would be the correct answer if the deficiency were of factor VII or X."
      },
      {
        "text": "The protein is stored in Weibel-Palade bodies, binds platelets to collagen via GPIb, and chaperones factor VIII, explaining the long aPTT",
        "explanation": "Correct. Von Willebrand factor is synthesized by endothelial cells, where it is stored in Weibel-Palade bodies along with P-selectin, and by megakaryocytes, where it resides in platelet alpha granules. It performs two distinct jobs. First, when subendothelial collagen is exposed, vWF binds it and unfolds under high shear to expose sites for platelet glycoprotein Ib, which is what allows platelets to adhere at the high shear rates found in small arterioles and in the mucosal circulation. This is why deficiency produces a mucocutaneous bleeding pattern of epistaxis, menorrhagia, and bleeding after dental work. Second, vWF is the plasma carrier for factor VIII, protecting it from proteolytic clearance; without adequate vWF, factor VIII falls, which mildly prolongs the intrinsic-pathway-dependent aPTT while leaving the PT normal. The reduced ristocetin cofactor activity is the functional assay of the platelet-binding role. Desmopressin treats the common type 1 disease by releasing stored vWF from Weibel-Palade bodies."
      },
      {
        "text": "The protein is a platelet surface receptor whose absence prevents platelet-to-platelet aggregation through fibrinogen cross-linking",
        "explanation": "Incorrect. This describes Glanzmann thrombasthenia, a defect of the platelet GPIIb/IIIa receptor that binds fibrinogen and mediates AGGREGATION. The protein in this vignette is a soluble plasma and subendothelial adhesive protein, and the abnormality is of ADHESION rather than aggregation. This would be the correct answer if platelet aggregation to ADP and collagen were absent with normal ristocetin agglutination."
      },
      {
        "text": "The protein is a platelet receptor for collagen whose absence prevents adhesion, and the prolonged aPTT reflects contact factor consumption",
        "explanation": "Incorrect. This describes Bernard-Soulier syndrome, a deficiency of the platelet receptor GPIb itself, which produces a similar failure of adhesion but is accompanied by giant platelets and thrombocytopenia, and it does not affect factor VIII or the aPTT. Contact factor consumption is also not a mechanism of aPTT prolongation here. This would be the correct answer if the platelet count were low with large platelets on smear."
      },
      {
        "text": "The protein cleaves unusually large multimers, and its deficiency causes microvascular platelet thrombi with thrombocytopenia and hemolysis",
        "explanation": "Incorrect. This describes ADAMTS13, the metalloprotease that cleaves ultra-large von Willebrand factor multimers, whose deficiency causes thrombotic thrombocytopenic purpura with microangiopathic hemolysis, thrombocytopenia, and end-organ ischemia. That is the opposite clinical problem, excessive rather than deficient platelet adhesion. This would be the correct answer if the patient had schistocytes, a low platelet count, and neurologic symptoms."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: vWF is made by endothelium (Weibel-Palade bodies) and megakaryocytes and does two jobs: platelet ADHESION to collagen via GPIb under high shear, and carrying FACTOR VIII. Hence mucocutaneous bleeding plus a mildly long aPTT with a normal PT. DDAVP releases stored vWF from Weibel-Palade bodies.",
    "lectureSource": "CV24: Vascular Endothelial Cells"
  },
  {
    "id": 18,
    "category": "Cardiology: ECG Intervals",
    "questionText": "A 42-year-old woman being treated for depression and a recent infection is found unresponsive with a polymorphic ventricular tachycardia that twists about the baseline. Her ECG immediately before the event showed a heart rate of 54/min with a QT interval of 560 ms. Her potassium was 3.0 mEq/L and her magnesium was 1.4 mg/dL. Which of the following best explains the electrophysiologic basis of this arrhythmia?",
    "options": [
      {
        "text": "Shortening of phase 2 reduces the effective refractory period, allowing rapid reentry around a fixed anatomic obstacle",
        "explanation": "Incorrect. This describes the substrate for typical monomorphic reentrant tachycardia around scar and is the opposite of the repolarization abnormality present here. The hallmark of this patient is a PROLONGED QT, meaning lengthened rather than shortened repolarization. This would be the correct answer if the patient had scar-related monomorphic ventricular tachycardia after an old infarct."
      },
      {
        "text": "Accelerated phase 4 depolarization in Purkinje fibers produces enhanced automaticity that is independent of repolarization abnormalities",
        "explanation": "Incorrect. Enhanced automaticity does cause arrhythmias, particularly with catecholamine excess or digoxin toxicity, but it produces a monomorphic focal tachycardia and bears no specific relationship to QT prolongation or to the twisting morphology described. This would be the correct answer if the rhythm were an accelerated idioventricular rhythm after reperfusion."
      },
      {
        "text": "Delayed rectifier potassium current blockade prolongs phase 3, allowing early afterdepolarizations from L-type calcium reactivation",
        "explanation": "Correct. Repolarization in phases 2 and 3 depends chiefly on the rapid and slow delayed rectifier potassium currents, IKr and IKs. Many drugs block IKr, including numerous antipsychotics and antidepressants, macrolide and fluoroquinolone antibiotics, antifungals, methadone, and class IA and III antiarrhythmics, and hypokalemia and hypomagnesemia amplify the effect. Prolonged repolarization keeps the membrane in the voltage range in which L-type calcium channels can recover from inactivation and reopen, generating an early afterdepolarization during phase 2 or 3. If that depolarization reaches threshold it triggers a premature beat, and because repolarization is also spatially heterogeneous across the ventricular wall, functional reentry can be established, producing the twisting axis of torsades de pointes. Bradycardia worsens matters because the QT lengthens further at slow rates, which is the pause-dependent pattern seen here. Magnesium is the treatment of choice because it suppresses early afterdepolarizations even when the serum level is normal."
      },
      {
        "text": "Loss of the plateau phase abolishes the effective refractory period, allowing tetanic contraction of the ventricular myocardium",
        "explanation": "Incorrect. Cardiac muscle cannot be tetanized precisely because the long plateau keeps the cell refractory through most of the contraction, but that protection is not what fails here, and tetany is not the mechanism of torsades. The plateau in this patient is prolonged, not abolished. This would be the correct answer if the physiologic question were why cardiac muscle cannot summate contractions."
      },
      {
        "text": "Increased gap junction conductance synchronizes ventricular depolarization excessively, producing a polymorphic pattern",
        "explanation": "Incorrect. Excessive coupling would produce more uniform, not more chaotic, activation, and gap junction conductance is not altered by the drugs or electrolyte abnormalities described. Arrhythmogenesis more often follows from UNCOUPLING and heterogeneity. This would be the correct answer if increased coupling were arrhythmogenic."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Long QT means IKr blockade, prolonged phase 3, and EARLY AFTERDEPOLARIZATIONS from reactivated L-type calcium channels, giving torsades. Risk multiplies with hypokalemia, hypomagnesemia, bradycardia, and QT-prolonging drugs. Treat with IV magnesium regardless of the serum level, plus correction of potassium and rate.",
    "lectureSource": "CV26: Basic ECG - Leads, Vectors and Intervals"
  },
  {
    "id": 19,
    "category": "Pharmacology: Mineralocorticoid Receptor Antagonists",
    "questionText": "A 58-year-old man with heart failure with reduced ejection fraction on lisinopril, carvedilol, and furosemide is started on spironolactone. Six months later he reports painful gynecomastia. His potassium is 5.4 mEq/L and his creatinine has risen from 1.3 to 1.6 mg/dL. His physician switches him to eplerenone. Which of the following best explains both the benefit of this drug class in heart failure and the adverse effect that prompted the switch?",
    "options": [
      {
        "text": "The class works by blocking ENaC directly in principal cells, and the gynecomastia results from that same channel blockade in breast tissue",
        "explanation": "Incorrect. Direct ENaC blockade is the mechanism of amiloride and triamterene, which are potassium-sparing but not mineralocorticoid receptor antagonists and do not cause gynecomastia. ENaC is also not expressed in a way that would produce breast effects. This would be the correct answer if the drug prescribed were amiloride."
      },
      {
        "text": "The class inhibits aldosterone synthase in the adrenal cortex, and the resulting cortisol excess acts on breast tissue to cause gynecomastia",
        "explanation": "Incorrect. Spironolactone and eplerenone are receptor ANTAGONISTS acting at the target tissue, not synthesis inhibitors; aldosterone synthase inhibition is a separate investigational strategy. Cortisol excess also causes features of Cushing syndrome rather than isolated gynecomastia. This would be the correct answer if the drug were an aldosterone synthase inhibitor."
      },
      {
        "text": "The class blocks angiotensin II at the AT1 receptor, and its additive effect with an ACE inhibitor explains the hyperkalemia and the endocrine effects",
        "explanation": "Incorrect. AT1 blockade is the mechanism of the ARBs such as losartan and valsartan, which do cause hyperkalemia in combination with ACE inhibitors but do not cause gynecomastia and do not act at the mineralocorticoid receptor. This would be the correct answer if the drug added were valsartan."
      },
      {
        "text": "The class is a potent loop-acting natriuretic, and the gynecomastia reflects the profound volume depletion and neurohormonal activation it causes",
        "explanation": "Incorrect. Mineralocorticoid receptor antagonists are comparatively WEAK diuretics, because the collecting duct handles only about 2 to 3 percent of filtered sodium, and their benefit in heart failure is largely independent of natriuresis. Volume depletion also does not cause gynecomastia. This would be the correct answer if the drug acted at the thick ascending limb."
      },
      {
        "text": "The class blocks the mineralocorticoid receptor, reducing sodium retention and myocardial fibrosis; only spironolactone blocks androgen receptors",
        "explanation": "Correct. Aldosterone acts on the cytoplasmic mineralocorticoid receptor in principal cells, increasing ENaC, ROMK, and Na-K-ATPase expression, so blockade produces a modest natriuresis with potassium and magnesium retention. The mortality benefit in heart failure, however, comes largely from effects outside the kidney: aldosterone promotes myocardial and vascular fibrosis, endothelial dysfunction, and baroreflex impairment, and blocking it attenuates adverse remodeling. Spironolactone is a non-selective steroid analogue that also antagonizes androgen receptors and binds progesterone receptors, which produces gynecomastia, breast tenderness, impotence, and menstrual irregularity in a dose-dependent way. Eplerenone is far more selective for the mineralocorticoid receptor and largely avoids these effects, though it shares the hyperkalemia risk, which is amplified here by concurrent ACE inhibition and a falling GFR and mandates close monitoring of potassium and creatinine."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: MRAs are weak diuretics but reduce mortality in HFrEF by blocking aldosterone-driven myocardial FIBROSIS and remodeling. Spironolactone is non-selective and hits androgen and progesterone receptors, giving gynecomastia; eplerenone is selective. Both risk hyperkalemia, especially with ACE inhibitors, ARBs, or CKD.",
    "lectureSource": "CV31: Diuretic Agents Part 2"
  },
  {
    "id": 20,
    "category": "OMM: Cranial Strain Pattern Palpation",
    "questionText": "A 38-year-old woman has had persistent right-sided headaches, right jaw discomfort, and a sense of fullness in the right ear since a motor vehicle collision in which she struck the right side of her head. On vault hold the physician finds that the cranial rhythmic impulse has a reduced amplitude, that both greater wings feel restricted in their excursion, and that the sphenoid and occiput appear compressed toward each other with almost no torsional or sidebending preference. Which of the following is the most likely strain pattern, and what is its clinical significance?",
    "options": [
      {
        "text": "Sphenobasilar compression, a non-physiologic pattern usually traumatic in origin and typically the most symptomatic of the strain patterns",
        "explanation": "Correct. Compression at the sphenobasilar synchondrosis is recognized by a markedly reduced amplitude of the cranial rhythmic impulse with the sphenoid and occiput approximated along the anteroposterior axis and little or no directional preference, so the head feels stuck rather than preferring one pattern. It is classed as non-physiologic because it carries the synchondrosis beyond its normal articular relationship, and it almost always follows trauma, whether a direct blow as in this case, a fall onto the sacrum transmitted through the core link, or birth trauma. It is widely regarded as the most symptomatic pattern, associated with headache, depression, fatigue, and a general sense of being unwell, and it is the pattern for which the CV4 and other decompressive techniques are most often used. Because it followed head trauma here, intracranial injury must be excluded before any cranial treatment is undertaken."
      },
      {
        "text": "Right torsion, a physiologic pattern within the normal articular range and commonly found in asymptomatic people",
        "explanation": "Incorrect. Torsion is identified by the sphenoid and occiput rotating in OPPOSITE directions about an anteroposterior axis, giving one superior and one inferior greater wing, and it is named for the side of the high wing. The vignette describes symmetrically restricted wings without a torsional preference. This would be the correct answer if the right greater wing were riding superiorly with the left inferior."
      },
      {
        "text": "Left sidebending rotation, a physiologic pattern producing a convexity on the left with an inferior left greater wing",
        "explanation": "Incorrect. Sidebending rotation combines rotation of the sphenoid and occiput in opposite directions about two vertical axes with rotation in the same direction about an anteroposterior axis, producing a palpable convexity and fullness on one side. No such asymmetry is described here. This would be the correct answer if the physician had found a fullness on one side of the head with an inferior greater wing on that side."
      },
      {
        "text": "Vertical strain, a non-physiologic pattern in which the basisphenoid rides superiorly or inferiorly relative to the basiocciput",
        "explanation": "Incorrect. Vertical strain is indeed non-physiologic and usually traumatic, which fits the history, but it is characterized by a superior or inferior SHIFT of one bone relative to the other about two transverse axes, so the two greater wings move together superiorly or inferiorly rather than being symmetrically restricted. This would be the correct answer if both greater wings were displaced superiorly relative to the occiput."
      },
      {
        "text": "Lateral strain, a non-physiologic pattern giving the head a parallelogram shape",
        "explanation": "Incorrect. Lateral strain involves the sphenoid and occiput translating in the SAME direction about two vertical axes, so the basisphenoid and basiocciput shift side to side relative to each other and the head takes on a parallelogram configuration, often following a lateral blow. The vignette describes approximation along the anteroposterior axis without lateral displacement. This would be the correct answer if the head had a palpable parallelogram asymmetry."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: SBS COMPRESSION means markedly reduced amplitude with no directional preference; the head feels stuck. It is non-physiologic, nearly always traumatic, and the most symptomatic pattern (headache, depression, fatigue). Exclude intracranial injury after head trauma before any cranial treatment.",
    "lectureSource": "CV21: Cranial Strain Patterns, Condylar Decompression and Lifts"
  },
  {
    "id": 21,
    "category": "Cardiology: Venous Waveforms",
    "questionText": "A 68-year-old man is examined at the bedside. His jugular venous pulsations show a normal a wave and x descent, but the c wave is followed by a large positive wave that replaces the x descent entirely and coincides with the carotid upstroke. He also has a holosystolic murmur at the left lower sternal border that increases with inspiration, and a pulsatile liver. Which of the following best explains the abnormal venous waveform?",
    "options": [
      {
        "text": "Loss of the a wave from atrial fibrillation, in which disorganized electrical activity replaces the normal presystolic atrial contraction",
        "explanation": "Incorrect. Absence of the a wave is indeed the venous signature of atrial fibrillation, and it is a useful bedside finding, but the vignette explicitly states that the a wave is normal, which establishes that organized atrial contraction is present. The abnormality described is an added systolic wave. This would be the correct answer if the a wave were absent and the rhythm irregularly irregular."
      },
      {
        "text": "A cannon a wave from atrioventricular dissociation, in which the right atrium intermittently contracts against a closed tricuspid valve",
        "explanation": "Incorrect. Cannon a waves are intermittent, occur when atrial systole happens to fall while the tricuspid valve is closed, and are seen in complete heart block, ventricular tachycardia, and junctional rhythms. They are irregular in occurrence and time with atrial rather than ventricular systole. The wave here is consistent, holosystolic, and coincides with the carotid upstroke. This would be the correct answer if intermittent giant a waves occurred in a patient with a wide-complex tachycardia."
      },
      {
        "text": "An exaggerated y descent from constrictive pericarditis, reflecting the rapid early diastolic filling of a constrained right ventricle",
        "explanation": "Incorrect. A steep y descent is a diastolic event that follows the v wave and reflects rapid ventricular filling once the tricuspid valve opens, as in constriction or restriction. The abnormality described occurs during systole and replaces the x descent. This would be the correct answer if the finding were a prominent y descent with Kussmaul sign and a pericardial knock."
      },
      {
        "text": "An augmented v wave from tricuspid stenosis, in which the narrowed valve obstructs right atrial emptying throughout ventricular diastole",
        "explanation": "Incorrect. Tricuspid stenosis produces a prominent A WAVE from forceful atrial contraction against the obstruction and a slow, blunted y descent because atrial emptying is impeded. It does not obliterate the x descent with a systolic wave. This would be the correct answer if the physical findings were a giant a wave with an attenuated y descent and a diastolic rumble."
      },
      {
        "text": "A giant cv wave from tricuspid regurgitation, in which right ventricular systole ejects blood into the atrium, abolishing the x descent",
        "explanation": "Correct. The normal jugular waveform has three positive waves and two descents: the a wave from atrial contraction, the c wave from tricuspid valve bulging at the onset of ventricular systole, the x descent as the atrium relaxes and the valve plane descends, the v wave from atrial filling against a closed valve during late systole, and the y descent as the valve opens. In tricuspid regurgitation, right ventricular systole drives blood backward into the right atrium, so atrial pressure rises rather than falls during systole and the x descent is obliterated, producing a single large systolic wave often called a cv wave. Every other finding fits: a holosystolic murmur at the left lower sternal border that increases with inspiration is the Carvallo sign of a right-sided lesion, since inspiration augments venous return, and the pulsatile liver reflects transmission of the regurgitant systolic wave into the hepatic veins."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: JVP waves are a (atrial contraction), c (tricuspid bulge), x descent (atrial relaxation), v (atrial filling), y descent (valve opens). Tricuspid regurgitation abolishes the x descent, giving a giant systolic cv wave, a Carvallo-positive holosystolic murmur, and a pulsatile liver. Absent a wave means atrial fibrillation; cannon a waves mean AV dissociation.",
    "lectureSource": "CV28: Cardiac Cycle Part I"
  },
  {
    "id": 22,
    "category": "Cardiac Electrophysiology: Refractory Periods",
    "questionText": "During an electrophysiology study, a premature stimulus delivered 210 ms after the last ventricular beat produces no response at all. Delivered at 290 ms it produces a small, slowly rising, poorly propagated response. Delivered at 400 ms it produces a normal, rapidly rising, well-propagated response. Which statement best explains this progression, and why does it matter clinically?",
    "options": [
      {
        "text": "At 210 ms the tissue is in the supernormal period, where a subthreshold stimulus fails because the membrane is hyperpolarized",
        "explanation": "Incorrect. The supernormal period is a brief interval near the end of phase 3 during which a stimulus that would normally be subthreshold CAN elicit a response, because the membrane potential is close to threshold while sodium channels have largely recovered. It is a period of increased, not absent, excitability, and it occurs late rather than earliest. This would be the correct answer if a weaker-than-usual stimulus had unexpectedly succeeded."
      },
      {
        "text": "At 400 ms the tissue is still relatively refractory, which is why the response is normal but delayed",
        "explanation": "Incorrect. The vignette describes the 400 ms response as normal in both upstroke and propagation, which by definition means full recovery of excitability rather than relative refractoriness. Relative refractoriness is what produces the intermediate 290 ms response. This would be the correct answer if the 400 ms response had shown a slowed upstroke."
      },
      {
        "text": "The differences reflect changes in gap junction conductance rather than in ion channel availability",
        "explanation": "Incorrect. Gap junction conductance does affect propagation and is reduced by acidosis and calcium overload, but it does not vary on a beat-to-beat timescale in the way described. Refractoriness is determined by the recovery kinetics of the fast sodium channel from inactivation. This would be the correct answer if the experiment had manipulated intracellular pH or connexin function."
      },
      {
        "text": "The tissue is exhibiting decremental conduction typical of the atrioventricular node, which is why the intermediate response is small",
        "explanation": "Incorrect. Decremental conduction, in which conduction becomes progressively slower as stimulation rate increases, is characteristic of calcium-dependent nodal tissue. The vignette describes ventricular myocardium, whose behavior is governed by fast sodium channel recovery. This would be the correct answer if the stimulation and recording were performed in the AV node."
      },
      {
        "text": "Sodium channels are fully inactivated at 210 ms and partly recovered at 290 ms, and the interval between is the vulnerable window for reentry",
        "explanation": "Correct. Refractoriness is governed by the fraction of fast sodium channels that have recovered from inactivation, which requires repolarization below roughly minus 60 mV and takes time. During the absolute refractory period, spanning phase 0 through most of phase 3, essentially all channels are inactivated and no stimulus of any strength can produce a propagated response, which is what protects cardiac muscle from tetany and allows filling. During the relative refractory period, partial recovery permits a response, but with fewer available channels the upstroke is small and slow, so conduction velocity is low and propagation may fail. Near the peak of the T wave lies the vulnerable window, in which recovery is markedly heterogeneous across the myocardium; a premature beat arriving then may conduct in some regions and block in others, establishing unidirectional block and reentry. This is the R-on-T phenomenon, the reason cardioversion must be synchronized to the R wave, and the electrophysiologic basis for arrhythmia induction in states of heterogeneous repolarization such as long QT or acute ischemia."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Refractoriness tracks recovery of fast sodium channels from INACTIVATION. Absolute refractory period means no response at any stimulus strength and prevents tetany. Relative refractory period means a slow, weakly propagated response. The VULNERABLE WINDOW near the T-wave peak is where R-on-T triggers reentry, which is why cardioversion is R-wave synchronized.",
    "lectureSource": "CV22: Cardiac Action Potentials"
  },
  {
    "id": 23,
    "category": "Vascular Pathophysiology: Phenotypic Switching",
    "questionText": "A 61-year-old man undergoes bare-metal stenting of a coronary lesion. Eight months later he returns with recurrent angina, and angiography shows a smooth, concentric narrowing within the stent rather than a new eccentric plaque. Histology of comparable lesions shows abundant cells expressing high levels of collagen and matrix proteins with reduced smooth muscle alpha-actin and myosin heavy chain. Which process best explains this lesion?",
    "options": [
      {
        "text": "Endothelial cells lining the stent struts have undergone hypertrophy and gradually encroached on the lumen in the months since implantation",
        "explanation": "Incorrect. Endothelium is a single-cell-thick monolayer that does not hypertrophy sufficiently to narrow a lumen; in fact re-endothelialization of a stent is protective and reduces both restenosis and thrombosis. The cells described express smooth muscle markers, albeit at reduced levels. This would be the correct answer if the lesion were composed of an endothelial monolayer."
      },
      {
        "text": "Vascular smooth muscle cells have switched from a contractile to a synthetic phenotype, migrating into the intima and depositing matrix",
        "explanation": "Correct. Vascular smooth muscle cells are unusual among differentiated cells in retaining substantial plasticity throughout life. In their normal contractile phenotype they are elongated, express high levels of smooth muscle alpha-actin, myosin heavy chain, and calponin, and proliferate very little. In response to injury, mechanical stretch, inflammatory cytokines, and growth factors such as PDGF released after stent deployment, they switch to a synthetic phenotype: contractile protein expression falls, and the cells become proliferative, migratory, and highly productive of collagen, elastin, and proteoglycans. Migration into the intima with matrix deposition produces neointimal hyperplasia, which is the smooth, concentric in-stent restenosis described here, and it is pathologically distinct from a new atherosclerotic plaque. This is precisely why drug-eluting stents deliver antiproliferative agents such as sirolimus or paclitaxel: they inhibit the proliferative arm of the switch. The same process contributes to atherosclerotic fibrous cap formation, where it is protective, and to vascular remodeling in hypertension and pulmonary hypertension."
      },
      {
        "text": "Organized mural thrombus has been incorporated into the vessel wall at the stent site without any contribution from resident cells",
        "explanation": "Incorrect. Thrombus organization does contribute to some in-stent lesions and to acute stent thrombosis, but the histology described is cellular with abundant newly synthesized matrix and residual smooth muscle markers, which indicates active cellular proliferation rather than passive organization of clot. The timing at eight months also favors neointimal hyperplasia over thrombosis, which typically occurs early. This would be the correct answer if the lesion were an acute occlusive clot within days of stenting."
      },
      {
        "text": "Lipid-laden macrophages have accumulated beneath an intact endothelium within the stented segment, forming a new fatty streak lesion",
        "explanation": "Incorrect. That describes early atherogenesis, which produces an eccentric, lipid-rich lesion with foam cells and a necrotic core. The vignette specifies a smooth concentric narrowing with matrix-producing cells expressing smooth muscle markers, and gives no mention of lipid or macrophages. This would be the correct answer if histology showed foam cells and a lipid core."
      },
      {
        "text": "Adventitial fibroblasts have contracted around the stented segment, producing negative remodeling and constrictive narrowing of the lumen",
        "explanation": "Incorrect. Adventitial fibroblast-driven constrictive remodeling is a genuine mechanism of restenosis after balloon angioplasty alone, but a rigid metal stent scaffolds the vessel and largely prevents that mode of recoil, which is precisely why stents were developed. Restenosis inside a stent is therefore dominated by neointimal hyperplasia. This would be the correct answer if the patient had undergone balloon angioplasty without stent placement."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Vascular smooth muscle cells switch between a CONTRACTILE phenotype (alpha-actin and myosin high, quiescent) and a SYNTHETIC phenotype (proliferative, migratory, matrix-producing). Synthetic switching drives in-stent neointimal hyperplasia, fibrous cap formation, and hypertensive remodeling; drug-eluting stents target it directly.",
    "lectureSource": "CV25: Vascular Smooth Muscle Cells"
  },
  {
    "id": 24,
    "category": "Renal Pharmacology: Diuretic Resistance",
    "questionText": "A 79-year-old woman with heart failure and a serum albumin of 2.2 g/dL is admitted with anasarca. Oral furosemide 80 mg twice daily produces almost no urine output. The team notes she has significant intestinal wall edema, a creatinine of 2.1 mg/dL, and has been taking naproxen for arthritis. Which combination of factors best explains her failure to respond, and what is the most appropriate initial adjustment?",
    "options": [
      {
        "text": "Poor absorption from gut edema, reduced tubular secretion, and NSAID blockade of prostaglandins; switch to intravenous dosing and stop the NSAID",
        "explanation": "Correct. Loop diuretics work from inside the tubular lumen, so drug must first be absorbed and then actively secreted into the proximal tubule by organic anion transporters, since heavy protein binding prevents meaningful filtration. Every step is impaired here. Intestinal wall edema in decompensated heart failure delays and reduces oral absorption, which is why the intravenous route is more reliable in this setting. Reduced GFR lowers delivery of drug to the secretory sites, and accumulated endogenous organic anions of uremia compete for the same OAT transporters, so less drug reaches the lumen. Naproxen compounds this in three ways: it competes for the same secretory transporter, it blocks the renal prostaglandins that mediate the early venodilator effect, and it removes the prostaglandin-dependent afferent dilation that maintains renal perfusion. The rational response is to remove the NSAID, use the intravenous route, and increase the dose to exceed the natriuretic threshold, with a continuous infusion or the addition of a thiazide if response remains inadequate."
      },
      {
        "text": "The hypoalbuminemia has reduced free drug levels, so albumin infusion is the primary intervention",
        "explanation": "Incorrect. Hypoalbuminemia actually increases the free fraction, and although reduced albumin binding can decrease delivery to the secretory transporter and albumin binding of drug within the tubular lumen can inactivate it in nephrotic syndrome, routine albumin infusion has not proven a reliable strategy and does not address the dominant problems here. This would be the correct answer if the sole abnormality were profound nephrotic hypoalbuminemia with normal renal function and no NSAID exposure."
      },
      {
        "text": "She has developed tolerance through downregulation of NKCC2, so a different transporter must be targeted and the loop diuretic abandoned",
        "explanation": "Incorrect. The braking phenomenon in chronic loop diuretic use involves hypertrophy and increased transport capacity in DOWNSTREAM segments, particularly the distal convoluted tubule, rather than downregulation of NKCC2 itself, and the correct response is to add a thiazide for sequential nephron blockade rather than to abandon the loop agent. That is also not the primary issue in a patient who is failing to absorb and secrete the drug. This would be the correct answer if she had been responding well for months on stable intravenous dosing and then plateaued."
      },
      {
        "text": "The creatinine of 2.1 indicates intrinsic renal failure, so diuretics are contraindicated and dialysis is required",
        "explanation": "Incorrect. A creatinine of 2.1 in a 79-year-old with decompensated heart failure most often reflects cardiorenal physiology and NSAID exposure rather than irreversible intrinsic failure, and loop diuretics remain effective in chronic kidney disease at higher doses because more drug must be delivered to overcome reduced secretion. Ultrafiltration is reserved for genuinely refractory cases. This would be the correct answer if she were anuric with established end-stage renal disease."
      },
      {
        "text": "The problem is excessive dietary sodium alone, so no change in the diuretic regimen is warranted",
        "explanation": "Incorrect. High sodium intake genuinely can mask an adequate diuretic effect, because post-diuretic sodium retention between doses can offset the natriuresis, and dietary counselling is part of management. However, it cannot be the sole explanation in a patient with essentially no urine output and three concrete pharmacologic barriers. This would be the correct answer if her urine sodium were high with good urine output but no net weight loss."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Loop diuretics act from the LUMEN and must be SECRETED there by proximal organic anion transporters, since protein binding blocks filtration. Resistance comes from poor gut absorption (bowel edema), reduced secretion (low GFR, competing anions, NSAIDs), prostaglandin blockade, and distal tubular hypertrophy. Answer with IV route, higher dose, stop the NSAID, then add a thiazide.",
    "lectureSource": "CV30: Diuretic Agents Part 1"
  },
  {
    "id": 25,
    "category": "Cardiology: Rate Determination",
    "questionText": "An ECG recorded at the standard paper speed shows QRS complexes separated by 19 small boxes. The rhythm is regular, each QRS is preceded by an upright P wave in lead II with a constant PR interval of 160 ms, and the QRS duration is 88 ms. Which of the following correctly gives the rate and the rhythm interpretation?",
    "options": [
      {
        "text": "About 105/min, sinus tachycardia",
        "explanation": "Incorrect. This rate corresponds to roughly 14 small boxes rather than 19. It is also above 100, which would indeed be tachycardia, but it does not match the measured interval. This would be the correct answer if the complexes were separated by about 14 small boxes."
      },
      {
        "text": "About 38/min, sinus bradycardia with a junctional escape rhythm",
        "explanation": "Incorrect. A rate this slow would require roughly 39 small boxes between complexes. A junctional escape rhythm would also not show upright P waves in lead II preceding each QRS with a normal constant PR interval; junctional beats typically show absent, inverted, or retrograde P waves. This would be the correct answer if the P waves were inverted in lead II or absent."
      },
      {
        "text": "About 79/min, normal sinus rhythm",
        "explanation": "Correct. At the standard paper speed of 25 mm/s, each small box is 0.04 seconds and each large box of five small boxes is 0.20 seconds. Nineteen small boxes therefore represent 19 times 0.04, or 0.76 seconds, and the rate is 60 divided by 0.76, which is about 79/min. The same result follows from the 1500 rule: 1500 divided by 19 small boxes equals 79. The rhythm is sinus because each QRS is preceded by an upright P wave in lead II, which indicates depolarization spreading from the sinoatrial node downward and leftward toward the positive electrode, with a constant PR interval of 160 ms falling within the normal 120 to 200 ms range. The QRS of 88 ms is normal, confirming that ventricular activation proceeds through the His-Purkinje system rather than by slow myocyte-to-myocyte spread."
      },
      {
        "text": "About 60/min, sinus rhythm with first-degree atrioventricular block",
        "explanation": "Incorrect. The rate calculation is wrong, and first-degree block requires a PR interval greater than 200 ms, whereas this PR is 160 ms and normal. This would be the correct answer if the PR interval measured 240 ms."
      },
      {
        "text": "The rate cannot be determined without knowing whether the tracing was recorded at 25 or 50 mm/s",
        "explanation": "Incorrect. The vignette specifies the standard paper speed, which by convention is 25 mm/s. Verifying paper speed and calibration is genuinely good practice, since a 50 mm/s recording would halve the apparent rate and double apparent intervals, but here the information is given. This would be the correct answer if the paper speed were unstated or the calibration mark were abnormal."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: At 25 mm/s, one small box is 0.04 s and one large box is 0.20 s. Rate equals 1500 divided by small boxes, or 300 divided by large boxes (300-150-100-75-60-50). Sinus rhythm requires an upright P before every QRS in lead II with a constant PR of 120-200 ms.",
    "lectureSource": "CV27: EKG Introduction"
  },
  {
    "id": 26,
    "category": "Cardiac Physiology: Exercise Response",
    "questionText": "A healthy 25-year-old begins running on a treadmill. Within the first few seconds his heart rate rises from 64 to 88/min, before any measurable change in circulating catecholamines. Over the next two minutes it climbs further to 158/min. Blockade of one autonomic limb abolishes the initial rapid rise but not the later increase. Which mechanism accounts for the initial, near-instantaneous acceleration?",
    "options": [
      {
        "text": "Withdrawal of vagal tone, which is fast because acetylcholine is rapidly hydrolyzed by acetylcholinesterase at the sinoatrial node",
        "explanation": "Correct. At rest the sinoatrial node fires at roughly 60 to 70/min, well below its intrinsic rate of about 100 to 110, because tonic vagal activity dominates. Acetylcholine acting on M2 muscarinic receptors couples through Gi to reduce cyclic AMP, which flattens the slope of the funny current, and simultaneously opens acetylcholine-activated potassium channels through the beta-gamma subunit, hyperpolarizing the cell so that more time is required to reach threshold. Vagal effects are very fast in both onset and offset, because acetylcholine is hydrolyzed within milliseconds by acetylcholinesterase and because the potassium channel is coupled directly to the G protein without a second messenger cascade. Withdrawal of that restraint therefore raises heart rate within one or two beats, which is why heart rate can rise to about 100/min almost instantaneously at the onset of exercise. Beyond that, further acceleration requires sympathetic activation, whose beta-1 to Gs to cyclic AMP to protein kinase A pathway takes seconds to develop and seconds to decay."
      },
      {
        "text": "Beta-1 receptor stimulation by norepinephrine released from cardiac sympathetic nerves, which acts within milliseconds",
        "explanation": "Incorrect. Sympathetic effects on the sinoatrial node are real and account for the later rise to 158/min, but they are comparatively slow in both onset and offset because they require a second messenger cascade through Gs, adenylyl cyclase, cyclic AMP, and protein kinase A, and because norepinephrine is cleared by reuptake rather than by rapid enzymatic hydrolysis at the synapse. Their latency is seconds, not milliseconds. This would be the correct answer if the question asked what sustains the heart rate at steady-state exercise."
      },
      {
        "text": "The Bainbridge reflex triggered by increased venous return from the skeletal muscle pump",
        "explanation": "Incorrect. The Bainbridge (atrial) reflex is genuinely engaged during exercise, since the muscle pump raises venous return and stretches the atria, and it does contribute to the tachycardia. However, it is a reflex requiring afferent transmission and central integration and is not the dominant mechanism of the immediate first-beat acceleration, which is central command-driven vagal withdrawal. This would be the correct answer if the question described a rapid volume infusion in a resting subject."
      },
      {
        "text": "Direct stretch of the sinoatrial node by increased right atrial filling, which increases its intrinsic firing rate",
        "explanation": "Incorrect. Mechanical stretch of the sinoatrial node does modestly increase its firing rate and contributes to the Bainbridge response, but the effect is small and depends on venous return having already increased, which lags the onset of exercise. It cannot account for a rise within the first few seconds. This would be the correct answer if the question concerned the intrinsic response of a denervated heart to a volume load."
      },
      {
        "text": "A local rise in adenosine and potassium in exercising muscle acting reflexly on the sinoatrial node",
        "explanation": "Incorrect. Metabolite accumulation in exercising muscle drives local vasodilation and stimulates group III and IV muscle afferents contributing to the exercise pressor reflex, but this takes time to develop and adenosine acting directly on the heart SLOWS the sinus rate through A1 receptors. It cannot explain an immediate acceleration. This would be the correct answer if the question asked what mediates active hyperemia in exercising skeletal muscle."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: VAGAL withdrawal is fast (M2, Gi, direct GIRK channel opening, and acetylcholine destroyed in milliseconds) and gets heart rate from about 65 to 100 within a beat or two. SYMPATHETIC activation is slower (beta-1, Gs, cAMP, PKA) and carries the rate above 100. Intrinsic SA node rate is about 100-110.",
    "lectureSource": "CV23: Cardiac Impulse Conduction and Autonomic Control"
  },
  {
    "id": 27,
    "category": "Cardiology: Heart Failure",
    "questionText": "Two patients are compared. Patient A has a dilated cardiomyopathy with an ejection fraction of 20 percent; raising his end-diastolic volume from 180 to 240 mL increases stroke volume only from 36 to 42 mL while pulmonary capillary wedge pressure climbs from 18 to 32 mmHg and he becomes dyspneic. Patient B is healthy; raising end-diastolic volume from 120 to 150 mL increases stroke volume from 70 to 92 mL with wedge pressure rising only from 8 to 12 mmHg. Which statement best explains the difference?",
    "options": [
      {
        "text": "Patient A has moved onto the descending limb of the Frank-Starling curve, where further stretch reduces force generation by pulling actin and myosin filaments apart",
        "explanation": "Incorrect. A true descending limb, in which additional stretch actively reduces force by disengaging thick and thin filaments, is a feature of isolated skeletal muscle preparations and is not thought to occur in the intact human heart, because the stiff pericardium and the collagen network limit sarcomere length to about 2.2 to 2.3 micrometers. His stroke volume rose, just barely. This would be the correct answer if his stroke volume had actually fallen with additional filling."
      },
      {
        "text": "Patient A has increased contractility but reduced chamber compliance, so the wedge pressure rise reflects diastolic rather than systolic dysfunction",
        "explanation": "Incorrect. An ejection fraction of 20 percent with a dilated ventricle defines severely REDUCED contractility, not increased. Reduced compliance does contribute to the steep filling pressure rise, but the primary lesion is systolic. This would be the correct answer if his ejection fraction were normal with a small, stiff ventricle."
      },
      {
        "text": "The difference reflects afterload, since Patient A must eject each beat against a much higher systemic vascular resistance than Patient B has to face",
        "explanation": "Incorrect. Afterload is indeed typically elevated in decompensated heart failure through neurohormonal vasoconstriction, and afterload reduction is therapeutically valuable, but the vignette manipulates preload rather than afterload and gives no resistance data. The flatness of the response to filling is a contractility phenomenon. This would be the correct answer if the intervention described were a change in systemic vascular resistance."
      },
      {
        "text": "The difference reflects heart rate, since Patient A cannot increase his heart rate to offset the small stroke volume ejected with each contraction",
        "explanation": "Incorrect. The comparison concerns stroke volume as a function of end-diastolic volume, which is independent of rate, and no heart rate data are given. Chronotropic incompetence is a real problem in heart failure but is not what these data demonstrate. This would be the correct answer if cardiac output rather than stroke volume were being compared at different rates."
      },
      {
        "text": "Patient A has a depressed, flattened Frank-Starling curve, so added preload buys little stroke volume while his stiff, dilated ventricle raises filling pressure",
        "explanation": "Correct. The Frank-Starling relationship plots stroke volume against end-diastolic volume, and its position and steepness are set by contractility. In the healthy ventricle the curve is steep, so a modest increase in filling yields a large increase in stroke volume at a trivial cost in filling pressure. In systolic heart failure the curve is shifted downward and flattened, so the same preload increment yields little additional stroke volume. At the same time the passive end-diastolic pressure-volume relationship is nonlinear and steepens at large volumes, and the failing ventricle is already operating far out on that curve, so added volume produces a disproportionate rise in end-diastolic and therefore left atrial and pulmonary capillary pressure. The result is the clinical dilemma of decompensated heart failure: the patient gains congestion and dyspnea without gaining meaningful output, which is why treatment centers on diuresis and afterload reduction rather than on further volume loading."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Reduced contractility DEPRESSES and FLATTENS the Frank-Starling curve, so extra preload yields little stroke volume, while the steep end-diastolic pressure-volume curve turns that volume into pulmonary congestion. There is no clinically relevant descending limb; the failing heart gets congestion without output.",
    "lectureSource": "CV29: Cardiac Cycle Part II"
  },
  {
    "id": 28,
    "category": "Cardiology: Electrolytes and the ECG",
    "questionText": "A 62-year-old woman with metastatic breast cancer is admitted confused. Her ECG shows a heart rate of 58/min with a QT interval of 320 ms at that rate, a shortened ST segment such that the T wave appears to arise almost directly from the QRS, and occasional Osborn-like notching. Her serum potassium and magnesium are normal. Which electrolyte abnormality best explains this tracing, and what is the ionic basis?",
    "options": [
      {
        "text": "Hypokalemia, which delays repolarization and produces prominent U waves with ST segment depression",
        "explanation": "Incorrect. Hypokalemia does produce prominent U waves, ST depression, T wave flattening, and an apparently long QU interval, but the vignette states that potassium is normal, and hypokalemia LENGTHENS rather than shortens repolarization. This would be the correct answer if her potassium were 2.5 with prominent U waves."
      },
      {
        "text": "Hypocalcemia, which lengthens phase 2 of the action potential and prolongs the ST segment and QT interval",
        "explanation": "Incorrect. This is the right ion but the wrong direction. A LOW calcium prolongs phase 2 and therefore lengthens the ST segment and QT interval, predisposing to torsades. The tracing here shows a strikingly SHORT ST segment and QT. This would be the correct answer if her QT were 520 ms with a long isoelectric ST segment and perioral paresthesias."
      },
      {
        "text": "Hypermagnesemia, which shortens repolarization by blocking calcium entry into working myocytes",
        "explanation": "Incorrect. The vignette states that magnesium is normal, and hypermagnesemia characteristically prolongs the PR, QRS, and QT intervals with bradycardia and eventually heart block, rather than shortening repolarization. This would be the correct answer if she were receiving high-dose magnesium for eclampsia with loss of deep tendon reflexes."
      },
      {
        "text": "Hypercalcemia, which shortens phase 2 as high extracellular calcium speeds L-type channel inactivation",
        "explanation": "Correct. The plateau of the ventricular action potential, phase 2, represents a balance between inward L-type calcium current and outward potassium currents, and its duration is what the ST segment records on the surface ECG. L-type calcium channels are inactivated by calcium itself as well as by voltage, so a high extracellular and consequently high local intracellular calcium concentration accelerates their inactivation, shortening the plateau. The ST segment therefore contracts and the QT shortens, so the T wave appears to emerge almost directly from the QRS complex. Osborn-like J waves are described in severe hypercalcemia as well as in hypothermia. In a patient with metastatic breast cancer, hypercalcemia of malignancy is the obvious cause, from osteolytic metastases or PTH-related peptide, and it explains the confusion as well; management is volume repletion followed by a bisphosphonate, with calcitonin for rapid partial lowering."
      },
      {
        "text": "Hyperkalemia, which shortens the QT interval by accelerating phase 3 potassium repolarization",
        "explanation": "Incorrect. Hyperkalemia does accelerate phase 3 and can modestly shorten the QT, and peaked T waves are its hallmark, so the reasoning is not unreasonable. However, potassium is stated to be normal, and hyperkalemia's dominant features are peaked T waves with progressive PR prolongation and QRS widening rather than a truncated ST segment. This would be the correct answer if her potassium were 7.0 with tall peaked T waves and a widening QRS."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Calcium controls the PLATEAU and therefore the ST segment. HYPERcalcemia shortens ST and QT (T wave seems to sit on the QRS); HYPOcalcemia lengthens them and risks torsades. Potassium controls phase 3 and the T wave: high K gives peaked T waves, low K gives U waves and ST depression.",
    "lectureSource": "CV26: Basic ECG - Leads, Vectors and Intervals"
  },
  {
    "id": 29,
    "category": "Pharmacology: PDE-5 Inhibition in Pulmonary Hypertension",
    "questionText": "A 44-year-old woman with idiopathic pulmonary arterial hypertension is started on sildenafil. Her mean pulmonary artery pressure falls from 52 to 41 mmHg with only a small change in systemic blood pressure. She is cautioned never to take nitrates. Which of the following best explains both the pulmonary selectivity and the interaction with nitrates?",
    "options": [
      {
        "text": "The drug blocks endothelin ETA receptors, which are expressed predominantly in the pulmonary vasculature, and nitrates upregulate those receptors",
        "explanation": "Incorrect. ETA receptor blockade is the mechanism of bosentan, ambrisentan, and macitentan, which are indeed used in pulmonary arterial hypertension, but sildenafil is a phosphodiesterase inhibitor. Nitrates also do not upregulate endothelin receptors. This would be the correct answer if the drug prescribed were an endothelin receptor antagonist."
      },
      {
        "text": "The drug is a prostacyclin analogue acting through cyclic AMP, and nitrates deplete the cyclic AMP pool",
        "explanation": "Incorrect. Prostacyclin analogues such as epoprostenol and treprostinil act through the IP receptor and cyclic AMP and are a separate therapeutic class in pulmonary hypertension. Sildenafil works on the cyclic GMP arm, and nitrates do not deplete cyclic AMP. This would be the correct answer if the drug were treprostinil."
      },
      {
        "text": "The drug inhibits phosphodiesterase-5, which degrades cyclic GMP; nitrates raise cyclic GMP through the same pathway, so the combination is additive",
        "explanation": "Correct. Nitric oxide, whether generated by endothelial nitric oxide synthase or supplied by a nitrate donor, activates soluble guanylyl cyclase in vascular smooth muscle to produce cyclic GMP, which activates protein kinase G, lowers intracellular calcium, activates myosin light chain phosphatase, and relaxes the vessel. Phosphodiesterase-5 terminates the signal by hydrolyzing cyclic GMP, so inhibiting it amplifies and prolongs any nitric oxide signal that is present. PDE-5 is expressed at especially high levels in pulmonary vascular smooth muscle and in the corpus cavernosum, which gives the drug relative pulmonary selectivity and explains its two principal indications. The danger with nitrates follows from the same pharmacology: one drug floods the pathway with substrate while the other blocks its degradation, so cyclic GMP accumulates massively and produces refractory systemic vasodilation and hypotension. The combination is therefore absolutely contraindicated, and it is why the nitroglycerin history must be sought before treating chest pain in any patient who may be taking a PDE-5 inhibitor."
      },
      {
        "text": "The drug directly opens ATP-sensitive potassium channels, hyperpolarizing pulmonary smooth muscle, and nitrates close those channels",
        "explanation": "Incorrect. KATP channel opening is the mechanism of drugs such as minoxidil, diazoxide, and nicorandil. Sildenafil does not act on these channels, and nitrates do not close them. This would be the correct answer if the drug were minoxidil."
      },
      {
        "text": "The drug inhibits soluble guanylyl cyclase, reducing cyclic GMP, and nitrates counteract that inhibition unpredictably",
        "explanation": "Incorrect. This inverts the direction of the effect. Sildenafil raises cyclic GMP by blocking its breakdown, whereas inhibiting guanylyl cyclase would lower cyclic GMP and cause vasoconstriction. Riociguat, by contrast, STIMULATES soluble guanylyl cyclase and for the same additive reason must also never be combined with nitrates or with a PDE-5 inhibitor. This would be the correct answer if sildenafil were a cyclase inhibitor."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: NO to soluble guanylyl cyclase to cGMP to PKG causes relaxation; PDE-5 terminates it. Sildenafil blocks PDE-5, which is enriched in pulmonary vasculature and corpus cavernosum. NITRATES plus PDE-5 INHIBITORS equals catastrophic hypotension, an absolute contraindication. Riociguat (a cyclase stimulator) carries the same warning.",
    "lectureSource": "CV24: Vascular Endothelial Cells"
  },
  {
    "id": 30,
    "category": "Pharmacology: Osmotic Diuretics",
    "questionText": "A 24-year-old man with a severe traumatic brain injury and intracranial pressure of 28 mmHg is given intravenous mannitol. His intracranial pressure falls to 17 mmHg within 20 minutes and his urine output increases markedly. Two days later, after repeated dosing, his serum osmolality is 328 mOsm/kg, his osmolar gap is 22, and his intracranial pressure begins to rise again despite further dosing. Which of the following best explains both the initial benefit and the later failure?",
    "options": [
      {
        "text": "Mannitol inhibits the Na-K-2Cl cotransporter in the choroid plexus, reducing cerebrospinal fluid production, and tolerance develops through transporter upregulation",
        "explanation": "Incorrect. Choroid plexus NKCC1 inhibition is a proposed mechanism for the modest cerebrospinal fluid effect of loop diuretics and acetazolamide, not of mannitol, which acts as an osmotic agent within the vascular space and the tubular lumen. This would be the correct answer if the agent given were acetazolamide or furosemide for idiopathic intracranial hypertension."
      },
      {
        "text": "Mannitol is filtered but not reabsorbed, drawing water from brain across an intact barrier, but with repeated dosing it leaks into injured tissue",
        "explanation": "Correct. Mannitol is a six-carbon sugar alcohol that is freely filtered, essentially not reabsorbed, and not metabolized, so it remains in the tubular lumen and obligates water to accompany it throughout the nephron, producing an osmotic diuresis. Its therapeutic effect on intracranial pressure has two components: an immediate rheologic effect from plasma expansion and reduced blood viscosity that improves cerebral blood flow and allows autoregulatory vasoconstriction, and an osmotic effect in which the raised plasma osmolality draws water out of brain parenchyma across an intact blood-brain barrier. That second mechanism is also its limitation. Where the barrier is disrupted by injury, mannitol leaks into the interstitium of the damaged tissue, and with repeated dosing it accumulates there and reverses the gradient, drawing water into the brain and producing rebound edema. The rising osmolar gap is the marker of that accumulation, which is why serum osmolality and osmolar gap are followed and dosing is generally held once the gap exceeds about 20 or osmolality exceeds roughly 320 mOsm/kg. Mannitol is contraindicated in anuria and in decompensated heart failure, where the initial plasma expansion can precipitate pulmonary edema."
      },
      {
        "text": "Mannitol blocks aquaporin-4 on astrocytic end-feet, and receptor downregulation explains the loss of effect",
        "explanation": "Incorrect. Aquaporin-4 on astrocyte end-feet is genuinely central to cerebral water movement and is an active area of research, but mannitol is not an aquaporin antagonist; it works by creating an osmotic gradient rather than by blocking a channel. This would be the correct answer if an aquaporin-4 inhibitor had been administered."
      },
      {
        "text": "Mannitol is secreted by the proximal tubular organic anion transporters, and saturation of that pathway explains the loss of efficacy",
        "explanation": "Incorrect. Mannitol reaches the tubular lumen by FILTRATION, not secretion; it is a neutral polyol and not a substrate for the organic anion transporters that handle PAH, penicillins, and loop diuretics. Its failure here is a cerebral rather than a renal delivery problem. This would be the correct answer if the drug were furosemide, whose access to its site of action does depend on OAT-mediated secretion."
      },
      {
        "text": "Mannitol causes hyponatremia by promoting free water retention, and the resulting brain swelling explains the rebound",
        "explanation": "Incorrect. Mannitol characteristically causes an initial dilutional hyponatremia by drawing water into the vascular space, but that is a translocational hyponatremia in a HYPERosmolar patient rather than a hypotonic state, so it does not itself cause cerebral swelling. Sustained diuresis more often ends in hypernatremia and volume depletion. This would be the correct answer if the patient had true hypotonic hyponatremia with a low measured osmolality."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Mannitol is filtered and not reabsorbed, holding water in the tubule (osmotic diuresis) and pulling water from brain across an INTACT blood-brain barrier. Where the barrier is broken it leaks in and causes REBOUND edema. Follow serum osmolality and the osmolar gap; avoid in anuria and decompensated heart failure.",
    "lectureSource": "CV31: Diuretic Agents Part 2"
  },
  {
    "id": 31,
    "category": "Cardiac Physiology: Excitation-Contraction Coupling",
    "questionText": "An 82-year-old woman with heart failure and atrial fibrillation on digoxin presents with nausea, confusion, and yellow-green visual halos. Her ECG shows atrial tachycardia with 2:1 block and scooped ST depression. Her potassium is 3.1 mEq/L and her creatinine has risen to 1.9 mg/dL. Which mechanism explains both the therapeutic inotropic effect of this drug and the reason hypokalemia has precipitated toxicity?",
    "options": [
      {
        "text": "The drug directly opens L-type calcium channels in the cardiac myocyte, and potassium ions compete for the same channel pore",
        "explanation": "Incorrect. Digoxin does not act on the L-type calcium channel, and potassium does not compete within that pore. Direct calcium channel modulation is the mechanism of dihydropyridine agonists and antagonists, not of cardiac glycosides. This would be the correct answer if the drug were a calcium channel modulator."
      },
      {
        "text": "The drug activates the sarcoplasmic reticulum calcium ATPase, and hypokalemia directly inhibits that pump during diastolic relaxation",
        "explanation": "Incorrect. SERCA takes calcium back INTO the sarcoplasmic reticulum during diastole and determines the rate of relaxation and the size of the releasable store; activating it, as phospholamban phosphorylation does, would speed relaxation rather than being the primary inotropic mechanism of digoxin. Hypokalemia also does not inhibit SERCA. This would be the correct answer if the drug were a SERCA activator or a phospholamban-targeted therapy."
      },
      {
        "text": "The drug blocks the cardiac sodium-calcium exchanger directly, and low potassium further enhances exchanger activity in the myocyte",
        "explanation": "Incorrect. Digoxin affects the sodium-calcium exchanger only INDIRECTLY, by changing the sodium gradient that drives it, rather than by binding the exchanger itself. The distinction matters because the entire mechanism depends on the pump being the primary target. This would be the correct answer if the drug were a direct NCX inhibitor."
      },
      {
        "text": "The drug inhibits the Na-K-ATPase, so intracellular sodium rises and less calcium is extruded; potassium competes at that site",
        "explanation": "Correct. Digoxin binds the extracellular face of the alpha subunit of the cardiac Na-K-ATPase and inhibits it. Intracellular sodium therefore rises modestly, which reduces the transmembrane sodium gradient that powers the sodium-calcium exchanger, so less calcium is extruded during diastole. More calcium is taken up into the sarcoplasmic reticulum and more is released with each beat, producing the positive inotropic effect. The binding site overlaps the potassium binding site on the pump, so potassium and digoxin compete: hypokalemia removes the competition, markedly increasing drug binding and toxicity at any given serum level, which is why this patient with a potassium of 3.1, likely from her diuretic, and a falling GFR reducing renal clearance has become toxic. The clinical picture is characteristic, with gastrointestinal and neurologic symptoms, chromatopsia, the scooped ST segment, and the near-pathognomonic combination of increased automaticity with atrioventricular block from enhanced vagal tone. Management includes correcting potassium and magnesium and using digoxin-specific antibody fragments when severe."
      },
      {
        "text": "The drug increases beta-1 receptor sensitivity in the myocardium, and hypokalemia raises circulating catecholamine levels",
        "explanation": "Incorrect. Digoxin's inotropic action is entirely independent of adrenergic receptors, which is one of its distinguishing features and part of why it does not increase mortality the way beta agonists do in chronic heart failure. Hypokalemia is also not a stimulus for catecholamine release. This would be the correct answer if the agent were a beta agonist such as dobutamine."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Digoxin inhibits the Na-K-ATPase, so intracellular Na rises, NCX extrudes less calcium, and SR calcium stores grow (positive inotropy). Potassium COMPETES for the same binding site, so HYPOkalemia worsens toxicity. Look for GI and visual symptoms plus increased automaticity WITH AV block; correct K and Mg, and use Fab fragments if severe.",
    "lectureSource": "CV22: Cardiac Action Potentials"
  },
  {
    "id": 32,
    "category": "Cardiology: Valve Mechanics",
    "questionText": "During a cardiac cycle, left ventricular pressure rises from 8 to 82 mmHg while ventricular volume remains constant at 130 mL. Aortic pressure at this moment is 78 mmHg and left atrial pressure is 9 mmHg. Which statement correctly describes this phase and the valve positions?",
    "options": [
      {
        "text": "This is rapid ventricular filling; the mitral valve is open and the aortic valve stays closed as ventricular volume rises",
        "explanation": "Incorrect. During rapid filling the ventricular volume INCREASES as blood flows in from the atrium, whereas the vignette specifies that volume is constant. Ventricular pressure during filling is also low and rising only slightly, not climbing from 8 to 82 mmHg. This would be the correct answer if the volume had risen from 50 to 110 mL at a low pressure."
      },
      {
        "text": "This is the ejection phase; the aortic valve is open and blood is leaving the ventricle, so ventricular volume falls",
        "explanation": "Incorrect. Ejection requires ventricular pressure to EXCEED aortic pressure and is accompanied by a falling ventricular volume as blood leaves the chamber. Here ventricular pressure is still below the aortic pressure of 78 at the start and the volume has not changed. This would be the correct answer if the volume were falling from 130 to 60 mL."
      },
      {
        "text": "This is isovolumetric contraction; the mitral and aortic valves are closed until ventricular pressure exceeds aortic pressure",
        "explanation": "Correct. Isovolumetric contraction begins the instant ventricular pressure exceeds left atrial pressure, which closes the mitral valve and produces S1, and it continues until ventricular pressure exceeds aortic pressure, which opens the aortic valve. Throughout this interval both valves are shut, so no blood can enter or leave and volume is necessarily constant at the end-diastolic value, which is why it is called isovolumetric. Because the muscle shortens against a closed chamber, this is where the steepest rate of pressure development occurs and where dP/dt is measured as an index of contractility, and it is the period of greatest myocardial oxygen consumption per unit of external work. On a pressure-volume loop this phase is the vertical right-hand border. The values fit precisely: pressure has risen well above the atrial pressure of 9, closing the mitral valve, but has just reached and is about to exceed the aortic pressure of 78, at which moment ejection begins."
      },
      {
        "text": "This is isovolumetric relaxation; both the mitral and aortic valves are closed as ventricular pressure falls below aortic pressure",
        "explanation": "Incorrect. Isovolumetric relaxation also occurs with both valves closed at constant volume, so the reasoning is partly right, but during that phase ventricular pressure FALLS rather than rises, and the volume is at end-systolic rather than end-diastolic levels. The vignette describes rising pressure. This would be the correct answer if pressure were falling from 90 to 10 mmHg at a constant volume of 55 mL."
      },
      {
        "text": "This is atrial systole; the mitral valve is open and the atrium contributes its final increment of ventricular filling",
        "explanation": "Incorrect. Atrial systole requires an open mitral valve and produces an INCREASE in ventricular volume, the atrial kick, along with a small rise in ventricular pressure of only a few mmHg. The pressures and constant volume described are incompatible with an open mitral valve. This would be the correct answer if the volume had risen from 110 to 130 mL with the pressure rising only from 5 to 8 mmHg."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Valves are opened and closed by PRESSURE GRADIENTS. Isovolumetric CONTRACTION runs from mitral closure (S1) to aortic opening, with rising pressure at constant end-diastolic volume and peak dP/dt. Isovolumetric RELAXATION runs from aortic closure (S2) to mitral opening, with falling pressure at constant end-systolic volume.",
    "lectureSource": "CV28: Cardiac Cycle Part I"
  },
  {
    "id": 33,
    "category": "Cardiology: Einthoven's Triangle",
    "questionText": "A technician records an ECG and obtains a tracing in which lead I shows a completely negative P wave and QRS, lead aVR shows an upright P wave and QRS, and the precordial leads appear entirely normal with a normal R wave progression. The patient is a healthy 30-year-old with no symptoms. Which of the following is the most likely explanation?",
    "options": [
      {
        "text": "Reversal of the right and left arm electrodes, which inverts lead I, makes aVR upright, and spares the precordium",
        "explanation": "Correct. The limb leads are derived from Einthoven's triangle, in which lead I measures the potential difference from the right arm to the left arm, lead II from the right arm to the left leg, and lead III from the left arm to the left leg, with the augmented leads derived from the same three electrodes. Swapping the arm electrodes reverses the polarity of lead I completely, so its P wave, QRS, and T wave all invert, and it effectively exchanges aVR and aVL, so aVR becomes upright. Because the precordial leads use the chest electrodes referenced to Wilson's central terminal, they are only trivially affected and retain normal R wave progression. That combination, global inversion in lead I with an upright aVR and entirely normal precordial leads in an asymptomatic patient, is the classic signature of arm lead reversal and should prompt repeating the tracing rather than a workup."
      },
      {
        "text": "Dextrocardia, which inverts all the limb leads and produces reverse R wave progression across the precordial leads",
        "explanation": "Incorrect. Dextrocardia produces exactly the same limb lead findings, which is why it is the key alternative, but it also produces a distinctive precordial pattern with poor or reversed R wave progression and diminishing voltage from V1 to V6, because the heart lies on the right. The vignette specifies entirely normal precordial leads. This would be the correct answer if R wave progression were reversed."
      },
      {
        "text": "Extreme right axis deviation from right ventricular hypertrophy shifting the mean QRS vector far to the right",
        "explanation": "Incorrect. Extreme axis deviation would make lead I negative, but the P wave would not be globally inverted in the same way, aVR would not become fully upright with a normal P wave morphology, and the precordial leads would show right ventricular findings such as a tall R in V1. A healthy asymptomatic 30-year-old is also an unlikely candidate. This would be the correct answer if there were a tall R in V1 with right atrial enlargement."
      },
      {
        "text": "A junctional rhythm with retrograde atrial activation, which would explain the inverted P wave in this tracing",
        "explanation": "Incorrect. Retrograde atrial activation does invert P waves, but characteristically in the inferior leads II, III, and aVF, since activation travels upward toward the atria, and it would not invert the QRS in lead I or make aVR fully upright. This would be the correct answer if the P waves were inverted in II, III, and aVF with a short PR interval."
      },
      {
        "text": "Reversal of the left arm and left leg electrodes, which is by far the most common lead misplacement error in practice",
        "explanation": "Incorrect. Swapping the left arm and left leg electrodes exchanges leads I and II and exchanges aVL and aVF, producing subtler changes that often go unrecognized, but it does not invert lead I or make aVR upright. Right-left arm reversal is the error that produces the striking pattern described. This would be the correct answer if leads I and II appeared to have exchanged their morphologies."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Global inversion in lead I with an UPRIGHT aVR is either arm lead reversal or dextrocardia. The PRECORDIAL leads separate them: normal R wave progression means lead reversal, reversed or poor progression means dextrocardia. aVR should normally be negative, since it looks at the heart from the right shoulder.",
    "lectureSource": "CV26: Basic ECG - Leads, Vectors and Intervals"
  },
  {
    "id": 34,
    "category": "Renal Pharmacology: Loop Diuretic Toxicity",
    "questionText": "A 68-year-old man with acute kidney injury and pulmonary edema is given a 200 mg intravenous bolus of furosemide over two minutes because of a poor response to lower doses. Within 15 minutes he reports ringing in his ears and reduced hearing. His creatinine is 3.4 mg/dL and he is also receiving gentamicin for a suspected line infection. Which of the following best describes this adverse effect and how it could have been avoided?",
    "options": [
      {
        "text": "It reflects an idiosyncratic sulfonamide hypersensitivity and requires permanent avoidance of all sulfonamide-containing drugs",
        "explanation": "Incorrect. Furosemide is a sulfonamide derivative and true hypersensitivity reactions can occur, but they present as rash, fever, or rarely interstitial nephritis rather than as acute hearing loss, and cross-reactivity with antimicrobial sulfonamides is much weaker than historically taught. The mechanism here is dose- and rate-related toxicity rather than hypersensitivity. This would be the correct answer if he had developed a morbilliform rash with eosinophilia."
      },
      {
        "text": "Dose- and rate-dependent ototoxicity from NKCC1 inhibition in the stria vascularis, potentiated by renal failure and aminoglycosides",
        "explanation": "Correct. The endolymph of the inner ear is maintained at an unusually high potassium concentration by the marginal cells of the stria vascularis, which depend on the NKCC1 cotransporter, a close relative of the NKCC2 targeted in the thick ascending limb. High peak plasma concentrations of a loop diuretic inhibit NKCC1 as well, disrupting the endocochlear potential and producing tinnitus and hearing loss, which is usually reversible but can be permanent. Risk depends chiefly on peak concentration, which is why rapid boluses of large doses are the classic trigger and why infusion rates above roughly 4 mg/min are avoided. Renal impairment raises peak levels by reducing clearance, and concurrent aminoglycosides, which are independently ototoxic to hair cells, act synergistically. In a patient like this the safer approach is a continuous infusion after a modest loading dose, together with reassessment of the need for the aminoglycoside. Ethacrynic acid is the most ototoxic of the class and is reserved for true sulfonamide allergy."
      },
      {
        "text": "It results from acute hypokalemia depolarizing cochlear hair cells, and potassium repletion will reverse it immediately",
        "explanation": "Incorrect. Loop diuretics certainly cause hypokalemia, but systemic potassium depletion does not develop within 15 minutes and is not the mechanism of ototoxicity; the lesion is a local disruption of endolymph composition in the stria vascularis. Potassium repletion is appropriate for other reasons but will not reverse the hearing change. This would be the correct answer if hearing loss were a recognized manifestation of systemic hypokalemia."
      },
      {
        "text": "It reflects contrast-induced eighth nerve injury and is unrelated to the diuretic",
        "explanation": "Incorrect. No contrast administration is described, and iodinated contrast is not a recognized cause of acute cochlear or vestibular nerve injury. Attributing the effect elsewhere also misses a well-described and preventable drug toxicity. This would be the correct answer if he had received an ototoxic agent other than the two named."
      },
      {
        "text": "It is caused by carbonic anhydrase inhibition in the inner ear altering endolymph pH, and switching to acetazolamide would be safer",
        "explanation": "Incorrect. Furosemide has only trivial carbonic anhydrase activity, and the mechanism of its ototoxicity is NKCC1 inhibition. Acetazolamide would also be a poor substitute here, since it is a weak diuretic that would not treat pulmonary edema, and it has its own adverse effect profile. This would be the correct answer if the mechanism were pH-dependent and acetazolamide were an equipotent diuretic."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Loop diuretic OTOTOXICITY comes from NKCC1 inhibition in the stria vascularis and depends on PEAK concentration. Give large doses slowly (under about 4 mg/min) or as an infusion, and beware renal failure and concurrent aminoglycosides. Ethacrynic acid is the most ototoxic and is reserved for true sulfa allergy.",
    "lectureSource": "CV30: Diuretic Agents Part 1"
  },
  {
    "id": 35,
    "category": "Cardiac Electrophysiology: Conduction Velocity",
    "questionText": "A 74-year-old man has an ECG showing a QRS duration of 152 ms with a broad monophasic R wave in leads I, aVL, and V6, a deep QS complex in V1, and secondary ST and T wave changes opposite to the QRS. He also has a systolic murmur of aortic stenosis. Which statement best explains the widened QRS and its hemodynamic consequence?",
    "options": [
      {
        "text": "The impulse is conducted normally through both bundle branches, but it is slowed only within the ventricular myocardium by hypertrophy alone",
        "explanation": "Incorrect. Hypertrophy does increase QRS voltage and can modestly prolong the QRS, but it does not produce a duration of 152 ms with the specific morphology of a broad monophasic R in the lateral leads and a QS in V1. That pattern requires a conduction block. This would be the correct answer if the QRS were 105 ms with high voltage and left atrial enlargement."
      },
      {
        "text": "An accessory pathway is pre-exciting the ventricle, producing a delta wave that slurs the upstroke and widens the QRS complex",
        "explanation": "Incorrect. Pre-excitation widens the QRS by fusing an early, slowly conducted accessory pathway wavefront with normal conduction, producing a SHORT PR interval and a slurred delta wave at the onset of the QRS. Neither is described here, and the morphology is that of a bundle branch block. This would be the correct answer if the PR were 90 ms with a delta wave."
      },
      {
        "text": "Hyperkalemia has inactivated sodium channels throughout the ventricle, slowing conduction globally and widening the QRS complex",
        "explanation": "Incorrect. Hyperkalemia does widen the QRS by inactivating fast sodium channels, but it does so diffusely, producing a bizarre non-specific widening rather than an organized left bundle branch block morphology, and it is accompanied by peaked T waves and loss of P waves. This would be the correct answer if the QRS widening were accompanied by tall peaked T waves and absent P waves."
      },
      {
        "text": "The left bundle branch is blocked, so the left ventricle is activated late by slow spread from the right, causing mechanical dyssynchrony",
        "explanation": "Correct. Conduction velocity in the His-Purkinje system is about 2 to 4 m/s, whereas cell-to-cell spread through working myocardium is only about 0.3 to 1 m/s, roughly five to ten times slower. When the left bundle is blocked, the septum and left ventricular free wall can no longer be activated through their own Purkinje network; instead the impulse crosses from the right ventricle and spreads slowly through myocardium, which both prolongs total activation time beyond 120 ms and reorders the sequence. The resulting morphology is a broad monophasic R wave in the leftward leads I, aVL, and V6 with a deep QS in V1, and the discordant ST and T changes are secondary to the abnormal depolarization rather than to ischemia. Mechanically the consequence is dyssynchrony: the septum contracts before the lateral wall, so early septal shortening is wasted against a still-relaxed free wall, which lowers ejection efficiency and raises myocardial oxygen cost. In selected patients with heart failure this is the rationale for cardiac resynchronization therapy."
      },
      {
        "text": "The right bundle branch is blocked, producing late right ventricular activation with an rSR pattern in the right precordial leads V1 and V2",
        "explanation": "Incorrect. Right bundle branch block produces an rSR or rsR pattern in V1 with a wide terminal S wave in I and V6, which is essentially the mirror image of the pattern described. Here V1 shows a QS complex and V6 a broad monophasic R. This would be the correct answer if V1 showed an rSR complex with a slurred S wave in lead I."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Purkinje conduction is 2-4 m/s; myocyte-to-myocyte spread is 0.3-1 m/s. Bundle branch block forces the slow route, so QRS exceeds 120 ms. LBBB gives a broad monophasic R in I, aVL, V6 with QS in V1; RBBB gives rSR in V1 with a wide S in I and V6. LBBB also causes mechanical dyssynchrony, the basis for resynchronization therapy.",
    "lectureSource": "CV23: Cardiac Impulse Conduction and Autonomic Control"
  },
  {
    "id": 36,
    "category": "Vascular Pharmacology: Calcium Channel Blockers",
    "questionText": "A 58-year-old woman with hypertension is prescribed amlodipine, and her blood pressure improves with no change in heart rate or PR interval. Her husband, who has atrial fibrillation, takes verapamil, which controls his ventricular rate and modestly reduces his contractility. Both drugs act on the same channel family. Which of the following best explains the difference in their clinical profiles?",
    "options": [
      {
        "text": "Amlodipine blocks T-type calcium channels while verapamil blocks L-type calcium channels, and only T-type channels are present in vascular smooth muscle",
        "explanation": "Incorrect. Both drugs act on L-type channels; T-type channel blockade is a property of mibefradil and to a degree of some agents used in other contexts. L-type channels are also abundantly present in vascular smooth muscle, where they mediate the calcium entry that supports tone. This would be the correct answer if the two classes targeted different channel subtypes."
      },
      {
        "text": "Amlodipine is an inactive prodrug that requires activation by hepatic enzymes, so no active drug ever reaches cardiac or nodal tissue",
        "explanation": "Incorrect. Amlodipine is not a prodrug, and hepatic handling does not confer tissue selectivity of this kind; a drug in the systemic circulation reaches both vascular and cardiac tissue. Selectivity here is a property of where and how the drug binds the channel. This would be the correct answer if tissue exposure rather than binding determined selectivity."
      },
      {
        "text": "Dihydropyridines favor depolarized vascular smooth muscle channels, while non-dihydropyridines bind use-dependently to fast-cycling nodal tissue",
        "explanation": "Correct. Both classes block the same L-type channel, but they bind at different sites and with different state preferences, and that determines their tissue selectivity. Vascular smooth muscle has a relatively depolarized resting membrane potential of roughly minus 50 to minus 60 mV, so a substantial fraction of its L-type channels sits in the inactivated state; dihydropyridines such as amlodipine and nifedipine bind that state with high affinity, which makes them potent vasodilators with essentially no effect on the sinoatrial node, the atrioventricular node, or contractility at therapeutic doses. Non-dihydropyridines such as verapamil and diltiazem bind at a different site within the pore in a use-dependent manner, so their blockade increases with the frequency of channel opening, which is greatest in the rapidly cycling nodal tissue and myocardium. That gives them their negative chronotropic, dromotropic, and inotropic effects and makes them useful for rate control while contraindicated in decompensated systolic heart failure and dangerous when combined with a beta blocker."
      },
      {
        "text": "Verapamil blocks the funny current in the sinoatrial node, and the loss of that pacemaker depolarization is why it slows the heart rate",
        "explanation": "Incorrect. The funny current is blocked selectively by ivabradine, not by verapamil, which acts on the L-type calcium current that generates phase 0 and contributes to phase 4 in nodal tissue. The endpoint of rate slowing is similar but the target is different. This would be the correct answer if the drug in question were ivabradine."
      },
      {
        "text": "Amlodipine acts by opening potassium channels rather than by blocking calcium channels, which is why it lacks cardiac and nodal effects",
        "explanation": "Incorrect. Amlodipine is a genuine L-type calcium channel blocker; potassium channel opening is the mechanism of minoxidil, diazoxide, and nicorandil. Attributing a different mechanism obscures the state-dependence that actually explains the selectivity. This would be the correct answer if the drug were minoxidil."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Both classes block L-type channels, but DIHYDROPYRIDINES (amlodipine, nifedipine) prefer the depolarized/inactivated channels of vascular smooth muscle and are pure vasodilators, while NON-DIHYDROPYRIDINES (verapamil, diltiazem) bind use-dependently to fast-cycling nodal and myocardial channels, giving rate control and negative inotropy.",
    "lectureSource": "CV25: Vascular Smooth Muscle Cells"
  },
  {
    "id": 37,
    "category": "OMM: Facial Mechanism and Sinus Drainage",
    "questionText": "A 29-year-old man has had three months of daily facial pressure, postnasal drainage, and a sensation of blockage over the left maxilla following an episode of acute sinusitis that was treated with antibiotics. CT shows mucosal thickening without air-fluid levels or obstruction requiring surgery. His osteopathic physician proposes treatment directed at the facial mechanism. Which anatomic and physiologic considerations best support this approach?",
    "options": [
      {
        "text": "The paranasal sinuses drain by active ciliary transport alone, so manual technique cannot influence drainage and treatment should be pharmacologic",
        "explanation": "Incorrect. Mucociliary transport is genuinely the principal clearance mechanism and is the reason the maxillary sinus can drain through an ostium located high on its medial wall against gravity, but it is not the only relevant factor. Ostial patency, mucosal congestion, and venous and lymphatic drainage all contribute, and the osteopathic rationale addresses those. This would be the correct answer if ciliary transport were the sole determinant of sinus clearance."
      },
      {
        "text": "The maxillae are midline bones that flex and extend with the sphenoid, so treatment is directed at the sphenobasilar synchondrosis rather than at the face",
        "explanation": "Incorrect. The maxillae are PAIRED bones and therefore externally and internally rotate with the cranial rhythmic impulse rather than flexing and extending, which is the behavior of midline bones such as the sphenoid, occiput, ethmoid, and vomer. Cranial base treatment may well be part of the plan, but the anatomic premise stated is wrong. This would be the correct answer if the maxillae were midline structures."
      },
      {
        "text": "The facial bones are fused in adults and have no motion, so any benefit must be attributed to placebo",
        "explanation": "Incorrect. Sutural fusion is the central anatomic objection to cranial theory and is a legitimate scientific debate, but it is not the osteopathic premise, which holds that sutures retain small amounts of motion and contain vascular and neural elements. Treatment also aims at soft tissue, venous, and lymphatic effects that do not require bony motion. This would be the correct answer if the question asked for the principal criticism of the cranial model."
      },
      {
        "text": "The maxillae are paired bones that externally rotate with the mechanism, and the maxillary ostium sits high, so drainage depends on patency rather than gravity",
        "explanation": "Correct. The facial mechanism follows the same rules as the rest of the cranium: paired bones, including the maxillae, zygomata, palatines, and nasal bones, externally rotate during the flexion phase and internally rotate during extension, and their motion is driven through their articulations with the sphenoid and ethmoid. The maxillary sinus is anatomically disadvantaged because its ostium lies high on the medial wall, well above the floor of the sinus, so drainage depends on mucociliary transport and on the ostium remaining patent rather than on gravity. Osteopathic treatment of the facial mechanism, including maxillary and zygomatic techniques, effleurage over the sinuses, and cranial and lymphatic approaches, is directed at restoring motion at these articulations and at improving venous and lymphatic drainage from congested mucosa, with the aim of reducing mucosal edema around the ostiomeatal complex. It is an adjunct to, not a substitute for, appropriate medical management, and structural obstruction or acute bacterial infection must be addressed on its own terms."
      },
      {
        "text": "The frontal sinuses drain into the maxillary sinus, so treating the frontal bone alone will resolve maxillary symptoms",
        "explanation": "Incorrect. The frontal sinus drains through the frontonasal duct into the middle meatus, and although the middle meatus is also where the maxillary ostium opens, so the two share a final common pathway at the ostiomeatal complex, the frontal sinus does not drain into the maxillary sinus. Treating only the frontal bone would also ignore the maxillary articulations themselves. This would be the correct answer if the frontal sinus emptied directly into the maxillary antrum."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Facial bones follow cranial rules: PAIRED bones (maxillae, zygomata, palatines) externally rotate in flexion. The maxillary ostium sits HIGH on the medial wall, so drainage depends on mucociliary transport and ostial patency, not gravity. Treatment targets ostiomeatal congestion and venous and lymphatic drainage as an adjunct to medical care.",
    "lectureSource": "CV21: Cranial Strain Patterns, Condylar Decompression and Lifts"
  },
  {
    "id": 38,
    "category": "Cardiology: Afterload",
    "questionText": "A 78-year-old man with severe aortic stenosis has a valve area of 0.7 square centimeters and a mean transvalvular gradient of 46 mmHg. His left ventricle shows marked concentric hypertrophy with a wall thickness of 1.7 cm, an ejection fraction of 60 percent, and an end-diastolic pressure of 24 mmHg. He develops angina despite angiographically normal coronary arteries. Which of the following best explains his angina?",
    "options": [
      {
        "text": "The stenotic valve mechanically obstructs the coronary ostia during systole, so coronary blood flow falls in both the left and right arteries",
        "explanation": "Incorrect. The coronary ostia arise from the sinuses of Valsalva just above the valve leaflets and are not occluded by a stenotic valve; in fact the sinuses create eddies that help keep the ostia patent when the leaflets open. Left ventricular perfusion also occurs predominantly during diastole, when the valve is closed. This would be the correct answer if the ostia were anatomically obstructed, as by an aortic dissection flap."
      },
      {
        "text": "Coronary steal is actively diverting flow away from the subendocardium and into the hypertrophied epicardial layers of the ventricular wall",
        "explanation": "Incorrect. Coronary steal describes flow being diverted from a region distal to a stenosis toward a maximally dilated normal bed, typically in the presence of obstructive coronary disease or a potent vasodilator. This patient has angiographically normal coronaries, and the epicardium is not preferentially vasodilated. This would be the correct answer if he had significant epicardial coronary disease during a dipyridamole stress test."
      },
      {
        "text": "The hypertrophied myocardium has outgrown its capillary supply only in the right ventricle, producing ischemic pain of purely right-sided origin",
        "explanation": "Incorrect. The pressure load in aortic stenosis falls on the LEFT ventricle, and it is the left ventricular subendocardium that becomes ischemic. Right ventricular hypertrophy would follow pulmonary rather than aortic outflow obstruction. This would be the correct answer if the lesion were severe pulmonic stenosis or pulmonary hypertension."
      },
      {
        "text": "Anemia from Heyde syndrome is the sole mechanism here, since acquired von Willebrand deficiency reduces the oxygen-carrying capacity of circulating blood",
        "explanation": "Incorrect. Heyde syndrome is a genuine association in which high shear across a stenotic aortic valve cleaves large von Willebrand multimers and, together with angiodysplasia, causes gastrointestinal bleeding and iron deficiency anemia, which can certainly aggravate angina. However, it is a contributing factor in some patients rather than the fundamental explanation, and no anemia is described here. This would be the correct answer if he presented with melena and a hemoglobin of 7."
      },
      {
        "text": "Chronic afterload raises oxygen demand in the hypertrophied ventricle, while high end-diastolic pressure and short diastole limit subendocardial flow",
        "explanation": "Correct. Afterload is the load the ventricle must overcome to eject, and in aortic stenosis the ventricle must generate systolic pressures far above aortic pressure to drive flow across the narrowed orifice. Concentric hypertrophy develops to normalize wall stress according to the Law of Laplace, but it does so at a cost. Oxygen demand rises because there is more muscle mass and higher developed pressure, while supply falls for two reasons. The left ventricle is perfused almost entirely in diastole, and coronary driving pressure is aortic diastolic pressure minus left ventricular diastolic pressure, so an end-diastolic pressure of 24 mmHg directly erodes that gradient. In addition, capillary density does not keep pace with myocyte hypertrophy, and the subendocardium is the most vulnerable layer because it experiences the highest wall stress and is compressed throughout systole. The result is demand ischemia with angiographically normal coronaries, which together with syncope and heart failure completes the classic symptom triad and marks a sharp fall in survival without valve replacement."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Aortic stenosis causes angina with NORMAL coronaries. Demand rises (more mass, higher pressure), supply falls (subendocardial perfusion pressure equals aortic diastolic minus LV diastolic pressure, and capillary density lags hypertrophy). Angina, syncope, and heart failure are the triad; each marks a steep drop in survival without valve replacement.",
    "lectureSource": "CV29: Cardiac Cycle Part II"
  },
  {
    "id": 39,
    "category": "Clinical Correlate: Anaphylaxis",
    "questionText": "A 23-year-old woman develops urticaria, wheezing, and hypotension of 74/38 mmHg minutes after a bee sting. Her extremities are warm and flushed and her capillary refill is brisk. Laboratory studies later show hemoconcentration with a hematocrit rising from 39 to 51 percent despite no bleeding. Which endothelial mechanism best explains this combination of warm shock with hemoconcentration?",
    "options": [
      {
        "text": "Endothelin-1 release from the endothelium causes intense arteriolar vasoconstriction with secondary mechanical rupture of the capillaries",
        "explanation": "Incorrect. Endothelin-1 is the most potent endogenous vasoconstrictor and its release would produce cold, clamped extremities with a high systemic vascular resistance, which is the opposite of the warm, flushed presentation described. Capillary rupture is also not a feature of anaphylaxis. This would be the correct answer if the patient had cold extremities with severe vasoconstriction, as in cardiogenic shock."
      },
      {
        "text": "Histamine at endothelial H1 receptors releases nitric oxide and contracts the endothelial cell, so vessels dilate and plasma leaks out",
        "explanation": "Correct. Cross-linking of IgE on mast cells triggers degranulation with release of histamine, tryptase, and leukotrienes. Histamine acting on endothelial H1 receptors raises endothelial calcium, which activates eNOS and produces nitric oxide, giving profound arteriolar vasodilation, a low systemic vascular resistance, and the warm, flushed, briskly refilling extremities of distributive shock. The same H1 signaling causes phosphorylation of myosin light chain within the endothelial cell itself, so the cell contracts, cell-cell junctions pull apart, and postcapillary venules become frankly leaky. In the Starling framework, this is a rise in the filtration coefficient with a fall in the reflection coefficient, so plasma including protein escapes into the interstitium. Losing plasma while retaining red cells raises the hematocrit, which is exactly the hemoconcentration described, and as much as a third of the plasma volume can be lost within minutes. This is why epinephrine is first-line, since alpha-1 agonism reverses the vasodilation and tightens the barrier while beta-2 agonism relieves bronchospasm and stabilizes mast cells, and why large-volume fluid resuscitation is also required."
      },
      {
        "text": "Complement-mediated endothelial lysis destroys the capillary wall itself, allowing red cells and plasma to escape the vessel equally",
        "explanation": "Incorrect. If red cells escaped along with plasma, the hematocrit would not rise, yet the vignette documents hemoconcentration, which requires selective plasma loss. IgE-mediated anaphylaxis also does not involve complement-mediated endothelial lysis. This would be the correct answer if the mechanism were a membrane attack complex injury with equal loss of cells and plasma."
      },
      {
        "text": "Bradykinin generation from a deficiency of C1 esterase inhibitor produces angioedema without any mast cell or histamine involvement",
        "explanation": "Incorrect. Hereditary angioedema is bradykinin-mediated and does cause profound tissue swelling, but it characteristically presents WITHOUT urticaria or pruritus, does not respond to epinephrine or antihistamines, and is not triggered by insect sting in this way. The urticaria and wheezing here point clearly to mast cell degranulation. This would be the correct answer if she had recurrent non-pruritic facial and laryngeal swelling with no hives and a family history."
      },
      {
        "text": "Widespread microvascular thrombosis consumes circulating plasma volume within clots and thereby raises the measured hematocrit value",
        "explanation": "Incorrect. Microvascular thrombosis, as in disseminated intravascular coagulation or thrombotic microangiopathy, consumes platelets and fibrinogen and characteristically fragments red cells, LOWERING the hematocrit and producing schistocytes. It also does not cause warm vasodilated shock within minutes. This would be the correct answer if she had schistocytes with thrombocytopenia and a prolonged PT."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Anaphylaxis is DISTRIBUTIVE shock plus a leaky barrier. Histamine at endothelial H1 receptors releases NO (vasodilation, warm shock) and contracts the endothelial cell (gap formation, plasma leak, HEMOCONCENTRATION). Epinephrine reverses both arms; large-volume fluids are still needed.",
    "lectureSource": "CV24: Vascular Endothelial Cells"
  },
  {
    "id": 40,
    "category": "Cardiology: ECG Lead-Artery Correlation",
    "questionText": "A 59-year-old woman presents with chest pain. Her ECG shows ST elevation in leads I, aVL, V5, and V6 with reciprocal ST depression in III and aVF. Troponin is rising. Angiography is being arranged. Which territory is infarcting, which vessel is most likely responsible, and which complication should be anticipated on examination?",
    "options": [
      {
        "text": "Lateral wall; left circumflex or obtuse marginal artery; new mitral regurgitation from papillary muscle dysfunction",
        "explanation": "Correct. The twelve leads are grouped into anatomic territories: II, III, and aVF view the inferior wall supplied by the right coronary artery in most people; V1 and V2 view the septum and V3 and V4 the anterior wall, both supplied by the left anterior descending artery; and I, aVL, V5, and V6 view the lateral wall, supplied by the left circumflex artery and its obtuse marginal branches. Reciprocal depression appears in the leads viewing the opposite surface, which is why the inferior leads show depression in a lateral infarct. The complication to anticipate is acute mitral regurgitation, because the posteromedial papillary muscle has a single blood supply, usually from the posterior descending artery, and the anterolateral papillary muscle is supplied by both the left anterior descending and the circumflex; ischemia of either produces papillary muscle dysfunction with a new holosystolic apical murmur, and frank rupture causes abrupt pulmonary edema and cardiogenic shock. Circumflex occlusions are also the ones most likely to be electrocardiographically silent, so a high index of suspicion is warranted."
      },
      {
        "text": "Anteroseptal wall; left anterior descending artery; ventricular septal rupture with a new harsh holosystolic murmur",
        "explanation": "Incorrect. Anteroseptal infarction produces ST elevation in V1 through V4 rather than in the lateral leads, and although ventricular septal rupture is indeed a feared complication of anterior infarction, the territory identified here does not match the tracing. This would be the correct answer if the ST elevation were in V1 through V4."
      },
      {
        "text": "Inferior wall; right coronary artery; right ventricular infarction with marked preload dependence and hypotension",
        "explanation": "Incorrect. This describes the pattern of ST elevation in II, III, and aVF, which in this tracing shows reciprocal DEPRESSION rather than elevation. Right ventricular infarction and its preload dependence are important, but they accompany inferior rather than lateral infarction. This would be the correct answer if II, III, and aVF showed the elevation."
      },
      {
        "text": "Posterior wall; posterior descending artery; complete heart block from atrioventricular nodal ischemia with bradycardia",
        "explanation": "Incorrect. Posterior infarction is inferred from tall R waves with ST depression in V1 through V3 and confirmed with posterior leads V7 through V9, and atrioventricular nodal ischemia with heart block accompanies inferior and right coronary lesions because that artery supplies the node in most people. Neither matches a lateral ST elevation pattern. This would be the correct answer if V1 through V3 showed prominent R waves with ST depression."
      },
      {
        "text": "Apical wall; distal wraparound left anterior descending artery; free wall rupture with cardiac tamponade and shock",
        "explanation": "Incorrect. A wraparound left anterior descending artery can supply the apex and part of the inferior wall, producing elevation in the anterior leads together with the inferior leads, which is a genuine and worth-knowing pattern. However, it does not produce isolated lateral elevation with inferior reciprocal change. Free wall rupture is a complication of transmural infarction generally rather than of this territory specifically. This would be the correct answer if there were ST elevation in both V2 through V4 and II, III, and aVF."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Lead territories: II, III, aVF equal inferior (RCA); V1-V2 septal and V3-V4 anterior (LAD); I, aVL, V5-V6 lateral (LCx). Reciprocal change appears in the opposite leads. Circumflex infarcts often look electrocardiographically quiet and threaten the papillary muscles, so listen for a new mitral murmur.",
    "lectureSource": "CV27: EKG Introduction"
  },
  {
    "id": 41,
    "category": "Cardiac Electrophysiology: Nodal Action Potential Features",
    "questionText": "Intracellular recordings are made from two cardiac cells. Cell A has a stable resting potential of minus 85 mV, an upstroke velocity of 250 V/s, a prominent notch after the peak, and a long plateau. Cell B has no stable resting potential, drifts spontaneously from minus 60 mV to threshold, has an upstroke velocity of 5 V/s, and lacks both a notch and a plateau. Which statement correctly accounts for the differences?",
    "options": [
      {
        "text": "Cell A is a ventricular myocyte with sodium-driven phase 0 and abundant IK1; Cell B is a nodal cell with calcium-driven phase 0 and no IK1",
        "explanation": "Correct. The two action potential types differ in nearly every phase because they use different currents. In working myocardium the resting potential is stabilized near the potassium equilibrium potential by a high density of inward rectifier IK1 channels, so the cell sits at about minus 85 to minus 90 mV until it is depolarized by a neighbor. At that potential fast sodium channels are fully available, so phase 0 is an enormous, rapid sodium current giving an upstroke of 200 to 300 V/s. Phase 1 is the transient outward potassium current producing the notch, and phase 2 is the plateau balancing L-type calcium influx against potassium efflux. Nodal cells have little or no IK1, so there is no stable resting potential and the funny current can carry the membrane upward in phase 4; their maximum diastolic potential of about minus 60 mV leaves most fast sodium channels inactivated, so phase 0 must be carried by the much slower L-type calcium current, giving an upstroke of only 1 to 10 V/s. There is no phase 1 and no true plateau, and repolarization is by delayed rectifier potassium current."
      },
      {
        "text": "Cell A is a nodal cell and Cell B is a Purkinje fiber, since Purkinje fibers depolarize slowly in order to permit conduction delay",
        "explanation": "Incorrect. Purkinje fibers have the FASTEST upstroke and the fastest conduction in the heart, at 2 to 4 m/s, precisely because they have a large fast sodium current and a large diameter. They also do exhibit latent phase 4 automaticity, but their action potential resembles Cell A rather than Cell B. This would be the correct answer if Purkinje fibers were the slow-conducting tissue."
      },
      {
        "text": "Both cells are ventricular myocytes, and the difference between them reflects only the presence or absence of ongoing sympathetic stimulation",
        "explanation": "Incorrect. Sympathetic stimulation increases contractility and, in nodal tissue, the rate of phase 4 depolarization, but it does not convert a fast sodium-dependent action potential into a slow calcium-dependent one or abolish IK1. The differences described are intrinsic tissue properties. This would be the correct answer if autonomic tone determined the action potential type."
      },
      {
        "text": "Cell B lacks a plateau because it has no L-type calcium channels at all, which is also the reason its upstroke velocity is slow",
        "explanation": "Incorrect. This is self-contradictory. Nodal cells depend on L-type calcium channels for phase 0 itself, so they certainly possess them; what they lack is a large fast sodium current and the transient outward current that produces the notch. This would be the correct answer if nodal phase 0 were carried by some current other than calcium."
      },
      {
        "text": "The whole difference is caused by the different extracellular potassium concentrations bathing the cells at the two recording sites",
        "explanation": "Incorrect. Extracellular potassium is essentially uniform throughout the interstitium of a perfused heart, and while altering it does change the resting potential and sodium channel availability, it cannot account for structural differences such as the absence of a phase 1 notch or the presence of spontaneous phase 4 depolarization. This would be the correct answer if the two recordings were made in different bathing solutions."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: FAST response (atrial, ventricular, Purkinje) means abundant IK1, a stable -85 mV, sodium-driven phase 0 at 200-300 V/s, a phase 1 notch, and a plateau. SLOW response (SA and AV nodes) means little IK1, no stable resting potential, phase 4 drift on If, and CALCIUM-driven phase 0 at 1-10 V/s with no notch or plateau.",
    "lectureSource": "CV22: Cardiac Action Potentials"
  },
  {
    "id": 42,
    "category": "Pharmacology: Potassium-Sparing Diuretics",
    "questionText": "A 47-year-old woman with cirrhosis and ascites on spironolactone develops painful gynecomastia and is switched to amiloride. Her ascites remains controlled and her potassium stays in the normal range. A student asks how two drugs with such different mechanisms produce the same electrolyte effect. Which statement best explains the shared potassium-sparing effect and the key difference?",
    "options": [
      {
        "text": "Both drugs block the mineralocorticoid receptor in principal cells, but amiloride is much more selective for that receptor than spironolactone",
        "explanation": "Incorrect. Amiloride does not bind the mineralocorticoid receptor at all; the selective receptor antagonist is eplerenone. Amiloride works at the channel itself, which is a different molecular target with different implications for efficacy in states of high versus low aldosterone. This would be the correct answer if amiloride were a receptor antagonist."
      },
      {
        "text": "Both cut ENaC-mediated sodium entry and the lumen-negative potential, but spironolactone blocks the receptor and amiloride the pore",
        "explanation": "Correct. Potassium secretion by the principal cell depends on the electrochemical gradient across its apical membrane, and the electrical component is created by electrogenic sodium entry through ENaC, which leaves the lumen negative and favors potassium exit through ROMK. Anything that reduces ENaC-mediated sodium entry therefore reduces potassium secretion, and both drug classes accomplish this by different routes. Spironolactone and eplerenone competitively block the cytoplasmic mineralocorticoid receptor, preventing the transcriptional upregulation of ENaC, ROMK, and the Na-K-ATPase, so their effect depends on aldosterone being present and takes a day or more to develop fully. Amiloride and triamterene block the ENaC pore directly from the luminal side, so they act promptly and work regardless of the aldosterone level, which makes them the agents of choice in Liddle syndrome and in lithium-induced nephrogenic diabetes insipidus, where lithium enters the principal cell through ENaC. In cirrhosis, secondary hyperaldosteronism is central to sodium retention, which is why an aldosterone-directed agent is first-line and amiloride is a reasonable substitute when antiandrogenic effects intervene."
      },
      {
        "text": "Both inhibit the Na-K-ATPase on the basolateral membrane, so less potassium is loaded into the cell for secretion into the lumen",
        "explanation": "Incorrect. Neither drug inhibits the sodium pump; that is the mechanism of digoxin, and pump inhibition throughout the body would produce systemic hyperkalemia and cardiac effects rather than a targeted renal action. Spironolactone does reduce pump EXPRESSION by blocking transcription, but that is not direct enzymatic inhibition. This would be the correct answer if the drugs were cardiac glycosides."
      },
      {
        "text": "Both act on the thick ascending limb, where reduced potassium recycling through the ROMK channel limits urinary potassium loss",
        "explanation": "Incorrect. The thick ascending limb is the site of action of loop diuretics, which INCREASE potassium loss by raising distal flow and sodium delivery. Potassium-sparing agents act in the late distal tubule and collecting duct. This would be the correct answer if the drugs were bumetanide and furosemide."
      },
      {
        "text": "Both are carbonic anhydrase inhibitors whose resulting bicarbonaturia secondarily conserves potassium in the collecting duct",
        "explanation": "Incorrect. Carbonic anhydrase inhibition is the mechanism of acetazolamide, and it actually causes potassium WASTING, because the increased delivery of sodium bicarbonate to the distal nephron enhances distal sodium reabsorption and therefore potassium secretion. This would be the correct answer if the drug were acetazolamide, whose electrolyte profile is the opposite."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Both potassium-sparing classes cut ENaC-driven sodium entry and therefore the lumen-negative potential that drives potassium secretion. MRAs (spironolactone, eplerenone) block the receptor and need aldosterone to be present; ENaC blockers (amiloride, triamterene) plug the channel and work regardless of aldosterone, which is why they suit Liddle syndrome and lithium-induced nephrogenic DI.",
    "lectureSource": "CV31: Diuretic Agents Part 2"
  },
  {
    "id": 43,
    "category": "Vascular Physiology: Myogenic Tone",
    "questionText": "An isolated cerebral arteriole is cannulated and pressurized. When intraluminal pressure is raised stepwise from 40 to 100 mmHg, the vessel first distends briefly and then actively constricts to a diameter smaller than its starting value, and calculated flow remains nearly constant. Removing extracellular calcium or applying a stretch-activated channel blocker abolishes the constriction and the vessel dilates passively. Which mechanism is being demonstrated, and what is its physiologic importance?",
    "options": [
      {
        "text": "Flow-mediated dilation, an endothelium-dependent response to increased shear stress that raises endothelial nitric oxide production and widens the vessel",
        "explanation": "Incorrect. Flow-mediated dilation is a real and important endothelial response, but it produces DILATION rather than constriction and is triggered by shear stress along the endothelial surface rather than by transmural pressure. It is also abolished by endothelial removal or eNOS inhibition rather than by a stretch-activated channel blocker. This would be the correct answer if raising flow at constant pressure had caused the vessel to widen."
      },
      {
        "text": "Reactive hyperemia, in which vasodilator metabolites accumulated during an occlusion cause a transient overshoot in flow when perfusion is restored",
        "explanation": "Incorrect. Reactive hyperemia follows a period of occlusion and reflects the accumulation of adenosine, potassium, carbon dioxide, and hydrogen ion, producing a transient flow overshoot. No occlusion is described here, and the response is a sustained active constriction to a pressure step rather than a transient dilation. This would be the correct answer if flow had surged after releasing a cuff."
      },
      {
        "text": "The myogenic (Bayliss) response, in which stretch opens mechanosensitive cation and voltage-gated calcium channels, so constriction autoregulates flow",
        "explanation": "Correct. The myogenic response is an intrinsic property of vascular smooth muscle that requires neither endothelium nor innervation. Increased transmural pressure stretches the smooth muscle cell, opening mechanosensitive cation channels, and the resulting depolarization opens voltage-gated L-type calcium channels; calcium entry activates calmodulin and myosin light chain kinase, and the vessel constricts. Because resistance varies with the fourth power of radius, a modest constriction offsets a substantial rise in driving pressure, so flow is held nearly constant, which is the essence of autoregulation. This is why cerebral, coronary, and renal blood flow remain stable across a wide range of perfusion pressures, and why the afferent arteriole protects the glomerulus from systemic pressure surges. Its dependence on calcium entry through voltage-gated channels is confirmed here by the loss of the response when extracellular calcium is removed, and it explains why dihydropyridine calcium channel blockers blunt autoregulation."
      },
      {
        "text": "Metabolic autoregulation, in which washout of accumulated vasodilator metabolites from the tissue at high flow allows the vessel to constrict",
        "explanation": "Incorrect. Metabolic autoregulation is a genuine and powerful mechanism, particularly in coronary and skeletal muscle beds, and washout of metabolites at high flow does contribute to autoregulation in vivo. However, this is an isolated cannulated vessel with no perfused tissue producing metabolites, and the response is abolished by a stretch-activated channel blocker, which identifies it as myogenic. This would be the correct answer if the preparation included metabolically active tissue downstream."
      },
      {
        "text": "Sympathetic reflex vasoconstriction mediated by alpha-1 receptors on vascular smooth muscle responding directly to the rise in intraluminal pressure",
        "explanation": "Incorrect. This is an isolated vessel preparation with no intact neural connections, so no reflex arc is possible, and the response persists in denervated and even in isolated preparations, which is precisely how the myogenic mechanism was demonstrated. This would be the correct answer if the experiment were performed in an innervated whole-animal preparation with an intact baroreflex."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The MYOGENIC (Bayliss) response is intrinsic to smooth muscle and needs no endothelium or nerves: stretch opens mechanosensitive channels, the cell depolarizes, voltage-gated calcium enters, and the vessel constricts. It underlies autoregulation of cerebral, coronary, and renal flow and protects the glomerulus from pressure surges.",
    "lectureSource": "CV25: Vascular Smooth Muscle Cells"
  },
  {
    "id": 44,
    "category": "Cardiology: Cardiac Output",
    "questionText": "Two patients each have a cardiac output of 4.2 L/min at a heart rate of 70/min. Patient A has an end-diastolic volume of 100 mL and an end-systolic volume of 40 mL. Patient B has an end-diastolic volume of 240 mL and an end-systolic volume of 180 mL. Which statement best compares them?",
    "options": [
      {
        "text": "Both must have the same ejection fraction, since stroke volume and cardiac output are identical at the same heart rate of 70/min",
        "explanation": "Incorrect. Ejection fraction is stroke volume divided by END-DIASTOLIC VOLUME, not stroke volume alone, so identical stroke volumes with very different end-diastolic volumes give very different ejection fractions. Patient A ejects 60 of 100 mL for 60 percent while Patient B ejects 60 of 240 mL for 25 percent. This would be the correct answer if ejection fraction were determined by stroke volume alone."
      },
      {
        "text": "Patient B has better systolic function, since a larger ventricle generates more contractile force by the Frank-Starling mechanism",
        "explanation": "Incorrect. This misapplies Frank-Starling. In a healthy heart increased filling does augment force, but a chronically dilated ventricle with a large residual volume reflects a depressed, flattened Frank-Starling curve, so Patient B needs an enormous end-diastolic volume to produce the same stroke volume. Dilation here is a marker of failure, not of reserve. This would be the correct answer if a larger chamber always signified greater contractile capacity."
      },
      {
        "text": "Patient A must have valvular regurgitation, since a ventricle that small cannot maintain a normal cardiac output at a rate of only 70/min",
        "explanation": "Incorrect. Patient A's numbers are entirely normal: an end-diastolic volume of 100 mL, a stroke volume of 60 mL, and an ejection fraction of 60 percent describe a healthy ventricle. Regurgitation would in fact inflate the calculated ejection fraction because part of the ejected volume goes backward. This would be the correct answer if Patient A had a large total stroke volume with a small forward output."
      },
      {
        "text": "Both have a stroke volume of 60 mL, but ejection fraction is 60 percent in A and 25 percent in B, with a dilated, high-stress ventricle",
        "explanation": "Correct. Stroke volume is end-diastolic minus end-systolic volume, which is 60 mL in both, so cardiac output is identical at 60 mL times 70/min, or 4.2 L/min. Ejection fraction, however, is stroke volume divided by end-diastolic volume: 60 percent in Patient A and 25 percent in Patient B. Patient B has maintained a normal output only by dilating, adding sarcomeres in series so that a much larger chamber ejects the same absolute volume. That compensation is costly. By the Law of Laplace, wall stress equals pressure times radius divided by twice the wall thickness, so a greatly increased radius raises wall stress, myocardial oxygen demand, and the stimulus to further dilation. This is why ejection fraction, despite being load-dependent and an imperfect index of contractility, remains prognostically powerful, and why therapy in this setting is directed at interrupting remodeling with RAAS blockade, beta blockade, mineralocorticoid antagonism, and SGLT2 inhibition rather than at raising output acutely."
      },
      {
        "text": "Patient B has a higher ejection fraction, since more total blood must pass through the larger ventricle each minute at a rate of 70",
        "explanation": "Incorrect. Cardiac output is identical in the two patients at 4.2 L/min, so the same volume passes through each ventricle per minute; what differs is the FRACTION of the chamber contents ejected per beat. Ejection fraction is a ratio, not a throughput. This would be the correct answer if ejection fraction measured absolute flow rather than a fraction."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: SV = EDV - ESV; EF = SV / EDV; CO = SV x HR. A dilated ventricle can hold cardiac output normal at a terrible ejection fraction, but Laplace makes it pay in wall stress and oxygen demand. EF is load-dependent yet prognostically powerful, and therapy targets remodeling rather than acute output.",
    "lectureSource": "CV29: Cardiac Cycle Part II"
  },
  {
    "id": 45,
    "category": "Cardiac Electrophysiology: Pacemaker Hierarchy",
    "questionText": "An 80-year-old man presents with fatigue and near-syncope. His ECG shows P waves at 88/min marching independently of QRS complexes at 34/min, with a QRS duration of 148 ms and no relationship between the P waves and the QRS complexes. Which of the following best explains the ventricular rate and morphology?",
    "options": [
      {
        "text": "The sinoatrial node has failed, and the atrial rate of 88 represents an ectopic atrial pacemaker rather than sinus rhythm",
        "explanation": "Incorrect. An atrial rate of 88/min with regular P waves is entirely normal sinus activity, so the sinoatrial node is functioning well. The lesion lies below it, in the conduction pathway to the ventricles. This would be the correct answer if the atrial rate were 34 with a junctional escape at the same rate."
      },
      {
        "text": "This is second-degree atrioventricular block of the Mobitz I type, in which the PR interval progressively lengthens before a dropped beat",
        "explanation": "Incorrect. Mobitz I (Wenckebach) block shows a progressively lengthening PR interval culminating in a non-conducted P wave, which means there is still an association between P waves and QRS complexes. Here the vignette specifies complete independence. This would be the correct answer if grouped beating with progressive PR prolongation were present."
      },
      {
        "text": "The QRS is wide from aberrant conduction of supraventricular impulses, and the underlying rhythm is sinus bradycardia at 34/min",
        "explanation": "Incorrect. Sinus bradycardia would show a one-to-one relationship between P waves and QRS complexes at a slow rate, and here the atrial rate is normal at 88 while the ventricles beat independently at 34. Aberrancy also implies conduction from above, which is not occurring. This would be the correct answer if every QRS were preceded by a P wave at a fixed interval."
      },
      {
        "text": "Retrograde conduction from a ventricular focus is capturing the atria, producing the dissociation between P waves and QRS complexes",
        "explanation": "Incorrect. Retrograde ventriculoatrial conduction would make the atrial rate equal to or a fixed fraction of the ventricular rate and would produce inverted P waves following the QRS complexes. Here the atria are faster than the ventricles and are firing independently, so the atria are driven from above. This would be the correct answer if the P waves were inverted and locked to the QRS complexes at a fixed interval."
      },
      {
        "text": "Atrioventricular block is complete, and a slow subsidiary pacemaker below it activates the ventricles outside the His-Purkinje system",
        "explanation": "Correct. Cardiac tissue has a hierarchy of pacemakers, each capable of spontaneous phase 4 depolarization but at progressively slower intrinsic rates: the sinoatrial node at 60 to 100, the atrioventricular junction at 40 to 60, and the His-Purkinje and ventricular tissue at 20 to 40. The fastest pacemaker normally suppresses the others through overdrive suppression, which is why subsidiary pacemakers are silent in health. In complete heart block, no atrial impulse reaches the ventricles, so the atria continue at the sinus rate of 88 while a subsidiary focus below the block escapes to keep the ventricles beating. The escape rate of 34 and the wide QRS of 148 ms together localize the escape focus below the bundle of His, since a junctional escape would be faster at 40 to 60 and narrow. A slow, wide, infranodal escape is unreliable and prone to failure, which is why this patient's near-syncope is ominous and why permanent pacing is indicated."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Pacemaker hierarchy is SA node 60-100, AV junction 40-60, His-Purkinje and ventricle 20-40, with the fastest suppressing the rest (overdrive suppression). In complete heart block, P waves march independently of QRS complexes; a NARROW escape at 40-60 is junctional and relatively stable, a WIDE escape at 20-40 is infranodal and unreliable, so pace it.",
    "lectureSource": "CV23: Cardiac Impulse Conduction and Autonomic Control"
  },
  {
    "id": 46,
    "category": "Cardiology: Ischemia on ECG",
    "questionText": "A 66-year-old man with exertional chest pain undergoes a treadmill stress test. At peak exercise he develops 2.5 mm of horizontal ST depression in leads V4 through V6 and II, III, and aVF, which resolves within four minutes of recovery along with his symptoms. Troponin remains negative. Which of the following best explains the electrocardiographic finding?",
    "options": [
      {
        "text": "Transmural ischemia produces an injury current directed toward the epicardium, which is recorded as ST depression in the overlying leads",
        "explanation": "Incorrect. Transmural ischemia produces ST ELEVATION in the leads overlying the affected wall, because the injury current vector points outward toward the epicardium and therefore toward the recording electrode. ST depression indicates the vector points away from the electrode. This would be the correct answer if the tracing had shown ST elevation."
      },
      {
        "text": "Subendocardial ischemia drives an injury current away from the recording electrodes, with ST depression reversing as demand falls",
        "explanation": "Correct. The subendocardium is the most vulnerable layer of the myocardium: it is compressed throughout systole, so it is perfused almost entirely during diastole, and it sits at the end of the coronary supply where perfusion pressure is lowest. When demand rises during exercise beyond what a stenosed vessel can supply, the subendocardium becomes ischemic first. Ischemic myocardium is partially depolarized at rest and repolarizes abnormally, generating an injury current; because the affected layer lies deep, the resulting vector points from the epicardium toward the endocardium, that is, AWAY from the overlying surface electrodes, which record it as ST depression. Horizontal or downsloping depression of at least 1 mm is the classic positive stress test criterion, and the fact that it appears with demand and resolves promptly in recovery, with a negative troponin, identifies reversible demand ischemia rather than infarction. Widespread depression across multiple territories, as here, suggests multivessel disease."
      },
      {
        "text": "The depression represents a non-ST-elevation myocardial infarction, and serial troponins are unnecessary given the ECG findings",
        "explanation": "Incorrect. Infarction requires myocyte necrosis with detectable troponin release, and this patient's troponin is negative with prompt resolution of both symptoms and ECG change, which defines reversible ischemia rather than infarction. Dismissing serial troponins would also be unsafe reasoning in a patient with ongoing symptoms. This would be the correct answer if troponin were rising with persistent ST depression at rest."
      },
      {
        "text": "The finding reflects a repolarization abnormality from left ventricular hypertrophy, which is why it appears only at high rates",
        "explanation": "Incorrect. The strain pattern of left ventricular hypertrophy does produce ST depression with asymmetric T wave inversion, and it complicates stress test interpretation, but it is present at rest rather than appearing only with exercise, and it does not resolve within minutes of recovery. This would be the correct answer if the ST depression were present on the baseline tracing with high QRS voltage."
      },
      {
        "text": "It is a digitalis effect on repolarization, which characteristically produces downsloping ST depression that worsens with exercise",
        "explanation": "Incorrect. The digitalis effect does produce a distinctive scooped or sagging ST depression, and it can confound stress testing, but no digoxin is mentioned, and the digitalis effect is present at rest rather than appearing only at peak exercise and resolving in recovery. This would be the correct answer if the patient were taking digoxin with a scooped ST segment on the resting tracing."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: SUBENDOCARDIAL ischemia gives ST DEPRESSION (vector points away from the electrode) and does not localize well. TRANSMURAL injury gives ST ELEVATION in the leads over the affected wall (vector points toward the electrode) and does localize. Horizontal or downsloping depression of 1 mm or more at peak exercise is a positive stress test.",
    "lectureSource": "CV27: EKG Introduction"
  },
  {
    "id": 47,
    "category": "Renal Pharmacology: Renal Prostaglandins",
    "questionText": "A 63-year-old man with cirrhosis and tense ascites is on furosemide and spironolactone. He develops a painful gouty toe and begins indomethacin. Within five days his urine output has fallen sharply, his weight has increased by 4 kg, his creatinine has risen from 1.1 to 2.3 mg/dL, and his potassium is 5.8 mEq/L. Which of the following best explains this deterioration?",
    "options": [
      {
        "text": "Cyclooxygenase inhibition removed the prostaglandins maintaining renal perfusion and the diuretic response, and lowered renin and aldosterone",
        "explanation": "Correct. In cirrhosis with ascites the effective circulating volume is low because of splanchnic vasodilation, so renal perfusion depends heavily on locally produced vasodilatory prostaglandins, chiefly PGE2 and PGI2, which dilate the afferent arteriole and oppose the intense angiotensin II and sympathetic vasoconstriction present. An NSAID abolishes that protection, and glomerular filtration falls abruptly. The same prostaglandins mediate part of the natriuretic and venodilator response to loop diuretics, so the diuretic effect is lost and sodium and water are retained, producing the weight gain. Indomethacin further competes with furosemide for the proximal organic anion transporter, reducing its delivery to the tubular lumen. The hyperkalemia has two sources: prostaglandins normally stimulate renin release, so blocking them produces a hyporeninemic hypoaldosteronism, and this compounds the effect of the spironolactone he is already taking. Patients with cirrhosis, heart failure, chronic kidney disease, or volume depletion are precisely the group in whom NSAIDs should be avoided."
      },
      {
        "text": "Indomethacin caused an acute allergic interstitial nephritis, which is the expected mechanism of NSAID nephrotoxicity in a patient with cirrhosis",
        "explanation": "Incorrect. NSAIDs can cause acute interstitial nephritis, sometimes with concurrent minimal change disease, but that typically develops over weeks with pyuria and white cell casts and is far less common than the hemodynamic mechanism. It also would not explain the loss of diuretic effect and weight gain. This would be the correct answer if he had sterile pyuria with white cell casts and eosinophilia."
      },
      {
        "text": "The gout flare itself caused an acute urate nephropathy, with uric acid crystals precipitating in and obstructing the renal tubules",
        "explanation": "Incorrect. Acute urate nephropathy occurs with massive urate loads such as tumor lysis syndrome, not with an ordinary podagra flare, and it would not cause weight gain or loss of diuretic responsiveness. Chronic gouty nephropathy develops over years. This would be the correct answer if he were undergoing induction chemotherapy for a bulky lymphoma."
      },
      {
        "text": "Spironolactone accumulated to toxic levels because indomethacin inhibits its hepatic metabolism, which is already impaired by cirrhosis",
        "explanation": "Incorrect. The clinically important interaction between NSAIDs and potassium-sparing diuretics is pharmacodynamic, through reduced renin and aldosterone plus reduced GFR, not a pharmacokinetic inhibition of spironolactone metabolism. Attributing it to drug levels also fails to explain the fall in urine output and rise in creatinine. This would be the correct answer if the interaction were a documented CYP-mediated one."
      },
      {
        "text": "He has developed spontaneous hepatorenal syndrome, which is unrelated to the NSAID and requires immediate transplant evaluation",
        "explanation": "Incorrect. Hepatorenal syndrome is a genuine and serious concern in this population and shares the underlying physiology of extreme renal vasoconstriction with a low effective circulating volume, but it is a diagnosis of exclusion requiring that precipitants such as nephrotoxic drugs and volume depletion be removed first. Here a clear, reversible precipitant was introduced five days ago. This would be the correct answer if renal failure persisted after the NSAID was stopped and albumin volume expansion was given."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Renal prostaglandins dilate the afferent arteriole precisely when angiotensin II and sympathetic tone are high, and they mediate part of the loop diuretic response and stimulate renin. NSAIDs remove all three, causing acute kidney injury, diuretic resistance, and hyperkalemia. Avoid them in cirrhosis, heart failure, CKD, and volume depletion.",
    "lectureSource": "CV30: Diuretic Agents Part 1"
  },
  {
    "id": 48,
    "category": "Cardiology: Vectors and Voltage",
    "questionText": "A 58-year-old woman with metastatic lung cancer has an ECG showing QRS amplitudes under 5 mm in all limb leads and under 10 mm in all precordial leads, with the QRS amplitude varying cyclically from beat to beat. Her blood pressure is 92/70 mmHg with a 16 mmHg inspiratory fall in systolic pressure, and her neck veins are distended. Which statement best explains both electrocardiographic findings?",
    "options": [
      {
        "text": "The low voltage indicates extensive myocardial infarction with loss of viable muscle, and the beat-to-beat variation reflects alternating conduction",
        "explanation": "Incorrect. Extensive infarction does reduce QRS voltage in the affected leads by removing depolarizing muscle, but it would not produce uniformly low voltage in all twelve leads, and it does not cause cyclic amplitude variation. The hemodynamic findings also point elsewhere. This would be the correct answer if the tracing showed regional Q waves with focal voltage loss."
      },
      {
        "text": "The low voltage is from severe hypothyroidism with myxedema, and the beat-to-beat variation is a recording artifact from patient movement",
        "explanation": "Incorrect. Myxedema is a recognized cause of low voltage, often with bradycardia and a pericardial effusion, so it belongs on the differential, but it would not produce a regular cyclic variation locked to the cardiac cycle, and it does not explain the elevated venous pressure with pulsus paradoxus. This would be the correct answer if the patient had a markedly elevated TSH with delayed relaxation of reflexes and no hemodynamic compromise."
      },
      {
        "text": "Fluid between the heart and the recording electrodes attenuates the voltage, and the heart swinging in the effusion shifts the QRS vector each beat",
        "explanation": "Correct. The surface ECG records the summed instantaneous electrical vector of the myocardium as projected onto each lead axis, and its amplitude depends both on the mass of depolarizing muscle and on the electrical properties of everything between the heart and the electrode. A large pericardial effusion interposes conductive fluid that shunts and attenuates the signal, giving diffuse low voltage in all leads. Electrical alternans arises separately: with enough fluid the heart can swing freely within the pericardial sac, so its anatomic orientation and therefore the projection of its vector onto each lead axis alternate with successive beats, changing the QRS amplitude in a regular cyclic pattern. Together, diffuse low voltage with electrical alternans is highly specific for a large effusion, and the accompanying tamponade physiology is present here as a narrow pulse pressure, elevated jugular venous pressure, and pulsus paradoxus of 16 mmHg. This is a call for urgent echocardiography and pericardiocentesis rather than for further ECG interpretation."
      },
      {
        "text": "Severe obesity and emphysema are attenuating the signal, and the variation reflects respiratory shifts in the position of the heart in the chest",
        "explanation": "Incorrect. Obesity, emphysema, and pleural effusion are all legitimate causes of diffuse low voltage, and respiratory variation in axis does occur, particularly in COPD. However, respiratory swing is gradual and tracks the breathing cycle rather than alternating beat to beat, and neither condition explains the elevated venous pressure with a 16 mmHg pulsus paradoxus. This would be the correct answer if she had hyperinflation with a vertical axis and normal hemodynamics."
      },
      {
        "text": "The findings indicate constrictive pericarditis, in which a thickened calcified pericardium insulates the heart electrically and mechanically",
        "explanation": "Incorrect. Constriction can produce low voltage and shares elevated venous pressure with tamponade, so it is a reasonable consideration, but it characteristically shows a prominent y descent and Kussmaul sign rather than a marked pulsus paradoxus, and it does not permit the free swinging motion required for electrical alternans. This would be the correct answer if she had a calcified pericardium with a pericardial knock and a steep y descent."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The ECG records the summed vector projected onto each lead axis, so anything between heart and electrode attenuates it: effusion, obesity, emphysema, myxedema, amyloid. DIFFUSE LOW VOLTAGE plus ELECTRICAL ALTERNANS (the heart swinging in fluid) means a large pericardial effusion; add tamponade physiology and it is an emergency.",
    "lectureSource": "CV26: Basic ECG - Leads, Vectors and Intervals"
  },
  {
    "id": 49,
    "category": "Clinical Assessment: Flow-Mediated Dilation",
    "questionText": "A 52-year-old man with type 2 diabetes, hypertension, and a 30-pack-year smoking history undergoes brachial artery flow-mediated dilation testing. A cuff is inflated on the forearm for five minutes and then released; his brachial artery diameter increases by only 2 percent, compared with a normal response of more than 8 percent. Sublingual nitroglycerin then produces a 17 percent increase in diameter. Which of the following best interprets these results?",
    "options": [
      {
        "text": "Vascular smooth muscle is unable to relax, indicating fixed structural remodeling of the arterial wall with loss of distensibility",
        "explanation": "Incorrect. The robust 17 percent dilation to nitroglycerin proves that the smooth muscle relaxes normally and that the vessel is not fixed or structurally obstructed. The defect must therefore lie upstream of the smooth muscle. This would be the correct answer if both the flow-mediated and the nitroglycerin responses had been blunted."
      },
      {
        "text": "The test is uninterpretable because nitroglycerin and reactive hyperemia assess the same vasodilator pathway in the brachial artery",
        "explanation": "Incorrect. The two stimuli deliberately probe different points in the same final pathway, which is what makes the paired test informative: reactive hyperemia requires the endothelium to generate nitric oxide, whereas nitroglycerin donates nitric oxide directly to the smooth muscle. Comparing them localizes the lesion. This would be the correct answer if both agents acted on the endothelium."
      },
      {
        "text": "The findings indicate a fixed atherosclerotic stenosis of the brachial artery that mechanically limits any change in diameter",
        "explanation": "Incorrect. A fixed stenosis would limit dilation to any stimulus, yet the vessel widened 17 percent with nitroglycerin. Flow-mediated dilation testing is also performed in the brachial artery precisely because it is rarely the site of clinically significant atherosclerosis, so it serves as a window onto systemic endothelial health. This would be the correct answer if the brachial artery had a documented stenosis on imaging."
      },
      {
        "text": "The endothelium is dysfunctional, since shear stress elicits no nitric oxide though smooth muscle responds to an exogenous donor",
        "explanation": "Correct. Releasing an occluding cuff produces reactive hyperemia, and the surge of flow generates shear stress along the endothelial surface. Shear is sensed by endothelial mechanotransducers and activates endothelial nitric oxide synthase through calcium-dependent and Akt-mediated phosphorylation pathways, so nitric oxide is released and the upstream conduit artery dilates. That entire sequence requires healthy endothelium. Nitroglycerin, by contrast, is an exogenous nitric oxide donor that bypasses the endothelium and acts directly on smooth muscle guanylyl cyclase. A blunted flow-mediated response with a preserved nitroglycerin response therefore localizes the defect precisely to the endothelium. This is endothelial dysfunction, the earliest detectable stage of vascular disease, in which reduced nitric oxide bioavailability from oxidative inactivation, eNOS uncoupling, and reduced expression allows vasoconstriction, platelet adhesion, leukocyte recruitment, and smooth muscle proliferation, and it precedes anatomic atherosclerosis by years. Every one of this patient's risk factors, diabetes, hypertension, and smoking, impairs it through increased reactive oxygen species."
      },
      {
        "text": "The results reflect only a myogenic response of the artery to the cuff pressure rather than any endothelium-dependent process",
        "explanation": "Incorrect. The myogenic response is a smooth muscle reaction to transmural PRESSURE and would produce constriction with increased pressure, whereas flow-mediated dilation is a response to SHEAR STRESS after cuff release and is abolished by endothelial denudation or eNOS inhibition. The two are distinct mechanisms. This would be the correct answer if the vessel had constricted in response to a stepwise pressure increase."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Flow-mediated dilation tests the ENDOTHELIUM (shear stress, eNOS, NO); nitroglycerin tests the SMOOTH MUSCLE (exogenous NO donor). Blunted FMD with preserved nitroglycerin response equals endothelial dysfunction, the earliest reversible stage of vascular disease, driven by oxidative stress from diabetes, hypertension, smoking, and dyslipidemia.",
    "lectureSource": "CV24: Vascular Endothelial Cells"
  },
  {
    "id": 50,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A 44-year-old woman who emigrated from a region where rheumatic fever is common presents with exertional dyspnea. On examination she has a loud S1, a high-pitched sound early in diastole shortly after S2, and a low-pitched rumbling murmur that becomes louder just before S1. She is in sinus rhythm. Six months later she develops atrial fibrillation and the late diastolic accentuation of the murmur disappears. Which explanation best accounts for these findings?",
    "options": [
      {
        "text": "Aortic regurgitation, in which the Austin Flint murmur is produced by the regurgitant jet striking the anterior mitral leaflet in diastole",
        "explanation": "Incorrect. The Austin Flint murmur is a genuine low-pitched apical diastolic rumble that mimics mitral stenosis, but aortic regurgitation is defined by an early diastolic decrescendo murmur at the left sternal border with a wide pulse pressure and bounding pulses, and there is no opening snap or loud S1. This would be the correct answer if she had a decrescendo diastolic murmur with a collapsing pulse."
      },
      {
        "text": "Mitral regurgitation, in which the holosystolic murmur at the apex radiates to the axilla and an S3 reflects the left ventricular volume load",
        "explanation": "Incorrect. Mitral regurgitation produces a HOLOSYSTOLIC murmur, whereas the murmur described occupies diastole, and its associated extra sound is an early diastolic S3 rather than a sharp opening snap. A soft rather than loud S1 is also typical. This would be the correct answer if the murmur occupied systole and radiated to the axilla."
      },
      {
        "text": "Tricuspid stenosis, in which the diastolic rumble increases with inspiration and a prominent a wave appears in the jugular venous pulse",
        "explanation": "Incorrect. Tricuspid stenosis does produce a diastolic rumble with presystolic accentuation, so the timing is right, but it is heard at the left lower sternal border, increases with INSPIRATION as a right-sided lesion, and produces a giant jugular a wave with a slow y descent. The apical location and the associated loud S1 and opening snap point to the mitral valve. This would be the correct answer if the murmur augmented with inspiration and giant a waves were present."
      },
      {
        "text": "Atrial myxoma, in which a tumor plop mimics the opening snap and both the murmur and the symptoms vary with changes in body position",
        "explanation": "Incorrect. A left atrial myxoma is the classic mimic of mitral stenosis and does produce a tumor plop and a diastolic murmur, so it must be excluded by echocardiography. However, its hallmark is variability with body position along with constitutional symptoms and embolic events, and the murmur would not show the specific presystolic accentuation that disappears with loss of atrial contraction. This would be the correct answer if the findings changed markedly when she sat up or lay down."
      },
      {
        "text": "Mitral stenosis, in which loud S1 and opening snap mark a pliable stenotic valve and presystolic accentuation is lost in atrial fibrillation",
        "explanation": "Correct. In mitral stenosis the valve remains partially open at the onset of systole because atrial pressure stays above ventricular pressure late into diastole, so the leaflets are slammed shut from a wide excursion and S1 is loud. The opening snap occurs as the fused but still pliable leaflets are forced open in early diastole, and the interval between S2 and the snap shortens as the stenosis worsens, because a higher left atrial pressure opens the valve sooner. The low-pitched rumble reflects turbulent flow across the narrowed orifice throughout diastole. Its presystolic accentuation is produced by atrial contraction driving a final surge of flow across the valve just before S1, so it depends entirely on organized atrial activity and vanishes when atrial fibrillation develops. That transition is also clinically important, because the stiff, dilated left atrium of mitral stenosis is highly prone to fibrillation, the loss of atrial systole abruptly reduces filling across a fixed obstruction, and the risk of atrial thrombus and systemic embolism rises sharply."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Mitral stenosis gives a loud S1, an opening snap, and a diastolic rumble with presystolic accentuation. A SHORTER S2-to-snap interval means MORE severe stenosis. Presystolic accentuation requires atrial contraction and disappears in atrial fibrillation, which these patients develop readily and which sharply raises embolic risk.",
    "lectureSource": "CV28: Cardiac Cycle Part I"
  }
];

window.Test_Cumulative_CPR_Wk3 = Test_Cumulative_CPR_Wk3;
