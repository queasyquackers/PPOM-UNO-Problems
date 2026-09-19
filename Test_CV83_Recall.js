// SET A - first-order recall items, in lecture order. File: Test_CV83_Recall.js
const Test_CV83_Recall = [
  {
    "id": 1,
    "category": "ECG Basics: Rate and Rhythm",
    "questionText": "An abnormal beat pattern at a normal heart rate, as in rate-controlled atrial fibrillation, is termed which of the following?",
    "options": [
      {
        "text": "Tachyarrhythmia, a fast abnormal rhythm",
        "explanation": "Incorrect. A tachyarrhythmia is defined by a rate above 100. This would be the correct answer if asked about fast rhythms."
      },
      {
        "text": "Arrhythmia, a lack of normal rhythm",
        "explanation": "Correct. Arrhythmia means loss of normal sinus rhythm and does not require an abnormal rate. Rate-controlled atrial fibrillation keeps a normal rate, whereas tachy- and bradyarrhythmia are defined by rate."
      },
      {
        "text": "Bradyarrhythmia, a slow abnormal rhythm",
        "explanation": "Incorrect. A bradyarrhythmia is defined by a rate below 60. This would be the correct answer if asked about slow rhythms."
      },
      {
        "text": "Artifact, a disruption in monitoring",
        "explanation": "Incorrect. Artifact is external noise, not cardiac activity. This would be the correct answer if asked about tremor or a loose electrode."
      },
      {
        "text": "Sinus tachycardia, a physiologic response",
        "explanation": "Incorrect. Sinus tachycardia is a fast sinus rhythm. This would be the correct answer if asked about pain or exercise."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: An arrhythmia is an abnormal rhythm and can exist at a normal heart rate.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 3,
    "pdfQuote": "Arrhythmia= lack of normal rhythm"
  },
  {
    "id": 2,
    "category": "ECG Basics: Rate and Rhythm",
    "questionText": "During a bradyarrhythmia, which compensatory change preserves cardiac output?",
    "options": [
      {
        "text": "Increased total peripheral resistance",
        "explanation": "Incorrect. Total peripheral resistance sets afterload, not output. This would be the correct answer if asked about afterload."
      },
      {
        "text": "Increased end-systolic volume",
        "explanation": "Incorrect. A larger end-systolic volume lowers stroke volume. This would be the correct answer if asked about systolic failure."
      },
      {
        "text": "Reduced ventricular filling time",
        "explanation": "Incorrect. Filling time shortens at fast rates. This would be the correct answer if asked about tachyarrhythmia."
      },
      {
        "text": "Increased stroke volume",
        "explanation": "Correct. Cardiac output equals stroke volume times heart rate, so when rate falls, stroke volume rises to maintain output. Symptoms appear when the heart lacks that reserve, as in heart failure."
      },
      {
        "text": "Faster ectopic atrial firing",
        "explanation": "Incorrect. Ectopic atrial firing causes PACs or atrial tachycardia. This would be the correct answer if asked about focal atrial tachycardia."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Because cardiac output equals stroke volume times heart rate, stroke volume rises to compensate when heart rate falls.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 4,
    "pdfQuote": "Why do we care about arrhythmias?"
  },
  {
    "id": 3,
    "category": "ECG Basics: Artifact",
    "questionText": "Respiratory movement during an ECG recording characteristically produces which type of artifact?",
    "options": [
      {
        "text": "Wandering baseline",
        "explanation": "Correct. Patient movement with breathing makes the baseline drift up and down, a wandering baseline. It is clinically insignificant, unlike fibrillatory waves, which signal atrial fibrillation."
      },
      {
        "text": "60 Hz interference pattern",
        "explanation": "Incorrect. A 60 Hz pattern comes from AC electrical interference. This would be the correct answer if asked about nearby electrical equipment."
      },
      {
        "text": "Loss of signal from a loose electrode",
        "explanation": "Incorrect. A loose electrode causes signal dropout. This would be the correct answer if asked about poor lead contact."
      },
      {
        "text": "Fine spikes from muscle tremor",
        "explanation": "Incorrect. Tremor causes fine irregular spikes. This would be the correct answer if asked about muscle contraction artifact."
      },
      {
        "text": "Fibrillatory baseline waves",
        "explanation": "Incorrect. Fibrillatory waves are true atrial activity in atrial fibrillation. This would be the correct answer if asked about absent P waves."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Breathing produces a wandering baseline, a clinically insignificant artifact that should not be mistaken for arrhythmia.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 5,
    "pdfQuote": "wandering baseline"
  },
  {
    "id": 4,
    "category": "Arrhythmia: Mechanisms",
    "questionText": "Torsades de pointes and ventricular fibrillation arise from which arrhythmia mechanism?",
    "options": [
      {
        "text": "Re-entry around a fixed circuit",
        "explanation": "Incorrect. Re-entry is an impulse looping back to re-excite its origin. This would be the correct answer if asked about AVNRT."
      },
      {
        "text": "Abnormal phase 4 automaticity",
        "explanation": "Incorrect. Automaticity is spontaneous pacemaker firing. This would be the correct answer if asked about inappropriate sinus tachycardia."
      },
      {
        "text": "Triggered activity from prolonged repolarization",
        "explanation": "Correct. Triggered activity follows a provocation such as hypoxia, electrolyte disturbance or a long QT that delays repolarization until an extra depolarization reaches threshold. Re-entry instead needs an impulse to loop back to its origin."
      },
      {
        "text": "Accessory pathway pre-excitation",
        "explanation": "Incorrect. Pre-excitation is early ventricular activation via a bypass tract. This would be the correct answer if asked about WPW."
      },
      {
        "text": "Dual AV nodal pathways",
        "explanation": "Incorrect. Dual nodal pathways form the AVNRT substrate. This would be the correct answer if asked about the fast-slow circuit."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Torsades and VF are triggered-activity emergencies, whereas AVNRT and AVRT are re-entry.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 8,
    "pdfQuote": "3 Mechanisms of Arrhythmias"
  },
  {
    "id": 5,
    "category": "Bradyarrhythmia: Sinus Bradycardia",
    "questionText": "Dizziness, pre-syncope and syncope in a bradyarrhythmia are explained by which mechanism?",
    "options": [
      {
        "text": "Pulmonary congestion from volume overload",
        "explanation": "Incorrect. Pulmonary congestion causes dyspnea in heart failure. This would be the correct answer if asked about edema and orthopnea."
      },
      {
        "text": "Adrenal catecholamine surge",
        "explanation": "Incorrect. A catecholamine surge speeds the heart. This would be the correct answer if asked about a cause of PVCs."
      },
      {
        "text": "Hypoxemia from pulmonary shunting",
        "explanation": "Incorrect. Shunting lowers arterial oxygen. This would be the correct answer if asked about a cause of multifocal atrial tachycardia."
      },
      {
        "text": "Artifact misread as a pause",
        "explanation": "Incorrect. Artifact is monitoring noise and causes no symptoms. This would be the correct answer if asked about loss-of-signal dropout."
      },
      {
        "text": "Reduced brain perfusion from low output",
        "explanation": "Correct. A slow rate can lower cardiac output and cerebral perfusion, producing dizziness, pre-syncope and syncope. Tachyarrhythmias cause the same symptoms, so the ECG rate, not the symptom, separates them."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Bradyarrhythmia symptoms are low-output symptoms, chiefly from reduced cerebral perfusion.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 11,
    "pdfQuote": "Dizziness, Lightheadedness"
  },
  {
    "id": 6,
    "category": "Bradyarrhythmia: Sinus Bradycardia",
    "questionText": "In any sinus rhythm, which finding precedes every QRS complex?",
    "options": [
      {
        "text": "A normal P wave",
        "explanation": "Correct. Sinus means the SA node drives each beat, so a normal P wave precedes every QRS. Ectopic atrial beats instead give early, abnormally shaped P waves."
      },
      {
        "text": "A retrograde inverted P wave",
        "explanation": "Incorrect. A retrograde P wave follows the QRS. This would be the correct answer if asked about AVNRT."
      },
      {
        "text": "A saw-tooth flutter wave",
        "explanation": "Incorrect. Flutter waves come from a right atrial circuit. This would be the correct answer if asked about atrial flutter."
      },
      {
        "text": "Chaotic fibrillatory squiggles",
        "explanation": "Incorrect. Fibrillatory waves replace P waves in atrial fibrillation. This would be the correct answer if asked about AF."
      },
      {
        "text": "A slurred delta upstroke",
        "explanation": "Incorrect. A delta wave is the slurred start of the QRS. This would be the correct answer if asked about WPW."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Whenever a rhythm is called sinus, a normal P wave precedes every QRS complex.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 12,
    "pdfQuote": "normal p wave precedes every QRS"
  },
  {
    "id": 7,
    "category": "Bradyarrhythmia: Sinus Bradycardia",
    "questionText": "Asymptomatic sinus bradycardia in endurance-trained athletes results from which mechanism?",
    "options": [
      {
        "text": "Intrinsic sinus node degeneration",
        "explanation": "Incorrect. Sinus node degeneration of aging is sick sinus syndrome. This would be the correct answer if asked about a pathologic cause."
      },
      {
        "text": "Beta-blocker effect on the SA node",
        "explanation": "Incorrect. Beta blockers are a drug cause. This would be the correct answer if asked about the most common clinical cause."
      },
      {
        "text": "Delayed AV nodal conduction",
        "explanation": "Incorrect. AV nodal delay prolongs the PR interval. This would be the correct answer if asked about AV block."
      },
      {
        "text": "Increased vagal tone",
        "explanation": "Correct. Training raises parasympathetic vagal tone, lowering resting rate without symptoms, so it is usually not pathologic. Sick sinus syndrome, by contrast, is intrinsic sinus node disease of aging."
      },
      {
        "text": "Accelerated junctional pacemaker",
        "explanation": "Incorrect. An accelerated junctional rhythm is abnormal automaticity. This would be the correct answer if asked about AV node outpacing."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Bradycardia in athletes and during sleep reflects increased vagal tone and is usually benign when asymptomatic.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 13,
    "pdfQuote": "Common in athletes and during sleep"
  },
  {
    "id": 8,
    "category": "Bradyarrhythmia: Sinus Bradycardia",
    "questionText": "Symptomatic sinus bradycardia with unstable vital signs and no known cause is first treated with which drug?",
    "options": [
      {
        "text": "Adenosine, an AV nodal blocker",
        "explanation": "Incorrect. Adenosine transiently blocks the AV node. This would be the correct answer if asked about stable AVNRT."
      },
      {
        "text": "Atropine, an antimuscarinic",
        "explanation": "Correct. Atropine blocks cardiac M2 muscarinic receptors, removing vagal slowing of the sinus node. A pacemaker is reserved for recurrent symptomatic sinus bradycardia."
      },
      {
        "text": "Metoprolol, a beta blocker",
        "explanation": "Incorrect. Metoprolol slows the heart further. This would be the correct answer if asked about AF rate control."
      },
      {
        "text": "Procainamide, a class I antiarrhythmic",
        "explanation": "Incorrect. Procainamide slows accessory pathway conduction. This would be the correct answer if asked about symptomatic WPW."
      },
      {
        "text": "Magnesium sulfate, an electrolyte",
        "explanation": "Incorrect. IV magnesium stabilizes repolarization. This would be the correct answer if asked about torsades de pointes."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Unstable symptomatic sinus bradycardia gets atropine first; recurrent symptomatic sinus bradycardia gets a pacemaker.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 13,
    "pdfQuote": "Atropine, if the vitals signs are unstable"
  },
  {
    "id": 9,
    "category": "Tachyarrhythmias: Algorithm and SVT",
    "questionText": "A tachyarrhythmia with a narrow QRS complex most likely originates from which location?",
    "options": [
      {
        "text": "Ventricular myocardium",
        "explanation": "Incorrect. Ventricular myocardium generates wide complexes. This would be the correct answer if asked about ventricular tachycardia."
      },
      {
        "text": "Purkinje fibers of the ventricles",
        "explanation": "Incorrect. A Purkinje origin still spreads abnormally and widens the QRS. This would be the correct answer if asked about wide-complex rhythms."
      },
      {
        "text": "A single ventricular ectopic focus",
        "explanation": "Incorrect. A single ventricular focus gives uniform wide complexes. This would be the correct answer if asked about monomorphic VT."
      },
      {
        "text": "The interventricular septum",
        "explanation": "Incorrect. The septum is ventricular tissue. This would be the correct answer if asked where the His bundle branches."
      },
      {
        "text": "Above the ventricles, atria or AV node",
        "explanation": "Correct. A narrow QRS means the ventricles still depolarize through the normal His-Purkinje system, so the problem lies above them. A wide QRS instead points to a ventricular origin."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Narrow QRS means supraventricular origin; wide QRS means ventricular origin.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 15,
    "pdfQuote": "Algorithm for Arrhythmias!"
  },
  {
    "id": 10,
    "category": "Tachyarrhythmias: Algorithm and SVT",
    "questionText": "Sinus tachycardia from pain, anemia or pulmonary embolism is managed primarily by which approach?",
    "options": [
      {
        "text": "Intravenous adenosine push",
        "explanation": "Incorrect. Adenosine blocks the AV node. This would be the correct answer if asked about terminating AVNRT."
      },
      {
        "text": "Rate control with a beta blocker",
        "explanation": "Incorrect. Beta blockers slow ventricular response. This would be the correct answer if asked about AF rate control."
      },
      {
        "text": "Correcting the underlying cause",
        "explanation": "Correct. Sinus tachycardia is a physiologic response, so treatment is finding and correcting its cause; in pulmonary embolism it is often the first sign. AV nodal maneuvers and drugs target re-entry, not a sinus response."
      },
      {
        "text": "Synchronized electrical cardioversion",
        "explanation": "Incorrect. Cardioversion resets organized tachyarrhythmias. This would be the correct answer if asked about unstable VT."
      },
      {
        "text": "Vagal maneuvers to slow the node",
        "explanation": "Incorrect. Vagal maneuvers slow AV nodal conduction. This would be the correct answer if asked about first-line AVNRT therapy."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Sinus tachycardia is a response, not a disease; treat the underlying cause such as pain, anemia or pulmonary embolism.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 18,
    "pdfQuote": "identification of the underlying cause"
  },
  {
    "id": 11,
    "category": "Tachyarrhythmias: Algorithm and SVT",
    "questionText": "A premature atrial contraction shows which characteristic P-wave finding?",
    "options": [
      {
        "text": "No P waves before the QRS",
        "explanation": "Incorrect. Absent P waves mark atrial fibrillation. This would be the correct answer if asked about an irregularly irregular rhythm."
      },
      {
        "text": "An early P wave with abnormal morphology",
        "explanation": "Correct. A PAC arises from an atrial site other than the sinus node, so its P wave comes early with a different shape, sometimes buried in the T wave. Three or more P shapes instead define multifocal atrial tachycardia."
      },
      {
        "text": "Three or more distinct P shapes",
        "explanation": "Incorrect. Multiple P morphologies define multifocal atrial tachycardia. This would be the correct answer if asked about MAT."
      },
      {
        "text": "Retrograde P after the QRS",
        "explanation": "Incorrect. A retrograde P wave reflects re-entry through the AV node. This would be the correct answer if asked about AVNRT."
      },
      {
        "text": "Regular saw-tooth atrial waves",
        "explanation": "Incorrect. Saw-tooth waves come from a right atrial macro-re-entry. This would be the correct answer if asked about flutter."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: A PAC is an early, differently shaped P wave from an ectopic atrial site, felt as a skipped beat.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 19,
    "pdfQuote": "Premature activation of the atria"
  },
  {
    "id": 12,
    "category": "Tachyarrhythmias: Algorithm and SVT",
    "questionText": "Focal atrial tachycardia most commonly originates from which site?",
    "options": [
      {
        "text": "The left atrium, away from the SA node",
        "explanation": "Correct. Focal atrial tachycardia is a regular atrial rhythm over 100 bpm from one ectopic focus, most commonly in the left atrium. Adenosine can reveal the underlying atrial activity."
      },
      {
        "text": "The sinoatrial node",
        "explanation": "Incorrect. The SA node drives sinus rhythms. This would be the correct answer if asked about sinus tachycardia."
      },
      {
        "text": "The right atrial isthmus",
        "explanation": "Incorrect. The isthmus carries the flutter circuit. This would be the correct answer if asked about atrial flutter."
      },
      {
        "text": "The AV nodal slow pathway",
        "explanation": "Incorrect. The slow pathway is part of the AVNRT circuit. This would be the correct answer if asked about AVNRT."
      },
      {
        "text": "The right ventricular outflow tract",
        "explanation": "Incorrect. The outflow tract is ventricular tissue. This would be the correct answer if asked about a wide-complex focus."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Focal atrial tachycardia is one ectopic atrial focus, usually in the left atrium, firing regularly above 100 bpm.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 21,
    "pdfQuote": "Specific atrial focus is firing"
  },
  {
    "id": 13,
    "category": "Re-entry: AVNRT and AVRT",
    "questionText": "Which arrhythmia is the most common type of paroxysmal supraventricular tachycardia?",
    "options": [
      {
        "text": "Focal atrial tachycardia",
        "explanation": "Incorrect. Focal atrial tachycardia is a single ectopic focus. This would be the correct answer if asked about a left atrial focus."
      },
      {
        "text": "Multifocal atrial tachycardia",
        "explanation": "Incorrect. MAT comes from many atrial foci. This would be the correct answer if asked about COPD-associated tachycardia."
      },
      {
        "text": "AV reentrant tachycardia via a bypass tract",
        "explanation": "Incorrect. AVRT loops through an accessory pathway. This would be the correct answer if asked about WPW."
      },
      {
        "text": "AV nodal reentrant tachycardia",
        "explanation": "Correct. AVNRT, a re-entrant circuit within the AV node, is the most common paroxysmal SVT. AVRT also uses re-entry but loops through an accessory pathway between atria and ventricles."
      },
      {
        "text": "Sinus tachycardia from exertion",
        "explanation": "Incorrect. Exertional sinus tachycardia is physiologic. This would be the correct answer if asked about a normal response."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: AVNRT is the most common paroxysmal SVT and is a re-entry circuit within the AV node.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 22,
    "pdfQuote": "Most common type of paroxysmal SVT"
  },
  {
    "id": 14,
    "category": "Re-entry: AVNRT and AVRT",
    "questionText": "Because the AVNRT circuit runs through the AV node, acute termination targets which effect?",
    "options": [
      {
        "text": "Faster conduction down the fast pathway",
        "explanation": "Incorrect. Speeding the fast pathway would not break the loop. This would be the correct answer if asked about normal sinus conduction."
      },
      {
        "text": "Enhanced sinus node automaticity",
        "explanation": "Incorrect. Sinus automaticity sets normal rate. This would be the correct answer if asked what atropine produces."
      },
      {
        "text": "Shortened ventricular refractory period",
        "explanation": "Incorrect. Ventricular refractoriness is outside the circuit. This would be the correct answer if asked about ventricular arrhythmia risk."
      },
      {
        "text": "Suppressed atrial ectopic foci",
        "explanation": "Incorrect. Ectopic foci drive focal or multifocal atrial tachycardia. This would be the correct answer if asked about MAT therapy."
      },
      {
        "text": "Reduced AV nodal conduction",
        "explanation": "Correct. Vagal maneuvers such as carotid sinus massage or Valsalva, then adenosine, slow or block AV nodal conduction and break the loop. Long-term treatment of choice is ablation."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Any rhythm that depends on the AV node is broken by blocking the node with vagal maneuvers or adenosine.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 22,
    "pdfQuote": "must be disabled in order to"
  },
  {
    "id": 15,
    "category": "Re-entry: AVNRT and AVRT",
    "questionText": "In typical AVNRT initiation, a premature atrial impulse travels down the slow pathway because the fast pathway is in which state?",
    "options": [
      {
        "text": "Conducting too slowly to compete",
        "explanation": "Incorrect. The fast pathway conducts rapidly. This would be the correct answer if asked about the slow pathway."
      },
      {
        "text": "Anatomically absent in most people",
        "explanation": "Incorrect. Nearly half the population has dual pathways. This would be the correct answer if asked about lacking the substrate."
      },
      {
        "text": "Refractory, from its prolonged recovery period",
        "explanation": "Correct. The fast pathway conducts quickly but has a long refractory period, so a premature beat is blocked there and goes down the short-refractory slow pathway, lengthening the PR. It then returns up the recovered fast pathway."
      },
      {
        "text": "Bypassed by an accessory tract",
        "explanation": "Incorrect. An accessory tract forms the AVRT circuit. This would be the correct answer if asked about WPW."
      },
      {
        "text": "Depolarized early by the sinus node",
        "explanation": "Incorrect. Sinus depolarization is normal conduction. This would be the correct answer if asked about sinus rhythm."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: A PAC starts AVNRT by meeting a refractory fast pathway, conducting down the slow pathway, and returning up the fast one.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 23,
    "pdfQuote": "Short RP Long RP Short RP"
  },
  {
    "id": 16,
    "category": "Re-entry: AVNRT and AVRT",
    "questionText": "AV reentrant tachycardia differs from AVNRT because its circuit includes which structure?",
    "options": [
      {
        "text": "An accessory link between atria and ventricles",
        "explanation": "Correct. AVRT is macro-re-entry through the AV node and an accessory pathway, so a retrograde P wave follows the QRS. AVNRT is the micro version confined to two pathways within the AV node."
      },
      {
        "text": "Two pathways inside the AV node",
        "explanation": "Incorrect. Dual nodal pathways are the AVNRT substrate. This would be the correct answer if asked about AVNRT."
      },
      {
        "text": "Multiple atrial ectopic foci",
        "explanation": "Incorrect. Multiple foci cause multifocal atrial tachycardia. This would be the correct answer if asked about MAT."
      },
      {
        "text": "The pulmonary vein ostia",
        "explanation": "Incorrect. The pulmonary veins are the usual AF trigger. This would be the correct answer if asked about atrial fibrillation."
      },
      {
        "text": "A ventricular aneurysm scar",
        "explanation": "Incorrect. Scar supports ventricular re-entry. This would be the correct answer if asked about monomorphic VT."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: AVRT is re-entry through the AV node plus an accessory atrioventricular pathway; AVNRT stays within the AV node.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 25,
    "pdfQuote": "abnormal connection between the atria and ventricles"
  },
  {
    "id": 17,
    "category": "Re-entry: AVNRT and AVRT",
    "questionText": "In Wolff-Parkinson-White syndrome, the accessory atrioventricular pathway is known by which name?",
    "options": [
      {
        "text": "The bundle of His",
        "explanation": "Incorrect. The His bundle is normal conduction tissue. This would be the correct answer if asked about PVC origin."
      },
      {
        "text": "The right bundle branch",
        "explanation": "Incorrect. The right bundle branch is normal conduction tissue. This would be the correct answer if asked about right ventricular activation."
      },
      {
        "text": "The Purkinje network",
        "explanation": "Incorrect. Purkinje fibers spread ventricular depolarization. This would be the correct answer if asked about final ventricular conduction."
      },
      {
        "text": "The AV nodal fast pathway",
        "explanation": "Incorrect. The fast pathway lies within the AV node. This would be the correct answer if asked about the AVNRT circuit."
      },
      {
        "text": "The Bundle of Kent",
        "explanation": "Correct. The Bundle of Kent is the AV bypass tract of WPW; it lets impulses skip the AV node and pre-excite the ventricles. Catheter ablation of this pathway is definitive treatment."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: The WPW accessory pathway is the Bundle of Kent, and ablating it is the definitive cure.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 28,
    "pdfQuote": "referred to as the Bundle of Kent"
  },
  {
    "id": 18,
    "category": "Re-entry: AVNRT and AVRT",
    "questionText": "Ventricular pre-excitation through an accessory pathway produces which ECG finding?",
    "options": [
      {
        "text": "Saw-tooth waves in the inferior leads",
        "explanation": "Incorrect. Inferior saw-tooth waves are flutter waves. This would be the correct answer if asked about atrial flutter."
      },
      {
        "text": "Shortened PR with a slurred QRS upstroke",
        "explanation": "Correct. Bypassing AV nodal delay shortens the PR below 0.12 seconds, and early ventricular activation slurs the QRS onset into a delta wave. The QRS widens beyond 120 ms when pre-excited."
      },
      {
        "text": "Lengthening PR with dropped beats",
        "explanation": "Incorrect. Progressive PR lengthening reflects AV nodal block. This would be the correct answer if asked about AV block."
      },
      {
        "text": "Retrograde P waves buried in the QRS",
        "explanation": "Incorrect. Buried P waves reflect simultaneous atrial and ventricular activation. This would be the correct answer if asked about AVNRT."
      },
      {
        "text": "Twisting QRS axis around the baseline",
        "explanation": "Incorrect. A twisting axis is polymorphic VT. This would be the correct answer if asked about torsades de pointes."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: WPW shows a short PR, a delta wave and a wide QRS because the accessory pathway bypasses AV nodal delay.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 29,
    "pdfQuote": "slurring slow rise of initial portion"
  },
  {
    "id": 19,
    "category": "Re-entry: AVNRT and AVRT",
    "questionText": "In WPW, AV-nodal suppressing drugs are avoided because blocking the node causes which effect?",
    "options": [
      {
        "text": "Worsened sinus bradycardia",
        "explanation": "Incorrect. Sinus slowing is a nuisance, not the danger. This would be the correct answer if asked about beta blockers in athletes."
      },
      {
        "text": "QT prolongation with torsades",
        "explanation": "Incorrect. QT prolongation precedes torsades de pointes. This would be the correct answer if asked about QT-prolonging drugs."
      },
      {
        "text": "Heightened stroke risk from atrial stasis",
        "explanation": "Incorrect. Atrial stasis drives AF-related stroke. This would be the correct answer if asked about anticoagulation in AF."
      },
      {
        "text": "Increased conduction down the accessory pathway",
        "explanation": "Correct. With the AV node blocked, impulses travel unopposed down the accessory pathway, raising the risk of unrestricted rapid ventricular firing. Procainamide or cardioversion is used instead; catheter ablation is definitive."
      },
      {
        "text": "Complete heart block with asystole",
        "explanation": "Incorrect. Complete block is a bradyarrhythmia of the AV node. This would be the correct answer if asked about AV blocks."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: In WPW, never block the AV node; it pushes conduction down the accessory pathway.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 29,
    "pdfQuote": "Meds: Procainamide"
  },
  {
    "id": 20,
    "category": "Atrial Arrhythmias: Fibrillation",
    "questionText": "Which rhythm description defines atrial fibrillation on ECG?",
    "options": [
      {
        "text": "Regular narrow complexes with retrograde P",
        "explanation": "Incorrect. Regular complexes with retrograde P waves suggest AVNRT. This would be the correct answer if asked about AVNRT."
      },
      {
        "text": "Early beats with abnormal P shapes",
        "explanation": "Incorrect. Early odd-shaped P waves are PACs. This would be the correct answer if asked about premature atrial contractions."
      },
      {
        "text": "Irregularly irregular with no P waves",
        "explanation": "Correct. Chaotic firing from multiple atrial foci leaves no organized P wave, only fibrillatory waves, and R-R intervals with no pattern. Multifocal atrial tachycardia is also irregular but shows distinct P waves."
      },
      {
        "text": "Regularly irregular with 2:1 flutter waves",
        "explanation": "Incorrect. Flutter waves with fixed block describe atrial flutter. This would be the correct answer if asked about flutter."
      },
      {
        "text": "Irregular with three P-wave morphologies",
        "explanation": "Incorrect. Three P morphologies define multifocal atrial tachycardia. This would be the correct answer if asked about MAT."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Atrial fibrillation is irregularly irregular with no P waves and an unmeasurable PR interval.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 32,
    "pdfQuote": "Rhythm: irregularly irregular"
  },
  {
    "id": 21,
    "category": "Atrial Arrhythmias: Fibrillation",
    "questionText": "The definitive catheter ablation procedure for atrial fibrillation is which of the following?",
    "options": [
      {
        "text": "AV nodal slow-pathway ablation",
        "explanation": "Incorrect. Slow-pathway ablation cures a nodal re-entry circuit. This would be the correct answer if asked about AVNRT."
      },
      {
        "text": "Accessory tract ablation",
        "explanation": "Incorrect. Accessory tract ablation removes the Bundle of Kent. This would be the correct answer if asked about WPW."
      },
      {
        "text": "Isthmus ablation between IVC and tricuspid valve",
        "explanation": "Incorrect. Isthmus ablation interrupts the flutter circuit. This would be the correct answer if asked about atrial flutter."
      },
      {
        "text": "Pulmonary vein isolation",
        "explanation": "Correct. AF usually starts from foci where the pulmonary veins join the left atrium, so ablation electrically isolates them. Flutter ablation instead targets the cavo-tricuspid isthmus."
      },
      {
        "text": "Implantable defibrillator placement",
        "explanation": "Incorrect. An ICD treats ventricular fibrillation risk. This would be the correct answer if asked about VF without a reversible cause."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Pulmonary vein isolation is the definitive ablation for atrial fibrillation.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 34,
    "pdfQuote": "Pulmonary vein isolation"
  },
  {
    "id": 22,
    "category": "Atrial Arrhythmias: Fibrillation",
    "questionText": "In nonvalvular atrial fibrillation, a thromboembolic risk score of 2 or more calls for which management?",
    "options": [
      {
        "text": "Anticoagulation for higher stroke risk",
        "explanation": "Correct. A score of 2 or more is moderate-high risk and warrants an anticoagulant, whereas a score of 1 allows antiplatelet or anticoagulant therapy. Valvular AF is anticoagulated regardless of score."
      },
      {
        "text": "Antiplatelet therapy with aspirin alone",
        "explanation": "Incorrect. Antiplatelet therapy is an option at low-moderate risk. This would be the correct answer if asked about a score of 1."
      },
      {
        "text": "No antithrombotic therapy",
        "explanation": "Incorrect. Withholding therapy fits low risk. This would be the correct answer if asked about a score of 0."
      },
      {
        "text": "Rate control without antithrombotics",
        "explanation": "Incorrect. Rate control alone ignores stroke risk. This would be the correct answer if asked about symptom control only."
      },
      {
        "text": "Immediate electrical cardioversion",
        "explanation": "Incorrect. Cardioversion is for emergent unstable AF. This would be the correct answer if asked about hemodynamic instability."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: In nonvalvular AF, a CHA2DS2-VASc score of 2 or more means anticoagulate; valvular AF is always anticoagulated.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 36,
    "pdfQuote": "antiplatelet or"
  },
  {
    "id": 23,
    "category": "Atrial Arrhythmias: Flutter and MAT",
    "questionText": "In atrial flutter with a constant atrial rate, a greater degree of AV block has what effect?",
    "options": [
      {
        "text": "Ventricular rate rises toward the atrial rate",
        "explanation": "Incorrect. The ventricular rate rises only as block lessens. This would be the correct answer if asked about 1:1 conduction."
      },
      {
        "text": "Ventricular rhythm becomes irregularly irregular",
        "explanation": "Incorrect. Irregularly irregular rhythm is atrial fibrillation. This would be the correct answer if asked about AF."
      },
      {
        "text": "Ventricular rate falls proportionally",
        "explanation": "Correct. The flutter circuit fixes the atrial rate near 300, and the AV conduction ratio sets how many impulses reach the ventricles. At 2:1 the ventricular rate is about 150; a higher ratio lowers it."
      },
      {
        "text": "Ventricular complexes widen",
        "explanation": "Incorrect. Wide complexes mean ventricular origin or aberrancy. This would be the correct answer if asked about VT."
      },
      {
        "text": "Ventricular rate doubles with each flutter wave",
        "explanation": "Incorrect. Ventricular rate cannot exceed atrial rate. This would be the correct answer if asked about a misconception of flutter."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: In atrial flutter, the AV conduction ratio sets the ventricular rate; 2:1 block gives about 150 bpm.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 37,
    "pdfQuote": "Ventricular rate is determined by the AV conduction ratio"
  },
  {
    "id": 24,
    "category": "Atrial Arrhythmias: Flutter and MAT",
    "questionText": "Atrial flutter produces which characteristic atrial waveform in the inferior leads?",
    "options": [
      {
        "text": "Chaotic low-amplitude squiggles",
        "explanation": "Incorrect. Chaotic squiggles are fibrillatory waves. This would be the correct answer if asked about atrial fibrillation."
      },
      {
        "text": "Discrete P waves of varying shape",
        "explanation": "Incorrect. Varying discrete P waves suggest multiple foci. This would be the correct answer if asked about MAT."
      },
      {
        "text": "Inverted P waves after each QRS",
        "explanation": "Incorrect. Inverted P waves after the QRS are retrograde. This would be the correct answer if asked about AVRT."
      },
      {
        "text": "Upright sinus P waves preceding each QRS",
        "explanation": "Incorrect. Upright P waves before each QRS mean sinus rhythm. This would be the correct answer if asked about sinus tachycardia."
      },
      {
        "text": "Saw-tooth waves without a flat baseline",
        "explanation": "Correct. The right atrial macro-re-entry produces continuous saw-tooth flutter waves with loss of the isoelectric baseline, best seen in II, III and aVF. Atrial fibrillation instead shows irregular fibrillatory waves."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Atrial flutter shows saw-tooth flutter waves in II, III and aVF with loss of the isoelectric baseline.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 39,
    "pdfQuote": "Loss of the isoelectric baseline"
  },
  {
    "id": 25,
    "category": "Atrial Arrhythmias: Flutter and MAT",
    "questionText": "The definitive ablation target for recurrent atrial flutter lies at which anatomic site?",
    "options": [
      {
        "text": "Where the pulmonary veins join the left atrium",
        "explanation": "Incorrect. The pulmonary vein junction is the AF source. This would be the correct answer if asked about atrial fibrillation."
      },
      {
        "text": "Cavo-tricuspid isthmus, lower right atrium",
        "explanation": "Correct. The flutter circuit runs through the isthmus between the IVC and tricuspid valve, so ablating it is curative. Pulmonary vein isolation is the AF procedure, and Bundle of Kent ablation treats WPW."
      },
      {
        "text": "Along the right ventricular free wall",
        "explanation": "Incorrect. The right ventricular wall houses the Bundle of Kent. This would be the correct answer if asked about WPW."
      },
      {
        "text": "Within the compact AV node",
        "explanation": "Incorrect. The AV node holds the AVNRT pathways. This would be the correct answer if asked about AVNRT."
      },
      {
        "text": "At the left atrial appendage",
        "explanation": "Incorrect. The appendage is where AF thrombus forms. This would be the correct answer if asked about stroke risk."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Atrial flutter is cured by ablating the cavo-tricuspid isthmus; atrial fibrillation by isolating the pulmonary veins.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 40,
    "pdfQuote": "Ablation of the Cavo-tricuspid isthmus"
  },
  {
    "id": 26,
    "category": "Atrial Arrhythmias: Flutter and MAT",
    "questionText": "Multifocal atrial tachycardia is distinguished from atrial fibrillation by which ECG finding?",
    "options": [
      {
        "text": "Absent P waves with fibrillatory baseline",
        "explanation": "Incorrect. A fibrillatory baseline without P waves is atrial fibrillation. This would be the correct answer if asked about AF."
      },
      {
        "text": "Regular rhythm from a single focus",
        "explanation": "Incorrect. One regular ectopic focus is focal atrial tachycardia. This would be the correct answer if asked about FAT."
      },
      {
        "text": "Retrograde P waves after the QRS",
        "explanation": "Incorrect. Retrograde P waves come from re-entry. This would be the correct answer if asked about AVNRT or AVRT."
      },
      {
        "text": "Saw-tooth waves at about 300 per minute",
        "explanation": "Incorrect. Saw-tooth waves near 300 per minute are flutter. This would be the correct answer if asked about atrial flutter."
      },
      {
        "text": "At least three distinct P-wave shapes",
        "explanation": "Correct. MAT comes from numerous atrial foci firing intermittently, so at least three P-wave morphologies appear with a variable PR. Atrial fibrillation shows no discrete P waves, only fibrillatory waves."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Three or more P-wave morphologies in an irregular tachycardia mean MAT, classically with COPD.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 41,
    "pdfQuote": "Numerous atrial foci fire intermittently"
  },
  {
    "id": 27,
    "category": "Ventricular Arrhythmias: PVC to VF",
    "questionText": "A premature ventricular contraction produces which ECG appearance?",
    "options": [
      {
        "text": "Narrow QRS preceded by an early P wave",
        "explanation": "Incorrect. An early P wave with a narrow QRS is a PAC. This would be the correct answer if asked about PACs."
      },
      {
        "text": "Short PR with an early delta wave",
        "explanation": "Incorrect. A short PR with a delta wave is pre-excitation. This would be the correct answer if asked about WPW."
      },
      {
        "text": "Prolonged QRS without a preceding P wave",
        "explanation": "Correct. PVCs originate below the branching point of the bundle of His, so depolarization spreads cell to cell and widens the QRS without a preceding P wave. They need treatment only if frequent, patterned, MI-related or symptomatic."
      },
      {
        "text": "Chaotic undulations without discrete QRS",
        "explanation": "Incorrect. Chaotic undulations are ventricular fibrillation. This would be the correct answer if asked about VF."
      },
      {
        "text": "Uniform wide complexes in a sustained run",
        "explanation": "Incorrect. A sustained uniform run is monomorphic VT. This would be the correct answer if asked about ventricular tachycardia."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: A PVC arises below the His bifurcation, giving a wide QRS with no preceding P wave.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 44,
    "pdfQuote": "Ectopic beats that originate below the branching point"
  },
  {
    "id": 28,
    "category": "Ventricular Arrhythmias: PVC to VF",
    "questionText": "Symptomatic, unstable monomorphic ventricular tachycardia is treated first with which intervention?",
    "options": [
      {
        "text": "Electrical cardioversion",
        "explanation": "Correct. Unstable monomorphic VT needs electrical cardioversion, with amiodarone or lidocaine as drug options. Untreated VT can degenerate into ventricular fibrillation, which needs immediate defibrillation."
      },
      {
        "text": "Intravenous adenosine bolus",
        "explanation": "Incorrect. Adenosine blocks the AV node. This would be the correct answer if asked about stable narrow re-entrant tachycardia."
      },
      {
        "text": "Carotid sinus massage",
        "explanation": "Incorrect. Carotid massage is a vagal maneuver. This would be the correct answer if asked about first-line AVNRT termination."
      },
      {
        "text": "Oral verapamil therapy",
        "explanation": "Incorrect. Verapamil is a calcium channel blocker. This would be the correct answer if asked about multifocal atrial tachycardia."
      },
      {
        "text": "Observation on telemetry",
        "explanation": "Incorrect. Observation suits benign ectopy. This would be the correct answer if asked about occasional asymptomatic PVCs."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Unstable monomorphic VT gets electrical cardioversion, then amiodarone or lidocaine.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 45,
    "pdfQuote": "Symptomatic/Unstable: electrical cardioversion"
  },
  {
    "id": 29,
    "category": "Ventricular Arrhythmias: PVC to VF",
    "questionText": "Ventricular fibrillation demands immediate defibrillation because of which hemodynamic consequence?",
    "options": [
      {
        "text": "Mild hypotension from rapid rate",
        "explanation": "Incorrect. Mild hypotension can accompany any tachycardia. This would be the correct answer if asked about stable SVT."
      },
      {
        "text": "Cardiac output falls to nothing",
        "explanation": "Correct. Chaotic ventricular depolarization produces no coordinated contraction, so cardiac output is lost. Immediate defibrillation and ACLS are required, then treatment of the cause, usually an acute MI."
      },
      {
        "text": "Left atrial thrombus formation",
        "explanation": "Incorrect. Left atrial thrombus follows atrial stasis. This would be the correct answer if asked about atrial fibrillation."
      },
      {
        "text": "Pulmonary vein triggered atrial chaos",
        "explanation": "Incorrect. Pulmonary vein triggers start atrial fibrillation. This would be the correct answer if asked about AF origin."
      },
      {
        "text": "Retrograde atrial activation",
        "explanation": "Incorrect. Retrograde atrial activation occurs in re-entrant SVT. This would be the correct answer if asked about AVRT."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Ventricular fibrillation abolishes cardiac output, so immediate defibrillation comes before anything else.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 46,
    "pdfQuote": "causes the absence of cardiac output"
  },
  {
    "id": 30,
    "category": "Ventricular Arrhythmias: PVC to VF",
    "questionText": "What is the first-line acute treatment for torsades de pointes in a stable patient?",
    "options": [
      {
        "text": "Intravenous lidocaine",
        "explanation": "Incorrect. Lidocaine is a VT drug option. This would be the correct answer if asked about monomorphic VT pharmacotherapy."
      },
      {
        "text": "Adenosine rapid push",
        "explanation": "Incorrect. Adenosine blocks the AV node. This would be the correct answer if asked about AVNRT."
      },
      {
        "text": "Oral metoprolol",
        "explanation": "Incorrect. Metoprolol is a rate-control beta blocker. This would be the correct answer if asked about AF rate control."
      },
      {
        "text": "Intravenous magnesium",
        "explanation": "Correct. IV magnesium is first line because hypomagnesemia is among the most common causes of this QT-related polymorphic VT. Synchronized cardioversion is reserved for instability."
      },
      {
        "text": "Digoxin loading dose",
        "explanation": "Incorrect. Digoxin is an AF rate-control drug. This would be the correct answer if asked about AF with heart failure."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Torsades de pointes is treated first with IV magnesium; cardiovert if unstable.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 47,
    "pdfQuote": "IV Magnesium, IV Potassium"
  }
];

window.Test_CV83_Recall = Test_CV83_Recall;
