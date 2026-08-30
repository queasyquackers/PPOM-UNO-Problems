const Test_CV28 = [
  {
    "id": 1,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A cardiology fellow places a micromanometer catheter across the aortic valve and records left ventricular and aortic pressures on the same time axis. Late in ejection she notes that aortic pressure has risen slightly above left ventricular pressure, yet Doppler interrogation confirms that blood is still moving forward out of the ventricle. The ECG channel shows that the T wave is just beginning. Which of the following best explains why forward flow continues at this moment?",
    "options": [
      { "text": "The aortic valve has closed and the observed flow represents regurgitation back into the ventricle through an incompetent cusp", "explanation": "Incorrect. Semilunar valve closure marks the END of ejection and the start of isovolumetric relaxation, at which point no forward flow can occur at all. The Doppler shows antegrade, not retrograde, flow. This would be the correct answer if the tracing showed flow directed from the aorta back into the ventricle after the dicrotic notch." },
      { "text": "Atrial contraction is adding volume to the ventricle and is boosting the ejection pressure downstream", "explanation": "Incorrect. Atrial systole occurs at the very beginning of the cycle, well before the QRS complex, and contributes only about 10 mL of a roughly 140 mL end-diastolic volume. It cannot be occurring at the T wave. This would be the correct answer if the ECG channel showed a P wave rather than a T wave at this instant." },
      { "text": "Inertia imparted to the blood by ventricular contraction is now the driving force", "explanation": "Correct. This is the reduced ejection phase. Left ventricular pressure falls slightly below aortic pressure, but blood continues to be ejected because the inertia imparted to the blood by the preceding ventricular contraction - rather than a pressure difference - is now the driving force. The phase ends when ventricular pressure drops below the level needed to hold the semilunar valves open, which coincides with the T wave you are seeing on the ECG channel." },
      { "text": "The ventricle is in isovolumetric contraction, so pressure is climbing rapidly with no change whatsoever in chamber volume", "explanation": "Incorrect. During isovolumetric contraction all four valves are closed and no blood leaves the ventricle, so Doppler could not show forward flow. That phase also occurs at the QRS, not the T wave. This would be the correct answer if the tracing showed a steep pressure rise with a completely flat volume curve." },
      { "text": "Elastic recoil of the aortic wall is pushing blood retrograde toward the ventricle during early diastole", "explanation": "Incorrect. Aortic elastic recoil does maintain diastolic pressure near 80 mmHg, but it drives blood forward into the peripheral circulation, not backward toward the ventricle, and it operates after valve closure. This would be the correct answer if the question asked why aortic pressure never falls to zero between beats." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: in reduced ejection LV pressure is already BELOW aortic pressure, yet blood still leaves the ventricle - inertia, not a pressure gradient, finishes the job. The phase ends at the T wave.",
    "pdfPage": 21,
    "pdfQuote": "The inertia imparted to the blood by ventricular contraction"
  },
  {
    "id": 2,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A 68-year-old woman with an echocardiographic left ventricular end-diastolic volume of 140 mL develops a new irregularly irregular rhythm. Repeat imaging shows that organized atrial contraction has been lost. Venous return, heart rate and contractility are otherwise unchanged. Approximately how much filling volume has she lost, and why does that loss carry more clinical weight than the raw number suggests?",
    "options": [
      { "text": "About 10 mL, because the atrial primer pump supplies up to 20% of filling", "explanation": "Correct. Atrial contraction contributes roughly 10 mL of a 140 mL end-diastolic volume, functioning as a primer pump worth as much as 20% at maximum. Most atrial blood reaches the ventricle passively during atrial diastole through an open AV valve. The contribution looks trivial in a healthy heart, which is exactly why it is easy to underestimate - it becomes decisive when a ventricle already depends on maximal preload and the atria can no longer deliver it." },
      { "text": "About 70 mL, because coordinated atrial contraction normally supplies roughly half of total ventricular filling", "explanation": "Incorrect. This grossly overstates the atrial kick. The lecture is explicit that atrial contraction supplies about 10 mL out of 140 mL, not half. This would be the correct answer if ventricular filling were an actively pumped process rather than a predominantly passive pressure-gradient process." },
      { "text": "About 140 mL, because ventricular filling is entirely dependent on the force of atrial contraction", "explanation": "Incorrect. If filling depended entirely on atrial contraction, loss of atrial systole would be immediately fatal, which it is not. Most of the atrial blood enters the ventricle during atrial diastole. This would be the correct answer if the AV valves opened only during atrial systole." },
      { "text": "Essentially none, because the ventricle fills passively and the atrium contributes nothing measurable at all", "explanation": "Incorrect. The atrial contribution is small but real and measurable at roughly 10 mL, and the lecturer stresses that it becomes important in pathological states. This would be the correct answer if the atria functioned purely as conduits with no contractile tissue." },
      { "text": "About 40 mL, because the atrium normally empties itself completely during each atrial contraction", "explanation": "Incorrect. The atrium does not empty completely during its contraction; it continues to conduct venous blood through the open AV valve throughout atrial diastole. This would be the correct answer if the AV valve closed at the end of atrial systole and trapped the remaining volume." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: the atrial kick is about 10 mL of a 140 mL EDV, up to 20% maximum. Most filling happens in atrial DIASTOLE - the kick only matters when it is lost.",
    "pdfPage": 11,
    "pdfQuote": "Atrial contraction contributes to about 10 ml"
  },
  {
    "id": 3,
    "category": "Cardiology: Heart Sounds",
    "questionText": "A first-year medical student explains to a classmate that the first heart sound is produced by the mitral leaflets physically slapping into one another as they meet. The attending physician corrects this, noting that the sound is broad and low-pitched and can be appreciated at several different points on the chest wall. Which of the following describes the actual mechanism of the first heart sound?",
    "options": [
      { "text": "Turbulent blood flow generated as blood is forced through a progressively narrowing valve orifice during closure", "explanation": "Incorrect. Turbulence across a narrowed orifice generates murmurs, not the normal heart sounds. S1 is present in every healthy person with no stenosis whatsoever. This would be the correct answer if the question described a systolic ejection murmur rather than the normal first heart sound." },
      { "text": "Contraction of the papillary muscles pulling the chordae tendineae taut against the leaflets", "explanation": "Incorrect. Papillary muscles do contract with the ventricle and tension the chordae, but their role is to restrain the leaflets from prolapsing, not to generate the audible sound. This would be the correct answer if the lecture had attributed S1 to chordal tensioning rather than to vibration." },
      { "text": "Acceleration of blood across the semilunar valves during the isotonic phase of ventricular ejection", "explanation": "Incorrect. This describes rapid ejection, which occurs after S1 and is normally silent. S1 is tied to AV valve closure at the very start of ventricular systole. This would be the correct answer if the question asked what is happening during the ST segment." },
      { "text": "Percussion of the ventricular apex against the anterior chest wall during isovolumetric contraction", "explanation": "Incorrect. Apical impact against the chest wall produces the palpable point of maximal impulse, which is felt rather than heard, and it is not the source of the auscultated sound. This would be the correct answer if the question asked about the mechanism of the apical impulse." },
      { "text": "Vibration of the leaflets and surrounding blood under sudden pressure change", "explanation": "Correct. When a valve closes, the vanes of the valve and the surrounding column of blood vibrate under the influence of the sudden pressure change, and that vibration radiates in all directions through the chest - which is precisely why the same event is audible at multiple precordial sites. Mitral closure produces a series of broad, low-pitched vibrations that constitute the first heart sound. The lecturer explicitly labels the slapping-valves explanation a popular misconception." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: heart sounds are vibrations of the leaflets and surrounding blood under sudden pressure changes, not valves slapping together. That is why one closure is audible over a wide area.",
    "pdfPage": 28,
    "pdfQuote": "Four heart sounds"
  },
  {
    "id": 4,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "During a catheterization study, a tracing shows left ventricular pressure rising from 10 mmHg to 80 mmHg over a few hundredths of a second while the simultaneously recorded ventricular volume channel is perfectly horizontal. The ECG shows the QRS complex. Which statement correctly describes the valve status and the type of contraction occurring?",
    "options": [
      { "text": "The semilunar valves are open and the contraction is isotonic, so blood is actively being ejected into the aorta", "explanation": "Incorrect. If the semilunar valves were open, blood would be leaving the chamber and the volume channel would be falling, not horizontal. Isotonic contraction belongs to the ejection phases. This would be the correct answer if the volume trace were descending steeply during the ST segment." },
      { "text": "All four valves are closed and the contraction is isometric", "explanation": "Correct. This is isovolumetric contraction, the first sub-phase of ventricular systole. Both the AV valves and the semilunar valves are shut, making the ventricles closed, blood-filled chambers. Because blood cannot be compressed, the entire effect of contraction is converted into a rise in intraventricular pressure with no change in ventricular volume, and the contraction is therefore isometric. The rate of that pressure rise is quantified in the catheterization lab as dP/dt (max)." },
      { "text": "The atrioventricular valves are open and allow continued filling from the atrium at constant pressure", "explanation": "Incorrect. Open AV valves would allow volume to enter the ventricle, so volume would rise rather than stay flat, and ventricular pressure could not exceed atrial pressure by 70 mmHg. This would be the correct answer if the tracing showed rising volume with only a small pressure change." },
      { "text": "The semilunar valves are closed while the atrioventricular valves are open, permitting regurgitation backward into the atrium", "explanation": "Incorrect. This combination describes a pathological failure of AV valve closure; in the normal cycle the AV valves shut at the very start of ventricular systole. This would be the correct answer if the patient had severe mitral regurgitation with a large systolic v wave." },
      { "text": "All four valves are closed but the ventricle is relaxing, so pressure is falling toward atrial levels", "explanation": "Incorrect. The valve status is right but the direction is wrong: this describes isovolumetric relaxation, in which pressure falls after the T wave. Here pressure is rising steeply at the QRS. This would be the correct answer if the pressure trace were descending and the ECG showed the T wave." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: blood is incompressible, so with all four valves shut a contracting ventricle can only change pressure, not volume. That is isovolumetric (isometric) contraction, measured as dP/dt max.",
    "pdfPage": 17,
    "pdfQuote": "Since the blood cannot be compressed"
  },
  {
    "id": 5,
    "category": "Cardiology: Hemodynamics",
    "questionText": "An arterial line placed in the aortic root produces a tracing in which the systolic upstroke is followed by a small sharp downward deflection and then a brief secondary rise, after which pressure declines smoothly toward 80 mmHg. The patient is hemodynamically stable with no murmur. What is the mechanism of this small notch?",
    "options": [
      { "text": "Transient reopening of the aortic valve as ventricular pressure briefly climbs above aortic pressure a second time", "explanation": "Incorrect. The ventricle does not generate a second pressure peak within one beat; ventricular pressure falls monotonically once relaxation begins. This would be the correct answer if the tracing came from a heart with a double-peaked ventricular contraction, which does not occur physiologically." },
      { "text": "Rapid filling of the ventricle through the newly opened mitral valve orifice transmitted up the arterial tree", "explanation": "Incorrect. Rapid filling occurs well after the notch, during ventricular diastole, and events on the atrial side are not transmitted to the aortic root tracing. This would be the correct answer if you were reading the atrial pressure curve and identifying the y descent." },
      { "text": "Vibration of the aortic wall transmitted from the closing atrioventricular valves at the onset of systole", "explanation": "Incorrect. AV valve closure occurs at the very beginning of systole and generates S1, not a deflection at the end of ejection. This would be the correct answer if the question asked what event produces the first heart sound." },
      { "text": "Slight backflow of aortic blood filling the semilunar cusps", "explanation": "Correct. This is the dicrotic notch, also called the incisura. As the semilunar valves close, a slight backflow of aortic blood fills their cusps, momentarily interrupting the smooth pressure decay and producing the notch. After it, aortic pressure decreases gradually to its lowest diastolic value of about 80 mmHg, which is reached just before the semilunar valve opens again in the next cycle." },
      { "text": "Sudden loss of arterial wall compliance occurring as pressure falls to its minimum diastolic value near 80 mmHg", "explanation": "Incorrect. Arterial compliance does not change abruptly within a single beat, and the notch appears at the end of ejection rather than at the diastolic nadir. This would be the correct answer if the question asked why arterial pressure never falls to zero between beats." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: the dicrotic notch (incisura) is backflow filling the semilunar cusps as they close. Aortic pressure then drifts down to about 80 mmHg just before the valve reopens.",
    "pdfPage": 30,
    "pdfQuote": "dicrotic notch or incisura is caused by a slight back flow"
  },
  {
    "id": 6,
    "category": "Cardiology: Valve Mechanics",
    "questionText": "A student proposes that the papillary muscles are what physically pull the mitral leaflets shut at the onset of ventricular systole. The lecturer calls this a common but incorrect assumption and notes that the papillary muscles do contract at the same time as the surrounding ventricular myocardium. Which statement correctly describes what these muscles actually accomplish?",
    "options": [
      { "text": "They generate the forward pressure gradient that pushes the mitral leaflets apart at the start of ventricular filling", "explanation": "Incorrect. The AV valves open passively when a forward pressure gradient develops between atrium and ventricle; muscles do not generate that gradient. This would be the correct answer if valve opening were an active muscular event rather than a passive pressure-driven one." },
      { "text": "They anchor the aortic cusps so that the semilunar valve can withstand the diastolic pressure column above it", "explanation": "Incorrect. The semilunar valves have no papillary muscles or chordae at all; they are held competent by their cusp geometry and the pressure above them. This would be the correct answer if the question concerned the aortic valve rather than the mitral valve." },
      { "text": "They actively shorten during diastole to widen the mitral orifice and accelerate the rapid filling phase", "explanation": "Incorrect. Papillary muscles contract with the ventricular myocardium during systole, not during diastole, and they do not change orifice size. This would be the correct answer if papillary contraction were timed to ventricular relaxation." },
      { "text": "They pull the leaflets inward toward the ventricle so they cannot bulge backward into the atrium", "explanation": "Correct. Papillary muscles connect the inner wall of the ventricle to the valve leaflets through the chordae tendineae. Contrary to expectation, they do not help close the valve - closure is accomplished by the backward pressure gradient acting on the leaflets. Instead they pull the vanes of the valve inward toward the ventricle to prevent them bulging too far backward toward the atria during ventricular contraction. This restraint function is why chordal rupture causes severe regurgitation." },
      { "text": "They stiffen the ventricular wall during isovolumetric contraction so that intraventricular pressure can rise more steeply", "explanation": "Incorrect. The steep pressure rise of isovolumetric contraction is explained by the incompressibility of blood in a closed chamber, not by papillary muscle stiffening. This would be the correct answer if the question asked what determines dP/dt max." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: pressure closes the AV valves; papillary muscles and chordae only restrain the leaflets from prolapsing into the atrium during ventricular contraction.",
    "pdfPage": 7,
    "pdfQuote": "Valves are pulled inward"
  },
  {
    "id": 7,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A 24-year-old athlete undergoes exercise testing. At rest his heart rate is 60/min; at peak exercise it is 180/min. A physiologist comments that the internal architecture of each beat has changed, not merely the number of beats. Compared with the resting state, how is the cardiac cycle redistributed at peak exercise?",
    "options": [
      { "text": "Time in diastole decreases and time in systole increases", "explanation": "Correct. At rest, two-thirds of the cardiac cycle is spent in diastole and one-third in systole, counting both atrial and ventricular events. As activity levels increase, less time is spent in diastole and more in systole. Because diastole is when the ventricle fills and when the coronary arteries perfuse, this redistribution is the physiologic basis for the filling and perfusion limitations that appear at very high heart rates." },
      { "text": "Diastole lengthens in proportion to the shortening of systole, so that the resting two-to-one ratio is faithfully preserved", "explanation": "Incorrect. The ratio is not preserved; the lecture is explicit that increasing activity shifts time away from diastole toward systole. This would be the correct answer if cycle length changed without any change in the internal proportions." },
      { "text": "Systole and diastole both lengthen equally, because the ratio between them is hard-wired by the conduction system", "explanation": "Incorrect. Both cannot lengthen when total cycle length is falling from 1.0 s to about 0.33 s. The conduction system modulates timing; it does not fix the systole-to-diastole ratio. This would be the correct answer if heart rate were falling rather than rising." },
      { "text": "Systole shortens dramatically while diastole remains completely unchanged, which serves to protect coronary perfusion time", "explanation": "Incorrect. This inverts the actual relationship. Diastole is the phase that shortens disproportionately with tachycardia, which is exactly why coronary perfusion time is threatened rather than protected. This would be the correct answer if the heart could preserve absolute diastolic duration at any rate." },
      { "text": "The proportions cannot change because the atrioventricular nodal delay is fixed at just over 0.1 seconds in all conditions", "explanation": "Incorrect. The AV nodal delay of greater than 0.1 s governs the interval between atrial and ventricular contraction, not the overall systole-to-diastole split, and it is itself autonomically modulated. This would be the correct answer if the question asked why atrial contraction always precedes ventricular contraction." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: at rest 2/3 of the cycle is diastole and 1/3 systole. Increasing activity moves time INTO systole and OUT of diastole, squeezing filling and coronary perfusion time.",
    "pdfPage": 8,
    "pdfQuote": "of the cardiac cycle is spent in diastole"
  },
  {
    "id": 8,
    "category": "Cardiology: Venous Waveforms",
    "questionText": "A catheter is advanced through the internal jugular vein into the right atrium of a patient in normal sinus rhythm. The pressure channel and the ECG are recorded together. A small positive deflection is seen on the atrial pressure tracing immediately after the peak of the QRS complex, at a time when the atrium itself is already relaxed. What produces this deflection?",
    "options": [
      { "text": "Atrial contraction raising atrial pressure at the very onset of atrial systole, just after the P wave", "explanation": "Incorrect. That describes the 'a' wave, which occurs during atrial systole and follows the P wave by about 0.1 s - well before the QRS peak. This would be the correct answer if the deflection appeared between the P wave and the QRS complex." },
      { "text": "Passive atrial filling from the venae cavae against a closed atrioventricular valve during ventricular systole", "explanation": "Incorrect. That describes the 'v' wave, a slow climb as the atrium fills, which occurs later in ventricular systole rather than immediately after the QRS peak. This would be the correct answer if the tracing showed a gradual rise rather than an abrupt small bump." },
      { "text": "Compression of the atrium by the ventricle as ventricular contraction begins", "explanation": "Correct. This is the 'c' wave. It occurs during atrial diastole, just after the peak of the QRS complex, and results from a slight increase in atrial pressure caused by compression of the atrium as the forceful ventricular contraction begins underneath it. Recognizing that the c wave belongs to atrial diastole - not atrial systole - is the point students most often reverse." },
      { "text": "Opening of the atrioventricular valve, which allows the atrium to empty its contents into the relaxed ventricle", "explanation": "Incorrect. AV valve opening produces the y descent, a fall in atrial pressure, not a positive deflection, and it occurs during ventricular filling. This would be the correct answer if the deflection were downward and occurred well after the T wave." },
      { "text": "Relaxation of the atrial myocardium allowing atrial pressure to decline steadily throughout early ventricular systole", "explanation": "Incorrect. Atrial relaxation produces the x descent, which is a downward deflection. The finding described is a positive deflection. This would be the correct answer if the tracing showed a descent immediately after the c wave." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: the c wave is atrial COMPRESSION by the contracting ventricle, arriving just after the QRS peak. It belongs to atrial diastole, not atrial systole.",
    "pdfPage": 14,
    "pdfQuote": "just after the peak of the"
  },
  {
    "id": 9,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A physiology examiner asks a student to explain how blood physically gets from the left atrium into the left ventricle across one complete cardiac cycle. The student must specify both the timing and the driving force. Which of the following statements is correct?",
    "options": [
      { "text": "Most blood crosses during atrial systole, propelled by the vigorous contraction of the atrial myocardium against a large gradient", "explanation": "Incorrect. Atrial systole contributes only about 10 mL of roughly 140 mL. The atrial myocardium is thin and generates mean pressures of only 2-10 mmHg. This would be the correct answer if the atrium functioned as a true pressure pump rather than a primer pump." },
      { "text": "Most blood crosses during atrial diastole, driven by a small atrial-over-ventricular pressure difference", "explanation": "Correct. When the AV valves open, a small diastolic pressure difference with atrial pressure exceeding ventricular pressure permits blood to flow from the atria into the ventricles. Most of the atrial blood therefore enters the ventricle during atrial diastole. Atrial systole adds only a final priming increment of about 10 mL. The gradient is small because both chambers are at low pressure during diastole - the LV diastolic pressure is only 3-12 mmHg." },
      { "text": "Blood crosses continuously throughout the entire cycle because the mitral valve has no mechanism for complete closure", "explanation": "Incorrect. The mitral valve closes completely at the onset of ventricular systole when a backward pressure gradient develops, and no forward flow occurs while it is shut. This would be the correct answer if the patient had a fixed, non-closing mitral orifice." },
      { "text": "Blood crosses only during isovolumetric relaxation, when ventricular pressure is falling most rapidly toward the atrial level", "explanation": "Incorrect. During isovolumetric relaxation all four valves are still closed and ventricular volume is unchanged by definition. Filling begins only after the AV valve opens. This would be the correct answer if the AV valve opened at the moment of semilunar valve closure." },
      { "text": "Blood crosses mainly during ventricular systole, since that is when atrial pressure reaches its highest value on the v wave", "explanation": "Incorrect. The v wave does represent rising atrial pressure during ventricular systole, but the AV valves are closed at that time, so no blood can cross. This would be the correct answer if AV valve position were determined by absolute atrial pressure rather than by the atrioventricular gradient." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: most atrial blood enters the ventricle during atrial DIASTOLE, driven by a small atrial-over-ventricular gradient through an open AV valve. Atrial systole is only the primer.",
    "pdfPage": 13,
    "pdfQuote": "Most of the atrial blood"
  },
  {
    "id": 10,
    "category": "Cardiology: Hemodynamics",
    "questionText": "A patient in the intensive care unit has a pulmonary artery catheter in place. The intensivist wants an indirect estimate of left atrial pressure without crossing the interatrial septum. Which measurement is used for this purpose, and what value would be expected in a patient with normal left-sided filling pressures?",
    "options": [
      { "text": "Right ventricular systolic pressure, which under normal conditions is expected to equal left ventricular systolic pressure", "explanation": "Incorrect. Right ventricular systolic pressure is substantially lower than left ventricular systolic pressure; the two are not equal, even though stroke outputs match over time. This would be the correct answer if the pulmonary and systemic circulations operated at the same pressure." },
      { "text": "Central venous pressure, which normally exceeds left atrial pressure by roughly 10 mmHg because of pulmonary vascular resistance", "explanation": "Incorrect. Central venous pressure reflects right atrial pressure, which is normally 2-8 mmHg and slightly LOWER than left atrial pressure, not higher. This would be the correct answer if the right side operated at higher pressures than the left." },
      { "text": "Pulmonary artery systolic pressure, which at rest runs in the same 100 to 140 mmHg range as the left ventricle", "explanation": "Incorrect. Pulmonary artery systolic pressure approximates right ventricular systolic pressure and is far below the 100-140 mmHg left ventricular range. This would be the correct answer if the pulmonary circuit were a high-pressure system." },
      { "text": "Left ventricular end-diastolic pressure obtained directly by retrograde catheterization across the aortic valve", "explanation": "Incorrect. This can be measured directly but it is not what a pulmonary artery catheter provides, and the question specifies an indirect estimate from the existing catheter. This would be the correct answer if the operator had crossed the aortic valve with a left heart catheter." },
      { "text": "Pulmonary capillary wedge pressure, with a normal mean of about 2-10 mmHg", "explanation": "Correct. Left atrial pressure is close to the pulmonary capillary wedge pressure, which is obtained by wedging a Swan-Ganz catheter in the pulmonary circulation in the catheterization laboratory. Normal mean left atrial pressure is 2-10 mmHg, slightly higher than the right atrial mean of 2-8 mmHg. Both atrial pressures sit far below ventricular systolic pressures, which is why atrial chambers are thin-walled." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: LA pressure (mean 2-10 mmHg) is approximated by the pulmonary capillary wedge pressure from a Swan-Ganz catheter. RA mean is 2-8 mmHg, slightly lower.",
    "pdfPage": 6,
    "pdfQuote": "Normal pressures in the cardiac"
  },
  {
    "id": 11,
    "category": "Cardiology: Heart Sounds",
    "questionText": "A pediatrician auscultates an asymptomatic, thriving 8-year-old at a well-child visit and hears a soft, low-pitched extra sound in early diastole, shortly after the second heart sound. Growth parameters, blood pressure and the remainder of the cardiac examination are entirely normal. Which cardiac event does this extra sound correspond to?",
    "options": [
      { "text": "The rapid filling phase of ventricular diastole, coinciding with mitral valve opening", "explanation": "Correct. S3 is a gallop sound associated with the rapid filling phase of ventricular diastole, and on the integrative summary it coincides with mitral valve opening. The lecturer specifically notes that S3 is frequently heard in normal children, which is why an isolated S3 in an otherwise well child is not alarming. It arises after S2 because ventricular diastole begins with semilunar valve closure and the AV valve opens only after isovolumetric relaxation." },
      { "text": "Atrial systole occurring at end diastole against a stiff, hypertrophied left ventricle with impaired compliance", "explanation": "Incorrect. That describes S4, which occurs at end diastole just before S1 and is pathological, being associated with a hypertrophied ventricle. This child has a normal blood pressure and examination. This would be the correct answer if the extra sound occurred immediately before S1 in a hypertensive patient with LVH." },
      { "text": "Closure of the semilunar valves marking the onset of ventricular diastole and the start of isovolumetric relaxation", "explanation": "Incorrect. That is S2 itself, and the question states the extra sound comes after S2. This would be the correct answer if the question asked what event defines the beginning of ventricular diastole." },
      { "text": "Closure of the atrioventricular valves marking the onset of ventricular systole and the start of isovolumetric contraction", "explanation": "Incorrect. That is S1, which occurs at the beginning of ventricular systole, not in early diastole. This would be the correct answer if the sound had been heard at the start of systole rather than after S2." },
      { "text": "Turbulent flow generated across a narrowed aortic valve orifice during the rapid ejection phase of ventricular systole", "explanation": "Incorrect. That would produce a systolic ejection murmur, not a discrete diastolic sound, and this child has an otherwise normal examination. This would be the correct answer if a mid-systolic murmur loudest over the aorta had been described." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: S3 is the rapid-filling gallop and coincides with mitral valve opening; it is frequently normal in children. S4 is atrial systole against a hypertrophied ventricle and is pathological.",
    "pdfPage": 29,
    "pdfQuote": "S3 gallop is associated with"
  },
  {
    "id": 12,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A cardiac physiologist records pressure and volume from the left ventricle simultaneously. At one point in the beat, the pressure trace is falling steeply while the volume trace sits perfectly flat at the lowest value it reaches during the entire cycle. The ECG shows that the T wave has just completed. Which phase is this, and what is that lowest volume called?",
    "options": [
      { "text": "Rapid ejection, and the flat volume is the stroke volume being expelled into the aorta at that moment", "explanation": "Incorrect. During rapid ejection volume is falling steeply, not flat, and ventricular pressure is rising rather than falling. Stroke volume is a difference between two volumes, not a plateau on the tracing. This would be the correct answer if the volume trace were descending during the ST segment." },
      { "text": "Reduced filling, and the flat volume is the end-diastolic volume achieved just before the next contraction", "explanation": "Incorrect. During reduced filling volume is still slowly rising, and end-diastolic volume is the HIGHEST volume of the cycle, not the lowest. This would be the correct answer if the plateau sat at the top of the volume trace just before the QRS." },
      { "text": "Isovolumetric contraction, and the flat volume is the end-diastolic volume with which the ventricle began systole", "explanation": "Incorrect. The valve status and flat volume are right, but isovolumetric contraction shows a rising pressure at the QRS and sits at the HIGHEST volume of the cycle. This would be the correct answer if the pressure trace were climbing steeply during the QRS complex." },
      { "text": "Rapid filling, and the flat volume is the end-systolic volume left behind after the preceding ejection", "explanation": "Incorrect. Rapid filling begins after the AV valve opens, and volume rises steeply during it. The volume trace cannot be flat once a valve is open. This would be the correct answer if volume were surging upward immediately after the AV valve opened." },
      { "text": "Isovolumetric relaxation, and the flat volume is the end-systolic volume", "explanation": "Correct. Ventricular diastole begins with closure of the semilunar valves while the AV valves are still shut, so all four valves are closed and volume cannot change. The fall in ventricular pressure follows T wave repolarization, and its rate is measured as dP/dt (min). The volume left behind is the end-systolic volume, because the left ventricle does not completely empty during the ejection phase. Pressure continues to fall until it drops below atrial pressure and the AV valve opens at the level of the v wave." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: isovolumetric relaxation is a flat volume trace at ESV with a steeply falling pressure (dP/dt min). The LV never fully empties, which is why an ESV exists at all.",
    "pdfPage": 25,
    "pdfQuote": "end systolic volume (ESV)"
  },
  {
    "id": 13,
    "category": "Cardiology: Venous Waveforms",
    "questionText": "On a jugular venous pressure tracing recorded simultaneously with ventricular volume, a descent in atrial pressure begins at the exact moment the ventricular volume trace starts to rise steeply. What is this descent called, and what is physically happening in the atrium?",
    "options": [
      { "text": "The 'x' descent, occurring while the atrium relaxes with the atrioventricular valve still firmly closed", "explanation": "Incorrect. The x descent does reflect atrial relaxation, but it occurs while the AV valve is closed, so ventricular volume would be unchanged or falling, not rising steeply. This would be the correct answer if the ventricular volume trace were flat during isovolumetric contraction." },
      { "text": "The 'c' wave, occurring as the contracting ventricle compresses the atrium from below and raises its pressure", "explanation": "Incorrect. The c wave is a positive deflection, not a descent, and it occurs just after the QRS peak during ventricular contraction when ventricular volume is not rising. This would be the correct answer if a small upward bump had been described immediately after the QRS." },
      { "text": "The 'y' descent, occurring as the atrium empties into the ventricle", "explanation": "Correct. The y descent is seen during ventricular filling. The AV valves open at the beginning of ventricular filling, atrial blood flows into the ventricle, and atrial pressure drops - which is precisely why the descent coincides with the steep rise in ventricular volume. It continues until the next atrial contraction produces the next 'a' wave, itself always preceded by a P wave. A slow y descent suggests tricuspid stenosis and an absent y descent suggests cardiac tamponade." },
      { "text": "The 'v' wave, occurring as venous blood accumulates in the atrium against a closed atrioventricular valve", "explanation": "Incorrect. The v wave is a slow upward climb, not a descent, and it occurs while the AV valve is closed during ventricular systole. This would be the correct answer if atrial pressure were gradually rising while ventricular volume stayed at its minimum." },
      { "text": "The 'a' wave, occurring as the atrium contracts and briefly raises its own internal pressure before ventricular systole", "explanation": "Incorrect. The a wave is an upward deflection produced by atrial contraction and follows the P wave. Although it does coincide with a small rise in ventricular volume, it is a wave rather than a descent. This would be the correct answer if a positive deflection had been described about 0.1 s after the P wave." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: the y descent is the atrium emptying into the ventricle once the AV valve opens - it lines up with the steep rise in ventricular volume during rapid filling.",
    "pdfPage": 15,
    "pdfQuote": "AV valves open at beginning of"
  },
  {
    "id": 14,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A tracing shows that left ventricular pressure has just risen enough to force the aortic valve open. Over the next fraction of a second, ventricular pressure continues to climb even though blood is now leaving the chamber and ventricular volume is falling. Aortic pressure is also rising during this interval. Which explanation accounts for the continued pressure rise?",
    "options": [
      { "text": "Aortic pressure collapses abruptly once the valve opens, so the gradient widens passively without any additional myocardial work", "explanation": "Incorrect. Aortic pressure actually RISES during rapid ejection because blood is being forced into the aorta, as the tracing itself shows. This would be the correct answer if the aorta were an infinitely compliant reservoir that absorbed volume without any pressure change." },
      { "text": "The atrioventricular valve reopens briefly and adds volume to the chamber, which raises intraventricular pressure further", "explanation": "Incorrect. The AV valves are firmly closed throughout ventricular systole by the large backward pressure gradient, and volume is falling rather than rising. This would be the correct answer if severe mitral regurgitation had allowed retrograde flow during systole." },
      { "text": "Inertia of the ejected blood column pushes backward against the ventricular wall, which is already beginning to relax", "explanation": "Incorrect. Inertia is the driving force in the REDUCED ejection phase, and it carries blood forward rather than backward. Relaxation has not yet begun at this point in the beat. This would be the correct answer if the question described the interval after LV pressure had fallen below aortic pressure." },
      { "text": "The ventricle is still actively contracting, so pressure rises despite ongoing ejection", "explanation": "Correct. This is the rapid ejection phase. Ventricular pressure continues to increase after the aortic or pulmonary valve has opened because the ventricles are still contracting. Aortic and pulmonary artery pressures also rise because blood is being forced into them. Throughout this phase left ventricular pressure exceeds aortic pressure, and the contraction is now isotonic rather than isometric. The relationship reverses in the reduced ejection phase that follows." },
      { "text": "Closure of the semilunar valve cusps traps a residual volume within the outflow tract that raises chamber pressure mechanically", "explanation": "Incorrect. Semilunar valve closure ends ejection and begins isovolumetric relaxation, during which pressure falls. Here the valve has just opened. This would be the correct answer if the question described the moment at which the dicrotic notch appears." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: in rapid ejection, LV pressure keeps rising after the aortic valve opens because the ventricle is still contracting. LV > aortic here; the relationship flips in reduced ejection.",
    "pdfPage": 19,
    "pdfQuote": "Ventricular pressure continues to increase after the AoV/PV have opened"
  },
  {
    "id": 15,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A student is asked to mark the exact boundaries of ventricular systole on a strip in which the ECG and the ventricular pressure curve are aligned. Which pair of ECG landmarks correctly brackets ventricular systole, and what is the underlying rule that generates those boundaries?",
    "options": [
      { "text": "From the P wave to the QRS complex, because atrial depolarization initiates the ventricular contraction that follows it", "explanation": "Incorrect. That interval is the PR interval, which sits mechanically in the final phase of ventricular FILLING. Atrial depolarization initiates atrial, not ventricular, contraction. This would be the correct answer if the question asked where the atrial kick occurs." },
      { "text": "From the start of the QRS complex to the beginning of the end of the T wave, because contraction follows depolarization", "explanation": "Correct. Ventricular systole runs from the start of the QRS complex to the beginning of the end of the T wave, and the generating rule is that contraction follows depolarization while relaxation follows repolarization. The QRS therefore precedes the onset of ventricular contraction, and the T wave precedes relaxation - which is why the reduced ejection phase ends coincident with the T wave and isovolumetric relaxation begins after it." },
      { "text": "From the end of the T wave to the following P wave, because this is when intraventricular pressure reaches its highest values", "explanation": "Incorrect. That interval is diastasis, the reduced filling phase, during which ventricular pressure is at its LOWEST. This would be the correct answer if the question asked when the ventricle is filling most slowly." },
      { "text": "From the peak of the R wave to the peak of the T wave, because these two peaks mark the greatest electrical vectors of the beat", "explanation": "Incorrect. Peak amplitude is not the boundary rule; ventricular systole begins at the START of the QRS, not its peak, and ends at the beginning of the end of the T wave. This would be the correct answer if boundaries were defined by maximum deflection amplitude." },
      { "text": "From the a wave to the v wave of the atrial pressure curve, because these deflections bracket the interval of ventricular ejection", "explanation": "Incorrect. These are pressure landmarks on the ATRIAL curve rather than ECG landmarks, and the a wave belongs to atrial systole while the v wave occurs during ventricular systole. This would be the correct answer if the question had asked for atrial rather than ventricular systolic boundaries." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: ventricular systole spans the start of the QRS to the beginning of the end of the T wave. Depolarization precedes contraction; repolarization precedes relaxation.",
    "pdfPage": 16,
    "pdfQuote": "Between start of the QRS complex"
  },
  {
    "id": 16,
    "category": "Cardiology: Valve Mechanics",
    "questionText": "A 62-year-old man is on day 3 of hospitalization for an inferior wall myocardial infarction. He acutely develops severe dyspnea and frothy sputum. Temperature is 37.0 C, blood pressure 88/56 mmHg, pulse 118/min, respirations 30/min, and oxygen saturation 84% on room air. A new loud holosystolic murmur is heard at the apex radiating to the axilla, and bilateral crackles are present throughout both lung fields. Bedside echocardiography shows a mitral leaflet bulging far backward into the left atrium during ventricular contraction, with a large regurgitant jet. Which normal structural function has been lost?",
    "options": [
      { "text": "Active papillary muscle contraction that normally pulls the mitral leaflets into apposition at the end of diastole", "explanation": "Incorrect. This is the common misconception the lecture corrects directly: the papillary muscles do not close the valve. Closure is produced by the backward pressure gradient acting on the leaflets. This would be the correct answer if valve closure were an active muscular event rather than a passive pressure-driven one." },
      { "text": "Papillary muscle and chordal tension restraining the leaflets from prolapsing into the atrium", "explanation": "Correct. The papillary muscles contract with the ventricular myocardium and, acting through the chordae tendineae, pull the leaflets inward toward the ventricle so that they cannot bulge too far backward toward the atria during ventricular contraction. The lecturer describes exactly this scenario: in myocardial infarction, low blood flow ruptures a chorda tendinea or paralyzes a papillary muscle, the leaflet then bulges far backward into the atrium and leaks severely, and the result can progress to severe or even lethal cardiac incapacity - which matches this patient's acute pulmonary edema and hypotension." },
      { "text": "Semilunar valve cusp apposition that normally prevents diastolic backflow from the great vessel into the ventricle", "explanation": "Incorrect. The semilunar valves are the aortic and pulmonary valves, and their incompetence produces a DIASTOLIC murmur. This patient has a holosystolic murmur at the apex with an echocardiographically confirmed mitral abnormality. This would be the correct answer if a decrescendo diastolic murmur had been described at the left sternal border." },
      { "text": "Atrial contraction that normally holds the atrioventricular leaflets in a closed position throughout ventricular systole", "explanation": "Incorrect. Atrial contraction occurs before ventricular systole and actually pushes the leaflets apart to deliver the atrial kick; it plays no role in holding them shut. This would be the correct answer if the atria contracted during ventricular systole, which they do not." },
      { "text": "Elastic recoil of the mitral annulus that normally seals the valve orifice during the ejection phases of the cycle", "explanation": "Incorrect. The lecture attributes leaflet competence to pressure-driven closure plus papillary and chordal restraint, not to annular elastic recoil. This would be the correct answer if the lecture had described an annular mechanism for valve competence." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: chordal rupture or papillary muscle paralysis after MI removes the restraint that keeps mitral leaflets from prolapsing, producing acute severe regurgitation that can be lethal.",
    "pdfPage": 7,
    "pdfQuote": "prevent their bulging too"
  },
  {
    "id": 17,
    "category": "Cardiology: Venous Waveforms",
    "questionText": "A 71-year-old woman presents with 2 weeks of fatigue and palpitations she describes as 'fluttering'. She takes no cardiac medications. Blood pressure is 118/74 mmHg and the pulse is irregularly irregular at 96/min. Examination of the neck veins shows an undulating venous column without any discrete presystolic deflection. A right heart catheter placed for another indication shows an atrial pressure tracing with c and v waves and x and y descents, but one component of the normal waveform is entirely missing. Which component is absent, and why?",
    "options": [
      { "text": "The x descent, because atrial relaxation cannot occur when the atrial myocardium is depolarizing chaotically", "explanation": "Incorrect. An absent x descent is classically associated with tricuspid regurgitation rather than with fibrillation, and the question states the x descent is present. This would be the correct answer if the tracing showed a broad systolic wave replacing the x descent in a patient with a holosystolic murmur at the left lower sternal border." },
      { "text": "The v descent, because venous return to the atrium ceases entirely once coordinated contraction is lost", "explanation": "Incorrect. There is no such thing as a v descent; v is a wave, and venous return continues regardless of atrial rhythm because it is driven by the pressure difference between the great veins and the atrium. This would be the correct answer if the terminology were being tested rather than the pathophysiology." },
      { "text": "The y descent, because the atrioventricular valve can no longer open during ventricular filling", "explanation": "Incorrect. An absent y descent is characteristic of cardiac tamponade, in which the pericardium prevents further ventricular filling. AV valve opening is a pressure-gradient event and is preserved in fibrillation, and the question states the y descent is present. This would be the correct answer if the patient had distended neck veins, muffled heart sounds and hypotension." },
      { "text": "The a wave, because there is no organized atrial contraction to generate it", "explanation": "Correct. The a wave is produced by the small increase in atrial pressure that accompanies atrial contraction, and it is the only deflection belonging to atrial systole. In atrial fibrillation the atria beat irregularly, rapidly and erratically without coordinated contraction, so the a wave is simply absent. This is the waveform-clinical pairing the lecturer singles out as worth knowing. It also explains the missing presystolic venous deflection and the irregularly irregular pulse in this patient." },
      { "text": "The c wave, because the ventricle no longer compresses the atrium during the isovolumetric contraction phase", "explanation": "Incorrect. Ventricular contraction still occurs in atrial fibrillation and still compresses the atrium, so the c wave persists, and the question states it is present. This would be the correct answer if ventricular systole were also abolished, which would be incompatible with life." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: absent a wave means no organized atrial contraction - atrial fibrillation. AFib is the most common arrhythmia in the general population and risks stroke and heart failure.",
    "pdfPage": 11,
    "pdfQuote": "Fibrillation (irregular/rapid heartbeat)"
  },
  {
    "id": 18,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "During an electrophysiology experiment, a perfused heart preparation is programmed so that the atria and the ventricles are stimulated at the same instant, abolishing the normal conduction delay between them. Heart rate, contractility and venous return are held constant. Aortic flow measured over several minutes falls substantially compared with baseline. Which normal feature has been eliminated, and what was its purpose?",
    "options": [
      { "text": "The atrioventricular nodal delay, which normally lets the atria load the ventricles before ventricular contraction", "explanation": "Correct. Delay in signal transmission at the AV node of greater than 0.1 s ensures that atrial contraction precedes ventricular contraction, so the atria can pump blood into the ventricles before the strong ventricular contraction begins. Abolishing it makes the atria contract against closed AV valves, wasting the primer-pump contribution of about 10 mL per beat and reducing end-diastolic volume and therefore output." },
      { "text": "The isovolumetric contraction phase, which normally allows intraventricular pressure to build before the semilunar valves are forced open", "explanation": "Incorrect. Isovolumetric contraction is a mechanical consequence of a closed, blood-filled chamber contracting and cannot be abolished by changing stimulation timing. This would be the correct answer if the semilunar valves had been rendered permanently incompetent." },
      { "text": "The dicrotic notch, which normally signals the moment at which the semilunar valve cusps have fully coapted", "explanation": "Incorrect. The dicrotic notch is a feature of the aortic pressure tracing produced by backflow into the closing cusps; it is a marker of valve closure, not a determinant of cardiac output. This would be the correct answer if the question asked what feature identifies the end of ejection on an aortic tracing." },
      { "text": "The x descent of the atrial pressure curve, which normally reflects atrial relaxation at the beginning of atrial diastole", "explanation": "Incorrect. The x descent is a recorded consequence of atrial relaxation, not a mechanism that contributes to forward output. This would be the correct answer if the question asked which deflection disappears in tricuspid regurgitation." },
      { "text": "The two-thirds diastolic fraction of the cardiac cycle, which normally guarantees adequate coronary perfusion time at rest", "explanation": "Incorrect. The systole-to-diastole ratio is set by heart rate and activity level, and heart rate was held constant in this experiment. This would be the correct answer if the preparation had been paced to a much faster rate." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: the AV nodal delay of >0.1 s exists so atrial contraction precedes ventricular contraction. Lose the delay and you lose the atrial kick, exactly as in atrial fibrillation.",
    "pdfPage": 8,
    "pdfQuote": "Delay in signal transmission at the AV node"
  },
  {
    "id": 19,
    "category": "Cardiology: Hemodynamics",
    "questionText": "A 45-year-old man has an arterial line in the radial artery and a separate probe measuring flow in a nailbed capillary. The arterial tracing is markedly pulsatile, cycling between about 120 and 80 mmHg with each beat, whereas the capillary probe shows an essentially continuous, non-pulsatile flow signal. He is normotensive with a normal cardiac examination. Which statement best explains this pair of findings?",
    "options": [
      { "text": "Capillary flow is non-pulsatile because capillaries are perfused exclusively during ventricular diastole after the aortic valve closes", "explanation": "Incorrect. Systemic capillaries are perfused continuously throughout the cycle. Diastolic-predominant perfusion is a feature specific to the coronary circulation, not to capillaries in general. This would be the correct answer if the probe were measuring subendocardial coronary flow." },
      { "text": "Arterial pressure would fall to zero between beats were it not for continuous contraction of the arteriolar smooth muscle", "explanation": "Incorrect. Aortic diastolic pressure is maintained near 80 mmHg by the elastic aorta remaining loaded between beats, not by arteriolar contraction alone. This would be the correct answer if the question concerned the determinants of total peripheral resistance." },
      { "text": "The pulsatility reflects incomplete emptying of the ventricle, so end-systolic volume alone determines the amplitude of the arterial pulse", "explanation": "Incorrect. The ventricle does retain an end-systolic volume, but arterial pulsatility arises from the intermittent nature of ejection, not from the residual volume. This would be the correct answer if the question asked what defines end-systolic volume." },
      { "text": "Both signals should be pulsatile, and the flat capillary signal therefore indicates a technical failure of the flow probe", "explanation": "Incorrect. Steady capillary and venous flow is the normal physiologic finding explicitly stated in the lecture. This would be the correct answer if steady flow in capillaries were pathological, which it is not." },
      { "text": "Blood flows through arteries in spurts because aortic pressure varies through the cycle, while capillary and venous flow is steady", "explanation": "Correct. Aortic pressure peaks near 120 mmHg at rest during ejection and falls gradually to its lowest diastolic value of about 80 mmHg just before the semilunar valve opens in the next cycle. Because arterial pressure varies this way across every beat, blood flows through the arteries in spurts. Downstream, that pulsatility is damped so that flow in capillaries and veins is steady - which is what the two simultaneous tracings are showing." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: aortic pressure swings from ~120 to ~80 mmHg each beat, so arterial flow is pulsatile ('in spurts'), while capillary and venous flow is steady.",
    "pdfPage": 31,
    "pdfQuote": "reaches its lowest diastolic value"
  },
  {
    "id": 20,
    "category": "Cardiology: Heart Sounds",
    "questionText": "A 66-year-old man with a 20-year history of poorly controlled hypertension is seen for a routine visit. Blood pressure is 168/98 mmHg and pulse is 74/min and regular. On auscultation at the apex with the bell, a low-frequency extra sound is heard immediately before the first heart sound. Echocardiography shows concentric left ventricular wall thickening with normal chamber size and normal systolic function. Which event generates this extra sound?",
    "options": [
      { "text": "Closure of the atrioventricular valves at the onset of ventricular systole, which is being accentuated by the elevated afterload", "explanation": "Incorrect. AV valve closure is S1 itself, and the question describes an additional sound occurring immediately BEFORE S1. This would be the correct answer if the question asked which event produces the first heart sound." },
      { "text": "The rapid filling phase of ventricular diastole, occurring in early diastole shortly after the second heart sound", "explanation": "Incorrect. That describes S3, which occurs in EARLY diastole after S2 and is frequently normal in children. This sound occurs at end diastole, immediately before S1, in an adult with LVH. This would be the correct answer if the extra sound had been heard shortly after S2." },
      { "text": "Atrial systole occurring at end diastole against a hypertrophied ventricle", "explanation": "Correct. S4 is a gallop sound associated with atrial systole at end diastole against a hypertrophied ventricle. The thickened, non-compliant ventricle resists the atrial kick, and the resulting vibration is audible just before S1. This patient's long-standing hypertension and echocardiographic concentric wall thickening supply exactly the substrate the lecture names, and the end-diastolic timing distinguishes it from the early-diastolic S3." },
      { "text": "Backflow of aortic blood filling the semilunar valve cusps as they close at the very end of the ejection phase", "explanation": "Incorrect. That mechanism produces the dicrotic notch on the aortic pressure tracing, a hemodynamic feature rather than an auscultated extra sound, and it occurs at the end of systole. This would be the correct answer if the question asked about a feature of an arterial pressure waveform." },
      { "text": "Closure of the semilunar valves marking the transition from ventricular systole into ventricular diastole", "explanation": "Incorrect. That is S2, which occurs at the end of ventricular systole. The described sound is at end diastole, immediately preceding S1. This would be the correct answer if the question asked what event defines the start of ventricular diastole." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: S4 is atrial systole against a stiff hypertrophied ventricle and sits just before S1; S3 is rapid filling and sits just after S2 and can be normal in children.",
    "pdfPage": 29,
    "pdfQuote": "against a hypertrophied"
  },
  {
    "id": 21,
    "category": "Cardiology: Valve Mechanics",
    "questionText": "A 55-year-old woman undergoes a research protocol in which high-frame-rate echocardiography captures valve motion throughout the cardiac cycle. The investigator freezes the image at a moment when the ventricular volume trace is descending rapidly, the ECG shows the ST segment, and left ventricular pressure exceeds aortic pressure. Which description of the valve positions at this instant is correct?",
    "options": [
      { "text": "The aortic valve is closed and the left atrioventricular valve is open, permitting continued ventricular filling", "explanation": "Incorrect. That combination occurs during ventricular filling, when volume is RISING, not falling. This would be the correct answer if the frozen frame showed a rising volume trace during diastasis." },
      { "text": "The aortic valve is open and the left atrioventricular valve is also open, allowing simultaneous inflow and outflow", "explanation": "Incorrect. Both valves are never open simultaneously in the normal heart; simultaneous inflow and outflow would defeat the pump. This would be the correct answer only in a heart with a fixed, non-closing mitral orifice." },
      { "text": "The aortic valve is closed and the left atrioventricular valve is closed, so the chamber volume is fixed", "explanation": "Incorrect. That is an isovolumetric phase, in which volume is by definition unchanged. Here the volume trace is descending rapidly, so a valve must be open. This would be the correct answer if the volume trace were perfectly flat." },
      { "text": "Both the right and left atrioventricular valves are open, permitting biventricular filling from the atria", "explanation": "Incorrect. Open AV valves define the filling phases of ventricular diastole, when volume rises. The ST segment corresponds to ventricular contraction, not filling. This would be the correct answer if the ECG showed the interval between the T wave and the next P wave." },
      { "text": "The aortic valve is open and the left atrioventricular valve is closed", "explanation": "Correct. This is the ventricular ejection phase, and it is the answer to the lecture's own sample question. The aortic valve is open so that blood can be driven into the aorta, and the left AV valve is closed so that blood cannot regurgitate back into the atrium under normal healthy conditions. The descending volume trace, the ST segment on the ECG and the LV-over-aortic pressure relationship all confirm rapid ejection." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: during ventricular ejection the aortic valve is OPEN and the left AV valve is CLOSED. The ST segment is when the ventricles contract.",
    "pdfPage": 35,
    "pdfQuote": "During ventricular ejection phase, which of the following"
  },
  {
    "id": 22,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A 58-year-old man undergoes left heart catheterization for atypical chest pain; coronary anatomy is normal. Simultaneous left ventricular and aortic pressure tracings are recorded. The interventional cardiologist points to the instant at which the rapid ventricular ejection phase converts to the reduced ejection phase and asks the fellow to define it hemodynamically. Which event defines this transition?",
    "options": [
      { "text": "Aortic pressure reaches its minimum diastolic value of approximately 80 mmHg at the end of the beat", "explanation": "Incorrect. The aortic diastolic nadir occurs late in ventricular diastole, just before the semilunar valve opens in the next cycle - long after ejection has ended. This would be the correct answer if the question asked when aortic pressure is at its lowest point in the cycle." },
      { "text": "Pressure in the left ventricle falls below the pressure in the aorta", "explanation": "Correct. This is the answer to the lecture's own sample question. During rapid ejection LV pressure exceeds aortic pressure; the transition to reduced ejection occurs when LV pressure falls slightly below aortic pressure. Blood continues to be ejected beyond that crossover because the inertia imparted to the blood, rather than the pressure difference, is now the driving force. Ejection itself does not stop until ventricular pressure can no longer hold the semilunar valves open, which coincides with the T wave." },
      { "text": "The left semilunar valve closes and thereby terminates all forward flow from the ventricle into the aorta", "explanation": "Incorrect. Aortic valve closure ends ejection entirely and begins isovolumetric relaxation; it does not mark a transition between two ejection sub-phases. This would be the correct answer if the question asked what event begins ventricular diastole." },
      { "text": "The left atrioventricular valve opens, allowing atrial blood to begin flowing into the relaxing ventricle", "explanation": "Incorrect. Mitral opening occurs at the end of isovolumetric relaxation and begins the rapid filling phase, well after ejection is complete. This would be the correct answer if the question asked what event initiates the y descent." },
      { "text": "Atrial pressure becomes greater than ventricular pressure, reversing the transvalvular gradient across the mitral valve", "explanation": "Incorrect. Atrial pressure exceeding ventricular pressure is what opens the AV valve during diastole; during ejection ventricular pressure is far above atrial pressure. This would be the correct answer if the question asked what condition permits ventricular filling." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: rapid ejection becomes reduced ejection at the moment LV pressure falls below aortic pressure. Ejection continues past that crossover on inertia alone.",
    "pdfPage": 23,
    "pdfQuote": "The rapid ventricular ejection phase changes to"
  },
  {
    "id": 23,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A 49-year-old woman with exertional dyspnea undergoes invasive hemodynamic study with a conductance catheter that reports left ventricular pressure and volume simultaneously. The technician highlights an interval in which the pressure channel is descending at its steepest rate of the entire beat while the volume channel does not move at all. The mitral valve has not yet opened. Which measurement is being derived from this interval, and what is the ventricle doing?",
    "options": [
      { "text": "dP/dt (max), reflecting the peak rate of pressure development during isovolumetric contraction of the ventricle", "explanation": "Incorrect. dP/dt (max) is derived from the RISING pressure of isovolumetric contraction at the QRS. Here pressure is descending. This would be the correct answer if the pressure channel were climbing steeply with a flat volume channel." },
      { "text": "Peak systolic ejection rate, reflecting the maximal velocity of blood leaving the ventricle during rapid ejection", "explanation": "Incorrect. Ejection requires an open semilunar valve and a falling volume channel; here volume is unchanged. This would be the correct answer if the volume trace were descending steeply during the ST segment." },
      { "text": "Pulmonary capillary wedge pressure, reflecting the left atrial pressure transmitted backward across the pulmonary circulation", "explanation": "Incorrect. Wedge pressure is obtained from a pulmonary artery catheter on the right side, not from a left ventricular conductance catheter. This would be the correct answer if a Swan-Ganz catheter had been wedged in the pulmonary circulation." },
      { "text": "dP/dt (min), reflecting isovolumetric relaxation with all four valves closed", "explanation": "Correct. Ventricular diastole begins with closure of the semilunar valves while the AV valves remain shut, so all four valves are closed and volume cannot change. The fall in ventricular pressure follows T wave repolarization, and the rate of that fall is quantified in clinical laboratories as dP/dt (min). Pressure continues to drop until it falls below atrial pressure, at which point the AV valve opens at the level of the v wave and the rapid filling phase begins." },
      { "text": "End-diastolic volume, reflecting the maximal ventricular filling achieved just before the onset of ventricular contraction", "explanation": "Incorrect. End-diastolic volume is a volume rather than a rate, and it is measured at the highest point of the volume curve just before the QRS. This would be the correct answer if the question asked what value the volume channel reaches immediately before isovolumetric contraction." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: dP/dt (min) is measured during isovolumetric relaxation - steepest pressure fall, flat volume, all four valves closed, following T wave repolarization.",
    "pdfPage": 25,
    "pdfQuote": "dP/dt (min)"
  },
  {
    "id": 24,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A research technician records the surface ECG and a left atrial pressure catheter simultaneously in a healthy volunteer. She observes that a small pressure deflection always follows a particular ECG deflection by a reproducible interval of about 0.1 seconds, and that this relationship holds beat after beat regardless of heart rate. Which principle does this observation demonstrate, and which two events are involved?",
    "options": [
      { "text": "Electrical activity precedes mechanical activity: the P wave precedes the 'a' wave", "explanation": "Correct. Atrial depolarization, seen as the P wave, is required for and always precedes atrial contraction, and it leads the 'a' wave of the atrial pressure curve by about 0.1 seconds. This is a specific instance of the lecture's governing rule that cardiac electrical activity precedes mechanical activity, where mechanical means contraction or relaxation. The same rule places the QRS before the onset of ventricular contraction and the T wave before ventricular relaxation." },
      { "text": "Mechanical activity precedes electrical activity, because stretch of the atrial myocardium is what triggers the sinoatrial node to fire", "explanation": "Incorrect. This inverts the fundamental sequence. The lecture states repeatedly that cardiac electrical activity precedes mechanical activity, and depolarization is required for contraction. This would be the correct answer if the heart were driven by a purely mechanical stretch reflex." },
      { "text": "Sinoatrial nodal depolarization is directly visible on the surface ECG and precedes the atrial pressure rise by about 0.1 seconds", "explanation": "Incorrect. Depolarization of the sinoatrial node itself is NOT detected on the surface ECG; what is seen is the P wave of atrial depolarization. This would be the correct answer if surface electrodes were sensitive enough to record nodal tissue directly." },
      { "text": "The QRS complex precedes the c wave, demonstrating that ventricular depolarization is required before the atrium can relax", "explanation": "Incorrect. The QRS does precede the c wave, but atrial relaxation is not caused by ventricular depolarization, and the described interval of 0.1 s with a small deflection matches the P-to-a relationship. This would be the correct answer if the question specified a deflection appearing immediately after the QRS peak." },
      { "text": "Repolarization precedes contraction, which is why the T wave is followed within 0.1 seconds by the rise in ventricular pressure", "explanation": "Incorrect. Repolarization precedes RELAXATION, not contraction; depolarization precedes contraction. The T wave is followed by a fall in ventricular pressure. This would be the correct answer if the pairing named relaxation rather than contraction." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: the P wave leads the atrial 'a' wave by about 0.1 s. Depolarization precedes contraction and repolarization precedes relaxation - SA nodal firing itself is invisible on ECG.",
    "pdfPage": 10,
    "pdfQuote": "wave precedes"
  },
  {
    "id": 25,
    "category": "Cardiology: Hemodynamics",
    "questionText": "A 60-year-old man undergoes right heart catheterization. The operator advances the catheter from the right atrium through the right ventricle into the pulmonary artery, recording pressures at each step. She notes that the waveform morphology on the right atrial tracing is identical in shape to the left atrial tracing she recorded in a different patient, and that all right-sided numeric values are considerably lower. Which statement best characterizes the right-sided circulation as described in this lecture?",
    "options": [
      { "text": "Right ventricular systolic pressure normally matches left ventricular systolic pressure because the two ventricles eject equal volumes", "explanation": "Incorrect. Equal stroke output does not require equal pressure. Right ventricular systolic pressure is on the lower end compared with the left ventricle, because the pulmonary circuit has far lower resistance. This would be the correct answer if pulmonary and systemic vascular resistances were equal." },
      { "text": "Right atrial pressure normally exceeds left atrial pressure, which is why blood shunts from right to left across a patent foramen", "explanation": "Incorrect. Left atrial mean pressure of 2-10 mmHg is slightly HIGHER than the right atrial mean of 2-8 mmHg. This would be the correct answer if right-sided pressures were normally the higher of the two." },
      { "text": "The right side shows the same a-c-x-v-y morphology with lower absolute values, and outputs are equal over minutes", "explanation": "Correct. The lecture makes exactly this pairing: right-sided pressure waveforms show the same a, c, x, v and y morphology as the left, and the same phase logic applies, but the numeric values on the y axis are much lower than on the left. Separately, although events on the two sides are slightly asynchronous, when measured over a period of minutes the outputs of the left and right ventricles are equal - so the right side is a low-pressure, equal-volume pump." },
      { "text": "Pulmonary artery diastolic pressure normally falls below right ventricular diastolic pressure, allowing continuous forward flow into the lungs", "explanation": "Incorrect. Pulmonary artery diastolic pressure is slightly HIGHER than right ventricular diastolic pressure, which is what keeps the pulmonic valve closed during diastole. This would be the correct answer if the pulmonic valve were normally incompetent." },
      { "text": "Left ventricular contraction begins after right ventricular contraction, and right atrial systole follows left atrial systole in sequence", "explanation": "Incorrect. This reverses the stated sequence: RIGHT atrial systole precedes LEFT atrial systole, and contraction of the right ventricle starts AFTER that of the left. This would be the correct answer if the described asynchrony ran in the opposite direction." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: the right side has the same a-c-x-v-y waveform shape at much lower pressures. RA systole precedes LA systole and RV contraction follows LV, yet outputs are equal over minutes.",
    "pdfPage": 32,
    "pdfQuote": "Right-sided pressures"
  },
  {
    "id": 26,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A 33-year-old marathon runner with a resting heart rate of 44/min undergoes research echocardiography. Because his cycle length is long, the investigator can clearly resolve a prolonged interval late in ventricular diastole during which ventricular volume rises only minimally and mitral inflow velocity is very low. Which phase is this, and which event terminates it?",
    "options": [
      { "text": "Isovolumetric relaxation, terminated by opening of the mitral valve at the level of the v wave of the atrial pressure curve", "explanation": "Incorrect. During isovolumetric relaxation there is no mitral inflow at all, because the mitral valve is still closed and volume is completely unchanged. The question describes low but present inflow. This would be the correct answer if inflow velocity were zero and volume perfectly flat." },
      { "text": "Rapid filling, terminated when ventricular pressure rises to equal atrial pressure and mitral inflow briefly ceases", "explanation": "Incorrect. Rapid filling is characterized by a steep rise in volume as blood surges into the ventricle, not by minimal volume change. This would be the correct answer if the volume trace were climbing steeply immediately after mitral valve opening." },
      { "text": "Reduced filling, or diastasis, terminated by the P wave of the next cycle", "explanation": "Correct. After rapid filling, ventricular diastole transitions into a slower reduced filling phase called diastasis, in which blood continues to move from veins through the relaxed atria into the relaxed ventricles but far more slowly. Diastasis ends with the P wave of the next cycle, which initiates atrial depolarization and therefore the atrial kick. Ventricular diastole as a whole ends with the appearance of the R wave. Diastasis is disproportionately long at slow heart rates, which is why it is easy to resolve in this bradycardic athlete." },
      { "text": "Reduced ejection, terminated by the T wave once ventricular pressure can no longer keep the semilunar valves open", "explanation": "Incorrect. Reduced ejection is a systolic phase in which volume is FALLING, not rising, and the question describes late diastole. This would be the correct answer if the described interval showed a slowly declining volume during the T wave." },
      { "text": "Atrial systole, terminated by closure of the atrioventricular valves at the very beginning of ventricular contraction", "explanation": "Incorrect. Atrial systole produces a distinct final increment in ventricular volume of about 10 mL and follows the P wave. The described interval precedes the P wave. This would be the correct answer if a discrete late volume step had been seen after a P wave." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: diastasis is the slow reduced-filling phase and ends with the P wave of the next cycle; ventricular diastole itself ends with the R wave.",
    "pdfPage": 27,
    "pdfQuote": "The Diastasis ends with the P wave of the next cycle"
  },
  {
    "id": 27,
    "category": "Cardiology: Hemodynamics",
    "questionText": "A physiologist simultaneously records right and left heart events in an anesthetized subject with high temporal resolution. She confirms that the two sides are not perfectly synchronous. Over a 5-minute recording, she also integrates flow in the aorta and in the pulmonary artery. Which combination of findings would she expect?",
    "options": [
      { "text": "Left atrial systole precedes right atrial systole, and aortic flow exceeds pulmonary flow by about 10% because of bronchial circulation", "explanation": "Incorrect. This reverses the atrial sequence given in the lecture, and no such systematic 10% output difference is described. This would be the correct answer if left-sided events consistently led right-sided events, which is the opposite of what was taught." },
      { "text": "Right atrial systole precedes left atrial systole, and integrated aortic and pulmonary flows are equal", "explanation": "Correct. Although events on the two sides of the heart are similar, they are somewhat asynchronous: right atrial systole precedes left atrial systole, and contraction of the right ventricle starts after that of the left. Despite these subtle timing differences, when measured over a period of minutes the output of the left ventricle into the aorta and the output of the right ventricle into the pulmonary artery are equal - which is a necessary condition for a circulation arranged in series." },
      { "text": "Both sides contract in perfect synchrony because they share a single conduction system, and their outputs are therefore identical", "explanation": "Incorrect. The outputs are indeed equal, but the premise is wrong: the lecture explicitly states that the two sides are somewhat asynchronous. This would be the correct answer if a shared conduction system enforced perfectly simultaneous activation, which it does not." },
      { "text": "Right ventricular contraction begins before left ventricular contraction, and pulmonary flow exceeds aortic flow at rest", "explanation": "Incorrect. Contraction of the RIGHT ventricle starts AFTER that of the left, and pulmonary flow does not exceed aortic flow. This would be the correct answer if the ventricular sequence and flow relationship were both reversed." },
      { "text": "The right ventricle ejects a smaller volume because it generates lower pressure, so aortic flow exceeds pulmonary flow at every heart rate", "explanation": "Incorrect. Lower right-sided pressure reflects lower pulmonary vascular resistance, not a smaller ejected volume; the two outputs must match over time or blood would pool in one circuit. This would be the correct answer if output were determined by generated pressure rather than by venous return and stroke volume." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: RA systole precedes LA systole and RV contraction starts after LV contraction, yet over minutes LV and RV outputs are equal - the circulation is in series.",
    "pdfPage": 6,
    "pdfQuote": "chambers and great vessels"
  },
  {
    "id": 28,
    "category": "Cardiology: Valve Mechanics",
    "questionText": "A 73-year-old man presents to the emergency department with exertional dyspnea, syncope and chest pain. He has poorly managed hypercholesterolemia and an 11-year history of hypertension. Blood pressure is 101/75 mmHg. The lungs are clear. A systolic murmur is loudest over the aorta and peaks at mid systole. ECG shows left axis deviation with a normal ST segment. Chest radiograph shows a large left ventricle with calcification of the aortic valve. Echocardiography shows greatly increased velocity of flow during the systolic portion of the cardiac cycle, with left heart enlargement and left ventricular hypertrophy. Cardiac enzymes are normal. During which phases of the cardiac cycle is this murmur being generated?",
    "options": [
      { "text": "Isovolumetric contraction and isovolumetric relaxation, when all four valves are closed and pressure changes are steepest", "explanation": "Incorrect. Both isovolumetric phases have all four valves closed, so no blood crosses any valve and no flow-related murmur can be generated. This would be the correct answer if murmurs arose from pressure change rather than from flow." },
      { "text": "Atrial systole alone, when the atrial kick drives its final increment of blood across the mitral valve into the ventricle", "explanation": "Incorrect. Atrial systole moves blood across the MITRAL valve at end diastole; the murmur described is loudest over the aorta and peaks at mid systole. This would be the correct answer if the murmur were a late diastolic sound at the apex." },
      { "text": "Rapid filling and reduced filling, when the atrioventricular valves are open and blood moves from atrium into ventricle", "explanation": "Incorrect. Those are the diastolic filling phases, during which the aortic valve is closed. A murmur across the aortic valve cannot be generated then. This would be the correct answer if the murmur were diastolic and heard at the apex." },
      { "text": "The interval spanning the PR segment, when the atrioventricular node is delaying transmission before ventricular contraction", "explanation": "Incorrect. The PR interval sits mechanically in the final phase of ventricular filling, when the aortic valve is closed. This would be the correct answer if the question asked where the PR interval falls in mechanical terms." },
      { "text": "Rapid ejection and reduced ejection, when the aortic valve is open", "explanation": "Correct. A murmur requires flow across a valve. The aortic valve is open only during the two ejection sub-phases of ventricular systole, which is why the murmur is systolic and peaks at mid systole - matching the ejection profile as flow accelerates and then declines. The echo finding of greatly increased velocity of flow during the systolic portion of the cardiac cycle localizes the lesion to the aortic valve during ejection, and the normal cardiac enzymes argue against acute infarction as the cause of his chest pain. The lecturer defers the full diagnosis to Part II." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: a murmur needs flow across a valve. An aortic systolic murmur must be generated during rapid and reduced ejection, the only phases with the aortic valve open.",
    "pdfPage": 3,
    "pdfQuote": "Systolic murmur loudest over the aorta"
  },
  {
    "id": 29,
    "category": "Cardiology: Heart Sounds",
    "questionText": "A 40-year-old woman is being taught bedside auscultation. The instructor asks her to identify which audible event marks the precise boundary between ventricular systole and ventricular diastole, and to explain what is happening to the valves and to ventricular volume immediately afterward. Which of the following answers is correct?",
    "options": [
      { "text": "S2, produced by semilunar valve closure; volume then stays fixed at ESV until the AV valve opens", "explanation": "Correct. Ventricular diastole starts with the closure of the semilunar valves, and that closure generates S2. The AV valves are also still closed at that moment, so all four valves are shut and ventricular volume is fixed at the end-systolic volume throughout isovolumetric relaxation. Volume only begins to rise when ventricular pressure falls below atrial pressure and the AV valve opens, initiating rapid filling." },
      { "text": "S1, produced by closure of the atrioventricular valves; ventricular volume then falls steeply as blood is ejected into the aorta", "explanation": "Incorrect. S1 marks the boundary in the opposite direction - it begins ventricular SYSTOLE, not diastole. Volume also does not fall immediately after S1, because isovolumetric contraction intervenes first. This would be the correct answer if the question asked which sound begins ventricular systole." },
      { "text": "S3, produced by the rapid filling phase; ventricular volume then continues to increase slowly through the diastasis interval", "explanation": "Incorrect. S3 occurs after ventricular diastole has already begun, during rapid filling, so it cannot mark the boundary. It is also absent in most normal adults. This would be the correct answer if the question asked what sound accompanies the rapid filling phase." },
      { "text": "S4, produced by atrial systole; ventricular volume then reaches its end-diastolic value immediately before ventricular contraction begins", "explanation": "Incorrect. S4 occurs at end diastole against a hypertrophied ventricle and marks the transition from atrial systole into ventricular systole, not the systole-to-diastole boundary. This would be the correct answer if the question asked which sound coincides with the atrial kick." },
      { "text": "The dicrotic notch, produced by backflow into the semilunar cusps; ventricular volume then begins rising as the mitral valve opens", "explanation": "Incorrect. The dicrotic notch is a feature of the aortic pressure tracing and is not an audible heart sound, and the mitral valve does not open until after isovolumetric relaxation is complete. This would be the correct answer if the question concerned a feature of the arterial pressure waveform." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: S2 (semilunar closure) opens ventricular diastole and is followed by isovolumetric relaxation, with all four valves shut and volume fixed at ESV.",
    "pdfPage": 28,
    "pdfQuote": "In normal adults, only"
  },
  {
    "id": 30,
    "category": "Cardiology: Cardiac Cycle",
    "questionText": "A 51-year-old man is having continuous ECG and echocardiographic monitoring during a stress protocol. The cardiologist stops the recording at a frame in which the ECG shows the ST segment and asks the student to state what is occurring mechanically in the ventricle at that exact instant, and to name the phase that will follow once the T wave appears. Which answer is correct?",
    "options": [
      { "text": "The ventricles are filling passively during diastasis, and the next phase after the T wave will be atrial systole", "explanation": "Incorrect. Diastasis occupies the interval between the T wave and the next P wave, not the ST segment, and it is followed by atrial systole only after the P wave arrives. This would be the correct answer if the frozen frame showed the interval just before the next P wave." },
      { "text": "The ventricles are in isovolumetric contraction, and the next phase after the T wave will be rapid ejection into the great vessels", "explanation": "Incorrect. Isovolumetric contraction occurs at the QRS complex, before the ST segment, and is followed by rapid ejection well before the T wave appears. This would be the correct answer if the frame had been frozen during the QRS complex." },
      { "text": "The atria are contracting to deliver the primer-pump volume, and the next phase after the T wave will be isovolumetric contraction", "explanation": "Incorrect. Atrial systole follows the P wave and occurs at the very start of the cycle, not during the ST segment. This would be the correct answer if the frozen frame showed the interval between the P wave and the QRS complex." },
      { "text": "The ventricles are contracting and ejecting, and the phase after the T wave will be isovolumetric relaxation", "explanation": "Correct. The ST segment is the interval when the ventricles contract, and mechanically that corresponds to the ejection sub-phases with the semilunar valves open and ventricular volume falling. Reduced ejection ends coincident with the T wave, at which point ventricular pressure can no longer hold the semilunar valves open. Their closure begins ventricular diastole with isovolumetric relaxation, during which the fall in ventricular pressure follows T wave repolarization while volume stays fixed at the end-systolic volume." },
      { "text": "The ventricles are relaxing with all four valves closed, and the next phase after the T wave will be the rapid filling of both ventricles", "explanation": "Incorrect. Isovolumetric relaxation begins after the T wave, not during the ST segment, and it is what will follow rather than what is occurring. This would be the correct answer if the frame had been frozen just after the T wave had completed." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: the ST segment is when the ventricles contract and eject; the T wave marks the end of reduced ejection, after which isovolumetric relaxation begins.",
    "pdfPage": 33,
    "pdfQuote": "Physiology by Linda S Costanzo"
  }
];

window.Test_CV28 = Test_CV28;
