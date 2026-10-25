// CPR Block 2 - Review Lecture: Sympathomimetics Part 1 (PPOM33)
// Faculty: Goldstein
// 20 first-order recall questions. Slide links resolve through PDF_MAPPING["PPOM33"].
const Test_Review_PPOM33 = [
  {
    "id": 1,
    "category": "Drug Classes: Mechanistic Categories",
    "questionText": "Which of the following best describes a direct-acting sympathomimetic drug?",
    "options": [
      {
        "text": "Binds to and activates adrenergic receptors to produce a response",
        "explanation": "Correct. Direct-acting sympathomimetics bind to and activate adrenergic receptors (alpha, beta, and dopaminergic) to produce their effects. This stands in contrast with indirect-acting agents, which augment the activity of endogenous catecholamines by promoting release, blocking reuptake, or blocking degradation. Mixed-acting drugs combine both mechanisms."
      },
      {
        "text": "Induces catecholamine release from storage vesicles",
        "explanation": "Incorrect. Promoting release of catecholamines from storage vesicles is one subtype of indirect-acting mechanism. This would be the correct answer if the question asked about the mechanism of a releasing agent such as amphetamine instead."
      },
      {
        "text": "Inhibits reuptake of catecholamines into adrenergic neurons",
        "explanation": "Incorrect. Blocking the norepinephrine transporter to raise synaptic catecholamine levels is a form of indirect-acting mechanism. This would be the correct answer if the question asked about the mechanism of a reuptake inhibitor such as cocaine instead."
      },
      {
        "text": "Blocks degradation of catecholamines by MAO or COMT",
        "explanation": "Incorrect. Inhibition of catecholamine-degrading enzymes raises catecholamine concentrations and is an indirect mechanism. This would be the correct answer if the question asked about the mechanism of an MAO or COMT inhibitor instead."
      },
      {
        "text": "Combines receptor binding with vesicle release",
        "explanation": "Incorrect. Combining direct receptor activation with promotion of release describes a mixed-acting sympathomimetic such as ephedrine. This would be the correct answer if the question asked about the mechanism of a mixed-acting sympathomimetic instead."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Direct-acting sympathomimetics bind and activate adrenergic receptors themselves; indirect-acting agents raise endogenous catecholamine activity; mixed-acting drugs do both.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 7,
    "pdfQuote": "Direct-acting drugs bind to and activate adrenergic receptors"
  },
  {
    "id": 2,
    "category": "Structure-Activity Relationships",
    "questionText": "Most adrenergic drugs are structural derivatives of which of the following parent compounds?",
    "options": [
      {
        "text": "Tryptophan",
        "explanation": "Incorrect. Tryptophan is the aromatic amino acid precursor of serotonin, not of sympathomimetic amines. This would be the correct answer if the question asked about the precursor of serotonin instead."
      },
      {
        "text": "Choline",
        "explanation": "Incorrect. Choline is the backbone of acetylcholine and other cholinergic compounds. This would be the correct answer if the question asked about the parent compound of parasympathomimetic agents instead."
      },
      {
        "text": "Beta-phenylethylamine",
        "explanation": "Correct. Most adrenergic drugs are derivatives of beta-phenylethylamine. Substitutions on the benzene ring and on the ethylamine side chains produce compounds with varying abilities to distinguish between alpha and beta receptors and to penetrate the CNS. The number and location of hydroxyl substitutions and the nature of the substituent on the amino nitrogen determine receptor potency, uptake by the norepinephrine transporter, and pharmacokinetic properties."
      },
      {
        "text": "Imidazoline",
        "explanation": "Incorrect. Imidazoline derivatives include some alpha-2 agonists but are not the parent structural class of sympathomimetics overall. This would be the correct answer if the question asked about the structural class of oxymetazoline instead."
      },
      {
        "text": "Benzodiazepine",
        "explanation": "Incorrect. The benzodiazepine ring system is the backbone of GABA-A positive allosteric modulators. This would be the correct answer if the question asked about the class of diazepam instead."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Adrenergic drugs are built on a beta-phenylethylamine backbone; ring hydroxyls and amino nitrogen substitutions tune receptor selectivity and metabolism.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 7,
    "pdfQuote": "derivatives of beta-phenylethylamine"
  },
  {
    "id": 3,
    "category": "Catecholamine Synthesis",
    "questionText": "The endogenous catecholamines dopamine, norepinephrine, and epinephrine are synthesized from which amino acid?",
    "options": [
      {
        "text": "Tryptophan",
        "explanation": "Incorrect. Tryptophan is the precursor for serotonin and melatonin biosynthesis. This would be the correct answer if the question asked about the precursor of serotonin instead."
      },
      {
        "text": "Tyrosine",
        "explanation": "Correct. The catecholamines dopamine, norepinephrine, and epinephrine are all derived from the amino acid tyrosine. Tyrosine is converted stepwise to DOPA, then dopamine, then norepinephrine, and finally epinephrine. This shared precursor explains why the catecholamines share a common catechol ring with varying amine substitutions."
      },
      {
        "text": "Glutamate",
        "explanation": "Incorrect. Glutamate is the main excitatory CNS neurotransmitter and the precursor for GABA. This would be the correct answer if the question asked about the precursor of GABA instead."
      },
      {
        "text": "Histidine",
        "explanation": "Incorrect. Histidine is the amino acid precursor of histamine. This would be the correct answer if the question asked about the precursor of histamine instead."
      },
      {
        "text": "Glycine",
        "explanation": "Incorrect. Glycine itself is an inhibitory neurotransmitter and a building block of heme and other molecules. This would be the correct answer if the question asked about an inhibitory spinal cord neurotransmitter instead."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: All three catecholamines (dopamine, norepinephrine, epinephrine) share tyrosine as their biosynthetic precursor.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 10,
    "pdfQuote": "Neurotransmitters derived from the amino acid tyrosine"
  },
  {
    "id": 4,
    "category": "Catecholamine Synthesis",
    "questionText": "Epinephrine is synthesized and released into the bloodstream primarily from which of the following sites?",
    "options": [
      {
        "text": "Presynaptic adrenergic neurons",
        "explanation": "Incorrect. Presynaptic adrenergic neurons synthesize and release norepinephrine, not epinephrine. This would be the correct answer if the question asked about the source of the norepinephrine neurotransmitter instead."
      },
      {
        "text": "Enterochromaffin cells of the gut",
        "explanation": "Incorrect. Enterochromaffin cells of the gut are a principal source of serotonin. This would be the correct answer if the question asked about the main peripheral source of serotonin instead."
      },
      {
        "text": "Juxtaglomerular cells of the kidney",
        "explanation": "Incorrect. Juxtaglomerular cells secrete renin in response to decreased perfusion and beta-1 stimulation. This would be the correct answer if the question asked about the source of renin instead."
      },
      {
        "text": "Chromaffin cells of the adrenal medulla",
        "explanation": "Correct. Epinephrine is a hormone synthesized from norepinephrine in the chromaffin cells of the adrenal medulla by phenylethanolamine-N-methyltransferase (PNMT). When the sympathetic nervous system is activated, these cells release epinephrine into the bloodstream, where it travels to its sites of action. Typical adrenal medullary secretion is roughly 80 percent epinephrine and 20 percent norepinephrine."
      },
      {
        "text": "Zona glomerulosa of the adrenal cortex",
        "explanation": "Incorrect. The zona glomerulosa of the adrenal cortex produces aldosterone. This would be the correct answer if the question asked about the site of mineralocorticoid synthesis instead."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Epinephrine is produced by chromaffin cells of the adrenal medulla, where PNMT methylates norepinephrine to epinephrine.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 10,
    "pdfQuote": "EPI synthesized from NE in chromaffin cells"
  },
  {
    "id": 5,
    "category": "Catecholamine Metabolism",
    "questionText": "The effect of synaptically released norepinephrine is terminated primarily by which of the following mechanisms?",
    "options": [
      {
        "text": "Enzymatic hydrolysis by acetylcholinesterase",
        "explanation": "Incorrect. Acetylcholinesterase hydrolyzes acetylcholine, not norepinephrine. This would be the correct answer if the question asked about termination of parasympathetic signaling instead."
      },
      {
        "text": "Diffusion away from the synapse into the bloodstream",
        "explanation": "Incorrect. Simple diffusion is a minor contributor; a dedicated active transporter mediates most of the removal. This would be the correct answer if the question asked about a trivial contribution to synaptic clearance instead."
      },
      {
        "text": "Conjugation with glucuronide at the synapse",
        "explanation": "Incorrect. Glucuronidation is a hepatic Phase II metabolism pathway and does not terminate neurotransmitter action in the synapse. This would be the correct answer if the question asked about Phase II conjugation in the liver instead."
      },
      {
        "text": "Rapid breakdown by catechol-O-methyltransferase in the synapse",
        "explanation": "Incorrect. COMT contributes to catecholamine degradation (especially of circulating epinephrine in the liver) but is not the primary mechanism for terminating synaptic norepinephrine. This would be the correct answer if the question asked about the main pathway degrading circulating epinephrine instead."
      },
      {
        "text": "Reuptake into the presynaptic neuron by the norepinephrine transporter",
        "explanation": "Correct. Norepinephrine is taken back into the presynaptic neuron via the norepinephrine transporter (NET) and is then either re-stored in vesicles or degraded by monoamine oxidase (MAO). Circulating epinephrine, by contrast, is primarily degraded in the liver and other tissues by MAO and catechol-O-methyltransferase (COMT). Reuptake is the dominant mechanism for clearing synaptic norepinephrine."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Synaptic norepinephrine is cleared mainly by NET-mediated reuptake into the presynaptic neuron, then either re-stored or metabolized by MAO.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 10,
    "pdfQuote": "NE taken back up via NE transporters"
  },
  {
    "id": 6,
    "category": "Receptor Signaling: Alpha Receptors",
    "questionText": "Activation of a receptor that couples to Gq to increase IP3 and DAG, producing smooth muscle contraction in blood vessels, iris radial muscle, and the urinary tract, is characteristic of which adrenergic receptor?",
    "options": [
      {
        "text": "Alpha-2 adrenergic receptor",
        "explanation": "Incorrect. The alpha-2 receptor couples to Gi, inhibiting adenylyl cyclase and lowering cAMP. This would be the correct answer if the question asked about a receptor that reduces cAMP and acts as a presynaptic autoreceptor instead."
      },
      {
        "text": "Beta-1 adrenergic receptor",
        "explanation": "Incorrect. The beta-1 receptor couples to Gs and raises cAMP, chiefly in the heart. This would be the correct answer if the question asked about the receptor that increases heart rate and contractility instead."
      },
      {
        "text": "Alpha-1 adrenergic receptor",
        "explanation": "Correct. The alpha-1 adrenergic receptor is a Gq-coupled GPCR whose activation elevates IP3 and DAG, triggering smooth muscle contraction. These receptors are found on blood vessels, iris radial muscle, pilomotor muscles, the urinary tract, the prostate, and the pregnant uterus. Agonists at this receptor cause vasoconstriction, mydriasis, and internal urethral sphincter contraction."
      },
      {
        "text": "Beta-2 adrenergic receptor",
        "explanation": "Incorrect. The beta-2 receptor couples to Gs and raises cAMP, producing smooth muscle relaxation. This would be the correct answer if the question asked about a receptor that relaxes bronchial smooth muscle instead."
      },
      {
        "text": "Beta-3 adrenergic receptor",
        "explanation": "Incorrect. The beta-3 receptor is Gs-coupled and is expressed on adipocytes and the bladder detrusor muscle, which it relaxes. This would be the correct answer if the question asked about the receptor targeted by mirabegron instead."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Alpha-1 receptors signal through Gq and IP3/DAG to contract smooth muscle in blood vessels, iris radial muscle, urinary sphincter, and prostate.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 11,
    "pdfQuote": "alpha1AR GqPCRs: IP3 and DAG: Smooth muscle contraction"
  },
  {
    "id": 7,
    "category": "Receptor Signaling: Alpha Receptors",
    "questionText": "Which of the following best describes the signal transduction mechanism of the alpha-2 adrenergic receptor?",
    "options": [
      {
        "text": "Couples to Gi and inhibits adenylyl cyclase, lowering cAMP",
        "explanation": "Correct. The alpha-2 adrenergic receptor couples to Gi, inhibiting adenylyl cyclase and reducing intracellular cAMP, which produces inhibitory actions. These receptors are widely distributed as presynaptic auto- and heteroreceptors, as pre- and postsynaptic CNS neurons, and on vascular smooth muscle where they cause vasoconstriction. This Gi-linked signaling is the basis for the action of clonidine and other central alpha-2 agonists."
      },
      {
        "text": "Couples to Gq and activates phospholipase C to increase IP3 and DAG",
        "explanation": "Incorrect. Gq-coupled IP3/DAG signaling characterizes alpha-1 adrenergic receptors, not alpha-2. This would be the correct answer if the question asked about alpha-1 signal transduction instead."
      },
      {
        "text": "Couples to Gs and activates adenylyl cyclase to raise cAMP",
        "explanation": "Incorrect. Gs-coupled activation of adenylyl cyclase describes all three beta adrenergic receptors (beta-1, beta-2, beta-3). This would be the correct answer if the question asked about beta receptor signaling instead."
      },
      {
        "text": "Opens ligand-gated sodium channels for fast depolarization",
        "explanation": "Incorrect. Ligand-gated sodium channels mediate signaling at nicotinic acetylcholine receptors, which are not GPCRs. This would be the correct answer if the question asked about nicotinic receptor signaling instead."
      },
      {
        "text": "Acts as a tyrosine kinase to phosphorylate intracellular substrates",
        "explanation": "Incorrect. Intrinsic tyrosine kinase activity describes insulin and growth factor receptors, not adrenergic receptors. This would be the correct answer if the question asked about insulin receptor signaling instead."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Alpha-2 receptors are Gi-coupled, lowering cAMP; they serve as presynaptic autoreceptors and are the target of centrally acting alpha-2 agonists.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 11,
    "pdfQuote": "alpha2AR GiPCRs: Inhibit adenylyl cyclase and decrease cAMP"
  },
  {
    "id": 8,
    "category": "Receptor Signaling: Beta Receptors",
    "questionText": "An adrenergic receptor that predominates in the heart and whose activation increases heart rate, conduction velocity, and force of contraction is best classified as which of the following?",
    "options": [
      {
        "text": "Alpha-1 receptor",
        "explanation": "Incorrect. Alpha-1 receptors are Gq-coupled and mediate smooth muscle contraction, not the primary cardiac chronotropic and inotropic effects. This would be the correct answer if the question asked about peripheral vasoconstriction instead."
      },
      {
        "text": "Alpha-2 receptor",
        "explanation": "Incorrect. Alpha-2 receptors couple to Gi and primarily mediate inhibitory actions and presynaptic autoinhibition. This would be the correct answer if the question asked about the receptor that reduces sympathetic outflow instead."
      },
      {
        "text": "Beta-2 receptor",
        "explanation": "Incorrect. Beta-2 receptors mediate bronchodilation and vasodilation in skeletal muscle beds, not cardiac predominance. This would be the correct answer if the question asked about the main receptor that relaxes bronchial smooth muscle instead."
      },
      {
        "text": "Beta-1 receptor",
        "explanation": "Correct. Beta-1 adrenergic receptors are Gs-coupled, activating adenylyl cyclase and raising cAMP. They predominate in the heart, where their activation increases heart rate (positive chronotropy), conduction velocity (positive dromotropy), and force of contraction (positive inotropy). They also mediate renin release from juxtaglomerular cells of the kidney."
      },
      {
        "text": "Beta-3 receptor",
        "explanation": "Incorrect. Beta-3 receptors are expressed by adipocytes (thermogenesis) and bladder detrusor muscle (relaxation), with unclear function in cardiomyocytes. This would be the correct answer if the question asked about the receptor that relaxes the detrusor muscle instead."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Beta-1 receptors predominate in the heart; their Gs-cAMP signaling drives positive chronotropic, dromotropic, inotropic, and lusitropic effects.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 11,
    "pdfQuote": "heart - increase heart rate, conduction velocity"
  },
  {
    "id": 9,
    "category": "Receptor Signaling: Beta Receptors",
    "questionText": "Which adrenergic receptor is responsible for relaxation of bronchial smooth muscle (bronchodilation) through a Gs-cAMP mechanism?",
    "options": [
      {
        "text": "Alpha-1 receptor",
        "explanation": "Incorrect. Alpha-1 receptors on smooth muscle generally cause contraction via Gq-linked IP3/DAG signaling. This would be the correct answer if the question asked about the receptor that contracts vascular smooth muscle instead."
      },
      {
        "text": "Beta-2 receptor",
        "explanation": "Correct. Beta-2 adrenergic receptors are Gs-coupled; their activation raises cAMP and relaxes bronchial smooth muscle, producing bronchodilation. They are also widely distributed on vascular smooth muscle in skeletal muscle beds (where they cause vasodilation), the pancreas, platelets, and immune cells. Selective beta-2 agonists such as albuterol exploit this receptor for the acute treatment of bronchoconstriction."
      },
      {
        "text": "Alpha-2 receptor",
        "explanation": "Incorrect. Alpha-2 receptors are Gi-coupled and mediate presynaptic inhibition and some vasoconstriction. This would be the correct answer if the question asked about the receptor targeted by clonidine instead."
      },
      {
        "text": "Beta-1 receptor",
        "explanation": "Incorrect. Beta-1 receptors are also Gs-coupled but predominate in the heart; they do not mediate bronchial smooth muscle relaxation. This would be the correct answer if the question asked about the receptor that increases cardiac contractility instead."
      },
      {
        "text": "Beta-3 receptor",
        "explanation": "Incorrect. Beta-3 receptors are Gs-coupled but are localized to adipocytes and bladder detrusor muscle rather than bronchial smooth muscle. This would be the correct answer if the question asked about the receptor targeted by mirabegron instead."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Beta-2 receptors couple to Gs and relax bronchial smooth muscle, giving bronchodilation; they also vasodilate skeletal muscle beds.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 11,
    "pdfQuote": "bronchial smooth muscle (dilation)"
  },
  {
    "id": 10,
    "category": "Sympathetic Effector Responses",
    "questionText": "Pupillary dilation (mydriasis) in response to sympathetic stimulation is mediated by activation of which adrenergic receptor on the iris radial muscle?",
    "options": [
      {
        "text": "Beta-1 receptor",
        "explanation": "Incorrect. Beta-1 receptors predominate in cardiac tissue and are not responsible for iris radial muscle contraction. This would be the correct answer if the question asked about the receptor controlling heart rate instead."
      },
      {
        "text": "Beta-2 receptor",
        "explanation": "Incorrect. Beta-2 receptors mediate smooth muscle relaxation; they do not drive iris radial muscle contraction. This would be the correct answer if the question asked about the receptor relaxing bronchial smooth muscle instead."
      },
      {
        "text": "Beta-3 receptor",
        "explanation": "Incorrect. Beta-3 receptors are found on adipocytes and the bladder detrusor and do not control pupil size. This would be the correct answer if the question asked about the receptor relaxing the detrusor muscle instead."
      },
      {
        "text": "Alpha-2 receptor",
        "explanation": "Incorrect. Alpha-2 receptors are Gi-coupled inhibitory receptors, not the mediator of iris radial muscle contraction. This would be the correct answer if the question asked about a receptor that reduces sympathetic outflow instead."
      },
      {
        "text": "Alpha-1 receptor",
        "explanation": "Correct. Contraction of the iris radial (dilator pupillae) muscle to produce mydriasis is mediated by alpha-1 adrenergic receptors coupled to Gq. The alpha-1 agonist phenylephrine is used topically as a mydriatic for ophthalmic exams through this exact mechanism. Alpha-1 activation also maintains tonic contraction of the internal urethral sphincter and prostatic smooth muscle."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Alpha-1 activation of iris radial muscle produces mydriasis; this is the basis for phenylephrine's use as a topical mydriatic.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 12,
    "pdfQuote": "Pupils dilate - mydriasis; mediated by alpha1ARs"
  },
  {
    "id": 11,
    "category": "Sympathetic Effector Responses",
    "questionText": "Increased sympathetic tone induces renin release from the kidney through activation of which adrenergic receptor?",
    "options": [
      {
        "text": "Alpha-1 receptor",
        "explanation": "Incorrect. Alpha-1 activation in the renal vasculature actually decreases renin release and reduces renal blood flow. This would be the correct answer if the question asked about the receptor that opposes renin release instead."
      },
      {
        "text": "Alpha-2 receptor",
        "explanation": "Incorrect. Alpha-2 receptors act primarily as presynaptic inhibitory autoreceptors and are not the main driver of renin secretion. This would be the correct answer if the question asked about the presynaptic receptor regulating norepinephrine release instead."
      },
      {
        "text": "Beta-1 receptor",
        "explanation": "Correct. Increased sympathetic tone activates beta-1 receptors on juxtaglomerular cells in the kidney, which induces renin release and activates the renin-angiotensin-aldosterone system (RAAS). The resulting angiotensin II causes powerful vasoconstriction and stimulates aldosterone secretion, which promotes sodium and water retention. Beta-1 blockade is one way beta-blockers lower blood pressure in hypertension."
      },
      {
        "text": "Beta-2 receptor",
        "explanation": "Incorrect. Beta-2 receptors mediate bronchodilation and skeletal muscle vascular dilation and are not the primary mediator of renin release. This would be the correct answer if the question asked about the receptor relaxing bronchial smooth muscle instead."
      },
      {
        "text": "Beta-3 receptor",
        "explanation": "Incorrect. Beta-3 receptors are localized to adipocytes and bladder detrusor muscle and do not regulate renin release. This would be the correct answer if the question asked about the receptor targeted by mirabegron instead."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Beta-1 receptors on juxtaglomerular cells drive renin release and activate RAAS; blocking them lowers blood pressure in part by reducing angiotensin II.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 15,
    "pdfQuote": "activates beta1ARs in the kidneys, induces renin release"
  },
  {
    "id": 12,
    "category": "Structure-Activity Relationships",
    "questionText": "Loss of the C4 hydroxyl group on the benzene ring of a sympathomimetic structure produces which of the following structure-activity consequences?",
    "options": [
      {
        "text": "Low affinity for beta receptors and resistance to COMT metabolism",
        "explanation": "Correct. Phenylephrine lacks a hydroxyl at the C4 position of the benzene ring. This absence confers low affinity for beta adrenergic receptors and resistance to metabolism by catechol-O-methyltransferase (COMT), because COMT acts on catechol (3,4-dihydroxy) structures. The presence of the C3 hydroxyl gives phenylephrine its alpha-1 selectivity."
      },
      {
        "text": "Markedly enhanced affinity for beta-2 receptors",
        "explanation": "Incorrect. Enhanced beta-2 affinity in epinephrine comes from the methyl substitution on the amino group, not from losing a ring hydroxyl. This would be the correct answer if the question asked about the structural feature that boosts beta-2 activity instead."
      },
      {
        "text": "Loss of all alpha and beta receptor activity",
        "explanation": "Incorrect. Loss of C4-OH reduces beta affinity but preserves (and in phenylephrine selects for) alpha-1 activity. This would be the correct answer if the question asked about a change that abolishes all receptor binding instead."
      },
      {
        "text": "Enhanced oral bioavailability and CNS penetration",
        "explanation": "Incorrect. Enhanced oral bioavailability and CNS penetration are produced by alpha-carbon substitution, as in ephedrine and amphetamine, not by removing a ring hydroxyl. This would be the correct answer if the question asked about the structural change in ephedrine instead."
      },
      {
        "text": "Resistance to monoamine oxidase degradation",
        "explanation": "Incorrect. Resistance to MAO is produced by methyl substitution on the alpha carbon (as in ephedrine and amphetamine), not by altering a ring hydroxyl. This would be the correct answer if the question asked about why ephedrine has a longer duration of action instead."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Removing the ring C4-OH (as in phenylephrine) lowers beta affinity and blocks COMT metabolism; the retained C3-OH gives alpha-1 selectivity.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 23,
    "pdfQuote": "No C4 OH on benzene ring: betaARs low affinity"
  },
  {
    "id": 13,
    "category": "Structure-Activity Relationships",
    "questionText": "Which structural modification is responsible for isoproterenol's enhanced beta receptor activity and very weak alpha activity?",
    "options": [
      {
        "text": "Loss of the C4 hydroxyl on the benzene ring",
        "explanation": "Incorrect. Loss of C4-OH is the phenylephrine modification, which lowers beta affinity and gives alpha-1 selectivity. This would be the correct answer if the question asked about the structural basis of phenylephrine's selectivity instead."
      },
      {
        "text": "Methyl substitution on the alpha carbon",
        "explanation": "Incorrect. Alpha-carbon methyl substitution increases resistance to MAO and allows displacement of norepinephrine from storage sites, as seen in ephedrine and amphetamine. This would be the correct answer if the question asked about the structural change in ephedrine instead."
      },
      {
        "text": "Removal of both ring hydroxyl substitutions",
        "explanation": "Incorrect. Removing both ring hydroxyls would eliminate the catechol structure and change receptor interactions substantially; it is not the specific modification producing isoproterenol's profile. This would be the correct answer if the question asked about a non-catechol compound instead."
      },
      {
        "text": "A larger (isopropyl) substitution on the amino group",
        "explanation": "Correct. Isoproterenol has a larger substituent (isopropyl) on the amino nitrogen, which enhances beta adrenergic receptor activity and leaves only very weak activity at alpha receptors. In comparison, epinephrine has only a single methyl substitution on the amino group, which enhances beta-2 activity relative to norepinephrine without the dramatic alpha loss seen in isoproterenol."
      },
      {
        "text": "Addition of a methoxy group to the benzene ring",
        "explanation": "Incorrect. A benzene ring methoxy substitution is a feature of methoxamine and is not the change that gives isoproterenol its beta selectivity. This would be the correct answer if the question asked about the structure of methoxamine instead."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Larger amino-nitrogen substituents shift adrenergic activity toward beta receptors; isoproterenol's isopropyl group makes it a nonselective beta agonist with very weak alpha activity.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 23,
    "pdfQuote": "Isoproterenol has larger substitution on the amino group"
  },
  {
    "id": 14,
    "category": "Epinephrine: Receptor Affinity and Effects",
    "questionText": "Which of the following best describes epinephrine's relative affinities for the adrenergic receptors?",
    "options": [
      {
        "text": "Alpha-1 equals alpha-2, with much greater affinity than beta receptors",
        "explanation": "Incorrect. This describes a predominantly alpha-selective agent such as norepinephrine (alpha1 = alpha2 > beta1 >>> beta2), not epinephrine. This would be the correct answer if the question asked about norepinephrine's affinity profile instead."
      },
      {
        "text": "Beta-1 equals beta-2, with greater affinity than alpha-1 and alpha-2",
        "explanation": "Correct. Epinephrine is a potent stimulant at both alpha and beta adrenergic receptors, with relative affinities beta1 = beta2 > alpha1 = alpha2. Because of its strong beta-2 affinity, epinephrine can cause vasodilation in skeletal muscle beds at low doses. At higher doses, alpha-1 vasoconstrictive effects come to dominate and markedly raise mean arterial pressure."
      },
      {
        "text": "Pure beta-2 selectivity with no effect on other receptors",
        "explanation": "Incorrect. Pure beta-2 selectivity describes drugs such as albuterol and terbutaline, not epinephrine. This would be the correct answer if the question asked about a selective bronchodilator instead."
      },
      {
        "text": "Selective D1 agonism greater than beta-1 greater than alpha-1",
        "explanation": "Incorrect. The pattern D1 > beta-1 > alpha-1 describes dopamine. This would be the correct answer if the question asked about dopamine's affinity profile instead."
      },
      {
        "text": "Potent nonselective beta agonism with no alpha affinity",
        "explanation": "Incorrect. A pure nonselective beta agonist with no alpha affinity describes isoproterenol. This would be the correct answer if the question asked about isoproterenol's receptor profile instead."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Epinephrine stimulates all adrenergic receptors (beta1 = beta2 > alpha1 = alpha2), which explains its mixed cardiac, bronchial, and vascular effects.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 26,
    "pdfQuote": "Relative affinities beta1 = beta2 > alpha1 = alpha2"
  },
  {
    "id": 15,
    "category": "Epinephrine: Dose-Dependent Effects",
    "questionText": "At low doses, epinephrine preferentially activates which adrenergic receptor to produce vasodilation of skeletal muscle vascular beds and a decrease in diastolic blood pressure?",
    "options": [
      {
        "text": "Alpha-1 receptors on vascular smooth muscle",
        "explanation": "Incorrect. Alpha-1 activation causes vasoconstriction and increases diastolic pressure; it dominates at high doses, not low doses. This would be the correct answer if the question asked about the receptor driving a rapid high-dose epinephrine pressor response instead."
      },
      {
        "text": "Alpha-2 receptors on presynaptic neurons",
        "explanation": "Incorrect. Presynaptic alpha-2 activation would reduce norepinephrine release but is not the receptor responsible for low-dose epinephrine's skeletal muscle vasodilation. This would be the correct answer if the question asked about autoreceptor-mediated feedback inhibition instead."
      },
      {
        "text": "Beta-1 receptors on cardiomyocytes",
        "explanation": "Incorrect. Beta-1 activation drives the increase in heart rate, stroke volume, and cardiac output at low-dose epinephrine, but does not cause skeletal muscle vasodilation. This would be the correct answer if the question asked about low-dose epinephrine's cardiac effects instead."
      },
      {
        "text": "Beta-3 receptors on adipocytes",
        "explanation": "Incorrect. Beta-3 activation drives thermogenesis in adipocytes and relaxation of the bladder detrusor, not skeletal muscle vascular effects. This would be the correct answer if the question asked about the receptor targeted by mirabegron instead."
      },
      {
        "text": "Beta-2 receptors on skeletal muscle vascular smooth muscle",
        "explanation": "Correct. At low doses, epinephrine acts preferentially on beta-2 receptors located in the skeletal muscle vascular beds, producing vasodilation that lowers total peripheral resistance and diastolic blood pressure. Alpha-mediated vasoconstriction in the splanchnic, renal, and cutaneous beds helps shunt blood to the dilated skeletal muscle vasculature. Mean arterial pressure usually changes only slightly, so compensatory baroreceptor reflexes do not greatly oppose the direct cardiac actions."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Low-dose epinephrine preferentially engages beta-2 receptors on skeletal muscle vascular smooth muscle, lowering peripheral resistance and diastolic pressure.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 28,
    "pdfQuote": "Epinephrine in low doses acts preferentially on beta2 receptors"
  },
  {
    "id": 16,
    "category": "Epinephrine: Clinical Use",
    "questionText": "Epinephrine is the drug of choice for which of the following emergencies?",
    "options": [
      {
        "text": "Acute decompensated heart failure for short-term inotropic support",
        "explanation": "Incorrect. Short-term inotropic support in decompensated heart failure is a classic use of dobutamine. This would be the correct answer if the question asked about a beta-1 selective inotrope for heart failure instead."
      },
      {
        "text": "Initial management of septic shock",
        "explanation": "Incorrect. Norepinephrine is the first-line agent for the initial management of septic shock. This would be the correct answer if the question asked about the first-line vasopressor for septic shock instead."
      },
      {
        "text": "Reversal of acute anaphylaxis / anaphylactic shock",
        "explanation": "Correct. Epinephrine is the drug of choice for acute anaphylaxis and is never contraindicated for its treatment. It causes beta-2 bronchodilation that opens the airways, alpha-mediated vasoconstriction and beta-1-mediated increased cardiac contractility that raise blood pressure, reduction of allergic angioedema and hives, and suppression of mediator release from mast cells. The intramuscular or intranasal route is preferred for anaphylaxis without delay."
      },
      {
        "text": "Treatment of hypotension due to bradycardia alone",
        "explanation": "Incorrect. Hypotension resulting from bradycardia is a limited indication for isoproterenol. This would be the correct answer if the question asked about a nonselective beta agonist for bradycardia-related hypotension instead."
      },
      {
        "text": "Topical nasal decongestion in a chronic allergic rhinitis patient",
        "explanation": "Incorrect. Topical nasal decongestion is a use for phenylephrine, not systemic epinephrine. This would be the correct answer if the question asked about the alpha-1 selective agent used topically as a nasal decongestant instead."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Epinephrine is the drug of choice for anaphylaxis; it is never contraindicated because its combined alpha, beta-1, and beta-2 effects reverse the airway, cardiovascular, and mediator-release components simultaneously.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 32,
    "pdfQuote": "Anaphylactic shock reversal Drug of Choice never contraindicated"
  },
  {
    "id": 17,
    "category": "Epinephrine: Adverse Effects",
    "questionText": "Which of the following is a predictable adverse effect of epinephrine administration?",
    "options": [
      {
        "text": "Ventricular arrhythmias due to excessive cardiac stimulation",
        "explanation": "Correct. Epinephrine is proarrhythmic and can cause premature ventricular contractions and ventricular arrhythmias due to excessive beta-1 cardiac stimulation. Other predictable adverse effects include restlessness, apprehension, throbbing headache, tremor, palpitations, angina from increased myocardial oxygen demand, and cerebral hemorrhage from a sharp rise in blood pressure at large doses. Extravasation at the infusion site can cause tissue necrosis from local vasoconstriction."
      },
      {
        "text": "Rebound nasal congestion after chronic use",
        "explanation": "Incorrect. Rebound nasal congestion is a classic adverse effect of intranasal phenylephrine, not systemic epinephrine. This would be the correct answer if the question asked about the risk of prolonged intranasal alpha-1 agonist use instead."
      },
      {
        "text": "Tachyphylaxis from receptor desensitization within 24 to 72 hours",
        "explanation": "Incorrect. Tachyphylaxis from beta-receptor desensitization and downregulation after 24 to 72 hours of continuous use is a hallmark of dobutamine. This would be the correct answer if the question asked about the limitation of prolonged dobutamine infusion instead."
      },
      {
        "text": "Reduced heart rate from direct bradycardic action",
        "explanation": "Incorrect. Epinephrine's direct cardiac action is to increase, not decrease, heart rate; any slowing seen at high doses is a reflex response to a sharp rise in blood pressure. This would be the correct answer if the question asked about reflex bradycardia at high-dose epinephrine infusion instead."
      },
      {
        "text": "Hypoglycemia from inhibition of hepatic glycogenolysis",
        "explanation": "Incorrect. Epinephrine actually raises blood glucose through beta-2-mediated increases in hepatic glycogenolysis and gluconeogenesis. This would be the correct answer if the question asked about epinephrine's effect on blood glucose instead."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Epinephrine is proarrhythmic; its adverse effects (arrhythmias, tremor, headache, angina, cerebral hemorrhage) all follow directly from exaggerated adrenergic stimulation.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 32,
    "pdfQuote": "Ventricular arrhythmias due to excessive stimulation"
  },
  {
    "id": 18,
    "category": "Norepinephrine: Clinical Use",
    "questionText": "Norepinephrine is the first-line agent for the initial treatment of which of the following conditions?",
    "options": [
      {
        "text": "Acute anaphylaxis with bronchospasm",
        "explanation": "Incorrect. Acute anaphylaxis is treated first with epinephrine, not norepinephrine; norepinephrine has very weak beta-2 activity and would not reverse the bronchospasm. This would be the correct answer if the question asked about the drug of choice for anaphylaxis instead."
      },
      {
        "text": "Acute asthma exacerbation",
        "explanation": "Incorrect. Acute asthma is treated with inhaled beta-2 selective agonists such as albuterol, not norepinephrine. This would be the correct answer if the question asked about an acute bronchodilator instead."
      },
      {
        "text": "Nasal decongestion in acute rhinitis",
        "explanation": "Incorrect. Topical nasal decongestion is produced by intranasal alpha-1 agonists such as phenylephrine. This would be the correct answer if the question asked about a topical alpha-1 agent for nasal congestion instead."
      },
      {
        "text": "Circulatory shock with profound hypotension",
        "explanation": "Correct. Norepinephrine is the first-line agent for the initial treatment of circulatory shock, including septic, cardiogenic, and neurogenic shock, where there is profound hypotension with low peripheral resistance. Its potent alpha-mediated vasoconstriction raises systemic vascular resistance and blood pressure, while modest beta-1 effects maintain cardiac contractility. Compared with dopamine or dobutamine, norepinephrine carries a lower risk of arrhythmias."
      },
      {
        "text": "Short-term inotropic support in decompensated heart failure",
        "explanation": "Incorrect. Short-term inotropic support in decompensated heart failure is the classic indication for dobutamine. This would be the correct answer if the question asked about a beta-1 selective agent for heart failure instead."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Norepinephrine is the first-line vasopressor for septic, cardiogenic, and neurogenic shock, raising peripheral resistance with modest inotropy and low arrhythmia risk.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 36,
    "pdfQuote": "Circulatory shock - drug of choice for initial therapy"
  },
  {
    "id": 19,
    "category": "Dopamine: Dose-Dependent Effects",
    "questionText": "At low infusion doses (approximately 1 to 5 mcg per kg per minute), dopamine's hemodynamic effects are produced primarily by activation of which receptor?",
    "options": [
      {
        "text": "Alpha-1 receptors on peripheral vascular smooth muscle",
        "explanation": "Incorrect. General alpha-1 vasoconstriction dominates at high dopamine doses greater than 10 mcg per kg per minute, not at low doses. This would be the correct answer if the question asked about dopamine's effect at a high infusion rate instead."
      },
      {
        "text": "D1 receptors on renal and mesenteric vascular smooth muscle",
        "explanation": "Correct. At low doses (1 to 5 mcg per kg per minute), dopamine activates D1 receptors in renal and mesenteric vessels, producing vasodilation. The result is increased renal blood flow, increased glomerular filtration rate, increased sodium excretion, and decreased peripheral vascular resistance. At intermediate doses, beta-1 activation adds positive inotropy, and at high doses, alpha-1 vasoconstriction takes over."
      },
      {
        "text": "Beta-1 receptors on the sinoatrial node",
        "explanation": "Incorrect. Beta-1 activation and positive inotropy dominate at intermediate dopamine doses (approximately 5 to 10 mcg per kg per minute), not low doses. This would be the correct answer if the question asked about dopamine's effect at an intermediate infusion rate instead."
      },
      {
        "text": "Beta-2 receptors on bronchial smooth muscle",
        "explanation": "Incorrect. Dopamine has only very weak activity at beta-2 receptors and is not used for bronchodilation. This would be the correct answer if the question asked about the mechanism of a beta-2 selective bronchodilator instead."
      },
      {
        "text": "Alpha-2 receptors on presynaptic adrenergic neurons",
        "explanation": "Incorrect. Dopamine does not act meaningfully through presynaptic alpha-2 autoreceptors to produce its low-dose renal effects. This would be the correct answer if the question asked about the mechanism of a central alpha-2 agonist such as clonidine instead."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Low-dose dopamine selectively stimulates D1 receptors in renal and mesenteric beds, increasing renal blood flow and GFR; beta-1 effects appear at intermediate doses and alpha-1 at high doses.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 40,
    "pdfQuote": "D1 activation in renal and mesenteric vessels"
  },
  {
    "id": 20,
    "category": "Dobutamine: Clinical Use",
    "questionText": "Dobutamine, a selective beta-1 agonist, is most commonly administered for which of the following clinical purposes?",
    "options": [
      {
        "text": "Topical mydriasis for an ophthalmic exam",
        "explanation": "Incorrect. Topical mydriasis is produced by alpha-1 agonists such as phenylephrine, not by beta-1 agonists. This would be the correct answer if the question asked about an alpha-1 selective topical mydriatic instead."
      },
      {
        "text": "Reversal of acute anaphylactic shock",
        "explanation": "Incorrect. Acute anaphylaxis is treated with epinephrine, whose combined alpha, beta-1, and beta-2 activity simultaneously addresses airway, vascular, and mast cell components. This would be the correct answer if the question asked about the drug of choice for anaphylaxis instead."
      },
      {
        "text": "First-line vasopressor therapy in septic shock",
        "explanation": "Incorrect. First-line vasopressor therapy in septic shock is norepinephrine, not dobutamine; dobutamine lacks substantial alpha-mediated vasoconstriction. This would be the correct answer if the question asked about the first-line vasopressor in septic shock instead."
      },
      {
        "text": "Chronic management of allergic rhinitis",
        "explanation": "Incorrect. Chronic allergic rhinitis is treated with antihistamines, intranasal corticosteroids, or topical decongestants, not with a parenteral inotrope. This would be the correct answer if the question asked about chronic allergic rhinitis therapy instead."
      },
      {
        "text": "Short-term inotropic support in decompensated heart failure",
        "explanation": "Correct. Dobutamine is administered for short-term treatment of cardiac decompensation, such as that following cardiac surgery, acute decompensated congestive heart failure, or acute myocardial infarction. Its beta-1-mediated increase in cardiac contractility raises cardiac output, lowers central venous and pulmonary wedge pressures, and improves renal perfusion. It is also used in dobutamine stress testing. Long-term use is associated with decreased survival, and tachyphylaxis can develop from beta-receptor desensitization within 24 to 72 hours."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Dobutamine is a beta-1 selective inotrope used short-term in decompensated heart failure; tachyphylaxis develops after 24 to 72 hours and long-term use shortens survival.",
    "lectureSource": "PPOM33: Sympathomimetics Part 1",
    "pdfLecture": "PPOM33",
    "pdfPage": 48,
    "pdfQuote": "Cardiac decompensation - short-term treatment"
  }
];

window.Test_Review_PPOM33 = Test_Review_PPOM33;
