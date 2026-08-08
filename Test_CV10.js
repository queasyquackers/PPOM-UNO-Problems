const Test_CV10 = [
  {
    "id": 1,
    "category": "Physiology: Renal Glucose Handling",
    "questionText": "An investigator infuses a small tracer dose of glucose into a healthy volunteer and samples tubular fluid at successive points along a single nephron. The glucose concentration in Bowman's space is identical to that of plasma. By the end of the proximal tubule almost none remains in the lumen, and no glucose is recovered from the collecting duct. Which of the following statements best characterizes glucose handling along this nephron?",
    "options": [
      {
        "text": "Glucose is partially bound to plasma proteins, so only about half of it is filtered",
        "explanation": "Incorrect. Glucose circulates unbound in the plasma, which is precisely why its filtered load is 100 percent of the amount delivered to the glomerulus and why the concentration in Bowman's space equals the plasma concentration, exactly as observed in this experiment. Protein binding restricts filtration for other substances, but not for glucose. This would be the correct answer if the question concerned a highly protein-bound compound whose filterable fraction is limited by binding."
      },
      {
        "text": "Glucose is filtered and then reabsorbed in roughly equal fractions by every nephron segment",
        "explanation": "Incorrect. Glucose reabsorption is overwhelmingly a proximal tubule event; the thick ascending limb, distal tubule, collecting tubules, and collecting ducts together handle less than one percent. The experimental finding that essentially no glucose remains at the end of the proximal tubule rules out any meaningful distal contribution. This would be the correct answer if reabsorptive capacity were distributed evenly along the nephron, which is not how glucose transport is organized."
      },
      {
        "text": "Glucose is 100 percent filtered and more than 99 percent reabsorbed by the proximal tubule",
        "explanation": "Correct. Glucose is small and not protein bound, so it is completely filtered at the glomerulus and its concentration in Bowman's space matches plasma. The proximal tubule then reclaims more than 99 percent of that filtered load transcellularly, using apical sodium-glucose cotransporters backed by an enormous brush-border surface area. Segments beyond the proximal tubule contribute less than one percent of reabsorption, which is why a healthy person excretes no glucose at all and why glycosuria on a dipstick is such a meaningful finding."
      },
      {
        "text": "Only small amounts of glucose are filtered, and the remainder is secreted into the proximal lumen",
        "explanation": "Incorrect. Glucose is not a substrate for tubular secretion; the proximal tubule moves glucose in the reabsorptive direction, from lumen to blood. Secretion in the proximal tubule is reserved for organic anions and organic cations such as para-aminohippurate, creatinine, and many drugs. This would be the correct answer if the question described para-aminohippurate, which is both filtered and secreted so that more is removed than filtered."
      },
      {
        "text": "Glucose is completely filtered but is reabsorbed mainly by the thick ascending limb and collecting ducts",
        "explanation": "Incorrect. The first half of this statement is right but the location is wrong. The distal nephron has almost no capacity to reabsorb glucose, which is exactly why glucose that escapes a saturated proximal tubule is lost in the urine rather than rescued downstream. This would be the correct answer if the nephron distributed glucose transporters distally, but SGLT expression is essentially confined to the proximal tubule."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Glucose is 100 percent filtered and more than 99 percent reabsorbed in the proximal tubule; segments beyond the proximal tubule handle under 1 percent, so any glucose that escapes proximally is excreted.",
    "pdfPage": 5,
    "pdfQuote": "Completely reabsorbed in the PT"
  },
  {
    "id": 2,
    "category": "Physiology: Renal Glucose Handling",
    "questionText": "In isolated perfused proximal tubule segments, an investigator characterizes apical glucose uptake in the S1 segment. This transport step accounts for roughly 90 percent of total glucose reabsorption, saturates readily when luminal glucose is raised, and shows relatively low substrate affinity. Which transporter has these properties?",
    "options": [
      {
        "text": "SGLT2, the high-capacity, low-affinity apical cotransporter of the S1 segment",
        "explanation": "Correct. SGLT2 sits on the apical (luminal) membrane of the S1 segment of the proximal convoluted tubule and is responsible for approximately 90 percent of glucose reabsorption. Its high-capacity, low-affinity kinetics suit a segment where luminal glucose is still abundant: it grabs large quantities but saturates when the load climbs. It moves one sodium ion per glucose molecule, riding the inward sodium gradient generated by the basolateral sodium-potassium ATPase, and it is the molecular target of the SGLT2 inhibitor class."
      },
      {
        "text": "SGLT1, the low-capacity high-affinity apical cotransporter that moves two sodium ions per glucose molecule",
        "explanation": "Incorrect. SGLT1 is found in the proximal straight tubule (S3 segment), not S1, and its kinetic profile is the mirror image of what is described: high affinity and low capacity, suited to scavenging the small residual glucose load. Its 2:1 sodium-to-glucose stoichiometry lets it build a far larger gradient across the apical membrane. This would be the correct answer if the described segment were S3 and the transporter bound glucose tightly at low luminal concentrations."
      },
      {
        "text": "GLUT2, a basolateral facilitated diffusion channel for glucose",
        "explanation": "Incorrect. GLUT transporters are located exclusively on the basolateral membrane, are sodium independent, and move glucose by facilitated diffusion rather than cotransport. They handle the exit step into the interstitium, not apical uptake from the lumen. This would be the correct answer if the question asked how reabsorbed glucose leaves the proximal tubule cell to reach the peritubular blood."
      },
      {
        "text": "The sodium-potassium ATPase, which directly cotransports glucose along with sodium across the apical membrane",
        "explanation": "Incorrect. The sodium-potassium ATPase is a basolateral primary active transporter that moves sodium and potassium only; it never carries glucose. Its role in glucose reabsorption is indirect but essential, because it creates the inward sodium gradient that the apical SGLTs exploit. This would be the correct answer if the question asked which pump ultimately energizes proximal tubular glucose uptake."
      },
      {
        "text": "A proton-coupled apical cotransporter of the PepT family",
        "explanation": "Incorrect. PepT1 and PepT2 are apical proton-coupled cotransporters for short oligopeptides of two to five residues, not for free glucose. They belong to the peptide reabsorption pathway that operates alongside brush-border peptidases. This would be the correct answer if the substrate described were an intact dipeptide or tripeptide resistant to brush-border hydrolysis."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "SGLT2 (apical, S1 segment, high-capacity and low-affinity, 1 Na+ per glucose) performs about 90 percent of renal glucose reabsorption and is the target of the SGLT2 inhibitor class.",
    "pdfPage": 5,
    "pdfQuote": "Responsible for 90% of Glc reabsorption"
  },
  {
    "id": 3,
    "category": "Physiology: Renal Glucose Handling",
    "questionText": "Glucose that has been taken up across the apical membrane of a proximal tubule cell must still cross the basolateral membrane to reach the peritubular capillaries. Which of the following best describes this exit step?",
    "options": [
      {
        "text": "It is cotransported with two sodium ions moving down their electrochemical gradient",
        "explanation": "Incorrect. Sodium-coupled cotransport with a 2:1 stoichiometry describes SGLT1, which sits on the apical membrane of the S3 segment and moves glucose into the cell, not out of it. Coupling glucose exit to sodium entry at the basolateral membrane would also work against the sodium gradient the cell is trying to maintain. This would be the correct answer if the question asked about apical glucose uptake in the proximal straight tubule."
      },
      {
        "text": "It is exported by a primary active transporter that hydrolyzes one ATP molecule for each glucose molecule moved",
        "explanation": "Incorrect. No ATP-consuming glucose pump exists in the proximal tubule cell; the only primary active transporter relevant here is the sodium-potassium ATPase, which moves ions rather than sugar. Glucose leaves passively because the intracellular concentration built up by the SGLTs already exceeds the interstitial concentration. This would be the correct answer if the cell had to move glucose uphill against a steep interstitial gradient, which it does not."
      },
      {
        "text": "It exits through the same SGLT proteins that carried it in, operating in reverse",
        "explanation": "Incorrect. SGLTs are apical proteins and are not found on the basolateral membrane at all, so they cannot mediate exit into the interstitium. The lecturer stressed that the SGLT and GLUT families are distinct in family, membrane side, and mechanism. This would be the correct answer if a single transporter served both membranes, but the polarity of the proximal tubule cell is the whole point."
      },
      {
        "text": "It is packaged into transport vesicles and released by exocytosis at the basolateral surface",
        "explanation": "Incorrect. Vesicular traffic across the proximal tubule cell is the mechanism used for filtered proteins after receptor-mediated endocytosis, not for a small solute such as glucose. Glucose crosses membranes through integral membrane transport proteins. This would be the correct answer if the substance being handled were albumin or another filtered protein taken up at coated pits."
      },
      {
        "text": "It diffuses out through GLUT channels in a sodium-independent, facilitated manner",
        "explanation": "Correct. Glucose leaves the proximal tubule cell across the basolateral membrane through the GLUT family, specifically GLUT1 and GLUT2. These are channels rather than cotransporters: there is no coupled solute, they are sodium independent, and they move glucose by facilitated diffusion down the concentration gradient established by apical SGLT activity. They are found only on the basolateral side, and keeping them straight from the apical, sodium-coupled SGLTs was an explicit emphasis of the lecture."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "GLUT1 and GLUT2 are basolateral-only, sodium-independent facilitated diffusion channels; SGLT1 and SGLT2 are apical sodium-coupled cotransporters. Different family, different membrane, different mechanism.",
    "pdfPage": 5,
    "pdfQuote": "They are Na+-independent and move Glc via facilitated diffusion"
  },
  {
    "id": 4,
    "category": "Physiology: Glucose Titration Curve",
    "questionText": "A healthy volunteer receives a constant intravenous glucose infusion. When plasma glucose reaches 150 mg/dL, a urine specimen is collected and tests negative for glucose. Which of the following best explains the absence of glycosuria?",
    "options": [
      {
        "text": "Glucose is too large to be filtered at this plasma concentration",
        "explanation": "Incorrect. Glucose is a small, freely filtered molecule at every physiologic plasma concentration, and molecular size does not vary with concentration. Filtration is passive and non-saturable, so the filtered load simply rises linearly as plasma glucose rises. This would be the correct answer if the solute in question were a large plasma protein restricted by the glomerular filtration barrier."
      },
      {
        "text": "The filtered load remains below the renal threshold of 200 mg/dL, so all filtered glucose is reabsorbed",
        "explanation": "Correct. Glucose appears in the urine only once plasma glucose exceeds the renal threshold of approximately 200 mg/dL (11 mM). At 150 mg/dL the filtered load is still fully within the reabsorptive capacity of the proximal tubule SGLTs, so glucose clearance is zero. Because the threshold is roughly double the normal plasma glucose of 100 mg/dL, healthy individuals never spill glucose even after a meal, and even people with diabetes mellitus do not develop glycosuria until they cross that threshold."
      },
      {
        "text": "The transport maximum of 400 mg/min has already been exceeded, so reabsorption has plateaued",
        "explanation": "Incorrect. Exceeding the transport maximum would produce the opposite finding, since saturated transporters leave glucose in the lumen to be excreted. The plateau at roughly 400 mg/min is reached only at plasma concentrations far above 150 mg/dL. This would be the correct answer if the question asked why a patient with a plasma glucose of 500 mg/dL has heavy glycosuria."
      },
      {
        "text": "Segments distal to the proximal tubule reabsorb whatever glucose escapes the saturated proximal transporters",
        "explanation": "Incorrect. The distal nephron accounts for less than one percent of glucose reabsorption and cannot rescue an escaped load, which is exactly why glucose spills once the proximal tubule is overwhelmed. In this volunteer no glucose escaped in the first place. This would be the correct answer if the nephron had substantial reserve reabsorptive capacity beyond the proximal tubule, which it does not."
      },
      {
        "text": "Insulin secreted in response to the infusion drives filtered glucose back across the tubular epithelium into the blood",
        "explanation": "Incorrect. Insulin regulates plasma glucose through effects on peripheral tissues and the liver; it is not the mechanism of tubular glucose reabsorption, which is a sodium-coupled transport process independent of insulin. Renal recovery of glucose proceeds identically in insulin-deficient states until the threshold is crossed. This would be the correct answer if renal glucose transporters were insulin-dependent, which they are not."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The renal glucose threshold is 200 mg/dL (11 mM), roughly double the normal plasma glucose of 100 mg/dL. Below it, glucose clearance is zero; even diabetics do not spill glucose until they cross it.",
    "pdfPage": 7,
    "pdfQuote": "healthy people do not excrete any glucose in the urine"
  },
  {
    "id": 5,
    "category": "Physiology: Glucose Titration Curve",
    "questionText": "During a glucose infusion study, the filtered load of glucose continues to climb linearly as plasma glucose rises, but the measured rate of glucose reabsorption stops increasing and holds steady at approximately 400 mg/min. Which of the following best explains this plateau?",
    "options": [
      {
        "text": "Filtration itself has become saturated, so the filtered load can no longer increase",
        "explanation": "Incorrect. Glomerular filtration of a small, freely filtered solute is a passive, non-saturable process; the filtered load keeps rising linearly with plasma concentration, which is exactly what the study observed. The saturation is on the reabsorptive side. This would be the correct answer if filtration were carrier mediated, but it is bulk flow across a size and charge barrier."
      },
      {
        "text": "GLUT channels on the apical membrane have been downregulated by the high glucose load",
        "explanation": "Incorrect. GLUT channels are basolateral, not apical, and there is no described acute downregulation mechanism that produces the transport maximum. The plateau is a kinetic property of the apical sodium-coupled carriers, not a change in transporter number. This would be the correct answer if the question asked about basolateral glucose exit, and even then acute downregulation was not taught."
      },
      {
        "text": "The paracellular pathway for glucose has been closed by remodeling of the tight junctions",
        "explanation": "Incorrect. Glucose reabsorption in the proximal tubule is transcellular, not paracellular, so closing a paracellular route would not explain a plateau in reabsorption. Paracellular movement matters for urea in the proximal tubule and for urate, not for glucose. This would be the correct answer if the solute were urea, roughly half of which is reabsorbed paracellularly by solvent drag and diffusion across tight junctions."
      },
      {
        "text": "All apical SGLT transporters are occupied and cannot respond to further increases in filtered load",
        "explanation": "Correct. The plateau is the transport maximum, or Tm, which for glucose occurs at approximately 400 mg/min. It signifies that the apical SGLTs are fully saturated: there are no free transporters left, so the reabsorptive rate cannot rise even though the filtered load keeps climbing. Every additional glucose molecule that passes Bowman's capsule therefore remains in the tubular lumen and is excreted, and because the distal nephron has almost no glucose reabsorptive capacity, it is lost in the urine."
      },
      {
        "text": "Insulin-dependent recruitment of additional glucose transporters into the apical membrane has reached its ceiling",
        "explanation": "Incorrect. Proximal tubular glucose reabsorption is not insulin dependent, and no insulin-driven recruitment of apical SGLTs was described. The transport maximum reflects saturation of the transporters already present. This would be the correct answer if renal glucose transporters behaved like insulin-responsive GLUT4 in muscle and adipose tissue, which they do not."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "The glucose transport maximum (Tm) is about 400 mg/min and means the apical SGLTs are fully saturated. Beyond Tm, filtered glucose stays in the lumen because distal segments cannot reclaim it.",
    "pdfPage": 7,
    "pdfQuote": "Tm : SGLTs are fully saturated"
  },
  {
    "id": 6,
    "category": "Physiology: Glucose Titration Curve",
    "questionText": "On a glucose titration curve, the reabsorption line does not turn a sharp corner when it reaches the transport maximum. Instead it bends gradually over a range of plasma concentrations, a feature termed splay. Which of the following best accounts for splay?",
    "options": [
      {
        "text": "Nephrons differ anatomically and kinetically in filtered load and transporter density",
        "explanation": "Correct. Splay reflects the fact that nephrons are not identical. A nephron with a larger glomerulus receives a larger filtered load of glucose, and different nephrons carry different distributions and densities of SGLT2 and SGLT1 along the proximal tubule. As a result, an individual nephron's filtered load may be mismatched to its own reabsorptive capacity, so some nephrons saturate before others. Summing thousands of nephrons that saturate at slightly different plasma concentrations produces a gradual bend rather than a sharp inflection, and there is large person-to-person variability on top of that."
      },
      {
        "text": "Glucose reabsorption switches from carrier-mediated to paracellular transport near the threshold",
        "explanation": "Incorrect. There is no paracellular route for glucose reabsorption; the process is transcellular throughout, using apical SGLTs and basolateral GLUTs. No switch in transport mode occurs as the threshold is approached. This would be the correct answer if the solute were urea, which is genuinely reabsorbed paracellularly in the proximal tubule and transcellularly in the medullary collecting duct."
      },
      {
        "text": "Hepatic glucose output rises during the infusion and blunts the measured plasma concentration",
        "explanation": "Incorrect. During a controlled glucose infusion, hepatic output is suppressed rather than increased, and in any case splay is a property of the tubular reabsorption curve, not an artifact of plasma sampling. The infusion is delivered at a determinable rate precisely so the filtered load can be calculated. This would be the correct answer if splay were a measurement artifact of plasma glucose, but it is a real transport phenomenon."
      },
      {
        "text": "The assay used to measure urinary glucose loses accuracy at high sugar concentrations",
        "explanation": "Incorrect. Splay is a reproducible physiologic feature demonstrated across species and methods, not an analytic limitation. Assay error would not produce the specific, predictable curvature that occurs precisely as reabsorption approaches its maximum. This would be the correct answer if the question asked about sources of laboratory error rather than tubular physiology."
      },
      {
        "text": "Insulin released during the infusion progressively lowers the filtered load reaching a subset of nephrons",
        "explanation": "Incorrect. Insulin does not selectively alter the filtered load delivered to individual nephrons, and renal glucose transport is not insulin dependent. The heterogeneity that produces splay is anatomical and kinetic, present at baseline rather than hormonally induced. This would be the correct answer if a hormone redistributed single-nephron filtration during the study, which was not described."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Splay, the gradual approach of glucose reabsorption to Tm, reflects anatomical and kinetic heterogeneity among nephrons: differing glomerular size (filtered load) and differing SGLT1/SGLT2 densities.",
    "pdfPage": 7,
    "pdfQuote": "Reflects both anatomical and kinetic differences among nephrons"
  },
  {
    "id": 7,
    "category": "Physiology: Urea Production & BUN",
    "questionText": "A bodybuilder consuming a very high-protein diet has a blood urea nitrogen of 17 mg/dL with normal renal function. His physician explains that his urea production is at the upper end of normal because of his diet. Which of the following best describes the metabolic origin of the urea he is producing?",
    "options": [
      {
        "text": "Urea nitrogen derives from catabolism of the purine ring by xanthine oxidase",
        "explanation": "Incorrect. Xanthine oxidase converts adenosine and guanosine through xanthine to urate, the end product of purine catabolism, which is a different nitrogenous waste product handled by its own set of proximal tubular transporters. Urea comes from amino acid nitrogen, not purine rings. This would be the correct answer if the question asked about the origin of plasma urate, which normally runs 3 to 7 mg/dL."
      },
      {
        "text": "Urea is generated in the kidney from filtered creatinine and its precursor phosphocreatine",
        "explanation": "Incorrect. Creatinine is the breakdown product of phosphocreatine and is handled by the kidney as an organic cation and anion for secretion, not converted into urea. Urea synthesis is a hepatic process, not a renal one. This would be the correct answer if the question asked which endogenous compound is secreted by the organic base secretory system and used to estimate GFR."
      },
      {
        "text": "Urea is made in the liver from ammonium, the end product of amino acid catabolism",
        "explanation": "Correct. The hepatic urea cycle detoxifies roughly 95 percent of ammonium, which is the primary nitrogenous end product of amino acid catabolism. Ammonium combines with bicarbonate to form carbamoyl phosphate, which enters the cycle through ornithine to make citrulline; citrulline combines with aspartate to form argininosuccinate, which is split into arginine and fumarate, and arginine yields urea while regenerating ornithine. A high-protein diet increases amino acid turnover and therefore ammonium load, generating large amounts of urea that constitute a substantial osmotic load requiring excretion."
      },
      {
        "text": "Urea is a byproduct of fatty acid beta-oxidation released into the blood during periods of ketosis",
        "explanation": "Incorrect. Fatty acid oxidation produces ketone bodies such as acetoacetate and beta-hydroxybutyrate, which are organic acids handled by the organic acid secretory system, not urea. Urea synthesis specifically disposes of nitrogen, and fatty acids contain none. This would be the correct answer if the question described ketonuria appearing when the filtered load of ketone bodies exceeds their proximal tubular transport maximum."
      },
      {
        "text": "Urea is synthesized in skeletal muscle from glutamine and released into the circulation during exercise",
        "explanation": "Incorrect. Glutamine and glutamate participate in ammonium transfer reactions with alpha-ketoglutarate as part of amino acid balance, but the urea cycle itself is hepatic. Muscle does not run the urea cycle. This would be the correct answer if the question asked how ammonium is shuttled between tissues, where glutamine genuinely plays a central role."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "The hepatic urea cycle detoxifies about 95 percent of ammonium, the primary nitrogenous end product of amino acid catabolism. High-protein diets generate large urea loads that must be excreted as an osmotic burden.",
    "pdfPage": 8,
    "pdfQuote": "the primary nitrogenous end product of"
  },
  {
    "id": 8,
    "category": "Physiology: Urea Transport",
    "questionText": "Micropuncture of the proximal tubule shows that luminal urea concentration equals plasma urea in the earliest segment, then rises progressively as water is reabsorbed. Roughly half of the filtered urea is reclaimed along this segment without ever crossing a cell membrane. Which mechanism accounts for this reabsorption?",
    "options": [
      {
        "text": "Active transport by an ATP-dependent urea pump on the basolateral membrane",
        "explanation": "Incorrect. No ATP-consuming urea pump was described anywhere in the nephron; urea transport is passive throughout, driven by concentration gradients and by water movement. Even the transcellular steps in the thin limbs and collecting duct use facilitated diffusion. This would be the correct answer if urea moved uphill against its gradient, which the rising luminal concentration shows it does not."
      },
      {
        "text": "Sodium-coupled cotransport across the apical membrane driven by the sodium-potassium ATPase gradient",
        "explanation": "Incorrect. Sodium-coupled apical cotransport describes glucose, amino acids, and carboxylates, not urea. The stem also specifies that the reabsorbed urea never crosses a cell membrane, which excludes any transcellular carrier. This would be the correct answer if the solute were glucose entering on SGLT2 or an amino acid entering on a sodium-driven SLC transporter."
      },
      {
        "text": "Facilitated diffusion through apical UT-A1 followed by basolateral UT-A3 in the same cell",
        "explanation": "Incorrect. UT-A1 and UT-A3 mediate transcellular urea reabsorption, but in the medullary collecting duct, not the proximal tubule. The stem explicitly describes reabsorption that bypasses the cell entirely. This would be the correct answer if the segment described were the medullary collecting duct, where roughly half of the remaining luminal urea is reclaimed transcellularly."
      },
      {
        "text": "Receptor-mediated endocytosis of urea together with filtered low molecular weight proteins",
        "explanation": "Incorrect. Receptor-mediated endocytosis at clathrin-coated pits is the mechanism for reclaiming filtered albumin and other proteins, an energy- and microtubule-dependent process. A 60-dalton solute like urea has no need for vesicular uptake. This would be the correct answer if the question concerned recovery of filtered albumin, of which 96 to 99 percent is reabsorbed by this route."
      },
      {
        "text": "Paracellular solvent drag and diffusion across the tight junctions",
        "explanation": "Correct. In the proximal tubule roughly 50 percent of the filtered urea load is reabsorbed paracellularly, meaning around the cells rather than through them. Two forces operate: solvent drag, in which urea piggybacks on reabsorbed water, and simple diffusion across the tight junctions down the urea concentration gradient. That gradient is created by water reabsorption itself, which concentrates urea in the lumen above the plasma value. This is why the greater the fluid reabsorption along the proximal tubule, the greater the urea reabsorption."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "About 50 percent of filtered urea is reabsorbed PARACELLULARLY in the proximal tubule by solvent drag plus diffusion across tight junctions. Water reabsorption creates the luminal urea gradient that drives it.",
    "pdfPage": 10,
    "pdfQuote": "Reabsorption occurs by solvent drag"
  },
  {
    "id": 9,
    "category": "Physiology: Urea Transport",
    "questionText": "In the thin descending and ascending limbs of the loop of Henle, an amount of urea equal to that reabsorbed in the proximal tubule appears in the lumen, restoring luminal urea content to its original value. This movement is transcellular and demonstrates saturation kinetics. Which mechanism is responsible?",
    "options": [
      {
        "text": "Paracellular back-leak of urea through unusually leaky tight junctions of the thin limbs",
        "explanation": "Incorrect. The stem specifies transcellular movement with saturation kinetics, which is the signature of a carrier protein rather than a paracellular route. Paracellular urea movement is a feature of the proximal tubule, where it accounts for reabsorption rather than secretion. This would be the correct answer if the described segment were the proximal tubule and the movement were reabsorptive."
      },
      {
        "text": "Facilitated diffusion through urea transporters of the SLC14 family",
        "explanation": "Correct. Urea secretion into the thin limbs occurs by facilitated diffusion through urea transporters, which belong to the SLC14 family of solute carriers. The UT-A2 isoform mediates this movement, and the lecturer noted that one leg of the route remains uncharacterized. We know these are true carriers because they exhibit saturation kinetics and other hallmarks of carrier-mediated transport, exactly as the glucose transporters do. The functional consequence is that the loop restores luminal urea content so that the medullary collecting duct has urea available for the final reabsorptive step."
      },
      {
        "text": "Primary active secretion by an ATP-consuming urea pump located on the apical membrane",
        "explanation": "Incorrect. Urea movement is passive at every point in the nephron; no ATP-dependent urea pump exists. Saturation kinetics indicate a carrier, but carriers can be entirely passive, as facilitated diffusion transporters are. This would be the correct answer if the transporter required ATP hydrolysis, as the ABC transporters MRP4 and BCRP do for urate secretion."
      },
      {
        "text": "Solvent drag carrying urea into the lumen along with water secreted into the thin limbs",
        "explanation": "Incorrect. Solvent drag operates in the proximal tubule during water reabsorption and carries urea out of the lumen, not into it. The thin limbs do not secrete water into the lumen in a way that could drag urea inward, and the stem describes transcellular transport. This would be the correct answer if the segment were the proximal tubule, where solvent drag genuinely contributes to urea reabsorption."
      },
      {
        "text": "Endocytic delivery of urea-containing vesicles to the luminal membrane of thin limb cells",
        "explanation": "Incorrect. Vesicular transport is used for filtered proteins in the proximal tubule, and even there the direction is uptake followed by lysosomal digestion. A small polar solute crosses through membrane carriers. This would be the correct answer if the substance were a filtered polypeptide hormone or a low molecular weight protein handled by the endocytic pathway."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Urea is SECRETED transcellularly into the thin limbs of Henle via UT transporters of the SLC14 family, restoring luminal urea to its original value. Saturation kinetics prove carrier-mediated transport.",
    "pdfPage": 10,
    "pdfQuote": "Secretion is via facilitated diffusion using urea transporters"
  },
  {
    "id": 10,
    "category": "Physiology: Urea Transport",
    "questionText": "A physiology examination asks students to describe the final step of urea handling in the medullary collecting duct and the net fate of the filtered urea load in a person with normal urine flow and hydration status. Which statement is correct?",
    "options": [
      {
        "text": "Urea is secreted in the medullary collecting duct, so urinary urea exceeds the filtered load",
        "explanation": "Incorrect. The medullary collecting duct is a site of urea reabsorption, not secretion; secretion occurs upstream in the thin limbs of Henle. Because the tubules reabsorb more urea than they secrete, the amount excreted is always less than the amount filtered. This would be the correct answer if the solute were para-aminohippurate or an organic cation, for which secretion makes urinary delivery exceed the filtered load."
      },
      {
        "text": "Urea crosses the medullary collecting duct paracellularly by solvent drag, as it does in the proximal tubule",
        "explanation": "Incorrect. Collecting duct urea reabsorption is explicitly transcellular, using dedicated urea transporters, in contrast to the paracellular proximal mechanism. Mixing the two routes is a common error. This would be the correct answer if the segment in question were the proximal tubule, where solvent drag and tight junction diffusion genuinely operate."
      },
      {
        "text": "Essentially all remaining luminal urea is reabsorbed here, leaving the urine virtually free of urea",
        "explanation": "Incorrect. Only about half of the remaining luminal urea is reabsorbed, and urea in fact constitutes roughly half of the total solute content of urine. Complete reabsorption would defeat the purpose of nitrogen excretion. This would be the correct answer if the solute were glucose or bicarbonate, both of which are essentially completely reclaimed."
      },
      {
        "text": "Roughly half is reabsorbed transcellularly, so about 50 percent of the filtered load is excreted",
        "explanation": "Correct. In the medullary collecting duct approximately 50 percent of the luminal urea is reabsorbed by a transcellular route, entering the cell through UT-A1 on the luminal side and exiting through UT-A3 on the basolateral side. Because movement is luminal to basolateral, it is by definition reabsorption. Adding this to the proximal reabsorption and the offsetting secretion in the thin limbs yields the net result: about 50 percent of the filtered load of urea is ultimately excreted, assuming normal urine flow and hydration status."
      },
      {
        "text": "Urea reabsorption here is driven by an ATP-dependent pump and is therefore insensitive to the urine flow rate",
        "explanation": "Incorrect. Urea transport is passive throughout the nephron and is exquisitely flow sensitive: fractional excretion ranges from about 15 percent at low urine flow to as much as 70 percent at high flow. There is no ATP-dependent urea pump. This would be the correct answer if urea handling were flow independent, which is the opposite of what determines BUN clinically."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Medullary collecting duct urea reabsorption is transcellular via UT-A1 (apical) and UT-A3 (basolateral). Net result at normal flow and hydration: about 50 percent of the filtered urea load is excreted.",
    "pdfPage": 10,
    "pdfQuote": "Net result: 50% of FL of urea is ultimately excreted"
  },
  {
    "id": 11,
    "category": "Physiology: Urea Transport",
    "questionText": "Two research subjects are studied on the same day. Subject A is water loaded and produces a high urine flow; subject B has been fluid restricted and produces a low urine flow. Fractional excretion of urea is approximately 70 percent in subject A and 15 percent in subject B. Which of the following best explains this difference?",
    "options": [
      {
        "text": "Urea transporters are directly inhibited by antidiuretic hormone whenever urine flow is high",
        "explanation": "Incorrect. High urine flow is associated with low, not high, antidiuretic hormone activity, so the premise is inverted. More importantly, the flow dependence of urea excretion is explained by water reabsorption and the resulting luminal urea gradient, not by direct hormonal inhibition of the transporters. This would be the correct answer if urea transporters were shown to be shut off by a hormone at high flow, which was not taught."
      },
      {
        "text": "Filtration of urea is flow dependent, so a larger filtered load is generated when urine flow is high",
        "explanation": "Incorrect. Urea is freely filtered, and the filtered load depends on plasma urea concentration and GFR, not on downstream tubular flow. Water loading does not meaningfully increase the filtered urea load. This would be the correct answer if the difference in excretion arose upstream at the glomerulus rather than from tubular handling."
      },
      {
        "text": "Urea secretion in the proximal tubule is directly stimulated by an increase in tubular flow velocity",
        "explanation": "Incorrect. The proximal tubule reabsorbs urea rather than secreting it; secretion occurs in the thin limbs of Henle. There is also no described flow-velocity sensor that stimulates urea secretion. This would be the correct answer if the segment described were the thin descending and ascending limbs and the mechanism were carrier-mediated secretion via urea transporters."
      },
      {
        "text": "High urine flow raises the plasma urea concentration and therefore increases the filtered load of urea",
        "explanation": "Incorrect. High urine flow lowers rather than raises plasma urea, because more urea is being cleared; this is precisely why intravenous hydration is used to bring down an elevated BUN. The causal arrow in this option points the wrong way. This would be the correct answer if urea excretion were driven by rising plasma concentration rather than by tubular water handling."
      },
      {
        "text": "At high flow less water is reabsorbed, so less urea follows it and more is excreted",
        "explanation": "Correct. Urea reabsorption is coupled to water reabsorption both through solvent drag and through the concentration gradient that water removal creates in the lumen. At low urine flow the tubule reabsorbs more water, luminal urea concentration climbs, more urea diffuses back into the blood, and the kidneys excrete as little as 15 percent of the filtered load. At high urine flow the opposite occurs and as much as 70 percent may be excreted. This is the physiologic basis for the clinical observation that dehydration and low GFR raise the BUN while intravenous hydration lowers it."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Urea excretion tracks urine flow: about 15 percent of the filtered load at low flow versus up to 70 percent at high flow. This is why dehydration raises BUN and IV hydration lowers it.",
    "pdfPage": 9,
    "pdfQuote": "urea excretion rises with increasing urinary flow"
  },
  {
    "id": 12,
    "category": "Physiology: Amino Acid Transport",
    "questionText": "The proximal tubule reabsorbs more than 98 percent of filtered amino acids using a wide variety of solute carrier proteins that show little substrate specificity and overlap considerably. Which feature is shared by essentially all of the apical transport steps involved?",
    "options": [
      {
        "text": "They are ATP-hydrolyzing primary active transporters, each specific for a single amino acid",
        "explanation": "Incorrect. The apical amino acid carriers are secondary active transporters and exchangers, not ATP hydrolyzing pumps, and the lecture stressed that solute carrier proteins lack substrate specificity. The only primary active transporter in the picture is the basolateral sodium-potassium ATPase. This would be the correct answer if the question asked which single protein consumes ATP to energize proximal tubule transport."
      },
      {
        "text": "They depend on the sodium or proton gradient across the apical membrane",
        "explanation": "Correct. Amino acids enter proximal tubule cells across the luminal membrane on sodium-driven or proton-driven transporters, or on amino acid exchangers coupled to those gradients. Those gradients trace back to the basolateral sodium-potassium ATPase, which keeps intracellular sodium low and extracellular sodium high. The lecturer explicitly said that memorizing individual carriers matters far less than recognizing that the sodium gradient drives almost everything in this segment; the notable exceptions are the channels for phenylalanine, tryptophan, and tyrosine."
      },
      {
        "text": "They operate only in the S1 segment, where luminal amino acid concentration is lowest",
        "explanation": "Incorrect. Two errors are packed into this option: transporters operate along the whole proximal tubule, and luminal amino acid concentration is highest early and lowest late. Sodium-dependent uptake actually predominates in the late proximal tubule (S3), where luminal availability has fallen. This would be the correct answer if the statement had placed the high-affinity, sodium-dependent uptake step in S3 rather than S1."
      },
      {
        "text": "They move amino acids out of the cell toward the interstitium against a concentration gradient",
        "explanation": "Incorrect. Apical transporters move amino acids from the lumen into the cell; exit toward the interstitium occurs at the basolateral membrane through exchangers and channels. Describing an apical step as basolateral efflux reverses the polarity of the cell. This would be the correct answer if the question asked about basolateral amino acid exit, some of which is indeed sodium dependent."
      },
      {
        "text": "They are voltage-gated channels that open in response to depolarization of the luminal membrane",
        "explanation": "Incorrect. Amino acid reabsorption uses carrier proteins of the solute carrier family, not voltage-gated channels, and there is no depolarization-triggered gating step in this pathway. The one voltage-driven transporter mentioned in the lecture was URATv1 for urate, and it is basolateral. This would be the correct answer if the substrate were urate exiting the cell on the voltage-driven URATv1 transporter."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Apical amino acid uptake in the proximal tubule runs on the sodium (or proton) gradient created by the basolateral Na+/K+-ATPase. Exceptions: the channels for phenylalanine, tryptophan, and tyrosine.",
    "pdfPage": 11,
    "pdfQuote": "AA enters the cell via Na+- or H+-driven transporters"
  },
  {
    "id": 13,
    "category": "Physiology: Oligopeptide Transport",
    "questionText": "A filtered tripeptide reaches the proximal tubule and is hydrolyzed at the outer surface of the brush-border membrane. Its constituent amino acids are then detected free in the tubular lumen before they are recovered by the tubule cell. Which pathway does this describe?",
    "options": [
      {
        "text": "Brush-border peptidases hydrolyze it, and the released amino acids enter on amino acid transporters",
        "explanation": "Correct. Several peptidases sit on the outer surface of the brush-border membrane of proximal tubule cells, much like those of the gastrointestinal tract, including gamma-glutamyltransferase, aminopeptidases, endopeptidases, and dipeptidases. They hydrolyze filtered oligopeptides and release free amino acids into the tubule lumen. Those amino acids then simply join the sodium-coupled amino acid transport pathway to enter the cell and exit basolaterally. The enormous surface area of the brush border, packed with these enzymes facing the urine, is what makes this route so efficient."
      },
      {
        "text": "It is taken up intact by the apical proton-coupled cotransporter PepT1 and later hydrolyzed by cytosolic peptidases",
        "explanation": "Incorrect. This describes the alternative route, used by peptides of two to five residues that resist brush-border enzymes, but the stem specifies hydrolysis at the outer surface of the membrane with free amino acids appearing in the lumen. Both routes converge on free amino acids, but at different locations. This would be the correct answer if the peptide had entered the cell intact before being broken down."
      },
      {
        "text": "It is internalized by receptor-mediated endocytosis and digested within the lysosomes of the tubule cell",
        "explanation": "Incorrect. Receptor-mediated endocytosis with lysosomal digestion is the mechanism for filtered proteins such as albumin and low molecular weight proteins, not for short oligopeptides. Oligopeptides are handled by peptidases and peptide cotransporters. This would be the correct answer if the filtered substance had been albumin or an immunoglobulin light chain."
      },
      {
        "text": "It crosses the tight junctions paracellularly by solvent drag along with reabsorbed water",
        "explanation": "Incorrect. Paracellular solvent drag is the proximal tubular mechanism for urea, not for peptides, and the stem describes enzymatic hydrolysis at the membrane surface rather than bulk passage between cells. Oligopeptide reabsorption is a transcellular, enzyme-dependent process. This would be the correct answer if the solute were urea, roughly half of which is reabsorbed by exactly this paracellular route."
      },
      {
        "text": "It is secreted into the lumen by the organic base secretory system of the proximal straight tubule",
        "explanation": "Incorrect. The organic base secretory system moves organic cations such as creatinine, monoamines, morphine, and the potassium-sparing diuretics from blood into the lumen; it is a secretory pathway, whereas the stem describes recovery of a filtered peptide. Direction and substrate class are both wrong. This would be the correct answer if the compound were amiloride or triamterene needing to reach its luminal target."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Route one for oligopeptides: brush-border peptidases (aminopeptidases, endo- and dipeptidases, gamma-glutamyltransferase) hydrolyze them in the lumen, and the freed amino acids enter on sodium-coupled amino acid transporters.",
    "pdfPage": 12,
    "pdfQuote": "Several peptidases are present at the outer surface of the brush-border"
  },
  {
    "id": 14,
    "category": "Physiology: Oligopeptide Transport",
    "questionText": "A transporter in the S3 segment of the proximal straight tubule binds filtered dipeptides tightly at very low luminal concentrations but is easily saturated when the peptide load is raised. Which transporter best matches this profile?",
    "options": [
      {
        "text": "PepT1, the low-affinity high-capacity peptide transporter of the S1 and S2 segments",
        "explanation": "Incorrect. PepT1 has exactly the opposite kinetic profile and a different location: it sits in the proximal convoluted tubule, where luminal peptide concentration is still high, and it handles a broad range of substrates in bulk. Low affinity means it does not bind tightly at low concentrations. This would be the correct answer if the transporter described were in S1 or S2 and characterized by high capacity."
      },
      {
        "text": "SGLT1, the high-affinity low-capacity sodium-glucose cotransporter of the S3 segment",
        "explanation": "Incorrect. SGLT1 does have high-affinity, low-capacity kinetics in the S3 segment, which makes it a tempting parallel, but its substrate is glucose and it is sodium coupled, not a peptide carrier. The stem specifies dipeptides. This would be the correct answer if the substrate were glucose being scavenged in the proximal straight tubule with a 2:1 sodium stoichiometry."
      },
      {
        "text": "PepT2, the high-affinity low-capacity peptide cotransporter",
        "explanation": "Correct. PepT2 is the apical proton-coupled oligopeptide cotransporter of the proximal straight tubule (S3 segment). Its high-affinity, low-capacity kinetics fit its position at the end of the reabsorptive sequence, where so little peptide remains that a transporter must bind tightly to capture it. This mirrors the general design principle of the proximal tubule: early transporters such as SGLT2 and PepT1 are high-capacity and low-affinity for bulk recovery, while late transporters such as SGLT1 and PepT2 are high-affinity and low-capacity for scavenging."
      },
      {
        "text": "URAT1, the apical urate exchanger responsible for most urate reabsorption in the proximal tubule",
        "explanation": "Incorrect. URAT1 is an apical transporter of the proximal tubule, but its substrate is urate, the end product of purine catabolism, not peptides. It participates in the transcellular reabsorption of urate along with OAT4 and OAT10. This would be the correct answer if the question described apical reabsorption of a monovalent anion generated by xanthine oxidase."
      },
      {
        "text": "OCT2, the polyspecific basolateral organic cation transporter of the proximal straight tubule",
        "explanation": "Incorrect. OCT2 is located on the basolateral membrane and carries organic cations into the cell as the first step of organic base secretion, driven by the inside-negative membrane potential. Its substrates are cations such as creatinine and morphine, not dipeptides. This would be the correct answer if the question asked how amiloride or triamterene enters the tubule cell from the blood."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "PepT1 is low-affinity and high-capacity in the PCT (S1-S2); PepT2 is high-affinity and low-capacity in the PST (S3). Same early-bulk, late-scavenger design as SGLT2 versus SGLT1.",
    "pdfPage": 12,
    "pdfQuote": "PepT2: High-affinity, low-capacity transporter"
  },
  {
    "id": 15,
    "category": "Physiology: Protein Reabsorption",
    "questionText": "Although the glomerular filtration barrier restricts protein, the restriction is incomplete and filtrate albumin is roughly 0.01 to 0.05 percent of the plasma concentration. The proximal tubule nonetheless recovers 96 to 99 percent of this filtered albumin. Which mechanism accomplishes this recovery?",
    "options": [
      {
        "text": "Albumin crosses the apical membrane on a sodium-coupled cotransporter of the solute carrier family",
        "explanation": "Incorrect. Sodium-coupled solute carriers handle small solutes such as glucose, amino acids, and carboxylates; a molecule the size of albumin cannot traverse a carrier protein. Protein recovery uses a completely different, vesicular mechanism. This would be the correct answer if the filtered substance were an amino acid entering on a sodium-driven transporter."
      },
      {
        "text": "Albumin diffuses through the paracellular pathway together with reabsorbed water and urea",
        "explanation": "Incorrect. Tight junctions restrict paracellular passage to small solutes; urea moves this way in the proximal tubule, but albumin is far too large. The stem also emphasizes an active recovery process rather than passive bulk flow. This would be the correct answer if the solute described were urea, roughly half of which is reabsorbed paracellularly by solvent drag and diffusion."
      },
      {
        "text": "Albumin is degraded by brush-border peptidases and its amino acids are reabsorbed from the lumen",
        "explanation": "Incorrect. Brush-border peptidases act on short oligopeptides, not on intact large proteins such as albumin. Albumin is digested only after internalization, inside lysosomes, not on the luminal surface. This would be the correct answer if the filtered substance were a small oligopeptide susceptible to hydrolysis at the brush-border membrane."
      },
      {
        "text": "Albumin binds apical receptors in coated pits, is internalized, and is then digested in lysosomes",
        "explanation": "Correct. The proximal tubule uses receptor-mediated endocytosis to reclaim filtered proteins and polypeptides. Filtered protein first binds a receptor complex at the apical membrane in specialized regions called coated pits, most commonly clathrin-coated pits. The pit invaginates to form a coated endocytic vesicle, which fuses with an endosome and is delivered to lysosomes where proteases digest the contents. The resulting low molecular weight products are then released across the basolateral membrane into the peritubular circulation, and hardly any intact protein is reabsorbed."
      },
      {
        "text": "Albumin is carried intact across the cell in vesicles and released unchanged into the peritubular blood, which accounts for nearly all of its recovery",
        "explanation": "Incorrect. Transcytosis of intact protein does occur, but only for a small subset that avoids the lysosomes; it is not the dominant pathway. The lecture emphasized that there is hardly any reabsorption of intact protein, because the standard route ends in lysosomal digestion. This would be the correct answer if the question asked about the minority pathway by which a few proteins bypass lysosomal degradation."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Filtered protein is recovered by receptor-mediated endocytosis: apical receptor binding at clathrin-coated pits, internalization, endosome fusion, lysosomal digestion, then basolateral release of amino acids. Hardly any intact protein is reabsorbed.",
    "pdfPage": 13,
    "pdfQuote": "PT use receptor-mediated endocytosis to reabsorb proteins"
  },
  {
    "id": 16,
    "category": "Pharmacology: SGLT2 Inhibitors",
    "questionText": "A 63-year-old man with type 2 diabetes mellitus and chronic heart failure with reduced ejection fraction is started on a new once-daily oral agent. Six weeks later his exertional dyspnea has improved and he has lost 2 kg. His serum creatinine and electrolytes are unchanged, plasma glucose is 132 mg/dL, and hemoglobin A1c has fallen modestly. A routine urine dipstick now shows 3+ glucose. He has no symptoms of urinary tract infection. Which mechanism best explains the new dipstick finding?",
    "options": [
      {
        "text": "Inhibition of the basolateral GLUT2 channel, trapping reabsorbed glucose inside proximal tubule cells",
        "explanation": "Incorrect. Blocking basolateral exit would raise intracellular glucose and secondarily impair apical uptake, but this is not the mechanism of any drug taught in this lecture, and the class described was defined by its action on the apical cotransporter. The lecture specifically identified SGLT2, not GLUT2, as the drug target. This would be the correct answer if a therapeutic agent targeting the facilitated diffusion exit step existed in clinical use."
      },
      {
        "text": "Inhibition of the apical sodium-glucose cotransporter in the S1 segment",
        "explanation": "Correct. SGLT2 in the S1 segment of the proximal convoluted tubule is the apical transporter responsible for roughly 90 percent of glucose reabsorption. Blocking it means a large fraction of the filtered glucose load can no longer be reclaimed, and because segments beyond the proximal tubule handle less than one percent, that glucose is excreted, producing glycosuria at a plasma glucose well below the usual 200 mg/dL threshold. The drugs are therefore nicknamed glucuretics. They were developed for type 2 diabetes and were subsequently found to be remarkably efficacious in congestive heart failure, and the cardiac benefit appears to be independent of the glucose-excretion effect."
      },
      {
        "text": "Blockade of the sodium-potassium ATPase, collapsing the gradient that powers all proximal transport",
        "explanation": "Incorrect. Poisoning the sodium-potassium ATPase would produce a generalized proximal transport failure with aminoaciduria, phosphaturia, and bicarbonate loss, not isolated glycosuria in an otherwise stable patient with normal electrolytes. The pump is the energy source for many carriers, so its inhibition is never selective. This would be the correct answer if the patient had a global proximal tubulopathy from a metabolic inhibitor rather than an isolated finding."
      },
      {
        "text": "Inhibition of the organic anion transporters that normally secrete glucose into the tubular lumen",
        "explanation": "Incorrect. Glucose is not a substrate for the organic anion secretory system, which handles carboxylates, urate, para-aminohippurate, and many drugs. Glucose is reabsorbed rather than secreted, so inhibiting a secretory pathway could not create glycosuria. This would be the correct answer if the compound appearing in the urine were an organic anion such as penicillin G whose secretion was being modulated."
      },
      {
        "text": "Increased glomerular filtration of glucose caused by afferent arteriolar dilation and a higher filtration fraction",
        "explanation": "Incorrect. Glucose is already 100 percent filtered, so no hemodynamic change can increase its filtered fraction; only the absolute load changes with GFR, and this patient's creatinine is unchanged. Glycosuria therefore reflects a reabsorptive defect, not a filtration change. This would be the correct answer if the tested substance were normally restricted at the filtration barrier, such as albumin."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "SGLT2 inhibitors (glucuretics) block apical S1 glucose reabsorption, causing glycosuria at normal plasma glucose. Developed for type 2 diabetes, they are also remarkably effective in heart failure by a mechanism that appears independent of glucose excretion.",
    "pdfPage": 5,
    "pdfQuote": "SGLT2 inhibitors are novel"
  },
  {
    "id": 17,
    "category": "Physiology: Glucose Titration Curve",
    "questionText": "A 19-year-old college student with poorly controlled type 1 diabetes mellitus presents with two weeks of increasing thirst and urinary frequency. She reports missing several insulin doses. Temperature is 37.0 C, blood pressure 108/64 mmHg, and pulse 104/min. Mucous membranes are dry. Plasma glucose is 420 mg/dL and serum creatinine is normal. Urinalysis shows 4+ glucose with no cells or casts and a normal urine protein-to-creatinine ratio. Which of the following best explains the appearance of glucose in her urine?",
    "options": [
      {
        "text": "The glomerular filtration barrier has been damaged, allowing glucose to be filtered for the first time",
        "explanation": "Incorrect. Glucose is small and unbound and is always 100 percent filtered, even in a completely healthy kidney, so no barrier damage is required for it to enter the tubular fluid. Her urinalysis is also bland with a normal protein-to-creatinine ratio, arguing against any filtration barrier injury. This would be the correct answer if the abnormal urinary constituent were albumin or another normally restricted macromolecule."
      },
      {
        "text": "Insulin deficiency directly inhibits SGLT2 in the proximal tubule",
        "explanation": "Incorrect. Renal glucose reabsorption is not insulin dependent; the SGLTs run on the sodium gradient and function normally in insulin-deficient states. Her glycosuria reflects an excessive filtered load rather than a transporter defect. This would be the correct answer if proximal tubular glucose transporters behaved like insulin-responsive GLUT4 in muscle, which they do not."
      },
      {
        "text": "Glucose is being secreted into the tubular lumen by the organic anion secretory system",
        "explanation": "Incorrect. The organic anion system secretes carboxylates, urate, para-aminohippurate, and numerous drugs, but glucose is neither an organic anion nor a secreted substance. Glucose reaches the lumen only by filtration. This would be the correct answer if the compound in the urine were an organic acid such as a ketone body or a secreted drug."
      },
      {
        "text": "Reabsorptive capacity is intact but the distal nephron has lost its normal glucose reabsorbing ability",
        "explanation": "Incorrect. The distal nephron never had meaningful glucose reabsorbing ability to lose; it accounts for less than one percent of glucose reabsorption even in health. Losing that trivial capacity could not produce 4+ glycosuria. This would be the correct answer if the nephron's glucose recovery were distributed distally, but it is essentially all proximal."
      },
      {
        "text": "Filtered load exceeds the transport maximum, so unreabsorbed glucose remains in the lumen",
        "explanation": "Correct. At a plasma glucose of 420 mg/dL she is far above the renal threshold of 200 mg/dL, and the filtered load has driven reabsorption onto the transport maximum plateau of roughly 400 mg/min. Once the apical SGLTs are fully saturated they cannot respond to further increases in filtered load, so every additional glucose molecule that passes Bowman's capsule stays in the tubular lumen. Because segments beyond the proximal tubule reabsorb almost no glucose, it is excreted. The retained luminal glucose acts as an osmotic diuretic, which explains her polyuria, thirst, tachycardia, and dry mucous membranes."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Glycosuria in diabetes is a filtered-load problem, not a transporter defect: once plasma glucose passes 200 mg/dL and Tm is reached, unreabsorbed luminal glucose is excreted and acts as an osmotic diuretic.",
    "pdfPage": 7,
    "pdfQuote": "Glc appears in the urine (glucosuria)"
  },
  {
    "id": 18,
    "category": "Physiology: Urea & BUN Interpretation",
    "questionText": "A 78-year-old woman is brought to the emergency department after three days of vomiting and diarrhea. She has taken little by mouth. Temperature is 37.2 C, blood pressure 96/58 mmHg, pulse 112/min, and respirations 18/min. Mucous membranes are dry and skin turgor is reduced. Urine output over the past 24 hours was 300 mL. Laboratory studies show a blood urea nitrogen of 42 mg/dL (normal 7 to 18) with only a mild rise in serum creatinine. Which mechanism best explains the disproportionate elevation of her blood urea nitrogen?",
    "options": [
      {
        "text": "Low urine flow enhances water and urea reabsorption, so less filtered urea is excreted",
        "explanation": "Correct. Urea reabsorption is coupled to water reabsorption both by solvent drag and by the luminal concentration gradient that water removal creates. With volume depletion and a urine output of only 300 mL per day, the tubules reabsorb far more water, luminal urea concentration climbs, and back-diffusion increases, so fractional urea excretion falls toward 15 percent rather than the usual 50 percent. Because creatinine handling is not flow dependent in the same way, the BUN rises out of proportion to the creatinine. The therapeutic implication is direct: restore volume, raise urine flow, and the BUN will fall."
      },
      {
        "text": "Reduced hepatic urea cycle activity increases circulating ammonium that is then measured as urea nitrogen",
        "explanation": "Incorrect. The blood urea nitrogen assay measures urea, not ammonium, and reduced urea cycle activity would lower urea production rather than raise the BUN. Her liver is not implicated by the history. This would be the correct answer if the question concerned hyperammonemia from impaired hepatic nitrogen disposal, which is a different clinical entity with a different laboratory signature."
      },
      {
        "text": "Urea secretion in the thin limbs of Henle is upregulated during volume depletion and adds to the plasma urea",
        "explanation": "Incorrect. Secretion in the thin limbs moves urea from blood into the lumen, which would tend to increase excretion rather than raise plasma urea, and it is a fixed passive process that restores luminal urea rather than a regulated response to volume status. The elevation here is driven by enhanced reabsorption. This would be the correct answer if the question asked which segment secretes urea via UT-A2 to restore luminal urea content."
      },
      {
        "text": "Urea transporters in the medullary collecting duct are inhibited whenever antidiuretic hormone levels rise",
        "explanation": "Incorrect. Volume depletion increases antidiuretic hormone activity and thereby increases, not decreases, urea reabsorption in the medullary collecting duct. Inhibiting collecting duct urea reabsorption would lower the BUN, the opposite of the observed finding. This would be the correct answer if the direction of the effect were reversed, which contradicts the flow dependence of urea handling."
      },
      {
        "text": "Impaired organic anion secretion in the proximal tubule blocks the only route available for urea excretion",
        "explanation": "Incorrect. Urea is not a substrate for the organic anion secretory system; it is freely filtered and then passively reabsorbed and secreted through dedicated urea transporters and paracellular routes. Blocking organic anion secretion would affect drugs, urate, and para-aminohippurate. This would be the correct answer if the retained substance were penicillin G or another organic anion dependent on tubular secretion."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Volume depletion lowers urine flow, which increases fractional urea reabsorption and raises BUN out of proportion to creatinine. Interpret BUN alongside volume status, never in isolation.",
    "pdfPage": 9,
    "pdfQuote": "At low urine flow, tubule reabsorbs more H2O"
  },
  {
    "id": 19,
    "category": "Physiology: Urea & BUN Interpretation",
    "questionText": "The same 78-year-old woman is admitted and receives isotonic intravenous fluids. Over 48 hours her blood pressure normalizes, her pulse falls to 78/min, and urine output increases to 1.8 L/day. Repeat laboratory studies show that the blood urea nitrogen has fallen from 44 to 19 mg/dL while serum creatinine has changed only slightly. Which mechanism best explains the fall in her blood urea nitrogen?",
    "options": [
      {
        "text": "Simple dilution of plasma urea by the infused fluid, with no change in renal urea handling",
        "explanation": "Incorrect. Dilution alone cannot account for a fall of more than half in the blood urea nitrogen; the infused volume is far too small relative to total body water to produce that magnitude of change. The mechanism is enhanced renal clearance of urea, not dilution. This would be the correct answer if a laboratory value changed transiently in proportion to a large volume of infused fluid, which is not the case here."
      },
      {
        "text": "Increased hepatic conversion of urea back into ammonium for excretion by the lungs",
        "explanation": "Incorrect. The urea cycle runs in one direction, converting ammonium into urea, and urea is not excreted through the lungs; its primary route of excretion is urine, with small amounts lost in sweat and stool. Nothing in volume repletion reverses hepatic urea synthesis. This would be the correct answer if the question asked how the liver disposes of ammonium, where the urea cycle genuinely detoxifies about 95 percent of the ammonium load."
      },
      {
        "text": "Higher urine flow reduces water and urea reabsorption, raising fractional urea excretion",
        "explanation": "Correct. Urea excretion rises with urinary flow. Restoring intravascular volume increases renal blood flow, GFR, and urine flow, so the tubules reabsorb less water; luminal urea is less concentrated and less urea diffuses back into the blood. Fractional urea excretion can climb from roughly 15 percent at low flow toward 70 percent at high flow, which rapidly clears the retained urea and normalizes the BUN. This is exactly the maneuver the lecturer described: give the patient an IV, increase urine flow, and the elevated BUN comes down."
      },
      {
        "text": "Restoration of organic base secretion allows urea to be actively pumped into the tubular lumen",
        "explanation": "Incorrect. Urea is neither an organic base nor an actively pumped solute; all urea movement in the nephron is passive, through paracellular routes and facilitated diffusion carriers. The organic base secretory system handles cations such as creatinine, morphine, and the potassium-sparing diuretics. This would be the correct answer if the retained compound were an organic cation dependent on OCT2 and the MATE exchangers."
      },
      {
        "text": "Volume expansion increases the number of urea transporters expressed in the proximal tubule brush border",
        "explanation": "Incorrect. Proximal tubular urea reabsorption is paracellular and does not depend on brush-border urea transporters at all; the urea transporters described are in the thin limbs and the medullary collecting duct. No acute transporter upregulation of this kind was taught. This would be the correct answer if proximal urea handling were carrier mediated and acutely regulated, which it is not."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Hydrating a volume-depleted patient raises urine flow, cuts fractional urea reabsorption, and drops an elevated BUN, often with little change in creatinine. Urea handling is flow dependent; creatinine handling is not.",
    "pdfPage": 9,
    "pdfQuote": "At high urine flow"
  },
  {
    "id": 20,
    "category": "Physiology: Protein Reabsorption",
    "questionText": "A 34-year-old man is admitted 36 hours after eating wild mushrooms he foraged and misidentified. He has nausea, vomiting, and malaise. Blood pressure is 118/72 mmHg and pulse is 92/min. Urinalysis shows 3+ protein with no red cells, no casts, and no glycosuria. A kidney biopsy shows normal-appearing glomeruli with vacuolization and loss of brush border in proximal tubule cells. The implicated fungal toxin is known to arrest microtubule-associated intracellular movement. Which mechanism best explains his proteinuria?",
    "options": [
      {
        "text": "Loss of the negative charge barrier of the glomerular basement membrane",
        "explanation": "Incorrect. A charge barrier defect is a glomerular lesion, and this patient's glomeruli are explicitly normal on biopsy while the abnormality is confined to proximal tubule cells. The lecture emphasized that tubule injury alone can cause proteinuria without glomerular injury. This would be the correct answer if the biopsy had shown glomerular pathology and the filtration barrier were the site of the defect."
      },
      {
        "text": "Increased glomerular capillary hydrostatic pressure forcing protein across an intact filtration barrier",
        "explanation": "Incorrect. His blood pressure and pulse are unremarkable and there is no evidence of a hemodynamic driver, and in any case a modest pressure change does not produce heavy proteinuria across an intact barrier. The lesion identified on biopsy is tubular. This would be the correct answer if the vignette described severe hypertension or a hyperfiltration state as the cause of protein appearing in the urine."
      },
      {
        "text": "Overproduction of low molecular weight light chains that overwhelm the reabsorptive and filtration capacity",
        "explanation": "Incorrect. Overflow of low molecular weight proteins requires an overproduction state, and nothing in this acute toxic ingestion suggests one. The biopsy findings point to failure of the tubular recovery machinery rather than an excessive filtered protein load. This would be the correct answer if the patient had a plasma cell disorder generating large quantities of freely filtered light chains."
      },
      {
        "text": "Failure of endocytic uptake and processing of filtered protein by proximal tubule cells",
        "explanation": "Correct. Proximal tubule cells normally reclaim 96 to 99 percent of filtered albumin, plus low molecular weight proteins and polypeptide hormones, by receptor-mediated endocytosis. That process requires energy for vesicle formation and internalization and requires microtubule-associated movement to traffic vesicles to endosomes and lysosomes. Agents that interfere with those steps, including metabolic inhibitors and the fungal alkaloid cytochalasin B, block reabsorption so that normally filtered protein passes into the urine. The lecturer noted that the pattern of proteinuria in mushroom poisoning helps localize where the damage is, and that tubule injury produces proteinuria even without glomerular injury."
      },
      {
        "text": "Brush-border peptidase deficiency preventing hydrolysis of filtered albumin in the tubular lumen",
        "explanation": "Incorrect. Brush-border peptidases hydrolyze short oligopeptides, not intact albumin; albumin is digested only after internalization, inside lysosomes. Loss of luminal peptidase activity would affect peptide handling, not albumin recovery. This would be the correct answer if the urinary abnormality were loss of small filtered oligopeptides rather than protein."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Tubular proteinuria: protein recovery needs ATP and microtubule-dependent endocytosis, so metabolic inhibitors and cytochalasin B cause proteinuria with completely normal glomeruli. Proteinuria is not automatically a glomerular diagnosis.",
    "pdfPage": 13,
    "pdfQuote": "Factors that interfere with vesicle formation/internalization"
  },
  {
    "id": 21,
    "category": "Physiology: Organic Acid Secretory System",
    "questionText": "A 24-year-old woman is evaluated at the finish line of an ultramarathon. She has been running for 11 hours and has eaten almost nothing during the race. She is alert with a blood pressure of 104/66 mmHg and pulse of 96/min. Plasma glucose is 68 mg/dL. A urine dipstick is strongly positive for ketones but negative for glucose and protein. Which mechanism best explains the appearance of ketone bodies in her urine?",
    "options": [
      {
        "text": "The filtered load of ketone bodies exceeds their proximal tubular transport maximum",
        "explanation": "Correct. Acetoacetate and beta-hydroxybutyrate are organic acids produced by fatty acid metabolism, and like other carboxylates they are normally reabsorbed almost completely by the proximal tubule because they are valuable energy substrates. That reabsorption is transport-maximum limited, so urinary excretion occurs when the filtered load exceeds the Tm. Prolonged exercise with minimal caloric intake drives fatty acid breakdown and raises plasma ketone concentration until the filtered load overwhelms the carriers. The same phenomenon occurs in diabetes, where excess fatty acid breakdown makes ketones detectable in urine."
      },
      {
        "text": "Ketone bodies are actively secreted into the lumen by the organic base secretory system whenever fatty acid oxidation increases",
        "explanation": "Incorrect. Ketone bodies are organic acids, that is, anions, so they would never be substrates for the organic base (cation) secretory system, which handles monoamines, creatinine, morphine, and the potassium-sparing diuretics. Their appearance in urine reflects saturated reabsorption, not induced secretion. This would be the correct answer if the compound were an organic cation such as amiloride requiring secretion to reach the lumen."
      },
      {
        "text": "Ketone bodies are too large to be reabsorbed and are therefore excreted whenever they are produced",
        "explanation": "Incorrect. Ketone bodies are small carboxylates that are readily reabsorbed by sodium-dependent apical cotransporters, and the proximal tubule reabsorbs virtually all of them under normal conditions precisely because losing them would waste energy substrate. Size is not the limiting factor; carrier saturation is. This would be the correct answer if these compounds lacked a reabsorptive pathway altogether."
      },
      {
        "text": "The glomerular filtration barrier becomes permeable to organic acids during prolonged strenuous exercise",
        "explanation": "Incorrect. Small organic anions are already freely filtered under all conditions, so no change in barrier permeability is needed or implied. Her urine is also negative for protein, arguing against any change in barrier selectivity. This would be the correct answer if the substance appearing in the urine were a normally restricted macromolecule such as albumin."
      },
      {
        "text": "Ketone bodies displace urate from URAT1, and the resulting change in anion gap forces ketone excretion",
        "explanation": "Incorrect. Competition among organic anions for shared transporters is real, but URAT1 is a urate transporter and displacing urate would alter urate handling, not create a route for ketone excretion. Anion gap is a plasma calculation, not a driving force for tubular transport. This would be the correct answer if the question asked why volume depletion or competing anions change plasma urate levels."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Ketone bodies (acetoacetate, beta-hydroxybutyrate) are organic acids normally reabsorbed almost completely by the proximal tubule. Ketonuria appears when the filtered load exceeds their Tm, as in diabetes or severe prolonged exercise.",
    "pdfPage": 14,
    "pdfQuote": "Urinary excretion occurs when the FL of ketone bodies"
  },
  {
    "id": 22,
    "category": "Physiology: Organic Acid Secretory System",
    "questionText": "In a research protocol, a healthy volunteer receives a continuous low-dose infusion of para-aminohippurate. Simultaneous renal arterial and renal venous sampling shows that the renal venous concentration of the compound is nearly zero, and essentially all of the infused compound is recovered in the urine. Which renal parameter can be estimated from the clearance of this compound?",
    "options": [
      {
        "text": "Glomerular filtration rate, because the compound is freely filtered and neither reabsorbed nor secreted",
        "explanation": "Incorrect. A marker for GFR must be filtered and then neither reabsorbed nor secreted, which is exactly what para-aminohippurate is not: it is avidly secreted by the proximal tubule, so more is removed from plasma than is filtered. Using it as a GFR marker would grossly overestimate filtration. This would be the correct answer if the infused substance were an inert marker handled by filtration alone."
      },
      {
        "text": "Renal blood flow, because the compound distributes into erythrocytes as well as plasma",
        "explanation": "Incorrect. Para-aminohippurate is a water-soluble organic anion confined to the plasma compartment during its passage through the kidney, so its clearance reports plasma flow rather than whole blood flow. Converting to blood flow requires additionally accounting for the hematocrit. This would be the correct answer if the marker equilibrated with red cells and were cleared from whole blood."
      },
      {
        "text": "Filtration fraction, because the compound is trapped in the tubular lumen immediately after filtration",
        "explanation": "Incorrect. Filtration fraction is the ratio of GFR to renal plasma flow and requires two separate measurements, not a single clearance value. Para-aminohippurate is not trapped after filtration; the majority of its urinary delivery comes from tubular secretion. This would be the correct answer if the question asked what you obtain by combining a filtration marker with a plasma flow marker."
      },
      {
        "text": "Free water clearance, because excretion of the compound is proportional to the urine flow rate",
        "explanation": "Incorrect. Free water clearance describes the handling of solute-free water and depends on urine osmolality relative to plasma, not on the clearance of an organic anion. Para-aminohippurate excretion is determined by filtration plus secretion, not by water handling. This would be the correct answer if the question concerned urinary concentration and dilution rather than plasma flow."
      },
      {
        "text": "Effective renal plasma flow, because the compound is both filtered and secreted",
        "explanation": "Correct. Para-aminohippurate is a small, 194-dalton, water-soluble organic anion that is freely filtered and then vigorously secreted by the proximal tubular organic anion system, so more is removed from the plasma than is filtered. At low plasma concentrations essentially all of the compound entering the kidney is stripped from the plasma and excreted in a single pass, which is exactly what the near-zero renal venous concentration in this study demonstrates. Its clearance therefore approximates the plasma flow through the kidney and is reported as the effective renal plasma flow."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "PAH is a small water-soluble organic anion that is both filtered AND secreted, so at low plasma concentrations it is almost completely cleared in one pass. Its clearance estimates effective renal plasma flow.",
    "pdfPage": 14,
    "pdfQuote": "PAH clearance can be used experimentally as a measure of renal plasma flow"
  },
  {
    "id": 23,
    "category": "Pharmacology: Renal Drug Secretion",
    "questionText": "During a period of severe drug shortage, a hospital protocol calls for administering penicillin G together with a second oral agent that has no antimicrobial activity of its own. With the second agent added, plasma penicillin concentrations are substantially higher and remain therapeutic for longer, permitting a lower antibiotic dose. The pharmacy notes that this combination should not be used when the infection is confined to the urinary tract. Which mechanism explains the effect of the second agent?",
    "options": [
      {
        "text": "It displaces penicillin from plasma albumin, raising the free drug fraction available to tissues",
        "explanation": "Incorrect. Displacement from protein binding would increase the free fraction transiently but would also increase filtration and clearance, and it would not prolong therapeutic levels or explain why the combination fails in urinary tract infection. The interaction described is at the level of tubular secretion. This would be the correct answer if the interacting drugs competed for albumin binding sites rather than for a tubular transporter."
      },
      {
        "text": "It inhibits proximal tubular secretion of penicillin by the organic anion system",
        "explanation": "Correct. Penicillin G is an organic anion that is avidly secreted into the tubular lumen by the organic acid secretory system, so a large fraction of each dose is normally lost in the urine. Probenecid inhibits that secretory system, keeping penicillin in the body and effectively increasing its potency for a given amount of drug. This is precisely why probenecid was developed during World War II, when penicillin production could not meet wartime demand and every microgram mattered. The trade-off is the one the pharmacy flags: if the infection is a urinary tract infection, blocking secretion keeps the antibiotic out of the urine, exactly where it is needed."
      },
      {
        "text": "It inhibits hepatic phase II conjugation, preventing glucuronidation of the antibiotic",
        "explanation": "Incorrect. Blocking conjugation would slow the generation of anionic metabolites, but penicillin G is itself an organic anion secreted unchanged, so its renal loss does not depend on prior conjugation. The described interaction is renal, not hepatic. This would be the correct answer if the drug in question required glucuronidation, glutathione conjugation, or sulfation before it could be excreted."
      },
      {
        "text": "It blocks the organic cation transporter OCT2, preventing penicillin from entering tubule cells",
        "explanation": "Incorrect. OCT2 carries organic cations such as creatinine, monoamines, morphine, and the potassium-sparing diuretics; penicillin G is an anion and uses the organic anion pathway instead. Blocking the cation system would not affect penicillin handling. This would be the correct answer if the affected drug were amiloride, triamterene, or another organic base."
      },
      {
        "text": "It increases the glomerular filtration of penicillin so that more of the drug is retained within the peritubular capillaries",
        "explanation": "Incorrect. Increasing filtration would increase, not decrease, delivery of drug to the urine, and filtration does not retain drug in the peritubular capillaries. The stem describes higher and more sustained plasma levels, which requires reduced renal elimination. This would be the correct answer if the goal were to enhance urinary drug delivery, which is the opposite of what is described."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Probenecid inhibits the organic acid secretory system, blocking tubular secretion of penicillin G. Developed in WWII to stretch scarce penicillin, it backfires in urinary tract infection by keeping the drug out of the urine.",
    "pdfPage": 17,
    "pdfQuote": "Penicillin G"
  },
  {
    "id": 24,
    "category": "Pharmacology: Organic Base Secretory System",
    "questionText": "A 66-year-old man with heart failure has been maintained on a potassium-sparing diuretic that acts on sodium channels in the luminal membrane of the distal nephron. He is started on a new medication that is a strong competitive substrate for proximal tubular organic cation transport. Over the next several days his urine output falls and his serum potassium rises, even though measured plasma concentrations of the diuretic are unchanged. Which mechanism best explains the loss of diuretic effect?",
    "options": [
      {
        "text": "The new medication displaced the diuretic from its plasma protein binding sites",
        "explanation": "Incorrect. Displacement from protein binding would raise the free fraction of the diuretic and if anything increase its delivery and effect, not abolish it. The stem specifies unchanged plasma concentrations and a competitive interaction at a tubular transporter. This would be the correct answer if the described interaction were at the level of albumin binding rather than tubular secretion."
      },
      {
        "text": "The new medication blocks basolateral uptake of potassium in the distal convoluted tubule",
        "explanation": "Incorrect. The interaction described is at the proximal tubular organic cation transport step, not at a distal potassium handling step, and blocking distal potassium uptake is not a mechanism that was taught. The rise in potassium here follows from loss of the diuretic's effect. This would be the correct answer if the new drug had a direct distal tubular action on potassium transport."
      },
      {
        "text": "The diuretic is now filtered rather than secreted, which doubles its delivery to the target site",
        "explanation": "Incorrect. Filtration and secretion are additive rather than alternative pathways, and losing the secretory component reduces luminal drug delivery rather than doubling it. The clinical picture confirms reduced, not increased, effect. This would be the correct answer if the observation had been an exaggerated diuretic response after adding the second drug."
      },
      {
        "text": "The diuretic can no longer be secreted into the lumen to reach its luminal target channel",
        "explanation": "Correct. Amiloride and triamterene are organic cations that act on channels located on the luminal side of the distal nephron. To get there they must be secreted by the organic base secretory system of the proximal straight tubule: basolateral uptake through the polyspecific organic cation transporter OCT2, driven by the inside-negative membrane potential, then apical exit through the MATE1, MATE2-K, and MDR1 exchangers using the proton gradient. A competing organic cation blocks that secretion, so the drug never reaches its target channel and has no diuretic efficacy regardless of plasma level, which is exactly what the lecturer emphasized about this class."
      },
      {
        "text": "The new medication accelerated hepatic metabolism of the diuretic into inactive polar metabolites",
        "explanation": "Incorrect. Accelerated hepatic clearance would lower the plasma concentration of the diuretic, but the stem explicitly states that plasma concentrations are unchanged. The failure is one of delivery to the site of action, not of drug disposal. This would be the correct answer if the vignette had described falling drug levels after starting an enzyme-inducing agent."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Amiloride and triamterene act on LUMINAL channels, so they must first be secreted by the organic base (cation) system via OCT2 and the MATE exchangers. Block that secretion and the drug has no diuretic effect at all.",
    "pdfPage": 16,
    "pdfQuote": "K+-sparing diuretics: Amiloride, triamterene"
  },
  {
    "id": 25,
    "category": "Physiology: Organic Base Secretory System",
    "questionText": "A 52-year-old woman is started on a new cationic medication. Within four days her serum creatinine rises from 0.9 to 1.2 mg/dL. She feels well, her urine output is normal, urinalysis is bland, and a simultaneously performed measurement of glomerular filtration rate using an inert filtration marker is unchanged from her baseline. Which of the following best explains the change in her serum creatinine?",
    "options": [
      {
        "text": "Acute tubular necrosis has developed and reduced her true glomerular filtration rate",
        "explanation": "Incorrect. Acute tubular injury would be accompanied by an actual fall in measured GFR and typically by an abnormal urinary sediment, neither of which is present. The directly measured GFR is explicitly unchanged. This would be the correct answer if the inert filtration marker had also shown a decline, indicating a true loss of filtration."
      },
      {
        "text": "Increased skeletal muscle breakdown caused by the drug raised her creatinine production",
        "explanation": "Incorrect. Increased creatinine generation from muscle breakdown is possible in principle, but the vignette gives no evidence of myopathy and the timing and magnitude fit a transport interaction far better. Creatinine derives from phosphocreatine turnover, which does not change abruptly without a clinical correlate. This would be the correct answer if the patient had muscle pain, weakness, or a markedly elevated creatine kinase."
      },
      {
        "text": "Blocked tubular secretion of creatinine raised its plasma level without a change in GFR",
        "explanation": "Correct. Creatinine, the breakdown product of phosphocreatine, is not only filtered but also secreted into the tubular lumen by the organic base secretory system using the basolateral organic cation transporter OCT2 and the apical MATE exchangers. A competing cationic drug occupies those carriers, reducing creatinine secretion so that plasma creatinine rises even though filtration is completely unchanged. This is the clinical consequence the lecturer highlighted: because we use creatinine to estimate GFR, anything that alters its tubular secretion distorts our estimate of renal function."
      },
      {
        "text": "The drug interfered with the hepatic conversion of phosphocreatine into creatinine",
        "explanation": "Incorrect. Creatinine is generated from phosphocreatine in muscle rather than by a hepatic conversion step, and inhibiting its production would lower, not raise, the serum level. The direction of the change is inconsistent with this mechanism. This would be the correct answer if the observed abnormality had been an unexpectedly low serum creatinine."
      },
      {
        "text": "Enhanced proximal tubular reabsorption of filtered creatinine returned much more of it to the peritubular blood",
        "explanation": "Incorrect. Creatinine is handled by secretion rather than reabsorption in the proximal tubule; there is no described reabsorptive pathway that could be upregulated. Invoking reabsorption inverts the physiology of this solute. This would be the correct answer if the solute were urate or glucose, both of which have genuine proximal reabsorptive pathways."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Creatinine is filtered AND secreted by the organic base system (OCT2 plus MATE exchangers). A drug that competes for that secretion raises serum creatinine and fakes a fall in GFR without any true change in filtration.",
    "pdfPage": 16,
    "pdfQuote": "Creatinine: the breakdown product of phosphocreatine"
  },
  {
    "id": 26,
    "category": "Physiology: Uric Acid Handling",
    "questionText": "A 47-year-old man is evaluated after several days of poor oral intake and heavy sweating during outdoor work. Blood pressure is 102/62 mmHg with a pulse of 104/min, and mucous membranes are dry. Laboratory studies show a plasma urate of 9.2 mg/dL, up from a baseline of 5.8 mg/dL, with only a modest rise in creatinine. There is no history of a purine-rich binge and no evidence of increased cell turnover. Which mechanism best explains the rise in plasma urate?",
    "options": [
      {
        "text": "Increased xanthine oxidase activity in muscle during volume depletion raises urate production",
        "explanation": "Incorrect. Xanthine oxidase converts adenosine and guanosine through xanthine to urate, but there is no described mechanism by which volume depletion induces the enzyme, and the vignette explicitly excludes increased purine load or cell turnover. The change is in renal handling rather than production. This would be the correct answer if the patient had a condition producing massive purine release and increased urate generation."
      },
      {
        "text": "Reduced glomerular filtration of urate because urate becomes protein bound when plasma volume falls",
        "explanation": "Incorrect. Urate is a small monovalent anion that is filtered and then extensively reabsorbed and secreted in the proximal tubule; volume status does not convert it into a protein-bound, non-filterable form. The relevant change is at the tubular level. This would be the correct answer if the compound in question were rendered non-filterable by binding, which does not describe urate handling."
      },
      {
        "text": "Enhanced secretion of urate by the MRP4 and BCRP transporters in the setting of extracellular volume depletion",
        "explanation": "Incorrect. MRP4 and BCRP are ATP-dependent apical ABC transporters that secrete urate into the lumen, so enhancing them would lower plasma urate rather than raise it. Volume depletion shifts the balance toward reabsorption, not secretion. This would be the correct answer if the finding had been a fall in plasma urate with increased urate excretion."
      },
      {
        "text": "Loss of URAT1 expression from the apical membrane during periods of reduced renal perfusion",
        "explanation": "Incorrect. URAT1 is a reabsorptive apical transporter, so losing it would increase urate excretion and lower the plasma level, the opposite of what is observed. No acute loss of URAT1 expression with hypoperfusion was described. This would be the correct answer if the patient had presented with hypouricemia and increased fractional urate excretion."
      },
      {
        "text": "Enhanced proximal fluid reabsorption increases paracellular urate reabsorption",
        "explanation": "Correct. Urate is filtered, reabsorbed, and secreted within the proximal tubule, and reabsorption is the more important pathway. Paracellular passive reabsorption becomes especially important during extracellular volume depletion, which triggers a compensatory enhancement of proximal tubular fluid reabsorption. As water is reclaimed, luminal urate concentration rises, paracellular urate reabsorption increases, urate excretion falls, and plasma urate climbs. This explains a rise in plasma urate in a dehydrated patient with no change in purine load or cell turnover."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Volume depletion enhances proximal fluid reabsorption, which raises paracellular urate reabsorption, cuts urate excretion, and raises plasma urate. Reabsorption, not secretion, is the dominant urate pathway.",
    "pdfPage": 15,
    "pdfQuote": "Important during EC volume depletion"
  },
  {
    "id": 27,
    "category": "Physiology: Uric Acid Handling",
    "questionText": "In a study of urate transport, investigators identify a carrier on the apical membrane of proximal tubule cells that moves urate from the cytosol into the tubular lumen and whose activity is abolished when cellular ATP is depleted, despite an unchanged electrochemical gradient for urate. Which transporter best fits this description?",
    "options": [
      {
        "text": "An ATP-dependent ABC transporter such as BCRP or MRP4 on the apical membrane",
        "explanation": "Correct. Urate secretion at the apical membrane is mediated in part by two ATP-binding cassette transporters, MRP4 and BCRP, which hydrolyze ATP to push urate from the cytosol into the tubular lumen. Their ATP dependence is exactly what distinguishes them from the passive, gradient-driven carriers elsewhere in urate handling, which is why depleting cellular ATP abolishes their activity without any change in the urate gradient. The apical membrane also carries NPT1 and NPT4, which participate in secretion by a route the lecturer described as still uncharacterized."
      },
      {
        "text": "URAT1, the apical exchanger responsible for the bulk of proximal tubular urate reabsorption",
        "explanation": "Incorrect. URAT1 is apical but moves urate in the reabsorptive direction, from lumen into the cell, and it works as an exchanger rather than an ATP-hydrolyzing pump. The stem specifies secretion into the lumen with strict ATP dependence. This would be the correct answer if the question asked which apical transporter, alongside OAT4 and OAT10, mediates transcellular urate reabsorption."
      },
      {
        "text": "URATv1, the voltage-driven basolateral transporter that returns urate to the plasma",
        "explanation": "Incorrect. URATv1 sits on the basolateral membrane and completes reabsorption by moving urate into the interstitium, driven by voltage rather than ATP hydrolysis. Both its location and its energetics conflict with the description. This would be the correct answer if the question asked how reabsorbed urate exits the proximal tubule cell toward the blood."
      },
      {
        "text": "OAT1 and OAT3, the basolateral carriers that bring urate into the cell from the peritubular blood",
        "explanation": "Incorrect. OAT1 and OAT3 are indeed part of the secretory pathway, but they operate at the basolateral membrane as the entry step, not at the apical membrane as the exit step, and they are exchangers rather than ATP-driven pumps. The stem localizes the transporter to the apical membrane. This would be the correct answer if the question described the first step of urate secretion from blood into the cell."
      },
      {
        "text": "NaDC1, the sodium-dicarboxylate cotransporter that supplies the counter-anion used in exchange transport",
        "explanation": "Incorrect. NaDC1 carries dicarboxylates across the apical membrane using the sodium gradient and supports organic anion exchange indirectly, but it does not itself transport urate into the lumen and it is not ATP dependent. Its role belongs to the carboxylate reabsorption pathway. This would be the correct answer if the question asked how dicarboxylates enter the proximal tubule cell from the lumen."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Apical urate secretion uses the ATP-dependent ABC transporters MRP4 and BCRP plus NPT1/NPT4; apical reabsorption uses URAT1, OAT4, and OAT10, with basolateral URATv1 returning urate to plasma.",
    "pdfPage": 15,
    "pdfQuote": "two ABC transporters MRP4 & BCRP"
  },
  {
    "id": 28,
    "category": "Pharmacology: Renal Drug Secretion",
    "questionText": "A 58-year-old man with heart failure takes furosemide and a potassium-sparing diuretic. He is given a compound that potently inhibits the proximal tubular organic anion secretory system. Over the following days his natriuretic response to furosemide falls markedly, while the potassium-sparing effect of his second diuretic is preserved. Serum albumin, renal blood flow, and GFR are unchanged throughout. Which of the following best explains this differential effect?",
    "options": [
      {
        "text": "Furosemide acts from the basolateral side and therefore does not require tubular secretion",
        "explanation": "Incorrect. Loop diuretics act from the luminal side and depend on being delivered into the tubular fluid, which is precisely why blocking the organic anion secretory system blunts their effect. If furosemide worked from the blood side, inhibiting secretion would have no consequence. This would be the correct answer if the drug's target faced the interstitium rather than the lumen."
      },
      {
        "text": "The potassium-sparing agent is an organic cation secreted by a separate organic base system",
        "explanation": "Correct. Nearly all diuretics used in clinical practice, including acetazolamide, the thiazides, and the loop agents, are organic anions delivered to their luminal targets by the organic acid secretory system, so an inhibitor of that system blunts their effect. The exceptions are amiloride and triamterene, which are organic cations secreted by the entirely separate organic base secretory system using OCT2 basolaterally and the MATE and MDR1 exchangers apically. Because that pathway is untouched by an organic anion inhibitor, the potassium-sparing effect persists while the loop diuretic response fails."
      },
      {
        "text": "Furosemide is filtered rather than secreted, so its delivery to the lumen depends on GFR alone",
        "explanation": "Incorrect. Loop diuretics are highly protein bound and only minimally filtered; the great majority of luminal delivery comes from proximal tubular secretion by the organic anion system. The stem also specifies unchanged GFR, so a filtration-based explanation cannot account for the loss of effect. This would be the correct answer if the drug were freely filtered and not protein bound."
      },
      {
        "text": "The potassium-sparing agent is lipid soluble and diffuses freely across the apical membrane",
        "explanation": "Incorrect. Amiloride and triamterene are charged organic cations at physiologic pH and depend on carrier-mediated secretion to reach the lumen, which is exactly why interference with organic cation transport abolishes their effect. Free lipid diffusion would make them insensitive to any transport interaction. This would be the correct answer if the drug were an uncharged, highly lipophilic agent."
      },
      {
        "text": "Both agents rely on the organic anion secretory system, so the differential response must reflect differences in their degree of plasma protein binding",
        "explanation": "Incorrect. The two agents do not share a secretory pathway: the potassium-sparing agents are the classic exception, handled by the organic base rather than the organic acid system. The stem also states that serum albumin is unchanged, removing protein binding as a variable. This would be the correct answer if all diuretics used a single secretory route and binding differences were the only distinguishing factor."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Almost every clinical diuretic reaches its luminal target via the organic ACID secretory system. The exceptions, amiloride and triamterene, are organic cations delivered by the organic BASE system.",
    "pdfPage": 17,
    "pdfQuote": "Amiloride & Triamterene (K+-Sparing)"
  },
  {
    "id": 29,
    "category": "Physiology: Integrated Case (Type 1 Diabetes)",
    "questionText": "A 12-year-old competitive soccer player is brought to the emergency department by her parents. Over the past two months she has become lethargic and easily fatigued, has lost weight, and her schoolwork has suffered. She reports urinating 12 to 13 times a day and being thirsty constantly. She is 167 cm tall and weighs 48 kg. Her physical examination shows dry mucous membranes and delayed capillary refill. A 24-hour collection quantifies her urine output at 7.5 L/day, and urinalysis shows glycosuria (+++) and proteinuria (+++) with a normal plasma glucose measured at that moment. Which mechanism most directly explains her enormous urine output?",
    "options": [
      {
        "text": "Impaired proximal tubular protein reabsorption is drawing water into the tubular lumen",
        "explanation": "Incorrect. Even heavy proteinuria contributes a trivial number of osmotically active particles to the tubular fluid compared with glucose, because osmotic force depends on particle number rather than mass. Her proteinuria is a marker of tubular stress rather than the driver of her polyuria. This would be the correct answer if a filtered solute present in large molar quantities were responsible, which describes glucose rather than protein."
      },
      {
        "text": "An increase in glomerular filtration rate caused by dehydration and reduced plasma volume",
        "explanation": "Incorrect. Volume depletion lowers renal perfusion and tends to reduce, not raise, glomerular filtration rate, and a rise in GFR alone could not sustain a urine output of 7.5 L per day. Her tachycardia and dry mucous membranes indicate hypovolemia. This would be the correct answer if increased filtration were the mechanism of polyuria, but the driver here is an unabsorbable luminal solute."
      },
      {
        "text": "Reduced urea reabsorption in the medullary collecting duct resulting from a low urine flow state",
        "explanation": "Incorrect. This option is internally contradictory, since she is in a very high urine flow state rather than a low one, and reduced urea reabsorption is a consequence of high flow rather than its cause. High flow does increase fractional urea excretion, but that follows the osmotic diuresis instead of creating it. This would be the correct answer if the question asked what happens to urea handling once urine flow is already elevated."
      },
      {
        "text": "Unreabsorbed luminal glucose acts as an osmotic diuretic and holds water in the tubule",
        "explanation": "Correct. Her plasma glucose has repeatedly exceeded the renal threshold of 200 mg/dL, saturating the proximal tubular SGLTs at their transport maximum. Glucose beyond that point remains in the tubular lumen, and because segments distal to the proximal tubule reabsorb almost none of it, that glucose stays in the tubular fluid as an osmotically active solute. It holds water in the nephron and drives the 7.5 L/day diuresis, which produces the dehydration, thirst, and weight loss her parents describe, along with the fatigue and lethargy. The normal glycemia at the moment of testing is explained by her poor oral intake and by the fact that she was losing whatever glucose she had, and the whole picture is new-onset type 1 diabetes mellitus."
      },
      {
        "text": "Excessive secretion of organic cations by the proximal straight tubule generates a strong osmotic gradient in the lumen",
        "explanation": "Incorrect. Organic cations such as creatinine and the monoamines are secreted in quantities far too small to create a meaningful osmotic load, and nothing in this presentation suggests an excess of secreted cations. Osmotic diuresis requires a solute present in large molar amounts in the lumen. This would be the correct answer if the secreted compound were delivered in gram quantities, which is never the case for endogenous organic cations."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "In new-onset type 1 diabetes, glucose beyond Tm stays in the tubular lumen and acts as an osmotic diuretic. One transport fact chains together polyuria, polydipsia, dehydration, weight loss, fatigue, and lethargy.",
    "pdfPage": 18,
    "pdfQuote": "Excessive Blood Sugar"
  },
  {
    "id": 30,
    "category": "Physiology: Amino Acid Transport",
    "questionText": "In an experimental preparation, a metabolic poison is applied that selectively inhibits the basolateral sodium-potassium ATPase of proximal tubule cells. Within minutes, tubular fluid collected at the end of the proximal tubule contains substantial quantities of both amino acids and glucose, neither of which was detectable before the poison was applied. Glomerular filtration rate and tubular flow are unchanged. Which mechanism best explains the appearance of amino acids in the tubular fluid?",
    "options": [
      {
        "text": "Direct inhibition of brush-border peptidases prevents liberation of amino acids in the lumen",
        "explanation": "Incorrect. Blocking brush-border peptidases would reduce the amount of free amino acid generated from filtered oligopeptides in the lumen, which if anything would lower luminal free amino acid content rather than raise it. It would also fail to explain the simultaneous appearance of glucose. This would be the correct answer if the experimental finding had been intact oligopeptides accumulating in the tubular fluid."
      },
      {
        "text": "Loss of ATP prevents receptor-mediated endocytosis of filtered amino acids",
        "explanation": "Incorrect. Receptor-mediated endocytosis handles filtered proteins and polypeptides, not free amino acids, which are recovered by membrane carriers. Losing the endocytic pathway would produce proteinuria rather than aminoaciduria. This would be the correct answer if the substance appearing in the tubular fluid were albumin or a low molecular weight protein."
      },
      {
        "text": "Collapse of the transmembrane sodium gradient that powers apical amino acid uptake",
        "explanation": "Correct. The basolateral sodium-potassium ATPase maintains a low intracellular and high extracellular sodium concentration, and it is this gradient that energizes the apical sodium-driven solute carriers for amino acids as well as the sodium-glucose cotransporters. Poisoning the pump collapses that gradient, so apical uptake fails simultaneously for both classes of solute, which is exactly the combined aminoaciduria and glycosuria observed. The lecturer stressed that knowing the individual carriers matters far less than recognizing that the sodium gradient drives nearly all proximal tubular reabsorption."
      },
      {
        "text": "Increased glomerular filtration of amino acids has exceeded the tubular reabsorptive capacity",
        "explanation": "Incorrect. The stem specifies that glomerular filtration rate and tubular flow are unchanged, so the filtered load has not risen. The defect is on the reabsorptive side of the equation. This would be the correct answer if the preparation had involved raising plasma amino acid concentration until the filtered load exceeded the transport maximum."
      },
      {
        "text": "Failure of the organic anion secretory system to reclaim amino acids from the tubular lumen",
        "explanation": "Incorrect. The organic anion system is a secretory pathway for carboxylates, urate, and many drugs, and it plays no role in reclaiming amino acids, which are recovered by dedicated solute carrier proteins. Direction and substrate class are both wrong. This would be the correct answer if the compound accumulating in the lumen were a carboxylate whose reabsorptive carriers had been saturated."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Poison the basolateral Na+/K+-ATPase and proximal reabsorption fails globally, because the sodium gradient energizes both the amino acid solute carriers and the SGLTs. Combined aminoaciduria and glycosuria point to the shared driving force.",
    "pdfPage": 11,
    "pdfQuote": "AA enters the cell via Na+- or H+-driven transporters"
  }
];

window.Test_CV10 = Test_CV10;
