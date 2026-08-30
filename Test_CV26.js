const Test_CV26 = [
  {
    "id": 1,
    "category": "Cardiology: Cardiac Conduction Physiology",
    "questionText": "A physiology instructor points out that the atrioventricular node has an intrinsic firing rate of 40-60/min, which is faster than that of ventricular myocardium, yet the AV node is the slowest-conducting tissue in the entire heart. A student objects that this is contradictory. Which of the following best resolves the apparent contradiction?",
    "options": [
      { "text": "Both terms describe impulse spread, but one is measured in beats and one in meters per second", "explanation": "Incorrect. This treats pacemaker rate and conduction velocity as the same physical property expressed in different units, which is exactly the confusion the lecturer warns against. Pacemaker rate is an intrinsic firing frequency of automatic tissue, while conduction velocity is the speed at which a depolarization wave is propagated. This would be the correct answer if the two terms were simply alternate expressions of a single measurement." },
      { "text": "Ventricular myocardium has no automaticity at all, so no comparison of rates is possible", "explanation": "Incorrect. Ventricular tissue does possess escape automaticity, which is precisely why the ventricles continue to beat in complete heart block at a rate unrelated to the atria. The lecture lists intrinsic pacemaker rates for tissue below the AV node even while calling them low yield. This would be the correct answer if ventricular tissue were purely conductive with no escape rhythm." },
      { "text": "Pacemaker rate is intrinsic firing frequency; conduction velocity is propagation speed", "explanation": "Correct. The lecturer explicitly separates these two properties. Pacemaker rate is how fast a tissue depolarizes spontaneously on its own (SA node 60-100/min, AV node 40-60/min), and it explains why the SA node dominates and why 60-100/min is a normal heart rate. Conduction velocity is how fast a tissue depolarizes and hands the impulse onward, and it ranks Purkinje system, then atria, then ventricles, then the AV node last. The two properties rank in opposite orders, so a tissue can pace relatively quickly and still conduct slowly." },
      { "text": "The AV node conducts slowly only when it is being driven by a supraventricular impulse", "explanation": "Incorrect. Slow conduction is an intrinsic property of AV nodal tissue, not something conferred by the origin of the impulse, and it is the anatomic basis for the physiologic delay between atrial and ventricular activation. The lecture presents the velocity ranking as a fixed tissue property. This would be the correct answer if AV nodal conduction velocity changed with the direction from which the impulse arrived." },
      { "text": "Conduction velocity, not pacemaker rate, is what determines the sinus rate", "explanation": "Incorrect. The sinus rate is set by the SA node's intrinsic pacemaker rate of 60-100/min, which is why that range defines a normal heart rate and the boundaries of bradyarrhythmia and tachyarrhythmia. Conduction velocity affects how long activation takes, not how often it starts. This would be the correct answer if the interval between beats were set by propagation time rather than by spontaneous depolarization." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: pacemaker rate and conduction velocity rank in opposite orders. SA (60-100) beats AV (40-60) for rate, but Purkinje > atria > ventricles > AV node for velocity.",
    "pdfPage": 5,
    "pdfQuote": "Pacemaker Speeds & Conduction Velocity"
  },
  {
    "id": 2,
    "category": "Cardiology: Cardiac Conduction Physiology",
    "questionText": "A 78-year-old woman has an ECG showing regular P waves at 88/min and regular QRS complexes at 38/min with no fixed relationship between them. Which physiologic principle explains why the ventricles continue to contract at all in this setting?",
    "options": [
      { "text": "Subsidiary pacemaker tissue below the block escapes at its own intrinsic rate", "explanation": "Correct. In complete heart block there is total dissociation between the atria and the ventricles, so the ventricles beat at a rate that is unrelated to the atrial rate. That rate comes from the intrinsic automaticity of whatever tissue lies below the level of block, which fires at its own slower pacemaker rate rather than being driven from above. The SA node continues to pace the atria at 88/min, which is why the P waves stay regular and independent." },
      { "text": "The SA node continues to capture the ventricles through an accessory pathway", "explanation": "Incorrect. If any pathway were conducting from atrium to ventricle, the P waves and QRS complexes would maintain a fixed relationship rather than marching independently. Complete dissociation is the defining feature described in the lecture. This would be the correct answer if the tracing showed a constant PR relationship with a short interval and a delta wave, as in pre-excitation." },
      { "text": "Retrograde Purkinje conduction re-enters the AV node and restarts the cycle", "explanation": "Incorrect. Re-entry produces a fast rhythm, not a slow escape rhythm at 38/min, and it would not leave the atria and ventricles fully dissociated in the manner described. The lecture frames complete block as loss of conduction, not as a re-entrant circuit. This would be the correct answer if the vignette described a regular narrow tachycardia terminating with vagal maneuvers." },
      { "text": "Ventricular myocardium depolarizes in response to mechanical stretch from atrial contraction", "explanation": "Incorrect. Atrial contraction contributes to ventricular filling but does not electrically trigger the ventricle, and a rhythm strip records electrical conductance rather than mechanical events. The lecturer stresses this distinction when introducing the P wave. This would be the correct answer if ventricular activation were a mechanically triggered event rather than an electrical one." },
      { "text": "The AV node conducts every third atrial impulse in a fixed ratio", "explanation": "Incorrect. Fixed-ratio conduction would produce a constant relationship between P waves and QRS complexes, and 88 divided by 38 is not an integer ratio. The vignette specifies that there is no fixed relationship. This would be the correct answer if the atrial rate were, for example, 90/min with QRS complexes at exactly 30/min in a repeating pattern." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: in complete heart block the atria and ventricles are electrically dissociated, and the ventricular rate reflects the intrinsic pacemaker rate of the escape focus, not the sinus rate.",
    "pdfPage": 5,
    "pdfQuote": "Pacemaker Speeds & Conduction Velocity"
  },
  {
    "id": 3,
    "category": "Cardiology: ECG Fundamentals",
    "questionText": "A 34-year-old man reports palpitations that occur two or three times a week and last about a minute. His ECG in clinic today is entirely normal. Which characteristic of the standard ECG best explains why this result does not exclude his complaint?",
    "options": [
      { "text": "The ECG averages electrical potential over the entire recording, hiding brief events", "explanation": "Incorrect. The tracing displays potential moment by moment rather than as an average, which is precisely why individual waves and intervals can be measured on it. Averaging is not the limitation described in the lecture. This would be the correct answer if the machine reported only a mean vector value rather than a continuous tracing." },
      { "text": "The ECG records mechanical contraction rather than electrical events", "explanation": "Incorrect. The lecturer states repeatedly that a rhythm strip shows electrical conductance, not contraction, and the P wave in particular is depolarization rather than the atrial squeeze that follows it. This is a common student misconception. This would be the correct answer if the ECG were an echocardiographic or pressure-based recording of wall motion." },
      { "text": "Twelve leads cannot cover the posterior surface of the heart in any patient", "explanation": "Incorrect. Although lead coverage does have anatomic limitations, the reason a normal tracing fails to exclude intermittent palpitations is temporal rather than spatial. The lecture emphasizes that a 12-lead gives 12 unique views of the heart. This would be the correct answer if the question asked why a posterior infarction can be missed on a standard tracing." },
      { "text": "The ECG only detects abnormalities that have already caused structural damage", "explanation": "Incorrect. The lecture describes the ECG as detecting changes in electrical potential that give an idea of what is happening structurally, and arrhythmias are detected without any structural damage at all. Detection is not contingent on structural injury. This would be the correct answer if the ECG were a purely anatomic imaging study." },
      { "text": "It is a snapshot containing only about ten seconds of data", "explanation": "Correct. The lecturer introduces the ECG as a snapshot of what is going on electrically within the heart and stresses that it provides only about 10 seconds of data. An arrhythmia that occurs two or three times a week is unlikely to fall inside that 10-second window, so a normal tracing is entirely compatible with the history. This is also why continuous rhythm monitoring on telemetry gives information a single 12-lead cannot." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: a 12-lead ECG is a roughly 10-second snapshot, so a normal tracing never excludes an intermittent arrhythmia.",
    "pdfPage": 3,
    "pdfQuote": "graphic representation of the electrical activity of the heart"
  },
  {
    "id": 4,
    "category": "Cardiology: ECG Fundamentals",
    "questionText": "A student is asked to identify the portion of the tracing that runs from the end of the QRS complex to the beginning of the T wave and includes neither wave. Which term correctly describes this portion, and what general rule does it follow?",
    "options": [
      { "text": "An interval, because any portion of the tracing bounded by two identifiable waves is called an interval", "explanation": "Incorrect. An interval is defined as a portion of the ECG that includes a segment plus one or more waves, such as the PR interval or the QT interval. Being bounded by waves is not the definition. This would be the correct answer if the described portion had included the T wave itself, which would make it the ST interval rather than the ST segment." },
      { "text": "A segment, because it is a line connecting two waves without including either one", "explanation": "Correct. The lecture defines a segment as a line, usually isoelectric, that connects two waves without including either of them, and an interval as a portion that includes a segment plus one or more waves. The portion between the end of the QRS and the start of the T wave is therefore the ST segment. It is the most clinically significant segment on the tracing because its elevation in anatomically contiguous leads defines a STEMI." },
      { "text": "A complex, because it represents one full heartbeat during the cardiac cycle", "explanation": "Incorrect. A complex is the whole set of deflections representing one full heartbeat during the cardiac cycle, not a single flat portion between two waves. The lecture uses complex for the entire P-QRS-T unit. This would be the correct answer if the question had described the whole grouping of waves from P through T." },
      { "text": "A phase, because it corresponds to phase 2 of the ventricular action potential plateau", "explanation": "Incorrect. The lecturer explicitly warns not to confuse the ECG complex with the cellular action potential and its phases 0 through 4, because the surface tracing is the summed signal of whole chambers rather than one cell's membrane potential. This would be the correct answer if the recording being described were an intracellular microelectrode tracing rather than a surface ECG." },
      { "text": "An inflection, because it marks the transition point between depolarization and repolarization", "explanation": "Incorrect. Inflections are the labelled waves themselves, P, Q, R, S and T, and the lecture contrasts these with segments and intervals, which represent periods between events rather than specific inflection points. This would be the correct answer if the question had asked what to call the peak of the R wave." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: a segment connects two waves and excludes both (ST); an interval includes a segment plus at least one wave (PR, QT).",
    "pdfPage": 6,
    "pdfQuote": "Parts of the ECG"
  },
  {
    "id": 5,
    "category": "Cardiology: ECG Waveform Physiology",
    "questionText": "A 66-year-old woman with long-standing mitral valve disease has an ECG in which the P wave in lead II shows two distinct humps rather than one smooth dome. Which physiologic feature of atrial activation best accounts for this appearance?",
    "options": [
      { "text": "The P wave normally reflects atrial contraction, and two humps indicate two separate contractions", "explanation": "Incorrect. The P wave is atrial depolarization, and the lecturer stresses that a rhythm strip shows electrical conductance rather than contraction; the atrial squeeze follows the P wave rather than being represented by it. Two humps do not mean two mechanical beats. This would be the correct answer if the tracing were a pressure or echocardiographic recording of atrial mechanical activity." },
      { "text": "The atria repolarize during the P wave, and repolarization creates the second hump", "explanation": "Incorrect. Atrial repolarization is not visible as a separate deflection because it is masked by the much larger QRS complex, as the summary slide states. It cannot account for a notch inside the P wave. This would be the correct answer if atrial repolarization produced a discrete visible wave on the surface tracing." },
      { "text": "The QRS complex begins early and superimposes its initial deflection on the P wave", "explanation": "Incorrect. The QRS follows the PR segment and does not overlap the P wave in this manner, and QRS deflections are far larger in amplitude than any component of the P wave. Superimposition of that kind is not the described mechanism. This would be the correct answer if the vignette described a very short PR interval with a slurred upstroke fusing into the QRS." },
      { "text": "The P wave is a summation of both atria, and delayed left atrial activation separates the two components", "explanation": "Correct. The P wave is the summation of right and left atrial depolarization. Because the left atrium sits farther from the SA node, it depolarizes slightly later than the right, and normally the two components fuse into one smooth hump. If one atrium is enlarged or there is an intra-atrial conduction delay, the two components separate and produce a double hump, the appearance called P mitrale. Atrial hypertrophy would additionally increase P wave amplitude." },
      { "text": "Depolarization of the atrioventricular node adds a second small deflection to the end of the P wave", "explanation": "Incorrect. AV nodal conduction is electrically silent on the surface tracing and appears as the flat PR segment, which is exactly why AV nodal disease lengthens the PR interval rather than adding a visible wave. The node contributes no deflection of its own. This would be the correct answer if AV nodal tissue generated enough summed voltage to be recorded at the body surface." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: the P wave is the summation of right then left atrial depolarization; a double hump (P mitrale) means one atrium is enlarged or intra-atrial conduction is delayed.",
    "pdfPage": 7,
    "pdfQuote": "summation of atrial depolarization"
  },
  {
    "id": 6,
    "category": "Cardiology: ECG Intervals",
    "questionText": "A 71-year-old man has a resting ECG on which the interval from the onset of the P wave to the onset of the QRS complex measures 260 milliseconds. Where along the conduction pathway is the abnormality most likely located, and why?",
    "options": [
      { "text": "In the Purkinje fibers, because they are the final tissue before ventricular muscle is excited", "explanation": "Incorrect. Disease distal to the bundle of His widens the QRS complex rather than lengthening the PR interval, because the PR interval ends at the onset of ventricular depolarization. The Purkinje system is also the fastest-conducting tissue in the heart. This would be the correct answer if the abnormal measurement had been a QRS duration of 140 milliseconds." },
      { "text": "In the SA node, because the interval begins with sinus node discharge", "explanation": "Incorrect. Sinus node dysfunction changes the rate or regularity of P waves rather than the distance between the P wave and the QRS complex. The PR interval is measured from atrial depolarization onward, so it does not include sinus node discharge itself. This would be the correct answer if the tracing showed pauses or an inappropriately slow atrial rate rather than a long PR interval." },
      { "text": "In the ventricular myocardium, because slow myocyte-to-myocyte spread delays the QRS", "explanation": "Incorrect. Slow spread through working ventricular muscle prolongs the QRS complex itself, since that complex represents ventricular depolarization. It does not affect the time from atrial to ventricular activation. This would be the correct answer if the described abnormality had been a broad QRS with normal atrioventricular timing." },
      { "text": "In the AV node, because the PR interval represents conduction from the SA node through the AV node", "explanation": "Correct. The PR interval is the time from the start of atrial depolarization to the start of ventricular depolarization, and its duration is dominated by transit through the AV node. Normal is 120 to 200 milliseconds, so 260 milliseconds is prolonged. The lecture states directly that a conduction problem at the AV node is seen as a prolonged PR interval, which is the electrocardiographic signature of AV block." },
      { "text": "In the left bundle branch, because its anterior and posterior fascicles conduct in parallel", "explanation": "Incorrect. Left bundle branch and fascicular disease alter ventricular activation and therefore the QRS complex; the lecture lists blockages at the left bundle, right bundle or the fascicles as reasons the QRS may be prolonged. They do not lengthen the PR interval. This would be the correct answer if the abnormality had been a widened QRS with a normal PR interval." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: normal PR is 120-200 ms and reflects AV nodal transit; a long PR localizes disease to the AV node, while a wide QRS localizes it below the His bundle.",
    "pdfPage": 8,
    "pdfQuote": "PR interval- time from the start of atrial depolarization"
  },
  {
    "id": 7,
    "category": "Cardiology: ECG Intervals",
    "questionText": "A 24-year-old woman is brought to the emergency department after an intentional overdose. Her ECG shows a QRS duration of 145 milliseconds with a normal PR interval. Which category of explanation for QRS prolongation does this finding most likely represent?",
    "options": [
      { "text": "A drug effect on ventricular depolarization rather than an anatomic conduction block", "explanation": "Correct. The lecture divides QRS prolongation into conduction system disease (left bundle, right bundle or fascicular block) and a second group that includes hyperkalemia, tricyclic antidepressants, sodium channel blocking agents and Wolff-Parkinson-White syndrome. An intentional overdose in a young patient with an otherwise normal PR interval points to the pharmacologic mechanism, because tricyclics and other sodium channel blockers slow ventricular depolarization directly. The QRS is prolonged because ventricular depolarization takes longer, which is precisely what the QRS represents." },
      { "text": "An atrioventricular nodal conduction delay from the ingested agent", "explanation": "Incorrect. A delay at the AV node would show up as a prolonged PR interval, and the vignette specifies that the PR interval is normal. The QRS reflects ventricular rather than atrioventricular conduction. This would be the correct answer if the tracing had shown a PR interval well beyond 200 milliseconds with a narrow QRS complex." },
      { "text": "An increase in QRS amplitude from ventricular hypertrophy", "explanation": "Incorrect. Amplitude and duration are separate measurements answering separate questions: amplitude reflects muscle mass and the tissue between heart and electrode, while duration reflects conduction integrity. Hypertrophy raises amplitude and is not the cause of a 145 millisecond duration here. This would be the correct answer if the abnormality described had been tall R waves with a normal QRS width." },
      { "text": "Ventricular repolarization abnormality prolonging the terminal portion of the complex", "explanation": "Incorrect. Repolarization is represented by the T wave and contributes to the QT interval, not to the QRS duration, which represents depolarization only. Confusing the two is the trap here. This would be the correct answer if the abnormal measurement had been a QT interval exceeding half the R-R interval." },
      { "text": "Pericardial inflammation altering the transmission of voltage to the chest wall", "explanation": "Incorrect. Pericarditis is listed in the lecture as a cause of decreased QRS amplitude, along with obesity, rather than as a cause of QRS prolongation. Amplitude and duration are once again distinct. This would be the correct answer if the tracing showed diffusely small complexes rather than wide ones." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: causes of a wide QRS include bundle branch and fascicular block, hyperkalemia, tricyclic antidepressants, sodium channel blockers, and Wolff-Parkinson-White syndrome.",
    "pdfPage": 9,
    "pdfQuote": "QRS complex- ventricular depolarization"
  },
  {
    "id": 8,
    "category": "Cardiology: ECG Waveform Physiology",
    "questionText": "Two patients have ECGs recorded on the same machine at identical gain. The first is a thin 22-year-old man with tall QRS complexes; the second is a 55-year-old man with a large pericardial effusion whose complexes are uniformly small. Which principle best explains the difference in QRS amplitude?",
    "options": [
      { "text": "QRS duration and QRS amplitude vary together, so small complexes are also narrow complexes", "explanation": "Incorrect. Duration and amplitude are independent measurements that answer different questions, and the lecture treats them separately: duration reports conduction integrity while amplitude reports muscle mass and insulation. Small complexes may be perfectly normal in width. This would be the correct answer if amplitude were mechanically coupled to conduction velocity." },
      { "text": "Amplitude reflects the intrinsic pacemaker rate of the tissue generating the deflection", "explanation": "Incorrect. Pacemaker rate determines how often a tissue fires, not how large a deflection it inscribes, and the QRS is generated by ventricular muscle being depolarized rather than by an automatic focus. Rate and voltage are unrelated here. This would be the correct answer if deflection height were proportional to firing frequency." },
      { "text": "Amplitude depends on ventricular muscle mass and on what lies between myocardium and electrode", "explanation": "Correct. The lecture states that QRS amplitude is increased in left ventricular hypertrophy, right ventricular hypertrophy and in more frail or thin patients, and decreased in obese patients and in the setting of pericarditis. More muscle or less intervening tissue raises the recorded voltage, while more fat or fluid between the myocardium and the electrode attenuates it. This is why the same electrical event can inscribe very different amplitudes in two different bodies." },
      { "text": "Amplitude is determined by the direction of the mean vector rather than by tissue between the heart and the electrode", "explanation": "Incorrect. Direction determines whether a deflection is positive, negative or equiphasic, and it certainly modulates amplitude in an individual lead, but the systematic difference between a thin patient and a patient with an effusion is attenuation by intervening tissue. The lecture lists body habitus and pericarditis explicitly. This would be the correct answer if the comparison were between two leads on the same patient rather than between two patients." },
      { "text": "Amplitude falls when repolarization is delayed, because the T wave encroaches on the QRS", "explanation": "Incorrect. Repolarization produces the T wave and lengthens the QT interval when delayed; it does not shrink the QRS. The lecture attributes low amplitude to obesity and pericarditis. This would be the correct answer if the question concerned a prolonged QT interval and its arrhythmic risk." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: QRS amplitude rises with LVH, RVH and a thin body habitus, and falls with obesity and pericarditis. Duration is a separate measurement that reports conduction.",
    "pdfPage": 9,
    "pdfQuote": "Amplitude and duration of QRS complex essential"
  },
  {
    "id": 9,
    "category": "Cardiology: ECG Waveform Physiology",
    "questionText": "During a cardiac cycle, which statement most accurately describes the electrical and mechanical state of the ventricles during the ST segment?",
    "options": [
      { "text": "The ventricles are repolarizing, which is why the segment returns toward baseline", "explanation": "Incorrect. Ventricular repolarization is represented by the T wave, which follows the ST segment. Assigning repolarization to the ST segment is the classic mix-up between the segment and the wave that follows it. This would be the correct answer if the question had asked what the T wave represents." },
      { "text": "The ventricles are depolarizing progressively from endocardium to epicardium", "explanation": "Incorrect. Progressive ventricular depolarization is inscribed as the QRS complex, and by the time the ST segment begins that process is complete. This is why the segment is isoelectric. This would be the correct answer if the question had asked what the QRS complex represents." },
      { "text": "The ventricles are uniformly depolarized and are contracting mechanically", "explanation": "Correct. The lecture describes the ST segment as isoelectric because the ventricles are depolarized, and specifically states that this is when the mechanical contraction of the ventricles occurs. Because the whole ventricular mass is at the same potential, no net voltage difference is recorded and the tracing sits on baseline. Deviation from that baseline is therefore meaningful, which is why ST elevation in anatomically contiguous leads defines a STEMI and ST depression is likewise clinically significant." },
      { "text": "The atria are repolarizing while the ventricles remain electrically silent throughout", "explanation": "Incorrect. Atrial repolarization is masked by the QRS complex and never appears as a separate visible deflection, and the ventricles are not silent during the ST segment but are uniformly depolarized and contracting. This would be the correct answer if atrial repolarization produced a discrete recordable wave after the QRS." },
      { "text": "The AV node is conducting, which is why no ventricular voltage is recorded", "explanation": "Incorrect. AV nodal conduction is what occupies the PR segment, not the ST segment, and by the ST segment the impulse has already traversed the His-Purkinje system and depolarized the ventricles. This would be the correct answer if the question had asked about the flat portion between the P wave and the QRS complex." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: the ST segment is isoelectric because the ventricles are uniformly depolarized and contracting; deviation from baseline in contiguous leads is what makes it clinically significant.",
    "pdfPage": 10,
    "pdfQuote": "ST segment- isoelectric, ventricles depolarized"
  },
  {
    "id": 10,
    "category": "Cardiology: Electrolytes and the ECG",
    "questionText": "A 59-year-old man on dialysis misses two sessions and presents with weakness. His ECG shows markedly tall, peaked T waves. Which statement best links this finding to the underlying physiology?",
    "options": [
      { "text": "The T wave represents atrial repolarization, which becomes exaggerated when serum potassium rises", "explanation": "Incorrect. Atrial repolarization is masked by the QRS complex and is not visible as a discrete wave, and the T wave represents ventricular repolarization. Attributing the T wave to the atria is a common error. This would be the correct answer if atrial repolarization inscribed its own recordable deflection on the surface tracing." },
      { "text": "The T wave represents ventricular depolarization, and hyperkalemia accelerates that process", "explanation": "Incorrect. Ventricular depolarization is the QRS complex; the T wave is repolarization. Hyperkalemia does affect the QRS by widening it, but the peaked T wave itself is a repolarization phenomenon. This would be the correct answer if the described finding had been a broad QRS complex rather than a peaked T wave." },
      { "text": "The T wave reflects mechanical ventricular contraction, which is stronger when potassium is high", "explanation": "Incorrect. Mechanical contraction of the ventricles corresponds to the ST segment, and a rhythm strip records electrical conductance rather than contraction in any case. This would be the correct answer if the question had asked which portion of the tracing coincides with ventricular ejection." },
      { "text": "The T wave reflects atrial depolarization, so a large T wave implies atrial enlargement", "explanation": "Incorrect. Atrial depolarization produces the P wave, and atrial enlargement changes P wave morphology and amplitude, not T wave amplitude. This would be the correct answer if the described abnormality had been a tall or notched P wave in a patient with mitral valve disease." },
      { "text": "The T wave represents ventricular repolarization, and potassium lives under the T wave", "explanation": "Correct. The T wave is ventricular repolarization, and the lecturer's retrieval cue is that potassium lives under the T wave. In hyperkalemia the T wave amplitude increases; in hypokalemia it flattens and may unmask a prominent U wave. Hyperkalemia is the one electrolyte disturbance in this lecture that appears in two places, because it can also widen the QRS complex by slowing ventricular depolarization." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: potassium lives under the T wave. Hyperkalemia peaks the T wave and can widen the QRS; hypokalemia flattens the T wave and unmasks a U wave.",
    "pdfPage": 11,
    "pdfQuote": "T wave- ventricular repolarization"
  },
  {
    "id": 11,
    "category": "Cardiology: ECG Intervals",
    "questionText": "On a rhythm strip the R-R interval measures 800 milliseconds and the QT interval measures 460 milliseconds. Using the rule of thumb taught in this lecture, how should this QT interval be characterized and what does it represent electrically?",
    "options": [
      { "text": "Normal, because the QT interval is shorter than the R-R interval and reflects ventricular depolarization only", "explanation": "Incorrect. Simply being shorter than the R-R interval is not the rule; the QT must be less than half the R-R interval. The QT also spans depolarization through repolarization rather than depolarization alone. This would be the correct answer if the rule of thumb compared the QT to the full R-R interval rather than to half of it." },
      { "text": "Prolonged, because a normal QT is less than half the R-R interval and it spans ventricular systole", "explanation": "Correct. The lecture's rule of thumb is that a normal QT interval is less than half of the R-R interval, so with an R-R of 800 milliseconds the QT should be under 400 milliseconds; 460 is therefore prolonged. Electrically the QT interval describes the time from ventricular depolarization through mechanical contraction to ventricular repolarization, which together constitute ventricular systole. Prolongation matters because it increases the risk of ventricular arrhythmia, principally torsades de pointes." },
      { "text": "Prolonged, because any QT interval above 400 milliseconds is abnormal regardless of rate", "explanation": "Incorrect. Although the numerical conclusion happens to be right here, the reasoning is wrong: the threshold given in this lecture is rate-dependent and expressed as a fraction of the R-R interval, not as a fixed millisecond cutoff. Using a fixed cutoff would misclassify tracings at fast and slow rates. This would be the correct answer if the lecture had taught an absolute upper limit independent of heart rate." },
      { "text": "Normal, because the QT interval should equal the PR interval plus the QRS duration", "explanation": "Incorrect. There is no such relationship taught in this lecture, and the PR interval is not part of the QT interval at all, since the QT begins with ventricular depolarization. This would be the correct answer if the QT were defined as beginning with atrial depolarization." },
      { "text": "Indeterminate, because the QT interval cannot be assessed without at least twelve simultaneous leads", "explanation": "Incorrect. The lecture presents the half-of-the-R-R rule as usable on a rhythm strip, and rhythm strips are exactly what is available on telemetry and during codes. A single lead is sufficient for this estimate. This would be the correct answer if determining axis were the task, which does require lead I and aVF together." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: a normal QT is less than half the R-R interval, and the QT spans ventricular depolarization, contraction and repolarization together.",
    "pdfPage": 12,
    "pdfQuote": "Generally less than half of the R-R interval"
  },
  {
    "id": 12,
    "category": "Cardiology: Pharmacology and the ECG",
    "questionText": "A hospitalized patient is receiving several new medications, and the team wants to know which of them carries the risk of QT prolongation taught in this lecture. Which of the following agents belongs to that list?",
    "options": [
      { "text": "A macrolide antibiotic", "explanation": "Correct. The lecture's mnemonic Anti-ABCDE lists the drug groups that prolong the QT interval, and the letter B stands for anti-biotics, specifically the macrolides. The other members are antiarrhythmics of classes Ia and III, antipsychotics such as haloperidol, antidepressants such as the tricyclics, antiemetics such as ondansetron, and antifungals of the azole group. Recognizing these matters because a prolonged QT increases the risk of torsades de pointes, which can degenerate to ventricular tachycardia and ventricular fibrillation." },
      { "text": "An aminoglycoside antibiotic given once daily for a Gram-negative infection", "explanation": "Incorrect. The antibiotic group named in the Anti-ABCDE mnemonic is the macrolides, not the aminoglycosides. Aminoglycosides are not among the QT-prolonging agents listed in this lecture. This would be the correct answer if the mnemonic's B had referred to aminoglycoside antibiotics." },
      { "text": "A selective serotonin reuptake inhibitor", "explanation": "Incorrect. The antidepressant group named in the mnemonic is the tricyclics, and the lecture's own vignette specifically involves a patient who failed SSRIs and SNRIs and is moving to imipramine, a tricyclic, precisely because that switch introduces QT risk. This would be the correct answer if the D in the mnemonic had referred to serotonergic agents generally." },
      { "text": "A loop diuretic", "explanation": "Incorrect. Loop diuretics are not on the Anti-ABCDE list. Electrolyte imbalance is listed separately as a cause of QT prolongation, but the drug list itself names six anti- categories. This would be the correct answer if the question had asked about an indirect cause mediated through potassium loss rather than about the drug list taught here." },
      { "text": "A beta-adrenergic blocker", "explanation": "Incorrect. Beta blockers do not appear on the Anti-ABCDE list of QT-prolonging drugs in this lecture. The antiarrhythmic classes named are Ia and III. This would be the correct answer if the mnemonic had included class II antiarrhythmic agents." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Anti-ABCDE for QT prolongation - antiarrhythmics (Ia, III), antibiotics (macrolides), antipsychotics (haloperidol), antidepressants (TCAs), antiemetics (ondansetron), antifungals (azoles).",
    "pdfPage": 13,
    "pdfQuote": "Anti- Biotics (macrolides)"
  },
  {
    "id": 13,
    "category": "Cardiology: ECG Lead Placement",
    "questionText": "You are asked to obtain a 12-lead ECG. You have already placed V1 and V2 at the fourth intercostal space on either side of the sternum. Which electrode should you position next, and where?",
    "options": [
      { "text": "V3, midway between V2 and V4 at the fourth intercostal space", "explanation": "Incorrect. V3 is indeed placed between V2 and V4, but it cannot be positioned until V4 exists, and it does not sit at the fourth intercostal space. Placing it prematurely guarantees a guess. This would be the correct answer if V3 had an independently defined anatomic landmark of its own." },
      { "text": "V6, at the midaxillary line in the same transverse plane as V4", "explanation": "Incorrect. V6 is correctly described as sitting at the midaxillary line in the transverse plane of V4, but like V3 it is defined relative to V4 and therefore comes later in the sequence. Its position depends on a landmark not yet established. This would be the correct answer if you had already placed V4 and V5." },
      { "text": "V5, at the anterior axillary line lateral to the sternal border", "explanation": "Incorrect. V5 sits at the anterior axillary line in the same transverse plane as V4, next to V4 rather than referenced to the sternal border, and again it cannot be placed before V4. The described landmark is also wrong. This would be the correct answer if V5 were defined by its distance from the sternum instead of by V4's plane." },
      { "text": "V4, at the fifth intercostal space in the midclavicular line", "explanation": "Correct. The lecturer teaches placing V1 and V2 flanking the sternum at the fourth intercostal space, then jumping to V4 at the fifth intercostal space in the midclavicular line, and only then returning to fill in V3 between V2 and V4. V5 and V6 follow at the anterior axillary and midaxillary lines in V4's transverse plane. The order matters because V3, V5 and V6 are all defined relative to V4, so V4 must be anchored first." },
      { "text": "The white limb electrode, on the right arm before any further chest electrodes are placed", "explanation": "Incorrect. Limb electrodes and precordial electrodes are two separate families and the limb leads have no bearing on where the remaining chest electrodes go. The white lead does belong on the right arm, but that is not what the sequence of precordial placement requires next. This would be the correct answer if the question had asked where the white electrode is placed." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: place V1, V2, then V4 at the 5th ICS midclavicular line, then fill in V3 between V2 and V4; V5 and V6 follow V4's transverse plane.",
    "pdfPage": 18,
    "pdfQuote": "V4= 5th ICS"
  },
  {
    "id": 14,
    "category": "Cardiology: ECG Lead Placement",
    "questionText": "An attending watches you attach the limb electrodes during a chest pain evaluation and asks you to justify where you put the white electrode. Which answer is correct according to the mnemonic taught in this lecture?",
    "options": [
      { "text": "The left arm, because white and black are the two upper limb electrodes and white goes to the left", "explanation": "Incorrect. The mnemonic assigns white to the right side of the body, not the left, and the lecture's own worked case confirms that placing the white electrode on the right arm is correct. This would be the correct answer if the mnemonic had read white on the left rather than green and white on the right." },
      { "text": "The left leg, because the left lower limb is used for all vector calculations", "explanation": "Incorrect. The left lower limb is indeed used for the vector calculations because the heart sits on the left side of the chest, but the electrode there is red, not white. Two separate facts are being conflated. This would be the correct answer if the question had asked which limb is used as the third corner of Einthoven's triangle." },
      { "text": "The right leg, because green and white both belong on the right side of the body", "explanation": "Incorrect. Green and white do both belong on the right side, but green is the right leg and white is the right arm; the second half of the mnemonic, Christmas trees below the knees, assigns green and red to the two lower limbs. This would be the correct answer if the question had asked where the green electrode goes." },
      { "text": "Any limb, because the machine reassigns limb electrodes automatically by impedance", "explanation": "Incorrect. Electrode position determines both the amplitude and the sign of the recorded deflection, which is why the lecturer stresses correct anatomic placement. No automatic reassignment occurs. This would be the correct answer if lead polarity were independent of where the electrodes were attached." },
      { "text": "The right arm", "explanation": "Correct. Dr. Cohen's mnemonic is green and white on the right, Christmas trees below the knees. The first half places the green electrode on the right leg and the white electrode on the right arm, both on the right side of the body; the second half uses the green and red Christmas colors for the two lower limbs, green on the right leg and red on the left leg. In the lecture's worked case an 84-year-old woman with crushing chest pain has the white electrode placed on the right arm, and the answer is that the attending should be proud." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: green and white on the right, Christmas trees below the knees - white is the right arm, green the right leg, red the left leg.",
    "pdfPage": 18,
    "pdfQuote": "Christmas trees below the"
  },
  {
    "id": 15,
    "category": "Cardiology: Vectors and Voltage",
    "questionText": "A depolarization wavefront in ventricular myocardium travels directly toward the positive electrode of a recording lead. What deflection will that lead inscribe, and what is the underlying rule?",
    "options": [
      { "text": "A negative deflection, because current flowing toward an electrode drives the tracing below baseline", "explanation": "Incorrect. This inverts the rule the lecturer repeats twice for emphasis. Depolarization toward a lead is positive and away from it is negative. This would be the correct answer if the wavefront in the vignette had been moving away from the recording electrode." },
      { "text": "A positive deflection, because depolarization toward a lead produces positive voltage", "explanation": "Correct. The lecturer repeats the rule deliberately: voltage is positive when depolarization occurs toward the lead and negative when depolarization occurs away from the lead. A positive QRS is one in which the R wave is farther from baseline than the S wave, a negative QRS is one in which the R is smaller than the S, and when the two are equidistant from baseline the complex is equiphasic or biphasic. Every later concept in this lecture, including R-wave progression and axis determination, is this single rule applied to different geometry." },
      { "text": "An equiphasic complex, because ventricular depolarization always has offsetting components", "explanation": "Incorrect. An equiphasic or biphasic complex arises when the wavefront travels perpendicular to the lead axis so that its positive and negative contributions cancel, not when it travels directly toward the electrode. In the precordial leads this transition normally appears between V3 and V4. This would be the correct answer if the wavefront were oriented at right angles to the lead." },
      { "text": "No deflection at all, because a lead records only differences between two limb electrodes", "explanation": "Incorrect. Bipolar limb leads do record potential differences between two electrodes, but they still inscribe positive and negative deflections according to the direction of the wavefront relative to the lead axis. A silent tracing is not the consequence. This would be the correct answer if lead recordings were insensitive to the direction of depolarization." },
      { "text": "A positive deflection, but only in the precordial leads, since limb leads record magnitude alone", "explanation": "Incorrect. Everything on the ECG is a vector carrying both amplitude and direction, and the limb leads are exactly the leads used to construct Einthoven's triangle and determine axis from polarity. Limb leads are no less directional than precordial leads. This would be the correct answer if the limb leads reported unsigned magnitude only." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: voltage is positive when depolarization moves toward the lead and negative when it moves away; perpendicular wavefronts give equiphasic complexes.",
    "pdfPage": 22,
    "pdfQuote": "Introduction to Voltage"
  },
  {
    "id": 16,
    "category": "Cardiology: Cardiac Anatomy and Orientation",
    "questionText": "A 46-year-old man is stabbed in the anterior chest just left of the sternum at the fourth intercostal space. He is hypotensive with distended neck veins, and bedside ultrasound shows pericardial fluid. The trauma team asks which cardiac chamber is most likely to have been injured by an anteriorly directed penetrating wound at this location. Which chamber is most anterior in the chest, and what determines this arrangement?",
    "options": [
      { "text": "The left ventricle, because it is the thickest chamber and dominates the cardiac silhouette", "explanation": "Incorrect. The left ventricle is thicker and larger than the right, which is why the net electrical vector points down and to the left, but thickness is not the same as anterior position. The lecture is explicit that the most anterior chamber is the right ventricle. This would be the correct answer if the question had asked which chamber dominates the direction of the mean QRS vector." },
      { "text": "The right ventricle, because the heart is rotated left and retroverted rather than named for position", "explanation": "Correct. The lecture states that the names of the atria and ventricles denote their embryologic origin rather than their position in the chest, which is what makes cardiac orientation counterintuitive. The heart's angle from base to apex is rotated to the left and retroverted, meaning tilted backward, so the most anterior chamber in the chest is the right ventricle and the most posterior chamber is the left atrium. An anteriorly directed penetrating wound just left of the sternum therefore threatens the right ventricle first." },
      { "text": "The left atrium, because it lies immediately behind the sternum in the retrosternal space", "explanation": "Incorrect. The left atrium is the most posterior chamber, not the most anterior one, and it lies against the esophagus rather than the sternum. This option reverses the correct arrangement. This would be the correct answer if the question had asked which chamber is closest to the esophagus on a transesophageal study." },
      { "text": "The right atrium, because it receives the superior vena cava at the level of the SA node", "explanation": "Incorrect. The SA node does sit at the junction of the superior vena cava and the right atrium, but that anatomic detail concerns the origin of the impulse rather than which chamber is most anterior. The most anterior chamber is the right ventricle. This would be the correct answer if the question had asked where the dominant pacemaker of the heart is located." },
      { "text": "The right ventricle, because the ventricles are always positioned anterior to the atria in the thorax", "explanation": "Incorrect. The chamber is right, but the reasoning is wrong: the left atrium being the most posterior chamber is a consequence of the heart's leftward rotation and backward tilt, not of a simple ventricle-in-front-of-atrium rule. Chamber names reflect embryologic origin, not position. This would be the correct answer if cardiac position followed a fixed anterior-to-posterior ordering of ventricles then atria." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: the heart is rotated left and retroverted, so the right ventricle is the most anterior chamber and the left atrium the most posterior. Chamber names reflect embryologic origin, not position.",
    "pdfPage": 25,
    "pdfQuote": "SA node located at the junction of the RA and"
  },
  {
    "id": 17,
    "category": "Cardiology: Einthoven's Triangle",
    "questionText": "A 52-year-old woman with palpitations has a 12-lead ECG. Her rhythm strip at the bottom of the page is recorded from the lead that measures the electrical potential between the right arm and the left lower limb. She asks which lead is being displayed and why that one is chosen. Which lead is it, and how is it defined on Einthoven's triangle?",
    "options": [
      { "text": "Lead I, defined as the potential between the right arm and the left arm", "explanation": "Incorrect. Lead I is correctly defined as the potential between the right arm and the left arm and forms the base at the top of Einthoven's triangle, but the vignette specifies the right arm and the left lower limb. Lead I is also the reference set at zero degrees for axis determination. This would be the correct answer if the two electrodes described had both been on the upper limbs." },
      { "text": "Lead III, defined as the potential between the left arm and the left lower limb", "explanation": "Incorrect. Lead III is the potential between the left arm and the left leg, which by the count-the-L's mnemonic contains three L's. The vignette begins at the right arm, not the left arm. This would be the correct answer if the described pair had been the left arm and the left leg." },
      { "text": "Lead II, defined as the potential between the right arm and the left lower limb", "explanation": "Correct. On Einthoven's triangle, lead I is the potential between the right arm and left arm, lead II between the right arm and the left leg, and lead III between the left arm and the left leg; the count-the-L's mnemonic gives one L, two L's and three L's respectively. Lead II is the conventional rhythm strip printed along the bottom of a 12-lead because its axis runs roughly parallel to the heart's normal leftward and downward vector, giving prominent upright P waves and QRS complexes. That rhythm strip also runs the full 10 seconds, while each lead in the grid above shows only about 2.5 seconds." },
      { "text": "Lead aVF, an augmented vector pointing toward the feet and perpendicular to lead I", "explanation": "Incorrect. aVF is an augmented unipolar lead that points toward the feet and is perpendicular to lead I, which is why it pairs with lead I for axis determination. It is not defined as a potential between the right arm and the left leg. This would be the correct answer if the question had asked which lead is used together with lead I to establish the axis." },
      { "text": "Lead aVR, an augmented vector pointing toward the right arm and perpendicular to lead III", "explanation": "Incorrect. aVR points toward the right arm and is perpendicular to lead III according to the RaLF 3,2,1 mnemonic, but it is an augmented lead rather than a bipolar potential between two named limbs. This would be the correct answer if the question had described the perpendicular dropped to lead III." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: count the L's - lead I is RA to LA, lead II is RA to LL, lead III is LA to LL. Lead II is the conventional rhythm strip.",
    "pdfPage": 27,
    "pdfQuote": "Lead II- potential between RA and LL"
  },
  {
    "id": 18,
    "category": "Cardiology: Einthoven's Triangle",
    "questionText": "A student is handed a 12-lead ECG in which the lead labels have been cut off. She reconstructs the page by remembering that the augmented leads occupy the second column of the left-hand block. She then wants to know which bipolar lead each augmented lead is perpendicular to, so she can use the pair that boxes in the axis. Which pairing is correct?",
    "options": [
      { "text": "aVF is perpendicular to lead I, aVL to lead II, and aVR to lead III", "explanation": "Correct. To complete Einthoven's triangle, a perpendicular is dropped to the middle of each side, generating the augmented leads. The mnemonic RaLF 3,2,1 encodes the pairing: aVR is perpendicular to lead III, aVL to lead II, and aVF to lead I. This is exactly why lead I and aVF are the pair used to determine axis, since perpendicular leads divide the frontal plane into quadrants and their polarities localize the mean vector." },
      { "text": "aVF is perpendicular to lead III, aVL to lead I, and aVR to lead II", "explanation": "Incorrect. This scrambles the RaLF 3,2,1 pairing, which assigns aVR to III, aVL to II and aVF to I. Getting it backwards would lead a student to pair lead I with aVL, two leads that are not perpendicular. This would be the correct answer if the mnemonic had read RaLF 1,2,3." },
      { "text": "aVR, aVL and aVF are each perpendicular to lead II, since lead II is the reference axis", "explanation": "Incorrect. Three leads cannot all be perpendicular to the same axis in one plane, and lead II is not the reference. Lead I is the reference set at zero degrees for the axis circle. This would be the correct answer if the augmented leads were all derived from a single bipolar axis." },
      { "text": "The augmented leads are parallel rather than perpendicular to the bipolar leads they are named for", "explanation": "Incorrect. The augmented leads are constructed as perpendiculars from the midpoint of each side of the triangle, which is what makes the lead I and aVF pairing useful for axis determination. Parallel leads would give redundant information. This would be the correct answer if the augmented leads simply duplicated the bipolar lead axes." },
      { "text": "aVR points to the right arm and is therefore perpendicular to lead I, the right-arm-to-left-arm lead", "explanation": "Incorrect. aVR does point toward the right arm, and the naming does help you remember where each augmented vector points, but the perpendicular relationship is to lead III, not lead I. Naming and perpendicularity are two different facts. This would be the correct answer if the perpendicular assignments followed the shared electrode rather than the RaLF 3,2,1 order." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: RaLF 3,2,1 - aVR is perpendicular to III, aVL to II, aVF to I. That perpendicularity is why lead I and aVF are used together to find the axis.",
    "pdfPage": 28,
    "pdfQuote": "Lead avF- perpendicular to I"
  },
  {
    "id": 19,
    "category": "Cardiology: ECG Axis",
    "questionText": "A 63-year-old man is admitted with dyspnea. His ECG is technically excellent and you are asked to comment on the axis. You recall that the axis circle is built from Einthoven's triangle with lead I as the reference. Which statement correctly describes the convention used to express the axis in degrees?",
    "options": [
      { "text": "Lead aVF is set at 0 degrees, and deflections toward the right arm are expressed as positive angles", "explanation": "Incorrect. aVF is set at +90 degrees, not at 0, and it is lead I that serves as the zero reference. The direction toward the right arm corresponds to a strongly negative or extreme angle. This would be the correct answer if the reference axis had been the augmented vector foot lead." },
      { "text": "Lead II is set at 0 degrees because it is the conventional rhythm strip lead", "explanation": "Incorrect. Being the conventional rhythm strip has no bearing on the angular reference frame, and lead II sits at +60 degrees rather than at 0. Lead I is the reference. This would be the correct answer if the axis circle were constructed around the rhythm strip lead." },
      { "text": "The circle is anchored at the SA node, so angles are measured from the superior vena cava downward", "explanation": "Incorrect. The axis circle is a geometric construction from Einthoven's triangle in the frontal plane, not an anatomic measurement from the sinus node. The SA node's position at the junction of the SVC and right atrium is a separate fact. This would be the correct answer if axis were defined anatomically rather than electrically." },
      { "text": "Lead I is set at 0 degrees, counterclockwise angles are negative and clockwise angles positive", "explanation": "Correct. The lecture uses zero degrees as lead I, with any diversion counterclockwise producing a negative angle away from zero and any clockwise diversion producing a positive angle. On that circle aVF sits at +90 degrees. The lecturer gives the normal axis range as negative 30 to positive 60 degrees, which is narrower than the negative 30 to positive 90 quoted in many textbooks, so the lecture's numbers should be used for this course." },
      { "text": "Angles are measured from the apex of the heart, so a normal axis is expressed as a negative value", "explanation": "Incorrect. Angles are measured on the frontal plane circle referenced to lead I, and a normal axis in this lecture spans negative 30 to positive 60 degrees, so most of the normal range is positive. The apex is not the reference point. This would be the correct answer if the convention placed zero at the cardiac apex." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: lead I is 0 degrees, counterclockwise is negative and clockwise positive. This lecture gives normal axis as -30 to +60 degrees.",
    "pdfPage": 29,
    "pdfQuote": "Axis= the major direction"
  },
  {
    "id": 20,
    "category": "Cardiology: ECG Axis",
    "questionText": "A 74-year-old man presents to the emergency department with severe substernal chest pain radiating to the jaw. He is diaphoretic, blood pressure 148/86 mmHg, pulse 96/min, respirations 20/min. A stat 12-lead ECG is obtained. Before commenting on the ST segments your attending asks you to state the axis. You note that the QRS complex is upright in lead I and also upright in lead aVF. What can you conclude?",
    "options": [
      { "text": "The axis is deviated to the left, between 0 and negative 90 degrees", "explanation": "Incorrect. Left axis deviation requires a negative QRS in aVF while lead I remains upright, because a negative aVF means the mean vector points upward rather than downward. Both leads are upright here. This would be the correct answer if the QRS in aVF had been predominantly negative with an upright lead I." },
      { "text": "The axis is deviated to the right, between +90 and +180 degrees", "explanation": "Incorrect. Right axis deviation requires a negative QRS in lead I with an upright aVF, since a negative lead I means the vector points rightward. The vignette states lead I is upright. This would be the correct answer if lead I had been negative and aVF positive." },
      { "text": "The axis cannot be determined without also examining leads II and III", "explanation": "Incorrect. The lecture teaches determining axis from lead I and aVF specifically because those two leads are perpendicular to one another and therefore box in a quadrant on their own. Additional leads refine the estimate but are not required for this conclusion. This would be the correct answer if perpendicular lead pairs did not exist on the standard 12-lead." },
      { "text": "The axis is extreme, falling in the quadrant between negative 90 and 180 degrees", "explanation": "Incorrect. An extreme or far-deviated axis requires both lead I and aVF to be negative, placing the vector in the upper right quadrant. Two upright complexes exclude it. This would be the correct answer if both of the perpendicular leads had shown predominantly negative QRS complexes." },
      { "text": "The axis is normal and non-deviated, lying between 0 and +90 degrees", "explanation": "Correct. Leads I and aVF are used together because they are perpendicular, so their polarities localize the mean vector to a single quadrant. Since a positive deflection means depolarization is traveling toward that lead, an upright QRS in lead I places the vector leftward and an upright QRS in aVF places it downward, which is exactly where the heart's normal electrical potential should point. Both upright therefore means an axis between 0 and +90 degrees, a normal non-deviated axis, and this determination is made before turning to the ST segments." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: upright QRS in both lead I and aVF places the axis between 0 and +90 degrees - a normal, non-deviated axis.",
    "pdfPage": 30,
    "pdfQuote": "Normal Axis!"
  },
  {
    "id": 21,
    "category": "Cardiology: Vectors and Voltage",
    "questionText": "A 41-year-old woman has a screening ECG before starting a new exercise program. Reviewing the precordial leads you note that the QRS complex is predominantly negative in V1, becomes equiphasic between V3 and V4, and is predominantly upright by V5 and V6. Her physical examination is unremarkable. How should this pattern be interpreted, and what accounts for it?",
    "options": [
      { "text": "It is abnormal and suggests right ventricular hypertrophy, because the R wave grows across the precordium", "explanation": "Incorrect. Right ventricular hypertrophy is listed in this lecture as a cause of increased QRS amplitude, not as the explanation for a normal precordial transition. The described pattern is the expected one. This would be the correct answer if the tracing showed a dominant R wave already in V1 with right axis deviation." },
      { "text": "It is abnormal and indicates a bundle branch block, because the complex changes shape across leads", "explanation": "Incorrect. Bundle branch block is diagnosed from a prolonged QRS duration, and the lecture lists it among the causes of a wide QRS. A changing polarity across leads is geometry, not conduction delay. This would be the correct answer if the QRS duration had exceeded 120 milliseconds in every lead." },
      { "text": "It is abnormal and reflects electrode misplacement, because V1 should always be upright", "explanation": "Incorrect. V1 is normally predominantly negative because ventricular depolarization travels away from that electrode; an upright V1 is the finding that would raise concern. The lecture teaches that the R becomes more positive as you move from V1 toward V3 and beyond. This would be the correct answer if the described progression had been reversed or absent." },
      { "text": "It is normal but reflects atrial rather than ventricular activation moving across the precordium", "explanation": "Incorrect. The QRS complex records ventricular depolarization; atrial depolarization is the P wave and is far smaller in amplitude. The pattern described concerns the QRS. This would be the correct answer if the question had asked about the morphology of the P wave across the precordial leads." },
      { "text": "It is normal R-wave progression, with an equiphasic transition where the wavefront is perpendicular", "explanation": "Correct. R-wave progression is the precordial demonstration of the master rule that voltage is positive toward a lead and negative away from it. As the electrodes move from the right sternal border laterally across the chest, they increasingly face the direction of ventricular depolarization, so the R wave grows more positive from V1 to V2 to V3. Where the wavefront runs perpendicular to the lead axis the positive and negative contributions cancel and the complex is equiphasic, which normally occurs between V3 and V4. Good R-wave progression is described in the lecture as an indicator of heart health." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: normal R-wave progression grows the R from V1 to V3 with an equiphasic transition between V3 and V4 - a marker of a healthy heart.",
    "pdfPage": 22,
    "pdfQuote": "Introduction to Voltage"
  },
  {
    "id": 22,
    "category": "Cardiology: Pharmacology and the ECG",
    "questionText": "A 29-year-old man with treatment-resistant major depression presents to clinic. He has failed multiple SSRIs and SNRIs and wishes to start imipramine. He mentions that his uncle died suddenly at 34 and his grandfather died suddenly in his forties, both unexplained. His examination is normal and vital signs are unremarkable. Which ECG measurement is most important to obtain before writing the prescription, and why?",
    "options": [
      { "text": "The PR interval, because tricyclic agents act principally on atrioventricular nodal conduction", "explanation": "Incorrect. A prolonged PR interval signifies AV block, and while conduction disturbances can occur with these agents, the specific risk taught in this lecture that ties this family history to this drug is QT prolongation. The PR interval is the distractor built into the lecture's own version of this case. This would be the correct answer if the concern had been progressive heart block rather than sudden arrhythmic death." },
      { "text": "The QT interval, because tricyclics prolong it and the family history suggests congenital long QT", "explanation": "Correct. Imipramine is a tricyclic antidepressant, reserved for refractory cases, and the antidepressant entry in the Anti-ABCDE mnemonic is the TCAs. Independently, the history of unexplained sudden death in an uncle and a grandfather is concerning for congenital long QT syndrome, whose most common form is autosomal dominant and therefore appears across generations. Adding a QT-prolonging drug to an inherited channelopathy raises the risk of torsades de pointes, which can degenerate to ventricular tachycardia and then ventricular fibrillation. Obtaining a baseline ECG to measure the QT interval is the correct step before prescribing." },
      { "text": "The QRS duration, because sodium channel blockade widens the complex in overdose", "explanation": "Incorrect. Tricyclics do widen the QRS through sodium channel blockade, and that finding matters greatly in acute overdose, but at therapeutic initiation in a patient with this family history the interval that determines whether the drug is safe to start is the QT. The question asks what to check before prescribing. This would be the correct answer if the patient had presented obtunded after an intentional ingestion." },
      { "text": "The P wave morphology, because a double hump indicates the atrial enlargement that predisposes to sudden death", "explanation": "Incorrect. A double-humped P wave reflects atrial enlargement or intra-atrial conduction delay, which is unrelated to the inherited arrhythmia syndrome suggested here and unrelated to tricyclic pharmacology. This would be the correct answer if the vignette had described long-standing mitral valve disease with an abnormal P wave." },
      { "text": "The ST segment, because tricyclics cause coronary vasospasm and transient ST elevation", "explanation": "Incorrect. ST elevation in anatomically contiguous leads signifies a STEMI and is not the teaching point attached to tricyclic antidepressants in this lecture. Nothing in the vignette suggests ischemia. This would be the correct answer if the patient had presented with crushing chest pain radiating down the arm." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: screen for congenital long QT with an ECG in patients with a family history of sudden cardiac death before starting a QT-prolonging drug such as a TCA.",
    "pdfPage": 17,
    "pdfQuote": "He is interested in starting imipramine"
  },
  {
    "id": 23,
    "category": "Cardiology: Cardiac Conduction Physiology",
    "questionText": "A 69-year-old woman with progressive fatigue and two episodes of near-syncope has an ECG. You are told only that there is a block somewhere along her conduction pathway, without being told where. Before looking at the tracing, which set of possible findings should you expect on the basis of the lecture's summary of conduction block?",
    "options": [
      { "text": "Either a peaked T wave, a shortened QT interval, or a prominent U wave", "explanation": "Incorrect. These are the electrolyte-related findings taught in this lecture: peaked T waves in hyperkalemia and flattened T waves with a prominent U wave in hypokalemia. They report potassium status, not conduction block. This would be the correct answer if the question had described a missed dialysis session or severe diuretic-induced potassium loss." },
      { "text": "Either ST elevation, ST depression, or a return of the ST segment to the TP baseline", "explanation": "Incorrect. ST segment deviations report myocardial injury, with elevation reflecting transmural and depression subendocardial involvement, and the TP segment is the true isoelectric reference used to judge them. None of these are consequences of a conduction block. This would be the correct answer if the vignette had described crushing chest pain with contiguous lead changes." },
      { "text": "Either a prolonged PR interval, a prolonged QRS complex, or no conduction at all", "explanation": "Correct. The lecture's review of the conduction pathway states that if there is any block at any of the steps from SA node through atria, AV node, bundle of His, bundle branches and Purkinje fibers, you will find either a prolonged PR interval, a prolonged QRS complex, or no conduction. The level of the block determines which of the three appears: nodal disease lengthens the PR interval because the PR interval is the time spent traversing the AV node, disease below the His bundle widens the QRS because that complex is ventricular depolarization, and complete failure produces dissociation with an escape rhythm unrelated to the atrial rate." },
      { "text": "Either an increase or a decrease in QRS amplitude depending on the level of the block", "explanation": "Incorrect. Amplitude is governed by ventricular muscle mass and by the tissue between the myocardium and the electrode, rising with hypertrophy or a thin habitus and falling with obesity or pericarditis. It is not the measure that reports conduction block. This would be the correct answer if the question had asked how body habitus or a pericardial effusion changes the tracing." },
      { "text": "Either a double-humped P wave or an increase in P wave amplitude", "explanation": "Incorrect. These are the atrial findings: a double hump from atrial size mismatch or intra-atrial delay, and increased amplitude from atrial hypertrophy. They describe atrial structure rather than block along the conduction system. This would be the correct answer if the question concerned a patient with long-standing mitral valve disease." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: a block anywhere along the conduction pathway produces one of only three findings - a long PR interval, a wide QRS, or no conduction at all.",
    "pdfPage": 14,
    "pdfQuote": "Cardiac Conduction System"
  },
  {
    "id": 24,
    "category": "Cardiology: ECG Fundamentals",
    "questionText": "A 58-year-old man on telemetry has an ECG printed without lead labels. The page shows two blocks of tracings in four columns, with a single continuous tracing running along the bottom of the sheet. Your resident asks you to identify what occupies each region so that you can localize an abnormality. Which description of the standard 12-lead layout is correct?",
    "options": [
      { "text": "Limb and augmented leads on the left, precordial leads on the right, rhythm strip along the bottom", "explanation": "Correct. On the standard page the left block contains leads I, II and III followed by aVR, aVL and aVF, an order the lecturer remembers by reading RALF down the second column, and the right block contains the precordial leads V1 through V6. A rhythm strip, conventionally lead II, runs along the bottom. The distinction matters practically: each lead in the grid above shows only about 2.5 seconds, whereas the rhythm strip at the bottom gives the complete 10 seconds." },
      { "text": "Precordial leads on the left, limb and augmented leads on the right, rhythm strip along the bottom", "explanation": "Incorrect. This reverses the standard arrangement. The limb and augmented leads occupy the left side of the page and the chest leads the right. This would be the correct answer if the page were printed in a mirrored format, which is not the convention taught here." },
      { "text": "All twelve leads are printed in a single column with the rhythm strip in the right margin", "explanation": "Incorrect. The standard format uses four columns arranged in two blocks with the rhythm strip along the bottom of the page, not a single vertical column. This would be the correct answer if the machine were configured to print a continuous single-column rhythm format." },
      { "text": "The bottom strip shows the average of all twelve leads recorded simultaneously across the page", "explanation": "Incorrect. The bottom strip is a single lead, usually lead II, offered as a preset on the machine to give a longer continuous view, not an average of the other leads. Averaging would defeat the purpose of a rhythm strip. This would be the correct answer if the machine computed a composite tracing rather than displaying one lead." },
      { "text": "The augmented leads are printed at the bottom because they are calculated rather than directly recorded", "explanation": "Incorrect. The augmented leads are indeed calculated rather than attached directly to the patient, which is why students find them confusing, but they are printed in the left-hand block alongside leads I, II and III rather than at the bottom of the page. This would be the correct answer if the layout separated calculated from directly recorded leads." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: left block = I, II, III, aVR, aVL, aVF (RALF down the second column); right block = V1-V6; bottom = rhythm strip, usually lead II, at the full 10 seconds.",
    "pdfPage": 21,
    "pdfQuote": "Limb Leads: I, II, III,"
  },
  {
    "id": 25,
    "category": "Cardiology: ECG Fundamentals",
    "questionText": "A 66-year-old woman on a telemetry floor develops palpitations. The nurse hands you a single strip of paper showing one continuous tracing lasting about ten seconds. You want to know whether her symptoms come from an arrhythmia and, separately, whether she has evidence of ischemia. Which statement best describes what this recording can and cannot tell you?",
    "options": [
      { "text": "It gives twelve simultaneous views, so both questions can be answered from this strip alone", "explanation": "Incorrect. Twelve unique views come from a 12-lead tracing; a single continuous lead is a rhythm strip by definition. Counting the leads on the page is the lecturer's own test for telling the two apart. This would be the correct answer if the page had shown twelve separate tracings arranged in columns." },
      { "text": "It cannot assess rhythm because rhythm requires comparison across at least two leads", "explanation": "Incorrect. A rhythm strip is precisely the format used on telemetry and during codes to assess rhythm, and its whole advantage is a longer continuous view of one lead. Rhythm assessment does not require multiple leads. This would be the correct answer if arrhythmia detection depended on simultaneous multi-lead comparison." },
      { "text": "It is diagnostic for ischemia but not for arrhythmia, because ST changes appear in every lead", "explanation": "Incorrect. This reverses the capabilities and misstates the ST rule: ST elevation is significant when it appears in anatomically contiguous leads, which requires multiple views, whereas a single lead is well suited to rhythm. This would be the correct answer if ischemic ST changes were global rather than territorial." },
      { "text": "It gives continuous information about one view, so it can assess rhythm but not localize ischemia", "explanation": "Correct. A rhythm strip is a single lead providing continuous information about one aspect or view of the heart, which makes it well suited to detecting arrhythmias but not to surveying the whole myocardium. A 12-lead gives information on all parts of the heart, which is what you need to identify ST elevation in anatomically contiguous leads. The lecturer notes that collecting rhythm strips of all 12 leads would in effect reconstruct a 12-lead ECG, and that the strip typically shows the full 10 seconds while each lead in a 12-lead grid shows only about 2.5 seconds." },
      { "text": "It provides only about 2.5 seconds of data, which is too brief to interpret either question reliably", "explanation": "Incorrect. About 2.5 seconds is the duration of each lead in the grid of a 12-lead tracing; the rhythm strip along the bottom, and a standalone rhythm strip, run the complete 10 seconds precisely to give a longer view. This would be the correct answer if the question had asked why an individual lead in the upper grid can be hard to use for rhythm analysis." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: a rhythm strip is one lead viewed continuously - good for rhythm, blind to territory. A 12-lead gives 12 unique views and is required to localize ischemia.",
    "pdfPage": 20,
    "pdfQuote": "If you only see 1 lead = Rhythm Strip"
  },
  {
    "id": 26,
    "category": "Cardiology: ECG Fundamentals",
    "questionText": "A 55-year-old woman is admitted with fatigue, pruritus and jaundice. Laboratory studies show a cholestatic pattern and she is being worked up for a chronic inflammatory disease of the biliary tree. Overnight she reports transient chest pressure, and an intern orders an ECG, saying it will help evaluate both problems. Which statement about the utility of the ECG in this patient is correct?",
    "options": [
      { "text": "It will identify the biliary disease indirectly through characteristic repolarization changes", "explanation": "Incorrect. No repolarization pattern in this lecture corresponds to hepatobiliary disease; the T wave findings taught here relate to potassium. The ECG reports cardiac electrical activity only. This would be the correct answer if cholestatic liver disease produced a specific and recognized ECG signature." },
      { "text": "It is not indicated at all, because chest pressure in a patient with liver disease is non-cardiac", "explanation": "Incorrect. Chest pain, discomfort or pressure is exactly the presentation for which the lecturer says to think EKG stat, in order to rule out an acute coronary syndrome. Comorbid liver disease does not exclude cardiac disease. This would be the correct answer if the patient had no cardiac symptoms whatsoever." },
      { "text": "It can evaluate the chest pressure for ischemia or arrhythmia but cannot evaluate the biliary disease", "explanation": "Correct. The lecture's applications of the ECG are arrhythmias, myocardial ischemia and infarction, patients with known heart disease, assessing the results of a treatment or a systemic disease, and preoperative clearance. Chest pressure warrants an immediate tracing to rule out acute coronary syndrome, and arrhythmias may present with palpitations, chest pain, shortness of breath, syncope or presyncope. However, the lecturer uses primary biliary cholangitis specifically as the example of a condition that cannot be identified on an ECG, because the study records only the electrical activity of the heart." },
      { "text": "It will be uninterpretable because cholestasis alters the amplitude of all deflections", "explanation": "Incorrect. The factors listed in this lecture as altering amplitude are ventricular hypertrophy, thin or frail habitus, obesity and pericarditis. Cholestasis is not among them and does not render a tracing uninterpretable. This would be the correct answer if the patient had a large pericardial effusion producing uniformly small complexes." },
      { "text": "It will confirm the diagnosis if it shows arrhythmia, since biliary disease commonly causes atrial fibrillation", "explanation": "Incorrect. Detecting atrial fibrillation on an ECG establishes the arrhythmia, not its cause, and the lecture does not link biliary disease to atrial fibrillation. Confirming a hepatobiliary diagnosis from a rhythm finding is not valid reasoning. This would be the correct answer if the question asked whether an ECG can identify atrial fibrillation itself, which it can." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: the ECG evaluates arrhythmia, ischemia and infarction, known heart disease, treatment or systemic disease response, and preoperative clearance - nothing outside the heart.",
    "pdfPage": 19,
    "pdfQuote": "Myocardial ischemia and infarction"
  },
  {
    "id": 27,
    "category": "Cardiology: Electrolytes and the ECG",
    "questionText": "A 72-year-old woman on a high-dose loop diuretic for edema presents with cramps and weakness. Her serum potassium is low. Her ECG shows low-amplitude, flattened T waves followed by a distinct additional deflection that resembles an upside-down T wave sitting just after each T wave. Which interpretation of this tracing is correct?",
    "options": [
      { "text": "The flattened T waves indicate ventricular depolarization is impaired by potassium loss", "explanation": "Incorrect. Ventricular depolarization is the QRS complex; the T wave is repolarization. Potassium is read off the T wave because it sets the repolarization gradient. This would be the correct answer if the described abnormality had been a widened QRS complex, which is a hyperkalemia finding in this lecture." },
      { "text": "The extra deflection is a second P wave, indicating an intra-atrial conduction delay", "explanation": "Incorrect. Intra-atrial delay produces a double-humped P wave before the QRS, not an additional deflection after the T wave. The location on the tracing distinguishes the two. This would be the correct answer if the extra hump had appeared within the P wave itself in a patient with mitral valve disease." },
      { "text": "The extra deflection is ST elevation, which requires urgent evaluation for a STEMI", "explanation": "Incorrect. ST elevation is a deviation of the segment between the QRS and the T wave, occurs in anatomically contiguous leads, and would be accompanied by ischemic symptoms. A deflection following the T wave in a hypokalemic patient is a U wave. This would be the correct answer if the patient had crushing chest pain with elevation in contiguous leads." },
      { "text": "The findings reflect atrial repolarization becoming visible once serum potassium falls", "explanation": "Incorrect. Atrial repolarization is masked by the QRS complex and does not emerge as a visible deflection with electrolyte shifts. The extra wave described here is the U wave. This would be the correct answer if atrial repolarization produced its own recordable deflection on the surface tracing." },
      { "text": "The flattened T wave with a following U wave is the expected hypokalemic pattern", "explanation": "Correct. Potassium lives under the T wave. In hypokalemia the T wave flattens and may unmask a predominant U wave, which the lecturer describes as looking like an inverted T wave following the true T wave. This is the mirror image of hyperkalemia, in which T wave amplitude increases. The loop diuretic supplies the mechanism for potassium loss, and the cramps and weakness supply the clinical correlate." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: hypokalemia flattens the T wave and unmasks a prominent U wave; hyperkalemia does the opposite and peaks the T wave.",
    "pdfPage": 11,
    "pdfQuote": "suggestive of hyperkalemia or"
  },
  {
    "id": 28,
    "category": "Cardiology: ECG Intervals",
    "questionText": "A 38-year-old man is evaluated for recurrent palpitations. His ECG shows a QRS duration of 118 milliseconds. His resident calls this normal for a second-year medical student's purposes but adds that a clinician reading the same tracing might comment on it. How should the QRS duration be interpreted according to this lecture?",
    "options": [
      { "text": "It is within the under-120 millisecond teaching cutoff but falls in the band clinicians use to flag conduction delay", "explanation": "Correct. The lecturer gives layered thresholds: a QRS interval of less than 100 milliseconds is truly normal, 120 milliseconds is the number to use at the second-year medical student level, and clinicians use a band of roughly 110 to 120 milliseconds, sometimes 100 to 120, to signify ventricular conduction defects and delays. A value of 118 milliseconds therefore passes the teaching cutoff while sitting inside the clinician's zone of concern. It is also worth noting that the QRS meets the definition of an interval, since it includes waves and the segment between them." },
      { "text": "It is frankly prolonged and diagnostic of a complete bundle branch block", "explanation": "Incorrect. The lecture's stated cutoff for a normal QRS is under 120 milliseconds, so 118 does not meet the criterion for prolongation, and no lecture content supports diagnosing a complete bundle branch block from duration alone at this value. This would be the correct answer if the duration had been well beyond 120 milliseconds." },
      { "text": "It cannot be interpreted because QRS duration is only meaningful when the PR interval is also known", "explanation": "Incorrect. QRS duration is interpreted on its own and reports ventricular conduction, while the PR interval separately reports atrioventricular transit. The two localize disease to different levels of the pathway. This would be the correct answer if the QRS duration had no independent normal range." },
      { "text": "It is abnormal because any QRS above 100 milliseconds indicates hyperkalemia until proven otherwise", "explanation": "Incorrect. Hyperkalemia is one of several listed causes of QRS prolongation, alongside bundle branch and fascicular block, tricyclic antidepressants, sodium channel blockers and Wolff-Parkinson-White syndrome, and a value of 118 milliseconds is not by itself abnormal at the teaching cutoff. This would be the correct answer if the tracing also showed markedly peaked T waves in a patient who had missed dialysis." },
      { "text": "It should be compared to half the R-R interval, which is the normal limit for the QRS", "explanation": "Incorrect. The half-of-the-R-R rule of thumb applies to the QT interval, not to the QRS complex. Applying it to the QRS confuses the two intervals. This would be the correct answer if the measurement in question had been the QT interval." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: QRS under 100 ms is truly normal, under 120 ms is the student cutoff, and 110-120 ms is the clinician's band for ventricular conduction defects and delays.",
    "pdfPage": 9,
    "pdfQuote": "Normally <120 ms"
  },
  {
    "id": 29,
    "category": "Cardiology: ECG Waveform Physiology",
    "questionText": "A 60-year-old man with chest pressure has a 12-lead ECG. You are trying to decide whether the ST segments are truly elevated, but the baseline of the tracing appears to wander. A cardiology fellow tells you to use a specific portion of the tracing as the reference against which ST deviation should be judged. Which portion is it, and what related fact explains why nothing else is available in that stretch of the tracing?",
    "options": [
      { "text": "The PR interval, because it includes the flat AV nodal conduction period and is 120 to 200 milliseconds long", "explanation": "Incorrect. The PR interval includes the P wave itself and so is not a pure baseline, and its duration is a measure of atrioventricular conduction rather than a voltage reference. The interval taught as the true isoelectric point is the TP segment. This would be the correct answer if the question had asked which measurement localizes disease to the AV node." },
      { "text": "The TP segment, the true isoelectric point, and atrial repolarization is hidden inside the QRS", "explanation": "Correct. The summary slide identifies the TP segment as the true isoelectric point and states that it is useful to assess ST segment changes, which is exactly the problem posed here. The related fact is that atrial repolarization is masked by the QRS complex, so no atrial T wave appears between the QRS and the T wave to disturb that reference. Once the baseline is established, ST elevation is read as transmural injury and ST depression as subendocardial injury, and elevation must be present in anatomically contiguous leads to signify a STEMI." },
      { "text": "The QT interval, because it spans ventricular systole and therefore averages out baseline drift", "explanation": "Incorrect. The QT interval measures the duration of ventricular depolarization, contraction and repolarization together and is compared with half the R-R interval; it is not a voltage reference and does not correct baseline wander. This would be the correct answer if the concern had been risk of torsades de pointes rather than measurement of ST deviation." },
      { "text": "The R wave peak, because it is the highest amplitude point and therefore the most reproducible landmark", "explanation": "Incorrect. The R wave peak is a maximal deflection rather than an isoelectric reference, and using a peak as a baseline is conceptually backwards. Amplitude landmarks report muscle mass and habitus, not baseline. This would be the correct answer if the question had asked which deflection is easiest to identify when counting rate." },
      { "text": "The U wave, because it follows the T wave and returns fully to baseline in healthy individuals", "explanation": "Incorrect. The U wave is not consistently present; the lecture describes it as becoming predominant in hypokalemia, where it resembles an inverted T wave. An inconsistently present deflection cannot serve as a reference. This would be the correct answer if the question had concerned a patient with cramps, weakness and diuretic-induced potassium loss." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: the TP segment is the true isoelectric point and the reference for judging ST elevation or depression; atrial repolarization is masked by the QRS.",
    "pdfPage": 33,
    "pdfQuote": "TP segment- true isoelectric point"
  },
  {
    "id": 30,
    "category": "Cardiology: ECG Axis",
    "questionText": "A 70-year-old man with long-standing hypertension is seen for a preoperative evaluation. His ECG shows a clearly upright QRS complex in lead I but a predominantly negative QRS complex in lead aVF. The QRS duration is 96 milliseconds and the PR interval is 168 milliseconds. Using the physiologic method taught in this lecture, how should the axis be described and what does each lead's polarity tell you?",
    "options": [
      { "text": "Normal axis, because a normal axis is defined by an upright complex in lead I alone", "explanation": "Incorrect. Lead I alone establishes only that the vector points leftward, not whether it points upward or downward. Both perpendicular leads are needed to fix the quadrant, which is why the lecture pairs lead I with aVF. This would be the correct answer if a single lead could localize a vector in two dimensions." },
      { "text": "Right axis deviation, because a negative aVF places the vector to the patient's right side", "explanation": "Incorrect. This confuses the two axes. A negative aVF means the vector is directed upward rather than downward; rightward orientation is reported by a negative lead I. In this tracing lead I is upright. This would be the correct answer if lead I had been negative and aVF upright." },
      { "text": "Indeterminate axis, because the QRS duration and PR interval are both within normal limits", "explanation": "Incorrect. Normal interval durations tell you the conduction system is intact but say nothing about the direction of the mean vector, which is a separate property determined from lead polarity. Intervals and axis answer different questions. This would be the correct answer if axis were derived from interval measurements rather than from lead polarity." },
      { "text": "Left axis deviation, because upright in I means leftward and negative in aVF means upward", "explanation": "Correct. Voltage is positive when depolarization travels toward a lead and negative when it travels away, so an upright QRS in lead I places the mean vector to the patient's left and a negative QRS in aVF places it above the horizontal rather than below it. Leads I and aVF are used together precisely because they are perpendicular and therefore box the vector into a single quadrant. Since only one of the two is positive, the axis has deviated away from normal, in this case leftward. The lecture gives the normal range as negative 30 to positive 60 degrees and notes that deviations may even be extreme, far right or far left." },
      { "text": "Extreme axis deviation, because any negative deflection in an augmented lead defines the extreme quadrant", "explanation": "Incorrect. The extreme quadrant requires both lead I and aVF to be negative, placing the vector up and to the right. Here lead I is upright, which excludes it. This would be the correct answer if both perpendicular leads had shown predominantly negative complexes." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: upright lead I means leftward, upright aVF means downward. Both upright is normal; only one positive means axis deviation, and both negative means an extreme axis.",
    "pdfPage": 30,
    "pdfQuote": "Normal Axis!"
  }
];

window.Test_CV26 = Test_CV26;
