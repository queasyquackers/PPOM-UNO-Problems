// SET A - first-order recall items, in lecture order. File: Test_CV59_Recall.js
const Test_CV59_Recall = [
  {
    "id": 1,
    "category": "Acid-Base Basics: pH and Buffers",
    "questionText": "Normal arterial blood pH is held within which range?",
    "options": [
      {
        "text": "7.25 to 7.35",
        "explanation": "Incorrect. 7.25 to 7.35 is acidemic. This would be the correct answer if the question had asked about mild acidemia."
      },
      {
        "text": "7.35 to 7.45",
        "explanation": "Correct. Arterial pH is tightly held at 7.35 to 7.45, centered on 7.4 from an H+ of about 40 nEq/L. Intracellular fluid runs slightly lower, near 7.2."
      },
      {
        "text": "7.15 to 7.25",
        "explanation": "Incorrect. This brackets intracellular pH. This would be the correct answer if the question had asked about intracellular fluid."
      },
      {
        "text": "7.45 to 7.55",
        "explanation": "Incorrect. Above 7.45 is alkalemic. This would be the correct answer if the question had asked about mild alkalemia."
      },
      {
        "text": "7.05 to 7.15",
        "explanation": "Incorrect. This is severe acidemia. This would be the correct answer if the question had asked about decompensated acidosis."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Normal arterial pH is 7.35 to 7.45, with 7.4 as the center point.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 3,
    "pdfQuote": "Normal arterial pH"
  },
  {
    "id": 2,
    "category": "Acid-Base Basics: pH and Buffers",
    "questionText": "Blood pH is defended less well against alkali than against acid for which underlying reason?",
    "options": [
      {
        "text": "Kidneys unable to excrete excess bicarbonate",
        "explanation": "Incorrect. The kidney does excrete bicarbonate. This would be the correct answer if the question had asked about failed renal correction."
      },
      {
        "text": "Hypoventilation failing to raise PCO2",
        "explanation": "Incorrect. Hypoventilation does raise PCO2. This would be the correct answer if the question had asked about muscle weakness."
      },
      {
        "text": "Intracellular pH sitting above plasma pH",
        "explanation": "Incorrect. ICF pH is lower, about 7.2. This would be the correct answer if the question had asked about a reversed gradient."
      },
      {
        "text": "Metabolism generating a net acid load",
        "explanation": "Correct. Metabolism constantly produces H+, so buffers absorb large H+ loads with little pH change. Loss of H+ or gain of base shifts pH steeply because base is poorly buffered."
      },
      {
        "text": "Bicarbonate pKa lying above blood pH",
        "explanation": "Incorrect. Bicarbonate pKa lies below 7.4. This would be the correct answer if the question had asked about a base-range buffer."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Buffers are geared to the body's acid load, so small losses of H+ raise pH steeply.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 3,
    "pdfQuote": "Non-Linear Alkaline vs. Acidic pH Changes"
  },
  {
    "id": 3,
    "category": "Acid-Base Basics: pH and Buffers",
    "questionText": "By the Henderson-Hasselbalch equation, raising conjugate base relative to weak acid has which effect?",
    "options": [
      {
        "text": "Shifts pH above the pKa",
        "explanation": "Correct. pH equals pKa plus log of A- over HA, so a larger A-/HA ratio means a higher pH. When the two are equal, pH equals pKa."
      },
      {
        "text": "Sets pH equal to the pKa",
        "explanation": "Incorrect. That needs equal forms. This would be the correct answer if the question had asked about a ratio of one."
      },
      {
        "text": "Leaves pH fixed at 7.4",
        "explanation": "Incorrect. Ratio changes do move pH. This would be the correct answer if the question had asked about normal blood pH."
      },
      {
        "text": "Lowers the buffer's pKa",
        "explanation": "Incorrect. pKa is fixed for each acid. This would be the correct answer if the question had asked about acid strength."
      },
      {
        "text": "Raises the equilibrium constant K",
        "explanation": "Incorrect. K is set by K1 and K2. This would be the correct answer if the question had asked about rate constants."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: pH = pKa + log (A-/HA); raising the base form raises pH.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 4,
    "pdfQuote": "Henderson-Hasselbalch Equation"
  },
  {
    "id": 4,
    "category": "Acid-Base Basics: pH and Buffers",
    "questionText": "On a weak acid titration curve, buffering is most effective at which point?",
    "options": [
      {
        "text": "Near the steep nonlinear upper end",
        "explanation": "Incorrect. Buffering fails on the ends. This would be the correct answer if the question had asked about poor buffering."
      },
      {
        "text": "Where nearly all acid is dissociated",
        "explanation": "Incorrect. Little HA remains to donate. This would be the correct answer if the question had asked about a spent buffer."
      },
      {
        "text": "Where nearly all acid is protonated",
        "explanation": "Incorrect. Little A- remains to accept. This would be the correct answer if the question had asked about a saturated buffer."
      },
      {
        "text": "At the pH of intracellular fluid",
        "explanation": "Incorrect. That is a body value. This would be the correct answer if the question had asked about ICF pH."
      },
      {
        "text": "At the pKa, with HA equal to A-",
        "explanation": "Correct. At the pKa the acid and its conjugate base are equal, on the linear middle of the sigmoid curve. There, added H+ or OH- changes pH least."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: A buffer works best at its pKa, where [HA] equals [A-].",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 6,
    "pdfQuote": "Most effective buffering"
  },
  {
    "id": 5,
    "category": "Acid-Base Basics: pH and Buffers",
    "questionText": "Bicarbonate is the main blood buffer despite a pKa far from blood pH for which reason?",
    "options": [
      {
        "text": "Its pKa lies nearest blood pH",
        "explanation": "Incorrect. Phosphate has the closer pKa. This would be the correct answer if the question had asked about the phosphate buffer."
      },
      {
        "text": "It buffers mainly inside cells",
        "explanation": "Incorrect. Proteins buffer inside cells. This would be the correct answer if the question had asked about ICF buffers."
      },
      {
        "text": "Its CO2 leaves the body as gas",
        "explanation": "Correct. The bicarbonate system converts acid to CO2, which the lungs exhale, and doubles as CO2 transport. Phosphate has the closer pKa but cannot be vented as gas."
      },
      {
        "text": "It carries most unmeasured anion charge",
        "explanation": "Incorrect. Proteins form most of it. This would be the correct answer if the question had asked about the anion gap."
      },
      {
        "text": "It binds hydrogen as ammonium",
        "explanation": "Incorrect. Ammonium carries urinary H+. This would be the correct answer if the question had asked about renal H+ excretion."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Bicarbonate dominates because its acid end product, CO2, can be exhaled.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 7,
    "pdfQuote": "Bicarbonate & Phosphate"
  },
  {
    "id": 6,
    "category": "Acid-Base Basics: Acid-Base Map",
    "questionText": "On the acid-base map, a point on the isohydric line but outside the normal oval indicates what?",
    "options": [
      {
        "text": "Normal acid-base status",
        "explanation": "Incorrect. Normal lies inside the oval. This would be the correct answer if the question had asked about the central oval."
      },
      {
        "text": "Acidemia with normal bicarbonate",
        "explanation": "Incorrect. Acidemia plots above the line. This would be the correct answer if the question had asked about acute respiratory acidosis."
      },
      {
        "text": "Normal pH, PCO2 and HCO3- both shifted",
        "explanation": "Correct. The isohydric line joins PCO2 and HCO3- pairs giving pH 7.4, so pH can be normal while both are far off. Such a state is non-physiologic despite the normal pH."
      },
      {
        "text": "Alkalemia with normal PCO2",
        "explanation": "Incorrect. Alkalemia plots below the line. This would be the correct answer if the question had asked about acute metabolic alkalosis."
      },
      {
        "text": "An increased plasma anion gap",
        "explanation": "Incorrect. The map omits unmeasured anions. This would be the correct answer if the question had asked about electrolyte analysis."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: A normal pH does not mean normal PCO2 and HCO3-; check all three values.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 8,
    "pdfQuote": "Isohydric lines"
  },
  {
    "id": 7,
    "category": "Acid-Base Basics: Acid-Base Map",
    "questionText": "Metabolic acid-base disorders begin with a primary change in which variable?",
    "options": [
      {
        "text": "Plasma bicarbonate",
        "explanation": "Correct. Metabolic acidosis and alkalosis are defined by a primary fall or rise in HCO3-. Respiratory disorders instead start with a primary change in PCO2."
      },
      {
        "text": "Arterial PCO2",
        "explanation": "Incorrect. PCO2 starts respiratory disorders. This would be the correct answer if the question had asked about respiratory acidosis."
      },
      {
        "text": "Arterial PO2",
        "explanation": "Incorrect. Low PO2 drives hyperventilation. This would be the correct answer if the question had asked about high-altitude breathing."
      },
      {
        "text": "Plasma potassium concentration",
        "explanation": "Incorrect. Potassium shifts secondarily. This would be the correct answer if the question had asked about buffering consequences."
      },
      {
        "text": "Plasma sodium concentration",
        "explanation": "Incorrect. Sodium is the measured cation. This would be the correct answer if the question had asked about the gap formula."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Metabolic disorders start with HCO3-; respiratory disorders start with PCO2.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 9,
    "pdfQuote": "Metabolic vs. Respiratory Acid-Base Disturbances"
  },
  {
    "id": 8,
    "category": "Acid-Base Disorders: Compensation",
    "questionText": "A primary metabolic acid-base disorder is first compensated by which response?",
    "options": [
      {
        "text": "Renal change in H+ excretion",
        "explanation": "Incorrect. Renal H+ handling answers respiratory disorders. This would be the correct answer if the question had asked about respiratory acidosis."
      },
      {
        "text": "Pancreatic bicarbonate secretion",
        "explanation": "Incorrect. Its failure raises blood HCO3-. This would be the correct answer if the question had asked about vomiting."
      },
      {
        "text": "Gastric hydrogen ion secretion",
        "explanation": "Incorrect. Gastric H+ loss generates alkalosis. This would be the correct answer if the question had asked about vomiting alkalosis."
      },
      {
        "text": "Red cell carbonic anhydrase activity",
        "explanation": "Incorrect. It interconverts CO2 and HCO3-. This would be the correct answer if the question had asked about red cell buffering."
      },
      {
        "text": "Increased or decreased ventilation",
        "explanation": "Correct. The opposite system answers first, so a metabolic disorder is met by hyper- or hypoventilation. Kidneys then provide the slower correction."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: The opposite system compensates first; metabolic disorders get a respiratory response.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 10,
    "pdfQuote": "Four Simple Acid-Base Disorders"
  },
  {
    "id": 9,
    "category": "Acid-Base Disorders: Compensation",
    "questionText": "The long-term correction of a simple acid-base disorder is carried out by which organ?",
    "options": [
      {
        "text": "Lungs",
        "explanation": "Incorrect. Lungs give the fast response. This would be the correct answer if the question had asked about acute compensation."
      },
      {
        "text": "Kidneys",
        "explanation": "Correct. The chronic response always runs through the kidney, which adjusts H+ excretion and HCO3- recovery over days to a week. Ventilatory compensation alone leaves PCO2 non-physiologic."
      },
      {
        "text": "Liver",
        "explanation": "Incorrect. It is not the regulator. This would be the correct answer if the question had asked about ketoacid production."
      },
      {
        "text": "Stomach",
        "explanation": "Incorrect. It loses H+ in vomiting. This would be the correct answer if the question had asked about vomiting alkalosis."
      },
      {
        "text": "Carotid bodies",
        "explanation": "Incorrect. They sense acidemia. This would be the correct answer if the question had asked about the acute respiratory trigger."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Whatever the disorder, the kidney performs the definitive long-term correction.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 10,
    "pdfQuote": "by renal compensation"
  },
  {
    "id": 10,
    "category": "Acid-Base Disorders: Compensation",
    "questionText": "The acute compensation for metabolic alkalosis produces which change?",
    "options": [
      {
        "text": "Rise in bicarbonate from renal salvage",
        "explanation": "Incorrect. This answers CO2 retention. This would be the correct answer if the question had asked about respiratory acidosis."
      },
      {
        "text": "Increased renal ammonium excretion",
        "explanation": "Incorrect. This removes H+ in acidosis. This would be the correct answer if the question had asked about metabolic acidosis correction."
      },
      {
        "text": "Potassium release from cells",
        "explanation": "Incorrect. K+ leaves cells in acidosis. This would be the correct answer if the question had asked about hyperkalemia."
      },
      {
        "text": "Increased PCO2 from hypoventilation",
        "explanation": "Correct. Hypoventilation retains CO2, pushing the buffer toward H+ and lowering pH. The kidney later excretes HCO3- for full correction."
      },
      {
        "text": "Hydrogen ion uptake into cells",
        "explanation": "Incorrect. Cells take up H+ in acidosis. This would be the correct answer if the question had asked about acid buffering."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Metabolic alkalosis is compensated by hypoventilation, which raises PCO2.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 11,
    "pdfQuote": "Summary of Simple Acid-Base Disorders"
  },
  {
    "id": 11,
    "category": "Anion Gap: Calculation and Causes",
    "questionText": "The normal plasma anion gap mainly represents which unmeasured anions?",
    "options": [
      {
        "text": "Anionic proteins, mainly albumin",
        "explanation": "Correct. The gap is the charge of unmeasured anions, chiefly negatively charged proteins such as albumin, plus phosphate, citrate and sulfate. It exists because sodium outweighs chloride plus bicarbonate."
      },
      {
        "text": "Chloride, the main measured anion",
        "explanation": "Incorrect. Chloride is measured. This would be the correct answer if the question had asked about the main measured anion."
      },
      {
        "text": "Bicarbonate, a measured anion",
        "explanation": "Incorrect. Bicarbonate is measured. This would be the correct answer if the question had asked about the buffer anion."
      },
      {
        "text": "Citrate, a minor contributor",
        "explanation": "Incorrect. Citrate is a minor share. This would be the correct answer if the question had asked about minor unmeasured anions."
      },
      {
        "text": "Hydroxide from water dissociation",
        "explanation": "Incorrect. Hydroxide is negligible in plasma. This would be the correct answer if the question had asked about alkaline pH."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: The anion gap is mostly albumin and other anionic proteins; low albumin lowers the gap.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 12,
    "pdfQuote": "Unmeasured anions"
  },
  {
    "id": 12,
    "category": "Anion Gap: Calculation and Causes",
    "questionText": "The plasma anion gap equals sodium concentration minus which quantity?",
    "options": [
      {
        "text": "Potassium and calcium sum",
        "explanation": "Incorrect. These are cations. This would be the correct answer if the question had asked about summed cations."
      },
      {
        "text": "Albumin plus phosphate",
        "explanation": "Incorrect. These are unmeasured anions. This would be the correct answer if the question had asked about gap contents."
      },
      {
        "text": "Chloride concentration alone",
        "explanation": "Incorrect. Omitting HCO3- overstates the gap. This would be the correct answer if the question had asked about a partial formula."
      },
      {
        "text": "Lactate plus ketoacids",
        "explanation": "Incorrect. These are added acid anions. This would be the correct answer if the question had asked about a high gap acidosis."
      },
      {
        "text": "Chloride plus bicarbonate",
        "explanation": "Correct. Anion gap = Na+ - (Cl- + HCO3-), normally 8 to 14 mEq/L. Resolve the sum first, then subtract it from sodium."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Anion gap = Na+ - (Cl- + HCO3-); add the two anions before subtracting.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 13,
    "pdfQuote": "Calculating the Plasma Anion Gap"
  },
  {
    "id": 13,
    "category": "Anion Gap: Calculation and Causes",
    "questionText": "In a high anion gap metabolic acidosis, plasma bicarbonate falls mainly for which reason?",
    "options": [
      {
        "text": "Renal bicarbonate wasting",
        "explanation": "Incorrect. This is type 2 RTA. This would be the correct answer if the question had asked about proximal tubule failure."
      },
      {
        "text": "Loss in diarrheal stool",
        "explanation": "Incorrect. Diarrhea keeps the gap normal. This would be the correct answer if the question had asked about stool bicarbonate loss."
      },
      {
        "text": "Replacement by retained chloride",
        "explanation": "Incorrect. Chloride keeps the gap normal. This would be the correct answer if the question had asked about hyperchloremic acidosis."
      },
      {
        "text": "Increased unmeasured acid titrating HCO3-",
        "explanation": "Correct. The added acid's H+ is titrated by HCO3-, and its anion stays as an unmeasured anion. Bicarbonate falls to preserve electroneutrality, so the gap widens."
      },
      {
        "text": "Excess pancreatic secretion into gut",
        "explanation": "Incorrect. This is normal duodenal buffering. This would be the correct answer if the question had asked about pancreatic function."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: In a high gap acidosis, added acid anions replace the bicarbonate they consumed.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 14,
    "pdfQuote": "electroneutrality HCO"
  },
  {
    "id": 14,
    "category": "Anion Gap: Calculation and Causes",
    "questionText": "Methanol and ethylene glycol poisoning produce an osmolar gap because of which property?",
    "options": [
      {
        "text": "Their high chloride content",
        "explanation": "Incorrect. Chloride gives a normal gap. This would be the correct answer if the question had asked about hyperchloremic acidosis."
      },
      {
        "text": "Their low molecular weight",
        "explanation": "Correct. These small molecules add many osmoles, so measured and calculated osmolality diverge. Other high gap causes such as lactic acidosis lack this osmolar gap."
      },
      {
        "text": "Their effect on respiratory drive",
        "explanation": "Incorrect. This fits salicylates. This would be the correct answer if the question had asked about aspirin hyperventilation."
      },
      {
        "text": "Their conversion to ketoacids",
        "explanation": "Incorrect. Ketoacids come from diabetes. This would be the correct answer if the question had asked about diabetic ketoacidosis."
      },
      {
        "text": "Their binding to plasma albumin",
        "explanation": "Incorrect. Albumin is unrelated here. This would be the correct answer if the question had asked about gap contents."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Methanol and ethylene glycol give a high anion gap plus an osmolar gap.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 14,
    "pdfQuote": "there can be an osmolar gap"
  },
  {
    "id": 15,
    "category": "Anion Gap: Calculation and Causes",
    "questionText": "In a high anion gap acidosis, a bicarbonate fall smaller than the anion gap rise suggests what?",
    "options": [
      {
        "text": "A single high gap acidosis",
        "explanation": "Incorrect. Deltas match in one disorder. This would be the correct answer if the question had asked about equal deltas."
      },
      {
        "text": "Respiratory acidosis from hypoventilation",
        "explanation": "Incorrect. Delta-delta ignores PCO2. This would be the correct answer if the question had asked about CO2 retention."
      },
      {
        "text": "Superimposed metabolic alkalosis",
        "explanation": "Correct. A second disorder raising HCO3- offsets part of the fall, so HCO3- drops less than the gap rises. Vomiting on top of ketoacidosis is the typical setting."
      },
      {
        "text": "Expected respiratory compensation",
        "explanation": "Incorrect. Renal rules judge compensation. This would be the correct answer if the question had asked about predicted PCO2."
      },
      {
        "text": "Hypoalbuminemia lowering the gap",
        "explanation": "Incorrect. Low albumin shrinks the gap. This would be the correct answer if the question had asked about a low gap."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: HCO3- falling less than the gap rises signals a hidden metabolic alkalosis.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 15,
    "pdfQuote": "A Second (Hidden) Metabolic Acid-Base"
  },
  {
    "id": 16,
    "category": "Anion Gap: Calculation and Causes",
    "questionText": "In a high anion gap acidosis, a bicarbonate fall larger than the anion gap rise points to which added disorder?",
    "options": [
      {
        "text": "Chronic renal compensation",
        "explanation": "Incorrect. This adjusts HCO3- in respiratory disorders. This would be the correct answer if the question had asked about chronic respiratory acidosis."
      },
      {
        "text": "Superimposed normal gap acidosis",
        "explanation": "Correct. A second process lowering HCO3- without adding unmeasured anions, such as diarrhea, adds to the fall. HCO3- then drops more than the gap rises."
      },
      {
        "text": "Respiratory alkalosis from hyperventilation",
        "explanation": "Incorrect. Delta-delta ignores PCO2. This would be the correct answer if the question had asked about excess CO2 loss."
      },
      {
        "text": "Methanol-related osmolar gap",
        "explanation": "Incorrect. This flags small toxic molecules. This would be the correct answer if the question had asked about methanol."
      },
      {
        "text": "Isolated lactic acidosis",
        "explanation": "Incorrect. One gap acidosis matches deltas. This would be the correct answer if the question had asked about a single process."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: HCO3- falling more than the gap rises signals a hidden normal gap acidosis.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 15,
    "pdfQuote": "with normal anion gap"
  },
  {
    "id": 17,
    "category": "Anion Gap: Calculation and Causes",
    "questionText": "In a normal anion gap metabolic acidosis, the gap stays normal because of which change?",
    "options": [
      {
        "text": "Increased plasma lactate",
        "explanation": "Incorrect. Lactate widens the gap. This would be the correct answer if the question had asked about lactic acidosis."
      },
      {
        "text": "Decreased plasma albumin",
        "explanation": "Incorrect. Low albumin lowers the gap. This would be the correct answer if the question had asked about hypoalbuminemia."
      },
      {
        "text": "Increased plasma sulfate",
        "explanation": "Incorrect. Sulfate is a minor unmeasured anion. This would be the correct answer if the question had asked about minor gap anions."
      },
      {
        "text": "Increased plasma potassium",
        "explanation": "Incorrect. Potassium is outside the formula. This would be the correct answer if the question had asked about cell H+ exchange."
      },
      {
        "text": "Increased plasma chloride",
        "explanation": "Correct. Chloride, the only other measured anion, rises as HCO3- falls, so the gap stays normal. That is why this state is called hyperchloremic acidosis."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: A normal gap acidosis is hyperchloremic; chloride masks the bicarbonate loss.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 16,
    "pdfQuote": "Hyperchloremic Metabolic Acidosis"
  },
  {
    "id": 18,
    "category": "Acid-Base Disorders: Compensation",
    "questionText": "Compensation for a primary respiratory acid-base disorder develops over which time course?",
    "options": [
      {
        "text": "Over days, via renal adjustment",
        "explanation": "Correct. Respiratory disorders are compensated by the kidney, which takes days, giving separate acute and chronic lines. Metabolic disorders are compensated almost immediately by ventilation."
      },
      {
        "text": "Immediately, via ventilatory change",
        "explanation": "Incorrect. This compensates metabolic disorders. This would be the correct answer if the question had asked about metabolic acidosis."
      },
      {
        "text": "Over minutes, via gastric secretion",
        "explanation": "Incorrect. Gastric H+ loss causes alkalosis. This would be the correct answer if the question had asked about vomiting."
      },
      {
        "text": "Over hours, via pancreatic secretion",
        "explanation": "Incorrect. This buffers chyme. This would be the correct answer if the question had asked about duodenal buffering."
      },
      {
        "text": "Over weeks, via hemoglobin synthesis",
        "explanation": "Incorrect. Hemoglobin buffers H+ directly. This would be the correct answer if the question had asked about red cell buffers."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Metabolic disorders compensate at once through breathing; respiratory disorders compensate over days through the kidney.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 17,
    "pdfQuote": "Compensation occurs over days"
  },
  {
    "id": 19,
    "category": "Acid-Base Disorders: Compensation",
    "questionText": "Arterial values that plot between two shaded bands of the acid-base map indicate what?",
    "options": [
      {
        "text": "An expected simple compensation",
        "explanation": "Incorrect. This plots within a band. This would be the correct answer if the question had asked about values on a band."
      },
      {
        "text": "Acute respiratory acidosis alone",
        "explanation": "Incorrect. This has its own band. This would be the correct answer if the question had asked about sudden CO2 retention."
      },
      {
        "text": "An isolated rise in the anion gap",
        "explanation": "Incorrect. The map omits the gap. This would be the correct answer if the question had asked about electrolyte analysis."
      },
      {
        "text": "A mixed acid-base disorder",
        "explanation": "Correct. Each band marks a simple disorder with its expected compensation, so values between bands mean two processes. The map is a quick screen; renal rules confirm."
      },
      {
        "text": "Normal ventilation and renal function",
        "explanation": "Incorrect. This plots in the oval. This would be the correct answer if the question had asked about the normal zone."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Values falling between the shaded bands of the acid-base map indicate a mixed disorder.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 17,
    "pdfQuote": "Mixed disorder"
  },
  {
    "id": 20,
    "category": "Acid-Base Disorders: Compensation",
    "questionText": "Renal rules are used in a simple acid-base disorder to predict what?",
    "options": [
      {
        "text": "The plasma anion gap",
        "explanation": "Incorrect. Electrolytes give the gap. This would be the correct answer if the question had asked about unmeasured anions."
      },
      {
        "text": "The serum osmolar gap",
        "explanation": "Incorrect. This flags toxic alcohols. This would be the correct answer if the question had asked about methanol."
      },
      {
        "text": "Expected compensation",
        "explanation": "Correct. Each rule gives the expected change in one variable per unit change in the other, such as PCO2 per mEq/L HCO3-. Observed near expected means simple; a mismatch means mixed."
      },
      {
        "text": "The buffer's pKa",
        "explanation": "Incorrect. pKa is fixed per buffer. This would be the correct answer if the question had asked about best buffering range."
      },
      {
        "text": "The arterial PO2",
        "explanation": "Incorrect. PO2 is not included. This would be the correct answer if the question had asked about hypoxemic drive."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Compare the observed compensation with the renal-rule prediction to call a disorder simple or mixed.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 18,
    "pdfQuote": "Renal Rules for Predicting Compensatory"
  },
  {
    "id": 21,
    "category": "Metabolic Alkalosis: Causes and Events",
    "questionText": "Metabolic alkalosis produces which arterial blood profile?",
    "options": [
      {
        "text": "Low pH, low HCO3-, low PCO2",
        "explanation": "Incorrect. This is metabolic acidosis. This would be the correct answer if the question had asked about diabetic ketoacidosis."
      },
      {
        "text": "Low pH, high HCO3-, high PCO2",
        "explanation": "Incorrect. This is respiratory acidosis. This would be the correct answer if the question had asked about opiate hypoventilation."
      },
      {
        "text": "High pH, low HCO3-, low PCO2",
        "explanation": "Incorrect. This is respiratory alkalosis. This would be the correct answer if the question had asked about high altitude."
      },
      {
        "text": "High pH, high HCO3-, low PCO2",
        "explanation": "Incorrect. This suggests two alkaloses. This would be the correct answer if the question had asked about a mixed alkalosis."
      },
      {
        "text": "High pH, high HCO3-, high PCO2",
        "explanation": "Correct. The primary rise in HCO3- raises pH, and compensatory hypoventilation raises PCO2. In every simple disorder, HCO3- and PCO2 move in the same direction."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Metabolic alkalosis shows high pH, high HCO3- and a compensatory high PCO2.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 19,
    "pdfQuote": "Increased pH, increased HCO"
  },
  {
    "id": 22,
    "category": "Metabolic Alkalosis: Causes and Events",
    "questionText": "Loop and thiazide diuretics cause metabolic alkalosis mainly through which mechanism?",
    "options": [
      {
        "text": "Increased HCO3- reabsorption from volume loss",
        "explanation": "Correct. Diuretic volume loss makes the kidney hold water, and it retains HCO3- along with it. This is volume contraction alkalosis, distinct from gaining HCO3- from antacids."
      },
      {
        "text": "Direct ingestion of bicarbonate",
        "explanation": "Incorrect. This is a gain of HCO3-. This would be the correct answer if the question had asked about antacid ingestion."
      },
      {
        "text": "Gastric loss of fixed H+",
        "explanation": "Incorrect. This occurs with vomiting. This would be the correct answer if the question had asked about protracted vomiting."
      },
      {
        "text": "Stimulation of the respiratory center",
        "explanation": "Incorrect. This causes respiratory alkalosis. This would be the correct answer if the question had asked about salicylate poisoning."
      },
      {
        "text": "Hypoventilation from muscle weakness",
        "explanation": "Incorrect. This retains CO2. This would be the correct answer if the question had asked about Guillain-Barre syndrome."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Loop and thiazide diuretics cause volume contraction alkalosis through increased HCO3- reabsorption.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 19,
    "pdfQuote": "Volume contraction alkalosis"
  },
  {
    "id": 23,
    "category": "Metabolic Alkalosis: Causes and Events",
    "questionText": "In vomiting-induced metabolic alkalosis, hypokalemia arises partly because cells do what?",
    "options": [
      {
        "text": "Take up H+ with organic anions",
        "explanation": "Incorrect. This happens in acidosis. This would be the correct answer if the question had asked about acid buffering."
      },
      {
        "text": "Convert CO2 via carbonic anhydrase",
        "explanation": "Incorrect. Red cells handle CO2 loads. This would be the correct answer if the question had asked about respiratory acidosis."
      },
      {
        "text": "Shift H+ out and take K+ in",
        "explanation": "Correct. Cells release H+ to buffer the alkaline ECF and take up K+ to keep electroneutrality, lowering plasma K+. Aldosterone-driven renal K+ secretion worsens it."
      },
      {
        "text": "Release CO2 into the plasma",
        "explanation": "Incorrect. This is respiratory alkalosis buffering. This would be the correct answer if the question had asked about hyperventilation."
      },
      {
        "text": "Secrete bicarbonate into chyme",
        "explanation": "Incorrect. The pancreas does this. This would be the correct answer if the question had asked about duodenal buffering."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Alkalosis drives K+ into cells as H+ leaves them, so metabolic alkalosis brings hypokalemia.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 22,
    "pdfQuote": "Sequence of Events in Metabolic Alkalosis"
  },
  {
    "id": 24,
    "category": "Metabolic Alkalosis: Causes and Events",
    "questionText": "Volume contraction from vomiting sustains metabolic alkalosis mainly through which renal effect?",
    "options": [
      {
        "text": "Increased potassium retention",
        "explanation": "Incorrect. Aldosterone secretes K+. This would be the correct answer if the question had asked about potassium-sparing states."
      },
      {
        "text": "Bicarbonate excretion into urine",
        "explanation": "Incorrect. This is the final correction. This would be the correct answer if the question had asked about renal correction."
      },
      {
        "text": "Loss of sodium in urine",
        "explanation": "Incorrect. Sodium is conserved here. This would be the correct answer if the question had asked about diuretic effects."
      },
      {
        "text": "Increased H+ secretion to retain Na+",
        "explanation": "Correct. Angiotensin II and aldosterone conserve Na+ in exchange for H+, and filtered HCO3- is reabsorbed. This cements the alkalosis, and saline can fix some cases."
      },
      {
        "text": "Dilute urine with free water loss",
        "explanation": "Incorrect. Volume loss retains water. This would be the correct answer if the question had asked about volume expansion."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: In vomiting, volume contraction activates angiotensin II and aldosterone, which keep the alkalosis going.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 23,
    "pdfQuote": "Generation and Maintenance of Metabolic"
  },
  {
    "id": 25,
    "category": "Metabolic Acidosis: Causes and Events",
    "questionText": "Diarrhea and type 2 renal tubular acidosis cause metabolic acidosis through which mechanism?",
    "options": [
      {
        "text": "Gain of fixed acid",
        "explanation": "Incorrect. This drives ketoacidosis. This would be the correct answer if the question had asked about diabetic ketoacidosis."
      },
      {
        "text": "Loss of bicarbonate",
        "explanation": "Correct. Diarrhea loses HCO3- in stool and type 2 RTA fails to recapture filtered HCO3-. Types 1 and 4 RTA instead fail to excrete fixed H+."
      },
      {
        "text": "Failure to excrete fixed acid",
        "explanation": "Incorrect. This fits type 1 RTA. This would be the correct answer if the question had asked about chronic kidney disease."
      },
      {
        "text": "Retention of carbon dioxide",
        "explanation": "Incorrect. This causes respiratory acidosis. This would be the correct answer if the question had asked about COPD."
      },
      {
        "text": "Volume contraction from diuretics",
        "explanation": "Incorrect. This causes alkalosis. This would be the correct answer if the question had asked about metabolic alkalosis."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Diarrhea and type 2 RTA cause acidosis by losing bicarbonate, not by adding acid.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 24,
    "pdfQuote": "Inability to excrete fixed"
  },
  {
    "id": 26,
    "category": "Metabolic Acidosis: Causes and Events",
    "questionText": "In diabetic ketoacidosis, which unmeasured anions widen the plasma anion gap?",
    "options": [
      {
        "text": "Lactate from anaerobic metabolism",
        "explanation": "Incorrect. Lactate marks lactic acidosis. This would be the correct answer if the question had asked about tissue hypoperfusion."
      },
      {
        "text": "Salicylate from aspirin",
        "explanation": "Incorrect. Salicylate is a separate cause. This would be the correct answer if the question had asked about aspirin poisoning."
      },
      {
        "text": "Glucose and its breakdown products",
        "explanation": "Incorrect. Glucose is uncharged. This would be the correct answer if the question had asked about glycosuria."
      },
      {
        "text": "Beta-hydroxybutyrate and acetoacetate",
        "explanation": "Correct. Uncontrolled type 1 diabetes produces the ketoacids beta-hydroxybutyrate and acetoacetate, whose anions widen the gap. Urine ketones confirm their source."
      },
      {
        "text": "Chloride retained by the kidney",
        "explanation": "Incorrect. Chloride keeps the gap normal. This would be the correct answer if the question had asked about hyperchloremic acidosis."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: The ketoacid anions beta-hydroxybutyrate and acetoacetate cause the high anion gap of DKA.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 27,
    "pdfQuote": "acetoacetate are the likely unmeasured"
  },
  {
    "id": 27,
    "category": "Metabolic Acidosis: Causes and Events",
    "questionText": "In metabolic acidosis, intracellular buffering of excess H+ commonly produces which electrolyte change?",
    "options": [
      {
        "text": "Increased plasma bicarbonate",
        "explanation": "Incorrect. HCO3- falls in this state. This would be the correct answer if the question had asked about metabolic alkalosis."
      },
      {
        "text": "Increased plasma K+ from cells",
        "explanation": "Correct. H+ enters cells to be buffered by proteins and organic phosphates, and K+ leaves to keep electroneutrality. Metabolic alkalosis shifts K+ the other way."
      },
      {
        "text": "Increased Na+ from renal retention",
        "explanation": "Incorrect. Aldosterone retains sodium. This would be the correct answer if the question had asked about volume contraction."
      },
      {
        "text": "Decreased Na+ from water gain",
        "explanation": "Incorrect. Water gain dilutes sodium. This would be the correct answer if the question had asked about dilutional states."
      },
      {
        "text": "Decreased plasma chloride",
        "explanation": "Incorrect. Chloride rises if anything. This would be the correct answer if the question had asked about vomiting chloride loss."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Acidosis pushes H+ into cells and K+ out, so metabolic acidosis often brings hyperkalemia.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 28,
    "pdfQuote": "Sequence of Events in Metabolic Acidosis"
  },
  {
    "id": 28,
    "category": "Respiratory Disorders: Causes and Compensation",
    "questionText": "Opiates and barbiturates cause respiratory acidosis through which mechanism?",
    "options": [
      {
        "text": "Weakness of respiratory muscles",
        "explanation": "Incorrect. This weakens the pump. This would be the correct answer if the question had asked about Guillain-Barre syndrome or ALS."
      },
      {
        "text": "Obstruction of the upper airway",
        "explanation": "Incorrect. This blocks airflow. This would be the correct answer if the question had asked about laryngospasm."
      },
      {
        "text": "Impaired alveolar gas exchange",
        "explanation": "Incorrect. This traps CO2 in lungs. This would be the correct answer if the question had asked about COPD."
      },
      {
        "text": "Hypoxemia-driven hyperventilation",
        "explanation": "Incorrect. This causes alkalosis. This would be the correct answer if the question had asked about high altitude."
      },
      {
        "text": "Decreased medullary respiratory drive",
        "explanation": "Correct. These drugs suppress the brainstem respiratory center, so ventilation falls and CO2 is retained. Anesthetics and central sleep apnea act the same way."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: CNS depressants cause respiratory acidosis by suppressing the medullary respiratory center.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 29,
    "pdfQuote": "Inhibition of the medullary respiratory center"
  },
  {
    "id": 29,
    "category": "Respiratory Disorders: Causes and Compensation",
    "questionText": "Hypoxemia at high altitude causes which primary acid-base disorder?",
    "options": [
      {
        "text": "Respiratory alkalosis",
        "explanation": "Correct. Hypoxemia stimulates breathing, and the excess CO2 loss lowers PCO2 and raises pH. Pneumonia and pulmonary embolism act through the same hypoxemic drive."
      },
      {
        "text": "Respiratory acidosis",
        "explanation": "Incorrect. This follows hypoventilation. This would be the correct answer if the question had asked about opiate overdose."
      },
      {
        "text": "Metabolic alkalosis",
        "explanation": "Incorrect. This is a primary HCO3- rise. This would be the correct answer if the question had asked about protracted vomiting."
      },
      {
        "text": "Metabolic acidosis",
        "explanation": "Incorrect. This is a primary HCO3- fall. This would be the correct answer if the question had asked about diarrhea."
      },
      {
        "text": "Mixed metabolic and respiratory acidosis",
        "explanation": "Incorrect. This needs two acid processes. This would be the correct answer if the question had asked about lactic acidosis with hypoventilation."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Hypoxemia drives hyperventilation, so high altitude causes respiratory alkalosis.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 31,
    "pdfQuote": "High altitude, pneumonia, pulmonary embolism"
  },
  {
    "id": 30,
    "category": "Respiratory Disorders: Causes and Compensation",
    "questionText": "The kidney compensates for respiratory alkalosis by which change?",
    "options": [
      {
        "text": "Increased bicarbonate recovery",
        "explanation": "Incorrect. This compensates CO2 retention. This would be the correct answer if the question had asked about respiratory acidosis."
      },
      {
        "text": "Hypoventilation to retain CO2",
        "explanation": "Incorrect. Breathing is the cause here. This would be the correct answer if the question had asked about metabolic alkalosis."
      },
      {
        "text": "Decreased ammonium excretion",
        "explanation": "Correct. The kidney excretes less H+ as NH4+ and recovers and makes less HCO3-, lowering HCO3- toward the low PCO2. The full effect takes days."
      },
      {
        "text": "Red cell uptake of CO2",
        "explanation": "Incorrect. CO2 leaves red cells here. This would be the correct answer if the question had asked about CO2 retention."
      },
      {
        "text": "Retention of filtered sodium",
        "explanation": "Incorrect. This is a volume response. This would be the correct answer if the question had asked about volume contraction."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: In respiratory alkalosis the kidney excretes less H+ and recovers less HCO3-.",
    "lectureSource": "CV59: Pathophysiology: Acid-Base Disorders",
    "pdfLecture": "CV59",
    "pdfPage": 32,
    "pdfQuote": "Sequence of Events in Respiratory Alkalosis"
  }
];

window.Test_CV59_Recall = Test_CV59_Recall;
