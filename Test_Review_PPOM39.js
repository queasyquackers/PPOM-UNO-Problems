// CPR Block 2 - Review Lecture: Adrenergic Antagonists - Uses and Safety (PPOM39)
// Faculty: Goldstein
// 20 first-order recall questions weighted to each drug class's high-yield use, epinephrine reversal
// and the receptor physiology behind it, and major adverse effects and cautions. Ordered by drug.
// Slide links resolve through PDF_MAPPING["PPOM39"].
const Test_Review_PPOM39 = [
  {
    "id": 1,
    "category": "Alpha Blockers: Nonselective Agents",
    "questionText": "Which alpha blocker is used before surgery for hypertension and sweating from pheochromocytoma?",
    "options": [
      {
        "text": "Phentolamine",
        "explanation": "Incorrect. Phentolamine gives rapid, short-term control during surgery. This would be the correct answer if asked about intraoperative hypertension."
      },
      {
        "text": "Prazosin",
        "explanation": "Incorrect. Prazosin is an add-on antihypertensive. This would be the correct answer if asked about chronic hypertension."
      },
      {
        "text": "Phenoxybenzamine",
        "explanation": "Correct. Phenoxybenzamine, an irreversible nonselective alpha blocker, is mainly used for presurgical management of the hypertension and sweating caused by pheochromocytoma."
      },
      {
        "text": "Tamsulosin",
        "explanation": "Incorrect. Tamsulosin treats BPH symptoms. This would be the correct answer if asked about BPH."
      },
      {
        "text": "Yohimbine",
        "explanation": "Incorrect. Yohimbine blocks alpha-2 receptors and is not used for pheochromocytoma. This would be the correct answer if asked about alpha-2 blockade."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Phenoxybenzamine is the irreversible alpha blocker for presurgical management of pheochromocytoma; phentolamine covers the intraoperative period.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 21,
    "pdfQuote": "Presurgical management of hypertension and sweating"
  },
  {
    "id": 2,
    "category": "Alpha Blockers: Nonselective Agents",
    "questionText": "How does irreversible alpha blockade change the norepinephrine dose-response curve?",
    "options": [
      {
        "text": "It shifts the curve right, same maximum",
        "explanation": "Incorrect. That is competitive blockade, as with phentolamine. This would be the correct answer if asked about a competitive antagonist."
      },
      {
        "text": "It shifts the curve left",
        "explanation": "Incorrect. Blockade reduces the response rather than increasing sensitivity. This would be the correct answer if asked about an agonist."
      },
      {
        "text": "It raises the maximum response",
        "explanation": "Incorrect. Blockade cannot raise the maximum. This would be the correct answer if asked about a more potent agonist."
      },
      {
        "text": "It leaves the curve unchanged",
        "explanation": "Incorrect. Receptor blockade changes the response. This would be the correct answer if asked about an inactive drug."
      },
      {
        "text": "It lowers the maximum response",
        "explanation": "Correct. Phenoxybenzamine binds irreversibly, so extra norepinephrine cannot overcome the block and the maximum response falls; its effect lasts 3 to 4 days."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Irreversible blockers such as phenoxybenzamine lower the maximum response, whereas competitive blockers such as phentolamine shift the curve to the right.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 19,
    "pdfQuote": "reduced the maximum response attainable"
  },
  {
    "id": 3,
    "category": "Alpha Blockers: Nonselective Agents",
    "questionText": "Phentolamine infiltration is used to reverse which problems?",
    "options": [
      {
        "text": "Pressor extravasation and dental anesthesia reversal",
        "explanation": "Correct. Phentolamine infiltration reverses vasopressor extravasation and the soft tissue numbness from epinephrine-containing dental anesthesia; IV it also controls intraoperative hypertension in pheochromocytoma."
      },
      {
        "text": "Chronic hypertension and BPH",
        "explanation": "Incorrect. Selective alpha-1 blockers are used for these. This would be the correct answer if asked about prazosin or doxazosin."
      },
      {
        "text": "Migraine and angina",
        "explanation": "Incorrect. Beta blockers treat these. This would be the correct answer if asked about propranolol."
      },
      {
        "text": "Orthostatic hypotension and syncope",
        "explanation": "Incorrect. These are adverse effects of alpha blockers. This would be the correct answer if asked about the first-dose effect."
      },
      {
        "text": "Asthma and COPD",
        "explanation": "Incorrect. Beta-2 agonists treat these. This would be the correct answer if asked about albuterol."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Phentolamine is short acting and is used for intraoperative pheochromocytoma hypertension, pressor extravasation and reversal of dental local anesthesia.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 21,
    "pdfQuote": "Extravasation of a pressor agent (infiltration)"
  },
  {
    "id": 4,
    "category": "Alpha Blockers: Epinephrine Reversal",
    "questionText": "Why does epinephrine lower blood pressure after pretreatment with an alpha blocker?",
    "options": [
      {
        "text": "Epinephrine blocks beta-1 receptors",
        "explanation": "Incorrect. Epinephrine stimulates beta-1 receptors. This would be the correct answer if asked about a beta blocker."
      },
      {
        "text": "Vagal tone rises sharply",
        "explanation": "Incorrect. Vagal tone is not the cause of the fall. This would be the correct answer if asked about a baroreceptor reflex."
      },
      {
        "text": "Alpha-2 stimulation lowers central outflow",
        "explanation": "Incorrect. Epinephrine does not act as a central alpha-2 agonist here. This would be the correct answer if asked about clonidine."
      },
      {
        "text": "Beta-2 vasodilation becomes unopposed",
        "explanation": "Correct. The alpha blocker prevents epinephrine's vasoconstriction, so its beta-2 vasodilation is unopposed and the pressor response becomes a depressor response."
      },
      {
        "text": "Epinephrine stores are depleted",
        "explanation": "Incorrect. Epinephrine is given exogenously, so depletion is not involved. This would be the correct answer if asked about indirect-acting drugs."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Epinephrine reversal converts a pressor response to a depressor response; it is a predictable effect of alpha blockade.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 15,
    "pdfQuote": "converts EPI's pressor response into a depressor response"
  },
  {
    "id": 5,
    "category": "Alpha Blockers: Epinephrine Reversal",
    "questionText": "After phentolamine, how does blood pressure respond to phenylephrine?",
    "options": [
      {
        "text": "Reversed to a fall in pressure",
        "explanation": "Incorrect. Phenylephrine lacks beta-2 action, so no vasodilation is unmasked. This would be the correct answer if asked about epinephrine."
      },
      {
        "text": "Suppressed but not reversed",
        "explanation": "Correct. Phenylephrine is a selective alpha-1 agonist with no beta-2 action, so alpha blockade suppresses its pressor effect without producing reversal."
      },
      {
        "text": "Enhanced above the usual rise",
        "explanation": "Incorrect. Alpha blockade reduces the pressor response. This would be the correct answer if asked about an agonist alone."
      },
      {
        "text": "Unchanged from the usual rise",
        "explanation": "Incorrect. Blocking the alpha-1 receptor it targets suppresses its effect. This would be the correct answer if asked about no blocker."
      },
      {
        "text": "Converted to marked tachycardia",
        "explanation": "Incorrect. Heart rate is not the pressor response. This would be the correct answer if asked about reflex effects."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Alpha blockade suppresses phenylephrine's pressor effect but reverses epinephrine's, because phenylephrine lacks beta-2 action.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 16,
    "pdfQuote": "suppressed but not reversed"
  },
  {
    "id": 6,
    "category": "Alpha Blockers: Adverse Effects",
    "questionText": "Why do nonselective alpha blockers cause marked tachycardia?",
    "options": [
      {
        "text": "Direct beta-1 stimulation by the drug",
        "explanation": "Incorrect. These drugs block alpha receptors, not stimulate beta-1. This would be the correct answer if asked about a beta agonist."
      },
      {
        "text": "Increased vagal tone to the heart",
        "explanation": "Incorrect. Vagal tone falls with the reflex. This would be the correct answer if asked about bradycardia."
      },
      {
        "text": "Blockade of M2 receptors in the heart",
        "explanation": "Incorrect. Alpha blockers do not act at muscarinic receptors. This would be the correct answer if asked about atropine."
      },
      {
        "text": "Reflex plus presynaptic alpha-2 blockade",
        "explanation": "Correct. Vasodilation lowers pressure and triggers reflex tachycardia, and blocking presynaptic alpha-2 receptors increases norepinephrine release, which stimulates cardiac beta-1 receptors."
      },
      {
        "text": "Venoconstriction that raises venous return",
        "explanation": "Incorrect. Alpha blockade prevents venoconstriction. This would be the correct answer if asked about an alpha agonist."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Nonselective alpha blockers cause marked tachycardia through reflex activation and loss of presynaptic alpha-2 inhibition of norepinephrine release.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 22,
    "pdfQuote": "Tachycardia (nonselective agents)"
  },
  {
    "id": 7,
    "category": "Alpha Blockers: Adverse Effects",
    "questionText": "Which adverse effects result from alpha blockade outside the blood vessels?",
    "options": [
      {
        "text": "Miosis, nasal stuffiness and impaired ejaculation",
        "explanation": "Correct. Alpha-1 blockade relaxes the iris dilator and nasal vessels and impairs ejaculation; sedation, abdominal pain and diarrhea can also occur."
      },
      {
        "text": "Mydriasis, dry mouth and urinary retention",
        "explanation": "Incorrect. Alpha blockade causes miosis, not mydriasis. This would be the correct answer if asked about the opposite effects."
      },
      {
        "text": "Bronchospasm, bradycardia and hypoglycemia",
        "explanation": "Incorrect. These are beta blocker effects. This would be the correct answer if asked about propranolol."
      },
      {
        "text": "Hypertension, tremor and anxiety",
        "explanation": "Incorrect. These are yohimbine effects. This would be the correct answer if asked about alpha-2 blockade."
      },
      {
        "text": "Hyperkalemia with gynecomastia",
        "explanation": "Incorrect. These are not characteristic alpha blocker effects. This would be the correct answer if asked about an unrelated drug."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Alpha blockers cause miosis, nasal stuffiness and impaired or retrograde ejaculation in addition to orthostatic hypotension.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 22,
    "pdfQuote": "Miosis Nasal stuffiness Impaired/retrograde ejaculation"
  },
  {
    "id": 8,
    "category": "Alpha Blockers: Selective Alpha-1 Agents",
    "questionText": "Why is the first dose of a selective alpha-1 blocker taken at bedtime?",
    "options": [
      {
        "text": "Marked reflex bradycardia",
        "explanation": "Incorrect. Alpha blockade causes tachycardia rather than bradycardia. This would be the correct answer if asked about phenylephrine."
      },
      {
        "text": "Nocturnal bronchospasm",
        "explanation": "Incorrect. Alpha-1 blockers do not constrict bronchi. This would be the correct answer if asked about beta-2 blockade."
      },
      {
        "text": "Severe orthostatic hypotension",
        "explanation": "Correct. The first doses can cause severe orthostatic hypotension because reflex vasoconstriction is blocked when standing, so patients take them at bedtime."
      },
      {
        "text": "Raised nighttime blood pressure",
        "explanation": "Incorrect. Alpha-1 blockers lower pressure. This would be the correct answer if asked about a pressor."
      },
      {
        "text": "Impaired night vision",
        "explanation": "Incorrect. The concern is posture-related hypotension. This would be the correct answer if asked about miosis."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Selective alpha-1 blockers can cause severe first-dose orthostatic hypotension and syncope, so the first dose is taken at bedtime.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 26,
    "pdfQuote": "First-dose effect: orthostatic hypotension, can be severe"
  },
  {
    "id": 9,
    "category": "Alpha Blockers: Selective Alpha-1 Agents",
    "questionText": "Why are prazosin, terazosin and doxazosin add-on rather than first-line antihypertensives?",
    "options": [
      {
        "text": "They raise cardiac output and heart rate",
        "explanation": "Incorrect. Quinazolines have little tendency to raise cardiac output or rate. This would be the correct answer if asked about a vasopressor."
      },
      {
        "text": "They fail to lower peripheral resistance",
        "explanation": "Incorrect. They relax vascular smooth muscle and lower resistance. This would be the correct answer if asked about an inactive drug."
      },
      {
        "text": "They cause rebound hypertension",
        "explanation": "Incorrect. Rebound follows abrupt clonidine or beta blocker withdrawal. This would be the correct answer if asked about clonidine."
      },
      {
        "text": "They act mainly in the brainstem",
        "explanation": "Incorrect. They act on vascular alpha-1 receptors. This would be the correct answer if asked about clonidine."
      },
      {
        "text": "Greater morbidity and mortality in a major trial",
        "explanation": "Correct. Quinazoline alpha-1 blockers lower peripheral resistance but are add-on agents, because a major trial found greater morbidity and mortality with doxazosin."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Prazosin, terazosin and doxazosin are add-on, not first-line, antihypertensives; alpha-1 blockers also relieve BPH symptoms.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 25,
    "pdfQuote": "add-on therapy, not first-line"
  },
  {
    "id": 10,
    "category": "Alpha Blockers: Selective Alpha-1 Agents",
    "questionText": "Which alpha-1A blockers treat BPH symptoms but are not used for hypertension?",
    "options": [
      {
        "text": "Prazosin and terazosin",
        "explanation": "Incorrect. These quinazolines are add-on antihypertensives as well as BPH agents. This would be the correct answer if asked about hypertension."
      },
      {
        "text": "Tamsulosin and silodosin",
        "explanation": "Correct. Tamsulosin and silodosin block alpha-1A receptors in the prostate and bladder neck to improve urine flow, with less effect on standing blood pressure, and are not used for hypertension."
      },
      {
        "text": "Phenoxybenzamine and phentolamine",
        "explanation": "Incorrect. These are nonselective alpha blockers. This would be the correct answer if asked about pheochromocytoma."
      },
      {
        "text": "Yohimbine and clonidine",
        "explanation": "Incorrect. These act at alpha-2 receptors. This would be the correct answer if asked about alpha-2 drugs."
      },
      {
        "text": "Propranolol and metoprolol",
        "explanation": "Incorrect. These are beta blockers. This would be the correct answer if asked about beta blockade."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Tamsulosin and silodosin are alpha-1A blockers for BPH symptoms; prazosin, terazosin and doxazosin also treat hypertension.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 24,
    "pdfQuote": "These drugs are NOT used in the treatment of hypertension"
  },
  {
    "id": 11,
    "category": "Alpha Blockers: Selective Alpha-1 Agents",
    "questionText": "Which eye complication during cataract surgery is linked to alpha-1 blockers such as tamsulosin?",
    "options": [
      {
        "text": "Acute angle-closure glaucoma",
        "explanation": "Incorrect. That is treated with pilocarpine drops until surgery. This would be the correct answer if asked about a miotic."
      },
      {
        "text": "Corneal edema with blurred vision",
        "explanation": "Incorrect. Corneal edema follows miotic eye drops such as carbachol. This would be the correct answer if asked about ophthalmic cholinomimetics."
      },
      {
        "text": "Intraoperative floppy iris syndrome",
        "explanation": "Correct. Alpha-1 inhibition relaxes the iris dilator muscle, causing intraoperative floppy iris syndrome; tamsulosin also carries a possible cross-reactivity risk in sulfonamide allergy."
      },
      {
        "text": "Accommodative esotropia (strabismus)",
        "explanation": "Incorrect. Echothiophate eye drops treat this. This would be the correct answer if asked about echothiophate."
      },
      {
        "text": "Prolonged mydriasis after surgery",
        "explanation": "Incorrect. Alpha-1 blockade relaxes the iris dilator, constricting the pupil. This would be the correct answer if asked about the opposite effect."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Alpha-1 blockers, especially tamsulosin, can cause intraoperative floppy iris syndrome during cataract surgery.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 26,
    "pdfQuote": "Intraoperative floppy iris syndrome (IFIS) during cataract surgery"
  },
  {
    "id": 12,
    "category": "Alpha Blockers: Yohimbine",
    "questionText": "An herbal yohimbe product causes tachycardia, hypertension, tremor, anxiety and diaphoresis. Which receptor does it block?",
    "options": [
      {
        "text": "Alpha-2 receptors",
        "explanation": "Correct. Yohimbine is a competitive alpha-2 antagonist with effects opposite to clonidine; blocking presynaptic alpha-2 receptors raises norepinephrine release and sympathetic activity."
      },
      {
        "text": "Alpha-1 receptors",
        "explanation": "Incorrect. Alpha-1 blockade lowers blood pressure. This would be the correct answer if asked about prazosin."
      },
      {
        "text": "Beta-1 receptors",
        "explanation": "Incorrect. Beta-1 blockade slows the heart. This would be the correct answer if asked about metoprolol."
      },
      {
        "text": "Beta-2 receptors",
        "explanation": "Incorrect. Beta-2 blockade causes bronchospasm. This would be the correct answer if asked about propranolol."
      },
      {
        "text": "Beta-3 receptors",
        "explanation": "Incorrect. Beta-3 receptors relax the detrusor. This would be the correct answer if asked about mirabegron."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Yohimbine blocks alpha-2 receptors, so its effects are opposite those of clonidine: tachycardia, hypertension, tremor and anxiety.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 27,
    "pdfQuote": "Yohimbine's effects are the opposite of clonidine's effects"
  },
  {
    "id": 13,
    "category": "Beta Blockers: Cardiac Effects",
    "questionText": "How do beta blockers lower blood pressure through the heart?",
    "options": [
      {
        "text": "Dilating arterioles through beta-2 stimulation",
        "explanation": "Incorrect. Beta blockers antagonize beta receptors rather than stimulate them. This would be the correct answer if asked about a beta-2 agonist."
      },
      {
        "text": "Increasing renin release from the kidney",
        "explanation": "Incorrect. Beta-1 blockade suppresses renin release. This would be the correct answer if asked about the opposite effect."
      },
      {
        "text": "Raising stroke volume through preload",
        "explanation": "Incorrect. Beta blockers lower cardiac output. This would be the correct answer if asked about a positive inotrope."
      },
      {
        "text": "Blocking vagal input to the sinoatrial node",
        "explanation": "Incorrect. Beta blockers do not affect vagal input. This would be the correct answer if asked about atropine."
      },
      {
        "text": "Lowering rate, AV conduction and contractility",
        "explanation": "Correct. Beta blockers slow the sinus rate, slow AV node conduction and reduce contractility, lowering cardiac output; they also suppress renin release."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Beta blockers slow heart rate, conduction and force of contraction, lowering cardiac output and suppressing renin.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 32,
    "pdfQuote": "Beta blockers slow heart rate, conduction, and force of contraction"
  },
  {
    "id": 14,
    "category": "Beta Blockers: Therapeutic Uses",
    "questionText": "Beta blockers improve survival in which cardiac conditions?",
    "options": [
      {
        "text": "Cardiogenic shock and heart block",
        "explanation": "Incorrect. Heart block is a caution because of AV slowing. This would be the correct answer if asked about contraindications."
      },
      {
        "text": "Acute myocardial infarction and compensated heart failure",
        "explanation": "Correct. Beta blockers reduce oxygen consumption and cardiac work and improve morbidity and mortality when given early in acute MI and in heart failure with reduced ejection fraction, started carefully when compensated."
      },
      {
        "text": "Anaphylaxis and septic shock",
        "explanation": "Incorrect. Vasopressors such as epinephrine and norepinephrine treat these. This would be the correct answer if asked about sympathomimetics."
      },
      {
        "text": "Bradycardia and hypotension",
        "explanation": "Incorrect. These are adverse effects of beta blockers. This would be the correct answer if asked about side effects."
      },
      {
        "text": "Pheochromocytoma and orthostatic hypotension",
        "explanation": "Incorrect. Alpha blockers, not beta blockers, manage pheochromocytoma. This would be the correct answer if asked about alpha blockers."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Beta blockers treat hypertension, angina, acute MI, compensated heart failure and arrhythmias by blunting sympathetic input to the heart.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 34,
    "pdfQuote": "improves morbidity and mortality when given early during AMI"
  },
  {
    "id": 15,
    "category": "Beta Blockers: Therapeutic Uses",
    "questionText": "Which noncardiac use is established for beta blockers?",
    "options": [
      {
        "text": "Acute severe asthma attacks",
        "explanation": "Incorrect. Beta-2 blockade can cause bronchospasm. This would be the correct answer if asked about albuterol."
      },
      {
        "text": "Overactive bladder symptoms",
        "explanation": "Incorrect. Mirabegron, a beta-3 agonist, treats this. This would be the correct answer if asked about beta-3 agonists."
      },
      {
        "text": "Anaphylactic shock reversal",
        "explanation": "Incorrect. Epinephrine treats this. This would be the correct answer if asked about the drug of choice."
      },
      {
        "text": "Migraine prophylaxis",
        "explanation": "Correct. Beta blockers prevent migraine and also treat hyperthyroid tachycardia, esophageal varices in cirrhosis, glaucoma and the somatic symptoms of performance anxiety."
      },
      {
        "text": "Orthostatic hypotension episodes",
        "explanation": "Incorrect. Beta blockers do not raise standing pressure. This would be the correct answer if asked about a pressor."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Beta blockers also treat migraine prophylaxis, hyperthyroid tachycardia, esophageal varices, glaucoma and performance anxiety.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 34,
    "pdfQuote": "Migraine prophylaxis"
  },
  {
    "id": 16,
    "category": "Beta Blockers: Adverse Effects",
    "questionText": "A patient with asthma develops bronchospasm after a nonselective beta blocker. Which receptor block explains it?",
    "options": [
      {
        "text": "Beta-2 receptors in the airways",
        "explanation": "Correct. Blocking beta-2 receptors removes bronchodilation and raises airway resistance, so nonselective beta blockers can worsen asthma and COPD, and asthma is a contraindication."
      },
      {
        "text": "Beta-1 receptors in the heart",
        "explanation": "Incorrect. Beta-1 blockade causes bradycardia and reduced contractility. This would be the correct answer if asked about cardiac effects."
      },
      {
        "text": "Alpha-1 receptors in bronchi",
        "explanation": "Incorrect. Alpha-1 blockade does not constrict bronchi. This would be the correct answer if asked about vascular effects."
      },
      {
        "text": "M3 receptors in bronchi",
        "explanation": "Incorrect. Beta blockers do not act at muscarinic receptors. This would be the correct answer if asked about cholinomimetics."
      },
      {
        "text": "Beta-3 receptors in the bladder",
        "explanation": "Incorrect. Beta-3 receptors relax the detrusor. This would be the correct answer if asked about bladder effects."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Beta-2 blockade causes bronchospasm, so nonselective beta blockers are avoided in asthma and COPD.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 37,
    "pdfQuote": "can exacerbate asthma/COPD"
  },
  {
    "id": 17,
    "category": "Beta Blockers: Adverse Effects",
    "questionText": "Why can beta blockers be risky in patients prone to hypoglycemia?",
    "options": [
      {
        "text": "They stimulate insulin secretion",
        "explanation": "Incorrect. They do not drive insulin release. This would be the correct answer if asked about an insulin secretagogue."
      },
      {
        "text": "They increase hepatic glucose production",
        "explanation": "Incorrect. They inhibit reflex hepatic glucose production. This would be the correct answer if asked about beta stimulation."
      },
      {
        "text": "They cause a tachycardia that signals hypoglycemia",
        "explanation": "Incorrect. They blunt the tachycardia warning sign. This would be the correct answer if asked about an unblocked response."
      },
      {
        "text": "They mask warnings and blunt glucose production",
        "explanation": "Correct. Beta-2 blockade inhibits reflex hepatic glucose production and masks warning signs such as rapid heartbeat, tremors and sweating, so hypoglycemia can go unnoticed."
      },
      {
        "text": "They block insulin receptors",
        "explanation": "Incorrect. Beta blockers act on adrenergic receptors. This would be the correct answer if asked about insulin resistance."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Beta blockers can potentiate or mask hypoglycemia in patients prone to it, such as those taking insulin.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 35,
    "pdfQuote": "Masks warning signs"
  },
  {
    "id": 18,
    "category": "Beta Blockers: Adverse Effects",
    "questionText": "Abrupt discontinuation of a long-term beta blocker risks what?",
    "options": [
      {
        "text": "Persistent bradycardia and low blood pressure",
        "explanation": "Incorrect. Withdrawal removes the blockade, so sympathetic effects surge. This would be the correct answer if asked about continued dosing."
      },
      {
        "text": "Rebound hypertension, angina or arrhythmia",
        "explanation": "Correct. Long-term blockade causes adaptive receptor upregulation and supersensitivity, so abrupt withdrawal can cause severe angina, MI, ventricular arrhythmia and rebound hypertension; taper over several weeks."
      },
      {
        "text": "Hypoglycemia with tremor",
        "explanation": "Incorrect. Withdrawal does not cause hypoglycemia. This would be the correct answer if asked about masked hypoglycemia."
      },
      {
        "text": "Bronchospasm and wheezing",
        "explanation": "Incorrect. Bronchospasm comes from beta-2 blockade during therapy. This would be the correct answer if asked about asthma risk."
      },
      {
        "text": "No change if the drug was well tolerated",
        "explanation": "Incorrect. Tolerability does not prevent rebound. This would be the correct answer if asked about tapering."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Never stop a beta blocker abruptly; upregulated receptors can cause rebound hypertension, angina, MI or arrhythmia, so taper over weeks.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 35,
    "pdfQuote": "Abrupt discontinuation of beta blocker after long-term treatment"
  },
  {
    "id": 19,
    "category": "Beta Blockers: Precautions",
    "questionText": "Which beta blocker is the exception used for hypertension in pregnancy?",
    "options": [
      {
        "text": "Propranolol",
        "explanation": "Incorrect. Propranolol crosses the placenta, so other agents are preferred. This would be the correct answer if asked about nonselective agents."
      },
      {
        "text": "Metoprolol",
        "explanation": "Incorrect. Metoprolol is beta-1 selective, not the pregnancy exception. This would be the correct answer if asked about cardioselectivity."
      },
      {
        "text": "Nebivolol",
        "explanation": "Incorrect. Nebivolol is a lipophilic agent, not the pregnancy exception. This would be the correct answer if asked about CNS effects."
      },
      {
        "text": "Clonidine",
        "explanation": "Incorrect. Clonidine is an alpha-2 agonist, not a beta blocker. This would be the correct answer if asked about an alpha-2 agonist."
      },
      {
        "text": "Labetalol",
        "explanation": "Correct. Beta blockers cross the placenta and other antihypertensives are preferred in pregnancy, with labetalol the exception used for hypertension management."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Beta blockers are generally avoided in pregnancy, but labetalol is used for hypertension in pregnant patients.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 36,
    "pdfQuote": "Exception: Labetalol is used for hypertension management"
  },
  {
    "id": 20,
    "category": "Alpha Blockers: Drug Interactions",
    "questionText": "Which drug class can enhance the hypotensive effect of alpha blockers?",
    "options": [
      {
        "text": "Stimulant amphetamines",
        "explanation": "Incorrect. Amphetamines raise blood pressure and diminish alpha blocker effects. This would be the correct answer if asked about antagonism."
      },
      {
        "text": "Intravenous vasopressors",
        "explanation": "Incorrect. Vasopressors raise blood pressure and diminish alpha blocker effects. This would be the correct answer if asked about antagonism."
      },
      {
        "text": "PDE-5 inhibitors",
        "explanation": "Correct. Drugs with blood pressure lowering effects, such as PDE-5 inhibitors, antipsychotics and antidepressants, can enhance the hypotension from alpha blockers."
      },
      {
        "text": "Chronic NSAID therapy",
        "explanation": "Incorrect. NSAIDs retain sodium and water and blunt blood pressure lowering. This would be the correct answer if asked about attenuated effects."
      },
      {
        "text": "Cocaine intoxication",
        "explanation": "Incorrect. Cocaine raises catecholamines and blood pressure. This would be the correct answer if asked about opposing effects."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Other blood pressure lowering drugs, such as PDE-5 inhibitors, enhance alpha blocker hypotension, while vasopressors and amphetamines diminish it.",
    "lectureSource": "PPOM39: Adrenergic Antagonists",
    "pdfLecture": "PPOM39",
    "pdfPage": 23,
    "pdfQuote": "Drugs with blood pressure lowering side effects"
  }
];

window.Test_Review_PPOM39 = Test_Review_PPOM39;
