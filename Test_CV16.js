const Test_CV16 = [
  {
    "id": 1,
    "category": "Physiology: Velocity and Cross-Sectional Area",
    "questionText": "A physiology instructor draws the systemic circulation as one continuous circuit and points out that the volume of blood passing any cross-section per minute is identical in the aorta, the capillary bed, and the vena cava. She then notes that a labeled red cell takes roughly a second to traverse a single capillary but crosses the same length of aorta almost instantly. A student objects that slower movement must mean less blood is being delivered to the tissues. Which of the following best explains why velocity falls in the capillary bed even though flow does not?",
    "options": [
      {
        "text": "Capillary walls lack smooth muscle, so they cannot generate the propulsive force needed to sustain velocity",
        "explanation": "Incorrect. Capillaries do have essentially no smooth muscle, and the lecture used that fact to contrast them with the aorta and arterioles, but blood vessels do not propel blood forward; the heart is the pump. Velocity in any segment is set by flow divided by cross-sectional area, not by the muscular content of the wall. This would be the correct answer if the question had asked which vessel layer differs most between the ascending aorta and a capillary."
      },
      {
        "text": "Blood viscosity rises sharply within the capillaries, and this added friction slows the individual red cells",
        "explanation": "Incorrect. Viscosity is a property of the blood itself and enters Poiseuille's equation as a determinant of resistance and therefore of total flow, not of local velocity within one segment. Nothing in the vignette suggests a change in red cell mass or plasma composition as blood enters the capillaries. This would be the correct answer if a patient with polycythemia were being asked why total blood flow was reduced."
      },
      {
        "text": "The capillary bed has the largest total cross-sectional area, and velocity varies inversely with area",
        "explanation": "Correct. Velocity equals flow divided by cross-sectional area (v = Q/A, where A = pi r squared), so at fixed flow the two vary inversely. Each capillary is tiny, but capillaries are so numerous that their summed cross-sectional area is by far the largest of any segment, while the aorta has the smallest. That is why velocity is highest in the aorta and lowest in the capillaries, then rises again through venules, veins, and the vena cava as total area falls. The slow capillary transit is physiologically useful because it allows time for oxygen and nutrient exchange."
      },
      {
        "text": "Mean pressure has fallen to its lowest value in the capillaries, and velocity is proportional to pressure",
        "explanation": "Incorrect. Pressure does fall progressively from aorta to capillaries, but velocity is determined by the flow-to-area relationship, not by the absolute pressure at that point. The lecture illustrated this by showing two vessels with very different absolute pressures but identical pressure gradients carrying identical flows. This would be the correct answer if velocity were defined as proportional to absolute pressure rather than as flow divided by area."
      },
      {
        "text": "Precapillary sphincters shunt most of the cardiac output away, so the true capillary flow is much lower",
        "explanation": "Incorrect. In the steady state the entire cardiac output traverses the systemic capillary bed, and flow is constant across every segment of a series circuit, which is the premise stated in the vignette. Invoking a shunt directly contradicts the observation that volume per minute is identical everywhere. This would be the correct answer if a large arteriovenous fistula were diverting blood around the exchange vessels."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: v = Q/A. Flow is constant throughout the circulation, so velocity is highest in the aorta (smallest total cross-sectional area) and lowest in the capillaries (largest total cross-sectional area).",
    "pdfPage": 10,
    "pdfQuote": "Velocity of blood flow is highest in the aorta and"
  },
  {
    "id": 2,
    "category": "Physiology: Cardiac Output and Venous Return",
    "questionText": "During a teaching catheterization, a fellow measures the volume ejected by the right ventricle and by the left ventricle over the same one-minute interval in a hemodynamically stable adult and finds the two values essentially identical at 5 L/min. The patient's blood pressure is 122/78 mmHg, pulse is 74/min, and echocardiography shows no valvular lesion and no intracardiac shunt. The attending explains that this equality is a structural necessity rather than a coincidence, and compares the circulation to an electrical circuit in which the heart is the battery, the blood is the current, and the vessels are the wires. A student proposes instead that the match must depend on the two ventricles receiving identical autonomic signals. Which of the following best accounts for the observed equality?",
    "options": [
      {
        "text": "The two ventricles are arranged in series, so output from one must equal return to the other",
        "explanation": "Correct. The left and right hearts operate in series within a closed loop of vessels, so blood ejected by one ventricle must traverse a circuit and arrive at the other. In the steady state, therefore, cardiac output from the heart equals venous return to the heart, and the outputs of the two ventricles must match. This is the conceptual basis for the electrical-circuit analogy used in the lecture, where the same current flows through every element of a series circuit. Any sustained mismatch would progressively drain one circuit and flood the other, which cannot occur physiologically."
      },
      {
        "text": "Both ventricles receive identical sympathetic input, which matches their contractile force beat for beat",
        "explanation": "Incorrect. Autonomic tone modulates contractility and rate, but matched innervation is not what forces the two outputs to be equal; the series arrangement of the circuit does that, and the equality holds even when autonomic tone is altered or absent. The lecture made this point structurally, not neurally. This would be the correct answer if the question asked what acutely raises the contractility of both ventricles during a stress response."
      },
      {
        "text": "The two circuits offer equal resistance, which forces equal outputs",
        "explanation": "Incorrect. The two circuits carry the same flow but do not have equal resistance; that is precisely why the pressures they generate differ so widely. Equality of output arises from the series arrangement, not from matched resistances. This would be the correct answer if the question asked why two vessels with identical pressure gradients and identical resistances carry identical flows."
      },
      {
        "text": "The interventricular septum mechanically couples the chambers so that stroke volumes are always identical",
        "explanation": "Incorrect. The septum is a shared wall and some mechanical interaction exists, but beat-to-beat stroke volumes of the two ventricles are not mechanically locked; they are matched over time because the circuits are in series. A structural coupling explanation was not offered in this lecture. This would be the correct answer if the question concerned direct ventricular interdependence in a restrictive pericardial process."
      },
      {
        "text": "Venous capacitance vessels buffer any mismatch, and that storage keeps the two outputs numerically equal",
        "explanation": "Incorrect. Veins are indeed the compliant, capacitance side of the circulation and can transiently accommodate volume, but buffering explains short-term storage rather than the steady-state equality of the two outputs. Over a full minute in a stable patient, the series arrangement is what enforces the match. This would be the correct answer if the question asked which vessels can distend most for a given rise in transmural pressure."
      }
    ],
    "clinicalPearl": "Key takeaway: because the left and right hearts operate in series, cardiac output from the heart must equal venous return to the heart. CO = SV x HR, normally about 5 L/min.",
    "correctAnswerIndex": 0,
    "pdfPage": 5,
    "pdfQuote": "venous return to the heart"
  },
  {
    "id": 3,
    "category": "Physiology: Ohm's Law Applied to Blood Flow",
    "questionText": "In a laboratory model of the circulation, two rigid vessel segments of identical length, radius, and perfusate viscosity are studied side by side. Segment A is perfused with an inlet pressure of 90 mmHg and an outlet pressure of 10 mmHg. Segment B is perfused with an inlet pressure of 180 mmHg and an outlet pressure of 100 mmHg. A student predicts that segment B will carry twice the flow because its inlet pressure is doubled. Which of the following statements about the two flows is correct?",
    "options": [
      {
        "text": "Flow in B is twice that in A because its inlet pressure is exactly twice as high",
        "explanation": "Incorrect. This is the classic error the lecture set out to correct: flow tracks the pressure difference across the segment, not the absolute pressure at either end. Both segments have a gradient of 80 mmHg, so doubling the inlet pressure while also raising the outlet pressure changes nothing. This would be the correct answer if the outlet pressure of segment B had remained at 10 mmHg, giving a gradient of 170 mmHg."
      },
      {
        "text": "Flow in A exceeds flow in B because its outlet pressure is much closer to zero",
        "explanation": "Incorrect. A low downstream pressure matters only insofar as it contributes to the gradient, and here the gradients are identical at 80 mmHg. Absolute outlet pressure by itself has no independent effect on flow in this model. This would be the correct answer if the two segments had the same inlet pressure and only the outlet pressures differed."
      },
      {
        "text": "Flow in B exceeds flow in A because a higher absolute pressure distends the vessel wall further",
        "explanation": "Incorrect. Distensibility is a real property of living arteries, but the vignette specifies rigid segments of identical radius, so radius is not a variable here. Even in compliant vessels the driving force for flow remains the pressure gradient. This would be the correct answer if the question described a compliant vessel and asked how transmural pressure alters its stored volume."
      },
      {
        "text": "Flow cannot be compared without knowing the mean arterial pressure of the whole model circuit",
        "explanation": "Incorrect. Everything needed is supplied: the gradient across each segment and the statement that geometry and viscosity are identical. Systemic mean pressure is required for calculating total peripheral resistance, not for comparing two defined segments. This would be the correct answer if the question asked for total peripheral resistance of the entire circuit."
      },
      {
        "text": "Flow is identical in the two segments, because the driving pressure gradient across each one is the same",
        "explanation": "Correct. Applying Ohm's law to fluids, Q = delta P / R, where delta P is P1 minus P2 across the segment. Segment A has 90 minus 10 and segment B has 180 minus 100, and both equal 80 mmHg. Because length, radius, and viscosity are identical, resistance is identical, so the flows must match exactly. The lecture used this precise pair of examples to show that only the gradient, sometimes called the driving or perfusion pressure, determines flow."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Q = delta P / R. Only the pressure DIFFERENCE across a segment drives flow; two vessels with gradients of 90-to-10 and 180-to-100 mmHg carry identical flow.",
    "pdfPage": 15,
    "pdfQuote": "Blood Flow is directly proportional to the pressure difference but"
  },
  {
    "id": 4,
    "category": "Physiology: Poiseuille's Equation",
    "questionText": "On a bench model of vascular resistance, a rigid tube is perfused with a fluid of fixed viscosity at a fixed driving pressure and the steady-state flow is recorded. The investigator then substitutes a tube of identical length and identical perfusate but exactly twice the internal radius, and repeats the measurement under the same driving pressure. Flow through the wider tube is dramatically greater than through the original. Which of the following best predicts the magnitude of that change and its physical basis?",
    "options": [
      {
        "text": "Flow rises 2-fold, because flow scales linearly with radius at fixed pressure and viscosity",
        "explanation": "Incorrect. A linear relationship between radius and flow underestimates the effect enormously; it is the single most common student error with this equation. Resistance depends on the fourth power of the radius, not the first. This would be the correct answer if the question asked how flow changes when the pressure gradient alone is doubled."
      },
      {
        "text": "Flow rises 16-fold, because resistance falls with the fourth power of the radius",
        "explanation": "Correct. Poiseuille's equation states that R = 8 x length x viscosity / (pi x radius to the fourth power), and combining it with Q = delta P / R gives Q proportional to radius to the fourth power. Doubling the radius therefore multiplies flow by two to the fourth power, which is 16. This is why the lecture emphasized radius as the dominant, most powerful lever on flow, far outweighing changes in length, viscosity, or pressure. It is also why arteriolar radius is the body's main control point for regional blood flow."
      },
      {
        "text": "Flow rises 4-fold, because the cross-sectional area of the tube determines the resistance to flow",
        "explanation": "Incorrect. Doubling the radius does quadruple the cross-sectional area, and that is exactly why this distractor is tempting, but resistance is not simply the inverse of area. The fourth-power dependence reflects the velocity profile of laminar flow, giving a 16-fold rather than 4-fold change. This would be the correct answer if the question asked how the cross-sectional area itself changes when the radius is doubled."
      },
      {
        "text": "Flow rises 8-fold, because resistance varies with the cube of the radius in laminar flow systems",
        "explanation": "Incorrect. There is no cube term in Poiseuille's equation; the 8 in the numerator of the resistance expression is a constant and is frequently misremembered as an exponent. The exponent on radius is 4. This would be the correct answer only if the governing relationship contained a third-power radius term, which it does not."
      },
      {
        "text": "Flow is unchanged, because the pressure gradient rather than the tube geometry determines the flow",
        "explanation": "Incorrect. The pressure gradient is one determinant of flow, but resistance is the other, and resistance is set by geometry and viscosity. Holding the gradient constant while changing radius changes resistance, and therefore changes flow. This would be the correct answer if two tubes with identical radius, length, and viscosity were compared at the same gradient."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Q = (delta P x pi x r to the 4th) / (8 x length x viscosity). Doubling the radius increases flow 16-fold, making radius the single most powerful determinant of flow.",
    "pdfPage": 20,
    "pdfQuote": "Poiseuille's Equation"
  },
  {
    "id": 5,
    "category": "Physiology: Origin of Vascular Resistance",
    "questionText": "A student asks where vascular resistance physically comes from, noting that resistance appears in every hemodynamic equation but is never something one can see on an image. The lecturer answers by pointing to the inner surface of a longitudinally opened artery and describing what happens to a layer of blood as it slides along that surface. She adds that this same interaction is the reason resistance rises when a vessel narrows. Which of the following best describes the physical origin of vascular resistance?",
    "options": [
      {
        "text": "Recoil of elastic fibers in the adventitia opposing forward movement of the blood column",
        "explanation": "Incorrect. Elastic recoil of the arterial wall stores and releases energy and underlies compliance and the maintenance of diastolic pressure, but it is not the definition of resistance given in this lecture. Compliance and resistance are separate properties of a vessel. This would be the correct answer if the question asked which property allows the aorta to distend and accommodate the ejected stroke volume."
      },
      {
        "text": "Collision of red blood cells with one another in the center of the flowing stream",
        "explanation": "Incorrect. Cell-to-cell interactions contribute to viscosity, which is one input into the resistance equation, but resistance itself was defined in this lecture in terms of the blood-vessel wall interaction. Confusing viscosity with resistance loses the distinction Poiseuille's equation is built on. This would be the correct answer if the question asked what changes in a patient whose red cell mass has risen substantially."
      },
      {
        "text": "Active contraction of endothelial cells that grip the blood column during each systole",
        "explanation": "Incorrect. Endothelial cells line every vessel in the body but are not contractile pumps that grip blood; the contractile element of the vessel wall is the vascular smooth muscle, and its role is to change radius, not to grasp the blood. Resistance arises passively from friction. This would be the correct answer if the question asked which cell type adjusts arteriolar radius under sympathetic control."
      },
      {
        "text": "Friction between the flowing blood and the intravascular endothelium lining the vessel",
        "explanation": "Correct. Vascular resistance to blood flow occurs as a result of friction between the flowing blood and the intravascular endothelium along the inside of the vessel. Because friction acts at the wall, the geometry of the wall matters enormously, which is why resistance depends on vessel length and, far more powerfully, on radius. A narrower vessel forces the blood into closer contact with the wall per unit volume, raising resistance and reducing flow at any given pressure gradient. This is the physical link between an anatomic narrowing and the functional consequence of ischemia."
      },
      {
        "text": "Backpressure created by the one-way venous valves that intermittently interrupt the blood column",
        "explanation": "Incorrect. Venous valves prevent retrograde flow and, together with the skeletal muscle pump, break up the hydrostatic column in dependent limbs; they are not the source of vascular resistance. Resistance is present in every vessel, including those without valves. This would be the correct answer if the question asked why venous pressure at the foot stays below about 30 mmHg during walking."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: vascular resistance arises from friction between flowing blood and the intravascular endothelium. Compute it clinically as R = delta P / Q.",
    "pdfPage": 14,
    "pdfQuote": "occurs as a result of friction between the flowing blood"
  },
  {
    "id": 6,
    "category": "Physiology: Arteriolar Control of Blood Flow",
    "questionText": "A healthy 24-year-old begins vigorous cycling. Blood flow to the exercising quadriceps rises roughly fivefold within two minutes, while measured mean arterial pressure changes by only a few millimeters of mercury and cardiac output rises far less than fivefold. Flow to the non-exercising forearm falls slightly over the same interval. Which of the following best explains the large, selective increase in flow to the working muscle?",
    "options": [
      {
        "text": "A large rise in aortic systolic pressure that increases the driving gradient across the muscle",
        "explanation": "Incorrect. The vignette specifically states that mean arterial pressure barely changes, and a pressure-driven mechanism could not explain why flow rose in one bed while falling in another. Pressure is a systemic variable; the observed change is regional. This would be the correct answer if the question described a uniform rise in flow to every vascular bed simultaneously."
      },
      {
        "text": "Increased venous compliance in the exercising limb that pulls blood forward into the muscle",
        "explanation": "Incorrect. Veins are the compliant, capacitance side of the circulation and can hold volume, but compliance does not generate forward flow; flow requires a pressure gradient acting against resistance. Venous changes cannot produce a selective fivefold arterial inflow. This would be the correct answer if the question asked which vessels distend most for a given rise in transmural pressure."
      },
      {
        "text": "A fall in blood viscosity from exercise-induced hemodilution",
        "explanation": "Incorrect. Viscosity is a property of the whole circulating blood and cannot be selectively lowered in one muscle; moreover, exercise tends to hemoconcentrate rather than dilute. Viscosity changes would affect all beds, not one. This would be the correct answer if the question described a patient with a markedly reduced red cell mass and a generalized rise in flow."
      },
      {
        "text": "A decrease in arteriolar resistance within the exercising muscle vascular bed",
        "explanation": "Correct. Because Q = delta P / R, and the pressure gradient is essentially unchanged, a large rise in regional flow must come from a fall in regional resistance. The major mechanism for changing blood flow in the cardiovascular system is changing the resistance of blood vessels, particularly the arterioles, whose adjustable radius makes them the control valves of the circulation. Small changes in arteriolar radius produce very large changes in flow because of the fourth-power relationship. The slight fall in forearm flow reflects the opposite change in that bed's arteriolar tone."
      },
      {
        "text": "Recruitment of additional capillaries whose thin walls generate propulsive force for the flow",
        "explanation": "Incorrect. Capillaries are essentially endothelial tubes with almost no smooth muscle and generate no propulsive force whatsoever; they are the exchange surface, not a pump or a control valve. Resistance regulation occurs upstream at the arteriole. This would be the correct answer if the question asked which segment has the largest total cross-sectional area and lowest velocity."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: the major mechanism for changing blood flow in the cardiovascular system is changing vascular resistance, particularly at the arterioles.",
    "pdfPage": 13,
    "pdfQuote": "changing the resistance of blood vessels, particularly the arterioles"
  },
  {
    "id": 7,
    "category": "Physiology: Compliance and Capacitance",
    "questionText": "A vascular laboratory studies two excised human vessel segments of the same length: a segment of ascending aorta, rich in vascular smooth muscle and elastic tissue, and a segment of saphenous vein, which has all the same wall layers but far less muscle. Each segment is cannulated and the transmural pressure is raised in steps while the contained volume is recorded. For any given increment in transmural pressure, the venous segment accommodates a much larger increment in volume. Which single vascular property is being measured by this experiment?",
    "options": [
      {
        "text": "Compliance, the ability of a vessel to distend and increase its volume as transmural pressure rises",
        "explanation": "Correct. Compliance, also called capacitance or distensibility, is defined as the ability of a vessel to distend and increase volume with increasing transmural pressure, or simply how much blood a vessel can hold. The experiment described, plotting volume change against pressure change, measures exactly that. Veins are the high-capacitance vessels of the circulation, which is why they serve as the reservoir, while the aorta is stiffer and instead stores energy elastically during systole. Loss of compliance with aging produces arterial stiffness, a separate concept from wall thickness."
      },
      {
        "text": "Velocity, the distance the blood column is displaced per unit of time in a given vessel segment",
        "explanation": "Incorrect. Velocity is a kinetic measurement expressed in centimeters per second and requires flowing blood; the experiment described is static, with no flow at all. Velocity would be calculated as flow divided by cross-sectional area. This would be the correct answer if the segments were perfused at a known flow and the linear displacement of the blood column were being timed."
      },
      {
        "text": "Resistance, the opposition to flow generated as blood rubs along the endothelial surface",
        "explanation": "Incorrect. Resistance requires flow and a pressure gradient along the length of the vessel, and it is calculated as delta P divided by Q. The described experiment holds pressure uniform inside the segment and measures stored volume, which is a capacitance measurement. This would be the correct answer if a pressure gradient had been imposed along each segment and the resulting flow measured."
      },
      {
        "text": "Flow, the volume of blood that passes a given point in the circulation per unit of time",
        "explanation": "Incorrect. Flow is volume per time and again requires a moving column of blood, whereas this experiment measures the volume a static segment can accept at a given pressure. Confusing stored volume with volume per time confuses capacitance with flow. This would be the correct answer if the outflow from each cannulated segment were being collected and timed."
      },
      {
        "text": "Wall tension, the circumferential force borne by the wall at a given transmural pressure",
        "explanation": "Incorrect. Wall tension is described by the Laplace relationship, in which tension equals transmural pressure times radius divided by twice the wall thickness; it is a force in the wall, not a volume the vessel accepts. The experiment reports volume, not force. This would be the correct answer if the two segments had been compared for the force in the wall at matched radius and thickness."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: compliance = capacitance = distensibility, the ability of a vessel to distend and increase volume with increasing transmural pressure. Veins are the capacitance vessels.",
    "pdfPage": 7,
    "pdfQuote": "Compliance or Capacitance or Distensibility is the ability of"
  },
  {
    "id": 8,
    "category": "Physiology: Mean Arterial Pressure",
    "questionText": "A 27-year-old medical student is sitting quietly reviewing cardiovascular physiology. She takes her own radial pulse and counts a heart rate of 75 beats/min. A classmate practicing for a clinical skills examination measures her blood pressure and reports a systolic pressure of 110 mmHg and a diastolic pressure of 70 mmHg. From a previous echocardiogram she knows her average stroke volume is 65 mL/beat. Which of the following is her mean arterial pressure, and how is it derived?",
    "options": [
      {
        "text": "77 mmHg, calculated as the diastolic pressure plus one-half of the pulse pressure value",
        "explanation": "Incorrect. Weighting the pulse pressure by one-half treats systole and diastole as equal in duration, which they are not; diastole occupies roughly twice as much of the cardiac cycle at normal heart rates. That is why the one-third weighting is used. This would be the correct answer if mean arterial pressure were defined as the simple midpoint of the pressure waveform."
      },
      {
        "text": "90 mmHg, calculated as the arithmetic mean of the systolic and the diastolic pressures",
        "explanation": "Incorrect. The arithmetic average of 110 and 70 is indeed 90, and that is exactly the trap; mean arterial pressure is a time-weighted running average, not a simple average of the two extremes. It always lies closer to diastolic than to systolic. This would be the correct answer if the heart spent equal time in systole and diastole."
      },
      {
        "text": "83 mmHg, calculated as the diastolic pressure plus one-third of the pulse pressure",
        "explanation": "Correct. Pulse pressure is systolic minus diastolic, here 110 minus 70, which is 40 mmHg. Mean arterial pressure equals diastolic plus one-third of the pulse pressure, so 70 plus about 13 gives approximately 83 mmHg. The equivalent formula, (2 x diastolic + systolic) / 3, gives (140 + 110) / 3, which is also about 83 mmHg, and the lecture stressed that both formulas must yield the same number. Her cardiac output, by the way, is 65 x 75, or about 4.9 L/min."
      },
      {
        "text": "97 mmHg, calculated as the systolic pressure minus one-third of the pulse pressure value",
        "explanation": "Incorrect. Subtracting one-third of the pulse pressure from systolic places the mean far too close to the systolic peak, in the opposite direction from the correct time weighting. Mean arterial pressure sits nearer diastolic pressure. This would be the correct answer if diastole occupied only about one-third of the cardiac cycle rather than two-thirds."
      },
      {
        "text": "40 mmHg, which is the difference between the systolic and the diastolic pressure",
        "explanation": "Incorrect. This is the pulse pressure, not the mean arterial pressure; it happens to be normal here, since normal pulse pressure is 30 to 40 mmHg. Pulse pressure reports on stroke volume and compliance, whereas mean arterial pressure reports on perfusion. This would be the correct answer if the question had asked for the pulse pressure instead."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: MAP = diastolic + 1/3 pulse pressure = (2 x diastolic + systolic) / 3. Both formulas must give the same value; MAP always sits closer to diastolic than to systolic pressure.",
    "pdfPage": 36,
    "pdfQuote": "she has a systolic pressure of 110 mmHg and a diastolic"
  },
  {
    "id": 9,
    "category": "Physiology: Pulse Pressure",
    "questionText": "Two adults being screened in a student-run clinic have exactly the same mean arterial pressure of 93 mmHg. The first has a blood pressure of 120/80 mmHg and the second has a blood pressure of 140/70 mmHg. A student notes that although perfusion pressure is identical, the two cuff readings clearly report something different about the two circulations. The attending asks what physiologic variable the difference between systolic and diastolic pressure most directly reflects. Which of the following is the best answer?",
    "options": [
      {
        "text": "The total peripheral resistance offered by the systemic arteriolar bed at that moment",
        "explanation": "Incorrect. Total peripheral resistance is derived from mean arterial pressure, central venous pressure, and cardiac output, and it is the same in the two patients here since their mean pressures are identical. Resistance is not what the systolic-to-diastolic difference reports. This would be the correct answer if the question asked what is calculated from (MAP minus CVP) divided by cardiac output."
      },
      {
        "text": "The running average of arterial pressure over the entire cardiac cycle in that patient",
        "explanation": "Incorrect. That is the definition of mean arterial pressure, which the vignette explicitly states is identical in both patients, so it cannot be what distinguishes them. Mean pressure and pulse pressure are independent pieces of information from the same cuff reading. This would be the correct answer if the question had asked which value best represents tissue perfusion pressure."
      },
      {
        "text": "The central venous pressure measured in the thoracic vena cava near the right atrium",
        "explanation": "Incorrect. Central venous pressure is a low-pressure venous measurement, normally 0 to 7 mmHg, and requires invasive catheterization rather than a cuff. It influences preload and can indirectly change pulse pressure, but it is not what the systolic-minus-diastolic difference measures. This would be the correct answer if the question described a catheter tip positioned near the right atrium."
      },
      {
        "text": "The resistance against which the left ventricle must eject during the systolic ejection phase",
        "explanation": "Incorrect. That describes afterload, which is a determinant of stroke volume rather than the quantity the cuff difference reports. Afterload and pulse pressure are related but distinct, and the lecture defined them separately. This would be the correct answer if the question asked what is increased by aortic valve stenosis and thereby lowers stroke volume."
      },
      {
        "text": "The volume of blood ejected from the ventricle on any single beat of the cycle",
        "explanation": "Correct. Pulse pressure is systolic minus diastolic pressure, normally 30 to 40 mmHg, and its magnitude reflects the volume of blood ejected on a single beat. The three factors that set it are stroke volume, the speed of ejection of that stroke volume, and arterial compliance. That is why conditions lowering stroke volume, such as aortic stenosis, narrow the pulse pressure, while lying down raises it by increasing central venous pressure, preload, and stroke volume. Because it comes free with every blood pressure measurement, pulse pressure is an immediately available clinical parameter."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: pulse pressure = systolic - diastolic (normal 30-40 mmHg), and its magnitude reflects the stroke volume ejected on a single beat.",
    "pdfPage": 25,
    "pdfQuote": "Pulse Pressure is the difference between systolic pressure and diastolic pressure."
  },
  {
    "id": 10,
    "category": "Physiology: Central Venous Pressure",
    "questionText": "A central venous catheter is placed in a hemodynamically stable postoperative adult, and the tip is confirmed radiographically to lie in the thoracic vena cava just proximal to the right atrium. The transduced pressure reads a steady 4 mmHg. The patient's blood pressure is 118/74 mmHg, heart rate is 78/min, and the extremities are warm with brisk capillary refill. A student asks how to interpret the number and what it reflects. Which of the following is the most accurate interpretation?",
    "options": [
      {
        "text": "It is abnormally low and reflects failure of the left ventricle to maintain forward output",
        "explanation": "Incorrect. A value of 4 mmHg lies squarely within the normal range, and the vignette describes warm extremities and normal vital signs, arguing against a low-output state. Central venous pressure also reports on the right side of the circulation, not directly on left ventricular performance. This would be the correct answer if the patient were hypotensive with cool extremities and a very low measured pressure."
      },
      {
        "text": "It is normal, and it reflects the balance between right heart pumping and venous return",
        "explanation": "Correct. Normal central venous pressure is 0 to 7 mmHg, so 4 mmHg is normal. Central venous pressure is the blood pressure in the thoracic vena cava near the right atrium, and it is regulated by a balance between the ability of the heart to pump blood out of the right atrium and ventricle into the lungs and the tendency of blood to flow from the peripheral veins into the right atrium, which is venous return. Because it sits at the filling end of the heart, it is the pressure that sets end-diastolic volume, that is, preload. It is also the term subtracted from mean arterial pressure when calculating total peripheral resistance."
      },
      {
        "text": "It is abnormally high and indicates that arteriolar resistance has risen substantially",
        "explanation": "Incorrect. Four mmHg is within the normal 0 to 7 mmHg range, and in any case arteriolar resistance is an arterial-side variable that would be reflected in mean arterial pressure and cardiac output rather than in the venous pressure. This would be the correct answer if the catheter had read well above 7 mmHg in a patient with signs of right-sided congestion."
      },
      {
        "text": "It is normal, and it is set primarily by the systolic pressure generated in the aorta",
        "explanation": "Incorrect. The interpretation of normal is right but the mechanism is wrong: by the time blood reaches the thoracic vena cava, arterial pressure has dissipated almost entirely, which is why venous pressures approach zero near the heart. The determinant is the balance of right heart output and venous return. This would be the correct answer if the question asked what determines the pressure profile in the large arteries."
      },
      {
        "text": "It is abnormally low and indicates the arterial compliance of the aorta has decreased",
        "explanation": "Incorrect. The value is normal, and aortic compliance is an arterial property that influences pulse pressure rather than the pressure recorded in the vena cava. Mixing the two confuses the high-pressure and low-pressure sides of the circulation. This would be the correct answer if the question described a calcified, non-distensible aorta and asked about the pulse pressure."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: CVP is the pressure in the thoracic vena cava near the right atrium (normal 0-7 mmHg), set by the balance between right heart output and venous return; it determines preload.",
    "pdfPage": 34,
    "pdfQuote": "Normal Central Venous Pressure (CVP): 0-7 mmHg"
  },
  {
    "id": 11,
    "category": "Physiology: Laplace Law and Wall Tension",
    "questionText": "Surveillance imaging in an older adult shows that a segment of the infrarenal aorta has dilated to roughly three times its original diameter over several years, while the adjacent aorta remains normal in caliber. The wall of the dilated segment is measurably thinner than the wall of the normal segment. Systemic blood pressure has been stable throughout the surveillance period, and the transmural pressure across both segments is therefore essentially the same. Which of the following best describes the wall tension in the dilated segment and its basis?",
    "options": [
      {
        "text": "Wall tension falls because the dilated segment distributes the pressure over a larger surface area",
        "explanation": "Incorrect. This intuition, borrowed from pressure equals force divided by area, is exactly backwards for a cylinder under internal pressure. Laplace's relationship shows tension rising, not falling, as radius increases. This would be the correct answer if wall tension were inversely rather than directly proportional to radius."
      },
      {
        "text": "Wall tension rises because tension is proportional to the radius and inversely proportional to thickness",
        "explanation": "Correct. By the Laplace law, wall tension equals transmural pressure times radius divided by twice the wall thickness. At an unchanged transmural pressure, tripling the radius triples the numerator, and a thinner wall shrinks the denominator, so tension in the dilated segment rises substantially above that in the normal aorta. This creates a self-reinforcing cycle in which dilation begets more tension, which begets more dilation, and it is the physics that explains why an abdominal aortic aneurysm becomes progressively more dangerous as it enlarges. The lecture used the aneurysm as its classic example of why wall tension increases with radius."
      },
      {
        "text": "Wall tension is unchanged because transmural pressure is the sole determinant of wall tension",
        "explanation": "Incorrect. Transmural pressure is only one of three variables in the Laplace relationship; radius and wall thickness are equally part of the equation. Holding pressure constant while changing radius does change tension. This would be the correct answer if radius and wall thickness had both remained unchanged along with pressure."
      },
      {
        "text": "Wall tension falls because a wider lumen lowers resistance and therefore lowers the local pressure",
        "explanation": "Incorrect. A wider lumen does lower resistance by Poiseuille's relationship, but the vignette specifies that transmural pressure is unchanged, and resistance is not a term in the Laplace equation at all. This distractor conflates the flow equation with the wall-tension equation. This would be the correct answer if the question asked how flow through the dilated segment compares with flow through the normal segment."
      },
      {
        "text": "Wall tension rises solely because arterial stiffness increases as blood vessels age and dilate",
        "explanation": "Incorrect. The conclusion is right but the reasoning is wrong, and the lecture deliberately separated these terms: stiffness is loss of the elastic, distensible property with aging, whereas Laplace tension depends on pressure, radius, and thickness. Compliance, stiffness, and thickness are three different concepts. This would be the correct answer if the question asked why an elderly patient's aorta accommodates less volume per unit rise in pressure."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Laplace law, wall tension = (transmural pressure x radius) / (2 x wall thickness). A dilated, thin-walled aorta bears far more wall tension at the same blood pressure.",
    "pdfPage": 24,
    "pdfQuote": "Why does the wall tension increase with the radius"
  },
  {
    "id": 12,
    "category": "Physiology: Fick Principle",
    "questionText": "A patient in the intensive care unit needs a cardiac output measurement, but the echocardiography machine is unavailable and no stroke volume can be obtained. The team does have an indwelling arterial line, a pulmonary artery catheter for mixed venous sampling, and a metabolic cart that has measured whole-body oxygen consumption. The intensivist tells the student that these three data points are sufficient. Which of the following describes the correct calculation to obtain cardiac output from these data?",
    "options": [
      {
        "text": "Multiply the measured heart rate by the pulse pressure recorded at the radial arterial line",
        "explanation": "Incorrect. Pulse pressure reflects stroke volume qualitatively but is not a volume and cannot be substituted for one in the cardiac output equation. Multiplying a pressure by a rate does not yield volume per minute. This would be the correct answer if the question asked which bedside parameter changes in parallel with stroke volume."
      },
      {
        "text": "Divide the mean arterial pressure by the body surface area to obtain the cardiac index directly",
        "explanation": "Incorrect. Body surface area is used to index a cardiac output that has already been measured; it cannot convert a pressure into a flow. Dividing a pressure by an area is dimensionally meaningless here. This would be the correct answer if a measured cardiac output were being normalized to body size."
      },
      {
        "text": "Divide the arteriovenous oxygen content difference by the whole-body oxygen consumption rate",
        "explanation": "Incorrect. This is the Fick relationship inverted, and it is the single most common arithmetic error students make with it; the result would be the reciprocal of cardiac output and would fall as output rose. Consumption belongs in the numerator. This would be the correct answer if the question had asked for the reciprocal of cardiac output."
      },
      {
        "text": "Multiply the end-diastolic volume by the heart rate obtained from the rhythm strip",
        "explanation": "Incorrect. End-diastolic volume is the preload, not the volume ejected; stroke volume is end-diastolic minus end-systolic volume, so using end-diastolic volume alone would substantially overestimate output. In any case no volume measurement is available in this vignette. This would be the correct answer if the ventricle emptied completely with every beat."
      },
      {
        "text": "Divide the whole-body oxygen consumption by the arteriovenous oxygen content difference",
        "explanation": "Correct. The Fick principle states that cardiac output equals oxygen consumption divided by the difference between arterial and venous oxygen content. It is the physiologic route to cardiac output when stroke volume is unavailable, and the lecture emphasized that it requires laboratory data rather than mechanical testing. A key sampling trap is that in a right heart catheterization the pulmonary artery carries the venous value and the pulmonary vein carries the arterial value. Both the Fick and the CO = SV x HR methods must give the same answer in the same patient."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Fick principle, CO = O2 consumption / (arterial O2 - venous O2). Use it when stroke volume is unknown; pulmonary vein O2 is the arterial value and pulmonary artery O2 is the venous value.",
    "pdfPage": 37,
    "pdfQuote": "Cardiac Output - Calculations"
  },
  {
    "id": 13,
    "category": "Physiology: Calculating Vascular Resistance",
    "questionText": "A 55-year-old woman undergoes measurement of renal hemodynamics during an evaluation for hypertension. Renal blood flow is measured at 500 mL/min. A catheter in the renal artery records a pressure of 100 mmHg and a catheter in the renal vein records a pressure of 10 mmHg. The team wants to express the vascular resistance of that kidney so it can be tracked after therapy. Which of the following is the vascular resistance of this kidney, and how is it obtained?",
    "options": [
      {
        "text": "0.18 mmHg/mL per min, from the pressure gradient divided by the blood flow",
        "explanation": "Correct. Rearranging Q = delta P / R gives R = delta P / Q. The pressure gradient across the kidney is the arterial minus the venous pressure, 100 minus 10, which is 90 mmHg, and the flow is 500 mL/min. Dividing 90 by 500 yields 0.18 mmHg/mL per min. This is exactly the logic applied to the whole systemic circuit when total peripheral resistance is computed as mean arterial pressure minus central venous pressure, divided by cardiac output."
      },
      {
        "text": "0.20 mmHg/mL per min, from the renal arterial pressure divided by the measured blood flow",
        "explanation": "Incorrect. Using arterial pressure alone ignores the downstream venous pressure and therefore overstates the driving gradient; flow is driven by the difference between the two ends of the vascular bed, not by the upstream pressure by itself. Here that error inflates the numerator from 90 to 100. This would be the correct answer if the renal venous pressure were zero."
      },
      {
        "text": "5.56 mmHg/mL per min, from the blood flow divided by the calculated pressure gradient",
        "explanation": "Incorrect. This inverts the relationship: dividing flow by pressure gives conductance, the reciprocal of resistance, and the units come out backwards. Resistance must rise when flow falls at a fixed gradient, which this expression does not do. This would be the correct answer if the question had asked for the vascular conductance of the kidney."
      },
      {
        "text": "0.02 mmHg/mL per min, from the renal venous pressure divided by the measured blood flow",
        "explanation": "Incorrect. The downstream pressure alone is not the driving force; it must be subtracted from the upstream pressure to yield the gradient. Using it alone drastically underestimates resistance. This would be the correct answer if the renal arterial pressure were 20 mmHg and the venous pressure were 10 mmHg."
      },
      {
        "text": "0.22 mmHg/mL per min, from the sum of the two pressures divided by the flow",
        "explanation": "Incorrect. Pressures at the two ends of a vascular bed are subtracted, never added; adding them has no physical meaning because flow depends on the gradient from high to low pressure. This would be the correct answer only if resistance were defined using total rather than differential pressure, which it is not."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: R = delta P / Q. For an organ, use arterial minus venous pressure over organ blood flow; for the whole body, TPR = (MAP - CVP) / cardiac output.",
    "pdfPage": 17,
    "pdfQuote": "renal blood flow of 500mL/min"
  },
  {
    "id": 14,
    "category": "Physiology: Viscosity and Cardiac Output",
    "questionText": "A 22-year-old medical student presents with a three-month history of fatigue and feeling sleepy most of the time. She has no chest pain, no orthopnea, and no history of cardiac disease. Blood pressure is 112/64 mmHg, pulse is 104/min, respirations are 16/min, and she is afebrile. Cardiac examination reveals a soft mid-systolic murmur at the left sternal border, and non-invasive testing shows a cardiac output well above the expected value for her body size. Which of the following hemodynamic changes best explains her elevated cardiac output?",
    "options": [
      {
        "text": "An increase in blood viscosity that raises resistance",
        "explanation": "Incorrect. Raising viscosity increases resistance and therefore lowers flow, which is the opposite of the high-output state described here. This is the direction the lecturer explicitly stopped to correct mid-lecture, because students reverse it so often. This would be the correct answer if the patient had a markedly elevated red cell mass with sluggish flow."
      },
      {
        "text": "A rise in total peripheral resistance from generalized arteriolar constriction in the systemic bed",
        "explanation": "Incorrect. Since blood pressure equals cardiac output times total peripheral resistance, a primary rise in resistance with a normal blood pressure would require output to fall, not rise. Her pressure is normal and her output is high, which points to a low-resistance, high-flow state. This would be the correct answer if she were hypertensive with a normal or reduced cardiac output."
      },
      {
        "text": "A fixed obstruction at the aortic valve that raises afterload and prolongs the ejection time",
        "explanation": "Incorrect. Aortic stenosis is an increased-afterload state that decreases stroke volume, and it therefore narrows the pulse pressure and lowers rather than raises cardiac output. The murmur here is soft and unaccompanied by the exertional syncope or narrow pulse pressure of significant stenosis. This would be the correct answer if she had a harsh murmur radiating to the carotids with a pulse pressure of 16 mmHg."
      },
      {
        "text": "A fall in blood viscosity from a reduced red cell mass, which raises flow and heart rate",
        "explanation": "Correct. In Poiseuille's equation viscosity sits in the denominator, so when the red cell count and therefore viscosity fall, flow rises. With fewer red cells carrying oxygen, a compensatory increase in heart rate further raises cardiac output, and the resulting high-velocity flow across a normal valve produces the mid-systolic murmur. This is the classic high-output picture in a chronically fatigued young patient, and it is the reasoning the lecture used to arrive at anemia as the answer on this slide. Note that the compensation here is on the heart rate side of CO = SV x HR."
      },
      {
        "text": "A pericardial process restricting diastolic filling and thereby reducing end-diastolic volume",
        "explanation": "Incorrect. Restricted filling lowers preload, lowers stroke volume, and therefore lowers cardiac output, which is incompatible with the measured high output. Such patients also show elevated venous pressure and a narrow pulse pressure. This would be the correct answer if she had distended neck veins, muffled heart sounds, and a falling cardiac output."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: fewer red cells means lower viscosity, which raises flow; compensatory tachycardia then raises cardiac output, producing a high-output state with a mid-systolic murmur.",
    "pdfPage": 23,
    "pdfQuote": "higher than normal cardiac output"
  },
  {
    "id": 15,
    "category": "Physiology: Determinants of Stroke Volume",
    "questionText": "A cardiology fellow reviews the three variables that determine how much blood the left ventricle ejects with each contraction: the degree of myocardial stretch at the end of diastole, the resistance against which blood must be ejected, and the intrinsic force of contraction. She then presents a 71-year-old patient whose left ventricular outflow is obstructed by a severely narrowed and calcified aortic valve. Blood pressure is 110/94 mmHg, pulse is 70/min, and echocardiography shows normal filling pressures with preserved contractile function. Which of the following changes best accounts for the reduction in this patient's stroke volume?",
    "options": [
      {
        "text": "Increased preload, because greater end-diastolic stretch mechanically opposes ventricular emptying",
        "explanation": "Incorrect. Increased preload increases rather than decreases stroke volume, and in this patient filling pressures are described as normal. The three changes that decrease stroke volume are decreased preload, increased afterload, and decreased contractility. This would be the correct answer if the question asked what happens to stroke volume when a supine posture raises central venous pressure."
      },
      {
        "text": "Decreased afterload, because a lower ejection resistance shortens the ventricular ejection period",
        "explanation": "Incorrect. Lowering afterload makes ejection easier and raises stroke volume; the direction is reversed here. A narrowed outflow valve raises, not lowers, the resistance to ejection. This would be the correct answer if the patient had received a potent arterial vasodilator and stroke volume had risen."
      },
      {
        "text": "Increased afterload, the resistance against which the ventricle must eject its blood",
        "explanation": "Correct. Afterload is defined as the resistance against which blood is ejected from the heart, expressed in mmHg. A severely stenotic aortic valve is the lecture's own example of an increased-afterload state: less blood leaves the heart per contraction, so stroke volume falls even though preload and contractility are normal. Because pulse pressure tracks stroke volume, this same patient will also show a narrowed pulse pressure. The three causes of a falling stroke volume are decreased preload, increased afterload, and decreased contractility."
      },
      {
        "text": "Increased contractility, because forceful shortening empties the ventricle prematurely each beat",
        "explanation": "Incorrect. Greater contractility increases the volume ejected per beat, so it raises stroke volume rather than lowering it; only decreased contractility lowers it. The vignette also states that contractile function is preserved. This would be the correct answer if the question asked what effect a positive inotropic state has on ejection."
      },
      {
        "text": "Decreased heart rate, because fewer beats reduce the volume ejected",
        "explanation": "Incorrect. Heart rate is the other term in CO = SV x HR and does not itself define stroke volume; a slower rate lowers cardiac output for a given stroke volume, not stroke volume itself. The question specifically asks about volume per beat. This would be the correct answer if the question asked what lowers cardiac output while stroke volume stays constant."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: stroke volume falls with decreased Preload, increased Afterload (e.g., aortic stenosis), or decreased Contractility. Preload is end-diastolic stretch; afterload is the resistance to ejection.",
    "pdfPage": 40,
    "pdfQuote": "Afterload is the resistance against which blood is ejected"
  },
  {
    "id": 16,
    "category": "Physiology: Poiseuille's Equation in Resuscitation",
    "questionText": "A 65-year-old man with long-standing peptic ulcer disease comes to the emergency department with nausea, melena, and near-syncope. He is lethargic, with cool and mottled extremities and delayed capillary refill. Temperature is 36.4 C, blood pressure is 90/40 mmHg, pulse is 130/min, respirations are 28/min, and oxygen saturation is 97% on room air. Packed red cells are ordered, but the transfusion is running slowly through a long, narrow peripheral catheter and he remains hypotensive after 20 minutes. The team wants the single change that will most increase the rate of volume delivery through the line. Which of the following would produce the greatest improvement in flow?",
    "options": [
      {
        "text": "Doubling the length of the intravenous catheter tubing used for the transfusion",
        "explanation": "Incorrect. Length appears in the numerator of the resistance expression, so doubling it doubles resistance and halves flow, worsening the very problem being solved. Shorter tubing, not longer, favors rapid infusion. This would be the correct answer only if the goal were to slow the infusion deliberately."
      },
      {
        "text": "Doubling the driving pressure generated by the infusion pump attached to the line",
        "explanation": "Incorrect. Flow is directly proportional to the pressure gradient, so this only doubles flow, far less than the radius maneuver achieves. The lecturer also noted a practical hazard: driving transfused blood at high pressure risks rupturing the red cells. This would be the correct answer if the catheter diameter could not be changed and a modest twofold gain were acceptable."
      },
      {
        "text": "Placing a second catheter of identical diameter and length in the other antecubital fossa",
        "explanation": "Incorrect. Two identical lines in parallel roughly double total flow, which again is far less than the fourth-power gain from widening a single line. It also doubles the procedural burden for the same modest benefit. This would be the correct answer if only small-bore catheters were available and no larger cannula could be placed."
      },
      {
        "text": "Warming the transfused blood to body temperature to lower its effective viscosity by half",
        "explanation": "Incorrect. Viscosity sits in the denominator of the flow equation, so halving it would double flow, but that is still only a twofold change and the assumption that warming halves blood viscosity is not something this lecture supports. Radius remains the dominant lever. This would be the correct answer if the question asked which intervention prevents hypothermia during massive transfusion."
      },
      {
        "text": "Doubling the internal diameter of the intravenous catheter used for this transfusion",
        "explanation": "Correct. This patient is in hypovolemic hemorrhagic shock and needs volume delivered fast. By Poiseuille's equation, flow is proportional to the fourth power of the radius, so doubling the diameter increases flow 16-fold, dwarfing the twofold gains from doubling pressure, adding a second identical line, or halving viscosity. Length changes are also only linear. This is precisely why large-bore, short cannulas are used for resuscitation."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: in resuscitation, a short large-bore catheter beats a pressure bag. Doubling catheter diameter gives 16 times the flow; doubling pressure or adding a second line gives only 2 times.",
    "pdfPage": 22,
    "pdfQuote": "Doubling the diameter of the intravenous catheter"
  },
  {
    "id": 17,
    "category": "Physiology: Hemodynamics of Decompensated Heart Failure",
    "questionText": "A 68-year-old man presents with two weeks of worsening exertional dyspnea, orthopnea requiring three pillows, and progressive bilateral leg swelling. He reports vague chest discomfort but no fever or cough. Blood pressure is 96/62 mmHg, pulse is 108/min, respirations are 24/min, and oxygen saturation is 92% on room air. Examination reveals distended neck veins, cool extremities, bibasilar crackles, and pitting edema to the mid-shin. Measured cardiac output is reduced and urine output has fallen. Which of the following parameters is most likely increased in this patient?",
    "options": [
      {
        "text": "Total peripheral resistance, driven by neurohormonal vasoconstriction that defends arterial pressure",
        "explanation": "Correct. When the pump fails, cardiac output falls and less blood reaches the tissues, including the kidneys. The resulting fall in renal perfusion, along with reduced baroreceptor stretch, activates the renin-angiotensin system and produces systemic vasoconstriction. Since blood pressure equals cardiac output times total peripheral resistance, this compensatory rise in resistance is what defends arterial pressure in the face of a falling output, and it explains the cool extremities on examination. The cost is a further increase in afterload on an already failing ventricle."
      },
      {
        "text": "Renal arterial perfusion, because the kidneys autoregulate their own inflow tightly",
        "explanation": "Incorrect. Autoregulation buffers moderate changes but cannot maintain renal inflow when cardiac output falls substantially; the lecture specifically described decreased renal perfusion as a consequence of decompensated failure. The falling urine output in this patient is consistent with that. This would be the correct answer if cardiac output were preserved and only mean arterial pressure had shifted slightly."
      },
      {
        "text": "Glomerular filtration rate, from a higher hydrostatic pressure across the glomerulus",
        "explanation": "Incorrect. Reduced renal perfusion lowers rather than raises glomerular filtration in this setting, which is part of the cardiorenal interaction the lecturer highlighted. A rising filtration rate would be inconsistent with the falling urine output described. This would be the correct answer if renal blood flow were increased rather than decreased."
      },
      {
        "text": "Stroke volume, because markedly raised ventricular filling pressures augment ejection",
        "explanation": "Incorrect. Although filling pressures are indeed high, decompensated failure is characterized by a reduced stroke volume because contractility is impaired and afterload is elevated; volume overload does not translate into greater ejection here. The vignette states cardiac output is reduced. This would be the correct answer in a normal heart where increased venous return raised end-diastolic stretch."
      },
      {
        "text": "Arterial compliance, because chronic volume overload progressively distends the aorta",
        "explanation": "Incorrect. Compliance is a structural property of the arterial wall that is not improved by volume overload, and nothing in this presentation suggests increased distensibility. Compliance changes are the province of aging and atherosclerosis in this lecture. This would be the correct answer if the question asked which property is lost as arteries stiffen with age."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: in decompensated heart failure, cardiac output falls, renal perfusion and baroreceptor stretch fall, the renin-angiotensin system activates, and total peripheral resistance rises.",
    "pdfPage": 18,
    "pdfQuote": "What most likely increase in a patient with"
  },
  {
    "id": 18,
    "category": "Physiology: Resistance and Ischemia",
    "questionText": "A 58-year-old man with hypertension and a 30 pack-year smoking history reports six weeks of substernal pressure that appears reproducibly after climbing two flights of stairs and resolves with rest. Blood pressure is 138/84 mmHg, pulse is 76/min, and the cardiac examination is unremarkable. Coronary angiography demonstrates a discrete 95% narrowing in the proximal left anterior descending artery with a normal-caliber vessel beyond it. Aortic root pressure is normal throughout the study. A stent is deployed and the luminal caliber is restored. Which of the following best explains the reduced myocardial perfusion before the intervention?",
    "options": [
      {
        "text": "Resistance across the narrowed segment has risen, and flow falls as resistance rises",
        "explanation": "Correct. Applying Ohm's law to the circulation, Q = delta P / R, so with a normal aortic driving pressure the only way distal flow can fall is for resistance to rise. The 95% narrowing raises resistance steeply because resistance varies inversely with the fourth power of the radius, so even a small reduction in luminal radius produces a large resistance penalty. Reduced flow to myocardium is by definition ischemia, and if it is severe or prolonged it can progress to infarction. Stenting restores the radius, drops resistance, and returns flow toward normal."
      },
      {
        "text": "The driving pressure gradient has reversed, so blood now flows retrograde within the vessel",
        "explanation": "Incorrect. Flow always proceeds from higher to lower pressure, and aortic root pressure remained normal and well above distal coronary pressure throughout. A stenosis reduces flow by adding resistance, not by reversing the gradient. This would be the correct answer if a connection had been created that made distal pressure exceed proximal pressure."
      },
      {
        "text": "Blood viscosity has risen within the stenosis, reducing flow independently of the resistance",
        "explanation": "Incorrect. Viscosity is a property of the circulating blood as a whole and does not change as blood passes through a focal narrowing; moreover, viscosity is not independent of resistance, it is one of the terms that determines it. Nothing here suggests a change in red cell mass. This would be the correct answer if the patient had a markedly elevated hematocrit causing a generalized reduction in flow."
      },
      {
        "text": "Total cross-sectional area has increased at the stenosis, lowering velocity and therefore flow",
        "explanation": "Incorrect. A stenosis decreases cross-sectional area, which by v = Q/A actually increases velocity through the narrowed segment. In addition, velocity and flow are distinct quantities, and a change in local velocity does not by itself set flow. This would be the correct answer if the question described the capillary bed, where the largest total area produces the lowest velocity."
      },
      {
        "text": "Aortic compliance has fallen, so less blood is delivered in diastole",
        "explanation": "Incorrect. Aortic compliance influences pulse pressure and the maintenance of diastolic pressure, but the angiogram identifies a discrete fixed epicardial obstruction as the lesion, and aortic root pressure was normal. Attributing the finding to compliance ignores the demonstrated stenosis. This would be the correct answer if imaging showed a diffusely calcified non-distensible aorta with normal coronary arteries."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: a coronary stenosis raises resistance, and since Q = delta P / R, flow falls. Reduced flow is ischemia, and if severe enough it progresses to infarction.",
    "pdfPage": 16,
    "pdfQuote": "Ischemia"
  },
  {
    "id": 19,
    "category": "Physiology: Narrow Pulse Pressure",
    "questionText": "A 74-year-old man reports six months of exertional dyspnea and two episodes of syncope while walking uphill. He has no orthopnea and no leg swelling. Blood pressure is 108/92 mmHg, pulse is 72/min and small in volume with a delayed upstroke, respirations are 16/min, and he is afebrile. Cardiac auscultation reveals a harsh crescendo-decrescendo systolic murmur at the right upper sternal border that radiates to both carotid arteries. Echocardiography confirms a severely narrowed, calcified aortic valve with preserved ejection fraction. Which of the following best explains his pulse pressure of 16 mmHg?",
    "options": [
      {
        "text": "Increased arterial compliance permitting the aorta to absorb more of the ejected volume",
        "explanation": "Incorrect. Arterial compliance falls rather than rises in a 74-year-old with calcific vascular disease, and in any case the dominant abnormality here is the obstruction at the valve. Compliance is a determinant of pulse pressure but is not the operative one in this vignette. This would be the correct answer if the question described an unusually distensible aorta in a young patient."
      },
      {
        "text": "Increased central venous pressure raising preload and end-diastolic ventricular volume",
        "explanation": "Incorrect. Raising central venous pressure increases preload and stroke volume and therefore widens rather than narrows the pulse pressure, which is exactly what happens when a patient lies down. This patient also has no neck vein distention or edema. This would be the correct answer if the question asked why pulse pressure rises on moving from standing to supine."
      },
      {
        "text": "Reduced stroke volume across the obstructed left ventricular outflow tract",
        "explanation": "Correct. Pulse pressure is systolic minus diastolic pressure, normally 30 to 40 mmHg, and its magnitude reflects the volume ejected on a single beat. A severely stenotic aortic valve raises afterload, the resistance against which blood is ejected, so less blood leaves the ventricle with each contraction. A smaller ejected volume produces a smaller pressure excursion in the aorta, giving the narrow 16 mmHg pulse pressure and the small, slow-rising pulse felt at the bedside. Aortic stenosis is the lecture's prototypical low-pulse-pressure condition."
      },
      {
        "text": "Increased speed of ejection of the stroke volume into the proximal ascending aorta",
        "explanation": "Incorrect. Speed of ejection is one of the three determinants of pulse pressure, but a faster ejection widens the pulse pressure, and a fixed valvular obstruction slows ejection rather than accelerating it, which is why the upstroke is delayed. The direction is wrong. This would be the correct answer if the question described a hyperdynamic circulation with rapid ventricular ejection."
      },
      {
        "text": "Reduced total peripheral resistance lowering the diastolic pressure disproportionately",
        "explanation": "Incorrect. A fall in peripheral resistance would drop diastolic pressure and widen, not narrow, the pulse pressure. This patient's diastolic pressure of 92 mmHg is in fact relatively high, arguing against low resistance. This would be the correct answer if the patient were vasodilated with a diastolic pressure of 40 mmHg and a wide pulse pressure."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: aortic stenosis raises afterload, which lowers stroke volume, which narrows the pulse pressure. Pulse pressure is set by stroke volume, speed of ejection, and arterial compliance.",
    "pdfPage": 31,
    "pdfQuote": "Factors implicated in the magnitude of the pulse pressure"
  },
  {
    "id": 20,
    "category": "Physiology: Arterial Compliance and Pulse Pressure",
    "questionText": "A 70-year-old man undergoes vascular imaging that demonstrates diffuse calcification and chronic inflammatory change throughout the abdominal aorta and iliac arteries. Bedside testing shows that his aorta accommodates far less volume for a given rise in transmural pressure than that of a healthy young control. He has no valvular murmur, echocardiography shows a normal stroke volume, and central venous pressure measured through an existing line is 4 mmHg. His ventricular ejection velocity on Doppler is normal. Which of the three determinants of pulse pressure has been primarily altered in this patient?",
    "options": [
      {
        "text": "Speed of ejection, which is slowed by the calcified wall",
        "explanation": "Incorrect. Ejection velocity is explicitly stated to be normal on Doppler in this patient, so this determinant is not the one that has changed. Speed of ejection is set by ventricular contraction, not by the properties of the aortic wall. This would be the correct answer if Doppler had shown a markedly prolonged and slowed ejection phase."
      },
      {
        "text": "Central venous pressure, which is raised by the loss of vessel wall elasticity in the aorta",
        "explanation": "Incorrect. His central venous pressure of 4 mmHg is normal, and central venous pressure is a venous variable reflecting the balance of right heart output and venous return, not arterial wall elasticity. It influences pulse pressure only indirectly through preload. This would be the correct answer if his measured venous pressure were elevated and preload had changed."
      },
      {
        "text": "Total peripheral resistance, which this lecture identifies as the principal setter of pulse pressure",
        "explanation": "Incorrect. Total peripheral resistance is a determinant of mean arterial pressure through the relationship that blood pressure equals cardiac output times resistance, but the three factors given for the magnitude of the pulse pressure are stroke volume, speed of ejection, and arterial compliance. Resistance is not on that list. This would be the correct answer if the question asked what determines mean arterial pressure at a given cardiac output."
      },
      {
        "text": "Arterial compliance, reduced by calcification and inflammation of the vessel wall",
        "explanation": "Correct. Compliance, also called distensibility, is the ability of the vessel to distend and increase volume as transmural pressure rises, and the bedside finding of less volume accepted per unit pressure is a direct measurement of reduced compliance. Of the three factors that set pulse pressure, stroke volume and ejection speed are both normal here, leaving compliance as the altered variable. In this lecture, a calcified and inflamed artery with compromised distensibility was presented as a cause of a decreased pulse pressure, alongside aortic stenosis. Note also that arterial stiffness and arterial thickness are separate concepts from compliance."
      },
      {
        "text": "Stroke volume, which falls because the aorta can no longer accommodate the ejected blood",
        "explanation": "Incorrect. Echocardiography in this patient shows a normal stroke volume, so that determinant is unchanged. Stroke volume is set by preload, afterload, and contractility, not by the storage capacity of the aorta. This would be the correct answer if the same patient also had a severely stenotic aortic valve reducing ejection."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: the three determinants of pulse pressure are stroke volume, speed of ejection, and arterial compliance. In this lecture, reduced compliance from arterial calcification was given as a cause of a decreased pulse pressure.",
    "pdfPage": 31,
    "pdfQuote": "3. Arterial compliance (Stretch-distensibility)"
  },
  {
    "id": 21,
    "category": "Physiology: Wide Pulse Pressure",
    "questionText": "A 32-year-old woman reports three months of heat intolerance, a 7 kg unintentional weight loss despite a good appetite, palpitations, and difficulty sleeping. Blood pressure is 152/62 mmHg, pulse is 118/min and regular, respirations are 18/min, and temperature is 37.4 C. Examination shows warm moist skin, a fine tremor of the outstretched hands, bounding peripheral pulses, and a hyperdynamic precordium with a soft flow murmur. Her calculated pulse pressure is 90 mmHg. Which of the following best explains this finding as presented in the lecture?",
    "options": [
      {
        "text": "A fall in stroke volume with preserved arterial compliance widening the pressure difference",
        "explanation": "Incorrect. A falling stroke volume narrows the pulse pressure, as in aortic stenosis, rather than widening it; the direction is reversed. Her bounding pulses and hyperdynamic precordium point to a high-output rather than a low-output state. This would be the correct answer if she had a small-volume pulse and a pulse pressure of 16 mmHg."
      },
      {
        "text": "A rise in blood pressure with increased stroke volume, which widens the pulse pressure",
        "explanation": "Correct. This lecture presented hyperthyroidism as its example of an increased pulse pressure, on the basis that blood pressure rises and the pulse pressure rises with it. The hyperdynamic circulation produces a larger stroke volume ejected rapidly into the aorta, and since pulse pressure reflects the volume ejected on a single beat, the systolic-to-diastolic excursion widens to 90 mmHg. The bounding pulses at the bedside are the palpable expression of that large pressure excursion. Normal pulse pressure is only 30 to 40 mmHg."
      },
      {
        "text": "An obstruction of the left ventricular outflow tract that prolongs the ejection phase",
        "explanation": "Incorrect. Outflow obstruction reduces stroke volume and narrows the pulse pressure, producing a small, slow-rising pulse rather than the bounding pulses described. Her murmur is a soft flow murmur, not the harsh radiating murmur of a fixed obstruction. This would be the correct answer if she were a 74-year-old with syncope and a pulse pressure of 16 mmHg."
      },
      {
        "text": "A rise in central venous pressure secondary to impaired right ventricular emptying",
        "explanation": "Incorrect. Although raising central venous pressure does increase preload, stroke volume, and pulse pressure, nothing in this vignette suggests venous congestion, and the mechanism the lecture attaches to hyperthyroidism is a rise in blood pressure. There are no distended neck veins or peripheral edema. This would be the correct answer if the question asked why lying down raises pulse pressure."
      },
      {
        "text": "A loss of the one-way venous valves that normally limit the hydrostatic column in the legs",
        "explanation": "Incorrect. Venous valves and the skeletal muscle pump govern venous pressure in dependent limbs during standing; they have no role in setting the arterial pulse pressure. Confusing these two topics mixes the venous and arterial sides of the circulation. This would be the correct answer if the question asked why venous pressure at the foot stays below about 30 mmHg while walking."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: low pulse pressure suggests aortic stenosis (low stroke volume) or reduced arterial compliance; high pulse pressure was taught here with hyperthyroidism, where blood pressure rises.",
    "pdfPage": 31,
    "pdfQuote": "Pulse Pressure during Pathological"
  },
  {
    "id": 22,
    "category": "Physiology: Posture, Preload, and Pulse Pressure",
    "questionText": "A healthy 26-year-old volunteer participates in a physiology laboratory exercise. After standing quietly for five minutes, her blood pressure is 118/80 mmHg and her pulse is 78/min. She then lies supine for five minutes, and repeat measurement shows 124/72 mmHg with a pulse of 66/min. Her pulse pressure has therefore risen from 38 to 52 mmHg. She has no cardiac history, takes no medications, and her physical examination is normal. Which of the following best explains the increase in her pulse pressure on lying down?",
    "options": [
      {
        "text": "Gravity increases the hydrostatic column in the legs, raising the venous pressure at the ankle",
        "explanation": "Incorrect. This describes what happens on standing, not on lying down; recumbency abolishes the dependent hydrostatic column rather than creating it. It also describes a venous pressure at the foot, which is not what determines arterial pulse pressure. This would be the correct answer if the question asked why venous pressure in the feet approaches 90 mmHg during motionless standing."
      },
      {
        "text": "Arterial compliance improves when recumbent, allowing the aorta to store more of the ejected blood",
        "explanation": "Incorrect. Compliance is a structural property of the arterial wall and does not change from minute to minute with posture; moreover, greater compliance would buffer the ejected volume and narrow rather than widen the pulse pressure. Posture acts on the venous side. This would be the correct answer if the comparison were between a young distensible aorta and an elderly calcified one."
      },
      {
        "text": "Total peripheral resistance falls on lying down, which lowers the diastolic pressure selectively",
        "explanation": "Incorrect. Although her diastolic pressure did fall, attributing the change to a primary drop in resistance ignores the simultaneous rise in systolic pressure, which points to a larger ejected volume. The lecture attributed this posture effect to venous filling, not to arteriolar tone. This would be the correct answer if only diastolic pressure had fallen with systolic pressure unchanged."
      },
      {
        "text": "Heart rate slows on lying down, so each beat is preceded by a longer diastolic filling interval",
        "explanation": "Incorrect. Her heart rate did fall, and a longer filling interval is a real contributor to ventricular filling, but the mechanism emphasized in this lecture is the direct rise in central venous pressure when the gravitational gradient is removed. Rate alone is not the explanation offered for the pulse pressure change. This would be the correct answer if the question asked what happens to cardiac output when heart rate falls at fixed stroke volume."
      },
      {
        "text": "Central venous pressure rises, which increases end-diastolic volume and therefore the stroke volume",
        "explanation": "Correct. When standing, venous return from the dependent body must work against gravity, so central venous pressure is relatively low. Lying down removes that gravitational penalty and raises central venous pressure, which raises end-diastolic volume, that is, the preload. Increased preload increases stroke volume, and because pulse pressure reflects the volume ejected on a single beat, the pulse pressure rises. The lecture used this as its example that pulse pressure can change physiologically without any disease being present."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: lying down raises central venous pressure, which raises end-diastolic volume (preload), which raises stroke volume, which raises pulse pressure. No disease required.",
    "pdfPage": 32,
    "pdfQuote": "Standing to Supine Position"
  },
  {
    "id": 23,
    "category": "Physiology: Hydrostatic Pressure and the Muscle Pump",
    "questionText": "A 45-year-old ceremonial guard stands rigidly at attention for two hours. By the end of the shift he notes tight, aching calves and visible ankle swelling, and the superficial veins of his lower legs are distended. A research team measuring saphenous vein pressure at the ankle records approximately 90 mmHg while he stands motionless. When he is then asked to march in place, the same measured pressure falls to under 30 mmHg within a minute. His central venous pressure remains 3 mmHg throughout, and his blood pressure is 122/78 mmHg. Which of the following best explains the fall in venous pressure with marching?",
    "options": [
      {
        "text": "Standing recruits arteriolar dilation within the calf, which directly lowers the venous pressure",
        "explanation": "Incorrect. Arteriolar tone regulates inflow and resistance on the arterial side; it does not create or relieve the gravitational hydrostatic column that produces a 90 mmHg pressure at the ankle. The observed change tracked muscle activity, not vasodilation. This would be the correct answer if the question asked how flow to an exercising muscle rises fivefold at unchanged arterial pressure."
      },
      {
        "text": "Motionless standing increases blood viscosity in the dependent veins, raising the measured pressure",
        "explanation": "Incorrect. Viscosity is a property of the circulating blood and is not altered by posture or by standing still; the pressure recorded at the ankle reflects the weight of the column of blood between the heart and the foot. Viscosity affects resistance and flow, not hydrostatic pressure. This would be the correct answer if the patient had a substantially elevated red cell mass and reduced flow."
      },
      {
        "text": "Marching raises the central venous pressure, and that rise is transmitted backward into the leg veins",
        "explanation": "Incorrect. The vignette states that central venous pressure stayed at 3 mmHg, and in any case a rise in central pressure transmitted backward would raise, not lower, the pressure at the ankle. The effect works in the opposite direction. This would be the correct answer if the question asked why pulse pressure rises when a person lies down."
      },
      {
        "text": "Contracting leg muscles pump blood past one-way valves, breaking the hydrostatic column",
        "explanation": "Correct. The weight of the blood in the vessels generates a hydrostatic pressure that, in a standing adult, can reach about 95 mmHg in the veins of the feet, even though central venous pressure at the right atrium is near zero. If there were no one-way valves in the veins, that pressure would be sustained continuously. Contraction of the leg skeletal muscles propels blood upward past those valves, segmenting the column so that venous pressure at the foot ordinarily remains under about 30 mmHg. Standing motionless removes that pump, which is why the pressure and the dependent swelling both appeared."
      },
      {
        "text": "The one-way valves alone hold the column and are unaffected by any skeletal muscle activity",
        "explanation": "Incorrect. Valves are necessary but not sufficient: they prevent retrograde flow, yet without the skeletal muscle pump to move blood upward the column remains largely intact, which is exactly what happens during motionless standing. The two mechanisms work together. This would be the correct answer if venous pressure at the foot had stayed low during motionless standing."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: standing generates about 95 mmHg of hydrostatic pressure in the veins of the feet; the skeletal muscle pump working with one-way venous valves keeps it under about 30 mmHg.",
    "pdfPage": 35,
    "pdfQuote": "hydrostatic pressure in the veins of the feet can reach"
  },
  {
    "id": 24,
    "category": "Physiology: Cardiac Output in the Transplanted Heart",
    "questionText": "A 52-year-old man is 14 months out from orthotopic cardiac transplantation and is enrolled in a supervised exercise program. At rest his heart rate is 78/min, blood pressure is 124/76 mmHg, and cardiac output is 5.0 L/min. During graded treadmill exercise his cardiac output rises to 9.0 L/min, but his heart rate increases only to 88/min and does so with a noticeably delayed onset. Blood pressure and oxygen saturation remain stable throughout the test. Which of the following best explains the rise in his cardiac output?",
    "options": [
      {
        "text": "Total peripheral resistance rises during exercise, and this rise is what drives the increased output",
        "explanation": "Incorrect. Resistance in exercising muscle falls rather than rises, and in any case resistance and output are related through blood pressure, not causally linked such that higher resistance produces higher output. Raising resistance would increase afterload and tend to reduce stroke volume. This would be the correct answer if the question asked what rises in decompensated heart failure to defend arterial pressure."
      },
      {
        "text": "Blood viscosity falls with exercise-induced hemodilution, and this alone nearly doubles the flow",
        "explanation": "Incorrect. Reduced viscosity does increase flow through Poiseuille's relationship, and it is the mechanism behind the high-output state of anemia, but nothing in this vignette suggests a change in red cell mass, and exercise does not produce that degree of hemodilution. The distinguishing feature here is the denervated heart. This would be the correct answer if the patient had chronic fatigue and a reduced red cell count."
      },
      {
        "text": "Stroke volume rises, because surgical denervation of the graft blunts the usual heart rate response to exercise",
        "explanation": "Correct. Cardiac output equals stroke volume times heart rate, so an output that nearly doubles with almost no change in rate must be driven by stroke volume. During transplantation the nervous supply to the heart is modified, so the normal nerve-mediated tachycardia of exercise is largely unavailable and any rate change is slow and circulating-catecholamine dependent. The transplanted heart therefore meets the demand of exercise by increasing the volume ejected per beat instead. This is the direct contrast to normal exercise physiology, where heart rate does most of the work."
      },
      {
        "text": "Heart rate accounts for the change, because sympathetic reinnervation is reliably complete by one year",
        "explanation": "Incorrect. Even setting aside the question of reinnervation, the measured rate rose only from 78 to 88/min, which cannot account for an output that rose from 5.0 to 9.0 L/min. The numbers in the vignette exclude a rate-driven explanation. This would be the correct answer if his heart rate had climbed to roughly 140/min during the same test."
      },
      {
        "text": "Afterload rises sharply during exercise, and a higher afterload augments the ventricular ejection",
        "explanation": "Incorrect. Afterload is the resistance against which blood is ejected, and increasing it decreases rather than increases stroke volume, as seen in aortic stenosis. The direction of this reasoning is inverted. This would be the correct answer if the question asked what change lowers stroke volume in a patient with a severely narrowed aortic valve."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: exercise normally raises cardiac output by raising heart rate, but the denervated transplanted heart raises cardiac output by increasing stroke volume instead.",
    "pdfPage": 39,
    "pdfQuote": "Cardiac Transplantation"
  },
  {
    "id": 25,
    "category": "Physiology: Applying the Fick Principle",
    "questionText": "A 70-year-old man is evaluated for progressive exertional fatigue. His heart rate is 50/min and blood pressure is 118/72 mmHg. Right heart catheterization samples show a pulmonary vein oxygen content of 21 mL O2/100 mL and a pulmonary artery oxygen content of 6 mL O2/100 mL. A metabolic cart measures whole-body oxygen consumption at 300 mL/min. Echocardiography performed the same morning estimates his stroke volume at 40 mL. Which of the following is his cardiac output calculated by the Fick principle, and how does it compare with the mechanical calculation?",
    "options": [
      {
        "text": "1.4 L/min, which is lower than the value obtained from stroke volume and heart rate",
        "explanation": "Incorrect. This value would result from a mismatch in the units of oxygen content and consumption, and it also fails the internal consistency check against the mechanical calculation. When both routes are available they must agree. This would be the correct answer if the true arteriovenous difference were substantially wider than the sampled values indicate."
      },
      {
        "text": "2.0 L/min, which agrees with the value obtained from stroke volume and heart rate",
        "explanation": "Correct. The Fick principle gives cardiac output as oxygen consumption divided by the arteriovenous oxygen content difference. Here the difference is 21 minus 6, or 15 mL O2 per 100 mL, which is 0.15 mL O2 per mL of blood, so 300 divided by 0.15 gives 2,000 mL/min, or 2.0 L/min. The mechanical calculation gives the same result: 40 mL times 50 beats/min equals 2,000 mL/min. Remember that in this sampling the pulmonary vein carries the arterial value and the pulmonary artery carries the venous value, and note that 2.0 L/min is well below the normal cardiac output of about 5 L/min."
      },
      {
        "text": "5.0 L/min, the normal value, which shows that the two methods cannot be compared here",
        "explanation": "Incorrect. Assuming a normal output rather than computing one ignores the data provided, and both available methods in fact yield the same abnormal number. The two methods are designed to be interchangeable. This would be the correct answer if his stroke volume were 100 mL at a rate of 50/min with a proportionally narrower arteriovenous difference."
      },
      {
        "text": "4.0 L/min, which is twice the value obtained from stroke volume and heart rate",
        "explanation": "Incorrect. A twofold discrepancy between the two methods should immediately signal an arithmetic error, since in the same patient at the same time they must agree. Doubling here would come from mishandling the factor of 100 in the oxygen content units. This would be the correct answer if oxygen consumption were 600 mL/min with the same content difference."
      },
      {
        "text": "20 L/min, because oxygen content must be expressed per liter of blood rather than per deciliter",
        "explanation": "Incorrect. The oxygen contents are reported per 100 mL, and failing to convert them produces exactly this hundredfold-scaled error; 20 L/min is also physiologically implausible in a fatigued 70-year-old with a heart rate of 50/min. Unit discipline is the whole trick of this calculation. This would be the correct answer only if the content difference were genuinely 15 mL O2 per liter of blood."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: CO = VO2 / (arterial O2 - venous O2). With VO2 300 mL/min and a 15 mL/100 mL difference, CO = 2 L/min, matching SV x HR of 40 x 50. Both methods must agree.",
    "pdfPage": 38,
    "pdfQuote": "Pulmonary artery O2 content: 6 mL O2/100mL"
  },
  {
    "id": 26,
    "category": "Physiology: Integrated Calculation of Systemic Vascular Resistance",
    "questionText": "A 64-year-old woman is seen in the office after a hospitalization for diabetic ketoacidosis. Records from the time of admission document a heart rate of 55/min, respiratory rate of 27/min, and blood pressure of 156/85 mmHg. Echocardiography at that time showed a right atrial pressure of 1 mmHg, and venous Doppler demonstrated poor perfusion of both the upper and lower extremities. Arterial blood gas showed an oxygen content of 24 mL O2/100 mL and venous blood gas an oxygen content of 18 mL O2/100 mL, with a measured metabolic oxygen consumption of 150 mL/min. Which of the following best approximates her systemic vascular resistance at admission?",
    "options": [
      {
        "text": "About 43 mmHg per L/min, using a cardiac output of 2.5 L/min and a mean pressure near 109",
        "explanation": "Correct. First apply the Fick principle: the arteriovenous oxygen difference is 24 minus 18, which is 6 mL O2 per 100 mL, so cardiac output equals 150 divided by 0.06, giving 2,500 mL/min or 2.5 L/min. Next compute mean arterial pressure as (2 x 85 + 156) / 3, which is approximately 109 mmHg. Finally, systemic vascular resistance equals mean arterial pressure minus central venous pressure, divided by cardiac output, so (109 minus 1) divided by 2.5 gives roughly 43 mmHg per L/min. The markedly reduced output with high resistance fits the poor extremity perfusion documented on Doppler."
      },
      {
        "text": "About 63 mmHg per L/min, using the systolic pressure of 156 mmHg as the driving pressure head",
        "explanation": "Incorrect. Substituting systolic pressure for mean arterial pressure substantially overstates the perfusion pressure, because mean pressure is a time-weighted average that lies closer to diastolic. The correct term in the resistance equation is mean arterial pressure. This would be the correct answer if resistance were defined using peak systolic rather than mean pressure."
      },
      {
        "text": "About 4.3 mmHg per L/min, using a cardiac output of 25 L/min from the Fick calculation",
        "explanation": "Incorrect. A cardiac output of 25 L/min comes from failing to convert oxygen content from per 100 mL to per mL, a tenfold-scale error, and such an output is physiologically impossible in a patient with poor extremity perfusion. Unit conversion is the pivotal step in this calculation. This would be the correct answer only if the arteriovenous difference were 6 mL O2 per liter of blood."
      },
      {
        "text": "About 109 mmHg per L/min, using the mean arterial pressure divided by a cardiac output of 1 L/min",
        "explanation": "Incorrect. This substitutes the right atrial pressure of 1 mmHg for the cardiac output in the denominator, mixing up the two numbers in the equation. Right atrial pressure is the central venous pressure that gets subtracted in the numerator, not the flow term. This would be the correct answer if her cardiac output had actually been measured at 1 L/min."
      },
      {
        "text": "About 22 mmHg per L/min, using the mean arterial pressure with an assumed normal output of 5 L/min",
        "explanation": "Incorrect. Assuming a normal cardiac output discards the Fick data that the vignette supplies specifically so it can be calculated, and her output is in fact only half of normal. Using 5 L/min halves the computed resistance and would mask the abnormality. This would be the correct answer if her measured oxygen consumption had been 300 mL/min with the same content difference."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: the full chain is Fick for cardiac output, then MAP = (2 x diastolic + systolic)/3, then SVR = (MAP - CVP) / CO. TPR and SVR are the same quantity.",
    "pdfPage": 42,
    "pdfQuote": "systemic vascular resistance at the time of"
  },
  {
    "id": 27,
    "category": "Physiology: Quantitative Velocity Comparison",
    "questionText": "A 40-year-old man undergoing a research protocol has a measured cardiac output of 5.5 L/min. Imaging estimates the diameter of his thoracic aorta at 20 mm, and published morphometric data are used to estimate the total cross-sectional area of his systemic capillary bed at 2,500 square cm. He is hemodynamically stable, with a blood pressure of 118/76 mmHg and a heart rate of 70/min. The investigator asks the student to compare the velocity of blood flow in the aorta with that in the systemic capillaries. Which of the following best describes the comparison?",
    "options": [
      {
        "text": "Velocity is roughly 200 times greater in the aorta, because its radius is about 200-fold smaller",
        "explanation": "Incorrect. The comparison is driven by total cross-sectional area, not by a ratio of radii, and area scales with the square of the radius. Using radii directly badly underestimates the difference. This would be the correct answer if velocity varied inversely with radius rather than with area."
      },
      {
        "text": "Velocity is roughly equal in the two beds, because flow is constant throughout the whole circuit",
        "explanation": "Incorrect. Flow is indeed constant throughout a series circuit, and that is precisely why velocity cannot be: velocity is flow divided by area, so where area changes, velocity must change. Confusing constant flow with constant velocity is the core misconception the lecture targeted. This would be the correct answer if the cross-sectional areas of the two beds were the same."
      },
      {
        "text": "Velocity is roughly 8 times greater in the capillaries, whose total area is 2,500 square cm",
        "explanation": "Incorrect. The larger area belongs to the capillaries, and because velocity varies inversely with area, the larger area gives the lower velocity, not the higher. This option gets the direction exactly backwards. This would be the correct answer if velocity were directly rather than inversely proportional to cross-sectional area."
      },
      {
        "text": "Velocity is roughly 800 times greater in the aorta, whose total area is only about 3.14 square cm",
        "explanation": "Correct. Aortic radius is half the 20 mm diameter, that is, 10 mm or 1 cm, so aortic area is pi r squared, which is about 3.14 square cm. Aortic velocity is then 5.5 L/min divided by 3.14 square cm, which works out to roughly 1,752 cm/min, while capillary velocity is 5.5 L/min divided by 2,500 square cm, or about 2.2 cm/min. The ratio is on the order of 800 to 1. Note the trap in the stem: the aorta is given as a diameter and must be converted to an area, whereas the capillary value is already a total area."
      },
      {
        "text": "Velocity is roughly 800 times greater in the capillaries, because area and velocity increase together",
        "explanation": "Incorrect. The magnitude here is right but the direction is wrong: velocity equals flow divided by area, so the two vary inversely, and the bed with the vastly larger total area has the lowest velocity in the entire circulation. This would be the correct answer if velocity were the product rather than the quotient of flow and area."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: convert diameter to radius, then area = pi r squared, then v = Q/A. Aortic velocity is about 1,752 cm/min versus about 2.2 cm/min in the capillaries at the same 5.5 L/min flow.",
    "pdfPage": 11,
    "pdfQuote": "Aorta: Velocity = Q/A = 5.5L/min / 3.14 = 1752cm/min"
  },
  {
    "id": 28,
    "category": "Physiology: Compliance, Stiffness, and Wall Thickness",
    "questionText": "A 78-year-old man with no history of hypertension or atherosclerotic disease undergoes research testing of aortic mechanics. For each stepwise increase in transmural pressure, his aorta accepts substantially less additional volume than that of a 25-year-old control. Ultrasound measurement of his aortic wall shows a thickness within the normal range for his age and body size, and there is no plaque or calcification. His blood pressure is 128/78 mmHg with a pulse pressure of 50 mmHg. Which of the following statements best characterizes the change in his aorta?",
    "options": [
      {
        "text": "He has increased arterial thickness, and thickness and stiffness necessarily change together",
        "explanation": "Incorrect. His measured wall thickness is normal, and the lecture explicitly warned that these are separate concepts: a vessel can have increased wall thickness without arterial stiffness, and the reverse is also true. Yoking them together is the misconception the yellow warning box was written to prevent. This would be the correct answer if imaging had demonstrated a thickened aortic wall."
      },
      {
        "text": "He has increased arterial compliance, which is the expected consequence of the normal aging process",
        "explanation": "Incorrect. The direction is inverted: accepting less volume per unit rise in pressure is decreased, not increased, compliance. Aging is associated with loss of the elastic property, not with greater distensibility. This would be the correct answer if his aorta had accommodated more volume per pressure step than the young control."
      },
      {
        "text": "He has increased arterial stiffness with loss of compliance, independent of the wall thickness",
        "explanation": "Correct. Arterial compliance, also called distensibility, is the elastic property that lets an artery accommodate blood, and accepting less volume per unit of transmural pressure is by definition reduced compliance. Loss of that elastic property with aging is arterial stiffness, which the lecturer described as something that happens to everyone eventually, alongside stiff muscles. Crucially, stiffness is a distinct concept from arterial thickness, which describes how thick the wall is; his wall thickness is normal here. Keeping compliance, stiffness, and thickness separate is exactly the distinction the lecture drew."
      },
      {
        "text": "He has decreased wall tension, because tension always falls whenever a vessel becomes less elastic",
        "explanation": "Incorrect. Wall tension is governed by the Laplace relationship, in which tension equals transmural pressure times radius divided by twice the wall thickness; elasticity is not a term in that equation. There is no basis for concluding that tension has fallen. This would be the correct answer if the question described a segment whose radius had decreased at constant pressure and thickness."
      },
      {
        "text": "He has decreased transmural pressure, since a stiffer vessel transmits less of the pressure to its wall",
        "explanation": "Incorrect. Transmural pressure is the pressure difference across the wall and is set by the blood pressure inside relative to outside, not by how stiff the wall is; his blood pressure is in fact normal. Stiffness changes the volume response to a given pressure, not the pressure itself. This would be the correct answer if the question described a fall in arterial blood pressure."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: compliance (distensibility) is lost with aging, producing arterial stiffness. Arterial thickness is a separate concept, and a vessel can be thick without being stiff.",
    "pdfPage": 24,
    "pdfQuote": "Arterial Compliance"
  },
  {
    "id": 29,
    "category": "Physiology: Determinants of Total Peripheral Resistance",
    "questionText": "In a temperature-controlled research suite, a healthy volunteer is studied under two conditions. When the room is cooled, his measured total peripheral resistance rises and his mean arterial pressure increases modestly. In a separate arm of the study, local warming applied to one forearm markedly increases flow to that limb without changing systemic pressure. The investigators also record that infusing a circulating vasoconstrictor hormone reproduces the systemic effect of cold. Which structural element do all of these local and systemic influences act upon to change total peripheral resistance?",
    "options": [
      {
        "text": "The compliance of the large elastic arteries, which buffers each ejected stroke volume in systole",
        "explanation": "Incorrect. Compliance of the conduit arteries shapes the pulse pressure and stores energy during ejection, but it is not the site where resistance is regulated. Resistance is set by the narrow, muscular vessels downstream. This would be the correct answer if the question asked which property determines how much the pulse pressure widens for a given stroke volume."
      },
      {
        "text": "The adjustable radius of the arterioles, controlled by local and extrinsic factors",
        "explanation": "Correct. The primary determinant of total peripheral resistance is the adjustable arteriolar radius, and two categories of factors influence it: local, or intrinsic, control such as heat and cold, and extrinsic control such as sympathetic activity and circulating hormones. Because resistance varies inversely with the fourth power of the radius, small adjustments in arteriolar caliber produce very large changes in resistance and flow. That is why the arterioles are the major mechanism for changing blood flow in the cardiovascular system. Detailed regulation is developed further in the dedicated blood pressure lecture."
      },
      {
        "text": "The total cross-sectional area of the capillary bed, which is the largest in the whole circulation",
        "explanation": "Incorrect. The capillaries do have the largest total cross-sectional area, which is why velocity is lowest there, but they are nearly devoid of smooth muscle and cannot adjust their caliber to regulate resistance. Area governs velocity, not resistance control. This would be the correct answer if the question asked where blood velocity is slowest and exchange occurs."
      },
      {
        "text": "The one-way valves of the deep veins, which set the resistance encountered by the venous return",
        "explanation": "Incorrect. Venous valves prevent retrograde flow and, with the skeletal muscle pump, limit hydrostatic pressure in dependent limbs; they are not resistance regulators and they are on the low-pressure side of the circulation. Total peripheral resistance is an arteriolar phenomenon. This would be the correct answer if the question asked why venous pressure at the ankle falls during walking."
      },
      {
        "text": "The viscosity of the circulating blood, which is the main variable in Poiseuille's law equation",
        "explanation": "Incorrect. Viscosity is a genuine term in the resistance equation, but it is a property of the blood rather than a vessel structure, it cannot be adjusted regionally, and radius is the far more powerful variable because of its fourth-power dependence. Cold and local heat do not act by changing viscosity. This would be the correct answer if the question asked what changes when the red cell mass falls."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: the primary determinant of total peripheral resistance is the adjustable arteriolar radius, influenced by local (intrinsic) control such as heat and cold and extrinsic control such as sympathetic activity and hormones.",
    "pdfPage": 29,
    "pdfQuote": "The primary determinant of TPR is the adjustable"
  },
  {
    "id": 30,
    "category": "Physiology: Blood Pressure, Output, and Resistance",
    "questionText": "A 61-year-old man with 12 years of untreated hypertension is evaluated before elective surgery. Blood pressure is 168/104 mmHg on repeated measurement, pulse is 72/min, and respirations are 14/min. Echocardiography demonstrates a stroke volume of 70 mL and a cardiac output of 5.0 L/min, both within the normal range, with normal contractility. A previously placed central line reads a central venous pressure of 3 mmHg. His extremities are cool with intact pulses, and there is no murmur. Which of the following best explains his elevated arterial pressure?",
    "options": [
      {
        "text": "An increase in stroke volume, since blood pressure is the product of stroke volume and heart rate",
        "explanation": "Incorrect. Stroke volume times heart rate gives cardiac output, not blood pressure, and his stroke volume of 70 mL and rate of 72/min are both explicitly normal. The relationship that sets arterial pressure adds the resistance term. This would be the correct answer if the question had asked how cardiac output is derived from an echocardiogram."
      },
      {
        "text": "A rise in central venous pressure, which raises the pressure gradient across the whole circulation",
        "explanation": "Incorrect. His central venous pressure of 3 mmHg is normal, and raising the downstream pressure would narrow rather than widen the gradient across the systemic circuit. Central venous pressure is subtracted in the resistance equation, so a higher value would lower calculated resistance. This would be the correct answer if his catheter had shown a markedly elevated venous pressure with signs of congestion."
      },
      {
        "text": "An increase in blood viscosity, which the lecture identifies as the main determinant of arterial pressure",
        "explanation": "Incorrect. Viscosity is one input into vascular resistance through Poiseuille's equation, but it is not the principal determinant of arterial blood pressure, and nothing here suggests an elevated red cell mass. Radius, not viscosity, dominates the resistance term. This would be the correct answer if the patient had a very high hematocrit with sluggish flow."
      },
      {
        "text": "A fall in arterial compliance, which raises the mean pressure without altering vascular resistance",
        "explanation": "Incorrect. Reduced compliance is a determinant of pulse pressure in this lecture rather than of mean arterial pressure, and mean pressure is generated by the product of cardiac output and total peripheral resistance. His pulse pressure of 64 mmHg is not the abnormality being asked about. This would be the correct answer if the question asked which of the three determinants of pulse pressure had changed."
      },
      {
        "text": "An increase in total peripheral resistance, since pressure equals output times resistance",
        "explanation": "Correct. Blood pressure equals cardiac output multiplied by total peripheral resistance, so with a documented normal cardiac output of 5.0 L/min the elevated pressure must be produced by an elevated resistance. Working it through, mean arterial pressure is (2 x 104 + 168) / 3, or about 125 mmHg, so resistance equals (125 minus 3) divided by 5.0, giving roughly 24 mmHg per L/min. Because the primary determinant of total peripheral resistance is the adjustable arteriolar radius, this is fundamentally an arteriolar problem, and the cool extremities with intact pulses reflect that vasoconstriction."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: BP = CO x TPR. When cardiac output is normal but pressure is high, total peripheral resistance must be elevated, and its primary determinant is the arteriolar radius.",
    "pdfPage": 27,
    "pdfQuote": "Blood Pressure (BP): Cardiac Output x Total Peripheral Resistance"
  }
];

window.Test_CV16 = Test_CV16;
