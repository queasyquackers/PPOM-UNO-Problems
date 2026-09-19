// SET A - first-order recall items, in lecture order. File: Test_CV85_Recall.js
const Test_CV85_Recall = [
  {
    "id": 1,
    "category": "Antiarrhythmics: Action Potential and EKG",
    "questionText": "The plateau (phase 2) of the ventricular action potential is produced mainly by entry of which ion?",
    "options": [
      {
        "text": "Sodium, via fast sodium channels",
        "explanation": "Incorrect. Sodium entry produces the phase 0 upstroke. This would be the correct answer if asked about depolarization."
      },
      {
        "text": "Calcium, via opening calcium channels",
        "explanation": "Correct. Calcium channels open in phase 2 and calcium entry forms the plateau, or shoulder. This is where verapamil and diltiazem act, unlike Class I drugs, which act on the phase 0 sodium current."
      },
      {
        "text": "Potassium, via opening potassium channels",
        "explanation": "Incorrect. Potassium efflux drives phase 3 repolarization. This would be the correct answer if asked about the Class III target phase."
      },
      {
        "text": "Potassium, the main phase 4 conductance",
        "explanation": "Incorrect. Potassium dominates resting phase 4 conductance. This would be the correct answer if asked about the ion of rest."
      },
      {
        "text": "Sodium, via the Na+/Ca2+ exchanger",
        "explanation": "Incorrect. The antiport trades 3 sodium in for 1 calcium out. This would be the correct answer if asked about calcium removal."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Phase 2 is the calcium plateau, the site where the Class IV drugs verapamil and diltiazem act.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 3,
    "pdfQuote": "Phase 2: Calcium channels open and allow calcium"
  },
  {
    "id": 2,
    "category": "Antiarrhythmics: Action Potential and EKG",
    "questionText": "Blockade of which ion channel type lengthens the QT interval on the EKG?",
    "options": [
      {
        "text": "Fast sodium channels in ventricular muscle",
        "explanation": "Incorrect. Sodium channel block slows depolarization and widens the QRS. This would be the correct answer if asked about QRS widening."
      },
      {
        "text": "Funny (If) channels in the SA node",
        "explanation": "Incorrect. If blockade by ivabradine slows the pacemaker without changing AP duration. This would be the correct answer if asked about ivabradine."
      },
      {
        "text": "Nodal calcium channels",
        "explanation": "Incorrect. Nodal calcium channel block slows AV conduction. This would be the correct answer if asked about PR prolongation."
      },
      {
        "text": "Repolarizing potassium channels",
        "explanation": "Correct. The QT interval is the duration of the ventricular action potential, and potassium channel block prolongs repolarization. Class Ia and Class III drugs therefore raise QT, whereas pure sodium block changes QRS."
      },
      {
        "text": "Beta-1 adrenergic receptors",
        "explanation": "Incorrect. Beta-1 blockade flattens phase 4. This would be the correct answer if asked about Class II drugs."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: QRS tracks sodium and depolarization, while QT tracks potassium and repolarization, so potassium channel blockers prolong QT.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 4,
    "pdfQuote": "QT: duration of ventricular AP"
  },
  {
    "id": 3,
    "category": "Antiarrhythmics: Arrhythmia Mechanisms",
    "questionText": "Delayed afterdepolarizations occurring after phase 4 are driven by which intracellular change?",
    "options": [
      {
        "text": "Increased intracellular calcium",
        "explanation": "Correct. Delayed afterdepolarizations come from high intracellular calcium, as in digoxin toxicity or after ischemia. Early afterdepolarizations instead arise near phase 3, most often with hypokalemia and a slow rate."
      },
      {
        "text": "Loss of norepinephrine at beta-1 receptors",
        "explanation": "Incorrect. Less beta-1 stimulation flattens phase 4. This would be the correct answer if asked how beta blockers slow automaticity."
      },
      {
        "text": "Excess acetylcholine at M2 receptors",
        "explanation": "Incorrect. M2 stimulation through Gi slows the heart. This would be the correct answer if asked about vagal slowing."
      },
      {
        "text": "Accelerated sodium channel recovery",
        "explanation": "Incorrect. Faster recovery shortens the refractory period. This would be the correct answer if asked what Class Ia drugs oppose."
      },
      {
        "text": "Slowed phase 3 repolarization",
        "explanation": "Incorrect. Slowed repolarization near phase 3 produces early afterdepolarizations. This would be the correct answer if asked about hypokalemia with bradycardia."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Delayed afterdepolarizations are a calcium-overload problem, the mechanism behind digoxin-toxic ventricular arrhythmias.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 5,
    "pdfQuote": "Mechanisms of Arrhythmias"
  },
  {
    "id": 4,
    "category": "Antiarrhythmics: Classification",
    "questionText": "In the Vaughan-Williams classification, Class III drugs act primarily by blocking which target?",
    "options": [
      {
        "text": "Voltage-gated sodium channels",
        "explanation": "Incorrect. Sodium channel blockade defines Class I. This would be the correct answer if asked about quinidine or lidocaine."
      },
      {
        "text": "Beta-adrenergic receptors in the heart",
        "explanation": "Incorrect. Cardiac beta blockade defines Class II. This would be the correct answer if asked about metoprolol."
      },
      {
        "text": "Potassium channels",
        "explanation": "Correct. Class III drugs such as amiodarone, sotalol, dofetilide and ibutilide block potassium channels and delay repolarization. Class Ia drugs share some potassium block but are classed by their sodium channel effect."
      },
      {
        "text": "L-type calcium channels in nodal tissue",
        "explanation": "Incorrect. Calcium channel blockade defines Class IV. This would be the correct answer if asked about verapamil."
      },
      {
        "text": "Adenosine A1 receptors",
        "explanation": "Incorrect. Adenosine is a miscellaneous agent acting through A1 receptors. This would be the correct answer if asked about PSVT termination."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Vaughan-Williams classes are I sodium, II beta, III potassium and IV calcium channel blockade, with digoxin and adenosine as miscellaneous.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 6,
    "pdfQuote": "Class 3: Potassium channel blockade"
  },
  {
    "id": 5,
    "category": "Antiarrhythmics: Classification",
    "questionText": "Because Class I drugs are use-dependent, their sodium channel blockade is greatest under which condition?",
    "options": [
      {
        "text": "Hypokalemia from thiazide diuretics",
        "explanation": "Incorrect. Hypokalemia slows repolarization and favors afterdepolarizations. This would be the correct answer if asked about EAD risk."
      },
      {
        "text": "Resting, fully polarized tissue",
        "explanation": "Incorrect. Resting cells rarely open their sodium channels. This would be the correct answer if asked where Class I acts least."
      },
      {
        "text": "Hyperkalemia with a peaked T wave",
        "explanation": "Incorrect. Hyperkalemia slows conduction and shortens the AP. This would be the correct answer if asked about ACE inhibitor toxicity."
      },
      {
        "text": "Complete AV nodal block",
        "explanation": "Incorrect. AV block is a conduction failure treated with atropine. This would be the correct answer if asked about M2 blockade."
      },
      {
        "text": "Increased firing rate, as in tachycardia",
        "explanation": "Correct. Use-dependent drugs block more channels in tissue that depolarizes more often, so blockade rises at faster rates. Class III drugs show the reverse, acting more at slow rates."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Use dependence means Class I sodium channel block increases with heart rate, targeting tachycardic tissue.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 8,
    "pdfQuote": "Increased sodium channel blockade at"
  },
  {
    "id": 6,
    "category": "Antiarrhythmics: Class I Sodium Channel Blockers",
    "questionText": "Class Ia antiarrhythmics produce which combined EKG change?",
    "options": [
      {
        "text": "Prolonged QRS and prolonged QT",
        "explanation": "Correct. Sodium channel block slows phase 0 and widens QRS, while added potassium channel block lengthens QT. That QT effect is what makes Class Ia drugs pro-arrhythmic, unlike Class Ic, which leaves QT unchanged."
      },
      {
        "text": "Widened QRS with an unchanged QT",
        "explanation": "Incorrect. This is the Class Ic pattern. This would be the correct answer if asked about flecainide."
      },
      {
        "text": "Shortened QT with minimal QRS change",
        "explanation": "Incorrect. This is the Class Ib pattern. This would be the correct answer if asked about lidocaine."
      },
      {
        "text": "Prolonged PR with scooped ST depression",
        "explanation": "Incorrect. This is the digoxin pattern. This would be the correct answer if asked about the hockey-stick EKG."
      },
      {
        "text": "Prolonged QT with a normal QRS",
        "explanation": "Incorrect. This is the pure potassium blocker pattern. This would be the correct answer if asked about Class III drugs."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Class Ia drugs block sodium and potassium channels, so both QRS and QT lengthen and torsades becomes a risk.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 9,
    "pdfQuote": "Prolongs QT and QRS"
  },
  {
    "id": 7,
    "category": "Antiarrhythmics: Class I Sodium Channel Blockers",
    "questionText": "Headache, dizziness and tinnitus (cinchonism) are an adverse effect of which antiarrhythmic?",
    "options": [
      {
        "text": "Procainamide, an acetylated Class Ia drug",
        "explanation": "Incorrect. Procainamide causes lupus in slow acetylators. This would be the correct answer if asked about antihistone antibodies."
      },
      {
        "text": "Disopyramide, the most anticholinergic Ia",
        "explanation": "Incorrect. Disopyramide is the most atropine-like Ia drug. This would be the correct answer if asked about urinary retention."
      },
      {
        "text": "Lidocaine, an amide local anesthetic",
        "explanation": "Incorrect. Lidocaine toxicity is paresthesia and seizures. This would be the correct answer if asked about post-MI prophylaxis."
      },
      {
        "text": "Quinidine, a quinine-related Class Ia drug",
        "explanation": "Correct. Quinidine, like quinine used for falciparum malaria, causes cinchonism: headache, dizziness and tinnitus. It also causes immune thrombocytopenia and hepatitis, whereas procainamide is the Ia drug linked to lupus."
      },
      {
        "text": "Amiodarone, an iodinated Class III drug",
        "explanation": "Incorrect. Amiodarone affects thyroid, lung, liver, eyes and skin. This would be the correct answer if asked about corneal deposits."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Cinchonism (headache, dizziness, tinnitus) points to quinidine, which behaves like its parent compound quinine.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 10,
    "pdfQuote": "Cinchonism: headache, dizziness, and tinnitus"
  },
  {
    "id": 8,
    "category": "Antiarrhythmics: Class I Sodium Channel Blockers",
    "questionText": "Procainamide-induced lupus with antihistone antibodies is most likely in which patients?",
    "options": [
      {
        "text": "Patients with hypokalemia on loop diuretics",
        "explanation": "Incorrect. Hypokalemia potentiates digoxin toxicity. This would be the correct answer if asked about xanthopsia risk."
      },
      {
        "text": "Slow acetylators of the drug",
        "explanation": "Correct. Procainamide is acetylated to N-acetylprocainamide; slow acetylators accumulate drug and develop arthralgias and a butterfly rash. Hydralazine and isoniazid share this phase II pathway."
      },
      {
        "text": "Patients with reduced renal function",
        "explanation": "Incorrect. Renal impairment delays digoxin elimination. This would be the correct answer if asked about digoxin dosing."
      },
      {
        "text": "Patients taking CYP3A4 inhibitors",
        "explanation": "Incorrect. CYP3A4 inhibitors raise amiodarone and ivabradine levels. This would be the correct answer if asked about ivabradine bradycardia."
      },
      {
        "text": "Patients with a genetic long QT",
        "explanation": "Incorrect. Genetic long QT raises torsades risk. This would be the correct answer if asked about ablation candidates."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Procainamide causes drug-induced lupus in slow acetylators, the same phase II acetylation risk seen with hydralazine and isoniazid.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 11,
    "pdfQuote": "Acetylation (N- acetylprocainamide, NAPA)"
  },
  {
    "id": 9,
    "category": "Antiarrhythmics: Class I Sodium Channel Blockers",
    "questionText": "Procainamide's alpha-adrenergic receptor blockade produces which hemodynamic effect?",
    "options": [
      {
        "text": "Increased AV nodal conduction",
        "explanation": "Incorrect. Faster AV conduction comes from M2 blockade. This would be the correct answer if asked about its antimuscarinic effect."
      },
      {
        "text": "Gingival overgrowth from fibroblasts",
        "explanation": "Incorrect. Gingival overgrowth is a calcium channel blocker effect. This would be the correct answer if asked about verapamil."
      },
      {
        "text": "Increased myocardial contractility",
        "explanation": "Incorrect. Positive inotropy comes from Na+/K+ ATPase inhibition. This would be the correct answer if asked about digoxin."
      },
      {
        "text": "Bradycardia from nodal calcium channel block",
        "explanation": "Incorrect. Nodal calcium channel block slows the heart. This would be the correct answer if asked about verapamil."
      },
      {
        "text": "Decreased peripheral vascular resistance",
        "explanation": "Correct. Alpha blockade relaxes vessels, lowering peripheral vascular resistance and causing hypotension. Procainamide also shares the Class Ia QT prolongation and M2 blockade."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Procainamide adds alpha blockade to Class Ia effects, so hypotension from reduced peripheral vascular resistance is expected.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 11,
    "pdfQuote": "M and alpha"
  },
  {
    "id": 10,
    "category": "Antiarrhythmics: Class I Sodium Channel Blockers",
    "questionText": "Because disopyramide strongly blocks cardiac M2 receptors, it is co-administered with which drug?",
    "options": [
      {
        "text": "Atropine, an M2 receptor blocker",
        "explanation": "Incorrect. Atropine adds more M2 blockade. This would be the correct answer if asked about treating AV block."
      },
      {
        "text": "Nifedipine, a dihydropyridine",
        "explanation": "Incorrect. Nifedipine dilates arterioles and causes reflex tachycardia. This would be the correct answer if asked about vasodilator edema."
      },
      {
        "text": "Metoprolol, an AV node suppressant",
        "explanation": "Correct. Removing the vagal brake raises AV nodal conduction, so disopyramide is paired with an AV node suppressant, most often metoprolol. It is the most atropine-like of the three Class Ia drugs."
      },
      {
        "text": "Sodium bicarbonate, a channel stabilizer",
        "explanation": "Incorrect. Bicarbonate stabilizes sodium channels. This would be the correct answer if asked about TCA overdose."
      },
      {
        "text": "Digoxin immune Fab (DigFab)",
        "explanation": "Incorrect. DigFab binds unabsorbed digoxin. This would be the correct answer if asked about digoxin overdose."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Disopyramide is the most anticholinergic Class Ia drug and needs a beta-1 blocker to protect against increased AV conduction.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 12,
    "pdfQuote": "Administer with an AV node suppressant"
  },
  {
    "id": 11,
    "category": "Antiarrhythmics: Class I Sodium Channel Blockers",
    "questionText": "Class Ib drugs such as lidocaine have which effect on the ventricular action potential?",
    "options": [
      {
        "text": "Markedly slowed phase 0 with widened QRS",
        "explanation": "Incorrect. This is the Class Ic effect. This would be the correct answer if asked about flecainide."
      },
      {
        "text": "Delayed repolarization without phase 0 change",
        "explanation": "Incorrect. This is the Class III effect. This would be the correct answer if asked about dofetilide."
      },
      {
        "text": "Shortened action potential and lower QT",
        "explanation": "Correct. Class Ib drugs barely affect phase 0 but shorten the action potential and refractory period, lowering QT. That is why they suit the post-MI heart, unlike QT-prolonging Class Ia drugs."
      },
      {
        "text": "Increased AV nodal refractory period",
        "explanation": "Incorrect. This is the Class IV nodal effect. This would be the correct answer if asked about verapamil."
      },
      {
        "text": "Lengthened PR from AV nodal slowing",
        "explanation": "Incorrect. PR lengthening reflects AV node suppression. This would be the correct answer if asked about digoxin."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Class Ib drugs shorten the action potential and lower QT, which makes lidocaine safe after an MI.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 13,
    "pdfQuote": "shorten the AP and ERP"
  },
  {
    "id": 12,
    "category": "Antiarrhythmics: Class I Sodium Channel Blockers",
    "questionText": "Excessive intravenous lidocaine most characteristically produces which toxicity?",
    "options": [
      {
        "text": "Paresthesias progressing to seizures",
        "explanation": "Correct. Lidocaine is an amide local anesthetic, so IV excess causes paresthesias and, at worst, seizures. As a CYP450 substrate, its level rises with inhibitors such as azoles."
      },
      {
        "text": "Tinnitus and headache from cinchonism",
        "explanation": "Incorrect. Cinchonism is a quinidine toxicity. This would be the correct answer if asked about quinidine."
      },
      {
        "text": "Gingival hyperplasia and hirsutism",
        "explanation": "Incorrect. These are phenytoin effects. This would be the correct answer if asked about phenytoin."
      },
      {
        "text": "Bronchospasm and facial flushing",
        "explanation": "Incorrect. These follow adenosine injection. This would be the correct answer if asked about PSVT therapy."
      },
      {
        "text": "Blue-gray skin discoloration",
        "explanation": "Incorrect. Bluish smurf skin is an amiodarone effect. This would be the correct answer if asked about amiodarone skin toxicity."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Lidocaine toxicity is neurologic, from paresthesias to seizures, because it is an amide local anesthetic.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 14,
    "pdfQuote": "Local anesthetic; produces neurological adverse"
  },
  {
    "id": 13,
    "category": "Antiarrhythmics: Class I Sodium Channel Blockers",
    "questionText": "Class Ic drugs such as flecainide are avoided in which patients?",
    "options": [
      {
        "text": "Patients in thyroid storm",
        "explanation": "Incorrect. Thyroid storm calls for a beta blocker. This would be the correct answer if asked about beta blocker uses."
      },
      {
        "text": "Patients with refractory ventricular arrhythmias",
        "explanation": "Incorrect. This is a Class Ic indication. This would be the correct answer if asked about flecainide uses."
      },
      {
        "text": "Patients with paroxysmal atrial fibrillation",
        "explanation": "Incorrect. Atrial fibrillation is another Ic indication. This would be the correct answer if asked about propafenone uses."
      },
      {
        "text": "Patients with sinus tachycardia",
        "explanation": "Incorrect. Sinus tachycardia is treated with Class II or IV. This would be the correct answer if asked about beta blockers."
      },
      {
        "text": "Patients with post-MI structural damage",
        "explanation": "Correct. Class Ic drugs widen QRS and can raise ventricular rate; in CAST, flecainide increased mortality after MI with structural damage. They are also negative inotropes that worsen heart failure."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Class Ic drugs are reserved for hearts without structural damage because CAST showed increased mortality after MI.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 15,
    "pdfQuote": "Treats refractory ventricular arrhythmias"
  },
  {
    "id": 14,
    "category": "Antiarrhythmics: Class I Sodium Channel Blockers",
    "questionText": "Flecainide's benefit in catecholaminergic polymorphic ventricular tachycardia comes from blocking which target?",
    "options": [
      {
        "text": "Adenosine A2B receptors",
        "explanation": "Incorrect. A2B receptors mediate adenosine bronchoconstriction. This would be the correct answer if asked about wheezing after adenosine."
      },
      {
        "text": "Cardiac ryanodine receptors",
        "explanation": "Correct. Flecainide blocks the cardiac ryanodine receptor, limiting calcium release, which helps in CPVT. Dantrolene acts on the skeletal muscle ryanodine receptor in neuroleptic malignant syndrome."
      },
      {
        "text": "Beta-2 adrenergic receptors",
        "explanation": "Incorrect. Beta-2 blockade causes bronchoconstriction. This would be the correct answer if asked about nonselective beta blockers."
      },
      {
        "text": "Alpha-1 adrenergic receptors",
        "explanation": "Incorrect. Alpha blockade lowers vascular resistance. This would be the correct answer if asked about procainamide hypotension."
      },
      {
        "text": "Muscarinic M2 receptors in the heart",
        "explanation": "Incorrect. M2 blockade speeds AV conduction. This would be the correct answer if asked about disopyramide."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Flecainide also blocks the cardiac ryanodine receptor, the basis for its use in catecholaminergic polymorphic VT.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 15,
    "pdfQuote": "Flecainide: blocks ryanodine receptor"
  },
  {
    "id": 15,
    "category": "Antiarrhythmics: Class II and IV Nodal Agents",
    "questionText": "Class II beta blockers suppress SA and AV nodal automaticity by changing which feature?",
    "options": [
      {
        "text": "Slowed phase 0 upstroke velocity",
        "explanation": "Incorrect. Slowing phase 0 is a sodium channel effect. This would be the correct answer if asked about Class Ia drugs."
      },
      {
        "text": "Prolonged phase 3 repolarization",
        "explanation": "Incorrect. Delaying phase 3 is a potassium channel effect. This would be the correct answer if asked about amiodarone."
      },
      {
        "text": "Reduced plateau calcium entry",
        "explanation": "Incorrect. Slowing the plateau current is a calcium channel effect. This would be the correct answer if asked about diltiazem."
      },
      {
        "text": "Decreased slope of phase 4",
        "explanation": "Correct. Blocking norepinephrine at beta-1 receptors flattens phase 4 in the SA and AV nodes, lowering heart rate. Verapamil and diltiazem share this effect, whereas sodium channel blockers act on phase 0."
      },
      {
        "text": "Blocked muscarinic M2 receptors",
        "explanation": "Incorrect. M2 blockade raises AV conduction. This would be the correct answer if asked about Class Ia side effects."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Beta blockers treat increased automaticity by decreasing the slope of phase 4 in nodal tissue.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 16,
    "pdfQuote": "Class II: Beta-receptor antagonists"
  },
  {
    "id": 16,
    "category": "Antiarrhythmics: Class II and IV Nodal Agents",
    "questionText": "Blocking beta-1 receptors in the juxtaglomerular apparatus produces which effect?",
    "options": [
      {
        "text": "Hypoglycemia from blocked glycogenolysis",
        "explanation": "Incorrect. Hypoglycemia follows beta-2 blockade. This would be the correct answer if asked about nonselective agents."
      },
      {
        "text": "Edema from aldosterone activation",
        "explanation": "Incorrect. Renin-driven edema follows dihydropyridines. This would be the correct answer if asked about nifedipine edema."
      },
      {
        "text": "Potassium wasting with hypokalemia",
        "explanation": "Incorrect. Potassium wasting follows loop and thiazide diuretics. This would be the correct answer if asked about furosemide."
      },
      {
        "text": "Decreased renin release",
        "explanation": "Correct. Juxtaglomerular beta-1 receptors drive renin secretion, so metoprolol indirectly lowers renin. The effect is weaker and less direct than that of ACE inhibitors or ARBs."
      },
      {
        "text": "Vasoconstriction worsening PVD",
        "explanation": "Incorrect. Worsened PVD follows beta-2 blockade in vessels. This would be the correct answer if asked about propranolol."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Beta-1 blockade lowers heart rate, cardiac output and juxtaglomerular renin release.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 18,
    "pdfQuote": "Beta 1: decrease HR, CO, and renin from JXA."
  },
  {
    "id": 17,
    "category": "Antiarrhythmics: Class II and IV Nodal Agents",
    "questionText": "Nonselective beta blockers such as propranolol add which adverse effect through beta-2 blockade?",
    "options": [
      {
        "text": "Peripheral edema",
        "explanation": "Incorrect. Edema is a dihydropyridine effect. This would be the correct answer if asked about amlodipine-type drugs."
      },
      {
        "text": "Airway bronchoconstriction",
        "explanation": "Correct. Beta-2 receptors relax bronchial smooth muscle, so nonselective agents cause bronchoconstriction, plus hypoglycemia and worsened PVD. Beta-1 selective atenolol and metoprolol spare the lungs."
      },
      {
        "text": "Phosphenes in the visual field",
        "explanation": "Incorrect. Phosphenes follow retinal Ih blockade. This would be the correct answer if asked about ivabradine."
      },
      {
        "text": "Gynecomastia",
        "explanation": "Incorrect. Gynecomastia reflects an estrogen-like backbone. This would be the correct answer if asked about digoxin."
      },
      {
        "text": "Corneal microdeposits",
        "explanation": "Incorrect. Corneal deposits reflect lysosomal drug accumulation. This would be the correct answer if asked about amiodarone."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Nonselective beta blockers cause bronchoconstriction, hypoglycemia and worsened PVD through beta-2 blockade.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 18,
    "pdfQuote": "hypoglycemia, PVD (Beta 2 block)"
  },
  {
    "id": 18,
    "category": "Antiarrhythmics: Class III Potassium Channel Blockers",
    "questionText": "Because of reverse use dependence, Class III drugs prolong QT most under which condition?",
    "options": [
      {
        "text": "Decreased heart rate, as in bradycardia",
        "explanation": "Correct. Reverse use dependence means potassium channel blockers act more at slow rates, so bradycardic patients show the greatest QT prolongation. Class I drugs show the opposite, use dependence."
      },
      {
        "text": "Ischemic, partially depolarized ventricle",
        "explanation": "Incorrect. Depolarized tissue favors Class Ib binding. This would be the correct answer if asked about lidocaine."
      },
      {
        "text": "Wolff-Parkinson-White preexcitation",
        "explanation": "Incorrect. Preexcitation reflects a bundle of Kent. This would be the correct answer if asked about delta waves."
      },
      {
        "text": "Hyperkalemia from spironolactone",
        "explanation": "Incorrect. Hyperkalemia shortens the action potential. This would be the correct answer if asked about peaked T waves."
      },
      {
        "text": "High sympathetic tone during exercise",
        "explanation": "Incorrect. Sympathetic drive steepens phase 4. This would be the correct answer if asked about increased automaticity."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Class III drugs show reverse use dependence, so QT prolongation and torsades risk are greatest at slow heart rates.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 19,
    "pdfQuote": "Prolongs QT (torsades)"
  },
  {
    "id": 19,
    "category": "Antiarrhythmics: Class III Potassium Channel Blockers",
    "questionText": "Amiodarone raises warfarin and digoxin levels through which action?",
    "options": [
      {
        "text": "Induction of hepatic CYP3A4",
        "explanation": "Incorrect. Induction would lower partner drug levels. This would be the correct answer if asked what lowers amiodarone levels."
      },
      {
        "text": "Inhibition of renal P-glycoprotein",
        "explanation": "Incorrect. P-glycoprotein inhibition reduces digoxin clearance. This would be the correct answer if asked about verapamil."
      },
      {
        "text": "Reduced gut absorption by binding",
        "explanation": "Incorrect. Binding in the gut lowers digoxin absorption. This would be the correct answer if asked about cholestyramine."
      },
      {
        "text": "Ionization in an alkaline gut",
        "explanation": "Incorrect. Ionized digoxin is poorly absorbed. This would be the correct answer if asked about antacids."
      },
      {
        "text": "Decreased P450 metabolism of partner drugs",
        "explanation": "Correct. Amiodarone inhibits P450 enzymes, raising digoxin, warfarin and statin levels, so warfarin users may bleed. It is also a CYP3A4 substrate, so other inhibitors raise amiodarone itself."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Amiodarone inhibits P450 enzymes, so it raises digoxin, warfarin and statin levels.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 20,
    "pdfQuote": "Also inhibits P450 enzymes (digoxin, warfarin, statins)"
  },
  {
    "id": 20,
    "category": "Antiarrhythmics: Class III Potassium Channel Blockers",
    "questionText": "Amiodarone causes hypothyroidism through which mechanism?",
    "options": [
      {
        "text": "Iodine load boosting hormone synthesis",
        "explanation": "Incorrect. Extra iodine drives hyperthyroidism. This would be the correct answer if asked about amiodarone thyrotoxicosis."
      },
      {
        "text": "Melanin binding in the skin",
        "explanation": "Incorrect. Melanin interaction produces bluish skin. This would be the correct answer if asked about smurf skin."
      },
      {
        "text": "Decreased conversion of T4 to T3",
        "explanation": "Correct. Amiodarone blocks peripheral conversion of T4 to active T3, producing hypothyroidism. Its iodine content can do the opposite and cause hyperthyroidism, so a thyroid panel is checked at the start."
      },
      {
        "text": "Accumulation in corneal lysosomes",
        "explanation": "Incorrect. Lysosomal accumulation causes corneal opacity. This would be the correct answer if asked about vision changes."
      },
      {
        "text": "Hepatotoxic desethylamiodarone metabolite",
        "explanation": "Incorrect. This metabolite injures the liver. This would be the correct answer if asked about hepatotoxicity."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Amiodarone can cause hypothyroidism by blocking T4-to-T3 conversion or hyperthyroidism through its iodine load.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 21,
    "pdfQuote": "Iodinated (hyperthyroidism)"
  },
  {
    "id": 21,
    "category": "Antiarrhythmics: Class III Potassium Channel Blockers",
    "questionText": "To screen for pulmonary toxicity, patients starting amiodarone should have which study at baseline and yearly?",
    "options": [
      {
        "text": "Serum digoxin concentration",
        "explanation": "Incorrect. Digoxin levels matter because amiodarone raises them. This would be the correct answer if asked about the digoxin interaction."
      },
      {
        "text": "Serum potassium and magnesium",
        "explanation": "Incorrect. Electrolytes guide digoxin safety. This would be the correct answer if asked about DAD prevention."
      },
      {
        "text": "Antihistone antibody titer",
        "explanation": "Incorrect. Antihistone antibodies mark drug-induced lupus. This would be the correct answer if asked about procainamide."
      },
      {
        "text": "Platelet count",
        "explanation": "Incorrect. Platelets fall with immune reactions to quinidine. This would be the correct answer if asked about quinidine."
      },
      {
        "text": "Chest X-ray",
        "explanation": "Correct. Amiodarone causes pulmonary fibrosis, so a chest X-ray is taken at baseline and yearly, with pulmonary function tests in some cases. Established fibrosis is managed by stopping the drug and giving glucocorticoids."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Amiodarone requires a baseline and yearly chest X-ray because pulmonary fibrosis is its signature lung toxicity.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 22,
    "pdfQuote": "Baseline and yearly chest X-rays"
  },
  {
    "id": 22,
    "category": "Antiarrhythmics: Class III Potassium Channel Blockers",
    "questionText": "Dofetilide and ibutilide are started under about 4 hours of which monitoring?",
    "options": [
      {
        "text": "Serial blood glucose checks",
        "explanation": "Incorrect. Glucose matters with beta-2 blockade. This would be the correct answer if asked about nonselective beta blockers."
      },
      {
        "text": "Pulse oximetry for bronchospasm",
        "explanation": "Incorrect. Brief bronchospasm follows adenosine. This would be the correct answer if asked about adenosine injection."
      },
      {
        "text": "Continuous EKG watching the QT interval",
        "explanation": "Correct. These potassium channel blockers slow repolarization enough to raise QT markedly, so therapy begins with continuous EKG surveillance. The risk is QT prolongation and torsades, not bradycardia or bronchospasm."
      },
      {
        "text": "Serum thyroid panel",
        "explanation": "Incorrect. Thyroid tests are needed for iodinated amiodarone. This would be the correct answer if asked about amiodarone."
      },
      {
        "text": "Blood pressure for alpha blockade",
        "explanation": "Incorrect. Alpha blockade lowers pressure. This would be the correct answer if asked about procainamide."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Dofetilide and ibutilide prolong QT enough that initiation requires continuous EKG monitoring.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 24,
    "pdfQuote": "Dofetilide, ibutilide: slow cardiac repolarization."
  },
  {
    "id": 23,
    "category": "Antiarrhythmics: Class II and IV Nodal Agents",
    "questionText": "Dihydropyridines such as nifedipine are not used as antiarrhythmics because they provoke which response?",
    "options": [
      {
        "text": "Excess AV nodal suppression",
        "explanation": "Incorrect. AV nodal suppression is the goal of verapamil. This would be the correct answer if asked about diltiazem."
      },
      {
        "text": "Baroreflex-driven increase in heart rate",
        "explanation": "Correct. Dihydropyridines relax arterioles; the fall in blood pressure triggers the baroreceptor reflex and reflex tachycardia. Verapamil and diltiazem act mainly on the SA and AV nodes instead."
      },
      {
        "text": "Marked bradycardia from SA block",
        "explanation": "Incorrect. Bradycardia is the main verapamil and diltiazem effect. This would be the correct answer if asked about non-dihydropyridines."
      },
      {
        "text": "QT prolongation with torsades",
        "explanation": "Incorrect. Torsades follows potassium channel block. This would be the correct answer if asked about Class III drugs."
      },
      {
        "text": "Widened QRS from sodium block",
        "explanation": "Incorrect. QRS widening follows sodium channel block. This would be the correct answer if asked about Class Ic drugs."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Only verapamil and diltiazem are Class IV antiarrhythmics; dihydropyridines cause baroreflex tachycardia.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 25,
    "pdfQuote": "Slow inward calcium current"
  },
  {
    "id": 24,
    "category": "Antiarrhythmics: Class II and IV Nodal Agents",
    "questionText": "Which adverse effect is most associated with verapamil among the calcium channel blockers?",
    "options": [
      {
        "text": "Ankle edema from aldosterone",
        "explanation": "Incorrect. Renin-aldosterone edema follows dihydropyridines. This would be the correct answer if asked about nifedipine."
      },
      {
        "text": "Dizziness with flushing headache",
        "explanation": "Incorrect. Dizziness and headache are dihydropyridine effects. This would be the correct answer if asked about vasodilator effects."
      },
      {
        "text": "Hirsutism and nystagmus",
        "explanation": "Incorrect. These are phenytoin effects. This would be the correct answer if asked about phenytoin toxicity."
      },
      {
        "text": "Constipation from slowed peristalsis",
        "explanation": "Correct. Blocking calcium in gut smooth muscle reduces peristalsis, and constipation is most common with verapamil. Verapamil and diltiazem also cause bradycardia and gingival overgrowth, and grapefruit raises their levels."
      },
      {
        "text": "Hypotension from alpha blockade",
        "explanation": "Incorrect. Alpha blockade hypotension occurs with procainamide. This would be the correct answer if asked about procainamide."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Verapamil causes the most constipation, plus bradycardia, gingival overgrowth and a grapefruit interaction.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 27,
    "pdfQuote": "gingival overgrowth, grapefruit drug interaction."
  },
  {
    "id": 25,
    "category": "Antiarrhythmics: Digoxin and Other Agents",
    "questionText": "Digoxin's positive inotropic effect results from inhibition of which protein?",
    "options": [
      {
        "text": "Na+/K+ ATPase",
        "explanation": "Correct. Blocking the pump keeps sodium inside, so the Na+/Ca2+ exchanger removes less calcium and contractility rises. Its separate vagal effect lowers heart rate and AV conduction."
      },
      {
        "text": "Na+/Ca2+ exchanger",
        "explanation": "Incorrect. The exchanger slows only secondarily. This would be the correct answer if asked what loses its gradient."
      },
      {
        "text": "L-type calcium channel",
        "explanation": "Incorrect. Blocking it is negatively inotropic. This would be the correct answer if asked about verapamil."
      },
      {
        "text": "Cardiac beta-1 receptor",
        "explanation": "Incorrect. Beta-1 blockade lowers contractility. This would be the correct answer if asked about metoprolol."
      },
      {
        "text": "Voltage-gated potassium channel",
        "explanation": "Incorrect. Blocking it delays repolarization. This would be the correct answer if asked about sotalol."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Digoxin inhibits Na+/K+ ATPase, raising intracellular calcium through the exchanger and increasing contractility.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 29,
    "pdfQuote": "Positive inotropic: increases"
  },
  {
    "id": 26,
    "category": "Antiarrhythmics: Digoxin and Other Agents",
    "questionText": "Digoxin toxicity alters vision in which characteristic way?",
    "options": [
      {
        "text": "Xanthopsia, a yellow tint with halos",
        "explanation": "Correct. Digoxin inhibits Na+/K+ ATPase in retinal cells, so objects look yellow, the Van Gogh effect. Bright spots called phosphenes instead point to ivabradine."
      },
      {
        "text": "Bright spots called phosphenes",
        "explanation": "Incorrect. Phosphenes come from retinal Ih blockade. This would be the correct answer if asked about ivabradine."
      },
      {
        "text": "Corneal opacity from lysosomal drug deposits",
        "explanation": "Incorrect. Corneal deposits are an amiodarone effect. This would be the correct answer if asked about amiodarone eyes."
      },
      {
        "text": "Mydriasis with blurred vision",
        "explanation": "Incorrect. Mydriasis is an anticholinergic effect. This would be the correct answer if asked about disopyramide."
      },
      {
        "text": "Horizontal nystagmus",
        "explanation": "Incorrect. Nystagmus is a phenytoin effect. This would be the correct answer if asked about phenytoin."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Yellow vision (xanthopsia) with GI upset in a patient on digoxin signals digoxin toxicity.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 30,
    "pdfQuote": "Yellow vision (halos)--Xanthopsia"
  },
  {
    "id": 27,
    "category": "Antiarrhythmics: Digoxin and Other Agents",
    "questionText": "Adenosine terminates paroxysmal supraventricular tachycardia through which receptor mechanism?",
    "options": [
      {
        "text": "A2-Gs signaling causing vasodilation and flushing",
        "explanation": "Incorrect. A2-Gs signaling causes flushing and hypotension. This would be the correct answer if asked about adenosine hypotension."
      },
      {
        "text": "A2B-Gq signaling in bronchi",
        "explanation": "Incorrect. A2B-Gq signaling causes bronchoconstriction. This would be the correct answer if asked about post-adenosine wheeze."
      },
      {
        "text": "Beta-1 receptor antagonism",
        "explanation": "Incorrect. Beta-1 antagonism is the Class II mechanism. This would be the correct answer if asked about atenolol."
      },
      {
        "text": "Phase 3 potassium channel block",
        "explanation": "Incorrect. Potassium channel block is the Class III mechanism. This would be the correct answer if asked about ibutilide."
      },
      {
        "text": "A1-Gi signaling, decreasing AV nodal action",
        "explanation": "Correct. A1 receptors couple to Gi, lowering adenylyl cyclase and cAMP and slowing SA and AV nodal activity within seconds. Its Gs and Gq effects explain flushing, hypotension and brief bronchoconstriction."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Adenosine ends PSVT through A1-Gi slowing of the AV node, with a half-life of seconds.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 32,
    "pdfQuote": "PSVT treatment"
  },
  {
    "id": 28,
    "category": "Antiarrhythmics: Digoxin and Other Agents",
    "questionText": "Magnesium treats torsades and digitalis-induced arrhythmias through which action?",
    "options": [
      {
        "text": "Binding and clearing free digoxin",
        "explanation": "Incorrect. Binding unabsorbed digoxin is the DigFab mechanism. This would be the correct answer if asked about Digibind."
      },
      {
        "text": "Stabilizing cardiac sodium channels",
        "explanation": "Incorrect. Sodium channel stabilization is the bicarbonate mechanism. This would be the correct answer if asked about TCA overdose."
      },
      {
        "text": "Blocking cardiac beta-1 receptors",
        "explanation": "Incorrect. Beta-1 blockade is the Class II mechanism. This would be the correct answer if asked about esmolol."
      },
      {
        "text": "Decreased calcium flux into the cytosol",
        "explanation": "Correct. Magnesium inhibits calcium influx into the cytosol, removing the calcium that drives digoxin-induced delayed afterdepolarizations. It is also the treatment for torsades de pointes."
      },
      {
        "text": "Prolonging the refractory period",
        "explanation": "Incorrect. Increasing refractoriness is an amiodarone action. This would be the correct answer if asked about amiodarone."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Magnesium treats torsades and digoxin arrhythmias by keeping calcium out of the cytosol.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 35,
    "pdfQuote": "Inhibits calcium flux into cytosol."
  },
  {
    "id": 29,
    "category": "Antiarrhythmics: Digoxin and Other Agents",
    "questionText": "Ivabradine slows the heart by blocking which current?",
    "options": [
      {
        "text": "Phase 3 potassium current",
        "explanation": "Incorrect. Blocking it prolongs repolarization. This would be the correct answer if asked about dronedarone."
      },
      {
        "text": "Phase 0 fast sodium current",
        "explanation": "Incorrect. Blocking it slows depolarization. This would be the correct answer if asked about propafenone."
      },
      {
        "text": "If, the SA node funny current",
        "explanation": "Correct. Ivabradine selectively blocks the funny current in the SA node, slowing the pacemaker without changing action potential duration or conduction. Bradycardia and phosphenes follow."
      },
      {
        "text": "Plateau L-type calcium current",
        "explanation": "Incorrect. Blocking it slows nodal conduction. This would be the correct answer if asked about Class IV drugs."
      },
      {
        "text": "Na+/Ca2+ exchange current",
        "explanation": "Incorrect. Exchange slows secondarily with digoxin. This would be the correct answer if asked about digoxin inotropy."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Ivabradine blocks the SA node funny current, lowering heart rate without altering repolarization or conduction.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 38,
    "pdfQuote": "Inhibits action in the SA node"
  },
  {
    "id": 30,
    "category": "Antiarrhythmics: Wolff-Parkinson-White",
    "questionText": "In Wolff-Parkinson-White syndrome with atrial fibrillation, which drug is appropriate?",
    "options": [
      {
        "text": "Verapamil, a nodal calcium blocker",
        "explanation": "Incorrect. Verapamil suppresses the AV node. This would be the correct answer if asked about SVT prevention."
      },
      {
        "text": "Procainamide, a Class Ia agent",
        "explanation": "Correct. Suppressing the AV node diverts impulses down the bundle of Kent, which has no filter. Procainamide or amiodarone is used instead of any AV node suppressant."
      },
      {
        "text": "Adenosine, a Gi-coupled nodal blocker",
        "explanation": "Incorrect. Adenosine suppresses the AV node. This would be the correct answer if asked about PSVT."
      },
      {
        "text": "Digoxin, a vagotonic glycoside",
        "explanation": "Incorrect. Digoxin suppresses the AV node vagally. This would be the correct answer if asked about heart failure."
      },
      {
        "text": "Esmolol, an ultra-short beta blocker",
        "explanation": "Incorrect. Esmolol suppresses the AV node. This would be the correct answer if asked about IV rate control."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Never give an AV node suppressant in WPW with atrial fibrillation; use procainamide or amiodarone.",
    "lectureSource": "CV85: Pharmacology of Antiarrhythmic Drugs",
    "pdfLecture": "CV85",
    "pdfPage": 39,
    "pdfQuote": "AV node suppressant not used"
  }
];

window.Test_CV85_Recall = Test_CV85_Recall;
