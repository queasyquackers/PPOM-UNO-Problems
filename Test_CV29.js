const Test_CV29 = [
  {
    "id": 1,
    "category": "Cardiology: Cardiac Cycle & PV Loops",
    "questionText": "During a cardiac catheterization study a physiologist records simultaneous left ventricular pressure and volume and plots them against one another. One segment of the resulting loop shows ventricular pressure falling steeply while ventricular volume remains completely constant at the lowest value of the entire cycle. The segment immediately preceding it ended with closure of the aortic valve. Which of the following best characterizes this segment of the loop?",
    "options": [
      { "text": "Rapid ejection, during which the open aortic valve permits blood to leave the ventricle quickly", "explanation": "Incorrect. Rapid ejection occurs along the upper limb of the loop, where volume is falling steeply because the aortic valve is open; here volume is not changing at all, and the aortic valve has already closed. This would be the correct answer if the tracing showed a sharp fall in volume with pressure near its systolic peak." },
      { "text": "Diastolic filling, during which the open mitral valve allows the ventricle to accept atrial blood", "explanation": "Incorrect. Filling is the bottom limb of the loop and is defined by volume increasing at low pressure with the mitral valve open. In this segment volume is fixed and pressure is actively falling, so the mitral valve has not yet opened. This would be the correct answer if volume were rising from the end-systolic value toward the end-diastolic value." },
      { "text": "Isovolumetric relaxation, with both valves closed until pressure falls near zero", "explanation": "Correct. Once the aortic valve closes at the end-systolic volume of about 50 mL, both valves are shut, so no blood can enter or leave and volume is fixed while pressure falls. This is the left-hand vertical limb of the loop. The mitral valve opens only when ventricular pressure has fallen close to - though not exactly to - zero; at high pressure it should not and does not open, which is what keeps this limb vertical." },
      { "text": "Isovolumetric contraction, with both valves closed while pressure is built for ejection", "explanation": "Incorrect. Isovolumetric contraction is also a fixed-volume segment, but it is the right-hand vertical limb, occurring at the largest volume of the cycle and with pressure rising rather than falling. The vignette specifies the lowest volume of the cycle and falling pressure. This would be the correct answer if the segment followed mitral valve closure at end-diastolic volume." },
      { "text": "Reduced ejection, during which the remaining stroke volume slowly crosses the aortic valve", "explanation": "Incorrect. Reduced ejection is the second half of the ejection limb and still involves volume leaving the ventricle through an open aortic valve. Constant volume excludes any ejection phase. This would be the correct answer if volume were still falling toward the end-systolic value with the aortic valve open." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: the two vertical limbs of the PV loop are the isovolumetric phases; the right-hand one (at EDV, pressure rising) is contraction and the left-hand one (at ESV, pressure falling) is relaxation.",
    "pdfPage": 5,
    "pdfQuote": "Pressure-Volume Curve and Laplace Law"
  },
  {
    "id": 2,
    "category": "Cardiology: Cardiac Cycle & PV Loops",
    "questionText": "A physiology student traces a left ventricular pressure-volume loop and stops at the point where the bottom limb of the loop meets the right-hand vertical limb. At this point the ventricle contains the largest volume of the entire cycle, approximately 120 mL. Which event occurs at this point, and what happens immediately afterward?",
    "options": [
      { "text": "The mitral valve closes, and pressure then rises at constant volume", "explanation": "Correct. The bottom limb is diastolic filling, and it ends when the ventricle has taken its maximum volume - the end-diastolic volume of about 120 mL. At that instant the mitral valve closes, so no further blood arrives from the left atrium. With both valves now shut, the ventricle can only build pressure, which is isovolumetric contraction and is drawn as the vertical right-hand limb. It ends when pressure exceeds aortic pressure and the aortic valve opens." },
      { "text": "The aortic valve opens, and blood is then ejected rapidly into the aorta", "explanation": "Incorrect. Aortic valve opening occurs at the top of the right-hand vertical limb, after isovolumetric contraction has raised pressure enough to exceed aortic pressure - not at the bottom of that limb where volume is maximal and pressure is still low. This would be the correct answer if the described point were the upper right corner of the loop." },
      { "text": "The mitral valve opens, and the ventricle then begins to receive atrial blood", "explanation": "Incorrect. Mitral valve opening occurs at the lower left corner of the loop, at the end-systolic volume of about 50 mL, once pressure has fallen close to zero. The vignette describes the largest volume of the cycle, which is the opposite corner. This would be the correct answer if the point lay at the bottom of the left-hand vertical limb." },
      { "text": "The aortic valve closes, and ventricular pressure then falls steeply toward zero", "explanation": "Incorrect. Aortic valve closure occurs at the end of ejection, at the smallest ventricular volume, and begins isovolumetric relaxation. Here volume is maximal, not minimal. This would be the correct answer if the described point were the upper left corner of the loop." },
      { "text": "The mitral valve closes, and the ventricle then continues to fill passively from the atrium for a further period", "explanation": "Incorrect. The first half of this option is right, but the second half is a common misconception: once the mitral valve has closed no further blood can enter, which is precisely why the next phase is isovolumetric. This would be the correct answer if the mitral valve remained open into early systole, which does not occur." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: the corners of the PV loop are valve events - mitral closure at EDV, aortic opening, aortic closure at ESV, mitral opening - and the sides are the four phases between them.",
    "pdfPage": 5,
    "pdfQuote": "LAW OF LAPLACE relates ventricular pressure (P)"
  },
  {
    "id": 3,
    "category": "Cardiology: Cardiac Output",
    "questionText": "A 62-year-old woman undergoes routine transthoracic echocardiography. Her left ventricular end-diastolic volume is measured at 130 mL and her end-systolic volume at 60 mL. Her heart rate at the time of the study is 80 beats per minute. Which of the following pairs correctly gives her stroke volume and her cardiac output?",
    "options": [
      { "text": "Stroke volume 60 mL; cardiac output 4.8 L/min", "explanation": "Incorrect. This uses the end-systolic volume as the stroke volume rather than the difference between the two volumes. The end-systolic volume is the blood remaining in the ventricle, not the blood ejected. This would be the correct answer if the question had asked for the residual volume left behind after systole and its hypothetical product with heart rate." },
      { "text": "Stroke volume 130 mL; cardiac output 10.4 L/min", "explanation": "Incorrect. This uses the end-diastolic volume as the stroke volume, ignoring the fact that the ventricle never empties completely. Stroke volume is the width of the pressure-volume loop, not its right-hand edge. This would be the correct answer only if the end-systolic volume were zero, which never occurs physiologically." },
      { "text": "Stroke volume 190 mL; cardiac output 15.2 L/min", "explanation": "Incorrect. This adds the two volumes instead of subtracting them, which produces a stroke volume larger than the ventricle ever holds. This would be the correct answer if stroke volume were defined as total ventricular throughput per beat including residual volume, which it is not." },
      { "text": "Stroke volume 70 mL; cardiac output 4.4 L/min after correction for ejection fraction", "explanation": "Incorrect. The stroke volume is right, but cardiac output requires no additional correction: ejection fraction is already implicit in the volumes used to obtain stroke volume, and applying it a second time double-counts. This would be the correct answer if cardiac output were defined as stroke volume times heart rate times ejection fraction, which it is not." },
      { "text": "Stroke volume 70 mL; cardiac output 5.6 L/min", "explanation": "Correct. Stroke volume is end-diastolic volume minus end-systolic volume: 130 minus 60 equals 70 mL, which is the horizontal width of the pressure-volume loop. Cardiac output is stroke volume times heart rate: 70 mL per beat times 80 beats per minute equals 5,600 mL per minute, or 5.6 L/min. The units work because beats cancel, leaving millilitres per minute - the same structure as the lecture's example of 80 mL times 72 beats per minute equalling 5,760 mL/min." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: SV = EDV - ESV and CO = SV x HR; the beats cancel, so cardiac output always comes out in millilitres per minute.",
    "pdfPage": 9,
    "pdfQuote": "The amount of blood ejected by the heart in each beat"
  },
  {
    "id": 4,
    "category": "Cardiology: Cardiac Output",
    "questionText": "A healthy 25-year-old man has a resting stroke volume of 80 mL and a resting heart rate of 72 beats per minute. During peak treadmill exercise his heart rate rises to 150 beats per minute and his stroke volume rises to 110 mL. By approximately what factor has his cardiac output increased from rest to peak exercise?",
    "options": [
      { "text": "About 1.4-fold, because stroke volume alone determines cardiac output", "explanation": "Incorrect. This uses only the ratio of stroke volumes (110 divided by 80) and ignores heart rate entirely, but cardiac output is the product of the two. This would be the correct answer if heart rate had remained unchanged at 72 beats per minute throughout the test." },
      { "text": "About 2.9-fold, from roughly 5.8 to roughly 16.5 L/min", "explanation": "Correct. Resting cardiac output is 80 mL times 72, which is 5,760 mL/min, or about 5.8 L/min. Peak cardiac output is 110 mL times 150, which is 16,500 mL/min, or 16.5 L/min. The ratio is approximately 2.9. Both terms of the product rise during exercise: heart rate rises through sympathetic drive, and stroke volume rises because increased venous return from the exercising legs raises preload, which by the Frank-Starling law increases the force of contraction." },
      { "text": "About 2.1-fold, because heart rate alone determines cardiac output", "explanation": "Incorrect. This uses only the ratio of heart rates (150 divided by 72) and ignores the substantial rise in stroke volume. Both factors contribute to the exercise response. This would be the correct answer if stroke volume had been fixed at 80 mL despite the increased venous return." },
      { "text": "About 4.5-fold, because the two changes multiply with total peripheral resistance", "explanation": "Incorrect. Total peripheral resistance is not a term in the cardiac output equation; it enters only at the next step, where cardiac output times resistance gives mean arterial pressure. This would be the correct answer if the question had asked how arterial pressure changes when resistance also rises." },
      { "text": "About 1.9-fold, because the rise in heart rate is offset by a proportional fall in stroke volume", "explanation": "Incorrect. It is true that at very high rates a shortened diastole reduces stroke volume, but this vignette gives measured values showing stroke volume actually rose. This would be the correct answer if the heart rate had climbed beyond about 200 beats per minute, where diastole becomes too short and both stroke volume and cardiac output fall." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: cardiac output rises in exercise because both terms rise - sympathetic drive raises heart rate while increased venous return raises stroke volume through the Frank-Starling mechanism.",
    "pdfPage": 9,
    "pdfQuote": "CO (ml/min) = SV (ml/beat) X HR (beats/min)"
  },
  {
    "id": 5,
    "category": "Cardiology: Cardiac Mechanics",
    "questionText": "A cardiologist explains to a trainee that two ventricles generating exactly the same peak systolic pressure can nevertheless have very different myocardial oxygen requirements per beat. She draws a transverse section through each ventricle to make her point. Which single variable most directly accounts for the difference in oxygen requirement?",
    "options": [
      { "text": "Heart rate, since oxygen demand is set by the number of contractions per minute", "explanation": "Incorrect. Heart rate is genuinely one of the determinants of myocardial oxygen demand, but the vignette compares two ventricles beat for beat, so rate cannot be the explanation for a per-beat difference. This would be the correct answer if the two hearts differed in rate rather than in geometry." },
      { "text": "Ejection fraction, since the fraction of blood ejected sets the metabolic cost", "explanation": "Incorrect. Ejection fraction is an output measure of pump performance, not a determinant of the energy cost of generating pressure; two ventricles can share an ejection fraction while differing greatly in size and wall thickness. This would be the correct answer if the question had asked which index best summarizes global pump function." },
      { "text": "Total peripheral resistance, since arterial tone determines coronary perfusion pressure and therefore oxygen supply", "explanation": "Incorrect. This confuses supply with demand: peripheral resistance influences afterload and perfusion pressure, but the vignette holds the pressure generated constant and asks what determines the cost of generating it. This would be the correct answer if the question had asked what limits oxygen delivery rather than what sets oxygen demand." },
      { "text": "Wall stress, which is pressure times radius divided by wall thickness", "explanation": "Correct. By the Law of Laplace, wall tension is proportional to pressure times radius, and wall stress equals that tension divided by wall thickness. Wall stress is the primary determinant of myocardial oxygen consumption, so at identical pressures the ventricle with the larger radius or the thinner wall pays a higher oxygen bill for every beat. This is exactly why the normal heart operates efficiently: it keeps its radius relatively small and its wall adequately thick." },
      { "text": "Preload, since end-diastolic volume determines the force of the subsequent contraction", "explanation": "Incorrect. Preload does set the force of contraction through the Frank-Starling mechanism, but it explains how much blood is ejected rather than how expensive each unit of pressure is to generate. This would be the correct answer if the question had asked what determines stroke volume at a fixed contractility." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: wall stress = (P x r)/h and is the primary determinant of myocardial oxygen consumption - a big, thin-walled ventricle burns more oxygen for the same pressure.",
    "pdfPage": 6,
    "pdfQuote": "The end diastolic volume (EDV) is referred to as preload"
  },
  {
    "id": 6,
    "category": "Cardiology: Cardiac Mechanics",
    "questionText": "In an animal model a ventricle is progressively volume-loaded until its internal radius has doubled. Systolic pressure generated and wall thickness are both held unchanged over the course of the experiment. What is the most direct consequence for the myocardium?",
    "options": [
      { "text": "Wall stress doubles, so oxygen consumption per beat rises", "explanation": "Correct. Wall stress equals pressure times radius divided by wall thickness. With pressure and thickness held constant, doubling the radius doubles the wall stress. Because wall stress is the primary determinant of myocardial oxygen consumption, the same generated pressure now costs the muscle twice as much oxygen per beat. This is the mechanism that makes dilated ventricles metabolically inefficient and the reason the normal heart keeps its radius relatively small." },
      { "text": "Wall stress halves, so the ventricle ejects the same volume more cheaply than it did before", "explanation": "Incorrect. This inverts the relationship: radius sits in the numerator of the wall stress expression, so increasing it increases stress. This would be the correct answer if radius appeared in the denominator alongside wall thickness, which it does not." },
      { "text": "Wall stress is unchanged, because the Law of Laplace applies only to thick-walled chambers such as the ventricle", "explanation": "Incorrect. The lecture states the law for thin-walled spheres and cylinders and then applies it directly to the ventricle by adding wall thickness to obtain wall stress; it is not excluded by ventricular geometry. This would be the correct answer if the relationship truly had no application to the heart, which is the opposite of the lecture's central point." },
      { "text": "Afterload falls, because a wider chamber lowers the arterial pressure that must be overcome", "explanation": "Incorrect. Afterload is the arterial pressure the heart must overcome, and it is set on the arterial side, not by the chamber's dimensions. This would be the correct answer if the experiment had lowered aortic pressure rather than increased chamber radius." },
      { "text": "Preload falls, because end-diastolic volume varies inversely with the chamber radius", "explanation": "Incorrect. Preload is end-diastolic volume, and a larger radius means a larger volume, so preload rises rather than falls. This would be the correct answer if the ventricle had been unloaded rather than volume-loaded." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: radius is half the diameter, so a dilated chamber raises wall stress directly - dilation is expensive, and thinning the wall makes it more expensive still.",
    "pdfPage": 5,
    "pdfQuote": "tension (T) in the ventricular wall divided by the ventricular radius"
  },
  {
    "id": 7,
    "category": "Cardiology: Cardiomyopathy",
    "questionText": "Two autopsy hearts are compared side by side. The second heart shows enlargement of all four chambers, a markedly increased left ventricular internal diameter, and a left ventricular free wall that is visibly thinner than the first. The corresponding chest radiograph taken during life showed a greatly enlarged cardiac silhouette. Which statement best explains why this ventricle failed to eject adequately?",
    "options": [
      { "text": "The thickened wall made the chamber stiff, so it could not fill adequately during diastole", "explanation": "Incorrect. This describes the hypertrophied ventricle, which has the opposite wall change; the specimen described has a thinned, not thickened, wall. This would be the correct answer if the specimen showed concentric thickening with a small cavity, as in hypertrophic cardiomyopathy." },
      { "text": "The increased chamber diameter shortened the isovolumetric contraction phase and prevented the aortic valve from opening at all", "explanation": "Incorrect. Aortic valve opening is not abolished in dilated cardiomyopathy; ejection occurs but is inadequate. The problem is force generation and the oxygen cost of that force, not a mechanical failure of valve opening. This would be the correct answer if the patient had a fixed obstruction of the outflow tract." },
      { "text": "The thinned wall cannot generate adequate tension, while the enlarged radius raises wall stress", "explanation": "Correct. The lecturer emphasized both findings together: dilation of all four chambers and ventricular thinning. A thinned wall cannot develop the wall tension needed to generate adequate pressure, so the ventricle cannot push blood out effectively. At the same time the enlarged radius raises wall stress by Laplace, so the failing muscle also pays a higher oxygen cost for whatever pressure it does generate. Both effects push in the same direction toward heart failure." },
      { "text": "The reduced chamber radius lowered wall tension below the level required to open the aortic valve", "explanation": "Incorrect. The chamber radius in this specimen is increased, not reduced. This would be the correct answer if the specimen showed a small, obliterated cavity rather than four dilated chambers." },
      { "text": "The increased wall thickness raised compliance and shifted the filling curve to the right", "explanation": "Incorrect. This mixes two things up: the wall is thinned rather than thickened, and it is thickening that reduces compliance while dilation increases it. This would be the correct answer if it referred to a dilated ventricle without mentioning increased thickness." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: in dilated cardiomyopathy do not stop at dilation - wall thinning is the second characteristic finding, and it is why the ventricle cannot generate enough tension and pressure.",
    "pdfPage": 7,
    "pdfQuote": "Dilated Cardiomyopathy"
  },
  {
    "id": 8,
    "category": "Cardiology: Cardiac Mechanics",
    "questionText": "A 34-year-old man with hypertrophic cardiomyopathy has an abnormally thickened left ventricular wall. Pressure-volume analysis is performed to characterize his diastolic properties. Compared with a normal subject, how does his end-diastolic pressure-volume relationship behave?",
    "options": [
      { "text": "It flattens and shifts to the right, because a thickened ventricle accommodates more volume at any given filling pressure", "explanation": "Incorrect. This describes the dilated, highly compliant ventricle, which is the opposite situation - the lecture attributes this shift to dilated cardiomyopathy and valve disease. This would be the correct answer if the vignette described a dilated cardiomyopathy rather than hypertrophy." },
      { "text": "It is unchanged, because this curve reflects only the inotropic state of the ventricle", "explanation": "Incorrect. The inotropic state is described by the end-systolic pressure-volume relationship; the end-diastolic relationship is a passive property describing stiffness and compliance. This would be the correct answer if the question had asked about the ESPVR in a patient whose contractility was normal." },
      { "text": "It flattens and shifts to the left, because stiffness lowers both filling pressure and filling volume", "explanation": "Incorrect. Stiffness raises filling pressure for any given volume rather than lowering it, so the curve steepens rather than flattens. This would be the correct answer only if reduced compliance somehow lowered diastolic pressure, which contradicts the definition of compliance." },
      { "text": "It steepens and shifts to the right, because compliance and stiffness both increase together", "explanation": "Incorrect. Compliance and stiffness are inverse, not parallel, so they cannot both increase; and a stiff ventricle shifts up and left rather than right. This would be the correct answer if it stated a leftward shift and dropped the internally contradictory reasoning." },
      { "text": "Its slope increases and it shifts upward and to the left", "explanation": "Correct. The EDPVR is the curve defining the passive stiffness and compliance of the ventricle. An abnormally thickened ventricle is stiffer and less compliant, so each increment of volume produces a larger rise in filling pressure - the slope of the filling curve increases and the curve moves up and to the left, becoming steeper. The lecturer named hypertrophic cardiomyopathy and severe hypertension as the two examples of this pattern." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: stiff ventricle steepens and left-shifts the EDPVR; compliant, dilated ventricle flattens and right-shifts it. The EDPVR is passive, the ESPVR is active.",
    "pdfPage": 8,
    "pdfQuote": "Ventricular Pressure-Volume Relationship"
  },
  {
    "id": 9,
    "category": "Cardiology: Cardiac Mechanics",
    "questionText": "A pressure-volume analysis in a research laboratory generates a family of loops recorded at progressively different filling volumes. The investigator then draws a line joining the upper-left corner of every loop in the family. What does this line represent?",
    "options": [
      { "text": "The passive stiffness and compliance of the relaxed ventricle during filling", "explanation": "Incorrect. That is the end-diastolic pressure-volume relationship, which joins the lower-right corners of the loops, where filling ends. The line described here joins the corners at which ejection ends. This would be the correct answer if the line joined the end-diastolic points along the bottom of the family of loops." },
      { "text": "The maximal pressure the ventricle can develop at any given volume, i.e. its inotropic state", "explanation": "Correct. The upper-left corner of each loop is the end-systolic point, and the line joining them is the end-systolic pressure-volume relationship. The lecture defines it as the maximal pressure that can be developed by the ventricle at any left ventricular volume, and states that it represents the inotropic state - the contractility of the muscle. Poor contractility shifts the line and the whole loop to the right; increased contractility shifts it to the left." },
      { "text": "The relationship between arterial pressure and stroke volume, i.e. afterload", "explanation": "Incorrect. Afterload is the arterial pressure the ventricle must overcome and is not itself a boundary of the loop family. This would be the correct answer if the plot showed stroke volume against aortic pressure rather than end-systolic pressure against end-systolic volume." },
      { "text": "The stroke volume, measured as the horizontal width between the two vertical limbs of the loop at each filling volume", "explanation": "Incorrect. Stroke volume is indeed the width of an individual loop, but that is a horizontal distance within a loop, not a line connecting corners across a family of loops. This would be the correct answer if the investigator had measured the horizontal span of a single loop." },
      { "text": "The stroke work of the ventricle, measured as the total area enclosed by the loop", "explanation": "Incorrect. Stroke work corresponds to the enclosed area of a loop, not to a line joining points on several loops. This would be the correct answer if the investigator had planimetered the interior of each loop instead of connecting their corners." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: ESPVR = the maximal pressure the ventricle can generate at any volume, and its slope is contractility - it is the active upper-left boundary of the loop.",
    "pdfPage": 8,
    "pdfQuote": "Ventricular Pressure-Volume Relationship"
  },
  {
    "id": 10,
    "category": "Cardiology: Heart Failure",
    "questionText": "Two weeks after a large anterior myocardial infarction, a 60-year-old man has repeat pressure-volume loops recorded and compared with a study performed before the event. His end-systolic volume is substantially higher than before and his stroke volume is lower at a similar filling pressure. How has the end-systolic pressure-volume relationship changed, and why?",
    "options": [
      { "text": "Shifted to the left, because loss of myocardium reduces the volume the ventricle can hold", "explanation": "Incorrect. A leftward shift signifies increased contractility, and infarction does the opposite; furthermore, an infarcted ventricle typically holds more, not less, blood at end systole. This would be the correct answer if the patient had been given a potent positive inotrope or were in a high-output state." },
      { "text": "Unchanged, because this relationship depends on loading conditions rather than on the muscle itself", "explanation": "Incorrect. This is a common misconception in reverse: the ESPVR is relatively load-independent and is precisely the index that reflects the muscle's intrinsic inotropic state. This would be the correct answer if the question had asked about a purely load-dependent index such as ejection fraction." },
      { "text": "Steepened, because the remaining myocytes compensate by generating greater pressure per unit of volume", "explanation": "Incorrect. A steeper ESPVR means better contractility, which is the opposite of what infarction does to the ventricle. This would be the correct answer if the vignette described a hyperdynamic circulation rather than loss of contractile tissue." },
      { "text": "Shifted to the right, because contractility has fallen", "explanation": "Correct. The ESPVR represents the inotropic state. When contractility is poor - the lecturer's examples were heart attack and heart failure - the ventricle can no longer develop the same pressure at any given volume, so the ESPVR and the whole loop shift to the right. The practical consequence matches the vignette: the ventricle stops ejecting at a higher end-systolic volume, so more blood remains behind and stroke volume falls." },
      { "text": "Shifted downward and flattened, because preload has fallen after the infarction", "explanation": "Incorrect. Preload is not the variable that positions the ESPVR, and the vignette specifies a similar filling pressure. This would be the correct answer if the question had asked what happens to stroke volume after hemorrhage or aggressive diuresis." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: poor contractility (MI, heart failure) shifts the ESPVR and the whole PV loop to the RIGHT; increased contractility shifts it to the LEFT.",
    "pdfPage": 8,
    "pdfQuote": "Ventricular Pressure-Volume Relationship"
  },
  {
    "id": 11,
    "category": "Cardiology: Cardiac Output",
    "questionText": "A patient in the catheterization laboratory has his whole-body oxygen consumption measured at 240 mL per minute. Simultaneous sampling shows an arterial oxygen content of 200 mL per litre of blood and a mixed venous oxygen content of 150 mL per litre. Applying the Fick principle, what is his cardiac output?",
    "options": [
      { "text": "1.2 L/min, obtained by multiplying the arteriovenous difference by oxygen uptake", "explanation": "Incorrect. Multiplying rather than dividing inverts the relationship and yields an implausibly low output for a patient with normal oxygen consumption. This would be the correct answer if the Fick principle expressed flow as a product rather than a quotient, which it does not." },
      { "text": "12 L/min, obtained by dividing oxygen uptake by mixed venous oxygen content alone", "explanation": "Incorrect. The denominator must be the difference between arterial and venous content, because it is the oxygen actually extracted per litre of blood that reports the flow. This would be the correct answer if venous blood were completely deoxygenated, so that venous content were zero and the difference equalled arterial content." },
      { "text": "3.5 L/min, after the arteriovenous difference is corrected for the pulmonary shunt fraction", "explanation": "Incorrect. No shunt correction appears in the lecture's version of the Fick calculation, and none is warranted by the data given. This would be the correct answer if the question had supplied a measured shunt fraction and asked for an effective pulmonary blood flow." },
      { "text": "7.2 L/min, obtained by dividing arterial oxygen content by the arteriovenous difference", "explanation": "Incorrect. The numerator must be oxygen consumed per minute, not arterial content; dividing a concentration by a concentration cannot produce a flow. This would be the correct answer if the numerator had been a rate of oxygen uptake with those numerical values." },
      { "text": "4.8 L/min, obtained by dividing oxygen uptake by the arteriovenous difference", "explanation": "Correct. The Fick principle states that in a steady state the oxygen leaving the lungs via the pulmonary veins equals the oxygen entering the lungs via the mixed venous blood plus that absorbed from respiration. Cardiac output therefore equals oxygen absorbed per minute divided by the arteriovenous oxygen difference. Here the difference is 200 minus 150, which is 50 mL per litre, and 240 divided by 50 gives 4.8 L/min - structurally identical to the lecture's example of 200 divided by 40, which gave 5 L/min." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Fick cardiac output = oxygen absorbed per minute divided by the arteriovenous oxygen difference; the lecture's worked case is 200 divided by (200 - 160) = 5 L/min.",
    "pdfPage": 10,
    "pdfQuote": "Fick principle Indicator dilution"
  },
  {
    "id": 12,
    "category": "Cardiology: Cardiac Output",
    "questionText": "A 5 mg bolus of indocyanine green dye is injected into a large systemic vein and its concentration is recorded continuously from a peripheral artery. Arterial dye is undetectable for about 3 seconds, then rises abruptly, peaks at 6 to 7 seconds, and falls steeply. However, the concentration never reaches zero before beginning to rise again. What explains this failure to reach zero?",
    "options": [
      { "text": "The dye binds irreversibly to plasma albumin and is therefore never fully cleared from the blood", "explanation": "Incorrect. Protein binding would blunt the entire curve rather than producing a secondary rise after the initial downslope, and it would not create the characteristic second hump. This would be the correct answer if the tracing showed a persistently flat, low concentration with no second rise." },
      { "text": "The sampling catheter lies in a vein rather than an artery, so mixing with the bolus is incomplete", "explanation": "Incorrect. The lecture specifies arterial sampling from a peripheral artery such as the radial, and a misplaced catheter would distort the whole curve rather than producing this specific pattern. This would be the correct answer if the tracing were being obtained from the injection limb itself." },
      { "text": "Some dye has already recirculated and returned through the heart a second time", "explanation": "Correct. Before the arterial concentration can reach zero, part of the injected dye has already travelled through the peripheral systemic vessels and returned through the heart for a second pass. That recirculated dye reappears in the arterial sample, so the concentration bottoms out and then rises again. This is why the descending limb of the curve must be extrapolated to obtain the average concentration used in the cardiac output calculation." },
      { "text": "Renal excretion of the dye is slower than the transit time through the systemic circulation", "explanation": "Incorrect. Renal handling operates over minutes and does not explain a rebound occurring within seconds of the peak. This would be the correct answer if the question concerned the elimination half-life of the indicator rather than the shape of the first-pass curve." },
      { "text": "The injected bolus was too large for the patient's circulating blood volume", "explanation": "Incorrect. Bolus size affects the height of the curve, not whether a secondary rise occurs; recirculation happens regardless of dose. This would be the correct answer if the curve had saturated the detector at its peak." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: the indicator dilution curve never returns to zero because dye recirculates - it has already passed through the periphery and come back through the heart a second time.",
    "pdfPage": 10,
    "pdfQuote": "Cardiac Output measurement"
  },
  {
    "id": 13,
    "category": "Cardiology: Cardiac Output",
    "questionText": "Two patients undergo indicator dilution studies with identical doses of dye injected into the same site. Patient 1's arterial concentration curve rises promptly and is narrow. Patient 2's curve is delayed in onset, deeper, and considerably more prolonged, taking far longer to return toward baseline. What does Patient 2's curve indicate?",
    "options": [
      { "text": "A reduced cardiac output, since the dye takes longer to return", "explanation": "Correct. In the dilution formula the average dye concentration is multiplied by the duration of the curve in the denominator, so a longer, more drawn-out curve gives a smaller calculated output. Physiologically this makes sense: if the dye takes longer to come back than in a normal patient, the heart is not moving blood forward optimally. The lecturer used exactly this contrast between the upper and lower tracings to show that a prolonged curve means the cardiac output is likely reduced." },
      { "text": "An increased cardiac output, since a broader curve represents a larger volume of blood sampled", "explanation": "Incorrect. This inverts the relationship: a high output flushes the indicator through quickly, producing a tall, narrow curve, not a broad one. This would be the correct answer if the observed curve had been narrow and early rather than delayed and prolonged." },
      { "text": "An increased total peripheral resistance with an entirely normal cardiac output", "explanation": "Incorrect. The dilution curve reports flow, not resistance, and a normal output would produce a normal curve regardless of arterial tone. This would be the correct answer if the question had asked how mean arterial pressure could be elevated despite an unchanged output." },
      { "text": "A left-to-right intracardiac shunt with normal ventricular function", "explanation": "Incorrect. Shunt physiology is not covered in this lecture, and the described change is fully explained by slower forward flow. This would be the correct answer if the tracing showed early recirculation appearing before the primary peak had resolved." },
      { "text": "An error in dye dose, since curve shape is independent of the flow", "explanation": "Incorrect. The vignette specifies identical doses, and the shape of the curve is precisely what encodes the flow. This would be the correct answer if the two studies had used different amounts of indicator." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: a delayed, deeper, prolonged dilution curve means a low cardiac output - duration sits in the denominator of the dilution formula.",
    "pdfPage": 10,
    "pdfQuote": "Cardiac Output measurement"
  },
  {
    "id": 14,
    "category": "Cardiology: Cardiac Output",
    "questionText": "A trained athlete undergoes a graded treadmill test with continuous cardiac output monitoring. Between 100 and 180 beats per minute his cardiac output continues to rise steadily. Above roughly 200 beats per minute, however, his cardiac output begins to fall despite the still-rising heart rate. Which explanation best fits these observations?",
    "options": [
      { "text": "Stroke volume rises continuously with heart rate, so cardiac output can only fall when contractility itself fails", "explanation": "Incorrect. Stroke volume does not rise with heart rate; increasing rate shortens diastole and therefore reduces filling and stroke volume. This would be the correct answer if diastolic filling time were independent of rate, which it is not." },
      { "text": "Stroke volume is unaffected by heart rate, so the fall above 200 must reflect rising peripheral resistance", "explanation": "Incorrect. Peripheral resistance falls rather than rises during exercise, and the lecture explicitly links the fall in output at extreme rates to the loss of diastolic filling time. This would be the correct answer if the vignette described an acute rise in afterload rather than an extreme tachycardia." },
      { "text": "Cardiac output is independent of heart rate and is determined by venous return alone", "explanation": "Incorrect. Cardiac output is the product of stroke volume and heart rate, so it cannot be independent of rate. Venous return sets preload and therefore influences stroke volume, but it is not the sole determinant. This would be the correct answer if the question had asked what sets the preload term of the equation." },
      { "text": "Shortened diastole lowers stroke volume; below 180-200 the rate rise still more than compensates", "explanation": "Correct. Increasing heart rate reduces the time spent in diastole, so filling and therefore stroke volume fall - and this is exactly the mechanism that keeps cardiac output from surging every time the heart speeds up. Up to about 180 to 200 beats per minute, the increase in rate more than compensates for the fall in stroke volume, so cardiac output still rises. Beyond that range the autonomic regulatory mechanism is at its maximum, filling time is critically short, and both stroke volume and cardiac output fall." },
      { "text": "Parasympathetic withdrawal is complete by 180, so no further increase in output is possible at all", "explanation": "Incorrect. Vagal withdrawal is part of the chronotropic response but does not explain why output actively falls rather than merely plateauing. This would be the correct answer if the tracing showed cardiac output holding steady above 180 rather than declining." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: rising heart rate shortens diastole and lowers stroke volume; up to about 180-200 bpm cardiac output still rises, and beyond that both stroke volume and cardiac output fall.",
    "pdfPage": 11,
    "pdfQuote": "Increase in HR decreases SV"
  },
  {
    "id": 15,
    "category": "Cardiology: Hemodynamics",
    "questionText": "A 48-year-old man with septic shock has a thermodilution cardiac output of 8 L/min, well above the normal range, yet his mean arterial pressure is only 55 mmHg. His extremities are warm and his pulse pressure is wide. Which relationship best explains this combination of a high output with a low pressure?",
    "options": [
      { "text": "Mean arterial pressure equals cardiac output divided by total peripheral resistance, so raising the output lowers the pressure", "explanation": "Incorrect. This inverts the relationship: resistance multiplies rather than divides the output. If the stated formula were true, every athlete in exercise would become profoundly hypotensive. This would be the correct answer if pressure and flow were inversely related, which they are not." },
      { "text": "Mean arterial pressure is cardiac output times total peripheral resistance, which is very low here", "explanation": "Correct. The lecture's endpoint is that the goal of all cardiac output regulation is maintaining blood pressure, and that MAP equals cardiac output times total peripheral resistance. In distributive shock, widespread vasodilatation collapses total peripheral resistance, so even a supranormal cardiac output cannot sustain a normal mean arterial pressure. The warm extremities and wide pulse pressure are the clinical signature of that low resistance." },
      { "text": "Mean arterial pressure is determined by stroke volume alone and is independent of vascular tone", "explanation": "Incorrect. Arteriolar and venous constriction are explicitly named in the lecture as contributors to maintaining blood pressure, so vascular tone cannot be irrelevant. This would be the correct answer if the circulation contained no resistance vessels." },
      { "text": "Mean arterial pressure equals heart rate times stroke volume, so bradycardia must be present here", "explanation": "Incorrect. Heart rate times stroke volume gives cardiac output, not pressure, and the vignette gives a high output rather than a slow rate. This would be the correct answer if the question had asked how to calculate cardiac output from its two components." },
      { "text": "Mean arterial pressure rises whenever cardiac output rises, so the measurement must be erroneous", "explanation": "Incorrect. Pressure and flow move together only when resistance is held constant, and in sepsis it is precisely resistance that has changed. This would be the correct answer if total peripheral resistance were fixed in every physiologic state." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: MAP = CO x TPR. A high cardiac output does not guarantee an adequate blood pressure if total peripheral resistance has collapsed.",
    "pdfPage": 11,
    "pdfQuote": "MAP = CO x TPR (Total peripheral resistance)"
  },
  {
    "id": 16,
    "category": "Cardiology: Preload & Frank-Starling",
    "questionText": "A 24-year-old woman is brought to the trauma bay after a motor vehicle collision with a blood pressure of 84/52 mmHg and a heart rate of 122/min. Her extremities are cool and her jugular veins are flat. She receives two litres of warmed crystalloid over 20 minutes. Repeat bedside echocardiography shows that her left ventricular end-diastolic volume has risen from 110 to 145 mL while her end-systolic volume remains 45 mL, and her blood pressure improves to 108/68 mmHg. Which mechanism best explains the increase in her stroke volume?",
    "options": [
      { "text": "Increased contractility from circulating catecholamines has raised the intrinsic inotropic state of the ventricle", "explanation": "Incorrect. Increased contractility would lower end-systolic volume by enhancing isotonic shortening, and here the end-systolic volume is unchanged at 45 mL. The catecholamine surge is real in trauma but is not what the echo demonstrates. This would be the correct answer if end-systolic volume had fallen while end-diastolic volume stayed the same." },
      { "text": "Reduced afterload from vasodilatation has allowed more complete emptying of the ventricle", "explanation": "Incorrect. Reduced afterload also works by lowering end-systolic volume, which did not occur; furthermore her blood pressure rose rather than fell. This would be the correct answer if she had been given an arterial vasodilator and her end-systolic volume had decreased." },
      { "text": "An increase in heart rate has increased the number of ejections per minute", "explanation": "Incorrect. Heart rate affects cardiac output but cannot by itself change the volume ejected in a single beat, and the question asks specifically about stroke volume. This would be the correct answer if the question had asked why her cardiac output rather than her stroke volume rose." },
      { "text": "Greater passive stretch of the ventricle has increased the force of contraction", "explanation": "Correct. This is the Frank-Starling law: stroke volume increases as ventricular end-diastolic volume increases, because the greater the passive stretch or preload of the ventricle, the greater the force of ventricular contraction. The echo findings are the textbook signature - end-diastolic volume rose by 35 mL while end-systolic volume was unchanged, so the entire increase in stroke volume came from the filling side. Only end-diastolic volume changes in a pure preload manoeuvre." },
      { "text": "Reduced ventricular compliance has raised end-diastolic pressure and therefore ejection", "explanation": "Incorrect. Reduced compliance raises filling pressure for a given volume but does not increase the volume ejected, and nothing here suggests a stiffer ventricle in a healthy 24-year-old. This would be the correct answer if the vignette described a hypertrophied ventricle with a steep filling curve." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: a pure preload change moves EDV only - ESV is unchanged. If ESV falls instead, the cause is increased contractility or reduced afterload.",
    "pdfPage": 12,
    "pdfQuote": "states that SV increases as ventricular EDV increases"
  },
  {
    "id": 17,
    "category": "Cardiology: Preload & Frank-Starling",
    "questionText": "A 28-year-old man participates in a tilt-table study. On moving from supine to upright, venous pooling in his legs reduces his venous return and his stroke volume falls. Reflex venous vasoconstriction then develops over the following minute. Repeat echocardiography shows that his end-diastolic volume has returned to the baseline supine value while his end-systolic volume is identical to the value recorded before the tilt, and his stroke volume has been restored. Which statement best describes what has happened?",
    "options": [
      { "text": "Contractility has increased, which is why end-systolic volume has returned to baseline", "explanation": "Incorrect. End-systolic volume never changed from baseline, so there is nothing for a contractility change to explain; increased contractility would have driven end-systolic volume below the pre-tilt value. This would be the correct answer if the repeat study had shown a lower end-systolic volume than before the tilt." },
      { "text": "Afterload has fallen, which restored stroke volume by lowering end-systolic volume", "explanation": "Incorrect. A fall in afterload acts by allowing more complete emptying and would show up as a reduced end-systolic volume, which is explicitly not what happened. This would be the correct answer if an arterial vasodilator had been administered during the tilt." },
      { "text": "Heart rate alone restored cardiac output, since stroke volume cannot change acutely at all", "explanation": "Incorrect. Stroke volume changes beat to beat with filling, which is the entire basis of the Frank-Starling mechanism, and the vignette states that stroke volume itself was restored. This would be the correct answer if the study had shown a persistently low stroke volume with a compensatory tachycardia." },
      { "text": "Ventricular compliance has fallen, which raised filling pressure and restored the stroke volume", "explanation": "Incorrect. Falling compliance raises filling pressure without increasing the volume the ventricle actually accepts, so it cannot restore stroke volume; the vignette describes restored volume, not merely restored pressure. This would be the correct answer if the mechanism in question were a steepening EDPVR in a hypertrophied ventricle." },
      { "text": "Venous return and ventricular stretch rose, so the extra returned blood was ejected", "explanation": "Correct. The lecture states that venous vasoconstriction contributes to increased venous return and increased ventricular stretch, generating enough force to eject the extra returned blood, and that end-systolic volume is not changed. This is what normally prevents pooling of blood in the pulmonary and systemic circulations with postural changes. The echo pattern - end-diastolic volume restored, end-systolic volume untouched - is the fingerprint of a preload-mediated correction." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: venous vasoconstriction raises venous return and ventricular stretch so the extra returned blood is ejected - and this is what prevents pooling with postural change.",
    "pdfPage": 13,
    "pdfQuote": "Venous vasoconstriction contributes to increased venous return"
  },
  {
    "id": 18,
    "category": "Cardiology: Heart Failure",
    "questionText": "A 68-year-old man with heart failure and an ejection fraction of 25 percent is admitted with worsening dyspnea. Despite progressively rising filling pressures, his stroke volume increases only marginally. He is started on digoxin in addition to his existing regimen. Over the next two weeks his exercise tolerance improves and echocardiography shows a higher stroke volume at a similar filling pressure. Which change in his Starling curve best explains this improvement?",
    "options": [
      { "text": "The depressed curve shifts left, so the same preload now yields a larger stroke volume", "explanation": "Correct. In heart failure the Starling curve is shifted down and to the right, so that even as preload rises the ventricle does not generate enough pressure and stroke volume increases far less than normal. A positive inotrope such as digoxin shifts that curve back toward the left - reaching normal or at least approaching it, depending on the drug's efficacy - so that any given preload now produces a larger stroke volume. That is exactly the pattern described: more stroke volume at a similar filling pressure." },
      { "text": "The curve shifts further to the right, because increased intracellular calcium raises end-systolic volume", "explanation": "Incorrect. Increased intracellular calcium raises contractile force, which lowers end-systolic volume and shifts the curve left; a further rightward shift would represent worsening failure. This would be the correct answer if the patient had been given a negative inotrope such as a beta-blocker acutely." },
      { "text": "The curve becomes vertical, because inotropes abolish the dependence of stroke volume on preload", "explanation": "Incorrect. Inotropes shift the curve upward and leftward but do not abolish the Frank-Starling relationship; stroke volume still depends on filling. This would be the correct answer if the heart were being supported by a continuous-flow mechanical pump rather than by drug therapy." },
      { "text": "The curve is unchanged, because digoxin acts only on heart rate and not on stroke volume at all", "explanation": "Incorrect. Digoxin's mechanism in this lecture is explicitly contractile: sodium pump inhibition raises intracellular calcium and increases the force of contraction. This would be the correct answer if the only drug given had been a pure rate-control agent with no inotropic effect." },
      { "text": "The curve shifts downward, because raising intracellular sodium depresses myocardial contractility further", "explanation": "Incorrect. Raising intracellular sodium is the intermediate step that slows the sodium-calcium exchanger and thereby raises intracellular calcium, which increases rather than depresses contractility. This would be the correct answer if sodium accumulation directly impaired cross-bridge cycling, which is not the mechanism taught." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: heart failure shifts the Starling curve down and right; a positive inotrope such as digoxin shifts it back toward the left, and exercise shifts the normal curve up and left.",
    "pdfPage": 14,
    "pdfQuote": "Starling Curves"
  },
  {
    "id": 19,
    "category": "Cardiology: Afterload",
    "questionText": "A 58-year-old man with untreated hypertension is referred for evaluation of exertional dyspnea. His blood pressure in clinic is 186/104 mmHg. Echocardiography shows a left ventricular end-diastolic volume of 130 mL, which is within normal limits, but an end-systolic volume of 75 mL, which is clearly elevated, and a correspondingly reduced ejection fraction. Which mechanism best explains the elevated end-systolic volume?",
    "options": [
      { "text": "Increased preload has raised end-diastolic volume, and end-systolic volume has risen in proportion to it", "explanation": "Incorrect. The vignette states explicitly that end-diastolic volume is within normal limits, so preload is not the abnormality; moreover a pure preload change leaves end-systolic volume untouched. This would be the correct answer if both volumes were elevated after a large fluid load." },
      { "text": "Reduced venous return has decreased both filling and ejection in a proportional manner", "explanation": "Incorrect. Reduced venous return lowers end-diastolic volume, and this patient's filling volume is normal. This would be the correct answer if the vignette described hypovolemia with a small, underfilled ventricle." },
      { "text": "Increased afterload has reduced fiber shortening, so more blood remains after systole", "explanation": "Correct. Afterload is the arterial pressure the heart must overcome to circulate blood, and the greater the afterload, the smaller the stroke volume. Because less blood leaves with each beat, more remains behind, so end-systolic volume rises - exactly the pattern here, with a normal filling volume but an elevated residual volume. Hypertension is the lecture's standard example of increased afterload decreasing stroke volume and therefore cardiac output, and this state can culminate in heart failure." },
      { "text": "Increased contractility has raised ejection velocity while lengthening the ejection period", "explanation": "Incorrect. Increased contractility enhances isotonic shortening and lowers end-systolic volume, the opposite of what is measured here. This would be the correct answer if the patient had received an inotrope and his residual volume had fallen." },
      { "text": "Reduced compliance during diastole has trapped blood in the ventricle throughout systole", "explanation": "Incorrect. Compliance governs filling, not emptying, and would show up as an abnormal pressure-volume relationship during diastole rather than an elevated end-systolic volume. This would be the correct answer if the question had asked why his filling pressures were high despite a normal cavity size." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: greater afterload means smaller stroke volume, and the blood that fails to leave raises end-systolic volume - the step that can culminate in heart failure.",
    "pdfPage": 15,
    "pdfQuote": "Afterload is the arterial pressure"
  },
  {
    "id": 20,
    "category": "Cardiology: Contractility",
    "questionText": "A 19-year-old woman develops urticaria, wheeze and hypotension minutes after eating peanuts at a restaurant. She is given intramuscular epinephrine from her auto-injector and her blood pressure improves within minutes. A bedside echocardiogram performed shortly afterward shows that her end-systolic volume has fallen from 55 to 35 mL while her end-diastolic volume is unchanged. Which mechanism best explains the change in her stroke volume?",
    "options": [
      { "text": "Increased preload from venoconstriction has stretched the ventricle and raised its output", "explanation": "Incorrect. A preload effect would raise end-diastolic volume, which the echo shows to be unchanged. Venoconstriction certainly contributes to her overall hemodynamic recovery, but it is not what these particular measurements demonstrate. This would be the correct answer if end-diastolic volume had risen while end-systolic volume stayed the same." },
      { "text": "Increased contractility has enhanced isotonic shortening, so more blood is ejected", "explanation": "Correct. Contractility is an intrinsic measure of cardiac performance that is augmented by catecholamines - norepinephrine on the slide, and epinephrine in the lecturer's own EpiPen example for severe allergy. Physiologically it increases isotonic shortening, so the ventricle ejects further into systole and stops at a smaller end-systolic volume. With end-diastolic volume unchanged, the fall in end-systolic volume translates directly into a larger stroke volume, which is why the effect is immediate on injection." },
      { "text": "Reduced heart rate has lengthened diastole and improved ventricular filling and output", "explanation": "Incorrect. Epinephrine is a positive chronotrope and raises rather than lowers heart rate, and the vignette shows unchanged filling volume. This would be the correct answer if the patient had been given a rate-slowing agent and her end-diastolic volume had risen." },
      { "text": "Reduced afterload from arteriolar dilatation has allowed more complete ventricular emptying", "explanation": "Incorrect. Reduced afterload would also lower end-systolic volume, making this the key distractor - but epinephrine raises rather than lowers arterial pressure in this setting, and her blood pressure rose. This would be the correct answer if she had been given a pure arterial vasodilator with a falling blood pressure." },
      { "text": "Increased ventricular compliance has permitted a larger end-diastolic volume to be reached", "explanation": "Incorrect. This describes a diastolic change, and the measured end-diastolic volume did not change. This would be the correct answer if the echo had shown a rise in filling volume at an unchanged filling pressure." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: contractility acts on the systolic side - it increases isotonic shortening and lowers end-systolic volume, so stroke volume rises with end-diastolic volume unchanged.",
    "pdfPage": 16,
    "pdfQuote": "Contractility is an intrinsic measure of cardiac performance"
  },
  {
    "id": 21,
    "category": "Cardiology: Excitation-Contraction Coupling",
    "questionText": "A researcher perfuses an isolated strip of cardiac muscle with a compound that locks the ryanodine receptor in a closed state. Recordings confirm that the action potential is unchanged in shape and duration and that calcium entry through the L-type calcium channel is fully preserved. Nevertheless, the developed force of contraction falls dramatically. Which statement best explains this result?",
    "options": [
      { "text": "The small trigger influx normally releases a much larger calcium store from the SR", "explanation": "Correct. This is calcium-induced calcium release. Depolarization admits only a small amount of calcium through the L-type calcium channel; that small amount activates the ryanodine receptor, which senses intracellular calcium and triggers the release of a much larger quantity of calcium from the sarcoplasmic reticulum. It is this amplified pool that binds troponin and activates contraction. Blocking the receptor removes the amplification step, so the trigger influx alone cannot generate normal force even though it is intact." },
      { "text": "The L-type calcium channel is the sole source of the calcium that binds troponin", "explanation": "Incorrect. The lecture names two sources of calcium in cardiac muscle: extracellular fluid and the sarcoplasmic reticulum. If the trigger influx were the sole source, blocking the ryanodine receptor would have no effect on force. This would be the correct answer if cardiac muscle behaved like a cell with no internal calcium store." },
      { "text": "Ryanodine receptors transport calcium out of the cell in exchange for sodium ions", "explanation": "Incorrect. That describes the sodium-calcium exchanger on the sarcolemma, not the ryanodine receptor, which is a release channel on the sarcoplasmic reticulum. This would be the correct answer if the compound had blocked the exchanger instead." },
      { "text": "Blocking the receptor prevents SERCA from returning calcium into the sarcoplasmic reticulum, so the stores become progressively depleted", "explanation": "Incorrect. SERCA is a separate ATPase that works independently of the release channel; blocking release does not impair uptake, and if anything the stores would stay loaded rather than deplete. This would be the correct answer if the compound had inhibited SERCA directly." },
      { "text": "The troponin complex requires direct binding of the ryanodine receptor to initiate contraction", "explanation": "Incorrect. Troponin is activated by calcium ions, not by physical contact with the release channel. This would be the correct answer if excitation-contraction coupling were purely mechanical rather than calcium-mediated." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: calcium-induced calcium release amplifies a small L-type trigger influx into a large SR release; the two calcium sources are extracellular fluid and the SR.",
    "pdfPage": 18,
    "pdfQuote": "Sources of Ca++ in cardiac muscle include"
  },
  {
    "id": 22,
    "category": "Cardiology: Excitation-Contraction Coupling",
    "questionText": "In an isolated cardiac myocyte preparation the transmembrane sodium gradient is experimentally collapsed while ATP supply and all other conditions are maintained. Over successive contractions the cytosolic calcium concentration rises steadily and diastolic tension increases, so the cell relaxes progressively less completely between beats. Which transporter's function is most directly impaired, and what does it normally do?",
    "options": [
      { "text": "SERCA, which normally moves calcium from the cytosol back into the sarcoplasmic reticulum", "explanation": "Incorrect. SERCA is an ATPase powered directly by ATP hydrolysis, not by the sodium gradient, so collapsing that gradient does not impair it. This would be the correct answer if the experiment had depleted ATP or applied a specific SERCA inhibitor." },
      { "text": "The L-type calcium channel, which normally admits the small trigger influx of calcium", "explanation": "Incorrect. This is an entry pathway, and impairing it would reduce rather than raise cytosolic calcium. This would be the correct answer if the observed problem had been a fall in developed force with normal relaxation." },
      { "text": "The ryanodine receptor, which normally releases the large calcium store from the SR", "explanation": "Incorrect. This is also a release pathway, so blocking it lowers cytosolic calcium and weakens contraction rather than causing calcium accumulation. This would be the correct answer if the finding had been a dramatic loss of developed force." },
      { "text": "The Na/Ca exchanger, which moves 3 Na in to carry 1 Ca out", "explanation": "Correct. The sodium-calcium exchanger uses the energy released by three sodium ions moving down their electrochemical gradient into the cell to transport one calcium ion out of the cell against its gradient, or uphill. Collapsing the sodium gradient removes the driving force, so calcium extrusion fails and cytosolic calcium accumulates beat by beat, exactly as observed. This is also precisely the mechanism digoxin exploits therapeutically, by raising intracellular sodium." },
      { "text": "The Na/K ATPase, which normally moves potassium into the cell and sodium out of it against their gradients", "explanation": "Incorrect. The sodium pump is what creates the sodium gradient rather than what depends on it, so it is upstream of the observed defect; its inhibition would be a cause of a collapsed gradient rather than the transporter directly impaired by one. This would be the correct answer if the question had asked which protein digoxin binds." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: NCX stoichiometry is 3 Na in down its gradient to move 1 Ca out uphill - so anything that raises intracellular sodium slows calcium extrusion.",
    "pdfPage": 19,
    "pdfQuote": "Na+/Ca++ exchanger uses energy (ATP) released by the movement"
  },
  {
    "id": 23,
    "category": "Cardiology: Excitation-Contraction Coupling",
    "questionText": "A 61-year-old woman with exertional dyspnea and a normal ejection fraction undergoes invasive hemodynamic study. The maximum negative rate of pressure development in her left ventricle is less negative than normal, and the interval from the aortic component of the second heart sound to the crossover point of left ventricular and left atrial pressure is prolonged. Her systolic indices are preserved. Which cellular abnormality best accounts for these findings?",
    "options": [
      { "text": "Excessive calcium entry through the L-type calcium channel during each action potential", "explanation": "Incorrect. Greater trigger influx would tend to increase developed force and would not by itself slow the fall of pressure during isovolumetric relaxation. This would be the correct answer if the abnormality reported had been an exaggerated positive rate of pressure development." },
      { "text": "Slowed calcium uptake into the sarcoplasmic reticulum", "explanation": "Correct. The interval described is isovolumetric relaxation, which runs from the aortic component of the second heart sound to the crossover of left ventricular and left atrial pressure. The maximum negative rate of pressure development is the isovolumetric relaxation rate, and the lecture states that it is increased when the rate of calcium uptake into the sarcoplasmic reticulum is enhanced. If SERCA-mediated uptake is slowed, calcium leaves the cytosol more slowly, cross-bridges detach more slowly, and relaxation is prolonged with a less negative rate of pressure fall - all with systolic function preserved." },
      { "text": "Excessive ryanodine receptor sensitivity, causing early and repeated calcium release from the stores", "explanation": "Incorrect. This would produce abnormal calcium release events rather than a uniformly slowed relaxation, and the lecture ties relaxation rate specifically to the rate of uptake. This would be the correct answer if the finding had been spontaneous diastolic calcium sparks and arrhythmia." },
      { "text": "Increased Na/K ATPase activity, which lowers intracellular sodium and speeds calcium extrusion", "explanation": "Incorrect. Faster calcium extrusion would speed relaxation, not slow it, so the direction is wrong. This would be the correct answer if the study had shown an unusually rapid, more negative rate of pressure development." },
      { "text": "Loss of troponin binding sites, which prevents calcium from initiating cross-bridge formation", "explanation": "Incorrect. Failure of troponin binding would impair contraction and depress systolic indices, which the vignette states are preserved. This would be the correct answer if the patient had reduced developed pressure with normal relaxation kinetics." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: -dP/dt is the isovolumetric relaxation rate and it becomes more negative when SR calcium uptake is enhanced - relaxation is an active, ATP-consuming process.",
    "pdfPage": 19,
    "pdfQuote": "SERCA - sarcoplasmic endoplasmic reticulum"
  },
  {
    "id": 24,
    "category": "Cardiology: Heart Failure",
    "questionText": "A 74-year-old man with heart failure and a reduced ejection fraction remains symptomatic on his current regimen and is started on digoxin. Two weeks later his ejection fraction has improved and his exercise tolerance is better. His physician explains that the drug works by changing the ionic composition of the myocyte rather than by acting on a receptor. Which sequence of events best explains the improvement in contractile force?",
    "options": [
      { "text": "Digoxin activates the Na/K ATPase, so intracellular sodium falls and calcium extrusion from the cell is accelerated", "explanation": "Incorrect. This reverses both the direction of the drug effect and its consequence: digoxin inhibits rather than activates the pump, and accelerating calcium extrusion would weaken rather than strengthen contraction. This would be the correct answer if a drug existed that stimulated the sodium pump and was being used as a negative inotrope." },
      { "text": "Digoxin blocks the L-type calcium channel, reducing calcium entry and therefore myocardial oxygen demand", "explanation": "Incorrect. This is the mechanism of a calcium channel blocker, which reduces contractility - the lecture lists non-dihydropyridine calcium channel blockers among the agents that decrease contractility. This would be the correct answer if the patient had been started on verapamil or diltiazem for rate control." },
      { "text": "Digoxin stimulates SERCA directly, loading the sarcoplasmic reticulum with additional calcium stores", "explanation": "Incorrect. Digoxin has no direct action on SERCA; its only target in this lecture is the sodium pump. This would be the correct answer if the drug in question were an experimental SERCA activator." },
      { "text": "Digoxin blocks the Na/Ca exchanger directly, so calcium accumulates without any change in sodium", "explanation": "Incorrect. The exchanger is slowed indirectly, as a consequence of the rise in intracellular sodium, rather than being bound by the drug; this is the key distractor because the downstream effect on calcium is genuinely correct. This would be the correct answer if a selective exchanger inhibitor had been administered." },
      { "text": "Digoxin inhibits the Na/K ATPase; intracellular sodium rises, the Na/Ca exchanger slows, and calcium rises", "explanation": "Correct. Cardioactive glycosides are inhibitors of the sodium pump, whose normal ATP-dependent job is potassium in and sodium out against their electrochemical gradients. Inhibiting it raises intracellular sodium. Because the sodium-calcium exchanger depends on sodium moving inward down its gradient, that rise slows the exchanger, so less calcium leaves the cell. Cytoplasmic calcium therefore increases, more calcium is available to bind troponin, and the force of contraction rises." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: reason backwards - you want more force, so more calcium, so more sodium, so block the sodium pump. That chain is the whole of digoxin's inotropic mechanism.",
    "pdfPage": 22,
    "pdfQuote": "The increase in intracellular Na+ slows down the Na+/ca++ exchanger"
  },
  {
    "id": 25,
    "category": "Cardiology: Excitation-Contraction Coupling",
    "questionText": "A pharmacology tutorial begins by reviewing the molecular target of the cardioactive glycosides before discussing what the drugs do to it. The tutor asks the students to state what that target protein does in a healthy, untreated cardiac myocyte. Which of the following is the correct description of its normal function?",
    "options": [
      { "text": "It moves 3 sodium ions into the cell to carry 1 calcium ion out against its gradient", "explanation": "Incorrect. That is the sodium-calcium exchanger, which is affected by digoxin only indirectly, through the change in the sodium gradient. This would be the correct answer if the question had asked which transporter is slowed as a downstream consequence of glycoside therapy." },
      { "text": "It returns calcium from the cytosol into the sarcoplasmic reticulum using ATP hydrolysis", "explanation": "Incorrect. That describes SERCA, which is not the target of cardiac glycosides. This would be the correct answer if the question had asked which pump determines the rate of isovolumetric relaxation." },
      { "text": "It moves potassium into the cell and sodium out, using ATP, against their gradients", "explanation": "Correct. The target of cardioactive glycosides such as digoxin is the Na+/K+ ATPase, or sodium pump. Its normal function is potassium in and sodium out, an ATP-dependent transport that moves both ions against their electrochemical gradients. Understanding this baseline is what makes the drug effect predictable: inhibiting the pump lets intracellular sodium accumulate, which slows the sodium-calcium exchanger and raises cytoplasmic calcium and contractile force." },
      { "text": "It admits a small trigger quantity of calcium into the cell during the plateau of the action potential", "explanation": "Incorrect. That is the L-type calcium channel, which initiates calcium-induced calcium release and is not a glycoside target. This would be the correct answer if the question had asked what starts excitation-contraction coupling." },
      { "text": "It releases a large quantity of stored calcium from the sarcoplasmic reticulum into the cytosol", "explanation": "Incorrect. That is the ryanodine receptor, an intracellular release channel rather than a sarcolemmal pump. This would be the correct answer if the question had asked which protein amplifies the trigger calcium signal." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: the normal sodium pump moves K+ in and Na+ out, ATP-dependently and against their gradients - digoxin's target, and the reason its inhibition raises intracellular sodium.",
    "pdfPage": 21,
    "pdfQuote": "Cardioactive glycosides (e.g., Digoxin) - inhibitors of the Na+"
  },
  {
    "id": 26,
    "category": "Cardiology: Assessment of Cardiac Function",
    "questionText": "A 55-year-old man with three months of exertional dyspnea undergoes transthoracic echocardiography. His left ventricular end-diastolic volume is 160 mL and his end-systolic volume is 96 mL. His heart rate is 75 beats per minute and his blood pressure is 128/78 mmHg. The report also gives left ventricular internal dimensions but the clinician wants the volumetric index. What is his ejection fraction, and how should it be classified?",
    "options": [
      { "text": "60 percent, a normal ejection fraction", "explanation": "Incorrect. This value results from dividing the end-systolic volume by the end-diastolic volume, which yields the fraction of blood retained rather than the fraction ejected. This would be the correct answer if the question had asked what proportion of the end-diastolic volume remains in the ventricle at the end of systole." },
      { "text": "40 percent, a reduced ejection fraction", "explanation": "Correct. Ejection fraction is end-diastolic volume minus end-systolic volume, all divided by end-diastolic volume, and multiplied by 100 - equivalently, stroke volume divided by end-diastolic volume. Here stroke volume is 160 minus 96, which is 64 mL, and 64 divided by 160 is 0.40, or 40 percent. That is well below normal and places him in the heart failure with reduced ejection fraction category, matching his exertional symptoms." },
      { "text": "64 percent, a normal ejection fraction", "explanation": "Incorrect. This mistakes the stroke volume in millilitres for a percentage; 64 is the numerator, not the ratio. This would be the correct answer if the question had asked for his stroke volume in millilitres rather than a fraction." },
      { "text": "96 percent, which is above the physiologic maximum and indicates a measurement error", "explanation": "Incorrect. This simply reports the end-systolic volume as a percentage and has no physiologic meaning. This would be the correct answer if the reported volumes were internally inconsistent, which they are not." },
      { "text": "150 percent, indicating the formula has been inverted in the calculation", "explanation": "Incorrect. This results from dividing end-diastolic by end-systolic volume, which is not the ejection fraction and cannot exceed 100 percent in a real ventricle. This would be the correct answer only if the formula genuinely placed end-systolic volume in the denominator." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: EF = (EDV - ESV) x 100 / EDV = SV x 100 / EDV; fractional shortening is the same calculation performed on dimensions, (LVIDd - LVIDs) x 100 / LVIDd.",
    "pdfPage": 23,
    "pdfQuote": "Ejection Fraction (EF; %)"
  },
  {
    "id": 27,
    "category": "Cardiology: Heart Failure",
    "questionText": "An 80-year-old woman with a 30-year history of hypertension presents with progressive exertional dyspnea and orthopnea. Examination shows bibasilar crackles and an elevated jugular venous pressure. Echocardiography demonstrates a thickened left ventricular wall, a small cavity, and an ejection fraction of 60 percent. Her physician tells her she has heart failure. Which statement best explains this apparently contradictory combination of findings?",
    "options": [
      { "text": "Ejection fraction is unreliable above 50 percent and should be replaced by fractional shortening in every such case", "explanation": "Incorrect. Fractional shortening is the same calculation performed on dimensions rather than volumes, so it carries the same information and would also be preserved here. This would be the correct answer if the two indices measured genuinely different aspects of function, which they do not." },
      { "text": "The ejection fraction must be erroneous, since heart failure requires an ejection fraction below 40 percent", "explanation": "Incorrect. This is the misconception the lecture explicitly corrects: heart failure is a clinical syndrome, and a preserved ejection fraction does not exclude it. This would be the correct answer if all heart failure were systolic in origin." },
      { "text": "A thickened ventricle always overestimates ejection fraction because end-diastolic volume is underestimated", "explanation": "Incorrect. There is no such systematic overestimation described in the lecture, and her symptoms and signs, not a measurement artefact, establish the diagnosis. This would be the correct answer if the question concerned a known technical limitation of volumetric estimation, which was explicitly set aside." },
      { "text": "Ejection fraction is preserved in HFpEF, so a normal value does not exclude heart failure", "explanation": "Correct. The lecture distinguishes heart failure with reduced ejection fraction, in which ejection fraction is reduced, from heart failure with preserved ejection fraction, in which it is preserved or normal. Her long-standing hypertension has produced a thickened, stiff ventricle - a steepened, left-shifted end-diastolic pressure-volume relationship - so filling pressures rise and she develops congestion despite ejecting a normal fraction of a small end-diastolic volume. HFpEF is described as a large and more recently recognised problem." },
      { "text": "Ejection fraction reflects afterload rather than pump function, so it cannot diagnose heart failure at all", "explanation": "Incorrect. Ejection fraction is a measure of pump performance, is genuinely useful, and is the standard way of classifying heart failure; it is simply not sensitive to diastolic dysfunction. This would be the correct answer if ejection fraction had no relationship to systolic function." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: ejection fraction is reduced in HFrEF and preserved or normal in HFpEF - a normal ejection fraction does not exclude heart failure.",
    "pdfPage": 26,
    "pdfQuote": "Preserved/Normal in HFpEF"
  },
  {
    "id": 28,
    "category": "Cardiology: Valvular Disease",
    "questionText": "A 73-year-old man presents to the emergency department with exertional dyspnea, syncope and chest pain. He has poorly managed hypercholesterolemia and an 11-year history of hypertension. His blood pressure is 101/75 mmHg and his lungs are clear. A systolic murmur is loudest over the aorta and peaks at mid systole. The ECG shows left axis deviation with a normal ST segment; chest radiography shows a large left ventricle with calcification of the aortic valve; echocardiography shows greatly increased velocity of flow during the systolic portion of the cycle, an enlarged left heart and left ventricular hypertrophy. Cardiac enzymes are normal. Which of the following is the most appropriate management?",
    "options": [
      { "text": "Aortic valve repair or replacement", "explanation": "Correct. Every piece of data points to a valve rather than a coronary problem: a mid-systolic murmur loudest over the aorta, a calcified aortic valve on radiography, greatly increased systolic flow velocity on echocardiography, and left ventricular hypertrophy from years of ejecting against a fixed obstruction. Normal cardiac enzymes exclude infarction, and his blood pressure is normal to low-normal despite the hypertensive history. Correcting the obstructed valve is the definitive treatment, and the choice between repair and replacement depends on the patient's condition." },
      { "text": "Coronary artery bypass grafting", "explanation": "Incorrect. Surgical revascularization is indicated for myocardial infarction or unstable angina, and his cardiac enzymes are normal with a normal ST segment. This would be the correct answer if the enzymes were elevated or the ECG showed ischemic changes with multivessel coronary disease." },
      { "text": "Percutaneous coronary intervention", "explanation": "Incorrect. Like bypass grafting, percutaneous intervention addresses coronary obstruction, and this patient's obstruction is at the valve. This would be the correct answer if he presented with an acute coronary syndrome such as an NSTEMI." },
      { "text": "Sublingual nitroglycerin", "explanation": "Incorrect. Nitroglycerin relieves angina caused by ischemic heart disease, and although this patient has chest pain, its origin is the obstructed valve rather than coronary insufficiency. This would be the correct answer if the chest pain were from ischemic heart disease with normal valves." },
      { "text": "Intensified antihypertensive therapy with an angiotensin-converting enzyme inhibitor", "explanation": "Incorrect. His measured blood pressure is 101/75, which is normal and in fact at the low end systolically, so lowering it further would be counterproductive despite his hypertensive history. This would be the correct answer if he were persistently hypertensive with no valvular findings." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: exertional dyspnea, syncope and angina with a mid-systolic murmur over the aorta, a calcified valve and LVH is aortic stenosis - a valve problem, not a coronary problem.",
    "pdfPage": 27,
    "pdfQuote": "Systolic murmur loudest over the aorta; peaks at mid systole"
  },
  {
    "id": 29,
    "category": "Cardiology: Afterload",
    "questionText": "A 63-year-old man has had poorly controlled hypertension for 20 years. Echocardiography now shows a concentrically thickened left ventricular wall with a normal cavity size and a normal ejection fraction, but Doppler indices of ventricular filling are abnormal and his filling pressures are elevated. His physician explains that the wall change is a direct consequence of the pressure his ventricle has had to overcome with every beat for two decades. Which sequence correctly links his hypertension to the current findings?",
    "options": [
      { "text": "Elevated preload stretched the ventricle chronically, and the resulting dilatation thickened the wall over time", "explanation": "Incorrect. Chronic volume loading produces dilatation with a thinned rather than thickened wall, which is the dilated cardiomyopathy pattern. This would be the correct answer if the echocardiogram showed four dilated chambers with a thin free wall." },
      { "text": "Reduced contractility forced the ventricle to hypertrophy in order to maintain its stroke volume at rest", "explanation": "Incorrect. His ejection fraction is normal, so contractility is not the primary abnormality, and hypertrophy here is a response to pressure rather than to contractile failure. This would be the correct answer if he had presented with a low ejection fraction and a right-shifted ESPVR." },
      { "text": "Reduced afterload allowed unopposed ejection, and the ventricle thickened from repeated rapid emptying", "explanation": "Incorrect. Hypertension raises rather than lowers afterload, and rapid unloaded ejection does not cause hypertrophy. This would be the correct answer if the patient had a chronically vasodilated, low-resistance circulation." },
      { "text": "Elevated venous return raised end-diastolic volume, which thinned rather than thickened the wall", "explanation": "Incorrect. This describes a volume-overloaded ventricle, and the echocardiogram shows a normal cavity with a thickened wall. This would be the correct answer if the vignette described chronic valvular regurgitation with a dilated cavity." },
      { "text": "Chronic afterload elevation caused LV hypertrophy, making the ventricle stiff and less compliant", "explanation": "Correct. Afterload is the arterial pressure the heart must overcome, and the lecture states directly that chronic hypertension leads to left ventricular hypertrophy. The hypertrophied, abnormally thickened ventricle is then stiffer and less compliant, so the slope of the end-diastolic pressure-volume relationship increases and the curve shifts up and to the left. The consequence is exactly what is measured: elevated filling pressures and abnormal filling indices with a preserved ejection fraction." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: chronic hypertension raises afterload and causes LV hypertrophy, which steepens and left-shifts the EDPVR - high filling pressures with a normal ejection fraction.",
    "pdfPage": 15,
    "pdfQuote": "Hypertension can increase afterload and decrease SV"
  },
  {
    "id": 30,
    "category": "Cardiology: Cardiac Mechanics",
    "questionText": "A 66-year-old man with stable exertional angina is being managed medically. His physician wants to reduce his myocardial oxygen demand so that his ischemic threshold improves. His heart rate is 88 beats per minute, his blood pressure is 158/94 mmHg, and echocardiography shows a mildly dilated left ventricle with normal contractility. Which combination of variables determines the myocardial oxygen demand the physician is attempting to lower?",
    "options": [
      { "text": "Preload, venous return, total peripheral resistance and blood viscosity", "explanation": "Incorrect. Preload and venous return act on stroke volume, and viscosity is a determinant of resistance rather than of myocardial energetics. This would be the correct answer if the question had asked what governs the filling of the ventricle." },
      { "text": "Ejection fraction, fractional shortening, stroke volume and cardiac output", "explanation": "Incorrect. These are all measures of pump output, not of the energy the muscle expends generating that output. This would be the correct answer if the question had asked which indices are used to assess global pump performance." },
      { "text": "Contractility, afterload, heart rate and ventricular diameter", "explanation": "Correct. The lecture states that myocardial oxygen demand is directly proportional to contractility, afterload, heart rate and the diameter of the ventricle, the last being wall tension and therefore the Law of Laplace reappearing. This patient has three of the four elevated - a rate of 88, a systolic pressure of 158 raising afterload, and a mildly dilated ventricle raising wall tension - which is why lowering rate and pressure is the therapeutic goal." },
      { "text": "Coronary perfusion pressure, diastolic filling time, hematocrit and arterial oxygen content", "explanation": "Incorrect. Every term listed determines oxygen supply to the myocardium rather than demand from it. This would be the correct answer if the question had asked what limits oxygen delivery through the coronary circulation." },
      { "text": "Compliance, end-diastolic pressure, pulmonary capillary wedge pressure and right atrial pressure", "explanation": "Incorrect. These are filling and congestion variables and describe diastolic loading, not the energetic cost of contraction. This would be the correct answer if the question had asked which measurements reflect volume status and diastolic function." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: CARD - Contractility, Afterload, Rate and Diameter of the ventricle (wall tension) - are the four determinants of myocardial oxygen demand.",
    "pdfPage": 26,
    "pdfQuote": "Myocardial O demand is directly proportional to"
  }
];

window.Test_CV29 = Test_CV29;
