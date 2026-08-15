const Test_CV40 = [
  {
    "id": 1,
    "category": "Cardiology: Shock Hemodynamics",
    "questionText": "A 62-year-old man in the intensive care unit is persistently hypotensive despite fluids. A pulmonary artery catheter is floated and the balloon is wedged in a distal pulmonary arterial branch. The wedged pressure records 6 mmHg while the central venous pressure is 18 mmHg. Cardiac output is low and the calculated systemic vascular resistance is high. Which statement best describes what the wedged measurement is telling the team about this patient?",
    "options": [
      {
        "text": "It reflects right atrial filling and shows that the right heart is underfilled",
        "explanation": "Incorrect. Right atrial filling is what the central venous pressure reports, and in this patient that value is elevated at 18 mmHg, not low. The wedge measurement is taken on the far side of the pulmonary circulation and reports a different chamber entirely. This would be the correct answer if the question had asked about the central venous pressure tracing."
      },
      {
        "text": "It reflects aortic root pressure and shows that afterload has collapsed",
        "explanation": "Incorrect. The wedge catheter never reaches the systemic arterial circulation, and this patient's calculated systemic vascular resistance is high rather than collapsed. A collapsed afterload would also be accompanied by warm skin and a wide pulse pressure. This would be the correct answer if the measurement described were an arterial line tracing in distributive shock."
      },
      {
        "text": "It reflects left atrial pressure and shows blood is not reaching the left heart",
        "explanation": "Correct. The post-capillary wedge pressure measures pressure in the left atrium, obtained with a Swan-Ganz catheter. A low wedge pressure paired with a high central venous pressure places the obstruction before the left atrium, so blood dams up behind the right heart while the left atrium stays underfilled. That is the signature of pulmonary obstructive shock such as a pulmonary embolism or tension pneumothorax. Cardiac output falls because left ventricular preload is lost, and systemic vascular resistance rises reflexively."
      },
      {
        "text": "It reflects pulmonary arterial systolic pressure during right ventricular ejection",
        "explanation": "Incorrect. Wedging the balloon deliberately occludes the branch so that the catheter tip sees the downstream, left-sided pressure rather than pulmonary arterial pressure. Pulmonary arterial systolic pressure would be read with the balloon deflated. This would be the correct answer if the question had described the tracing obtained before the balloon was inflated."
      },
      {
        "text": "It reflects mean systemic filling pressure and indicates total body volume depletion",
        "explanation": "Incorrect. Volume depletion lowers both filling pressures together, yet this patient's central venous pressure is markedly elevated. A discordant pattern of high right-sided and low left-sided pressure points to a mechanical block between them. This would be the correct answer if both the wedge pressure and the central venous pressure were low, as in hemorrhage."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: post-capillary wedge pressure reads left atrial pressure. A low wedge with a high CVP places the obstruction before the left atrium; a high wedge places it after the left atrium or around the whole heart.",
    "pdfPage": 5,
    "pdfQuote": "Measurement of the pressure in the Left Atrium"
  },
  {
    "id": 2,
    "category": "Physiology: Vascular Resistance",
    "questionText": "During a physiology demonstration an arteriole is modeled as a rigid cylindrical tube. Sympathetic stimulation is applied and the internal radius of the vessel falls to half of its baseline value. Vessel length, blood viscosity, and the driving pressure across the segment are all held constant. Which statement best describes what happens to resistance through that vessel?",
    "options": [
      {
        "text": "Resistance rises roughly sixteen-fold, because radius is raised to the fourth power",
        "explanation": "Correct. Poiseuille's relationship makes resistance proportional to 8Ln divided by radius to the fourth power, so resistance varies inversely with the fourth power of the radius. Halving the radius therefore multiplies resistance by two to the fourth power, which is sixteen. This is why the lecturer stresses that radius, not length and not viscosity, is the variable the body actually uses to control systemic vascular resistance. It is also why baroreceptor-driven arteriolar vasoconstriction is such a powerful compensatory mechanism in shock."
      },
      {
        "text": "Resistance rises roughly two-fold, because resistance varies directly with the radius",
        "explanation": "Incorrect. Resistance varies inversely, not directly, with the radius, and the exponent is four rather than one. A linear relationship would make vasoconstriction a far weaker blood-pressure lever than it actually is. This would be the correct answer if resistance depended on vessel length, which does scale linearly."
      },
      {
        "text": "Resistance rises roughly four-fold, because resistance varies with the square of radius",
        "explanation": "Incorrect. Squaring is the common student error here; the exponent in Poiseuille's law is four. Cross-sectional area scales with the square of the radius, but resistance does not. This would be the correct answer if the question had asked how the cross-sectional area of the vessel changed."
      },
      {
        "text": "Resistance falls by half, because a narrower tube accelerates flow and lowers resistance",
        "explanation": "Incorrect. Velocity does increase in a narrowed tube, but resistance to flow rises steeply rather than falling. Confusing velocity with resistance is precisely the mistake that makes the SVR and SVO2 relationship counterintuitive later in this lecture. This would be the correct answer if the vessel had dilated instead of constricted."
      },
      {
        "text": "Resistance is unchanged, because vessel length and blood viscosity were both held constant",
        "explanation": "Incorrect. Length and viscosity are two of the three variables, but the third, radius, changed and dominates the equation. The lecturer notes that length is essentially fixed and viscosity shifts only modestly, for example with anemia. This would be the correct answer if the radius had also been held constant."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: resistance is inversely proportional to the fourth power of vessel radius, so halving radius raises resistance about sixteen-fold. Radius is the body's main lever on systemic vascular resistance.",
    "pdfPage": 7,
    "pdfQuote": "Radius has the largest effect on TPR"
  },
  {
    "id": 3,
    "category": "Physiology: Oxygen Delivery and Extraction",
    "questionText": "A critically ill patient has venous oxygen saturation measured serially from a central catheter. Over six hours the value falls from 70 percent to 52 percent while the arterial oxygen saturation remains 98 percent on the same fraction of inspired oxygen. Hemoglobin is unchanged. Which change in the tissues does this trend best indicate?",
    "options": [
      {
        "text": "The tissues are extracting less oxygen because capillary transit time has shortened",
        "explanation": "Incorrect. Shorter transit time means less time for gas exchange, so venous saturation would rise rather than fall. That pattern belongs to the vasodilated, low-resistance state of distributive shock. This would be the correct answer if the venous saturation had climbed above the normal range instead."
      },
      {
        "text": "Arterial oxygen content has fallen because of worsening intrapulmonary shunting",
        "explanation": "Incorrect. Arterial saturation is stated to be a steady 98 percent and hemoglobin is unchanged, so arterial oxygen content has not fallen. The change is occurring on the venous side of the circulation. This would be the correct answer if arterial saturation had dropped in parallel with the venous value."
      },
      {
        "text": "The tissues have stopped consuming oxygen because of mitochondrial uncoupling",
        "explanation": "Incorrect. Tissues that stop consuming oxygen leave it in the blood, which raises rather than lowers the venous saturation. A falling venous saturation means more oxygen is being removed, not less. This would be the correct answer if venous saturation had risen while lactate also climbed."
      },
      {
        "text": "Oxygen delivery is unchanged and the fall reflects a laboratory sampling artifact",
        "explanation": "Incorrect. A progressive change measured serially over six hours in the same catheter is a physiologic trend, not an artifact. Venous oxygen saturation is used precisely because it tracks the balance of delivery and consumption. This would be the correct answer if a single isolated value were discordant with everything else."
      },
      {
        "text": "The tissues are extracting more oxygen from each unit of blood that reaches them",
        "explanation": "Correct. Venous oxygen saturation measures what is left in the blood returning to the right heart, so a falling value means the tissues removed more oxygen on the way through. That happens when delivery drops and vasoconstriction slows capillary flow, lengthening transit time and allowing more complete extraction. This is the pattern of hypovolemic, cardiogenic, and obstructive shock, where systemic vascular resistance is high. The reverse, a rising venous saturation, indicates decreased extraction and points to distributive shock."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: decreased SVO2 means increased tissue extraction of oxygen; increased SVO2 means decreased extraction. It is a readout of the balance between delivery and consumption.",
    "pdfPage": 8,
    "pdfQuote": "Decreased SVO2 represents an increased ability of tissues"
  },
  {
    "id": 4,
    "category": "Cardiology: Shock Hemodynamics",
    "questionText": "A patient with a central venous catheter in place receives a rapid large-volume transfusion after a gastrointestinal hemorrhage. Over the next thirty minutes the central venous pressure rises from 4 mmHg to 16 mmHg. Heart rate falls from 118 to 96 per minute and the blood pressure improves. Which statement best describes the physiologic change this measurement is reporting?",
    "options": [
      {
        "text": "Left atrial pressure has risen and pulmonary venous congestion is now present",
        "explanation": "Incorrect. Left atrial pressure is reported by the post-capillary wedge pressure, not by a central venous catheter. The two are counterparts on opposite sides of the circulation and can move independently, as they do in obstructive shock. This would be the correct answer if a wedge pressure had been the measurement described."
      },
      {
        "text": "Right atrial pressure has risen because venous return now exceeds right heart output",
        "explanation": "Correct. Central venous pressure reports the volume and pressure in the right atrium and represents a balance between two opposing forces: the ability of the right heart to move blood forward into the lungs, and the flow of blood arriving from the peripheral veins. Increasing blood volume shifts that balance toward the return side, so the pressure rises. The lecture lists increased blood volume, increased large-vessel tone, and dilation of the arterioles as the three drivers of a rising central venous pressure."
      },
      {
        "text": "Systemic vascular resistance has risen because the arterioles have constricted sharply",
        "explanation": "Incorrect. Arteriolar constriction is measured as systemic vascular resistance, and here the falling heart rate and improving pressure suggest the reflex is winding down rather than intensifying. A central venous catheter does not measure arteriolar tone. This would be the correct answer if the question had described a calculated resistance derived from pressure and cardiac output."
      },
      {
        "text": "Stroke volume has fallen because the left ventricle can no longer generate enough force",
        "explanation": "Incorrect. Failing contractility would worsen the hemodynamics, yet this patient's blood pressure improved and the reflex tachycardia resolved after volume replacement. Nothing here points to a pump problem. This would be the correct answer if the central venous pressure had risen alongside a falling blood pressure and a new S3 gallop."
      },
      {
        "text": "Pulmonary vascular resistance has risen because of increased right ventricular afterload",
        "explanation": "Incorrect. An acute rise in right ventricular afterload would raise central venous pressure while worsening perfusion, not improving it. That pattern belongs to pulmonary obstructive shock. This would be the correct answer if the rising central venous pressure had been accompanied by hypotension and a falling wedge pressure."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: CVP reads right atrial pressure and is the venous counterpart of PCWP. It rises with increased blood volume, increased large-vessel tone, or arteriolar dilation.",
    "pdfPage": 9,
    "pdfQuote": "Central venous pressure is a measurement for the right atrium"
  },
  {
    "id": 5,
    "category": "Cardiology: Definition of Shock",
    "questionText": "A 58-year-old woman is evaluated on the surgical floor six hours after an abdominal operation. She is somnolent but arousable, her fingertips are cool with sluggish capillary refill, and she has produced only 15 mL of urine in two hours. Serum lactate is elevated. The team is deciding whether her blood pressure alone supports a working diagnosis of shock. Which set of findings best meets the threshold used in this lecture?",
    "options": [
      {
        "text": "Systolic 104 mmHg with a mean arterial pressure of 72 mmHg on repeated measurement",
        "explanation": "Incorrect. Both values sit above the thresholds given in the lecture, so the blood pressure alone does not establish shock in this patient. Compensated patients can maintain pressure for a time while perfusion is already failing. This would be the correct answer if the question had asked which pressures are still within the compensated range."
      },
      {
        "text": "Systolic 118 mmHg with a mean arterial pressure of 80 mmHg on repeated measurement",
        "explanation": "Incorrect. These are essentially normal values and are well above both stated cutoffs. The lecture defines shock hemodynamically by pressures below specific numbers, not by clinical impression alone. This would be the correct answer if the question had asked for a normal pressure profile."
      },
      {
        "text": "Systolic 96 mmHg with a mean arterial pressure of 70 mmHg and a wide pulse pressure",
        "explanation": "Incorrect. Although the wide pulse pressure hints at vasodilation, neither number crosses the threshold given in the lecture. A wide pulse pressure is a clue to the category of shock, not to its presence. This would be the correct answer if the question had asked which finding suggests distributive physiology."
      },
      {
        "text": "Systolic 84 mmHg with a mean arterial pressure of 58 mmHg",
        "explanation": "Correct. The lecture defines the blood-pressure threshold for thinking shock as a systolic pressure below 90 mmHg or a mean arterial pressure below 65 mmHg, and this patient crosses both. Shock is a generalized, severe reduction in blood supply in which tissue needs go unmet and arterial pressure stays low despite compensation, which fits her cool extremities, oliguria, altered mentation, and elevated lactate. The next task is to determine the category by measuring filling pressures, cardiac output, and resistance."
      },
      {
        "text": "Systolic 132 mmHg with a mean arterial pressure of 92 mmHg and a narrow pulse pressure",
        "explanation": "Incorrect. These pressures are frankly hypertensive and exclude the definition entirely, whatever the pulse pressure. A narrow pulse pressure accompanies high-resistance shock states but only once the pressures themselves have fallen. This would be the correct answer if the question had asked which profile argues against shock."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: think shock when systolic blood pressure is below 90 mmHg or mean arterial pressure is below 65 mmHg, with evidence that tissue needs are not being met.",
    "pdfPage": 10,
    "pdfQuote": "think shock if systolic < 90 mmHg or MAP <"
  },
  {
    "id": 6,
    "category": "Cardiology: Hypovolemic Shock",
    "questionText": "A 34-year-old man arrives after a femoral laceration with an estimated loss of 25 percent of his blood volume. He is tachycardic and pale, his extremities are cool and clammy, capillary refill is delayed, his jugular veins are flat, and his mucous membranes are dry. Twenty minutes have elapsed since the injury. Which combination of hemodynamic measurements best fits his state?",
    "options": [
      {
        "text": "Low central venous pressure, low wedge pressure, low cardiac output, high resistance",
        "explanation": "Correct. Loss of intravascular volume reduces cardiac filling, so both the central venous pressure and the post-capillary wedge pressure fall with preload. Reduced stroke volume drops cardiac output even though the baroreceptor reflex is driving the heart rate up. That same reflex constricts the arterioles, raising systemic vascular resistance, which slows capillary flow and lowers the venous oxygen saturation. Flat neck veins and dry mucous membranes are the bedside counterparts of the low filling pressures."
      },
      {
        "text": "High central venous pressure, high wedge pressure, low cardiac output, high resistance, with pulmonary rales",
        "explanation": "Incorrect. This is the cardiogenic profile, in which blood dams up behind a failing pump and produces elevated jugular venous pressure and rales. Our patient has flat neck veins and dry membranes, the opposite finding. This would be the correct answer if the hypotension had followed a large myocardial infarction rather than a hemorrhage."
      },
      {
        "text": "Low central venous pressure, low wedge pressure, high cardiac output, low resistance, with warm and dry skin",
        "explanation": "Incorrect. Low resistance with a high output and warm dry skin is the distributive pattern seen in sepsis and anaphylaxis. This patient's cool clammy skin and delayed capillary refill indicate intense vasoconstriction instead. This would be the correct answer if the wound had become infected and the patient were several days into a bacteremia."
      },
      {
        "text": "High central venous pressure, low wedge pressure, low cardiac output, high resistance, with distended neck veins",
        "explanation": "Incorrect. A high central venous pressure with a low wedge pressure describes pulmonary obstructive shock, where a block before the left atrium dams blood behind the right heart. The flat jugular veins here exclude any process backing blood up centrally. This would be the correct answer if the patient had sustained a large pulmonary embolism."
      },
      {
        "text": "High central venous pressure, high wedge pressure, high cardiac output, low resistance, with bounding pulses",
        "explanation": "Incorrect. High filling pressures with a low resistance and bounding pulses do not correspond to any of the four categories described in this lecture. Acute hemorrhage cannot raise filling pressures. This would be the correct answer if the question were describing a high-output state with volume overload rather than a shock category from this lecture."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: hypovolemic shock reads CVP down, PCWP down, CO down, SVR up, SVO2 down. The fall in cardiac output comes from stroke volume, since heart rate actually rises.",
    "pdfPage": 13,
    "pdfQuote": "Hypovolemia leads to REDUCED CARDIAC FILLING"
  },
  {
    "id": 7,
    "category": "Physiology: Oxygen Delivery and Extraction",
    "questionText": "In hypovolemic, cardiogenic, and obstructive shock, the venous oxygen saturation is characteristically low even though the tissues are receiving less blood overall. A student objects that reduced delivery should leave more oxygen in the venous blood, not less. Which mechanism best resolves the apparent contradiction?",
    "options": [
      {
        "text": "Circulating catecholamines directly increase the affinity of hemoglobin for oxygen",
        "explanation": "Incorrect. Increased hemoglobin affinity would hold oxygen in the blood and raise the venous saturation rather than lower it. The lecture explains this finding by flow, not by the dissociation curve. This would be the correct answer if the question concerned a leftward shift of the oxyhemoglobin dissociation curve."
      },
      {
        "text": "Increased vascular resistance shunts blood past the capillary beds without exchange",
        "explanation": "Incorrect. Bypassing capillaries would leave oxygen in the blood and raise the venous saturation, which is the opposite of the observed value. This is a plausible-sounding trap that inverts the actual mechanism. This would be the correct answer if the pattern being explained were a high venous saturation in distributive shock."
      },
      {
        "text": "Slower capillary flow lengthens transit time, so more oxygen is extracted per pass",
        "explanation": "Correct. Higher systemic vascular resistance means a smaller arteriolar radius, and blood therefore moves more slowly through the capillary bed. A longer transit time gives the tissues more time for gas exchange, so a greater fraction of the oxygen is extracted and the blood returning to the right heart is more desaturated. The lecturer flags this as counterintuitive but insists on it: SVR and SVO2 move in opposite directions. The mirror image is distributive shock, where a low resistance speeds flow and raises the venous saturation."
      },
      {
        "text": "Reflex tachycardia raises cardiac output enough to increase total oxygen delivery",
        "explanation": "Incorrect. Reflex tachycardia does occur, but cardiac output still falls in all three of these categories because stroke volume is compromised. Delivery is decreased, not increased. This would be the correct answer if the question concerned septic shock, where cardiac output actually rises."
      },
      {
        "text": "Cytokine release from ischemic tissue blocks the mitochondrial electron transport chain",
        "explanation": "Incorrect. Blocking mitochondrial oxygen use would leave oxygen unconsumed and raise the venous saturation. The lecture attributes the change to capillary transit time rather than to cellular respiration. This would be the correct answer if a high venous saturation needed explaining in a septic patient with tissue dysoxia."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: high SVR slows capillary flow and increases extraction, so SVO2 falls; low SVR speeds flow and decreases extraction, so SVO2 rises. The two always move oppositely.",
    "pdfPage": 13,
    "pdfQuote": "Higher SVR will slow the flow of blood through the capillaries"
  },
  {
    "id": 8,
    "category": "Cardiology: Cardiogenic Shock",
    "questionText": "A 71-year-old man is hypotensive two hours into a large anterior myocardial infarction. His extremities are cool, his jugular venous pressure is elevated, hepatojugular reflux is positive, an S3 gallop is audible, and there are bibasilar rales. A pulmonary artery catheter is placed. Which measurement most directly explains the rales specifically?",
    "options": [
      {
        "text": "A low central venous pressure reflecting inadequate venous return to the right atrium",
        "explanation": "Incorrect. This patient's central venous pressure is clinically elevated, as evidenced by distended neck veins and a positive hepatojugular reflex. A low value would fit hemorrhage or dehydration, not pump failure. This would be the correct answer if the patient had presented with flat neck veins and dry mucous membranes."
      },
      {
        "text": "A low post-capillary wedge pressure reflecting obstruction of the pulmonary circulation",
        "explanation": "Incorrect. A low wedge pressure describes a block before the left atrium, which starves the left heart and leaves the lungs clear rather than wet. Rales require elevated pressure transmitted back into the pulmonary circulation. This would be the correct answer if the presentation had been sudden dyspnea with clear lungs after prolonged immobility."
      },
      {
        "text": "A reduced systemic vascular resistance from loss of arteriolar tone in the periphery",
        "explanation": "Incorrect. Resistance rises rather than falls in cardiogenic shock, because baroreceptors sense the low mean arterial pressure and drive vasoconstriction. The cool clammy extremities confirm it. This would be the correct answer if the skin had been warm and dry with a wide pulse pressure."
      },
      {
        "text": "An elevated mixed venous oxygen saturation from shortened capillary transit time",
        "explanation": "Incorrect. Venous oxygen saturation falls in cardiogenic shock, since the elevated resistance slows capillary flow and increases extraction. An elevated value would point toward distributive physiology. This would be the correct answer if the same hypotension had accompanied a low systemic vascular resistance."
      },
      {
        "text": "An elevated post-capillary wedge pressure from blood backing up into the left atrium",
        "explanation": "Correct. When the left ventricle fails, stroke volume falls while preload climbs, and the pressure backs up into the left atrium and from there into the pulmonary circulation. The wedge pressure directly reports that elevated left atrial pressure, which is what produces pulmonary rales. The central venous pressure rises for the same reason on the right side, giving the distended neck veins, positive hepatojugular reflex, and S3 gallop. Cardiac output is the primary insult, and systemic vascular resistance rises reflexively while venous oxygen saturation falls."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: cardiogenic shock reads CVP up, PCWP up, CO down, SVR up, SVO2 down. The high wedge pressure is what produces pulmonary rales.",
    "pdfPage": 16,
    "pdfQuote": "Will have fluid accumulation behind the heart"
  },
  {
    "id": 9,
    "category": "Cardiology: Obstructive Shock",
    "questionText": "A 48-year-old woman two weeks after knee arthroplasty becomes acutely dyspneic and hypotensive on the ward. Her jugular veins are distended, her lungs are clear to auscultation, her extremities are cool with delayed capillary refill, and her pulse pressure is narrow. A pulmonary artery catheter is placed. Which measurement would most likely be decreased in this patient?",
    "options": [
      {
        "text": "Central venous pressure, which reflects right atrial filling pressure",
        "explanation": "Incorrect. This value is increased, not decreased, because the obstruction dams blood behind the right heart and produces the distended neck veins described. Only the left-sided pressure is starved in this scenario. This would be the correct answer if the patient were hypovolemic from bleeding into the surgical site."
      },
      {
        "text": "Post-capillary wedge pressure, which reflects left atrial filling",
        "explanation": "Correct. This presentation, sudden dyspnea and hypotension two weeks after joint surgery with clear lungs and distended neck veins, is pulmonary obstructive shock from a pulmonary embolism. The obstruction lies in the pulmonary circulation, before the left atrium, so blood cannot reach the left heart and the wedge pressure falls. Right ventricular afterload rises, left ventricular preload falls, and the drop in stroke volume lowers cardiac output. Systemic vascular resistance rises reflexively while venous oxygen saturation falls."
      },
      {
        "text": "Systemic vascular resistance, driven by the baroreceptor reflex",
        "explanation": "Incorrect. Resistance rises in every obstructive shock because baroreceptors sense the low mean arterial pressure and promote vasoconstriction. Her cool extremities and narrow pulse pressure are the physical evidence of that rise. This would be the correct answer if the shock state were distributive rather than obstructive."
      },
      {
        "text": "Right ventricular afterload against the obstructed pulmonary bed",
        "explanation": "Incorrect. Increased right ventricular afterload is a defining feature of pulmonary obstructive shock, since the ventricle must eject against a blocked circulation. It rises rather than falls. This would be the correct answer if the obstruction had been located distal to the left atrium."
      },
      {
        "text": "Heart rate, driven by the same baroreceptor reflex response",
        "explanation": "Incorrect. The baroreceptor reflex raises the heart rate in this setting, and tachycardia is expected. Only neurogenic shock blocks that reflex. This would be the correct answer if she had sustained a high spinal cord injury preventing sympathetic outflow."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: in pulmonary obstructive shock the block sits before the left atrium, so PCWP is low while CVP is high, RV afterload rises, and LV preload falls.",
    "pdfPage": 20,
    "pdfQuote": "Blood is obstructed BEFORE entering the LA"
  },
  {
    "id": 10,
    "category": "Cardiology: Obstructive Shock",
    "questionText": "A 55-year-old man with metastatic lung cancer becomes progressively hypotensive over several hours. His heart sounds are distant, his jugular veins are distended, and his extremities are cool with poor capillary refill. Breath sounds are equal bilaterally. A pulmonary artery catheter is inserted. Which pattern of filling pressures best fits his physiology?",
    "options": [
      {
        "text": "Central venous pressure low and post-capillary wedge pressure low, from volume depletion",
        "explanation": "Incorrect. Volume depletion empties both sides of the heart and produces flat neck veins, whereas this patient's jugular veins are distended. Nothing in the history suggests fluid or blood loss. This would be the correct answer if he had presented with several days of vomiting and dry mucous membranes."
      },
      {
        "text": "Central venous pressure low and post-capillary wedge pressure high, from left heart failure",
        "explanation": "Incorrect. Left ventricular failure raises both filling pressures, not just the left-sided one, and would give rales rather than distant heart sounds. A discordant low central venous pressure does not occur in this setting. This would be the correct answer if the question described an isolated left-sided problem with an empty right heart, which the lecture does not present."
      },
      {
        "text": "Central venous pressure high and post-capillary wedge pressure low, from a pulmonary block",
        "explanation": "Incorrect. This is the pulmonary obstructive pattern seen with pulmonary embolism, where blood cannot reach the left atrium. Distant heart sounds point instead to fluid around the heart squeezing all four chambers. This would be the correct answer if his presentation had been acute dyspnea with clear lungs and no muffling of the heart sounds."
      },
      {
        "text": "Central venous pressure high and post-capillary wedge pressure high",
        "explanation": "Correct. Distant heart sounds, jugular venous distension, and hypotension in a patient with a malignancy point to cardiac tamponade, a structural obstructive shock. Because the pericardial fluid constricts the entire heart, diastolic filling is restricted on both sides and both filling pressures rise. Reduced diastolic filling lowers stroke volume and therefore cardiac output, which is the primary insult, while systemic vascular resistance rises reflexively and venous oxygen saturation falls. Management is fluid resuscitation plus relieving the obstruction."
      },
      {
        "text": "Central venous pressure normal and post-capillary wedge pressure low, with a high output state",
        "explanation": "Incorrect. A high-output state with low filling pressures describes septic or anaphylactic shock and comes with warm, dry skin and a wide pulse pressure. This patient is vasoconstricted with distended neck veins. This would be the correct answer if he had presented with fever, warm extremities, and a low systemic vascular resistance."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: tamponade and constrictive pericarditis squeeze the whole heart, so both CVP and PCWP are high. The triad is distant heart sounds, JVD, and hypotension.",
    "pdfPage": 20,
    "pdfQuote": "The entire heart is constricted, reducing diastolic filling"
  },
  {
    "id": 11,
    "category": "Cardiology: Shock Hemodynamics",
    "questionText": "A hemodynamic panel is reported on a hypotensive patient before any history is available. The calculated systemic vascular resistance is well below the normal range and the venous oxygen saturation is 82 percent, above the normal range. No other values are provided. Which category of shock does this pair of measurements alone establish?",
    "options": [
      {
        "text": "Cardiogenic shock, in which the failing ventricle cannot maintain forward output",
        "explanation": "Incorrect. Cardiogenic shock raises systemic vascular resistance through the baroreceptor reflex and lowers venous oxygen saturation as slow capillary flow increases extraction. Both reported values point the other way. This would be the correct answer if resistance had been high and venous saturation low with elevated filling pressures."
      },
      {
        "text": "Hypovolemic shock, in which lost intravascular volume reduces cardiac filling",
        "explanation": "Incorrect. Volume loss triggers the same reflex vasoconstriction, so resistance rises and venous saturation falls. The reported pattern is incompatible with a vasoconstricted state. This would be the correct answer if the panel had shown a high resistance with low filling pressures."
      },
      {
        "text": "Pulmonary obstructive shock, in which the embolus blocks flow to the left heart",
        "explanation": "Incorrect. Obstructive shock also produces a high systemic vascular resistance and a low venous oxygen saturation; only the wedge pressure distinguishes its two subtypes. Neither reported value fits. This would be the correct answer if resistance were high with a high central venous pressure and a low wedge pressure."
      },
      {
        "text": "Structural obstructive shock, in which the pericardium restricts diastolic filling",
        "explanation": "Incorrect. Restricted filling lowers cardiac output and provokes reflex vasoconstriction, again raising resistance and lowering venous saturation. The pattern given is the mirror image. This would be the correct answer if both filling pressures were elevated with a high resistance."
      },
      {
        "text": "Distributive shock",
        "explanation": "Correct. A decreased systemic vascular resistance paired with an increased venous oxygen saturation occurs in distributive shock and in no other category, which is exactly the point the lecturer makes when reviewing the summary table. Loss of vascular tone is the primary insult, and the resulting rapid capillary flow leaves less time for gas exchange, so venous saturation rises. Once this pair is seen, the only remaining question is which distributive shock it is: septic, anaphylactic, or neurogenic. Cardiac output would then separate neurogenic, which is low, from septic and anaphylactic, which are high."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: low SVR with high SVO2 is unique to distributive shock. That pair alone excludes hypovolemic, cardiogenic, and obstructive shock.",
    "pdfPage": 32,
    "pdfQuote": "Types of Shock Examples of Causes CVP PCWP CO SVR"
  },
  {
    "id": 12,
    "category": "Cardiology: Distributive Shock",
    "questionText": "Two hypotensive patients are seen in the same hour. Both have a systolic pressure of 82 mmHg, a heart rate above 110 per minute, and altered mentation. The attending asks the student which single physical examination finding would most quickly point one of them toward distributive shock rather than the other three categories. Which finding best serves that purpose?",
    "options": [
      {
        "text": "Narrow pulse pressure with cool and clammy extremities and poor capillary refill",
        "explanation": "Incorrect. This combination reflects the intense reflex vasoconstriction of hypovolemic, cardiogenic, and obstructive shock. It argues against distributive physiology rather than for it. This would be the correct answer if the question had asked which finding suggests a high systemic vascular resistance."
      },
      {
        "text": "Flat jugular neck veins together with markedly dry oral mucous membranes",
        "explanation": "Incorrect. Flat neck veins and dry membranes describe the fluid-deprived appearance of hypovolemic shock. Although filling pressures are also low in distributive shock, these particular signs are the classic hypovolemic picture. This would be the correct answer if the patient had several days of vomiting and diarrhea."
      },
      {
        "text": "Warm, dry skin with a wide pulse pressure",
        "explanation": "Correct. Loss of vascular tone leaves the arterioles dilated, so the skin stays warm and dry and the pulse pressure widens, in direct contrast to the cool, clammy periphery and narrow pulse pressure of the other three categories. The lecturer calls warm and dry skin an immediate tell for distributive shock on exam questions. It corresponds to the low systemic vascular resistance that is the primary insult, and to the rapid capillary transit that raises venous oxygen saturation."
      },
      {
        "text": "Distended jugular veins with an audible third heart sound and pulmonary rales",
        "explanation": "Incorrect. These findings indicate blood damming up behind a failing pump, the hallmark of cardiogenic shock. Distributive shock lowers both filling pressures rather than raising them. This would be the correct answer if the patient had decompensated heart failure with medication nonadherence."
      },
      {
        "text": "Slow capillary refill with acrocyanosis and blue discoloration of the fingertips",
        "explanation": "Incorrect. These are general findings of impaired peripheral perfusion listed for shock overall and do not separate the categories. They occur wherever perfusion is poor. This would be the correct answer if the question had asked for a nonspecific sign common to all forms of shock."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: warm and dry skin with a wide pulse pressure means distributive shock. Cool and clammy skin with a narrow pulse pressure means hypovolemic, cardiogenic, or obstructive.",
    "pdfPage": 22,
    "pdfQuote": "Warm and dry skin"
  },
  {
    "id": 13,
    "category": "Microbiology: Septic Shock Mechanism",
    "questionText": "A patient develops profound hypotension during a bloodstream infection with a gram-negative organism. Investigation shows that a molecule from the bacterial outer membrane has bound a pattern-recognition receptor on macrophages and B cells, triggering release of interleukin-1, tumor necrosis factor, and interleukin-6, along with production of nitric oxide. Which molecular interaction is being described?",
    "options": [
      {
        "text": "Lipid A of lipopolysaccharide binding toll-like receptor 4",
        "explanation": "Correct. Septic shock is usually caused by gram-negative bacteria acting through the endotoxin lipopolysaccharide, and it is specifically the lipid A portion that binds toll-like receptor 4, a pattern-recognition receptor on macrophages and B cells. Activation stimulates interleukin-1, tumor necrosis factor, and interleukin-6, which produce fever, weaken the bonds between endothelial cells so fluid escapes into the interstitium, and recruit further inflammation. Nitric oxide is released in parallel and causes the vasodilation responsible for the fall in systemic vascular resistance. The same endotoxin can activate the coagulation cascade through tissue factor and precipitate disseminated intravascular coagulation."
      },
      {
        "text": "Peptidoglycan fragments binding a nucleotide-binding receptor inside the cytoplasm",
        "explanation": "Incorrect. The lecture attributes septic shock to lipopolysaccharide from gram-negative organisms signaling through a surface toll-like receptor, not to cytoplasmic sensing of peptidoglycan. Peptidoglycan is also a gram-positive wall component. This would be the correct answer if the question described intracellular recognition of a gram-positive cell wall fragment."
      },
      {
        "text": "Bacterial superantigen bridging a T-cell receptor to a class II histocompatibility molecule",
        "explanation": "Incorrect. Superantigen bridging causes massive polyclonal T-cell activation, a mechanism outside the scope of this lecture's account of septic shock. The receptor named in the stem sits on macrophages and B cells, not on T cells. This would be the correct answer if the vignette had described a toxic shock syndrome driven by nonspecific T-cell activation."
      },
      {
        "text": "Teichoic acid from a gram-positive wall binding complement receptors on neutrophils",
        "explanation": "Incorrect. The organism here is gram-negative, and the lecture ties septic shock specifically to the endotoxin of gram-negative bacteria. Complement receptors on neutrophils are not the receptor described in the stem. This would be the correct answer if the stem had specified a gram-positive organism signaling through complement."
      },
      {
        "text": "Bacterial flagellin binding an intracellular sensor and triggering inflammasome assembly",
        "explanation": "Incorrect. Flagellin sensing is not part of the pathway taught here, and the stem explicitly places the receptor on the surface of macrophages and B cells. The cytokine trio and nitric oxide response described belong to the toll-like receptor 4 pathway. This would be the correct answer if the question had asked about inflammasome activation by a motile organism."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: lipid A of LPS binds TLR-4 on macrophages and B cells, releasing IL-1, TNF, and IL-6 plus nitric oxide. NO causes the vasodilation; tissue factor activation causes DIC.",
    "pdfPage": 25,
    "pdfQuote": "Lipid A portion binds to a pattern recognition receptor"
  },
  {
    "id": 14,
    "category": "Cardiology: Neurogenic Shock",
    "questionText": "A 22-year-old is hypotensive in the trauma bay after a cervical spine fracture sustained in a diving accident. His skin is warm and dry, the pulse pressure is wide, and the heart rate is 56 per minute despite a systolic pressure of 78 mmHg. He is afebrile with a normal white blood cell count. Which single measurement would most reliably distinguish his shock state from septic shock?",
    "options": [
      {
        "text": "A decreased systemic vascular resistance, which is the primary insult in both conditions",
        "explanation": "Incorrect. Both neurogenic and septic shock are distributive and share a low systemic vascular resistance as the primary insult, so this measurement cannot separate them. It only tells you the category. This would be the correct answer if the task were to separate distributive shock from the other three categories."
      },
      {
        "text": "A decreased post-capillary wedge pressure, reflecting arterial and venous dilation alike",
        "explanation": "Incorrect. The wedge pressure falls in every form of distributive shock, since vasodilation lets blood remain in the dilated circulation rather than returning to fill the heart. It is identical in both diagnoses. This would be the correct answer if the comparison were with cardiogenic shock, where the wedge pressure rises."
      },
      {
        "text": "An increased mixed venous oxygen saturation, reflecting shortened capillary transit time",
        "explanation": "Incorrect. Venous oxygen saturation rises in all distributive shock because the low resistance speeds capillary flow, leaving less time for gas exchange. It is shared by both diagnoses. This would be the correct answer if the alternative diagnosis were hypovolemic or obstructive shock."
      },
      {
        "text": "A decreased cardiac output",
        "explanation": "Correct. Septic and anaphylactic shock leave the sympathetic reflex intact, so baroreceptors sensing the fall in pressure produce a reflex tachycardia and cardiac output actually rises. In neurogenic shock the central nervous system injury prevents that signal from reaching the heart, so no reflex tachycardia occurs and cardiac output falls instead. The bradycardia of 56 per minute in the face of profound hypotension is the bedside version of the same finding. Neurogenic shock is therefore the only distributive shock with a low cardiac output."
      },
      {
        "text": "A decreased central venous pressure, reflecting pooling of blood in the venous system",
        "explanation": "Incorrect. Venous tone is lost in every distributive shock, so blood pools peripherally and the central venous pressure falls in both conditions. It carries no discriminating information here. This would be the correct answer if the comparison were with obstructive shock, where the central venous pressure is elevated."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: neurogenic shock is the only distributive shock with a low cardiac output and no tachycardia, because the injured CNS cannot deliver the baroreceptor reflex.",
    "pdfPage": 31,
    "pdfQuote": "except there will be no tachycardia"
  },
  {
    "id": 15,
    "category": "Immunology: Anaphylactic Shock",
    "questionText": "A 26-year-old woman develops diffuse urticaria, stridor, tongue swelling, and hypotension within ten minutes of a bee sting. Her skin is warm and flushed, her pulse pressure is wide, and her heart rate is 128 per minute. Hemodynamic measurements show low filling pressures, a low systemic vascular resistance, and an elevated venous oxygen saturation. Which cellular event best explains her fall in arterial pressure?",
    "options": [
      {
        "text": "Endotoxin-driven nitric oxide release from vascular endothelium throughout the body",
        "explanation": "Incorrect. Endotoxin-driven nitric oxide release is the mechanism of septic shock, and the hemodynamic profile of the two conditions is indeed identical. The urticaria, stridor, and onset within minutes of a sting point instead to an antigen-antibody reaction. This would be the correct answer if the patient had a gram-negative bloodstream infection rather than a sting."
      },
      {
        "text": "Mast cell and basophil histamine release",
        "explanation": "Correct. Anaphylaxis is an antigen-antibody reaction that causes mast cells in the periphery and basophils in the blood to release histamine and histamine-like substances. These increase vascular capacity, dilate the venous system and the arterioles, and increase capillary permeability so that fluid and protein leak into the tissue spaces. The result is a profound fall in arterial pressure with a low resistance, low filling pressures, and a compensatory rise in cardiac output. The most important treatment is intramuscular epinephrine."
      },
      {
        "text": "Loss of central sympathetic outflow to the arterioles and to the sinoatrial node",
        "explanation": "Incorrect. Loss of sympathetic outflow describes neurogenic shock and would prevent the reflex tachycardia, yet this patient's heart rate is 128 per minute. There is also no history of anesthesia or neurologic injury. This would be the correct answer if she had become hypotensive after a high spinal anesthetic."
      },
      {
        "text": "Direct myocardial depression by circulating cytokines reducing stroke volume acutely",
        "explanation": "Incorrect. Her cardiac output is elevated rather than depressed, as shown by the low resistance with tachycardia and a high venous oxygen saturation. A failing pump would raise the filling pressures. This would be the correct answer if the wedge pressure and central venous pressure had both been elevated with a low output."
      },
      {
        "text": "Massive fluid loss into the gastrointestinal tract from vomiting and profuse diarrhea",
        "explanation": "Incorrect. Gastrointestinal fluid loss produces hypovolemic shock with a high systemic vascular resistance, cool clammy skin, and a narrow pulse pressure. This patient's resistance is low and her skin is warm. This would be the correct answer if she had presented with several days of vomiting and diarrhea instead of an acute sting reaction."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: anaphylaxis releases histamine from mast cells and basophils, increasing vascular capacity, dilating arterioles and veins, and raising capillary permeability. Hemodynamically it is identical to septic shock.",
    "pdfPage": 29,
    "pdfQuote": "mast cells in the periphery and basophils in the blood"
  },
  {
    "id": 16,
    "category": "Cardiology: Hypovolemic Shock",
    "questionText": "An 18-year-old woman presents to the office severely fatigued. She reports four days of repeated vomiting and watery diarrhea and has been unable to keep fluids down. Temperature is 39.3 C (102.7 F), blood pressure is 75/50 mmHg, and heart rate is 110 per minute. Her mucous membranes are dry, her jugular veins are flat, and her fingertips are cool with sluggish capillary refill. Hemodynamic measurement reveals an increased systemic vascular resistance. Which of the following is the most likely diagnosis?",
    "options": [
      {
        "text": "Hypovolemic shock from ongoing gastrointestinal losses",
        "explanation": "Correct. Four days of vomiting and diarrhea mean she cannot retain or replenish fluid, so intravascular volume and therefore preload fall. The elevated systemic vascular resistance is the decisive clue: baroreceptors sensing the low mean arterial pressure drive vasoconstriction, which also explains the cool extremities, narrow pulse pressure, and reflex tachycardia. Fever can occur with either septic or hypovolemic shock due to illness, so it does not discriminate. Because distributive shock is defined by a fall in resistance, the increased resistance excludes sepsis and leaves hypovolemia."
      },
      {
        "text": "Septic shock from an enteric gram-negative bloodstream infection",
        "explanation": "Incorrect. Septic shock is distributive and lowers systemic vascular resistance, whereas this patient's resistance is elevated. Her skin is also cool and clammy rather than warm and dry. This would be the correct answer if the resistance had been low with a high cardiac output and warm extremities."
      },
      {
        "text": "Cardiogenic shock from a viral myocarditis complicating her illness",
        "explanation": "Incorrect. Cardiogenic shock produces elevated filling pressures with distended neck veins, rales, and an S3 gallop, none of which are present. Her flat neck veins and dry membranes indicate an empty circulation, not a congested one. This would be the correct answer if she had jugular venous distension with pulmonary rales."
      },
      {
        "text": "Obstructive shock from a pulmonary embolism after several days in bed",
        "explanation": "Incorrect. Obstructive shock raises the central venous pressure and distends the neck veins, which is the opposite of her flat jugular veins. Her presentation is also gradual and clearly tied to fluid loss rather than sudden dyspnea. This would be the correct answer if she had acute dyspnea with distended neck veins and clear lungs."
      },
      {
        "text": "Anaphylactic shock from an antiemetic given earlier in the day",
        "explanation": "Incorrect. Anaphylaxis is distributive and would lower systemic vascular resistance, producing warm dry skin and a wide pulse pressure, and it would come with urticaria or airway signs. Her measured resistance is high. This would be the correct answer if she had developed hives and stridor minutes after a drug exposure."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: fever plus hypotension does not equal sepsis. An elevated systemic vascular resistance excludes distributive shock and, with fluid loss in the history, points to hypovolemia.",
    "pdfPage": 12,
    "pdfQuote": "Severe vomiting or diarrhea"
  },
  {
    "id": 17,
    "category": "Cardiology: Cardiogenic Shock",
    "questionText": "An 85-year-old man presents to the emergency department with several days of worsening fatigue. His past medical history includes heart failure, hypertension, and gout, and history reveals nonadherence with his medications because he could not pick up his prescriptions. Temperature is 37.1 C (98.7 F), blood pressure is 74/41 mmHg, heart rate is 127 per minute, and respiratory rate is 23 per minute. His jugular veins are distended and his extremities are cool. Which set of hemodynamic measurements do you expect on further examination?",
    "options": [
      {
        "text": "Decreased cardiac output, decreased systemic vascular resistance, increased wedge pressure",
        "explanation": "Incorrect. A decreased systemic vascular resistance defines distributive shock, and this patient is vasoconstricted with cool extremities and a history pointing squarely at decompensated heart failure. Resistance rises rather than falls when the pump fails. This would be the correct answer if he had presented with fever, warm skin, and a low resistance from sepsis."
      },
      {
        "text": "Increased cardiac output, decreased systemic vascular resistance, decreased wedge pressure, as in a hyperdynamic circulation",
        "explanation": "Incorrect. This is the septic or anaphylactic profile, driven by loss of vascular tone with an intact sympathetic reflex. Nothing here suggests infection or allergen exposure, and his neck veins are distended rather than flat. This would be the correct answer if he were febrile with warm dry skin and a wide pulse pressure."
      },
      {
        "text": "Decreased cardiac output, increased systemic vascular resistance, decreased wedge pressure, as with obstruction proximal to the left atrium",
        "explanation": "Incorrect. A decreased wedge pressure places the obstruction before the left atrium, as in pulmonary embolism. His known heart failure with medication nonadherence points instead to left ventricular failure, which raises the wedge pressure. This would be the correct answer if the history had been sudden dyspnea after prolonged immobility."
      },
      {
        "text": "Increased cardiac output, increased systemic vascular resistance, increased wedge pressure",
        "explanation": "Incorrect. Cardiac output cannot be increased in a patient this hypotensive from pump failure; the fall in output is the primary insult. An increased output belongs to septic and anaphylactic shock. This would be the correct answer if the patient were in a high-output distributive state, which would also have a low resistance."
      },
      {
        "text": "Decreased cardiac output, increased systemic vascular resistance, increased wedge pressure",
        "explanation": "Correct. This is cardiogenic shock from decompensated heart failure after stopping his medications. Reduced contractility lowers stroke volume and therefore cardiac output, which is the primary insult, while baroreceptors sensing the low mean arterial pressure drive reflex vasoconstriction and raise systemic vascular resistance. Blood backs up into the left atrium, so the wedge pressure rises, and it backs up on the right as well, giving the distended jugular veins. Obstructive shock can look similar, but the past medical history of heart failure with nonadherence points to the heart itself."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: cardiogenic shock is decreased cardiac output with increased systemic vascular resistance and an increased wedge pressure from backup into the left atrium.",
    "pdfPage": 16,
    "pdfQuote": "Cardiac failure leads to INCREASED PRELOAD and REDUCED CARDIAC OUTPUT"
  },
  {
    "id": 18,
    "category": "Cardiology: Hypovolemic Shock",
    "questionText": "A 56-year-old man is brought to the emergency department 30 minutes after slicing his arm while chopping wood, with significant blood loss at the scene. His blood pressure is 92/58 mmHg. On examination he appears lethargic and pale, and his extremities are cool to the touch. No fluids have been given yet. Which set of findings would most likely represent the body's physiologic reaction within the first 30 minutes of this injury?",
    "options": [
      {
        "text": "Decreased heart rate, decreased total peripheral resistance, decreased cardiac contractility",
        "explanation": "Incorrect. Every element of this set is the opposite of the sympathetic reflex response to hemorrhage. Only a patient who cannot mount a sympathetic response, such as one with a spinal cord injury, would fail to raise heart rate and resistance. This would be the correct answer if the hypotension followed a high cervical cord injury rather than blood loss."
      },
      {
        "text": "Decreased heart rate, increased total peripheral resistance, increased cardiac contractility",
        "explanation": "Incorrect. Reflex bradycardia is not part of the acute response to hemorrhage; the baroreceptors drive the heart rate up, and his pallor and cool skin confirm an active sympathetic response. Only the rate is wrong in this option, which makes it a tempting near-miss. This would be the correct answer if a pure alpha-1 agonist had been given and produced reflex bradycardia."
      },
      {
        "text": "Increased heart rate, decreased total peripheral resistance, increased cardiac contractility",
        "explanation": "Incorrect. Total peripheral resistance rises rather than falls after hemorrhage, which is exactly why his extremities are cool. A falling resistance would give warm, dry skin. This would be the correct answer if the shock state were distributive, such as sepsis or anaphylaxis."
      },
      {
        "text": "Increased heart rate, increased total peripheral resistance, increased cardiac contractility",
        "explanation": "Correct. Acute blood loss drops mean arterial pressure, and the baroreceptors respond with sympathetic activation that raises heart rate, contractility, and total peripheral resistance, which is the same thing as systemic vascular resistance. Cardiac output nevertheless falls, because the loss of stroke volume from reduced preload outweighs the faster rate, so contractility increases while output does not. The vasoconstriction explains the cool extremities and narrow pulse pressure. Renin is also released in an attempt to raise blood pressure through the renin-angiotensin system."
      },
      {
        "text": "Increased heart rate, increased total peripheral resistance, decreased cardiac contractility, with a rise in cardiac output",
        "explanation": "Incorrect. Contractility increases rather than decreases under sympathetic drive, and cardiac output falls because stroke volume is lost. This option pairs the right reflex with the wrong end results. This would be the correct answer if the patient had a failing myocardium unable to respond to catecholamine stimulation."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: in acute hemorrhage the sympathetic reflex raises heart rate, contractility, and peripheral resistance, but cardiac output still falls because stroke volume is lost.",
    "pdfPage": 13,
    "pdfQuote": "Baroreceptors will sense the decreased mean arterial pressures"
  },
  {
    "id": 19,
    "category": "Critical Care: Septic Shock",
    "questionText": "A 75-year-old nursing home resident is brought to the emergency department because of confusion. He developed a productive cough with green sputum several days ago. Temperature is 38.9 C (102 F), pulse is 110 per minute, and blood pressure is 90/60 mmHg. His extremities are warm and the pulse pressure is wide. Laboratory studies show a white blood cell count of 14,000 per cubic millimeter, a platelet count of 50,000 per cubic millimeter, and an elevated serum lactic acid. Which set of physiologic parameters is most likely?",
    "options": [
      {
        "text": "Central venous pressure decreased, wedge pressure decreased, cardiac output decreased, resistance increased",
        "explanation": "Incorrect. An increased systemic vascular resistance with a decreased cardiac output is the hypovolemic pattern and is incompatible with the warm extremities and wide pulse pressure described. This patient's problem is vasodilation, not volume loss alone. This would be the correct answer if he had presented with cool clammy skin after days of vomiting."
      },
      {
        "text": "Central venous pressure increased, wedge pressure increased, cardiac output decreased, resistance increased",
        "explanation": "Incorrect. Elevated filling pressures with a low output and high resistance describe cardiogenic shock, which would give distended neck veins and rales rather than warm extremities. The heart in sepsis is functioning normally. This would be the correct answer if he had decompensated heart failure with an S3 gallop."
      },
      {
        "text": "Central venous pressure decreased, wedge pressure decreased, cardiac output increased, resistance decreased",
        "explanation": "Correct. Confusion, fever, productive cough, leukocytosis, thrombocytopenia, and an elevated lactate in an elderly nursing home resident indicate septic shock, and he meets both SIRS and qSOFA criteria. The primary disturbance is a fall in systemic vascular resistance from endotoxin-driven nitric oxide release. Because he is not losing fluid and his heart is working normally, the baroreceptor reflex raises the heart rate and cardiac output actually rises. Venous tone also falls, so blood pools peripherally and both filling pressures decrease rather than increase."
      },
      {
        "text": "Central venous pressure increased, wedge pressure increased, cardiac output increased, resistance decreased",
        "explanation": "Incorrect. Distributive shock lowers both filling pressures, because loss of venous tone lets blood pool in the periphery instead of returning to the heart. The output and resistance are right but the filling pressures are inverted. This would be the correct answer if the patient had a high-output state superimposed on volume overload, which is not one of this lecture's four categories."
      },
      {
        "text": "Central venous pressure decreased, wedge pressure decreased, cardiac output decreased, resistance decreased, with bradycardia",
        "explanation": "Incorrect. This is the neurogenic pattern, in which no reflex tachycardia occurs because central nervous system injury blocks sympathetic outflow. Our patient is tachycardic at 110 per minute with an intact reflex. This would be the correct answer if his hypotension had followed a spinal cord injury or deep anesthesia."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: septic shock reads CVP down, PCWP down, CO up, SVR down, SVO2 up. The heart is fine; the problem is vasodilation.",
    "pdfPage": 23,
    "pdfQuote": "Distributive shock is due to loss of vascular tone"
  },
  {
    "id": 20,
    "category": "Critical Care: Septic Shock",
    "questionText": "You are an intern on call and are paged to see a 39-year-old man with cystic fibrosis who underwent bilateral lung transplantation two years ago and takes tacrolimus, azathioprine, and corticosteroids. Temperature is 38.9 C (102 F), blood pressure is 70/35 mmHg, heart rate is 134 per minute, and respirations are 18 per minute. His extremities are warm and the pulse pressure is wide. Which of the following best describes the primary disturbance causing this patient's shock?",
    "options": [
      {
        "text": "Decreased cardiac output due to decreased cardiac contractility from myocardial injury",
        "explanation": "Incorrect. A failing pump raises the filling pressures and produces cool, clammy skin with a narrow pulse pressure, none of which is present. His warm extremities and wide pulse pressure indicate vasodilation instead. This would be the correct answer if he had presented with distended neck veins, rales, and an S3 gallop."
      },
      {
        "text": "Decreased systemic vascular resistance from endotoxin acting on toll-like receptors",
        "explanation": "Correct. A profoundly immunosuppressed transplant recipient with fever, hypotension, tachycardia, warm extremities, and a wide pulse pressure is in septic shock, and the primary disturbance in any distributive shock is a fall in systemic vascular resistance. The mechanism taught here is lipopolysaccharide, through its lipid A portion, binding toll-like receptor 4 on macrophages and B cells, which releases interleukin-1, tumor necrosis factor, interleukin-6, and nitric oxide. Nitric oxide dilates the vasculature and drops the resistance, while the intact sympathetic reflex drives the tachycardia and raises cardiac output."
      },
      {
        "text": "Decreased cardiac output due to decreased diastolic filling from pericardial restriction",
        "explanation": "Incorrect. Restricted diastolic filling from tamponade or constriction raises both filling pressures and gives distant heart sounds with distended neck veins and cool skin. The febrile, vasodilated picture here is incompatible. This would be the correct answer if he had muffled heart sounds with jugular venous distension and hypotension."
      },
      {
        "text": "Decreased systemic vascular resistance from histamine released in a hypersensitivity reaction",
        "explanation": "Incorrect. Anaphylaxis is hemodynamically identical to septic shock, so the measurements cannot separate them, but the history can. There is no allergen exposure and no urticaria, stridor, or tongue swelling, while fever and immunosuppression point to infection. This would be the correct answer if he had developed hives and airway swelling minutes after a drug or sting."
      },
      {
        "text": "Decreased systemic vascular resistance from unopposed parasympathetic tone after CNS injury",
        "explanation": "Incorrect. Neurogenic shock prevents the reflex tachycardia and lowers cardiac output, yet this patient's heart rate is 134 per minute. There is also no anesthetic, spinal, or brain injury in the history. This would be the correct answer if he had become hypotensive with bradycardia after a high spinal anesthetic."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: in any distributive shock the primary disturbance is a fall in systemic vascular resistance. In sepsis that fall is driven by LPS acting through TLR-4 and nitric oxide.",
    "pdfPage": 25,
    "pdfQuote": "Activating TLR-4 stimulates the production of IL-1, TNF, and IL-6"
  },
  {
    "id": 21,
    "category": "Immunology: Anaphylaxis Management",
    "questionText": "A 31-year-old woman is brought to the emergency department eight minutes after eating at a restaurant. She has diffuse hives, audible stridor, tongue swelling, and vomiting. Blood pressure is 76/40 mmHg, heart rate is 132 per minute, and oxygen saturation is 91 percent on room air. Her skin is warm and flushed and the pulse pressure is wide. An intravenous line has just been placed. Which of the following is the most appropriate immediate treatment?",
    "options": [
      {
        "text": "Nebulized albuterol first, reserving other agents for persistent bronchospasm",
        "explanation": "Incorrect. Albuterol is listed as an additional treatment for bronchospasm that persists after epinephrine, not as the first agent. It does nothing for the vasodilation, the capillary leak, or the airway swelling that are killing this patient. This would be the correct answer if wheezing continued after epinephrine had already been given."
      },
      {
        "text": "Intravenous normal saline bolus alone, titrated to a mean arterial pressure over 65",
        "explanation": "Incorrect. Normal saline is an appropriate additional treatment for the hypotension of anaphylaxis, but giving it alone leaves the underlying mediator release unopposed and does not protect the airway. Fluid is adjunctive here rather than definitive. This would be the correct answer if the question asked about supportive management after epinephrine."
      },
      {
        "text": "A norepinephrine infusion started immediately to raise systemic vascular resistance",
        "explanation": "Incorrect. Norepinephrine is the first-line pressor for septic shock, not for anaphylaxis, and starting an infusion takes time this patient with progressing airway swelling does not have. The lecture assigns epinephrine to anaphylaxis specifically. This would be the correct answer if she were in septic shock still hypotensive after adequate fluid resuscitation."
      },
      {
        "text": "Intramuscular epinephrine",
        "explanation": "Correct. The most important treatment in anaphylaxis is intramuscular epinephrine, given without delay. Its alpha-1 activity reverses the vasodilation and capillary leak driving the hypotension, while its beta activity increases heart rate and cardiac output and relieves bronchospasm and airway edema. Additional treatment then includes normal saline for the hypotension, oxygen, and albuterol if bronchospasm persists after the epinephrine. Delaying epinephrine in favor of an adjunct is the classic management error."
      },
      {
        "text": "High-flow oxygen alone, with reassessment of the airway in fifteen minutes",
        "explanation": "Incorrect. Oxygen is appropriate supportive care but does not address mediator-driven vasodilation or laryngeal swelling, and a fifteen-minute delay risks complete airway obstruction. Anaphylaxis needs a drug that reverses the process. This would be the correct answer if the patient were hypoxemic without hypotension or airway compromise."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: intramuscular epinephrine is the single most important treatment in anaphylaxis. Saline, oxygen, and albuterol are adjuncts, and albuterol is for bronchospasm persisting after epinephrine.",
    "pdfPage": 30,
    "pdfQuote": "The most important treatment in anaphylaxis is epinephrine IM"
  },
  {
    "id": 22,
    "category": "Critical Care: Sepsis Management",
    "questionText": "A 68-year-old man with a urinary catheter is admitted with fever, confusion, and a respiratory rate of 26 per minute. Blood pressure is 88/52 mmHg and heart rate is 116 per minute. He meets criteria for sepsis and the team believes he is progressing to septic shock. No antibiotics, fluids, or laboratory studies have been sent yet, and two large-bore intravenous lines are in place. Which of the following is the most appropriate next step in management?",
    "options": [
      {
        "text": "Draw blood cultures and a lactate level, then give broad-spectrum antibiotics",
        "explanation": "Correct. The initial resuscitation bundle measures lactate and obtains blood cultures before antibiotics are administered, precisely so that the culture results are not skewed by a dose already given. Broad-spectrum coverage such as vancomycin plus cefepime or piperacillin follows immediately, with the goal of starting intravenous antibiotics within the first hour after the diagnosis of sepsis or septic shock. Rapid administration of about 30 mL/kg of crystalloid comes next, and vasopressors are added only if fluids fail. Identifying and removing the source of infection remains the highest-yield intervention."
      },
      {
        "text": "Give vancomycin and cefepime immediately and draw blood cultures after the first dose",
        "explanation": "Incorrect. The drugs and the urgency are right, but the order is wrong: cultures drawn after antibiotics may fail to grow the organism and skew the result. Obtaining cultures first costs almost no time when lines are already in place. This would be the correct answer if drawing cultures would meaningfully delay antibiotics in a crashing patient."
      },
      {
        "text": "Start a norepinephrine infusion before any fluid resuscitation has been attempted at all",
        "explanation": "Incorrect. Vasopressors come after intravenous fluid repletion has failed to restore the blood pressure, not before it is tried. Septic shock is by definition instability that persists despite intravascular volume repletion. This would be the correct answer if he remained hypotensive after receiving 30 mL/kg of crystalloid."
      },
      {
        "text": "Give 30 mL/kg of crystalloid over the next 12 hours and hold antibiotics until cultures grow",
        "explanation": "Incorrect. Both the timing and the sequencing are wrong: the fluid target is within the first three hours, and antibiotics must not wait for culture results, which take days. Delayed antibiotics markedly worsen outcomes in sepsis. This would be the correct answer if the patient had a noninfectious cause of hypotension under investigation."
      },
      {
        "text": "Transfuse two units of packed red cells to raise oxygen delivery before other interventions",
        "explanation": "Incorrect. Packed red cells are considered for hemorrhagic shock or a hemoglobin below 7 g/dL, and nothing here indicates either. Transfusing first would delay the antibiotics and cultures that drive outcome in sepsis. This would be the correct answer if the patient were bleeding with a hemoglobin of 6 g/dL."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: in sepsis, measure lactate and draw blood cultures before giving antibiotics, then start broad-spectrum coverage within the first hour, then 30 mL/kg crystalloid, then pressors.",
    "pdfPage": 28,
    "pdfQuote": "initiate IV antibiotic therapy within the first hour"
  },
  {
    "id": 23,
    "category": "Critical Care: Fluid Resuscitation",
    "questionText": "A 70 kg woman is admitted with septic shock after a perforated diverticulum. Blood cultures have been drawn, lactate is 3.8 mmol/L, and broad-spectrum antibiotics have been started within the first hour. Blood pressure is 82/44 mmHg with a mean arterial pressure of 57 mmHg. The team is about to begin crystalloid resuscitation and asks how much fluid she should receive and over what interval. Which of the following best matches the recommendation cited in this lecture?",
    "options": [
      {
        "text": "About 700 mL over the first hour, then reassess the mean arterial pressure",
        "explanation": "Incorrect. This is only 10 mL/kg, well short of the recommended volume, and undertreating the initial resuscitation is a common error. The recommendation is expressed per kilogram over a defined window. This would be the correct answer if the guideline had specified 10 mL/kg boluses."
      },
      {
        "text": "About 2,100 mL over the first 3 hours",
        "explanation": "Correct. The Surviving Sepsis Campaign recommendation cited here is greater than 30 mL/kg of crystalloid within the first three hours, so a 70 kg patient should receive roughly 2,100 mL, about two liters. Crystalloid is the first-line fluid because albumin and other colloids show no outcome benefit and cost more. Adequacy is judged clinically by heart rate, blood pressure, urine output, skin turgor, and mucous membranes, and by vitals with a mean arterial pressure above 65 mmHg and a venous oxygen saturation above 70 percent. Vasopressors are added only if this fails."
      },
      {
        "text": "About 1,400 mL over the first 6 hours, given as four separate small boluses",
        "explanation": "Incorrect. Both the volume and the interval fall short: 20 mL/kg spread over six hours is slower and smaller than the recommendation. Early adequate volume is what the bundle emphasizes. This would be the correct answer if the guideline called for a slow, low-volume approach in a patient with severe heart failure."
      },
      {
        "text": "About 3,500 mL over the first 3 hours, followed by albumin if pressure is unchanged",
        "explanation": "Incorrect. This is 50 mL/kg, above the cited threshold, and adding albumin is not supported because colloids have shown no outcome advantage over crystalloids. The recommendation is a floor of 30 mL/kg, not an arbitrary larger volume. This would be the correct answer if the lecture had endorsed colloid escalation, which it explicitly does not."
      },
      {
        "text": "About 350 mL over the first hour, with early vasopressors instead of further fluid",
        "explanation": "Incorrect. Vasopressors are reserved for hypotension that persists despite adequate volume repletion, which has not yet been attempted here. Starting pressors on a token fluid volume skips the defining step of septic shock. This would be the correct answer if she remained hypotensive after the full 30 mL/kg had been given."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: give more than 30 mL/kg of crystalloid within the first 3 hours, roughly 2 L for a 70 kg patient, and target a MAP above 65 mmHg with an SVO2 above 70 percent.",
    "pdfPage": 38,
    "pdfQuote": "Surviving Sepsis Campaign: >30 mL/kg of crystalloids"
  },
  {
    "id": 24,
    "category": "Critical Care: Fluid Resuscitation",
    "questionText": "A 62-year-old man in septic shock receives five liters of 0.9 percent sodium chloride over eight hours. Repeat laboratory studies show a serum chloride of 116 mEq/L, a bicarbonate of 17 mEq/L, and a normal anion gap. Serum lactate has fallen from 4.1 to 1.9 mmol/L and his blood pressure has improved. Which of the following best explains his new acid-base disturbance?",
    "options": [
      {
        "text": "Lactate accumulation from ongoing tissue hypoperfusion despite adequate resuscitation",
        "explanation": "Incorrect. His lactate has actually fallen to a near-normal 1.9 mmol/L and his blood pressure improved, so tissue perfusion is getting better rather than worse. A lactic acidosis would also widen the anion gap, which is normal here. This would be the correct answer if the anion gap were elevated with a rising lactate."
      },
      {
        "text": "Hyponatremia from a fluid whose sodium concentration is lower than that of plasma",
        "explanation": "Incorrect. This is the risk associated with Ringer's lactate, which has a slightly lower sodium content than plasma, not with normal saline. Hyponatremia would also not by itself produce a normal-gap acidosis. This would be the correct answer if the patient had received large volumes of lactated Ringer's instead."
      },
      {
        "text": "Dilution of plasma proteins by a colloid-free fluid reducing buffering capacity overall",
        "explanation": "Incorrect. The lecture attributes this complication specifically to the chloride content of normal saline, not to protein dilution. Colloids are also stated to give no outcome advantage over crystalloids. This would be the correct answer if the question concerned the rationale for choosing albumin over saline."
      },
      {
        "text": "Metabolic alkalosis generated as infused lactate is converted to bicarbonate by the liver",
        "explanation": "Incorrect. This describes a consequence of Ringer's lactate rather than saline, and the laboratory values show an acidosis with a low bicarbonate rather than an alkalosis. The direction of the disturbance is wrong. This would be the correct answer if his bicarbonate had risen after large volumes of lactated Ringer's."
      },
      {
        "text": "A chloride load exceeding that of plasma",
        "explanation": "Correct. Normal saline contains a considerably higher chloride concentration than plasma, and large-volume resuscitation therefore delivers a chloride load that produces a hyperchloremic metabolic acidosis with a normal anion gap, exactly the pattern seen here. Ringer's lactate has a lower chloride equivalent and is closer to physiologic concentrations, but it carries its own risk of hyponatremia. The lecture is explicit that no crystalloid is clearly better than another, so the choice is a matter of trading one risk for the other."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: large-volume normal saline causes hyperchloremic non-gap metabolic acidosis; lactated Ringer's risks hyponatremia instead. Neither crystalloid is clearly superior.",
    "pdfPage": 36,
    "pdfQuote": "potential metabolic acidosis from hyperchloremia"
  },
  {
    "id": 25,
    "category": "Critical Care: Fluid Resuscitation",
    "questionText": "A 44-year-old man is in hemorrhagic shock after a motorcycle collision with a grade IV splenic laceration. He has received two liters of crystalloid, and his blood pressure remains 84/50 mmHg with a heart rate of 128 per minute. His hemoglobin is 6.2 g/dL and he continues to bleed while awaiting the operating room. Which of the following is the most appropriate next intervention?",
    "options": [
      {
        "text": "Continue crystalloid alone, because no crystalloid has proven superior to another",
        "explanation": "Incorrect. It is true that no crystalloid has proven better than another, but that fact says nothing about whether crystalloid is the right product for a bleeding patient with a hemoglobin of 6.2 g/dL. Crystalloid replaces volume without replacing oxygen-carrying capacity. This would be the correct answer if his hemoglobin were normal and the deficit were purely volume."
      },
      {
        "text": "Give albumin, which expands plasma volume better than any crystalloid solution does",
        "explanation": "Incorrect. Albumin has no long-term benefit over crystalloids and is more expensive, and like crystalloid it does nothing for oxygen-carrying capacity in a hemorrhaging patient. Colloids and crystalloids show no difference in patient outcomes. This would be the correct answer if the lecture had established a colloid advantage, which it explicitly denies."
      },
      {
        "text": "Transfuse packed red blood cells",
        "explanation": "Correct. Blood transfusion is indicated at a hemoglobin below 7 g/dL, and packed red blood cells are the product considered for mass transfusion protocol in hemorrhagic shock. He is actively bleeding with a hemoglobin of 6.2 g/dL and remains hypotensive and tachycardic despite two liters of crystalloid, so he needs oxygen-carrying capacity rather than more salt water. Fresh frozen plasma is also part of a mass transfusion protocol, platelets treat bleeding, and cryoprecipitate repletes fibrinogen. Definitive management remains control of the bleeding source."
      },
      {
        "text": "Give fresh frozen plasma alone, since it both replaces volume and corrects coagulopathy",
        "explanation": "Incorrect. Fresh frozen plasma is considered as part of a mass transfusion protocol and to combat the disseminated intravascular coagulation of septic shock, but on its own it does not correct a hemoglobin of 6.2 g/dL. Oxygen-carrying capacity is the deficit here. This would be the correct answer if the primary problem were a documented coagulopathy with an adequate hemoglobin."
      },
      {
        "text": "Give cryoprecipitate to replete fibrinogen before any red cell product is administered",
        "explanation": "Incorrect. Cryoprecipitate is used for fibrinogen repletion, which is not the identified problem, and prioritizing it ahead of red cells in a patient with a hemoglobin of 6.2 g/dL is backwards. No fibrinogen level is even reported. This would be the correct answer if a documented hypofibrinogenemia were driving ongoing bleeding."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: consider blood transfusion at a hemoglobin below 7 g/dL. Packed red cells and fresh frozen plasma anchor mass transfusion protocol; platelets treat bleeding and cryoprecipitate repletes fibrinogen.",
    "pdfPage": 38,
    "pdfQuote": "Consider blood transfusion with a Hgb of < 7"
  },
  {
    "id": 26,
    "category": "Pharmacology: Vasoactive Agents",
    "questionText": "A 66-year-old woman remains hypotensive 12 hours after an extensive anterior myocardial infarction. Blood pressure is 80/56 mmHg with a narrow pulse pressure, extremities are cool and mottled, and there are bibasilar rales. Catheter measurements show a cardiac index that is markedly reduced, an elevated wedge pressure, and an elevated systemic vascular resistance. Which agent best addresses the primary insult in this patient?",
    "options": [
      {
        "text": "Phenylephrine, a pure alpha-1 agonist that will raise systemic vascular resistance further",
        "explanation": "Incorrect. Her systemic vascular resistance is already elevated, and adding pure alpha-1 vasoconstriction increases the afterload that the failing ventricle must eject against. Phenylephrine is listed for distributive and hypovolemic shock. This would be the correct answer if she were vasodilated with a preserved cardiac output."
      },
      {
        "text": "Dobutamine, a beta-1 inotrope",
        "explanation": "Correct. The primary insult in cardiogenic shock is a decreased cardiac output from reduced myocardial contractility, so the treatment is an inotrope rather than a vasopressor. Dobutamine acts predominantly at beta-1 receptors and raises cardiac output, and the lecture identifies it specifically as the agent for cardiogenic shock. Her systemic vascular resistance is already elevated by reflex vasoconstriction, so adding a pure vasoconstrictor would worsen afterload. Dobutamine can cause hypotension and carries a risk of ventricular arrhythmias and cardiac ischemia."
      },
      {
        "text": "Vasopressin, acting at V1 and V2 receptors to raise systemic vascular resistance further",
        "explanation": "Incorrect. Vasopressin raises systemic vascular resistance, which is already high in this patient, and its main role in this lecture is as an add-on to norepinephrine in septic shock. It does nothing for contractility. This would be the correct answer if she had septic shock inadequately controlled on norepinephrine alone."
      },
      {
        "text": "Additional crystalloid alone, given as repeated 30 mL/kg boluses until pressure improves",
        "explanation": "Incorrect. Her wedge pressure is already elevated and she has pulmonary rales, so more volume would worsen pulmonary congestion rather than improve output. Fluid resuscitation belongs to hypovolemic, obstructive, and distributive shock. This would be the correct answer if the filling pressures were low from volume loss."
      },
      {
        "text": "Dopamine, whose mixed receptor activity makes it an unpredictable first-line choice here",
        "explanation": "Incorrect. Dopamine acts at dopamine, beta-1, alpha-1, and beta-2 receptors and is explicitly described as not a first-line treatment, with adverse effects including ventricular arrhythmias and tissue ischemia. A targeted inotrope is preferable. This would be the correct answer if the question asked which agent is deliberately avoided as first line."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: cardiogenic shock needs an inotrope, not a vasopressor. Dobutamine acts mainly at beta-1 receptors to raise cardiac output and can itself cause hypotension.",
    "pdfPage": 40,
    "pdfQuote": "Inotrope, not vasopressor"
  },
  {
    "id": 27,
    "category": "Pharmacology: Vasoactive Agents",
    "questionText": "A 58-year-old man with septic shock from pyelonephritis has received blood cultures, broad-spectrum antibiotics within the first hour, and 30 mL/kg of crystalloid over the past two hours. His mean arterial pressure remains 55 mmHg and his lactate has risen from 3.1 to 4.2 mmol/L. His extremities remain warm and his central venous pressure is low-normal. He has no history of coronary disease. Which of the following is the most appropriate next step?",
    "options": [
      {
        "text": "Give another 30 mL/kg of crystalloid before considering any vasoactive agent at all",
        "explanation": "Incorrect. He has already received the recommended volume and remains hypotensive, which is precisely the definition of septic shock: hemodynamic instability despite intravascular volume repletion. Continuing to give fluid alone delays effective therapy. This would be the correct answer if he had received only a token volume so far."
      },
      {
        "text": "Start dobutamine, since the low pressure reflects inadequate myocardial contractility",
        "explanation": "Incorrect. His cardiac output is elevated rather than depressed, since the sympathetic reflex is intact and the problem is vasodilation. Dobutamine is an inotrope reserved for cardiogenic shock and could lower his blood pressure further. This would be the correct answer if he had an elevated wedge pressure with a low cardiac output after a myocardial infarction."
      },
      {
        "text": "Start phenylephrine, whose pure alpha-1 activity avoids any risk of tachyarrhythmias",
        "explanation": "Incorrect. Phenylephrine is a pure alpha-1 agonist listed for distributive and hypovolemic shock and is useful when tachyarrhythmias are a problem, but it is not the first-line agent for septic shock. Its adverse effects include reflex bradycardia and severe visceral vasoconstriction. This would be the correct answer if a tachyarrhythmia prohibited an agent with beta activity."
      },
      {
        "text": "Start norepinephrine",
        "explanation": "Correct. Vasopressors are indicated when fluid repletion fails to restore blood pressure, and norepinephrine is the first-line agent for septic shock and the usual first-choice pressor overall. Its predominant alpha-1 activity with some beta activity raises systemic vascular resistance, which is the primary insult, while also supporting cardiac output. If a second agent is needed, vasopressin is the one added to norepinephrine in septic shock. Adverse effects to anticipate include tachyarrhythmias and peripheral digital ischemia."
      },
      {
        "text": "Switch the crystalloid to albumin, which maintains intravascular volume more effectively",
        "explanation": "Incorrect. No difference in patient outcomes has been found between crystalloid and colloid solutions, and albumin offers no long-term benefit while costing more. Changing the fluid does not address a resistance problem. This would be the correct answer if colloids had been shown to outperform crystalloids, which the lecture denies."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: norepinephrine is first line for septic shock once fluids fail, and vasopressin is the agent added to it. Septic shock is by definition instability despite volume repletion.",
    "pdfPage": 39,
    "pdfQuote": "Norepinephrine is a first line agent for septic shock"
  },
  {
    "id": 28,
    "category": "Pharmacology: Vasoactive Agents",
    "questionText": "A 60-year-old woman has been on a norepinephrine infusion for three days for septic shock. On rounds the nurse points out a darkened, indurated area of skin surrounding the peripheral intravenous site through which the drug had been running, and the tips of three fingers on the same hand are dusky and cold. Blood pressure is now adequate on a weaning dose. Which mechanism best explains these findings?",
    "options": [
      {
        "text": "Vasoconstriction of tissue adjacent to the infusion and of the distal extremities",
        "explanation": "Correct. Extravasation of a vasopressor causes intense vasoconstriction of the nearby connective tissue, which can produce frank skin necrosis around the infusion site. The same alpha-1 mediated vasoconstriction, sustained over days, produces hypoperfusion of the extremities and of mesenteric organs and kidneys, giving the dusky, cold digits described. This is the trade-off the lecturer emphasizes: the drug restores central pressure while simultaneously hypoperfusing the periphery. Peripheral digital ischemia is also listed as a specific adverse effect of norepinephrine."
      },
      {
        "text": "An immune-mediated small-vessel vasculitis provoked by the infused catecholamine",
        "explanation": "Incorrect. The lecture attributes these lesions to vasoconstriction and extravasation rather than to an immune mechanism, and the localization to the infusion site and to the distal digits fits a perfusion problem. A vasculitis would not respect the infusion site so precisely. This would be the correct answer if the findings were a palpable purpuric rash with systemic features."
      },
      {
        "text": "Microthrombi from disseminated intravascular coagulation triggered by endotoxin release",
        "explanation": "Incorrect. Disseminated intravascular coagulation does occur in septic shock through tissue factor activation, but it would not produce localized necrosis centered exactly on the infusion site. Her hemodynamics are improving on a weaning pressor dose. This would be the correct answer if she had diffuse bleeding and thrombosis with consumption of platelets and fibrinogen."
      },
      {
        "text": "Direct cytotoxic injury to keratinocytes by the drug diffusing through the dermal layer",
        "explanation": "Incorrect. The mechanism taught here is vasoconstriction of connective tissue near the site, not direct cytotoxicity to skin cells. That also fails to explain why fingertips remote from the site are involved. This would be the correct answer if the agent were a known vesicant chemotherapeutic causing direct tissue toxicity."
      },
      {
        "text": "Embolization of septic vegetations from an infected central venous catheter into the digits",
        "explanation": "Incorrect. Septic emboli would not cause a ring of necrosis around a peripheral infusion site, and her hemodynamics are improving rather than deteriorating. The distribution matches the drug, not an embolic source. This would be the correct answer if she had a new murmur with splinter hemorrhages and positive blood cultures on therapy."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: vasoactive agents cause extravasation with skin necrosis and prolonged vasoconstriction with hypoperfusion of extremities, mesenteric organs, and kidneys.",
    "pdfPage": 39,
    "pdfQuote": "Extravasation: vasoconstriction of nearby connective tissue"
  },
  {
    "id": 29,
    "category": "Cardiology: Obstructive Shock",
    "questionText": "A 27-year-old man is brought in after a motor vehicle collision with blunt chest trauma. He is agitated and dyspneic. Blood pressure is 78/52 mmHg, heart rate is 132 per minute, and oxygen saturation is 86 percent. Breath sounds are absent over the right hemithorax, the jugular veins are distended, and the extremities are cool with a narrow pulse pressure. Two liters of crystalloid have produced no improvement. Which of the following is the most appropriate next step?",
    "options": [
      {
        "text": "Aggressive crystalloid resuscitation alone until the blood pressure normalizes",
        "explanation": "Incorrect. Fluid resuscitation is part of the management of obstructive shock, but it has already failed here and cannot fix a mechanical block. Volume alone will not restore filling to an obstructed circulation. This would be the correct answer if the shock state were purely hypovolemic from hemorrhage."
      },
      {
        "text": "Start norepinephrine to raise systemic vascular resistance and restore perfusion pressure",
        "explanation": "Incorrect. His systemic vascular resistance is already elevated by reflex vasoconstriction, as the cool extremities and narrow pulse pressure show, and norepinephrine is first line for septic shock rather than for a mechanical obstruction. It would not relieve the cause. This would be the correct answer if he were vasodilated from sepsis after adequate fluid resuscitation."
      },
      {
        "text": "Pericardial drainage, since the distended neck veins point to a tamponade physiology",
        "explanation": "Incorrect. Distended neck veins occur in both obstructive subtypes, so they do not localize the lesion; the absent breath sounds over one hemithorax do. Tamponade would give distant heart sounds with equal breath sounds bilaterally. This would be the correct answer if he had muffled heart sounds with symmetric breath sounds."
      },
      {
        "text": "Dobutamine to raise contractility, since cardiac output is the measurement that has fallen",
        "explanation": "Incorrect. Cardiac output has indeed fallen, but the cause is obstruction to filling rather than impaired contractility, and this myocardium is intact. Dobutamine is reserved for cardiogenic shock and can lower blood pressure further. This would be the correct answer if his low output followed a large myocardial infarction with an elevated wedge pressure."
      },
      {
        "text": "Immediate decompression of the pleural space",
        "explanation": "Correct. Absent breath sounds over one hemithorax after blunt chest trauma, with hypotension, distended neck veins, and hypoxemia unresponsive to fluid, is tension pneumothorax, a pulmonary obstructive shock. Increased resistance in the pulmonary circulation raises right ventricular afterload and starves the left ventricle of preload, so the wedge pressure falls while the central venous pressure rises. Management of obstructive shock is fluid resuscitation plus relieving the obstruction, and here that means decompressing the pleural space without delay."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: obstructive shock is treated by relieving the obstruction. Absent breath sounds mean tension pneumothorax, distant heart sounds mean tamponade, and dyspnea with clear lungs means pulmonary embolism.",
    "pdfPage": 19,
    "pdfQuote": "Tension Pneumothorax: absent breath sounds"
  },
  {
    "id": 30,
    "category": "Cardiology: Neurogenic Shock",
    "questionText": "A 19-year-old woman is hypotensive four hours after a fall that fractured her spine at the T4 level. Blood pressure is 76/44 mmHg with a wide pulse pressure and heart rate is 52 per minute. Her skin is warm and dry, she is afebrile, and there is no external bleeding or abdominal tenderness. Hemodynamic measurements show a low systemic vascular resistance, low filling pressures, an elevated venous oxygen saturation, and a reduced cardiac output. Which mechanism best explains both the hypotension and the absence of tachycardia?",
    "options": [
      {
        "text": "Endotoxin-mediated nitric oxide release causing vasodilation with a reflex tachycardia",
        "explanation": "Incorrect. The hemodynamic profile of septic shock includes an increased cardiac output driven by reflex tachycardia, whereas this patient is bradycardic with a reduced output. She is also afebrile with no source of infection. This would be the correct answer if she were febrile and tachycardic with a high cardiac output."
      },
      {
        "text": "Histamine release increasing vascular capacity and capillary permeability simultaneously",
        "explanation": "Incorrect. Anaphylaxis is hemodynamically identical to sepsis, including a compensatory tachycardia, and there is no urticaria, stridor, or allergen exposure here. The bradycardia is the finding that excludes it. This would be the correct answer if she had developed hives and airway swelling after a drug or sting."
      },
      {
        "text": "Loss of sympathetic tone with unopposed parasympathetic response",
        "explanation": "Correct. Neurogenic shock results from dysregulation of the autonomic nervous system, producing a lack of sympathetic tone and an unopposed parasympathetic response, and spinal injury above the T6 level blocks sympathetic outflow. Without vasoconstrictor tone the systemic vascular resistance falls, which is the primary insult and gives the warm, dry skin, wide pulse pressure, and elevated venous oxygen saturation. Because the injured cord cannot deliver the baroreceptor signal to the heart, no reflex tachycardia occurs, so cardiac output falls instead of rising. This makes neurogenic shock the only distributive shock with a low cardiac output."
      },
      {
        "text": "Reduced diastolic filling from pericardial restriction limiting stroke volume acutely",
        "explanation": "Incorrect. Restricted filling raises both the central venous pressure and the wedge pressure and provokes reflex vasoconstriction with cool skin, none of which fits this patient. Her filling pressures and resistance are both low. This would be the correct answer if she had distant heart sounds with distended neck veins after chest trauma."
      },
      {
        "text": "Blood loss into the retroperitoneum with baroreceptor-mediated reflex vasoconstriction",
        "explanation": "Incorrect. Occult hemorrhage would raise the systemic vascular resistance and the heart rate and would produce cool, clammy skin, none of which is present. Her resistance is low and her venous oxygen saturation is elevated. This would be the correct answer if she had cool extremities with a high resistance and a low venous oxygen saturation."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: neurogenic shock is loss of sympathetic tone with unopposed parasympathetic response, typically from spinal injury above T6, deep general anesthesia, or brain damage. It presents like sepsis without the tachycardia.",
    "pdfPage": 31,
    "pdfQuote": "lack of sympathetic tone and unopposed parasympathetic response"
  }
];

window.Test_CV40 = Test_CV40;
