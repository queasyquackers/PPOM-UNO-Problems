// SET B - board-style items on the same lecture. File: Test_CV83_Boards.js
const Test_CV83_Boards = [
  {
    "id": 1,
    "category": "Cardiology: Bradyarrhythmias",
    "questionText": "A 24-year-old man who runs marathons comes for a preparticipation examination. He has no symptoms. His pulse is 44/min. ECG shows a normal P wave before every QRS complex with normal intervals. Compared with an untrained adult at rest, which set of findings is most likely in this patient?",
    "options": [
      {
        "text": "Vagal tone lower, stroke volume higher, cardiac output higher",
        "explanation": "Incorrect. Reduced vagal tone would speed the sinus node rather than slow it to 44/min, and output need not rise at rest. This would be the correct answer if this runner were measured during exercise."
      },
      {
        "text": "Vagal tone higher, stroke volume lower, cardiac output lower",
        "explanation": "Incorrect. A falling stroke volume and output would cause dizziness or syncope, yet he is asymptomatic. This would be the correct answer if a patient with heart failure had symptomatic sinus bradycardia."
      },
      {
        "text": "Vagal tone higher, stroke volume higher, cardiac output maintained",
        "explanation": "Correct. Asymptomatic sinus bradycardia in a trained athlete reflects increased vagal tone. Because cardiac output equals stroke volume times heart rate, stroke volume rises to hold output steady at the slower rate. A falling stroke volume would instead produce low-output symptoms, which he lacks."
      },
      {
        "text": "Vagal tone lower, stroke volume lower, cardiac output maintained",
        "explanation": "Incorrect. Reduced vagal tone cannot explain a resting pulse of 44/min. This would be the correct answer if a patient with a failing ventricle were maintaining output through sympathetic drive."
      },
      {
        "text": "Vagal tone higher, stroke volume unchanged, cardiac output lower",
        "explanation": "Incorrect. Without a rise in stroke volume, output would fall at this rate and he would have low-output symptoms. This would be the correct answer if drug-induced bradycardia caused lightheadedness and fatigue."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Asymptomatic athletic bradycardia reflects high vagal tone, with stroke volume rising to keep cardiac output steady.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 13,
    "pdfQuote": "Common in athletes and during sleep"
  },
  {
    "id": 2,
    "category": "Cardiology: Bradyarrhythmias",
    "questionText": "A 71-year-old man is brought to the emergency department after nearly fainting. He is dizzy and diaphoretic and takes no medications. Pulse is 36/min, and blood pressure is 78/44 mm Hg. ECG shows a normal P wave before each narrow QRS complex with a normal PR interval. Which of the following is the most appropriate initial treatment?",
    "options": [
      {
        "text": "Intravenous atropine",
        "explanation": "Correct. Symptomatic sinus bradycardia with hypotension and no reversible cause such as a rate-slowing drug calls for atropine first. Atropine is an antimuscarinic that blocks cardiac M2 receptors and removes vagal slowing. A pacemaker is reserved for recurrent symptomatic episodes, not this first unstable presentation."
      },
      {
        "text": "Intravenous metoprolol",
        "explanation": "Incorrect. A beta blocker would slow the sinus node further and deepen his hypotension. This would be the correct answer if a patient with atrial fibrillation needed rate control."
      },
      {
        "text": "Intravenous amiodarone",
        "explanation": "Incorrect. Amiodarone treats tachyarrhythmias and does not speed a slow sinus node. This would be the correct answer if a patient had stable monomorphic ventricular tachycardia."
      },
      {
        "text": "Permanent pacemaker implantation",
        "explanation": "Incorrect. Pacing is the long-term answer, but this unstable first episode needs a rapid-acting drug. This would be the correct answer if symptomatic sinus bradycardia kept recurring after correction of causes."
      },
      {
        "text": "Intravenous magnesium sulfate",
        "explanation": "Incorrect. Magnesium does not raise the sinus rate. This would be the correct answer if a patient on a QT-prolonging drug had a twisting polymorphic ventricular tachycardia."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Unstable symptomatic sinus bradycardia without a reversible cause gets atropine first; recurrent episodes get a pacemaker.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 13,
    "pdfQuote": "Atropine, if the vitals signs are unstable"
  },
  {
    "id": 3,
    "category": "Cardiology: Re-entrant SVT and WPW",
    "questionText": "A 28-year-old woman comes to the emergency department because of palpitations that began suddenly an hour ago. She is alert, and her blood pressure is normal. ECG shows a regular narrow-complex tachycardia at 186/min with no P waves before the QRS complexes and small deflections just after each QRS. A Valsalva maneuver has no effect. Which of the following is the most appropriate next step?",
    "options": [
      {
        "text": "Direct-current cardioversion",
        "explanation": "Incorrect. Cardioversion terminates re-entry but is reserved for hemodynamic instability, and she is alert with a normal blood pressure. This would be the correct answer if adenosine failed and she became hypotensive."
      },
      {
        "text": "Subcutaneous enoxaparin",
        "explanation": "Incorrect. Enoxaparin prevents thrombus but does not terminate a circuit through the AV node. This would be the correct answer if a patient had new atrial fibrillation needing anticoagulation."
      },
      {
        "text": "Catheter ablation of the slow pathway",
        "explanation": "Incorrect. Ablation is the long-term treatment of choice, not the acute step during an ongoing episode. This would be the correct answer if she had recurrent episodes and wanted definitive therapy."
      },
      {
        "text": "Intravenous lidocaine bolus",
        "explanation": "Incorrect. Lidocaine targets ventricular arrhythmias and does not block the AV node, and her QRS complexes are narrow. This would be the correct answer if a patient had monomorphic ventricular tachycardia."
      },
      {
        "text": "Intravenous adenosine",
        "explanation": "Correct. A sudden regular narrow tachycardia with retrograde P waves just after the QRS is AV nodal re-entry, a circuit that depends on the AV node. Once vagal maneuvers fail in a stable patient, adenosine blocks the node and breaks the loop. Cardioversion is reserved for instability."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: For stable AVNRT, block the AV node with vagal maneuvers and then adenosine; cardiovert only if unstable.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 22,
    "pdfQuote": "carotid sinus massage, coughing, Valsalva"
  },
  {
    "id": 4,
    "category": "Cardiology: Re-entrant SVT and WPW",
    "questionText": "A 31-year-old woman has recurrent episodes of sudden palpitations. Ambulatory ECG monitoring captures an onset: an early P wave shaped differently from her sinus P waves is conducted to the ventricles, followed by a regular narrow-complex tachycardia with P waves buried in the QRS complexes. Compared with her sinus beats, which findings are most likely for the early conducted beat?",
    "options": [
      {
        "text": "PR interval normal, QRS narrow",
        "explanation": "Incorrect. A normal PR implies fast-pathway conduction, but that pathway is still refractory when the early beat arrives. This would be the correct answer if an isolated premature atrial beat did not start tachycardia."
      },
      {
        "text": "PR interval prolonged, QRS narrow",
        "explanation": "Correct. The early atrial beat reaches the AV node while the fast pathway is still refractory, so it conducts down the slow pathway and lengthens the PR interval. It then returns up the recovered fast pathway, starting nodal re-entry with buried P waves. Ventricular activation stays normal, so the QRS remains narrow."
      },
      {
        "text": "PR interval shortened, QRS wide with slurred onset",
        "explanation": "Incorrect. A short PR with a slurred wide QRS is pre-excitation, and her tachycardia complexes are narrow. This would be the correct answer if a patient with WPW syndrome were in sinus rhythm."
      },
      {
        "text": "PR interval unmeasurable, QRS narrow",
        "explanation": "Incorrect. The PR is unmeasurable when there are no discrete P waves, yet this early beat has a visible P wave. This would be the correct answer if a patient had atrial fibrillation."
      },
      {
        "text": "PR interval unchanged, QRS wide",
        "explanation": "Incorrect. A wide QRS means abnormal ventricular activation, but her complexes are narrow. This would be the correct answer if a premature beat arose below the bundle of His."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: A PAC starts AVNRT by finding the fast pathway refractory and conducting down the slow pathway, so its PR interval is longer.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 23,
    "pdfQuote": "Short RP Long RP Short RP"
  },
  {
    "id": 5,
    "category": "Cardiology: Re-entrant SVT and WPW",
    "questionText": "A 19-year-old man has had several episodes of rapid palpitations over the past year. Between episodes his ECG shows sinus rhythm with a PR interval of 0.09 seconds and a widened QRS complex whose initial portion rises slowly. He asks about a treatment that would prevent future episodes. Which of the following is the most appropriate definitive therapy?",
    "options": [
      {
        "text": "Long-term oral metoprolol",
        "explanation": "Incorrect. Beta blockers suppress the AV node, favoring accessory pathway conduction, and leave the substrate intact. This would be the correct answer if a patient with atrial fibrillation needed rate control."
      },
      {
        "text": "Pulmonary vein isolation procedure",
        "explanation": "Incorrect. Pulmonary vein isolation removes atrial fibrillation triggers, not an atrioventricular bypass tract. This would be the correct answer if a patient had recurrent irregularly irregular tachycardia without P waves."
      },
      {
        "text": "AV nodal slow-pathway modification",
        "explanation": "Incorrect. Slow-pathway modification cures nodal re-entry, but his baseline ECG shows pre-excitation from a bypass tract. This would be the correct answer if a patient had AVNRT with a normal baseline ECG."
      },
      {
        "text": "Catheter ablation of the accessory pathway",
        "explanation": "Correct. A short PR with a slurred, widened QRS onset is pre-excitation through an accessory pathway, the Bundle of Kent, and symptomatic episodes make it a syndrome rather than a pattern. Ablating that pathway is definitive. Slow-pathway modification treats nodal re-entry, which lacks baseline pre-excitation."
      },
      {
        "text": "Implantable cardioverter-defibrillator",
        "explanation": "Incorrect. An implantable defibrillator addresses ventricular fibrillation risk. This would be the correct answer if a patient had survived ventricular fibrillation without a reversible cause such as myocardial infarction."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Symptomatic WPW is cured by catheter ablation of the accessory pathway, the Bundle of Kent.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 29,
    "pdfQuote": "Catheter ablation"
  },
  {
    "id": 6,
    "category": "Cardiology: Re-entrant SVT and WPW",
    "questionText": "A 22-year-old man comes to the emergency department with palpitations. A prior ECG showed a short PR interval and a slurred upstroke at the start of the QRS complex. He is alert, and his blood pressure is normal. ECG now shows a regular tachycardia at 210/min. Carotid sinus massage has no effect. Which of the following is the most appropriate pharmacotherapy?",
    "options": [
      {
        "text": "Intravenous procainamide",
        "explanation": "Correct. The prior ECG shows pre-excitation from an accessory pathway, so this is a WPW tachycardia. After a failed vagal maneuver in a stable patient, IV procainamide, a class I antiarrhythmic, is used. Adenosine and other AV nodal blockers can push conduction down the accessory pathway."
      },
      {
        "text": "Intravenous diltiazem",
        "explanation": "Incorrect. Diltiazem blocks the AV node, which with pre-excitation raises the risk of unrestricted accessory pathway conduction. This would be the correct answer if a patient with atrial fibrillation and no pre-excitation needed rate control."
      },
      {
        "text": "Intravenous digoxin",
        "explanation": "Incorrect. Digoxin slows AV nodal conduction and is avoided with a bypass tract. This would be the correct answer if a patient with atrial fibrillation needed an additional rate-control agent."
      },
      {
        "text": "Adenosine by rapid bolus",
        "explanation": "Incorrect. Adenosine blocks the AV node and may worsen a tachycardia that uses an accessory pathway. This would be the correct answer if a patient without pre-excitation had stable AV nodal re-entry."
      },
      {
        "text": "Oral sotalol",
        "explanation": "Incorrect. Sotalol is an oral rhythm-control drug, not acute therapy for a pre-excited tachycardia. This would be the correct answer if a patient with recurrent atrial fibrillation chose rhythm control."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: In WPW tachycardia, avoid AV nodal blockers; use vagal maneuvers, then IV procainamide, or cardioversion if unstable.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 29,
    "pdfQuote": "Meds: Procainamide"
  },
  {
    "id": 7,
    "category": "Cardiology: Re-entrant SVT and WPW",
    "questionText": "A 25-year-old man with palpitations receives intravenous diltiazem in the emergency department. His baseline ECG shows a PR interval of 0.10 seconds with a slurred initial QRS upstroke. Minutes after the infusion, his ventricular rate rises and the QRS complexes become wider. Which of the following is the most likely mechanism of this deterioration?",
    "options": [
      {
        "text": "Triggered activity from hypomagnesemia",
        "explanation": "Incorrect. Low magnesium triggers torsades de pointes, a twisting polymorphic rhythm, not faster pre-excited complexes. This would be the correct answer if a patient on a QT-prolonging drug developed polymorphic ventricular tachycardia."
      },
      {
        "text": "Re-entry confined to the AV node",
        "explanation": "Incorrect. A circuit confined to the AV node would stop with diltiazem, not accelerate. This would be the correct answer if a patient with a normal baseline ECG had a regular narrow tachycardia."
      },
      {
        "text": "Increased accessory tract conduction",
        "explanation": "Correct. The baseline short PR and slurred QRS onset mark an accessory pathway. Diltiazem blocks the AV node and removes the competing normal route, so more impulses travel down the bypass tract and the rate rises with wider complexes. Nodal re-entry would terminate, not accelerate, with AV nodal blockade."
      },
      {
        "text": "Accelerated sinus node firing",
        "explanation": "Incorrect. Sinus automaticity would not widen the QRS, and diltiazem slows rather than speeds the sinus node. This would be the correct answer if a patient with pain or anemia had sinus tachycardia."
      },
      {
        "text": "Ischemic ventricular fibrillation",
        "explanation": "Incorrect. Ventricular fibrillation produces chaotic activity without organized QRS complexes or output. This would be the correct answer if a patient with an acute myocardial infarction collapsed pulseless."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: AV nodal blockers in WPW remove the competing normal route and increase conduction down the accessory pathway.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 29,
    "pdfQuote": "Shortened PR interval"
  },
  {
    "id": 8,
    "category": "Cardiology: Atrial Fibrillation",
    "questionText": "A 46-year-old woman comes to the physician because of palpitations for several weeks. She has lost weight despite a good appetite, feels hot, and has a fine hand tremor. ECG shows a narrow-complex tachycardia at 128/min with no discernible P waves, a wavy baseline, and R-R intervals with no pattern. Which of the following is the most likely underlying cause of her arrhythmia?",
    "options": [
      {
        "text": "Long-standing hypertension",
        "explanation": "Incorrect. Hypertension is the most common association of this rhythm but does not explain weight loss, heat intolerance or tremor. This would be the correct answer if an older hypertensive patient had isolated palpitations."
      },
      {
        "text": "Chronic obstructive pulmonary disease",
        "explanation": "Incorrect. Lung disease is linked to atrial arrhythmias, but she has no pulmonary history. This would be the correct answer if a patient with chronic lung disease had this rhythm."
      },
      {
        "text": "Pulmonary embolism",
        "explanation": "Incorrect. Pulmonary embolism usually presents with sinus tachycardia and dyspnea, not an irregular rhythm without P waves. This would be the correct answer if a postoperative patient with sudden dyspnea had sinus tachycardia."
      },
      {
        "text": "Excess caffeine intake",
        "explanation": "Incorrect. Caffeine can provoke this rhythm but does not cause weight loss despite a good appetite. This would be the correct answer if palpitations followed heavy coffee intake without weight change."
      },
      {
        "text": "Thyrotoxicosis",
        "explanation": "Correct. An irregularly irregular narrow tachycardia with no P waves and a wavy baseline is atrial fibrillation. Weight loss with good appetite, heat intolerance and tremor point to thyrotoxicosis, a cause not to miss because treating it can resolve the arrhythmia. Hypertension is more common but explains none of her systemic findings."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: In new atrial fibrillation, look for thyrotoxicosis; treating it can make the arrhythmia resolve.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 32,
    "pdfQuote": "stress, infection, alcohol, thyrotoxicosis"
  },
  {
    "id": 9,
    "category": "Cardiology: Atrial Fibrillation",
    "questionText": "A 79-year-old man with an untreated irregular heart rhythm develops sudden weakness of the right arm and difficulty speaking. ECG shows irregularly irregular narrow QRS complexes without P waves. Which of the following is the most likely mechanism of his neurologic deficit?",
    "options": [
      {
        "text": "Hypoperfusion from a rapid ventricular rate",
        "explanation": "Incorrect. A rapid rate can lower output and cause syncope, but not focal arm weakness and aphasia. This would be the correct answer if a patient with a fast tachyarrhythmia had presyncope."
      },
      {
        "text": "Hemorrhage from anticoagulant use",
        "explanation": "Incorrect. He takes no anticoagulant, so drug-related hemorrhage is unlikely. This would be the correct answer if a patient on warfarin for atrial fibrillation had a sudden severe headache and focal deficit."
      },
      {
        "text": "Paradoxical embolus through a septal defect",
        "explanation": "Incorrect. Paradoxical embolism needs a venous clot and a shunt, neither described here. This would be the correct answer if a patient with leg vein thrombosis and a septal defect had a stroke."
      },
      {
        "text": "Reduced atrial contraction causing appendage thrombus",
        "explanation": "Correct. An irregularly irregular rhythm without P waves is atrial fibrillation, in which the atria quiver instead of contracting. Blood stagnates, especially in the left atrial appendage, and thrombus forms and embolizes to the brain. A rapid rate alone causes global hypoperfusion, not a focal deficit."
      },
      {
        "text": "Small-vessel occlusion from hypertension",
        "explanation": "Incorrect. Small-vessel disease causes lacunar deficits, but his rhythm provides a direct cardioembolic source. This would be the correct answer if a patient in sinus rhythm with long-standing hypertension had a pure motor stroke."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Atrial fibrillation causes stroke because absent atrial contraction lets blood stagnate and clot in the left atrial appendage.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 34,
    "pdfQuote": "prevent cerebrovascular accident"
  },
  {
    "id": 10,
    "category": "Cardiology: Atrial Fibrillation",
    "questionText": "A 77-year-old woman with hypertension and diabetes mellitus is found to have atrial fibrillation. Echocardiography shows normal valves. Her ventricular rate is controlled with metoprolol, and she has no history of bleeding. Which of the following is the most appropriate additional pharmacotherapy?",
    "options": [
      {
        "text": "Aspirin monotherapy",
        "explanation": "Incorrect. Aspirin alone suits only low-moderate risk, and her age, sex, hypertension and diabetes exceed that. This would be the correct answer if a patient with nonvalvular atrial fibrillation had a score of 1."
      },
      {
        "text": "Oral apixaban",
        "explanation": "Correct. In nonvalvular atrial fibrillation the CHA2DS2-VASc score guides anticoagulation, and her age, sex, hypertension and diabetes place her in the moderate-high range. That range calls for an anticoagulant such as apixaban. Antiplatelet therapy is an option only in the low-moderate range."
      },
      {
        "text": "Clopidogrel monotherapy",
        "explanation": "Incorrect. Clopidogrel is an antiplatelet agent and does not give the stroke protection her risk profile requires. This would be the correct answer if a patient had a coronary stent and no atrial fibrillation."
      },
      {
        "text": "Diltiazem",
        "explanation": "Incorrect. Her rate is already controlled with metoprolol, and another rate-control drug does nothing for stroke prevention. This would be the correct answer if her ventricular rate remained rapid despite a beta blocker."
      },
      {
        "text": "No further medication",
        "explanation": "Incorrect. Rate control does not address thrombus risk from atrial stasis. This would be the correct answer if a patient with nonvalvular atrial fibrillation had a score of 0."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Nonvalvular AF with a CHA2DS2-VASc score of 2 or more needs an anticoagulant; valvular AF is anticoagulated regardless of score.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 36,
    "pdfQuote": "antiplatelet or"
  },
  {
    "id": 11,
    "category": "Cardiology: Atrial Flutter and MAT",
    "questionText": "A 67-year-old man has recurrent episodes of palpitations despite rate-control medications. During an episode, ECG shows a regular narrow-complex tachycardia at 150/min with continuous saw-tooth atrial waves in leads II, III, and aVF and no flat baseline between them. He wants a procedure to prevent recurrences. Which of the following is the most appropriate definitive treatment?",
    "options": [
      {
        "text": "Isolation of the pulmonary veins",
        "explanation": "Incorrect. Pulmonary vein isolation treats atrial fibrillation, but organized saw-tooth waves come from a right atrial circuit. This would be the correct answer if his rhythm were irregularly irregular without P waves."
      },
      {
        "text": "Ablation of the Bundle of Kent",
        "explanation": "Incorrect. Bundle of Kent ablation cures pre-excitation, and his ECG shows no short PR or slurred QRS onset. This would be the correct answer if a patient with WPW syndrome had recurrent tachycardia."
      },
      {
        "text": "Permanent dual-chamber pacemaker",
        "explanation": "Incorrect. Pacing treats slow rhythms, not a fast re-entrant atrial circuit. This would be the correct answer if a patient had recurrent symptomatic sinus bradycardia."
      },
      {
        "text": "Ablation of the AV nodal slow pathway",
        "explanation": "Incorrect. Slow-pathway ablation cures AV nodal re-entry, but the flutter circuit does not pass through the AV node. This would be the correct answer if a patient had recurrent tachycardia with retrograde P waves."
      },
      {
        "text": "Ablation of the cavotricuspid isthmus",
        "explanation": "Correct. Regular saw-tooth waves in the inferior leads with 2:1 conduction are atrial flutter, a macro-re-entrant circuit in the right atrium through the cavotricuspid isthmus. Its rate is hard to control with drugs, and ablating the isthmus is definitive. Pulmonary vein isolation treats atrial fibrillation, which lacks organized flutter waves."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Atrial flutter is a right atrial circuit through the cavotricuspid isthmus, and ablating the isthmus is definitive.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 40,
    "pdfQuote": "Lower right atrium between IVC and tricuspid valve"
  },
  {
    "id": 12,
    "category": "Cardiology: Atrial Flutter and MAT",
    "questionText": "A 70-year-old woman with palpitations has a regular narrow-complex tachycardia at 150/min. Continuous saw-tooth atrial waves occur at exactly twice the ventricular rate in leads II, III, and aVF. Intravenous diltiazem is given to slow AV nodal conduction, and the saw-tooth waves persist unchanged in shape. Which of the following changes is most likely after the drug takes effect?",
    "options": [
      {
        "text": "Ventricular rate lower, atrial rate lower",
        "explanation": "Incorrect. Diltiazem acts on the AV node, not on the right atrial circuit whose length sets the atrial rate. This would be the correct answer if a patient with sinus tachycardia received a beta blocker."
      },
      {
        "text": "Ventricular rate higher, atrial rate unchanged",
        "explanation": "Incorrect. Slowing AV nodal conduction lets fewer flutter impulses through, not more. This would be the correct answer if a patient with 2:1 flutter developed 1:1 conduction."
      },
      {
        "text": "Ventricular rate lower, atrial rate unchanged",
        "explanation": "Correct. Saw-tooth waves at twice the ventricular rate are atrial flutter with 2:1 conduction. The size of the right atrial circuit fixes the atrial rate, while the AV conduction ratio sets the ventricular rate. Slowing nodal conduction raises the ratio, so the ventricular rate falls and the flutter rate does not."
      },
      {
        "text": "Ventricular rate unchanged, atrial rate lower",
        "explanation": "Incorrect. The flutter circuit, not the AV node, sets the atrial rate. This would be the correct answer if a patient with complete heart block had a slowing atrial rate."
      },
      {
        "text": "Ventricular rate unchanged, atrial rate unchanged",
        "explanation": "Incorrect. Diltiazem slows AV nodal conduction, so the ventricular response changes. This would be the correct answer if the patient had instead received a drug without AV nodal effects, such as an anticoagulant."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: In atrial flutter, AV nodal blockade raises the conduction ratio and lowers the ventricular rate, while the atrial rate stays near 300.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 37,
    "pdfQuote": "Ventricular rate is determined by the AV conduction ratio"
  },
  {
    "id": 13,
    "category": "Cardiology: Atrial Flutter and MAT",
    "questionText": "A 68-year-old man is hospitalized for an exacerbation of chronic obstructive pulmonary disease with hypoxemia. ECG shows an irregular narrow-complex tachycardia at 124/min with discrete P waves of at least three different shapes and varying PR intervals. His oxygenation is being corrected. Which of the following is the most appropriate additional pharmacotherapy for the arrhythmia?",
    "options": [
      {
        "text": "Oral verapamil",
        "explanation": "Correct. An irregular narrow tachycardia with at least three distinct P-wave shapes is multifocal atrial tachycardia, most common with COPD and hypoxemia. Treatment is the underlying cause plus verapamil. Atrial fibrillation, the closest look-alike, has no discrete P waves, so AF-directed therapy does not fit."
      },
      {
        "text": "Digoxin",
        "explanation": "Incorrect. Digoxin is an atrial fibrillation rate-control drug, but his discrete P waves of several shapes exclude fibrillation. This would be the correct answer if a patient had rapid atrial fibrillation needing rate control."
      },
      {
        "text": "Flecainide",
        "explanation": "Incorrect. Flecainide is a rhythm-control drug for atrial fibrillation, not treatment for multiple atrial foci driven by hypoxemia. This would be the correct answer if a patient with atrial fibrillation chose rhythm control."
      },
      {
        "text": "Warfarin",
        "explanation": "Incorrect. Anticoagulation addresses stroke risk from atrial fibrillation, which his distinct P waves rule out. This would be the correct answer if a patient had nonvalvular atrial fibrillation with a high stroke risk score."
      },
      {
        "text": "Amiodarone",
        "explanation": "Incorrect. Amiodarone is used for rhythm control and ventricular tachycardia, not first for multiple atrial foci. This would be the correct answer if a patient with atrial fibrillation needed rhythm control after failed rate control."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: At least three P-wave morphologies in an irregular tachycardia with COPD means MAT; treat the cause and give verapamil.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 41,
    "pdfQuote": "Verapamil. Treat underlying cause"
  },
  {
    "id": 14,
    "category": "Cardiology: Ventricular Arrhythmias",
    "questionText": "A 64-year-old man with a myocardial infarction 2 years ago comes to the emergency department with palpitations and lightheadedness. He has a palpable pulse of 172/min, and blood pressure is 76/42 mm Hg. ECG shows a regular wide-complex tachycardia with identical QRS complexes and P waves unrelated to the QRS. Which of the following is the most appropriate next step?",
    "options": [
      {
        "text": "Intravenous amiodarone infusion",
        "explanation": "Incorrect. Amiodarone treats this rhythm, but his hypotension demands cardioversion first. This would be the correct answer if he had the same rhythm with a normal blood pressure."
      },
      {
        "text": "Valsalva maneuver",
        "explanation": "Incorrect. A Valsalva maneuver slows AV nodal conduction and does not affect a ventricular circuit. This would be the correct answer if a stable patient had regular narrow-complex AV nodal re-entry."
      },
      {
        "text": "Immediate unsynchronized defibrillation",
        "explanation": "Incorrect. Unsynchronized defibrillation is for pulseless chaotic rhythms, and he has a pulse with organized complexes. This would be the correct answer if he became pulseless with ventricular fibrillation."
      },
      {
        "text": "Synchronized cardioversion",
        "explanation": "Correct. A regular wide-complex tachycardia with uniform QRS complexes and dissociated P waves after a prior infarction is monomorphic ventricular tachycardia. With hypotension and a pulse he is unstable, so electrical cardioversion comes first. Amiodarone or lidocaine is the drug option once he is stable."
      },
      {
        "text": "Observation with serial ECGs",
        "explanation": "Incorrect. Observation is unsafe because this rhythm can degenerate into ventricular fibrillation. This would be the correct answer if a patient had occasional asymptomatic premature ventricular contractions."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Unstable monomorphic VT with a pulse gets electrical cardioversion first; amiodarone or lidocaine follows.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 45,
    "pdfQuote": "deteriorates into ventricular fibrillation"
  },
  {
    "id": 15,
    "category": "Cardiology: Ventricular Arrhythmias",
    "questionText": "A 58-year-old woman who takes a QT-prolonging medication has had profuse diarrhea for 4 days and now faints. Telemetry shows sinus rhythm followed by a run of wide QRS complexes whose amplitude and axis twist repeatedly around the baseline. Which of the following laboratory findings most likely contributed to this arrhythmia?",
    "options": [
      {
        "text": "Increased serum potassium",
        "explanation": "Incorrect. Diarrhea lowers rather than raises potassium, and low potassium is what predisposes to this rhythm. This would be the correct answer if a patient with kidney failure had peaked T waves."
      },
      {
        "text": "Reduced serum magnesium",
        "explanation": "Correct. Sinus rhythm followed by a twisting polymorphic wide-complex rhythm in a patient on a QT-prolonging drug is torsades de pointes. Diarrhea wastes magnesium, and hypomagnesemia is among its most common causes, which is why IV magnesium is first line. Low potassium and calcium also contribute."
      },
      {
        "text": "Increased serum calcium",
        "explanation": "Incorrect. Low, not high, calcium predisposes to torsades, and diarrhea does not raise calcium. This would be the correct answer if a patient with hyperparathyroidism had a shortened QT interval."
      },
      {
        "text": "Reduced serum sodium",
        "explanation": "Incorrect. Sodium is not among the electrolyte causes of torsades. This would be the correct answer if a patient with diarrhea had confusion and seizures."
      },
      {
        "text": "Increased serum glucose",
        "explanation": "Incorrect. Glucose does not prolong the QT interval or trigger torsades. This would be the correct answer if a patient with uncontrolled diabetes had polyuria and dehydration."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Torsades de pointes follows QT prolongation, often from drugs plus low magnesium, potassium or calcium; IV magnesium is first line.",
    "lectureSource": "CV83: Clinical ECG - Atrial and Ventricular Arrhythmias",
    "pdfLecture": "CV83",
    "pdfPage": 47,
    "pdfQuote": "drugs that prolong QT interval"
  }
];

window.Test_CV83_Boards = Test_CV83_Boards;
