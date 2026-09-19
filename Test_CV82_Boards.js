// SET B - board-style items on the same lecture. File: Test_CV82_Boards.js
const Test_CV82_Boards = [
  {
    "id": 1,
    "category": "Cardiology: Arrhythmia Mechanisms",
    "questionText": "A 64-year-old man is admitted with an acute anterior myocardial infarction. On telemetry he develops frequent premature ventricular beats that map to the ischemic border zone. Which change in the injured ventricular myocytes most likely allows them to fire spontaneously?",
    "options": [
      {
        "text": "Prolonged plateau from reduced K+ current",
        "explanation": "Incorrect. Reduced K+ current prolongs the plateau and produces EADs, and nothing here suggests a repolarization defect. This would be the correct answer if the patient had congenital long QT syndrome with torsades."
      },
      {
        "text": "Increased, more positive resting potential",
        "explanation": "Correct. Ischemic myocytes cannot hold a normal resting potential, so it rises toward threshold and inactivates fast Na+ channels. The cells then depolarize through L-type Ca2+ current and behave like slow-response pacemaker cells. Calcium-overload exchanger current is less likely because no digitalis or reperfusion setting is described."
      },
      {
        "text": "Gain of function of cardiac Na+ channels",
        "explanation": "Incorrect. Injury inactivates fast Na+ channels rather than enhancing them. This would be the correct answer if the ventricular ectopy arose in a young patient with LQT3 long QT syndrome."
      },
      {
        "text": "Shortened action potential from K+ channel gain",
        "explanation": "Incorrect. K+ channel gain shortens the AP and favors reentry, and it is inherited rather than ischemic. This would be the correct answer if a young patient had a QT interval shorter than 0.3 seconds."
      },
      {
        "text": "Increased Na+/Ca2+ exchanger current from Ca2+ overload",
        "explanation": "Incorrect. Exchanger-driven afterdepolarizations follow calcium overload, which this infarct history does not establish. This would be the correct answer if the ectopy developed in a patient with digoxin toxicity."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Ischemia depolarizes working myocytes, inactivating fast Na+ channels and turning them into Ca2+-driven cells with abnormal automaticity.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 8,
    "pdfQuote": "could become slow response cells"
  },
  {
    "id": 2,
    "category": "Cardiology: Arrhythmia Mechanisms",
    "questionText": "A 72-year-old woman receiving haloperidol for delirium has a serum K+ concentration of 2.9 mEq/L. Her pulse is 44/min. ECG shows a markedly prolonged QT interval and runs of polymorphic ventricular tachycardia whose QRS axis twists around the baseline. Which change would most likely further increase her risk of these runs?",
    "options": [
      {
        "text": "Slowed conduction through scarred myocardium",
        "explanation": "Incorrect. Slow conduction supports reentry, but her twisting VT on a long QT arises from triggered activity. This would be the correct answer if she had monomorphic VT after a remote infarction."
      },
      {
        "text": "Faster heart rate from atrial pacing",
        "explanation": "Incorrect. A faster rate shortens the action potential and lowers EAD risk. This would be the correct answer if her ventricular tachycardia were due to digoxin-induced delayed afterdepolarizations."
      },
      {
        "text": "Shortening of the action potential duration",
        "explanation": "Incorrect. A shorter AP removes the substrate for EADs. This would be the correct answer if she had short QT syndrome, where a short ERP favors multiple reentries."
      },
      {
        "text": "Decreased heart rate",
        "explanation": "Correct. Haloperidol and hypokalemia prolong the action potential, and the twisting polymorphic VT is torsades driven by EADs from reopening L-type Ca2+ channels. Bradycardia lengthens the AP and QT further, so slowing raises EAD risk. Faster pacing, by contrast, shortens the AP and protects her."
      },
      {
        "text": "Pre-excitation over an accessory pathway",
        "explanation": "Incorrect. An accessory pathway creates AV reentry, not EAD-driven torsades. This would be the correct answer if she had a delta wave and short PR interval with reentrant tachycardia."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: EAD-driven torsades worsens with bradycardia because slow rates prolong the action potential and QT interval.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 9,
    "pdfQuote": "Triggered Activity"
  },
  {
    "id": 3,
    "category": "Cardiology: Arrhythmia Mechanisms",
    "questionText": "In an experimental ring of atrial tissue with a circumference of 12 cm, a reentrant wave circulates at a conduction velocity of 40 cm/s with an effective refractory period of 200 ms. A drug is added that prolongs the effective refractory period to 350 ms without changing conduction velocity. Which outcome is most likely?",
    "options": [
      {
        "text": "Termination from increased wavelength",
        "explanation": "Correct. Wavelength equals conduction velocity times ERP: 8 cm before the drug, 14 cm after. Once the wavelength exceeds the 12 cm ring, the head meets refractory tissue and reentry dies. An unchanged cycle length would require an unchanged wavelength."
      },
      {
        "text": "Persistence with a wider excitable gap",
        "explanation": "Incorrect. A longer ERP lengthens the wavelength and closes the gap. This would be the correct answer if the drug had shortened the refractory period to 150 ms."
      },
      {
        "text": "Two reentrant waves circulating together",
        "explanation": "Incorrect. Multiple waves need a very short wavelength. This would be the correct answer if the refractory period had fallen to 100 ms, giving a 4 cm wavelength."
      },
      {
        "text": "Conversion to EAD-triggered activity",
        "explanation": "Incorrect. EADs need a prolonged action potential at slow rates in intact myocytes, not a reentrant ring. This would be the correct answer if a QT-prolonging drug were given to a bradycardic patient."
      },
      {
        "text": "Persistence at an unchanged cycle length",
        "explanation": "Incorrect. The ERP change alters the wavelength relative to the ring. This would be the correct answer if the drug had changed neither refractory period nor conduction velocity."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Reentry survives only while wavelength (CV x ERP) is shorter than the circuit; prolonging ERP can end it.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 14,
    "pdfQuote": "Wavelength and excitable gap in"
  },
  {
    "id": 4,
    "category": "Cardiology: Arrhythmia Mechanisms",
    "questionText": "A 78-year-old woman has recurrent lightheadedness. She takes no medications. Pulse is 38/min. ECG shows a P wave before every narrow QRS complex, a normal PR interval, and intermittent pauses without P waves. Every P wave is conducted. Which mechanism most likely explains her bradycardia?",
    "options": [
      {
        "text": "Second-degree block at the AV node",
        "explanation": "Incorrect. AV nodal block leaves P waves without QRS complexes, but every P wave here conducts. This would be the correct answer if nonconducted P waves appeared on her ECG."
      },
      {
        "text": "Physiologic slowing from high vagal tone at rest",
        "explanation": "Incorrect. Resting sinus bradycardia can be physiological, but symptomatic pauses in an elderly woman are pathological. This would be the correct answer if she were an asymptomatic endurance athlete."
      },
      {
        "text": "Bundle branch block with an escape rhythm",
        "explanation": "Incorrect. Bundle branch block widens the QRS, and her complexes are narrow. This would be the correct answer if her ECG showed wide QRS complexes."
      },
      {
        "text": "Digoxin-induced delayed afterdepolarizations",
        "explanation": "Incorrect. DADs cause ectopic tachyarrhythmias, and she takes no medications. This would be the correct answer if she had digoxin toxicity with premature beats."
      },
      {
        "text": "Decreased sinus node automaticity",
        "explanation": "Correct. Sinus pauses with normal conduction of every P wave point to failure of impulse generation. In an elderly symptomatic patient, this is sick sinus syndrome, a degenerative disease of the pacemaker system. Physiologic vagal slowing is less likely given her symptoms and pauses."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Bradycardia results from failed impulse generation (sick sinus syndrome) or failed propagation (conduction block).",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 7,
    "pdfQuote": "Altered Normal Automaticity"
  },
  {
    "id": 5,
    "category": "Cardiology: Arrhythmia Mechanisms",
    "questionText": "A 59-year-old man with ischemic cardiomyopathy and an implantable cardioverter-defibrillator presents after a device alert. Interrogation shows a sustained monomorphic wide-QRS tachycardia at 180/min that stopped abruptly after a brief burst of rapid pacing stimuli, with no shock delivered. Which part of the arrhythmia circuit did the pacing stimuli most likely capture?",
    "options": [
      {
        "text": "Refractory tail of the wavelength",
        "explanation": "Incorrect. Refractory tissue cannot be captured by a stimulus. This would be the correct answer if pacing were delivered while the tissue was still refractory and failed."
      },
      {
        "text": "Leading head of the wavefront",
        "explanation": "Incorrect. The head is the advancing edge of the wave, not recovered tissue. This would be the correct answer if pacing had collided head-on with the wave and ended it."
      },
      {
        "text": "Excitable gap ahead of the wavefront",
        "explanation": "Correct. Monomorphic VT in structural heart disease is predominantly reentry, and every reentry circuit has an excitable gap. Pacing captures the gap, making it refractory so the returning head finds no excitable tissue. An automatic focus would not stop abruptly with burst pacing."
      },
      {
        "text": "Ectopic automatic focus in scar",
        "explanation": "Incorrect. Automatic foci are not reliably terminated by pacing, and scar-related monomorphic VT is predominantly reentry. This would be the correct answer if an ischemic focus showed warm-up automaticity."
      },
      {
        "text": "Triggered focus from afterdepolarizations",
        "explanation": "Incorrect. Triggered activity underlies outflow tract VT in normal hearts. This would be the correct answer if the tachycardia arose from the outflow tract of a structurally normal heart."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Reentrant tachycardias can be terminated by anti-tachycardia pacing because pacing captures the excitable gap.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 16,
    "pdfQuote": "Anti-tachycardia pacing (ATP)"
  },
  {
    "id": 6,
    "category": "Cardiology: Supraventricular Tachycardia",
    "questionText": "A 70-year-old man has had palpitations for several days. Pulse is 150/min and regular. ECG shows narrow QRS complexes and regular sawtooth atrial waves best seen in leads II, III, and aVF. He is referred for a curative catheter procedure. Ablation at which site is most likely to be curative?",
    "options": [
      {
        "text": "Cavotricuspid isthmus of the right atrium",
        "explanation": "Correct. Regular sawtooth atrial waves with a narrow QRS indicate atrial flutter, a right atrial reentry that runs through the isthmus between the inferior vena cava and tricuspid valve. Ablating the isthmus breaks the circuit. Pulmonary vein isolation targets the triggers of atrial fibrillation, which would give an irregular rhythm without organized atrial waves."
      },
      {
        "text": "Ostia of the pulmonary veins",
        "explanation": "Incorrect. Pulmonary vein isolation removes the triggers of fibrillation, but his atrial activity is regular and organized. This would be the correct answer if his ECG showed an irregularly irregular rhythm without P waves."
      },
      {
        "text": "Slow pathway of the AV node",
        "explanation": "Incorrect. Slow pathway ablation cures nodal reentry, which shows no sawtooth atrial waves. This would be the correct answer if an EP study showed dual AV nodal pathways."
      },
      {
        "text": "Accessory atrioventricular pathway",
        "explanation": "Incorrect. An accessory pathway causes AVRT, usually with pre-excitation on the resting ECG. This would be the correct answer if his resting ECG showed a delta wave and short PR interval."
      },
      {
        "text": "Right ventricular outflow tract epicardium",
        "explanation": "Incorrect. This region is abnormal in Brugada syndrome and ventricular arrhythmias, not in a narrow-QRS atrial rhythm. This would be the correct answer if he had coved ST elevation in V1-V3."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Typical atrial flutter is right atrial reentry through the cavotricuspid isthmus, so isthmus ablation is curative.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 21,
    "pdfQuote": "Atrial flutter-Reentry in RA"
  },
  {
    "id": 7,
    "category": "Cardiology: Supraventricular Tachycardia",
    "questionText": "A 67-year-old woman with long-standing hypertension has recurrent palpitations despite medical therapy. ECG during symptoms shows an irregularly irregular narrow-QRS rhythm with no discernible P waves. Echocardiography shows a dilated left atrium. She is referred for a catheter procedure. Which procedure is most likely to prevent recurrences?",
    "options": [
      {
        "text": "Cavotricuspid isthmus line",
        "explanation": "Incorrect. Isthmus ablation cures typical flutter, a single organized right atrial circuit. This would be the correct answer if her ECG showed regular sawtooth atrial waves."
      },
      {
        "text": "Slow AV nodal pathway modification",
        "explanation": "Incorrect. This cures nodal reentry, a regular tachycardia. This would be the correct answer if she had a regular narrow-QRS tachycardia with dual AV nodal pathways."
      },
      {
        "text": "Pulmonary vein electrical isolation",
        "explanation": "Correct. An irregularly irregular rhythm without P waves in a dilated atrium is atrial fibrillation, which needs triggers plus a remodeled substrate. Most triggers arise in the pulmonary veins, so isolating them prevents recurrences. Isthmus ablation is less useful because AF is multiple reentries rather than one fixed circuit."
      },
      {
        "text": "Accessory pathway ablation",
        "explanation": "Incorrect. Accessory pathway ablation cures AVRT, which is regular and often shows pre-excitation. This would be the correct answer if she had a delta wave on her resting ECG."
      },
      {
        "text": "Fast AV nodal pathway ablation",
        "explanation": "Incorrect. Fast pathway ablation carries a higher risk of AV block and does not address atrial triggers. This would be the correct answer if a nodal reentry could not be cured through the slow pathway."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Atrial fibrillation needs triggers, mostly from the pulmonary veins, plus remodeled atria; pulmonary vein isolation is the curative procedure.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 22,
    "pdfQuote": "The most common clinically significant arrhythmia"
  },
  {
    "id": 8,
    "category": "Cardiology: Supraventricular Tachycardia",
    "questionText": "A 28-year-old woman has recurrent palpitations that start and stop abruptly. ECG during an episode shows a regular narrow-QRS tachycardia at 190/min. Electrophysiologic study shows two conduction pathways within the AV node; a premature atrial stimulus blocks in one pathway and initiates the tachycardia through the other. Ablation of which structure is preferred for cure?",
    "options": [
      {
        "text": "Fast AV nodal pathway",
        "explanation": "Incorrect. The fast pathway is part of the circuit, but ablating it carries a higher risk of AV block. This would be the correct answer if slow pathway ablation had repeatedly failed."
      },
      {
        "text": "Right atrial cavotricuspid isthmus",
        "explanation": "Incorrect. The isthmus anchors typical flutter, and her circuit lies within the AV node. This would be the correct answer if she had regular sawtooth atrial waves."
      },
      {
        "text": "Pulmonary vein antra",
        "explanation": "Incorrect. Pulmonary vein triggers drive atrial fibrillation, an irregular rhythm. This would be the correct answer if her tachycardia were irregularly irregular without P waves."
      },
      {
        "text": "Bundle of Kent",
        "explanation": "Incorrect. The bundle of Kent is an accessory pathway outside the AV node. This would be the correct answer if her resting ECG showed pre-excitation."
      },
      {
        "text": "Slow AV nodal pathway",
        "explanation": "Correct. Dual AV nodal pathways with a premature beat blocking in one pathway define AVNRT, a nodal micro-reentry. Slow pathway ablation cures it. The fast pathway is spared because its ablation carries a higher risk of AV block."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: AVNRT is cured by slow pathway ablation; the fast pathway is spared because its ablation risks AV block.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 23,
    "pdfQuote": "Atrioventricular Nodal Reentrant Tachycardia"
  },
  {
    "id": 9,
    "category": "Cardiology: Supraventricular Tachycardia",
    "questionText": "A 22-year-old man has recurrent palpitations. His resting ECG shows a short PR interval and a slurred upstroke of a widened QRS complex. During an episode, ECG shows a regular wide-QRS tachycardia at 200/min. Which route of ventricular activation most likely explains the wide QRS during the tachycardia?",
    "options": [
      {
        "text": "Antegrade over the AV node and His bundle",
        "explanation": "Incorrect. Antegrade AV nodal conduction activates the ventricles normally and gives a narrow QRS. This would be the correct answer if his tachycardia had a narrow QRS."
      },
      {
        "text": "Antegrade over the accessory pathway",
        "explanation": "Correct. A short PR and slurred QRS upstroke indicate a WPW accessory pathway. When the reentry runs in reverse, the ventricles are activated through the accessory pathway, so the QRS widens. Bundle branch aberrancy is less likely because pre-excitation already explains ventricular activation outside the His-Purkinje system."
      },
      {
        "text": "His-Purkinje conduction with bundle branch block",
        "explanation": "Incorrect. Aberrant conduction can widen an SVT, but his baseline pre-excitation better explains it. This would be the correct answer if his resting ECG showed bundle branch block without a delta wave."
      },
      {
        "text": "Reentry around ventricular scar",
        "explanation": "Incorrect. Scar reentry causes monomorphic VT in structural heart disease, which he lacks. This would be the correct answer if he had a prior myocardial infarction."
      },
      {
        "text": "Triggered activity from the outflow tract",
        "explanation": "Incorrect. Outflow tract VT occurs in normal hearts without pre-excitation. This would be the correct answer if his resting ECG were normal."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: In AVRT the QRS is narrow when the ventricles are activated through the AV node and wide when the circuit reverses through the accessory pathway.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 24,
    "pdfQuote": "If the reentry is in a reversed direction"
  },
  {
    "id": 10,
    "category": "Cardiology: Channelopathies",
    "questionText": "A 7-year-old boy with profound hearing loss since birth faints after being startled by a loud alarm. His parents are healthy and have normal ECGs. His ECG shows a markedly prolonged corrected QT interval. Which pharmacotherapy is most appropriate to prevent recurrent episodes?",
    "options": [
      {
        "text": "Class III antiarrhythmic drug",
        "explanation": "Incorrect. Class III agents prolong repolarization and would worsen his long QT. This would be the correct answer if an adult with a normal QT needed rhythm control of atrial fibrillation."
      },
      {
        "text": "Digoxin",
        "explanation": "Incorrect. Digoxin toxicity causes calcium overload and DADs, and it does not protect against torsades. This would be the correct answer if a child had heart failure with a normal QT."
      },
      {
        "text": "Class IA antiarrhythmic drug",
        "explanation": "Incorrect. Class IA agents prolong the QT and can provoke torsades. This would be the correct answer if an adult with a normal QT needed a sodium channel blocker."
      },
      {
        "text": "Beta-adrenergic blocker",
        "explanation": "Correct. Congenital long QT with deafness and unaffected parents suggests autosomal recessive Jervell and Lange-Nielsen syndrome. Sympathetic surges, like being startled, add inward current and prolong the QT further, provoking EAD-driven torsades, so beta-blockers prevent episodes. An ICD is used for Brugada syndrome."
      },
      {
        "text": "No pharmacotherapy is indicated at this time",
        "explanation": "Incorrect. Syncope with a long QT signals risk of torsades and sudden death. This would be the correct answer if his QT were normal and the faint were clearly vasovagal."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: In congenital long QT, sympathetic drive worsens QT prolongation and EADs, so beta-blockers are used to prevent torsades.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 31,
    "pdfQuote": "Jervell and Lange-Nielsen syndrome"
  },
  {
    "id": 11,
    "category": "Cardiology: Channelopathies",
    "questionText": "A 55-year-old woman receiving ondansetron and azithromycin develops palpitations and near-syncope. Serum K+ is 3.0 mEq/L. ECG shows a prolonged QT interval and polymorphic ventricular tachycardia with shifting sinusoidal QRS waveforms; she has a palpable pulse. Which is the most appropriate immediate pharmacotherapy?",
    "options": [
      {
        "text": "Intravenous class III antiarrhythmic",
        "explanation": "Incorrect. Class III agents prolong repolarization and would worsen her drug-induced long QT. This would be the correct answer if a patient with a normal QT needed rhythm control of atrial fibrillation."
      },
      {
        "text": "Oral beta-adrenergic blocker",
        "explanation": "Incorrect. Beta-blockers prevent torsades long term in congenital long QT but do not treat an acute episode. This would be the correct answer if she had congenital long QT and needed prevention."
      },
      {
        "text": "Intravenous digoxin",
        "explanation": "Incorrect. Digoxin toxicity produces DADs and does not treat torsades. This would be the correct answer if a patient with a normal QT needed rate control of atrial fibrillation with heart failure."
      },
      {
        "text": "Oral potassium supplement alone",
        "explanation": "Incorrect. Correcting potassium helps, but oral replacement is too slow for active torsades. This would be the correct answer if she had mild hypokalemia with a normal QT and no arrhythmia."
      },
      {
        "text": "Intravenous magnesium sulfate infusion",
        "explanation": "Correct. An antiemetic and a macrolide plus hypokalemia have prolonged her QT, and the shifting sinusoidal polymorphic VT is torsades de pointes. Magnesium sulfate is the treatment. A class III antiarrhythmic would prolong the QT further and is worse."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Drug-induced torsades (ABCDE drugs, low K+ or Mg2+) is treated with magnesium sulfate while the offending drugs are stopped.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 34,
    "pdfQuote": "Treatment includes magnesium sulfate"
  },
  {
    "id": 12,
    "category": "Cardiology: Channelopathies",
    "questionText": "A 26-year-old man is evaluated after his brother died suddenly. Examination and echocardiography are normal. ECG shows a QT interval of 280 ms with tall, peaked T waves. Which electrophysiologic change most likely predisposes him to ventricular arrhythmia?",
    "options": [
      {
        "text": "Early afterdepolarizations from prolonged AP",
        "explanation": "Incorrect. EADs require a prolonged action potential, and his QT is short. This would be the correct answer if his ECG showed a markedly prolonged QT interval."
      },
      {
        "text": "Decreased reentry wavelength",
        "explanation": "Correct. A QT under 0.3 seconds reflects gain of K+ channel function and rapid repolarization. The short action potential gives a short ERP and short wavelength, allowing multiple reentries. EADs are unlikely because they need a prolonged action potential."
      },
      {
        "text": "Epicardial dispersion from reduced Na+ current",
        "explanation": "Incorrect. Reduced Na+ current in the RVOT epicardium causes Brugada syndrome. This would be the correct answer if his ECG showed coved ST elevation in the right precordial leads."
      },
      {
        "text": "Diastolic calcium leak from ryanodine receptors",
        "explanation": "Incorrect. RyR2 leak causes CPVT with a normal resting ECG. This would be the correct answer if his arrhythmias appeared only during exercise with a normal QT."
      },
      {
        "text": "Accessory pathway pre-excitation",
        "explanation": "Incorrect. Pre-excitation gives a short PR and delta wave, not a short QT. This would be the correct answer if his ECG showed a delta wave."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Short QT syndrome shortens ERP and wavelength, which favors multiple reentries.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 35,
    "pdfQuote": "Short QT syndrome"
  },
  {
    "id": 13,
    "category": "Cardiology: Channelopathies",
    "questionText": "A 38-year-old man of Asian descent is evaluated after an episode of syncope at rest. His father died suddenly in middle age. Echocardiography is normal. ECG shows a pseudo-right bundle branch block pattern with coved-type ST-segment elevation in the right precordial leads. Which is the most appropriate next step to prevent sudden death?",
    "options": [
      {
        "text": "Long-term beta-blocker therapy",
        "explanation": "Incorrect. Beta-blockers prevent arrhythmias driven by sympathetic surges, which is not his mechanism. This would be the correct answer if he had exertional syncope with a normal resting ECG from CPVT."
      },
      {
        "text": "Intravenous magnesium bolus",
        "explanation": "Incorrect. Magnesium treats acute torsades on a long QT, which he does not have. This would be the correct answer if he had active polymorphic VT with a prolonged QT."
      },
      {
        "text": "Catheter ablation of the slow pathway",
        "explanation": "Incorrect. Slow pathway ablation cures AVNRT, a narrow-QRS tachycardia. This would be the correct answer if he had dual AV nodal pathways."
      },
      {
        "text": "Implantable cardioverter-defibrillator placement",
        "explanation": "Correct. Coved ST elevation in the right precordial leads with a pseudo-RBBB pattern, syncope and family sudden death indicate Brugada syndrome, reduced Na+ current in the RVOT epicardium. These patients risk ventricular tachyarrhythmias and sudden death, prevented with an ICD. Beta-blockers are the preventive therapy for long QT and CPVT."
      },
      {
        "text": "Reassurance and routine follow-up",
        "explanation": "Incorrect. Syncope with this ECG and family history carries a real risk of sudden death. This would be the correct answer if he were asymptomatic with a normal ECG."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Brugada syndrome carries a risk of sudden cardiac death that is prevented with an ICD.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 37,
    "pdfQuote": "Autosomal dominant disorder most common in Asian males"
  },
  {
    "id": 14,
    "category": "Cardiology: Channelopathies",
    "questionText": "A 14-year-old girl collapses while sprinting during a soccer game and is resuscitated. Her resting ECG and echocardiogram are normal. During exercise testing, frequent ventricular ectopy progresses to polymorphic ventricular tachycardia as her heart rate rises. Which intracellular change in her ventricular myocytes is most likely during diastole?",
    "options": [
      {
        "text": "Increased cytosolic Ca2+ from leaky RyR2",
        "explanation": "Correct. Exertional polymorphic VT in a structurally normal heart with a normal resting ECG suggests CPVT. A leaky ryanodine receptor raises diastolic Ca2+, activating the Na+/Ca2+ exchanger and producing DADs, which sympathetic drive worsens. L-type channel reopening needs a prolonged action potential, which her normal QT argues against."
      },
      {
        "text": "Reactivation of L-type Ca2+ channels",
        "explanation": "Incorrect. L-type reopening causes EADs during phases 2-3 of a prolonged action potential, and her QT is normal. This would be the correct answer if her resting ECG showed a long QT."
      },
      {
        "text": "Reduced inward Na+ current in RVOT epicardium",
        "explanation": "Incorrect. This is the Brugada defect, which shows coved ST elevation at rest. This would be the correct answer if her resting ECG showed right precordial ST elevation."
      },
      {
        "text": "Accelerated repolarization from K+ channel gain",
        "explanation": "Incorrect. K+ channel gain shortens the QT, but her resting ECG is normal. This would be the correct answer if her QT interval were shorter than 0.3 seconds."
      },
      {
        "text": "Fast Na+ channel inactivation from depolarization",
        "explanation": "Incorrect. This follows ischemic injury, and a teenager with a normal heart has none. This would be the correct answer if ectopy arose in a border zone after myocardial infarction."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: CPVT is a leaky RyR2 that raises diastolic Ca2+ and triggers DADs during exercise or emotion in a structurally normal heart.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 38,
    "pdfQuote": "Typically seen in structurally"
  },
  {
    "id": 15,
    "category": "Cardiology: Electrical Therapy",
    "questionText": "A 61-year-old man with atrial fibrillation and a rapid ventricular rate becomes lightheaded, and electrical cardioversion is planned. The synchronization function is inadvertently left off, and the shock is delivered just after the peak of the T wave. Which complication is most likely?",
    "options": [
      {
        "text": "Complete heart block",
        "explanation": "Incorrect. A shock does not selectively block AV conduction. This would be the correct answer if a fast AV nodal pathway had just been ablated."
      },
      {
        "text": "Asystole",
        "explanation": "Incorrect. A shock makes all tissue refractory briefly, after which the sinus node resumes. This would be the correct answer if he had severe sick sinus syndrome with no escape rhythm."
      },
      {
        "text": "Induced ventricular fibrillation",
        "explanation": "Correct. From the peak to the end of the T wave the ventricles are in their vulnerable period, and a shock there can induce VF. Cardioversion is therefore synchronized to the R wave, when the ventricles are depolarized and refractory. Torsades is less likely because nothing prolongs his QT."
      },
      {
        "text": "Torsades de pointes",
        "explanation": "Incorrect. Torsades needs a prolonged QT with EADs, not a mistimed shock. This would be the correct answer if he were taking a QT-prolonging drug with hypokalemia."
      },
      {
        "text": "Conversion to atrial flutter",
        "explanation": "Incorrect. Flutter is a right atrial reentry and not the recognized danger of T-wave shocks. This would be the correct answer if a cavotricuspid isthmus circuit emerged after AF ablation."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Synchronize cardioversion to the R wave; a shock on the T wave hits the vulnerable period and can induce VF.",
    "lectureSource": "CV82: Pathophysiology of Arrhythmias",
    "pdfLecture": "CV82",
    "pdfPage": 42,
    "pdfQuote": "can induce ventricular fibrillation"
  }
];

window.Test_CV82_Boards = Test_CV82_Boards;
