const Test_CV48 = [
  {
    "id": 1,
    "category": "Respiratory Physiology: Gas Laws",
    "questionText": "A 22-year-old volunteer breathes through a mouthpiece while intrapulmonary pressure and thoracic volume are recorded simultaneously. As she begins a quiet inspiration, the tracing shows thoracic volume rising a fraction of a second before airflow into the lungs begins. Airway gas temperature is held constant throughout the maneuver. No change is made to the composition of the inspired mixture. Which relationship best explains why air subsequently moves from the atmosphere into her lungs?",
    "options": [
      {
        "text": "Expansion of the thorax raises intrapulmonary pressure above atmospheric pressure",
        "explanation": "Incorrect. If intrapulmonary pressure rose above atmospheric, gas would leave the lungs rather than enter them, which is the opposite of what the tracing shows. Pressure and volume move in opposite directions at fixed temperature, so an expanding thorax must lower pressure. This would be the correct answer if the tracing showed a falling thoracic volume during expiration."
      },
      {
        "text": "The number of gas molecules in the alveoli rises first and then increases the volume",
        "explanation": "Incorrect. The tracing explicitly shows volume changing before any airflow, so molecules cannot have entered first. Volume change is the driving event and molecule entry is the consequence. This would be the correct answer if gas were being actively pumped into a rigid container, as when a compressed cylinder is refilled at a filling station."
      },
      {
        "text": "At constant temperature the rise in thoracic volume lowers intrapulmonary pressure",
        "explanation": "Correct. Boyle's law states that at a given temperature the product of pressure and volume is constant, so the two are inversely proportional. Expanding the rib cage increases thoracic volume, which spreads the same number of molecules over a larger space so they collide less often, and pressure falls below atmospheric. Air then flows down that pressure difference into the lungs, and the reverse sequence produces expiration. This is precisely why the lecturer frames rhythmic breathing as an application of Boyle's law."
      },
      {
        "text": "Warming of the inspired air within the conducting airways drives the volume change that follows",
        "explanation": "Incorrect. The stem specifies that airway temperature is held constant, which removes temperature as the variable in play. Warming would matter in the general gas law, where P depends on both n and T, but here the manipulated variable is volume. This would be the correct answer if a rigid gas cylinder at fixed volume were moved from a cool room into direct sunlight."
      },
      {
        "text": "Water vapor added in the trachea raises the total pressure of the alveolar gas mixture",
        "explanation": "Incorrect. Humidification does not raise total pressure; it contributes 47 mmHg of water vapor that dilutes the other gases within an unchanged total. That effect lowers tracheal PO2 from 160 to 150 mmHg but does not generate bulk airflow. This would be the correct answer if the question asked why tracheal PO2 is lower than ambient PO2."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Boyle's law is the engine of ventilation. Thoracic expansion lowers intrapulmonary pressure below atmospheric, and air flows in; the reverse produces expiration.",
    "pdfPage": 4,
    "pdfQuote": "the product of pressure x volume for a gas is constant"
  },
  {
    "id": 2,
    "category": "Respiratory Physiology: Gas Laws",
    "questionText": "A pulmonary function laboratory reports a patient's gas volumes twice. The first report assumes the conditions of gas as it actually exists within the alveoli: 37 degrees Celsius, ambient pressure, and full saturation with water vapor. The second report converts the same measurements to a standardized set of conditions so the values can be compared with data from other laboratories. Which set of conditions was used for the second report?",
    "options": [
      {
        "text": "0 degrees Celsius, 760 mmHg, and dry gas",
        "explanation": "Correct. These are the STPD conditions: standard temperature of 0 degrees Celsius or 273 Kelvin, standard pressure of 760 mmHg at sea level, and dry gas. Removing water vapor and fixing both temperature and pressure eliminates the three variables that otherwise make one laboratory's volumes incomparable with another's. The lecturer contrasts this directly with BTPS, which describes gas as it actually sits in the lung."
      },
      {
        "text": "37 degrees Celsius, 760 mmHg, and gas fully saturated with water vapor",
        "explanation": "Incorrect. This mixes body temperature and saturation, both of which belong to BTPS, with a fixed standard pressure. Standardization requires that the temperature and the water vapor be removed as variables, not just the pressure. This would be the correct answer if the question asked for the conditions of gas in the lungs of a subject who happened to be at sea level."
      },
      {
        "text": "0 degrees Celsius, ambient pressure, and gas saturated with water vapor",
        "explanation": "Incorrect. Saturation with water vapor and ambient pressure are BTPS features, and STPD specifically assumes dry gas at 760 mmHg. Retaining water vapor would leave 47 mmHg of variable pressure in the measurement. This would be the correct answer if a standard existed that fixed only temperature, which is not one of the two conditions taught here."
      },
      {
        "text": "37 degrees Celsius, ambient pressure, and dry gas at the patient's bedside altitude",
        "explanation": "Incorrect. This is BTPS with the saturation requirement removed, which describes no standard condition taught in this lecture. Ambient pressure at the bedside is exactly the variable that standardization is meant to eliminate. This would be the correct answer if a laboratory wished to report gas that had been chemically dried but not otherwise corrected."
      },
      {
        "text": "20 degrees Celsius, 760 mmHg, and gas humidified to 47 mmHg of water vapor",
        "explanation": "Incorrect. Room temperature is not one of the two standards defined in this lecture, and 47 mmHg is the water vapor pressure at 37 degrees Celsius, not at 20. STPD requires dry gas at 0 degrees Celsius. This would be the correct answer if the lecture had defined an ATPS convention, which it does not."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: BTPS = 37 C (310 K), ambient pressure, saturated with water vapor, the lung's own state. STPD = 0 C (273 K), 760 mmHg, dry, used to standardize measurements.",
    "pdfPage": 3,
    "pdfQuote": "STPD: standard temperature (0° C, or 273K)"
  },
  {
    "id": 3,
    "category": "Respiratory Physiology: Dalton's Law",
    "questionText": "A physiologist samples gas from the mid-trachea of a healthy subject breathing room air at sea level. Barometric pressure is 760 mmHg and the fractional concentration of oxygen in the inspired mixture is 0.21. By the time gas reaches this sampling point it has been fully saturated with water vapor at body temperature. The subject has no lung disease and a normal respiratory rate. Which value best represents the PO2 of this tracheal gas, and on what basis?",
    "options": [
      {
        "text": "160 mmHg, because humidification does not change the fractional concentration of oxygen",
        "explanation": "Incorrect. 160 mmHg is ambient dry air, before humidification. Water vapor occupies part of the total pressure, so the fraction of oxygen is applied to a smaller remaining pressure once the gas is saturated. This would be the correct answer if gas were being sampled from the room rather than from the airway."
      },
      {
        "text": "100 mmHg, because oxygen has already diffused into pulmonary capillary blood at this point",
        "explanation": "Incorrect. 100 mmHg is the alveolar value, reached only after mixing with dead-space gas and after oxygen has been taken up by capillary blood. The trachea is a conducting airway where no gas exchange occurs. This would be the correct answer if the sample had been drawn from alveolar gas rather than mid-tracheal gas."
      },
      {
        "text": "713 mmHg, because the water vapor pressure is subtracted from the barometric pressure",
        "explanation": "Incorrect. 713 mmHg is the total pressure of the humidified mixture, not the partial pressure of oxygen within it. The fractional concentration of oxygen must still be applied to that corrected total. This would be the correct answer if the subject were breathing 100 percent oxygen so that F equaled 1.0."
      },
      {
        "text": "120 mmHg, because dead-space gas from the previous breath dilutes the inspired oxygen here",
        "explanation": "Incorrect. Dead-space mixing does contribute to the further fall from tracheal gas toward the alveolar value, but it is not the calculation the lecturer performs at the tracheal level. The tracheal number is derived from humidification alone. This would be the correct answer if the question asked why alveolar PO2 falls below tracheal PO2."
      },
      {
        "text": "150 mmHg, from (760 minus 47) times 0.21",
        "explanation": "Correct. Dalton's law corrected for water vapor states that Px equals barometric pressure minus water vapor pressure, multiplied by the fractional concentration of the gas. Water vapor at 37 degrees Celsius exerts 47 mmHg, so the usable pressure is 713 mmHg, and 713 times 0.21 gives 150 mmHg. This is why humidification alone costs 10 mmHg of oxygen tension between the room and the trachea, and it is the calculation printed on the lecture slide."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: humidified tracheal PO2 = (760 - 47) x 0.21 = 150 mmHg. Water vapor at body temperature always occupies 47 mmHg of the total.",
    "pdfPage": 11,
    "pdfQuote": "The PO2 of humidified tracheal air is 150 mm Hg"
  },
  {
    "id": 4,
    "category": "Respiratory Physiology: Henry's Law",
    "questionText": "A researcher introduces a test gas into a sample of whole blood. The gas is known to bind avidly and rapidly to albumin. Chemical assay confirms that a large quantity of the gas is present in the sample, yet the measured partial pressure of the gas barely rises above baseline. The sample is at body temperature and the assay equipment is functioning correctly. Which statement best explains this finding?",
    "options": [
      {
        "text": "Albumin binding chemically converts the gas into bicarbonate, which is not measured as a pressure",
        "explanation": "Incorrect. Chemical modification to bicarbonate is a route described for carbon dioxide, not a general consequence of protein binding. Albumin binding is a physical association, not a chemical conversion. This would be the correct answer if the gas in question were carbon dioxide entering the bicarbonate buffer system."
      },
      {
        "text": "Only gas that is free in solution exerts a partial pressure",
        "explanation": "Correct. Henry's law converts partial pressure to dissolved concentration and applies exclusively to gas free in solution. Gas bound to a protein such as albumin or hemoglobin is sequestered out of the dissolved compartment and therefore contributes nothing to the measured partial pressure. This is exactly why most oxygen, which travels bound to hemoglobin, is invisible to a PO2 measurement, and why total content and partial pressure can diverge so widely."
      },
      {
        "text": "The solubility coefficient of a gas falls progressively as its concentration in blood rises",
        "explanation": "Incorrect. Solubility in Henry's law is treated as a constant property of the gas in that liquid, not a value that changes with concentration. The failure of the pressure to rise is explained by binding, not by a shifting solubility term. This would be the correct answer if the question described saturation of a solvent rather than protein binding."
      },
      {
        "text": "Partial pressure can only be generated by gases that also appear in Fick's diffusion equation",
        "explanation": "Incorrect. Fick's law describes the rate of transfer across a membrane and does not determine whether a gas exerts a pressure in solution. Any dissolved gas exerts a partial pressure regardless of its diffusion behavior. This would be the correct answer if the question asked which variable determines the rate at which a gas crosses the alveolar barrier."
      },
      {
        "text": "Protein binding lowers the barometric pressure to which the blood sample is equilibrated",
        "explanation": "Incorrect. Barometric pressure is an external condition of the gas phase and is entirely unaffected by what proteins in the blood do. The measurement here reflects the dissolved gas in the liquid phase. This would be the correct answer if the sample had been moved to a hypobaric chamber during the experiment."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: partial pressure reflects dissolved gas only. Gas bound to hemoglobin or albumin exerts no partial pressure at all.",
    "pdfPage": 6,
    "pdfQuote": "Only applicable to gases free in solution, NOT bound"
  },
  {
    "id": 5,
    "category": "Respiratory Physiology: Fick's Law",
    "questionText": "Two gases are presented to the same alveolar-capillary membrane across identical partial pressure gradients and identical surface areas in an isolated lung preparation. Carbon dioxide crosses into the perfusate far more readily than oxygen does. The membrane thickness is the same for both gases because it is the same membrane. Which property accounts for this difference, and what is its clinical consequence?",
    "options": [
      {
        "text": "Carbon dioxide has a larger molecular radius, so it is carried by facilitated transporters",
        "explanation": "Incorrect. Diffusion across the respiratory membrane is a passive physical process described by Fick's law, with no transporter involved. Molecular size is not the variable the lecturer identifies. This would be the correct answer if the question concerned a solute crossing a cell membrane by carrier-mediated transport."
      },
      {
        "text": "Carbon dioxide binds hemoglobin faster, so it clears the membrane before oxygen can cross",
        "explanation": "Incorrect. Hemoglobin binding affects what happens after a gas reaches the blood, not the rate at which it crosses the membrane in Fick's equation. Rapid binding actually removes a gas from the dissolved compartment, which is the carbon monoxide story rather than the carbon dioxide story. This would be the correct answer if the question described carbon monoxide uptake."
      },
      {
        "text": "Oxygen has the greater diffusion coefficient but a smaller surface area available to it",
        "explanation": "Incorrect. The comparison is reversed: carbon dioxide, not oxygen, has the larger diffusion coefficient. Both gases also see the same alveolar surface area, since it is the same membrane. This would be the correct answer if a disease selectively reduced the surface area available to only one of the two gases, which does not occur."
      },
      {
        "text": "The diffusion coefficient of CO2 is about 50 times that of O2, so O2 fails first in disease",
        "explanation": "Correct. The lecturer emphasizes that D for carbon dioxide is roughly 50 times that for oxygen because carbon dioxide is far more soluble in blood and water. In Fick's equation the diffusion coefficient multiplies the whole transfer term, so carbon dioxide moves with an enormous margin of safety. The consequence is that when the alveolar-capillary membrane thickens or its area is lost, oxygen transfer fails while carbon dioxide elimination is preserved, which is why interstitial disease presents with hypoxemia and a normal or low PCO2."
      },
      {
        "text": "Oxygen is more soluble in plasma, so its transfer becomes limited by capillary transit time instead",
        "explanation": "Incorrect. Oxygen is the less soluble of the two gases, which is precisely why it is the poorer diffuser. Transit time limitation is a separate concept that applies once equilibration is complete. This would be the correct answer if the question concerned why normal oxygen uptake is perfusion-limited rather than why carbon dioxide crosses faster."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: D for CO2 is roughly 50 times that of O2. Oxygen is the poor diffuser, so it is the gas that fails first when the membrane is diseased.",
    "pdfPage": 7,
    "pdfQuote": "D CO2 >> D O2"
  },
  {
    "id": 6,
    "category": "Respiratory Physiology: Fick's Law",
    "questionText": "A patient with acute decompensated heart failure accumulates fluid in the interstitial space between the alveolar wall and the pulmonary capillary. Over several hours his arterial oxygenation falls progressively while his arterial PCO2 remains normal. Imaging confirms interstitial edema without alveolar destruction. Alveolar ventilation and inspired oxygen fraction are unchanged. Which change in Fick's equation best explains the oxygenation defect?",
    "options": [
      {
        "text": "An increase in delta x, the thickness of the barrier that gas must cross",
        "explanation": "Correct. Interstitial fluid physically inserts itself between the alveolus and the capillary, lengthening the path a gas molecule must travel. Because delta x is the denominator of Vx equals D times A times delta P divided by delta x, transfer falls as thickness rises. Oxygen, with a diffusion coefficient roughly 50 times below that of carbon dioxide, loses its margin first, which is why hypoxemia appears while PCO2 stays normal. The lecturer groups edema with fibrosis for exactly this reason."
      },
      {
        "text": "A decrease in A, the alveolar surface area available for gas exchange",
        "explanation": "Incorrect. Loss of surface area is the emphysema lesion, produced by destruction of alveolar walls, and imaging here shows intact alveoli with interstitial fluid. Edema adds distance rather than removing area. This would be the correct answer if the patient had panlobular alveolar wall destruction from long-standing smoking."
      },
      {
        "text": "An increase in D, the diffusion coefficient that is specific to each individual gas",
        "explanation": "Incorrect. The diffusion coefficient is a fixed property of the gas in the medium and is not altered by pulmonary edema. Even if it were, an increase would improve rather than impair transfer. This would be the correct answer if the question compared two different gases across the same membrane."
      },
      {
        "text": "A decrease in delta P, resulting from a fall in the barometric pressure of the inspired gas",
        "explanation": "Incorrect. Barometric pressure has not changed, since the patient is not at altitude and the inspired oxygen fraction is unchanged. The gradient across the membrane is intact; it is the path length that has grown. This would be the correct answer if the patient had been transported to high altitude where alveolar PO2 falls toward 50 mmHg."
      },
      {
        "text": "A decrease in the solubility of oxygen in plasma, reducing the dissolved fraction that is measured",
        "explanation": "Incorrect. Solubility is a constant of the gas in blood and does not fall in heart failure. Solubility belongs to Henry's law, which converts pressure to concentration, rather than to the diffusion term impaired here. This would be the correct answer if the question asked why oxygen contributes so little to the dissolved compartment compared with carbon dioxide."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: pulmonary edema and fibrosis both raise delta x, the denominator of Fick's equation. Oxygen fails before carbon dioxide does.",
    "pdfPage": 7,
    "pdfQuote": "X = Thickness of the membrane"
  },
  {
    "id": 7,
    "category": "Respiratory Physiology: Lung Diffusion Capacity",
    "questionText": "An investigator wants a single number that describes how easily oxygen moves from alveolar air into pulmonary capillary blood in an intact human being. She notes that Fick's law alone is insufficient for this purpose because its partial pressure term describes only part of the oxygen present in blood. She therefore uses lung diffusion capacity instead. Which additional factor does lung diffusion capacity account for that Fick's law does not?",
    "options": [
      {
        "text": "The barometric pressure of the inspired gas at the subject's current altitude",
        "explanation": "Incorrect. Barometric pressure influences alveolar partial pressure and therefore the gradient term, which Fick's law already contains. It is not the extra element that diffusion capacity adds. This would be the correct answer if the question asked what changes when a subject ascends to high altitude."
      },
      {
        "text": "The rhythmic pressure and volume changes generated by the chest wall during breathing",
        "explanation": "Incorrect. Bulk ventilation is governed by Boyle's law and is a separate step from transfer across the respiratory membrane. Diffusion capacity describes the membrane and the blood, not the pump. This would be the correct answer if the question concerned why air moves into and out of the lungs."
      },
      {
        "text": "Gas that is bound to protein rather than free in solution",
        "explanation": "Correct. Fick's law uses a partial pressure gradient, and partial pressure reflects only gas free in solution. Since most oxygen and a share of carbon dioxide are carried bound to hemoglobin, a purely pressure-based description misses most of the gas actually being transferred. Lung diffusion capacity combines the diffusion coefficient, surface area and membrane thickness and additionally accounts for protein-bound gas, which the lecturer calls a much more accurate physiologic consideration."
      },
      {
        "text": "The fractional concentration of each individual gas within the inspired air mixture",
        "explanation": "Incorrect. Fractional concentration belongs to Dalton's law and is used to derive partial pressures upstream of the membrane. It is not the gap in Fick's law that diffusion capacity fills. This would be the correct answer if the question asked how inspired PO2 is calculated from barometric pressure."
      },
      {
        "text": "The rate at which the pulmonary capillary bed is refilled with mixed venous blood during each cycle",
        "explanation": "Incorrect. Blood flow determines whether exchange is perfusion-limited, which is a different concept from the diffusing properties captured by diffusion capacity. Diffusion capacity describes how readily gas crosses, not how fast blood arrives. This would be the correct answer if the question asked what limits oxygen uptake once capillary blood has already equilibrated."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: lung diffusion capacity combines D, A and delta x, and unlike Fick's law alone it also accounts for gases bound to protein.",
    "pdfPage": 7,
    "pdfQuote": "Lung diffusing capacity (Dl): Combines D, A"
  },
  {
    "id": 8,
    "category": "Respiratory Physiology: Lung Diffusion Capacity",
    "questionText": "A 34-year-old woman with several years of heavy menstrual bleeding has a hemoglobin of 7.2 g/dL. Her chest radiograph is clear, spirometry is normal, and there is no evidence of interstitial thickening or alveolar destruction. Her oxygen saturation on room air is 99 percent. Nevertheless her measured lung diffusion capacity is reduced. Which mechanism best explains this finding?",
    "options": [
      {
        "text": "Alveolar surface area is reduced because low hemoglobin leads to destruction of alveolar walls",
        "explanation": "Incorrect. Anemia does not destroy alveolar walls, and the imaging here explicitly shows no alveolar destruction. Loss of surface area is the emphysema mechanism. This would be the correct answer if the patient were a long-standing smoker with radiographic hyperinflation and wall destruction."
      },
      {
        "text": "The alveolar-capillary barrier is thickened by extramedullary hematopoiesis within the septa",
        "explanation": "Incorrect. There is no interstitial thickening on imaging, and barrier thickening is the fibrosis and edema mechanism rather than an anemia mechanism. The membrane in this patient is normal. This would be the correct answer if the patient had radiographic reticular changes and a restrictive pattern on spirometry."
      },
      {
        "text": "Alveolar PO2 is reduced because a low red cell count reduces ventilation of the alveoli",
        "explanation": "Incorrect. Alveolar PO2 is set by inspired oxygen fraction, barometric pressure and ventilation, none of which are altered by the hemoglobin concentration itself. Her saturation of 99 percent indicates alveolar oxygenation is intact. This would be the correct answer if she were hypoventilating or breathing a hypoxic gas mixture."
      },
      {
        "text": "The diffusion coefficient of oxygen falls when plasma viscosity is reduced by the anemia",
        "explanation": "Incorrect. The diffusion coefficient is a property of the gas in the medium and is not among the determinants of diffusion capacity that the lecturer lists. Viscosity is not part of the equation taught here. This would be the correct answer if the question compared carbon dioxide with oxygen across the same membrane."
      },
      {
        "text": "Too few red cells are available to take up the oxygen that reaches the alveolus",
        "explanation": "Correct. The lecturer lists red blood cell number as a determinant of lung diffusion capacity precisely because the measurement includes gas that binds to protein. There may be plenty of oxygen in the alveolus and a perfectly normal membrane, but with fewer hemoglobin molecules arriving there are fewer binding sites to absorb it, so measured transfer falls. This is why a low diffusion capacity must always be interpreted alongside the hemoglobin concentration before it is attributed to lung disease."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: a low diffusion capacity is not always lung disease. Red cell number is a determinant, so anemia lowers it with entirely normal lungs.",
    "pdfPage": 8,
    "pdfQuote": "How well oxygen gets into the blood from the air you breathe"
  },
  {
    "id": 9,
    "category": "Respiratory Physiology: Oxygen Transport",
    "questionText": "An arterial blood gas drawn from a chronically ill patient shows a PO2 of 98 mmHg on room air. The laboratory separately measures the total quantity of oxygen carried per 100 mL of blood and reports it as markedly below normal. Her hemoglobin is 6.0 g/dL and her lungs are radiographically clear. She is not in respiratory distress. Which statement best interprets these findings?",
    "options": [
      {
        "text": "PO2 is normal because oxygen bound to hemoglobin contributes fully to the measured pressure",
        "explanation": "Incorrect. Bound oxygen contributes nothing to partial pressure; only the dissolved fraction does. If bound oxygen counted, a severely anemic patient would show a low PO2, which is not what happens. This would be the correct answer if partial pressure measured total content rather than the dissolved compartment."
      },
      {
        "text": "PO2 reports dissolved oxygen only, so it stays normal while oxygen content falls",
        "explanation": "Correct. The lecture distinguishes three forms of gas in blood: dissolved, protein-bound and chemically modified. PO2 reflects only the dissolved form, oxygen saturation reflects the hemoglobin-bound form, and oxygen content is the sum of all forms. With normal lungs the dissolved fraction equilibrates normally, so PO2 is preserved, while a hemoglobin of 6.0 g/dL removes most of the carrying capacity and content collapses. This is why content and partial pressure must be read as separate numbers."
      },
      {
        "text": "Oxygen content and PO2 always change together, so one of these two values must be erroneous",
        "explanation": "Incorrect. The two values measure different compartments and routinely diverge, which is the entire point of separating them on a blood gas report. Neither result needs to be a laboratory error. This would be the correct answer if PO2 measured total oxygen carried in all forms."
      },
      {
        "text": "The low oxygen content proves that an alveolar-capillary diffusion barrier is present in this patient",
        "explanation": "Incorrect. A diffusion barrier would lower the PO2 as well, because it impairs equilibration of the dissolved compartment. Here the PO2 is normal and the lungs are clear, pointing to a carrying-capacity problem rather than a membrane problem. This would be the correct answer if her PO2 were 55 mmHg with reticular changes on imaging."
      },
      {
        "text": "Her oxygen saturation must also be low, because saturation is calculated directly from the PO2 value",
        "explanation": "Incorrect. Saturation reports the percentage of available hemoglobin that is carrying oxygen, and with a normal PO2 that percentage can be entirely normal even when total hemoglobin is low. Saturation is a proportion, not a quantity. This would be the correct answer if the question asked about a patient whose PO2 was low enough to leave hemoglobin partly unsaturated."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: O2 content is the total across all forms, O2 saturation is the bound fraction, and PO2 is the dissolved fraction only.",
    "pdfPage": 9,
    "pdfQuote": "Dissolved, bound, chemically modified"
  },
  {
    "id": 10,
    "category": "Respiratory Physiology: Gas Exchange",
    "questionText": "Gas is sampled simultaneously from ambient room air and from the alveolar space of a healthy subject at sea level. The ambient sample shows a PO2 of about 160 mmHg with essentially no carbon dioxide. The subject is breathing quietly, has normal lungs and is not hyperventilating. Which pair of alveolar values is expected, and what accounts for the change from ambient air?",
    "options": [
      {
        "text": "PO2 160 and PCO2 40, since oxygen is unchanged while carbon dioxide is added by the blood",
        "explanation": "Incorrect. Alveolar PO2 cannot remain at the ambient value, because humidification and dead-space mixing lower it before exchange even begins, and capillary uptake lowers it further. The carbon dioxide figure is right but the oxygen figure is not. This would be the correct answer if the alveolus received undiluted room air with no gas exchange occurring."
      },
      {
        "text": "PO2 150 and PCO2 0, since humidification is the only change occurring by the alveolar level",
        "explanation": "Incorrect. 150 mmHg with essentially no carbon dioxide describes humidified tracheal gas, one step upstream of the alveolus. At the alveolus, oxygen has been taken up and carbon dioxide has been delivered. This would be the correct answer if the sample had been drawn from the mid-trachea."
      },
      {
        "text": "PO2 100 and PCO2 0, since carbon dioxide is removed before gas reaches the alveolar space",
        "explanation": "Incorrect. Carbon dioxide enters the alveolus from the pulmonary capillary blood, so alveolar gas is where PCO2 first becomes substantial. It is not removed upstream. This would be the correct answer if carbon dioxide were scrubbed by the conducting airways, which does not occur."
      },
      {
        "text": "PO2 100 and PCO2 40, since oxygen is taken up and carbon dioxide is added",
        "explanation": "Correct. By the time inspired gas reaches the alveolus it has been humidified, mixed with dead-space gas and then equilibrated with pulmonary capillary blood, so PO2 falls from 160 in room air to about 100 mmHg. At the same time carbon dioxide delivered from mixed venous blood raises alveolar PCO2 to about 40 mmHg. These two numbers are the reference points from which the remainder of the oxygen cascade is read."
      },
      {
        "text": "PO2 40 and PCO2 100, since the values of the two gases are effectively reversed in alveolar gas",
        "explanation": "Incorrect. The numbers are transposed: 40 mmHg is the alveolar carbon dioxide value and roughly 45 mmHg is the mixed venous oxygen tension entering the capillary. A PCO2 of 100 mmHg would represent profound respiratory failure. This would be the correct answer if the question asked for the partial pressures in severely hypercapnic mixed venous blood, which is not what is described."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: alveolar gas sits at PO2 about 100 mmHg and PCO2 about 40 mmHg, down from 160 mmHg of oxygen and almost no carbon dioxide in room air.",
    "pdfPage": 10,
    "pdfQuote": "Gas Exchange in the Lungs"
  },
  {
    "id": 11,
    "category": "Respiratory Physiology: Gas Exchange",
    "questionText": "In an anesthetized research subject with entirely normal lungs, a physiologist samples blood at the very end of a pulmonary capillary and finds a PO2 of 107 mmHg. A simultaneous systemic arterial sample from the same subject shows a PO2 of 100 mmHg. Alveolar PO2 is 100 mmHg, ventilation is normal, and there is no evidence of interstitial disease. Which mechanism best explains the difference between the two samples?",
    "options": [
      {
        "text": "Oxygen is consumed by the walls of the pulmonary veins during transit toward the left atrium",
        "explanation": "Incorrect. Venous wall metabolism is negligible and is not the mechanism the lecturer invokes for this specific 5 to 8 mmHg fall. The change is due to admixture of blood, not to consumption. This would be the correct answer if a large metabolically active tissue mass drained directly into the pulmonary venous stream."
      },
      {
        "text": "Bronchial blood flow and some coronary venous blood mix into the oxygenated stream",
        "explanation": "Correct. A small quantity of deoxygenated blood from the bronchial circulation, together with a small portion of coronary venous drainage, empties into the freshly oxygenated pulmonary venous blood. This physiologic shunt dilutes end-capillary blood, so even when end-capillary PO2 runs at 105 to 108 mmHg as some textbooks quote, systemic arterial PO2 lands back near 100 mmHg. The lecturer highlights this as the reason arterial PO2 does not exceed the alveolar value."
      },
      {
        "text": "Water vapor added within the left atrium dilutes the oxygen fraction of arterial blood",
        "explanation": "Incorrect. Humidification is a gas-phase phenomenon that occurs in the conducting airways, not in blood or in a cardiac chamber. Blood is already an aqueous medium. This would be the correct answer if the question asked why tracheal PO2 is lower than ambient PO2."
      },
      {
        "text": "The alveolar to arterial difference widens because alveolar ventilation exceeds capillary perfusion",
        "explanation": "Incorrect. The A to a difference does widen with certain pathologies, but this subject has normal lungs and the described fall is the small physiologic shunt rather than a ventilation-perfusion defect. Naming the finding is not the same as explaining its mechanism here. This would be the correct answer if the subject had a pathologic ventilation-perfusion mismatch from lung disease."
      },
      {
        "text": "Hemoglobin releases oxygen into the plasma as blood cools on its way to the systemic arteries",
        "explanation": "Incorrect. Blood does not cool appreciably between the pulmonary capillary and a systemic artery, and release of bound oxygen into plasma would raise rather than lower the dissolved fraction. The mechanism described does not fit the direction of the change. This would be the correct answer if the question described a rightward shift in the oxygen dissociation curve at a tissue capillary."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: bronchial blood flow plus a small portion of coronary venous blood shunts into the oxygenated stream, holding systemic arterial PO2 near 100 mmHg.",
    "pdfPage": 11,
    "pdfQuote": "Bronchial blood flow and a small portion of coronary venous blood"
  },
  {
    "id": 12,
    "category": "Respiratory Physiology: Gas Laws",
    "questionText": "A compressed gas cylinder with rigid walls is stored in a cool, dry room and its pressure gauge is recorded. The cylinder is then moved outdoors and left in direct sunlight for several hours, after which the gauge is read again and shows a higher pressure. No gas has been added to or removed from the cylinder, and the cylinder has not deformed. Which relationship best explains the rise in pressure?",
    "options": [
      {
        "text": "Volume falls as the cylinder walls contract, raising pressure according to Boyle's law",
        "explanation": "Incorrect. The stem specifies rigid walls and no deformation, so volume is fixed. Boyle's law requires a change in volume at constant temperature, which is the opposite of what happened here. This would be the correct answer if the container were a compliant bag being squeezed at constant temperature."
      },
      {
        "text": "The gas constant R rises with temperature, which raises the pressure inside the cylinder",
        "explanation": "Incorrect. R is a constant, specific for a given gas, and does not vary with temperature. It is temperature itself, the T term, that changed. This would be the correct answer if R were a variable, which by definition it is not."
      },
      {
        "text": "The number of moles rises as gas dissolved in the cylinder walls is released on warming",
        "explanation": "Incorrect. No gas was added or removed, and cylinder walls are not a meaningful gas reservoir in this model. The lecturer's tank example changes n only by refilling at a filling station. This would be the correct answer if the cylinder had been taken to a refilling station and topped up."
      },
      {
        "text": "Water vapor pressure inside the cylinder rises to 47 mmHg once body temperature is reached",
        "explanation": "Incorrect. The 47 mmHg figure is the water vapor pressure of saturated gas at 37 degrees Celsius in the airway, not a property of a dry compressed cylinder. Saturation is a BTPS assumption for gas in the lung. This would be the correct answer if the question concerned humidified gas in the trachea."
      },
      {
        "text": "At fixed volume the equation reduces to P equals nRT, so raising T raises P",
        "explanation": "Correct. In the general gas law PV equals nRT, holding V constant makes pressure a direct function of the number of molecules and the absolute temperature. Sunlight raises T, molecules move faster and collide more often with each other and the wall, and the gauge pressure rises. The lecturer uses exactly this propane tank illustration to show that only two manipulations raise pressure at fixed volume: adding gas, or adding heat."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: at constant volume, PV = nRT reduces to P = nRT. Only two things raise pressure in a rigid tank: more molecules or more heat.",
    "pdfPage": 3,
    "pdfQuote": "PV = nRT"
  },
  {
    "id": 13,
    "category": "Respiratory Physiology: Diffusion vs Perfusion Limitation",
    "questionText": "In a healthy resting subject, capillary PO2 is measured at intervals along the length of a pulmonary capillary. It is found to match alveolar PO2 after the blood has travelled roughly one third of the way along the capillary and to remain unchanged thereafter. The subject has no lung disease and normal hemoglobin. If contact time between blood and alveolar gas were experimentally doubled, what would happen to oxygen uptake by that blood?",
    "options": [
      {
        "text": "It would not change, because equilibration is already complete",
        "explanation": "Correct. Once capillary partial pressure has risen to meet the alveolar value, the gradient driving diffusion is zero, so no further net transfer can occur no matter how much additional contact time is provided. The only way to move more oxygen is to bring more blood past the alveolus, which is the definition of perfusion limitation. The lecturer stresses that this equilibration is complete within about one third of the transit, giving normal exchange a large built-in reserve."
      },
      {
        "text": "It would double, because oxygen uptake is proportional to the time available for diffusion",
        "explanation": "Incorrect. Uptake is proportional to contact time only while a gradient still exists, which is not the case after equilibration. Doubling the time adds nothing once the driving pressure difference has fallen to zero. This would be the correct answer if the subject had a thickened membrane so that equilibration was still incomplete at the end of the capillary."
      },
      {
        "text": "It would fall, because prolonged contact allows oxygen to diffuse back into the alveolar space",
        "explanation": "Incorrect. Back-diffusion requires the capillary partial pressure to exceed the alveolar value, which does not occur since equilibration stops exactly when the two are equal. Net flux is zero, not reversed. This would be the correct answer if capillary PO2 somehow rose above alveolar PO2, which physiology does not permit here."
      },
      {
        "text": "It would rise slightly, because the diffusion coefficient of oxygen increases with contact time",
        "explanation": "Incorrect. The diffusion coefficient is a fixed property of the gas in the medium and does not vary with how long blood is in contact with the alveolus. Time is not a determinant of D. This would be the correct answer if D were a time-dependent variable, which it is not."
      },
      {
        "text": "It would rise substantially, because oxygen transfer in health is limited by the membrane itself",
        "explanation": "Incorrect. Membrane limitation is diffusion limitation, and in a healthy lung at rest the membrane is not the constraint, as shown by complete equilibration in one third of the capillary. Health is the perfusion-limited case. This would be the correct answer if the subject had fibrosis or emphysema producing a genuine diffusion barrier."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: normal O2 and CO2 equilibrate within about one third of capillary transit. Extra contact time adds nothing, so exchange is perfusion-limited.",
    "pdfPage": 12,
    "pdfQuote": "Also: O2 & CO2 under normal"
  },
  {
    "id": 14,
    "category": "Respiratory Physiology: Diffusion vs Perfusion Limitation",
    "questionText": "In an equilibration experiment, one test gas is delivered to the alveolar space of a normal lung preparation. Along the entire length of the pulmonary capillary the partial pressure of this gas in capillary blood remains far below its alveolar partial pressure, so the gradient never closes. The gas is known to be highly soluble in blood, and the alveolar membrane is histologically normal. Which property of this gas best explains the persistent gradient?",
    "options": [
      {
        "text": "Its diffusion coefficient across the alveolar membrane is lower than that of any other gas",
        "explanation": "Incorrect. The stem states that the gas is highly soluble, and high solubility corresponds to easy movement into solution rather than a uniquely poor diffusion coefficient. The barrier itself is normal. This would be the correct answer if the gas were a poor diffuser crossing a thickened fibrotic membrane."
      },
      {
        "text": "It is chemically converted into bicarbonate inside the red cell and then exported to plasma",
        "explanation": "Incorrect. Conversion to bicarbonate is the carbon dioxide pathway, and the lecturer notes that dissolved carbon dioxide and bicarbonate both contribute to partial pressure. That gas equilibrates normally rather than maintaining a permanent gradient. This would be the correct answer if the question described carbon dioxide transport in blood."
      },
      {
        "text": "It is bound by hemoglobin immediately, so almost none of it remains dissolved",
        "explanation": "Correct. This is the carbon monoxide pattern. Carbon monoxide dissolves readily but is captured by hemoglobin the instant it enters blood, so the dissolved fraction stays negligible and, since only dissolved gas exerts a partial pressure, capillary partial pressure never rises. The alveolar to capillary gradient therefore persists for the whole length of the capillary and uptake depends solely on the properties of the barrier, which is the definition of diffusion limitation."
      },
      {
        "text": "It requires a specific membrane transporter that becomes saturated at physiologic partial pressures",
        "explanation": "Incorrect. Gas transfer across the respiratory membrane is passive diffusion governed by Fick's law, with no transporter and therefore no saturable carrier. Saturation kinetics do not apply. This would be the correct answer if the substance were a carrier-mediated solute rather than a respiratory gas."
      },
      {
        "text": "It reduces alveolar surface area by collapsing alveoli during the measurement period",
        "explanation": "Incorrect. Nothing in the stem describes alveolar collapse, and the membrane is histologically normal. Loss of surface area would reduce total transfer but would not produce the specific pattern of a partial pressure that never rises. This would be the correct answer if the preparation had developed atelectasis during the experiment."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: carbon monoxide binds hemoglobin instantly, never exists free in solution, and therefore never partakes in the pressure gradient. Its uptake is purely diffusion-limited.",
    "pdfPage": 12,
    "pdfQuote": "Does not partake in pressure gradient"
  },
  {
    "id": 15,
    "category": "Respiratory Physiology: Lung Diffusion Capacity",
    "questionText": "A 68-year-old lifelong smoker undergoes pulmonary function testing. Imaging demonstrates hyperinflated lungs with widespread destruction of alveolar walls, and there is no radiographic or histologic evidence of interstitial thickening. His measured lung diffusion capacity is substantially reduced. Hemoglobin is normal at 14.6 g/dL and he is not anemic. Which change accounts for his reduced diffusion capacity?",
    "options": [
      {
        "text": "An increase in delta x from fibrotic remodeling of the alveolar basement membrane",
        "explanation": "Incorrect. The stem specifically excludes interstitial thickening, so the barrier is thin. Increased thickness is the fibrosis and edema mechanism, not the emphysema mechanism. This would be the correct answer if imaging had shown reticular interstitial changes with basement membrane thickening."
      },
      {
        "text": "A fall in delta P because alveolar PO2 is reduced by hyperinflation of the lungs",
        "explanation": "Incorrect. Hyperinflation reflects air trapping and loss of elastic recoil rather than a fall in alveolar oxygen tension, and the gradient term is not the primary lesion here. The problem is the amount of membrane available, not the pressure across it. This would be the correct answer if the patient had ascended to high altitude, where alveolar PO2 genuinely falls."
      },
      {
        "text": "A reduction in the diffusion coefficient that is specific to oxygen within destroyed tissue",
        "explanation": "Incorrect. The diffusion coefficient is a fixed property of the gas in the medium and does not change because tissue has been destroyed. Emphysema alters the geometry of the exchange surface, not the physics of the gas. This would be the correct answer if the question compared oxygen with carbon dioxide across the same membrane."
      },
      {
        "text": "A loss of alveolar surface area, the A term in Fick's equation",
        "explanation": "Correct. Emphysema is characterized by destruction of alveolar cells and walls rather than by thickening of the barrier. Since A is a numerator term in Vx equals D times A times delta P divided by delta x, losing exchange surface directly lowers transfer and therefore lowers lung diffusion capacity. The lecturer contrasts this explicitly with fibrosis, where the same equation is broken from the denominator instead."
      },
      {
        "text": "An increase in the proportion of oxygen bound to hemoglobin rather than dissolved in plasma",
        "explanation": "Incorrect. The distribution of oxygen between bound and dissolved forms is a property of hemoglobin chemistry, not a consequence of alveolar destruction, and his hemoglobin is normal. Diffusion capacity already accounts for protein-bound gas. This would be the correct answer if the question concerned why PO2 and oxygen content diverge in anemia."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: fibrosis attacks delta x in the denominator, emphysema attacks A in the numerator. Different lesions, same equation, same fall in diffusion capacity.",
    "pdfPage": 12,
    "pdfQuote": "Also: O2 under strenuous"
  },
  {
    "id": 16,
    "category": "Respiratory Physiology: Exercise Physiology",
    "questionText": "A 25-year-old competitive cyclist undergoes maximum-intensity treadmill testing in a physiology laboratory. He has no medical history, takes no medications, and both a recent chest radiograph and spirometry were normal. At peak exercise his heart rate is 192/min, blood pressure 168/74 mmHg, respirations 46/min, and oxygen saturation 97 percent on room air. Investigators calculate that the transit time of a single erythrocyte through an alveolar capillary has fallen from 0.75 seconds at rest to 0.25 seconds. A simultaneous arterial sample shows a PO2 of 97 mmHg. Which statement best characterizes his pulmonary oxygen transport under these conditions?",
    "options": [
      {
        "text": "Transport has become diffusion-limited because the shortened transit prevents capillary PO2 from matching alveolar PO2",
        "explanation": "Incorrect. His arterial PO2 of 97 mmHg shows that equilibration did occur, and a healthy lung at sea level needs only about a quarter of a second to equilibrate. There is no added diffusion barrier in this athlete. This would be the correct answer if the same shortened transit occurred in a patient with fibrosis, where the barrier already slows equilibration."
      },
      {
        "text": "Transport has become diffusion-limited because carbon dioxide competes with oxygen for capillary surface area",
        "explanation": "Incorrect. Oxygen and carbon dioxide do not compete for surface area, and on hemoglobin they occupy different binding sites entirely. Both gases diffuse independently down their own gradients. This would be the correct answer if the two gases shared a saturable transport pathway, which they do not."
      },
      {
        "text": "Transport is diffusion-limited because the blood-air barrier thickens acutely during maximal exertion",
        "explanation": "Incorrect. No thickening of the blood-air barrier occurs during exercise; if it did, diffusion time would rise sharply and exercise would be impossible. Thickening belongs to fibrosis and to pulmonary edema. This would be the correct answer if the subject had interstitial disease producing a genuinely thickened membrane."
      },
      {
        "text": "Transport is perfusion-limited because the high velocity of blood flow prevents gas from diffusing at all",
        "explanation": "Incorrect. The conclusion is right but the reasoning is wrong, and this is the classic trap. Faster pulmonary flow does not abolish diffusion; it actually increases total oxygen pickup by presenting more blood to the alveolus per unit time. This would be the correct answer if increased flow genuinely blocked transfer, which is the opposite of what occurs."
      },
      {
        "text": "Transport remains perfusion-limited because equilibration is complete within 0.25 seconds",
        "explanation": "Correct. In a healthy person at sea level, capillary blood equilibrates with alveolar oxygen after about one third of the resting transit, which is roughly a quarter of a second. Even when maximal exercise compresses transit to 0.25 seconds, that window is still sufficient, so no gradient persists at the end of the capillary and his arterial PO2 stays at 97 mmHg. Transfer is therefore capped by how much blood the pulmonary circuit can deliver, not by the membrane. The lecturer adds that becomes is imprecise wording, since in health oxygen transport is always perfusion-limited."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: capillary transit falls from about 0.75 s at rest to 0.25 s at maximal exercise, and equilibration needs about 0.25 s, so healthy exchange stays perfusion-limited.",
    "pdfPage": 14,
    "pdfQuote": "reducing the transit time of an individual erythrocyte"
  },
  {
    "id": 17,
    "category": "Respiratory Physiology: High Altitude",
    "questionText": "A healthy 30-year-old mountaineer is studied at an elevation where barometric pressure is markedly reduced and alveolar PO2 is approximately 50 mmHg. She has no lung disease, and her spirometry and diffusion capacity measured at sea level were normal. Vitals at altitude: HR 104/min, RR 24/min, SpO2 84 percent. Serial sampling shows that capillary blood does eventually reach the alveolar PO2 before leaving the pulmonary capillary, but it does so later along the capillary than it did at sea level. Which mechanism best explains this delayed but ultimately complete equilibration?",
    "options": [
      {
        "text": "The thickness of her alveolar-capillary membrane increases in response to hypobaric conditions",
        "explanation": "Incorrect. Altitude does not thicken the respiratory membrane; her membrane is normal, as her sea-level diffusion capacity confirms. Thickening is the fibrosis lesion. This would be the correct answer if she had interstitial lung disease rather than a normal lung exposed to low barometric pressure."
      },
      {
        "text": "The gradient is smaller, so equilibration is slower but still finishes in time",
        "explanation": "Correct. Barometric pressure falls with altitude, and by Dalton's law inspired and alveolar PO2 fall with it, so the driving gradient between alveolus and capillary blood is reduced. In Fick's equation delta P is a numerator term, so a smaller gradient slows the rate of transfer and equilibration is reached later along the capillary. A normal lung nonetheless has enough reserve, since equilibration normally requires only a third of the transit, so the process still completes before the blood leaves the capillary."
      },
      {
        "text": "The diffusion coefficient of oxygen falls at reduced barometric pressure, slowing its transfer",
        "explanation": "Incorrect. The diffusion coefficient is a property of the gas in the medium and does not vary with barometric pressure. What altitude changes is the partial pressure gradient. This would be the correct answer if the comparison were between two different gases such as oxygen and carbon dioxide."
      },
      {
        "text": "The alveolar surface area available for exchange contracts at high altitude, reducing transfer",
        "explanation": "Incorrect. Alveolar surface area is unchanged by ascent; it is reduced by destructive disease such as emphysema. Her lungs are structurally normal. This would be the correct answer if she had panlobular emphysema with loss of alveolar walls."
      },
      {
        "text": "Hemoglobin binds oxygen more slowly at altitude, delaying the rise in capillary partial pressure",
        "explanation": "Incorrect. Even if binding kinetics changed, bound oxygen exerts no partial pressure, so hemoglobin binding is not what determines when capillary partial pressure rises to meet the alveolar value. The limiting factor here is the gradient. This would be the correct answer if the question concerned carbon monoxide, whose instantaneous binding does prevent any rise in partial pressure."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: altitude shrinks delta P, not delta x. A normal lung still equilibrates, just later along the capillary.",
    "pdfPage": 13,
    "pdfQuote": "Partial O2 pressure gradient reduced"
  },
  {
    "id": 18,
    "category": "Respiratory Physiology: Diffusion Limitation",
    "questionText": "A 61-year-old man reports 14 months of progressive exertional dyspnea and a dry cough. He worked for 30 years in a shipyard. At rest: T 36.8 C, BP 128/78 mmHg, HR 88/min, RR 20/min, SpO2 95 percent on room air, falling to 86 percent after a 6-minute walk. Examination reveals fine bibasilar crackles and digital clubbing. Spirometry shows reduced lung volumes with a preserved ratio, and his diffusion capacity is 42 percent of predicted. Which mechanism best explains why his oxygen saturation falls specifically with exertion?",
    "options": [
      {
        "text": "A thickened barrier slows equilibration, which the shortened transit time then exposes",
        "explanation": "Correct. His thickened alveolar-capillary membrane raises delta x, so equilibration between alveolar gas and capillary blood already takes longer than normal even at rest. At rest the 0.75-second transit is long enough to conceal much of this deficit, but exercise raises cardiac output and compresses transit toward a quarter of a second, removing the reserve. Capillary PO2 then fails to reach the alveolar value before the blood leaves the capillary, and saturation falls. This is the classic diffusion limitation unmasked by exercise."
      },
      {
        "text": "Exercise lowers the fractional concentration of oxygen in the inspired air, reducing alveolar PO2",
        "explanation": "Incorrect. The fractional concentration of oxygen in room air is fixed at about 0.21 regardless of how hard a person is working. Exercise changes transit time and extraction, not inspired composition. This would be the correct answer if he were breathing a deliberately hypoxic gas mixture during the walk test."
      },
      {
        "text": "Increased cardiac output raises pulmonary arterial pressure and collapses alveolar capillaries",
        "explanation": "Incorrect. Higher pulmonary flow recruits and distends capillaries rather than collapsing them, and increased flow increases oxygen pickup. Capillary collapse is not the mechanism the lecture attributes to exertional desaturation. This would be the correct answer if the vignette described capillary compression by very high alveolar pressures."
      },
      {
        "text": "Carbon dioxide accumulates first because its diffusion coefficient is 50 times that of oxygen",
        "explanation": "Incorrect. The large diffusion coefficient of carbon dioxide means it is preserved, not impaired, when the membrane thickens, which is why these patients hypoxemic with a normal or low PCO2. The reasoning inverts the physiology. This would be the correct answer if carbon dioxide were the poorer diffuser of the two gases."
      },
      {
        "text": "Bronchial venous shunting rises during exercise and dilutes systemic arterial oxygen further",
        "explanation": "Incorrect. The bronchial and coronary venous contribution is a small fixed physiologic shunt that explains why arterial PO2 sits near 100 rather than 107 mmHg; it does not account for a 9-point fall in saturation with walking. His measured diffusion capacity of 42 percent points to the membrane. This would be the correct answer if he had a large anatomic right-to-left shunt."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: exercise unmasks diffusion limitation. A thickened membrane may equilibrate adequately over 0.75 seconds at rest but not over 0.25 seconds at peak effort.",
    "pdfPage": 13,
    "pdfQuote": "Diffusion Limited by Pathology & High Altitude"
  },
  {
    "id": 19,
    "category": "Respiratory Physiology: Diffusion Limitation",
    "questionText": "A 72-year-old woman presents 6 hours after an anterior myocardial infarction with rapidly worsening dyspnea. BP 96/60 mmHg, HR 118/min, RR 30/min, SpO2 88 percent on 4 L nasal cannula. Examination reveals crackles to the mid lung fields and an S3 gallop. Chest radiograph shows bilateral perihilar opacities with Kerley B lines and no hyperinflation. Arterial blood gas: pH 7.48, PCO2 30 mmHg, PO2 54 mmHg, bicarbonate 22 mEq/L. Which change in the alveolar-capillary unit best explains hypoxemia occurring with a low rather than an elevated PCO2?",
    "options": [
      {
        "text": "Alveolar surface area has been destroyed, acutely reducing the area term of Fick's equation",
        "explanation": "Incorrect. Her radiograph shows interstitial fluid with no hyperinflation or wall destruction, and alveolar destruction does not occur over 6 hours. Loss of area is the emphysema lesion. This would be the correct answer if she were a long-standing smoker with radiographic emphysematous changes."
      },
      {
        "text": "The fractional concentration of inspired oxygen has fallen below the level needed for uptake",
        "explanation": "Incorrect. She is receiving supplemental oxygen, so her inspired fraction is above room air rather than below it. Her problem lies at the membrane, not in the inspired mixture. This would be the correct answer if she were breathing a hypoxic mixture or were at high altitude."
      },
      {
        "text": "Hemoglobin binding capacity has been exceeded, so oxygen cannot leave the dissolved compartment",
        "explanation": "Incorrect. Hemoglobin is not saturated in a hypoxemic patient; if anything, less of it is carrying oxygen. Bound oxygen is also invisible to partial pressure, so this reasoning does not explain a PO2 of 54 mmHg. This would be the correct answer if the question described a patient with polycythemia and full saturation."
      },
      {
        "text": "Fluid widens the diffusion distance, and oxygen fails before carbon dioxide does",
        "explanation": "Correct. Interstitial edema inserts fluid between the alveolus and the capillary, raising delta x in Fick's equation and reducing transfer. Because the diffusion coefficient of carbon dioxide is roughly 50 times that of oxygen, carbon dioxide retains an enormous margin of safety while oxygen, the poor diffuser, fails first. Her tachypnea then drives PCO2 down to 30 mmHg with a compensatory respiratory alkalosis, producing the characteristic pattern of hypoxemia with hypocapnia. The lecturer groups edema with fibrosis because both act through the same term."
      },
      {
        "text": "Barometric pressure at the alveolus has fallen, reducing the driving gradient for oxygen uptake",
        "explanation": "Incorrect. Barometric pressure is unchanged in a hospitalized patient at sea level, and she is on supplemental oxygen, which raises rather than lowers alveolar PO2. The gradient term is not the lesion. This would be the correct answer if she had been transported to a high-altitude facility."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: pulmonary edema raises delta x exactly as fibrosis does. Expect hypoxemia with a normal or low PCO2, because CO2 diffuses about 50 times better than O2.",
    "pdfPage": 7,
    "pdfQuote": "X = Thickness of the membrane"
  },
  {
    "id": 20,
    "category": "Respiratory Physiology: Oxygen Transport",
    "questionText": "A 44-year-old man is brought to the emergency department during a winter power outage after using a charcoal grill inside his closed garage. He reports headache and nausea and is intermittently confused. T 36.9 C, BP 118/70 mmHg, HR 106/min, RR 20/min. Pulse oximetry reads 98 percent and an arterial blood gas shows a PO2 of 96 mmHg, yet his directly measured arterial oxygen content is substantially reduced. His chest radiograph is clear. Which principle best explains a normal partial pressure of oxygen alongside a markedly reduced oxygen content?",
    "options": [
      {
        "text": "Carbon monoxide raises the diffusion coefficient of oxygen, which artificially normalizes the PO2 reading",
        "explanation": "Incorrect. One gas does not alter another gas's diffusion coefficient, which is a fixed physical property in a given medium. His normal PO2 is genuine and reflects an intact dissolved compartment. This would be the correct answer if diffusion coefficients were modifiable by co-inhaled gases, which they are not."
      },
      {
        "text": "Carbon monoxide thickens the alveolar-capillary barrier, which lowers content while sparing PO2",
        "explanation": "Incorrect. A thickened barrier impairs equilibration of dissolved gas and would lower the PO2, not preserve it, and his chest radiograph is clear. Thickening is a structural lesion, not an effect of an inhaled gas. This would be the correct answer if he had interstitial fibrosis with a low PO2 and a low diffusion capacity."
      },
      {
        "text": "PO2 measures dissolved oxygen only, while content depends on hemoglobin",
        "explanation": "Correct. Partial pressure reflects only the fraction of a gas that is free in solution, as Henry's law requires, so a normal alveolar-capillary membrane will produce a normal PO2 regardless of what has happened to hemoglobin. Carbon monoxide occupies hemoglobin binding sites with high avidity, so the oxygen-carrying capacity collapses even though the dissolved compartment equilibrates normally. Oxygen content, which sums dissolved, bound and chemically modified forms, therefore falls while PO2 stays at 96 mmHg. Standard pulse oximetry can also read falsely reassuring for the same reason."
      },
      {
        "text": "Carbon monoxide lowers the fractional concentration of inspired oxygen without altering blood values",
        "explanation": "Incorrect. Even if the inspired fraction were slightly reduced in a smoky garage, that would lower alveolar PO2 and therefore the measured arterial PO2, which is normal here. The abnormality is in carrying capacity, not in inspired gas. This would be the correct answer if he had been breathing a mixture in which oxygen had been physically displaced enough to cause hypoxemia."
      },
      {
        "text": "Carbon monoxide is converted to bicarbonate, which is not detected by the oxygen electrode used",
        "explanation": "Incorrect. Conversion to bicarbonate is a carbon dioxide pathway; carbon monoxide is not chemically modified this way. The relevant behavior of carbon monoxide is avid hemoglobin binding. This would be the correct answer if the question concerned how carbon dioxide is carried in blood."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: PO2 can be normal while oxygen content is dangerously low, because partial pressure sees only the dissolved compartment and content includes hemoglobin.",
    "pdfPage": 6,
    "pdfQuote": "Only applicable to gases free in solution, NOT bound"
  },
  {
    "id": 21,
    "category": "Respiratory Physiology: Lung Diffusion Capacity",
    "questionText": "A 70-year-old man with a 50 pack-year smoking history reports 3 years of exertional dyspnea with minimal sputum production. BP 132/80 mmHg, HR 90/min, RR 22/min, SpO2 91 percent on room air. Examination shows a barrel-shaped chest, hyperresonance to percussion and distant breath sounds. Imaging demonstrates hyperinflation with widespread loss of alveolar walls and explicitly no interstitial thickening. His diffusion capacity is markedly reduced with a normal hemoglobin. Which term of the diffusion equation is primarily responsible for his abnormal result?",
    "options": [
      {
        "text": "Surface area available for exchange",
        "explanation": "Correct. Emphysema destroys alveolar cells and walls, so the total surface across which gas can cross is lost even though the remaining barrier is thin. Surface area A is a numerator term in Vx equals D times A times delta P divided by delta x, so removing it lowers transfer and lowers the measured diffusion capacity. This is the mirror image of fibrosis, which lowers the same result by raising the denominator instead."
      },
      {
        "text": "Thickness of the alveolar-capillary barrier",
        "explanation": "Incorrect. The stem states explicitly that there is no interstitial thickening, so delta x is not the deranged term. Thickening is what fibrosis and pulmonary edema do. This would be the correct answer if imaging had shown reticular interstitial disease rather than emphysematous destruction."
      },
      {
        "text": "Diffusion coefficient of oxygen in tissue",
        "explanation": "Incorrect. The diffusion coefficient is a fixed property of a given gas in a given medium and is not altered by smoking or by tissue destruction. It explains why carbon dioxide crosses more easily than oxygen, not why this patient's result is low. This would be the correct answer if the question compared two different gases."
      },
      {
        "text": "Partial pressure gradient across the membrane",
        "explanation": "Incorrect. His alveolar to capillary gradient is not the primary lesion; he is at sea level breathing room air with an intact inspired oxygen fraction. Gradient reduction is the high-altitude mechanism. This would be the correct answer if he were being tested at an elevation where alveolar PO2 falls toward 50 mmHg."
      },
      {
        "text": "Solubility of oxygen in plasma at body temperature",
        "explanation": "Incorrect. Solubility is the constant used in Henry's law to convert partial pressure into dissolved concentration and is not a term in the diffusion equation being asked about. It does not change with emphysema. This would be the correct answer if the question asked how a measured PO2 is converted into a dissolved oxygen concentration."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: emphysema lowers diffusion capacity by destroying surface area, with a thin membrane. Fibrosis lowers the same number by thickening the membrane, with intact area.",
    "pdfPage": 7,
    "pdfQuote": "A = Surface area"
  },
  {
    "id": 22,
    "category": "Respiratory Physiology: Lung Diffusion Capacity",
    "questionText": "A 26-year-old woman with newly diagnosed celiac disease reports 4 months of fatigue and breathlessness on climbing stairs. BP 108/66 mmHg, HR 98/min, RR 18/min, SpO2 99 percent on room air. Examination reveals conjunctival pallor and spoon-shaped nails; the lungs are clear to auscultation. Chest radiograph and spirometry are normal, but her diffusion capacity is 68 percent of predicted. Hemoglobin is 6.8 g/dL with a mean corpuscular volume of 68 fL. Which explanation best accounts for her reduced diffusion capacity?",
    "options": [
      {
        "text": "Interstitial thickening from chronic hypoxia has increased the diffusion distance within her lungs",
        "explanation": "Incorrect. Her chest radiograph and spirometry are normal and her saturation is 99 percent, so there is neither hypoxia nor interstitial disease. Thickening is a structural change that would show on imaging. This would be the correct answer if she had reticular changes with a restrictive spirometric pattern."
      },
      {
        "text": "Alveolar oxygen partial pressure is reduced because of her mildly increased respiratory rate",
        "explanation": "Incorrect. An increased respiratory rate raises rather than lowers alveolar oxygen tension, and her rate of 18 per minute is essentially normal anyway. Alveolar PO2 is not the abnormal variable here. This would be the correct answer if she were hypoventilating with a rising PCO2."
      },
      {
        "text": "Alveolar walls have been destroyed, reducing the surface area available for gas exchange",
        "explanation": "Incorrect. Alveolar destruction is the emphysema lesion and would appear as hyperinflation on imaging in a patient with a smoking history. Her imaging is normal. This would be the correct answer if she were an older smoker with radiographic emphysema."
      },
      {
        "text": "Oxygen has been chemically modified into bicarbonate and no longer contributes to gas transfer",
        "explanation": "Incorrect. Bicarbonate is a carrier form of carbon dioxide, not of oxygen, and chemical modification of oxygen in this way does not occur. Her oxygen is transported normally in dissolved and hemoglobin-bound forms. This would be the correct answer if the question concerned how carbon dioxide is carried in blood."
      },
      {
        "text": "Too few red cells are present to take up the oxygen that reaches the alveolus",
        "explanation": "Correct. The lecturer explicitly lists red blood cell number among the determinants of lung diffusion capacity, because the measurement includes gas that binds to protein rather than only gas free in solution. With a hemoglobin of 6.8 g/dL there is abundant alveolar oxygen and a perfectly normal membrane, but far fewer binding sites arriving per unit time, so measured transfer falls. This is why a low diffusion capacity should always be checked against the hemoglobin before lung disease is diagnosed."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: anemia lowers lung diffusion capacity with structurally normal lungs, because red cell number is one of its determinants.",
    "pdfPage": 8,
    "pdfQuote": "How well oxygen gets into the blood from the air you breathe"
  },
  {
    "id": 23,
    "category": "Respiratory Physiology: Dalton's Law",
    "questionText": "A 58-year-old man in the intensive care unit is receiving mechanical ventilation at sea level for pneumonia. To improve his oxygenation the respiratory therapist increases the fraction of inspired oxygen from 0.21 to 0.50, leaving tidal volume, rate and airway pressures unchanged. Inspired gas is heated and fully humidified at body temperature. Within minutes his arterial PO2 rises substantially and his saturation improves from 88 to 97 percent. Which principle most directly accounts for the improvement?",
    "options": [
      {
        "text": "Boyle's law, since raising the oxygen fraction reduces the volume of each delivered breath",
        "explanation": "Incorrect. Tidal volume was deliberately held constant, and changing gas composition does not by itself change delivered volume. Boyle's law governs bulk airflow, not the composition of the mixture. This would be the correct answer if the therapist had altered tidal volume or airway pressure instead."
      },
      {
        "text": "Dalton's law, since Px equals barometric pressure minus water vapor pressure, times F",
        "explanation": "Correct. The partial pressure of oxygen in humidified inspired gas is the usable pressure, 760 minus 47 or 713 mmHg, multiplied by the fractional concentration F. Raising F from 0.21 to 0.50 raises inspired PO2 from 150 mmHg to about 357 mmHg, which raises alveolar PO2 and therefore the alveolar to capillary gradient. A larger delta P drives faster transfer by Fick's law, and the arterial PO2 rises. This is why the inspired fraction is the single most direct lever on oxygenation at a fixed barometric pressure."
      },
      {
        "text": "Henry's law, since a higher inspired oxygen fraction raises the solubility of oxygen in his blood",
        "explanation": "Incorrect. Solubility is a fixed constant of the gas in blood; what rises is the partial pressure, and the dissolved concentration then rises in proportion to it. The law is invoked with the wrong variable changing. This would be the correct answer if the question asked how a measured PO2 is converted into a dissolved oxygen concentration."
      },
      {
        "text": "Fick's law, since raising the inspired fraction reduces the thickness of the alveolar membrane",
        "explanation": "Incorrect. Nothing about supplemental oxygen thins the alveolar-capillary barrier. Fick's law is certainly involved, but through the gradient term, not through membrane thickness. This would be the correct answer if a treatment such as diuresis had cleared interstitial edema and reduced delta x."
      },
      {
        "text": "The general gas law, since adding oxygen molecules raises the temperature of the inspired gas",
        "explanation": "Incorrect. Inspired gas is heated to body temperature by the ventilator circuit regardless of oxygen fraction, so temperature is fixed. The general gas law describes a container of gas rather than the transfer of oxygen into blood. This would be the correct answer if a rigid gas cylinder had been warmed at constant volume."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Px = (PB - PH2O) x F. At sea level, raising F from 0.21 to 0.50 raises inspired PO2 from 150 to about 357 mmHg and widens the alveolar gradient.",
    "pdfPage": 5,
    "pdfQuote": "The partial pressure of a gas in a mixture of gases"
  },
  {
    "id": 24,
    "category": "Respiratory Physiology: Gas Laws",
    "questionText": "A 47-year-old woman with progressive neuromuscular weakness is admitted with shallow, rapid breathing. BP 122/76 mmHg, HR 104/min, RR 28/min, SpO2 92 percent on room air. Examination reveals markedly weak diaphragmatic excursion, use of accessory muscles and a poor cough. Bedside measurement confirms that during attempted inspiration her thoracic volume increases far less than that of a healthy control. Airway gas temperature and composition are unchanged throughout the breath. Which consequence most directly explains her reduced inspiratory airflow?",
    "options": [
      {
        "text": "Intrapulmonary pressure rises above atmospheric pressure, driving gas out of the lungs instead",
        "explanation": "Incorrect. A pressure above atmospheric would produce expiratory flow, and she is still moving air inward, only inadequately. The defect is an insufficient fall in pressure, not a reversal of it. This would be the correct answer if the question described the expiratory phase of the respiratory cycle."
      },
      {
        "text": "Water vapor pressure in her airway rises abnormally, which opposes the entry of ambient air",
        "explanation": "Incorrect. Water vapor pressure at body temperature is a fixed 47 mmHg and does not vary with muscle strength. Humidification dilutes inspired oxygen but does not generate or oppose bulk flow. This would be the correct answer if the question asked why tracheal PO2 is 150 rather than 160 mmHg."
      },
      {
        "text": "The fractional concentration of oxygen in her alveolar gas is reduced by her rapid respiratory rate",
        "explanation": "Incorrect. The fractional concentration of inspired oxygen is fixed by the composition of room air, and a rapid rate does not change it. Her problem is inadequate bulk movement of gas, not an altered mixture. This would be the correct answer if she were breathing a hypoxic gas mixture."
      },
      {
        "text": "Intrapulmonary pressure falls too little below atmospheric pressure",
        "explanation": "Correct. Boyle's law states that at constant temperature pressure and volume are inversely proportional, so the magnitude of the pressure drop during inspiration is set by how much the thorax expands. Weak inspiratory muscles produce a smaller volume change, so intrapulmonary pressure falls only slightly below atmospheric and the pressure difference driving air inward is small. The result is a low tidal volume, which she partly compensates for with a rapid rate. This is ventilatory failure at the level of the pump rather than the membrane."
      },
      {
        "text": "The diffusion coefficient for oxygen falls as her alveolar ventilation decreases during weakness",
        "explanation": "Incorrect. The diffusion coefficient is a fixed physical property and is not altered by the level of ventilation. Her impairment is in moving gas into the lung, not in transferring it across the membrane. This would be the correct answer if the question compared the transfer rates of two different gases."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: the size of the inspiratory pressure drop is set by the size of the thoracic volume change, so weak inspiratory muscles produce small tidal volumes.",
    "pdfPage": 4,
    "pdfQuote": "P1 V1 = P2 V2"
  },
  {
    "id": 25,
    "category": "Respiratory Physiology: Fick's Law",
    "questionText": "A 64-year-old woman with established interstitial lung disease is evaluated for worsening hypoxemia. BP 130/84 mmHg, HR 92/min, RR 22/min, SpO2 89 percent on room air. Examination reveals dry Velcro-like crackles at both bases and clubbing. Arterial blood gas on room air shows pH 7.45, PCO2 34 mmHg, PO2 56 mmHg and bicarbonate 23 mEq/L. Her physician points out that despite a clearly thickened alveolar-capillary membrane, carbon dioxide elimination is fully preserved and is in fact slightly increased. Which property best explains this dissociation?",
    "options": [
      {
        "text": "Carbon dioxide is carried entirely bound to hemoglobin, so the membrane does not affect its transfer",
        "explanation": "Incorrect. The lecture states that the majority of carbon dioxide travels in soluble form, as dissolved gas and as bicarbonate, and both contribute to partial pressure. Carbon dioxide must still cross the same membrane. This would be the correct answer if carbon dioxide were transported the way carbon monoxide is, bound almost entirely and immediately."
      },
      {
        "text": "Carbon dioxide is generated within the alveolus itself and therefore never crosses the membrane",
        "explanation": "Incorrect. Carbon dioxide is produced by tissue metabolism, carried to the lung in mixed venous blood, and must diffuse across the same alveolar-capillary barrier as oxygen. Nothing generates it in the alveolar gas. This would be the correct answer if the alveolus were a site of carbon dioxide production rather than elimination."
      },
      {
        "text": "The diffusion coefficient of CO2 is about 50 times that of O2",
        "explanation": "Correct. Carbon dioxide is far more soluble in blood and water than oxygen, giving it a diffusion coefficient roughly 50 times larger. Because D multiplies the entire transfer term in Fick's equation, carbon dioxide retains an enormous reserve even when delta x has been increased by fibrosis. Oxygen, the poor diffuser, exhausts its reserve first, so these patients characteristically present with hypoxemia while carbon dioxide elimination is preserved and, with the tachypnea that hypoxemia provokes, slightly enhanced."
      },
      {
        "text": "Carbon dioxide follows a much larger partial pressure gradient than oxygen across the membrane",
        "explanation": "Incorrect. The carbon dioxide gradient between mixed venous blood and alveolar gas is actually far smaller, roughly 6 mmHg, than the oxygen gradient of about 55 mmHg. Its advantage comes from the diffusion coefficient, not the gradient. This would be the correct answer if carbon dioxide gradients across the membrane were the larger of the two, which they are not."
      },
      {
        "text": "Carbon dioxide crosses through dedicated protein channels that are unaffected by fibrotic tissue",
        "explanation": "Incorrect. Gas transfer across the respiratory membrane is passive diffusion described by Fick's law, not channel-mediated transport. There is no protein pore that bypasses a thickened interstitium. This would be the correct answer if the question concerned a carrier-mediated solute rather than a respiratory gas."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: in membrane disease expect hypoxemia with a normal or low PCO2, because carbon dioxide diffuses roughly 50 times better than oxygen.",
    "pdfPage": 7,
    "pdfQuote": "D CO2 >> D O2"
  },
  {
    "id": 26,
    "category": "Respiratory Physiology: Diffusion vs Perfusion Limitation",
    "questionText": "A pharmacology group develops an inhaled tracer gas that is highly soluble in plasma but is captured by circulating albumin within milliseconds of entering the bloodstream. In an isolated perfused lung with a histologically normal alveolar membrane, the tracer's partial pressure in capillary blood remains far below the alveolar value along the entire capillary. This holds true no matter how slowly the perfusate is run through the preparation. Which statement best describes the behavior of this tracer?",
    "options": [
      {
        "text": "It is perfusion-limited, since slowing the perfusate further would eventually allow full equilibration",
        "explanation": "Incorrect. The stem states that slowing the perfusate does not close the gap, which is precisely the test that distinguishes the two patterns. Additional contact time helps only when a gradient can actually be abolished. This would be the correct answer if the tracer behaved like nitrous oxide, which equilibrates almost immediately."
      },
      {
        "text": "It is diffusion-limited, because tracer bound to albumin exerts no partial pressure",
        "explanation": "Correct. Only gas free in solution exerts a partial pressure, so a tracer that is sequestered by albumin the moment it arrives can never build a measurable pressure in capillary blood. The alveolar to capillary gradient therefore persists along the entire length of the capillary and uptake is governed solely by the properties of the barrier, which is the definition of diffusion limitation. This is the same mechanism the lecturer describes for carbon monoxide, which binds hemoglobin rather than albumin but produces an identical curve."
      },
      {
        "text": "It is perfusion-limited, because its high plasma solubility guarantees rapid pressure equilibration",
        "explanation": "Incorrect. High solubility means the gas dissolves readily, but immediate protein binding removes it from the dissolved compartment, so no partial pressure accumulates. Solubility alone does not determine which limitation applies. This would be the correct answer if the tracer stayed free in solution after dissolving."
      },
      {
        "text": "It is neither, since partial pressure gradients do not apply to gases carried by plasma proteins",
        "explanation": "Incorrect. Partial pressure gradients absolutely apply; the point is that protein-bound tracer contributes nothing to the blood-side pressure, which is why the gradient never closes. The framework still holds. This would be the correct answer if protein binding abolished diffusion itself rather than the blood-side partial pressure."
      },
      {
        "text": "It is diffusion-limited because albumin binding physically thickens the alveolar-capillary barrier",
        "explanation": "Incorrect. The conclusion is right but the mechanism is wrong, and the stem specifies a histologically normal membrane. Albumin binding occurs in the blood, not within the barrier. This would be the correct answer if the preparation showed interstitial thickening on histology."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: any gas removed from solution by protein binding cannot build a capillary partial pressure, so its gradient never closes and its uptake is diffusion-limited.",
    "pdfPage": 12,
    "pdfQuote": "Does not partake in pressure gradient"
  },
  {
    "id": 27,
    "category": "Respiratory Physiology: Lung Diffusion Capacity",
    "questionText": "A pulmonary function laboratory measures diffusion capacity by having patients inhale a mixture containing a very low concentration of carbon monoxide, hold their breath for 10 seconds, and then exhale. The laboratory director explains to a student that this particular gas was chosen because its uptake depends on the properties of the membrane and the blood rather than on how quickly blood flows past the alveolus. The patient being tested has normal lungs and normal hemoglobin. Which property of carbon monoxide makes the director's statement true?",
    "options": [
      {
        "text": "It is bound by hemoglobin so rapidly that capillary partial pressure never rises",
        "explanation": "Correct. Carbon monoxide dissolves well but is taken up by hemoglobin essentially instantaneously, so the free dissolved fraction stays negligible. Because only gas free in solution exerts a partial pressure, capillary partial pressure never climbs toward the alveolar value and the driving gradient is preserved along the whole capillary. Uptake therefore reports the diffusing properties of the membrane and the available hemoglobin rather than blood flow, which is exactly what makes carbon monoxide the standard test gas for diffusion capacity."
      },
      {
        "text": "Its diffusion coefficient is roughly 50 times greater than that of oxygen across the membrane",
        "explanation": "Incorrect. The gas with a diffusion coefficient about 50 times that of oxygen is carbon dioxide, not carbon monoxide. That property has nothing to do with why carbon monoxide is used as the test gas. This would be the correct answer if the question asked why carbon dioxide elimination is preserved in interstitial disease."
      },
      {
        "text": "It dissolves poorly in blood, so its concentration in plasma remains extremely low throughout",
        "explanation": "Incorrect. The lecturer specifically notes that carbon monoxide does dissolve well in blood; the reason its dissolved concentration stays low is immediate hemoglobin binding, not poor solubility. The distinction matters. This would be the correct answer if the gas in question were genuinely insoluble."
      },
      {
        "text": "It is chemically converted to bicarbonate, removing it from the dissolved compartment entirely",
        "explanation": "Incorrect. Conversion to bicarbonate is part of carbon dioxide transport, and both dissolved carbon dioxide and bicarbonate contribute to partial pressure. Carbon monoxide is not handled this way. This would be the correct answer if the question described how carbon dioxide is carried in the blood."
      },
      {
        "text": "It raises the partial pressure gradient by displacing oxygen from the alveolar gas mixture",
        "explanation": "Incorrect. Test concentrations of carbon monoxide are far too low to displace alveolar oxygen meaningfully, and displacing oxygen would not explain carbon monoxide's own uptake behavior. The relevant property is its behavior in blood. This would be the correct answer if the test relied on altering alveolar oxygen tension."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: carbon monoxide is the diffusion capacity test gas precisely because it is diffusion-limited, so its uptake reports the membrane and the blood rather than the flow.",
    "pdfPage": 12,
    "pdfQuote": "Diffusion-limited & Perfusion-limited Gas Exchange"
  },
  {
    "id": 28,
    "category": "Respiratory Physiology: High Altitude",
    "questionText": "A 58-year-old man with moderate pulmonary fibrosis maintains an SpO2 of 93 percent at rest at sea level but falls to 85 percent after a 6-minute walk. His diffusion capacity is 45 percent of predicted and his hemoglobin is normal. He plans a trekking trip to an elevation at which alveolar PO2 falls to roughly 50 mmHg, and his pulmonologist strongly advises against it. Vitals at sea level: BP 126/78 mmHg, HR 84/min, RR 18/min. Which physiologic combination underlies the pulmonologist's concern?",
    "options": [
      {
        "text": "A reduced surface area combined with an increased fractional concentration of inspired oxygen",
        "explanation": "Incorrect. Fibrosis thickens the barrier rather than destroying surface area, and the inspired oxygen fraction stays at about 0.21 at any altitude. Neither element of this pairing is correct. This would be the correct answer if the patient had emphysema and were also receiving supplemental oxygen."
      },
      {
        "text": "An increased diffusion coefficient for oxygen combined with a shortened capillary transit time",
        "explanation": "Incorrect. The diffusion coefficient of oxygen is fixed and would not increase; if it did, transfer would improve rather than fail. Shortened transit is real during exertion but is only half the story here. This would be the correct answer if a treatment existed that raised the diffusion coefficient of oxygen, which none does."
      },
      {
        "text": "A widened alveolar gradient combined with an increased solubility of oxygen in his plasma",
        "explanation": "Incorrect. Altitude narrows rather than widens the alveolar to capillary gradient, and the solubility of oxygen in blood is a fixed constant. Both components of this option run in the wrong direction. This would be the correct answer if ascent raised alveolar PO2, which it does not."
      },
      {
        "text": "An increased barometric pressure combined with a thinner alveolar-capillary membrane at altitude",
        "explanation": "Incorrect. Barometric pressure falls with ascent, and altitude does not remodel the membrane in either direction. His membrane is thickened by fibrosis and remains so. This would be the correct answer if he were descending into a hyperbaric environment with an otherwise normal lung."
      },
      {
        "text": "A thickened barrier combined with a reduced driving gradient",
        "explanation": "Correct. Fibrosis raises delta x, so equilibration between alveolar gas and capillary blood is already slow and incomplete at sea level, which is why he desaturates on walking. Ascent then reduces alveolar PO2 to about 50 mmHg, shrinking delta P in the numerator of Fick's equation and slowing transfer further. A normal lung tolerates the smaller gradient because equilibration normally needs only a third of the transit, but a fibrotic lung has already spent that reserve. The lecturer states that under such extreme conditions the transport deficiency may not be survivable."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: fibrosis raises delta x and altitude lowers delta P. Each alone can be tolerated, but together they can make oxygen transport insufficient to survive.",
    "pdfPage": 13,
    "pdfQuote": "Partial O2 pressure gradient reduced"
  },
  {
    "id": 29,
    "category": "Respiratory Physiology: Dalton's Law",
    "questionText": "A physiologist samples gas at three points in a healthy volunteer breathing room air at sea level: ambient room air, mid-tracheal gas, and alveolar gas. Ambient PO2 is 160 mmHg and mid-tracheal PO2 is 150 mmHg. The volunteer's alveolar PCO2 is 40 mmHg and his alveolar PO2 is 100 mmHg. The investigator asks a student to predict the mid-tracheal PCO2 and to justify the prediction physiologically. Which answer is correct?",
    "options": [
      {
        "text": "About 40 mmHg, because the tracheal and alveolar gas compartments are continuous with one another",
        "explanation": "Incorrect. Anatomic continuity does not mean identical composition, since the trachea is conducting airway where no exchange occurs and inspired gas has only just been humidified. The 40 mmHg value belongs to alveolar gas that has equilibrated with capillary blood. This would be the correct answer if the sample were drawn from the alveolar compartment."
      },
      {
        "text": "About 47 mmHg, because water vapor and carbon dioxide equilibrate at the same partial pressure",
        "explanation": "Incorrect. 47 mmHg is the partial pressure of water vapor at body temperature and has no relationship to the carbon dioxide tension. The two gases are entirely independent members of the mixture. This would be the correct answer if the question asked for the water vapor pressure of fully saturated airway gas."
      },
      {
        "text": "About 20 mmHg, because humidification halves the partial pressure of every gas in the airway",
        "explanation": "Incorrect. Humidification does not halve anything; it subtracts 47 mmHg from the total before the fractional concentration is applied, which costs oxygen only 10 mmHg. Applying a fraction to a gas that is essentially absent still yields essentially zero. This would be the correct answer if water vapor occupied half the total pressure, which would require about 380 mmHg."
      },
      {
        "text": "Near zero, because ambient air contains essentially no carbon dioxide",
        "explanation": "Correct. Dalton's law gives Px as the humidified total pressure multiplied by the fractional concentration of that gas, and the fractional concentration of carbon dioxide in room air is negligible. Humidification therefore has almost nothing to act on, so tracheal PCO2 stays near zero even though tracheal PO2 falls a measurable 10 mmHg from 160 to 150. Carbon dioxide only appears in meaningful quantity at the alveolus, where it is delivered from mixed venous blood and reaches 40 mmHg."
      },
      {
        "text": "About 33 mmHg, because humidification lowers each partial pressure by the same fixed 10 mmHg step",
        "explanation": "Incorrect. The 10 mmHg fall applies specifically to oxygen and arises from multiplying the 47 mmHg correction by the 0.21 oxygen fraction; it is not a universal decrement. A gas present at almost zero concentration cannot lose 10 mmHg. This would be the correct answer if humidification subtracted an equal absolute amount from every gas, which Dalton's law does not predict."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: humidification lowers tracheal PO2 from 160 to 150 mmHg but leaves tracheal PCO2 near zero, because room air contains essentially no carbon dioxide.",
    "pdfPage": 11,
    "pdfQuote": "The PO2 of humidified tracheal air is 150 mm Hg"
  },
  {
    "id": 30,
    "category": "Respiratory Physiology: Diffusion vs Perfusion Limitation",
    "questionText": "A 55-year-old woman with early pulmonary fibrosis has a resting SpO2 of 96 percent and a resting arterial PO2 of 88 mmHg on room air. During a cardiopulmonary exercise test her cardiac output rises sharply and calculated erythrocyte transit time through the alveolar capillary falls from 0.75 to 0.30 seconds. At peak exercise her SpO2 drops to 84 percent while her PCO2 falls to 31 mmHg. Her hemoglobin is normal and there is no cardiac shunt on echocardiography. Which statement best explains desaturation that appears only during exercise?",
    "options": [
      {
        "text": "Her exchange remains perfusion-limited throughout, and the desaturation is caused by falling cardiac output",
        "explanation": "Incorrect. Her cardiac output rose rather than fell, and a perfusion-limited system with a rising output would deliver more oxygen, not less. The pattern described is the opposite of perfusion limitation. This would be the correct answer if she had developed exercise-induced cardiogenic shock with a falling output."
      },
      {
        "text": "Carbon dioxide begins to compete with oxygen for binding sites on the alveolar membrane surface",
        "explanation": "Incorrect. The two gases diffuse independently down their own gradients and occupy different sites on hemoglobin, so there is no competition of this kind. The lecturer identifies this reasoning explicitly as a distractor. This would be the correct answer if the gases shared a saturable transport pathway, which they do not."
      },
      {
        "text": "The thickened barrier slows equilibration and the short transit removes her reserve",
        "explanation": "Correct. Fibrosis raises delta x, so capillary blood already takes longer than normal to equilibrate with alveolar oxygen. At rest a transit of 0.75 seconds still leaves enough time to conceal the deficit, which is why her resting PO2 is only mildly reduced. Exercise compresses transit to 0.30 seconds, and the reserve that normally allows equilibration in one third of the capillary is gone, so capillary PO2 never reaches the alveolar value and saturation falls. Her low PCO2 confirms that ventilation is more than adequate and that the lesion is diffusion of oxygen."
      },
      {
        "text": "Bronchial venous shunting rises during exercise and becomes the dominant cause of her hypoxemia",
        "explanation": "Incorrect. The bronchial and coronary venous contribution is a small fixed physiologic shunt that explains only the few mmHg difference between end-capillary and arterial PO2. It cannot account for a 12-point fall in saturation, and echocardiography excludes a cardiac shunt. This would be the correct answer if she had a large anatomic right-to-left shunt that opened with exertion."
      },
      {
        "text": "The fractional concentration of inspired oxygen falls as her minute ventilation rises during exertion",
        "explanation": "Incorrect. The fractional concentration of oxygen in room air is fixed at about 0.21 no matter how hard she breathes, and greater ventilation raises rather than lowers alveolar PO2. Her falling PCO2 confirms that ventilation is increased. This would be the correct answer if she were breathing from a rebreathing circuit with a declining oxygen fraction."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: exercise converts a marginal diffusion barrier into overt hypoxemia by cutting transit time, which is why exertional desaturation is the signature of interstitial disease.",
    "pdfPage": 13,
    "pdfQuote": "Diffusion Limited by Pathology & High Altitude"
  }
];

window.Test_CV48 = Test_CV48;
