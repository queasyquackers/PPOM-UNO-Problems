const Test_CV38 = [
  {
    "id": 1,
    "category": "Cardiology: Hypertension Staging",
    "questionText": "A 51-year-old woman presents for an annual physical examination. She has no history of diabetes or cardiovascular disease, exercises four times weekly, does not smoke, and drinks no alcohol. Her blood pressure today is 126/86 mmHg, and readings obtained at two subsequent visits are 124/88 mmHg and 127/85 mmHg. Heart rate is 70/min and the remainder of the examination is unremarkable. How should her blood pressure be classified?",
    "options": [
      {
        "text": "Normal, because neither value has reached the stage 2 threshold of 140/90 mmHg",
        "explanation": "Incorrect. Normal requires a systolic below 120 AND a diastolic below 80, and this patient satisfies neither criterion. Failing to reach stage 2 does not make a pressure normal; the categories are sequential, not binary. This would be the correct answer if her readings had been consistently below 120/80 mmHg."
      },
      {
        "text": "Elevated, because the systolic value of 126 falls within the 120 to 129 range",
        "explanation": "Incorrect. The systolic value alone does place her in the elevated band, but the elevated category also requires a diastolic below 80, and hers is 86. Ignoring the diastolic is the single most common staging error in this lecture. This would be the correct answer if her readings had been approximately 126/74 mmHg."
      },
      {
        "text": "Stage 1 hypertension, assigned by the diastolic value",
        "explanation": "Correct. Her systolic of 126 sits in the elevated range (120-129) while her diastolic of 86 sits in the stage 1 range (80-89), so the two values disagree. When systolic and diastolic fall into different categories, the higher category determines the stage. Because the readings were confirmed on two additional occasions, the requirement of two or more readings on two or more occasions is satisfied and the diagnosis of stage 1 hypertension stands."
      },
      {
        "text": "Stage 2 hypertension, because the readings were confirmed on three separate visits",
        "explanation": "Incorrect. Repeating readings confirms a diagnosis but does not escalate its stage. Stage 2 requires a systolic of 140 or more or a diastolic of 90 or more, and she reaches neither. This would be the correct answer if her confirmed readings had been around 144/92 mmHg."
      },
      {
        "text": "White coat hypertension, pending out-of-office confirmation of these readings",
        "explanation": "Incorrect. White coat hypertension requires elevated office readings alongside out-of-office readings that do not meet diagnostic criteria, and no home readings are described here. Her values are also only modestly elevated rather than the marked office-only spike typical of the phenomenon. This would be the correct answer if her home log had consistently read below 130/80 mmHg while office readings ran much higher."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: when systolic and diastolic fall into different categories, the HIGHER category determines the stage - so 126/86 is stage 1 hypertension, not elevated.",
    "pdfPage": 5,
    "pdfQuote": "If there is a disparity in category between the systolic"
  },
  {
    "id": 2,
    "category": "Cardiology: Diagnosis of Hypertension",
    "questionText": "A 47-year-old man is seen for a pre-employment physical. He is asymptomatic and has no past medical history. An automated office device records a blood pressure of 148/94 mmHg in the left arm. He has never had his blood pressure checked before. Heart rate is 78/min, BMI is 27 kg/m2, and the cardiac, pulmonary and abdominal examinations are normal. Which of the following is the most appropriate next step?",
    "options": [
      {
        "text": "Obtain additional readings on at least one more occasion, in and out of office",
        "explanation": "Correct. Hypertension is diagnosed from two or more readings obtained on two or more occasions, ideally combining in-office and out-of-office measurements, with appropriate technique and cuff size. A single automated reading in a patient who has never been screened cannot distinguish sustained hypertension from a transient elevation or a white coat effect. Confirming the pattern first prevents labeling and treating a patient who is not actually hypertensive, and the out-of-office readings simultaneously screen for white coat and masked patterns."
      },
      {
        "text": "Start a single antihypertensive agent today and reassess the response in four weeks",
        "explanation": "Incorrect. Treatment presupposes a diagnosis, and the diagnosis has not yet been established from a single reading. Beginning therapy now also destroys the baseline needed to interpret later measurements. This would be the correct answer if repeat readings on separate occasions had already confirmed sustained hypertension."
      },
      {
        "text": "Diagnose stage 2 hypertension now and order the full newly-diagnosed laboratory panel",
        "explanation": "Incorrect. The numeric value does fall in the stage 2 range, but staging comes after the diagnosis is confirmed, not from an isolated automated reading. The initial laboratory panel is reserved for patients with newly diagnosed hypertension. This would be the correct answer if two or more readings on two or more occasions had documented pressures of 140/90 mmHg or higher."
      },
      {
        "text": "Order ambulatory monitoring today, since office readings are unreliable in every patient",
        "explanation": "Incorrect. Ambulatory monitoring is indicated for a discrepancy between home and office measurements, and no home readings exist yet to be discrepant. It is also expensive, uncomfortable to wear, and requires a physician who can interpret the output. This would be the correct answer if his home log had consistently disagreed with the office values."
      },
      {
        "text": "Repeat the reading in the opposite arm and record the lower of the two values",
        "explanation": "Incorrect. Checking both arms is reasonable technique, but selecting the lower value is not how the diagnosis is made and would systematically underestimate his pressure. The lecture's requirement is repetition across occasions, not across arms within one visit. This would be the correct answer if the question were about detecting an inter-arm pressure difference suggesting coarctation."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: hypertension requires two or more readings on two or more occasions, ideally in and out of the office, with appropriate technique and cuff size - never one office reading.",
    "pdfPage": 7,
    "pdfQuote": "Appropriate technique and cuff size"
  },
  {
    "id": 3,
    "category": "Preventive Medicine: Hypertension Screening",
    "questionText": "A 38-year-old woman with type 2 diabetes mellitus and a BMI of 34 kg/m2 presents for a routine visit. Her blood pressure today is 118/76 mmHg and has been in the normal range at each of her last two annual visits. She takes metformin, is asymptomatic, and her examination is unremarkable. According to the screening guidance presented in this lecture, how frequently should her blood pressure be measured?",
    "options": [
      {
        "text": "Every five years, since her current blood pressure is in the normal range",
        "explanation": "Incorrect. A five-year interval is not part of the guidance discussed, and her normal reading today does not remove her risk factors. Obesity and type 2 diabetes are precisely the features that shorten the screening interval. This would be the correct answer if the lecture had endorsed extended intervals for low-risk adults, which it does not."
      },
      {
        "text": "Once yearly, the same interval recommended for adults with normal blood pressure",
        "explanation": "Incorrect. Yearly screening is the minimum for adults with normal blood pressure and no risk factors, and this patient has two named risk factors. Applying the low-risk interval to a high-risk patient is the trap here. This would be the correct answer if she had a normal BMI, no diabetes, and no prior elevated systolic reading."
      },
      {
        "text": "Only when she develops symptoms that could be attributed to elevated pressure",
        "explanation": "Incorrect. Symptom-triggered screening defeats the entire purpose, because hypertension is a silent killer that is usually asymptomatic and found incidentally. Waiting for symptoms in practice means waiting for target-organ damage. This would be the correct answer if hypertension reliably produced early warning symptoms, which it does not."
      },
      {
        "text": "Every three months using a home device, because of her diabetes and obesity",
        "explanation": "Incorrect. Quarterly home monitoring is more intensive than the guidance requires, and the screening recommendation specifies office blood pressure measurement rather than home devices. Home readings have a role in confirming a diagnosis, not in routine screening intervals. This would be the correct answer if she had already been diagnosed and were being followed for treatment response."
      },
      {
        "text": "At least twice a year",
        "explanation": "Correct. The 2021 USPSTF guidance is to screen adults 18 years or older with office blood pressure measurement, at a minimum yearly for adults with normal blood pressure, and at least semiannually for adults with risk factors such as obesity or type 2 diabetes, or with a prior elevated systolic pressure. This patient carries two of the named risk factors, so she moves into the semiannual group despite today's normal value. Screening intervals are set by risk, not by the most recent number."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: USPSTF screening is yearly for adults with normal blood pressure and at least semiannually for those with obesity, type 2 diabetes, or a prior elevated systolic pressure.",
    "pdfPage": 9,
    "pdfQuote": "Adults with risk factors (obesity, T2DM) or with prior elevated SBP"
  },
  {
    "id": 4,
    "category": "Physiology: Renin-Angiotensin-Aldosterone System",
    "questionText": "A 54-year-old man with primary hypertension is found to have a markedly elevated plasma renin activity during an evaluation for poorly controlled blood pressure. His kidneys are structurally normal on imaging and he takes no diuretic. Which of the following physiologic conditions would be expected to have driven the increase in renin release?",
    "options": [
      {
        "text": "A rise in perfusion pressure sensed by the afferent arteriole of the glomerulus",
        "explanation": "Incorrect. Renin release is stimulated by a fall in blood pressure, not a rise. Increased renal perfusion pressure signals that circulating volume is adequate and suppresses the system. This would be the correct answer if the question had asked what turns renin secretion off."
      },
      {
        "text": "A fall in sodium delivery to the macula densa",
        "explanation": "Correct. The lecture lists three stimuli for renin secretion: decreased blood pressure, decreased sodium delivery to the macula densa, and increased sympathetic activity. The macula densa senses tubular sodium as a proxy for effective circulating volume, and when delivery falls the juxtaglomerular cells release renin. Renin then cleaves angiotensinogen to angiotensin I, ACE converts that to angiotensin II, and the cascade raises both cardiac output and total peripheral resistance."
      },
      {
        "text": "An increase in parasympathetic outflow directed to the juxtaglomerular apparatus",
        "explanation": "Incorrect. It is increased sympathetic activity, not parasympathetic activity, that stimulates renin release in this lecture. Substituting one autonomic limb for the other is a common student error. This would be the correct answer if the stem had described heightened sympathetic tone from pain, stress, or hypovolemia."
      },
      {
        "text": "A rise in circulating aldosterone acting on the principal cells of the collecting duct",
        "explanation": "Incorrect. Aldosterone is downstream of angiotensin II, not a stimulus for renin, and the sodium retention it produces would tend to suppress renin further. Reversing the direction of the cascade is the trap. This would be the correct answer if the question had asked what angiotensin II causes rather than what causes renin release."
      },
      {
        "text": "An increase in mean arterial pressure detected by the carotid sinus baroreceptors",
        "explanation": "Incorrect. A rising mean arterial pressure is the opposite of the low-pressure signal that triggers renin secretion. Baroreceptor-mediated sympathetic withdrawal would reduce, not increase, renin release. This would be the correct answer if the stem had described hemorrhage or another cause of falling arterial pressure."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: renin release is triggered by decreased blood pressure, decreased sodium delivery to the macula densa, and increased sympathetic activity.",
    "pdfPage": 12,
    "pdfQuote": "Factors that stimulate renin secretion"
  },
  {
    "id": 5,
    "category": "Physiology: Determinants of Blood Pressure",
    "questionText": "A 58-year-old woman with untreated hypertension is found to have chronically elevated angiotensin II levels, with corresponding increases in circulating aldosterone and antidiuretic hormone. Her heart rate is 74/min and her echocardiogram shows normal systolic function with an increased end-diastolic volume. Through which mechanism does this hormonal arm of the cascade raise her cardiac output?",
    "options": [
      {
        "text": "By directly increasing sinoatrial node firing rate through beta-1 adrenergic receptors",
        "explanation": "Incorrect. Increased sinoatrial firing is the sympathetic arm of the angiotensin II response, not the aldosterone and antidiuretic hormone arm, and her heart rate is normal at 74/min. The stem specifically points to volume rather than rate. This would be the correct answer if the vignette had emphasized tachycardia and increased contractility."
      },
      {
        "text": "By reducing total peripheral resistance and thereby unloading the left ventricle",
        "explanation": "Incorrect. Angiotensin II, sympathetics, antidiuretic hormone and aldosterone all promote vasoconstriction, which raises rather than lowers total peripheral resistance. Falling resistance would also lower rather than raise mean arterial pressure through the MAP equation. This would be the correct answer if the question had described a vasodilator drug rather than the RAAS."
      },
      {
        "text": "By increasing myocardial contractility independent of any change in ventricular filling",
        "explanation": "Incorrect. Contractility is raised by the sympathetic arm of the cascade, whereas aldosterone and antidiuretic hormone act on sodium and water handling. The echocardiographic clue is an increased end-diastolic volume, which is a filling change. This would be the correct answer if the stem had described increased sympathetic drive with a normal filling volume."
      },
      {
        "text": "By expanding blood volume, which raises preload and stroke volume",
        "explanation": "Correct. Angiotensin II stimulates aldosterone secretion from the adrenal gland and antidiuretic hormone release from the posterior pituitary, and both promote sodium and water retention in the vascular compartment. The resulting rise in blood volume increases preload, and increased preload raises stroke volume. Since cardiac output equals heart rate times stroke volume, output rises even at an unchanged heart rate, and since MAP equals cardiac output times total peripheral resistance, blood pressure rises with it. Her increased end-diastolic volume is the visible footprint of that preload effect."
      },
      {
        "text": "By shifting interstitial fluid into the lymphatic circulation and back to the heart",
        "explanation": "Incorrect. Lymphatic return is not a mechanism described for the renin-angiotensin-aldosterone system in this lecture. Aldosterone and antidiuretic hormone act on renal sodium and water handling to expand the intravascular volume itself. This would be the correct answer if the question concerned edema resolution rather than blood pressure generation."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: aldosterone and ADH raise cardiac output through volume - sodium and water retention increases blood volume, which raises preload and therefore stroke volume.",
    "pdfPage": 12,
    "pdfQuote": "MAP = CO x TPR"
  },
  {
    "id": 6,
    "category": "Physiology: Pathogenesis of Primary Hypertension",
    "questionText": "A 61-year-old man has had untreated hypertension for 12 years. Serial studies show that his cardiac output has remained essentially unchanged over that period, while his measured systemic vascular resistance and his blood pressure have both climbed steadily. He takes no medications and has no evidence of renal artery disease. Which process best accounts for this progressive rise?",
    "options": [
      {
        "text": "Vascular remodeling with rising endothelin and falling nitric oxide",
        "explanation": "Correct. Once blood pressure is elevated, the pressure itself injures the vessel wall and drives vascular remodeling, increased endothelin production and decreased release of vasodilators such as nitric oxide. The net effect is further vasoconstriction, which raises total peripheral resistance, which raises blood pressure again. This is why untreated hypertension behaves as a self-reinforcing loop rather than settling at a plateau, and it explains a rising pressure at a fixed cardiac output."
      },
      {
        "text": "Progressive loss of renin secretion from the juxtaglomerular apparatus over many years",
        "explanation": "Incorrect. Falling renin would reduce angiotensin II and therefore reduce both vasoconstriction and volume retention, which lowers rather than raises pressure. Nothing in the vignette suggests renin deficiency. This would be the correct answer if the question asked what happens when a RAAS inhibitor successfully suppresses the axis."
      },
      {
        "text": "A chronic reduction in antidiuretic hormone released from the posterior pituitary",
        "explanation": "Incorrect. Less antidiuretic hormone means less water retention, less blood volume, less preload and a lower pressure. The vignette instead describes rising resistance at unchanged output. This would be the correct answer if the stem had described falling blood pressure with dilute high-volume urine output."
      },
      {
        "text": "A sustained fall in heart rate compensated by a proportional rise in stroke volume",
        "explanation": "Incorrect. That combination is precisely what keeps cardiac output constant, so it explains the unchanged output but not the rising resistance or the rising pressure. The question asks for the driver of the progression, not for an explanation of the stable term. This would be the correct answer if the finding to be explained were a stable cardiac output alone."
      },
      {
        "text": "Increased parasympathetic tone acting on arteriolar smooth muscle receptors",
        "explanation": "Incorrect. It is increased sympathetic tone, along with angiotensin II, antidiuretic hormone and aldosterone, that produces the vasoconstriction raising peripheral resistance in this lecture. Parasympathetic activity is not described as a driver of arteriolar tone here. This would be the correct answer if the pathway being tested were vagally mediated slowing of the heart."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: elevated pressure causes vascular remodeling, increased endothelin and decreased vasodilators such as nitric oxide, which raises resistance further - hypertension feeds itself.",
    "pdfPage": 12,
    "pdfQuote": "Increased BP! Decreased Vasodilators"
  },
  {
    "id": 7,
    "category": "Cardiology: Secondary Hypertension",
    "questionText": "A 22-year-old college student is found to have a blood pressure of 168/104 mmHg at a campus health visit, confirmed on two subsequent occasions. He has a body mass index of 31 kg/m2, a sedentary lifestyle, and both parents carry a diagnosis of hypertension. He reports intermittent headaches but no other symptoms. Which feature of this presentation most strongly justifies an evaluation for a secondary cause?",
    "options": [
      {
        "text": "A family history of hypertension in both of his parents",
        "explanation": "Incorrect. Family history is a non-modifiable risk factor for primary hypertension and, if anything, supports a primary rather than secondary diagnosis. Primary hypertension is frequently familial. This would be the correct answer if the question had asked which feature supports an essential, non-correctable cause."
      },
      {
        "text": "A body mass index of 31 kg/m2 together with a sedentary lifestyle",
        "explanation": "Incorrect. Obesity and physical inactivity are modifiable risk factors for primary hypertension and are also grounds for more frequent screening, but neither is one of the four triggers for a secondary workup. Obesity would raise suspicion specifically for sleep apnea only if disordered breathing were described. This would be the correct answer if the question had asked which factors he can be counseled to change."
      },
      {
        "text": "Onset of hypertension at a young age",
        "explanation": "Correct. The lecture names four situations that should prompt a search for a secondary cause: hypertension unresponsive to medications, presentation at a young age, new-onset hypertension in an older patient, and acute worsening of previously well-controlled blood pressure. A 22-year-old with confirmed stage 2 hypertension satisfies the young-age trigger, and secondary causes account for roughly 10% of hypertension but are potentially findable and fixable. That possibility of correction is what makes identifying the trigger worth the workup."
      },
      {
        "text": "A single elevated automated office reading obtained on the day he first presented",
        "explanation": "Incorrect. His elevation was confirmed on two further occasions, so this is not a single reading, and a single reading would not establish any diagnosis at all. Repetition addresses whether hypertension exists, not whether it is secondary. This would be the correct answer if the issue were whether he meets diagnostic criteria in the first place."
      },
      {
        "text": "The presence of intermittent headache as the only symptom reported at the visit",
        "explanation": "Incorrect. Headache is nonspecific and appears in patients with primary hypertension, resistant hypertension, and hypertensive crisis alike, so it does not point toward a correctable cause. Most hypertension is asymptomatic regardless of etiology. This would be the correct answer if headache were accompanied by findings of acute end-organ damage, which would instead define a hypertensive emergency."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: look for a secondary cause when the patient is unresponsive to medications, presents at a young age, is older with new-onset hypertension, or acutely loses previously good control.",
    "pdfPage": 13,
    "pdfQuote": "Consider in the following pts"
  },
  {
    "id": 8,
    "category": "Cardiology: Secondary Hypertension",
    "questionText": "A 44-year-old woman has a blood pressure of 162/98 mmHg despite two antihypertensive agents. She takes no diuretic and no over-the-counter medications. Laboratory studies show a serum potassium of 2.9 mEq/L, a serum bicarbonate of 33 mEq/L, and an arterial pH of 7.49. Serum creatinine and TSH are normal, and there is no abdominal bruit. Which underlying abnormality best explains this combination of findings?",
    "options": [
      {
        "text": "Excess catecholamine secretion from a chromaffin cell tumor",
        "explanation": "Incorrect. Catecholamine excess would be expected to produce episodic hypertension with adrenergic symptoms rather than the fixed metabolic picture of hypokalemia with alkalosis. Nothing in the vignette describes paroxysms, palpitations or diaphoresis. This would be the correct answer if she had episodic severe hypertension with headache, sweating and palpitations."
      },
      {
        "text": "Excess glucocorticoid production driven by pituitary corticotropin",
        "explanation": "Incorrect. Cushing syndrome is a listed secondary cause of hypertension, but the vignette gives none of its features and the electrolyte picture here points specifically at mineralocorticoid activity. Glucocorticoid excess would be suggested by body habitus changes, glucose intolerance or skin findings. This would be the correct answer if she had central obesity, striae and hyperglycemia along with the hypertension."
      },
      {
        "text": "Autonomous mineralocorticoid excess",
        "explanation": "Correct. Primary aldosteronism is defined by primary mineralocorticoid excess, specifically aldosterone, and the lecture gives its classic triad as hypertension, unexplained hypokalemia, and metabolic alkalosis. Aldosterone drives sodium reabsorption with obligatory potassium and hydrogen ion loss, which is exactly why the potassium is low and the bicarbonate and pH are high. The fact that she is on no diuretic makes the hypokalemia genuinely unexplained, which is the tell that separates this from far more common causes of a low potassium."
      },
      {
        "text": "Renin excess arising from a narrowed renal artery reducing kidney perfusion",
        "explanation": "Incorrect. Renovascular disease is a real secondary cause, but its bedside signature in this lecture is an abdominal bruit, which is explicitly absent here. The hypokalemia and alkalosis point to primary rather than secondary mineralocorticoid activation. This would be the correct answer if an abdominal bruit had been heard and imaging had shown renal artery narrowing."
      },
      {
        "text": "Excess thyroid hormone raising cardiac output and widening pulse pressure",
        "explanation": "Incorrect. Thyroid disease is on the secondary causes list, which is why a TSH is checked, but her TSH is normal and thyroid disease does not produce this electrolyte pattern. The lecture pairs thyroid workup with a TSH precisely so it can be excluded quickly. This would be the correct answer if her TSH had been suppressed with thyromegaly on examination."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: hypertension plus unexplained hypokalemia plus metabolic alkalosis is the triad of primary aldosteronism - especially in a patient taking no diuretic.",
    "pdfPage": 13,
    "pdfQuote": "Remaining 10% of HTN; known underlying cause"
  },
  {
    "id": 9,
    "category": "Cardiology: Renovascular Hypertension",
    "questionText": "A 29-year-old woman with no medical history and a BMI of 22 kg/m2 is found to have a blood pressure of 172/104 mmHg on three occasions. She takes no medications and does not smoke. Auscultation of the abdomen reveals a bruit in the upper abdomen. Serum creatinine, potassium, TSH and glucose are all normal, and there is no thyromegaly or heart murmur. Which lesion is the most likely cause of her hypertension?",
    "options": [
      {
        "text": "Atherosclerotic narrowing of the proximal renal artery",
        "explanation": "Incorrect. Atherosclerotic renal artery stenosis produces the same abdominal bruit but is a disease of older patients with vascular risk factors, and this woman is 29, lean and a non-smoker. The lecture explicitly contrasts the two renovascular causes by age. This would be the correct answer if the patient were an older adult with diabetes, hyperlipidemia or heavy tobacco use."
      },
      {
        "text": "Coarctation of the aorta distal to the left subclavian artery",
        "explanation": "Incorrect. Coarctation is a listed secondary cause, mainly in young children though diagnosable in adults, but its examination signature is a systolic murmur with hypertension proximally and low pressure distally, not an abdominal bruit. No murmur or pulse discrepancy is described. This would be the correct answer if she had upper extremity hypertension with diminished femoral pulses and a systolic murmur."
      },
      {
        "text": "A catecholamine-secreting tumor of the adrenal medulla",
        "explanation": "Incorrect. Pheochromocytoma belongs on the secondary causes list but does not cause an abdominal bruit, which is a vascular flow sound. Her sustained rather than paroxysmal hypertension also fits poorly. This would be the correct answer if she had episodic hypertension with headache, palpitations and diaphoresis."
      },
      {
        "text": "Upper airway collapse during sleep with recurrent nocturnal desaturation",
        "explanation": "Incorrect. Obstructive sleep apnea is commonly seen in patients with obesity, and her BMI of 22 argues strongly against it. It also does not generate an abdominal bruit. This would be the correct answer if she were obese with a large neck circumference and witnessed apneas."
      },
      {
        "text": "Fibromuscular dysplasia of the renal artery",
        "explanation": "Correct. Fibromuscular dysplasia is one of the two renal vascular diseases in this lecture and typically occurs in younger adult females, producing an abdominal bruit on examination and a characteristic string of beads appearance of the renal artery on CT. The narrowed vessel reduces renal perfusion, which stimulates renin release and drives the RAAS cascade toward increased cardiac output and increased peripheral resistance. Her age, sex, lean habitus and absence of atherosclerotic risk factors separate her cleanly from atherosclerotic renal artery stenosis."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: an abdominal bruit means renovascular disease - fibromuscular dysplasia in the young adult female with a string of beads on CT, atherosclerotic renal artery stenosis in the older patient.",
    "pdfPage": 13,
    "pdfQuote": "Stenosis of renal artery and fibromuscular dysplasia"
  },
  {
    "id": 10,
    "category": "Cardiology: Drug-Induced Hypertension",
    "questionText": "A 68-year-old man with osteoarthritis of both knees has taken ibuprofen daily for the past year for pain control. Over that same year his blood pressure has risen from 128/78 mmHg to 148/92 mmHg, confirmed on repeated visits. His weight, diet and activity level are unchanged, he takes metformin for type 2 diabetes, and his creatinine and potassium are normal. Which of his exposures is most likely contributing to the change?",
    "options": [
      {
        "text": "Metformin prescribed for his type 2 diabetes mellitus",
        "explanation": "Incorrect. Metformin is not among the medications the lecture identifies as causes of secondary hypertension. His diabetes matters for screening frequency and cardiovascular risk, not as a drug-induced pressure effect. This would be the correct answer if the medication list included a corticosteroid, a decongestant or an oral contraceptive."
      },
      {
        "text": "Chronic NSAID use",
        "explanation": "Correct. The lecture lists chronic NSAID use alongside oral contraceptives, corticosteroids and decongestants as medications that cause secondary hypertension, and daily ibuprofen for a year is exactly that exposure. The temporal relationship is the key evidence here: his pressure climbed over the same interval that the NSAID was taken, with no change in weight, diet or activity to explain it. This is also why the evaluation history specifically asks about non-prescription NSAIDs, since patients frequently do not report them as medications."
      },
      {
        "text": "Two beers each evening, a pattern unchanged for the past twenty years",
        "explanation": "Incorrect. Excess alcohol intake is a modifiable risk factor for primary hypertension, but two beers nightly is not described as excess and, critically, the pattern has not changed while his pressure has. A stable exposure cannot explain a new change. This would be the correct answer if he had recently escalated to heavy daily alcohol consumption."
      },
      {
        "text": "A daily multivitamin containing vitamin D and calcium carbonate",
        "explanation": "Incorrect. Multivitamin supplements are not on the lecture's list of medications that cause hypertension. Including a plausible but irrelevant over-the-counter product tests whether you know the actual list. This would be the correct answer if the supplement in question were a sympathomimetic decongestant."
      },
      {
        "text": "An inhaled short-acting bronchodilator used approximately twice each week",
        "explanation": "Incorrect. Intermittent inhaled bronchodilator use is not identified as a cause of secondary hypertension in this lecture, and the low frequency of use makes a sustained pressure effect implausible. Systemic decongestants, not inhaled rescue therapy, are the named respiratory-related culprits. This would be the correct answer if he were taking an oral decongestant daily."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: always ask about non-prescription NSAIDs. Chronic NSAID use, oral contraceptives, corticosteroids, decongestants and cocaine are the drug causes of secondary hypertension.",
    "pdfPage": 13,
    "pdfQuote": "Meds: Oral Contraceptives, Chronic NSAID use, corticosteroids"
  },
  {
    "id": 11,
    "category": "Cardiology: Blood Pressure Measurement",
    "questionText": "A 55-year-old man has office blood pressure readings of 152/94, 148/92 and 154/96 mmHg at three consecutive visits. He brings a home log recorded twice daily for three weeks with an average of 122/76 mmHg using a validated automated device. He is asymptomatic, his examination is normal, and his laboratory studies are unremarkable. Which of the following is the most appropriate next step?",
    "options": [
      {
        "text": "Begin a thiazide diuretic and recheck his office pressure in one month",
        "explanation": "Incorrect. Committing to therapy before resolving the discrepancy risks treating a white coat effect and producing symptomatic hypotension out of the office. The lecture resolves the office versus home conflict with a measurement, not with a drug. This would be the correct answer if both office and out-of-office readings agreed that he was hypertensive."
      },
      {
        "text": "Repeat the office measurement manually at each of his next three scheduled visits",
        "explanation": "Incorrect. A manual office reading is indeed the most accurate office technique, but repeating office readings only samples the setting that is already known to be elevated. It cannot characterize the other twenty-three hours of his day. This would be the correct answer if the concern were the accuracy of the automated office device rather than a home-versus-office discrepancy."
      },
      {
        "text": "Order a renal artery duplex ultrasound to look for a correctable secondary cause",
        "explanation": "Incorrect. There is no trigger for a secondary workup here: he is not unresponsive to medications, is not young, is not an older patient with new onset, and has no acute worsening or abdominal bruit. Secondary testing precedes rather than follows confirmation that sustained hypertension exists. This would be the correct answer if he had resistant hypertension with an abdominal bruit."
      },
      {
        "text": "Ambulatory blood pressure monitoring",
        "explanation": "Correct. Ambulatory monitoring is indicated precisely when there is a discrepancy between home and office blood pressure measurements, which is the situation described. The cuff is worn for 24 to 48 hours and samples pressure roughly every 20 minutes during the day and about hourly at night, which characterizes both the office and the out-of-office portions of his day in a single study. His pattern of high office readings with normal home readings suggests white coat hypertension, and ambulatory monitoring is how that is confirmed before any treatment decision."
      },
      {
        "text": "Reassure him that home devices are unreliable and record only office values going forward",
        "explanation": "Incorrect. Home measurement supplies the out-of-office half of the diagnostic requirement and cannot simply be discarded, particularly when the device is validated and the log is extensive. Dismissing out-of-office data is what causes white coat hypertension to be overtreated. This would be the correct answer if the home device had been demonstrably faulty on side-by-side comparison."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: a discrepancy between home and office readings is the indication for ambulatory blood pressure monitoring - the tool that resolves both white coat and masked hypertension.",
    "pdfPage": 15,
    "pdfQuote": "when there is a discrepancy between home and office BP"
  },
  {
    "id": 12,
    "category": "Cardiology: Types of Hypertension",
    "questionText": "A 61-year-old woman has office blood pressure readings of 124/78, 122/76, 126/80 and 120/74 mmHg at four consecutive visits. Because of a family history of stroke she began recording home pressures twice daily, and her one-month log averages 146/90 mmHg. She is asymptomatic, takes no antihypertensive medications, and her physical examination is normal. Which of the following best describes her condition?",
    "options": [
      {
        "text": "Normal blood pressure with a miscalibrated home device",
        "explanation": "Incorrect. Attributing consistently elevated out-of-office readings to device error is exactly the assumption this category exists to prevent, and a month of twice-daily readings is a substantial dataset. Out-of-office readings are half of the diagnostic requirement, not a nuisance variable. This would be the correct answer if her device had been shown to read high against a validated reference cuff."
      },
      {
        "text": "White coat hypertension",
        "explanation": "Incorrect. White coat hypertension is blood pressure consistently elevated by office readings that does not meet diagnostic criteria on out-of-office readings, which is the mirror image of her pattern. Her office readings are the normal ones. This would be the correct answer if her clinic pressures had run around 150/94 with a home average of 122/76."
      },
      {
        "text": "Hypertensive urgency requiring same-day evaluation",
        "explanation": "Incorrect. Hypertensive urgency requires a systolic of at least 180 or a diastolic of at least 120, and her highest recorded values fall far short of that threshold. The urgency and emergency categories are defined by severity, not by a discrepancy between settings. This would be the correct answer if her readings had been in the range of 190/125 without evidence of acute end-organ damage."
      },
      {
        "text": "Masked hypertension",
        "explanation": "Correct. Masked hypertension is blood pressure that is consistently elevated on out-of-office measurements but does not meet criteria for hypertension based on office readings, which is precisely her pattern. It is the mirror image of white coat hypertension and is the more dangerous of the two, because the elevation is real and would be missed entirely by office-based screening. Because home and office readings disagree, ambulatory monitoring is the indicated confirmatory test."
      },
      {
        "text": "Resistant hypertension, since two measurement settings disagree despite therapy",
        "explanation": "Incorrect. Resistant hypertension requires failure to reach goal on three or more antihypertensive classes including a diuretic at maximally tolerated dose, and this patient takes no antihypertensive medication at all. Disagreement between settings is not part of that definition. This would be the correct answer if she remained at 148/94 while taking three agents including chlorthalidone."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: masked hypertension is normal in the office and elevated outside it - the opposite of white coat, and the pattern that office-only screening will miss entirely.",
    "pdfPage": 14,
    "pdfQuote": "not meet the criteria for hypertension based"
  },
  {
    "id": 13,
    "category": "Cardiology: Resistant Hypertension",
    "questionText": "A 63-year-old man takes lisinopril, amlodipine, and chlorthalidone at his maximally tolerated doses. His blood pressure today is 152/96 mmHg, and it has been between 148/94 and 156/98 mmHg at three prior visits over six months. Pharmacy refill records confirm excellent adherence. His BMI is 28 kg/m2 and his examination, including abdominal auscultation, is unremarkable. Which term best describes his hypertension?",
    "options": [
      {
        "text": "Resistant hypertension",
        "explanation": "Correct. Resistant hypertension is blood pressure remaining at or above 140/90 mmHg despite optimal use of three or more antihypertensive medications of different classes, including a diuretic at maximally tolerated dose. He is on three different classes with a diuretic at maximum tolerated dose and remains above threshold, so the definition is met exactly. The label matters because it triggers a specific next move: return to the history, physical examination and laboratory work to hunt for a secondary cause, non-adherence, or dietary non-compliance, rather than reflexively adding a fourth agent."
      },
      {
        "text": "Controlled resistant hypertension",
        "explanation": "Incorrect. The controlled variant applies when blood pressure control is achieved through four or more medications, and this patient is neither controlled nor on four agents. The distinguishing feature is whether goal has been reached. This would be the correct answer if he were at 126/78 mmHg while taking four antihypertensive agents."
      },
      {
        "text": "Hypertensive urgency without acute end-organ damage",
        "explanation": "Incorrect. Hypertensive urgency requires a systolic of at least 180 or a diastolic of at least 120, and his readings are well below that. Severity categories and resistance categories answer different questions. This would be the correct answer if his pressure were 186/124 mmHg with a normal neurologic and fundoscopic examination."
      },
      {
        "text": "Masked hypertension confirmed by out-of-office readings",
        "explanation": "Incorrect. Masked hypertension requires normal office readings with elevated out-of-office readings, whereas his office readings are the elevated ones. No home log is described. This would be the correct answer if his clinic pressures were normal while home readings averaged 150/95."
      },
      {
        "text": "Primary hypertension that has simply not yet been titrated to an adequate dose",
        "explanation": "Incorrect. The vignette states that all three agents are at maximally tolerated doses, which is a required element of the resistant definition rather than an oversight. Assuming under-titration here would delay the search for a secondary cause. This would be the correct answer if he were on submaximal doses with room to increase."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: resistant hypertension is at or above 140/90 despite 3 or more drug classes including a diuretic at maximally tolerated dose - and it should send you looking for a secondary cause.",
    "pdfPage": 16,
    "pdfQuote": "despite optimal use of 3+ antihypertensive medications of different classes"
  },
  {
    "id": 14,
    "category": "Cardiology: Hypertensive Crisis",
    "questionText": "A 58-year-old woman who ran out of her antihypertensive medications two weeks ago presents to the emergency department with a mild headache. Her blood pressure is 196/124 mmHg in both arms and her heart rate is 88/min. Neurologic examination is normal, fundoscopy shows no hemorrhages or papilledema, lungs are clear, there is no chest or back pain, troponin is normal, and creatinine is at her documented baseline. Which of the following best classifies her presentation?",
    "options": [
      {
        "text": "Hypertensive emergency with hypertensive encephalopathy",
        "explanation": "Incorrect. Encephalopathy would require altered mental status or focal neurologic findings, and her neurologic examination is explicitly normal. A headache alone is not evidence of acute cerebral injury. This would be the correct answer if she were confused, somnolent or had a focal deficit at this blood pressure."
      },
      {
        "text": "Stage 2 hypertension that has not yet reached crisis-level elevation",
        "explanation": "Incorrect. Her pressure of 196/124 mmHg exceeds both crisis thresholds of 180 systolic and 120 diastolic, so this is a crisis by definition. Stage 2 begins at 140/90 and does not have an upper bound, but the crisis categories take precedence at these values. This would be the correct answer if her pressure were around 158/96 mmHg."
      },
      {
        "text": "Hypertensive emergency, because her systolic pressure exceeds 180 mmHg",
        "explanation": "Incorrect. The pressure threshold is shared by urgency and emergency alike, so the number by itself cannot make the diagnosis. What separates the two categories is the presence or absence of acute end-organ damage. This would be the correct answer if the same pressure were accompanied by papilledema, a rising creatinine, or evidence of myocardial infarction."
      },
      {
        "text": "White coat hypertension exaggerated by the emergency department environment",
        "explanation": "Incorrect. White coat hypertension is a chronic pattern established by comparing office and out-of-office readings, not a label applied to a severely elevated acute reading. Her recent medication lapse also provides a mechanistic explanation for a genuine rise. This would be the correct answer if she had documented normal home readings and only modestly elevated clinic values."
      },
      {
        "text": "Hypertensive urgency",
        "explanation": "Correct. Hypertensive urgency is severe hypertension, at or above 180 systolic and at or above 120 diastolic, without acute end-organ damage, which is exactly what she has. Her normal neurologic examination, clean fundoscopy, clear lungs, normal troponin and baseline creatinine systematically exclude the end-organ findings that would define an emergency. Her precipitant is also classic: medication non-compliance is a listed cause of hypertensive crisis, alongside abrupt discontinuation of short-acting agents, MAO inhibitor and tyramine interactions, secondary hypertension, and recreational drug use."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: urgency and emergency share the same numbers, at or above 180/120. Only evidence of acute end-organ damage separates them, so the exam decides the diagnosis, not the cuff.",
    "pdfPage": 17,
    "pdfQuote": "hypertension without acute end organ damage"
  },
  {
    "id": 15,
    "category": "Cardiology: Hypertensive Crisis",
    "questionText": "A 60-year-old man loses his insurance coverage and abruptly stops taking clonidine and a short-acting beta blocker that he had taken for six years. Three days later he presents with agitation, tremor, and a pounding headache. His blood pressure is 210/126 mmHg and his heart rate is 118/min. He denies recreational drug use, his urine drug screen is negative, and he takes no antidepressants. Which mechanism best explains this presentation?",
    "options": [
      {
        "text": "Cumulative sodium loading from a high-salt diet over the preceding week",
        "explanation": "Incorrect. Dietary sodium contributes to chronic pressure elevation and to apparent treatment resistance, but it does not produce an abrupt hypertensive crisis over three days with tachycardia and tremor. The timing is tied to drug cessation, not to intake. This would be the correct answer if he had gradually lost blood pressure control over months while eating a high-sodium diet."
      },
      {
        "text": "Abrupt withdrawal of short-acting antihypertensive agents",
        "explanation": "Correct. Sudden discontinuation of short-acting antihypertensive medications, with beta blockers and clonidine named specifically, is a listed cause of hypertensive crisis. Both drugs suppress sympathetic outflow or its cardiac effects, so removing them abruptly after years of use produces a rebound surge, which is why he is not only hypertensive but agitated, tremulous and tachycardic. The three-day interval after stopping is the temporal fingerprint of this mechanism, and it is the reason these agents are tapered rather than stopped."
      },
      {
        "text": "An interaction between a monoamine oxidase inhibitor and tyramine-rich food",
        "explanation": "Incorrect. This is a genuine listed cause of hypertensive crisis, but the vignette states that he takes no antidepressants, which removes the required drug half of the interaction. The interaction is also typically tied to a specific meal rather than to a three-day course. This would be the correct answer if he were taking an MAO inhibitor and had eaten aged cheese or cured meats."
      },
      {
        "text": "Progressive atherosclerotic narrowing of both renal arteries over several years",
        "explanation": "Incorrect. Renovascular disease raises blood pressure gradually and would be suggested by an abdominal bruit, which is not described. It also cannot explain the abrupt three-day time course or the adrenergic symptoms. This would be the correct answer if his hypertension had become progressively resistant to therapy with an audible abdominal bruit."
      },
      {
        "text": "New-onset primary aldosteronism arising from a unilateral adrenal adenoma",
        "explanation": "Incorrect. Primary aldosteronism produces sustained hypertension with unexplained hypokalemia and metabolic alkalosis rather than an acute adrenergic crisis. No electrolyte abnormality is described here. This would be the correct answer if he had persistent hypertension with a potassium of 2.8 mEq/L and an elevated bicarbonate."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: never stop clonidine or a short-acting beta blocker abruptly. Sudden discontinuation of short-acting antihypertensives is a named cause of hypertensive crisis.",
    "pdfPage": 18,
    "pdfQuote": "Sudden discontinuation of short acting antihypertensive"
  },
  {
    "id": 16,
    "category": "Cardiology: Secondary Hypertension",
    "questionText": "A 60-year-old man with hypertension, hyperlipidemia, type 2 diabetes and heavy tobacco use returns for follow-up of persistently high blood pressure. Despite escalation of his regimen he is now taking four antihypertensive medications and remains poorly controlled. His only symptom is headache and he denies chest pain. His BMI is 25 kg/m2. Blood pressure is 177/120 mmHg in the right arm and 179/123 mmHg in the left arm, and vital signs are otherwise unremarkable. Physical examination is notable for an upper abdominal bruit. Which of the following best explains this examination finding?",
    "options": [
      {
        "text": "Coarctation of the aorta with obstruction distal to the left subclavian artery",
        "explanation": "Incorrect. Coarctation produces a systolic murmur with hypertension proximal to the narrowing and low pressure distal to it, and his arm pressures are essentially symmetric with no murmur described. It is also predominantly a disease of young children, though it can be diagnosed in adults. This would be the correct answer if he had upper extremity hypertension with weak or delayed femoral pulses."
      },
      {
        "text": "An abdominal aortic aneurysm producing turbulent flow in a dilated segment",
        "explanation": "Incorrect. Aortic aneurysm is listed as a complication of hypertension rather than a cause of it, so it would not explain his treatment-resistant pressures. A pulsatile mass rather than resistant hypertension would be the expected clue. This would be the correct answer if the question asked which vascular complication his long-standing hypertension might eventually produce."
      },
      {
        "text": "Renal artery stenosis",
        "explanation": "Correct. Remaining above goal on three or more antihypertensive agents defines resistant hypertension, and secondary hypertension is one of its three named causes, alongside medication and dietary non-compliance. The upper abdominal bruit is the physical examination signature of renal vascular disease, and in a 60-year-old with diabetes, hyperlipidemia and heavy tobacco use the lesion is atherosclerotic renal artery stenosis rather than fibromuscular dysplasia. The narrowed artery lowers renal perfusion, which stimulates renin and drives angiotensin II to raise both cardiac output and peripheral resistance - a mechanism that will not yield to more of the same therapy until the lesion itself is addressed."
      },
      {
        "text": "Obstructive sleep apnea with repeated nocturnal sympathetic surges",
        "explanation": "Incorrect. Sleep apnea is a legitimate secondary cause of resistant hypertension, but it is seen in patients with obesity and his BMI is 25 kg/m2. It also does not generate an abdominal bruit, which is a vascular flow sound. This would be the correct answer if he were obese with a large neck circumference and witnessed apneic episodes."
      },
      {
        "text": "Acute aortic dissection involving the descending thoracic aorta",
        "explanation": "Incorrect. Dissection is an acute, painful event and a form of end-organ damage defining a hypertensive emergency, whereas he explicitly denies chest pain and presents for routine follow-up. His arm pressures are also nearly identical. This would be the correct answer if he had abrupt severe chest or back pain with a marked inter-arm pressure difference."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: resistant hypertension plus an abdominal bruit equals renal artery stenosis until proven otherwise - and resistant hypertension is itself a prompt to re-hunt for a secondary cause.",
    "pdfPage": 24,
    "pdfQuote": "with an upper abdominal bruit"
  },
  {
    "id": 17,
    "category": "Cardiology: Secondary Hypertension",
    "questionText": "A 25-year-old woman with no past medical history presents to the emergency department after an episode of epistaxis. Her blood pressure in the department is 170/100 mmHg and her BMI is 24 kg/m2. On physical examination there are no heart murmurs, no abdominal bruits, and no thyromegaly. Laboratory studies including TSH, serum electrolytes, blood glucose and creatinine are all normal. She has never been told she has high blood pressure. Which of the following additional tests should be ordered next?",
    "options": [
      {
        "text": "Urine drug screen",
        "explanation": "Correct. A young patient with no prior history and markedly elevated pressure meets the young-age trigger for a secondary workup, and the examination and laboratory results have already excluded most of the other candidates. The normal TSH and absent thyromegaly argue against thyroid disease, the normal BMI argues against sleep apnea, and the absent abdominal bruit together with her age argues against renal artery stenosis. That leaves illicit drug use, classically cocaine, which the lecture flags as a common cause of hypertension in exactly this demographic and a favorite on board examinations."
      },
      {
        "text": "Ultrasound of the renal arteries",
        "explanation": "Incorrect. Renal artery stenosis is far more typical of older patients and would usually announce itself with an abdominal bruit, which is explicitly absent here. Fibromuscular dysplasia does occur in young women but likewise tends to produce a bruit. This would be the correct answer if an abdominal bruit had been heard on examination."
      },
      {
        "text": "Polysomnography to evaluate for obstructive sleep apnea",
        "explanation": "Incorrect. Sleep apnea as a secondary cause is seen in patients with obesity, and her BMI of 24 kg/m2 makes it an unlikely explanation. No snoring, witnessed apneas or daytime somnolence are described. This would be the correct answer if she had a substantially higher BMI with an increased neck circumference."
      },
      {
        "text": "A full thyroid panel including free T4 and total T3 measurements",
        "explanation": "Incorrect. Her TSH is already normal and she has no thyromegaly, so extending the thyroid evaluation is both unlikely to be revealing and unnecessary. The TSH is the screening test the lecture pairs with thyroid causes precisely so they can be excluded efficiently. This would be the correct answer if her TSH had been abnormal or her thyroid enlarged or nodular."
      },
      {
        "text": "A fasting lipid panel with a calculated LDL cholesterol value",
        "explanation": "Incorrect. The lipid panel belongs to the initial workup of a patient with newly diagnosed hypertension, and it addresses cardiovascular risk rather than the cause of the pressure elevation. It will not identify why a 25-year-old is at 170/100. This would be the correct answer if the question asked which studies to obtain as part of her baseline hypertension evaluation."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: a young patient with no history, severe hypertension and an unrevealing exam and lab panel points toward illicit drug use - cocaine is the classic answer.",
    "pdfPage": 26,
    "pdfQuote": "episode of epistaxis associated with extremely elevated blood"
  },
  {
    "id": 18,
    "category": "Cardiology: Evaluation of Hypertension",
    "questionText": "A 43-year-old man presents for initial evaluation of high blood pressure, which has measured around 154/86 mmHg in the office including today. He exercises regularly and follows a low-salt diet, has no symptoms and no past medical history, and his BMI is 26 kg/m2. Physical examination shows no vascular bruits, peripheral pulses are 2+ and symmetric, and heart and lung examinations are normal. An ECG shows normal sinus rhythm, and complete blood count and complete metabolic panel are normal. Which additional study should be recommended?",
    "options": [
      {
        "text": "A 24-hour urinary cortisol excretion measurement",
        "explanation": "Incorrect. Cortisol testing evaluates Cushing syndrome, a secondary cause, and nothing in this presentation triggers a secondary workup. He is not unresponsive to medications, is not particularly young, has no new onset in older age, and no acute worsening. This would be the correct answer if he had resistant hypertension with central obesity, striae and glucose intolerance."
      },
      {
        "text": "Renal artery duplex ultrasonography of both kidneys",
        "explanation": "Incorrect. Renovascular imaging is prompted by an abdominal bruit or by resistant hypertension, and his examination shows no vascular bruits with symmetric pulses. Ordering it now would test for a lesion nothing has suggested. This would be the correct answer if an abdominal bruit had been heard or his pressure had resisted three or more agents."
      },
      {
        "text": "Plasma aldosterone concentration with plasma renin activity",
        "explanation": "Incorrect. Aldosterone testing is for suspected primary aldosteronism, whose hallmark is unexplained hypokalemia with metabolic alkalosis, and his complete metabolic panel is normal. Without an electrolyte abnormality there is nothing to pursue. This would be the correct answer if his potassium were low and his bicarbonate elevated without diuretic use."
      },
      {
        "text": "Fasting lipid profile and urinalysis",
        "explanation": "Correct. This is an initial evaluation of newly diagnosed hypertension, and the lecture specifies a fixed panel for every such patient: electrolytes, BUN and creatinine for eGFR, fasting glucose, fasting lipid profile, HbA1c, urinalysis, complete blood count, TSH and an ECG, followed by calculation of the 10-year atherosclerotic cardiovascular disease risk. His complete metabolic panel and ECG are done, so the lipid profile and urinalysis are the outstanding items. Every other option belongs to a secondary-cause workup, which is reserved for patients whose resistance, age or examination findings point that way."
      },
      {
        "text": "Overnight polysomnography performed in a supervised sleep laboratory",
        "explanation": "Incorrect. Sleep study evaluation targets obstructive sleep apnea, which is suspected in patients with obesity and disordered breathing, and his BMI is 26 kg/m2 with no sleep symptoms described. It is a secondary-cause test, not part of the baseline panel. This would be the correct answer if he were obese with loud snoring and witnessed apneas."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: the newly-diagnosed panel is fixed - electrolytes, BUN/creatinine, fasting glucose, fasting lipids, HbA1c, urinalysis, CBC, TSH, ECG, plus a 10-year ASCVD risk calculation.",
    "pdfPage": 30,
    "pdfQuote": "should be performed in all patients with newly diagnosed"
  },
  {
    "id": 19,
    "category": "Cardiology: Target-Organ Damage",
    "questionText": "A 66-year-old man with 15 years of inconsistently treated hypertension presents for follow-up. His blood pressure today is 158/96 mmHg and his heart rate is 72/min. He reports mild exertional dyspnea but no chest pain, orthopnea or edema. On cardiac auscultation there is a low-pitched extra sound heard just before the first heart sound at the apex, best appreciated with the bell in the left lateral decubitus position. Lungs are clear and there is no abdominal bruit. Which structural change does this auscultatory finding most likely reflect?",
    "options": [
      {
        "text": "Dilation of the left atrium caused by chronic volume overload",
        "explanation": "Incorrect. Atrial dilation may accompany chronic pressure overload, but the sound described is generated by atrial contraction against a stiff ventricle rather than by atrial size itself. The lecture links this specific finding to the ventricle. This would be the correct answer if the question asked what predisposes such a patient to atrial fibrillation."
      },
      {
        "text": "Left ventricular hypertrophy",
        "explanation": "Correct. An S4 gallop is listed on the hypertensive physical examination as a finding that suggests left ventricular hypertrophy, and left ventricular hypertrophy is the first cardiac complication of hypertension named in this lecture. Chronic pressure overload forces the ventricle to thicken, the thickened ventricle becomes less compliant, and atrial contraction against that stiff chamber produces the low-pitched presystolic sound. This is target-organ damage detectable with a stethoscope, which is exactly why the cardiac examination is part of every hypertensive evaluation."
      },
      {
        "text": "Stenosis of the aortic valve with a significantly reduced orifice area",
        "explanation": "Incorrect. Valvular aortic stenosis produces a systolic ejection murmur rather than a low-pitched presystolic sound, and no murmur is described. Aortic stenosis is also not among the hypertensive complications listed in this lecture. This would be the correct answer if a crescendo-decrescendo systolic murmur radiating to the carotids had been heard."
      },
      {
        "text": "Regurgitation of blood across an incompetent mitral valve leaflet",
        "explanation": "Incorrect. Mitral regurgitation produces a holosystolic murmur at the apex, which occurs during systole rather than just before the first heart sound. Timing is the discriminator here. This would be the correct answer if a blowing holosystolic murmur radiating to the axilla had been described."
      },
      {
        "text": "Right ventricular strain resulting from elevated pulmonary artery pressures",
        "explanation": "Incorrect. His lungs are clear and nothing suggests pulmonary vascular disease, and the finding is located at the apex, which reflects left-sided events. Systemic hypertension loads the left ventricle. This would be the correct answer if he had chronic lung disease with a left parasternal heave and a loud pulmonic component of the second heart sound."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: an S4 gallop in a hypertensive patient suggests left ventricular hypertrophy - target-organ damage you can hear at the bedside.",
    "pdfPage": 29,
    "pdfQuote": "Heart: size, rhythm, sounds"
  },
  {
    "id": 20,
    "category": "Cardiology: Hypertensive Crisis",
    "questionText": "Two patients arrive in the emergency department within the same hour, each with a blood pressure of 190/125 mmHg. The first has a severe headache but a normal neurologic examination, normal fundoscopy, normal troponin, and a creatinine at her documented baseline. The second is confused, has bilateral papilledema and retinal hemorrhages on fundoscopy, and has a creatinine that has risen from 1.0 to 2.2 mg/dL over 48 hours. Which feature determines that the second patient has a hypertensive emergency rather than urgency?",
    "options": [
      {
        "text": "A systolic pressure above 180 mmHg documented on repeated measurement",
        "explanation": "Incorrect. Both patients share that systolic value, so it cannot discriminate between them. The 180 threshold defines crisis in general, not which type of crisis. This would be the correct answer if the question asked what qualifies a patient as being in hypertensive crisis at all."
      },
      {
        "text": "A diastolic pressure above 120 mmHg documented on repeated measurement",
        "explanation": "Incorrect. The diastolic threshold is likewise shared by urgency and emergency, and both patients meet it. Using the number to sort the categories is the exact trap this question is built around. This would be the correct answer if urgency and emergency had different pressure cutoffs, which they do not."
      },
      {
        "text": "The presence of a severe headache at the time of initial presentation",
        "explanation": "Incorrect. Headache is present in the first patient, who has no end-organ damage, so it clearly does not define emergency. It is a common and nonspecific symptom across all severities of hypertension. This would be the correct answer if headache were accompanied by objective evidence of cerebral injury such as encephalopathy or stroke."
      },
      {
        "text": "A documented history of poor adherence to prescribed antihypertensive drugs",
        "explanation": "Incorrect. Medication non-compliance is a listed cause of hypertensive crisis, but a cause is not a classification. It tells you why the pressure rose, not whether an organ is being injured. This would be the correct answer if the question asked what precipitated the crisis rather than how to classify it."
      },
      {
        "text": "Evidence of acute end-organ damage",
        "explanation": "Correct. Hypertensive urgency and hypertensive emergency share identical pressure criteria of at least 180 systolic and at least 120 diastolic, and the only distinguishing feature is whether acute end-organ damage is present. The second patient has three separate pieces of that evidence: encephalopathy from her confusion, retinal hemorrhages with papilledema on fundoscopy, and acute kidney injury from her doubling creatinine. The other listed manifestations are stroke, myocardial infarction, heart failure and aortic dissection, and the whole point of examining a patient with a severely elevated pressure is to search for them."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: encephalopathy or stroke, retinal hemorrhages or papilledema, MI, heart failure, aortic dissection, or kidney injury - any one converts hypertensive urgency into emergency.",
    "pdfPage": 17,
    "pdfQuote": "hypertension with evidence of acute end-"
  },
  {
    "id": 21,
    "category": "Cardiology: Renal Complications of Hypertension",
    "questionText": "A 62-year-old man has had poorly controlled hypertension for 25 years, with average pressures around 165/100 mmHg. His serum creatinine has risen slowly from 1.1 to 2.4 mg/dL over eight years. Urinalysis shows no cells or casts and only trace protein. Renal ultrasound shows bilaterally small, smooth kidneys with no hydronephrosis. He has never had an episode of hypotension, sepsis or nephrotoxic drug exposure. Which process best explains his renal decline?",
    "options": [
      {
        "text": "Deposition of immune complexes along the glomerular basement membrane",
        "explanation": "Incorrect. Immune complex glomerular disease would be expected to produce an active urinary sediment with cells and casts, and his urinalysis is bland. The eight-year slow decline in the setting of sustained hypertension points elsewhere. This would be the correct answer if he had hematuria with red cell casts and significant proteinuria."
      },
      {
        "text": "Obstruction of the urinary outflow tract with progressive hydronephrosis",
        "explanation": "Incorrect. Ultrasound explicitly shows no hydronephrosis, which is the finding that would be required for an obstructive process. Obstructed kidneys also tend to be enlarged rather than small. This would be the correct answer if imaging had demonstrated bilateral pelvicalyceal dilation."
      },
      {
        "text": "Arteriolar narrowing that reduces glomerular blood flow",
        "explanation": "Correct. Chronic elevation of blood pressure narrows both the afferent and the efferent arterioles, and narrowing on both sides reduces total glomerular blood flow rather than simply shifting filtration pressure. The reduced perfusion produces glomerular and tubular ischemia, which leads to nephrosclerosis and fibrosis, and over the long term to end-stage renal disease. The bland urine sediment, the bilaterally small smooth kidneys, and the slow decline over 25 years of untreated pressure are all consistent with this pathway, and hypertension is the leading cause of end-stage renal disease, especially in African Americans."
      },
      {
        "text": "Acute tubular necrosis that followed a single prolonged hypotensive episode",
        "explanation": "Incorrect. The vignette states he has never had an episode of hypotension, and acute tubular necrosis produces an abrupt rise in creatinine rather than a decline over eight years. Timing alone excludes it. This would be the correct answer if his creatinine had jumped after a documented episode of shock."
      },
      {
        "text": "Direct nephrotoxic tubular injury from a recent aminoglycoside antibiotic course",
        "explanation": "Incorrect. The stem specifically excludes nephrotoxic drug exposure, and drug-induced injury would again be subacute rather than spread across eight years. It also would not produce bilaterally small, smooth kidneys. This would be the correct answer if his creatinine had risen days after receiving gentamicin."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: hypertensive nephrosclerosis runs afferent and efferent arteriolar narrowing to reduced glomerular blood flow to ischemia to fibrosis to ESRD - hypertension is the leading cause of ESRD.",
    "pdfPage": 35,
    "pdfQuote": "Kidneys: Hypertensive nephrosclerosis"
  },
  {
    "id": 22,
    "category": "Cardiology: Ocular Complications of Hypertension",
    "questionText": "A 57-year-old woman with an eight-year history of poorly controlled hypertension presents for a routine visit. Her blood pressure is 168/102 mmHg and she reports no visual symptoms. She takes one antihypertensive agent inconsistently and has no history of diabetes. On fundoscopic examination there is arteriovenous nicking, several cotton wool spots, and scattered flame-shaped hemorrhages. Her neurologic examination is normal and her creatinine is 1.0 mg/dL. What do these fundoscopic findings represent?",
    "options": [
      {
        "text": "Hypertensive target-organ damage in the eye",
        "explanation": "Correct. Flame hemorrhages, arteriovenous nicking, papilledema and cotton wool spots are the fundoscopic findings of hypertensive retinopathy, and the eye is one of the organ systems the lecture lists as damaged by hypertension alongside the heart, brain and kidneys. This is precisely why fundoscopy is emphasized in the hypertensive physical examination: it lets you see target-organ damage directly rather than infer it. Her findings are chronic retinopathy rather than an acute emergency, since she has no papilledema, normal neurologic function and normal renal function."
      },
      {
        "text": "An unrelated primary retinal degenerative process of unclear cause",
        "explanation": "Incorrect. These specific findings are attributed to hypertensive retinopathy in this lecture, and she has eight years of poorly controlled hypertension to explain them. Calling them unrelated ignores the exposure. This would be the correct answer if she were normotensive and the retinal changes had no vascular explanation."
      },
      {
        "text": "A secondary cause of her hypertension that now warrants endocrine workup",
        "explanation": "Incorrect. Retinal findings are a consequence of elevated pressure rather than a cause of it, so they cannot indicate a secondary etiology. Secondary workups are triggered by resistance to therapy, young age, new onset in an older patient, or acute worsening. This would be the correct answer if the question asked what her unexplained hypokalemia or abdominal bruit implied."
      },
      {
        "text": "An expected adverse consequence of initiating antihypertensive drug therapy",
        "explanation": "Incorrect. Lowering blood pressure protects the retina rather than injuring it, and she has in fact been taking her single agent inconsistently. Attributing target-organ damage to treatment inverts the causal relationship. This would be the correct answer if the finding were a documented drug adverse effect rather than a pressure-mediated one."
      },
      {
        "text": "A pattern specific to diabetic microvascular disease rather than elevated pressure",
        "explanation": "Incorrect. She has no history of diabetes, and the constellation described is the one this lecture assigns to hypertensive retinopathy. Arteriovenous nicking in particular reflects arteriolar wall thickening from chronic pressure. This would be the correct answer if she carried a long-standing diabetes diagnosis and the question concerned diabetic eye disease."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: fundoscopy shows hypertensive target-organ damage directly - flame hemorrhages, AV nicking, cotton wool spots and papilledema.",
    "pdfPage": 34,
    "pdfQuote": "Eyes: Hypertensive retinopathy"
  },
  {
    "id": 23,
    "category": "Cardiology: Hypertension Risk Factors",
    "questionText": "A 65-year-old Black man with type 2 diabetes and osteoarthritis presents with headaches. He takes ibuprofen and metformin, has a family history of heart failure and hypertension, rarely exercises, works long stressful hours and eats mostly fast food, has smoked for 35 years, and drinks two beers nightly. His blood pressure is 145/92 mmHg on the left and 143/91 mmHg on the right, heart rate is 97/min, and his BMI is 35.9 kg/m2. Which identified risk factor is one you can directly counsel him to change?",
    "options": [
      {
        "text": "His family history of hypertension and heart failure",
        "explanation": "Incorrect. Family history is explicitly listed among the non-modifiable risk factors, since a patient cannot alter his inheritance. It is still worth documenting because it raises pre-test probability and supports a primary rather than secondary etiology. This would be the correct answer if the question had asked which factors you must simply account for rather than address."
      },
      {
        "text": "His age of 65 years at the time of presentation",
        "explanation": "Incorrect. Increased age is a non-modifiable risk factor in this lecture. Age changes the screening interval and the pre-test probability but is not something counseling can affect. This would be the correct answer if the question concerned which factors raise his baseline risk without being actionable."
      },
      {
        "text": "His race, which confers earlier onset and more severe hypertension",
        "explanation": "Incorrect. Race is listed as non-modifiable, and although the lecture emphasizes that hypertension in Black patients is more common, more severe, earlier in onset and associated with greater target-organ damage, that information changes vigilance rather than counseling. It is a reason to monitor more closely, not something to modify. This would be the correct answer if the question asked which factor should heighten your concern for target-organ damage."
      },
      {
        "text": "His high-sodium fast-food diet",
        "explanation": "Correct. A high-sodium or otherwise unhealthy diet is one of the five modifiable risk factors, alongside obesity, excess alcohol intake, physical inactivity and smoking, and this patient has essentially all of them. His NSAID use, sedentary lifestyle, smoking, alcohol intake and BMI of 35.9 are likewise modifiable, while his family history and race are not. Because these are the same risk factors that drive cardiovascular disease generally, addressing them lowers both his hypertension risk and his cardiovascular risk at once, which is why counseling is treated as a core physician task in this lecture."
      },
      {
        "text": "His low socioeconomic status and the limited health care access that follows",
        "explanation": "Incorrect. Low socioeconomic status appears on the non-modifiable side of the lecture's risk factor list. It certainly influences outcomes and should shape how care is delivered, but it is not framed as a target of individual counseling here. This would be the correct answer if the lecture had classified it among the modifiable factors."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: modifiable - obesity, high-sodium diet, excess alcohol, physical inactivity, smoking. Non-modifiable - age, family history, race, low socioeconomic status.",
    "pdfPage": 19,
    "pdfQuote": "High-sodium diet/unhealthy diet"
  },
  {
    "id": 24,
    "category": "Cardiology: Secondary Hypertension",
    "questionText": "A 48-year-old man with a BMI of 38 kg/m2 has a blood pressure of 158/98 mmHg despite two antihypertensive agents. His wife reports loud snoring with pauses in breathing during the night, and he describes daytime somnolence and morning headaches. On examination his neck circumference is enlarged, there is no abdominal bruit, no thyromegaly, and no murmur. Potassium, bicarbonate, TSH and creatinine are all normal. Which diagnostic study is most likely to identify the underlying cause?",
    "options": [
      {
        "text": "Plasma metanephrines to evaluate for catecholamine excess",
        "explanation": "Incorrect. Pheochromocytoma is on the secondary causes list but characteristically produces episodic hypertension with headache, palpitations and diaphoresis, none of which is described. His symptoms cluster around sleep instead. This would be the correct answer if he reported paroxysms of severe hypertension with adrenergic symptoms."
      },
      {
        "text": "Polysomnography",
        "explanation": "Correct. Obstructive sleep apnea is a named secondary cause of hypertension that is commonly seen in patients with obesity, and this man has the full picture: a BMI of 38, an enlarged neck circumference, loud snoring with witnessed apneas, and daytime somnolence. Neck circumference is measured on the hypertensive physical examination for exactly this reason. The remaining secondary causes have been systematically excluded by his normal potassium and bicarbonate, normal TSH, absent abdominal bruit and absent thyromegaly, leaving the sleep study as the test most likely to be revealing."
      },
      {
        "text": "Renal artery duplex ultrasound to assess for arterial stenosis",
        "explanation": "Incorrect. Renovascular disease is suggested by an abdominal bruit, which is explicitly absent, and would not explain his sleep-related symptoms. His age also sits between the two typical renovascular populations. This would be the correct answer if an abdominal bruit had been heard on abdominal auscultation."
      },
      {
        "text": "A 24-hour urinary free cortisol level to evaluate for Cushing syndrome",
        "explanation": "Incorrect. Cushing syndrome is a listed secondary cause, but the vignette provides no cushingoid features and his obesity is generalized rather than described as central with striae. Snoring and witnessed apneas are not part of that syndrome. This would be the correct answer if he had proximal muscle weakness, purple striae and new glucose intolerance."
      },
      {
        "text": "A serum aldosterone to renin ratio drawn off interfering antihypertensive agents",
        "explanation": "Incorrect. Primary aldosteronism announces itself with unexplained hypokalemia and metabolic alkalosis, and both his potassium and bicarbonate are normal. Without that electrolyte signature the pre-test probability is low. This would be the correct answer if his potassium were 2.8 mEq/L with an elevated serum bicarbonate."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: suspect obstructive sleep apnea as a secondary cause in the obese hypertensive patient - which is why neck circumference is measured on the hypertensive physical exam.",
    "pdfPage": 29,
    "pdfQuote": "Neck: carotid auscultation, neck circumference, thyroid"
  },
  {
    "id": 25,
    "category": "Cardiology: Blood Pressure Measurement",
    "questionText": "A 52-year-old woman has office readings around 150/92 mmHg and a home log averaging 124/78 mmHg. Her physician proposes ambulatory blood pressure monitoring to resolve the discrepancy, and the patient asks what the downsides of the study are before agreeing. She works a physically demanding job and sleeps poorly. Which of the following is a recognized limitation of this test as described in the lecture?",
    "options": [
      {
        "text": "It cannot detect blood pressure elevations that occur during sleeping hours",
        "explanation": "Incorrect. Nocturnal sampling is one of the strengths of the study, which continues to record roughly hourly overnight. That overnight window is unobtainable with office or routine home measurement. This would be the correct answer if the device recorded only during waking hours."
      },
      {
        "text": "It is costly and uncomfortable to wear",
        "explanation": "Correct. The lecture names three limitations of ambulatory monitoring: it is more expensive than office or home measurement, it depends on a physician who knows how to analyze the data the cuff generates, and it can be quite uncomfortable for a patient to keep a cuff on continuously for 24 to 48 hours while it inflates roughly every 20 minutes by day and hourly at night. Those drawbacks are why it is reserved for a specific indication, namely a discrepancy between home and office measurements, rather than used routinely. In this patient the discrepancy is exactly that indication, so the study is appropriate despite the inconvenience."
      },
      {
        "text": "It requires placement of an arterial line by a trained proceduralist",
        "explanation": "Incorrect. Ambulatory monitoring uses a non-invasive external cuff, which is what makes outpatient use feasible at all. No vascular access is involved. This would be the correct answer if the question described invasive intra-arterial pressure monitoring in a critical care setting."
      },
      {
        "text": "It provides only a single averaged reading at the end of the recording period",
        "explanation": "Incorrect. The device samples repeatedly throughout the study, roughly every 20 minutes during the day and about hourly at night, producing a detailed profile rather than a single value. That density of sampling is the entire point of the test. This would be the correct answer if the device stored only a summary value."
      },
      {
        "text": "It is contraindicated in any patient already taking antihypertensive medications",
        "explanation": "Incorrect. No such contraindication is described, and ambulatory monitoring is frequently used in treated patients to assess control across the day. The indication is a home-versus-office discrepancy regardless of treatment status. This would be the correct answer if the lecture had restricted the study to untreated patients."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: ABPM is expensive, uncomfortable over 24-48 hours, and only useful if the physician can interpret the data - which is why it is reserved for home-versus-office discrepancies.",
    "pdfPage": 8,
    "pdfQuote": "How to Measure Blood Pressure"
  },
  {
    "id": 26,
    "category": "Cardiology: Hypertensive Crisis",
    "questionText": "A 54-year-old man taking a monoamine oxidase inhibitor for treatment-resistant depression attends a wedding reception and eats aged cheese, cured meats and red wine. Roughly two hours later he develops a severe pounding headache, flushing and palpitations. His blood pressure is 224/128 mmHg and his heart rate is 104/min. Neurologic examination, fundoscopy and troponin are normal, creatinine is at baseline, and his urine drug screen is negative. Which mechanism best explains this episode?",
    "options": [
      {
        "text": "Abrupt discontinuation of a short-acting beta blocker taken for several years",
        "explanation": "Incorrect. Rebound after stopping a short-acting antihypertensive is a genuine cause of crisis, but the vignette describes no antihypertensive therapy and no cessation event. The timing is anchored to a meal rather than to a missed dose. This would be the correct answer if he had abruptly stopped clonidine or a short-acting beta blocker a few days earlier."
      },
      {
        "text": "An occult pheochromocytoma releasing catecholamines in episodic surges",
        "explanation": "Incorrect. A catecholamine-secreting tumor can produce an identical clinical picture, which makes it the most tempting distractor here, but it does not explain the tight two-hour link to a tyramine-rich meal in a patient already on a monoamine oxidase inhibitor. The drug and the food together supply a complete explanation. This would be the correct answer if he had recurrent unprovoked paroxysms with no relevant medication or dietary trigger."
      },
      {
        "text": "Recreational cocaine use producing acute sympathetic stimulation",
        "explanation": "Incorrect. Cocaine is a classic cause of hypertensive crisis, but his urine drug screen is negative, which removes it from consideration. The screen is precisely the test used to settle this question. This would be the correct answer if his drug screen had returned positive in the absence of another explanation."
      },
      {
        "text": "Non-adherence to a long-standing multi-drug antihypertensive regimen",
        "explanation": "Incorrect. Medication non-compliance is a listed cause of hypertensive crisis, but the patient is not described as taking antihypertensive medications at all. There is no regimen for him to be non-adherent to. This would be the correct answer if he had a known hypertension diagnosis and had stopped filling his prescriptions."
      },
      {
        "text": "A dietary tyramine interaction with his antidepressant",
        "explanation": "Correct. Monoamine oxidase inhibitors combined with tyramine-rich foods are one of the named causes of hypertensive crisis. Aged cheese, cured meats and certain wines are tyramine-rich, and with monoamine oxidase inhibited the tyramine is not degraded, triggering a surge of catecholamine release that drives the pressure sharply upward. The two-hour interval after the meal is the temporal signature, and the normal neurologic examination, clean fundoscopy, normal troponin and baseline creatinine make this hypertensive urgency rather than emergency."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: an MAO inhibitor plus tyramine-rich food is a named cause of hypertensive crisis - look for the meal, then decide urgency versus emergency by end-organ findings.",
    "pdfPage": 18,
    "pdfQuote": "MAO inhibitors + tyramine rich foods"
  },
  {
    "id": 27,
    "category": "Cardiology: Cardiac Complications of Hypertension",
    "questionText": "A 72-year-old man with 30 years of inadequately controlled hypertension has an S4 gallop on examination and left ventricular hypertrophy documented on echocardiography. He now reports several weeks of palpitations and reduced exercise tolerance. His pulse is irregularly irregular at 96/min, his blood pressure is 154/88 mmHg, and there is no chest pain, fever or thyroid enlargement. His TSH is normal. Which statement best describes the relationship between his hypertension and this new rhythm?",
    "options": [
      {
        "text": "The rhythm is unrelated to his blood pressure and simply reflects the expected changes of advancing age",
        "explanation": "Incorrect. The lecture explicitly names atrial fibrillation among the cardiac complications of hypertension, so dismissing the association is wrong. Age is a risk factor for hypertension itself, not an alternative explanation that displaces it. This would be the correct answer if atrial fibrillation had no recognized relationship to elevated blood pressure."
      },
      {
        "text": "His antihypertensive therapy, rather than the hypertension itself, produced the arrhythmia",
        "explanation": "Incorrect. Nothing in the lecture attributes atrial fibrillation to antihypertensive treatment, and his hypertension has been inadequately controlled rather than aggressively treated. Blaming therapy inverts the relationship. This would be the correct answer if the question concerned a documented drug adverse effect."
      },
      {
        "text": "Atrial fibrillation is a recognized cardiac complication of hypertension",
        "explanation": "Correct. Atrial fibrillation appears on the lecture's list of cardiac complications of hypertension, alongside left ventricular hypertrophy, heart failure, cardiomyopathy and ischemic heart disease including coronary artery disease and myocardial infarction. His course illustrates the sequence: chronic pressure overload produced the hypertrophy heard as an S4 and confirmed on echocardiography, and that hypertrophic, non-compliant ventricle is the substrate on which the arrhythmia develops. His normal TSH excludes the other common contributor and keeps the explanation firmly with his blood pressure."
      },
      {
        "text": "Only hypertensive emergencies, and not chronic hypertension, cause atrial complications",
        "explanation": "Incorrect. The complications listed in this lecture arise from chronic sustained elevation over years, not from acute crises alone. Hypertensive emergency is defined by acute end-organ damage, which is a separate concept. This would be the correct answer if the question concerned findings that appear only at pressures above 180/120."
      },
      {
        "text": "The new rhythm indicates a secondary cause of hypertension requiring further workup",
        "explanation": "Incorrect. Atrial fibrillation is a consequence of long-standing hypertension rather than a clue to a correctable cause, and his normal TSH addresses the one relevant secondary consideration. The triggers for a secondary workup are resistance, young age, new onset in an older patient, or acute worsening. This would be the correct answer if he had unexplained hypokalemia or an abdominal bruit."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: cardiac complications of hypertension are LVH, heart failure, cardiomyopathy, ischemic heart disease including CAD and MI, and atrial fibrillation.",
    "pdfPage": 33,
    "pdfQuote": "Left Ventricular Hypertrophy"
  },
  {
    "id": 28,
    "category": "Cardiology: Resistant Hypertension",
    "questionText": "A 59-year-old woman is seen for routine follow-up. She takes four antihypertensive medications of different classes, one of which is chlorthalidone at her maximally tolerated dose. Her blood pressure today is 128/78 mmHg and has been between 124/76 and 130/80 mmHg at each of her last four visits over a year. Adherence is confirmed by refill records, her home readings agree with the office values, and her examination is unremarkable. Which term best describes her condition?",
    "options": [
      {
        "text": "Well-controlled primary hypertension managed on a standard regimen",
        "explanation": "Incorrect. Her pressure is indeed controlled, but the number of agents required to achieve it is itself diagnostically meaningful and gives the condition a specific name. Calling it a standard regimen loses that information. This would be the correct answer if she were at goal on one or two agents."
      },
      {
        "text": "Masked hypertension that requires out-of-office confirmation to detect",
        "explanation": "Incorrect. Masked hypertension requires out-of-office readings that are elevated while office readings are normal, and the vignette states that her home readings agree with the office values. There is no discrepancy to investigate. This would be the correct answer if her home log averaged 148/92 while clinic readings stayed at 126/78."
      },
      {
        "text": "White coat hypertension that has resolved with home measurement",
        "explanation": "Incorrect. White coat hypertension is defined by elevated office readings with normal out-of-office readings, and her office readings are normal. The category also is not something that resolves through measurement. This would be the correct answer if her clinic pressures were high while home readings were consistently normal."
      },
      {
        "text": "Controlled resistant hypertension",
        "explanation": "Correct. The definition of resistant hypertension has two arms: blood pressure remaining at or above 140/90 despite three or more antihypertensive classes including a diuretic at maximally tolerated dose, or blood pressure control that is achieved only through four or more medications. She falls into the second arm, which the lecture calls controlled resistant hypertension. Recognizing the label matters because the same causes apply as in the uncontrolled form - an unrecognized secondary cause, non-compliance, or dietary sodium - and her need for four agents remains a reason to keep a secondary etiology in mind even though she is at goal."
      },
      {
        "text": "Secondary hypertension that has now been definitively excluded by good control",
        "explanation": "Incorrect. Achieving control with medication does not exclude an underlying secondary cause, since many secondary causes respond partially to standard therapy. Exclusion requires targeted evaluation, not a good pressure reading. This would be the correct answer if a complete secondary workup had been performed and returned normal."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: needing 4 or more agents to reach goal is controlled resistant hypertension - still resistant, and still a reason to consider a secondary cause.",
    "pdfPage": 16,
    "pdfQuote": "when BP control is achieved through 4+ medications"
  },
  {
    "id": 29,
    "category": "Cardiology: Resistant Hypertension",
    "questionText": "A 50-year-old man remains at 156/94 mmHg on an ACE inhibitor, a calcium channel blocker and hydrochlorothiazide. Pharmacy records show he has filled only about 40% of his prescribed doses over the past year, and he eats restaurant takeout for most meals. A 24-hour urine collection shows a high sodium excretion. Examination reveals no abdominal bruit, no thyromegaly, and a BMI of 29 kg/m2. Potassium, bicarbonate, TSH and creatinine are normal. What is the most likely explanation for his uncontrolled pressure?",
    "options": [
      {
        "text": "Medication non-adherence with continued high dietary sodium",
        "explanation": "Correct. The lecture gives three causes of resistant hypertension: an unrecognized secondary cause, non-compliance with medications, and dietary non-compliance, particularly continued high sodium intake despite counseling. This patient demonstrates two of the three directly, with refill records showing 40% adherence and a 24-hour urine confirming a high sodium load. His normal potassium and bicarbonate, normal TSH, absent bruit and near-normal BMI argue against the common secondary causes, so the answer sits with adherence and diet. Practically, this matters because adding a fourth drug to a regimen the patient is not taking will not lower his pressure."
      },
      {
        "text": "Bilateral atherosclerotic narrowing of both renal arteries",
        "explanation": "Incorrect. Renovascular disease would be suggested by an abdominal bruit, which is explicitly absent, and his creatinine is normal. His documented 40% adherence provides a far simpler explanation. This would be the correct answer if he were fully adherent with an audible abdominal bruit and a rising creatinine."
      },
      {
        "text": "Primary aldosteronism arising from a unilateral aldosterone-producing adenoma",
        "explanation": "Incorrect. Primary aldosteronism is characterized by unexplained hypokalemia with metabolic alkalosis, and both his potassium and bicarbonate are normal. Without that electrolyte signature the diagnosis is unlikely. This would be the correct answer if he had a persistently low potassium while taking no diuretic."
      },
      {
        "text": "Obstructive sleep apnea causing repeated nocturnal sympathetic activation and pressure surges",
        "explanation": "Incorrect. Sleep apnea is suspected in patients with obesity and disordered breathing during sleep, and his BMI is 29 kg/m2 with no snoring, witnessed apneas or somnolence reported. It is a plausible secondary cause in the right patient but not this one. This would be the correct answer if he had a BMI near 40 with witnessed apneic episodes and daytime somnolence."
      },
      {
        "text": "A pheochromocytoma producing paroxysmal catecholamine release",
        "explanation": "Incorrect. Pheochromocytoma causes episodic hypertension with adrenergic symptoms such as headache, palpitations and diaphoresis, none of which is described. His pressure elevation is sustained and explained by adherence. This would be the correct answer if he reported discrete paroxysms of severe hypertension with sweating and palpitations."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: before escalating therapy in apparent resistant hypertension, verify adherence and dietary sodium - non-compliance and diet are two of the three named causes.",
    "pdfPage": 16,
    "pdfQuote": "Causes: non-compliance with medications; secondary HTN; diet"
  },
  {
    "id": 30,
    "category": "Cardiology: Complications of Hypertension",
    "questionText": "A 64-year-old man who has known about his high blood pressure for 20 years but never treated it presents for a new-patient visit. His blood pressure is 172/104 mmHg. Examination reveals an S4 gallop, and fundoscopy shows arteriovenous nicking with cotton wool spots. His ECG meets voltage criteria for left ventricular hypertrophy, his creatinine is 2.1 mg/dL with a bland urinalysis, and he reports a transient episode of right hand weakness lasting 20 minutes two months ago. He is alert with a normal neurologic examination today. Which statement best accounts for this constellation of findings?",
    "options": [
      {
        "text": "Each finding represents a separate disease process unrelated to his blood pressure",
        "explanation": "Incorrect. The lecture's entire complications section describes hypertension as a systemic disease that damages the heart, vessels, brain, eyes and kidneys simultaneously. Treating each finding as independent misses the unifying exposure of 20 untreated years. This would be the correct answer if he were normotensive and each finding required its own explanation."
      },
      {
        "text": "These findings together indicate a secondary cause of hypertension not yet identified",
        "explanation": "Incorrect. All of the listed findings are consequences of elevated pressure rather than clues to its origin. The triggers for a secondary workup are resistance to therapy, young age, new onset in an older patient, or acute worsening, and none applies to two decades of untreated known hypertension. This would be the correct answer if he had unexplained hypokalemia, an abdominal bruit, or hypertension resistant to three agents."
      },
      {
        "text": "The fundoscopic findings by themselves establish an acute hypertensive emergency today",
        "explanation": "Incorrect. Hypertensive emergency requires a pressure of at least 180/120 with acute end-organ damage, and his systolic is 172 with a normal neurologic examination and no papilledema. Arteriovenous nicking and cotton wool spots reflect chronic retinopathy rather than acute injury. This would be the correct answer if he had a pressure of 200/125 with papilledema, retinal hemorrhages and confusion."
      },
      {
        "text": "His renal impairment is the cause of the hypertension rather than a consequence of it",
        "explanation": "Incorrect. The sequence here runs the other way: 20 years of untreated pressure narrowed his afferent and efferent arterioles, reduced glomerular blood flow, and produced ischemia and fibrosis, which is hypertensive nephrosclerosis. His bland urinalysis fits pressure-mediated injury rather than a primary renal disease driving the pressure. This would be the correct answer if renal disease had clearly preceded the hypertension."
      },
      {
        "text": "Sustained elevated pressure produced systemic target-organ damage",
        "explanation": "Correct. Every finding maps onto one organ from the complications list: the S4 gallop and ECG voltage criteria are left ventricular hypertrophy in the heart, the arteriovenous nicking and cotton wool spots are hypertensive retinopathy in the eye, the elevated creatinine with a bland sediment is hypertensive nephrosclerosis in the kidney, and the transient hand weakness is a transient ischemic attack in the brain. This is why the hypertensive physical examination is deliberately multi-system and why the lecture calls hypertension the most prevalent modifiable risk factor for premature cardiovascular disease. The organ damage, not any symptom, is the reason an asymptomatic number is worth treating."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: hypertension damages heart, vessels, brain, eyes and kidneys at once - which is why the exam is multi-system and why it is the most prevalent modifiable risk factor for premature cardiovascular disease.",
    "pdfPage": 33,
    "pdfQuote": "modifiable risk factor for premature"
  }
];

window.Test_CV38 = Test_CV38;
