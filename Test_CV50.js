const Test_CV50 = [
  {
    "id": 1,
    "category": "Respiratory Physiology: Oxygen Transport",
    "questionText": "A physiology instructor asks a class to justify, from first principles, why vertebrates bother to package a protein carrier inside red blood cells. At a PO2 of 100 mmHg, the highest partial pressure blood ever reaches, Henry's Law predicts 0.3 mL of dissolved oxygen per 100 mL of blood. Extrapolated across a 6-liter blood volume, this yields roughly 15 mL of oxygen per minute. A resting adult consumes approximately 250 mL of oxygen per minute. Which conclusion follows directly from this comparison?",
    "options": [
      {
        "text": "Henry's Law systematically underestimates the true solubility of oxygen in warm plasma",
        "explanation": "Incorrect. The 0.3 mL/100 mL figure IS the Henry's Law result the lecturer used, and nothing in the vignette suggests it is wrong; the solubility coefficient of 0.003 mL/100 mL per mmHg is exactly why the number is so small. Dismissing the law does not resolve the 15 versus 250 mL/min gap. This would be the correct answer if the calculation had produced a value that matched measured whole-body oxygen consumption."
      },
      {
        "text": "Resting oxygen consumption must be met almost entirely by increasing cardiac output",
        "explanation": "Incorrect. Raising cardiac output multiplies whatever content the blood already carries, and the content of plasma alone is fixed at 0.3 mL/100 mL by solubility. A 13-fold rise in cardiac output at rest is not physiologically possible and is not what the body does. This would be the correct answer if the question were asking how oxygen DELIVERY, which equals cardiac output times content, can be augmented in a patient who already has normal hemoglobin."
      },
      {
        "text": "Plasma transport alone falls short of resting demand by roughly 13-fold",
        "explanation": "Correct. Dissolved oxygen obeys Henry's Law and is limited by the very low solubility of O2 in water, giving 0.3 mL/100 mL at PO2 100 mmHg and about 15 mL/min across a 6-liter blood volume. Resting consumption is roughly 250 mL/min, a shortfall of about 13-fold. That gap is precisely why roughly 98.5% of blood oxygen is carried bound to hemoglobin, and why the lecturer states a plasma-only system would not be consistent with life."
      },
      {
        "text": "Dissolved oxygen becomes adequate once tissue extraction rises above ninety percent",
        "explanation": "Incorrect. Extraction cannot create oxygen that was never delivered; even complete extraction of the dissolved fraction yields only the 15 mL/min the calculation produced. The shortfall is in supply, not in the efficiency of uptake. This would be the correct answer if the deficit were only a few percent and could be closed by widening the arteriovenous difference."
      },
      {
        "text": "Oxygen and carbon dioxide are equally soluble, so both require a protein carrier",
        "explanation": "Incorrect. The lecturer makes the opposite point: carbon dioxide is much more soluble in water than oxygen, which is why its dissolved fraction carries several times more gas and why most CO2 travels as bicarbonate in solution rather than bound to protein. This would be the correct answer if the two gases had comparable solubility coefficients, which they do not."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: dissolved oxygen supplies about 15 mL O2/min against a resting demand of 250 mL O2/min, a 13-fold shortfall. That single comparison is the whole reason hemoglobin exists.",
    "pdfPage": 3,
    "pdfQuote": "Gas Transport in Blood"
  },
  {
    "id": 2,
    "category": "Respiratory Physiology: Partial Pressure",
    "questionText": "An arterial blood gas drawn from a healthy volunteer reports a PO2 of 96 mmHg. Her hemoglobin concentration is normal and her measured oxygen saturation is 98%. A student asks which oxygen molecules in that sample are actually responsible for generating the number the analyzer reports. Which of the following is correct?",
    "options": [
      {
        "text": "Only the oxygen in free solution in plasma generates the measured PO2",
        "explanation": "Correct. A partial pressure is generated only by gas molecules in free solution; oxygen bound to hemoglobin exerts no partial pressure and is invisible to a PO2 measurement, even though it constitutes about 98.5% of the oxygen present. The lecturer flags this as really important. For CO2 the analogous rule has an extension worth memorizing: CO2 bound directly to hemoglobin is excluded, but dissolved CO2 and the CO2 held in the bicarbonate buffer system both count, because both are in solution in plasma."
      },
      {
        "text": "Both dissolved oxygen and hemoglobin-bound oxygen contribute proportionally to the value",
        "explanation": "Incorrect. This is the most common misconception about partial pressure, and it is exactly what the lecturer warns against. Bound gas is chemically sequestered and exerts no pressure. This would be the correct answer if the question asked about oxygen CONTENT, which does sum the dissolved and hemoglobin-bound fractions."
      },
      {
        "text": "Hemoglobin-bound oxygen alone, since it constitutes the overwhelming majority of the total",
        "explanation": "Incorrect. The reasoning inverts the rule: the bound fraction is the majority of the CONTENT but contributes nothing at all to the partial pressure. Quantity and pressure are different concepts here. This would be the correct answer if partial pressure were defined as a measure of total quantity rather than of molecules in free solution."
      },
      {
        "text": "The value represents the maximum oxygen hemoglobin could carry at complete saturation",
        "explanation": "Incorrect. That maximum is the oxygen-binding capacity, which for normal blood is 20.1 mL O2/100 mL and is expressed in volume, not in mmHg. A PO2 is a pressure, not a ceiling on carriage. This would be the correct answer if the analyzer had been asked for the binding capacity computed from 15 g Hb/100 mL times 1.34 mL O2/g."
      },
      {
        "text": "The value equals total oxygen content divided by the measured hemoglobin concentration",
        "explanation": "Incorrect. No such relationship exists, and the units do not work: content is mL/100 mL and hemoglobin is g/100 mL, so their quotient is not a pressure. Content is derived partly FROM saturation, not the other way around. This would be the correct answer if the question asked for the average volume of oxygen carried per gram of hemoglobin, which is 1.34 mL at full saturation."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: only freely dissolved gas generates a partial pressure. Hemoglobin-bound O2 is invisible to PO2, but for CO2 both the dissolved fraction and the bicarbonate fraction count toward PCO2.",
    "pdfPage": 3,
    "pdfQuote": "Gas Transport in Blood"
  },
  {
    "id": 3,
    "category": "Respiratory Physiology: Hemoglobin Structure",
    "questionText": "A biochemistry laboratory isolates the predominant hemoglobin from an adult volunteer and finds a tetramer in which every subunit carries a prosthetic group containing a single iron atom. The four polypeptides are not identical: two are of one type and two of another. Which description matches this molecule and correctly identifies where oxygen actually binds?",
    "options": [
      {
        "text": "Two alpha and two gamma chains, with oxygen binding directly to the polypeptide backbone of the gamma chain",
        "explanation": "Incorrect. Two alpha plus two gamma chains describes fetal hemoglobin, not the predominant adult form, and oxygen never binds the polypeptide backbone; it binds the iron atom in the heme group. This would be the correct answer for the chain composition alone if the sample had been drawn from cord blood rather than from an adult."
      },
      {
        "text": "Four identical beta chains, with oxygen binding at a shared interface between subunits",
        "explanation": "Incorrect. The vignette explicitly states the four chains are not identical, and normal adult hemoglobin is never a beta homotetramer. Oxygen binds within each subunit's own heme group, not at a shared interface. This would be the correct answer if the question described an abnormal beta-chain tetramer, which is not a form this lecture teaches."
      },
      {
        "text": "Two alpha and two beta chains, with oxygen binding to a serine residue on each alpha chain",
        "explanation": "Incorrect. The chain composition is right but the binding site is wrong, which makes the whole option wrong. Oxygen coordinates to the iron atom of heme; amino acid side chains do not carry the oxygen. This would be the correct answer if hemoglobin bound oxygen covalently to a protein residue instead of to a metal center."
      },
      {
        "text": "Two alpha and two beta chains, with oxygen binding to the heme group of each subunit",
        "explanation": "Correct. Adult hemoglobin, HbA, is a tetramer of two alpha and two beta chains, and each of the four chains carries a heme group containing an iron atom. It is the heme group, through that iron, that binds oxygen. When all sites are loaded the molecule is oxyhemoglobin, and when it has unloaded it is deoxyhemoglobin. Those two forms absorb light differently, which is what makes dual-wavelength pulse oximetry possible later in the lecture."
      },
      {
        "text": "Two beta and two gamma chains, with oxygen binding to iron only after it is oxidized",
        "explanation": "Incorrect. Neither half is right. No normal hemoglobin has this chain combination, and oxidation of the heme iron from Fe2+ to Fe3+ produces methemoglobin, which is UNABLE to bind oxygen. This would be the correct answer if oxidation enhanced binding, which is the exact opposite of what happens."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: HbA is 2 alpha + 2 beta chains, each carrying a heme group with an iron atom, and it is the heme iron, not the protein, that binds oxygen.",
    "pdfPage": 4,
    "pdfQuote": "Bound to HbA (Adult Hemoglobin)"
  },
  {
    "id": 4,
    "category": "Respiratory Physiology: Hemoglobin Variants",
    "questionText": "A term neonate is found to have hemoglobin composed of two alpha and two gamma chains, and its oxygen dissociation curve lies to the left of the mother's curve. A student is asked to relate this position to the physiologic problem the fetus had to solve before birth. Which pair of properties explains the leftward position and the requirement behind it?",
    "options": [
      {
        "text": "Increased 2,3-BPG binding and higher affinity, needed because the fetus consumes oxygen rapidly in utero while its own metabolic rate is elevated",
        "explanation": "Incorrect. The two halves contradict each other: 2,3-BPG binding lowers affinity and shifts the curve to the right, which is the opposite of a left-shifted curve. Fetal hemoglobin specifically does NOT interact with 2,3-BPG. This would be the correct answer if a right-shifted curve had been described in an adult tissue with high glycolytic activity."
      },
      {
        "text": "No 2,3-BPG interaction and higher affinity, needed to extract oxygen from maternal blood",
        "explanation": "Correct. Fetal hemoglobin substitutes two gamma chains for the two beta chains of HbA. It has a higher oxygen affinity and does not interact with 2,3-BPG, so the usual right-shifting glycolytic signal has no effect on it and the curve stays left of the mother's. The fetus does not breathe, so it must strip oxygen off the maternal circulation, and that only works if its carrier binds oxygen more avidly than the mother's does. The lecturer explicitly warns that every 2,3-DPG statement in this lecture applies to adult hemoglobin only."
      },
      {
        "text": "No 2,3-BPG interaction and lower affinity, needed to release oxygen quickly to fetal tissue",
        "explanation": "Incorrect. The first half is right and the second half is wrong. A lower affinity would produce a right-shifted curve and would make it impossible for fetal blood to pull oxygen away from maternal blood at the placenta. This would be the correct answer if the question described hemoglobin in an exercising adult muscle bed rather than fetal hemoglobin at the placenta."
      },
      {
        "text": "Increased 2,3-BPG binding and lower affinity, needed because fetal PO2 is higher than maternal PO2",
        "explanation": "Incorrect. Fetal PO2 is lower, not higher, than maternal PO2, which is exactly why higher affinity is required. Increased 2,3-BPG binding would also shift the curve rightward rather than leftward. This would be the correct answer if the fetus were oxygenating itself directly by breathing, which it does not do."
      },
      {
        "text": "Unchanged 2,3-BPG interaction and higher affinity, produced by an extra iron atom within each gamma heme",
        "explanation": "Incorrect. Every heme group, gamma chains included, carries exactly one iron atom, so no extra iron exists. The affinity difference comes from the gamma chain substitution and the loss of 2,3-BPG interaction. This would be the correct answer if higher affinity in HbF were a metal-stoichiometry effect rather than a chain-composition effect."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: HbF is 2 alpha + 2 gamma, has higher O2 affinity, and does not interact with 2,3-BPG, because the fetus must strip oxygen off maternal blood rather than breathe for itself.",
    "pdfPage": 5,
    "pdfQuote": "Does not interact with 2,3 BPG"
  },
  {
    "id": 5,
    "category": "Respiratory Physiology: Hemoglobin Variants",
    "questionText": "A patient recently started on an anti-malarial agent develops fatigue over several days, and his family notices a bluish tint to his skin. Analysis of his red cells shows an oxygen carrier whose central iron atom has been oxidized relative to the normal state. Which statement best characterizes this molecule and its prognosis?",
    "options": [
      {
        "text": "The iron remains ferrous but the beta chain conformation prevents cooperative binding of oxygen",
        "explanation": "Incorrect. The vignette states the iron has been oxidized, so it is no longer ferrous, and the defect is at the metal center rather than a conformational problem in the globin chain. This would be the correct answer if the vignette had described a beta chain point mutation such as the valine-for-glutamic-acid substitution of sickle cell hemoglobin."
      },
      {
        "text": "The iron is reduced to the ferrous state, which increases oxygen affinity and prevents unloading",
        "explanation": "Incorrect. Ferrous, Fe2+, is the NORMAL state of heme iron, and the vignette specifies oxidation, not reduction. Normal ferrous heme binds and releases oxygen appropriately. This would be the correct answer if therapy had already reversed the oxidation and the question were describing the restored molecule."
      },
      {
        "text": "The iron is ferric and the defect is permanent, requiring lifelong red cell transfusion support",
        "explanation": "Incorrect. The oxidation state is right, but the prognosis is wrong. The lecturer specifically notes that the slide draws this reaction with two arrows because the condition is REVERSIBLE. This would be the correct answer if the abnormality were a structural globin mutation such as HbS, which is inherited and permanent."
      },
      {
        "text": "The iron is ferrous and the abnormality reflects competitive occupation of the site by a gas",
        "explanation": "Incorrect. Competitive occupation of the heme site by a gas describes carbon monoxide poisoning, in which the iron remains ferrous and functional but is blocked. Here the iron itself has been chemically altered. This would be the correct answer if the patient had been pulled from a smoke-filled house rather than started on an oxidizing medication."
      },
      {
        "text": "The iron is ferric and cannot bind oxygen, but the change is reversible",
        "explanation": "Correct. Methemoglobin has heme iron oxidized from the normal Fe2+ to Fe3+, and ferric heme is unable to bind oxygen at all. Causes may be congenital or acquired, with oxidative stress and certain medications, notably some anti-malarial drugs, as the acquired triggers the lecturer names. Patients appear fatigued with a bluish tint to the skin. The lecturer emphasizes the two arrows on the slide: unlike a structural globin mutation, this condition is reversible."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: methemoglobin has Fe3+ instead of Fe2+ heme iron and cannot bind oxygen. Causes are congenital or acquired (oxidative stress, some anti-malarials), it presents with fatigue and bluish skin, and it is reversible.",
    "pdfPage": 6,
    "pdfQuote": "Unable to bind Oxygen"
  },
  {
    "id": 6,
    "category": "Respiratory Physiology: Hemoglobin Variants",
    "questionText": "A hemoglobin variant is defined by a single amino acid substitution in the beta chain. Red cells packed with this variant carry less oxygen than normal and lose their normal shape when the surrounding oxygen tension falls, which wears the hemoglobin out faster. The mutation is unusually common in regions where malaria is endemic, and heterozygotes there are at an advantage. Which substitution and consequence are correct?",
    "options": [
      {
        "text": "Valine replaces glutamic acid; oxygen affinity falls and the cell destabilizes",
        "explanation": "Correct. Sickle cell hemoglobin carries a beta chain point mutation in which glutamic acid is replaced by valine, slightly changing the conformation of the molecule. The resulting red cell has a lower oxygen-carrying capacity and destabilizes in shape, especially under oxygen-poor conditions. Because the malarial pathogen hides inside red blood cells, carrying one copy of this mutation is a genetic advantage where malaria is prevalent, and the price paid, as far as this lecture is concerned, is a lower oxygen affinity."
      },
      {
        "text": "Glutamic acid replaces valine; oxygen affinity rises and the cell becomes rigid but stable",
        "explanation": "Incorrect. The substitution is stated backwards and both consequences are wrong: affinity falls rather than rises, and the cell destabilizes rather than becoming stable. This would be the correct answer if the question were describing the reversion of HbS back to normal HbA, which is not a physiologic event."
      },
      {
        "text": "Glutamic acid replaces lysine; the heme iron is oxidized and can no longer bind oxygen at all",
        "explanation": "Incorrect. Neither the residues nor the mechanism fit. Complete inability to bind oxygen because of oxidized heme iron describes methemoglobin, a separate entity in this lecture with entirely different causes. This would be the correct answer if the patient had been exposed to an oxidizing drug rather than inheriting a beta chain mutation."
      },
      {
        "text": "Valine replaces glutamic acid; oxygen affinity rises and the heterozygote loses malaria protection",
        "explanation": "Incorrect. The substitution is right but both consequences are inverted. Affinity is lower, not higher, and heterozygosity is protective against malaria rather than a liability, which is exactly why the allele persists at high frequency in endemic regions. This would be the correct answer if the mutation had produced a high-affinity variant with no selective advantage."
      },
      {
        "text": "Lysine replaces valine; the alpha chains are affected and oxygen binding capacity is unchanged",
        "explanation": "Incorrect. The lecture places the mutation squarely in the BETA chain, and carrying capacity is explicitly reduced rather than unchanged. This would be the correct answer if the variant were a silent alpha chain polymorphism with no functional consequence."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: HbS is a beta chain glutamic-acid-to-valine substitution. Carrying capacity and affinity fall, the cell destabilizes under low oxygen, and heterozygosity is protective where malaria is endemic.",
    "pdfPage": 7,
    "pdfQuote": "HBS: Sickle Cell Hemoglobin"
  },
  {
    "id": 7,
    "category": "Respiratory Physiology: Oxygen Content",
    "questionText": "A student is asked to calculate the maximum quantity of oxygen that can be bound to hemoglobin in 100 mL of normal blood. She is given that 1 gram of hemoglobin A binds 1.34 mL of oxygen and that the normal hemoglobin A concentration in blood is 15 g per 100 mL. Which value should she report, and what does that number represent?",
    "options": [
      {
        "text": "15 mL O2/100 mL, representing the oxygen actually present in the sample right now",
        "explanation": "Incorrect. Fifteen is the hemoglobin concentration in grams per 100 mL, not a volume of oxygen, and the actual oxygen present is content rather than capacity. Reporting the hemoglobin concentration as an oxygen volume is a unit error. This would be the correct answer if the question had asked for the hemoglobin concentration itself."
      },
      {
        "text": "2.8 mL O2/100 mL, representing the oxygen dissolved in the plasma of the sample",
        "explanation": "Incorrect. The figure 2.8 mL per 100 mL belongs to CARBON DIOXIDE carried in free solution at a PCO2 of 40 mmHg, not to oxygen, and dissolved oxygen at PO2 100 mmHg is only 0.3 mL per 100 mL. This would be the correct answer if the question had asked how much CO2 is carried dissolved in plasma."
      },
      {
        "text": "20.1 mL O2/100 mL, representing the oxygen-binding capacity",
        "explanation": "Correct. The oxygen-binding capacity is the maximum amount of oxygen that can be bound to hemoglobin per volume of blood: 15 g/100 mL multiplied by 1.34 mL O2/g gives 20.1 mL O2 per 100 mL blood. It is a ceiling, not a measurement of what is present, and it counts only hemoglobin-bound oxygen. To convert it to the actual oxygen content you must multiply by the percent saturation and then add back the dissolved oxygen."
      },
      {
        "text": "20.1 mL O2/100 mL, representing the total oxygen delivered to tissue every minute at rest",
        "explanation": "Incorrect. The number is right but the interpretation is wrong. Oxygen delivery is cardiac output multiplied by oxygen content and is expressed per minute, whereas 20.1 mL/100 mL is a per-volume ceiling with no time dimension at all. This would be the correct answer if the question had multiplied the content by a cardiac output."
      },
      {
        "text": "0.3 mL O2/100 mL, representing the ceiling on hemoglobin-bound oxygen at full saturation",
        "explanation": "Incorrect. The number 0.3 mL/100 mL is the DISSOLVED oxygen at PO2 100 mmHg from Henry's Law, and it has nothing to do with the hemoglobin-bound ceiling. Confusing these two is exactly the error the opening calculation of the lecture was designed to prevent. This would be the correct answer if the question had asked how much oxygen plasma alone can carry."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: O2-binding capacity = 15 g Hb/100 mL x 1.34 mL O2/g = 20.1 mL O2 per 100 mL blood. It is the maximum bound to hemoglobin, not the amount actually present.",
    "pdfPage": 8,
    "pdfQuote": "1 g of hemoglobin A can bind 1.34 mL O2"
  },
  {
    "id": 8,
    "category": "Respiratory Physiology: Oxygen Content",
    "questionText": "An investigator measures an oxygen-binding capacity of 20.1 mL O2 per 100 mL of blood in a sample whose measured saturation is 95%. He now wants the actual oxygen content of that same blood rather than its theoretical ceiling. Which additional operations are required to convert the one into the other?",
    "options": [
      {
        "text": "Divide by the saturation and then subtract the dissolved oxygen from the resulting value",
        "explanation": "Incorrect. Both operations run in the wrong direction. Dividing by a saturation below 1.0 would make the number larger than the ceiling, which is impossible, and dissolved oxygen must be added rather than subtracted because capacity excludes it. This would be the correct answer if capacity were defined as content already inflated by saturation and dissolved gas, which it is not."
      },
      {
        "text": "Multiply by cardiac output, which converts the binding capacity directly into content",
        "explanation": "Incorrect. Multiplying by cardiac output converts CONTENT into DELIVERY, a per-minute quantity, and it does not correct for saturation or add the dissolved fraction at all. This would be the correct answer if the question had already supplied the content and asked for oxygen delivery to the tissues."
      },
      {
        "text": "Subtract the dissolved oxygen, since capacity already includes gas carried in free solution",
        "explanation": "Incorrect. The premise is false: the oxygen-binding capacity counts only oxygen bound to hemoglobin and explicitly excludes the dissolved fraction, which is precisely why content adds it back. This would be the correct answer if the starting number had been the total oxygen content and the question asked for the hemoglobin-bound portion alone."
      },
      {
        "text": "No further operation is required, because binding capacity and content are identical at any saturation above ninety percent",
        "explanation": "Incorrect. Capacity is a maximum and content is what is actually present, so the two coincide only at 100% saturation with the dissolved fraction ignored. At 95% saturation the difference is real. This would be the correct answer if saturation were exactly 100% and dissolved oxygen were considered negligible."
      },
      {
        "text": "Multiply by 0.95 and add the dissolved oxygen",
        "explanation": "Correct. O2 content = (O2-binding capacity x percent saturation) + dissolved O2. The capacity of 20.1 mL/100 mL is the hemoglobin ceiling, multiplying by 0.95 corrects it to what is actually bound, and adding the dissolved fraction accounts for the roughly 2% of content that hemoglobin never touched. Content is a per-volume quantity; multiplying it by cardiac output is a separate step that yields oxygen delivery."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: O2 content = (O2-binding capacity x % saturation) + dissolved O2. Capacity is the ceiling, content is reality, and delivery is content times cardiac output.",
    "pdfPage": 8,
    "pdfQuote": "The O2 content is the actual amount of O2 per volume of blood"
  },
  {
    "id": 9,
    "category": "Respiratory Physiology: Oxygen Delivery",
    "questionText": "A patient with a normal hemoglobin concentration and a normal arterial saturation develops a sudden and marked fall in cardiac output following a new arrhythmia. Repeat sampling shows that his arterial oxygen content is unchanged from baseline. Which quantity is most directly reduced by this event, and through what relationship?",
    "options": [
      {
        "text": "Oxygen-binding capacity, which is the product of hemoglobin concentration and saturation",
        "explanation": "Incorrect. Both halves are wrong. Binding capacity is hemoglobin concentration multiplied by 1.34 mL O2/g and does not include saturation at all; more importantly, it depends only on how much hemoglobin is present and is untouched by a change in cardiac output. This would be the correct answer if the patient had suffered acute blood loss with a fall in hemoglobin concentration."
      },
      {
        "text": "Oxygen delivery, the product of cardiac output and oxygen content",
        "explanation": "Correct. Oxygen delivery = cardiac output x oxygen content, where content itself is the sum of dissolved oxygen and oxygen bound to hemoglobin. Because his content is unchanged, the entire fall in delivery is attributable to the pump. This is the practical reason the lecturer separates the three terms: delivery can fail through the pump, through the amount of hemoglobin, or through saturation, and the clinical fix differs for each."
      },
      {
        "text": "Arterial PO2, because partial pressure is proportional to the volume of blood ejected per minute",
        "explanation": "Incorrect. Arterial PO2 is set by alveolar gas exchange and the solubility of oxygen in plasma, not by stroke volume or heart rate. A failing pump characteristically leaves arterial PO2 normal while delivery collapses. This would be the correct answer if the arrhythmia had caused pulmonary edema severe enough to impair gas exchange, which the vignette does not describe."
      },
      {
        "text": "Oxygen content, which falls whenever the dissolved fraction of blood oxygen is reduced",
        "explanation": "Incorrect. The vignette states explicitly that content is unchanged, and content is determined by hemoglobin concentration, saturation, and dissolved oxygen, none of which depend on cardiac output. This would be the correct answer if the patient had become anemic or desaturated rather than developing a low-output arrhythmia."
      },
      {
        "text": "Percent saturation, which is determined by the flow of blood through the pulmonary capillary bed",
        "explanation": "Incorrect. Saturation is determined by the position of the dissociation curve and the alveolar PO2, not by the rate of flow through the lung. Patients in cardiogenic shock frequently maintain a normal saturation while tissues starve. This would be the correct answer if the question concerned a shunt or a diffusion defect at the alveolar-capillary membrane."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: O2 delivery = cardiac output x O2 content. Delivery can fail from the pump, from hemoglobin mass, or from saturation, and a normal PO2 never rules out inadequate delivery.",
    "pdfPage": 9,
    "pdfQuote": "O2 delivery = Cardiac output"
  },
  {
    "id": 10,
    "category": "Respiratory Physiology: Dissociation Curve",
    "questionText": "On the oxygen-hemoglobin dissociation curve, lowering the PO2 from 100 mmHg to 50 mmHg gives up half of the driving partial pressure, yet hemoglobin saturation falls only to about 85%, meaning most molecules still carry three or four oxygen molecules. Which property of hemoglobin produces this flat upper region, and what does the flatness accomplish?",
    "options": [
      {
        "text": "Negative cooperativity, which forces each bound oxygen to weaken the binding of the next one",
        "explanation": "Incorrect. Hemoglobin shows POSITIVE cooperativity: each bound oxygen makes the next one easier to bind, not harder. Negative cooperativity would produce a curve that bends the opposite way and would defeat loading in the lung. This would be the correct answer if hemoglobin behaved like a carrier designed to resist saturation, which is the reverse of what the sigmoidal curve shows."
      },
      {
        "text": "Competitive inhibition by carbon dioxide acting at the same heme site, which blunts any fall in saturation",
        "explanation": "Incorrect. Carbon dioxide binds hemoglobin at a site DIFFERENT from the oxygen site, so the two are not competitive, and CO2 in any case promotes oxygen release rather than protecting saturation. This would be the correct answer if the gas in question were carbon monoxide, which does compete at the heme oxygen site."
      },
      {
        "text": "Linear proportionality between partial pressure and saturation across the physiologic range",
        "explanation": "Incorrect. The lecturer's first observation about this curve is that it is sigmoidal and NOT linear, and a linear relationship would give a 50% fall in saturation for a 50% fall in pressure, which is not what happens. This would be the correct answer if hemoglobin bound oxygen with a single fixed affinity, like a simple solvent."
      },
      {
        "text": "Positive cooperativity, so saturated hemoglobin holds oxygen tightly and loading is protected",
        "explanation": "Correct. Positive cooperativity means hemoglobin's affinity for oxygen depends on how much oxygen it already carries: largely saturated hemoglobin holds on very tightly, and largely unsaturated hemoglobin releases comparatively easily. That is what produces the sigmoidal shape and the flat upper plateau. Blood leaving the lung at PO2 100 mmHg sits on that plateau, where there is no reason to unload, and it stays roughly 85% saturated even when PO2 falls to 50 mmHg."
      },
      {
        "text": "Fixed affinity independent of oxygen tension, which keeps saturation stable at all pressures",
        "explanation": "Incorrect. A fixed affinity is precisely what hemoglobin does NOT have; the whole physiologic point of the molecule is that affinity changes with the environmental oxygen concentration. This would be the correct answer if oxygen were simply dissolved in plasma, where content really is proportional to pressure with a fixed solubility."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: positive cooperativity makes the curve sigmoidal. On the plateau, dropping PO2 from 100 to 50 mmHg still leaves about 85% saturation, protecting loading in the lung.",
    "pdfPage": 10,
    "pdfQuote": "Changes in Affinity through positive Cooperativity"
  },
  {
    "id": 11,
    "category": "Respiratory Physiology: Dissociation Curve",
    "questionText": "A physiologist marks the point on an unshifted oxygen-hemoglobin dissociation curve at which hemoglobin has released two of its four oxygen molecules. She then notes that the corresponding partial pressure lies below any value blood normally reaches anywhere in the body, and uses this to explain why curve shifting is a physiologic necessity rather than a refinement. Which pair of values is she describing?",
    "options": [
      {
        "text": "P50 of 25 mmHg, against a physiologic floor of about 40 mmHg",
        "explanation": "Correct. P50 is the PO2 at which hemoglobin is 50% saturated, meaning it has given up two of its four oxygen molecules. On the unshifted curve this lecture places P50 at 25 mmHg. The lowest PO2 the body normally reaches is about 40 mmHg, so an unshifted curve would essentially never deliver that half-load. This mismatch is exactly why a rightward shift, which moves P50 out to roughly 40 mmHg, is required for working tissue to extract its oxygen."
      },
      {
        "text": "P50 of 40 mmHg, against a physiologic floor of about 25 mmHg in resting venous blood",
        "explanation": "Incorrect. The two numbers have been swapped: 40 mmHg is the P50 of the RIGHT-SHIFTED curve and also the approximate physiologic floor, while 25 mmHg is the unshifted P50. Venous blood does not normally fall to 25 mmHg. This would be the correct answer if the question had specified a curve already right-shifted by the Bohr effect."
      },
      {
        "text": "P50 of 12.5 mmHg, which is the same value reached in a right-shifted curve during exercise",
        "explanation": "Incorrect. 12.5 mmHg is the LEFT-shifted P50 in this lecture, not the unshifted or right-shifted value, and left and right shifts move the curve in opposite directions. This would be the correct answer if the question had described lung tissue or metabolically quiet tissue where the curve is left-shifted."
      },
      {
        "text": "P50 of 60 mmHg, against a physiologic floor of about 100 mmHg in arterial blood leaving the lung",
        "explanation": "Incorrect. Neither value appears in the lecture: 100 mmHg is the arterial CEILING, not a floor, and 60 mmHg is not a P50 the lecturer teaches. Arterial blood leaving the lung sits on the flat top of the curve. This would be the correct answer if the physiologic floor were arterial rather than tissue-side, which inverts the concept."
      },
      {
        "text": "P50 of 100 mmHg, which is the partial pressure of blood immediately after pulmonary loading",
        "explanation": "Incorrect. 100 mmHg is the PO2 of freshly oxygenated blood, where hemoglobin is nearly fully saturated rather than half saturated, so it cannot be a P50. This would be the correct answer if hemoglobin dumped half its oxygen the instant it left the lung, which would make the whole transport system useless."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: unshifted P50 is 25 mmHg, but the lowest PO2 the body normally reaches is about 40 mmHg. Without a right shift, working tissue could not reach the pressure needed to unload.",
    "pdfPage": 10,
    "pdfQuote": "Changes in Affinity through positive Cooperativity"
  },
  {
    "id": 12,
    "category": "Respiratory Physiology: Pulse Oximetry",
    "questionText": "A pulse oximeter clipped to a patient's finger reports a saturation of 97%. The device never draws blood and makes no direct measurement of gas tension, yet the clinician uses the reading to infer the arterial oxygen status. On which physical property of hemoglobin does the device depend, and what does it actually report?",
    "options": [
      {
        "text": "It measures the pressure pulse waveform and converts its amplitude into a saturation estimate",
        "explanation": "Incorrect. The pulsatile signal is used to isolate the arterial component of the signal, but amplitude alone carries no information about how much oxygen is bound; the measurement is optical, not mechanical. This would be the correct answer if the device were a plethysmograph reporting perfusion rather than an oximeter reporting saturation."
      },
      {
        "text": "It measures the different densities of arterial and venous blood by ultrasound reflection",
        "explanation": "Incorrect. No ultrasound is involved, and oxygenated and deoxygenated blood do not differ meaningfully in density. The relevant difference between the two forms of hemoglobin is spectral, not acoustic. This would be the correct answer if the question described a Doppler flow probe rather than a pulse oximeter."
      },
      {
        "text": "It uses two wavelengths to distinguish oxyhemoglobin from deoxyhemoglobin",
        "explanation": "Correct. Oxyhemoglobin and deoxyhemoglobin have different spectral patterns, absorbing light differently, which the lecturer flags early in the lecture as the reason to remember the two forms. Dual-wavelength spectrophotometry measures the ratio of the two, converts it into a percent saturation, and that saturation is then used to estimate the arterial PO2 in the finger. It is an inference from a saturation, not a direct pressure measurement."
      },
      {
        "text": "It uses a single wavelength to measure total hemoglobin, then infers the bound fraction from that value",
        "explanation": "Incorrect. A single wavelength cannot separate two species with overlapping absorbance, which is exactly why the technique is dual-wavelength; and total hemoglobin concentration alone says nothing about how much oxygen is bound. This would be the correct answer if the device were a bedside hemoglobinometer rather than an oximeter."
      },
      {
        "text": "It measures the electrical conductivity of blood, which changes as heme iron is oxidized",
        "explanation": "Incorrect. Oximetry is optical, and oxygen BINDING is not oxidation of the heme iron; oxidation to Fe3+ produces methemoglobin, an entirely different molecule. This would be the correct answer if the question were about detecting methemoglobinemia by a change in the iron oxidation state, which standard dual-wavelength oximetry does not do reliably."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: pulse oximetry is dual-wavelength spectrophotometry. Oxyhemoglobin and deoxyhemoglobin absorb light differently, and their ratio gives a percent saturation used to estimate arterial PO2.",
    "pdfPage": 11,
    "pdfQuote": "Dual-wavelength spectrophotometry"
  },
  {
    "id": 13,
    "category": "Respiratory Physiology: Bohr Effect",
    "questionText": "A muscle biopsy taken during sustained heavy exercise shows a high local PCO2, a tissue pH of 7.21, a temperature of 39 degrees Celsius, and an elevated concentration of a glycolytic intermediate that signals a tissue running glycolysis hard. Which effect do these four findings share on the local oxygen-hemoglobin dissociation curve?",
    "options": [
      {
        "text": "They shift it left, raising affinity and moving P50 to approximately 12.5 mmHg",
        "explanation": "Incorrect. Left shift is the mirror image of what these conditions produce; it happens in lung tissue after re-oxygenation and in metabolically quiet tissue. Raising affinity in an oxygen-starved muscle would be exactly the wrong response. This would be the correct answer if the sample had been taken from a pulmonary capillary rather than from working muscle."
      },
      {
        "text": "They shift it right, lowering affinity and moving P50 to approximately 40 mmHg",
        "explanation": "Correct. Increased PCO2 and decreased pH together constitute the Bohr effect, increased temperature accompanies active muscle, and 2,3-DPG is the glycolytic intermediate that flags a highly active tissue. All four shift the curve to the right, lowering affinity and moving P50 from 25 mmHg out to about 40 mmHg. That matters because 40 mmHg is a pressure the tissue actually reaches, whereas an unshifted curve would require PO2 to fall to 25 mmHg or below before releasing the same amount."
      },
      {
        "text": "They flatten the curve without moving it, so P50 becomes impossible to determine",
        "explanation": "Incorrect. These factors translate the curve along the pressure axis; they do not abolish its sigmoidal shape or make P50 undefined. A curve with no measurable P50 is not a physiologic entity. This would be the correct answer if the modifiers destroyed cooperativity, which none of them do."
      },
      {
        "text": "They shift it left in adult hemoglobin but right in fetal hemoglobin, which lacks beta chains",
        "explanation": "Incorrect. The directions are reversed. In adult hemoglobin these factors shift the curve right, and fetal hemoglobin, which has gamma rather than beta chains, does not interact with 2,3-DPG at all and sits left-shifted. This would be the correct answer if fetal hemoglobin responded more strongly to 2,3-DPG than adult hemoglobin, which is the opposite of the truth."
      },
      {
        "text": "They have no effect, since curve position is fixed by the alpha and beta chain sequence",
        "explanation": "Incorrect. Chain sequence sets the baseline affinity, but the curve's position is dynamically modulated by the local chemical environment, which is precisely what makes oxygen delivery efficient rather than merely adequate. This would be the correct answer if hemoglobin were an inert carrier with a single unchangeable affinity."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: CADET, face Right. CO2, Acid, 2,3-DPG, Exercise and Temperature shift the curve right, moving P50 from 25 mmHg to about 40 mmHg and making unloading easier.",
    "pdfPage": 12,
    "pdfQuote": "Bohr Effect"
  },
  {
    "id": 14,
    "category": "Toxicology: Carbon Monoxide",
    "questionText": "A colorless gas competes with oxygen for the identical binding site on the heme group of hemoglobin. Once bound it is extremely difficult to displace, and the resulting complex is termed carboxyhemoglobin. A student is asked to state the affinity of this gas for heme relative to oxygen and the functional consequence of that affinity. Which option is correct?",
    "options": [
      {
        "text": "Roughly 2 to 5 times that of oxygen, which slows but does not prevent oxygen loading",
        "explanation": "Incorrect. The affinity difference is far larger than this, which is exactly why even modest ambient concentrations are dangerous and why the complex is so hard to break. A two- to five-fold difference would be manageable by simple competition. This would be the correct answer if carbon monoxide were only a weak competitor at the heme site."
      },
      {
        "text": "Roughly equal to that of oxygen, so the two gases occupy binding sites in strict proportion to their respective partial pressures",
        "explanation": "Incorrect. If affinities were equal, occupancy would follow partial pressures and the trace concentrations of carbon monoxide found in a house fire would be harmless. The lethality of the gas comes precisely from the mismatch in affinity. This would be the correct answer if carbon monoxide behaved like an inert competing gas such as nitrogen."
      },
      {
        "text": "Roughly 20 times that of oxygen, and the complex dissociates within a few minutes of exposure",
        "explanation": "Incorrect. Both halves are wrong. The affinity ratio is an order of magnitude higher than 20, and dissociation is slow rather than rapid: even on 100% oxygen it takes about ninety minutes. This would be the correct answer if carboxyhemoglobin were a low-affinity, rapidly reversible complex, which the treatment times on the slide disprove."
      },
      {
        "text": "Lower than that of oxygen, which is why toxicity requires very high inspired concentrations",
        "explanation": "Incorrect. The affinity is far HIGHER than that of oxygen, which is why very low inspired concentrations are dangerous and why the lecturer ends the slide by urging everyone to install a household alarm. This would be the correct answer if the gas were a weak competitor requiring near-suffocating concentrations to cause harm."
      },
      {
        "text": "210 to 250 times that of oxygen, removing those sites from oxygen transport",
        "explanation": "Correct. Carbon monoxide binds the same heme site as oxygen with 210 to 250 times the affinity, and the lecturer emphasizes that it is really difficult to get back off. The sites it occupies are simply removed from oxygen transport, so the oxygen content of blood collapses even though the dissolved oxygen, and therefore the measured PO2, can look entirely normal. In the lecture's example, roughly 50% carboxyhemoglobin was survivable; much beyond that is not."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: carbon monoxide competes for the same heme site as oxygen with 210-250 times the affinity, forming carboxyhemoglobin and removing those sites from oxygen transport.",
    "pdfPage": 13,
    "pdfQuote": "210-250 times higher affinity to heme than O2"
  },
  {
    "id": 15,
    "category": "Physiology: Erythropoietin",
    "questionText": "A healthy climber spends three weeks living at 4,000 meters, where the oxygen concentration of inspired air is much lower than at sea level. Over that period his circulating red cell mass increases measurably. The hormone responsible is a glycoprotein whose release is triggered by hypoxia. Where is that hormone primarily produced, and what does it do at its target tissue?",
    "options": [
      {
        "text": "Primarily in the liver; it binds mature erythrocytes and prolongs their circulating lifespan",
        "explanation": "Incorrect. The liver contributes only to a much lesser degree, and the hormone acts on precursors rather than on mature cells. Extending red cell lifespan is not the mechanism by which red cell mass expands at altitude. This would be the correct answer if the kidneys were absent and the mechanism were reduced red cell destruction rather than increased production."
      },
      {
        "text": "Primarily in the bone marrow itself; it acts locally to accelerate hemoglobin synthesis per cell",
        "explanation": "Incorrect. The bone marrow is the TARGET, not the source, and the effect is on precursor number and differentiation rather than on hemoglobin content per cell. Making the marrow its own source would remove the whole point of a distant oxygen sensor. This would be the correct answer if erythropoietin were a locally acting paracrine growth factor."
      },
      {
        "text": "Primarily in the lung; it binds pulmonary capillary endothelium to raise the oxygen diffusing capacity",
        "explanation": "Incorrect. The lung is not an endocrine source of this hormone, and erythropoietin does not act on the alveolar-capillary membrane. Its entire effect is on red cell production in the marrow. This would be the correct answer if the adaptation to altitude worked by improving diffusion rather than by increasing carrier number."
      },
      {
        "text": "Primarily in the kidney; it binds proerythroblasts, increasing number and differentiation",
        "explanation": "Correct. Erythropoietin is a glycoprotein hormone produced mainly in the kidneys and to a much lesser degree in the liver, and hypoxia such as that encountered at high altitude is the trigger. It travels to the bone marrow, binds proerythroblasts, increases their number, and facilitates their differentiation into mature erythrocytes, thereby raising the number of oxygen carriers. The kidney is a good sensor for this job because it can distinguish a true oxygen shortage from a merely reduced blood flow."
      },
      {
        "text": "Primarily in the spleen; it slows the destruction of aging red cells and thereby expands the pool",
        "explanation": "Incorrect. The spleen removes senescent red cells but does not produce this hormone, and the mechanism at altitude is increased production, not decreased clearance. This would be the correct answer if red cell mass at altitude rose because of impaired splenic function rather than because of hormonal stimulation of the marrow."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: EPO is a glycoprotein made mainly in the kidney (less in liver), triggered by hypoxia, that binds marrow proerythroblasts to increase their number and drive differentiation into erythrocytes.",
    "pdfPage": 14,
    "pdfQuote": "Erythropoietin EPO"
  },
  {
    "id": 16,
    "category": "Toxicology: Carbon Monoxide",
    "questionText": "A 34-year-old man is pulled from a house with a malfunctioning gas furnace after an unknown period of exposure. He is confused and complains of severe headache and nausea. Temperature is 36.9 degrees Celsius, blood pressure 128/78 mmHg, pulse 104/min, respirations 20/min. Standard pulse oximetry reads 99% and his arterial PO2 is 98 mmHg, yet co-oximetry shows that approximately half of his hemoglobin is complexed with carbon monoxide. He is intubated for airway protection and a hyperbaric facility is available on site. Which intervention will clear the bound gas most rapidly?",
    "options": [
      {
        "text": "Continued breathing of room air, which clears the gas over approximately five hours",
        "explanation": "Incorrect. This is the slowest of the three options the lecturer lists and is reserved for situations where time is not of the essence. With half his hemoglobin out of service and frank neurologic symptoms, waiting five hours is not acceptable. This would be the correct answer if the patient were asymptomatic with a low carboxyhemoglobin level and no urgency."
      },
      {
        "text": "Hyperbaric oxygen at three atmospheres, which clears it in about twenty minutes",
        "explanation": "Correct. The lecturer lists three therapies in order of speed: regular air over about five hours, air saturated with oxygen over about an hour and a half, and a hyperbaric chamber operating at three atmospheres for about twenty minutes in extreme cases. All three work by raising the concentration gradient that drives carbon monoxide off the heme binding sites, and the hyperbaric route raises that gradient the most. A patient with roughly 50% carboxyhemoglobin and altered mental status is exactly the extreme case for which it is reserved."
      },
      {
        "text": "Air enriched to 100% oxygen at ambient pressure, which clears it in about ninety minutes",
        "explanation": "Incorrect. A faster option is available in this patient. This is the therapy most often used and works by the same gradient mechanism, but at about an hour and a half it is several times slower than the hyperbaric route. This would be the correct answer if no hyperbaric chamber were available, which the vignette specifically excludes."
      },
      {
        "text": "Intravenous methylene blue, which reduces the heme iron and releases the bound gas rapidly",
        "explanation": "Incorrect. Reducing the heme iron addresses an oxidized Fe3+ center, which is the problem in methemoglobinemia, not in carbon monoxide poisoning where the iron remains ferrous and is simply occupied. Nothing in this lecture supports its use here. This would be the correct answer if the patient's carrier defect were oxidation of heme iron rather than competitive occupancy by a gas."
      },
      {
        "text": "Exchange transfusion, which is the only method that removes the complex within one hour",
        "explanation": "Incorrect. The lecture offers three specific therapies and exchange transfusion is not among them, and the claim that it is the only sub-hour method is contradicted by the twenty-minute hyperbaric figure on the slide. This would be the correct answer if the toxin were irreversibly bound and no gradient-driven displacement were possible."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: carbon monoxide is displaced by raising the oxygen gradient. Regular air takes about 5 hours, air saturated with O2 about 1.5 hours, and a hyperbaric chamber at 3 ATM about 20 minutes.",
    "pdfPage": 13,
    "pdfQuote": "Hyperbaric chamber (3ATM) ~20min"
  },
  {
    "id": 17,
    "category": "Toxicology: Carbon Monoxide",
    "questionText": "The same 34-year-old man remains confused. His arterial PO2 is 98 mmHg and his standard pulse oximeter reads 99%, yet his serum lactate is 6.2 mmol/L and he shows clear clinical signs of tissue hypoxia. His hemoglobin concentration and cardiac output are both normal. Which mechanism best explains the discrepancy between his reassuring measured partial pressure and his failing oxygen delivery?",
    "options": [
      {
        "text": "Occupied heme sites lower oxygen content while dissolved oxygen is unchanged",
        "explanation": "Correct. Carbon monoxide competitively occupies the same heme binding site as oxygen with 210 to 250 times the affinity, so those sites are removed from oxygen transport and the hemoglobin-bound fraction of content, roughly 98% of the total, collapses. Only freely dissolved oxygen contributes to a partial pressure, and that fraction is untouched, so PO2 stays normal. Because delivery equals cardiac output times content, a normal PO2 and a normal cardiac output cannot rescue a patient whose content has been gutted."
      },
      {
        "text": "Carbon monoxide dissolves in plasma and falsely raises the measured partial pressure of oxygen in the sample",
        "explanation": "Incorrect. A blood gas analyzer measures the partial pressure of oxygen specifically, and dissolved carbon monoxide does not inflate it. The PO2 in this patient is genuinely normal, which is exactly what makes the situation dangerous. This would be the correct answer if the analyzer were reporting a total dissolved gas tension rather than an oxygen-specific value."
      },
      {
        "text": "Carbon monoxide oxidizes the heme iron to the ferric state, which is what the oximeter detects",
        "explanation": "Incorrect. Oxidation of heme iron from Fe2+ to Fe3+ produces methemoglobin, a separate entity in this lecture with different causes and a different appearance. Carbon monoxide leaves the iron ferrous and simply occupies the site. This would be the correct answer if the patient had been exposed to an oxidizing drug such as an anti-malarial rather than to a furnace leak."
      },
      {
        "text": "Carbon monoxide increases cardiac output, so oxygen delivery outstrips the measured content",
        "explanation": "Incorrect. The vignette states cardiac output is normal, and in any case a higher cardiac output would raise delivery rather than explain hypoxia. Delivery is the product of flow and content, and here it is content that has failed. This would be the correct answer if the question asked how a compensatory tachycardia partially offsets a low content."
      },
      {
        "text": "Carbon monoxide binds a site distinct from the oxygen site and prevents carbon dioxide release",
        "explanation": "Incorrect. A site distinct from the oxygen site describes carbaminohemoglobin formation by carbon dioxide, not carbon monoxide, which is explicitly competitive at the heme oxygen site. Impaired CO2 release is also not the mechanism of his lactate rise. This would be the correct answer if the question concerned the Haldane effect and carbon dioxide carriage."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: in carbon monoxide poisoning the PO2 and standard pulse oximetry look normal because dissolved oxygen is unaffected. It is the oxygen CONTENT, and therefore delivery, that has collapsed.",
    "pdfPage": 13,
    "pdfQuote": "210-250 times higher affinity to heme than O2"
  },
  {
    "id": 18,
    "category": "Respiratory Physiology: Bohr Effect",
    "questionText": "A 19-year-old college track athlete is competing in a high-intensity 400-meter sprint. Midway through the race his actively contracting skeletal muscle sharply increases its metabolic rate, rapidly producing large quantities of carbon dioxide and lactic acid while generating local heat. Blood sampled from that muscle capillary bed shows a PCO2 of 62 mmHg, a pH of 7.19, and a temperature of 39.1 degrees Celsius. Which change occurs in the local oxygen-hemoglobin dissociation curve, and what is its functional benefit?",
    "options": [
      {
        "text": "A leftward shift, which raises affinity so the muscle can absorb the gas faster from plasma",
        "explanation": "Incorrect. A leftward shift makes it MORE difficult for hemoglobin to release oxygen and therefore more difficult for the muscle to obtain it, which is the opposite of what a tissue in high oxygen demand needs. The lecturer eliminates this option first. This would be the correct answer if the blood sample had been drawn from a pulmonary capillary where loading, not unloading, is the goal."
      },
      {
        "text": "A leftward shift, which stabilizes the relaxed state and prevents premature oxygen release",
        "explanation": "Incorrect. Both the direction and the goal are wrong. Preventing release is exactly what this muscle does not want, and the relaxed state is the conformation that holds oxygen more tightly. This would be the correct answer if the physiologic aim were to protect oxygen stores in a metabolically quiet tissue rather than to unload into working muscle."
      },
      {
        "text": "No shift, because baroreceptors adjust cardiac output and hold the local curve constant",
        "explanation": "Incorrect. Cardiac output is unrelated to the biochemical functioning of hemoglobin, as the lecturer states explicitly when working through this question. Baroreceptor reflexes cannot move a dissociation curve. This would be the correct answer if the question asked how systemic perfusion, rather than local affinity, is regulated during exercise."
      },
      {
        "text": "A rightward shift, which binds oxygen more tightly and protects the cell from acidic denaturation",
        "explanation": "Incorrect. This is the trap: the direction is right but the stated benefit is backwards. A rightward shift RELEASES oxygen more easily; it does not bind it more tightly, and protection from acidic denaturation is not a described function. This would be the correct answer if a right shift raised affinity, which would defeat its entire purpose."
      },
      {
        "text": "A rightward shift, which lowers affinity and facilitates unloading to the muscle",
        "explanation": "Correct. High PCO2 with low pH is the Bohr effect, and increased temperature reinforces it, with 2,3-DPG from active glycolysis as the fourth factor. Together they shift the curve rightward, lowering hemoglobin's affinity for oxygen and moving P50 from 25 mmHg out to about 40 mmHg, which is a pressure the working muscle actually reaches. The lecturer also notes that the rightward shift corresponds to the taut state of hemoglobin: tightening up leaves less room for oxygen to stay bound, so it is released more readily."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: a right shift lowers affinity and facilitates unloading; it never binds oxygen more tightly. Right shift goes with the taut (T) state, while the relaxed (R) state holds oxygen more tightly.",
    "pdfPage": 18,
    "pdfQuote": "rightward shift, which decreases hemoglobin's affinity for oxygen"
  },
  {
    "id": 19,
    "category": "Respiratory Physiology: Hemoglobin Variants",
    "questionText": "A researcher incubates two purified hemoglobin preparations with progressively increasing concentrations of 2,3-BPG and measures P50 for each. The first preparation, taken from adult venous blood, shows a progressive rise in P50 as the concentration increases. The second, taken from umbilical cord blood, shows essentially no change across the same range. Both preparations are confirmed to contain two alpha chains per tetramer and normal ferrous heme iron. Which statement best explains the second result?",
    "options": [
      {
        "text": "Cord blood hemoglobin has already been fully right-shifted by the low fetal partial pressure",
        "explanation": "Incorrect. Fetal hemoglobin is LEFT-shifted relative to adult hemoglobin, not right-shifted, and a low ambient partial pressure does not permanently reposition a curve. The failure to respond reflects the absence of an interaction, not saturation of an effect. This would be the correct answer if the preparation had come from an adult tissue already maximally exposed to Bohr factors."
      },
      {
        "text": "Cord blood hemoglobin lacks heme iron in two of its four subunits and therefore cannot respond to any ligand at all",
        "explanation": "Incorrect. The vignette states that both preparations have normal ferrous heme iron, and every hemoglobin chain, gamma included, carries a heme group with one iron atom. Missing heme would abolish oxygen binding entirely, not just the 2,3-BPG response. This would be the correct answer if the question described a hemoglobin with structurally absent heme groups, which this lecture never teaches."
      },
      {
        "text": "Gamma chains replace beta chains, and this hemoglobin does not interact with 2,3-BPG",
        "explanation": "Correct. Cord blood contains fetal hemoglobin, which pairs two alpha chains with two gamma chains rather than two beta chains, exactly matching the stated finding of two alpha chains per tetramer. HbF has a higher oxygen affinity and does not interact with 2,3-BPG, so adding the metabolite produces no change in P50. The lecturer gives an explicit word of caution that everything said about 2,3-DPG shifting the curve applies to adult hemoglobin only."
      },
      {
        "text": "Cord blood hemoglobin binds 2,3-BPG at the oxygen site, so the two effects exactly cancel out",
        "explanation": "Incorrect. Fetal hemoglobin does not bind 2,3-BPG at any site, and an exact cancellation across a whole concentration range would be an implausible coincidence rather than a mechanism. This would be the correct answer if 2,3-BPG were a competitive ligand at the heme, which describes carbon monoxide rather than a glycolytic intermediate."
      },
      {
        "text": "The adult sample was contaminated with methemoglobin, which artificially raised its measured P50",
        "explanation": "Incorrect. This attacks the wrong preparation: the adult result is the expected one and requires no explanation. Methemoglobin also cannot bind oxygen at all, so it would not simply shift a P50. This would be the correct answer if the adult preparation had shown an unexpectedly absent response instead of a normal one."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: 2,3-DPG right-shifts ADULT hemoglobin only. Fetal hemoglobin (2 alpha + 2 gamma) does not interact with it, which is part of why HbF sits left of the maternal curve.",
    "pdfPage": 5,
    "pdfQuote": "HbF: Fetal Hemoglobin"
  },
  {
    "id": 20,
    "category": "Respiratory Physiology: Hemoglobin Variants",
    "questionText": "A 27-year-old traveler returns from West Africa while taking a prophylactic anti-malarial agent. Over three days he becomes progressively fatigued, and his wife notes a bluish-gray cast to his lips and fingertips. Temperature is 37.0 degrees Celsius, blood pressure 118/72 mmHg, pulse 96/min, respirations 18/min. Arterial PO2 is 94 mmHg, yet pulse oximetry reads 85% and does not improve with supplemental oxygen. His drawn blood appears chocolate-brown. Which abnormality of the oxygen carrier is present, and what is its outlook?",
    "options": [
      {
        "text": "Beta chain substitution of valine for glutamic acid; permanent, with sickling under low oxygen",
        "explanation": "Incorrect. A beta chain point mutation is inherited and would not appear acutely after starting a drug, and it produces deformed red cells rather than a chocolate-brown sample with a fixed low saturation. This would be the correct answer if the patient had a lifelong history of pain crises and a smear showing elongated, curved cells."
      },
      {
        "text": "Competitive occupancy of the heme site by an inhaled gas; treated by raising the oxygen concentration gradient",
        "explanation": "Incorrect. Competitive occupancy by an inhaled gas describes carbon monoxide, and the history points to an oxidizing medication rather than an exposure. Carbon monoxide poisoning also characteristically leaves standard pulse oximetry falsely HIGH rather than low. This would be the correct answer if the patient had been rescued from a house fire or a faulty furnace."
      },
      {
        "text": "Loss of two beta chains and their replacement by gamma chains; permanent but generally well tolerated",
        "explanation": "Incorrect. Gamma chain hemoglobin is fetal hemoglobin, a normal developmental variant that does not arise in an adult after drug exposure and does not cause cyanosis. This would be the correct answer if the sample had come from cord blood and the question concerned oxygen transfer across the placenta."
      },
      {
        "text": "Oxidation of heme iron to the ferric state; the process is reversible",
        "explanation": "Correct. Methemoglobin has its central heme iron oxidized from the normal Fe2+ to Fe3+, and ferric heme is unable to bind oxygen. The lecturer names oxidative stress and certain medications, notably some anti-malarial drugs, as acquired causes, and describes exactly this presentation of fatigue with a bluish tint to the skin. Dissolved oxygen is unaffected, which is why the arterial PO2 remains normal. Most importantly, unlike an inherited globin mutation, this condition is reversible."
      },
      {
        "text": "Reduction of heme iron to the ferrous state; irreversible and requiring chronic transfusion",
        "explanation": "Incorrect. Both halves are wrong. Ferrous, Fe2+, is the NORMAL functional state of heme iron, so a reduction to it would restore rather than impair function, and the condition described is reversible rather than requiring lifelong transfusion. This would be the correct answer if the question were describing the therapeutic endpoint after treatment rather than the disease state."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: an oxidizing drug plus fatigue, bluish skin, and a normal PO2 with a low saturation points to methemoglobinemia, Fe3+ heme that cannot bind oxygen. It is reversible.",
    "pdfPage": 6,
    "pdfQuote": "Methemoglobin"
  },
  {
    "id": 21,
    "category": "Respiratory Physiology: Hemoglobin Variants",
    "questionText": "A 9-year-old boy with a known beta chain hemoglobin variant develops severe pain in his back and thighs the day after a long flight, following a night with a febrile respiratory infection. Temperature is 38.2 degrees Celsius, pulse 118/min, respirations 26/min, and oxygen saturation 89% on room air. A peripheral smear shows elongated, curved red cells. Both parents are asymptomatic carriers and come from a region where malaria is endemic. Which statement best links the molecular defect to this presentation?",
    "options": [
      {
        "text": "The heme iron has been oxidized, which lowers carrying capacity and deforms the cell membrane",
        "explanation": "Incorrect. Oxidation of heme iron produces methemoglobin, which is acquired or congenital but does not deform red cells into elongated shapes and does not run in families as an autosomal carrier state with a malaria-linked distribution. This would be the correct answer if the boy had recently been exposed to an oxidizing medication and his blood appeared chocolate-brown."
      },
      {
        "text": "A valine-for-glutamic-acid change makes the cell destabilize when oxygen tension falls",
        "explanation": "Correct. Sickle cell hemoglobin carries a beta chain point mutation replacing glutamic acid with valine, which slightly changes the molecule's conformation. Red cells packed with HbS have a lower oxygen-carrying capacity and, critically, destabilize in shape especially under oxygen-poor conditions, which is exactly what the hypoxemia of flight and febrile illness provides. The carrier state in both parents fits the high allele frequency in malaria-endemic regions, where heterozygosity is a genetic advantage because the pathogen hides inside red cells."
      },
      {
        "text": "A gamma-for-beta chain change raises affinity so severely that tissue cannot extract oxygen",
        "explanation": "Incorrect. Gamma chains define fetal hemoglobin, a normal developmental form that is not inherited as a disease and does not sickle. The smear finding of elongated cells is not explained by a high-affinity variant. This would be the correct answer if the question concerned oxygen transfer across the placenta rather than a painful crisis in a child."
      },
      {
        "text": "Carrier parents cannot transmit the variant, so his findings must reflect an acquired oxidant exposure",
        "explanation": "Incorrect. Asymptomatic carriers are precisely how a recessive beta chain variant is transmitted, and the lecturer notes that heterozygosity is advantageous in malaria-endemic regions. Nothing in the vignette suggests an oxidant. This would be the correct answer if both parents had tested negative for the variant."
      },
      {
        "text": "The variant raises oxygen affinity, so tissue hypoxia occurs despite a normal red cell shape",
        "explanation": "Incorrect. HbS has a LOWER oxygen affinity, not a higher one, and the red cell shape is emphatically abnormal, as the smear shows. This would be the correct answer if the variant were a high-affinity mutant that trapped oxygen without distorting the cell."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: HbS red cells destabilize in shape especially under oxygen-poor conditions, so hypoxemic stress precipitates the clinical picture. Heterozygosity persists because it protects against malaria.",
    "pdfPage": 7,
    "pdfQuote": "Lower O2 Affinity"
  },
  {
    "id": 22,
    "category": "Respiratory Physiology: CO2 Transport",
    "questionText": "A 44-year-old woman undergoes cardiopulmonary exercise testing. Mixed venous blood drawn at peak exertion is analyzed for the chemical forms in which carbon dioxide is being carried back to the lung. Her PCO2 is 46 mmHg and her hemoglobin concentration is normal. The laboratory reports three distinct fractions. According to the values this lecture instructs students to use, which fraction accounts for the great majority of the carbon dioxide in her blood?",
    "options": [
      {
        "text": "Bicarbonate, at more than 80%",
        "explanation": "Correct. The lecture is explicit that more than 80% of blood carbon dioxide travels as bicarbonate in the bicarbonate buffer system, with 5 to 10% as carbaminohemoglobin bound to hemoglobin and 5 to 10% freely dissolved in plasma, of which this lecture uses roughly 5%. The slide adds a warning that these percentages differ somewhat between textbooks and that students should stick with the values given there. Because bicarbonate is in free solution in plasma, it also counts toward the measured PCO2."
      },
      {
        "text": "Carbaminohemoglobin, at more than 80% of the total carried in her blood",
        "explanation": "Incorrect. Carbon dioxide bound to hemoglobin is a minor route, 5 to 10% by the slide's values, and the lecturer states from the outset that only a minority of carbon dioxide is carried bound to hemoglobin. This would be the correct answer if hemoglobin carried carbon dioxide the way it carries oxygen, which it does not."
      },
      {
        "text": "Carbon dioxide dissolved in plasma, at roughly half of the total carried",
        "explanation": "Incorrect. The dissolved fraction is 5 to 10%, and this lecture uses about 5%, corresponding to 2.8 mL CO2 per 100 mL blood. It is notable for being much larger than the dissolved oxygen fraction, but it is nowhere near half. This would be the correct answer if carbon dioxide were as poorly buffered as oxygen and had no chemical carriage route."
      },
      {
        "text": "Carbon dioxide bound to the same heme site that oxygen occupies, at about 60% of the total",
        "explanation": "Incorrect. This option is wrong twice over. Carbon dioxide binds hemoglobin at a site DIFFERENT from the oxygen site, which is why the two are not competitive, and that route carries only a small minority of the load. This would be the correct answer if carbon dioxide were a competitive ligand at the heme, which describes carbon monoxide instead."
      },
      {
        "text": "Carbonic acid held in stable form inside the red cell, at roughly three quarters of the total",
        "explanation": "Incorrect. Carbonic acid is a transient intermediate that carbonic anhydrase rapidly converts onward to bicarbonate and a proton; it is not a storage form and is not one of the three fractions the slide lists. This would be the correct answer if the dissociation step were blocked and H2CO3 accumulated, which is not the physiologic state."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: CO2 travels as more than 80% bicarbonate, 5-10% carbaminohemoglobin, and 5-10% dissolved (this lecture uses ~5%, or 2.8 mL CO2/100 mL blood at PCO2 40).",
    "pdfPage": 15,
    "pdfQuote": "to bicarbonate"
  },
  {
    "id": 23,
    "category": "Respiratory Physiology: CO2 Transport",
    "questionText": "A 52-year-old man is mechanically ventilated after abdominal surgery. His intensivist is explaining to the team how carbon dioxide produced in peripheral tissue is transported back to the lung. Inside the red blood cell, carbon dioxide is hydrated and the product then dissociates, and the resulting negatively charged ion is exported into the plasma in large quantity. Which event must accompany that export, and by which carrier is it performed?",
    "options": [
      {
        "text": "Sodium enters the red cell through a cation channel to balance the departing negative charge",
        "explanation": "Incorrect. The lecture describes an anion exchange, not a cation influx, and the exchanging ion is chloride. Importing a cation would balance charge arithmetically but is not the mechanism taught here. This would be the correct answer if the transporter in question were a sodium channel rather than the band 3 anion exchanger."
      },
      {
        "text": "Potassium leaves alongside the anion, which preserves the transmembrane osmotic gradient",
        "explanation": "Incorrect. Exporting a cation together with an anion would worsen rather than preserve electrical balance inside the cell, and the lecture frames the problem as one of electrical neutrality rather than osmotic gradient. This would be the correct answer if the cell needed to shed osmotically active particles, which is not the issue being solved."
      },
      {
        "text": "A proton is exported with the anion by the same protein, which keeps the cell interior electrically neutral",
        "explanation": "Incorrect. The proton generated by the same reaction stays inside the red cell, where it is buffered by deoxyhemoglobin; exporting it would acidify plasma and defeat the buffering arrangement. This would be the correct answer if the red cell handled protons by extrusion rather than by binding them to hemoglobin."
      },
      {
        "text": "Water follows the anion by osmosis, which is what maintains electrical neutrality within the cell",
        "explanation": "Incorrect. Water is electrically neutral and cannot balance charge, so osmotic water movement does not address the problem. The lecture is specific that the balancing species is a negatively charged chloride ion. This would be the correct answer if the question concerned red cell volume regulation rather than electroneutrality."
      },
      {
        "text": "Chloride enters through the band 3 anion exchanger",
        "explanation": "Correct. Once carbonic anhydrase converts CO2 and water to carbonic acid and then to bicarbonate plus a proton, the bicarbonate is released into the plasma. Because bicarbonate is negatively charged, a negatively charged chloride ion must be taken up into the red cell to preserve electrical neutrality. That one-for-one swap is the chloride shift, and it is carried out by the band 3 protein acting as an anion exchanger. The whole sequence is reversible and runs backwards in lung tissue."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: for every HCO3- leaving the red cell, a Cl- enters through the band 3 anion exchanger. That is the chloride shift, and it exists to preserve electrical neutrality.",
    "pdfPage": 17,
    "pdfQuote": "Chloride shift via band-3 protein used for anion exchange"
  },
  {
    "id": 24,
    "category": "Respiratory Physiology: CO2 Transport",
    "questionText": "In the same ventilated patient, an investigator adds an agent that selectively inhibits the red cell enzyme responsible for interconverting carbon dioxide, water, and carbonic acid. Blood is then sampled from an actively exercising limb where local carbon dioxide production is high. Which immediate consequence is expected inside the red blood cell?",
    "options": [
      {
        "text": "Chloride would be driven into the cell at an accelerated rate to compensate for the enzymatic block",
        "explanation": "Incorrect. Chloride entry is coupled one-for-one to bicarbonate exit, so if bicarbonate production falls, chloride entry falls with it rather than accelerating. The exchanger has no independent drive of its own. This would be the correct answer if band 3 transported chloride against a gradient independently of bicarbonate, which it does not."
      },
      {
        "text": "Carbon dioxide bound directly to hemoglobin would immediately dissociate into free gas",
        "explanation": "Incorrect. Carbaminohemoglobin formation is a separate, enzyme-independent route governed by hemoglobin's oxygenation state through the Haldane effect, not by carbonic anhydrase. Blocking the enzyme does not strip carbon dioxide off the globin. This would be the correct answer if the enzyme catalysed carbamino binding, which it does not."
      },
      {
        "text": "Bicarbonate generation would fall sharply",
        "explanation": "Correct. Carbonic anhydrase is the red-cell-associated enzyme that makes CO2 plus water into carbonic acid and then drives that acid onward to bicarbonate and a proton. Because more than 80% of blood carbon dioxide is carried as bicarbonate, inhibiting this enzyme cripples the dominant transport route. Fewer bicarbonate ions are exported to plasma, so the chloride shift through band 3 slows in parallel, and fewer protons are generated for deoxyhemoglobin to buffer."
      },
      {
        "text": "Oxygen would be released from hemoglobin more readily, because the taut state would be favored",
        "explanation": "Incorrect. If anything, blocking the enzyme reduces the local generation of protons, which are a Bohr factor promoting release, so the effect on oxygen unloading runs the opposite way. This would be the correct answer if carbonic anhydrase inhibition acidified the red cell interior, which is the reverse of what happens."
      },
      {
        "text": "Dissolved carbon dioxide would stop contributing to the measured partial pressure of the gas",
        "explanation": "Incorrect. Freely dissolved carbon dioxide contributes to PCO2 regardless of enzyme activity, and blocking conversion would if anything leave MORE gas in free solution. The lecturer stresses that CO2 inside the red cell is unbound and still counts toward PCO2. This would be the correct answer if partial pressure depended on chemical conversion rather than on molecules in free solution."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: carbonic anhydrase is the only red-cell-bound component of the bicarbonate buffer system, and it drives more than 80% of CO2 carriage. Inhibit it and bicarbonate generation collapses.",
    "pdfPage": 17,
    "pdfQuote": "Bicarbonate HCO"
  },
  {
    "id": 25,
    "category": "Respiratory Physiology: Haldane Effect",
    "questionText": "A 61-year-old woman is walking on a treadmill during a stress test. In her quadriceps capillary bed, hemoglobin has just delivered a large quantity of oxygen to the working muscle, and local PCO2 is rising rapidly as metabolism accelerates. The lecture's slide plots CO2 content against PCO2 separately for oxygenated and deoxygenated hemoglobin, and the two curves are clearly separated. Which statement describes the behavior of her hemoglobin in this capillary bed and names the principle involved?",
    "options": [
      {
        "text": "Having released oxygen, it now carries less carbon dioxide, because the two gases share one site",
        "explanation": "Incorrect. Both halves are wrong. Carbon dioxide binds hemoglobin at a site DIFFERENT from the oxygen site, so they are not competitive, and releasing oxygen enhances rather than reduces carbon dioxide carriage. This would be the correct answer if the two gases competed for the heme iron, which describes carbon monoxide instead."
      },
      {
        "text": "Having released oxygen, its carbon dioxide carriage is unchanged, since the two sites are independent",
        "explanation": "Incorrect. The sites are physically distinct but conformationally coupled, which is exactly the surprise the slide is designed to convey: binding either gas changes the shape of the whole molecule. Two separated curves on the plot prove the carriage is not independent. This would be the correct answer if the separated curves were superimposable, which they are not."
      },
      {
        "text": "Having bound oxygen in the lung, it arrives already loaded with the maximum carbon dioxide it can hold",
        "explanation": "Incorrect. Oxygenated hemoglobin is the form that carries the LEAST carbon dioxide, which is what allows the gas to be shed in the lung and blown off. Arriving fully loaded would leave no capacity for the carbon dioxide the muscle is producing. This would be the correct answer if oxygen binding increased carbon dioxide affinity, the reverse of the Haldane effect."
      },
      {
        "text": "Having released oxygen, it now takes up carbon dioxide more readily, the Haldane effect",
        "explanation": "Correct. When either oxygen or carbon dioxide predominates on hemoglobin, the conformation of the entire molecule changes, so the two binding sites sense each other even though they are physically distinct. Deoxyhemoglobin binds carbon dioxide more readily than oxyhemoglobin does, which is the Haldane effect. In an active muscle bed, hemoglobin has just become deoxygenated at precisely the moment metabolism is generating carbon dioxide, so the timing of the conformational change matches the physiologic need exactly."
      },
      {
        "text": "Having released oxygen, it releases protons more readily, which is what defines the Bohr effect",
        "explanation": "Incorrect. Deoxyhemoglobin is the BETTER proton buffer, so it binds protons rather than releasing them, and the Bohr effect describes how carbon dioxide and acid change hemoglobin's handling of oxygen, not the reverse. This would be the correct answer if the question had asked what happens to oxygen affinity in an acidic, carbon-dioxide-rich muscle bed."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Haldane effect - deoxyhemoglobin binds CO2 more readily than oxyhemoglobin, because binding either gas changes the conformation of the whole molecule. Bohr is the same coupling in the other direction.",
    "pdfPage": 16,
    "pdfQuote": "Haldane Effect: Facilitates CO2 uptake"
  },
  {
    "id": 26,
    "category": "Respiratory Physiology: Haldane Effect",
    "questionText": "The same woman's blood now returns to the pulmonary capillary bed and takes up oxygen from well-ventilated alveoli in which PCO2 is low. A student asks why this newly oxygenated hemoglobin gives up its carbon dioxide so readily, given that the lecture insists the oxygen and carbon dioxide binding sites on hemoglobin are physically distinct and not competitive. Which explanation is correct?",
    "options": [
      {
        "text": "Oxygen and carbon dioxide compete directly for the identical heme iron coordination position",
        "explanation": "Incorrect. It also contradicts the premise of the question. The lecture states repeatedly that carbon dioxide binds a different site from oxygen and the two are not competitive; the coupling is conformational. This would be the correct answer if the competing molecule were carbon monoxide, which does occupy the heme oxygen site directly."
      },
      {
        "text": "Oxygen binding changes whole-molecule conformation, lowering carbon dioxide affinity",
        "explanation": "Correct. The Haldane effect works because when either gas predominates on hemoglobin, the conformation of the entire molecule changes, so the physically separate sites still sense each other. Oxyhemoglobin binds carbon dioxide less readily than deoxyhemoglobin does. Arriving in the lung and picking up oxygen therefore drives carbon dioxide off the molecule at exactly the moment it can be exhaled, which is the mirror image of what happened in her exercising quadriceps."
      },
      {
        "text": "Carbonic anhydrase is inactivated in the pulmonary circulation, which forces carbon dioxide off",
        "explanation": "Incorrect. Carbonic anhydrase remains active in the lung and in fact runs the whole reaction sequence in reverse there, recombining bicarbonate and protons to regenerate carbon dioxide and water for exhalation. This would be the correct answer if the enzyme were compartment-specific, which it is not."
      },
      {
        "text": "The alveolar partial pressure gradient alone accounts for it; hemoglobin conformation plays no role",
        "explanation": "Incorrect. The gradient certainly drives diffusion across the alveolar membrane, but it does not explain why oxygenated and deoxygenated hemoglobin lie on two different CO2 content curves at the same PCO2. That separation is a property of the protein. This would be the correct answer if the two curves on the slide were superimposed."
      },
      {
        "text": "Oxygen binding raises red cell pH, which by the Bohr effect expels the bound carbon dioxide",
        "explanation": "Incorrect. This names the wrong principle and the wrong direction of causation: the Bohr effect describes how carbon dioxide and protons change hemoglobin's handling of OXYGEN, whereas the phenomenon here is oxygen changing hemoglobin's handling of carbon dioxide. This would be the correct answer if the question had asked why oxygen unloads more easily in an acidic tissue bed."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: in the lung, oxygen loading converts hemoglobin to the oxy form, which carries CO2 poorly and sheds it for exhalation. Bohr and Haldane are two directions of the same conformational coupling.",
    "pdfPage": 16,
    "pdfQuote": "Deoxyhemoglobin binds CO More Readily"
  },
  {
    "id": 27,
    "category": "Respiratory Physiology: Acid-Base",
    "questionText": "A 25-year-old man completes a maximal cycling test. In his working muscle capillaries, hydration of carbon dioxide inside red blood cells is generating protons in large numbers, and lactate is accumulating in the tissue. Despite this, the pH of blood leaving the muscle bed falls only modestly. His hemoglobin in this capillary bed has just unloaded most of its oxygen to the muscle. Which mechanism best accounts for the limited fall in pH?",
    "options": [
      {
        "text": "Oxyhemoglobin is the superior proton buffer and predominates in actively metabolizing tissue",
        "explanation": "Incorrect. Both halves are wrong. Deoxyhemoglobin, not oxyhemoglobin, is the better proton buffer, and it is deoxyhemoglobin that predominates in a tissue that has just extracted oxygen. This would be the correct answer if the sample had been taken from a pulmonary capillary where hemoglobin has just been re-oxygenated."
      },
      {
        "text": "Protons are exported into the plasma by the band 3 protein in exchange for chloride ions",
        "explanation": "Incorrect. Band 3 is an ANION exchanger that swaps bicarbonate out for chloride in; it does not transport protons, and exporting protons would acidify plasma rather than protect its pH. This would be the correct answer if the question concerned the fate of bicarbonate rather than the fate of the proton."
      },
      {
        "text": "Carbonic anhydrase consumes protons directly as it converts carbonic acid to bicarbonate",
        "explanation": "Incorrect. That reaction GENERATES the proton alongside the bicarbonate rather than consuming it, which is why a buffer is needed in the first place. Carbonic anhydrase accelerates the chemistry; it does not neutralize the acid. This would be the correct answer if the enzyme catalysed the reverse direction exclusively, which happens in the lung, not in exercising muscle."
      },
      {
        "text": "The protons are consumed in the reaction that converts carbaminohemoglobin back into free gas",
        "explanation": "Incorrect. Carbamino formation and dissociation is a separate route of carbon dioxide carriage and is not a proton sink in the way described. In active tissue carbaminohemoglobin is being formed, not broken down. This would be the correct answer if the blood were in the pulmonary capillary where carbamino carbon dioxide is being released."
      },
      {
        "text": "Deoxyhemoglobin binds protons more tightly than oxyhemoglobin",
        "explanation": "Correct. When hemoglobin delivers its oxygen it becomes deoxyhemoglobin, and that conformation binds hydrogen ions much more tightly than oxyhemoglobin does, making it a very good buffer. The timing is the elegant part: the protons are generated by the bicarbonate reaction in exactly the tissue where hemoglobin has just become the deoxy form. The lecturer describes it as a magnet effect, and the same conformational change simultaneously improves carbon dioxide carriage through the Haldane effect."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: deoxyhemoglobin is the better H+ buffer, and it appears exactly where protons are generated. The same conformational change also makes it the better CO2 carrier (Haldane).",
    "pdfPage": 17,
    "pdfQuote": "Deoxy-Hgb: better buffer for H+"
  },
  {
    "id": 28,
    "category": "Physiology: Erythropoietin",
    "questionText": "A 30-year-old woman relocates from sea level to a research station at 3,900 meters, and over the following month her hematocrit rises from 39% to 47%. Six months later, back at sea level, she suffers a severe hemorrhage with a marked fall in renal blood flow, but she is transfused promptly so that the oxygen content of her arterial blood is restored to normal within an hour. Her measured erythropoietin level does not rise appreciably during the episode. Which property of the hormone's source best explains both observations?",
    "options": [
      {
        "text": "The kidney distinguishes true oxygen shortage from reduced blood flow",
        "explanation": "Correct. Erythropoietin is produced mainly in the kidney, and the lecturer explains that the kidney is a good organ for this job because it has sensing capabilities that let it distinguish a genuine oxygen shortage from a merely reduced blood flow or a fall in the oxygen content of arterial blood. At altitude the hypoxia is real and sustained, so erythropoietin rises and expands the red cell mass. During her hemorrhage, prompt transfusion restored arterial oxygen content, so despite low renal blood flow the kidney correctly reads no oxygen deficit and does not launch erythropoiesis."
      },
      {
        "text": "The liver is the dominant source and responds only to prolonged environmental hypoxia",
        "explanation": "Incorrect. The liver contributes to a much lesser degree, and framing altitude as the only valid stimulus misses the discriminating capability the vignette is testing. This would be the correct answer if the kidneys were absent, as in an anephric dialysis patient, where hepatic production becomes the residual source."
      },
      {
        "text": "The bone marrow produces the hormone locally in proportion to the size of the proerythroblast pool",
        "explanation": "Incorrect. The marrow is the target of the hormone, not its source; erythropoietin travels there, binds proerythroblasts, increases their number, and drives their differentiation. A marrow-autonomous system would have no distant oxygen sensor at all. This would be the correct answer if erythropoiesis were regulated purely by local paracrine feedback."
      },
      {
        "text": "The hormone responds to the hematocrit itself, so a normal hematocrit after transfusion silences it",
        "explanation": "Incorrect. The trigger is hypoxia, not the hematocrit as a number; a patient can be profoundly hypoxic with a normal hematocrit, as in carbon monoxide poisoning. The transfusion mattered here because it restored oxygen CONTENT, not because it normalized a cell count. This would be the correct answer if red cell concentration itself were the sensed variable."
      },
      {
        "text": "The hormone is released by baroreceptors, which sense pressure rather than oxygen availability",
        "explanation": "Incorrect. Baroreceptors are neural pressure sensors and have nothing to do with erythropoietin release, which is triggered by hypoxia at the kidney. If pressure were the trigger, her hemorrhage would have produced a brisk rise. This would be the correct answer if the question concerned the reflex control of blood pressure rather than the control of red cell production."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: the kidney makes EPO because it can tell true oxygen shortage from mere hypoperfusion. Hypoxia is the trigger, not low flow, and not the hematocrit as a number.",
    "pdfPage": 14,
    "pdfQuote": "Kidneys can distinguish between decreased blood flow"
  },
  {
    "id": 29,
    "category": "Respiratory Physiology: Oxygen Content",
    "questionText": "A 38-year-old woman with several years of heavy menstrual bleeding reports exertional fatigue and dyspnea on climbing one flight of stairs. Blood pressure is 112/70 mmHg, pulse 98/min, respirations 16/min, and she is afebrile. Pulse oximetry reads 99% on room air and her arterial PO2 is 97 mmHg. Hemoglobin is 7.5 g/dL and her measured cardiac output is normal for her size. Which quantity is most reduced, and why do her saturation and partial pressure look reassuring?",
    "options": [
      {
        "text": "Percent saturation is reduced, and this is masked because pulse oximetry measures dissolved gas",
        "explanation": "Incorrect. Her saturation is genuinely 99%, and pulse oximetry does not measure dissolved gas; it uses dual-wavelength spectrophotometry to compare oxyhemoglobin with deoxyhemoglobin. In anemia the hemoglobin present is fully loaded, so saturation is normal. This would be the correct answer if she had a gas exchange defect leaving hemoglobin incompletely loaded."
      },
      {
        "text": "Arterial PO2 is reduced, and the oximeter cannot detect this because it reports only saturation",
        "explanation": "Incorrect. Her measured arterial PO2 is 97 mmHg, which is normal, so nothing is being masked. Anemia does not lower the partial pressure of oxygen because dissolved oxygen depends on alveolar PO2 and solubility, not on how much hemoglobin is present. This would be the correct answer if she had hypoventilation or a diffusion defect."
      },
      {
        "text": "Dissolved oxygen is reduced, since Henry's Law depends on hemoglobin concentration as well",
        "explanation": "Incorrect. Henry's Law relates dissolved gas to partial pressure and a solubility coefficient only; hemoglobin concentration does not enter the calculation. Her dissolved oxygen is normal at 0.3 mL/100 mL. This would be the correct answer if the dissolved fraction were carried by protein, which by definition it is not."
      },
      {
        "text": "Oxygen content is reduced, because binding capacity depends on hemoglobin mass",
        "explanation": "Correct. The oxygen-binding capacity is hemoglobin concentration multiplied by 1.34 mL O2/g, so at 7.5 g/dL rather than 15 g/dL her ceiling is roughly halved, from 20.1 to about 10 mL O2 per 100 mL blood. Content equals that capacity times saturation plus dissolved oxygen, so content falls in proportion even though her saturation is 99% and her PO2 is 97 mmHg. Since delivery is cardiac output times content, a normal cardiac output cannot fully compensate, which is why she is symptomatic on exertion."
      },
      {
        "text": "Oxygen delivery is preserved, because content and cardiac output vary reciprocally in anemia",
        "explanation": "Incorrect. No such reciprocal law exists, and her cardiac output is explicitly stated to be normal rather than elevated. Delivery is the simple product of flow and content, so a halved content halves delivery at unchanged flow. This would be the correct answer if a compensatory hyperdynamic circulation had exactly doubled her cardiac output, which the vignette rules out."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: in anemia, PO2 and saturation are normal but O2-binding capacity and therefore content are halved. A normal pulse oximetry reading never excludes inadequate oxygen delivery.",
    "pdfPage": 8,
    "pdfQuote": "The normal concentration of hemoglobin A in blood is 15 g/100 mL"
  },
  {
    "id": 30,
    "category": "Respiratory Physiology: CO2 Transport",
    "questionText": "A resident is asked to compute the quantity of carbon dioxide carried in free solution in 100 mL of blood at a PCO2 of 40 mmHg, using the solubility figure given in the lecture of 0.07 mL CO2 per 100 mL blood per mmHg. She is then asked what fraction of the total blood carbon dioxide this dissolved quantity represents, according to the values the lecturer instructs students to use. Which pair of answers is correct?",
    "options": [
      {
        "text": "0.3 mL, representing about 5% of total blood carbon dioxide content",
        "explanation": "Incorrect. The figure 0.3 mL per 100 mL is the DISSOLVED OXYGEN value at PO2 100 mmHg from the opening Henry's Law calculation, not the carbon dioxide value. The fraction is right but the volume belongs to the wrong gas. This would be the correct answer if the question had asked about dissolved oxygen in arterial blood."
      },
      {
        "text": "2.8 mL, representing about 80% of total blood carbon dioxide content",
        "explanation": "Incorrect. The volume is right but the fraction is wrong. More than 80% of carbon dioxide travels as bicarbonate, not in free solution, and mixing these two numbers is the classic error the slide's warning is meant to prevent. This would be the correct answer if bicarbonate and dissolved gas were the same pool, which they are not."
      },
      {
        "text": "2.8 mL, representing about 5% of total content",
        "explanation": "Correct. Multiplying the PCO2 of 40 mmHg by the solubility figure of 0.07 mL CO2 per 100 mL blood per mmHg gives 2.8 mL CO2 per 100 mL blood in free solution, and the lecture places that dissolved fraction at roughly 5% of total blood carbon dioxide. Note how much larger this is than the 0.3 mL of dissolved oxygen at PO2 100 mmHg, which is exactly the lecturer's point that carbon dioxide is far more soluble in water than oxygen. The remainder travels as bicarbonate, over 80%, and as carbaminohemoglobin."
      },
      {
        "text": "20.1 mL, representing about 30% of total blood carbon dioxide content",
        "explanation": "Incorrect. The value 20.1 mL per 100 mL is the oxygen-BINDING CAPACITY of hemoglobin, from 15 g/100 mL times 1.34 mL O2/g, and has nothing to do with carbon dioxide. This would be the correct answer if the question had asked for the maximum oxygen that hemoglobin can carry per 100 mL of blood."
      },
      {
        "text": "0.07 mL, representing about half of the total blood carbon dioxide content",
        "explanation": "Incorrect. 0.07 is the solubility COEFFICIENT in mL per 100 mL per mmHg, not a finished volume; it must still be multiplied by the partial pressure of 40 mmHg. The stated fraction is also far too high. This would be the correct answer if the PCO2 were 1 mmHg and dissolved gas dominated carriage."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: dissolved CO2 = 40 mmHg x 0.07 = 2.8 mL CO2/100 mL blood, about 5% of total CO2. Compare with 0.3 mL of dissolved O2 at PO2 100 mmHg - CO2 is far more soluble.",
    "pdfPage": 15,
    "pdfQuote": "2.8 mL CO2 /100 mL blood"
  }
];

window.Test_CV50 = Test_CV50;
