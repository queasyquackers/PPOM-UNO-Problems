// CPR Block 1 - Week 4 Cumulative Exam (Lectures CV32-CV41)
// 50 application-level questions, interleaved across:
//   CV32  OMM/Orthopedics: Scoliosis
//   CV33  OMM: Short Leg Syndrome & Heel Lift Therapy
//   CV34  OMM: Balanced Membranous Tension, V-Spread & CV4
//   CV35  Pharmacology: RAS Inhibitors (ACE inhibitors, ARBs, Aliskiren)
//   CV36  Pharmacology: Calcium Channel Blockers & Beta Blockers
//   CV37  Pharmacology: Alpha Blockers, Central Sympatholytics & Vasodilators
//   CV38  Clinical Medicine: Clinical Hypertension
//   CV39  Clinical Medicine: Hypertension Management
//   CV40  Physiology: Shock Pathophysiology & Management
//   CV41  Radiology: The Normal Chest X-Ray
const Test_Cumulative_CPR_Wk4 = [
  {
    "id": 1,
    "category": "Cardiology: Hypertension Staging",
    "questionText": "A 47-year-old man with no medical history is seen for a pre-employment physical. Two readings taken five minutes apart in a properly seated position with an appropriately sized cuff average 134/86 mmHg. He returns two weeks later and averages 136/84 mmHg. He has no diabetes or chronic kidney disease, does not smoke, and his calculated 10-year atherosclerotic cardiovascular disease risk is 6 percent. Which classification and initial management are most appropriate?",
    "options": [
      {
        "text": "Elevated blood pressure; lifestyle modification only",
        "explanation": "Incorrect. The elevated category requires a systolic of 120 to 129 with a diastolic BELOW 80. This patient's diastolic of 84 to 86 exceeds that threshold and places him in a higher category, because classification is assigned by whichever value, systolic or diastolic, is higher. This would be the correct answer if his readings were 126/76."
      },
      {
        "text": "Normal blood pressure; recheck in one year",
        "explanation": "Incorrect. Normal requires both a systolic below 120 and a diastolic below 80. Readings in the mid-130s over mid-80s are clearly abnormal and confer measurably increased cardiovascular risk, so deferring for a year would miss an opportunity for intervention. This would be the correct answer if his pressures averaged 114/72."
      },
      {
        "text": "Stage 2 hypertension; start two antihypertensive agents from different classes",
        "explanation": "Incorrect. Stage 2 requires a systolic of at least 140 or a diastolic of at least 90, and it is the threshold at which initiating two agents simultaneously is recommended because a single drug will rarely achieve control. His values fall below that. This would be the correct answer if he averaged 156/96."
      },
      {
        "text": "Stage 1 hypertension; lifestyle modification with reassessment in three to six months",
        "explanation": "Correct. Under the current classification, normal is below 120 and below 80, elevated is 120 to 129 with diastolic below 80, stage 1 is 130 to 139 or 80 to 89, and stage 2 is 140 or above or 90 or above, with classification determined by whichever number is higher. Two separate visits with an average of 130 to 139 over 80 to 89 establishes stage 1. In stage 1, the decision to start medication depends on cardiovascular risk: pharmacotherapy is recommended when there is established cardiovascular disease, diabetes, chronic kidney disease, or an estimated 10-year risk of at least 10 percent. His risk is 6 percent with no comorbidity, so the appropriate step is intensive lifestyle modification with weight loss, the DASH dietary pattern, sodium restriction, increased physical activity, and moderation of alcohol, followed by reassessment in three to six months."
      },
      {
        "text": "White coat hypertension; obtain ambulatory monitoring before any intervention",
        "explanation": "Incorrect. White coat hypertension is diagnosed when office readings are elevated but out-of-office readings are normal, and it is suspected chiefly when office pressures are high without target organ damage. Ambulatory or home monitoring is a reasonable adjunct, but the diagnosis cannot be assumed, and lifestyle modification is indicated regardless of the result. This would be the correct answer if home readings had already been documented as normal."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Normal is below 120/80, elevated is 120-129 with diastolic under 80, stage 1 is 130-139 or 80-89, stage 2 is 140 or higher or 90 or higher; the HIGHER number classifies. In stage 1, drugs are added only for established CVD, diabetes, CKD, or a 10-year risk of 10 percent or more.",
    "lectureSource": "CV38: Clinical Hypertension",
    "pdfLecture": "CV38",
    "pdfPage": 5,
    "pdfQuote": "pressures, the higher value determines the stage."
  },
  {
    "id": 2,
    "category": "Pharmacology: ACE Inhibitor Adverse Effects",
    "questionText": "A 58-year-old woman started on lisinopril four months ago reports a persistent dry cough that keeps her awake. Chest radiography is normal, she has never smoked, and she has no reflux symptoms or postnasal drainage. She is switched to losartan and the cough resolves within two weeks. Three years later, while on losartan, she presents with sudden lip and tongue swelling without urticaria. Which mechanism best explains both events?",
    "options": [
      {
        "text": "Both are IgE-mediated hypersensitivity reactions directed against a sulfhydryl group shared by the two drug molecules",
        "explanation": "Incorrect. Neither reaction is IgE-mediated, which is why the angioedema is not accompanied by urticaria or pruritus and does not respond to antihistamines or epinephrine the way anaphylaxis does. A sulfhydryl group is present in captopril but not in lisinopril or losartan. This would be the correct answer if she had urticaria, wheezing, and hypotension after the first dose."
      },
      {
        "text": "ACE also degrades bradykinin, so inhibition lets it accumulate and cause cough; ARB angioedema is rarer and bradykinin-independent",
        "explanation": "Correct. Angiotensin-converting enzyme is identical to kininase II, so it performs two jobs: converting angiotensin I to angiotensin II and degrading bradykinin and substance P. Blocking it therefore raises bradykinin and substance P levels in the airway, where they sensitize afferent C fibers and provoke the characteristic dry, tickling cough that affects roughly 5 to 20 percent of patients, is more common in women and in people of Asian descent, may begin weeks to months after initiation, and resolves within one to four weeks of stopping. The same bradykinin accumulation underlies ACE inhibitor angioedema, which is more common in Black patients and can occur years into therapy. ARBs block the AT1 receptor downstream and do not inhibit kininase II, so cough is not a class effect and switching usually resolves it. Angioedema nevertheless occurs with ARBs at a much lower rate, so a history of ACE inhibitor angioedema is a relative contraindication and any recurrence requires stopping the drug permanently."
      },
      {
        "text": "Both drugs cause a dose-dependent release of histamine from mast cells, so both reactions are pharmacologic rather than immunologic",
        "explanation": "Incorrect. Direct mast cell degranulation, as occurs with vancomycin or opioids, produces flushing, urticaria, and pruritus, none of which are described. Bradykinin-mediated angioedema is characteristically non-pruritic and non-urticarial, which is exactly the presentation here. This would be the correct answer if she had developed flushing and hives during a rapid infusion."
      },
      {
        "text": "The cough reflects pulmonary congestion from sodium retention, and the angioedema reflects capillary leak from that same mechanism",
        "explanation": "Incorrect. ACE inhibitors and ARBs promote natriuresis rather than sodium retention, and the vignette specifies a normal chest radiograph, which argues against congestion. A cough from heart failure would also not resolve simply by switching within the same therapeutic area. This would be the correct answer if she had orthopnea with pulmonary edema on imaging."
      },
      {
        "text": "Angiotensin II normally suppresses the cough reflex, so removing that suppression unmasks latent airway hyperreactivity",
        "explanation": "Incorrect. Angiotensin II has no established role in suppressing the cough reflex, and this explanation would predict that ARBs, which block angiotensin II signaling more completely at the AT1 receptor, would cause cough at least as often as ACE inhibitors. In fact they do not, which is the observation that localizes the mechanism to bradykinin. This would be the correct answer if ARBs and ACE inhibitors caused cough at equal rates."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: ACE = kininase II, so inhibiting it raises BRADYKININ, giving dry cough (5-20 percent, resolves in 1-4 weeks after stopping) and non-urticarial ANGIOEDEMA (higher risk in Black patients, can appear years later). ARBs act downstream, so cough is not a class effect, but rare angioedema still occurs.",
    "lectureSource": "CV35: RAS Inhibitors",
    "pdfLecture": "CV35",
    "pdfPage": 38,
    "pdfQuote": "ACEIs / ARBs: Adverse effects"
  },
  {
    "id": 3,
    "category": "Critical Care: Septic Shock",
    "questionText": "A 68-year-old man with pyelonephritis is admitted with a temperature of 39.1 C, blood pressure 78/40 mmHg, heart rate 124/min, and lactate 4.8 mmol/L. His extremities are warm with brisk capillary refill. Pulmonary artery catheterization shows a cardiac index of 4.6 L/min/m2, a systemic vascular resistance of 480 dyn s cm-5, a pulmonary capillary wedge pressure of 8 mmHg, and a mixed venous oxygen saturation of 78 percent. Which statement best explains this hemodynamic profile?",
    "options": [
      {
        "text": "Cardiac output is low and systemic resistance is high, the classic pattern of cardiogenic pump failure",
        "explanation": "Incorrect. That describes cardiogenic shock, in which the cardiac index falls below about 2.2, systemic vascular resistance rises through compensatory vasoconstriction, and wedge pressure is elevated. Every one of those values is the opposite here. This would be the correct answer if the cardiac index were 1.8 with a wedge pressure of 26."
      },
      {
        "text": "The high mixed venous saturation proves that oxygen delivery is more than adequate and that shock is not present",
        "explanation": "Incorrect. This inverts the meaning of the finding. A high mixed venous saturation with a lactate of 4.8 indicates that oxygen is being DELIVERED but not EXTRACTED, which is a marker of severity rather than adequacy. Distinguishing delivery from utilization is central to understanding this form of shock. This would be the correct answer if the lactate were normal and the patient were not hypotensive."
      },
      {
        "text": "Obstruction to ventricular filling has produced equalization of diastolic pressures with a low cardiac output",
        "explanation": "Incorrect. That describes obstructive shock from tamponade or massive pulmonary embolism, in which filling or ejection is mechanically impeded, cardiac output falls, and filling pressures rise. This patient has a high output with a low wedge pressure. This would be the correct answer if he had distended neck veins with pulsus paradoxus and a cardiac index of 1.7."
      },
      {
        "text": "Volume loss has reduced preload, and the resulting low cardiac output has triggered compensatory vasoconstriction",
        "explanation": "Incorrect. This describes hypovolemic shock. The low wedge pressure of 8 does indicate relative underfilling and vasodilation-related hypovolemia is genuinely present in sepsis, but hypovolemic shock is defined by a LOW cardiac output with a HIGH systemic vascular resistance and cold extremities, which contradicts the warm skin, high index, and low resistance here. This would be the correct answer if the cardiac index were 1.9 with a resistance of 1800."
      },
      {
        "text": "Distributive vasodilation lowers resistance while output rises, and impaired extraction raises venous saturation",
        "explanation": "Correct. Sepsis produces the distinctive high-output, low-resistance profile of distributive shock. Endotoxin and inflammatory cytokines induce inducible nitric oxide synthase and open ATP-sensitive potassium channels in vascular smooth muscle, producing profound vasodilation, so systemic vascular resistance falls far below the normal 800 to 1200 and the extremities remain warm and well perfused to the touch. Cardiac output rises reflexively, and capillary leak plus venodilation lower the effective circulating volume, giving the low wedge pressure and making fluid resuscitation the first intervention. The lactate reflects both regional maldistribution of flow and cytopathic hypoxia, in which mitochondrial oxidative phosphorylation is impaired so that tissues cannot use the oxygen delivered to them; because extraction falls, the mixed venous saturation is paradoxically HIGH. Management is early antibiotics with source control, 30 mL/kg of crystalloid, and norepinephrine as the first-line vasopressor."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Shock profiles. HYPOVOLEMIC and CARDIOGENIC mean low output with high SVR (cold). OBSTRUCTIVE means low output with high filling pressures. DISTRIBUTIVE means HIGH output with LOW SVR (warm) and a HIGH mixed venous saturation from impaired extraction, even with a rising lactate.",
    "lectureSource": "CV40: Shock Pathophysiology and Management",
    "pdfLecture": "CV40",
    "pdfPage": 23,
    "pdfQuote": "Distributive shock is due to loss of vascular tone, leading to DECREASED RESISTANCE"
  },
  {
    "id": 4,
    "category": "Radiology: Cobb Method",
    "questionText": "A 12-year-old girl is referred after school screening. A standing posteroanterior radiograph of the full spine shows a right thoracic curve. The most tilted vertebra at the top of the curve is T5 and at the bottom is T11; perpendiculars drawn from lines along the T5 superior endplate and the T11 inferior endplate intersect at 32 degrees. The iliac apophysis is ossified across about 50 percent of the crest. She is premenarchal. Which of the following is the correct interpretation?",
    "options": [
      {
        "text": "A 32-degree structural curve at Risser 2 with substantial growth remaining, a high progression risk warranting bracing",
        "explanation": "Correct. The Cobb angle is measured between perpendiculars to lines drawn along the superior endplate of the most tilted vertebra at the top of the curve and the inferior endplate of the most tilted vertebra at the bottom, and scoliosis is defined as a Cobb angle of at least 10 degrees with vertebral rotation. Curves are named for the side of the CONVEXITY, so a right thoracic curve is the most common pattern in adolescent idiopathic scoliosis. Skeletal maturity is graded by the Risser sign, in which the iliac apophysis ossifies from lateral to medial: Risser 1 is 25 percent, 2 is 50 percent, 3 is 75 percent, 4 is complete, and 5 is fused to the ilium. Risser 2 with premenarchal status means considerable growth remains, and progression risk in adolescent idiopathic scoliosis is driven jointly by curve magnitude and remaining growth. Bracing is generally indicated for curves of about 25 to 45 degrees in a skeletally immature patient, and the BrAIST trial demonstrated that bracing significantly reduces progression to the surgical threshold in a dose-dependent relationship with hours worn."
      },
      {
        "text": "A 32-degree curve at Risser 4, which means she is nearly skeletally mature, so observation alone is appropriate",
        "explanation": "Incorrect. Risser 4 denotes complete ossification of the iliac apophysis without fusion to the ilium, indicating that little growth remains. Fifty percent ossification is Risser 2, and her premenarchal status independently confirms substantial remaining growth. This would be the correct answer if the apophysis were fully ossified and she were two years postmenarchal."
      },
      {
        "text": "A left thoracic curve, which is the typical curve pattern seen in adolescent idiopathic scoliosis at this age",
        "explanation": "Incorrect. Curves are named for the convexity, and the vignette specifies a right thoracic curve, which is indeed the typical idiopathic pattern. A LEFT thoracic curve is the atypical one and should raise concern for an underlying neural axis abnormality such as syringomyelia or a tethered cord, prompting MRI. This would be the correct answer if the naming convention referred to the concavity."
      },
      {
        "text": "The curve does not meet the radiographic definition of scoliosis, because the Cobb angle threshold is 45 degrees, not 32",
        "explanation": "Incorrect. Forty-five degrees is approximately the threshold at which SURGICAL correction is considered in a growing patient, not the definition of the condition. Scoliosis is defined as a Cobb angle of 10 degrees or more with rotation. This would be the correct answer if the diagnostic and surgical thresholds were the same number."
      },
      {
        "text": "The measurement is invalid because Cobb angles must be obtained supine in order to eliminate gravitational effects",
        "explanation": "Incorrect. Cobb angles are measured on a STANDING full-length posteroanterior film precisely because the clinically relevant deformity is the one present under physiologic load; supine films underestimate curve magnitude and are used to assess flexibility rather than for routine measurement. The posteroanterior projection is chosen to reduce breast and thyroid radiation dose. This would be the correct answer if supine imaging were the standard."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Scoliosis is a Cobb angle of 10 degrees or more with rotation, measured on a STANDING PA film and named for the CONVEXITY. Risser grades iliac apophyseal ossification 1 to 5 (25, 50, 75, 100 percent, then fused). Observe below 25 degrees, brace 25-45 degrees while growing, consider surgery above about 45-50. A LEFT thoracic curve warrants MRI.",
    "lectureSource": "CV32: Scoliosis",
    "pdfLecture": "CV32",
    "pdfPage": 51,
    "pdfQuote": "remaining, and is therefore at a greater risk for a scoliotic curve progression"
  },
  {
    "id": 5,
    "category": "Pharmacology: Beta Blocker Selection",
    "questionText": "A 62-year-old man with heart failure with reduced ejection fraction, type 2 diabetes on insulin, and moderate COPD requires a beta blocker. His physician wants an agent with proven mortality benefit in heart failure that will minimize both bronchospasm and masking of hypoglycemia. Which choice and rationale are best?",
    "options": [
      {
        "text": "Propranolol, because its non-selective beta blockade provides the most complete sympathetic inhibition in heart failure",
        "explanation": "Incorrect. Propranolol is non-selective, so it blocks beta-2 receptors in bronchial smooth muscle, risking bronchospasm, and beta-2-mediated hepatic glycogenolysis, which both blunts recovery from hypoglycemia and masks its adrenergic warning symptoms. It also has no mortality evidence in heart failure. This would be the correct answer if the goal were thyroid storm control or essential tremor."
      },
      {
        "text": "Labetalol, because combined alpha and beta blockade lowers afterload most effectively in heart failure patients",
        "explanation": "Incorrect. Labetalol does combine alpha-1 and non-selective beta blockade and is valuable intravenously in hypertensive emergency and in pregnancy, but its beta blockade is non-selective and it lacks the outpatient heart failure mortality data that carvedilol, metoprolol succinate, and bisoprolol possess. This would be the correct answer if the setting were a hypertensive emergency requiring intravenous therapy."
      },
      {
        "text": "Bisoprolol or metoprolol succinate, because both are beta-1 selective with proven mortality benefit in heart failure",
        "explanation": "Correct. Only three beta blockers have demonstrated mortality benefit in heart failure with reduced ejection fraction: carvedilol, metoprolol succinate, and bisoprolol, so the choice must come from that group. Among them, bisoprolol and metoprolol succinate are cardioselective, meaning they preferentially block beta-1 receptors in the heart while sparing beta-2 receptors in bronchial and vascular smooth muscle and in the liver. That selectivity reduces the risk of bronchospasm, which matters in COPD, and preserves beta-2-mediated glycogenolysis and the adrenergic warning symptoms of hypoglycemia, which matters in an insulin-treated diabetic. Selectivity is relative and dose-dependent, so it diminishes at high doses, and the drug should still be titrated slowly from a low dose. Carvedilol is an excellent alternative in many patients but is non-selective and additionally blocks alpha-1, so it is less suited to this particular combination of comorbidities."
      },
      {
        "text": "Atenolol, because it is cardioselective and renally cleared, which makes its effect more predictable in diabetes",
        "explanation": "Incorrect. Atenolol is genuinely beta-1 selective, so the first half of the reasoning is sound, but it has no proven mortality benefit in heart failure and has performed poorly in hypertension outcome trials compared with other agents. Its renal clearance is also a liability rather than an advantage when kidney function declines. This would be the correct answer if any cardioselective agent were acceptable regardless of heart failure evidence."
      },
      {
        "text": "Sotalol, because its class III activity adds antiarrhythmic protection on top of beta blockade in heart failure",
        "explanation": "Incorrect. Sotalol does combine non-selective beta blockade with potassium channel blockade and is used for specific arrhythmias, but it prolongs the QT interval and carries a real risk of torsades de pointes, it is non-selective, and it has no heart failure mortality benefit. Adding it here would introduce risk without addressing the clinical question. This would be the correct answer if the indication were maintenance of sinus rhythm in atrial fibrillation with normal renal function and a normal QT."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Only CARVEDILOL, METOPROLOL SUCCINATE, and BISOPROLOL reduce mortality in HFrEF. Beta-1 SELECTIVE agents (bisoprolol, metoprolol, atenolol) spare bronchial beta-2 and hepatic glycogenolysis, so they are preferred in COPD, asthma, and insulin-treated diabetes. Selectivity is relative and fades at high doses.",
    "lectureSource": "CV36: Calcium Channel Blockers and Beta Blockers",
    "pdfLecture": "CV36",
    "pdfPage": 47,
    "pdfQuote": "Most patients with chronic heart failure"
  },
  {
    "id": 6,
    "category": "Radiology: Technical Adequacy",
    "questionText": "A chest radiograph is presented for interpretation. The medial ends of the clavicles are asymmetric relative to the spinous processes, only eight posterior ribs are visible above the diaphragm, the thoracic vertebral bodies are clearly seen through the cardiac silhouette, and the scapulae overlie the lung fields. The heart appears enlarged with a cardiothoracic ratio of 0.56. Which conclusion is most appropriate?",
    "options": [
      {
        "text": "The film shows true cardiomegaly, since any cardiothoracic ratio above 0.50 is diagnostic regardless of technique",
        "explanation": "Incorrect. The 0.50 threshold is valid only on an adequate posteroanterior film taken at full inspiration, and this film fails on both counts. Applying a ratio to a technically inadequate study is how spurious cardiomegaly is diagnosed. This would be the correct answer if the film were a well-inspired, non-rotated posteroanterior view."
      },
      {
        "text": "The film is rotated, underinspired, and likely anteroposterior, so apparent cardiomegaly cannot be assessed reliably",
        "explanation": "Correct. Technical adequacy is assessed before interpretation, and this film fails several checks. Rotation is judged by the symmetry of the medial clavicular ends about the spinous processes, and asymmetry here confirms rotation, which distorts mediastinal contours and can falsely widen the cardiac silhouette. Adequate inspiration should show 9 to 10 posterior or 5 to 6 anterior ribs above the diaphragm; only 8 indicates underinspiration, which crowds the lung markings, elevates the diaphragm, and makes the heart appear both wider and more horizontal. Scapulae overlying the lung fields suggest the arms were not rotated forward, as is typical of a supine anteroposterior portable film, and in the anteroposterior projection the heart lies farther from the detector so magnification exaggerates its size. The cardiothoracic ratio of 0.50 is valid only on a well-inspired posteroanterior film, so the correct response is to note the limitation rather than to diagnose cardiomegaly."
      },
      {
        "text": "The film is overpenetrated, which is why the vertebral bodies are visible, and this artificially enlarges the heart shadow",
        "explanation": "Incorrect. Seeing the thoracic vertebral bodies faintly through the cardiac silhouette is a marker of ADEQUATE penetration, and overpenetration would make the lung fields appear excessively dark with loss of fine vascular markings. Penetration also does not change apparent heart size. This would be the correct answer if the lungs appeared uniformly black with absent peripheral vessels."
      },
      {
        "text": "The number of visible posterior ribs indicates hyperinflation, which is consistent with long-standing emphysema",
        "explanation": "Incorrect. Hyperinflation is indicated by MORE than the expected number of ribs, typically 11 or more posterior ribs, with flattened diaphragms, an increased retrosternal airspace, and a narrow vertical heart. Eight posterior ribs indicates the opposite, namely a shallow inspiration. This would be the correct answer if 11 or 12 posterior ribs were visible with flat hemidiaphragms."
      },
      {
        "text": "The scapular position indicates that the patient is prone, so left and right must be reversed before interpretation",
        "explanation": "Incorrect. Scapular position reflects arm positioning rather than prone versus supine, and laterality is determined by the radiographic side marker together with anatomic landmarks such as the gastric bubble and cardiac apex. Assuming reversal on this basis would be a serious interpretive error. This would be the correct answer if the side marker were absent and situs were in question."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Check technique first: Rotation (clavicles symmetric about spinous processes), Inspiration (9-10 posterior or 5-6 anterior ribs), Penetration (vertebral bodies faintly visible behind the heart), Projection (PA versus AP). The 0.50 cardiothoracic ratio is only valid on a well-inspired PA film; AP magnifies the heart.",
    "lectureSource": "CV41: The Normal Chest X-Ray",
    "pdfLecture": "CV41",
    "pdfPage": 17,
    "pdfQuote": "thumb but not absolute)"
  },
  {
    "id": 7,
    "category": "Pharmacology: Drug Withdrawal",
    "questionText": "A 54-year-old man on clonidine 0.3 mg three times daily for resistant hypertension is admitted for elective surgery and his home medications are inadvertently held. Thirty hours later he becomes agitated and diaphoretic with a blood pressure of 232/128 mmHg, a heart rate of 126/min, tremor, and a severe headache. Which mechanism explains this presentation, and what is the appropriate immediate management?",
    "options": [
      {
        "text": "The drug is a beta-1 agonist, and its withdrawal causes unopposed alpha stimulation; treat with a beta blocker alone",
        "explanation": "Incorrect. Clonidine is not a beta agonist; it is a central alpha-2 agonist. Giving a beta blocker alone in this setting is in fact hazardous, because blocking beta-2-mediated vasodilation while alpha-1 receptors are being flooded with catecholamines produces unopposed alpha stimulation and can worsen the hypertension. This would be the correct answer if the withdrawal syndrome were mediated by beta receptor supersensitivity."
      },
      {
        "text": "The drug is a direct arteriolar vasodilator, and the rebound reflects reflex tachycardia; give a calcium channel blocker instead",
        "explanation": "Incorrect. Direct arteriolar vasodilators such as hydralazine and minoxidil do cause reflex tachycardia and fluid retention during therapy, which is why they are given with a beta blocker and a diuretic, but they do not produce a catecholaminergic withdrawal syndrome on discontinuation. Clonidine acts centrally rather than on the vessel wall. This would be the correct answer if the withheld drug were minoxidil."
      },
      {
        "text": "The drug depletes presynaptic catecholamine stores, and its withdrawal permits their sudden release; give reserpine",
        "explanation": "Incorrect. Catecholamine depletion by blockade of the vesicular monoamine transporter is the mechanism of reserpine, an older agent now rarely used, and its long duration of action means it does not produce an abrupt rebound. Clonidine works by reducing sympathetic OUTFLOW rather than by depleting stores. This would be the correct answer if the drug in question were reserpine."
      },
      {
        "text": "It is a central alpha-2 agonist, and withdrawal releases suppressed sympathetic outflow; restart it and use labetalol if urgent",
        "explanation": "Correct. Clonidine, guanfacine, and methyldopa are central alpha-2 agonists that stimulate presynaptic autoreceptors in the brainstem vasomotor center, reducing sympathetic outflow to the heart and vasculature and thereby lowering heart rate, contractility, and peripheral resistance without directly acting on the vessel. During chronic therapy the sympathetic system adapts with receptor upregulation and continued catecholamine synthesis, so abrupt cessation, particularly of higher doses or the short-acting oral formulation, releases the brake and produces a surge of sympathetic activity within 18 to 36 hours. The syndrome resembles a pheochromocytoma crisis with severe rebound hypertension, tachycardia, headache, tremor, diaphoresis, and anxiety. The treatment is to restart the drug, and when acute control is required to use an agent that blocks alpha as well as beta receptors, such as labetalol or phentolamine with a beta blocker; a beta blocker alone is contraindicated because unopposed alpha stimulation worsens the crisis. Prevention means tapering clonidine and using the transdermal patch perioperatively."
      },
      {
        "text": "The drug is an alpha-1 antagonist, and its withdrawal produces first-dose-like syncope rather than a hypertensive rebound",
        "explanation": "Incorrect. Alpha-1 antagonists such as prazosin, doxazosin, and terazosin cause first-DOSE orthostatic hypotension and syncope at initiation rather than on withdrawal, and their discontinuation produces a gradual return of pressure rather than a hypertensive crisis. The presentation here is hypertensive, not hypotensive. This would be the correct answer if he had fainted after his first dose of doxazosin."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Clonidine is a CENTRAL alpha-2 agonist that turns sympathetic outflow down. Stopping it abruptly causes rebound hypertension with tachycardia, tremor, and diaphoresis within 18-36 hours. Restart the drug; if urgent, use labetalol or phentolamine. NEVER a beta blocker alone, since unopposed alpha stimulation worsens it.",
    "lectureSource": "CV37: Alpha Blockers, Central Sympatholytics and Vasodilators",
    "pdfLecture": "CV37",
    "pdfPage": 21,
    "pdfQuote": "Alpha-2 Agonists: Common and potentially serious adverse"
  },
  {
    "id": 8,
    "category": "Cardiology: Lifestyle Modification",
    "questionText": "A 51-year-old woman with newly diagnosed stage 1 hypertension at 138/88 mmHg has a body mass index of 32, drinks three glasses of wine most evenings, eats a typical Western diet, and exercises rarely. She wants to avoid medication. Her physician reviews the expected systolic blood pressure reduction from each available lifestyle change so she can prioritize. Which single intervention offers the largest expected reduction in this patient?",
    "options": [
      {
        "text": "Weight loss, which yields roughly 1 mmHg of systolic reduction per kilogram lost, the largest effect in obesity",
        "explanation": "Correct. Among lifestyle interventions the magnitude of benefit differs substantially, and weight loss has the greatest potential in an overweight or obese patient because the effect scales with the amount lost, at approximately 1 mmHg of systolic reduction per kilogram, with a typical achievable reduction of about 5 mmHg for a 5 kg loss and considerably more with sustained larger losses. For comparison, the DASH dietary pattern yields roughly 11 mmHg in hypertensive patients, sodium reduction to 1500 mg daily about 5 to 6 mmHg, increased aerobic activity about 5 to 8 mmHg, potassium supplementation through diet about 4 to 5 mmHg, and moderation of alcohol to no more than one drink daily for women about 4 mmHg. These effects are partly additive, so combining them can approach the effect of a single antihypertensive agent, which is why a three to six month trial of intensive lifestyle change is reasonable in low-risk stage 1 hypertension. This patient has room for benefit in every category, and her alcohol intake also exceeds the recommended limit."
      },
      {
        "text": "Sodium restriction alone, since it is the single most powerful blood pressure intervention in every patient",
        "explanation": "Incorrect. Sodium restriction is genuinely valuable and yields about 5 to 6 mmHg, with more in salt-sensitive individuals such as older adults, Black patients, and those with chronic kidney disease. However, it is not the largest effect available, and its magnitude is smaller than what substantial weight loss or the full DASH pattern can achieve. This would be the correct answer if she were at a normal weight with a markedly salt-sensitive phenotype."
      },
      {
        "text": "Complete alcohol abstinence, which by itself reverses alcohol-induced hypertension entirely in this patient",
        "explanation": "Incorrect. Reducing alcohol to no more than one standard drink daily for women is appropriate and yields roughly 4 mmHg, and her current intake exceeds that limit, so this should be part of the plan. But complete abstinence is not required for the blood pressure benefit and the effect size is modest compared with weight loss. This would be the correct answer if her intake were far higher and clearly the dominant contributor."
      },
      {
        "text": "Calcium and magnesium supplementation, which has the strongest evidence base among the available dietary interventions",
        "explanation": "Incorrect. Evidence for calcium and magnesium supplements in lowering blood pressure is weak and inconsistent, and they are not recommended as a blood pressure intervention. The dietary mineral with meaningful supporting data is POTASSIUM, and it is best obtained through food rather than supplements, and must be used cautiously in chronic kidney disease. This would be the correct answer if calcium and magnesium had DASH-level evidence."
      },
      {
        "text": "Isometric resistance training, since it lowers systolic pressure more effectively than aerobic exercise does",
        "explanation": "Incorrect. Isometric handgrip training does have some supporting evidence and dynamic resistance training is a reasonable adjunct, but aerobic exercise remains the best established form for blood pressure reduction at roughly 5 to 8 mmHg, and neither exceeds what weight loss can achieve in an obese patient. This would be the correct answer if resistance training had the largest documented effect size."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Approximate systolic reductions: DASH diet about 11 mmHg, weight loss about 1 mmHg per kg, aerobic exercise 5-8, sodium restriction 5-6, dietary potassium 4-5, alcohol moderation about 4. Effects are largely additive, so combined lifestyle change can rival one drug in low-risk stage 1 hypertension.",
    "lectureSource": "CV39: Hypertension Management",
    "pdfLecture": "CV39",
    "pdfPage": 10,
    "pdfQuote": "Decline of 0.5 to 2 mmHg for every 1 kg of weight loss"
  },
  {
    "id": 9,
    "category": "OMM: CV4",
    "questionText": "A physician places her thenar eminences on the occipital squama medial to the occipitomastoid sutures, cradling the head, and resists the flexion phase of the cranial rhythmic impulse while following extension. After a period the rhythm becomes progressively shallower and then ceases entirely; the patient's respiration deepens and she becomes flushed and drowsy. The rhythm then resumes with greater amplitude. Which statement best describes what has occurred?",
    "options": [
      {
        "text": "The technique has produced a vertical strain by displacing the basiocciput superiorly, and the pause reflects tissue injury",
        "explanation": "Incorrect. A vertical strain is a non-physiologic pattern of displacement between the basisphenoid and basiocciput, usually traumatic, and inducing one would be an adverse event rather than the intended effect. The CV4 is applied to the occipital squama and exaggerates extension without displacing the cranial base vertically. This would be the correct answer if the contact and force vector had been applied so as to shift the basiocciput superiorly."
      },
      {
        "text": "The technique has induced a lateral strain at the sphenobasilar synchondrosis, which is why the amplitude increased afterward",
        "explanation": "Incorrect. Lateral strain involves side-to-side translation of the sphenoid and occiput in the same direction about two vertical axes and would be an abnormal pattern to induce. The CV4 works in the flexion-extension plane, not laterally. This would be the correct answer if the operator had applied a shearing force in the transverse plane."
      },
      {
        "text": "This is a fourth ventricle compression producing a still point, contraindicated in acute head trauma and raised intracranial pressure",
        "explanation": "Correct. The CV4 exaggerates the extension phase by resisting flexion at the lateral angles of the occiput, which is thought to compress the fourth ventricle and alter cerebrospinal fluid fluctuation. Continued for long enough this produces a still point, a temporary cessation of the cranial rhythmic impulse, which is regarded as the therapeutic event. It is classically accompanied by autonomic changes including deepened respiration, a brief apneic pause, flushing or sweating, drowsiness, and sometimes a transient increase in symptoms, and when the rhythm resumes it typically does so with greater amplitude and better symmetry. The technique is used to influence fluid dynamics broadly, with reported applications in fever, sinus congestion, dysmenorrhea, hypertonicity, and to prepare the mechanism before more specific treatment. Because it deliberately alters cerebrospinal fluid dynamics, it must not be used with acute intracranial hemorrhage, raised intracranial pressure, acute skull fracture, cerebrospinal fluid leak, acute stroke, or acute intracranial infection."
      },
      {
        "text": "The cessation of the rhythm indicates that the operator has fatigued the patient's respiratory drive and the technique should be abandoned",
        "explanation": "Incorrect. The still point is the intended endpoint of the technique rather than an adverse event, and the accompanying autonomic phenomena including a deepened respiratory pattern are expected. Abandoning the technique at the still point would stop precisely at the moment of intended effect. This would be the correct answer if the patient had developed genuine respiratory distress or neurologic change."
      },
      {
        "text": "The operator has performed a V-spread, in which the still point is used to disengage a cranial suture that has become restricted",
        "explanation": "Incorrect. The V-spread is a distinct technique in which two fingers straddle a restricted suture while the opposite hand directs a fluid impulse across the head toward that suture, and it is aimed at a specific sutural restriction rather than at inducing a global still point. The contact described here, thenar eminences on the occipital squama, is the CV4. This would be the correct answer if fingers had been placed in a V around a specific suture with a contralateral fluid drive."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The CV4 uses thenar contact on the occipital squama MEDIAL to the occipitomastoid sutures to resist flexion and exaggerate extension, producing a STILL POINT. Expect deepened respiration, a pause, flushing, and drowsiness, then a fuller rhythm. Contraindicated in acute intracranial bleed, raised ICP, skull fracture, CSF leak, stroke, and intracranial infection.",
    "lectureSource": "CV34: Balanced Membranous Tension, V-Spread and CV4",
    "pdfLecture": "CV34",
    "pdfPage": 24,
    "pdfQuote": "3. The physician places the thenar eminences posteromedial to the patient's"
  },
  {
    "id": 10,
    "category": "OMM: Heilig's Formula",
    "questionText": "A 58-year-old woman has chronic right-sided low back pain. Standing postural radiographs show a femoral head height difference of 12 mm with the left side lower, a sacral base unleveling to the left, and a lumbar convexity to the left. She has had this asymmetry for decades, has moderate lumbar degenerative change, and has not previously had lift therapy. Applying Heilig's formula, what is the appropriate initial heel lift and rationale?",
    "options": [
      {
        "text": "An immediate 12 mm lift on the left, since full correction of the measured discrepancy is the fastest way to level the sacral base",
        "explanation": "Incorrect. Full immediate correction is poorly tolerated, particularly in a long-standing curve with degenerative change, because the compensatory soft tissue and articular adaptations have taken years to develop and cannot reverse abruptly. Overcorrecting typically provokes a marked increase in pain. This would be the correct answer if the discrepancy were acute, as after a recent fracture in a young patient."
      },
      {
        "text": "No lift at all, since leg length discrepancies of under 20 mm are never clinically significant and never require correction",
        "explanation": "Incorrect. Discrepancies as small as 5 mm can be clinically meaningful when they produce sacral base unleveling with a compensatory scoliosis and symptomatic somatic dysfunction, and the osteopathic literature has long emphasized small discrepancies in chronic low back pain. A 20 mm threshold is far too permissive. This would be the correct answer if only large discrepancies produced symptoms."
      },
      {
        "text": "A lift is contraindicated, since degenerative change makes the lumbar curve structural and unresponsive to correction with a lift",
        "explanation": "Incorrect. Degenerative change modifies the pace of treatment rather than prohibiting it, and it is one of the factors in Heilig's formula precisely because it calls for a smaller starting lift and slower progression. Patients with degenerative change are often the ones who benefit most from unloading an unlevel base. This would be the correct answer if the patient had a fixed, fused structural deformity with no flexibility."
      },
      {
        "text": "A 12 mm lift on the right, since the lift belongs under the side of the lumbar convexity rather than under the low femoral head",
        "explanation": "Incorrect. Both the amount and the side are wrong. The lift is placed under the SHORT leg, which is the side of the lower femoral head and lower sacral base, in order to level the sacral base; the lumbar convexity points AWAY from the low side as a compensation. Placing the lift on the convex side would worsen the unleveling. This would be the correct answer if the goal were to exaggerate rather than correct the curve."
      },
      {
        "text": "A 4 mm lift on the left, dividing the discrepancy by factors for duration, age, and degeneration, then increasing every two weeks",
        "explanation": "Correct. Heilig's formula individualizes the starting lift by dividing the measured discrepancy by the sum of factors that reflect how difficult the compensation will be to reverse: duration of the discrepancy, the patient's age, and the degree of degenerative change, each scored so that longer duration, older age, and more degeneration produce a smaller and therefore safer initial lift. For a long-standing discrepancy in an older patient with degenerative change, that yields roughly a quarter to a third of the total, so about 3 to 4 mm here. The lift is placed under the SHORT side, which is the left, and is increased by about 1.5 to 2 mm every two weeks as tolerated, with reassessment of symptoms and sacral base level at each increment. The goal is to level the sacral base and reduce the compensatory curve, not necessarily to equalize leg lengths, and full correction is often unnecessary. Somatic dysfunction should be treated before and during lift therapy so the structure can adapt."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Heilig's formula sizes the STARTING lift by dividing the discrepancy by factors for duration, age, and degeneration, so chronic, older, and degenerative patients start smaller. Place it under the SHORT side, add about 1.5-2 mm every two weeks, and aim to level the SACRAL BASE rather than to equalize leg length. Treat somatic dysfunction alongside.",
    "lectureSource": "CV33: Short Leg Syndrome and Heel Lift Therapy",
    "pdfLecture": "CV33",
    "pdfPage": 30,
    "pdfQuote": "Sacral Base Unleveling (SBU)"
  },
  {
    "id": 11,
    "category": "Cardiology: Secondary Hypertension",
    "questionText": "A 34-year-old woman is referred for hypertension of 168/104 mmHg despite three agents including a diuretic at full doses. She has a serum potassium of 3.0 mEq/L on no potassium-wasting change in regimen, a bicarbonate of 30 mEq/L, and no edema. Her plasma aldosterone concentration is 26 ng/dL with a plasma renin activity of 0.3 ng/mL/hr. Which of the following best explains her hypertension?",
    "options": [
      {
        "text": "Renovascular hypertension from fibromuscular dysplasia, which is common in young women with resistant hypertension",
        "explanation": "Incorrect. Fibromuscular dysplasia is indeed the leading cause of renovascular hypertension in young women and should be considered, but it produces SECONDARY hyperaldosteronism driven by a high renin, so plasma renin activity would be elevated rather than suppressed. This patient's renin is 0.3, which is suppressed. This would be the correct answer if her renin activity were 6.0 with a supportive abdominal bruit."
      },
      {
        "text": "Pheochromocytoma, given the resistant hypertension despite three agents at full dose in a patient this young",
        "explanation": "Incorrect. Pheochromocytoma does cause resistant hypertension in younger patients and belongs on the differential, but it typically presents with paroxysmal headache, palpitations, and diaphoresis, and it does not produce hypokalemic metabolic alkalosis with a suppressed renin and a high aldosterone. Screening would be plasma free metanephrines. This would be the correct answer if she had episodic spells with elevated metanephrines."
      },
      {
        "text": "Primary hyperaldosteronism, with elevated aldosterone, suppressed renin, and a high aldosterone-to-renin ratio",
        "explanation": "Correct. Primary hyperaldosteronism is the most common identifiable cause of secondary hypertension, accounting for perhaps 5 to 10 percent of hypertensive patients and a higher fraction of resistant cases, and it is substantially underdiagnosed. Autonomous aldosterone production causes distal sodium reabsorption with potassium and hydrogen secretion, producing hypertension with hypokalemia and metabolic alkalosis, though normokalemia is actually more common than the classic picture. Because the sodium retention raises blood pressure and volume, renin is suppressed through negative feedback, so the diagnostic screening test is the aldosterone-to-renin ratio: here 26 divided by 0.3 is about 87, far above the usual threshold of 20 to 30 with an aldosterone above 15. Aldosterone escape through pressure natriuresis and natriuretic peptides limits volume expansion, which is why there is no edema. Confirmatory testing with a saline suppression or captopril challenge is followed by adrenal imaging and, when surgery is contemplated, adrenal venous sampling to distinguish a unilateral adenoma from bilateral hyperplasia."
      },
      {
        "text": "Cushing syndrome, in which cortisol excess produces hypertension along with a hypokalemic metabolic alkalosis",
        "explanation": "Incorrect. Cortisol can activate the mineralocorticoid receptor and severe hypercortisolism, especially from ectopic ACTH, does cause hypokalemic alkalosis with hypertension, so the electrolyte pattern overlaps. However, aldosterone would be suppressed rather than elevated, and the patient would show cushingoid features such as central obesity, striae, proximal myopathy, and easy bruising. This would be the correct answer if she had a high 24-hour urinary free cortisol with typical physical findings."
      },
      {
        "text": "Liddle syndrome, a gain-of-function ENaC mutation producing hypertension with the same electrolyte picture",
        "explanation": "Incorrect. Liddle syndrome does cause early-onset hypertension with hypokalemic metabolic alkalosis and suppressed renin, so it is a genuine mimic, but the distinguishing feature is that ALDOSTERONE IS ALSO SUPPRESSED, because the channel is constitutively active independent of hormonal stimulation. Treatment is amiloride rather than an aldosterone antagonist. This would be the correct answer if both renin and aldosterone were low with a positive family history."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Screen resistant hypertension, hypertension with hypokalemia, or an adrenal incidentaloma with the ALDOSTERONE-TO-RENIN RATIO. Primary hyperaldosteronism gives HIGH aldosterone with SUPPRESSED renin; renovascular disease gives both high; Liddle syndrome and Cushing give both low. Most patients are normokalemic, so do not wait for hypokalemia to screen.",
    "lectureSource": "CV38: Clinical Hypertension",
    "pdfLecture": "CV38",
    "pdfPage": 13,
    "pdfQuote": "Types of Hypertension: Secondary HTN"
  },
  {
    "id": 12,
    "category": "Pharmacology: CCB Contraindications",
    "questionText": "A 72-year-old man with heart failure with reduced ejection fraction of 28 percent, atrial fibrillation with a rate of 118/min, and a blood pressure of 104/62 mmHg is already on metoprolol succinate. A covering physician adds verapamil for better rate control. Two hours later he is hypotensive at 76/44 mmHg with a heart rate of 38/min and worsening pulmonary edema. Which explanation is most accurate?",
    "options": [
      {
        "text": "Verapamil caused reflex tachycardia that increased myocardial oxygen demand, precipitating ischemia",
        "explanation": "Incorrect. Reflex tachycardia is a feature of the DIHYDROPYRIDINES, particularly short-acting nifedipine, which vasodilate powerfully and trigger baroreflex-mediated sympathetic activation. Verapamil directly slows the sinoatrial and atrioventricular nodes, which is why the patient became bradycardic rather than tachycardic. This would be the correct answer if immediate-release nifedipine had been given."
      },
      {
        "text": "The combination caused an accumulation of metoprolol because verapamil inhibits its renal clearance",
        "explanation": "Incorrect. Metoprolol is metabolized by CYP2D6 rather than renally cleared, and although verapamil is a CYP3A4 inhibitor with real potential for pharmacokinetic interactions, the danger in this combination is primarily PHARMACODYNAMIC: two drugs with additive negative chronotropic, dromotropic, and inotropic effects. This would be the correct answer if the interaction depended solely on plasma drug levels."
      },
      {
        "text": "Verapamil precipitated a hypertensive rebound that stunned the myocardium",
        "explanation": "Incorrect. The patient became profoundly HYPOtensive, not hypertensive, and verapamil does not cause rebound hypertension; that phenomenon belongs to abrupt withdrawal of clonidine or of a beta blocker. This would be the correct answer if his pressure had risen sharply after the drug."
      },
      {
        "text": "Verapamil is contraindicated here because it is a potent arterial vasodilator without cardiac effects, and vasodilation alone caused the collapse",
        "explanation": "Incorrect. This describes a dihydropyridine profile rather than verapamil, which is comparatively less vasoselective and considerably more cardiodepressant. Pure vasodilation would also not produce a heart rate of 38. This would be the correct answer if the agent added had been amlodipine, though even that should be used cautiously here."
      },
      {
        "text": "Non-dihydropyridines are negatively inotropic and dromotropic, so verapamil is contraindicated in systolic heart failure and dangerous when added to a beta blocker",
        "explanation": "Correct. Verapamil and diltiazem block L-type calcium channels in a use-dependent way, so their effect is greatest in the rapidly cycling tissue of the sinoatrial node, atrioventricular node, and working myocardium. That gives them useful rate control in atrial fibrillation but also makes them negatively inotropic, which is why they are contraindicated in heart failure with reduced ejection fraction; verapamil is the more cardiodepressant of the two. Adding one to a beta blocker compounds the problem, since both slow the sinoatrial node, both impair atrioventricular conduction, and both reduce contractility, so the combination risks severe bradycardia, high-grade heart block, hypotension, and decompensated heart failure. The correct rate-control strategy in this patient is to optimize the beta blocker and add digoxin, which slows atrioventricular conduction through vagal enhancement while being mildly positively inotropic, and to address the underlying decompensation. Amlodipine and felodipine are the calcium channel blockers considered hemodynamically neutral enough to use in heart failure when another indication exists."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: VERAPAMIL and DILTIAZEM are negatively inotropic and dromotropic, so they are contraindicated in HFrEF and hazardous with a beta blocker (bradycardia, AV block, hypotension). DIHYDROPYRIDINES are vasoselective and cause reflex tachycardia and ankle edema. Amlodipine and felodipine are the ones considered safe in heart failure.",
    "lectureSource": "CV36: Calcium Channel Blockers and Beta Blockers",
    "pdfLecture": "CV36",
    "pdfPage": 23,
    "pdfQuote": "Verapamil / Diltiazem Contraindications"
  },
  {
    "id": 13,
    "category": "Cardiology: Cardiogenic Shock",
    "questionText": "A 64-year-old man presents 10 hours after the onset of chest pain with an anterior STEMI. He is cool and mottled with a blood pressure of 82/58 mmHg, a heart rate of 112/min, crackles to both mid lung fields, and a urine output of 12 mL/hr. Bedside measurements show a cardiac index of 1.7 L/min/m2, a pulmonary capillary wedge pressure of 27 mmHg, and a systemic vascular resistance of 1900 dyn s cm-5. Which intervention is most appropriate and why?",
    "options": [
      {
        "text": "A 2-liter crystalloid bolus, since the low cardiac index with the tachycardia indicates inadequate preload and hypovolemic shock",
        "explanation": "Incorrect. His wedge pressure of 27 mmHg is markedly elevated, meaning the left ventricle is already overfilled and the problem is pump failure rather than inadequate preload. Additional volume would worsen pulmonary edema without improving output, since he is far out on a flattened Frank-Starling curve. This would be the correct answer if his wedge pressure were 6 with clear lung fields."
      },
      {
        "text": "Urgent revascularization with inotropic and mechanical circulatory support as a bridge, since contractile myocardium is lost",
        "explanation": "Correct. The profile here is diagnostic of cardiogenic shock: a cardiac index below 2.2, an elevated wedge pressure above 18, and a high systemic vascular resistance from compensatory vasoconstriction, producing cold, clamped extremities and oliguria. The primary lesion is loss of functioning myocardium, so the intervention that changes outcome is prompt restoration of coronary flow, which for a STEMI complicated by shock means immediate percutaneous coronary intervention, with the SHOCK trial establishing that early revascularization improves survival even when presentation is delayed. Supportive measures buy time rather than treat the cause: an inotrope such as dobutamine or milrinone raises contractility at the cost of oxygen demand and arrhythmia, norepinephrine is preferred if perfusion pressure is inadequate, and mechanical support with an intra-aortic balloon pump or a percutaneous ventricular assist device may be used. Cautious afterload reduction can help once perfusion pressure allows, since the high systemic vascular resistance is itself burdening the failing ventricle."
      },
      {
        "text": "High-dose diuretic alone, since the elevated wedge pressure with crackles indicates volume overload as the primary problem",
        "explanation": "Incorrect. Diuresis is a reasonable adjunct for pulmonary congestion once perfusion is stabilized, but it does not address the failing pump and can dangerously reduce preload in a patient who is already hypotensive with poor organ perfusion. The elevated wedge pressure here reflects a failing ventricle rather than excess total body volume. This would be the correct answer if he were normotensive and well perfused with isolated congestion."
      },
      {
        "text": "A pure vasoconstrictor such as phenylephrine, to raise the blood pressure toward a normal value and restore organ perfusion",
        "explanation": "Incorrect. His systemic vascular resistance is already 1900, well above normal, so adding pure alpha-1 agonism would further increase afterload against a failing ventricle, reducing stroke volume even as the measured pressure rises. Perfusion, not the number on the monitor, is the goal. This would be the correct answer if he had distributive shock with a resistance of 400."
      },
      {
        "text": "Immediate thrombolysis for a presumed massive pulmonary embolism, given the shock, the tachycardia, and the hypoxemia",
        "explanation": "Incorrect. Massive pulmonary embolism does cause obstructive shock and must be considered, but it produces right ventricular failure with a LOW left-sided filling pressure and clear lungs, not a wedge pressure of 27 with bilateral crackles. The ECG here shows an anterior STEMI. This would be the correct answer if he had clear lungs, a dilated right ventricle on echocardiography, and a normal wedge pressure."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Cardiogenic shock means cardiac index below 2.2, wedge pressure above 18, and high SVR (cold and wet). The definitive treatment for STEMI-related shock is EARLY REVASCULARIZATION; inotropes, vasopressors, and mechanical support are bridges. Do not volume-load a high wedge pressure and do not add pure vasoconstriction to an already high SVR.",
    "lectureSource": "CV40: Shock Pathophysiology and Management",
    "pdfLecture": "CV40",
    "pdfPage": 34,
    "pdfQuote": "Cardiogenic Impaired cardiac function LV Systolic failure"
  },
  {
    "id": 14,
    "category": "Pharmacology: Contraindications in Pregnancy",
    "questionText": "A 29-year-old woman with chronic hypertension on lisinopril discovers she is 9 weeks pregnant. She has taken the drug throughout the first trimester. She asks what should be done and what risks her pregnancy now carries. Which of the following is the most accurate response?",
    "options": [
      {
        "text": "Continue lisinopril unchanged, since good maternal blood pressure control outweighs any fetal risk at this stage of pregnancy",
        "explanation": "Incorrect. RAS inhibitors are among the clearest examples of drugs whose fetal risk outweighs their maternal benefit in pregnancy, since equally effective alternatives exist that are safe. Continuing would expose the fetus to a well-characterized and preventable injury. This would be the correct answer if no safe alternative antihypertensive existed."
      },
      {
        "text": "Switch to losartan for the remainder of the pregnancy, since angiotensin receptor blockers lack the fetal toxicity of ACE inhibitors",
        "explanation": "Incorrect. ARBs share the identical fetopathy, because the injury is caused by blocking angiotensin II action on the fetal kidney rather than by any property unique to ACE inhibition. Aliskiren is likewise contraindicated. All agents that interrupt the renin-angiotensin system carry the same warning. This would be the correct answer if the toxicity were bradykinin-mediated rather than angiotensin-mediated."
      },
      {
        "text": "Continue the drug but add high-dose folate, which prevents the fetal malformations associated with first trimester exposure",
        "explanation": "Incorrect. Folate supplementation reduces neural tube defects and is recommended in all pregnancies, but it has no effect on RAS inhibitor fetopathy, which results from a hemodynamic and developmental insult to the fetal kidney rather than from a folate-dependent process. This would be the correct answer if the mechanism were folate antagonism, as with methotrexate or certain anticonvulsants."
      },
      {
        "text": "Stop it now and switch to labetalol, methyldopa, or nifedipine, since later exposure causes fetal renal failure and oligohydramnios",
        "explanation": "Correct. Angiotensin II is essential to normal development of the fetal kidney and to maintaining fetal glomerular perfusion, so any drug that interrupts the renin-angiotensin system is contraindicated in pregnancy. Exposure in the second and third trimesters, when fetal urine is the principal source of amniotic fluid, causes fetal hypotension and renal hypoperfusion leading to renal tubular dysgenesis and anuria, resulting in oligohydramnios with the consequent pulmonary hypoplasia, limb contractures, and calvarial hypoplasia. First trimester exposure is of less certain teratogenic significance, and the practical response is prompt discontinuation with reassurance and a detailed anatomy ultrasound rather than any consideration of termination. Blood pressure should be managed instead with labetalol, methyldopa, nifedipine, or hydralazine, all of which have long safety records in pregnancy. Women of childbearing age taking these drugs should be counselled about this in advance."
      },
      {
        "text": "Stop the drug and give no antihypertensive at all, since maternal blood pressure falls physiologically during pregnancy",
        "explanation": "Incorrect. Blood pressure does fall in the first and second trimesters as systemic vascular resistance decreases, and some women with mild chronic hypertension can be observed off medication, but this cannot be assumed for a patient who required therapy, and uncontrolled hypertension increases the risk of preeclampsia, placental abruption, and fetal growth restriction. This would be the correct answer if her pressures were normal off treatment on repeated measurement."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: ACE inhibitors, ARBs, and aliskiren are ALL contraindicated in pregnancy. Second and third trimester exposure causes fetal renal failure, oligohydramnios, pulmonary hypoplasia, limb contractures, and skull hypoplasia. Safe alternatives are labetalol, methyldopa, nifedipine, and hydralazine.",
    "lectureSource": "CV35: RAS Inhibitors",
    "pdfLecture": "CV35",
    "pdfPage": 40,
    "pdfQuote": "Pregnancy:"
  },
  {
    "id": 15,
    "category": "Orthopedics: Bracing Efficacy and the BrAIST Trial",
    "questionText": "The parents of a 13-year-old girl with a 34-degree right thoracic curve at Risser 1 ask whether a brace actually works or merely delays surgery. They are concerned about the social burden of wearing it and want to know what the evidence shows. Which of the following statements is most accurate?",
    "options": [
      {
        "text": "Bracing significantly reduces progression to the surgical threshold versus observation, and benefit rises with daily hours worn",
        "explanation": "Correct. The BrAIST trial randomized skeletally immature patients with adolescent idiopathic scoliosis and curves of 20 to 40 degrees to bracing or observation, with success defined as avoiding progression to 50 degrees or more. The trial was stopped early because bracing was clearly superior, and it also demonstrated a dose-response relationship using embedded temperature sensors to record actual wear time rather than relying on self-report: patients who wore the brace longer had substantially higher success rates, approaching 90 to 93 percent with 13 or more hours daily compared with roughly 40 to 50 percent in the observation group. This is the strongest evidence available that bracing changes the natural history rather than merely postponing surgery, and it converts the counselling conversation from whether to brace into how to support adherence. Bracing does not correct an existing curve; its goal is to prevent progression during remaining growth, so it is only useful in a skeletally immature patient."
      },
      {
        "text": "Bracing has never been shown to alter the natural history of scoliosis, and it is offered chiefly for psychological reassurance",
        "explanation": "Incorrect. This reflects the pre-BrAIST state of uncertainty, when observational data were conflicting and equipoise genuinely existed. That question has since been answered by a randomized trial with objective wear-time measurement. This would be the correct answer if BrAIST had shown no difference between groups."
      },
      {
        "text": "Bracing corrects the curve permanently, so a successfully braced patient can expect an entirely normal spine after weaning from the brace",
        "explanation": "Incorrect. Bracing does not correct a curve; the in-brace correction seen radiographically is not maintained after weaning. Its purpose is to prevent PROGRESSION during remaining growth, and a successful outcome is a curve that has not worsened. This would be the correct answer if orthoses produced permanent structural correction."
      },
      {
        "text": "Bracing is equally effective at any skeletal maturity, so it should be offered even to a patient who is already at Risser 5",
        "explanation": "Incorrect. Bracing works by influencing spinal growth, so it has no role once growth is complete. Risser 4 to 5 with a postmenarchal history indicates skeletal maturity, at which point curves below 50 degrees generally stop progressing and bracing is not indicated. This patient is Risser 1 with substantial growth remaining, which is precisely when bracing is effective. This would be the correct answer if the mechanism did not depend on growth."
      },
      {
        "text": "Physical therapy and exercise programs have been shown to be equivalent to bracing for thoracic curves in this size range",
        "explanation": "Incorrect. Scoliosis-specific exercise programs have some supporting evidence and are a reasonable adjunct, and general fitness should be encouraged, but no exercise regimen has demonstrated efficacy equivalent to bracing for preventing progression of a curve of this magnitude in a skeletally immature patient. This would be the correct answer if a randomized trial had shown equivalence."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: BrAIST showed bracing significantly reduces progression to 50 degrees versus observation, with a clear DOSE-RESPONSE by measured wear time (about 90 percent success at 13 or more hours daily). Bracing prevents progression, it does not correct the curve, and it only works while growth remains, so adherence counselling is the key intervention.",
    "lectureSource": "CV32: Scoliosis",
    "pdfLecture": "CV32",
    "pdfPage": 73,
    "pdfQuote": "Bracing treatment is more effective with increased hours of daily wear:"
  },
  {
    "id": 16,
    "category": "Radiology: Silhouette Sign",
    "questionText": "A 58-year-old man with cough and fever has a posteroanterior chest radiograph showing an area of increased opacity in the right lower lung zone. The right heart border is crisply preserved, but the right hemidiaphragm is obscured over its medial two thirds. On the lateral film the opacity lies posteriorly. Which lobe is involved, and what principle allows this localization?",
    "options": [
      {
        "text": "Right middle lobe, because an opacity in the lower lung zone always indicates middle lobe disease on a posteroanterior film",
        "explanation": "Incorrect. Zone on the frontal film does not reliably indicate lobe, because the lobes overlap substantially in projection; that is precisely why the silhouette sign and the lateral view are needed. Right middle lobe disease characteristically obscures the RIGHT HEART BORDER, which is preserved here. This would be the correct answer if the right heart border were effaced with a preserved hemidiaphragm."
      },
      {
        "text": "Right upper lobe, since the horizontal fissure marks its inferior limit and disease lying above it projects into the lower lung zone",
        "explanation": "Incorrect. The right upper lobe lies above the horizontal fissure and projects into the upper zone; right upper lobe consolidation typically shows a sharp inferior margin at the horizontal fissure and does not obscure the diaphragm. It also lies anteriorly and superiorly on the lateral view. This would be the correct answer if the opacity were in the upper zone with a crisp inferior border at the minor fissure."
      },
      {
        "text": "The lingula, which abuts the left heart border and is the anatomic mirror image of the right middle lobe in the left lung",
        "explanation": "Incorrect. The lingula is part of the LEFT upper lobe and abuts the left heart border, so lingular disease obscures the left heart border. The findings described are entirely right-sided. This would be the correct answer if the left heart border were effaced."
      },
      {
        "text": "The determination cannot be made without CT, since a plain radiograph alone cannot reliably localize disease to any single lobe",
        "explanation": "Incorrect. Plain radiography localizes lobar disease reliably when the silhouette sign and the lateral view are used together, and this is a core skill rather than a limitation requiring cross-sectional imaging. Reflexively deferring to CT adds cost and radiation without adding information here. This would be the correct answer if the findings were equivocal on both projections."
      },
      {
        "text": "Right lower lobe, since disease abutting the diaphragm posteriorly erases the diaphragmatic silhouette but spares the heart border",
        "explanation": "Correct. The silhouette sign rests on the principle that a radiographic border is visible only where two structures of different density lie in direct contact, so an air-filled lung adjacent to soft tissue produces a crisp line. If the adjacent lung becomes airless through consolidation, collapse, or mass, it becomes the same density as the soft tissue structure and the border disappears. The location of the lost border therefore localizes the disease anatomically. The right middle lobe abuts the right heart border, the lingula the left heart border, and the lower lobes the hemidiaphragms posteriorly. Here the hemidiaphragm is effaced while the heart border is preserved, which places the disease in the right lower lobe, and the posterior position on the lateral film confirms it. The same logic explains why a right lower lobe opacity that spares the heart border can be distinguished at a glance from a middle lobe process occupying the same zone on the frontal view."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: The SILHOUETTE SIGN. A border disappears when airless lung touches a soft-tissue structure of the same density. Right heart border effaced means right middle lobe; left heart border means lingula; hemidiaphragm effaced means LOWER lobe. Use it with the lateral film, where lower lobe disease lies posteriorly.",
    "lectureSource": "CV41: The Normal Chest X-Ray",
    "pdfLecture": "CV41",
    "pdfPage": 16,
    "pdfQuote": "Silhouette Sign"
  },
  {
    "id": 17,
    "category": "Cardiology: Comorbidity-Directed Therapy",
    "questionText": "Four hypertensive patients need a first antihypertensive agent. Patient 1 is a 58-year-old Black man with no comorbidities. Patient 2 is a 62-year-old with type 2 diabetes and an albumin-to-creatinine ratio of 480 mg/g. Patient 3 is a 70-year-old with heart failure with reduced ejection fraction. Patient 4 is a 55-year-old with recurrent calcium oxalate stones and osteoporosis. Which set of initial choices is most appropriate?",
    "options": [
      {
        "text": "Patient 1 a thiazide or calcium channel blocker; Patient 2 an ACE inhibitor or ARB; Patient 3 an ACE inhibitor with a beta blocker; Patient 4 a thiazide",
        "explanation": "Correct. Initial therapy should be chosen to treat the hypertension and a comorbidity simultaneously. In Black patients without a compelling indication, thiazide diuretics and calcium channel blockers achieve greater blood pressure reduction as monotherapy than RAS inhibitors, which is reflected in guideline recommendations. In diabetes with albuminuria, an ACE inhibitor or ARB is preferred because reducing efferent arteriolar tone lowers intraglomerular pressure and slows progression of nephropathy independent of blood pressure lowering. In heart failure with reduced ejection fraction, the agents with mortality benefit are RAS inhibition (or an angiotensin receptor-neprilysin inhibitor), an evidence-based beta blocker, a mineralocorticoid antagonist, and an SGLT2 inhibitor, so those form the backbone rather than being chosen for blood pressure alone. Thiazides serve the fourth patient twice over, since they reduce urinary calcium excretion, which lowers stone recurrence, and modestly improve bone density."
      },
      {
        "text": "All four should start with a thiazide, since diuretics are first-line in every hypertensive patient regardless of age, race, or comorbidity",
        "explanation": "Incorrect. Thiazides are excellent first-line agents in uncomplicated hypertension and are the right choice for two of these patients, but comorbidities create compelling indications that override a one-size-fits-all approach. A thiazide alone in a patient with diabetic nephropathy or with heart failure with reduced ejection fraction would miss an outcome-modifying therapy. This would be the correct answer if none of the patients had a compelling indication."
      },
      {
        "text": "All four should start with a beta blocker, since sympathetic activation underlies most hypertension regardless of age, race, or comorbidity",
        "explanation": "Incorrect. Beta blockers are no longer recommended as first-line therapy for uncomplicated hypertension, because they are less effective at preventing stroke than other classes and carry metabolic liabilities. They are used when a compelling indication exists, such as heart failure with reduced ejection fraction, post-myocardial infarction, or rate control. This would be the correct answer if beta blockade were the preferred initial class for all hypertension."
      },
      {
        "text": "Patient 1 an ACE inhibitor; Patient 2 a thiazide diuretic; Patient 3 a non-dihydropyridine calcium channel blocker; Patient 4 a loop diuretic",
        "explanation": "Incorrect. Every assignment is mismatched. RAS inhibitors are less effective as monotherapy in Black patients, a thiazide misses the renoprotective indication in diabetic albuminuria, non-dihydropyridines are contraindicated in heart failure with reduced ejection fraction, and loop diuretics INCREASE urinary calcium and would worsen both the stone disease and the osteoporosis. This would be the correct answer if each pairing were reversed relative to the evidence."
      },
      {
        "text": "Patient 4 should receive a loop diuretic, since it is the more potent diuretic and will reduce calcium oxalate stone formation more effectively than a thiazide",
        "explanation": "Incorrect. Potency of diuresis is irrelevant to stone prevention, and loop diuretics have exactly the wrong calcium effect: by abolishing the lumen-positive potential in the thick ascending limb they cause calcium WASTING, which increases urinary calcium and stone risk and adversely affects bone. Thiazides do the opposite. This would be the correct answer if the goal were to treat hypercalcemia rather than hypercalciuria."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Let the comorbidity pick the drug. Diabetes or CKD with albuminuria means ACE inhibitor or ARB. HFrEF means RAS inhibitor or ARNI plus an evidence-based beta blocker plus an MRA plus an SGLT2 inhibitor. Black patients without a compelling indication respond better to thiazides and CCBs. Hypercalciuric stones or osteoporosis favor a thiazide.",
    "lectureSource": "CV39: Hypertension Management",
    "pdfLecture": "CV39",
    "pdfPage": 20,
    "pdfQuote": "Heart Failure with Reduced Ejection Fraction (HFrEF): Beta Blocker + ACE-I"
  },
  {
    "id": 18,
    "category": "Pharmacology: Alpha Blockers",
    "questionText": "A 68-year-old man with hypertension and symptomatic benign prostatic hyperplasia is started on doxazosin 4 mg at bedtime. He rises at 2 a.m. to urinate and faints, sustaining a scalp laceration. His blood pressure while supine is 138/84 mmHg and immediately on standing is 96/58 mmHg with a heart rate rising from 72 to 96/min. Which explanation and preventive strategy are most appropriate?",
    "options": [
      {
        "text": "This is a vasovagal episode triggered by nighttime bladder distension, and the doxazosin should be continued unchanged",
        "explanation": "Incorrect. Micturition syncope does exist and is vagally mediated, but it is characterized by bradycardia rather than the tachycardia recorded here, and it does not produce a 42 mmHg orthostatic fall in systolic pressure. Attributing this to a vagal cause would miss a clear and preventable drug effect. This would be the correct answer if his heart rate had fallen to 44 during the episode with no orthostatic drop afterward."
      },
      {
        "text": "The drug caused reflex bradycardia through central alpha-2 stimulation, so simply lowering the daily bedtime dose would be sufficient",
        "explanation": "Incorrect. Central alpha-2 agonism is the mechanism of clonidine and methyldopa, not of doxazosin, which is a peripheral alpha-1 ANTAGONIST. His heart rate also rose rather than fell, reflecting an intact baroreflex responding to hypotension. This would be the correct answer if the drug were clonidine and the patient bradycardic."
      },
      {
        "text": "Alpha-1 blockade removed venous and arteriolar tone, causing first-dose orthostatic hypotension; start low at bedtime and titrate",
        "explanation": "Correct. Alpha-1 receptors mediate sympathetic constriction of both arterioles and venous capacitance vessels, and blocking them lowers peripheral resistance and, importantly, allows venous pooling on standing, which reduces preload and therefore stroke volume. The result is orthostatic hypotension, most pronounced with the first dose or after a dose increase, and older patients are especially vulnerable because baroreflex sensitivity declines with age. Prevention is to begin at the lowest available dose, give it at bedtime, warn the patient to rise slowly and to sit at the edge of the bed before standing, and titrate upward gradually. Because alpha-1A receptors predominate in prostatic and bladder neck smooth muscle, this class relieves the obstructive symptoms of benign prostatic hyperplasia at the same time, which makes it attractive when both conditions coexist, and the uroselective agents tamsulosin and silodosin cause less hypotension. Alpha blockers are not first-line for hypertension alone, since ALLHAT showed a higher rate of heart failure compared with a thiazide."
      },
      {
        "text": "The syncope reflects an idiosyncratic reaction, and the entire alpha blocker class should be permanently avoided in this patient",
        "explanation": "Incorrect. First-dose orthostatic hypotension is a predictable, dose-related pharmacologic effect of the class rather than an idiosyncratic reaction, and it is manageable with dose and timing adjustments or by switching to a uroselective agent. Permanent avoidance would unnecessarily remove a drug that treats both of his conditions. This would be the correct answer if he had experienced a true hypersensitivity reaction."
      },
      {
        "text": "The problem is drug-induced fluid retention, and a diuretic should be added before any further change in the doxazosin dose",
        "explanation": "Incorrect. Alpha blockers do cause modest sodium and fluid retention with chronic use, which is one reason they are often paired with a diuretic for blood pressure control, but fluid retention would raise rather than lower his standing blood pressure. Adding a diuretic now would worsen the orthostatic hypotension. This would be the correct answer if he had developed edema with loss of antihypertensive efficacy."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Alpha-1 blockers cause FIRST-DOSE orthostatic hypotension by removing arteriolar AND venous tone. Start low, dose at bedtime, and titrate slowly, especially in the elderly. They treat BPH at the same time (alpha-1A in prostate and bladder neck), but ALLHAT showed more heart failure than thiazides, so they are not first-line for hypertension alone.",
    "lectureSource": "CV37: Alpha Blockers, Central Sympatholytics and Vasodilators",
    "pdfLecture": "CV37",
    "pdfPage": 11,
    "pdfQuote": "Check standing and recumbent blood pressure to check for persistent orthostatic"
  },
  {
    "id": 19,
    "category": "OMM: Heel Lift Placement",
    "questionText": "A 44-year-old man with a 9 mm right-sided short leg has been started on a 3 mm lift and has tolerated two increments over six weeks. He now needs a 7 mm lift. He works construction and wears steel-toed boots all day but changes into athletic shoes at home. Which statement about lift construction and placement is most accurate?",
    "options": [
      {
        "text": "Lifts should always be placed inside the shoe regardless of thickness, since external modifications are cosmetically unacceptable",
        "explanation": "Incorrect. Inside-the-shoe lifts are limited by the volume available in the heel counter, and a lift beyond roughly 6 to 9 mm placed inside will lift the heel out of the shoe, causing slippage, blistering, and instability. Beyond that thickness the lift must be built onto the sole externally, and cosmetic concerns do not override function and safety. This would be the correct answer if shoe volume were unlimited."
      },
      {
        "text": "Beyond roughly 6 to 9 mm the lift should be built externally onto the shoe, and every regularly worn pair of shoes needs a lift",
        "explanation": "Correct. Two practical principles govern lift therapy. First, the internal heel space of a shoe accommodates only a limited thickness, generally about 6 to 9 mm, before the heel rides out of the counter; beyond that the correction should be transferred to the outside of the shoe, where it can also be tapered forward along the sole to preserve a normal gait. Second, and most often overlooked, the correction only works while it is being worn, so a patient who alternates footwear needs the lift in every regularly worn pair; correcting only the work boots while going home to unlifted athletic shoes gives an inconsistent sacral base and undermines the adaptation the therapy is trying to establish. Lift material should be firm enough not to compress under load, since a soft lift loses much of its effective height, and patients should be reassessed as increments are added, with attention to whether symptoms and sacral base level are improving."
      },
      {
        "text": "The lift is worn only during symptomatic episodes, since continuous daily wear prevents the body from adapting to it",
        "explanation": "Incorrect. This inverts the therapeutic logic. Continuous wear is exactly what allows the postural and soft tissue adaptation to occur; intermittent use produces a repeatedly changing sacral base and can aggravate symptoms. This would be the correct answer if the goal were symptomatic relief rather than structural adaptation."
      },
      {
        "text": "Soft compressible foam is preferred at any height, because it cushions the heel and improves tolerance through the day",
        "explanation": "Incorrect. Cushioning is comfortable but defeats the purpose, because a compressible material flattens under body weight and delivers substantially less correction than its nominal thickness. Firm materials such as dense cork, leather, or high-density polymer are preferred so that the intended height is actually achieved. This would be the correct answer if the goal were shock absorption rather than a measured height correction."
      },
      {
        "text": "The lift should be placed under the long leg, since lowering the high side is what levels the pelvis and the shoulders",
        "explanation": "Incorrect. This reverses the correction. A lift raises the side it is placed under, so it must go under the SHORT leg, which is the side of the lower femoral head and lower sacral base. Placing it under the long leg would double the unleveling. This would be the correct answer if the aim were to exaggerate the discrepancy."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Lift goes under the SHORT leg, uses FIRM non-compressible material, and moves to the OUTSIDE of the shoe beyond about 6-9 mm (tapered along the sole). Every regularly worn pair needs one, since intermittent correction defeats the adaptation. Reassess symptoms and sacral base level at each increment.",
    "lectureSource": "CV33: Short Leg Syndrome and Heel Lift Therapy",
    "pdfLecture": "CV33",
    "pdfPage": 49,
    "pdfQuote": "Principles of lift therapy. Heel lift measurements made at midcalcaneal line. A Foot in"
  },
  {
    "id": 20,
    "category": "Cardiology: Hypovolemic Shock",
    "questionText": "A 22-year-old man arrives after a stabbing with a blood pressure of 84/62 mmHg, a heart rate of 138/min, a respiratory rate of 30/min, cool mottled extremities, and confusion. His hemoglobin is 12.8 g/dL, which is near normal, and his lactate is 5.2 mmol/L. A resident argues that the near-normal hemoglobin excludes significant blood loss. Which statement best addresses this reasoning and the underlying physiology?",
    "options": [
      {
        "text": "The hemoglobin is reliable, so the shock must be neurogenic from spinal cord injury",
        "explanation": "Incorrect. Neurogenic shock does occur with cervical or high thoracic cord injury and must be considered in trauma, but its hallmark is hypotension with WARM, dry, well-perfused skin and a paradoxically normal or slow heart rate from loss of sympathetic outflow. This patient is tachycardic with cold mottled extremities, which is the opposite pattern. This would be the correct answer if he were bradycardic with warm extremities and a sensory level."
      },
      {
        "text": "The hemoglobin is reliable, so the lactate must reflect a toxic ingestion rather than hypoperfusion",
        "explanation": "Incorrect. Toxic causes of lactic acidosis such as metformin, cyanide, or alcohol exist, but invoking one in a patient who has just been stabbed and is hypotensive with cold extremities ignores the obvious cause. Lactate here is a marker of anaerobic metabolism from inadequate oxygen delivery. This would be the correct answer if there were no hemorrhagic mechanism and a clear toxic exposure."
      },
      {
        "text": "Hemoglobin concentration rises acutely in hemorrhage because red cells are concentrated, so a normal value confirms adequate volume",
        "explanation": "Incorrect. This is the opposite of the true physiology. Whole blood is lost in equal proportions of cells and plasma, so the CONCENTRATION does not change acutely; it falls only later as interstitial fluid shifts in or as crystalloid is administered to dilute the remaining blood. Hemoconcentration occurs when plasma alone is lost, as in burns or anaphylaxis. This would be the correct answer if plasma rather than whole blood were being lost."
      },
      {
        "text": "Hemoglobin does not fall immediately after whole blood loss, and delivery depends on cardiac output as well as content",
        "explanation": "Correct. Two points defeat the resident's reasoning. First, acute hemorrhage removes red cells and plasma in the same proportion, so the measured concentration is initially unchanged; it falls over the following hours as interstitial fluid shifts into the vascular space and as resuscitation fluid dilutes what remains, which is why a normal initial hemoglobin never excludes major blood loss. Second, oxygen delivery is the product of cardiac output and arterial oxygen content, and content depends on hemoglobin concentration and saturation. A patient can therefore have perfectly normal oxygen CONTENT and still have grossly inadequate DELIVERY if cardiac output has collapsed from lost preload, which is exactly what the tachycardia, narrow pulse pressure, cold mottled skin, confusion, and lactate of 5.2 indicate. His compensatory sympathetic response has raised systemic vascular resistance and heart rate, which explains why the systolic pressure has fallen only modestly; hypotension is a late sign in a young patient, who can lose 30 percent of blood volume before the pressure drops. Treatment is hemorrhage control with balanced blood product resuscitation rather than crystalloid alone."
      },
      {
        "text": "The tachycardia alone accounts for the lactate, since rapid rates increase myocardial lactate production",
        "explanation": "Incorrect. Tachycardia is a compensatory response rather than a source of systemic lactate, and the myocardium normally CONSUMES lactate as a fuel rather than producing it except during severe ischemia. A lactate of 5.2 in this setting reflects global tissue hypoperfusion. This would be the correct answer if lactate were generated by heart rate per se."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: A normal initial hemoglobin NEVER excludes acute hemorrhage, since whole blood loss removes cells and plasma together. DO2 = CO x (1.34 x Hgb x SaO2 + 0.003 x PaO2), so delivery fails when output falls even with normal content. In young patients, hypotension is late; they compensate until roughly 30 percent volume loss.",
    "lectureSource": "CV40: Shock Pathophysiology and Management",
    "pdfLecture": "CV40",
    "pdfPage": 13,
    "pdfQuote": "Hypovolemic Shock:Pathophysiology"
  },
  {
    "id": 21,
    "category": "Cardiology: Hypertensive Crisis",
    "questionText": "Two patients present to the emergency department. Patient A has a blood pressure of 212/126 mmHg, a headache, and no other symptoms; her examination, fundoscopy, creatinine, and troponin are all normal. Patient B has a blood pressure of 198/118 mmHg with blurred vision, flame hemorrhages and papilledema on fundoscopy, a creatinine risen from 1.0 to 2.2 mg/dL, and 2+ proteinuria. Which management approach is correct for each?",
    "options": [
      {
        "text": "Patient A needs oral therapy over 24 to 48 hours; Patient B needs IV therapy lowering MAP by 25 percent in the first hour",
        "explanation": "Correct. The distinction that matters is not the absolute number but the presence of acute target-organ damage. Patient A has hypertensive URGENCY, that is, severe hypertension without acute end-organ injury; abrupt lowering risks cerebral, coronary, and renal hypoperfusion because chronic hypertension shifts the autoregulatory curve rightward, so she should be treated with oral agents, have therapy resumed or intensified, and be brought down gradually over 24 to 48 hours with outpatient follow-up. Patient B has hypertensive EMERGENCY, evidenced by hypertensive retinopathy with papilledema, acute kidney injury, and proteinuria, which requires admission and titratable intravenous therapy such as nicardipine, clevidipine, labetalol, or nitroprusside. The target is deliberately partial: reduce mean arterial pressure by no more than about 25 percent in the first hour, then toward 160/100 over the next two to six hours, and to normal over 24 to 48 hours. The exceptions requiring faster and lower targets are aortic dissection, where systolic pressure should be brought below 120 within 20 minutes with a beta blocker first, and specific stroke and eclampsia protocols."
      },
      {
        "text": "Both should receive immediate sublingual nifedipine to normalize blood pressure as quickly as possible",
        "explanation": "Incorrect. Immediate-release sublingual nifedipine is specifically condemned in this setting because it produces an uncontrolled, unpredictable precipitous fall in pressure that has caused stroke, myocardial infarction, and death. Normalizing pressure rapidly is also the wrong goal in either patient. This would be the correct answer if rapid uncontrolled reduction were beneficial."
      },
      {
        "text": "Both should be admitted for intravenous therapy, since any pressure above 180/120 defines an emergency",
        "explanation": "Incorrect. A threshold of 180/120 identifies severe hypertension, but the term EMERGENCY requires acute target-organ damage in addition. Patient A has none, and admitting her for intravenous therapy exposes her to the risk of overshoot without benefit. This would be the correct answer if the definition rested on the number alone."
      },
      {
        "text": "Patient B should have his pressure normalized to below 120/80 within the first hour to halt the organ damage",
        "explanation": "Incorrect. Rapid normalization is the classic and dangerous error. In chronic hypertension the cerebral autoregulatory range is shifted rightward, so what looks like a normal pressure can fall below the lower autoregulatory limit and cause watershed cerebral ischemia, and the same applies to coronary and renal perfusion. A controlled partial reduction is deliberate. This would be the correct answer if autoregulatory curves did not shift with chronic hypertension."
      },
      {
        "text": "Patient A's headache constitutes target-organ damage, so both meet criteria for emergency management",
        "explanation": "Incorrect. Headache is common with severe hypertension and is nonspecific; target-organ damage means objective acute injury such as hypertensive encephalopathy, retinal hemorrhages or papilledema, acute kidney injury, myocardial ischemia, pulmonary edema, aortic dissection, or eclampsia. Her examination and laboratory studies are normal. This would be the correct answer if she had confusion, seizures, or papilledema."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: URGENCY means severe hypertension WITHOUT acute organ damage, treated orally over 24-48 hours. EMERGENCY means severe hypertension WITH acute organ damage, treated with titratable IV agents, lowering MAP no more than 25 percent in the first hour. Exceptions are aortic dissection (SBP under 120 fast) and stroke or eclampsia protocols. Never use sublingual nifedipine.",
    "lectureSource": "CV38: Clinical Hypertension",
    "pdfLecture": "CV38",
    "pdfPage": 17,
    "pdfQuote": "Retinal hemorrhages, Papilledema"
  },
  {
    "id": 22,
    "category": "Pharmacology: Renal Effects of RAS Inhibition",
    "questionText": "A 61-year-old man with diabetic nephropathy has a baseline creatinine of 1.8 mg/dL and 2.4 grams of proteinuria daily. He starts an ACE inhibitor. Two weeks later his creatinine is 2.1 mg/dL, an increase of 17 percent, his potassium is 4.9 mEq/L, and his proteinuria has fallen to 1.5 grams. He feels well and is not volume depleted. What is the correct interpretation and action?",
    "options": [
      {
        "text": "Stop the drug immediately, since any rise in creatinine on a RAS inhibitor signals nephrotoxicity and mandates drug withdrawal",
        "explanation": "Incorrect. A small early rise in creatinine is expected and reflects the intended hemodynamic effect rather than tubular injury, and stopping the drug forfeits its long-term renoprotective benefit. Reflexive discontinuation for a modest creatinine rise is one of the most common errors in managing chronic kidney disease. This would be the correct answer if the rise exceeded about 30 percent or continued to climb."
      },
      {
        "text": "Continue the drug but stop checking creatinine and potassium, since the effect is benign and entirely self-limited",
        "explanation": "Incorrect. Continuing is right, but abandoning monitoring is not. Creatinine and potassium must be rechecked within one to two weeks of initiation or dose change and periodically thereafter, because a subset of patients will have a larger rise revealing occult renovascular disease, and hyperkalemia can develop insidiously, especially with declining GFR or concurrent potassium-sparing agents. This would be the correct answer if the risks of the drug were entirely front-loaded and predictable."
      },
      {
        "text": "Continue the drug, since a rise under 30 percent that stabilizes is expected and falling proteinuria is the intended effect",
        "explanation": "Correct. Angiotensin II preferentially constricts the efferent arteriole, so blocking it dilates the efferent vessel and lowers intraglomerular hydrostatic pressure. Because filtration is driven by that pressure, GFR falls modestly and creatinine rises, typically by 10 to 30 percent within the first two weeks before stabilizing. That is not injury; it is the mechanism of benefit, because chronically elevated intraglomerular pressure is what drives podocyte loss, progressive proteinuria, and glomerulosclerosis in diabetic nephropathy. The falling proteinuria confirms the desired hemodynamic change, and reduction in proteinuria is itself a strong predictor of slower progression. The accepted rule is to continue therapy if the creatinine rise is under 30 percent and stabilizes, to recheck creatinine and potassium in one to two weeks, and to investigate for renal artery stenosis or volume depletion if the rise exceeds 30 percent or does not plateau."
      },
      {
        "text": "The fall in proteinuria proves the kidney disease has resolved, so the drug can now be stopped and the creatinine ignored",
        "explanation": "Incorrect. Reduced proteinuria reflects a favorable change in glomerular hemodynamics and permeability produced by the drug, not resolution of the underlying disease. Stopping therapy would allow intraglomerular pressure and proteinuria to return promptly and would forfeit the slowing of progression. This would be the correct answer if proteinuria reduction indicated structural cure."
      },
      {
        "text": "The rise in creatinine indicates bilateral renal artery stenosis and requires stopping the drug and immediate renal angiography",
        "explanation": "Incorrect. A rise of more than about 30 percent, or one that continues to climb, should indeed raise suspicion of bilateral renal artery stenosis or stenosis in a solitary kidney, and that is an important pattern to recognize. A 17 percent rise that stabilizes in a patient with known diabetic nephropathy does not warrant angiography. This would be the correct answer if his creatinine had risen from 1.8 to 3.2 with a flash pulmonary edema history."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: RAS inhibitors dilate the EFFERENT arteriole, so intraglomerular pressure and GFR fall a little and creatinine rises 10-30 percent. That is the MECHANISM of renoprotection, not toxicity. Continue if the rise is under 30 percent and stabilizes; recheck creatinine and potassium in 1-2 weeks; investigate if it exceeds 30 percent.",
    "lectureSource": "CV35: RAS Inhibitors",
    "pdfLecture": "CV35",
    "pdfPage": 37,
    "pdfQuote": "ACEIs / ARBs: Adverse effects"
  },
  {
    "id": 23,
    "category": "Pharmacology: Hypertensive Emergency in Pregnancy",
    "questionText": "A 31-year-old woman at 34 weeks gestation presents with a blood pressure of 176/114 mmHg, a severe headache, right upper quadrant pain, 3+ proteinuria, a platelet count of 88,000/microL, and an AST of 210 U/L. She has brisk reflexes with two beats of clonus. Which combination of agents is most appropriate for immediate management?",
    "options": [
      {
        "text": "Sodium nitroprusside for blood pressure and phenytoin for seizure prophylaxis",
        "explanation": "Incorrect. Nitroprusside is avoided in pregnancy because prolonged use risks fetal cyanide and thiocyanate accumulation, and it is reserved for refractory cases at the shortest possible duration. Phenytoin is also inferior to magnesium sulfate for eclampsia prophylaxis, having been shown less effective in randomized comparison. This would be the correct answer if the patient were not pregnant and had a hypertensive emergency with an unrelated seizure disorder."
      },
      {
        "text": "Lisinopril for blood pressure and levetiracetam for seizure prophylaxis",
        "explanation": "Incorrect. ACE inhibitors are absolutely contraindicated in pregnancy because they cause fetal renal failure, oligohydramnios, and skull hypoplasia, and this exposure at 34 weeks would be squarely in the period of greatest risk. Levetiracetam is not the agent of choice for eclampsia prophylaxis. This would be the correct answer if the patient were postpartum and no longer breastfeeding, where ACE inhibitors become acceptable."
      },
      {
        "text": "Atenolol for blood pressure and diazepam for seizure prophylaxis",
        "explanation": "Incorrect. Atenolol is specifically avoided in pregnancy because it has been associated with fetal growth restriction, and it is not a parenteral agent for acute control. Benzodiazepines are used to terminate an eclamptic seizure that persists despite magnesium, but they are not first-line prophylaxis. This would be the correct answer if the question asked how to abort a seizure refractory to magnesium."
      },
      {
        "text": "IV labetalol or hydralazine, or oral nifedipine, plus magnesium sulfate and planning for delivery",
        "explanation": "Correct. This is severe preeclampsia with HELLP features, given the severe-range hypertension, headache, right upper quadrant pain, thrombocytopenia, transaminitis, proteinuria, and hyperreflexia with clonus. Acute blood pressure control uses agents with established fetal safety: intravenous labetalol, intravenous hydralazine, or oral immediate-release nifedipine, all of which are recommended first-line for severe-range hypertension in pregnancy. Magnesium sulfate is given for seizure prophylaxis rather than for blood pressure; it substantially reduces the risk of eclampsia and is monitored by deep tendon reflexes, respiratory rate, and urine output, with calcium gluconate available as the antidote for magnesium toxicity. Because the placenta is the disease, delivery is the definitive treatment, and at 34 weeks with severe features delivery is generally indicated after maternal stabilization, with corticosteroids for fetal lung maturity when time allows. Methyldopa remains an option for chronic rather than acute management."
      },
      {
        "text": "Furosemide to reduce the volume overload driving the hypertension, with magnesium sulfate",
        "explanation": "Incorrect. Despite the edema, preeclamptic patients are typically intravascularly volume DEPLETED with a contracted plasma volume and hemoconcentration, so diuretics are avoided; they can worsen uteroplacental perfusion. Magnesium sulfate is correctly identified, but the antihypertensive choice is wrong. This would be the correct answer if she had pulmonary edema, which is one of the few indications for a diuretic in this setting."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Severe-range hypertension in pregnancy is treated with IV LABETALOL, IV HYDRALAZINE, or oral immediate-release NIFEDIPINE; add MAGNESIUM SULFATE for seizure prophylaxis (antidote calcium gluconate) and plan DELIVERY, which is the definitive cure. Avoid ACE inhibitors, ARBs, atenolol, nitroprusside, and routine diuretics.",
    "lectureSource": "CV36: Calcium Channel Blockers and Beta Blockers",
    "pdfLecture": "CV36",
    "pdfPage": 39,
    "pdfQuote": "Hypertensive emergencies: labetalol, esmolol (other classes of"
  },
  {
    "id": 24,
    "category": "Orthopedics: Functional vs Structural Curves",
    "questionText": "A 14-year-old boy is referred for a suspected spinal curve. Standing examination shows a lumbar curve convex to the left with a visible waist asymmetry. On forward bending the curve disappears completely and there is no rib or lumbar prominence; the scoliometer reads 2 degrees. Measurement shows a 14 mm right-sided leg length discrepancy. Which conclusion follows?",
    "options": [
      {
        "text": "This is adolescent idiopathic scoliosis, and it warrants a full-length standing spine radiograph and immediate brace treatment",
        "explanation": "Incorrect. Adolescent idiopathic scoliosis is a structural deformity with fixed vertebral rotation, so the curve and the associated prominence PERSIST or become more obvious on forward bending. A curve that vanishes on bending is not structural, and neither radiography for Cobb measurement nor bracing is indicated on this basis. This would be the correct answer if the Adams test showed a persistent rib hump."
      },
      {
        "text": "This is congenital scoliosis from a hemivertebra, a curve that characteristically resolves fully on forward bending",
        "explanation": "Incorrect. Congenital scoliosis results from a vertebral formation or segmentation defect such as a hemivertebra or unilateral bar, and because the deformity is built into the bone it is rigid and does not correct with position. It also presents in infancy or early childhood rather than at 14. This would be the correct answer if a rigid curve had been present since infancy with a vertebral anomaly on imaging."
      },
      {
        "text": "This is neuromuscular scoliosis, and an underlying myopathy should be sought with neurologic and muscle enzyme testing",
        "explanation": "Incorrect. Neuromuscular scoliosis, seen with cerebral palsy, muscular dystrophy, and spinal muscular atrophy, produces long C-shaped structural curves with pelvic obliquity that progress even after skeletal maturity and do not correct on bending. There is nothing here to suggest a neuromuscular disorder. This would be the correct answer if he had proximal weakness with a long collapsing curve."
      },
      {
        "text": "This is a structural curve, since any visible asymmetry in the standing position by itself establishes a fixed deformity",
        "explanation": "Incorrect. Visible asymmetry in standing occurs in both functional and structural curves; what separates them is behavior on the Adams forward bend test, which unmasks the fixed vertebral ROTATION that defines a structural curve. Standing appearance alone cannot make the distinction. This would be the correct answer if standing asymmetry were specific for structural deformity."
      },
      {
        "text": "This is a functional curve from the leg length discrepancy, and it should resolve with sacral base correction, not bracing",
        "explanation": "Correct. A functional or nonstructural curve is a positional compensation without fixed vertebral rotation, so it disappears when the provoking cause is removed, whether by forward bending, by lying down, or by correcting the underlying asymmetry. The Adams forward bend test is the key discriminator: a structural curve exposes its rotational component as a rib hump or lumbar prominence that persists or worsens on bending, whereas a functional curve simply straightens, as it did here, and the scoliometer reading of 2 degrees confirms the absence of meaningful rotation. Common causes of functional curves are leg length discrepancy, pelvic obliquity, muscle spasm, and antalgic posturing. The treatment is to address the cause, which here means graded heel lift therapy to level the sacral base along with treatment of associated somatic dysfunction, rather than bracing. Untreated, a long-standing functional curve can eventually acquire structural change, which is one reason osteopathic practice emphasizes correcting sacral base unleveling."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: The ADAMS FORWARD BEND TEST separates the two. A STRUCTURAL curve has fixed rotation, so the rib or lumbar hump persists or worsens. A FUNCTIONAL curve straightens out and has no hump; look for leg length discrepancy, pelvic obliquity, spasm, or antalgic posture and treat the cause. Only structural curves get Cobb films and bracing.",
    "lectureSource": "CV32: Scoliosis",
    "pdfLecture": "CV32",
    "pdfPage": 11,
    "pdfQuote": "away with rotational, side-bending, or forward bending"
  },
  {
    "id": 25,
    "category": "Cardiology: Resistant Hypertension",
    "questionText": "A 59-year-old woman remains at 158/96 mmHg despite lisinopril 40 mg, amlodipine 10 mg, and hydrochlorothiazide 25 mg daily, all taken as prescribed by pill count. Her body mass index is 34, she snores heavily with witnessed apneas, she takes ibuprofen most days for knee pain, and her estimated GFR is 52 mL/min. Home readings confirm the office values. Which set of steps is most appropriate?",
    "options": [
      {
        "text": "Add a fourth agent immediately without further evaluation, since failure of three drugs taken as prescribed defines the need for escalation",
        "explanation": "Incorrect. Adding a drug before addressing reversible contributors is a common and inefficient error. This patient has at least three modifiable factors, and treating the obstructive sleep apnea, stopping the NSAID, and optimizing the diuretic may achieve control or reduce the number of agents ultimately required. This would be the correct answer if no interfering substances or secondary causes were present."
      },
      {
        "text": "Confirm true resistance, stop the NSAID, evaluate for obstructive sleep apnea and other secondary causes, switch to chlorthalidone, and add spironolactone",
        "explanation": "Correct. Resistant hypertension means blood pressure above goal despite three agents from different classes including a diuretic, all at optimal doses, and it requires confirmation with out-of-office readings and adherence assessment, both of which have been done here. The workup then proceeds in a defined order. Interfering substances should be removed, and NSAIDs are among the most common, since blocking renal prostaglandins causes sodium retention and blunts the effect of diuretics and RAS inhibitors; alcohol, decongestants, oral contraceptives, stimulants, and licorice are others. Secondary causes should be sought, with obstructive sleep apnea the most common in this population and strongly suggested by her obesity, snoring, and witnessed apneas, followed by primary hyperaldosteronism, renovascular disease, and renal parenchymal disease. Diuretic therapy should be optimized, and chlorthalidone is preferred over hydrochlorothiazide because it is longer-acting and more potent, remaining effective down to an eGFR of about 30. When a fourth drug is needed, the PATHWAY-2 trial established spironolactone as superior to bisoprolol or doxazosin, reflecting the central role of unrecognized aldosterone excess."
      },
      {
        "text": "Conclude that she is nonadherent despite the pill count, since true resistance is rare, and use directly observed therapy before changing or adding any drug",
        "explanation": "Incorrect. Nonadherence is genuinely the most common cause of apparent resistance and must always be assessed, but the vignette states that adherence has been confirmed by pill count and that home readings match the office values. Insisting on nonadherence in the face of that evidence would delay identification of three concrete contributors. This would be the correct answer if adherence had not been assessed or if home readings were normal."
      },
      {
        "text": "Stop the hydrochlorothiazide, since an eGFR of 52 mL/min makes thiazides ineffective at this level of kidney function, and substitute a loop diuretic",
        "explanation": "Incorrect. Thiazides do lose potency as GFR falls, and a loop diuretic becomes necessary at an eGFR below roughly 30, but at 52 a thiazide remains effective, and chlorthalidone in particular retains activity well into stage 3 chronic kidney disease. Switching prematurely to a loop diuretic would also give shorter duration of action and worse 24-hour blood pressure control. This would be the correct answer if her eGFR were 22."
      },
      {
        "text": "Add a beta blocker as the preferred fourth agent, since sympathetic overactivity is what underlies resistant hypertension in most patients",
        "explanation": "Incorrect. Sympathetic overactivity does contribute, and a beta blocker is a reasonable later addition, particularly if another indication exists. However, PATHWAY-2 directly compared spironolactone with bisoprolol and doxazosin as the fourth agent and found spironolactone clearly superior, so aldosterone antagonism is the evidence-based next step. This would be the correct answer if she had a compelling indication for beta blockade such as heart failure or recent infarction."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Resistant hypertension means above goal on three drugs including a diuretic at optimal doses. Confirm with home readings and adherence, remove interfering substances (NSAIDs, alcohol, decongestants, stimulants), screen for secondary causes (sleep apnea first, then hyperaldosteronism), switch to CHLORTHALIDONE, and add SPIRONOLACTONE fourth per PATHWAY-2.",
    "lectureSource": "CV39: Hypertension Management",
    "pdfLecture": "CV39",
    "pdfPage": 20,
    "pdfQuote": "Resistant Hypertension Aldosterone receptor antagonist, beta blocker , direct"
  },
  {
    "id": 26,
    "category": "OMM: Temporal Bone Dysfunction",
    "questionText": "A 41-year-old woman has right-sided tinnitus, intermittent vertigo, and a sense of ear fullness that began after dental surgery requiring prolonged mouth opening. Cranial examination reveals restricted right temporal bone motion with a preference for internal rotation, and tenderness over the right temporomandibular joint. Which anatomic relationships best explain the association between temporal bone dysfunction and her symptoms?",
    "options": [
      {
        "text": "The temporal bone articulates only with the occiput, so its dysfunction can be treated entirely through occipital technique",
        "explanation": "Incorrect. The temporal bone has multiple articulations, including with the occiput at the occipitomastoid suture, the sphenoid at the sphenosquamous suture, the parietal at the squamous suture, the zygoma, and the mandible at the temporomandibular joint. Treating only the occiput would ignore most of the mechanism, particularly the mandibular relationship implicated by her history. This would be the correct answer if the temporal bone had a single articulation."
      },
      {
        "text": "The temporal bone is a midline bone that flexes and extends, so its dysfunction is named as flexion or extension rather than rotation",
        "explanation": "Incorrect. The temporal bones are PAIRED and therefore rotate externally and internally with the cranial rhythmic impulse; flexion and extension describe the behavior of the midline bones, namely the sphenoid, occiput, ethmoid, and vomer. The vignette correctly describes an internal rotation preference. This would be the correct answer if the temporal bones were midline structures."
      },
      {
        "text": "The temporal bone has no relationship to the mandible, so dental procedures cannot influence cranial mechanics",
        "explanation": "Incorrect. The mandible articulates directly with the temporal bone at the temporomandibular joint, and prolonged forced opening during dental work is a classic mechanism for producing temporal strain, which is precisely the history given. Dental and orthodontic procedures are among the more common precipitants of temporal dysfunction in osteopathic practice. This would be the correct answer if the mandible articulated with the sphenoid instead."
      },
      {
        "text": "Its petrous portion houses the vestibulocochlear apparatus, it articulates with the mandible, and its occipitomastoid suture abuts the jugular foramen",
        "explanation": "Correct. The temporal bone is often called the troublemaker of the cranium because so much converges within and around it. Its petrous portion houses the cochlea and vestibular apparatus, so strain patterns affecting the temporal bone are classically implicated in tinnitus, vertigo, and aural fullness. It articulates with the mandible at the temporomandibular joint, which explains why prolonged forced opening during dental work can produce or aggravate temporal dysfunction and why temporomandibular and cranial complaints so often travel together. The occipitomastoid suture, between the temporal and occipital bones, lies immediately adjacent to the jugular foramen, which transmits the glossopharyngeal, vagus, and accessory nerves along with the sigmoid sinus, so restriction there is held to affect both those nerves and venous drainage. The tentorium cerebelli also attaches along the petrous ridge, linking temporal motion directly to the reciprocal tension membrane, which is why temporal dysfunction so readily produces a global disturbance of the mechanism."
      },
      {
        "text": "The temporal bone contains the pituitary fossa, so its dysfunction produces endocrine as well as auditory symptoms",
        "explanation": "Incorrect. The pituitary sits in the sella turcica of the SPHENOID bone, not the temporal bone. That relationship is invoked in discussions of sphenoid strain patterns and endocrine function, but it is not relevant to the temporal bone or to this patient's symptoms. This would be the correct answer if the question concerned the sphenoid."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: The TEMPORAL BONE is the cranial troublemaker: petrous portion houses the cochlea and vestibular apparatus (tinnitus, vertigo, fullness), it articulates with the MANDIBLE (dental and TMJ links), the occipitomastoid suture sits at the JUGULAR FORAMEN (CN IX, X, XI and venous drainage), and the tentorium attaches along its petrous ridge.",
    "lectureSource": "CV34: Balanced Membranous Tension, V-Spread and CV4",
    "pdfLecture": "CV34",
    "pdfPage": 4,
    "pdfQuote": "3. Assess the Occipito-Mastoid (OM) Suture for restriction. Importance? Consider"
  },
  {
    "id": 27,
    "category": "Radiology: Lateral Chest Film",
    "questionText": "A lateral chest radiograph is reviewed. The retrosternal clear space is normal, but there is an increase in opacity over the lower thoracic vertebral bodies rather than the expected progressive darkening from superior to inferior. The posterior costophrenic sulci are sharp bilaterally, and both hemidiaphragms are traceable to the posterior chest wall. Which interpretation is best supported?",
    "options": [
      {
        "text": "A pleural effusion is present, since fluid layering posteriorly on the lateral film produces this increased opacity",
        "explanation": "Incorrect. Pleural fluid does collect first in the POSTERIOR costophrenic sulci on an upright film, which is why the lateral view detects effusions as small as 50 mL before the frontal view does at around 200 to 300 mL. However, the vignette states those sulci are sharp bilaterally, which argues against free fluid. This would be the correct answer if a posterior costophrenic angle were blunted with a meniscus."
      },
      {
        "text": "A retrocardiac or lower lobe process is present, since vertebral bodies fail to darken inferiorly, the spine sign",
        "explanation": "Correct. On a normal lateral chest radiograph the thoracic vertebral bodies appear progressively more lucent, that is, darker, as the eye moves inferiorly, because less soft tissue from the shoulder girdle overlies the lower spine and more aerated lung lies in front of it. Loss of that gradient, so that the lower vertebrae appear as dense as or denser than the upper ones, is the spine sign and indicates added density anterior to the lower spine. Because the lower lobes lie posteriorly and abut the spine, this most often reflects lower lobe consolidation, collapse, a mass, or a posteriorly layering effusion. It is particularly valuable for retrocardiac disease in the left lower lobe, which can be difficult to see on the frontal projection because it is superimposed on the cardiac silhouette. Here the sharp posterior sulci make effusion less likely, so a retrocardiac or lower lobe parenchymal process is the best interpretation. The corresponding anterior check is the retrosternal clear space, whose loss suggests an anterior mediastinal mass or right ventricular enlargement."
      },
      {
        "text": "The findings indicate emphysema, since the retrosternal clear space is described on this lateral chest radiograph",
        "explanation": "Incorrect. An ENLARGED retrosternal clear space with flattened hemidiaphragms and an increased anteroposterior diameter suggests hyperinflation, but the vignette explicitly describes the retrosternal space as normal and the diaphragms as traceable. The abnormality described is posterior, not anterior. This would be the correct answer if the retrosternal clear space were expanded with flat diaphragms."
      },
      {
        "text": "An anterior mediastinal mass is present, since increased density over the lower spine reflects anterior chest pathology",
        "explanation": "Incorrect. Anterior mediastinal masses obscure the RETROSTERNAL clear space, which is stated to be normal here, and would not increase density over the lower vertebral bodies. The spine sign points posteriorly. This would be the correct answer if the retrosternal clear space were opacified, prompting consideration of thymoma, teratoma, thyroid, or lymphoma."
      },
      {
        "text": "The lateral film adds nothing once an adequate frontal film has been obtained and should not be routinely acquired",
        "explanation": "Incorrect. The lateral view is complementary rather than redundant: it detects small effusions in the posterior sulci, reveals retrocardiac and posterior basal disease hidden behind the heart and diaphragm on the frontal projection, localizes lesions to a lobe using the fissures, and assesses the retrosternal and retrocardiac spaces. Dismissing it would forfeit exactly the finding described here. This would be the correct answer if the frontal projection captured all thoracic anatomy."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: On the lateral film the thoracic vertebrae should get DARKER as you move down. Failure to do so is the SPINE SIGN, indicating lower lobe or retrocardiac disease. Check the posterior costophrenic sulci for small effusions and the retrosternal clear space for anterior mediastinal masses or right ventricular enlargement.",
    "lectureSource": "CV41: The Normal Chest X-Ray"
  },
  {
    "id": 28,
    "category": "Pharmacology: Vasodilator Toxicity",
    "questionText": "A 46-year-old woman with severe resistant hypertension is placed on hydralazine 100 mg three times daily as monotherapy. Over the following months her blood pressure control deteriorates, she gains 5 kg with ankle edema, and her resting heart rate is 104/min. A year later she develops arthralgias, a malar rash, pleuritic chest pain, and a positive antinuclear antibody with antihistone antibodies. Which statement best explains this course?",
    "options": [
      {
        "text": "The drug is a nitric oxide donor, so tolerance developed through depletion of sulfhydryl groups, and the rash is a photosensitivity reaction",
        "explanation": "Incorrect. Sulfhydryl depletion producing tolerance is the mechanism proposed for organic nitrates such as nitroglycerin, and it is prevented by a nitrate-free interval. Hydralazine acts by a different mechanism, and the syndrome described is a drug-induced lupus rather than photosensitivity. This would be the correct answer if she were on continuous transdermal nitroglycerin."
      },
      {
        "text": "The drug is a calcium channel blocker, and the ankle edema reflects the precapillary vasodilation that is typical of that class",
        "explanation": "Incorrect. Dihydropyridine calcium channel blockers do cause a characteristic dose-dependent ankle edema through preferential arteriolar dilation raising capillary hydrostatic pressure, and that edema is not diuretic-responsive. Hydralazine, however, is a direct arteriolar vasodilator acting independently of calcium channels, and its edema arises through reflex RAAS activation. This would be the correct answer if she were taking amlodipine."
      },
      {
        "text": "The tachycardia and ankle edema indicate an acute allergic drug reaction, and the lupus features a year later are unrelated to the medication",
        "explanation": "Incorrect. Both phenomena are direct, expected consequences of the drug rather than allergic or coincidental. Reflex sympathetic activation and sodium retention are predictable pharmacologic effects, and drug-induced lupus with antihistone antibodies is one of the best-characterized adverse effects of hydralazine. This would be the correct answer if the findings had no established relationship to the drug."
      },
      {
        "text": "The drug should be replaced with minoxidil, which would avoid both the pseudotolerance and the lupus syndrome seen with hydralazine",
        "explanation": "Incorrect. Minoxidil is an even more potent direct arteriolar vasodilator and causes MORE severe reflex tachycardia and fluid retention, along with hypertrichosis and a risk of pericardial effusion, so it is reserved for truly refractory hypertension and always given with a beta blocker and a loop diuretic. Avoiding hydralazine's lupus risk by substituting minoxidil trades one problem for larger ones. This would be the correct answer if minoxidil were hemodynamically neutral."
      },
      {
        "text": "Arteriolar vasodilation gives reflex tachycardia and RAAS sodium retention, so pseudotolerance, plus drug-induced lupus in slow acetylators",
        "explanation": "Correct. Hydralazine dilates arterioles directly with little effect on veins, so it lowers peripheral resistance without causing orthostatic hypotension. The abrupt fall in pressure unloads the baroreceptors and triggers reflex sympathetic activation with tachycardia and increased contractility, which raises myocardial oxygen demand and can provoke angina, and simultaneously activates the renin-angiotensin-aldosterone system, producing sodium and water retention that expands volume and progressively erodes the antihypertensive effect. This loss of efficacy is called pseudotolerance and is why direct vasodilators are always given as part of a triple regimen with a beta blocker to blunt the reflex tachycardia and a loop diuretic to counter the fluid retention. Separately, hydralazine causes a dose-related drug-induced lupus with arthralgias, serositis, rash, and positive antinuclear and antihistone antibodies; risk is highest in slow acetylators and in patients on higher doses, and the syndrome resolves after the drug is stopped."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Direct arteriolar vasodilators (hydralazine, minoxidil) cause reflex TACHYCARDIA and RAAS-driven SODIUM RETENTION, so they lose effect as monotherapy (pseudotolerance) and must be given with a beta blocker plus a loop diuretic. Hydralazine also causes drug-induced lupus (antihistone antibodies, slow acetylators); minoxidil causes hypertrichosis and pericardial effusion.",
    "lectureSource": "CV37: Alpha Blockers, Central Sympatholytics and Vasodilators",
    "pdfLecture": "CV37",
    "pdfPage": 31,
    "pdfQuote": "Note: Because of preferential dilation of arterioles over veins, sympathetic reflexes"
  },
  {
    "id": 29,
    "category": "Immunology: Anaphylaxis Management",
    "questionText": "A 26-year-old man develops generalized urticaria, stridor, wheezing, and a blood pressure of 72/40 mmHg two minutes after an intravenous antibiotic. He is given intramuscular epinephrine 0.5 mg in the anterolateral thigh, high-flow oxygen, and a rapid crystalloid bolus, with improvement. A student asks why epinephrine rather than an antihistamine and steroid is the first-line drug, and why the intramuscular thigh route is specified. Which explanation is best?",
    "options": [
      {
        "text": "Epinephrine works because it is a pure beta-2 agonist that reverses bronchospasm, which is the lethal component",
        "explanation": "Incorrect. Epinephrine acts at alpha-1, beta-1, and beta-2 receptors, and although beta-2-mediated bronchodilation is important, restricting the explanation to that arm omits the alpha-1 vasoconstriction that reverses the distributive shock and the capillary leak. A pure beta-2 agonist such as albuterol is a useful adjunct but is not adequate treatment for anaphylaxis. This would be the correct answer if bronchospasm were the only mechanism of death."
      },
      {
        "text": "Antihistamines and corticosteroids are equally effective first-line agents; epinephrine is used only when they fail",
        "explanation": "Incorrect. Antihistamines relieve urticaria and pruritus but do nothing for the airway or the circulation and have no effect on the mediators already released, and corticosteroids take hours to act through gene transcription so they cannot help acutely. Both are adjuncts, and treating them as first-line delays the only intervention that reverses the pathophysiology, which is the leading contributor to fatal outcomes. This would be the correct answer if histamine receptor blockade reversed distributive shock."
      },
      {
        "text": "Epinephrine reverses every arm through alpha-1, beta-1 and beta-2 effects, and the thigh gives rapid, reliable absorption",
        "explanation": "Correct. Anaphylaxis kills through airway obstruction and distributive shock, and epinephrine is the only drug that addresses both simultaneously. Alpha-1 agonism constricts arterioles and venules, reversing the vasodilation, raising perfusion pressure, and reducing the mucosal edema causing stridor, while also tightening the leaky endothelial barrier. Beta-1 agonism increases heart rate and contractility. Beta-2 agonism relaxes bronchial smooth muscle and, importantly, raises intracellular cyclic AMP in mast cells and basophils, which inhibits further mediator release. Because there is no absolute contraindication in true anaphylaxis, it should be given immediately and repeated every 5 to 15 minutes as needed. The intramuscular anterolateral thigh, that is, the vastus lateralis, is specified because that muscle is large and well perfused, so absorption is faster and peak levels higher than with subcutaneous or deltoid administration, and unlike intravenous dosing it avoids the risk of arrhythmia and hypertensive crisis from an inadvertent bolus. Antihistamines, corticosteroids, and inhaled beta-2 agonists are adjuncts, and observation for biphasic reactions is required."
      },
      {
        "text": "The intravenous route should always be preferred, since it produces the fastest onset",
        "explanation": "Incorrect. Intravenous epinephrine is reserved for refractory anaphylaxis or cardiac arrest and is given as a carefully titrated dilute infusion, because bolus intravenous dosing has caused ventricular arrhythmias, hypertensive crisis, and myocardial infarction. Intramuscular administration in the thigh provides rapid, reliable absorption with a far better safety margin. This would be the correct answer if intravenous bolus dosing carried no additional risk."
      },
      {
        "text": "Epinephrine is given chiefly to prevent the biphasic reaction that occurs 4 to 12 hours later",
        "explanation": "Incorrect. Biphasic reactions do occur in a minority of patients hours after apparent resolution and are the reason for a period of observation, but epinephrine is given to reverse the immediate, life-threatening reaction rather than as prophylaxis against recurrence. Prompt epinephrine is in fact associated with a lower risk of biphasic reactions, but that is a secondary benefit. This would be the correct answer if the primary indication were prevention of the late phase."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: EPINEPHRINE IM in the anterolateral thigh is first-line and has no absolute contraindication in anaphylaxis. Alpha-1 reverses vasodilation and mucosal edema and tightens the leaky barrier, beta-1 supports output, beta-2 bronchodilates and stabilizes mast cells. Antihistamines and steroids are adjuncts only. Observe for biphasic reactions.",
    "lectureSource": "CV40: Shock Pathophysiology and Management",
    "pdfLecture": "CV40",
    "pdfPage": 30,
    "pdfQuote": "especially if present after epinephrine"
  },
  {
    "id": 30,
    "category": "OMM: Postural Compensation Patterns",
    "questionText": "A 52-year-old man has chronic right-sided low back and hip pain. Standing structural examination shows a low left iliac crest and a low left sacral base, a lumbar convexity to the left, a compensatory thoracic convexity to the right, and a high left shoulder. There is a right-sided piriformis tenderness and tightness of the left quadratus lumborum. Which description of the compensation pattern is most accurate?",
    "options": [
      {
        "text": "The short leg lowers the sacral base on that side, with a lumbar convexity toward the low side and a counter-curve above",
        "explanation": "Correct. A leg length discrepancy tilts the pelvis so that the sacral base is lower on the short side, here the left, and because the head must remain level over the base of support the spine develops a compensatory curve. The lumbar spine becomes convex TOWARD the low side, so a low left sacral base produces a lumbar convexity to the left, and a counter-curve then develops above it, giving the thoracic convexity to the right and the resulting shoulder asymmetry. The adaptation is three-dimensional rather than purely coronal: vertebral rotation accompanies the sidebending, the facets on the concave side become compressed and irritable, and muscular adaptation follows, with shortening of the quadratus lumborum on the concave side and altered tension in the piriformis, gluteus medius, and iliopsoas. That is why symptoms are frequently muscular and articular rather than being felt at the leg itself, and why treatment addresses somatic dysfunction as well as the sacral base level. The distinction between an anatomic short leg, from true bone length, and a functional one, from pelvic dysfunction or muscle imbalance, must be made before lift therapy, since a functional discrepancy is treated by correcting the dysfunction rather than by adding a lift."
      },
      {
        "text": "The short leg produces a superior sacral base on that side, so the lumbar convexity points away from the short leg",
        "explanation": "Incorrect. This reverses the mechanics in both parts. The short side is the LOW side, so the sacral base is inferior there, and the lumbar spine becomes convex TOWARD rather than away from that side. Getting the direction wrong would lead to placing a lift under the wrong foot. This would be the correct answer if shortening a limb raised the pelvis on that side."
      },
      {
        "text": "Compensation occurs only in the lumbar spine, so the thoracic curve and shoulder findings must indicate separate pathology",
        "explanation": "Incorrect. Compensation is characteristically a whole-body pattern: the primary lumbar curve is followed by a counter-curve in the thoracic spine and often a further adjustment at the cervicothoracic junction, which is why shoulder height asymmetry and even cranial base findings accompany a leg length discrepancy. Treating the thoracic findings as unrelated would fragment the assessment. This would be the correct answer if the spine compensated segmentally without counter-curves."
      },
      {
        "text": "Muscle findings such as piriformis and quadratus lumborum tightness are incidental and should not influence the treatment plan",
        "explanation": "Incorrect. Muscular adaptation is an integral part of the pattern and is frequently the source of the presenting pain, with piriformis tightness in particular capable of producing sciatic-type symptoms. These findings guide manual treatment and should be addressed alongside lift therapy, since persistent hypertonicity limits the structure's ability to adapt to the corrected base. This would be the correct answer if soft tissue findings were unrelated to postural mechanics."
      },
      {
        "text": "This pattern establishes an anatomic short leg, so radiographic measurement is unnecessary before starting lift therapy",
        "explanation": "Incorrect. Clinical examination alone cannot reliably distinguish an anatomic from a functional discrepancy or measure it accurately, and standing postural radiography with measurement of femoral head heights and sacral base level is the standard before committing to lift therapy. Pelvic somatic dysfunction should also be treated first, since it can create an apparent discrepancy that resolves with treatment. This would be the correct answer if clinical estimation were as accurate as standing radiographic measurement."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: The SHORT leg gives a LOW sacral base on that side, a lumbar convexity TOWARD the low side, and a thoracic counter-curve with shoulder asymmetry, plus rotation and muscular adaptation (short quadratus lumborum on the concavity, irritable piriformis). Distinguish anatomic from functional shortening and treat pelvic somatic dysfunction before measuring for a lift.",
    "lectureSource": "CV33: Short Leg Syndrome and Heel Lift Therapy",
    "pdfLecture": "CV33",
    "pdfPage": 4,
    "pdfQuote": "Caudal curve side-bending away from side of low sacral base, most often."
  },
  {
    "id": 31,
    "category": "Cardiovascular Medicine: Target-Organ Damage in Chronic Hypertension",
    "questionText": "A 62-year-old man with a 20-year history of poorly controlled hypertension presents with 6 months of exertional dyspnea and orthopnea. He has taken his medications only intermittently. Blood pressure is 178/104 mmHg and heart rate is 82 per minute. Exam reveals a sustained, forceful, non-displaced apical impulse, an S4 gallop, and bibasilar crackles; there is no murmur and no jugular venous distention at rest. Fundoscopy shows arteriolar narrowing with arteriovenous nicking but no hemorrhages, exudates, or disc swelling. Serum creatinine is 1.8 mg/dL with 1+ proteinuria, and echocardiography shows a concentrically thickened left ventricle with an ejection fraction of 60 percent and impaired early diastolic filling. Which of the following best explains the combination of cardiac, retinal, and renal findings in this patient?",
    "options": [
      {
        "text": "Eccentric ventricular remodeling from chronic volume overload reducing contractile force",
        "explanation": "Incorrect. Eccentric remodeling means sarcomeres added in series with chamber dilation and a thin wall, which is the pattern of volume overload from aortic or mitral regurgitation, and this patient has a concentrically thickened wall with a preserved ejection fraction and no murmur. His symptoms come from a stiff, small-cavity ventricle rather than a dilated failing one. This would be the correct answer if he had chronic severe aortic regurgitation with a wide pulse pressure, a dilated left ventricle, and a falling ejection fraction."
      },
      {
        "text": "Fixed epicardial coronary stenosis causing demand ischemia and transient wall motion loss",
        "explanation": "Incorrect. Although hypertension accelerates atherosclerosis, this patient reports no angina, and his echocardiogram shows uniform concentric thickening with normal global systolic function rather than a regional wall motion abnormality in a coronary distribution. His retinal and renal findings point to diffuse small-vessel hypertensive injury rather than a single obstructing plaque. This would be the correct answer if he had exertional chest pressure with reversible inferior wall hypokinesis on stress imaging and a critical right coronary lesion."
      },
      {
        "text": "Amyloid infiltration of the myocardium producing an infiltrative restrictive cardiomyopathy",
        "explanation": "Incorrect. Infiltrative disease can also thicken walls and impair relaxation, but it characteristically produces low voltage on electrocardiography despite thick walls, and it does not explain his arteriolar narrowing with arteriovenous nicking or his proteinuric renal insufficiency. Two decades of untreated pressure overload already account for every finding here. This would be the correct answer if he had a thick-walled ventricle with discordantly low QRS voltage, periorbital purpura, carpal tunnel syndrome, and a monoclonal light chain."
      },
      {
        "text": "Malignant hypertension with fibrinoid necrosis of arterioles and acute papilledema",
        "explanation": "Incorrect. Malignant or accelerated hypertension requires evidence of acute ongoing injury such as papilledema, rapidly rising creatinine, or microangiopathic hemolysis, and this patient specifically has no disc swelling and a chronic indolent course. His findings represent long-standing benign nephrosclerosis and grade 2 retinopathy, not fibrinoid necrosis. This would be the correct answer if his pressure were 230/140 mmHg with bilateral papilledema, schistocytes on smear, and creatinine doubling over several days."
      },
      {
        "text": "Pressure-overload concentric hypertrophy with arteriolosclerosis of retina and kidney",
        "explanation": "Correct. Chronic elevation of afterload increases left ventricular systolic wall stress, and sarcomeres are added in parallel, producing concentric hypertrophy that normalizes wall stress at the cost of a thick, small-cavity, noncompliant chamber, which is exactly the sustained, forceful, non-displaced apical impulse felt on exam. That stiff ventricle raises filling pressures during diastole, which explains the S4 from atrial contraction into a noncompliant ventricle, the crackles, and the impaired early filling with a preserved ejection fraction. The same chronic pressure load separately drives small-vessel injury: in the retina, arteriolosclerosis with medial hypertrophy and intimal thickening produces the arteriolar narrowing and arteriovenous nicking of grade 2 retinopathy, and the absence of hemorrhages, exudates, and papilledema marks this as chronic rather than accelerated disease. In the kidney, hyaline arteriolosclerosis causes ischemic glomerulosclerosis, which is benign nephrosclerosis and accounts for the creatinine of 1.8 mg/dL with mild proteinuria. Heart, eye, and kidney are all manifesting the consequences of decades of untreated pressure."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Chronic pressure overload adds sarcomeres in PARALLEL, giving CONCENTRIC hypertrophy with diastolic dysfunction and preserved ejection fraction, while the same pressure load separately causes arteriolosclerosis in retina and kidney (AV nicking, benign nephrosclerosis); papilledema signals a MALIGNANT phase, not chronic damage.",
    "lectureSource": "CV38: Clinical Hypertension",
    "pdfLecture": "CV38",
    "pdfPage": 33,
    "pdfQuote": "Left Ventricular Hypertrophy"
  },
  {
    "id": 32,
    "category": "Pharmacology: Beta Blocker Withdrawal",
    "questionText": "A 58-year-old man with hypertension and chronic stable angina has taken metoprolol succinate 200 mg daily for three years without symptoms. He traveled abroad, ran out of his prescription, and has taken no doses for three days. He now reports pounding palpitations, tremor, and squeezing substernal chest pressure that is occurring at rest and lasting several minutes. Temperature is 37.0 degrees C, heart rate is 118 per minute and regular, and blood pressure is 178/98 mmHg. ECG shows sinus tachycardia with 1 mm horizontal ST depression in the lateral leads, and the initial troponin is normal. Which of the following best explains his current presentation?",
    "options": [
      {
        "text": "Reduced sympathetic outflow from unopposed vagal tone",
        "explanation": "Incorrect. A shift toward parasympathetic dominance would slow this man's heart and drop his pressure, the opposite of the rate of 118 per minute and blood pressure of 178/98 mmHg recorded here. Nothing about missing several doses of a beta-1 antagonist augments vagal drive; withdrawal releases sympathetic effects rather than suppressing them. This would be the correct answer if he had presented with symptomatic bradycardia, fatigue, and hypotension shortly after a dose increase."
      },
      {
        "text": "Accumulation of an active metoprolol metabolite in plasma",
        "explanation": "Incorrect. He has taken no metoprolol for three days, so drug levels are falling rather than accumulating, and there is no clinically important cardiostimulatory metabolite of metoprolol. Excess drug would cause bradycardia, fatigue, and hypotension, not tachycardia at 118 per minute with ischemic ST depression. This would be the correct answer if he had doubled his dose or developed hepatic impairment and presented with profound bradycardia and heart block."
      },
      {
        "text": "Blockade of alpha-1 receptors unmasked by the missed doses",
        "explanation": "Incorrect. Metoprolol is a selective beta-1 antagonist with no alpha-1 blocking activity, so discontinuing it can neither create nor unmask alpha blockade. Alpha-1 blockade would also lower systemic vascular resistance and blood pressure, whereas he is hypertensive at 178/98 mmHg with clear signs of sympathetic excess. This would be the correct answer if he had been taking carvedilol or labetalol and presented with orthostatic hypotension and dizziness."
      },
      {
        "text": "Upregulated beta receptors exposed to normal catecholamines",
        "explanation": "Correct. Prolonged beta blockade removes tonic agonist occupancy, and the myocardium compensates by increasing beta-1 receptor density and coupling, a supersensitized state that stays clinically silent while the drug is on board. When metoprolol is stopped abruptly, ordinary circulating catecholamines act on that expanded receptor pool and produce rebound tachycardia, hypertension, tremor, and a steep rise in myocardial oxygen demand. In a man with fixed coronary stenosis, that demand-supply mismatch reproduces angina at rest and generates the lateral ST depression seen on his ECG, with real risk of infarction or ventricular arrhythmia. The timing is characteristic, since rebound emerges within a few days of stopping, well after the drug itself has cleared. The preventive measure is tapering over one to two weeks rather than stopping outright."
      },
      {
        "text": "Loss of intrinsic sympathomimetic activity at beta-2 receptors",
        "explanation": "Incorrect. Metoprolol has no intrinsic sympathomimetic activity, so there is no partial agonist effect to be lost when it is withdrawn. Agents that do possess intrinsic sympathomimetic activity, such as pindolol and acebutolol, cause less resting bradycardia and are described as producing less withdrawal rebound, not more. This would be the correct answer if the question asked why pindolol, through partial agonism at beta-2 receptors, lowers systemic vascular resistance more than an agent lacking intrinsic sympathomimetic activity."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Chronic beta blockade UPREGULATES cardiac beta receptors, so abrupt discontinuation exposes a supersensitive myocardium to normal catecholamines and causes rebound tachycardia, hypertension, and angina; always TAPER over one to two weeks.",
    "lectureSource": "CV36: Calcium Channel Blockers and Beta Blockers",
    "pdfLecture": "CV36",
    "pdfPage": 54,
    "pdfQuote": "Beta Blockers Withdrawal Syndrome"
  },
  {
    "id": 33,
    "category": "Cardiovascular Pharmacology: Direct Renin Inhibition and Dual RAS Blockade",
    "questionText": "A 61-year-old man with type 2 diabetes mellitus, diabetic nephropathy, and hypertension has been taking lisinopril 40 mg daily for two years. His blood pressure today is 152/94 mm Hg and his urine albumin-to-creatinine ratio remains elevated at 780 mg/g. Serum creatinine is 1.6 mg/dL, estimated glomerular filtration rate is 48 mL/min/1.73 m2, and serum potassium is 4.9 mEq/L. A colleague proposes adding aliskiren, a drug that binds the active site of renin and blocks conversion of angiotensinogen to angiotensin I, arguing that more complete pathway suppression will lower both pressure and proteinuria. Which statement best characterizes the expected outcome of this proposed regimen?",
    "options": [
      {
        "text": "Angiotensin II generation will be restored within days because plasma renin activity rebounds",
        "explanation": "Incorrect. Aliskiren blocks the catalytic activity of renin itself, so although immunoreactive renin concentration rises through loss of angiotensin II negative feedback, measured plasma renin ACTIVITY falls rather than rises, and angiotensin II generation is not restored in this patient. Framing the problem as pharmacologic escape also misses the real reason to avoid the combination, which is additive renal and electrolyte injury. This would be the correct answer if the added agent were an angiotensin receptor blocker, since AT1 blockade removes negative feedback so that both plasma renin activity AND circulating angiotensin II rise while only the receptor is blocked."
      },
      {
        "text": "Serum potassium will fall as distal sodium delivery increases and offsets the lisinopril effect",
        "explanation": "Incorrect. Aliskiren suppresses the same axis as lisinopril and therefore lowers aldosterone further, which reduces rather than increases potassium excretion in the cortical collecting duct, so potassium will rise rather than fall in this man whose value is already 4.9 mEq/L on a reduced glomerular filtration rate. No agent that blocks renin increases distal sodium delivery in a way that protects against hyperkalemia. This would be the correct answer if the added drug were a thiazide or loop diuretic, which do raise distal sodium and flow and are in fact often used to blunt the hyperkalemia of an ACE inhibitor."
      },
      {
        "text": "The combination increases hyperkalemia, hypotension, and acute kidney injury without added benefit",
        "explanation": "Correct. Aliskiren is a direct renin inhibitor that blocks the rate-limiting step of the cascade, so pairing it with lisinopril produces dual blockade of one pathway rather than complementary actions on two. Large outcome trials in diabetic patients with reduced glomerular filtration rate showed that adding aliskiren to an ACE inhibitor or an angiotensin receptor blocker raised the rates of hyperkalemia, symptomatic hypotension, and acute kidney injury while failing to improve renal or cardiovascular endpoints. This man has three of the classic amplifiers of that harm, namely diabetes, an estimated glomerular filtration rate of 48 mL/min/1.73 m2, and a potassium already in the upper normal range. The same caution applies to combining an ACE inhibitor with an angiotensin receptor blocker, and aliskiren is specifically contraindicated with either agent in patients with diabetes. Better options for him are maximizing antihypertensives outside the renin-angiotensin class, adding a sodium-glucose cotransporter 2 inhibitor, or adding a thiazide-type diuretic."
      },
      {
        "text": "The response will be blunted unless hepatic esterases activate this ester prodrug adequately",
        "explanation": "Incorrect. Aliskiren is an active drug given as such, not an ester prodrug, and it is poorly absorbed with low bioavailability rather than dependent on hepatic conversion, so no esterase step stands between the dose and the effect and screening this man for hepatic impairment would not address the actual danger of dual blockade. His problem is renal and electrolyte risk, not activation pharmacokinetics. This would be the correct answer if the drug under discussion were enalapril, ramipril, or another ester prodrug that must be de-esterified in the liver to its active diacid, where significant hepatic dysfunction genuinely delays and blunts the therapeutic effect."
      },
      {
        "text": "Cough and angioedema risk will fall because aliskiren acts upstream of angiotensin-converting enzyme",
        "explanation": "Incorrect. Aliskiren does not inhibit kininase II, but this man is remaining on lisinopril, so bradykinin continues to accumulate exactly as before and kinin-mediated cough and angioedema risk is not reduced at all by layering a renin inhibitor on top. Kinin biology is also irrelevant to the hyperkalemia and acute kidney injury risk being created here. This would be the correct answer if aliskiren REPLACED lisinopril rather than being added to it, since a direct renin inhibitor does not inhibit kininase II and therefore does not raise bradykinin."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Blocking the renin-angiotensin axis at two points, whether ACE inhibitor plus ARB or either one plus aliskiren, adds hyperkalemia, hypotension, and acute kidney injury with NO outcome benefit; aliskiren plus an ACE inhibitor or ARB is contraindicated in diabetes.",
    "lectureSource": "CV35: RAS Inhibitors",
    "pdfLecture": "CV35",
    "pdfPage": 44,
    "pdfQuote": "1. Increased risk of hyperkalemia / hypotension / renal impairment"
  },
  {
    "id": 34,
    "category": "Cardiovascular Medicine: Blood Pressure Measurement and Masked Hypertension",
    "questionText": "A 62-year-old man comes for a routine visit. Over the past year his attended office blood pressure has been recorded on three separate occasions as 122/76, 118/74, and 124/78 mm Hg, each obtained with a correctly sized cuff after five minutes of seated rest with his back supported, feet flat, and arm at heart level. He smokes one pack of cigarettes daily and works rotating night shifts as a warehouse loader. An electrocardiogram obtained to evaluate palpitations shows increased left ventricular voltage with lateral ST depression, and a spot urine albumin-to-creatinine ratio is 190 mg/g. Echocardiography confirms concentric left ventricular hypertrophy with a normal ejection fraction and no valvular disease. Which of the following is the most appropriate next step in evaluating his blood pressure?",
    "options": [
      {
        "text": "Reassure him that his blood pressure is controlled and recheck at his annual visit",
        "explanation": "Incorrect. Reassurance ignores the central abnormality in this case, which is hypertension-mediated organ damage that his recorded office pressures cannot explain, and deferring evaluation for a year allows continued pressure load on an already hypertrophied ventricle and a leaking glomerulus. Normal attended office readings never exclude hypertension when the pressures outside the clinic are higher, which is precisely the pattern suggested here. This would be the correct answer if his echocardiogram and urine albumin were entirely normal and his office averages were consistently below 120/80 mm Hg with no additional cardiovascular risk factors."
      },
      {
        "text": "Obtain 24-hour ambulatory monitoring to look for masked hypertension",
        "explanation": "Correct. His properly measured office averages are below the 130/80 mm Hg diagnostic threshold, yet he has unmistakable target organ damage in the form of concentric left ventricular hypertrophy and moderately increased albuminuria, and that mismatch is the classic signature of masked hypertension. Masked hypertension is defined by out-of-office pressures that are elevated while properly measured attended office pressures appear near normal, and it carries a cardiovascular risk comparable to sustained hypertension because the myocardium and kidney experience the true higher load all day. Daily smoking and rotating night shifts are recognized contributors, since nicotine raises pressure transiently outside the clinic and shift work blunts the normal nocturnal dip. Ambulatory monitoring is the reference standard because it alone provides daytime, nighttime, and 24-hour averages and is the only method that can identify a nondipping nocturnal pattern. Home monitoring with a validated upper arm device, two readings morning and evening for seven days, is an acceptable alternative when ambulatory monitoring is unavailable."
      },
      {
        "text": "Repeat the office measurement with a larger cuff later in the same visit",
        "explanation": "Incorrect. An undersized cuff falsely raises the reading, so substituting a larger cuff would push his numbers even lower and move him further from an explanation for the hypertrophy and albuminuria, and the stem already states that a correctly sized cuff and proper positioning were used. Repeating an attended in-office measurement cannot detect pressures that are elevated only outside the clinic. This would be the correct answer if a small cuff had been wrapped around a large arm and the reading came back unexpectedly high, since replacing it with a properly sized cuff would correct that falsely elevated value."
      },
      {
        "text": "Diagnose white coat hypertension and defer any pharmacologic therapy for now",
        "explanation": "Incorrect. White coat hypertension is the mirror image of what is happening here, consisting of elevated readings in the clinic with normal pressures at home, and it cannot be assigned to a man whose clinic values are the lower of the two possibilities and who already demonstrates target organ damage. Applying that label would wrongly close the evaluation and leave a high out-of-office burden untreated. This would be the correct answer if his office averages were 152/94 mm Hg on repeated visits while validated home averages ran near 122/76 mm Hg with no left ventricular hypertrophy and no albuminuria."
      },
      {
        "text": "Begin chlorthalidone now on the basis of the electrocardiographic findings",
        "explanation": "Incorrect. His properly measured office pressures are below the treatment threshold, so drug therapy cannot be started until out-of-office monitoring documents that his true pressure is elevated, and starting a thiazide-like diuretic now would also forfeit the baseline out-of-office number that will be used to judge his response to treatment. Electrocardiographic voltage criteria support the suspicion but do not by themselves establish that his pressures are elevated. This would be the correct answer if ambulatory monitoring had already demonstrated a 24-hour average of 145/90 mm Hg, at which point antihypertensive drug therapy would clearly be indicated."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Near-normal office pressures with unexplained left ventricular hypertrophy or albuminuria should trigger ambulatory or home monitoring for MASKED hypertension, the mirror image of WHITE COAT hypertension, in which office readings are high and out-of-office readings are normal.",
    "lectureSource": "CV39: Hypertension Management"
  },
  {
    "id": 35,
    "category": "Musculoskeletal Medicine: Scoliometer Screening and Referral",
    "questionText": "A 12-year-old girl is sent to your office after a middle school spine screening. She reached menarche 3 months ago, feels well, and denies back pain, night pain, paresthesias, and weakness. On standing inspection her right shoulder sits slightly higher and her waist creases are asymmetric. With the patient bent forward at the hips, knees extended and arms hanging freely, a scoliometer laid across the back at the thoracic apex records an angle of trunk rotation of 8 degrees over a right-sided rib prominence, and 2 degrees over the lumbar region. Her gait, strength, reflexes, and superficial abdominal reflexes are normal, her feet show normal arches, and her skin has no midline dimple, hair patch, or pigmented macules. Which of the following is the most appropriate next step in management?",
    "options": [
      {
        "text": "Obtain standing posteroanterior spine radiographs",
        "explanation": "Correct. The scoliometer does not measure the coronal curve; it measures the angle of trunk rotation, the axial rotational deformity that a structural curve produces as the vertebral bodies rotate toward the convexity and drag the ribs posteriorly. An angle of trunk rotation of 7 degrees or greater at the apex is the conventional referral threshold because it corresponds on average to a coronal curve of roughly 20 degrees, the magnitude at which treatment decisions actually begin. This girl reads 8 degrees, so upright full-length posteroanterior radiographs are required to measure the true curve magnitude and skeletal maturity before choosing between observation and bracing. Using a lower cutoff such as 5 degrees increases sensitivity but floods clinics with false positive referrals and unnecessary radiation, which is why most programs refer at 7 degrees. Her benign history, typical right thoracic pattern, and entirely normal neurologic examination point to idiopathic disease, so plain films rather than advanced imaging are the appropriate first study."
      },
      {
        "text": "Repeat scoliometer screening in about six months",
        "explanation": "Incorrect. Serial scoliometer surveillance without imaging is the right plan only for rotation below the referral threshold, generally under 5 to 7 degrees, in a child with no red flags. This patient already measures 8 degrees, which statistically predicts a coronal curve near or above 20 degrees, and although she is already 3 months post-menarchal, she typically retains about 2 years of remaining spinal growth, so a curve at or beyond 20 degrees can still progress meaningfully. Deferring imaging for half a year risks silent progression into the bracing or even surgical range with no baseline measurement for comparison. This would be the correct answer if her angle of trunk rotation had been 4 degrees with a normal neurologic examination and no visible trunk asymmetry."
      },
      {
        "text": "Reassure and resume routine annual well visits",
        "explanation": "Incorrect. Reassurance alone assumes the screening examination was negative, but a rotational prominence of 8 degrees over the thoracic apex plus shoulder and waistline asymmetry is a positive screen by any accepted criterion. Discharging her to routine care would waste the very growth window in which detection changes outcome, since a curve found early enough can often be controlled nonoperatively. The absence of pain is reassuring about secondary causes but says nothing about the magnitude of her curve. This would be the correct answer if her forward bend examination had been symmetric with a scoliometer reading of 0 to 2 degrees and no clinical deformity."
      },
      {
        "text": "Order a screening MRI of the entire neuraxis",
        "explanation": "Incorrect. Neuraxis MRI is reserved for atypical scoliosis that suggests an underlying intraspinal abnormality such as syringomyelia, Chiari malformation, tethered cord, or a tumor. The classic red flags are onset before about age 10, a left thoracic curve, rapid progression, significant or nocturnal pain, absent superficial abdominal reflexes, cavovarus foot deformity, or any focal neurologic deficit. This 12-year-old post-menarchal girl has a right thoracic prominence, no pain, normal feet, and intact abdominal reflexes, which is textbook adolescent idiopathic disease, and MRI would not supply the curve magnitude that drives management. This would be the correct answer if she were 8 years old with a left thoracic curve, absent abdominal reflexes, and a cavovarus foot."
      },
      {
        "text": "Fit a thoracolumbosacral orthosis immediately",
        "explanation": "Incorrect. Bracing is prescribed on the basis of a radiographically measured curve, conventionally in the 25 to 40 degree range, in a patient with documented remaining skeletal growth. A scoliometer reading alone cannot establish either variable, and committing an adolescent to many hours per day in an orthosis without knowing the curve magnitude risks treating a curve too small to need it. Her 8 degrees of trunk rotation may correspond to anything from a mild curve to a curve well past the brace threshold, and only upright films can distinguish these. This would be the correct answer if standing radiographs had already shown a 32 degree curve in a patient with substantial growth remaining."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: The scoliometer measures ANGLE OF TRUNK ROTATION, not the Cobb angle; a reading of 7 degrees or more at the apex predicts a curve near 20 degrees and warrants standing radiographs, while lower cutoffs gain sensitivity at the cost of many false positive referrals.",
    "lectureSource": "CV32: Scoliosis",
    "pdfLecture": "CV32",
    "pdfPage": 43,
    "pdfQuote": "Scoliometer reading > or = to 7 degrees (may need treatment)"
  },
  {
    "id": 36,
    "category": "Cardiovascular Pathophysiology: Obstructive Shock",
    "questionText": "A 64-year-old man presents with progressive dyspnea and lightheadedness 5 days after transvenous permanent pacemaker implantation. Blood pressure is 84/58 mmHg, heart rate 124/min, respiratory rate 24/min, and oxygen saturation is 96 percent on room air. Neck veins are distended to the angle of the jaw, heart sounds are distant, and the lungs are clear with equal breath sounds bilaterally and a midline trachea. The systolic pressure falls 20 mmHg during quiet inspiration. ECG shows sinus tachycardia with low voltage and beat-to-beat variation in QRS amplitude, and a right heart catheter placed at the bedside records a mean right atrial pressure of 21 mmHg, right ventricular end-diastolic pressure of 22 mmHg, pulmonary artery diastolic pressure of 22 mmHg, pulmonary capillary wedge pressure of 22 mmHg, and a cardiac index of 1.6 L/min/m2. Which of the following is the most appropriate immediate intervention?",
    "options": [
      {
        "text": "Needle decompression, left second interspace, midclavicular line",
        "explanation": "Incorrect. Tension pneumothorax also produces obstructive shock with distended neck veins, but this patient has clear symmetric breath sounds, a midline trachea, and a normal oxygen saturation, none of which fit a hemithorax under pressure. Needle decompression here would puncture a normal lung and delay drainage of the pericardium. This would be the correct answer if the patient had unilateral absent breath sounds with hyperresonance, tracheal deviation away from that side, and severe hypoxemia after a subclavian venous puncture."
      },
      {
        "text": "Systemic thrombolysis with intravenous alteplase infusion",
        "explanation": "Incorrect. Massive pulmonary embolism obstructs the right ventricular outflow, so right atrial pressure rises while the wedge pressure stays low or normal because the left ventricle is underfilled, and profound hypoxemia is typical. This patient has equalized right and left sided diastolic pressures at about 22 mmHg with a normal saturation, which is the opposite pattern, and lysing a fresh postprocedural pericardial bleed would be catastrophic. This would be the correct answer if bedside echocardiography showed a dilated hypokinetic right ventricle with a low wedge pressure and sustained hypotension from a saddle pulmonary embolus."
      },
      {
        "text": "Ultrasound guided pericardiocentesis with catheter drainage",
        "explanation": "Correct. Hypotension with distended neck veins and distant heart sounds days after transvenous lead placement points to a pericardial effusion under pressure from lead perforation, and the pulsus paradoxus of 20 mmHg with low voltage and electrical alternans confirms tamponade physiology. Because the tense pericardium fixes total intracardiac volume, the chambers compete during diastole, which is why the right atrial, right ventricular diastolic, pulmonary artery diastolic, and wedge pressures are all equalized near 22 mmHg. Restricted diastolic filling drops stroke volume, producing the narrow pulse pressure, the low cardiac index, and reflex tachycardia. Clear symmetric lungs with a midline trachea exclude tension pneumothorax, and equalized pressures with a normal saturation argue against massive embolism. Evacuating the fluid immediately relieves the external constraint, so pericardial drainage is both diagnostic and definitive."
      },
      {
        "text": "Rapid infusion of three liters of isotonic crystalloid",
        "explanation": "Incorrect. A small bolus can be a temporizing measure while drainage is arranged, but this patient already has a right atrial pressure of 21 mmHg, so preload is not the limiting factor and large volume loading raises intrapericardial pressure further without improving stroke volume. Committing to liters of fluid instead of drainage wastes the minutes in which the tamponade can be reversed. This would be the correct answer if the patient had flat neck veins, a right atrial pressure of 2 mmHg, and a low wedge pressure from hemorrhagic hypovolemic shock."
      },
      {
        "text": "Intravenous furosemide with a nitroglycerin infusion",
        "explanation": "Incorrect. The elevated wedge pressure here reflects external compression of the heart rather than volume overload, and both diuresis and venodilation reduce the filling pressure that is barely maintaining forward flow, which can precipitate arrest in tamponade. The lungs are clear, so there is no pulmonary congestion to treat. This would be the correct answer if the patient had a high wedge pressure with diffuse crackles and hypoxemia while maintaining a normal or elevated systemic blood pressure, as in hypertensive acute pulmonary edema."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: All three obstructive shocks raise the neck veins, but EQUALIZED diastolic pressures with pulsus paradoxus and clear lungs means tamponade (drain the pericardium), a HIGH right atrial pressure with a LOW wedge and a dilated right ventricle means massive pulmonary embolism (lyse it), and unilateral absent breath sounds with tracheal deviation means tension pneumothorax (needle the chest).",
    "lectureSource": "CV40: Shock Pathophysiology and Management",
    "pdfLecture": "CV40",
    "pdfPage": 34,
    "pdfQuote": "Cardiogenic Impaired cardiac function LV Systolic failure"
  },
  {
    "id": 37,
    "category": "Cardiovascular Pharmacology: Central Sympatholytics in Pregnancy",
    "questionText": "A 27-year-old woman at 26 weeks gestation was diagnosed with chronic hypertension 2 years ago and has been maintained since then, including throughout this pregnancy, on an oral agent selected because it preserves uteroplacental perfusion. She now reports six days of progressive fatigue, dark urine, and mild right upper quadrant discomfort. Temperature is 37.1 degrees C, blood pressure is 128/78 mm Hg, and heart rate is 104 per minute. Examination shows scleral icterus and pallor without rash, edema, arthralgias, or serositis. Laboratory studies show hemoglobin 8.1 g/dL, reticulocyte count 7.9 percent, indirect bilirubin 3.2 mg/dL, undetectable haptoglobin, LDH 640 U/L, AST 96 U/L, ALT 88 U/L, platelets 232,000 per microliter, and a positive direct antiglobulin (Coombs) test; antinuclear and antihistone antibodies are negative. Which of the following best describes how the drug responsible for her presentation lowers blood pressure?",
    "options": [
      {
        "text": "Competitive blockade of postsynaptic alpha-1 adrenergic receptors",
        "explanation": "Incorrect. Selective alpha-1 antagonists such as prazosin, terazosin, and doxazosin lower peripheral resistance by blocking norepinephrine at vascular postsynaptic alpha-1 receptors, and their signature toxicity is first-dose orthostatic hypotension and syncope rather than immune hemolysis. Nothing in this patient supports that mechanism: she has a positive direct antiglobulin test, brisk reticulocytosis, and transaminase elevation, none of which are features of alpha-1 blockade, and these agents are not the standard first-line oral drug chosen in pregnancy for uteroplacental safety. This would be the correct answer if she were a patient with catecholamine-secreting pheochromocytoma who had been started on prazosin or doxazosin and developed dizziness and syncope shortly after the first dose."
      },
      {
        "text": "Opening of ATP sensitive potassium channels in arteriolar smooth muscle",
        "explanation": "Incorrect. Minoxidil opens ATP sensitive potassium channels, hyperpolarizing arteriolar smooth muscle and producing powerful arteriolar dilation, but it is reserved for severe refractory hypertension and is avoided in pregnancy. Its predictable consequences are reflex tachycardia, marked salt and water retention, and pericardial effusion, not a Coombs positive hemolytic anemia with cholestatic or hepatocellular injury as seen in this woman. This would be the correct answer if the patient were a nonpregnant man with drug-resistant hypertension on a beta blocker and a loop diuretic whose blood pressure fell only after adding a potassium channel opener and who then developed a pericardial effusion."
      },
      {
        "text": "Direct arteriolar relaxation with reflex sympathetic activation",
        "explanation": "Incorrect. Hydralazine relaxes arteriolar smooth muscle directly, and although it is used in pregnancy, it produces reflex tachycardia, headache, flushing, and sodium retention rather than warm autoimmune hemolysis with a positive direct antiglobulin test. Her anemia with reticulocytosis, low haptoglobin, elevated LDH, and indirect hyperbilirubinemia points to antibody-mediated red cell destruction, which is not part of the hydralazine profile, and her heart rate elevation here is compensatory for anemia rather than baroreflex driven. Hydralazine can cause a drug-induced lupus syndrome, especially in slow acetylators, but that presents with arthralgias, serositis, and positive antinuclear and antihistone antibodies, which are absent here. This would be the correct answer if she had received intravenous hydralazine boluses for acute severe hypertension in preeclampsia and developed tachycardia, headache, and flushing minutes after dosing."
      },
      {
        "text": "Blockade of L-type calcium channels in vascular smooth muscle",
        "explanation": "Incorrect. Dihydropyridine calcium channel blockers such as nifedipine reduce calcium entry into vascular smooth muscle and are commonly used in pregnancy, but their adverse effects are peripheral edema, flushing, headache, and reflex tachycardia. They do not induce antibodies against red cell surface antigens and do not classically cause the hepatitis picture reflected in her elevated aminotransferases, so this mechanism cannot explain a positive direct antiglobulin test with hemolysis. This would be the correct answer if she had been maintained on extended release nifedipine and presented instead with bilateral ankle edema, facial flushing, and headache with a normal hemoglobin."
      },
      {
        "text": "Conversion to a metabolite that stimulates central alpha-2 receptors",
        "explanation": "Correct. Methyldopa is a prodrug taken up by central adrenergic neurons and converted to alpha-methylnorepinephrine, a false neurotransmitter that is a potent agonist at central alpha-2 adrenoceptors in the brainstem cardiovascular centers (nucleus tractus solitarius and rostral ventrolateral medulla). Activation of those receptors decreases sympathetic outflow and peripheral resistance while preserving uterine and placental blood flow, which is exactly why it is chosen for chronic hypertension in pregnancy as in this patient. Chronic use makes ten to twenty percent of patients direct antiglobulin positive, and a small fraction progress to overt warm autoimmune hemolytic anemia with anemia, reticulocytosis, indirect hyperbilirubinemia, absent haptoglobin, and elevated LDH, precisely the pattern reported here. Methyldopa is also hepatotoxic, ranging from asymptomatic transaminase elevation to frank hepatitis, which accounts for her right upper quadrant discomfort and mildly elevated AST and ALT. The combination of a pregnancy-appropriate centrally acting antihypertensive with Coombs positive hemolysis and hepatic injury is essentially specific for methyldopa."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Methyldopa lowers blood pressure only after conversion to alpha-methylnorepinephrine, a FALSE TRANSMITTER acting on central alpha-2 receptors; monitor for a positive DIRECT COOMBS test with hemolytic anemia and for hepatotoxicity.",
    "lectureSource": "CV37: Alpha Blockers, Central Sympatholytics and Vasodilators",
    "pdfLecture": "CV37",
    "pdfPage": 18,
    "pdfQuote": "Clonidine lowers heart rate and"
  },
  {
    "id": 38,
    "category": "Osteopathic Cranial Manipulative Medicine: V-Spread and Directing the Tide",
    "questionText": "A 24-year-old woman presents with a 3-week history of a persistent right-sided headache that began after she was struck on the right side of the head by a soccer ball. She describes a constant focal ache over the right side of the back of the head, several centimeters behind and above the ear, reproduced by direct palpation over the area and unchanged by position. Vital signs are normal, the neurologic examination is nonfocal, and a noncontrast head CT obtained in the emergency department on the day of injury was unremarkable. Using a vault hold, the osteopathic physician palpates a cranial rhythmic impulse of 10 cycles per minute with reduced amplitude and a focal, gritty area of resistance along the right lambdoid suture. The physician first attempts an indirect approach, carrying the membranes toward the position of ease and holding for several cycles, but the sutural resistance does not soften. Which of the following is the most appropriate next technique to release this sutural restriction?",
    "options": [
      {
        "text": "Straddle the restricted suture with two fingers and direct a fluid impulse from the contralateral vault",
        "explanation": "Correct. This describes the V-spread, or direction of the tide, which is the technique of choice for a focal sutural restriction that has not responded to an indirect membranous approach. The index and middle fingers of one hand are placed on either side of the restricted right lambdoid suture forming a V, providing a gentle spreading vector and serving as the receiving point. The other hand is placed on the diametrically opposite pole of the cranium, contralateral to the lesioned suture, and directs a rhythmic fluid impulse through the cranial fluid across the vault toward the fingers at the V. The physician uses the patient's own fluid fluctuation rather than external force, and the endpoint is a palpable softening, warmth, or sense of fluid spreading beneath the V fingers as the suture disengages. This patient's history of focal trauma and point tenderness with a gritty end feel localized to a single suture point to a sutural restriction ideally treated by fluid drive; the reduced cranial rhythmic impulse amplitude is a nonspecific accompaniment."
      },
      {
        "text": "Compress the suture directly with both thumbs and hold steady force across the edges until it yields",
        "explanation": "Incorrect. Direct compressive force applied across an acutely inflamed, recently traumatized lambdoid suture is uncomfortable, risks aggravating the local irritation, and works against rather than with the inherent fluid mechanism that the cranial approach relies on. Sutures are released by disengagement and fluid drive, not by crushing the articulation together. This would be the correct answer if the goal were an articulatory or direct-action technique on a mobile appendicular joint with a hard end feel, where graded direct force through the restrictive barrier is appropriate."
      },
      {
        "text": "Hold the vault, exaggerate the strain pattern, and balance the membranes while awaiting a release",
        "explanation": "Incorrect. This is balanced membranous tension applied indirectly, and the vignette states the physician has already carried the membranes toward ease and held through several cycles without softening the focal sutural resistance. Repeating a technique that has already failed on a discrete post-traumatic sutural lesion will not add a new corrective force. This would be the correct answer if the finding were a global reciprocal tension membrane strain pattern such as a torsion or sidebending rotation without a focal sutural restriction, where balancing at the point of equilibrium is the primary approach."
      },
      {
        "text": "Perform a bilateral frontal lift with gentle anterior traction to disengage the frontosphenoidal joint",
        "explanation": "Incorrect. The frontal lift addresses restrictions at the frontal bone and its articulations at the front of the cranium and does nothing to reach a restriction at the right lambdoid suture, which lies between the occiput and the parietal bone posteriorly. Treating a region remote from the palpated lesion ignores the localized tenderness and gritty end feel found on this examination. This would be the correct answer if the patient had frontal or retro-orbital headache with palpated restriction of the frontal bone at the coronal or sphenofrontal suture, where gentle anterior traction disengages the frontal from the parietals and sphenoid."
      },
      {
        "text": "Induce lateral fluctuation with alternating side to side pressure applied at the greater wings",
        "explanation": "Incorrect. Lateral fluctuation is a generalized fluid technique used to amplify and redirect the overall fluid drive of the cranium and is not aimed at a single named suture, so it lacks the focal receiving point that this discrete lambdoid restriction requires. It also does not provide the spreading vector needed to disengage the interdigitated sutural surfaces. This would be the correct answer if the patient had a diffuse, poorly localized reduction in the amplitude of the cranial rhythmic impulse without an identifiable focal sutural lesion, where a global increase in fluid fluctuation is the intent."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: The V-spread releases a restricted suture by directing the fluid tide from the point DIAMETRICALLY OPPOSITE the lesion, with two fingers straddling the suture as the receiving point; for a lateral suture such as the lambdoid this means the driving hand sits on the contralateral vault, and the endpoint is palpable softening, warmth or spreading under the V.",
    "lectureSource": "CV34: Balanced Membranous Tension, V-Spread and CV4",
    "pdfLecture": "CV34",
    "pdfPage": 20,
    "pdfQuote": "Department of Osteopathic Manipulative Medicine"
  },
  {
    "id": 39,
    "category": "Radiology: Chest Radiograph Projection and Magnification",
    "questionText": "A 68-year-old man is admitted to the intensive care unit with sepsis and is receiving mechanical ventilation. He is sedated, supine, and cannot be moved to the radiology department, so a portable anteroposterior chest film is obtained at a source-to-image distance of about 40 inches during a shallow inspiration. The overnight resident reports that the cardiac silhouette occupies about 57 percent of the thoracic width and that the mediastinum looks wider than on the patient's outpatient posteroanterior film from three months ago. On the new film the medial ends of the clavicles sit at unequal distances from the spinous processes, and the right hilum appears denser than the left. Blood pressure is 104/62 mm Hg, heart rate is 96 per minute, and jugular venous pressure is not elevated on exam. Which explanation best accounts for the enlarged cardiac and mediastinal shadows on this study?",
    "options": [
      {
        "text": "New pericardial effusion has developed since the outpatient film was taken",
        "explanation": "Incorrect. A pericardial effusion large enough to widen the silhouette this much would usually be accompanied by elevated jugular venous pressure, pulsus paradoxus, and muffled heart sounds, none of which this man has, and the technical features of the film already explain the appearance. Invoking effusion here risks an unnecessary drainage procedure in a hemodynamically explainable septic patient. This would be the correct answer if a technically identical repeat film showed progressive globular enlargement of the cardiac shadow with clear lungs, low voltage on electrocardiogram, and rising jugular venous pressure."
      },
      {
        "text": "Acute aortic dissection is expanding the mediastinal contour on the current film",
        "explanation": "Incorrect. Dissection widens the mediastinum but the patient has no tearing chest or back pain, no pulse or blood pressure differential between limbs, and no focal contour abnormality described, and the widening is fully accounted for by anteroposterior projection and rotation. Attributing the finding to dissection would trigger urgent angiography for an artifact. This would be the correct answer if a well-centered film in a hypertensive patient with tearing interscapular pain showed a focally widened mediastinum with a displaced calcified intimal edge."
      },
      {
        "text": "Volume overload from aggressive fluid resuscitation has dilated all four cardiac chambers",
        "explanation": "Incorrect. True volume overload would be expected to produce upper lobe vascular redistribution, peribronchial cuffing, Kerley lines, or effusions along with a raised jugular venous pressure, and none of these supporting features is present in this hypotensive septic patient. Cardiac chambers also do not dilate enough in hours to move the cardiothoracic ratio this far. This would be the correct answer if a technically adequate posteroanterior film after liters of crystalloid showed an enlarged heart with redistributed pulmonary vessels and new bilateral pleural effusions."
      },
      {
        "text": "Anterior beam entry with short film distance plus rotation magnifies the mediastinal structures",
        "explanation": "Correct. On a portable anteroposterior film the beam enters the front of the chest and the heart, which sits anteriorly in the mediastinum, is far from the detector behind the patient, so its shadow is projected larger onto the film. The short 40-inch source-to-image distance makes the x-ray beam more divergent than the 72-inch distance used for a standard posteroanterior film, further exaggerating that magnification, and a supine shallow inspiration raises the diaphragm and broadens the cardiac shadow still more. The asymmetric clavicular heads confirm rotation, which swings the mediastinum off the midline and makes it appear widened while also making the hilum on the side turned toward the beam look denser. Because every difference from the prior study is geometric rather than pathologic, the cardiothoracic ratio on this film is not interpretable. The correct move is to interpret the heart size as indeterminate and compare only with prior films of identical projection."
      },
      {
        "text": "Underpenetration of the film has enlarged the projected cardiac silhouette",
        "explanation": "Incorrect. Penetration governs how much of the spine and retrocardiac vasculature is visible through the mediastinal shadow; it can make the heart look whiter but cannot change the physical dimensions of the projected silhouette, so an underpenetrated film would obscure detail rather than enlarge the heart. The changes described are geometric, not exposure related. This would be the correct answer if the question asked why the thoracic vertebral bodies and the vessels behind the heart could not be seen while the cardiothoracic ratio remained normal."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: On an AP portable film the anteriorly located heart is far from the detector and the beam is more divergent at 40 inches, so cardiac and mediastinal shadows are MAGNIFIED and cardiothoracic ratio is NOT interpretable; asymmetric clavicular heads relative to the spinous processes mark rotation, which alone can fake a widened mediastinum and a dense hilum.",
    "lectureSource": "CV41: The Normal Chest X-Ray",
    "pdfLecture": "CV41",
    "pdfPage": 19,
    "pdfQuote": "More magnification on AP films"
  },
  {
    "id": 40,
    "category": "Cardiovascular Pharmacology: RAS Inhibition After Myocardial Infarction",
    "questionText": "A 58-year-old man is hospitalized with an anterior ST-elevation myocardial infarction and undergoes successful percutaneous coronary intervention of the left anterior descending artery. On hospital day two he is hemodynamically stable with a blood pressure of 118/72 mm Hg and a heart rate of 74 beats per minute. Echocardiography shows akinesis of the anterior wall with a left ventricular ejection fraction of 34 percent. Serum creatinine is 1.0 mg/dL and potassium is 4.1 mEq/L. He has compensated Child-Pugh B cirrhosis from prior hepatitis C, with a serum albumin of 2.4 g/dL and an INR of 1.6; he has no ascites or encephalopathy. The team wants to start a renin-angiotensin system inhibitor before discharge to limit adverse ventricular remodeling, and prefers an agent whose onset does not depend on hepatic conversion. Which agent and rationale are most appropriate for this patient?",
    "options": [
      {
        "text": "Enalapril, because it is active as administered and requires no hepatic conversion to a diacid",
        "explanation": "Incorrect. The stated rationale is simply false: enalapril is an ester prodrug that hepatic esterases must hydrolyze to enalaprilat before any angiotensin-converting enzyme inhibition occurs, so it is one of the agents whose onset does depend on the liver. With an albumin of 2.4 g/dL and an INR of 1.6, the extent and timing of that activation are less predictable, which adds variability at a moment when steady afterload reduction matters. This would be the correct answer if the option had instead described enalapril accurately as a prodrug and his hepatic synthetic function were normal, in which case enalapril, ramipril, and the other ester prodrugs are entirely appropriate first-line agents after myocardial infarction."
      },
      {
        "text": "Lisinopril, because it is active as given and blunts angiotensin II driven ventricular remodeling",
        "explanation": "Correct. An anterior infarct with anterior akinesis and an ejection fraction of 34 percent is the classic setting for adverse remodeling, in which angiotensin II and aldosterone drive infarct expansion, chamber dilation, and interstitial fibrosis, and inhibition of the axis started within the first days lowers mortality and slows that process. Neither lisinopril nor captopril is a prodrug, so lisinopril needs no hepatic esterase activation and its effect is predictable despite his impaired hepatic synthetic function; captopril is the other agent active as given but has a short half-life requiring three times daily dosing. His blood pressure of 118/72 mm Hg, normal creatinine, and potassium of 4.1 mEq/L show he can tolerate initiation now at a low dose with upward titration. Starting the drug early, rather than waiting for symptomatic heart failure, is what captures the remodeling benefit."
      },
      {
        "text": "Aliskiren, because inhibiting renin at the rate-limiting step gives the most complete suppression",
        "explanation": "Incorrect. Aliskiren has no established mortality or remodeling benefit after myocardial infarction and is not part of standard post-infarction therapy, so upstream completeness of blockade is not a reason to select it for this man with a fresh anterior infarct and an ejection fraction of 34 percent. Its evidence base is limited largely to blood pressure lowering. This would be the correct answer if the clinical goal were simply blood pressure control in a patient without diabetes who has normal renal function who could not tolerate other classes, and even then it would not be combined with an ACE inhibitor or an angiotensin receptor blocker."
      },
      {
        "text": "Losartan, because angiotensin type 1 receptor blockade prevents cough and is superior after infarction",
        "explanation": "Incorrect. An angiotensin receptor blocker is a reasonable substitute only when an ACE inhibitor cannot be tolerated, and it is not superior after myocardial infarction; moreover this man has no cough, so there is no reason to pass over the better-studied class. Losartan is also partly converted to its more potent active metabolite by hepatic CYP2C9, which is a liability when hepatic function is impaired. This would be the correct answer if he had already developed a persistent dry cough or angioedema on an ACE inhibitor, since angiotensin receptor blockers do not raise bradykinin and retain most of the post-infarction benefit."
      },
      {
        "text": "Defer all renin-angiotensin blockade for six weeks until remodeling and scar maturation are complete",
        "explanation": "Incorrect. Waiting forfeits the window in which the drug does the most good, because infarct expansion and chamber dilation begin within the first days, and this patient is normotensive, euvolemic, and has normal renal function, so there is no barrier to starting now. Delay in a patient with an ejection fraction of 34 percent means preventable geometric deterioration. This would be the correct answer if he were hypotensive with a systolic pressure in the eighties, in cardiogenic shock, or had a rapidly rising creatinine, since initiation is postponed until hemodynamics and renal function stabilize."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Start RAS inhibition early after an anterior myocardial infarction with reduced ejection fraction to blunt remodeling; LISINOPRIL and captopril are active as given, while enalapril, ramipril, and most others are ester PRODRUGS needing hepatic activation.",
    "lectureSource": "CV35: RAS Inhibitors",
    "pdfLecture": "CV35",
    "pdfPage": 31,
    "pdfQuote": "Most ACEIs are prodrugs ARBsParent drug Active molecule"
  },
  {
    "id": 41,
    "category": "Pharmacology: Dihydropyridine Adverse Effects",
    "questionText": "A 62-year-old woman with essential hypertension was started on amlodipine 5 mg daily four months ago and increased to 10 mg daily six weeks ago. She now reports bilateral ankle swelling that is barely noticeable when she wakes and marked by evening, along with occasional flushing and awareness of her heartbeat. She denies dyspnea, orthopnea, and paroxysmal nocturnal dyspnea. Blood pressure is 128/76 mmHg and heart rate is 78 per minute; jugular venous pressure is normal, lungs are clear, there is no S3, and there is symmetric pitting edema to the mid shin. Serum albumin, creatinine, and BNP are normal and urinalysis shows no protein. A two-week trial of hydrochlorothiazide produced no change in the swelling. Which of the following best explains her edema?",
    "options": [
      {
        "text": "Sodium and water retention from expanded plasma volume",
        "explanation": "Incorrect. Volume overload is excluded by her normal jugular venous pressure, clear lungs, absent S3, and normal BNP, and she has none of the exertional or positional dyspnea that accompanies true fluid retention. A thiazide works precisely by contracting plasma volume, and it produced no benefit over two weeks, which argues directly against this mechanism. This would be the correct answer if she had orthopnea, distended neck veins, crackles, and an elevated BNP from decompensated heart failure."
      },
      {
        "text": "Arteriolar dilation raising capillary hydrostatic pressure",
        "explanation": "Correct. Dihydropyridines such as amlodipine dilate precapillary arterioles far more than postcapillary venules, so arterial pressure is transmitted into the capillary bed while venous outflow resistance stays unchanged. The resulting rise in capillary hydrostatic pressure pushes fluid into the dependent interstitium, giving bilateral pitting ankle edema that is minimal in the morning, worst by evening, and strictly dose dependent, which fits its appearance after the increase to 10 mg. This is a local Starling force problem rather than volume overload, which is why her neck veins, lungs, and BNP are normal and why hydrochlorothiazide did nothing. Flushing and palpitations are listed dihydropyridine vasodilatory effects, although amlodipine produces far less reflex tachycardia than short-acting nifedipine because of its slow onset and long half-life. Management is dose reduction, switching agents, or adding an ACE inhibitor or angiotensin receptor blocker to dilate the venular side and normalize the gradient."
      },
      {
        "text": "Reduced plasma oncotic pressure from urinary protein loss",
        "explanation": "Incorrect. Oncotic edema requires hypoalbuminemia, and her serum albumin is normal with no protein on urinalysis, so the Starling oncotic term is intact. Nephrotic edema also tends to be generalized with periorbital prominence on waking rather than purely dependent and worse at the end of the day. This would be the correct answer if she had heavy proteinuria with a serum albumin well below the reference range."
      },
      {
        "text": "Lymphatic obstruction impairing interstitial fluid drainage",
        "explanation": "Incorrect. Lymphedema is characteristically asymmetric and non-pitting with thickened skin, and it follows surgery, radiation, or recurrent infection, none of which she has. Her swelling is symmetric, pitting, and temporally locked to the amlodipine dose increase six weeks ago. This would be the correct answer if she had unilateral non-pitting swelling with skin fibrosis after inguinal nodal dissection or radiation."
      },
      {
        "text": "Venodilation pooling blood in dependent capacitance veins",
        "explanation": "Incorrect. Dilating the postcapillary venules lowers venous outflow resistance and equalizes the pre- to postcapillary resistance ratio, so the transcapillary gradient is not raised and peripheral edema does not result; nitrates, the prototypical venodilators, are not a cause of ankle edema. Amlodipine acts almost exclusively on the arteriolar side, and it is the imbalance between dilated arterioles and untouched venules that generates her swelling. This would be the correct answer if she were taking high dose isosorbide dinitrate and presented with headache and postural lightheadedness."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Dihydropyridine ankle edema comes from PRECAPILLARY arteriolar dilation raising capillary hydrostatic pressure, not from volume overload, so it is dose dependent and does NOT respond to diuretics; lower the dose or add an ACE inhibitor or ARB to dilate the venular side.",
    "lectureSource": "CV36: Calcium Channel Blockers and Beta Blockers",
    "pdfLecture": "CV36",
    "pdfPage": 22,
    "pdfQuote": "CCBs Adverse Effects"
  },
  {
    "id": 42,
    "category": "Cardiovascular Medicine: Pathogenesis of Primary Hypertension",
    "questionText": "A 58-year-old African American woman is evaluated in clinic for elevated readings on home monitoring. Her father and older brother both required multiple antihypertensive drugs. She eats a diet heavy in processed and canned foods, drinks alcohol most evenings, and has a body mass index of 33 kg per meter squared. Office blood pressure averages 156/78 mmHg on two visits with a heart rate of 76 per minute. Physical exam is unremarkable with symmetric femoral pulses and no abdominal bruit. Plasma renin activity is low, serum potassium is 4.1 mmol/L, plasma aldosterone is 8 ng/dL with an aldosterone-to-renin ratio below 20 (normal), creatinine is 0.9 mg/dL, and imaging of the renal arteries is normal. Which of the following best explains the pathogenesis of this patient's blood pressure elevation?",
    "options": [
      {
        "text": "Impaired renal sodium excretion with salt sensitivity plus age-related large-artery stiffening",
        "explanation": "Correct. Primary hypertension is a polygenic disorder in which the kidney requires a higher perfusion pressure to excrete a given sodium load, shifting the pressure-natriuresis relationship rightward, and this salt-sensitive pattern is more common in African American patients and is unmasked by a high-sodium processed food diet. Because volume expansion suppresses renin, her low plasma renin activity with a normal potassium and a normal aldosterone-to-renin ratio fits volume-mediated low-renin essential hypertension rather than a secondary cause. Obesity and alcohol amplify this by raising sympathetic outflow and promoting sodium retention, while her strong family history reflects the inherited component. Her pulse pressure of 78 mmHg with a diastolic pressure below 80 mmHg is isolated systolic hypertension, the hemodynamic signature of a stiff aorta, which develops through elastin fragmentation with increased collagen deposition and increased collagen crosslinking, so the aorta cannot buffer systolic ejection. Normal renal arteries, symmetric femoral pulses, and a normal aldosterone-to-renin ratio exclude the main secondary mimics, leaving primary hypertension."
      },
      {
        "text": "Autonomous aldosterone secretion driving distal sodium reabsorption and potassium wasting",
        "explanation": "Incorrect. The screening criterion for autonomous aldosterone excess is an elevated aldosterone-to-renin ratio, and hers is below 20 with a plasma aldosterone of only 8 ng/dL, so the suppressed renin is not accompanied by inappropriate aldosterone production. Hypokalemia, when present, supports the diagnosis, but most cases of primary aldosteronism are normokalemic, so her potassium of 4.1 mmol/L neither confirms nor excludes it, and low renin alone is common in salt-sensitive primary hypertension. This would be the correct answer if she had an elevated aldosterone-to-renin ratio with a high plasma aldosterone that failed to suppress on confirmatory saline loading, plus an adrenal nodule on imaging."
      },
      {
        "text": "Atherosclerotic renal artery stenosis causing renin-mediated angiotensin II excess",
        "explanation": "Incorrect. A hemodynamically significant renal artery lesion reduces afferent perfusion and drives a HIGH renin state, which is the opposite of her suppressed plasma renin activity, and her renal artery imaging is normal with no abdominal bruit. Her creatinine is also normal without the flash pulmonary edema or treatment-resistant course typical of renovascular disease. This would be the correct answer if she had asymmetric kidney sizes, an epigastric bruit, elevated renin, and a rise in creatinine after starting an ACE inhibitor."
      },
      {
        "text": "Catecholamine surges from an adrenal medullary tumor with episodic alpha-1 vasoconstriction",
        "explanation": "Incorrect. Excess circulating catecholamines classically produce paroxysmal headache, palpitations, and diaphoresis with labile pressures and often orthostatic changes, and none of these are present in a woman with sustained modest readings and a heart rate of 76 per minute. Her sympathetic contribution is the chronic low-grade elevation of obesity, not tumor-derived catecholamine bursts. This would be the correct answer if she had episodic spells of pounding headache and pallor with markedly elevated plasma free metanephrines and an adrenal mass."
      },
      {
        "text": "Aortic coarctation producing upper extremity hypertension with distal hypoperfusion",
        "explanation": "Incorrect. Coarctation causes a pressure gradient between arms and legs with delayed and diminished femoral pulses, and her femoral pulses are explicitly symmetric and normal, with presentation typically decades earlier in life. Nothing in her exam suggests a mechanical obstruction of the aorta. This would be the correct answer if a younger patient had arm pressures far exceeding leg pressures with radiofemoral delay and rib notching on chest radiography."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Primary hypertension arises from a rightward shift in renal pressure-natriuresis, so salt-sensitive patients run a LOW renin with a NORMAL aldosterone and normal potassium; add age-related aortic stiffening and the result is isolated systolic elevation with a WIDE pulse pressure.",
    "lectureSource": "CV38: Clinical Hypertension",
    "pdfLecture": "CV38",
    "pdfPage": 12,
    "pdfQuote": "Types of Hypertension: Primary (Essential) HTN"
  },
  {
    "id": 43,
    "category": "Osteopathic Principles: Short Leg Syndrome Evaluation Sequence",
    "questionText": "A 46-year-old office manager has a 4-year history of aching right low back pain that worsens after prolonged standing and is accompanied by a dull ache in the right groin and in the back of the right thigh. She denies numbness, tingling, or weakness, and the pain does not change with coughing or straining. Vital signs are normal and her BMI is 26. On structural examination the right standing flexion test is positive, the right ASIS is inferior while the right PSIS is superior, standing iliac crest heights are unequal, and there is boggy tissue texture change with exquisite tenderness over the right iliolumbar and sacrotuberous ligaments. Straight leg raise is negative bilaterally, deep tendon reflexes are 2+ and symmetric, and strength is 5/5 in both lower extremities. She asks for a heel lift because a relative told her that one of her legs is short. Which of the following is the most appropriate next step in her management?",
    "options": [
      {
        "text": "Obtain standing postural radiographs today and prescribe a lift for the measured unleveling",
        "explanation": "Incorrect. Erect postural radiography is indeed the accurate way to quantify sacral base unleveling, but films taken while her innominate is rotated and her standing flexion test is positive record the functional component along with any anatomic one. A lift sized from that film would be wrong the moment her pelvis is treated, and could worsen her ligamentous strain. Imaging also adds radiation exposure for a number that is about to change. This would be the correct answer if her pelvic somatic dysfunction had already been treated and reassessed, with unleveling and symptoms persisting despite a negative standing flexion test."
      },
      {
        "text": "Fit a heel lift equal to the full measured discrepancy at this visit and recheck in 3 months",
        "explanation": "Incorrect. Nothing about her discrepancy has been validated yet, since the positive standing flexion test and rotated innominate mean part or all of the apparent shortening is functional. Even for a confirmed anatomic discrepancy, a chronically compensated adult with years of ligamentous adaptation does not tolerate full correction applied at once, and abrupt full height commonly provokes an increase in back pain. Lift therapy in this setting is titrated and monitored, not delivered in a single step. This would be the correct answer if she had an acute, clearly anatomic discrepancy such as a recent hip arthroplasty or healed femoral fracture in a patient with no chronic compensatory curves."
      },
      {
        "text": "Measure supine ASIS to medial malleolus bilaterally and base the lift on that difference",
        "explanation": "Incorrect. A supine tape measurement is corrupted by the very innominate rotation she demonstrates, since anterior rotation carries the right ASIS inferiorly, so the tape distance to the medial malleolus falsely reads short on that side even though the limb is functionally long in weight bearing. More importantly, the target of lift therapy is the level of the sacral base, and a tape measure between two soft tissue landmarks does not measure sacral base unleveling or the compensatory curves above it. Basing a prescription on this number would treat an artifact. This would be the correct answer if you needed only a crude bedside screen for gross asymmetry in a nonambulatory patient, with no intention of writing a lift prescription from the result."
      },
      {
        "text": "Treat the pelvic somatic dysfunction first, then reassess before any lift measurement",
        "explanation": "Correct. The positive right standing flexion test with an inferior right ASIS and superior right PSIS indicates an anteriorly rotated right innominate, a pelvic somatic dysfunction that creates a functional leg length difference which disappears when the dysfunction is corrected. Measuring or radiographing before treatment therefore records dysfunction rather than true anatomic shortening, so the required sequence is history and structural examination, then treatment of somatic dysfunction with reassessment, then erect postural radiography, and only then a lift prescription. Her groin and posterior thigh ache with tenderness at the iliolumbar and sacrotuberous ligaments is classic ligamentous referred pain from chronic sacral base unleveling and pelvic imbalance, not radicular pain, which fits the negative straight leg raise, symmetric reflexes, and normal strength. Some patients improve enough with manipulation and muscle balancing that no lift is ever needed. Only unleveling that persists after the pelvis has been treated and the flexion test has normalized identifies the anatomic component worth lifting."
      },
      {
        "text": "Order lumbar MRI to evaluate the groin and posterior thigh pain before any treatment",
        "explanation": "Incorrect. Her pain follows ligamentous referral patterns rather than a dermatome, with the iliolumbar ligament referring to the groin and inguinal region and the sacrotuberous ligament referring to the posterior thigh, and both of those ligaments are directly tender on palpation. The negative straight leg raise, symmetric 2+ reflexes, and 5/5 strength give no evidence of nerve root compression, so advanced imaging would likely reveal incidental degenerative findings and delay effective treatment. This would be the correct answer if she had progressive dermatomal numbness, a lost ankle reflex, dorsiflexion weakness, or bowel and bladder changes suggesting nerve root or cauda equina compromise."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Treat pelvic somatic dysfunction FIRST and reassess, because only unleveling that PERSISTS after the pelvis is neutral is anatomic and worth a lift. Chronic sacral base unleveling strains ligaments that refer pain nondermatomally, iliolumbar to the groin and sacrotuberous to the posterior thigh.",
    "lectureSource": "CV33: Short Leg Syndrome and Heel Lift Therapy",
    "pdfLecture": "CV33",
    "pdfPage": 5,
    "pdfQuote": "Treat all somatic dysfunction diagnoses as well as possible before sending patient for"
  },
  {
    "id": 44,
    "category": "Cardiovascular Medicine: Blood Pressure Targets and Intensive Control Evidence",
    "questionText": "A 74-year-old community-dwelling man is seen for hypertension follow-up. He walks two miles daily, lives independently, and has neither diabetes mellitus nor any history of stroke. His problems include stage 3 chronic kidney disease with an estimated glomerular filtration rate of 52 mL/min/1.73 m2, and his calculated 10-year atherosclerotic cardiovascular disease risk is 19 percent. He takes amlodipine 10 mg daily, and his average attended office blood pressure across three visits is 148/76 mm Hg. He reports no dizziness or falls, and his standing blood pressure today is 144/74 mm Hg. Which of the following blood pressure goals is best supported by the available trial evidence for this patient?",
    "options": [
      {
        "text": "Target systolic below 150 mm Hg because he is older than 60 years",
        "explanation": "Incorrect. A permissive goal of 150 mm Hg reflects older guidance that has been superseded for functionally independent older adults, and applying it to a man who walks two miles a day and shows no orthostatic drop would leave preventable strokes, heart failure events, and deaths on the table. Chronologic age by itself does not justify a relaxed target when functional status is preserved. This would be the correct answer if he were a frail long-term care resident with limited life expectancy, recurrent falls, or symptomatic orthostatic hypotension, in whom the harms of intensive lowering outweigh the benefit."
      },
      {
        "text": "Target systolic below 140 mm Hg because he has chronic kidney disease",
        "explanation": "Incorrect. Reduced glomerular filtration rate is a reason to pursue tighter rather than looser control, and participants with chronic kidney disease were enrolled in the intensive arm of the landmark trial and shared in its cardiovascular and mortality benefit despite a small, early, largely reversible rise in creatinine. Accepting 140 mm Hg would undertreat a man whose 10-year risk is 19 percent. This would be the correct answer if he had a condition excluded from the intensive trials in which the data cannot be extrapolated, such as dialysis-dependent kidney failure or a functioning kidney transplant."
      },
      {
        "text": "Target systolic below 130 mm Hg with careful monitoring for orthostasis",
        "explanation": "Correct. He matches the enrolled population of the intensive blood pressure trial almost exactly: elevated cardiovascular risk, no diabetes mellitus, no prior stroke, ambulatory and independent, and with chronic kidney disease, and that trial deliberately enrolled and benefited participants aged 75 and older. Randomization to a systolic goal near 120 mm Hg rather than near 140 mm Hg reduced major adverse cardiovascular events and all-cause mortality enough that the trial was stopped early. The trial used automated office readings after a rest period, frequently with no observer present, a technique that yields values several mm Hg lower than a routine attended cuff reading, and guidelines set the office goal at less than 130/80 mm Hg by combining the trial result with practical measurement considerations rather than by measurement conversion alone. His preserved gait, absence of falls, and lack of an orthostatic drop make the intensive goal appropriate rather than hazardous. The intensive arm nonetheless had more hypotension, syncope, electrolyte disturbance, and acute kidney injury, so creatinine, electrolytes, and standing pressures must be rechecked after each escalation."
      },
      {
        "text": "Target diastolic below 70 mm Hg and accept whatever systolic results",
        "explanation": "Incorrect. In an older adult with stiff conduit arteries the dominant pattern is isolated systolic hypertension with a wide pulse pressure, and his diastolic pressure of 76 mm Hg is already approaching the range where coronary perfusion concerns are raised. Driving the diastolic lower while ignoring a systolic of 148 mm Hg inverts the physiology that actually determines his risk. This would be the correct answer if outcome data supported a diastolic-driven strategy, as might be argued in a young adult with isolated diastolic hypertension and a completely normal systolic pressure."
      },
      {
        "text": "Target systolic below 120 mm Hg using routine attended office cuff readings",
        "explanation": "Incorrect. The figure of 120 mm Hg comes from automated office readings taken after a rest period, frequently with no observer present, a technique that yields values several mm Hg lower than a routine attended cuff reading, so pursuing 120 with ordinary office readings systematically overtreats and increases syncope, hypotension, and acute kidney injury. Guidelines set the office goal at less than 130/80 mm Hg by combining the trial result with practical measurement considerations rather than by measurement conversion alone. This would be the correct answer if his clinic used the same automated rest-period protocol as the trial, in which case a goal near 120 mm Hg systolic would be the faithful translation of the evidence."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: In high-risk adults without diabetes or prior stroke, including those over 75 and those with chronic kidney disease, an intensive systolic goal of LESS THAN 130 mm Hg by routine office measurement lowers events and mortality; the trial number of 120 came from AUTOMATED readings after a rest period, frequently unobserved, which run lower than routine attended ones.",
    "lectureSource": "CV39: Hypertension Management",
    "pdfLecture": "CV39",
    "pdfPage": 9,
    "pdfQuote": "Treatment: Goal Blood Pressure"
  },
  {
    "id": 45,
    "category": "Cardiovascular Pharmacology: Vasoactive Agents in Shock",
    "questionText": "A 24-year-old man is brought to the emergency department after diving into shallow water. He is awake and coherent but has flaccid paralysis of both lower extremities with weakness of elbow flexion and preserved shoulder abduction, and a sensory level at the lateral upper arm. CT shows a burst fracture of C5 with cord compression. Blood pressure is 76/42 mmHg and heart rate is 44/min, and his extremities are warm and dry with capillary refill under 2 seconds. Focused abdominal ultrasound is negative, the chest radiograph is normal, hemoglobin is 13.9 g/dL, and lactate is 1.4 mmol/L. After 2 liters of isotonic crystalloid his mean arterial pressure is still 52 mmHg, and bedside echocardiography shows a vigorously contracting left ventricle with no pericardial effusion. Which of the following vasoactive agents is the most appropriate next step?",
    "options": [
      {
        "text": "Phenylephrine infusion titrated to mean arterial pressure",
        "explanation": "Incorrect. Phenylephrine is a selective alpha-1 agonist that raises systemic vascular resistance with no beta-1 activity, so the resulting baroreceptor response slows an already inappropriately slow heart even further. In a patient whose rate is 44/min because sympathetic cardioaccelerator outflow from T1 to T4 has been severed, that additional bradycardia can drop cardiac output despite a higher pressure. This would be the correct answer if the patient were vasodilated and hypotensive while tachycardic with a normal cord, such as vasoplegia after induction of anesthesia in a patient with severe aortic stenosis."
      },
      {
        "text": "Dobutamine infusion titrated to a target cardiac index",
        "explanation": "Incorrect. Dobutamine is a beta-1 agonist with beta-2 mediated peripheral vasodilation, and this patient does not have a pump problem: the ventricle is hyperdynamic, the lactate is normal, and the extremities are warm, all indicating that the defect is loss of vascular tone rather than loss of contractility. Adding a vasodilating inotrope would lower systemic vascular resistance further and worsen the hypotension. This would be the correct answer if the patient had cold mottled extremities, a rising lactate, elevated filling pressures, and a low cardiac index from primary pump failure."
      },
      {
        "text": "Vasopressin infusion at a fixed low nontitrated dose",
        "explanation": "Incorrect. Vasopressin acts on V1 receptors to constrict vessels but has no chronotropic or inotropic effect and can reflexively slow the heart, which is the wrong direction for a patient at 44/min, and it is used as a fixed dose adjunct rather than a titratable first line agent. This would be the correct answer if the patient were already on a high dose catecholamine infusion and a second agent were needed to spare catecholamine exposure in a tachycardic patient."
      },
      {
        "text": "Dopamine infusion at two micrograms per kilogram per minute",
        "explanation": "Incorrect. At this low rate dopamine acts mainly at dopaminergic receptors, dilating renal and splanchnic arterioles without meaningful alpha-1 vasoconstriction or beta-1 chronotropy, so it will not raise this patient's mean arterial pressure or heart rate. Only at substantially higher infusion rates does dopamine recruit beta-1 and then alpha-1 effects, and at those rates it is more arrhythmogenic than the alternatives. This would be the correct answer if the question asked which dose range acts predominantly at dopaminergic receptors; note that low dose dopamine given for renal protection has been shown not to prevent or reverse acute kidney injury and is no longer recommended."
      },
      {
        "text": "Norepinephrine infusion titrated to mean arterial pressure",
        "explanation": "Correct. A cervical cord injury interrupts sympathetic outflow from the T1 to L2 intermediolateral cell column while leaving vagal input through the intact vagus nerve unopposed, producing the neurogenic distributive picture of hypotension with warm dry skin and paradoxical bradycardia. Failure to respond to 2 liters of crystalloid, a normal lactate, a normal hemoglobin, and a hyperdynamic ventricle all indicate that the problem is a low systemic vascular resistance rather than low preload or low contractility. Norepinephrine is a potent alpha-1 agonist with clinically useful beta-1 activity, so it restores arteriolar and venous tone while simultaneously supporting heart rate and contractility, correcting both halves of the lesion with one drug. Maintaining mean arterial pressure also protects spinal cord perfusion, which matters for neurologic recovery in the first days after injury. Titration to a mean arterial pressure target rather than a fixed dose allows the vasopressor requirement to be weaned as sympathetic vasomotor tone recovers over the days to weeks after injury."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Match the agent to the missing receptor, not to the diagnosis label: neurogenic shock loses alpha-1 tone AND cardiac beta-1 drive, so NOREPINEPHRINE (alpha-1 plus beta-1) beats pure alpha-1 phenylephrine, which triggers reflex bradycardia in a patient who cannot compensate.",
    "lectureSource": "CV40: Shock Pathophysiology and Management",
    "pdfLecture": "CV40",
    "pdfPage": 40,
    "pdfQuote": "Norepinephrine Shock (distributive, cardiogenic,"
  },
  {
    "id": 46,
    "category": "Pediatric Orthopedics: Congenital Scoliosis and the Crankshaft Phenomenon",
    "questionText": "A 7-year-old boy is seen for follow-up of congenital scoliosis. At age 4 he underwent isolated posterior spinal instrumentation and fusion for a progressive right thoracic curve caused by a hemivertebra with a contralateral unsegmented bar; preoperative evaluation had also disclosed a horseshoe kidney, a small ventricular septal defect, and a normal preoperative MRI of the neuraxis. He has no pain, no neurologic complaints, and normal strength and reflexes. Radiographs today show a thick, solid posterior fusion mass with intact hooks and rods and no lucency or hardware breakage, yet the coronal curve has increased from 25 to 42 degrees over 3 years and the rib hump on forward bending is markedly larger. His triradiate cartilages remain open and he has considerable growth ahead of him. Which mechanism best explains the worsening deformity?",
    "options": [
      {
        "text": "Continued anterior vertebral growth against the posterior fusion",
        "explanation": "Correct. A posterior-only fusion permanently tethers the posterior column, but the anterior vertebral body physes are untouched and keep growing in a skeletally immature child. The lengthening anterior column is forced to rotate and buckle around the fixed posterior hinge, driving progressive rotation, lordosis, and an enlarging rib prominence; this is the crankshaft phenomenon. Open triradiate cartilage and fusion before about age 10 identify precisely the high-risk population, and this boy was fused at age 4. The diagnostic signature is exactly what he shows, namely curve and rotational progression despite a radiographically solid fusion mass with intact instrumentation. Prevention requires either combined anterior growth ablation with the posterior fusion or a growth-friendly instrumentation strategy that is lengthened as the child grows."
      },
      {
        "text": "Pseudarthrosis of the posterior fusion mass with rod breakage",
        "explanation": "Incorrect. A failed fusion allows motion across the construct and typically presents with new back pain, a lucent cleft or gap in the fusion mass, and broken or displaced implants on serial films. This boy is pain free, and his imaging explicitly shows a thick solid fusion mass with intact hooks and rods, which excludes mechanical failure as the cause of his deformity. His progression is occurring through continued growth of the unfused anterior column, not through motion at a nonunion. This would be the correct answer if he had new midback pain with a lucent line through the fusion mass and a fractured rod on radiographs."
      },
      {
        "text": "Progressive curve adding-on below the instrumented segments",
        "explanation": "Incorrect. Adding-on describes progressive coronal tilt and translation of vertebrae just beyond the ends of a fusion, usually from a construct that stopped short of the true end vertebra, and it appears as new deformity in the uninstrumented adjacent segments. The deformity here is worsening rotation and rib prominence over the fused segment itself, not distal recruitment of uninstrumented vertebrae. Adding-on also would not explain the striking increase in axial rotation, which is the hallmark of anterior overgrowth around a posterior tether. This would be the correct answer if new films showed the vertebrae distal to the lowest instrumented level tilting progressively into the curve while the fused segment was unchanged."
      },
      {
        "text": "Thoracic insufficiency from progressive fusion of adjacent ribs",
        "explanation": "Incorrect. Thoracic insufficiency syndrome is the inability of the thorax to support normal respiration and lung growth, and it is the feared consequence of early-onset and congenital deformity with fused ribs or a constricted hemithorax. It declares itself with restrictive lung disease, exercise intolerance, tachypnea, and a shortened or narrowed thorax, none of which this asymptomatic boy has. Even when present, it explains respiratory compromise rather than the specific pattern of increasing rotation over a solidly fused spine. This would be the correct answer if he had a rigid narrowed hemithorax with fused ribs, dyspnea on exertion, and a falling forced vital capacity."
      },
      {
        "text": "An occult tethered cord producing neuromuscular curve progression",
        "explanation": "Incorrect. Intraspinal anomalies such as tethered cord and diastematomyelia are genuinely common companions of congenital scoliosis and should be sought before any fusion, but they produce curve progression through neurologic deterioration. Expected findings would include new weakness, spasticity, changing reflexes, cavovarus feet, or bowel and bladder dysfunction, and this boy has a normal neurologic examination. A cord tether also does not preferentially cause rotational buckling confined to a solidly fused segment. This would be the correct answer if he had developed progressive foot deformity, hyperreflexia, and new urinary incontinence alongside the curve progression."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Posterior-only fusion in a child with OPEN TRIRADIATE CARTILAGE lets the anterior vertebral physes keep growing around a fixed posterior tether, producing progressive rotation despite a solid fusion, the crankshaft phenomenon; congenital curves demand a search for cardiac, renal, and intraspinal anomalies before surgery.",
    "lectureSource": "CV32: Scoliosis",
    "pdfLecture": "CV32",
    "pdfPage": 80,
    "pdfQuote": "This phenomenon occurs after a posterior spinal fusion, where the anterior spine"
  },
  {
    "id": 47,
    "category": "Cardiovascular Pharmacology: Nitroprusside Toxicity",
    "questionText": "A 64-year-old man is admitted with hypertensive encephalopathy, blood pressure 236/132 mm Hg, headache, and papilledema. He is started on an intravenous sodium nitroprusside infusion, which is titrated upward to 9 micrograms per kilogram per minute over eight hours because his pressure repeatedly climbs when the rate is reduced. His blood pressure is now 152/86 mm Hg, but he has become agitated and then obtunded, with respirations 32 per minute and warm, pink skin without cyanosis. Arterial blood gas shows pH 7.20 and bicarbonate 11 mEq/L, lactate is 9.4 mmol/L, anion gap is 25 mEq/L, and mixed venous oxygen saturation is 88 percent. Which of the following is the most appropriate immediate management?",
    "options": [
      {
        "text": "Continue the infusion and add intravenous sodium bicarbonate",
        "explanation": "Incorrect. Bicarbonate treats the pH number while leaving the ongoing source of the poison running, and it does nothing to displace cyanide from cytochrome c oxidase, so oxidative phosphorylation remains blocked and lactate will keep rising. In this patient the acidosis is a direct readout of cellular asphyxia, evidenced by the elevated mixed venous oxygen saturation, so buffering alone allows continued neurologic injury and death. This would be the correct answer if he were not on a vasodilator infusion and had severe diabetic ketoacidosis with a pH below 6.9, where bicarbonate alone is the appropriate intervention."
      },
      {
        "text": "Reduce the infusion rate and begin urgent hemodialysis now",
        "explanation": "Incorrect. Hemodialysis clears thiocyanate, the renally excreted metabolite that accumulates over days in patients with kidney disease, but it does not efficiently remove cyanide and cannot be arranged fast enough for a patient decompensating within hours. His picture is acute cyanide accumulation from a very high infusion rate that has overwhelmed the endogenous thiosulfate supply, and merely reducing the rate continues to deliver cyanide. This would be the correct answer if he had chronic kidney disease and had received a modest nitroprusside infusion for several days before developing tinnitus, blurred vision, hyperreflexia, and confusion from thiocyanate accumulation."
      },
      {
        "text": "Stop the infusion and give intravenous hydroxocobalamin now",
        "explanation": "Correct. Sodium nitroprusside releases nitric oxide spontaneously, raising cyclic GMP and producing balanced arterial and venous dilation that drops both afterload and preload within seconds, which is why it is titrated for hypertensive emergency. Each molecule also liberates five cyanide ions, and at rates above roughly 2 micrograms per kilogram per minute, or with prolonged infusion, hepatic impairment, or depleted thiosulfate stores, cyanide overwhelms rhodanese-mediated conversion to thiocyanate. Free cyanide binds ferric iron in mitochondrial cytochrome c oxidase and blocks electron transport, forcing anaerobic metabolism, which explains his lactate of 9.4 mmol/L, high anion gap acidosis, altered mental status, and tachypnea. The elevated mixed venous oxygen saturation with pink skin and no cyanosis is the classic clue that tissues cannot extract delivered oxygen rather than that oxygen delivery has failed. Immediate management is to stop the infusion and give hydroxocobalamin, which chelates cyanide to form renally excreted cyanocobalamin, with sodium thiosulfate as a sulfur donor adjunct."
      },
      {
        "text": "Stop the infusion and administer high dose methylene blue",
        "explanation": "Incorrect. Methylene blue reduces ferric iron in methemoglobin back to the ferrous state and is the antidote for methemoglobinemia, a condition this patient does not have, since he is pink with no saturation gap and no chocolate colored blood. Worse, in cyanide toxicity methemoglobin actually helps by scavenging cyanide, so reversing it would remove a protective sink while leaving cytochrome c oxidase inhibited. This would be the correct answer if he had been given sodium nitrite as part of a cyanide antidote kit and developed symptomatic methemoglobinemia with a measured methemoglobin level near 30 percent."
      },
      {
        "text": "Continue the infusion and give intravenous N-acetylcysteine",
        "explanation": "Incorrect. N-acetylcysteine is a sulfur-containing thiol that has only been proposed as a minor adjunct in nitroprusside toxicity, and it is far less effective than hydroxocobalamin or sodium thiosulfate at handling an acute cyanide load. More importantly, leaving the infusion running guarantees continued cyanide release, so this choice fails the single most urgent step in management for this patient. This would be the correct answer if he were not on a vasodilator infusion and N-acetylcysteine were being given as the antidote for acetaminophen-induced fulminant hepatic failure with encephalopathy, lactic acidosis, and markedly elevated aminotransferases."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Nitroprusside donates NITRIC OXIDE for balanced arterial and venous dilation but liberates CYANIDE; high infusion rates, prolonged use, or hepatic impairment produce lactic acidosis with a HIGH mixed venous oxygen saturation, treated by stopping the drug and giving hydroxocobalamin plus thiosulfate, while thiocyanate accumulation in renal failure is treated with dialysis.",
    "lectureSource": "CV37: Alpha Blockers, Central Sympatholytics and Vasodilators",
    "pdfLecture": "CV37",
    "pdfPage": 32,
    "pdfQuote": "Nitroprusside Excessive BP lowering"
  },
  {
    "id": 48,
    "category": "Cardiovascular Pharmacology: Hyperkalemia During RAS Inhibition",
    "questionText": "A 72-year-old woman with heart failure with reduced ejection fraction, hypertension, and stage 3b chronic kidney disease returns for follow-up. Her regimen is ramipril 10 mg daily, carvedilol, and furosemide. Two weeks ago spironolactone was added, and one week ago she began ibuprofen three times daily for a flare of knee osteoarthritis. She also uses a salt substitute at home. Today she reports fatigue and muscle weakness. Blood pressure is 108/66 mm Hg and heart rate is 52 beats per minute. Serum potassium is 6.4 mEq/L, creatinine has risen from 1.7 to 2.2 mg/dL, and the electrocardiogram shows peaked T waves with a widened QRS complex. Which mechanism best explains the primary contribution of her ramipril to this presentation?",
    "options": [
      {
        "text": "Blockade of the epithelial sodium channel in principal cells, abolishing the lumen-negative gradient",
        "explanation": "Incorrect. Ramipril does not touch the epithelial sodium channel directly; it acts far upstream by preventing formation of angiotensin II, and the loss of channel activity that follows is indirect and mediated by falling aldosterone. Naming direct channel blockade misattributes the pharmacology in this patient even though the downstream electrolyte picture looks similar. This would be the correct answer if her hyperkalemia were attributed to amiloride or triamterene, or to trimethoprim or pentamidine, all of which block the epithelial sodium channel itself and cause a voltage-dependent defect in potassium secretion."
      },
      {
        "text": "Reduced angiotensin II drive to adrenal aldosterone release, lowering distal potassium secretion",
        "explanation": "Correct. Angiotensin II is the dominant stimulus for aldosterone release from the zona glomerulosa, so ramipril lowers circulating aldosterone and thereby reduces sodium reabsorption and potassium secretion by principal cells of the cortical collecting duct. In this woman the effect is amplified by every risk factor on her list: a glomerular filtration rate in stage 3b reduces distal sodium and fluid delivery to the cortical collecting duct and limits the kidney capacity to secrete a potassium load, spironolactone blocks the mineralocorticoid receptor downstream, ibuprofen suppresses prostaglandin-mediated renin release and reduces renal perfusion, the salt substitute is a potassium chloride load, and carvedilol, a nonselective beta blocker, further impairs beta-2 mediated cellular potassium uptake and renin release. Her weakness, bradycardia at 52 beats per minute, peaked T waves, and widened QRS reflect a potassium of 6.4 mEq/L that is now cardiotoxic. Management is calcium for membrane stabilization, potassium-shifting and eliminating therapy, and stopping the nonsteroidal drug, the salt substitute, and the spironolactone while holding the ramipril."
      },
      {
        "text": "Inhibition of renal tubular potassium excretion by competing for the organic cation transporter",
        "explanation": "Incorrect. Potassium is not secreted by an organic cation transporter, and ramipril does not produce hyperkalemia through transporter competition, so this mechanism does not explain her value of 6.4 mEq/L. Her problem is hormonal suppression of distal secretion compounded by low glomerular filtration and a potassium load. This would be the correct answer if the question concerned a drug interaction such as cimetidine or trimethoprim raising serum creatinine by competing for tubular secretion of creatinine, which is a transporter phenomenon rather than a true fall in filtration."
      },
      {
        "text": "Bradykinin accumulation causing a shift of potassium out of cells into the extracellular space",
        "explanation": "Incorrect. Bradykinin does rise with angiotensin-converting enzyme inhibition, but it mediates cough and angioedema rather than transcellular potassium shifting, and no kinin-driven efflux explains her potassium of 6.4 mEq/L. Attributing the hyperkalemia to kinins would also lead to the wrong management, since switching her to an angiotensin receptor blocker would not fix the problem. This would be the correct answer if the presentation were transcellular potassium efflux from another cause, such as digoxin toxicity, insulin deficiency in diabetic ketoacidosis, succinylcholine, acute mineral acidosis, or a hyperosmolar state pulling potassium out with water."
      },
      {
        "text": "Direct suppression of the sodium-potassium ATPase in skeletal muscle, limiting cellular uptake",
        "explanation": "Incorrect. Ramipril has no direct inhibitory effect on the sodium-potassium ATPase, and impaired muscular uptake is not how angiotensin-converting enzyme inhibitors raise potassium; her weakness is a consequence of the hyperkalemia rather than evidence of a pump defect. The renal secretory defect from low aldosterone plus her reduced filtration rate accounts for the numbers. This would be the correct answer if she had digoxin toxicity, since cardiac glycosides inhibit the sodium-potassium ATPase and acute overdose produces hyperkalemia by exactly that route."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: ACE inhibitors and ARBs raise potassium by cutting ANGIOTENSIN II DRIVE TO ALDOSTERONE, reducing distal secretion; the danger multiplies with chronic kidney disease, diabetes, potassium-sparing diuretics, NSAIDs, trimethoprim, heparin, and potassium-based salt substitutes.",
    "lectureSource": "CV35: RAS Inhibitors",
    "pdfLecture": "CV35",
    "pdfPage": 37,
    "pdfQuote": "Hyperkalemia ACEIs and ARBs reduce aldosterone secretion, which impairs"
  },
  {
    "id": 49,
    "category": "Pharmacology: Beta Blockade in Catecholamine Excess",
    "questionText": "A 44-year-old woman is admitted after three months of episodic pounding headache, drenching sweats, and palpitations, during which her blood pressure has been documented as high as 210/118 mmHg. Plasma free metanephrines are six times the upper limit of normal, and CT shows a 4.5 cm right adrenal mass. TSH and free T4 are normal. In the emergency department her heart rate is 132 per minute and blood pressure is 205/115 mmHg, and a covering intern orders intravenous propranolol to control the tachycardia. Within ten minutes her blood pressure climbs to 245/140 mmHg and she becomes acutely dyspneic with diffuse crackles and hypoxemia. Which of the following best explains her deterioration?",
    "options": [
      {
        "text": "Negative inotropy from beta-1 blockade causing cardiogenic shock",
        "explanation": "Incorrect. Pump failure from beta-1 blockade presents with hypotension, cool extremities, and a narrow pulse pressure, whereas her blood pressure rose to 245/140 mmHg, which identifies a resistance problem rather than a contractility problem. Depressed inotropy does contribute to her pulmonary edema, but it cannot account for the abrupt hypertensive surge that drove it. This would be the correct answer if she had become hypotensive and poorly perfused with a low output state immediately after the propranolol."
      },
      {
        "text": "Reflex vagal surge triggered by rapid intravenous drug delivery",
        "explanation": "Incorrect. A vagal surge produces bradycardia, nausea, and hypotension, which is nothing like a pressure of 245/140 mmHg with flash pulmonary edema. The speed of injection is not the issue; the event is pharmacodynamic and turns on which receptor subtypes propranolol occupies. This would be the correct answer if she had developed sinus bradycardia, pallor, and syncope within seconds of the injection."
      },
      {
        "text": "Beta-2 mediated bronchospasm raising pulmonary vascular pressure",
        "explanation": "Incorrect. She has no history of asthma or COPD, and her findings of diffuse crackles with hypoxemia in the setting of a hypertensive surge indicate alveolar flooding, not airway narrowing with wheeze. Bronchospasm also cannot raise systemic blood pressure by 40 mmHg within ten minutes. This would be the correct answer if a patient with known asthma had developed wheezing and hypoxemia after receiving nonselective propranolol."
      },
      {
        "text": "Direct catecholamine release provoked by the beta antagonist",
        "explanation": "Incorrect. Beta antagonists do not stimulate chromaffin tissue to secrete catecholamines, and her circulating catecholamine burden is not what changed at the moment the drug was given. What changed is which receptors those catecholamines were still able to reach. This would be the correct answer if the surge had followed tumor manipulation during surgery or an agent known to provoke release in an unblocked patient."
      },
      {
        "text": "Unopposed alpha-1 vasoconstriction with beta-2 dilation lost",
        "explanation": "Correct. Tumor-derived catecholamines act simultaneously on alpha-1 receptors to vasoconstrict and on beta-2 receptors to dilate skeletal muscle and other vascular beds, and that beta-2 dilation partially offsets the alpha-1 pressor effect. Propranolol is nonselective, so it removes the beta-2 vasodilator brake and leaves alpha-1 stimulation entirely unopposed, driving systemic vascular resistance and blood pressure sharply upward. Afterload rises against a ventricle whose contractile reserve has just been blunted by beta-1 blockade, and acute pulmonary edema follows. The correct sequence in pheochromocytoma is alpha blockade first with phenoxybenzamine or a selective alpha-1 antagonist, and only then a beta blocker for residual or reflex tachycardia. Her normal thyroid studies matter, because in thyrotoxicosis propranolol is appropriate first line therapy for the adrenergic symptoms with no such crisis risk."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: In pheochromocytoma give ALPHA blockade before any beta blocker, because blocking beta-2 vasodilation leaves alpha-1 vasoconstriction unopposed and can precipitate hypertensive crisis; in thyrotoxicosis, by contrast, propranolol is given FIRST and immediately.",
    "lectureSource": "CV36: Calcium Channel Blockers and Beta Blockers",
    "pdfLecture": "CV36",
    "pdfPage": 52,
    "pdfQuote": "Beta Blockers Adverse Effects and Mechanisms"
  },
  {
    "id": 50,
    "category": "Cardiovascular Medicine: Adherence and Single-Pill Combination Therapy",
    "questionText": "A 49-year-old woman with stage 2 hypertension returns for follow-up. Six months ago she was prescribed lisinopril 20 mg in the morning, amlodipine 5 mg in the evening, and hydrochlorothiazide 25 mg in the morning as three separate tablets. Today her blood pressure is 158/96 mm Hg in both arms and her heart rate is 78 per minute; serum creatinine, potassium, and sodium are all normal. Pharmacy records show she refilled the lisinopril twice, the amlodipine once, and the hydrochlorothiazide not at all, and she volunteers that she works two jobs, routinely forgets the evening tablet, and stopped the fluid pill because it made her run to the bathroom during her shift. She has no ankle edema, no cough, and no chest pain. Which of the following is the most appropriate next step in her management?",
    "options": [
      {
        "text": "Increase the lisinopril dose to 40 mg daily and recheck her in six months",
        "explanation": "Incorrect. Doubling a drug she is taking only intermittently cannot fix an adherence problem, and the dose-response curve for ACE inhibitors is relatively flat for blood pressure above moderate doses, so this adds cost and hyperkalemia risk with little pressure reduction. A six-month interval also violates the principle of reassessing about one month after any change in therapy. This would be the correct answer if refill records and home readings confirmed full adherence to a submaximal regimen and her pressure were only modestly above goal."
      },
      {
        "text": "Add a fourth antihypertensive agent and recheck her in three months",
        "explanation": "Incorrect. Adding a fourth prescription to a regimen she is already failing to take increases pill burden and cost, which are the very barriers driving her uncontrolled pressure, and she cannot be considered treatment resistant when three prescribed agents are demonstrably not being ingested. Three months is also too long an interval to wait in a woman whose pressure is 158/96 mm Hg. This would be the correct answer if refill records and home readings confirmed full adherence to three agents at maximally tolerated doses including a diuretic and her pressure still exceeded goal."
      },
      {
        "text": "Stop all three drugs and restart them one at a time over several months",
        "explanation": "Incorrect. Sequential rechallenge is a strategy for identifying the culprit behind an adverse drug effect, and she has no cough, no edema, and no metabolic abnormality to attribute to any particular agent, so a washout would expose her to months of stage 2 pressures with no diagnostic yield. The information needed here already came from her refill history and her own account. This would be the correct answer if she had developed an unexplained reaction such as angioedema or a diffuse rash after several agents were started at the same time."
      },
      {
        "text": "Switch her to a single-pill combination and recheck her in four weeks",
        "explanation": "Correct. Her refill record and her own account localize the problem to nonadherence rather than pharmacologic failure, and the normal creatinine and potassium along with the absence of edema and cough confirm that she has not been taking enough drug to generate class effects. Pill burden, dosing frequency, and cost are among the strongest modifiable adherence barriers, and fixed-dose single-pill combinations improve both adherence and blood pressure control compared with the identical agents dispensed separately. A once-daily triple single-pill combination, such as an angiotensin receptor blocker with amlodipine and hydrochlorothiazide, delivers the same three drug classes in one tablet, lowers copays, and fits a schedule built around two jobs; switching the lisinopril to an angiotensin receptor blocker is required because no ACE-inhibitor-based triple combination pill is available. Guidelines call for monthly follow-up after starting or changing therapy until the target is reached, so four weeks is the appropriate interval. Education should explicitly cover morning dosing of the diuretic and the fact that its urinary frequency wanes after the first few weeks."
      },
      {
        "text": "Move all three pills to bedtime dosing and recheck her in six months",
        "explanation": "Incorrect. Shifting the timing does nothing about the number of tablets or the copays she must pay, which are her stated barriers, and moving a thiazide to the evening predictably worsens nocturia and makes her even more likely to abandon it. The six-month interval again postpones any confirmation that the intervention worked. This would be the correct answer if she were already adherent to a simplified regimen and the specific concern were an absent nocturnal dip documented on ambulatory monitoring."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Before escalating therapy in uncontrolled hypertension, verify ADHERENCE with pharmacy refill data; single-pill combinations reduce pill burden and improve control, and any patient whose regimen is started or changed should be rechecked in roughly ONE MONTH.",
    "lectureSource": "CV39: Hypertension Management"
  }
];

window.Test_Cumulative_CPR_Wk4 = Test_Cumulative_CPR_Wk4;
