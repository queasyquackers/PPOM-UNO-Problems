// CPR Block 1 - Week 1 Cumulative Exam (Lectures CV1-CV10)
// 50 application-level questions, interleaved across:
//   CV1/CV2  OMM: Balanced Ligamentous Tension
//   CV3      Anatomy: Genitourinary Embryology
//   CV4      Physiology: Solute Transport & Fluid Movement
//   CV6      Physiology: Organization of the Urinary System
//   CV7      Physiology: GFR, Renal Blood Flow & Clearance
//   CV8      Physiology: Regulation of Sodium & Water Excretion
//   CV9      Physiology: K+, Ca++, Mg++ & Phosphate Transport
//   CV10     Physiology: Urea, Glucose & Organic Solute Transport
const Test_Cumulative_CPR_Wk1 = [
  {
    "id": 1,
    "category": "Renal Physiology: Autoregulation",
    "questionText": "A 71-year-old man is brought in after two days of vomiting from a viral gastroenteritis. Blood pressure is 88/54 mmHg supine, pulse 112/min, mucous membranes are dry, and jugular venous pulsations are not visible. Serum creatinine has risen from a baseline of 0.9 mg/dL to 2.1 mg/dL, and the BUN-to-creatinine ratio is 28:1. Urine sodium is 9 mEq/L and the urine sediment is bland. His nephrologist explains that although the mean arterial pressure has fallen well below normal, glomerular filtration has been partially defended by an intrinsic renal mechanism. Which of the following changes is most responsible for preserving the glomerular filtration rate in this patient?",
    "options": [
      {
        "text": "Dilation of the afferent arteriole driven by myogenic relaxation of its smooth muscle",
        "explanation": "Incorrect. Afferent myogenic relaxation does occur as perfusion pressure falls and is a genuine component of autoregulation, but this patient's mean arterial pressure is roughly 65 mmHg, at or below the lower limit of the autoregulatory range, where afferent dilation is already maximal and cannot compensate further. The dominant defense at this point is angiotensin II acting on the efferent side. This would be the correct answer if his mean arterial pressure had fallen only from 100 to 85 mmHg, squarely inside the autoregulatory plateau."
      },
      {
        "text": "Increased delivery of sodium chloride to the macula densa with resulting adenosine release",
        "explanation": "Incorrect. Tubuloglomerular feedback in this direction operates when distal sodium chloride delivery is high: the macula densa releases adenosine, the afferent arteriole constricts, and GFR falls. This patient is volume depleted with a urine sodium of 9 mEq/L, so distal delivery is low, not high, and the feedback loop is running the opposite way. This would be the correct answer if he had received a large saline load and the question asked why GFR did not rise proportionally."
      },
      {
        "text": "Efferent arteriolar constriction by angiotensin II raising glomerular capillary pressure",
        "explanation": "Correct. Volume depletion lowers renal perfusion pressure and raises renal sympathetic tone, both of which drive renin release from the granular cells of the juxtaglomerular apparatus. The angiotensin II generated preferentially constricts the efferent arteriole, which raises the hydrostatic pressure inside the glomerular capillary and therefore the net filtration pressure. GFR is defended even though renal plasma flow falls, which is exactly why the filtration fraction rises and why the peritubular capillaries see a high oncotic pressure that drives avid proximal sodium and urea reabsorption. That enhanced urea reabsorption is what produces the elevated BUN-to-creatinine ratio described here."
      },
      {
        "text": "Atrial natriuretic peptide release causing selective dilation of the afferent arteriole",
        "explanation": "Incorrect. Atrial natriuretic peptide is secreted in response to atrial stretch from volume expansion, and this patient is profoundly volume depleted with flat neck veins, so its secretion is suppressed rather than increased. Its physiologic role is to promote natriuresis when volume is high, not to rescue GFR when volume is low. This would be the correct answer if the patient had decompensated heart failure with elevated filling pressures."
      },
      {
        "text": "A rise in Bowman space hydrostatic pressure that increases the transcapillary driving force",
        "explanation": "Incorrect. Bowman space hydrostatic pressure opposes filtration; it appears with a negative sign in the net filtration pressure equation, so any rise in it would lower GFR rather than preserve it. A rise in Bowman pressure is a feature of obstructive, post-renal disease. This would be the correct answer if the patient had a bladder outlet obstruction with a distended bladder on exam."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: In pre-renal states, angiotensin II constricts the EFFERENT arteriole to defend GFR while renal plasma flow falls. Filtration fraction rises, peritubular oncotic pressure rises, proximal urea reabsorption rises, and the BUN/Cr ratio climbs above 20:1.",
    "lectureSource": "CV7: GFR, Renal Blood Flow and Clearance",
    "pdfLecture": "CV7",
    "pdfPage": 25,
    "pdfQuote": "constricts the efferent arteriole in the kidneys (greater concentration of A T1 receptors)"
  },
  {
    "id": 2,
    "category": "Embryology: Ureteric Bud",
    "questionText": "A stillborn infant delivered at 34 weeks had been followed for severe oligohydramnios detected at 20 weeks. At autopsy the face is flattened with low-set ears, the limbs show positional contractures, the lungs are markedly hypoplastic, and no renal tissue is identified in either the pelvis or the retroperitoneum. The adrenal glands are present but discoid. The bladder is small and empty, and no ureters can be traced. Which of the following developmental events best explains the entire constellation of findings?",
    "options": [
      {
        "text": "Failure of the ureteric bud to grow out from the mesonephric duct and induce the metanephric blastema",
        "explanation": "Correct. The definitive kidney forms only through a reciprocal induction: the ureteric bud, an outgrowth of the caudal mesonephric duct, must invade the metanephric blastema, and each tissue induces the other. If the bud never forms, the blastema is never induced and involutes, so there is no nephron tissue, no collecting system, and no ureter. Bilateral renal agenesis abolishes fetal urine, which is the main source of amniotic fluid after the first trimester, producing the oligohydramnios sequence with pulmonary hypoplasia, Potter facies, and limb contractures. The adrenal glands are unaffected because they arise separately from coelomic mesothelium and neural crest, which is why they are present but flattened into a discoid shape in the empty renal fossa."
      },
      {
        "text": "Failure of the metanephric kidneys to ascend from the sacral region to the lumbar region",
        "explanation": "Incorrect. Failed ascent produces a pelvic kidney, which is ectopic but functional; urine output and amniotic fluid volume would be normal, and renal tissue would have been found in the pelvis at autopsy. The vignette explicitly states no renal tissue was found anywhere. This would be the correct answer if a low, malrotated but otherwise normal kidney had been identified near the sacral promontory."
      },
      {
        "text": "Fusion of the inferior poles of the two metanephric masses with entrapment at the inferior mesenteric artery",
        "explanation": "Incorrect. This describes horseshoe kidney, in which both kidneys are present and joined at the lower poles, and ascent is arrested when the isthmus catches under the inferior mesenteric artery. Renal function is usually adequate, so amniotic fluid volume is normal. This would be the correct answer if a single U-shaped renal mass had been found lying low across the aorta."
      },
      {
        "text": "Persistence of the cloacal membrane preventing separation of the urogenital sinus from the anorectal canal",
        "explanation": "Incorrect. Failure of the urorectal septum to divide the cloaca produces a persistent cloaca or an imperforate anus with a rectourethral fistula. That anomaly involves the terminal hindgut and urogenital sinus, not the induction of the kidney, and the kidneys themselves would still form. This would be the correct answer if the infant had a single perineal orifice and an absent anal opening with normal-appearing kidneys."
      },
      {
        "text": "Failure of the paramesonephric ducts to fuse in the midline during the eighth week",
        "explanation": "Incorrect. Paramesonephric (Mullerian) duct fusion determines the shape of the uterus and upper vagina; failure produces a bicornuate or didelphys uterus. These structures have no role in urine production and their maldevelopment would not cause oligohydramnios or pulmonary hypoplasia. This would be the correct answer if the question described a heart-shaped uterine cavity discovered during infertility workup."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: No ureteric bud means no induction of the metanephric blastema, and therefore no kidney, no ureter, and no fetal urine. Bilateral agenesis produces the oligohydramnios (Potter) sequence: flat facies, limb contractures, and lethal pulmonary hypoplasia.",
    "lectureSource": "CV3: Genitourinary Embryology",
    "pdfLecture": "CV3",
    "pdfPage": 26,
    "pdfQuote": "metanephric blastema"
  },
  {
    "id": 3,
    "category": "Physiology: Potassium in Trauma",
    "questionText": "A 26-year-old construction worker is extricated after four hours pinned beneath a collapsed concrete wall. On arrival his right thigh is tense and swollen, urine is tea-colored, and creatine kinase is 42,000 U/L. Serum potassium is 7.4 mEq/L, bicarbonate is 14 mEq/L, and the electrocardiogram shows peaked T waves with a QRS duration of 132 ms. The resident asks why the potassium is so high when the patient has been making urine throughout the resuscitation. Which of the following best explains the magnitude of the hyperkalemia in this patient?",
    "options": [
      {
        "text": "Aldosterone deficiency has abolished sodium-potassium exchange in the principal cells of the collecting duct",
        "explanation": "Incorrect. There is nothing in the history to suggest adrenal insufficiency, and the physiologic response to hyperkalemia is a direct stimulation of aldosterone release from the zona glomerulosa, so aldosterone should be high rather than low. Hypoaldosteronism produces a slowly developing type 4 renal tubular acidosis, not an acute potassium of 7.4. This would be the correct answer if he had known Addison disease with hyponatremia and hypotension out of proportion to his losses."
      },
      {
        "text": "The filtered load of potassium has fallen because the glomerular filtration rate is markedly reduced",
        "explanation": "Incorrect. This misstates the physiology of potassium handling. Essentially all filtered potassium is reabsorbed by the end of the thick ascending limb, and the potassium that appears in the urine is secreted by the principal cells of the late distal tubule and collecting duct. Because excretion is a secretory rather than a filtration process, a fall in filtered load is not the primary driver, and the vignette states he is still producing urine. This would be the correct answer if potassium excretion depended on filtration the way inulin clearance does."
      },
      {
        "text": "An increased distal tubular flow rate is washing potassium back into the peritubular capillaries",
        "explanation": "Incorrect. High distal flow rate does the opposite: it sweeps secreted potassium downstream, keeps the luminal potassium concentration low, and thereby maintains the gradient that favors continued secretion. High flow enhances kaliuresis rather than causing retention. This would be the correct answer if the question asked why a patient on a loop diuretic becomes hypokalemic."
      },
      {
        "text": "Necrotic myocytes have released massive intracellular potassium, with acidemia shifting more out of cells",
        "explanation": "Correct. About 98 percent of total body potassium is intracellular, held there by the Na-K-ATPase at a concentration near 150 mEq/L against roughly 4 mEq/L outside, so lysis of a large muscle mass dumps an enormous potassium load into a small extracellular space. Rhabdomyolysis after prolonged crush is the classic setting, and the creatine kinase of 42,000 with pigmented urine confirms it. The accompanying metabolic acidosis worsens the problem by promoting potassium exit from cells as hydrogen ion enters to be buffered. The renal response, even with preserved urine output, cannot keep pace with the rate of release, and the widened QRS marks this as a cardiac emergency."
      },
      {
        "text": "Insulin excess has driven potassium into cells and triggered compensatory renal potassium retention",
        "explanation": "Incorrect. Insulin drives potassium into cells by stimulating the Na-K-ATPase and would lower, not raise, the serum potassium; that is precisely why insulin with dextrose is used as acute therapy for hyperkalemia. There is also no reason for insulin excess in this patient. This would be the correct answer if the question asked which intervention would most rapidly shift his potassium intracellularly."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: 98 percent of body potassium is intracellular. Any process that lyses cells (rhabdomyolysis, tumor lysis, hemolysis) or shifts potassium out (acidemia, insulin deficiency, beta blockade, digoxin toxicity) can cause life-threatening hyperkalemia even with intact renal function.",
    "lectureSource": "CV9: K+, Ca++, Mg++ and Phosphate Transport",
    "pdfLecture": "CV9",
    "pdfPage": 8,
    "pdfQuote": "Transfer of excess K+ into cells: Rapid (A)."
  },
  {
    "id": 4,
    "category": "Physiology: Starling Forces",
    "questionText": "A 34-year-old woman is admitted with 45 percent total body surface area flame burns. Over the first eight hours she receives 6 liters of lactated Ringer solution, yet she remains tachycardic at 128/min with a blood pressure of 92/58 mmHg. Her extremities are grossly edematous, including areas of unburned skin, and her serum albumin has fallen to 2.1 g/dL. The intensivist explains that the fluid she is receiving is not staying where it is needed. Which alteration in Starling forces best accounts for the generalized edema in this patient?",
    "options": [
      {
        "text": "A rise in interstitial hydrostatic pressure that mechanically drives fluid back into the capillary",
        "explanation": "Incorrect. Interstitial hydrostatic pressure does rise as edema accumulates, and it acts as a brake that opposes further filtration, so it limits edema rather than causing it. Naming it as the cause reverses the direction of the force. This would be the correct answer if the question asked what prevents edema from progressing indefinitely once the interstitium is expanded."
      },
      {
        "text": "A higher capillary filtration coefficient with a fall in the reflection coefficient for protein",
        "explanation": "Correct. Burn injury releases inflammatory mediators that widen interendothelial clefts, so the capillary becomes both more permeable to water (a higher filtration coefficient, Kf) and less able to hold protein back (a lower reflection coefficient, sigma). Because the effective oncotic gradient in the Starling equation is multiplied by sigma, a fall in sigma means that even a normal albumin concentration difference can no longer oppose filtration. Protein leaks into the interstitium, dissipating the gradient from both directions, so plasma volume falls while interstitial volume rises. This is why crystalloid resuscitation of a large burn requires such enormous volumes and why edema appears even in unburned tissue once mediators become systemic."
      },
      {
        "text": "Obstruction of lymphatic outflow preventing return of interstitial fluid to the circulation",
        "explanation": "Incorrect. Lymphatics are in fact recruited maximally in burn injury and can increase their flow many-fold; the problem is that filtration outstrips even that expanded capacity, not that the lymphatics are blocked. Primary lymphatic obstruction produces a localized, protein-rich, non-pitting lymphedema confined to the drainage territory. This would be the correct answer if she had unilateral arm swelling after axillary node dissection."
      },
      {
        "text": "A selective rise in capillary hydrostatic pressure caused by post-capillary venular constriction",
        "explanation": "Incorrect. Raising capillary hydrostatic pressure by venous constriction or obstruction is a real mechanism of edema, but it produces a protein-poor transudate in the dependent drainage territory and is not what happens systemically in burns. This patient is hypotensive, which argues against a generalized rise in capillary hydrostatic pressure. This would be the correct answer if she had right heart failure with elevated venous pressures and dependent pitting edema."
      },
      {
        "text": "A fall in plasma oncotic pressure alone, caused by dilution from the administered crystalloid",
        "explanation": "Incorrect. Dilutional hypoalbuminemia certainly contributes and is reflected in the albumin of 2.1 g/dL, but by itself a fall in plasma oncotic pressure cannot explain why fluid also fails to be held in the vascular space of unburned tissue where the endothelium is intact. The distinguishing feature of burn shock is loss of the barrier itself. This would be the correct answer if she had nephrotic syndrome with heavy proteinuria and structurally normal capillaries."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Net filtration = Kf x [(Pc - Pi) - sigma(pi_c - pi_i)]. Inflammation raises Kf and lowers sigma, so the oncotic gradient loses its power to oppose filtration. That is why burns and sepsis cause edema despite hypotension.",
    "lectureSource": "CV4: Solute Transport and Fluid Movement",
    "pdfLecture": "CV4",
    "pdfPage": 23,
    "pdfQuote": "Capillary Filtration Coefficient"
  },
  {
    "id": 5,
    "category": "OMM: Point of Balanced Tension",
    "questionText": "A 58-year-old woman with a three-week history of right wrist pain after a fall is being treated with an indirect ligamentous technique. The physician stacks the wrist through several planes, then reports that at one particular position the tissues under her hands feel simultaneously quiet in every direction and she senses a subtle rhythmic motion begin beneath her fingers. She holds this position without adding force and waits. A student observing asks what the physician is actually doing at this moment. Which of the following best describes the state the physician has established?",
    "options": [
      {
        "text": "The joint is carried to its restrictive barrier and held so that ligamentous creep lengthens the shortened tissue",
        "explanation": "Incorrect. Engaging and holding the restrictive barrier describes a direct technique such as muscle energy or direct myofascial release. Balanced ligamentous tension is an indirect method and deliberately avoids loading the barrier, because loading it re-provokes the very proprioceptive activity the physician is trying to quiet. This would be the correct answer if the technique described were a direct myofascial release."
      },
      {
        "text": "A high-velocity, low-amplitude thrust is being prepared by removing all of the slack from the articulation",
        "explanation": "Incorrect. Removing slack to localize a thrust is the setup for HVLA, which ends with a rapid, short-amplitude impulse through a restrictive barrier. In this vignette no thrust is delivered; the physician holds and waits, which is definitionally not HVLA. This would be the correct answer if the description had ended with a corrective impulse and an audible release."
      },
      {
        "text": "Traction has been applied along the long axis of the joint to separate the articular surfaces and unload the ligaments",
        "explanation": "Incorrect. Long-axis traction unloads a joint but does not by itself find a balance point, and BLT works through disengagement, exaggeration, and balance rather than through sustained distraction alone. Pure traction would in fact increase, not equalize, tension in some ligamentous fibers. This would be the correct answer if the technique described were articulatory traction for a jammed radiocarpal joint."
      },
      {
        "text": "The tissues are being held in a position that maximizes proprioceptive input so the nervous system can recalibrate",
        "explanation": "Incorrect. This inverts the intent. BLT seeks the position of least proprioceptive bombardment, the point where the mechanoreceptors in the ligamentous articular mechanism fall quiet, which is what allows the inherent forces to reorganize the articulation. Maximizing afferent traffic would perpetuate the reflex hypertonicity. This would be the correct answer if the technique relied on provoking a stretch reflex, as in a rapid muscle stretch."
      },
      {
        "text": "The articulation is positioned so tension is equal in all its ligaments and inherent forces effect the correction",
        "explanation": "Correct. The point of balanced tension is the position at which the tensions in all the ligaments of a joint are equalized and the proprioceptive input from those ligaments is minimized. Sutherland taught that the ligaments both guide normal motion and carry the memory of the injuring force, so the ligamentous articular mechanism is treated as the primary agent of correction rather than the muscles. Once balance is found the physician does not push; the inherent forces of the body, expressed as respiratory cooperation and fluid fluctuation, complete the release. The subtle rhythmic motion felt under the hands is that inherent activity beginning, and it is the signal to hold rather than to add force."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: BLT is an INDIRECT technique. Disengage, exaggerate, and balance to the point of least ligamentous tension, then let inherent forces (respiratory cooperation and fluid fluctuation) do the correcting. The physician never pushes through the barrier.",
    "lectureSource": "CV1: Principles of Balanced Ligamentous Tension",
    "pdfLecture": "CV1",
    "pdfPage": 29
  },
  {
    "id": 6,
    "category": "Physiology: Renal Glucose Handling",
    "questionText": "A 62-year-old man with type 2 diabetes and heart failure with reduced ejection fraction is started on empagliflozin. His hemoglobin A1c is 8.4 percent and his fasting plasma glucose is 168 mg/dL. Two weeks later a urinalysis shows 3+ glucose with no ketones and no protein, and his creatinine has risen slightly from 1.1 to 1.3 mg/dL before stabilizing. He is alarmed that sugar is now appearing in his urine. Which of the following best explains the glycosuria produced by this drug?",
    "options": [
      {
        "text": "The drug increases the glomerular filtration rate so that the filtered glucose load exceeds an unchanged transport maximum",
        "explanation": "Incorrect. SGLT2 inhibitors actually cause a small early decline in GFR, reflected here in the creatinine rising from 1.1 to 1.3, because increased distal sodium delivery activates tubuloglomerular feedback and constricts the afferent arteriole. That hemodynamic effect is thought to underlie their long-term renal protection. This would be the correct answer if the mechanism of glycosuria were hyperfiltration, as occurs in early untreated diabetic nephropathy."
      },
      {
        "text": "The drug blocks the apical sodium-glucose cotransporter in the early proximal tubule, lowering the reabsorptive threshold for glucose",
        "explanation": "Correct. Filtered glucose is normally reclaimed almost entirely in the proximal tubule, with SGLT2 in the S1 and S2 segments handling roughly 90 percent using the sodium gradient established by the basolateral Na-K-ATPase as its energy source, and SGLT1 in S3 recovering the remainder. Glucose then exits the cell into the interstitium through GLUT2. Because this is a saturable carrier-mediated system, glycosuria normally begins only once the filtered load exceeds the transport maximum, at a plasma glucose near 180 to 200 mg/dL. Blocking SGLT2 lowers that threshold, so this patient spills glucose at a plasma concentration of 168 mg/dL that would previously have been fully reabsorbed."
      },
      {
        "text": "The drug inhibits the basolateral GLUT2 transporter so that glucose accumulates in the tubular cell and leaks back into the lumen",
        "explanation": "Incorrect. GLUT2 is the facilitated-diffusion exit step on the basolateral membrane, and it is not the target of these agents. Naming it also gets the direction of the leak wrong, since glucose trapped in the cell would not readily cross back through the apical SGLT against its own accumulated gradient. This would be the correct answer if the question described Fanconi syndrome with a generalized proximal tubular exit defect."
      },
      {
        "text": "The drug produces an osmotic diuresis that mechanically washes glucose past the transporters before they can bind it",
        "explanation": "Incorrect. This reverses cause and effect. The osmotic diuresis is a consequence of unreabsorbed glucose remaining in the tubular lumen and holding water with it, not the reason the glucose fails to be reabsorbed in the first place. This would be the correct answer if the question asked why the patient also develops polyuria and mild volume contraction on the drug."
      },
      {
        "text": "The drug saturates the organic acid secretory system, causing glucose to be secreted into the proximal tubular lumen",
        "explanation": "Incorrect. Glucose is not a substrate for the organic acid secretory system, which handles anions such as PAH, urate, penicillin, and many diuretics via OAT transporters on the basolateral membrane. Glucose appears in the urine by escaping reabsorption, never by being secreted. This would be the correct answer if the question concerned probenecid competing with penicillin for tubular secretion."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Glucose reabsorption is carrier-mediated and therefore saturable. Threshold is about 180-200 mg/dL and Tm is reached near 350 mg/dL; the rounded 'splay' between them reflects nephron heterogeneity. SGLT2 inhibitors simply move the threshold down.",
    "lectureSource": "CV10: Urea, Glucose and Organic Solute Transport",
    "pdfLecture": "CV10",
    "pdfPage": 5,
    "pdfQuote": "Can generate a far larger glucose gradient across the apical membrane."
  },
  {
    "id": 7,
    "category": "Physiology: Effective Circulating Volume",
    "questionText": "A 69-year-old man with ischemic cardiomyopathy and an ejection fraction of 22 percent is admitted with a 12-pound weight gain, jugular venous distension to the angle of the jaw, and pitting edema to the thighs. Despite this obvious excess of total body sodium and water, his plasma renin activity, aldosterone, and plasma norepinephrine are all markedly elevated, and his urine sodium is 8 mEq/L. Serum sodium is 128 mEq/L. Which of the following best explains why his kidneys continue to retain sodium avidly in the face of gross volume overload?",
    "options": [
      {
        "text": "Arterial baroreceptors and the juxtaglomerular apparatus sense effective circulating, not total extracellular, volume",
        "explanation": "Correct. Sodium excretion is governed by the adequacy of arterial filling as sensed by the carotid and aortic baroreceptors, the renal afferent arteriole, and the juxtaglomerular apparatus, rather than by the absolute size of the extracellular fluid compartment. In low-output heart failure the arterial tree is underfilled despite an expanded venous and interstitial volume, so these sensors report hypovolemia. The result is a maximal neurohormonal response: sympathetic activation, renin release with angiotensin II and aldosterone generation, and non-osmotic ADH release. The ADH component explains the hyponatremia of 128, and the sodium avidity explains the urine sodium of 8, so the kidney behaves exactly as it would after hemorrhage even though the patient is grossly volume overloaded."
      },
      {
        "text": "Atrial natriuretic peptide is suppressed because the atria are chronically stretched and have become refractory to volume",
        "explanation": "Incorrect. Atrial natriuretic peptide and BNP are in fact markedly elevated in decompensated heart failure, which is why BNP is used diagnostically. The problem is that their natriuretic effect is overwhelmed by far stronger antinatriuretic signals, a state often called natriuretic peptide resistance, not that they are suppressed. This would be the correct answer if the vignette had reported a low BNP in a patient with dyspnea."
      },
      {
        "text": "The reduced glomerular filtration rate has lowered the filtered sodium load below the reabsorptive capacity of the tubule",
        "explanation": "Incorrect. Even a substantially reduced GFR still delivers a filtered sodium load enormously larger than daily intake, and glomerulotubular balance keeps fractional reabsorption proportional, so a low GFR alone does not create sodium retention. Excretion is set by regulated distal reabsorption, not by whether the filtered load exceeds a ceiling. This would be the correct answer if sodium excretion were a simple overflow phenomenon."
      },
      {
        "text": "Hyponatremia has directly stimulated aldosterone release from the zona glomerulosa, driving avid sodium reabsorption",
        "explanation": "Incorrect. Aldosterone release is stimulated by angiotensin II and by hyperkalemia; a low serum sodium is a very weak direct stimulus and is not the operative mechanism here. The hyponatremia is a consequence of water retention driven by ADH, not the primary trigger for the sodium avidity. This would be the correct answer if the question asked which electrolyte abnormality most potently stimulates aldosterone, where the answer would be a high potassium."
      },
      {
        "text": "Elevated renal venous pressure has increased the peritubular capillary oncotic pressure, enhancing proximal reabsorption",
        "explanation": "Incorrect. Renal venous congestion does contribute to sodium retention in heart failure, but it does so by raising renal interstitial and venous hydrostatic pressure and by lowering the arteriovenous perfusion gradient, not by raising peritubular oncotic pressure. It also cannot explain the systemic neurohormonal activation described. This would be the correct answer if the question asked specifically how abdominal compartment syndrome impairs renal function."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: The kidney defends EFFECTIVE circulating volume (arterial filling), not total body volume. In heart failure, cirrhosis, and nephrosis the arterial tree is underfilled, so RAAS, sympathetics, and ADH all fire despite massive edema.",
    "lectureSource": "CV8: Regulation of Sodium and Water Excretion",
    "pdfLecture": "CV8",
    "pdfPage": 16,
    "pdfQuote": "Effective Circulating Volume (ECV) = portion of arterial"
  },
  {
    "id": 8,
    "category": "Physiology: Juxtaglomerular Apparatus",
    "questionText": "A 19-year-old woman is evaluated for years of muscle cramps, fatigue, and polyuria. She is normotensive at 108/68 mmHg and has no edema. Laboratory studies show potassium 2.6 mEq/L, bicarbonate 34 mEq/L, magnesium 1.3 mg/dL, and a high urinary calcium. Plasma renin activity and aldosterone are both markedly elevated, and renal biopsy shows striking hyperplasia of a specific cell population in the wall of the afferent arteriole. A genetic panel identifies a loss-of-function mutation in the Na-K-2Cl cotransporter. Which structure is hyperplastic, and what signal from its neighboring cells is driving that hyperplasia?",
    "options": [
      {
        "text": "Mesangial cells, responding to angiotensin II generated locally within the glomerular tuft",
        "explanation": "Incorrect. Mesangial cells sit between the glomerular capillary loops, provide structural support, and contract to modulate the filtering surface area, but they are not the renin-secreting population and their expansion is a feature of diabetic and immune-complex glomerular disease. The biopsy specifically localizes the hyperplasia to the arteriolar wall. This would be the correct answer if the biopsy had shown mesangial matrix expansion with Kimmelstiel-Wilson nodules."
      },
      {
        "text": "Extraglomerular mesangial (Lacis) cells, responding to increased sympathetic discharge from the renal nerves",
        "explanation": "Incorrect. Extraglomerular mesangial cells occupy the angle between the afferent and efferent arterioles and are thought to relay signals within the juxtaglomerular apparatus, but they are not the granular renin-storing cells and do not undergo the classic hyperplasia of this disorder. Sympathetic input does stimulate renin release, but by acting on beta-1 receptors on the granular cells themselves. This would be the correct answer if the question asked which cells form the communicating bridge of the JGA."
      },
      {
        "text": "Podocytes, responding to a rise in glomerular capillary hydrostatic pressure transmitted from the efferent arteriole",
        "explanation": "Incorrect. Podocytes are visceral epithelial cells whose foot processes and slit diaphragms form the final layer of the filtration barrier; they are terminally differentiated and characteristically do not proliferate, which is why their loss is irreversible. They also lie in Bowman space, not in the arteriolar wall. This would be the correct answer if the biopsy had shown foot process effacement in a patient with nephrotic-range proteinuria."
      },
      {
        "text": "Granular juxtaglomerular cells, responding to reduced sodium chloride delivery sensed by the macula densa",
        "explanation": "Correct. This is Bartter syndrome, in which loss of the NKCC2 cotransporter in the thick ascending limb produces a loop-diuretic-like state: salt wasting, hypokalemic metabolic alkalosis, hypomagnesemia, and hypercalciuria from loss of the lumen-positive potential that drives paracellular divalent cation reabsorption. Because sodium chloride uptake at the thick limb is impaired, the macula densa senses low sodium chloride at its own apical NKCC2 despite abundant luminal salt, and signals through prostaglandin E2 to the granular cells of the afferent arteriole. Chronic maximal stimulation makes those granular cells, which are modified smooth muscle cells that synthesize and store renin, hyperplastic. The result is the very high renin and aldosterone with a normal blood pressure that characterize the syndrome."
      },
      {
        "text": "Intercalated cells of the collecting duct, responding to the chronic metabolic alkalosis",
        "explanation": "Incorrect. Intercalated cells regulate acid-base handling in the collecting duct through the H-ATPase and pendrin, and type B cells do secrete bicarbonate in alkalosis, but they lie in the collecting duct rather than in the wall of the afferent arteriole and have no role in renin secretion. This would be the correct answer if the question asked which cell secretes bicarbonate during a chronic alkalosis."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: The JGA has three parts: granular (juxtaglomerular) cells in the afferent arteriole that make renin, the macula densa of the thick ascending limb that senses luminal NaCl, and the extraglomerular mesangial cells that link them. Low macula densa NaCl means more renin.",
    "lectureSource": "CV6: Organization of the Urinary System",
    "pdfLecture": "CV6",
    "pdfPage": 17,
    "pdfQuote": "Granular cells (GC) of the afferent arterioles (juxtaglomerular or"
  },
  {
    "id": 9,
    "category": "Physiology: Regulation of Distal K+ Secretion",
    "questionText": "A 74-year-old woman on chronic furosemide for heart failure is admitted with generalized weakness. Serum potassium is 2.7 mEq/L and bicarbonate is 33 mEq/L. Her physician notes that she has two separate drivers of renal potassium loss operating at once, and that the potassium she is losing is not filtered potassium escaping reabsorption but rather potassium actively added to the tubular fluid at a specific site. At which nephron segment, and by which cell type, is the regulated step in potassium excretion taking place?",
    "options": [
      {
        "text": "The proximal convoluted tubule, where potassium is reabsorbed passively along with sodium and water through the paracellular pathway",
        "explanation": "Incorrect. The proximal tubule does reabsorb roughly 65 percent of filtered potassium, largely by solvent drag and paracellular diffusion in parallel with sodium and water, but this reabsorption is essentially fixed and unregulated. Because it is not modulated by aldosterone, flow, or dietary intake, it cannot be the step that sets urinary potassium output. This would be the correct answer if the question asked where the bulk of filtered potassium is reclaimed."
      },
      {
        "text": "The thick ascending limb, where the Na-K-2Cl cotransporter reabsorbs potassium and recycles it through apical ROMK channels",
        "explanation": "Incorrect. The thick ascending limb reabsorbs about 25 to 30 percent of filtered potassium through NKCC2, and much of that potassium is recycled back into the lumen through apical ROMK to generate the lumen-positive potential. This is important physiology and is precisely what furosemide blocks, but it is a reabsorptive segment, not the site where excretion is regulated. This would be the correct answer if the question asked which transporter furosemide inhibits."
      },
      {
        "text": "The principal cells of the late distal tubule and cortical collecting duct, secreting potassium via apical ROMK and BK channels",
        "explanation": "Correct. Nearly all filtered potassium is reclaimed by the end of the thick ascending limb, so the potassium that appears in the urine is almost entirely secreted downstream. Principal cells take potassium up across the basolateral membrane via the Na-K-ATPase and release it into the lumen through ROMK and, at high flow, the flow-activated BK channel. Aldosterone amplifies every step by increasing ENaC, pump activity, and channel number, and electrogenic sodium entry through ENaC makes the lumen negative, which further favors potassium exit. Both of this patient's drivers converge here: furosemide raises distal flow and distal sodium delivery, and contraction-induced secondary hyperaldosteronism raises aldosterone, so secretion is maximal."
      },
      {
        "text": "The type A intercalated cells of the collecting duct, using the apical H-K-ATPase to exchange potassium for secreted hydrogen",
        "explanation": "Incorrect. Type A intercalated cells run the H-K-ATPase in the direction of potassium reabsorption in exchange for secreted hydrogen, which is the mechanism that defends potassium during dietary restriction and that couples potassium depletion to metabolic alkalosis. They conserve potassium rather than excrete it. This would be the correct answer if the question asked how chronic hypokalemia sustains a metabolic alkalosis."
      },
      {
        "text": "The descending thin limb of the loop of Henle, where potassium is secreted into the lumen as part of medullary recycling",
        "explanation": "Incorrect. Potassium does undergo medullary recycling, entering the thin descending limb from the interstitium, but this is a passive process that helps maintain the medullary potassium concentration and contributes nothing to regulated excretion. The thin descending limb is also freely permeable to water and essentially impermeable to sodium, so it is not a site of regulated ion transport. This would be the correct answer if the question asked about countercurrent handling of potassium in the medulla."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Urinary potassium is SECRETED, not filtered-and-spared. The regulated step is the principal cell of the late distal tubule and cortical collecting duct. The four amplifiers are aldosterone, high distal flow, high distal sodium delivery, and alkalosis.",
    "lectureSource": "CV9: K+, Ca++, Mg++ and Phosphate Transport",
    "pdfLecture": "CV9",
    "pdfPage": 15,
    "pdfQuote": "K+ Reabsorption in the Collecting Tubule"
  },
  {
    "id": 10,
    "category": "Pathology: Horseshoe Kidney",
    "questionText": "A 24-year-old woman with primary amenorrhea, short stature, a webbed neck, and a wide carrying angle undergoes abdominal imaging as part of her evaluation. CT demonstrates a single U-shaped renal mass lying anterior to the aorta at the level of the L3-L4 vertebrae, with the two renal masses joined across the midline by a band of parenchyma at their lower poles. Both collecting systems drain anteriorly over this band. Which of the following best explains why this renal mass sits abnormally low in the abdomen?",
    "options": [
      {
        "text": "The metanephric blastema was induced at an abnormally caudal level, so the kidney never had a cranial position to reach",
        "explanation": "Incorrect. The metanephric blastema is always induced in the sacral region; a low starting position is normal for every kidney. What distinguishes an ectopic kidney is failure of the subsequent ascent, not an abnormal site of induction. This would be the correct answer if the site of induction rather than the ascent were the variable step."
      },
      {
        "text": "Failure of the mesonephric duct to regress left a fibrous tether anchoring the kidney to the pelvic floor",
        "explanation": "Incorrect. Mesonephric duct remnants in the female persist as the epoophoron, paroophoron, and Gartner duct cysts along the broad ligament and lateral vaginal wall; they are not attached to the kidney and do not restrain its ascent. This would be the correct answer if the question described a cystic structure in the anterolateral vaginal wall."
      },
      {
        "text": "The ureteric bud branched abnormally early, producing a duplicated collecting system that mechanically prevented ascent",
        "explanation": "Incorrect. Early or premature branching of the ureteric bud produces a bifid ureter or a fully duplicated collecting system, which is associated with reflux and obstruction of the upper pole moiety, but it does not fuse the two kidneys or prevent ascent. This would be the correct answer if imaging had shown two ureters draining a single kidney with an ectopic insertion of the upper pole ureter."
      },
      {
        "text": "The fused inferior poles became trapped beneath the inferior mesenteric artery during ascent from the sacral region",
        "explanation": "Correct. The metanephroi begin in the sacral region and appear to ascend as the embryonic trunk elongates, normally reaching the upper lumbar level and receiving progressively more cranial arterial supply along the way. When the lower poles fuse across the midline, the resulting isthmus catches on the root of the inferior mesenteric artery as it leaves the aorta, and ascent stops at about L3-L4. This also explains the anteriorly directed ureters, since the fused kidney cannot complete its normal medial rotation. Horseshoe kidney is strongly associated with Turner syndrome, which fits the short stature, webbed neck, increased carrying angle, and primary amenorrhea described here, and it predisposes to obstruction, stones, and infection."
      },
      {
        "text": "Persistent fetal lobulation prevented the kidney from separating from the adrenal gland, which held it in place",
        "explanation": "Incorrect. Fetal lobulation is a normal transient surface feature that may persist harmlessly into adulthood as an incidental finding; it has nothing to do with renal position, and the adrenal is not fused to the kidney but simply caps it. This would be the correct answer if the question asked about an incidental bumpy renal contour mistaken for scarring."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Horseshoe kidney is trapped by the INFERIOR MESENTERIC ARTERY during ascent and sits at L3-L4. Look for it in Turner syndrome (and trisomy 18); complications are hydronephrosis, stones, infection, and increased vulnerability to blunt trauma.",
    "lectureSource": "CV3: Genitourinary Embryology",
    "pdfLecture": "CV3",
    "pdfPage": 30,
    "pdfQuote": "Horseshoe Kidney"
  },
  {
    "id": 11,
    "category": "Renal Physiology: Clearance and Formulas",
    "questionText": "A 40-year-old healthy volunteer participates in a renal physiology study. He receives a continuous infusion of para-aminohippurate and inulin until steady state. Measurements show a plasma PAH concentration of 0.02 mg/mL, a urine PAH concentration of 12 mg/mL, and a urine flow rate of 1.0 mL/min. His hematocrit is 45 percent, and his inulin clearance is 120 mL/min. The investigator asks him to calculate renal blood flow and then the fraction of plasma entering the kidney that is filtered. Which of the following pairs of values is correct?",
    "options": [
      {
        "text": "Renal blood flow about 1090 mL/min and filtration fraction about 0.20",
        "explanation": "Correct. PAH clearance estimates effective renal plasma flow because PAH is both filtered and avidly secreted, so nearly all of it is cleared in a single pass. Clearance equals urine concentration times urine flow divided by plasma concentration, which is (12 x 1.0) / 0.02, or 600 mL/min of plasma. Renal blood flow is renal plasma flow divided by (1 minus hematocrit), so 600 / 0.55 is roughly 1090 mL/min, consistent with the kidneys receiving about 20 percent of a 5 L/min cardiac output. Filtration fraction is GFR divided by renal plasma flow, or 120 / 600, which equals 0.20, the normal value of about one fifth of the plasma delivered being filtered."
      },
      {
        "text": "Renal blood flow about 600 mL/min and filtration fraction about 0.20",
        "explanation": "Incorrect. The filtration fraction is right, but 600 mL/min is the renal PLASMA flow, not the blood flow. Converting plasma flow to blood flow requires dividing by one minus the hematocrit to account for the red cell volume that also perfuses the kidney. This would be the correct answer if the question had asked only for effective renal plasma flow."
      },
      {
        "text": "Renal blood flow about 1090 mL/min and filtration fraction about 0.11",
        "explanation": "Incorrect. The blood flow is right, but 0.11 is what you get by dividing GFR by renal BLOOD flow rather than by renal plasma flow. Only plasma is available for filtration, since red cells cannot cross the glomerular barrier, so filtration fraction is defined as GFR divided by renal plasma flow. This would be the correct answer if red cells were filterable."
      },
      {
        "text": "Renal blood flow about 270 mL/min and filtration fraction about 0.45",
        "explanation": "Incorrect. These values come from multiplying rather than dividing by the hematocrit terms and would imply that the kidneys receive only about 5 percent of cardiac output while filtering nearly half of the plasma delivered to them. Both figures are far outside physiologic range for a healthy adult. This would be the correct answer only if the arithmetic operations were inverted."
      },
      {
        "text": "Renal blood flow about 1090 mL/min and filtration fraction about 5.0",
        "explanation": "Incorrect. A filtration fraction greater than one is physically impossible, since it would mean filtering more plasma than enters the kidney. This value comes from inverting the ratio and dividing renal plasma flow by GFR. This would be the correct answer only if filtration fraction were defined as RPF divided by GFR."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Clearance = (U x V) / P. Inulin clearance = GFR (filtered only, not secreted or reabsorbed). PAH clearance = effective RPF (filtered AND secreted). RBF = RPF / (1 - Hct). Filtration fraction = GFR / RPF, normally about 0.20.",
    "lectureSource": "CV7: GFR, Renal Blood Flow and Clearance",
    "pdfLecture": "CV7",
    "pdfPage": 11,
    "pdfQuote": "RBF: total blood volume delivered to kidney (global flow)"
  },
  {
    "id": 12,
    "category": "Physiology: IV Fluids and Osmolality",
    "questionText": "A 58-year-old woman is admitted after a prolonged seizure. In the field she was given 1 liter of 5 percent dextrose in water because the paramedic could not distinguish her from a hypoglycemic patient. Her serum sodium on arrival is 121 mEq/L, down from a documented 134 mEq/L two days earlier, and she is now obtunded. A head CT shows early cerebral edema. The attending asks the team to predict what happened to each fluid compartment after that liter was infused. Which of the following best describes the effect of 1 liter of 5 percent dextrose in water on body fluid compartments?",
    "options": [
      {
        "text": "Extracellular volume increases, intracellular volume is unchanged, and osmolarity rises",
        "explanation": "Incorrect. This describes isotonic saline, which stays entirely in the extracellular compartment because its effective osmoles cannot cross cell membranes, leaving intracellular volume and osmolarity unchanged. Also note that isotonic saline does not raise osmolarity. This would be the correct answer if the patient had received normal saline for hypovolemia."
      },
      {
        "text": "Extracellular volume increases, intracellular volume decreases, and osmolarity rises",
        "explanation": "Incorrect. This is the pattern of hypertonic saline, in which added effective osmoles pull water out of cells; it is used deliberately in symptomatic hyponatremia. It is the opposite of what happened here, and is in fact the treatment this patient now needs. This would be the correct answer if she had been given 3 percent saline."
      },
      {
        "text": "Both compartments shrink and osmolarity rises",
        "explanation": "Incorrect. Loss of volume from both compartments with a rising osmolarity describes pure water loss, as in diabetes insipidus or insensible losses without replacement. No fluid was lost in this vignette; a liter was gained. This would be the correct answer if she had untreated central diabetes insipidus and no access to water."
      },
      {
        "text": "Extracellular volume increases and osmolarity is unchanged, with no shift across the cell membrane",
        "explanation": "Incorrect. This is again the isotonic saline pattern. It cannot describe D5W because once the dextrose is metabolized there are no effective osmoles left to hold the water in the extracellular space. This would be the correct answer if the infused solution had contained a solute restricted to the extracellular compartment."
      },
      {
        "text": "Both compartments expand and osmolarity falls, with roughly two thirds of the volume entering cells",
        "explanation": "Correct. The dextrose in D5W is metabolized rapidly, so what is actually delivered is a liter of solute-free water. Free water distributes across total body water according to the size of each compartment, and since intracellular fluid is about two thirds of total body water, roughly 667 mL enters cells and 333 mL remains extracellular. Osmolarity falls in both compartments equally because water moves until osmotic equilibrium is restored. In a patient whose sodium was already 134, this pushed her to 121 and drove water into brain cells, which is precisely the mechanism of the cerebral edema and obtundation described."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: D5W = free water; it distributes 2/3 intracellular and 1/3 extracellular and lowers osmolarity everywhere. Isotonic saline stays extracellular. Hypertonic saline expands the ECF and shrinks cells. Match the fluid to the compartment you intend to fill.",
    "lectureSource": "CV4: Solute Transport and Fluid Movement",
    "pdfLecture": "CV4",
    "pdfPage": 26,
    "pdfQuote": "volume and composition of the body fluid compartments."
  },
  {
    "id": 13,
    "category": "OMM: Cervical BLT",
    "questionText": "A 31-year-old woman presents with left-sided neck pain three days after a rear-end collision. Structural exam localizes a somatic dysfunction at C4 that is flexed, rotated left, and sidebent left. She is exquisitely guarded, and the physician judges that any direct engagement of the barrier would be poorly tolerated. He chooses a ligamentous articular approach, placing his fingers to support the articular pillars. Which of the following describes the correct positioning for this technique?",
    "options": [
      {
        "text": "Carry C4 into extension, right rotation, and right sidebending until the restrictive barrier is firmly engaged",
        "explanation": "Incorrect. This is the direct approach: motion is taken toward the barrier, away from the position of ease. It is the setup for muscle energy or HVLA and is exactly what the physician has decided to avoid in this acutely guarded patient. This would be the correct answer if he had elected a direct technique such as muscle energy with isometric contraction."
      },
      {
        "text": "Apply a rapid low-amplitude thrust into left rotation once the segment is localized at the restrictive barrier",
        "explanation": "Incorrect. A thrust is not part of balanced ligamentous tension, and thrusting into the direction of ease would not correct anything. In a patient three days out from a whiplash mechanism with significant guarding, cervical HVLA would also be a questionable choice on safety grounds. This would be the correct answer if the technique described were a cervical HVLA."
      },
      {
        "text": "Carry C4 into flexion, left rotation, and left sidebending, then add compression or traction to balance tension",
        "explanation": "Correct. Balanced ligamentous tension is indirect, so the segment is positioned into its freedoms of motion, which for a flexed, rotated left, sidebent left dysfunction means flexion, left rotation, and left sidebending. That is the disengagement and exaggeration step. The physician then adds a small compressive or distractive vector along the long axis to fine-tune the loading of the articular ligaments until tension is equal in every direction, which is the point of balanced tension. He holds there and allows respiratory cooperation and the inherent fluid fluctuation to complete the release, monitoring for a softening and a return of symmetric motion before slowly retesting."
      },
      {
        "text": "Position C4 in neutral and apply steady sustained anterior-to-posterior pressure on the C4 spinous process",
        "explanation": "Incorrect. A neutral position with sustained unidirectional pressure is a direct articulatory or springing maneuver and does not seek a balance point among the ligaments. It also ignores the three-dimensional nature of the dysfunction described. This would be the correct answer if the technique were a direct articulatory springing technique for a thoracic segment."
      },
      {
        "text": "Have the patient contract against resistance into right rotation for three to five seconds, then move to the new barrier",
        "explanation": "Incorrect. This is muscle energy, a direct technique using post-isometric relaxation, and it engages the barrier repeatedly. It also relies on the patient's muscular effort rather than on the ligamentous articular mechanism. This would be the correct answer if the question had asked how to perform cervical muscle energy for the same dysfunction."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: BLT positions INTO the ease (the named freedoms of the dysfunction), then adds compression or traction to equalize ligamentous tension. Because no barrier is engaged, it is well tolerated in acute, guarded, frail, or post-traumatic patients.",
    "lectureSource": "CV2: BLT - Cervical, Thoracic, Lumbosacral, Fibula",
    "pdfLecture": "CV2",
    "pdfPage": 8,
    "pdfQuote": "BLT of the Cervical Spine (C2-7)"
  },
  {
    "id": 14,
    "category": "Physiology: Urea and BUN Interpretation",
    "questionText": "Three patients are admitted on the same evening. Patient A is a 78-year-old man with 10 hours of melena, a hemoglobin of 7.9 g/dL, BUN 68 mg/dL, and creatinine 1.0 mg/dL. Patient B is a 22-year-old woman with anorexia nervosa, a BUN of 4 mg/dL, and a creatinine of 0.5 mg/dL. Patient C is a 60-year-old man with end-stage cirrhosis, a BUN of 5 mg/dL, an ammonia of 96 micromol/L, and an INR of 2.3. The resident is asked to explain why the BUN in each case does not simply track the glomerular filtration rate. Which of the following best explains Patient A's BUN of 68 with a normal creatinine?",
    "options": [
      {
        "text": "Increased proximal tubular secretion of creatinine has masked a parallel fall in glomerular filtration rate",
        "explanation": "Incorrect. Creatinine is secreted by proximal tubular organic cation transporters, and that secretion does cause creatinine clearance to modestly overestimate true GFR, particularly as chronic kidney disease advances. However, the capacity of that secretory pathway is limited and could never hold creatinine at exactly 1.0 mg/dL while urea rose nearly sevenfold, nor does it have anything to do with a gastrointestinal bleed. This would be the correct answer if the question asked why creatinine clearance overestimates measured inulin clearance in advanced chronic kidney disease."
      },
      {
        "text": "Urea production has risen from the absorbed blood protein load while hypovolemia enhances passive urea reabsorption along the nephron",
        "explanation": "Correct. Urea is the vehicle for disposing of nitrogen from amino acid catabolism, so BUN reflects both protein load and renal handling. A large upper gastrointestinal bleed is effectively a high-protein meal delivered into the small intestine, and the absorbed nitrogen is converted to urea by the liver. At the same time, blood loss causes hypovolemia, which raises proximal tubular reabsorption of sodium and water and therefore of urea by solvent drag, and raises ADH, which increases UT-A1 urea permeability in the inner medullary collecting duct. Creatinine, which is produced at a steady rate from muscle and is not reabsorbed, stays normal, so the ratio climbs far above the usual 10-15:1."
      },
      {
        "text": "Reduced glomerular filtration has proportionally raised both urea and creatinine, and the creatinine is falsely low from muscle wasting",
        "explanation": "Incorrect. A proportional rise from a fall in GFR would elevate the creatinine as well, and the vignette gives a normal creatinine of 1.0 in a 78-year-old man, which is not suggestive of severe sarcopenia. The disproportion is the diagnostic point. This would be the correct answer if both values had risen together in a patient with intrinsic renal failure."
      },
      {
        "text": "Urea transporters in the inner medulla have been downregulated, trapping urea in the plasma",
        "explanation": "Incorrect. Downregulating UT-A transporters would impair medullary urea recycling and reduce the concentrating gradient, causing a dilute urine; it would not raise plasma urea, because plasma urea is set by hepatic production and renal excretion, not by medullary trapping. This would be the correct answer if the question asked why a patient with a low-protein diet cannot maximally concentrate urine."
      },
      {
        "text": "Hepatic urea cycle activity has increased because of the acute stress response, independent of substrate delivery",
        "explanation": "Incorrect. Stress alone can modestly increase catabolism, but it is the delivered nitrogen substrate from digested blood, not a stress-driven upregulation of the urea cycle, that accounts for a BUN of 68 with a normal creatinine. Patient C in the same vignette illustrates the opposite situation, in which a failing liver cannot make urea despite a high ammonia. This would be the correct answer if urea synthesis were substrate-independent."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: BUN is not a pure GFR marker. It rises with high protein load (GI bleed, steroids, catabolism) and with hypovolemia (passive reabsorption), and it falls with malnutrition and with liver failure (the failing liver cannot convert ammonia to urea, so ammonia rises while BUN falls).",
    "lectureSource": "CV10: Urea, Glucose and Organic Solute Transport",
    "pdfLecture": "CV10",
    "pdfPage": 10,
    "pdfQuote": "The greater the fluid reabsorption along the PT , the greater the"
  },
  {
    "id": 15,
    "category": "Physiology: ADH Disorders",
    "questionText": "A 66-year-old man with a 50-pack-year smoking history is admitted with confusion. Serum sodium is 116 mEq/L, serum osmolality is 242 mOsm/kg, urine osmolality is 604 mOsm/kg, and urine sodium is 62 mEq/L. He is euvolemic on exam with no edema, normal skin turgor, and a blood pressure of 128/78 mmHg without orthostasis. Thyroid function and a morning cortisol are normal. Chest imaging shows a 3 cm central hilar mass. Which of the following findings most specifically establishes that antidiuretic hormone is acting inappropriately in this patient?",
    "options": [
      {
        "text": "The serum sodium of 116 mEq/L measured on the admission chemistry panel",
        "explanation": "Incorrect. Hyponatremia establishes that there is a water excess relative to solute, but it does not by itself identify the mechanism. It occurs in hypovolemic, euvolemic, and hypervolemic states with completely different causes and treatments, which is why the diagnostic algorithm begins rather than ends with the sodium. This would be the correct answer if the question asked only whether a disorder of water balance is present."
      },
      {
        "text": "The urine sodium of 62 mEq/L measured on the admission spot urine specimen",
        "explanation": "Incorrect. A urine sodium above 40 mEq/L is a useful supporting finding because it argues against a hypovolemic cause, in which the kidney would be conserving sodium avidly. However, it reflects sodium handling and volume status rather than water handling, so it does not directly demonstrate ADH activity. This would be the correct answer if the question asked which value best excludes volume depletion as the cause."
      },
      {
        "text": "The absence of edema and of orthostatic change on the volume status examination",
        "explanation": "Incorrect. Clinical euvolemia is a required diagnostic criterion for SIADH and helps exclude heart failure, cirrhosis, and hypovolemia, but physical assessment of volume status is notoriously insensitive and demonstrates nothing about the hormone itself. This would be the correct answer if the question asked which finding distinguishes SIADH from hypervolemic hyponatremia."
      },
      {
        "text": "The serum osmolality of 242 mOsm/kg seen on the admission chemistry panel",
        "explanation": "Incorrect. A low serum osmolality confirms that this is true hypotonic hyponatremia rather than pseudohyponatremia or a hyperosmolar hyponatremia from hyperglycemia or mannitol. That is a necessary first step, but it describes the consequence rather than the mechanism. This would be the correct answer if the question asked how to exclude translocational hyponatremia."
      },
      {
        "text": "The urine osmolality of 604 mOsm/kg despite a serum osmolality of 242 mOsm/kg",
        "explanation": "Correct. A hypotonic plasma should completely suppress ADH, and the normal kidney should then produce a maximally dilute urine with an osmolality below about 100 mOsm/kg, excreting the free water excess. A urine that is more concentrated than the plasma proves that aquaporin-2 channels are still being inserted into the apical membrane of the collecting duct, which can only happen if vasopressin is acting on V2 receptors despite an osmotic signal that should have shut it off. This inappropriate concentration of the urine is the defining physiologic lesion of SIADH, and in a heavy smoker with a central hilar mass, ectopic ADH production by a small cell carcinoma is the likely source."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: In SIADH the diagnostic hallmark is an inappropriately CONCENTRATED urine (Uosm above 100, usually well above Posm) in the setting of a low serum osmolality and clinical euvolemia. ADH acts on V2 receptors to insert aquaporin-2 into the collecting duct apical membrane.",
    "lectureSource": "CV8: Regulation of Sodium and Water Excretion",
    "pdfLecture": "CV8",
    "pdfPage": 38,
    "pdfQuote": "Sets how concentrated the urine is by controlling the water"
  },
  {
    "id": 16,
    "category": "Physiology: Micturition and Bladder Tone",
    "questionText": "A 68-year-old man with long-standing benign prostatic hyperplasia presents unable to void for 14 hours. His lower abdomen is distended and dull to percussion, and bedside ultrasound shows 900 mL of retained urine. He was started three days ago on diphenhydramine for allergic rhinitis. After catheterization he asks why an antihistamine would cause this. Which of the following best explains the drug's contribution to his retention?",
    "options": [
      {
        "text": "Blockade of muscarinic receptors on the detrusor muscle, impairing parasympathetically driven bladder contraction",
        "explanation": "Correct. Bladder emptying is a parasympathetic event: pelvic splanchnic nerves from S2 to S4 release acetylcholine onto M3 muscarinic receptors on the detrusor, producing contraction, while the internal urethral sphincter relaxes. Diphenhydramine is a first-generation antihistamine with substantial antimuscarinic activity, so it weakens detrusor contraction. In a man whose bladder outlet is already partially obstructed by prostatic hypertrophy, the detrusor has been working against a high outlet resistance and has little reserve, so even a modest anticholinergic burden can tip him into complete retention. This is why anticholinergics, antihistamines, and decongestants are classic precipitants of acute urinary retention in men with BPH."
      },
      {
        "text": "Stimulation of alpha-1 receptors in the internal urethral sphincter, increasing outlet resistance",
        "explanation": "Incorrect. Alpha-1 agonism at the internal urethral sphincter and prostatic smooth muscle does raise outlet resistance and can precipitate retention, which is why pseudoephedrine and phenylephrine are also cautioned against in BPH. But diphenhydramine is not an alpha-1 agonist; its urologic liability is antimuscarinic. This would be the correct answer if he had taken an over-the-counter decongestant containing pseudoephedrine."
      },
      {
        "text": "Blockade of nicotinic receptors at the pelvic ganglia, interrupting preganglionic to postganglionic transmission",
        "explanation": "Incorrect. Ganglionic nicotinic blockade would indeed interrupt the micturition reflex, but it would also produce profound and unmistakable autonomic collapse including severe orthostatic hypotension, since it blocks both sympathetic and parasympathetic outflow. Diphenhydramine has no meaningful ganglionic blocking activity. This would be the correct answer if the patient had received a ganglionic blocker such as hexamethonium."
      },
      {
        "text": "Inhibition of the somatic pudendal nerve, causing failure of the external urethral sphincter to relax",
        "explanation": "Incorrect. The external urethral sphincter is skeletal muscle innervated by the somatic pudendal nerve from Onuf nucleus at S2 to S4, and it is under voluntary control. Diphenhydramine does not act at the neuromuscular junction, and a failure of voluntary relaxation would be described as detrusor-sphincter dyssynergia, typically a spinal cord injury phenomenon. This would be the correct answer if the patient had a suprasacral spinal cord lesion."
      },
      {
        "text": "Suppression of the pontine micturition center by central histamine H1 blockade",
        "explanation": "Incorrect. The pontine micturition center does coordinate the reflex, and severe central nervous system depression can impair voiding, but this patient is awake and describing his symptoms. The peripheral antimuscarinic effect on the detrusor is the operative and far more common mechanism. This would be the correct answer if he were deeply obtunded from a sedative overdose."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Parasympathetic (S2-S4, M3 muscarinic) contracts the detrusor to empty the bladder; sympathetic (T10-L2, alpha-1 and beta-3) stores urine. In BPH, anticholinergics and alpha-agonists are classic precipitants of acute urinary retention.",
    "lectureSource": "CV6: Organization of the Urinary System",
    "pdfLecture": "CV6",
    "pdfPage": 25,
    "pdfQuote": "pressure. Bladder tone, up to the point of triggering the micturition reflex, is"
  },
  {
    "id": 17,
    "category": "Physiology: Calcium-Sensing Receptor",
    "questionText": "A 55-year-old woman with metastatic breast cancer is admitted with a serum calcium of 14.6 mg/dL, confusion, and constipation. She has been vomiting for two days and is clinically volume depleted. After 3 liters of normal saline her calcium falls only to 13.4 mg/dL and she remains symptomatic. The team adds intravenous furosemide once she is euvolemic. Which of the following best explains how a loop diuretic lowers serum calcium?",
    "options": [
      {
        "text": "It inhibits the apical TRPV5 calcium channel in the distal convoluted tubule, blocking active transcellular calcium uptake",
        "explanation": "Incorrect. TRPV5 in the distal convoluted tubule is the site of hormonally regulated, active transcellular calcium reabsorption and is the target of parathyroid hormone and of thiazides, not of loop diuretics. Blocking it would indeed be calciuric, but it is not how furosemide acts. This would be the correct answer if the question asked how PTH increases distal calcium reabsorption."
      },
      {
        "text": "It stimulates calcitonin release from the thyroid parafollicular C cells, directly inhibiting osteoclastic bone resorption",
        "explanation": "Incorrect. Calcitonin is a legitimate adjunct in severe hypercalcemia and works exactly as described, but it is given as a drug and is not released in response to a loop diuretic. Loop diuretics act at the nephron, not the thyroid. This would be the correct answer if the added agent had been salmon calcitonin."
      },
      {
        "text": "It blocks NKCC2 in the thick ascending limb, ending the lumen-positive potential for paracellular calcium reabsorption",
        "explanation": "Correct. The thick ascending limb reabsorbs roughly 20 to 25 percent of filtered calcium, and it does so almost entirely by the paracellular route through claudin-16 and claudin-19. The driving force is a lumen-positive transepithelial potential generated when potassium taken up by NKCC2 recycles back into the lumen through ROMK. Furosemide inhibits NKCC2, so potassium recycling stops, the lumen-positive potential collapses, and the electrical driving force for paracellular calcium and magnesium reabsorption is lost. Both calcium and magnesium are therefore wasted in the urine. Volume repletion must come first, because a hypovolemic patient given a loop diuretic will simply increase proximal calcium reabsorption and worsen the hypercalcemia."
      },
      {
        "text": "It increases the filtered load of calcium by raising the glomerular filtration rate through afferent arteriolar dilation",
        "explanation": "Incorrect. Loop diuretics do stimulate prostaglandin-mediated renal vasodilation, but a change in filtered load is not the mechanism of their calciuresis, and in a volume-depleted patient GFR would if anything fall. The effect is on tubular reabsorption. This would be the correct answer if calcium excretion were determined solely by filtration."
      },
      {
        "text": "It activates the calcium-sensing receptor on the basolateral membrane of the thick ascending limb epithelial cells",
        "explanation": "Incorrect. The calcium-sensing receptor is a real and important element of this physiology: when activated by a high plasma calcium it inhibits ROMK and NKCC2, reducing the lumen-positive potential and producing an endogenous calciuresis, essentially a built-in loop-diuretic effect. However, furosemide inhibits the transporter directly rather than acting through the receptor. This would be the correct answer if the question asked how hypercalcemia itself promotes urinary calcium loss and causes a concentrating defect."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The thick ascending limb reabsorbs Ca and Mg PARACELLULARLY, driven by the lumen-positive potential from ROMK potassium recycling. Loop diuretics abolish it (calcium and magnesium wasting); thiazides act distally and cause calcium RETENTION with magnesium wasting.",
    "lectureSource": "CV9: K+, Ca++, Mg++ and Phosphate Transport",
    "pdfLecture": "CV9",
    "pdfPage": 23,
    "pdfQuote": "Thick Ascending Limb"
  },
  {
    "id": 18,
    "category": "Renal Physiology: Filtration Barrier",
    "questionText": "A 7-year-old boy develops periorbital puffiness and pitting leg edema over one week following an upper respiratory infection. Urinalysis shows 4+ protein with no blood and no casts. Serum albumin is 1.7 g/dL, urine protein is 6.2 grams in 24 hours, and the protein is almost entirely albumin. Renal biopsy light microscopy is normal, immunofluorescence is negative, and electron microscopy shows diffuse effacement of epithelial foot processes. Which property of the glomerular filtration barrier has been lost in this child?",
    "options": [
      {
        "text": "The hydrostatic pressure gradient across the capillary wall, from a fall in glomerular capillary pressure",
        "explanation": "Incorrect. The hydrostatic gradient determines how much fluid is filtered, not which solutes accompany it. A fall in glomerular capillary pressure lowers GFR and would if anything reduce protein delivery to the urine. This would be the correct answer if the child had pre-renal azotemia from volume depletion."
      },
      {
        "text": "Size selectivity, from disruption of the endothelial fenestrations allowing cells and large proteins to pass",
        "explanation": "Incorrect. A pure loss of size selectivity would allow larger proteins such as IgG and, if severe enough, red cells to pass, producing a non-selective proteinuria with an active sediment. Here the urine is bland and the protein is almost entirely albumin. This would be the correct answer if the biopsy showed a proliferative glomerulonephritis with dysmorphic red cells and red cell casts."
      },
      {
        "text": "Tubular reabsorptive capacity, from saturation of the megalin-cubilin endocytic system in the proximal tubule",
        "explanation": "Incorrect. Megalin-cubilin does normally reclaim the small amount of filtered protein, and it is saturated in this child, but that saturation is a downstream consequence of an enormous filtered protein load rather than the primary lesion. A primary tubular defect produces low-molecular-weight proteinuria of only 1 to 2 grams per day, not 6.2 grams of albumin. This would be the correct answer if the urine protein were predominantly beta-2 microglobulin in a patient with Fanconi syndrome."
      },
      {
        "text": "Mesangial contractile regulation, reducing the effective surface area available for filtration",
        "explanation": "Incorrect. Mesangial contraction modulates the filtering surface area and therefore Kf and GFR, but altering the surface area changes the volume filtered rather than the selectivity of what crosses. It would not cause massive albuminuria. This would be the correct answer if the question asked how angiotensin II reduces the glomerular ultrafiltration coefficient."
      },
      {
        "text": "Charge selectivity, from loss of the anionic sites and slit diaphragm integrity at the podocyte foot processes",
        "explanation": "Correct. The filtration barrier has three layers: a fenestrated endothelium, the glomerular basement membrane rich in negatively charged heparan sulfate proteoglycans, and the podocyte foot processes bridged by nephrin- and podocin-containing slit diaphragms. Because albumin is a moderate-sized molecule that is strongly negatively charged at physiologic pH, it is normally repelled by the anionic barrier as well as restricted by size. In minimal change disease, a circulating factor damages the podocyte, foot processes efface, and the charge barrier and slit diaphragm are lost, so albumin passes selectively while larger proteins and cells are still held back. This is why the proteinuria is selective, the sediment bland, and light microscopy unremarkable."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: The glomerular barrier filters by SIZE (endothelial fenestrae, GBM, slit diaphragm) and by CHARGE (anionic heparan sulfate and podocyte glycocalyx). Selective albuminuria with foot process effacement and normal light microscopy is minimal change disease.",
    "lectureSource": "CV7: GFR, Renal Blood Flow and Clearance",
    "pdfLecture": "CV7",
    "pdfPage": 14,
    "pdfQuote": "Visceral epithelial layer with Podocyte Foot Processes - Size Exclusion to less then 50"
  },
  {
    "id": 19,
    "category": "Pathology: Hydronephrosis",
    "questionText": "A male infant is born at term after a pregnancy complicated by oligohydramnios noted at 28 weeks. He has mild respiratory distress and a palpable suprapubic mass. Ultrasound shows a thick-walled, trabeculated bladder, bilateral hydroureter, and bilateral pelvicalyceal dilation with cortical thinning. A voiding cystourethrogram demonstrates a dilated posterior urethra that tapers abruptly. Which of the following best explains the renal parenchymal damage seen on ultrasound?",
    "options": [
      {
        "text": "Reflux of infected urine has produced segmental cortical scarring at the upper and lower renal poles",
        "explanation": "Incorrect. Reflux nephropathy from infected refluxing urine does cause polar scarring, since compound papillae at the poles permit intrarenal reflux, but it produces focal scars rather than the uniform, symmetric dilation with diffuse cortical thinning described here, and there is no history of infection. This would be the correct answer if the child had recurrent febrile urinary tract infections with focal cortical defects on DMSA scan."
      },
      {
        "text": "Back pressure from the obstructed outlet has raised Bowman space pressure and compressed the parenchyma",
        "explanation": "Correct. Posterior urethral valves obstruct the bladder outlet, so the bladder hypertrophies and becomes trabeculated as it works against high resistance. That pressure is transmitted retrograde through the ureters to the renal pelvis and ultimately into Bowman space. Because net filtration pressure equals glomerular capillary hydrostatic pressure minus Bowman hydrostatic pressure minus capillary oncotic pressure, a sustained rise in Bowman pressure directly opposes filtration and lowers GFR. The dilated collecting system also compresses the medulla and cortex mechanically, causing ischemia and progressive atrophy, which is what the cortical thinning represents. Reduced fetal urine output from this same obstruction explains the oligohydramnios and the resulting pulmonary hypoplasia."
      },
      {
        "text": "Failure of the ureteric bud to induce nephron formation left the cortex congenitally hypoplastic",
        "explanation": "Incorrect. A failure of induction produces agenesis or dysgenesis with no functional collecting system, not a dilated, obstructed one. Here the ureters, pelvis, and calyces are all present and in fact distended, proving that induction and branching morphogenesis occurred normally. This would be the correct answer if imaging had shown absent or rudimentary renal tissue with no collecting system."
      },
      {
        "text": "Autosomal recessive polycystic kidney disease has produced radial cystic dilation of the collecting ducts",
        "explanation": "Incorrect. ARPKD does present in the newborn with oligohydramnios, pulmonary hypoplasia, and large kidneys, so it is a genuine consideration, but the kidneys appear diffusely echogenic with tiny radial cysts rather than showing a dilated collecting system, and there is no bladder outlet obstruction or dilated posterior urethra. This would be the correct answer if the VCUG were normal and the kidneys were massively enlarged and echogenic with hepatic fibrosis."
      },
      {
        "text": "Ureteropelvic junction obstruction has caused isolated pelvicalyceal dilation without ureteral involvement",
        "explanation": "Incorrect. UPJ obstruction is the most common cause of neonatal hydronephrosis, but by definition the obstruction is above the ureter, so the ureter is not dilated and the bladder is normal. This child has hydroureter, a trabeculated bladder, and an abnormal urethra, placing the lesion at the outlet. This would be the correct answer if only the renal pelvis were dilated with a normal-caliber ureter."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Obstruction raises Bowman space hydrostatic pressure, which subtracts directly from net filtration pressure and lowers GFR. Posterior urethral valves (males only) give the triad of a thick trabeculated bladder, bilateral hydroureteronephrosis, and a dilated posterior urethra.",
    "lectureSource": "CV3: Genitourinary Embryology",
    "pdfLecture": "CV3",
    "pdfPage": 25,
    "pdfQuote": "Hydronephrosis"
  },
  {
    "id": 20,
    "category": "Physiology: Water Transport and Aquaporins",
    "questionText": "A 30-year-old man with bipolar disorder maintained on lithium for eight years reports drinking more than 8 liters of water daily and waking four times nightly to urinate. Serum sodium is 149 mEq/L, serum osmolality 302 mOsm/kg, and urine osmolality 118 mOsm/kg. After a water deprivation test his urine osmolality rises only to 160 mOsm/kg, and administration of desmopressin produces no further increase. Which of the following best explains his inability to concentrate the urine?",
    "options": [
      {
        "text": "Absent synthesis of vasopressin in the supraoptic and paraventricular nuclei of the hypothalamus",
        "explanation": "Incorrect. This describes central diabetes insipidus, in which endogenous ADH is deficient. The distinguishing test result is the response to desmopressin: a central patient concentrates the urine substantially, usually by more than 50 percent, whereas this patient did not respond at all. This would be the correct answer if his urine osmolality had risen to 500 mOsm/kg after desmopressin."
      },
      {
        "text": "Loss of the medullary osmotic gradient from washout by an obligatory osmotic diuresis",
        "explanation": "Incorrect. Medullary washout does occur with prolonged polyuria and contributes to the concentrating defect, but it is a secondary consequence rather than the primary lesion, and it would not explain the complete absence of a desmopressin response. An osmotic diuresis also produces a urine osmolality near that of plasma rather than the dilute urine seen here. This would be the correct answer if he had uncontrolled hyperglycemia with heavy glycosuria."
      },
      {
        "text": "Excessive primary water intake suppressing ADH release, with a structurally normal kidney",
        "explanation": "Incorrect. Primary polydipsia would produce a low or low-normal serum sodium and osmolality because the water load dilutes the plasma, and the concentrating mechanism would recover with water restriction. This patient's sodium of 149 and osmolality of 302 are high, proving that he is losing water in excess of intake rather than merely drinking too much. This would be the correct answer if his serum sodium were 133 with an osmolality of 268."
      },
      {
        "text": "Impaired collecting duct responsiveness to vasopressin, with failure of aquaporin-2 insertion into the apical membrane",
        "explanation": "Correct. Water reabsorption in the collecting duct requires vasopressin to bind V2 receptors on the basolateral membrane, activate adenylyl cyclase, raise cyclic AMP, and drive protein kinase A-mediated trafficking of aquaporin-2 vesicles into the apical membrane; water then exits basolaterally through the constitutively expressed aquaporin-3 and aquaporin-4. Lithium enters principal cells through ENaC and disrupts this signaling, downregulating aquaporin-2 expression, so the apical membrane remains water-impermeable no matter how much vasopressin is present. That is nephrogenic diabetes insipidus, and it is why exogenous desmopressin adds nothing. The persistent free water loss drives the hypernatremia and stimulates thirst, producing the enormous intake he describes."
      },
      {
        "text": "Failure of urea recycling into the inner medulla, eliminating roughly half the medullary interstitial osmolality",
        "explanation": "Incorrect. Urea does contribute a large share of inner medullary osmolality through ADH-stimulated UT-A1 recycling, and a low-protein diet can blunt maximal concentrating ability. But an isolated urea problem would not abolish the desmopressin response, and nothing in the history suggests protein malnutrition. This would be the correct answer if the question asked why a severely protein-restricted patient cannot achieve a maximally concentrated urine."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Water crosses membranes only through aquaporins. ADH acts on V2 receptors, raising cAMP and inserting AQP2 into the collecting duct apical membrane. Central DI responds to desmopressin; nephrogenic DI (lithium, hypercalcemia, hypokalemia) does not.",
    "lectureSource": "CV4: Solute Transport and Fluid Movement",
    "pdfLecture": "CV4",
    "pdfPage": 9,
    "pdfQuote": "Facilitate the rapid transport of water across cell membranes via pores"
  },
  {
    "id": 21,
    "category": "Physiology: Natriuretic Peptides",
    "questionText": "A 61-year-old woman presents to the emergency department with three days of worsening orthopnea and paroxysmal nocturnal dyspnea. She has crackles to the mid lung fields, a third heart sound, and jugular venous distension. Her B-type natriuretic peptide is 1840 pg/mL. Despite this markedly elevated level, her urine output is low and her urine sodium is 12 mEq/L. Which of the following best describes the stimulus for, and the intended renal action of, the peptide that is elevated?",
    "options": [
      {
        "text": "Released from ventricular myocytes in response to a fall in coronary perfusion pressure; it acts by constricting the efferent arteriole to raise the glomerular filtration fraction",
        "explanation": "Incorrect. Efferent constriction to defend GFR is the action of angiotensin II, and the natriuretic peptides oppose rather than mimic the renin-angiotensin system. Ischemia is also not the release stimulus; wall stretch is. This would be the correct answer if the question described the renal hemodynamic effect of angiotensin II in a volume-depleted patient."
      },
      {
        "text": "Released from the macula densa in response to a high luminal sodium chloride concentration; it acts by inhibiting renin release from the afferent arteriolar granular cells",
        "explanation": "Incorrect. The macula densa does sense luminal sodium chloride and does suppress renin when delivery is high, but it signals locally through adenosine and prostaglandins rather than by releasing a circulating natriuretic peptide, and it is not a cardiac structure. This would be the correct answer if the question asked how tubuloglomerular feedback modulates renin secretion."
      },
      {
        "text": "Released from the posterior pituitary in response to a rise in plasma osmolality; it acts by inserting aquaporin-2 water channels into the collecting duct apical membrane",
        "explanation": "Incorrect. That is antidiuretic hormone, which conserves water rather than excreting sodium. ADH is in fact also elevated in this patient through a non-osmotic baroreceptor-mediated pathway, and it contributes to the dilutional hyponatremia common in heart failure, but it is not the peptide measured here. This would be the correct answer if the laboratory value reported were copeptin as a surrogate for vasopressin."
      },
      {
        "text": "Released from ventricular myocytes in response to wall stretch; it dilates the afferent arteriole, inhibits collecting duct sodium reabsorption, and lowers renin and aldosterone",
        "explanation": "Correct. BNP is stored and released chiefly by ventricular myocytes in response to increased wall stress, while ANP comes principally from atrial myocytes in response to atrial stretch; both are markers of elevated filling pressures, which is why BNP is used to diagnose decompensated heart failure. Acting through guanylyl cyclase-linked receptors and cyclic GMP, they dilate the afferent arteriole and constrict the efferent, raising GFR and the filtered sodium load, and they directly inhibit sodium reabsorption in the inner medullary collecting duct. They also suppress renin, aldosterone, and ADH and are vasodilatory. The paradox in this patient is that these effects are overwhelmed by the far more powerful antinatriuretic signals of the underfilled arterial circulation, a state of natriuretic peptide resistance, which is why her urine sodium remains 12 despite a BNP of 1840."
      },
      {
        "text": "Released from the adrenal zona glomerulosa in response to hyperkalemia and angiotensin II; it acts by increasing ENaC channel expression in collecting duct principal cells",
        "explanation": "Incorrect. This describes aldosterone, which is antinatriuretic and is elevated in this patient, contributing to her low urine sodium. Aldosterone is a steroid produced by the adrenal cortex, not a peptide measured on a BNP assay. This would be the correct answer if the laboratory finding described were an elevated plasma aldosterone concentration."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: ANP (atria) and BNP (ventricles) are released by STRETCH and act through cGMP: afferent dilation, efferent constriction, inhibition of medullary collecting duct sodium reabsorption, and suppression of renin, aldosterone, and ADH. In heart failure they are high but overwhelmed.",
    "lectureSource": "CV8: Regulation of Sodium and Water Excretion",
    "pdfLecture": "CV8",
    "pdfPage": 32,
    "pdfQuote": "The Natriuretic Peptides: released from cardiac"
  },
  {
    "id": 22,
    "category": "Physiology: Organic Acid Secretory System",
    "questionText": "A 58-year-old man with recurrent gout is maintained on probenecid. He develops cellulitis and is started on high-dose intravenous penicillin G. On day two his physician notes that serum penicillin levels are substantially higher than expected for the dose given, and his serum urate has fallen further. A pharmacology resident is asked to explain both observations with a single mechanism. Which of the following best accounts for these findings?",
    "options": [
      {
        "text": "Both drugs are handled by the proximal tubular organic anion transport system, where they compete for a saturable secretory pathway",
        "explanation": "Correct. The proximal tubule secretes organic anions by a two-step process: OAT1 and OAT3 on the basolateral membrane take the anion up from the peritubular capillary in exchange for alpha-ketoglutarate, and MRP and OAT4 transporters move it into the lumen. This system handles PAH, penicillins, cephalosporins, methotrexate, loop and thiazide diuretics, NSAIDs, and urate, and because it is carrier-mediated it is saturable and subject to competition. Probenecid occupies the transporters, so penicillin secretion falls and its plasma level and half-life rise, an interaction historically exploited to stretch scarce penicillin supplies. The same competition at the URAT1 urate reabsorptive transporter in the brush border blocks urate reclamation, which is exactly how probenecid works as a uricosuric."
      },
      {
        "text": "Probenecid inhibits hepatic cytochrome P450 metabolism of penicillin while independently inhibiting xanthine oxidase and urate synthesis",
        "explanation": "Incorrect. Penicillin G is cleared predominantly by renal excretion rather than by hepatic oxidative metabolism, so a P450 interaction would not meaningfully change its level. Xanthine oxidase inhibition is the mechanism of allopurinol and febuxostat, which lower urate production, whereas probenecid is uricosuric and increases urinary urate. This would be the correct answer if the patient had been started on allopurinol and a drug metabolized by CYP enzymes."
      },
      {
        "text": "Probenecid alkalinizes the urine, trapping ionized penicillin in the tubular lumen and increasing the solubility of filtered urate",
        "explanation": "Incorrect. Urinary alkalinization does promote ion trapping of weak acids in the lumen and does increase urate solubility, which is a legitimate adjunct in preventing urate stones, but it would increase penicillin elimination rather than raise serum levels. Probenecid also is not a urinary alkalinizing agent. This would be the correct answer if the patient had been given sodium bicarbonate for aspirin overdose."
      },
      {
        "text": "Probenecid displaces penicillin from plasma albumin, raising the measured total drug level in serum without changing its clearance",
        "explanation": "Incorrect. Displacement from protein binding raises the free fraction and typically increases clearance and pharmacologic effect while total measured drug falls or stays the same; it does not produce a sustained rise in total level. It also has nothing to do with urate handling. This would be the correct answer if the interaction described were sulfonamide displacement of bilirubin in a neonate."
      },
      {
        "text": "Both drugs are substrates for the organic cation transporters OCT2 and MATE, which mediate cation secretion in the proximal tubule",
        "explanation": "Incorrect. The organic cation system handles positively charged compounds such as creatinine, cimetidine, metformin, dopamine, and quinidine. Penicillin and urate are anions and travel through the OAT pathway. Naming the wrong transporter family gets the mechanism backward even though the general concept of competitive secretion is right. This would be the correct answer if the interacting drugs were cimetidine and metformin."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: The proximal tubule has two distinct saturable secretory systems: organic ANIONS (OAT1/OAT3: PAH, penicillin, methotrexate, diuretics, urate) and organic CATIONS (OCT2/MATE: creatinine, cimetidine, metformin). Drugs sharing a system compete and raise each other's levels.",
    "lectureSource": "CV10: Urea, Glucose and Organic Solute Transport",
    "pdfLecture": "CV10",
    "pdfPage": 17,
    "pdfQuote": "Organic Anions & Cations Secreted"
  },
  {
    "id": 23,
    "category": "OMM: Ligamentous Articular Mechanism",
    "questionText": "An 82-year-old woman with severe osteoporosis, a recent T8 compression fracture, and chronic anticoagulation is referred for treatment of persistent low thoracic and rib discomfort. Her physician explains to a student that the technique chosen treats the joint by working through the tissues that both guide its motion and hold the memory of the strain, and that the correction is completed by the patient's own physiology rather than by an external force. Which of the following statements about this approach is most accurate?",
    "options": [
      {
        "text": "The muscles crossing the joint are the primary agents of correction, and the ligaments serve only as passive mechanical restraints on motion",
        "explanation": "Incorrect. This inverts the central premise. Sutherland's insight, elaborated in the ligamentous articular mechanism concept, was that ligaments are not merely passive checkreins but are richly innervated proprioceptive structures that actively guide articular motion. Muscle energy is the technique built on muscular agency. This would be the correct answer if the technique described used a patient-initiated isometric contraction."
      },
      {
        "text": "The technique requires a forceful engagement of the restrictive barrier and is therefore relatively contraindicated in severe osteoporosis",
        "explanation": "Incorrect. The gentleness of balanced ligamentous tension is precisely why it is chosen for frail, osteoporotic, anticoagulated, or acutely injured patients. No barrier is engaged and the forces used are minimal, so the risk of fracture or hemorrhage is very low compared with a thrust technique. This would be the correct answer if the technique under discussion were thoracic HVLA."
      },
      {
        "text": "The technique is direct, carrying the dysfunctional segment through the restrictive barrier in order to restore the lost range of motion",
        "explanation": "Incorrect. Balanced ligamentous tension is indirect by definition: the segment is carried toward its position of ease, not through the barrier. Describing it as direct confuses it with muscle energy, direct myofascial release, or HVLA. This would be the correct answer if the question described a direct thoracic articulatory technique."
      },
      {
        "text": "Once the balance point is found, the physician should slowly increase force in the direction of the barrier to speed the release",
        "explanation": "Incorrect. Adding force at the balance point defeats the technique, because the whole purpose of the balance point is to remove the physician's force from the equation and allow the inherent forces to work. Increasing pressure re-provokes proprioceptive activity and re-establishes the pattern being treated. This would be the correct answer if the operative principle were sustained mechanical loading, as in a direct myofascial stretch."
      },
      {
        "text": "The ligaments are richly innervated proprioceptive structures whose balanced tension lets inherent forces restore articular relationships",
        "explanation": "Correct. The ligamentous articular mechanism is the conceptual foundation of BLT: the ligaments around a joint both guide its normal motion and, when strained, retain a proprioceptively maintained pattern of asymmetric tension that perpetuates the dysfunction. The physician's job is to find the position where those tensions are equal, which quiets the abnormal afferent traffic and allows the body's own inherent forces, expressed as respiratory cooperation and fluid fluctuation, to reorganize the articulation. This is also the source of the osteopathic emphasis on natural agencies, the idea that the physician cooperates with rather than overrides the body's self-regulating capacity. Because it requires almost no force, it is well suited to an osteoporotic, anticoagulated patient."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: In the ligamentous articular mechanism, ligaments are proprioceptive guides, not passive straps. BLT is gentle, indirect, and uses inherent forces, making it a first-choice technique in osteoporosis, anticoagulation, acute injury, and frailty.",
    "lectureSource": "CV1: Principles of Balanced Ligamentous Tension",
    "pdfLecture": "CV1",
    "pdfPage": 30
  },
  {
    "id": 24,
    "category": "Physiology: Magnesium Regulation",
    "questionText": "A 47-year-old man with alcohol use disorder is admitted with vomiting and diarrhea. Serum potassium is 2.4 mEq/L. He is given 120 mEq of intravenous potassium chloride over 12 hours, but a repeat level is still 2.5 mEq/L. Serum magnesium returns at 1.0 mg/dL. After magnesium repletion the potassium corrects readily with further supplementation. Which of the following best explains why the hypokalemia was refractory until the magnesium was replaced?",
    "options": [
      {
        "text": "Magnesium is a required cofactor for the Na-K-ATPase, so hypomagnesemia prevented the infused potassium from entering muscle cells",
        "explanation": "Incorrect. Magnesium is required as the Mg-ATP complex for Na-K-ATPase activity, and impaired pump function does contribute somewhat, but that would cause a redistribution problem rather than the ongoing renal potassium wasting that makes repletion futile. The dominant lesion is at the apical potassium channel of the principal cell. This would be the correct answer if the refractoriness were purely a failure of cellular uptake with no urinary potassium loss."
      },
      {
        "text": "Intracellular magnesium normally blocks the ROMK channel, so depletion unblocks it and permits unchecked distal potassium secretion",
        "explanation": "Correct. ROMK is an inwardly rectifying potassium channel, and the reason it rectifies is that intracellular magnesium physically plugs the pore when the membrane potential favors outward potassium flux. When intracellular magnesium falls, that plug is removed, ROMK conducts potassium out of the principal cell into the lumen far more freely, and renal potassium wasting continues no matter how much potassium is administered. This is why hypokalemia with hypomagnesemia is characteristically refractory and why magnesium must be replaced first. Alcohol use disorder is a classic setting because of poor intake, gastrointestinal losses, and a direct renal magnesium-wasting effect of ethanol."
      },
      {
        "text": "Hypomagnesemia suppresses parathyroid hormone secretion, and the resulting hypocalcemia impairs distal tubular potassium handling",
        "explanation": "Incorrect. Severe hypomagnesemia does paradoxically suppress PTH release and induce PTH resistance, producing a hypocalcemia that will not correct until magnesium is replaced, and that is an important clinical pearl in its own right. But calcium and PTH have no direct role in the distal secretion of potassium. This would be the correct answer if the refractory abnormality had been a low serum calcium rather than a low potassium."
      },
      {
        "text": "Magnesium depletion stimulates aldosterone release directly from the adrenal zona glomerulosa, driving potassium loss into the urine",
        "explanation": "Incorrect. Aldosterone secretion is stimulated by angiotensin II and by hyperkalemia; magnesium is not a direct secretagogue. Aldosterone is likely elevated in this patient from volume depletion, but that is secondary hyperaldosteronism from the vomiting and diarrhea rather than an effect of the magnesium level. This would be the correct answer if the question asked which factor most potently stimulates aldosterone release."
      },
      {
        "text": "Hypomagnesemia inhibits NKCC2 in the thick ascending limb, mimicking a loop diuretic and causing renal salt and potassium wasting",
        "explanation": "Incorrect. This reverses the relationship. Magnesium is reabsorbed paracellularly in the thick ascending limb, driven by the lumen-positive potential that NKCC2 activity creates, so a failure of NKCC2 causes magnesium wasting rather than magnesium deficiency causing NKCC2 failure. This would be the correct answer if the patient had Bartter syndrome or was taking a loop diuretic."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: You cannot fix potassium without fixing magnesium. Intracellular Mg blocks ROMK; when Mg falls, the block is released and the principal cell dumps potassium into the urine. Always check and replace magnesium in refractory hypokalemia.",
    "lectureSource": "CV9: K+, Ca++, Mg++ and Phosphate Transport",
    "pdfLecture": "CV9",
    "pdfPage": 15,
    "pdfQuote": "High & variable apical K+ permeability (ROMK channel)"
  },
  {
    "id": 25,
    "category": "Renal Physiology: GFR Markers",
    "questionText": "A 70-year-old woman with a body mass index of 19 and marked sarcopenia after a prolonged hospitalization has a serum creatinine of 0.8 mg/dL. Her nephrologist is concerned that her true glomerular filtration rate is considerably lower than this value suggests. A measured 24-hour creatinine clearance returns at 62 mL/min, while a simultaneous iohexol clearance measures 48 mL/min. Which of the following best explains why both the serum creatinine and the creatinine clearance are misleading in this patient?",
    "options": [
      {
        "text": "Creatinine is reabsorbed in the proximal tubule, so its clearance systematically underestimates GFR",
        "explanation": "Incorrect. Creatinine is not reabsorbed at all; it is filtered and additionally secreted. That is why creatinine clearance overestimates rather than underestimates true GFR, which is exactly the discrepancy shown here between 62 and 48 mL/min. This would be the correct answer if creatinine behaved like urea, which is reabsorbed."
      },
      {
        "text": "Creatinine is freely filtered and neither secreted nor reabsorbed, so its clearance equals GFR exactly and the iohexol result must be erroneous",
        "explanation": "Incorrect. That description fits inulin, the gold standard filtration marker, and to a close approximation iohexol and iothalamate. Creatinine differs precisely because it is secreted. Dismissing the iohexol value discards the more accurate measurement. This would be the correct answer if the marker in question were inulin."
      },
      {
        "text": "Creatinine generation depends on muscle mass, so a low serum value can mask a low GFR, while tubular secretion causes its clearance to overestimate GFR",
        "explanation": "Correct. Creatinine is produced at a rate proportional to skeletal muscle mass, so an elderly sarcopenic woman generates far less of it per day than a young muscular adult. At steady state, serum creatinine equals generation divided by clearance, so a low generation rate keeps the serum value deceptively normal even when clearance has fallen substantially. Separately, creatinine is not only filtered but also secreted by proximal tubular organic cation transporters, and that secreted increment adds to urinary creatinine without reflecting filtration, so creatinine clearance overestimates true GFR. Both errors point the same way, which is why her 0.8 mg/dL and her clearance of 62 both flatter a true GFR of 48."
      },
      {
        "text": "Creatinine clearance falls with age independently of glomerular filtration because tubular secretion declines",
        "explanation": "Incorrect. GFR does decline with age, but this statement makes the error a property of secretion rather than of filtration and would predict that creatinine clearance underestimates GFR in the elderly, which is the opposite of what the data show. This would be the correct answer if the discrepancy had run the other way, with creatinine clearance lower than iohexol clearance."
      },
      {
        "text": "Iohexol is secreted by the organic anion transporters, so its clearance overestimates GFR and cannot be compared with creatinine clearance",
        "explanation": "Incorrect. Iohexol is used as a filtration marker precisely because it is essentially only filtered, which is why it is accepted as a reference standard alongside inulin and iothalamate. A marker that is heavily secreted, such as PAH, is used to estimate renal plasma flow rather than GFR. This would be the correct answer if the marker administered had been para-aminohippurate."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The ideal GFR marker is freely filtered, not secreted, not reabsorbed, not metabolized (inulin, iohexol). Creatinine fails on two counts: generation tracks muscle mass (so serum Cr underestimates disease in the frail) and it is secreted (so CrCl overestimates GFR).",
    "lectureSource": "CV7: GFR, Renal Blood Flow and Clearance",
    "pdfLecture": "CV7",
    "pdfPage": 17,
    "pdfQuote": "Cx>eGFR Clearance is higher then eGFR, similar to creatinine"
  },
  {
    "id": 26,
    "category": "Physiology: Renal Vasculature",
    "questionText": "A 58-year-old man undergoing a prolonged abdominal aortic aneurysm repair becomes hypotensive intraoperatively. Postoperatively he is oliguric, and urine microscopy shows muddy brown granular casts. Biopsy in a similar case would show necrosis concentrated in the S3 segment of the proximal tubule and the medullary thick ascending limb, while the glomeruli and the outer cortex are relatively spared. Which feature of the renal circulation best explains this pattern of injury?",
    "options": [
      {
        "text": "The medulla is supplied by its own separate arterial trunk, which arises distal to the origin of the vessels that supply the cortex",
        "explanation": "Incorrect. There is no separate medullary artery. The entire medullary blood supply is derived from the efferent arterioles of juxtamedullary glomeruli, which give rise to the vasa recta, so the medulla is perfused by blood that has already passed through a glomerulus. This would be the correct answer if the kidney had a dual arterial supply comparable to the bronchial and pulmonary circulations of the lung."
      },
      {
        "text": "Medullary capillaries lack fenestrations, which limits the diffusion of oxygen from the blood into the surrounding tubular epithelial cells",
        "explanation": "Incorrect. The vasa recta are in fact fenestrated, as are the cortical peritubular capillaries, which facilitates rapid solute and water exchange. Fenestration status is not the determinant of medullary oxygen tension; countercurrent exchange and local oxygen consumption are. This would be the correct answer if the question concerned the structural basis of rapid peritubular fluid uptake."
      },
      {
        "text": "Vasa recta countercurrent exchange shunts oxygen away while the thick ascending limb uses large amounts of ATP, leaving the medulla hypoxic",
        "explanation": "Correct. Renal blood flow is enormous overall, about 20 percent of cardiac output, but it is distributed very unevenly: roughly 90 percent perfuses the cortex and only a small fraction reaches the medulla, deliberately kept low so that the osmotic gradient is not washed out. Within the medulla, the hairpin arrangement of the descending and ascending vasa recta allows oxygen to diffuse directly from the descending to the ascending limb, short-circuiting the deep medulla. At the same time, the medullary thick ascending limb is one of the most metabolically demanding segments in the body because NKCC2 transport is driven by the Na-K-ATPase. The result is an outer medulla that normally functions at an oxygen tension of only about 10 to 20 mmHg, with essentially no reserve, so any fall in perfusion pressure produces necrosis there first."
      },
      {
        "text": "The juxtamedullary glomeruli have a higher filtration fraction, which lowers the oxygen content of the blood entering the descending vasa recta",
        "explanation": "Incorrect. Juxtamedullary glomeruli do have longer loops and give rise to the vasa recta, and their filtration fraction is somewhat higher, but filtration removes protein-free fluid rather than oxygen, and the oxygen content of efferent blood is essentially that of arterial blood. The vulnerability arises downstream from countercurrent shunting and high local consumption. This would be the correct answer if filtration itself extracted oxygen from plasma."
      },
      {
        "text": "Autoregulation is absent in the medulla, so medullary blood flow varies directly with the systemic arterial pressure across the entire range",
        "explanation": "Incorrect. Medullary perfusion is somewhat less tightly autoregulated than cortical perfusion, but the kidney as a whole autoregulates flow effectively between mean arterial pressures of roughly 80 and 180 mmHg. The distinguishing feature of the medulla is its baseline hypoxia and lack of reserve, not a total absence of autoregulation. This would be the correct answer if renal blood flow varied linearly with pressure at all levels."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The renal cortex gets about 90 percent of renal blood flow; the medulla is deliberately underperfused to preserve the osmotic gradient. Countercurrent oxygen shunting in the vasa recta plus the huge ATP demand of the thick ascending limb make the outer medulla (S3 and mTAL) the first tissue to infarct in ischemic ATN.",
    "lectureSource": "CV6: Organization of the Urinary System",
    "pdfLecture": "CV6",
    "pdfPage": 7,
    "pdfQuote": "Vasa Recta: The capillary network for tubules in the medulla."
  },
  {
    "id": 27,
    "category": "Physiology: Body Fluid Compartments",
    "questionText": "A 70-kg man participates in a study of body fluid distribution. He is given three markers simultaneously: tritiated water, which distributes throughout all body water; inulin, which is restricted to the extracellular space; and radioiodinated albumin, which remains within the plasma. After equilibration the tritiated water volume of distribution is 42 L, the inulin volume is 14 L, and the albumin volume is 3 L. His hematocrit is 40 percent. Which of the following values is correctly derived from these measurements?",
    "options": [
      {
        "text": "Interstitial volume is 14 L, calculated as extracellular volume minus intracellular volume",
        "explanation": "Incorrect. The arithmetic is wrong in both the operation and the compartments used. Interstitial volume is obtained by subtracting the plasma volume from the extracellular volume, not by subtracting intracellular from extracellular, and the extracellular volume itself is 14 L, so the answer cannot also be 14. This would be the correct answer only if interstitial fluid and extracellular fluid were the same compartment."
      },
      {
        "text": "Intracellular volume is 28 L, obtained by subtracting the inulin space from the tritiated water space",
        "explanation": "Correct. No marker distributes only inside cells, so intracellular volume must always be calculated by difference: total body water minus extracellular fluid. Here that is 42 minus 14, or 28 L. The numbers follow the standard 60-40-20 rule: total body water is about 60 percent of body weight (42 L in a 70-kg man), intracellular fluid is about 40 percent of body weight (28 L, two thirds of total body water), and extracellular fluid is about 20 percent of body weight (14 L, one third of total body water). Within the extracellular compartment, plasma is about one quarter (3 L here) and interstitial fluid about three quarters (11 L)."
      },
      {
        "text": "Total blood volume is 3 L, since the albumin space measures the volume of the vascular compartment",
        "explanation": "Incorrect. The albumin space measures PLASMA volume, not whole blood volume, because albumin is confined to plasma and does not enter red cells. Blood volume is plasma volume divided by one minus the hematocrit, which here is 3 divided by 0.6, or about 5 L. This would be the correct answer if red cells contained albumin."
      },
      {
        "text": "Extracellular volume is 42 L, since inulin equilibrates with total body water over the study period",
        "explanation": "Incorrect. Inulin is a large polysaccharide that cannot cross cell membranes, which is precisely why it is used as an extracellular marker; it never equilibrates with intracellular water. The 42 L figure is the tritiated water space, which is total body water. This would be the correct answer if inulin were membrane-permeant."
      },
      {
        "text": "Transcellular fluid volume is 11 L, calculated as extracellular volume minus plasma volume",
        "explanation": "Incorrect. The calculation of 14 minus 3 correctly yields 11 L, but that value is the INTERSTITIAL volume. Transcellular fluid, comprising cerebrospinal, synovial, pleural, peritoneal, and gastrointestinal secretions, is a small specialized subset of only about 1 to 2 L. This would be the correct answer if interstitial and transcellular fluid were synonymous."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: 60-40-20 rule. TBW = 60 percent of body weight; ICF = 40 percent (2/3 of TBW); ECF = 20 percent (1/3 of TBW), split 1/4 plasma and 3/4 interstitium. ICF has no direct marker and is always computed as TBW minus ECF.",
    "lectureSource": "CV4: Solute Transport and Fluid Movement",
    "pdfLecture": "CV4",
    "pdfPage": 5,
    "pdfQuote": "Extracellular Fluid"
  },
  {
    "id": 28,
    "category": "Physiology: Blood Pressure Control Timescales",
    "questionText": "A 44-year-old woman donates 500 mL of blood. Her blood pressure dips transiently but is back to baseline within a minute, and she feels only briefly lightheaded. Over the next 24 hours her urine output falls and her thirst increases, and by 48 hours her plasma volume has been fully restored. Her physiology instructor uses the episode to illustrate that arterial pressure is defended by mechanisms operating on very different timescales. Which mechanism provides the dominant long-term, essentially infinite-gain control of arterial pressure?",
    "options": [
      {
        "text": "The arterial baroreceptor reflex, through continuous beat-to-beat adjustment of sympathetic and vagal outflow to the heart and vessels",
        "explanation": "Incorrect. The baroreflex is the fastest and most important SHORT-term controller, responding within seconds to correct exactly the transient dip described in the first minute. Its critical limitation is that it resets to the prevailing pressure over hours to days, so it cannot serve as the long-term set point. This would be the correct answer if the question asked what corrected her pressure within the first sixty seconds."
      },
      {
        "text": "The chemoreceptor reflex, responding to falls in arterial oxygen tension and to rises in arterial carbon dioxide tension",
        "explanation": "Incorrect. Peripheral chemoreceptors in the carotid and aortic bodies do contribute to pressure regulation, but only when mean arterial pressure falls below roughly 80 mmHg, and their principal role is control of ventilation. They act over seconds to minutes and are not a long-term controller. This would be the correct answer if the question concerned the ventilatory and pressor response to severe hypoxemia."
      },
      {
        "text": "Capillary fluid shift, in which a fall in capillary hydrostatic pressure draws interstitial fluid into the vascular space",
        "explanation": "Incorrect. Transcapillary refill is a genuine intermediate mechanism that operates over minutes to hours and does help restore plasma volume after hemorrhage, and it contributes to the recovery described here. However, it is self-limited by the size of the interstitial reservoir and cannot set a long-term pressure. This would be the correct answer if the question asked which mechanism restores plasma volume over the first several hours."
      },
      {
        "text": "The renal pressure natriuresis and diuresis mechanism, adjusting extracellular fluid volume until pressure returns to its set point",
        "explanation": "Correct. The kidney occupies a unique position because it can continue to alter extracellular fluid volume indefinitely, so any residual error in arterial pressure keeps changing sodium and water excretion until the error is abolished. This is what is meant by infinite gain: unlike the baroreflex, the renal-body fluid feedback does not reset and does not fatigue. A rise in arterial pressure increases sodium and water excretion, shrinking volume until pressure falls, and a fall in pressure, as after this donation, produces sodium and water retention along with RAAS activation, ADH release, and thirst until volume and pressure are restored. This is why long-term hypertension in essentially all forms requires a shift in the renal pressure natriuresis relationship."
      },
      {
        "text": "The renin-angiotensin-aldosterone system, acting through direct angiotensin II vasoconstriction of systemic resistance arterioles",
        "explanation": "Incorrect. Angiotensin II is a potent vasoconstrictor and RAAS is centrally involved in the response described, but the vasoconstrictor arm operates over minutes to hours and is an intermediate-term mechanism. The long-term power of RAAS comes from the aldosterone-mediated and angiotensin-mediated effects on renal sodium handling, that is, from acting through pressure natriuresis rather than through vascular tone. This would be the correct answer if the question asked what maintains her blood pressure over the first several hours after donation."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Seconds equals baroreflex, chemoreflex, CNS ischemic response. Minutes to hours equals RAAS vasoconstriction, capillary fluid shift, stress relaxation. Days and beyond equals renal pressure natriuresis, the only mechanism with infinite gain because the kidney can keep changing ECF volume indefinitely.",
    "lectureSource": "CV8: Regulation of Sodium and Water Excretion",
    "pdfLecture": "CV8",
    "pdfPage": 43,
    "pdfQuote": "The sole controller of blood pressure over the long run"
  },
  {
    "id": 29,
    "category": "Embryology: Mesonephric Duct Derivatives",
    "questionText": "A 28-year-old woman is found on pelvic examination to have a smooth, tense 2 cm cystic swelling in the anterolateral wall of the upper vagina. It is asymptomatic and was discovered incidentally. Imaging confirms a simple cyst that does not communicate with the urethra or bladder. Her physician explains that this represents persistence of an embryonic duct that normally regresses in females. From which structure did this cyst most likely arise, and what does that same duct give rise to in the male?",
    "options": [
      {
        "text": "The mesonephric (Wolffian) duct, which in the male forms the epididymis, ductus deferens, seminal vesicle and ejaculatory duct",
        "explanation": "Correct. In the female, the absence of testosterone causes the mesonephric duct to regress, but remnants commonly persist as the epoophoron and paroophoron in the broad ligament and as Gartner duct cysts along the anterolateral vaginal wall, which is exactly the lesion described. In the male, testosterone from the Leydig cells maintains this duct, and it differentiates into the epididymis, ductus deferens, seminal vesicle, and ejaculatory duct. The same duct is also developmentally indispensable in both sexes because the ureteric bud arises from its caudal end, which is why mesonephric duct anomalies are frequently accompanied by ipsilateral renal anomalies."
      },
      {
        "text": "The paramesonephric (Mullerian) duct, which in the male regresses and leaves only the appendix testis and the prostatic utricle",
        "explanation": "Incorrect. The paramesonephric duct is the one that persists in the female, forming the fallopian tubes, uterus, cervix, and upper vagina; it is the duct suppressed in males by Mullerian-inhibiting substance from Sertoli cells, leaving only the appendix testis and prostatic utricle as vestiges. Since it develops rather than regresses in the female, its persistence would not be described as a remnant cyst. This would be the correct answer if the question described a rudimentary uterine horn."
      },
      {
        "text": "The urogenital sinus, which in the male forms the prostate, the prostatic urethra and the paired bulbourethral glands",
        "explanation": "Incorrect. The urogenital sinus does give rise to the bladder, urethra, lower vagina, and the prostatic and bulbourethral glands, and cysts of urogenital sinus origin do occur, but they arise at or near the introitus and hymenal ring rather than high on the anterolateral vaginal wall. This would be the correct answer if the lesion described were a Bartholin gland cyst at the vaginal introitus."
      },
      {
        "text": "The pronephric duct, which in the male gives rise to the rete testis and the coiled seminiferous tubules of each testis",
        "explanation": "Incorrect. The pronephros is the first and most rudimentary of the three embryonic kidneys, appears in the fourth week, and regresses completely in both sexes without leaving derivatives. The rete testis and seminiferous tubules arise from the gonadal ridge and primitive sex cords, not from a duct. This would be the correct answer if the pronephros persisted into adult life."
      },
      {
        "text": "The allantois (urachus), which in the male forms the median umbilical ligament and part of the dome of the bladder",
        "explanation": "Incorrect. The allantois does persist as the urachus and then the median umbilical ligament in both sexes, and its failure to obliterate produces urachal cysts, sinuses, or a patent urachus. However, those lesions lie in the midline between the umbilicus and the bladder dome, not in the vaginal wall. This would be the correct answer if the patient had a midline infraumbilical cyst or urine draining from the umbilicus."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Mesonephric (Wolffian) duct needs testosterone to persist: epididymis, ductus deferens, seminal vesicle, ejaculatory duct. In females it regresses, leaving the epoophoron, paroophoron, and Gartner duct cysts. It also gives off the ureteric bud, so its anomalies come with renal anomalies.",
    "lectureSource": "CV3: Genitourinary Embryology",
    "pdfLecture": "CV3",
    "pdfPage": 14,
    "pdfQuote": "In females the paramesonephric duct is derived from the uterus as a diverticulum"
  },
  {
    "id": 30,
    "category": "Physiology: Amino Acid Transport",
    "questionText": "A 21-year-old man presents with his fourth episode of renal colic since adolescence. A stone recovered from the urine is hexagonal and yellow-brown, and it is faintly radiopaque on plain film. Urine microscopy shows characteristic hexagonal crystals, and a urinary amino acid panel shows markedly elevated excretion of cystine, ornithine, lysine, and arginine, while plasma levels of all four are normal or low. Which of the following best explains the biochemical findings?",
    "options": [
      {
        "text": "Overproduction of cystine by the liver has raised the filtered load beyond the capacity of a normal transport system",
        "explanation": "Incorrect. If overproduction were the problem, the plasma concentration would be elevated; here plasma levels are normal or low, which localizes the defect to renal handling rather than to synthesis. The pattern of a normal plasma level with a high urinary level is the signature of a tubular transport defect. This would be the correct answer if the plasma cystine were markedly elevated, as in the lysosomal storage disorder cystinosis."
      },
      {
        "text": "Deficiency of the megalin-cubilin endocytic receptor has impaired reabsorption of filtered low-molecular-weight proteins",
        "explanation": "Incorrect. Megalin and cubilin retrieve filtered peptides and low-molecular-weight proteins such as beta-2 microglobulin, retinol-binding protein, and albumin by receptor-mediated endocytosis, and their failure produces tubular proteinuria. Free amino acids are handled by distinct apical sodium-dependent carriers, not by endocytosis. This would be the correct answer if the urine showed low-molecular-weight proteinuria rather than aminoaciduria."
      },
      {
        "text": "A generalized proximal tubular transport failure has produced simultaneous wasting of amino acids, glucose, phosphate, and bicarbonate",
        "explanation": "Incorrect. This describes Fanconi syndrome, which is a genuine cause of aminoaciduria, but it would waste every proximally reabsorbed solute rather than four structurally related amino acids, and the patient would have glycosuria with normal blood glucose, hypophosphatemia, and a proximal renal tubular acidosis. The selective four-amino-acid pattern here excludes it. This would be the correct answer if he also had glycosuria, hypophosphatemia, and a normal anion gap acidosis."
      },
      {
        "text": "Saturation of the organic cation secretory system has forced these amino acids to be secreted into the tubular lumen",
        "explanation": "Incorrect. Amino acids appear in the urine by escaping reabsorption, not by being secreted, and they are not substrates of the organic cation secretory pathway that handles creatinine, cimetidine, and metformin. Invoking secretion also cannot explain why plasma levels are low. This would be the correct answer if the solute in question were a cationic drug competing at OCT2."
      },
      {
        "text": "A defect in the apical dibasic amino acid transporter of the proximal tubule prevents reabsorption of cystine and the dibasic amino acids",
        "explanation": "Correct. Amino acids are reabsorbed almost entirely in the proximal tubule by sodium-dependent secondary active carriers that are grouped by amino acid class: neutral, acidic, dibasic, and imino. Because each class has its own carrier, a mutation in one produces a selective aminoaciduria. Cystinuria is a defect in the rBAT/b0,+AT transporter that handles cystine and the dibasic amino acids ornithine, lysine, and arginine, remembered by the mnemonic COLA. Plasma levels stay normal or low because the amino acids are being lost rather than accumulated. Of the four, only cystine is poorly soluble at acidic urinary pH, which is why the clinical manifestation is recurrent hexagonal cystine stones treated with high fluid intake, urinary alkalinization, and thiol agents."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Amino acids are reabsorbed proximally by class-specific sodium-dependent carriers, so defects are selective. Cystinuria wastes COLA (Cystine, Ornithine, Lysine, Arginine); only cystine is insoluble, giving hexagonal crystals and recurrent stones from childhood.",
    "lectureSource": "CV10: Urea, Glucose and Organic Solute Transport",
    "pdfLecture": "CV10",
    "pdfPage": 11,
    "pdfQuote": "Amino Acid Transport in the Nephron"
  },
  {
    "id": 31,
    "category": "Physiology: Intercalated Cells and Potassium",
    "questionText": "A 33-year-old woman with anorexia nervosa and self-induced vomiting is admitted with weakness and tetany. Serum potassium is 2.2 mEq/L, bicarbonate is 40 mEq/L, and chloride is 82 mEq/L. Her urine chloride is 6 mEq/L. Despite aggressive potassium chloride repletion her bicarbonate remains elevated until she is also given normal saline. Which of the following best explains the reciprocal relationship between her potassium depletion and her metabolic alkalosis?",
    "options": [
      {
        "text": "Alkalosis increases the filtered load of potassium, which is then lost because the tubular reabsorptive transporters are already saturated",
        "explanation": "Incorrect. The filtered load of potassium depends on plasma potassium and GFR, and in any case essentially all filtered potassium is reclaimed before the collecting duct. Urinary potassium reflects distal secretion rather than escape from a saturated reabsorptive step. This would be the correct answer if potassium excretion behaved like the filtration-limited handling of inulin."
      },
      {
        "text": "Hypokalemia inhibits the Na-K-ATPase, so potassium accumulates in the tubular lumen and is excreted there together with the filtered bicarbonate",
        "explanation": "Incorrect. Inhibiting the basolateral Na-K-ATPase would reduce, not increase, the intracellular potassium available for apical secretion, so it would blunt kaliuresis. The pump is also the pathway that loads potassium into the cell rather than into the lumen, so the direction described is reversed. This would be the correct answer if the mechanism under discussion were digoxin toxicity causing hyperkalemia."
      },
      {
        "text": "Potassium depletion shifts hydrogen into cells and drives the type A intercalated cell H-K-ATPase, secreting hydrogen and reclaiming potassium",
        "explanation": "Correct. The relationship runs in both directions. As potassium leaves cells to defend the plasma level, hydrogen ion moves in to preserve electroneutrality, so the extracellular fluid becomes alkalotic and the tubular cells become intracellularly acidotic. That intracellular acidosis stimulates hydrogen secretion and bicarbonate generation. At the same time, potassium depletion upregulates the H-K-ATPase of the type A intercalated cell, which reclaims luminal potassium in direct exchange for secreted hydrogen, further adding bicarbonate to the blood. Vomiting supplies the initiating insult by losing hydrochloric acid and generating volume depletion, and the resulting secondary hyperaldosteronism drives still more distal potassium secretion. Her urine chloride of 6 identifies this as a chloride-responsive alkalosis, which is why it corrected only when saline restored chloride and volume."
      },
      {
        "text": "Aldosterone deficiency has reduced sodium reabsorption in the collecting duct, generating both the hypokalemia and the metabolic alkalosis",
        "explanation": "Incorrect. Aldosterone deficiency produces the opposite electrolyte picture: hyperkalemia with a hyperchloremic metabolic acidosis, the type 4 renal tubular acidosis pattern. This patient has secondary hyperaldosteronism from volume depletion, not deficiency. This would be the correct answer if she presented with a potassium of 6.0 and a normal anion gap acidosis."
      },
      {
        "text": "Loss of bicarbonate-rich gastric fluid during vomiting has produced a compensatory renal retention of both potassium and chloride",
        "explanation": "Incorrect. Gastric secretions lost in vomiting are rich in hydrochloric acid, not bicarbonate; losing acid is precisely what generates the alkalosis. Loss of intestinal bicarbonate, as in severe diarrhea, would cause a normal anion gap metabolic ACIDOSIS with hypokalemia. This would be the correct answer if she had high-volume secretory diarrhea rather than vomiting."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Hypokalemia and metabolic alkalosis reinforce each other. K leaves cells and H enters, causing intracellular acidosis and extracellular alkalosis; the type A intercalated cell H-K-ATPase then trades secreted H for reclaimed K. Urine chloride below 20 marks a saline-responsive alkalosis.",
    "lectureSource": "CV9: K+, Ca++, Mg++ and Phosphate Transport",
    "pdfLecture": "CV9",
    "pdfPage": 16,
    "pdfQuote": "Intercalated cells:"
  },
  {
    "id": 32,
    "category": "Renal Physiology: RAAS",
    "questionText": "A 72-year-old man with a 60-pack-year smoking history, peripheral arterial disease, and blood pressure of 176/96 mmHg on three agents is started on lisinopril. Five days later his creatinine has risen from 1.2 to 2.6 mg/dL and his potassium is 5.7 mEq/L. He is making urine and has no obstruction on ultrasound, but Doppler demonstrates elevated velocities in both renal arteries. Which of the following best explains the abrupt decline in his glomerular filtration rate?",
    "options": [
      {
        "text": "Direct tubular toxicity of the drug has caused acute tubular necrosis with epithelial sloughing in both kidneys",
        "explanation": "Incorrect. ACE inhibitors are not tubular toxins, and acute tubular necrosis would produce muddy brown granular casts, a high fractional excretion of sodium, and an insidious rather than immediately reversible course. The rise here is purely hemodynamic and reverses when the drug is stopped. This would be the correct answer if he had received a course of an aminoglycoside or intravenous contrast."
      },
      {
        "text": "An immune-mediated acute interstitial nephritis has developed as a hypersensitivity response to the newly added medication",
        "explanation": "Incorrect. Acute interstitial nephritis is a real drug reaction and can follow many agents, but it typically appears after one to three weeks, is accompanied by pyuria with white cell casts and sometimes eosinophiluria, rash, and fever, and is not associated with the specific vascular anatomy demonstrated here. This would be the correct answer if he had a rash, fever, and sterile pyuria two weeks after starting a proton pump inhibitor or a beta-lactam."
      },
      {
        "text": "Systemic hypotension from the antihypertensive effect has dropped renal perfusion below the autoregulatory range",
        "explanation": "Incorrect. Excessive blood pressure lowering can certainly cause pre-renal azotemia, but the vignette gives no hypotension, and a purely systemic effect would not explain why bilateral renal artery stenosis is the critical predisposing lesion. The mechanism is intraglomerular rather than systemic. This would be the correct answer if his blood pressure had fallen to 82/48 mmHg."
      },
      {
        "text": "Loss of afferent arteriolar myogenic tone has allowed transmission of systemic pressure into the glomerular capillaries",
        "explanation": "Incorrect. Loss of afferent tone would raise glomerular capillary pressure and increase GFR, not lower it. Afferent dilation is protective in hypoperfusion states and is one of the reasons NSAIDs, which block the prostaglandins that mediate it, are dangerous in this setting. This would be the correct answer if the question asked how NSAIDs precipitate acute kidney injury in a volume-depleted patient."
      },
      {
        "text": "Blocking angiotensin II removed the efferent arteriolar tone sustaining glomerular filtration in both stenotic kidneys",
        "explanation": "Correct. When the renal arteries are stenotic, the pressure delivered to the glomerulus is already low, and filtration is sustained only because chronically elevated angiotensin II constricts the efferent arteriole and holds glomerular capillary hydrostatic pressure up. An ACE inhibitor removes that constriction, the efferent arteriole dilates, glomerular capillary pressure collapses, and GFR falls abruptly even though renal plasma flow may actually improve. Because the lesion is bilateral, no healthy kidney is available to compensate, so the creatinine rise is dramatic. The hyperkalemia has the same origin: less angiotensin II means less aldosterone, and therefore less ENaC-driven sodium reabsorption and less potassium secretion by principal cells. A rise of more than about 30 percent in creatinine after starting RAAS blockade should prompt evaluation for renovascular disease."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Angiotensin II holds up GFR by constricting the EFFERENT arteriole. In bilateral renal artery stenosis (or stenosis of a solitary kidney), ACE inhibitors and ARBs remove that support and cause an abrupt, reversible fall in GFR with hyperkalemia.",
    "lectureSource": "CV7: GFR, Renal Blood Flow and Clearance",
    "pdfLecture": "CV7",
    "pdfPage": 25,
    "pdfQuote": "constricts the efferent arteriole in the kidneys (greater concentration of A T1 receptors)"
  },
  {
    "id": 33,
    "category": "OMM: Fibular BLT",
    "questionText": "A 26-year-old recreational soccer player inverted her right ankle two weeks ago. She continues to have lateral ankle pain and reports that the ankle feels unstable. Radiographs are negative for fracture. Structural exam shows a right fibular head that is tender and resists anterior glide, with restricted posterior motion, and there is a corresponding restriction at the distal fibula. The physician elects a ligamentous articular approach at the fibular head. Which of the following describes correct application of the technique at this site?",
    "options": [
      {
        "text": "Thrust the fibular head anteriorly while dorsiflexing and everting the ankle to restore posterior glide",
        "explanation": "Incorrect. This is an HVLA description, and it also confuses the mechanics: an anterior fibular head is one that has glided anteriorly and resists posterior motion, so a corrective direct force would be posterior, not anterior. Neither the direction nor the technique class fits the vignette. This would be the correct answer if the question described a direct fibular head thrust for a posterior fibular head."
      },
      {
        "text": "Hold the ankle in maximal dorsiflexion and eversion for 90 seconds while monitoring a tender point on the fibular head",
        "explanation": "Incorrect. Positioning for 90 seconds while monitoring a tender point describes counterstrain, a different indirect technique with its own protocol. Counterstrain also positions into shortening of the tissue containing the tender point, which for a lateral ankle would generally mean inversion and plantarflexion rather than dorsiflexion and eversion. This would be the correct answer if the technique named were Jones counterstrain."
      },
      {
        "text": "Apply a sustained longitudinal stretch to the interosseous membrane until tissue creep is palpated",
        "explanation": "Incorrect. Sustained loading of the interosseous membrane to produce creep is a direct myofascial release, which engages rather than avoids the barrier. It is a reasonable technique in principle but is not BLT, and it does not involve finding a point of balance among the ligaments of the articulation. This would be the correct answer if the question described direct myofascial release of the leg."
      },
      {
        "text": "Carry the fibular head into its position of ease, add a gentle compressive vector, and hold at the point of balanced tension",
        "explanation": "Correct. The proximal and distal tibiofibular joints are ligamentous articulations linked by the interosseous membrane, and they behave as a unit, which is why an inversion injury commonly leaves dysfunction at both ends. In balanced ligamentous tension the physician grasps the fibular head, disengages it slightly, exaggerates the dysfunction by carrying it into its freedom of motion, and then adds a small compressive or distractive force along the long axis until tension is equalized among the anterior and posterior tibiofibular ligaments and the interosseous membrane. Holding there and using the patient's respiration as an inherent force allows the release. Because no barrier is engaged, the technique is well tolerated in a recently injured, guarded ankle, and the distal joint should be treated as well."
      },
      {
        "text": "Have the patient dorsiflex against resistance for five seconds, relax, then take up the slack into further dorsiflexion",
        "explanation": "Incorrect. This is muscle energy using post-isometric relaxation, a direct technique that repeatedly engages the restrictive barrier and depends on the patient's voluntary muscular effort. BLT deliberately removes muscular effort from the equation and works through the ligaments. This would be the correct answer if the question asked how to perform muscle energy for a restricted talocrural joint."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: The proximal and distal tibiofibular joints move together through the interosseous membrane, so treat both after an ankle inversion injury. BLT sequence at any joint: DISENGAGE, EXAGGERATE, BALANCE, then hold and let respiratory cooperation and fluid fluctuation finish the work.",
    "lectureSource": "CV2: BLT - Cervical, Thoracic, Lumbosacral, Fibula",
    "pdfLecture": "CV2",
    "pdfPage": 13,
    "pdfQuote": "BLT of the Fibula (and interosseous"
  },
  {
    "id": 34,
    "category": "Physiology: Aldosterone",
    "questionText": "A 46-year-old man with hypertension resistant to three drugs is found to have a potassium of 3.1 mEq/L, a bicarbonate of 31 mEq/L, and a plasma aldosterone-to-renin ratio of 48. Imaging shows a 1.6 cm left adrenal adenoma. His physician notes that despite years of aldosterone excess, he is only mildly hypertensive rather than massively volume overloaded, and he has no edema. Which of the following best explains the absence of progressive edema in this patient?",
    "options": [
      {
        "text": "Aldosterone acts only on the proximal tubule, which always reabsorbs a fixed fraction of the filtered sodium load",
        "explanation": "Incorrect. Aldosterone acts on the principal cells of the late distal tubule and collecting duct through the mineralocorticoid receptor, increasing ENaC, ROMK, and Na-K-ATPase expression. The proximal tubule is regulated chiefly by angiotensin II, sympathetic tone, and peritubular Starling forces. This would be the correct answer if aldosterone's target were the proximal tubule."
      },
      {
        "text": "Volume expansion triggers pressure natriuresis and natriuretic peptides, restoring sodium balance at a new steady state",
        "explanation": "Correct. This is the aldosterone escape phenomenon. Initially aldosterone causes sodium and water retention, extracellular volume rises, and blood pressure increases. That rise in perfusion pressure directly increases sodium excretion through pressure natriuresis, and the accompanying atrial stretch releases ANP and BNP, which inhibit sodium reabsorption in the medullary collecting duct and suppress renin. Together these responses re-establish sodium balance after a gain of only about 1.5 to 2 liters, so the patient stabilizes at a modestly expanded volume with hypertension but without edema. Escape applies only to sodium; there is no escape from the kaliuretic effect, which is why the hypokalemia and metabolic alkalosis persist indefinitely."
      },
      {
        "text": "Angiotensin II is suppressed, and without that permissive signal aldosterone cannot bind the mineralocorticoid receptor",
        "explanation": "Incorrect. Renin and angiotensin II are indeed suppressed in primary hyperaldosteronism, which is what produces the high aldosterone-to-renin ratio, but aldosterone binds and activates its receptor autonomously and does not require angiotensin II as a permissive cofactor. This would be the correct answer if aldosterone signaling were angiotensin-dependent."
      },
      {
        "text": "The hypokalemia impairs ENaC insertion in the collecting duct, limiting the amount of sodium that can be reabsorbed there",
        "explanation": "Incorrect. Hypokalemia does not meaningfully limit ENaC-mediated sodium reabsorption; if anything, the sustained kaliuresis is evidence that the aldosterone-driven transport machinery in the principal cell is fully active. Sodium retention is limited by systemic escape mechanisms, not by the potassium level. This would be the correct answer if potassium were a required cofactor for ENaC trafficking."
      },
      {
        "text": "The metabolic alkalosis reduces the glomerular filtration rate and thus lowers the filtered load of sodium reaching the tubule",
        "explanation": "Incorrect. A mild metabolic alkalosis does not appreciably change GFR, and in any case a lower filtered load would be met by proportionally lower reabsorption through glomerulotubular balance rather than by a change in net sodium excretion. The alkalosis here is a consequence of the potassium and hydrogen ion losses, not a regulator of volume. This would be the correct answer if sodium excretion were determined by filtered load alone."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: ALDOSTERONE ESCAPE. Pressure natriuresis plus ANP/BNP limit sodium retention to about 1.5-2 L, so primary hyperaldosteronism causes hypertension WITHOUT edema. There is no escape from the kaliuresis, so hypokalemia and metabolic alkalosis persist.",
    "lectureSource": "CV8: Regulation of Sodium and Water Excretion",
    "pdfLecture": "CV8",
    "pdfPage": 32,
    "pdfQuote": "The Natriuretic Peptides: released from cardiac"
  },
  {
    "id": 35,
    "category": "Physiology: Epithelium vs Endothelium",
    "questionText": "During a small-group session a student is asked to contrast the barrier in the proximal tubule with the barrier in a systemic capillary. The instructor points out that a proximal tubular cell can move sodium from a lumen with a concentration of 140 mEq/L into an interstitium with the same concentration, and can do so continuously, whereas a capillary can only permit movement down existing gradients. Which structural feature most fundamentally accounts for this difference in capability?",
    "options": [
      {
        "text": "Epithelial cells are polarized by tight junctions into apical and basolateral membranes with different transporters",
        "explanation": "Correct. The defining property of a transporting epithelium is polarity. Tight junctions form a circumferential seal near the apical pole that both restricts paracellular movement and, critically, prevents membrane proteins from diffusing between the two faces of the cell. That allows an apical membrane bearing NHE3, SGLT2, and other entry pathways to be paired with a basolateral membrane bearing the Na-K-ATPase, which sets up the sodium gradient that powers all of the secondary active transport at the apical face. Because energy is expended at a defined location and the two membranes carry different proteins, the cell can move solute uphill, against a concentration gradient, in a fixed direction. Endothelium is not polarized in this way and functions as an exchange barrier rather than a pump."
      },
      {
        "text": "Endothelial cells lack mitochondria and therefore cannot support ATP-dependent pumping of sodium against a gradient",
        "explanation": "Incorrect. Endothelial cells contain mitochondria and are metabolically active, synthesizing nitric oxide, prostacyclin, endothelin, and von Willebrand factor, and they carry out receptor-mediated transcytosis. Their inability to move solute uphill reflects the absence of polarized transport machinery, not the absence of ATP. This would be the correct answer if endothelium were metabolically inert."
      },
      {
        "text": "Capillaries are fenestrated everywhere in the body, so no solute concentration gradient can be maintained across them",
        "explanation": "Incorrect. Capillary structure varies substantially: continuous capillaries in muscle and brain, fenestrated capillaries in the glomerulus and gut, and discontinuous sinusoids in the liver, spleen, and bone marrow. Even continuous capillaries, which are the least permeable, still cannot perform uphill transport, so fenestration is not the explanatory variable. This would be the correct answer if all capillaries were structurally identical."
      },
      {
        "text": "Epithelial cells are joined by gap junctions, which allow direct cytoplasmic continuity and coordinated pumping of sodium",
        "explanation": "Incorrect. Gap junctions do provide cytoplasmic continuity and are important for electrical coupling in cardiac muscle, smooth muscle, and some epithelia, but they equalize the cytoplasm between cells and do not create the apical-basolateral asymmetry required for vectorial transport. The junction that matters here is the tight junction. This would be the correct answer if the question asked how cardiac myocytes propagate an action potential."
      },
      {
        "text": "Epithelial barriers are avascular, so solutes cannot be carried away and gradients simply accumulate by default",
        "explanation": "Incorrect. Epithelia are avascular in the sense that capillaries do not penetrate them, but that is a consequence of their organization rather than the reason they can transport uphill, and in the kidney the peritubular capillaries lie immediately beneath the basement membrane and are essential for carrying reabsorbate away. Removing solute is required to sustain transport, not to enable it. This would be the correct answer if gradients formed passively from a lack of blood supply."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Transporting EPITHELIUM is polarized by tight junctions into apical and basolateral membranes with different proteins, with the basolateral Na-K-ATPase as the energy source. That polarity permits uphill, vectorial transport. ENDOTHELIUM is an exchange barrier and moves solute only down gradients.",
    "lectureSource": "CV4: Solute Transport and Fluid Movement",
    "pdfLecture": "CV4",
    "pdfPage": 18,
    "pdfQuote": "Epithelium: An uninterrupted sheet of cells that are joined together by junctional"
  },
  {
    "id": 36,
    "category": "Pharmacology: Organic Base Secretory System",
    "questionText": "A 64-year-old woman with type 2 diabetes on metformin is prescribed cimetidine for reflux. Two weeks later her serum creatinine has risen from 0.9 to 1.2 mg/dL, but a measured iohexol clearance is unchanged from six months earlier. She has no symptoms, her urine output is normal, and her urinalysis is bland. Her physician reassures her that her kidney function has not actually declined. Which of the following best explains the rise in her measured serum creatinine?",
    "options": [
      {
        "text": "Cimetidine has induced a subclinical interstitial nephritis that is not yet reflected in the bland urinalysis",
        "explanation": "Incorrect. Interstitial nephritis would reduce true GFR, and the iohexol clearance, which measures filtration directly, is unchanged. A bland urinalysis with a normal measured GFR argues strongly against any structural injury. This would be the correct answer if the iohexol clearance had fallen in parallel with the creatinine."
      },
      {
        "text": "Cimetidine increases skeletal muscle creatine turnover, raising the endogenous production of creatinine",
        "explanation": "Incorrect. Creatinine generation reflects muscle mass, dietary meat intake, and creatine supplementation, and cimetidine has no effect on muscle metabolism. Increased generation is a real cause of a spurious creatinine rise, but it is not this drug's mechanism. This would be the correct answer if she had begun taking creatine supplements or eating large quantities of cooked meat before the draw."
      },
      {
        "text": "Cimetidine interferes with the Jaffe colorimetric assay, producing a falsely elevated laboratory value",
        "explanation": "Incorrect. Assay interference is a genuine cause of spurious creatinine values, classically from bilirubin, ketones, and certain cephalosporins with the Jaffe reaction. Cimetidine, however, causes a true rise in plasma creatinine concentration rather than an analytical artifact. This would be the correct answer if the patient were in diabetic ketoacidosis with high acetoacetate levels measured by a Jaffe method."
      },
      {
        "text": "Cimetidine inhibits the organic anion transporters, reducing the proximal tubular secretion of creatinine",
        "explanation": "Incorrect. The transporter family is wrong in both directions: creatinine is a cation handled by OCT2 and MATE, and cimetidine is likewise a cation. The organic anion system handles PAH, penicillins, methotrexate, diuretics, and urate. This would be the correct answer if the interacting pair were probenecid and penicillin."
      },
      {
        "text": "Cimetidine competes with creatinine for the proximal tubular organic cation transporters that secrete it",
        "explanation": "Correct. Creatinine is freely filtered but is also secreted into the proximal tubular lumen by the organic cation pathway, with OCT2 handling basolateral uptake and MATE1 and MATE2-K handling apical efflux. That secreted component normally accounts for roughly 10 to 20 percent of urinary creatinine. Cimetidine, trimethoprim, and dolutegravir are competing cations that block this pathway, so less creatinine is secreted, plasma creatinine rises, and estimated GFR appears to fall while true filtration is untouched. The same transporters carry metformin, which is why cimetidine can also raise metformin levels, a more clinically consequential aspect of this interaction. Recognizing the pattern of a rising creatinine with an unchanged measured GFR avoids unnecessary workup and inappropriate drug discontinuation."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Cimetidine, trimethoprim, and dolutegravir block OCT2/MATE-mediated tubular SECRETION of creatinine. Serum creatinine rises and eGFR appears to fall, but true GFR is unchanged. No proteinuria, no sediment, and a stable measured clearance distinguish this from real injury.",
    "lectureSource": "CV10: Urea, Glucose and Organic Solute Transport",
    "pdfLecture": "CV10",
    "pdfPage": 16,
    "pdfQuote": "Organic Base Secretory System (OASS)"
  },
  {
    "id": 37,
    "category": "Physiology: Tubular Structure and Function",
    "questionText": "An electron micrograph of a renal cortical biopsy shows two adjacent tubular profiles. Tubule A has a tall, densely packed apical brush border, extensive basolateral membrane infoldings, and abundant elongated mitochondria. Tubule B has a simple cuboidal epithelium with a sparse apical surface, few mitochondria, and prominent tight junctions, and it lies immediately adjacent to a vascular pole. A student is asked to predict how each segment behaves. Which of the following statements is correct?",
    "options": [
      {
        "text": "Tubule A reabsorbs about two thirds of the filtered load isosmotically, while Tubule B can generate a steep transepithelial gradient",
        "explanation": "Correct. Tubule A is the proximal convoluted tubule: the brush border massively amplifies apical surface area for transporters such as NHE3 and SGLT2, the basolateral infoldings house the Na-K-ATPase, and the mitochondrial density supplies the ATP for the largest reabsorptive job in the nephron. Its tight junctions are leaky and it is highly water permeable, so reabsorption is isosmotic and bulk: about 65 to 70 percent of filtered sodium and water, essentially all glucose and amino acids, and most bicarbonate. Tubule B has the low-transport morphology and tight junctions of a distal segment, which is exactly what permits a steep gradient to be maintained. Tight epithelia move less total solute but can create large concentration differences, which is why final urine composition is set distally while bulk reclamation happens proximally."
      },
      {
        "text": "Tubule A must be the site of aldosterone-regulated sodium reabsorption, because of its dense population of elongated mitochondria",
        "explanation": "Incorrect. Mitochondrial density reflects transport workload, not hormone responsiveness. Aldosterone acts on the principal cells of the late distal tubule and cortical collecting duct through the mineralocorticoid receptor and ENaC, not on the proximal tubule, which is regulated chiefly by angiotensin II, sympathetic tone, and peritubular Starling forces. This would be the correct answer if aldosterone's target segment were the proximal tubule."
      },
      {
        "text": "Tubule B must be the thick ascending limb, because only that segment of the nephron possesses tight junctions between its epithelial cells",
        "explanation": "Incorrect. The thick ascending limb is indeed a tight, water-impermeable, high-transport segment, but it is also mitochondria-rich because NKCC2 transport is metabolically expensive, which does not match the sparse mitochondria described. Tight junctions are also present in all distal segments, not uniquely in the thick limb. This would be the correct answer if Tubule B had shown abundant mitochondria with a water-impermeable apical membrane."
      },
      {
        "text": "Tubule A can generate the steepest transepithelial gradients of any nephron segment, because of its enormous apical surface area",
        "explanation": "Incorrect. This inverts the leaky-versus-tight principle. The proximal tubule's leaky junctions and high water permeability mean that any gradient it creates is immediately dissipated by paracellular backleak and osmotic water flow, so tubular fluid leaves it essentially isosmotic to plasma. High capacity and high gradient are inversely related across epithelia. This would be the correct answer if transport capacity and gradient-generating ability increased together."
      },
      {
        "text": "Both tubules must be water-impermeable, since neither of them expresses an aquaporin channel in the absence of circulating ADH",
        "explanation": "Incorrect. The proximal tubule expresses aquaporin-1 constitutively and is highly water permeable regardless of ADH, which is why its reabsorption is isosmotic. Only the collecting duct depends on ADH-regulated aquaporin-2 insertion for water permeability. This would be the correct answer if all water movement in the nephron were ADH-dependent."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: LEAKY, high-capacity epithelium (proximal tubule: brush border, many mitochondria, AQP1) does bulk isosmotic reabsorption. TIGHT, low-capacity epithelium (distal nephron and collecting duct) does fine regulation and can hold steep gradients. Capacity and gradient trade off against each other.",
    "lectureSource": "CV6: Organization of the Urinary System",
    "pdfLecture": "CV6",
    "pdfPage": 15,
    "pdfQuote": "Reabsorbs 67% of the filtered H2O & electrolytes (isosmotic)"
  },
  {
    "id": 38,
    "category": "Physiology: Phosphate Handling",
    "questionText": "A 54-year-old man with stage 4 chronic kidney disease has a serum phosphate of 5.8 mg/dL, a calcium of 8.4 mg/dL, an intact parathyroid hormone of 340 pg/mL, a markedly elevated FGF23, and a low 1,25-dihydroxyvitamin D. His nephrologist explains that two hormones are both trying to lower his phosphate by the same renal mechanism, but that one of them is simultaneously making his vitamin D deficiency worse. Which of the following best describes the renal handling of phosphate in this patient?",
    "options": [
      {
        "text": "Both PTH and FGF23 increase phosphate reabsorption by inserting additional NaPi-IIa cotransporters into the proximal tubular apical membrane",
        "explanation": "Incorrect. The direction is reversed. Both hormones are phosphaturic and act by causing internalization and degradation of the sodium-phosphate cotransporters, not their insertion. Insertion and increased phosphate reabsorption are what occur in states of phosphate deficiency, when both hormones are suppressed. This would be the correct answer if the patient were hypophosphatemic with suppressed PTH and FGF23."
      },
      {
        "text": "PTH increases phosphate excretion while FGF23 decreases it, and the net renal effect depends on which of the two hormones predominates",
        "explanation": "Incorrect. FGF23 is not phosphate-retaining; it is the principal phosphatonin, and its entire physiologic purpose is to lower serum phosphate. The two hormones act in the same direction on the proximal tubule, which is the point the nephrologist is making. This would be the correct answer if FGF23 opposed PTH at the level of the proximal tubule."
      },
      {
        "text": "Phosphate is secreted rather than reabsorbed by the renal tubule, and both hormones increase the rate of that tubular secretion",
        "explanation": "Incorrect. Phosphate is filtered freely and then reabsorbed, chiefly in the proximal tubule, with roughly 80 to 90 percent of the filtered load reclaimed under normal conditions. There is no significant tubular secretion of phosphate. This would be the correct answer if phosphate were handled like PAH or urate."
      },
      {
        "text": "Both PTH and FGF23 internalize NaPi-IIa and NaPi-IIc cotransporters of the proximal tubule, and FGF23 also inhibits 1-alpha-hydroxylase",
        "explanation": "Correct. Phosphate is reabsorbed in the proximal tubule through sodium-dependent NaPi-IIa and NaPi-IIc cotransporters on the apical membrane. Both parathyroid hormone and FGF23, acting with its coreceptor Klotho, trigger endocytosis and degradation of these transporters, so both are phosphaturic. The two hormones diverge on vitamin D: PTH stimulates 1-alpha-hydroxylase and raises calcitriol, whereas FGF23 inhibits 1-alpha-hydroxylase and stimulates 24-hydroxylase, lowering calcitriol. That is why FGF23 excess in chronic kidney disease produces the combination seen here of a low 1,25-dihydroxyvitamin D despite a high PTH. Less calcitriol means less intestinal calcium absorption, hypocalcemia, and further PTH stimulation, which is the engine of secondary hyperparathyroidism and renal osteodystrophy."
      },
      {
        "text": "Phosphate handling is passive and simply follows the reabsorption of calcium within the thick ascending limb of the loop of Henle",
        "explanation": "Incorrect. Calcium is reabsorbed paracellularly in the thick ascending limb along the lumen-positive gradient and transcellularly in the distal convoluted tubule through TRPV5, but phosphate handling is a separate, hormonally regulated, proximal tubular process that does not track calcium. In fact the two often move in opposite directions under PTH, which raises calcium while lowering phosphate. This would be the correct answer if phosphate and calcium shared a common transport pathway."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: PTH and FGF23 are both PHOSPHATURIC (they internalize proximal NaPi-II cotransporters) but they oppose each other on vitamin D: PTH stimulates 1-alpha-hydroxylase, FGF23 inhibits it. FGF23 rises earliest in CKD and drives the low calcitriol of secondary hyperparathyroidism.",
    "lectureSource": "CV9: K+, Ca++, Mg++ and Phosphate Transport",
    "pdfLecture": "CV9",
    "pdfPage": 28,
    "pdfQuote": "Three separate Na+/phosphate cotransporters contribute: NaPi-IIa, NaPi-Iic"
  },
  {
    "id": 39,
    "category": "Pathology: VACTERL Association",
    "questionText": "A newborn fails to pass meconium and is noted to have no anal opening. Attempted nasogastric tube placement coils in the upper esophagus, and radiography shows the tube tip high in the chest with gas present in the stomach and bowel. Examination reveals a hypoplastic left thumb, and echocardiography demonstrates a ventricular septal defect. Renal ultrasound shows a single kidney on the right. Which embryologic process best accounts for the anorectal and genitourinary components of this constellation?",
    "options": [
      {
        "text": "Failure of the ureteric bud to bifurcate normally, which produces a blind-ending ureter together with a rudimentary rectal pouch",
        "explanation": "Incorrect. Ureteric bud branching determines the architecture of the collecting system, calyces, and ultimately nephron number, but it plays no role in dividing the hindgut from the urinary tract. A branching failure cannot produce an imperforate anus. This would be the correct answer if the only finding were a small kidney with a reduced number of calyces."
      },
      {
        "text": "Incomplete descent of the urorectal septum, leaving the cloaca inadequately divided into urogenital sinus and anorectal canal",
        "explanation": "Correct. The cloaca is the shared terminal chamber of the hindgut and the allantois, and it is divided during the fourth to seventh weeks by the descending urorectal septum into an anterior urogenital sinus and a posterior anorectal canal, with the septum ultimately fusing with the cloacal membrane to form the perineal body. If the septum descends incompletely, the two systems remain connected and the anal opening fails to form properly, producing an imperforate anus, often with a rectourethral or rectovaginal fistula. Because the mesonephric duct and the ureteric bud enter this same region, malformations here are commonly accompanied by renal and ureteric anomalies such as the unilateral agenesis seen in this infant. This constellation of vertebral, anorectal, cardiac, tracheoesophageal, renal, and limb anomalies is the VACTERL association, reflecting a shared window of vulnerability in early organogenesis rather than a single gene defect."
      },
      {
        "text": "Failure of the allantois to obliterate completely, leaving a patent urachus that connects the bladder to the umbilicus",
        "explanation": "Incorrect. A patent urachus is a real anomaly of allantoic regression and presents with urine draining from the umbilicus, but it does not obstruct or malform the anorectal canal and is not associated with renal agenesis in this pattern. This would be the correct answer if the newborn had clear fluid weeping from the umbilical stump."
      },
      {
        "text": "Persistence of the paramesonephric ducts in a male infant, owing to the absence of any Mullerian-inhibiting substance",
        "explanation": "Incorrect. Persistent Mullerian duct syndrome results from failure of Sertoli cell MIS production or of its receptor and produces retained uterine and tubal structures in an otherwise normally virilized male. It has nothing to do with anorectal or esophageal development. This would be the correct answer if a uterus and fallopian tubes had been found in a phenotypic male at herniorrhaphy."
      },
      {
        "text": "Abnormal ascent of the metanephros, which prevents the developing kidney from ever reaching the lumbar renal fossa",
        "explanation": "Incorrect. Failed ascent produces a pelvic kidney, and the ultrasound here shows a single kidney rather than an ectopic one, meaning agenesis rather than malposition. Ascent also occurs after the cloacal partition is complete and would not affect anorectal development. This would be the correct answer if renal tissue had been identified low in the pelvis on the left."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: The urorectal septum divides the cloaca into the urogenital sinus (anterior) and anorectal canal (posterior). Incomplete descent means imperforate anus, often with a fistula, and because the mesonephric duct and ureteric bud enter here, renal anomalies travel with it. Think VACTERL.",
    "lectureSource": "CV3: Genitourinary Embryology",
    "pdfLecture": "CV3",
    "pdfPage": 24,
    "pdfQuote": "VACTERL association:"
  },
  {
    "id": 40,
    "category": "Renal Pathophysiology: Diabetic Nephropathy",
    "questionText": "A 29-year-old man with type 1 diabetes of six years duration and a hemoglobin A1c of 10.2 percent has a measured glomerular filtration rate of 148 mL/min per 1.73 square meters and a urinary albumin-to-creatinine ratio of 42 mg/g. His blood pressure is 122/76 mmHg and his renal ultrasound shows kidneys at the upper limit of normal size. His physician tells him this apparently excellent filtration rate is actually a warning sign. Which mechanism best explains the elevated GFR at this stage of his disease?",
    "options": [
      {
        "text": "Increased plasma oncotic pressure from hyperglycemia has raised the net filtration pressure across the glomerular capillary wall and thus the GFR",
        "explanation": "Incorrect. A rise in plasma oncotic pressure opposes filtration and would lower GFR, since it enters the net filtration pressure equation with a negative sign. Hyperglycemia also does not raise oncotic pressure meaningfully, since glucose is a small molecule that equilibrates across the capillary wall. This would be the correct answer if the question asked how hemoconcentration after diuresis reduces filtration."
      },
      {
        "text": "Loss of the glomerular charge barrier has allowed albumin to escape, and the resulting urinary protein loss has raised the filtration fraction and the GFR",
        "explanation": "Incorrect. Albuminuria is present, and charge barrier loss is part of the developing lesion, but a modest albumin leak does not raise GFR; if anything, progressive podocyte injury eventually lowers it. This option also confuses a marker of injury with the hemodynamic mechanism. This would be the correct answer if the question asked why the albumin-to-creatinine ratio is abnormal."
      },
      {
        "text": "Mesangial matrix expansion has increased the total glomerular filtering surface area and therefore the ultrafiltration coefficient and the GFR",
        "explanation": "Incorrect. Mesangial expansion is a hallmark of diabetic glomerulosclerosis and culminates in the nodular Kimmelstiel-Wilson lesion, but it encroaches on and progressively obliterates capillary loops, reducing rather than increasing the filtering surface area and Kf. It is a later change and is associated with declining GFR. This would be the correct answer if the question described the mechanism by which GFR falls in overt nephropathy."
      },
      {
        "text": "Greater SGLT2 uptake of glucose and sodium lowers macula densa sodium chloride delivery, relaxing the afferent arteriole by tubuloglomerular feedback",
        "explanation": "Correct. In sustained hyperglycemia the filtered glucose load rises, and because SGLT2 cotransports glucose with sodium, proximal sodium reabsorption rises with it. Less sodium chloride therefore reaches the macula densa. The macula densa reads this as underperfusion and withdraws its adenosine-mediated afferent constriction while promoting renin release, so the afferent arteriole dilates and angiotensin II constricts the efferent. Both changes raise glomerular capillary hydrostatic pressure and produce the hyperfiltration seen here, along with renal enlargement. That elevated intraglomerular pressure is itself injurious over time, driving podocyte loss, albuminuria, and eventual glomerulosclerosis, which is why hyperfiltration predicts progression and why SGLT2 inhibitors and RAAS blockade are protective."
      },
      {
        "text": "Osmotic diuresis from glycosuria has expanded the circulating plasma volume, increasing renal plasma flow and therefore the filtration rate",
        "explanation": "Incorrect. An osmotic diuresis causes volume depletion, not expansion, because water and electrolytes are lost with the unreabsorbed glucose. Volume contraction would tend to lower GFR. This would be the correct answer if the question asked why an uncontrolled diabetic patient becomes dehydrated and hypernatremic."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Early diabetic nephropathy causes HYPERfiltration. High filtered glucose drags sodium in through SGLT2, so macula densa NaCl falls, tubuloglomerular feedback relaxes the afferent arteriole, and intraglomerular pressure rises. That pressure is what destroys the glomerulus, which is why SGLT2 inhibitors and RAAS blockade slow progression.",
    "lectureSource": "CV7: GFR, Renal Blood Flow and Clearance",
    "pdfLecture": "CV7",
    "pdfPage": 21,
    "pdfQuote": "Decreased perfusion due to many mechanism (HFrEF, dehydration, renal artery stenosis,"
  },
  {
    "id": 41,
    "category": "Physiology: Sodium and Blood Pressure",
    "questionText": "Two normotensive volunteers are placed on a 300 mEq per day sodium diet for one week. Volunteer A shows a rise in mean arterial pressure of 3 mmHg and excretes 298 mEq of sodium daily by day four. Volunteer B shows a rise in mean arterial pressure of 14 mmHg and does not reach sodium balance until day six, at a higher pressure. Both return to baseline on a low-sodium diet. Which of the following best characterizes the difference between these two individuals?",
    "options": [
      {
        "text": "Volunteer B has a defect in intestinal sodium absorption that delivers a larger effective sodium load to the kidneys on each day of the diet",
        "explanation": "Incorrect. Both volunteers consumed the same dietary sodium and both eventually excreted it, so the total load handled was identical. Intestinal sodium absorption is near complete in healthy people and is not a recognized determinant of salt sensitivity. This would be the correct answer if the difference lay in how much sodium actually reached the extracellular fluid."
      },
      {
        "text": "Volunteer B has a rightward-shifted renal pressure natriuresis curve, needing a higher arterial pressure to excrete the same sodium load",
        "explanation": "Correct. Sodium balance is ultimately achieved through pressure natriuresis: the kidney increases sodium excretion as renal perfusion pressure rises, and it will keep adjusting extracellular volume until intake and output match. The pressure at which that match occurs is set by the position and slope of the pressure natriuresis relationship. In a salt-resistant person like Volunteer A the curve is steep, so only a trivial pressure change is needed. In a salt-sensitive person like Volunteer B the curve is shifted rightward or flattened, often because of increased renal sympathetic tone, inappropriately non-suppressed RAAS activity, reduced nitric oxide availability, or subtle nephron loss, so balance is restored only after pressure rises substantially. This concept underlies the observation that essentially all chronic hypertension involves an abnormality of renal sodium handling."
      },
      {
        "text": "Volunteer B has a higher total body water, which dilutes the delivered daily sodium load and blunts the renal natriuretic response",
        "explanation": "Incorrect. Total body water affects the concentration change produced by a sodium load, but sodium excretion is driven by volume and pressure signals rather than by the plasma sodium concentration itself, and both subjects reached balance eventually. Dilution would not require a sustained higher pressure. This would be the correct answer if sodium excretion were governed by plasma sodium concentration."
      },
      {
        "text": "Volunteer A has a higher glomerular filtration rate, allowing a proportionally larger filtered sodium load to be excreted each day",
        "explanation": "Incorrect. Glomerulotubular balance ensures that a change in filtered load is matched by a proportional change in reabsorption, so a higher GFR does not by itself produce natriuresis. Excretion is set by the regulated distal segments and by the pressure natriuresis relationship. This would be the correct answer if sodium excretion tracked GFR directly."
      },
      {
        "text": "Volunteer B has an elevated atrial natriuretic peptide concentration that paradoxically promotes sodium retention by the kidney",
        "explanation": "Incorrect. Natriuretic peptides promote sodium excretion and vasodilation and are released in response to volume expansion, so they oppose the pressure rise rather than cause it. There is no physiologic setting in which they reverse direction and cause retention. This would be the correct answer if natriuretic peptides were antinatriuretic."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Every chronic hypertension requires a rightward shift of the renal pressure natriuresis curve; otherwise the kidney would simply excrete the excess volume and normalize pressure. Salt sensitivity is that shift made visible with a sodium load.",
    "lectureSource": "CV8: Regulation of Sodium and Water Excretion",
    "pdfLecture": "CV8",
    "pdfPage": 43,
    "pdfQuote": "The sole controller of blood pressure over the long run"
  },
  {
    "id": 42,
    "category": "OMM: Natural Agencies",
    "questionText": "A 44-year-old man with chronic mechanical low back pain asks his osteopathic physician why the treatment she performs uses so little force compared with what he expected. She explains that the technique she is using descends from a lineage beginning with A.T. Still and elaborated by W.G. Sutherland, and that its guiding premise is that the physician's role is to remove obstruction rather than to impose correction. Which of the following statements best expresses the principle she is describing?",
    "options": [
      {
        "text": "The body possesses inherent self-regulating and self-healing capacity, and treatment works by restoring the conditions under which that capacity can operate",
        "explanation": "Correct. Still's formulation of natural agencies holds that the physician does not heal the patient; the patient's own physiology does, provided that structure permits it. Balanced ligamentous tension expresses this directly. The physician finds the point at which ligamentous tensions are equal, which removes the abnormal proprioceptive drive maintaining the dysfunction, and then simply holds while the inherent forces of the body, expressed as respiratory cooperation and the fluid fluctuation, reorganize the articulation. Because the correcting force comes from within the patient rather than from the operator, the technique requires almost no external force, which is exactly what this patient noticed. Sutherland extended Still's principles into the ligamentous articular mechanism and the cranial concept along the same logic."
      },
      {
        "text": "Structure and function are unrelated, so treatment must target function directly through pharmacology",
        "explanation": "Incorrect. This contradicts the foundational osteopathic tenet that structure and function are reciprocally interrelated; that relationship is precisely why a manual intervention on structure can change physiology. The statement also misrepresents the technique being performed, which is manual rather than pharmacologic. This would be the correct answer if osteopathic principles denied a structure-function relationship."
      },
      {
        "text": "Dysfunction is fundamentally muscular, so the correcting force must come from the patient's voluntary contraction against the physician's resistance",
        "explanation": "Incorrect. This describes the rationale for muscle energy technique, which does rely on the patient's voluntary muscular effort and post-isometric relaxation. It is a valid osteopathic technique but a different one, and it does not capture the ligamentous and inherent-force emphasis being described here. This would be the correct answer if she were performing muscle energy."
      },
      {
        "text": "The physician must overcome the restrictive barrier with a force greater than the tissue resistance in order to restore motion",
        "explanation": "Incorrect. Overcoming the barrier with an external force describes direct techniques and, at the extreme, HVLA. That is the opposite of the philosophy being explained, in which the physician deliberately avoids imposing force. This would be the correct answer if the technique in question were a lumbar HVLA thrust."
      },
      {
        "text": "Healing depends on suppressing the body's inflammatory response, which is the primary obstacle to recovery",
        "explanation": "Incorrect. Osteopathic principles regard the inflammatory and immune responses as part of the body's self-regulating machinery rather than as an obstacle to be suppressed; the aim is to optimize circulation and neural function so that those responses can proceed efficiently. This would be the correct answer if the treatment rationale were anti-inflammatory pharmacotherapy."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: 'Natural agencies' is Still's principle that the body heals itself and the physician's job is to remove the obstruction. In BLT this is literal: the operator finds balance and then adds nothing, letting respiratory cooperation and fluid fluctuation perform the correction.",
    "lectureSource": "CV1: Principles of Balanced Ligamentous Tension",
    "pdfLecture": "CV1",
    "pdfPage": 24
  },
  {
    "id": 43,
    "category": "Physiology: Potassium Redistribution",
    "questionText": "A 17-year-old boy with type 1 diabetes presents in diabetic ketoacidosis with a glucose of 640 mg/dL, pH 7.08, bicarbonate 6 mEq/L, and a serum potassium of 5.4 mEq/L. He has had polyuria for three days and has lost 6 kg. The attending warns the team that his total body potassium is severely depleted and that his measured potassium will fall precipitously once treatment begins. Which of the following best explains the discrepancy between his measured serum potassium and his total body potassium?",
    "options": [
      {
        "text": "Ketoacids bind and chelate potassium within the plasma, artificially raising the potassium value that the laboratory reports",
        "explanation": "Incorrect. Ketoacids are organic anions and do not bind or chelate potassium in a way that would alter its measurement; the elevated potassium reported here is a true plasma concentration. Chelation artifacts are relevant to calcium, as with citrate in transfused blood, not to potassium. This would be the correct answer if the ion in question were ionized calcium after massive transfusion."
      },
      {
        "text": "Renal failure from volume depletion has prevented all potassium excretion, so the measured and the total body potassium are both high",
        "explanation": "Incorrect. Pre-renal azotemia is present in most patients with diabetic ketoacidosis and does limit potassium excretion somewhat, but the dominant renal event is the opposite: the osmotic diuresis drives very large urinary potassium losses over the preceding days, which is why total body potassium is depleted. The vignette explicitly states that total body potassium is low. This would be the correct answer if he were anuric with a true potassium excess."
      },
      {
        "text": "Aldosterone deficiency has caused renal potassium retention despite ongoing potassium losses from the gastrointestinal tract",
        "explanation": "Incorrect. Aldosterone is elevated, not deficient, because the osmotic diuresis and vomiting have produced substantial volume depletion and secondary hyperaldosteronism. That elevated aldosterone is one of the reasons urinary potassium losses are so large. This would be the correct answer if he had a type 4 renal tubular acidosis from hyporeninemic hypoaldosteronism."
      },
      {
        "text": "Insulin deficiency, acidemia, and hyperosmolar solvent drag shift potassium out of cells while osmotic diuresis empties body stores",
        "explanation": "Correct. Three separate forces move potassium out of cells in ketoacidosis. Insulin normally drives potassium into cells by stimulating the Na-K-ATPase, so its absence removes that push. Acidemia causes hydrogen ion to enter cells to be buffered, with potassium exiting to maintain electroneutrality. Hyperosmolarity from the hyperglycemia pulls water out of cells, and potassium follows by solvent drag as intracellular potassium concentration rises. Meanwhile the glucose-driven osmotic diuresis has been washing potassium into the urine for days, amplified by secondary hyperaldosteronism from volume depletion. The measured plasma value therefore looks normal or high while total body stores are severely depleted, and giving insulin and fluid reverses every one of the shifting forces at once, which is why potassium must be monitored closely and replaced early, and why insulin is withheld if the potassium is below about 3.3 mEq/L."
      },
      {
        "text": "Beta-adrenergic stimulation from the stress response has driven potassium out of the cells and into the plasma compartment",
        "explanation": "Incorrect. Beta-2 adrenergic stimulation drives potassium INTO cells by activating the Na-K-ATPase, which is why albuterol is used to treat hyperkalemia and why beta blockers can raise the potassium. The catecholamine surge in this patient is if anything mildly protective against the hyperkalemia rather than a cause of it. This would be the correct answer if beta-2 agonism raised serum potassium."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: In DKA the measured potassium lies. Insulin deficiency, acidemia, and hyperosmolarity shift potassium OUT of cells while osmotic diuresis depletes total body stores. Treatment reverses all the shifts at once, so anticipate a steep fall and hold insulin if K is below 3.3 mEq/L.",
    "lectureSource": "CV9: K+, Ca++, Mg++ and Phosphate Transport",
    "pdfLecture": "CV9",
    "pdfPage": 9,
    "pdfQuote": "Acidosis: PROCESS that causes an abnormal buildup of acid in the body"
  },
  {
    "id": 44,
    "category": "Physiology: Protein Reabsorption",
    "questionText": "A 46-year-old woman treated with high-dose intravenous ifosfamide develops glycosuria with a normal blood glucose, hypophosphatemia, hypouricemia, a normal anion gap metabolic acidosis, and a urine protein of 1.4 grams per day. Electrophoresis shows the urinary protein is predominantly beta-2 microglobulin and retinol-binding protein rather than albumin. Serum albumin is normal and she has no edema. Which of the following best explains the pattern of proteinuria in this patient?",
    "options": [
      {
        "text": "The glomerular charge barrier has been lost, permitting the selective filtration of small anionic proteins out of the circulating plasma",
        "explanation": "Incorrect. Loss of the charge barrier produces selective ALBUMINURIA, since albumin is the abundant plasma protein excluded largely by charge. It would also produce nephrotic-range protein losses with hypoalbuminemia and edema, none of which this patient has. This would be the correct answer if the urine protein were predominantly albumin with a serum albumin of 1.8 g/dL."
      },
      {
        "text": "Overproduction of a filtered monoclonal light chain has exceeded the reabsorptive capacity of the proximal tubular epithelium",
        "explanation": "Incorrect. Overflow proteinuria from monoclonal light chains is a genuine cause of low-molecular-weight proteinuria and of a Fanconi-like proximal tubulopathy, so the reasoning is sound, but the vignette identifies the proteins as beta-2 microglobulin and retinol-binding protein, which are normal constituents rather than a clonal product, and gives a clear nephrotoxic exposure. This would be the correct answer if serum and urine electrophoresis had shown a monoclonal kappa or lambda light chain."
      },
      {
        "text": "Increased glomerular capillary hydrostatic pressure has driven a nonselective protein leak across an otherwise intact barrier",
        "explanation": "Incorrect. Elevated intraglomerular pressure does contribute to albuminuria in diabetes and hypertension, but it produces albumin-predominant proteinuria and does not explain the accompanying glycosuria, phosphate wasting, and acidosis. Those findings localize the defect to the tubule, not the glomerulus. This would be the correct answer if the question described early diabetic nephropathy."
      },
      {
        "text": "Obstruction of the renal lymphatics has caused protein-rich interstitial fluid to leak into the urinary space of the nephron",
        "explanation": "Incorrect. Communication between lymphatics and the collecting system produces chyluria, in which the urine is milky and rich in triglyceride and lipid, classically from lymphatic filariasis. That is a very different clinical and laboratory picture from selective low-molecular-weight proteinuria. This would be the correct answer if the urine were milky white with a high triglyceride content."
      },
      {
        "text": "Proximal tubular injury has disabled megalin-cubilin receptor-mediated endocytosis of normally filtered low-molecular-weight proteins",
        "explanation": "Correct. The glomerulus is not a perfect barrier: small proteins such as beta-2 microglobulin, retinol-binding protein, alpha-1 microglobulin, and low-molecular-weight hormones are filtered in appreciable amounts, and the proximal tubule normally retrieves essentially all of them by receptor-mediated endocytosis through the megalin-cubilin complex on the brush border, degrading them in lysosomes and returning the amino acids to the circulation. Ifosfamide is a classic proximal tubular toxin, and when the brush border endocytic machinery fails, these proteins appear in the urine. The same injury explains the rest of the picture, since the proximal tubule is also where glucose, phosphate, urate, amino acids, and bicarbonate are reclaimed; losing all of them together is the definition of Fanconi syndrome. Because albumin handling is largely unaffected, the total protein loss stays modest and the serum albumin is preserved."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: TUBULAR proteinuria (beta-2 microglobulin, retinol-binding protein, 1-2 g/day, normal albumin) means failure of proximal megalin-cubilin endocytosis. GLOMERULAR proteinuria is albumin-predominant and can be nephrotic. Tubular proteinuria plus glycosuria, phosphaturia, and acidosis equals Fanconi syndrome.",
    "lectureSource": "CV10: Urea, Glucose and Organic Solute Transport",
    "pdfLecture": "CV10",
    "pdfPage": 13,
    "pdfQuote": "Reabsorption of 96-99% of filtered albumin."
  },
  {
    "id": 45,
    "category": "Physiology: Endocrine Kidney",
    "questionText": "A 63-year-old woman with stage 4 chronic kidney disease has a hemoglobin of 8.6 g/dL with a normocytic, normochromic picture, a reticulocyte index of 0.6, normal iron studies, and normal B12 and folate. She also has a calcium of 8.1 mg/dL, a phosphate of 5.4 mg/dL, and an intact parathyroid hormone of 410 pg/mL. Her nephrologist explains that two distinct endocrine functions of the kidney have failed. Which of the following correctly pairs each deficiency with the cell responsible for the missing product?",
    "options": [
      {
        "text": "Erythropoietin from juxtaglomerular granular cells of the afferent arteriole and calcitriol from principal cells of the cortical collecting duct",
        "explanation": "Incorrect. The granular cells of the afferent arteriole make renin, not erythropoietin, and principal cells handle sodium and potassium transport under aldosterone control rather than vitamin D metabolism. Both cell assignments are wrong even though the two hormones named are the right ones. This would be the correct answer if renin and erythropoietin came from the same cell."
      },
      {
        "text": "Renin from renal cortical interstitial fibroblasts and erythropoietin from the macula densa cells of the juxtaglomerular apparatus",
        "explanation": "Incorrect. This reverses the assignment: renin comes from the juxtaglomerular granular cells, and the macula densa is a sensor of luminal sodium chloride rather than an endocrine source of erythropoietin. Renin deficiency also would not explain anemia. This would be the correct answer if the macula densa were an erythropoietin-producing cell."
      },
      {
        "text": "Erythropoietin from cortical and outer medullary peritubular fibroblasts and calcitriol from proximal tubular cells with 1-alpha-hydroxylase",
        "explanation": "Correct. The kidney is an endocrine organ as well as an excretory one. Erythropoietin is produced by specialized peritubular interstitial fibroblasts in the cortex and outer medulla, which sense tissue oxygen tension through the HIF prolyl-hydroxylase system; as functioning renal mass is lost, so are these cells, producing the hypoproliferative normocytic anemia with a low reticulocyte index seen here. Separately, the proximal tubule carries out the final activation step of vitamin D, converting 25-hydroxyvitamin D to 1,25-dihydroxyvitamin D through 1-alpha-hydroxylase, a step stimulated by PTH and hypophosphatemia and inhibited by FGF23. Loss of that step lowers intestinal calcium absorption, producing the hypocalcemia and the compensatory secondary hyperparathyroidism reflected in her PTH of 410. The kidney's third major endocrine product is renin, from the granular cells of the afferent arteriole."
      },
      {
        "text": "Erythropoietin from proximal tubular cells of the cortex and calcitriol from hepatic stellate cells acting on a renal substrate",
        "explanation": "Incorrect. The proximal tubule performs 1-alpha-hydroxylation but does not make erythropoietin, and the liver performs only the 25-hydroxylation step, which is generally preserved even in significant liver disease and is not carried out by stellate cells. Both organ assignments are misplaced. This would be the correct answer if the final activation of vitamin D occurred in the liver."
      },
      {
        "text": "Thrombopoietin from glomerular mesangial cells and parathyroid hormone-related peptide from the epithelial podocytes of Bowman capsule",
        "explanation": "Incorrect. Thrombopoietin is produced chiefly by the liver, and PTH-related peptide is a paracrine factor of many tissues and a mediator of humoral hypercalcemia of malignancy, not a renal endocrine product. Neither would explain anemia or the calcium and phosphate abnormalities described. This would be the correct answer if the patient had thrombocytopenia and hypercalcemia from a squamous cell carcinoma."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The kidney's three endocrine products are RENIN (juxtaglomerular granular cells), ERYTHROPOIETIN (peritubular interstitial fibroblasts, oxygen-sensing), and CALCITRIOL (proximal tubule 1-alpha-hydroxylase). CKD knocks out the last two, giving normocytic anemia plus hypocalcemia with secondary hyperparathyroidism.",
    "lectureSource": "CV6: Organization of the Urinary System",
    "pdfLecture": "CV6",
    "pdfPage": 21,
    "pdfQuote": "90% produced in kidneys  (Erythropoietin Producing Cells (EPCs), Peritubular"
  },
  {
    "id": 46,
    "category": "Physiology: Gibbs-Donnan and Cell Volume",
    "questionText": "A unit of packed red cells is inadvertently left at room temperature for an extended period before transfusion. Laboratory analysis of the unit shows a supernatant potassium of 42 mEq/L, and the cells appear swollen on smear with increased osmotic fragility. A physiology instructor uses this to explain why cells do not swell indefinitely under normal conditions despite the presence of large intracellular anions that cannot cross the membrane. Which mechanism normally prevents this osmotic swelling in living cells?",
    "options": [
      {
        "text": "The plasma membrane is mechanically rigid and physically resists any water-driven expansion of the cell beyond its resting volume",
        "explanation": "Incorrect. Animal cell membranes are fluid lipid bilayers with very little tensile strength and will lyse rather than resist an osmotic load, which is exactly what happens when red cells are placed in hypotonic solution. Rigid walls that resist turgor are a feature of plant, fungal, and bacterial cells. This would be the correct answer if animal cells possessed a cell wall."
      },
      {
        "text": "Impermeant intracellular proteins are electrically neutral molecules, so they exert no osmotic pull on water across the membrane",
        "explanation": "Incorrect. Intracellular proteins and organic phosphates carry a substantial net negative charge at physiologic pH, which is the entire basis of the Gibbs-Donnan effect. If they were neutral there would be no Donnan problem to solve. This would be the correct answer if cytoplasmic macromolecules were uncharged."
      },
      {
        "text": "The Na-K-ATPase extrudes sodium, making it an effective impermeant extracellular solute that balances intracellular protein",
        "explanation": "Correct. The Gibbs-Donnan effect describes what happens when a membrane-impermeant charged species, in this case intracellular protein and organic phosphate anions, sits on one side of a membrane permeable to small ions. Electroneutrality forces an excess of diffusible cations inside, so the total intracellular osmolyte count exceeds that outside and water is drawn in, a process that would proceed to lysis if unopposed, sometimes called the double Donnan problem. Living cells solve it by making sodium functionally impermeant: the Na-K-ATPase pumps three sodium out for every two potassium in, continuously extruding the sodium that leaks in, so extracellular sodium behaves as an effective osmole that counterbalances the intracellular protein charge. This is why the pump consumes such a large fraction of resting metabolism and why anything that stops it, including the hypothermic storage and ATP depletion in this blood unit, ischemia, or ouabain, causes cells to gain sodium, lose potassium into the supernatant, and swell."
      },
      {
        "text": "Aquaporins in the plasma membrane are gated shut at rest, so water enters only when the cell needs to change its volume",
        "explanation": "Incorrect. Aquaporins are constitutively open water channels in most cells, and water movement across membranes is essentially always passive and rapid. Regulated insertion applies specifically to aquaporin-2 in the collecting duct under ADH control, which is a specialized case rather than a general mechanism of cell volume defense. This would be the correct answer if all aquaporins were gated by cell volume."
      },
      {
        "text": "Chloride is actively pumped into the cell, raising intracellular osmolality until it matches that of the extracellular fluid",
        "explanation": "Incorrect. Chloride distributes largely passively according to the membrane potential, and because the interior is electrically negative, chloride is actually held at a LOW intracellular concentration. Pumping chloride in would worsen rather than relieve the osmotic load. This would be the correct answer if chloride were actively accumulated intracellularly."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The Gibbs-Donnan effect from impermeant intracellular anions would swell cells to lysis. The Na-K-ATPase solves it by making sodium an effective EXTRACELLULAR impermeant osmole. Stop the pump (ischemia, hypothermic storage, ouabain) and cells gain Na and water, lose K, and swell.",
    "lectureSource": "CV4: Solute Transport and Fluid Movement",
    "pdfLecture": "CV4",
    "pdfPage": 16,
    "pdfQuote": "Na+/K+ ATPase & Regulation of Cell Volume"
  },
  {
    "id": 47,
    "category": "OMM: Thoracic BLT",
    "questionText": "A 61-year-old woman three days after an open cholecystectomy has splinted, shallow breathing and is not clearing secretions well. Structural exam reveals restricted motion of ribs 6 through 9 on the right with the ribs held in an inhaled position, and a T7 somatic dysfunction that is extended, rotated right, and sidebent right. She cannot tolerate lying prone and cannot generate a strong voluntary muscular effort because of incisional pain. The physician selects a ligamentous articular approach. Which of the following best describes appropriate application here?",
    "options": [
      {
        "text": "Position T7 into extension, right rotation, and right sidebending, then use the patient's exhalation as the inherent force",
        "explanation": "Correct. Balanced ligamentous tension is indirect, so the segment is carried into its freedoms, which for an extended, rotated right, sidebent right dysfunction means extension, right rotation, and right sidebending. The physician then adds a small compressive or distractive vector until costovertebral and costotransverse ligamentous tensions are equal in every direction. Respiration is the inherent force used to finish the technique, and because these ribs are held in inhalation, exhalation is the phase that assists the correction, so the patient is asked to breathe out fully and hold while the physician maintains balance. The approach is well suited here because it requires no voluntary muscular effort, no prone positioning, and essentially no force, and improving rib cage mechanics in a postoperative patient directly supports lymphatic return, secretion clearance, and prevention of atelectasis."
      },
      {
        "text": "Position T7 into flexion, left rotation, and left sidebending and hold against the restrictive barrier for 30 seconds",
        "explanation": "Incorrect. Those directions are the barrier for this dysfunction, so this is a direct technique, and BLT never engages the barrier. Holding a barrier in a patient with an acute abdominal incision would also be poorly tolerated. This would be the correct answer if a direct thoracic technique had been chosen."
      },
      {
        "text": "Have the patient inhale maximally and hold while the physician resists rib elevation, repeating for three cycles",
        "explanation": "Incorrect. This is respiratory-assist muscle energy, and it is directed the wrong way for these ribs. Ribs held in inhalation are treated by assisting EXHALATION, whereas ribs held in exhalation are treated by assisting inhalation. The technique also demands a forceful respiratory effort this patient cannot comfortably produce. This would be the correct answer if the ribs had been restricted in exhalation and muscle energy were the chosen modality."
      },
      {
        "text": "Deliver a high-velocity, low-amplitude thrust through the costotransverse joints with the patient supine and the arms crossed",
        "explanation": "Incorrect. A supine thoracic thrust transmits force through the anterior chest and would be delivered directly onto an abdomen with a fresh surgical incision, which is both painful and inappropriate. No thrust is part of BLT in any case. This would be the correct answer if the patient were well healed and a direct thrust technique were indicated."
      },
      {
        "text": "Apply firm sustained inhibitory pressure to the right paraspinal musculature at T7 for two to three full minutes",
        "explanation": "Incorrect. Sustained inhibition is a soft tissue technique targeting muscular hypertonicity, and while it may be a reasonable adjunct, it does not address the articular and costal ligamentous restriction described and is not balanced ligamentous tension. This would be the correct answer if the finding were isolated paraspinal hypertonicity without an articular component."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: In BLT, respiration is the inherent force. Ribs held in INHALATION are helped by exhalation; ribs held in EXHALATION are helped by inhalation. The technique's minimal force makes it ideal postoperatively, where restoring rib mechanics aids lymphatic flow and prevents atelectasis.",
    "lectureSource": "CV2: BLT - Cervical, Thoracic, Lumbosacral, Fibula",
    "pdfLecture": "CV2",
    "pdfPage": 3,
    "pdfQuote": "the affected ligaments in a position of equal tension in all appropriate planes so that"
  },
  {
    "id": 48,
    "category": "Renal Physiology: Vasoactive Substances",
    "questionText": "An 81-year-old woman with hypertension and osteoarthritis is taking lisinopril and hydrochlorothiazide. She begins taking ibuprofen 600 mg three times daily for a painful knee. Ten days later she presents with fatigue; her creatinine has risen from 1.0 to 2.4 mg/dL, her potassium is 5.9 mEq/L, and her blood pressure is 148/86 mmHg. She is clinically mildly volume depleted. Which of the following best explains the role of the NSAID in this presentation?",
    "options": [
      {
        "text": "Ibuprofen caused an allergic interstitial nephritis, which is the usual mechanism of NSAID-associated acute kidney injury",
        "explanation": "Incorrect. NSAIDs can cause acute interstitial nephritis, sometimes with concurrent minimal change disease, but that is a much less common presentation and typically develops over weeks with pyuria and sometimes rash and eosinophilia. The far more frequent and more rapid mechanism, and the one that fits this drug combination and time course, is hemodynamic. This would be the correct answer if she had sterile pyuria, white cell casts, and nephrotic-range proteinuria."
      },
      {
        "text": "Ibuprofen directly inhibited the Na-K-ATPase in the basolateral membrane of the proximal tubule, reducing sodium and solute reabsorption",
        "explanation": "Incorrect. NSAIDs do not inhibit the sodium pump, and impaired proximal reabsorption would cause solute wasting rather than the oliguric azotemia described. NSAID effects on sodium handling run in the opposite direction, promoting sodium and water retention. This would be the correct answer if the drug in question were a direct tubular toxin producing Fanconi syndrome."
      },
      {
        "text": "Ibuprofen blocked cyclooxygenase-derived prostaglandins that were dilating the afferent arteriole, removing the last defense of GFR",
        "explanation": "Correct. In a volume-depleted state, angiotensin II and norepinephrine are both elevated and would constrict the afferent arteriole severely were it not for locally generated vasodilatory prostaglandins, chiefly PGE2 and PGI2, which preferentially dilate the afferent vessel and preserve renal blood flow. An NSAID abolishes that protection. This patient illustrates the classic triple whammy: a thiazide creating volume depletion, an ACE inhibitor removing efferent constriction, and an NSAID removing afferent dilation. Filtration pressure is attacked from all three sides at once. The hyperkalemia has two contributions, since NSAIDs also suppress renin release, which compounds the aldosterone deficit produced by the ACE inhibitor. The elderly, those with chronic kidney disease, and any patient with a low effective circulating volume are the vulnerable groups."
      },
      {
        "text": "Ibuprofen displaced lisinopril from its plasma protein binding sites, greatly amplifying its glomerular hemodynamic effect",
        "explanation": "Incorrect. Protein-binding displacement rarely produces clinically important interactions because the freed drug is also more rapidly cleared, and lisinopril is minimally protein bound to begin with. The interaction here is pharmacodynamic, occurring at the level of glomerular hemodynamics, rather than pharmacokinetic. This would be the correct answer if the interaction depended on altered plasma protein binding."
      },
      {
        "text": "Ibuprofen caused papillary necrosis, obstructing the collecting ducts and raising the hydrostatic pressure within Bowman space",
        "explanation": "Incorrect. Analgesic nephropathy with papillary necrosis is a genuine consequence of chronic heavy NSAID or combination analgesic use over years, and it presents with hematuria, sloughed papillae, and chronic tubulointerstitial disease. It does not develop over ten days. This would be the correct answer if she had a decade-long history of daily combination analgesic use with hematuria and a filling defect on imaging."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The TRIPLE WHAMMY: diuretic (volume depletion) plus ACE inhibitor or ARB (no efferent constriction) plus NSAID (no afferent dilation) equals acute kidney injury with hyperkalemia. Vasodilatory prostaglandins protect the afferent arteriole precisely when angiotensin II and sympathetic tone are high.",
    "lectureSource": "CV7: GFR, Renal Blood Flow and Clearance",
    "pdfLecture": "CV7",
    "pdfPage": 26,
    "pdfQuote": "and volume depletion save kidney from ischemia (act as a \"shield\"), relax mesangial"
  },
  {
    "id": 49,
    "category": "Embryology: Renal Vascularization",
    "questionText": "A 34-year-old man is evaluated as a living kidney donor. CT angiography of the left kidney demonstrates a main renal artery arising from the aorta at L1 plus a second, smaller artery entering the lower pole directly from the aorta at L3. The transplant surgeon notes that this vessel is an end artery and that dividing it would infarct the territory it supplies. Which of the following best explains the embryologic origin of this accessory vessel?",
    "options": [
      {
        "text": "It is a persistent branch of the fetal umbilical artery that failed to obliterate in the newborn period",
        "explanation": "Incorrect. The umbilical arteries arise from the internal iliac arteries and carry blood to the placenta; after birth their distal portions obliterate into the medial umbilical ligaments while the proximal segments persist as the superior vesical arteries. They never supply the kidney. This would be the correct answer if the vessel in question ran along the anterior abdominal wall toward the umbilicus."
      },
      {
        "text": "It represents acquired neovascularization stimulated by a subclinical stenosis of the main renal artery",
        "explanation": "Incorrect. Collateral neovascularization in renal artery stenosis produces small tortuous vessels arising from lumbar, adrenal, and gonadal branches rather than a discrete accessory artery taking direct origin from the aorta, and the vignette gives no evidence of stenosis in a healthy young donor. This would be the correct answer if imaging had shown a stenotic main renal artery with a network of tortuous capsular collaterals."
      },
      {
        "text": "It is a branch of the gonadal artery that was recruited by the kidney during its ascent out of the true pelvis",
        "explanation": "Incorrect. The gonadal artery arises from the aorta at about L2 and travels caudally to the gonad, which itself descends; it does not give branches to the kidney. The vignette also states the accessory vessel arises directly from the aorta. This would be the correct answer if the vessel had been traced to the testicular artery."
      },
      {
        "text": "It is a mesonephric arterial remnant that supplied the mesonephros before that organ regressed in utero",
        "explanation": "Incorrect. This is close and reflects real embryology, since the lateral splanchnic arteries do supply mesonephric tissue during development, but the accessory renal artery specifically represents a persistent lower rung of the arterial ladder that was serving the metanephros during its ascent, not a vessel dedicated to the regressed mesonephros. This would be the correct answer if the vessel supplied a persistent mesonephric structure rather than functioning renal parenchyma."
      },
      {
        "text": "It is a persistent lower rung of the sequential lateral aortic branches that supplied the ascending kidney",
        "explanation": "Correct. The metanephros begins in the sacral region and is initially supplied by branches of the common iliac artery. As it ascends toward the lumbar region during the sixth to ninth weeks, it is sequentially supplied by a ladder of new, more cranial lateral branches of the aorta, and each lower rung normally involutes as the next one takes over. If a caudal branch fails to regress, it persists into adult life as an accessory or polar renal artery, most often supplying the lower pole. Accessory renal arteries are present in roughly a quarter of people and are surgically important because the renal circulation has essentially no collateral supply, so each artery is a functional end artery and sacrificing one infarcts its segment. The same failure of regression explains why a horseshoe or pelvic kidney typically has multiple aberrant arteries arising from the aorta and iliac vessels."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: The ascending metanephros is supplied by a ladder of successively higher aortic branches, and lower rungs normally involute. A persistent rung is an accessory (polar) renal artery, found in about 25 percent of people. Renal arteries are END arteries, so each accessory vessel must be preserved in transplant or repair.",
    "lectureSource": "CV3: Genitourinary Embryology",
    "pdfLecture": "CV3",
    "pdfPage": 21,
    "pdfQuote": "Vascularization"
  },
  {
    "id": 50,
    "category": "Physiology: Heart Failure Integration",
    "questionText": "A 77-year-old man with heart failure with reduced ejection fraction is admitted with worsening dyspnea and 8 kg of weight gain. He is started on intravenous furosemide 80 mg twice daily. After 48 hours he has diuresed 3.5 liters and his dyspnea is much improved, but his creatinine has risen from 1.4 to 1.9 mg/dL, his bicarbonate is 34 mEq/L, his potassium is 3.2 mEq/L, and his sodium is 130 mEq/L. His urine output over the last 12 hours has slowed markedly despite continued dosing. Which of the following best explains the combination of findings after 48 hours?",
    "options": [
      {
        "text": "The loop diuretic has caused an osmotic diuresis, and the resulting urinary free water loss accounts for both the hyponatremia and the rise in his serum creatinine",
        "explanation": "Incorrect. Loop diuretics do not cause an osmotic diuresis; they inhibit NKCC2 and produce a natriuresis, and by abolishing the medullary gradient they impair the kidney's ability to concentrate urine. A free water loss would also raise the serum sodium, not lower it to 130. This would be the correct answer if the diuretic given had been mannitol."
      },
      {
        "text": "Volume contraction activated RAAS and ADH, with contraction alkalosis, potassium wasting, water retention, low filtration, and distal nephron hypertrophy blunting the diuretic response",
        "explanation": "Correct. Every finding follows from a single sequence. Effective volume contraction from the diuresis activates the sympathetic nervous system and RAAS and triggers non-osmotic ADH release. Angiotensin II and aldosterone drive avid proximal and distal sodium reabsorption, and the aldosterone plus the increased distal flow from the loop diuretic together produce brisk potassium and hydrogen secretion, giving the hypokalemia and the metabolic alkalosis, which is further concentrated by contraction around a fixed bicarbonate mass. Non-osmotic ADH retains free water and lowers the sodium to 130. The creatinine rises because renal perfusion and filtration pressure fall as intravascular volume is removed faster than the interstitium can refill. Finally, chronic loop diuretic exposure causes hypertrophy and increased transport capacity in the distal convoluted tubule and collecting duct, so sodium escaping the loop is reclaimed downstream, which is the braking phenomenon behind his declining urine output. Adding a thiazide to block that distal segment is the standard response to this pattern of diuretic resistance."
      },
      {
        "text": "The rise in creatinine indicates acute tubular necrosis from the diuretic, which should be stopped immediately despite the marked improvement in his dyspnea and weight",
        "explanation": "Incorrect. Loop diuretics are not tubular toxins at therapeutic doses, and acute tubular necrosis would show muddy brown granular casts and a high fractional excretion of sodium. A modest creatinine rise during effective decongestion of a congested patient generally reflects hemodynamic change and is not by itself a reason to stop therapy if the patient is symptomatically improving. This would be the correct answer if the urine sediment showed granular casts and the patient were clinically hypoperfused."
      },
      {
        "text": "The hyponatremia reflects true total body sodium depletion from urinary losses and should be promptly corrected with hypertonic saline rather than fluid restriction",
        "explanation": "Incorrect. Although sodium has certainly been excreted, the hyponatremia in this setting is predominantly dilutional, driven by non-osmotic ADH release in a patient whose total body sodium remains elevated. Giving hypertonic saline to a decompensated heart failure patient would worsen congestion. This would be the correct answer if he were hypovolemic with a low total body sodium and clinical signs of depletion."
      },
      {
        "text": "The metabolic alkalosis is respiratory in origin, arising from the hyperventilation of his pulmonary congestion and volume overload rather than from the loop diuretic he is now receiving",
        "explanation": "Incorrect. Hyperventilation produces a respiratory ALKALOSIS with a low PaCO2 and a compensatory fall in bicarbonate, whereas this patient has a high bicarbonate of 34, which defines a metabolic alkalosis. The pattern here is the expected contraction and hypokalemic alkalosis of aggressive loop diuresis. This would be the correct answer if his bicarbonate were 18 with a PaCO2 of 26."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: The full loop diuretic signature is hypokalemia, hypomagnesemia, contraction metabolic alkalosis, dilutional hyponatremia from ADH, a hemodynamic creatinine rise, and diuretic braking from distal tubular hypertrophy. Sequential nephron blockade with a thiazide overcomes the braking.",
    "lectureSource": "CV8: Regulation of Sodium and Water Excretion",
    "pdfLecture": "CV8",
    "pdfPage": 45,
    "pdfQuote": "Signs of Edema in Heart Failure:"
  }
];

window.Test_Cumulative_CPR_Wk1 = Test_Cumulative_CPR_Wk1;
