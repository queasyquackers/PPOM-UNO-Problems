const Test_CV36 = [
  {
    "id": 1,
    "category": "Pharmacology: Calcium Channel Blocker Mechanism",
    "questionText": "An investigator perfuses an isolated arteriolar smooth muscle strip and records tension while measuring cytosolic calcium. After a test compound is added, the depolarization-triggered rise in cytosolic calcium is markedly blunted, calcium-induced calcium release from the sarcoplasmic reticulum is reduced, myosin light chain phosphorylation falls, and resting tension declines. The compound has no effect when applied to a preparation in which the membrane has been removed and calmodulin is directly added. Which step in the contractile pathway is the compound acting on?",
    "options": [
      {
        "text": "Binding of calcium to calmodulin in the cytosol",
        "explanation": "Incorrect. Calcium-calmodulin binding is downstream of the drug's action; it fails in this preparation only because the calcium never arrives. The clue that the compound is inert once the membrane is removed proves the target sits in the membrane, not in the cytosol. This would be the correct answer if the compound had still worked in the membrane-free preparation with calmodulin supplied directly."
      },
      {
        "text": "Phosphorylation of myosin light chains by activated MLCK",
        "explanation": "Incorrect. Reduced myosin light chain phosphorylation is an observed consequence in this experiment, not the site of drug action. The lecture's cascade runs calcium entry, then calcium-calmodulin, then myosin light chain kinase, then phosphorylation; blocking the top of the cascade lowers everything below it. This would be the correct answer if cytosolic calcium had risen normally while phosphorylation alone failed."
      },
      {
        "text": "Entry of extracellular calcium through L-type channels",
        "explanation": "Correct. Influx of calcium through L-type voltage-gated channels is the trigger for calcium-induced calcium release, and the released calcium forms the calcium-calmodulin complex that activates myosin light chain kinase, phosphorylates the myosin light chains, and permits myosin-actin interaction and contraction. Calcium channel blockers inhibit that first step, which is why every downstream measurement falls together and why the drug is inert once the membrane is gone. The result at the tissue level is vasodilation, and at the patient level a fall in systemic vascular resistance and blood pressure."
      },
      {
        "text": "Interaction of myosin heads with actin filaments during the crossbridge cycle",
        "explanation": "Incorrect. Actin-myosin interaction is the final mechanical step of the pathway and is not a drug target in this lecture. The experiment localizes the effect to the membrane, since removing the membrane abolishes the compound's activity entirely. This would be the correct answer if the agent had been a direct crossbridge inhibitor acting on the contractile proteins themselves."
      },
      {
        "text": "Release of stored calcium from the sarcoplasmic reticulum",
        "explanation": "Incorrect. Sarcoplasmic reticulum release is reduced here, but only because it is calcium-induced calcium release and the triggering calcium is missing. The lecture is explicit that the initiating event is entry of extracellular calcium through the L-type channel. This would be the correct answer if the drug had blocked the ryanodine receptor while leaving transmembrane calcium current intact."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: CCBs act at the very top of the smooth muscle contraction cascade - calcium entry through L-type channels - so calcium-calmodulin, MLCK activation, myosin light chain phosphorylation and tension all fall together.",
    "pdfPage": 14,
    "pdfQuote": "calcium-calmodulin complex activates MLCK"
  },
  {
    "id": 2,
    "category": "Pharmacology: Calcium Channel Blocker Mechanism",
    "questionText": "In a patch-clamp study, a calcium channel blocker is applied to a cardiac preparation. When the tissue is paced slowly, the reduction in calcium current is modest. When the pacing rate is increased, the same drug concentration produces progressively deeper block, and recovery of the channel between stimuli is slowed. Applying the drug to the outside of a sealed membrane vesicle produces no effect, but introducing it into the vesicle interior reproduces the block. Which description best characterizes how this drug interacts with the channel?",
    "options": [
      {
        "text": "Binds open and inactivated channels from the membrane's inner side",
        "explanation": "Correct. Calcium channel blockers reach a site on the pore-forming alpha-1 subunit from the inner side of the membrane, which is why the drug only works when placed inside the vesicle. They bind far more effectively to open and inactivated channels than to resting ones, so block accumulates when the tissue is depolarizing frequently, and verapamil and diltiazem additionally decrease the channel's rate of recovery. The lecturer draws the parallel to local anesthetics at the sodium channel, which behave the same way. The clinical payoff is that these agents slow a fast AV node far more than a normal one."
      },
      {
        "text": "Binds the resting closed channel from the external surface near the pore",
        "explanation": "Incorrect. External application produced no effect in this experiment, and block that depends on stimulation frequency cannot be explained by preferential binding to the resting state. Resting-state binding would give a constant degree of block regardless of pacing rate. This would be the correct answer if block had been maximal at slow rates and had diminished as the tissue was paced faster."
      },
      {
        "text": "Acts as an allosteric agonist at an accessory subunit of the channel complex",
        "explanation": "Incorrect. The drug reduces calcium current rather than enhancing it, so it is an antagonist and not an agonist at any subunit. The lecture places the binding site on the main pore-forming alpha-1 subunit, with different agents binding different sites on that subunit. This would be the correct answer if the compound had increased transmembrane calcium current and enhanced contractility."
      },
      {
        "text": "Increases the rate at which the channel recovers from inactivation between beats",
        "explanation": "Incorrect. Verapamil and diltiazem do the opposite: they decrease the channel's rate of recovery, which is precisely why block deepens rather than dissipates as stimulation frequency rises. Speeding recovery would relieve block at fast rates. This would be the correct answer if the experiment had shown block that faded as the pacing rate increased."
      },
      {
        "text": "Blocks the channel only when the membrane is fully repolarized and electrically quiet",
        "explanation": "Incorrect. Block that appears only in quiescent tissue is the reverse of what was measured, since deeper block emerged with faster pacing. Dihydropyridines do not display this frequency dependence at the AV node at all, but no calcium channel blocker in this lecture is selective for the fully repolarized resting state. This would be the correct answer if the block had disappeared entirely during rapid pacing."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: CCBs act from the inner side of the membrane and prefer open and inactivated channels, so verapamil and diltiazem show use-dependent (frequency-dependent) block - deeper on a fast node than a slow one.",
    "pdfPage": 16,
    "pdfQuote": "CCBs act from the inner side of the membrane"
  },
  {
    "id": 3,
    "category": "Pharmacology: CCB Subclass Selection",
    "questionText": "A 60-year-old man with primary hypertension is found on routine electrocardiography to have first-degree atrioventricular block with a PR interval of 260 milliseconds and occasional Wenckebach periodicity on ambulatory monitoring. His resting heart rate is 54 beats per minute and his blood pressure is 158/94 mmHg. He is otherwise asymptomatic. His physician wishes to use a calcium channel blocker. Which pharmacologic property should the chosen agent have?",
    "options": [
      {
        "text": "It decreases the L-type channel's rate of recovery from inactivation",
        "explanation": "Incorrect. Decreasing the rate of recovery is the defining non-dihydropyridine property of verapamil and diltiazem and is exactly what produces further slowing of the atrioventricular node. In a patient who already has first-degree block with Wenckebach, that is the property to avoid. This would be the correct answer if the goal had been rate control in a hemodynamically stable supraventricular tachycardia."
      },
      {
        "text": "It depresses sinus node automaticity while sparing vascular smooth muscle",
        "explanation": "Incorrect. Depressing sinus node automaticity would worsen a resting heart rate that is already 54, and no calcium channel blocker in this lecture spares the vasculature while acting on the node. The class relaxes arteriolar smooth muscle as its primary antihypertensive action. This would be the correct answer if the therapeutic goal had been sinus rate reduction rather than blood pressure reduction."
      },
      {
        "text": "Its channel block is enhanced as the frequency of stimulation increases",
        "explanation": "Incorrect. Frequency-dependent block is again the non-dihydropyridine signature, greater with verapamil than diltiazem, and it intensifies nodal suppression rather than avoiding it. Choosing it here risks progression to higher-grade block. This would be the correct answer if the patient had a rapid ventricular response in atrial fibrillation and normal conduction otherwise."
      },
      {
        "text": "It blocks cardiac L-type channels more than vascular channels, slowing conduction",
        "explanation": "Incorrect. This describes the cardiac-weighted profile of verapamil and diltiazem, which the summary slide contrasts with the dihydropyridines. Preferential cardiac blockade in a patient with existing conduction disease is precisely the contraindicated situation. This would be the correct answer if the question had asked which agent to avoid rather than which to select."
      },
      {
        "text": "It blocks vascular L-type channels far more than cardiac channels",
        "explanation": "Correct. Dihydropyridines block vascular L-type calcium channels to a much greater extent than cardiac channels, so they reduce vascular resistance with far less cardiac depressant effect than verapamil or diltiazem. They do not affect the channel's rate of recovery and do not affect conduction through the atrioventricular node, which makes them the appropriate calcium channel blocker in a patient with existing nodal conduction disease and a low resting heart rate. A long-acting agent such as amlodipine or extended-release nifedipine also avoids the peaks that drive reflex tachycardia."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: DHPs block vascular L-type channels far more than cardiac ones and do not slow AV conduction - they are the CCB of choice when nodal conduction disease or bradycardia is present.",
    "pdfPage": 17,
    "pdfQuote": "Do not affect conduction through the AV node"
  },
  {
    "id": 4,
    "category": "Pharmacology: CCB Pharmacokinetics and Formulation",
    "questionText": "A 62-year-old man has taken a once-daily antihypertensive for two years with good control and no symptoms. For cost reasons his prescription is changed to the immediate-release formulation of the same drug, dosed three times daily. Within two weeks he reports headache, facial flushing, and a pounding heartbeat that begins about 30 minutes after each dose and resolves over a few hours. His office blood pressure is unchanged from before, but home readings now vary widely across the day. Which mechanism best explains his new symptoms?",
    "options": [
      {
        "text": "Loss of beta-2 mediated vasodilation in skeletal muscle vasculature",
        "explanation": "Incorrect. Beta-2 mediated vasodilation is a beta blocker issue, not a calcium channel blocker issue, and blocking it produces peripheral vascular insufficiency rather than flushing and palpitations. Nothing in this scenario involves adrenergic receptor antagonism. This would be the correct answer if the patient had been switched to a nonselective beta blocker and developed cold, painful extremities."
      },
      {
        "text": "High peak levels producing abrupt vasodilation and a baroreflex surge",
        "explanation": "Correct. Immediate-release short-half-life dihydropyridines produce a distinct peak within every dosing interval, and the lecture lists the three consequences precisely: a rapid drop in blood pressure, oscillations in blood pressure control, and concurrent surges in sympathetic reflex activity. The abrupt arteriolar vasodilation at each peak produces headache, flushing and dizziness, and the baroreceptor reflex answers with tachycardia and palpitations. Extended-release nifedipine dosed once daily, or amlodipine with its slow absorption and long half-life, keeps levels within the therapeutic window and causes much less reflex tachycardia."
      },
      {
        "text": "Drug accumulation caused by a prolonged terminal elimination half-life",
        "explanation": "Incorrect. Accumulation from a long terminal half-life is the opposite of what happens with an immediate-release short-acting agent, which produces peaks and troughs rather than a rising steady level. Accumulation would also cause persistent rather than dose-linked symptoms. This would be the correct answer if the patient had been switched to a very long half-life agent and developed progressive hypotension over days."
      },
      {
        "text": "A direct positive chronotropic action of the drug on sinoatrial nodal tissue",
        "explanation": "Incorrect. Dihydropyridines have no direct stimulatory effect on the sinus node; the tachycardia they cause is reflex, mediated by the baroreceptors in response to a fall in blood pressure. The distinction matters because the fix is a smoother formulation, not a rate-slowing drug. This would be the correct answer if a sympathomimetic agent had been prescribed instead."
      },
      {
        "text": "Inhibition of intestinal P-glycoprotein raising plasma concentrations of the drug",
        "explanation": "Incorrect. P-glycoprotein inhibition matters in this lecture for the verapamil-digoxin interaction, not for the timing of symptoms after a formulation change with a single drug. The pattern here tracks the dosing interval, which points to peaks rather than to altered transport. This would be the correct answer if the patient had been started on digoxin and developed nausea, confusion and arrhythmia."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: reflex tachycardia with a dihydropyridine is a formulation problem, not a dose problem - immediate-release peaks drive the baroreflex, while extended-release nifedipine and amlodipine do not.",
    "pdfPage": 10,
    "pdfQuote": "Nifedipine extended-release"
  },
  {
    "id": 5,
    "category": "Pharmacology: CCB Adverse Effects",
    "questionText": "A 55-year-old woman treated for six weeks with an antihypertensive develops bilateral pitting edema of the feet and ankles that is worse at the end of the day. Her weight is unchanged, her jugular venous pressure is normal, her lungs are clear, and an echocardiogram shows normal biventricular function. Serum albumin, creatinine and thyroid studies are normal. A loop diuretic is added for two weeks with no improvement in the swelling. Which mechanism accounts for her edema?",
    "options": [
      {
        "text": "Sodium and water retention driven by a fall in renal perfusion pressure",
        "explanation": "Incorrect. Volume-mediated edema would be accompanied by weight gain, an elevated jugular venous pressure, and a clear response to a loop diuretic, none of which occurred here. The lecturer stresses that this edema is not really related to volume. This would be the correct answer if the patient had gained weight with a raised jugular venous pressure and had improved on diuretic therapy."
      },
      {
        "text": "A fall in plasma oncotic pressure from displacement of protein binding",
        "explanation": "Incorrect. Displacement from plasma protein binding changes free drug concentration but does not lower total plasma oncotic pressure, and this patient's serum albumin is normal. Oncotic edema would be generalized rather than dependent and gravity-driven. This would be the correct answer if she had nephrotic-range proteinuria with hypoalbuminemia."
      },
      {
        "text": "Right ventricular failure produced by the drug's negative inotropic effect",
        "explanation": "Incorrect. The echocardiogram shows normal biventricular function and the jugular venous pressure is normal, which excludes right heart failure. Negative inotropy is a non-dihydropyridine property, and it produces worsening cardiac output rather than isolated ankle swelling. This would be the correct answer if she had been on intravenous verapamil with a dilated right ventricle and raised venous pressures."
      },
      {
        "text": "Pre-capillary dilation with post-capillary reflex constriction",
        "explanation": "Correct. Dihydropyridines relax arteriolar smooth muscle but have no effect on venules and veins. The resulting pre-capillary dilation combined with post-capillary reflex constriction raises capillary hydrostatic pressure and capillary permeability, so fluid is redistributed out of the vasculature into the interstitium. Because total body volume is normal, this is redistribution rather than overload, which is exactly why a diuretic fails to help. Gravity puts the result in the feet and ankles, and the correct management is dose reduction or a change of agent."
      },
      {
        "text": "Venodilation that increases venous capacitance and causes dependent pooling of blood",
        "explanation": "Incorrect. Venodilation is not a dihydropyridine effect; the lecture is explicit that these drugs act on arteries and arterioles and not on venules and veins. That restriction is the whole reason capillary pressure rises. This would be the correct answer if the patient had been given a nitrate, which does act principally on venous capacitance vessels."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: DHP ankle edema is raised capillary hydrostatic pressure from arteriolar dilation with venular constriction - it is redistribution, not volume overload, so diuretics do not fix it.",
    "pdfPage": 22,
    "pdfQuote": "post-capillary reflex constriction"
  },
  {
    "id": 6,
    "category": "Pharmacology: CCB Adverse Effects",
    "questionText": "A 68-year-old man with hypertension and long-standing constipation is started on a new antihypertensive. Six weeks later his blood pressure is improved, but his resting heart rate has fallen from 78 to 52 beats per minute, his PR interval has lengthened, and his constipation has become severe enough to require regular laxatives. He denies ankle swelling, headache or flushing. Which agent was he most likely prescribed?",
    "options": [
      {
        "text": "Verapamil",
        "explanation": "Correct. The combination of bradycardia with lengthening of atrioventricular conduction and marked constipation is the classic non-dihydropyridine adverse effect profile, and the lecture singles out constipation as being especially associated with verapamil. Verapamil acts on cardiac tissue as well as vessels, depressing sinus node automaticity and slowing atrioventricular conduction. The lecturer emphasises that this matters clinically because many of these patients are elderly and already constipated, so the drug turns a nuisance into a problem. The absence of edema, headache and flushing argues against a dihydropyridine."
      },
      {
        "text": "Amlodipine",
        "explanation": "Incorrect. Amlodipine is a dihydropyridine and acts chiefly on arteriolar smooth muscle, so it does not slow the sinus node or lengthen the PR interval. Its characteristic adverse effect is peripheral edema, which this patient specifically denies. This would be the correct answer if he had developed bilateral ankle swelling with an unchanged or slightly faster heart rate."
      },
      {
        "text": "Nicardipine",
        "explanation": "Incorrect. Nicardipine is an intravenous dihydropyridine used for hypertensive emergency by slow infusion, not an oral agent for chronic outpatient hypertension. It also lacks the nodal and gastrointestinal effects described. This would be the correct answer if the patient had been managed in an intensive care unit with a titratable infusion for severe acute hypertension."
      },
      {
        "text": "Nifedipine extended release",
        "explanation": "Incorrect. Extended-release nifedipine is a dihydropyridine chosen specifically because it avoids peaks and reflex tachycardia, but it still has no meaningful effect on the sinus or atrioventricular node. Constipation is not its signature adverse effect. This would be the correct answer if he had developed peripheral edema without any change in heart rate or PR interval."
      },
      {
        "text": "Nimodipine",
        "explanation": "Incorrect. Nimodipine is an oral-only dihydropyridine reserved for subarachnoid hemorrhage because its lipophilicity allows cerebral artery vasodilation. It is not used for chronic hypertension and does not slow nodal conduction. This would be the correct answer if the patient had presented with a ruptured cerebral aneurysm and treatment aimed at reducing ischemic deficits."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: bradycardia plus AV slowing plus constipation points to a non-dihydropyridine, and constipation is especially associated with verapamil - a real problem in elderly patients.",
    "pdfPage": 22,
    "pdfQuote": "Constipation (especially verapamil)"
  },
  {
    "id": 7,
    "category": "Pharmacology: CCB Drug Interactions",
    "questionText": "A 76-year-old woman has taken a cardiac glycoside for years at a stable dose with therapeutic serum levels. A calcium channel blocker is added for rate control in atrial fibrillation. Five days later she presents with nausea, anorexia, confusion and visual disturbance. Her electrocardiogram shows atrial tachycardia with atrioventricular block, and a serum level of the glycoside is now well above the therapeutic range. Her renal function is unchanged from baseline. Which mechanism explains the rise in her drug level?",
    "options": [
      {
        "text": "Induction of CYP3A4 accelerating formation of an active metabolite",
        "explanation": "Incorrect. Enzyme induction would lower rather than raise the parent drug concentration, and the interaction described in this lecture is transporter-mediated rather than metabolic. Calcium channel blockers are CYP3A4 substrates and inhibitors, not inducers. This would be the correct answer if a strong inducer such as an antiepileptic had been added and levels had fallen."
      },
      {
        "text": "Displacement of the glycoside from binding sites within cardiac myocytes",
        "explanation": "Incorrect. Displacement from tissue binding would redistribute drug rather than reduce its elimination, and it would not produce a sustained rise in the measured serum concentration with unchanged renal function. The lecture attributes this interaction specifically to transport. This would be the correct answer if the interaction had been a classic plasma protein binding displacement with a transient free-drug rise."
      },
      {
        "text": "Inhibition of P-glycoprotein reducing elimination of the glycoside",
        "explanation": "Correct. Verapamil blocks P-glycoprotein, and digoxin is a P-glycoprotein substrate. P-glycoprotein normally moves digoxin out of the systemic circulation into the gut and out of the blood into the renal tubule, so blocking the transporter leaves more drug in the systemic circulation from both routes. Because digoxin has a very narrow therapeutic index, even a modest fall in clearance produces toxic concentrations, with the gastrointestinal, visual and neurologic symptoms described and a real risk of arrhythmia. This combination should be avoided or, if used, monitored very closely with serum levels."
      },
      {
        "text": "Competition for the sodium-potassium ATPase at the sarcolemmal surface",
        "explanation": "Incorrect. The sodium-potassium ATPase is the pharmacodynamic target of the glycoside, not a determinant of its plasma concentration. Competition there would alter effect at a given level rather than raise the level itself, and the laboratory finding here is a genuinely elevated serum concentration. This would be the correct answer if the question had asked how the glycoside produces positive inotropy."
      },
      {
        "text": "Drug-induced hypokalemia from markedly increased renal potassium excretion",
        "explanation": "Incorrect. Hypokalemia does potentiate glycoside toxicity, but calcium channel blockers are not kaliuretic and this patient's renal function and electrolytes are not described as deranged. More importantly, hypokalemia sensitizes tissue without raising the measured serum drug concentration. This would be the correct answer if a thiazide or loop diuretic had been added and toxicity appeared at a therapeutic glycoside level."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: verapamil blocks P-glycoprotein and digoxin is a P-gp substrate, so digoxin levels rise from both gut and renal routes - dangerous because digoxin has a very narrow therapeutic index.",
    "pdfPage": 25,
    "pdfQuote": "verapamil blocks Pgp"
  },
  {
    "id": 8,
    "category": "Pharmacology: CCB Therapeutic Uses",
    "questionText": "A 52-year-old woman presents with sudden severe headache and neck stiffness. Computed tomography confirms blood in the subarachnoid space and a ruptured aneurysm is secured. On day two she is started on an oral calcium channel blocker with the specific goal of reducing the incidence and severity of delayed ischemic neurologic deficits. Which property of the chosen agent explains why it, rather than another member of the class, is used for this indication?",
    "options": [
      {
        "text": "Extensive first-pass metabolism that limits systemic exposure after oral dosing",
        "explanation": "Incorrect. This agent does have low oral bioavailability, roughly 13 percent, but low systemic exposure is a limitation rather than the reason it is selected. The lecture attributes the choice to where the drug goes, not to how much of it is lost. This would be the correct answer if the goal had been to minimize systemic hypotension while treating a purely local process."
      },
      {
        "text": "A very short distribution half-life permitting minute-to-minute titration of effect",
        "explanation": "Incorrect. Rapid distribution kinetics with minute-to-minute control describes the intravenous agents used in hypertensive emergency, nicardipine and clevidipine, not the oral agent used here. This drug is oral only. This would be the correct answer if the patient had needed a titratable infusion to bring an acutely dangerous blood pressure down in a controlled way."
      },
      {
        "text": "Lipophilicity that allows cerebral artery vasodilation",
        "explanation": "Correct. Nimodipine is the dihydropyridine used for subarachnoid hemorrhage because it is lipophilic and distributes into the central nervous system, where it produces cerebral artery vasodilation. That local vasodilation is what reduces the incidence and severity of the ischemic deficits that follow aneurysmal bleeding. It is available orally only, with bioavailability around 13 percent, high protein binding, CYP3A4 metabolism and a short half-life of one to two hours. The lecturer flags it as an agent worth recognizing in clinical practice even though it is not used for routine hypertension."
      },
      {
        "text": "Selective blockade of nodal calcium channels that lowers cerebral oxygen demand",
        "explanation": "Incorrect. Nodal selectivity is the non-dihydropyridine property of verapamil and diltiazem, and it acts on the heart rather than on cerebral metabolism. Lowering cardiac rate does not address cerebral vasospasm. This would be the correct answer if the therapeutic aim had been rate control in a hemodynamically stable supraventricular tachycardia."
      },
      {
        "text": "Potent inhibition of P-glycoprotein at the blood-brain barrier increasing brain uptake",
        "explanation": "Incorrect. P-glycoprotein inhibition is the mechanism behind the verapamil-digoxin interaction in this lecture, and it is not the stated reason this agent enters the central nervous system. The lecture attributes central penetration to lipophilicity. This would be the correct answer if the question had concerned rising digoxin concentrations after a calcium channel blocker was added."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: nimodipine is the CNS dihydropyridine - lipophilic, oral only, used after subarachnoid hemorrhage to produce cerebral artery vasodilation and reduce ischemic deficits.",
    "pdfPage": 21,
    "pdfQuote": "Nimodipine (lipophilic, cerebral artery vasodilation)"
  },
  {
    "id": 9,
    "category": "Pharmacology: CCB Therapeutic Uses",
    "questionText": "A 26-year-old woman at 29 weeks of gestation presents with regular painful uterine contractions and cervical change. Her vital signs are stable and fetal monitoring is reassuring. She is started on an oral dihydropyridine calcium channel blocker, and the obstetric team writes that therapy is to continue for 48 hours only. Betamethasone is given and arrangements are made to transfer her to a tertiary center. What is the principal purpose of limiting the calcium channel blocker to 48 hours?",
    "options": [
      {
        "text": "To avoid maternal reflex tachycardia developing after two days of exposure",
        "explanation": "Incorrect. Reflex tachycardia is a real dihydropyridine effect but it appears with each peak, not after a fixed 48-hour threshold, and it is managed by formulation choice rather than by a duration limit. The 48 hours has an obstetric rationale, not a cardiovascular one. This would be the correct answer if the limit had been set to prevent an adverse effect that accumulates with time."
      },
      {
        "text": "To allow the cervix to remain closed so the pregnancy can safely reach term",
        "explanation": "Incorrect. The lecturer is explicit that the point of tocolysis is not to carry the pregnancy to term. Suppressing contractions for two days cannot and is not intended to achieve that. This would be the correct answer if tocolytics had been shown to prolong gestation to term, which they have not."
      },
      {
        "text": "To limit fetal exposure to an active hepatic metabolite of the drug",
        "explanation": "Incorrect. The lecture does not attribute the 48-hour limit to fetal metabolite exposure, and the stated rationale is entirely about what those two days are used for. Inventing a metabolite-based rationale goes beyond what was taught. This would be the correct answer if the agent had a known teratogenic metabolite with a defined exposure ceiling."
      },
      {
        "text": "To prevent tachyphylaxis developing at the uterine smooth muscle calcium channel",
        "explanation": "Incorrect. Tolerance at the uterine channel is not a mechanism described in this lecture, and the duration limit is driven by the clinical goal rather than by loss of drug effect. This would be the correct answer if continued dosing had been shown to lose efficacy through receptor or channel desensitization."
      },
      {
        "text": "To permit glucocorticoid lung maturation and maternal transfer",
        "explanation": "Correct. Nifedipine is the most studied tocolytic and is used for 48 hours only to suppress premature contractions in preterm labor between 24 and 34 weeks. The lecturer stresses that the aim is not to reach term but to buy roughly two days: enough time to give a glucocorticoid that promotes fetal lung maturation and improves the premature infant's chance of survival, and enough time to move the mother to a hospital with a neonatal intensive care unit. Everything about the duration limit follows from that goal."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: nifedipine tocolysis runs 48 hours only in preterm labor at 24-34 weeks - the goal is not term delivery but time for glucocorticoid lung maturation and transfer to a NICU-capable hospital.",
    "pdfPage": 21,
    "pdfQuote": "suppress premature contractions in preterm labor"
  },
  {
    "id": 10,
    "category": "Pharmacology: Hypertensive Emergency",
    "questionText": "A 58-year-old man in the intensive care unit has a blood pressure of 226/128 mmHg with acute pulmonary edema. The team wants an intravenous calcium channel blocker whose antihypertensive effect will disappear within minutes of stopping the infusion, because they anticipate needing to reverse the effect quickly if the pressure overshoots downward. Which choice best matches that requirement, and why?",
    "options": [
      {
        "text": "Nicardipine, which is potent and long-acting with a duration up to eight hours",
        "explanation": "Incorrect. Nicardipine is indeed an intravenous dihydropyridine used for hypertensive emergency, but the lecture describes it as potent and long-acting with a duration of up to eight hours, so its effect will not disappear promptly when the infusion is stopped. That persistence is the exact property the team wants to avoid here. This would be the correct answer if a sustained effect over several hours had been desirable."
      },
      {
        "text": "Clevidipine, whose one-minute half-life gives a five to fifteen minute duration",
        "explanation": "Correct. Clevidipine is the intravenous dihydropyridine with a one-minute half-life and a duration of action of only five to fifteen minutes, which is the whole reason to remember it alongside nicardipine. Once the blood pressure has been brought to a stable point and the infusion is turned off, the effect dissipates almost immediately, which is often exactly the desired behaviour in a crisis. Like other intravenous dihydropyridines it is given by slow infusion so the pressure is not overshot, and it is frequently paired with labetalol or esmolol to blunt reflex tachycardia."
      },
      {
        "text": "Amlodipine, which has slow absorption, minimal peaks and troughs, and a thirty to fifty hour half-life",
        "explanation": "Incorrect. Amlodipine is an oral agent whose entire value lies in a long half-life with minimal peaks and troughs, making it excellent for chronic hypertension and useless for a titratable intensive care infusion. Its effect would persist for days after stopping. This would be the correct answer if the question had asked which oral agent causes the least reflex tachycardia."
      },
      {
        "text": "Intravenous verapamil, which has an onset of one to five minutes",
        "explanation": "Incorrect. Intravenous verapamil does act within one to five minutes, but it is a non-dihydropyridine with substantial negative inotropic and chronotropic effects, which is dangerous in acute pulmonary edema, and its half-life of 4.5 to 12 hours means the effect does not vanish when the drip stops. This would be the correct answer if the indication had been rate control in a hemodynamically stable supraventricular tachycardia."
      },
      {
        "text": "Intravenous diltiazem, which has an onset of about three minutes",
        "explanation": "Incorrect. Intravenous diltiazem acts in about three minutes but is likewise a non-dihydropyridine that depresses contractility and nodal conduction, with a half-life of three to 4.5 hours. Neither the offset nor the hemodynamic profile fits a patient in pulmonary edema. This would be the correct answer if the goal had been ventricular rate control in stable atrial fibrillation."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: for hypertensive emergency, nicardipine is potent and long-acting (duration up to 8 hours) while clevidipine has a 1-minute half-life and a 5-15 minute duration - pick by how fast you need the effect to disappear.",
    "pdfPage": 19,
    "pdfQuote": "Clevidipine: 1-minute"
  },
  {
    "id": 11,
    "category": "Pharmacology: Beta Blocker Mechanism",
    "questionText": "A 54-year-old man with hypertension is started on an adrenergic antagonist. Over the following weeks his heart rate falls modestly, his blood pressure declines, and laboratory testing shows a substantial reduction in plasma renin activity and in circulating angiotensin II. His renal function and serum electrolytes are unchanged. Which receptor population, when blocked, accounts for the fall in plasma renin activity?",
    "options": [
      {
        "text": "Beta-2 receptors on hepatic and skeletal muscle vasculature",
        "explanation": "Incorrect. Beta-2 receptors in the skeletal muscle and hepatic vascular beds mediate vasodilation, and blocking them removes a vasodilator influence and contributes to peripheral vascular insufficiency. They have nothing to do with renin release. This would be the correct answer if the patient had developed cold extremities or worsening claudication on a nonselective agent."
      },
      {
        "text": "Beta-2 receptors on the bronchial smooth muscle of the conducting airways",
        "explanation": "Incorrect. Bronchial beta-2 receptors mediate bronchodilation, and blocking them raises airway resistance and can cause bronchospasm in asthma or chronic obstructive pulmonary disease. That is an adverse effect, not a mechanism of renin suppression. This would be the correct answer if the patient had presented with new wheezing after starting a nonselective beta blocker."
      },
      {
        "text": "Alpha-1 receptors on the vascular smooth muscle of resistance arterioles",
        "explanation": "Incorrect. Alpha-1 receptors on vascular smooth muscle are the target of the third-generation agents carvedilol and labetalol, and blocking them causes vasodilation and a fall in peripheral resistance. That mechanism lowers blood pressure without suppressing renin. This would be the correct answer if the question had asked why carvedilol or labetalol lowers systemic vascular resistance more than propranolol."
      },
      {
        "text": "Beta-1 receptors of the juxtaglomerular apparatus",
        "explanation": "Correct. Beta-1 receptor activation at the renal juxtaglomerular apparatus induces renin release and thereby activates the renin-angiotensin-aldosterone system. Blocking renal beta-1 receptors inhibits renin release, which is one of the two principal ways beta blockers lower blood pressure; the other is blockade of cardiac beta-1 receptors, which slows heart rate and atrioventricular nodal conduction and reduces contractility, lowering cardiac output. The lecture also notes probable central nervous system contributions to the antihypertensive effect."
      },
      {
        "text": "Beta-2 receptors of the ciliary body epithelium and the ocular vasculature",
        "explanation": "Incorrect. Ocular beta receptors are largely of the beta-2 subtype and sit in the ciliary body epithelium and blood vessels, where blockade lowers intraocular pressure by reducing aqueous humor production. They are irrelevant to systemic renin release. This would be the correct answer if the question had concerned the mechanism of topical beta blockers in glaucoma."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: beta blockers lower BP two ways - cardiac beta-1 blockade cuts cardiac output, and renal beta-1 blockade at the juxtaglomerular apparatus suppresses renin release.",
    "pdfPage": 32,
    "pdfQuote": "Renal juxtaglomerular (JG) apparatus"
  },
  {
    "id": 12,
    "category": "Pharmacology: Beta Blocker Adverse Effects",
    "questionText": "A 46-year-old woman with mild persistent asthma and hypertension has tolerated a low dose of a beta-1 selective antagonist without difficulty for eight months. Because her blood pressure remains above goal, the dose is doubled. Within a week she reports increased use of her rescue inhaler, nocturnal cough, and wheeze on exertion. Her peak expiratory flow has fallen by 20 percent. Which statement best explains the change?",
    "options": [
      {
        "text": "The agent possesses intrinsic sympathomimetic activity at beta-2 receptors",
        "explanation": "Incorrect. Intrinsic sympathomimetic activity means partial agonist action, which would tend to preserve rather than remove beta-2 mediated bronchodilation. The lecture notes that partial agonists are not much used, and their effect would not explain new bronchospasm. This would be the correct answer if the question had asked why an agent produces a partial sympathetic-like effect at rest."
      },
      {
        "text": "Membrane stabilizing activity produces sodium channel blockade in the airways",
        "explanation": "Incorrect. Membrane stabilizing activity is sodium channel blockade seen at high concentrations with agents such as propranolol and carvedilol, and the lecturer doubts it contributes meaningfully even to their antiarrhythmic actions. It is not an airway mechanism. This would be the correct answer if the question had concerned the definition of membrane stabilizing activity itself."
      },
      {
        "text": "The agent generates nitric oxide, which constricts bronchial smooth muscle",
        "explanation": "Incorrect. Nitric oxide production is a third-generation vasodilating property of nebivolol and carteolol, and nitric oxide relaxes rather than constricts smooth muscle. It is not implicated in bronchospasm. This would be the correct answer if the question had asked how nebivolol lowers systemic vascular resistance."
      },
      {
        "text": "Beta-1 selectivity is relative and is lost as the dose rises",
        "explanation": "Correct. The lecturer emphasises that beta-1 selectivity is dose-dependent rather than absolute. At low doses a beta-1 selective agent largely spares beta-2 receptors, but as the dose increases the selectivity fades and beta-2 mediated bronchodilation is blocked, raising airway resistance and provoking bronchospasm. This is why beta-1 selective agents are preferred, but not considered safe, in patients with asthma or chronic obstructive pulmonary disease, and why the summary slide states that beta-1 selective blockers carry less but still significant risk of bronchospasm. Some susceptible patients should avoid beta blockers altogether."
      },
      {
        "text": "Alpha-1 antagonism unmasks a reflex cholinergic bronchoconstrictor response",
        "explanation": "Incorrect. Alpha-1 antagonism belongs to carvedilol and labetalol and produces vasodilation, not airway narrowing, and no reflex cholinergic mechanism of this kind is taught in this lecture. The airway effect described is beta-2 mediated. This would be the correct answer if the patient had developed orthostatic hypotension after starting a third-generation agent."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: beta-1 selectivity is dose-dependent - raise the dose and beta-2 blockade appears, so no beta blocker is truly safe in asthma or COPD, only less risky.",
    "pdfPage": 52,
    "pdfQuote": "Airway resistance / Bronchospasm"
  },
  {
    "id": 13,
    "category": "Pharmacology: Beta Blocker Adverse Effects",
    "questionText": "A 34-year-old man with type 1 diabetes mellitus is started on a nonselective beta blocker after a myocardial infarction. Three weeks later he is brought to the emergency department obtunded with a capillary glucose of 32 mg/dL. His wife reports that unlike his previous episodes he gave no warning at all: there was no tremor, no sweating pattern he recognized, and no complaint of a racing heart before he collapsed. Which combination of mechanisms explains this event?",
    "options": [
      {
        "text": "Blocked hepatic glycogenolysis together with blunted adrenergic warning symptoms",
        "explanation": "Correct. Beta blockers interfere with recovery from insulin-induced hypoglycemia in two ways, and both are on the lecture's list. First, they inhibit beta-2 mediated hepatic glycogenolysis and gluconeogenesis, so the liver cannot mount its usual counterregulatory rise in blood glucose. Second, and more dangerously, they blunt the patient's perception of hypoglycemia by suppressing the adrenergic symptoms of tremor, tachycardia and nervousness, so the patient does not recognize that he is dropping. The lecturer concludes that beta blockers are not recommended in patients at risk for hypoglycemia, and that beta-1 selective agents may be less prone but are not exempt."
      },
      {
        "text": "Increased insulin secretion driven by stimulation of pancreatic beta cells",
        "explanation": "Incorrect. Beta blockers do not stimulate insulin secretion; the lecture lists decreased insulin sensitivity, not increased insulin release, among their metabolic effects. The hypoglycemia here originates from exogenous insulin combined with impaired counterregulation. This would be the correct answer if the patient had been given a sulfonylurea, which does stimulate insulin release."
      },
      {
        "text": "Reduced renal clearance of insulin caused by a fall in glomerular filtration rate",
        "explanation": "Incorrect. Nothing in this lecture links beta blockade to reduced renal insulin clearance, and the scenario provides no evidence of renal impairment. Attributing the event to insulin accumulation misses both taught mechanisms. This would be the correct answer if the patient had developed acute kidney injury with prolonged insulin action."
      },
      {
        "text": "Enhanced peripheral glucose uptake produced by beta-3 receptor activation in adipose tissue",
        "explanation": "Incorrect. Beta blockers are antagonists, so they do not activate beta-3 receptors, and the lecture's adipose tissue point is the opposite direction: they decrease release of free fatty acids by blocking activation of hormone-sensitive lipase. Enhanced glucose uptake is not a taught mechanism. This would be the correct answer if a beta-3 agonist had been administered."
      },
      {
        "text": "Increased insulin sensitivity produced by the vasodilating third-generation beta blockers",
        "explanation": "Incorrect. The lecture states that non-vasodilating agents decrease insulin sensitivity by a mechanism that is not understood, and this patient received a nonselective first-generation type agent rather than a vasodilating third-generation one. Improved sensitivity is also insufficient to explain the total loss of warning symptoms. This would be the correct answer if the question had asked how carvedilol or nebivolol differ metabolically from propranolol."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: beta blockers both impair recovery from hypoglycemia (beta-2 mediated hepatic glycogenolysis and gluconeogenesis) and mask its warning signs (tremor, tachycardia, nervousness).",
    "pdfPage": 52,
    "pdfQuote": "Blunt perception of symptoms (tremor, tachycardia,"
  },
  {
    "id": 14,
    "category": "Pharmacology: Beta Blocker Selection",
    "questionText": "During an elective operation a 62-year-old man develops a heart rate of 132 beats per minute and a blood pressure of 190/104 mmHg. The anesthesiologist wants an intravenous beta blocker that can be titrated minute to minute and whose effect will be gone within minutes if bradycardia or hypotension develops, since the patient has borderline left ventricular function. Which agent best matches these requirements?",
    "options": [
      {
        "text": "Propranolol, a lipid-soluble nonselective agent with a three to five hour half-life",
        "explanation": "Incorrect. Propranolol is listed among the agents usable for intraoperative tachycardia and hypertension, but as the first-generation prototype it has a half-life of three to five hours, so its effect cannot be withdrawn within minutes. In a patient with borderline ventricular function that persistence is the problem. This would be the correct answer if a sustained oral or parenteral effect had been acceptable."
      },
      {
        "text": "Metoprolol, a beta-1 selective agent with a three to seven hour half-life",
        "explanation": "Incorrect. Metoprolol is beta-1 selective and available intravenously, which makes it useful for intraoperative tachycardia, but its half-life of three to seven hours means the effect persists long after the drug is stopped. The requirement here is rapid offset. This would be the correct answer if the team had wanted ongoing rate control for several hours after the procedure."
      },
      {
        "text": "Carvedilol, which adds alpha-1 blockade and calcium entry blockade",
        "explanation": "Incorrect. Carvedilol is an oral third-generation agent with a half-life of seven to ten hours, used chiefly in heart failure and hypertension rather than for minute-to-minute intraoperative control. Its additional vasodilating properties would compound hypotension if the pressure fell. This would be the correct answer if the patient had stable heart failure needing long-term mortality-reducing therapy."
      },
      {
        "text": "Nadolol, a nonselective agent with a twenty to twenty-four hour half-life",
        "explanation": "Incorrect. Nadolol has one of the longest half-lives in the first-generation table, twenty to twenty-four hours, which is the opposite of what is needed in a rapidly changing intraoperative situation. It is also an oral agent. This would be the correct answer if once-daily chronic dosing had been the goal."
      },
      {
        "text": "Esmolol, a beta-1 selective agent with a nine-minute half-life",
        "explanation": "Correct. Esmolol is the second-generation beta-1 selective agent with a plasma half-life of only nine minutes, so it is given by continuous intravenous infusion to maintain a level for exactly as long as it is wanted and its effect disappears within minutes of stopping. That profile makes it the agent for crisis and emergency situations, including intraoperative tachycardia and hypertension and hypertensive emergency, and it is also used alongside an intravenous dihydropyridine to blunt reflex tachycardia. The very short duration is precisely the safety feature this patient needs."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: esmolol's 9-minute half-life makes it the beta blocker for minute-to-minute control - infusion only, effect gone within minutes of stopping.",
    "pdfPage": 35,
    "pdfQuote": "Second generation"
  },
  {
    "id": 15,
    "category": "Pharmacology: Beta Blocker Withdrawal",
    "questionText": "A 57-year-old man has taken a beta-1 selective antagonist for five years for hypertension and stable angina. He runs out of medication while travelling and takes none for three days. He now presents with nervousness, a resting heart rate of 118 beats per minute, a blood pressure of 186/104 mmHg, which is higher than any reading documented before he ever started treatment, and angina that is more frequent and more intense than his usual pattern. What underlies this presentation?",
    "options": [
      {
        "text": "Rebound renin release from unopposed beta-1 stimulation at the macula densa",
        "explanation": "Incorrect. Beta-1 mediated renin release comes from the juxtaglomerular apparatus, not the macula densa, and restoration of renin release alone would not explain a blood pressure higher than the pre-treatment baseline together with nervousness and tachycardia. The lecture attributes the syndrome to receptor changes. This would be the correct answer if the question had asked how beta blockade lowers plasma renin activity."
      },
      {
        "text": "Upregulation of beta adrenoceptors during chronic blockade",
        "explanation": "Correct. Chronic beta blockade leads to upregulation or supersensitivity of beta adrenoceptors, with more receptors expressed on the plasma membrane than the patient started with. While the drug is present those receptors are occupied and harmless, but abrupt discontinuation exposes the enlarged pool to circulating norepinephrine and epinephrine all at once. The result is the withdrawal syndrome described on the slide: nervousness, tachycardia, increased blood pressure that can exceed pre-treatment levels, increased intensity of angina, and increased risk of sudden death, with myocardial infarction reported after prolonged regular use. Beta blockers must therefore be tapered over a week or more rather than stopped abruptly."
      },
      {
        "text": "Accumulation of an active metabolite that possesses partial agonist activity",
        "explanation": "Incorrect. Metabolite accumulation cannot occur three days after the drug was stopped, and partial agonist activity is a property of certain parent drugs such as pindolol rather than a withdrawal mechanism. The timing points to loss of blockade against an expanded receptor pool. This would be the correct answer if symptoms had appeared while the drug was still being taken."
      },
      {
        "text": "Loss of membrane stabilizing sodium channel blockade in Purkinje tissue",
        "explanation": "Incorrect. Membrane stabilizing activity requires high concentrations, takes a week or more to develop, and is doubted by the lecturer to contribute even to antiarrhythmic effects. Its loss would not produce hypertension above baseline with nervousness. This would be the correct answer if the question had asked what membrane stabilizing activity means."
      },
      {
        "text": "Reversal of alpha-1 antagonism producing profound arteriolar vasoconstriction",
        "explanation": "Incorrect. Alpha-1 antagonism belongs to carvedilol and labetalol, and this patient was taking a beta-1 selective agent with no alpha-blocking property to lose. The rebound described is adrenergic supersensitivity at beta receptors. This would be the correct answer if the patient had abruptly stopped a third-generation agent and the question had asked specifically about its alpha component."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: chronic beta blockade upregulates beta receptors, so abrupt withdrawal produces tachycardia, nervousness, BP above pre-treatment levels, worse angina and sudden death risk - always taper over a week or more.",
    "pdfPage": 54,
    "pdfQuote": "Beta Blockers Withdrawal Syndrome"
  },
  {
    "id": 16,
    "category": "Pharmacology: Angina Management",
    "questionText": "A 42-year-old woman who smokes presents with recurrent crushing substernal chest pain occurring at rest, almost always between midnight and 4 a.m., and never with exertion. During an episode in the emergency department her electrocardiogram shows transient ST-segment elevation in the inferior leads that resolves spontaneously within ten minutes. Serial troponins are negative. Coronary angiography demonstrates no fixed obstructive lesions. She was started on a beta blocker by an outside physician two weeks ago and reports that her attacks have become more frequent since. What is the most appropriate next step?",
    "options": [
      {
        "text": "Increase the beta blocker dose and add a long-acting nitrate at bedtime",
        "explanation": "Incorrect. Escalating the beta blocker treats this patient with the wrong class entirely, and the lecturer states plainly that beta blockers should not be used for the vasospastic type because they do not work. A nitrate would help, but continuing to raise the offending drug does not. This would be the correct answer if she had exertional angina with fixed obstruction and inadequate rate control."
      },
      {
        "text": "Add immediate-release nifedipine to be bitten and swallowed during acute attacks",
        "explanation": "Incorrect. Immediate-release nifedipine given by puncturing the capsule is specifically condemned in this lecture, and short-acting formulations are not appropriate for the long-term treatment of angina or hypertension because abrupt vasodilation with reflex sympathetic activation can precipitate infarction. Calcium channel blockers are used here for prevention, not as an acute rescue. This would be the correct answer if no safer formulation existed, which is not the case."
      },
      {
        "text": "Stop the beta blocker and start a calcium channel blocker",
        "explanation": "Correct. Rest angina with transient ST elevation that resolves spontaneously, negative troponins and angiographically normal coronaries describes variant angina from coronary vasospasm. Calcium channel blockers are first-line for this condition because they induce coronary vasodilation and directly oppose the spasm, and they may be combined with nitroglycerin. Beta blockers are the wrong class: the lecturer states they should not be used for the vasospastic type because they do not work, which is the mirror image of exertional angina where beta blockers are first-line. Withdrawal should still be done thoughtfully, since abrupt discontinuation of a beta blocker carries its own rebound risk."
      },
      {
        "text": "Begin an intravenous esmolol infusion and admit her for continuous telemetry monitoring",
        "explanation": "Incorrect. Esmolol is a beta blocker, so this intensifies the very class that is failing her, and its indication in this lecture is intraoperative tachycardia and hypertensive emergency rather than vasospastic angina. Admission does not correct the pharmacologic error. This would be the correct answer if she had intraoperative tachycardia with hypertension needing minute-to-minute control."
      },
      {
        "text": "Start a thiazide diuretic since her coronary anatomy is angiographically normal",
        "explanation": "Incorrect. Normal coronary anatomy does not mean the chest pain is benign; it is precisely what defines vasospastic angina in this context. A thiazide addresses blood pressure and has no effect on coronary vasospasm. This would be the correct answer if the clinical problem had been uncomplicated primary hypertension rather than recurrent rest angina."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: variant (vasospastic) angina is treated with CCBs first-line, optionally with nitroglycerin - and beta blockers should not be used because they do not work for spasm.",
    "pdfPage": 20,
    "pdfQuote": "CCBs induce coronary vasodilation."
  },
  {
    "id": 17,
    "category": "Pharmacology: Angina Management",
    "questionText": "A 61-year-old man with stable exertional angina and hypertension takes a beta-1 selective blocker at a well-tolerated dose. His resting heart rate is 58 beats per minute and his blood pressure is 128/76 mmHg, but he still develops chest tightness after walking two blocks uphill. His echocardiogram shows normal left ventricular function and his electrocardiogram shows normal atrioventricular conduction. Which addition to his regimen is most appropriate, and why?",
    "options": [
      {
        "text": "A dihydropyridine CCB, which lowers afterload without further nodal slowing",
        "explanation": "Correct. In exertional angina the lecture states that a beta blocker plus a dihydropyridine calcium channel blocker is more effective than either agent alone. The dihydropyridine reduces peripheral vascular resistance and therefore afterload, which increases coronary blood flow and oxygen delivery, while the beta blocker continues to lower heart rate and contractility and therefore oxygen demand. Because dihydropyridines do not affect atrioventricular nodal conduction, they add antianginal benefit without compounding the bradycardia already produced by the beta blocker, and the beta blocker in turn blunts any reflex tachycardia."
      },
      {
        "text": "Verapamil, which will further slow the sinus node and the AV node",
        "explanation": "Incorrect. Adding a non-dihydropyridine to a beta blocker stacks two agents that both depress sinus node automaticity and atrioventricular conduction, risking excessive bradycardia and heart block, particularly at a resting rate already of 58. The lecture reserves non-dihydropyridines for patients who do not tolerate a beta blocker. This would be the correct answer if he had been unable to take a beta blocker at all."
      },
      {
        "text": "Another beta blocker at higher dose to further reduce the double product",
        "explanation": "Incorrect. The double product is heart rate multiplied by systolic pressure, and it is the non-dihydropyridine calcium channel blockers that are described as acting on it; more importantly, doubling up on beta blockade in a patient already at 58 beats per minute invites symptomatic bradycardia. Combination across classes is what the lecture recommends. This would be the correct answer if he had been undertreated with a clearly subtherapeutic single agent and a fast resting heart rate."
      },
      {
        "text": "Immediate-release nifedipine three times daily for its rapid onset of symptom relief",
        "explanation": "Incorrect. Immediate-release short-acting dihydropyridines are not appropriate for long-term treatment of angina or hypertension because their peaks cause abrupt vasodilation, oscillating control and sympathetic reflex surges. The correct choice is a long-acting formulation. This would be the correct answer if peaks and reflex tachycardia carried no clinical penalty, which is not the case."
      },
      {
        "text": "An intravenous non-dihydropyridine agent given during episodes of exertional chest pain",
        "explanation": "Incorrect. Calcium channel blockers in angina are used for prevention rather than for acute relief of an attack, and intravenous non-dihydropyridines carry significant risk of bradycardia and worsening cardiac output. Nothing about outpatient exertional angina calls for intravenous therapy. This would be the correct answer if the patient had a hemodynamically stable supraventricular tachycardia requiring acute rate control."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: in exertional angina a beta blocker plus a DHP CCB beats either alone - the DHP cuts afterload without slowing the node, and the beta blocker blunts the reflex tachycardia.",
    "pdfPage": 20,
    "pdfQuote": "BB plus DHP CCB more effective"
  },
  {
    "id": 18,
    "category": "Pharmacology: CCB Contraindications",
    "questionText": "A 66-year-old man with crescendo chest pain over 48 hours arrives in the emergency department. His electrocardiogram shows 2 mm of ST depression in the anterolateral leads and his initial troponin is mildly elevated. Before evaluation is complete, a family member opens a capsule of the patient's old short-acting antihypertensive and squeezes the contents under his tongue. Within minutes his blood pressure falls from 148/88 to 84/50 mmHg, his heart rate rises from 84 to 122 beats per minute, and his chest pain intensifies. Which mechanism best explains the deterioration?",
    "options": [
      {
        "text": "Abrupt vasodilation with reflex sympathetic activation and hypotension",
        "explanation": "Correct. Immediate-release nifedipine is contraindicated in acute or unstable angina and in ST-elevation myocardial infarction because it causes abrupt vasodilation with reflex sympathetic activation. Infarction may then result from excessive hypotension, from decreased coronary perfusion pressure, or from increased oxygen demand caused by the rise in sympathetic tone and the excessive tachycardia. All three elements are visible here: the pressure collapsed, the rate climbed, and the ischemic pain worsened. The lecturer specifically warns against the old practice of puncturing the capsule and squeezing the contents under the tongue, and notes that short-acting formulations are not appropriate for long-term treatment of angina or hypertension either."
      },
      {
        "text": "A direct negative inotropic effect producing cardiogenic shock from pump failure",
        "explanation": "Incorrect. Marked negative inotropy is a non-dihydropyridine property, and the accompanying tachycardia here argues strongly against primary pump failure, in which a reflex rise in rate would coexist with clinical evidence of low output rather than with pure vasodilation. Dihydropyridines actually produce reflex positive inotropy. This would be the correct answer if intravenous verapamil had been given to a patient with existing ventricular dysfunction."
      },
      {
        "text": "Atrioventricular nodal blockade producing complete heart block with a junctional escape",
        "explanation": "Incorrect. The patient became tachycardic rather than bradycardic, which excludes nodal blockade, and dihydropyridines do not affect conduction through the atrioventricular node at all. Heart block is the hazard of verapamil or diltiazem, particularly when combined with a beta blocker intravenously. This would be the correct answer if the rate had fallen to the thirties with a wide escape rhythm."
      },
      {
        "text": "Coronary steal from selective dilation of epicardial conductance vessels only",
        "explanation": "Incorrect. Coronary steal is not a mechanism taught in this lecture, and the deterioration here is fully explained by systemic hypotension with reflex tachycardia. The lecture attributes the harm to falling perfusion pressure and rising oxygen demand. This would be the correct answer if the lecture had described a redistribution of coronary flow away from ischemic beds, which it does not."
      },
      {
        "text": "Bradykinin accumulation causing capillary leak and reduced coronary perfusion pressure",
        "explanation": "Incorrect. Bradykinin accumulation belongs to the angiotensin-converting enzyme inhibitors covered in Part 1 of this series, not to calcium channel blockers, and it produces cough and angioedema rather than acute hypotension with tachycardia. This would be the correct answer if the patient had developed a persistent dry cough or facial swelling after starting an ACE inhibitor."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: immediate-release nifedipine is contraindicated in unstable angina and STEMI - abrupt vasodilation with reflex sympathetic activation causes hypotension, tachycardia and rising oxygen demand, and can precipitate infarction.",
    "pdfPage": 24,
    "pdfQuote": "acute or unstable angina and STEMI"
  },
  {
    "id": 19,
    "category": "Pharmacology: CCB Drug Interactions",
    "questionText": "A 71-year-old woman in the coronary care unit is receiving an intravenous non-dihydropyridine calcium channel blocker for ventricular rate control in atrial fibrillation. Her rate remains 118 beats per minute, so the team administers an intravenous beta blocker. Ten minutes later her rhythm strip shows a ventricular rate of 38 beats per minute with a wide escape complex, her blood pressure falls to 78/44 mmHg, and she becomes diaphoretic and confused. Which mechanism best explains this deterioration?",
    "options": [
      {
        "text": "Displacement of the calcium channel blocker from plasma protein binding sites",
        "explanation": "Incorrect. Protein binding displacement produces a transient rise in free drug that is usually offset by increased clearance, and it would not produce this dramatic and immediate collapse of both rate and pressure. The lecture attributes this interaction to shared pharmacodynamics at the node. This would be the correct answer if the interaction taught had been a binding-displacement phenomenon."
      },
      {
        "text": "Competitive inhibition of CYP3A4 raising the plasma concentration of both agents",
        "explanation": "Incorrect. Metabolic inhibition takes time to raise steady-state concentrations and cannot account for a catastrophe ten minutes after an intravenous dose. The mechanism here is additive effect at the same target rather than altered drug levels. This would be the correct answer if the patient had deteriorated gradually over several days after adding a CYP3A4 inhibitor."
      },
      {
        "text": "Reflex tachycardia followed by baroreceptor exhaustion and vasomotor collapse",
        "explanation": "Incorrect. Reflex tachycardia is the dihydropyridine problem, and this patient became profoundly bradycardic rather than tachycardic. Baroreceptor exhaustion is not a mechanism described in this lecture. This would be the correct answer if she had received immediate-release nifedipine and developed hypotension with a rate of 120."
      },
      {
        "text": "Additive suppression of AV nodal conduction and contractility",
        "explanation": "Correct. Verapamil already slows conduction through the atrioventricular node and depresses contractility, and a beta blocker does exactly the same through beta-1 blockade. Given together, and particularly by the intravenous route, they carry an increased risk of atrioventricular block and severe depression of ventricular function, which is what produced a bradycardic escape rhythm with hypotension here. The same combination hazard is why verapamil or diltiazem should be avoided in patients with existing ventricular dysfunction, with sinoatrial or atrioventricular nodal conduction disturbances, or with a systolic blood pressure below 90 mmHg."
      },
      {
        "text": "P-glycoprotein inhibition increasing central nervous system penetration of both drugs",
        "explanation": "Incorrect. P-glycoprotein inhibition by verapamil matters in this lecture for digoxin levels, not for central penetration of beta blockers, and confusion here is a consequence of cerebral hypoperfusion rather than a direct central drug effect. This would be the correct answer if the patient had been on digoxin and developed rising levels with nausea and visual symptoms."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: intravenous verapamil plus an intravenous beta blocker risks AV block and severe ventricular depression - never stack two AV nodal depressants by the IV route.",
    "pdfPage": 23,
    "pdfQuote": "Increased risk of AV block"
  },
  {
    "id": 20,
    "category": "Pharmacology: Arrhythmia Management",
    "questionText": "A 34-year-old man presents with palpitations that began abruptly one hour ago. His electrocardiogram shows a regular narrow-complex tachycardia at 186 beats per minute with no discernible P waves. His blood pressure is 118/72 mmHg, he is alert and comfortable, his lungs are clear, and his echocardiogram from last year showed normal ventricular function. Vagal maneuvers are attempted without success. A drug is given that terminates the rhythm. Which pharmacologic action produced that result?",
    "options": [
      {
        "text": "Arteriolar dilation that lowers afterload and systemic vascular resistance",
        "explanation": "Incorrect. Arteriolar dilation is the dihydropyridine action and it lowers blood pressure without any effect on atrioventricular nodal conduction; it would if anything provoke reflex tachycardia in this setting. Termination of a nodal re-entrant rhythm requires action at the node itself. This would be the correct answer if the therapeutic goal had been lowering blood pressure in primary hypertension."
      },
      {
        "text": "Beta-2 agonism producing vasodilation in the skeletal muscle vascular beds",
        "explanation": "Incorrect. Beta-2 agonism is a third-generation beta blocker property belonging to carteolol and contributes vasodilation, not rate control. Stimulating beta receptors would tend to accelerate rather than terminate a tachycardia. This would be the correct answer if the question had asked how carteolol adds a vasodilating effect to beta blockade."
      },
      {
        "text": "Sodium channel blockade slowing conduction through the ventricular Purkinje network",
        "explanation": "Incorrect. Sodium channel blockade is the membrane stabilizing property seen with propranolol and carvedilol at high concentrations, and the lecturer doubts it contributes meaningfully to antiarrhythmic effect. It also targets ventricular tissue rather than the atrioventricular node responsible for a narrow-complex re-entrant rhythm. This would be the correct answer if the arrhythmia had been ventricular in origin with a wide QRS."
      },
      {
        "text": "Alpha-1 antagonism reducing peripheral resistance and reflex sympathetic nodal drive",
        "explanation": "Incorrect. Alpha-1 antagonism belongs to carvedilol and labetalol and lowers vascular resistance; falling blood pressure would increase rather than decrease reflex sympathetic drive to the node. This is not a mechanism for terminating supraventricular tachycardia. This would be the correct answer if the goal had been blood pressure reduction in a hypertensive emergency."
      },
      {
        "text": "L-type channel block slowing AV nodal conduction and automaticity",
        "explanation": "Correct. Verapamil and diltiazem are used in hemodynamically stable patients with supraventricular tachyarrhythmias to slow automaticity and slow conduction through the atrioventricular node, which terminates re-entrant circuits that use the node and slows the ventricular response when the rhythm persists. Their nodal effect exists because L-type calcium channels carry the upstroke in nodal tissue, and it is amplified by use-dependence, since block deepens as the frequency of stimulation rises. These are the class IV Vaughan Williams antiarrhythmics; beta blockers, which are class II, act at the same node by a different receptor."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: verapamil and diltiazem (Vaughan Williams class IV) slow AV nodal automaticity and conduction in hemodynamically stable SVT, and their use-dependence makes them deeper blockers at fast rates.",
    "pdfPage": 21,
    "pdfQuote": "Verapamil and diltiazem (hemodynamically stable patients)"
  },
  {
    "id": 21,
    "category": "Pharmacology: CCB Therapeutic Uses",
    "questionText": "A 28-year-old woman reports that in cold weather her fingertips turn white, then blue, then red over about twenty minutes, with numbness and burning pain during the episodes. She has no digital ulceration, her pulses are normal, and serologic testing for connective tissue disease is negative. Episodes occur several times a week and interfere with her work. Which pharmacologic approach is most appropriate for her?",
    "options": [
      {
        "text": "A nonselective beta blocker, to reduce sympathetic vasoconstrictor outflow",
        "explanation": "Incorrect. Nonselective beta blockers block beta-2 mediated peripheral vasodilation, which the lecture lists as a cause of peripheral vascular insufficiency, and the slide specifically cautions against them in vasospastic disorders. They would worsen rather than help this presentation. This would be the correct answer if the clinical problem had been thyrotoxic tachycardia rather than digital vasospasm."
      },
      {
        "text": "A long-acting dihydropyridine, to relax digital arteriolar smooth muscle",
        "explanation": "Correct. Long-acting dihydropyridine calcium channel blockers are the agents named for Raynaud phenomenon, and the lecture states that at least a moderate reduction in the intensity of attacks and prevention of tissue loss is achievable in most patients. The mechanism is direct relaxation of arteriolar smooth muscle through blockade of L-type calcium entry, which opposes the episodic vasospasm underlying the triphasic color change. A long-acting formulation is specified because immediate-release short-acting dihydropyridines produce peaks, oscillating control, and reflex sympathetic surges."
      },
      {
        "text": "Intravenous clevidipine, to provide rapid and readily reversible arteriolar vasodilation",
        "explanation": "Incorrect. Clevidipine is an intravenous agent for hypertensive emergency with a one-minute half-life and a duration of five to fifteen minutes; it cannot be used for an intermittent outpatient condition. The route and duration are entirely mismatched to the problem. This would be the correct answer if she had presented in a hypertensive crisis requiring minute-to-minute titration."
      },
      {
        "text": "Verapamil, to slow the sinus node and reduce peripheral oxygen demand",
        "explanation": "Incorrect. Verapamil is a weaker vasodilator than the dihydropyridines and its principal additional actions are cardiac, slowing the sinus and atrioventricular nodes, which does nothing for digital vasospasm. The lecture names long-acting dihydropyridines for this indication. This would be the correct answer if the indication had been rate control or migraine prophylaxis."
      },
      {
        "text": "Topical timolol, to reduce blood flow through the affected peripheral vascular bed",
        "explanation": "Incorrect. Timolol is a topical ophthalmic beta blocker used to lower intraocular pressure by decreasing aqueous humor production, and reducing blood flow is the opposite of what a vasospastic digit needs. Its only systemic relevance in this lecture is unwanted absorption through nasolacrimal drainage. This would be the correct answer if the patient had been treated for glaucoma."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Raynaud phenomenon is treated with long-acting dihydropyridine CCBs, which achieve at least moderate reduction in attack intensity and prevent tissue loss in most patients.",
    "pdfPage": 21,
    "pdfQuote": "Long-acting DHP CCBs"
  },
  {
    "id": 22,
    "category": "Pharmacology: CCB Adverse Effects",
    "questionText": "A 58-year-old man with hypertension has been managed with calcium channel blockers for a year, first with a dihydropyridine and more recently with verapamil. Over the last three months he has developed burning retrosternal discomfort and sour regurgitation, worse after meals and when lying flat, and he now sleeps propped on two pillows. He takes no other medications, his weight is stable, and upper endoscopy shows mild distal esophagitis without stricture or mass. Which mechanism best explains his symptoms?",
    "options": [
      {
        "text": "Delayed gastric emptying from blockade of beta receptors on gastric smooth muscle",
        "explanation": "Incorrect. This patient is not taking a beta blocker, and gastric emptying is not the mechanism this lecture assigns to reflux on calcium channel blockers. The relevant target is a sphincter, not gastric motility as a whole. This would be the correct answer if the lecture had attributed reflux to adrenergic blockade of gastric emptying, which it does not."
      },
      {
        "text": "Relaxation of the lower esophageal sphincter from L-type channel blockade",
        "explanation": "Correct. The lecturer explains that L-type calcium channels are present in the lower esophageal sphincter, so calcium channel blockade relaxes that sphincter just as it relaxes vascular smooth muscle. A relaxed sphincter permits gastric contents to reflux, which over time can cause or aggravate gastroesophageal reflux disease, and the slide lists GERD aggravation as an adverse effect shared by both the non-dihydropyridine and dihydropyridine families. Patients who already have reflux are the ones most likely to notice the change, exactly as here."
      },
      {
        "text": "Increased gastric acid secretion driven by unopposed vagal cholinergic stimulation",
        "explanation": "Incorrect. Calcium channel blockers do not increase acid output, and no cholinergic mechanism is described in this lecture. The problem is sphincter tone permitting reflux of normal gastric contents rather than excess acid production. This would be the correct answer if a drug that stimulated parietal cell secretion had been prescribed."
      },
      {
        "text": "Direct esophageal mucosal injury from prolonged contact with an acidic tablet formulation",
        "explanation": "Incorrect. Pill-induced esophagitis is a contact injury that typically causes odynophagia and discrete ulceration rather than the postprandial and recumbent reflux pattern described here. The lecture attributes this adverse effect to sphincter relaxation. This would be the correct answer if he had sudden severe painful swallowing after taking a tablet without water at bedtime."
      },
      {
        "text": "Reduced salivary bicarbonate secretion resulting from anticholinergic drug properties",
        "explanation": "Incorrect. Calcium channel blockers have no meaningful anticholinergic activity, and salivary bicarbonate is not discussed in this lecture. Attributing the symptoms to impaired esophageal acid clearance goes beyond the taught mechanism. This would be the correct answer if a strongly anticholinergic agent had been added to his regimen."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: L-type calcium channels sit in the lower esophageal sphincter, so both DHP and non-DHP CCBs relax it and can cause or aggravate GERD.",
    "pdfPage": 22,
    "pdfQuote": "GERD aggravation"
  },
  {
    "id": 23,
    "category": "Pharmacology: Hypertensive Emergency in Pregnancy",
    "questionText": "A 31-year-old woman at 34 weeks of gestation presents with a blood pressure of 178/116 mmHg, severe headache and visual scotomata. Her reflexes are brisk and she has 3+ proteinuria. Fetal monitoring is reassuring. The obstetric team requires an intravenous agent to lower her blood pressure in a controlled fashion while magnesium sulfate is started. Which choice is best supported by this lecture?",
    "options": [
      {
        "text": "Intravenous verapamil, to reduce the double product and slow the heart rate",
        "explanation": "Incorrect. Intravenous verapamil is a non-dihydropyridine with substantial negative inotropic and chronotropic effects and is used for rate control rather than for hypertensive emergency, and the lecture names entirely different agents for pregnancy. Slowing the double product is an antianginal rationale, not an emergency antihypertensive one. This would be the correct answer if the indication had been ventricular rate control in stable atrial fibrillation."
      },
      {
        "text": "Immediate-release nifedipine capsules, opened and administered under the tongue",
        "explanation": "Incorrect. The lecturer explicitly condemns puncturing nifedipine capsules and squeezing the contents under the tongue because the abrupt vasodilation and reflex sympathetic activation can precipitate myocardial infarction. Uncontrolled pressure drops are especially undesirable when placental perfusion is at stake. This would be the correct answer if no titratable intravenous agent were available and rapid oral therapy were the only option."
      },
      {
        "text": "Intravenous labetalol, a recommended agent in pregnancy",
        "explanation": "Correct. Labetalol is a third-generation nonselective beta blocker that also antagonizes alpha-1 receptors, so it lowers peripheral resistance as well as blocking cardiac beta receptors, and it is available intravenously. The lecture lists labetalol and esmolol as beta blockers for hypertensive emergencies and states specifically that labetalol is a recommended agent for the treatment of hypertensive emergency in pregnant persons. Its combined alpha and beta blockade lowers pressure without the reflex tachycardia that follows pure arteriolar vasodilation."
      },
      {
        "text": "Intravenous propranolol, a lipid-soluble nonselective first-generation agent",
        "explanation": "Incorrect. Propranolol is the first-generation nonselective prototype and is listed for intraoperative tachycardia and hypertension, not as the recommended agent for hypertensive emergency in pregnancy. It also lacks the alpha-1 blocking vasodilator component that makes labetalol useful here. This would be the correct answer if the setting had been intraoperative tachycardia in a non-pregnant patient."
      },
      {
        "text": "Oral amlodipine, whose long half-life avoids peaks and reflex tachycardia",
        "explanation": "Incorrect. Amlodipine's slow absorption and 30 to 50 hour half-life are exactly why it is a good chronic oral agent and a poor emergency one; the onset is far too slow for a patient with severe hypertension and neurologic symptoms. An intravenous, titratable agent is required. This would be the correct answer if the task had been long-term outpatient blood pressure control with minimal reflex tachycardia."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: labetalol is the recommended agent for hypertensive emergency in pregnant persons - a nonselective beta blocker with added alpha-1 antagonism, available intravenously.",
    "pdfPage": 39,
    "pdfQuote": "Hypertensive emergencies: labetalol, esmolol"
  },
  {
    "id": 24,
    "category": "Pharmacology: Heart Failure",
    "questionText": "A 59-year-old man has chronic heart failure with a left ventricular ejection fraction of 28 percent. He is euvolemic, walks a mile without dyspnea, and has had no hospitalization in a year. He takes an angiotensin-converting enzyme inhibitor and a loop diuretic. His heart rate is 84 beats per minute, his blood pressure is 118/70 mmHg, and his electrocardiogram shows sinus rhythm with normal conduction. Which management step best reflects the evidence described in this lecture?",
    "options": [
      {
        "text": "Avoid beta blockers entirely, since reducing contractility will worsen his ejection fraction",
        "explanation": "Incorrect. This is the intuitive objection the lecturer raises and then answers: clinical trials show favorable outcomes because beta blockers attenuate sustained sympathetic activation, decrease unstable tachyarrhythmias, and reduce remodeling with a fall in left ventricular chamber size and a rise in ejection fraction. Withholding therapy denies a mortality benefit. This would be the correct answer if the patient were acutely decompensated rather than stable and euvolemic."
      },
      {
        "text": "Start high-dose propranolol, the prototype nonselective beta blocker",
        "explanation": "Incorrect. Propranolol is the first-generation prototype but is not among the agents proven in stable heart failure, and starting at high dose ignores the requirement to begin low and titrate because beta blockers can precipitate acute decompensation of cardiac function. Both the agent and the dose are wrong. This would be the correct answer if the indication had been situational performance anxiety at low dose."
      },
      {
        "text": "Start bucindolol, which was shown to reduce mortality in severe heart failure",
        "explanation": "Incorrect. The lecture makes the opposite point explicitly: the mortality reduction seen with bisoprolol, carvedilol, metoprolol and nebivolol was not seen with bucindolol. This is the trap of assuming class effects extend to every member. This would be the correct answer if the trial evidence had been positive for bucindolol, which it was not."
      },
      {
        "text": "Start low-dose carvedilol and titrate slowly",
        "explanation": "Correct. Most patients with chronic heart failure respond favorably to certain beta blockers, but only drugs shown to be effective in stable heart failure should be used, and the lecture names bisoprolol, carvedilol, metoprolol and nebivolol as the agents that reduced mortality in stable severe heart failure. This patient is stable and euvolemic, which is the required setting, and the drug must be started at low dose and increased slowly because beta blockers can precipitate acute decompensation of cardiac function. Carvedilol also brings alpha-1 blockade, calcium entry blockade and antioxidant activity as a third-generation agent."
      },
      {
        "text": "Start a non-dihydropyridine calcium channel blocker for its negative inotropic and chronotropic effect",
        "explanation": "Incorrect. Verapamil and diltiazem depress contractility and are contraindicated in patients with ventricular dysfunction, which is precisely this patient's problem, and their interactions are additive with other cardiac depressants. Negative inotropy here is harmful, not therapeutic. This would be the correct answer if he had normal ventricular function and needed rate control in atrial fibrillation."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: only bisoprolol, carvedilol, metoprolol and nebivolol reduced mortality in stable severe heart failure (bucindolol did not) - start low in stable patients, because beta blockers can precipitate acute decompensation.",
    "pdfPage": 47,
    "pdfQuote": "bisoprolol, carvedilol, metoprolol and nebivolol"
  },
  {
    "id": 25,
    "category": "Pharmacology: Beta Blockers in Endocrine Disease",
    "questionText": "A 27-year-old woman is brought in with fever of 39.8 degrees Celsius, agitation, tremor, and atrial fibrillation at 156 beats per minute one week after an untreated febrile illness. Her thyroid is diffusely enlarged, her thyroid-stimulating hormone is undetectable and free thyroxine is markedly elevated. In addition to definitive antithyroid therapy she is given a beta blocker, and her heart rate and tremor improve substantially within hours. Which mechanism explains the benefit of the beta blocker?",
    "options": [
      {
        "text": "Blockade of an increased number of beta receptors in target tissues",
        "explanation": "Correct. Hyperthyroidism raises the basal metabolic rate and enhances organ sensitivity to catecholamines, and the lecture states that this is associated with an increased number of beta adrenergic receptors. The lecturer describes thyroid hormone as increasing expression and deposition of beta receptors in the heart, which is what produces the tachycardia. A beta blocker does nothing to the thyroid itself; it simply occupies that expanded receptor pool, which is why it ameliorates palpitations, tachycardia, tremulousness, anxiety and heat intolerance, and why it controls pulse rate, hypertension and atrial fibrillation while definitive therapy takes effect. This matters because thyroid storm can cause supraventricular tachycardia and sudden death."
      },
      {
        "text": "Inhibition of thyroid hormone release from stored colloid within the thyroid follicles",
        "explanation": "Incorrect. Blocking release of preformed hormone from colloid is the action of iodide preparations, not of beta blockers, and this lecture makes no such claim for adrenergic antagonists. The benefit here is at the peripheral receptor, not the gland. This would be the correct answer if the question had asked about the effect of a saturated iodide solution."
      },
      {
        "text": "Blockade of thyroid hormone synthesis at the thyroid peroxidase enzyme step",
        "explanation": "Incorrect. Inhibition of thyroid peroxidase is the mechanism of the thionamide antithyroid drugs given as definitive therapy in this patient, and it is not something a beta blocker does. Synthesis blockade also takes days to weeks, whereas her improvement occurred within hours. This would be the correct answer if the question had asked how the antithyroid drug itself works."
      },
      {
        "text": "Reduction of thyroid-stimulating hormone release from the anterior pituitary gland",
        "explanation": "Incorrect. Her thyroid-stimulating hormone is already undetectable through negative feedback, so lowering it further could not help, and beta blockers have no such pituitary action. The clinical target here is catecholamine sensitivity in the periphery. This would be the correct answer if the disorder had been driven by excess thyroid-stimulating hormone secretion."
      },
      {
        "text": "Direct antagonism of thyroid hormone receptors within the nuclei of cardiac myocytes",
        "explanation": "Incorrect. Beta blockers are competitive antagonists at cell-surface G protein-coupled beta adrenoceptors, not at nuclear thyroid hormone receptors. The lecture frames the benefit as blockade of the increased number of beta receptors that thyroid hormone has induced. This would be the correct answer if a nuclear receptor antagonist had been administered."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: hyperthyroidism increases the number of beta adrenergic receptors and organ sensitivity to catecholamines - beta blockers control pulse, hypertension and atrial fibrillation without touching the thyroid.",
    "pdfPage": 49,
    "pdfQuote": "Hyperthyroidism: Beta Blockers Effects"
  },
  {
    "id": 26,
    "category": "Pharmacology: Ophthalmic Beta Blockers",
    "questionText": "A 71-year-old man with chronic obstructive pulmonary disease is started on eye drops for newly diagnosed open-angle glaucoma. Ten days later he reports increasing dyspnea and wheeze, and his home pulse readings have fallen from the mid seventies to the high forties. His intraocular pressure has improved, his pupils are of normal size, and he denies blurred vision or difficulty seeing at night. Which mechanism best accounts for his systemic symptoms?",
    "options": [
      {
        "text": "Systemic absorption is not possible from the conjunctival surface at ophthalmic doses",
        "explanation": "Incorrect. This is the assumption the lecture is written to dispel. Even a small quantity of a topical beta blocker can achieve systemic levels sufficient to cause harm in a susceptible patient, and the slide specifically warns of adverse cardiovascular and pulmonary effects. This would be the correct answer if topical agents were truly confined to the eye, which they are not."
      },
      {
        "text": "The drug causes bronchospasm by blocking muscarinic receptors in the airway wall",
        "explanation": "Incorrect. Muscarinic blockade would produce bronchodilation rather than bronchospasm, and beta blockers act at adrenergic rather than cholinergic receptors. The airway effect in this lecture is loss of beta-2 mediated bronchodilation. This would be the correct answer if the drug had been a cholinergic agonist used to constrict the pupil."
      },
      {
        "text": "Pupillary constriction reflexively raises vagal tone by way of the ciliary ganglion",
        "explanation": "Incorrect. The lecture states that ophthalmic beta blockers have little or no effect on pupil size or accommodation, and this patient's pupils are normal. No reflex pathway of this kind is described. This would be the correct answer if a miotic agent had been prescribed and pupillary constriction were the observed finding."
      },
      {
        "text": "The drug increases aqueous humor outflow and therefore has no systemic bioavailability",
        "explanation": "Incorrect. Beta blockers lower intraocular pressure presumably by decreasing production of aqueous humor and ocular blood flow rather than by increasing outflow, and the route of action within the eye has nothing to do with systemic exposure. This would be the correct answer if the agent had been a prostaglandin analog acting on uveoscleral outflow."
      },
      {
        "text": "Nasolacrimal drainage delivers drug to the systemic circulation",
        "explanation": "Correct. Beta receptors of the eye are largely beta-2 and sit in the ciliary body epithelium and blood vessels, so topical blockade lowers intraocular pressure by decreasing aqueous humor production and ocular blood flow while sparing pupil size, accommodation and night vision. However, drug that drains through the nasolacrimal duct is absorbed and reaches the systemic circulation, and the lecturer stresses that even a small amount can achieve systemic levels. In susceptible patients that produces exactly this picture: bronchospasm from beta-2 blockade in a patient with obstructive lung disease, and bradycardia from cardiac beta blockade."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: topical beta blockers reach the systemic circulation through nasolacrimal drainage and can cause bronchospasm and bradycardia - eye drops are systemic drugs in susceptible patients.",
    "pdfPage": 50,
    "pdfQuote": "Nasolacrimal drainage"
  },
  {
    "id": 27,
    "category": "Pharmacology: Beta Blockers in Performance Anxiety",
    "questionText": "A 24-year-old medical student describes a pounding heart, trembling hands, a shaky voice, dry mouth and chest tightness that occur only in the twenty minutes before she gives an oral presentation. She has no symptoms in any other setting, sleeps well, and has no generalized worry. Her thyroid studies, electrocardiogram and physical examination are normal. Which intervention is most consistent with this lecture?",
    "options": [
      {
        "text": "Daily verapamil, which has weak evidence for preventing situational attacks",
        "explanation": "Incorrect. Verapamil's only preventive indication in this lecture is migraine, and even there the lecturer describes the data as weak and conflicting and the use as not widespread. It has no role in performance anxiety. This would be the correct answer if she had recurrent migraine and other prophylactics had failed."
      },
      {
        "text": "An esmolol infusion titrated during the presentation to control heart rate",
        "explanation": "Incorrect. Esmolol is an intravenous agent with a nine-minute half-life reserved for crisis and intraoperative settings, and infusing a drug during a classroom presentation is neither practical nor indicated. An oral agent taken in advance achieves the same goal. This would be the correct answer if she had developed intraoperative tachycardia with hypertension."
      },
      {
        "text": "Low-dose propranolol about an hour before the presentation",
        "explanation": "Correct. Situational or performance anxiety, colloquially stage fright, produces sympathetic manifestations such as palpitations, chest tightness, breathlessness, muscular tension, trembling, flushing, sweating and dry mouth. The lecture states that a low dose of propranolol taken an hour before a performance reliably decreases the somatic manifestations of anxiety, such as the pounding heart and the trembling hands and voice. The lecturer adds that propranolol has been recommended for a long time by tradition, but that any beta blocker would work, and that the drug treats the peripheral symptoms rather than the anxiety itself."
      },
      {
        "text": "Immediate-release nifedipine, taken thirty minutes before each presentation",
        "explanation": "Incorrect. Nifedipine is a dihydropyridine calcium channel blocker whose immediate-release form produces peaks with abrupt vasodilation, headache, flushing and reflex tachycardia; it would amplify the palpitations she is trying to suppress. It has no anxiolytic role. This would be the correct answer if the indication had been vasospastic angina and no long-acting alternative existed."
      },
      {
        "text": "Timolol eye drops, exploiting nasolacrimal absorption to achieve a systemic effect",
        "explanation": "Incorrect. Systemic absorption through nasolacrimal drainage is described in this lecture as an unwanted hazard of glaucoma therapy, not as a deliberate route of administration, and the delivered dose is neither reliable nor titratable. An oral agent is the correct approach. This would be the correct answer if the question had asked why topical beta blockers cause bronchospasm."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: low-dose propranolol an hour before a performance reliably blunts the somatic manifestations of situational anxiety - pounding heart, trembling hands and voice - without treating the anxiety itself.",
    "pdfPage": 51,
    "pdfQuote": "Low dose of propranolol taken an hour before a performance"
  },
  {
    "id": 28,
    "category": "Pharmacology: Beta Blocker Classification",
    "questionText": "A 64-year-old man with heart failure with reduced ejection fraction and hypertension is maintained on a beta blocker. Pharmacologic characterization of his agent shows competitive antagonism at both beta-1 and beta-2 receptors, antagonism at alpha-1 adrenergic receptors on vascular smooth muscle, blockade of calcium entry, and antioxidant activity. Its oral bioavailability is about 30 percent, its plasma protein binding is 98 percent, and its half-life is seven to ten hours. Which agent is he taking?",
    "options": [
      {
        "text": "Nebivolol, a beta-1 selective agent that produces nitric oxide",
        "explanation": "Incorrect. Nebivolol is a third-generation agent, but it is beta-1 selective rather than nonselective and its additional vasodilating mechanism is nitric oxide production, not alpha-1 antagonism with calcium entry blockade. It is one of the four agents proven in stable heart failure, but the pharmacologic fingerprint here is different. This would be the correct answer if the described agent had been beta-1 selective and had produced nitric oxide."
      },
      {
        "text": "Carvedilol, a nonselective agent with alpha-1 blockade",
        "explanation": "Correct. Carvedilol is the third-generation nonselective beta blocker whose additional properties are exactly those listed: alpha-1 receptor antagonism, calcium entry blockade and antioxidant activity, together with membrane stabilizing activity at high concentrations. The pharmacokinetic values match as well, with oral bioavailability around 30 percent, plasma protein binding of 98 percent, and a half-life of seven to ten hours. Its alpha-1 blockade lowers peripheral resistance on top of the beta blockade, and it is one of the four beta blockers shown to reduce mortality in stable severe heart failure."
      },
      {
        "text": "Propranolol, the prototype first-generation nonselective agent",
        "explanation": "Incorrect. Propranolol is nonselective but is a first-generation agent with no alpha-1 blockade, no calcium entry blockade and no antioxidant activity; its distinguishing extras are high lipid solubility and membrane stabilizing activity. Its half-life is three to five hours, not seven to ten. This would be the correct answer if the agent had lacked all vasodilating mechanisms and been described only as a lipid-soluble nonselective blocker."
      },
      {
        "text": "Atenolol, a beta-1 selective agent with low lipid solubility",
        "explanation": "Incorrect. Atenolol is a second-generation beta-1 selective agent with no membrane stabilizing activity, no intrinsic sympathomimetic activity and no additional vasodilating mechanism, and its plasma protein binding is only 6 to 16 percent. Neither the selectivity nor the binding matches. This would be the correct answer if the profile had shown pure beta-1 selectivity with low protein binding."
      },
      {
        "text": "Nadolol, a nonselective agent with a long plasma half-life and renal elimination",
        "explanation": "Incorrect. Nadolol is a first-generation nonselective agent with low lipid solubility and a 20 to 24 hour half-life, and it has no alpha-1 blocking, calcium entry blocking or antioxidant properties. The stated half-life of seven to ten hours alone excludes it. This would be the correct answer if the agent had been described as nonselective with a once-daily half-life and no additional mechanisms."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: carvedilol is the nonselective third-generation beta blocker that adds alpha-1 antagonism, calcium entry blockade and antioxidant activity; nebivolol and carteolol add nitric oxide instead.",
    "pdfPage": 37,
    "pdfQuote": "with putative additional mechanisms of vasodilation"
  },
  {
    "id": 29,
    "category": "Pharmacology: Angina Management",
    "questionText": "A 68-year-old man with stable exertional angina begins a beta blocker. His anginal threshold improves and his episodes become less frequent, but he continues to have chest tightness on steep inclines. Echocardiography now shows a modest increase in left ventricular end-diastolic volume compared with before treatment, and Doppler shows a longer left ventricular ejection time. His cardiologist adds a nitrate. Which undesirable consequence of the beta blocker is the nitrate intended to counterbalance?",
    "options": [
      {
        "text": "Reduced coronary collateral circulation toward the ischemic myocardial regions",
        "explanation": "Incorrect. Beta blockers do the opposite: the lecture states they cause some increase in flow toward ischemic regions by increasing collateral circulation. That is a benefit rather than a liability to be offset. This would be the correct answer if beta blockers had been shown to impair collateral flow, which they are not."
      },
      {
        "text": "Reflex tachycardia from arteriolar dilation that raises myocardial oxygen demand",
        "explanation": "Incorrect. Reflex tachycardia is the problem of dihydropyridine calcium channel blockers, not of beta blockers, which slow rather than accelerate the heart. Beta blockers are in fact added to dihydropyridines precisely to prevent that reflex. This would be the correct answer if immediate-release nifedipine had been the agent producing the adverse effect."
      },
      {
        "text": "Increased systolic blood pressure during exertion that raises ventricular wall stress",
        "explanation": "Incorrect. Beta blockers reduce arterial blood pressure at rest and during exertion, with a particular effect on systolic pressure during exercise, so this describes a benefit rather than a deleterious effect. The undesirable effects listed relate to ventricular filling and ejection. This would be the correct answer if the drug had raised exertional systolic pressure, which it does not."
      },
      {
        "text": "Increased end-diastolic volume and ejection time",
        "explanation": "Correct. The lecture lists two undesirable effects of beta blockers in angina: an increased end-diastolic volume, because the slowed heart has more time to fill, and an increased ejection time. Both tend to increase myocardial oxygen requirement, working against the drug's main benefit of reduced oxygen consumption from negative chronotropy, negative inotropy and lower arterial pressure. Nitrates counterbalance these deleterious effects, which is why the combination is used in patients with angina, and the topic is developed further in the dedicated lecture on drugs for angina."
      },
      {
        "text": "Bronchoconstriction that limits oxygen delivery to the exercising skeletal muscles",
        "explanation": "Incorrect. Bronchospasm from beta-2 blockade is a genuine adverse effect of beta blockers, but it is a pulmonary complication in susceptible patients rather than the hemodynamic penalty that nitrates offset. Nitrates would not treat airway narrowing. This would be the correct answer if the patient had asthma and developed wheeze after starting a nonselective agent."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: beta blockers increase end-diastolic volume and ejection time, which raises myocardial oxygen requirement - nitrates counterbalance these deleterious effects in angina.",
    "pdfPage": 45,
    "pdfQuote": "Nitrates counterbalance these deleterious effects"
  },
  {
    "id": 30,
    "category": "Pharmacology: Post-Myocardial Infarction Therapy",
    "questionText": "A 58-year-old man is four days out from an anterior ST-elevation myocardial infarction treated with primary percutaneous coronary intervention. His ejection fraction is 42 percent, he is euvolemic, his heart rate is 68 beats per minute and his blood pressure is 122/74 mmHg. He is taking aspirin, a P2Y12 inhibitor, a high-intensity statin, and a beta blocker. Which addition to his regimen did the lecturer describe as the standard of care after myocardial infarction?",
    "options": [
      {
        "text": "Add both an angiotensin-converting enzyme inhibitor and an angiotensin receptor blocker for maximal renin-angiotensin blockade",
        "explanation": "Incorrect. The lecturer is explicit that the combination is an ACE inhibitor or an angiotensin receptor blocker, not both, together with a beta blocker. Dual renin-angiotensin blockade is not what was described. This would be the correct answer if additive blockade of the pathway had been shown to improve outcomes, which the lecture does not claim."
      },
      {
        "text": "Add verapamil for its negative chronotropic and negative inotropic properties",
        "explanation": "Incorrect. Verapamil is contraindicated alongside a beta blocker in patients with ventricular dysfunction because of additive suppression of atrioventricular conduction and contractility, and this patient already has a reduced ejection fraction. Non-dihydropyridines are reserved for patients who cannot take a beta blocker and have no ventricular dysfunction. This would be the correct answer if he had normal ventricular function, intolerance of beta blockers, and no conduction disturbance."
      },
      {
        "text": "Add immediate-release nifedipine to lower afterload and reduce myocardial oxygen demand",
        "explanation": "Incorrect. Immediate-release nifedipine is contraindicated in acute or unstable angina and ST-elevation myocardial infarction because abrupt vasodilation with reflex sympathetic activation may precipitate or aggravate infarction. This is the single most dangerous choice on the list for this patient. This would be the correct answer if a long-acting dihydropyridine were needed for coexistent vasospastic angina, and even then not in this formulation."
      },
      {
        "text": "Stop the beta blocker because it reduces contractility in a recently damaged ventricle",
        "explanation": "Incorrect. Beta blockers prevent recurrent infarction and sudden death in patients recovering from acute myocardial infarction and improve survival, so withdrawing one is exactly wrong; abrupt discontinuation also risks the withdrawal syndrome with rebound tachycardia and increased anginal intensity. This would be the correct answer if he were in acute decompensated heart failure requiring temporary reduction of negative inotropic therapy."
      },
      {
        "text": "Add an ACE inhibitor or an ARB, but not both",
        "explanation": "Correct. The lecturer states that beta blockers prevent recurrent infarction and sudden death in patients recovering from acute myocardial infarction, and that a beta blocker together with an angiotensin-converting enzyme inhibitor or an angiotensin receptor blocker, not both, is considered the standard of care after myocardial infarction. The beta blocker contributes by reducing heart rate and myocardial oxygen consumption, decreasing intracellular calcium overload, inhibiting afterdepolarization-mediated automaticity and attenuating sustained sympathetic activation, and the renin-angiotensin agent addresses the other arm of neurohormonal activation."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: after myocardial infarction the standard of care is a beta blocker plus an ACE inhibitor OR an ARB - not both - because beta blockers prevent recurrent infarction and sudden death.",
    "pdfPage": 48,
    "pdfQuote": "prevent recurrent infarction and sudden death"
  }
];

window.Test_CV36 = Test_CV36;
