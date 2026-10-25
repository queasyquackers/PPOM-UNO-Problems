// CPR Block 2 - Review Lecture: Signal Transduction II (FOM78)
// Faculty: Liang
// 20 first-order recall questions. Slide links resolve through PDF_MAPPING["FOM78"].
const Test_Review_FOM78 = [
  {
    "id": 1,
    "category": "Enzyme-linked Receptors: Definition",
    "questionText": "Which of the following best describes an enzyme-linked receptor?",
    "options": [
      {
        "text": "A receptor that opens an ion channel on binding ligand",
        "explanation": "Incorrect. A receptor that opens an ion channel on binding ligand is an ion channel-linked (ionotropic) receptor rather than an enzyme-linked one. This would be the correct answer if the question asked about the nicotinic acetylcholine receptor instead."
      },
      {
        "text": "A seven-pass receptor coupled to a heterotrimeric G protein",
        "explanation": "Incorrect. A seven-transmembrane receptor coupled to a heterotrimeric G protein is a G-protein-coupled receptor, which the lecture explicitly contrasts with enzyme-linked receptors. This would be the correct answer if the question asked about the beta adrenergic receptor instead."
      },
      {
        "text": "A receptor with latent enzyme activity activated by its agonist",
        "explanation": "Correct. The lecture defines an enzyme-linked receptor as one that is not associated with a G protein but instead has a latent enzyme activity that is activated when the receptor's specific agonist binds. These receptors respond to many extracellular signals including various growth factors. Their responses are usually slow because many intracellular steps lead to changes in gene expression."
      },
      {
        "text": "An intracellular receptor that binds DNA to regulate transcription",
        "explanation": "Incorrect. An intracellular receptor that binds DNA to regulate transcription is a nuclear receptor, which is covered separately in this lecture. This would be the correct answer if the question asked about the mechanism of a steroid receptor instead."
      },
      {
        "text": "A receptor that produces cAMP through adenylyl cyclase",
        "explanation": "Incorrect. A receptor that elevates cAMP through adenylyl cyclase works through a heterotrimeric G protein, not through intrinsic enzyme activity. This would be the correct answer if the question asked about a Gs-coupled receptor instead."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Enzyme-linked receptors are not G-protein coupled; they carry a latent intrinsic enzyme activity that is switched on by ligand binding.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 4,
    "pdfQuote": "latent enzyme activity that is activated"
  },
  {
    "id": 2,
    "category": "Enzyme-linked Receptors: TGF-beta Family",
    "questionText": "The transforming growth factor beta (TGF-beta) superfamily signals through which class of enzyme-linked receptor?",
    "options": [
      {
        "text": "Receptor guanylyl cyclases",
        "explanation": "Incorrect. Receptor guanylyl cyclases are the enzyme-linked class that produces cGMP in response to natriuretic peptides, not TGF-beta. This would be the correct answer if the question asked about the ANP receptor instead."
      },
      {
        "text": "Receptor serine/threonine kinases",
        "explanation": "Correct. The lecture places the TGF-beta superfamily in the receptor serine/threonine kinase class and highlights its role in development. These receptors have two subunits, called type I and type II, and the ligand binds only to the type II subunit. The type I subunit is the kinase that phosphorylates downstream effectors."
      },
      {
        "text": "Receptor tyrosine kinases",
        "explanation": "Incorrect. Receptor tyrosine kinases are the enzyme-linked class used by growth factors such as EGF, PDGF and insulin. This would be the correct answer if the question asked about the receptor for epidermal growth factor instead."
      },
      {
        "text": "Tyrosine-kinase-associated receptors",
        "explanation": "Incorrect. Tyrosine-kinase-associated receptors have no intrinsic enzyme activity and associate with soluble tyrosine kinases such as JAK. This would be the correct answer if the question asked about the growth hormone receptor instead."
      },
      {
        "text": "Receptor tyrosine phosphatases",
        "explanation": "Incorrect. Receptor tyrosine phosphatases carry intrinsic phosphatase activity and oppose RTK signaling, as illustrated by CD45. This would be the correct answer if the question asked about the leukocyte phosphatase CD45 instead."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: The TGF-beta superfamily uses receptor serine/threonine kinases in which the ligand binds the type II subunit and the type I subunit phosphorylates downstream effectors.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 5,
    "pdfQuote": "Receptor serine/threonine kinases"
  },
  {
    "id": 3,
    "category": "Enzyme-linked Receptors: JAK",
    "questionText": "In the context of enzyme-linked signaling, the abbreviation JAK stands for which of the following?",
    "options": [
      {
        "text": "Juxtamembrane adaptor kinase",
        "explanation": "Incorrect. The lecture does not define JAK as juxtamembrane adaptor kinase. This would be the correct answer if the question asked about a hypothetical adaptor near the membrane instead."
      },
      {
        "text": "JNK-activated kinase",
        "explanation": "Incorrect. JNK stands for c-Jun N-terminal kinase, a different MAP kinase family member, and is not what the J in JAK refers to. This would be the correct answer if the question asked about a stress-activated MAP kinase instead."
      },
      {
        "text": "Juxtacrine autophosphorylating kinase",
        "explanation": "Incorrect. Juxtacrine autophosphorylating kinase is not the meaning of JAK given in this lecture. This would be the correct answer if the question asked about a made-up receptor kinase name instead."
      },
      {
        "text": "Janus kinase",
        "explanation": "Correct. The lecture states that JAK stands for Janus kinase, originally called just another kinase. JAKs are soluble, nonreceptor tyrosine kinases that associate noncovalently with tyrosine kinase-associated receptors. These receptors have no intrinsic enzyme activity of their own, but JAK provides the tyrosine kinase function."
      },
      {
        "text": "Jun activating kinase",
        "explanation": "Incorrect. There is no Jun activating kinase in this lecture, and this is not the meaning of the acronym. This would be the correct answer if the question asked about a transcription factor coactivator instead."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: JAK is Janus kinase, the soluble tyrosine kinase that associates with cytokine and growth hormone receptors that lack intrinsic kinase activity.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 6,
    "pdfQuote": "JAK, Janus kinase"
  },
  {
    "id": 4,
    "category": "Receptor Guanylyl Cyclases: GC-A",
    "questionText": "The receptor for atrial natriuretic peptide (ANP) and B-type natriuretic peptide (BNP) is which of the following?",
    "options": [
      {
        "text": "A membrane-bound guanylyl cyclase A (GC-A)",
        "explanation": "Correct. The lecture states that the receptor for ANP and BNP is a membrane-bound guanylyl cyclase A, also known as natriuretic peptide receptor 1. Ligand binding induces receptor dimerization and activation, producing cGMP from GTP. The downstream effects include vasodilation, natriuresis, diuresis and lower blood pressure."
      },
      {
        "text": "A cytoplasmic soluble guanylyl cyclase (sGC)",
        "explanation": "Incorrect. The cytoplasmic soluble guanylyl cyclase is activated by nitric oxide rather than natriuretic peptides. This would be the correct answer if the question asked about the receptor for nitric oxide instead."
      },
      {
        "text": "A G-protein-coupled receptor on vascular smooth muscle",
        "explanation": "Incorrect. The ANP and BNP receptor is not a G-protein-coupled receptor; it is a membrane enzyme-linked receptor with intrinsic cyclase activity. This would be the correct answer if the question asked about a vasoactive hormone receptor coupled to Gq instead."
      },
      {
        "text": "A nuclear receptor that regulates gene transcription",
        "explanation": "Incorrect. A nuclear receptor would be used by lipid-soluble hormones such as steroids, thyroid hormone or vitamin D rather than by peptide hormones like ANP. This would be the correct answer if the question asked about the receptor for aldosterone instead."
      },
      {
        "text": "A tyrosine-kinase-associated receptor with JAK2",
        "explanation": "Incorrect. A JAK2-associated receptor is used by growth hormone, cytokines and erythropoietin, not by the natriuretic peptides. This would be the correct answer if the question asked about the growth hormone receptor instead."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: ANP and BNP act through guanylyl cyclase A (GC-A), a membrane-bound enzyme-linked receptor that produces cGMP to lower blood pressure.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 7,
    "pdfQuote": "membrane-bound guanylyl cyclase A (GC-A)"
  },
  {
    "id": 5,
    "category": "Receptor Guanylyl Cyclases: Peptide Degradation",
    "questionText": "ANP and BNP are degraded by which of the following enzymes?",
    "options": [
      {
        "text": "Phosphodiesterase type 5 (PDE5)",
        "explanation": "Incorrect. PDE5 degrades cGMP, not ANP or BNP, and is the target of sildenafil. This would be the correct answer if the question asked which enzyme sildenafil inhibits instead."
      },
      {
        "text": "Angiotensin-converting enzyme (ACE)",
        "explanation": "Incorrect. ACE converts angiotensin I to angiotensin II and degrades bradykinin, but it is not identified in this lecture as the enzyme that degrades the natriuretic peptides. This would be the correct answer if the question asked about angiotensin II generation instead."
      },
      {
        "text": "Nitric oxide synthase (NOS)",
        "explanation": "Incorrect. Nitric oxide synthase produces nitric oxide from arginine in endothelial cells; it is not a protease. This would be the correct answer if the question asked which enzyme generates NO instead."
      },
      {
        "text": "Adenylyl cyclase in cardiac myocytes",
        "explanation": "Incorrect. Adenylyl cyclase produces cAMP from ATP and does not degrade peptides. This would be the correct answer if the question asked about the enzyme that generates cAMP instead."
      },
      {
        "text": "Neprilysin, a neutral endopeptidase",
        "explanation": "Correct. The lecture states that ANP and BNP are degraded by neprilysin, a neutral endopeptidase. Blocking this enzyme prolongs the half-life of natriuretic peptides and is the basis for angiotensin receptor-neprilysin inhibitor therapy in heart failure. Clearance can also occur through NPR-C."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Neprilysin is the neutral endopeptidase that degrades ANP and BNP; inhibiting it raises natriuretic peptide activity.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 7,
    "pdfQuote": "ANP and BNP are degraded by Neprilysin"
  },
  {
    "id": 6,
    "category": "Receptor Guanylyl Cyclases: Soluble GC",
    "questionText": "Nitric oxide (NO) exerts its intracellular effects by activating which of the following?",
    "options": [
      {
        "text": "Membrane-bound guanylyl cyclase A (GC-A)",
        "explanation": "Incorrect. GC-A is the membrane receptor activated by natriuretic peptides, not by nitric oxide. This would be the correct answer if the question asked about the ANP receptor instead."
      },
      {
        "text": "Adenylyl cyclase to make cAMP",
        "explanation": "Incorrect. Adenylyl cyclase makes cAMP and is activated by Gs-coupled receptors, not by nitric oxide. This would be the correct answer if the question asked how beta adrenergic signaling raises cAMP instead."
      },
      {
        "text": "Cytoplasmic soluble guanylyl cyclase (sGC)",
        "explanation": "Correct. The lecture states that nitric oxide, a membrane-soluble gas, diffuses into target cells and activates cytoplasmic soluble guanylyl cyclase. sGC then produces cGMP from GTP, which triggers smooth muscle relaxation and vasodilation. NO is itself generated in vascular endothelial cells by nitric oxide synthase."
      },
      {
        "text": "Phospholipase C to generate IP3",
        "explanation": "Incorrect. Phospholipase C generates IP3 and diacylglycerol from PIP2 and is activated by Gq-coupled receptors, not by nitric oxide. This would be the correct answer if the question asked how an alpha-1 adrenergic receptor raises intracellular calcium instead."
      },
      {
        "text": "A nuclear hormone receptor in the cytoplasm",
        "explanation": "Incorrect. A nuclear hormone receptor is used by lipid-soluble hormones such as steroids and thyroid hormone, not by nitric oxide. This would be the correct answer if the question asked about the mechanism of cortisol signaling instead."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Nitric oxide activates soluble guanylyl cyclase (sGC), producing cGMP that relaxes vascular smooth muscle.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 7,
    "pdfQuote": "cytoplasmic soluble GC (sGC)"
  },
  {
    "id": 7,
    "category": "Receptor Guanylyl Cyclases: Second Messenger",
    "questionText": "GC-A and sGC generate which of the following second messengers, and from which substrate?",
    "options": [
      {
        "text": "cAMP from ATP",
        "explanation": "Incorrect. cAMP from ATP is produced by adenylyl cyclase downstream of G-protein-coupled receptors, not by guanylyl cyclases. This would be the correct answer if the question asked about Gs signaling instead."
      },
      {
        "text": "cGMP from GTP",
        "explanation": "Correct. Both the membrane-bound GC-A and the cytoplasmic soluble sGC produce cGMP from GTP. cGMP then activates downstream effectors such as protein kinase G and gated ion channels to carry out vasodilation and other responses. This shared second messenger is why natriuretic peptide and nitric oxide pathways converge on similar vascular effects."
      },
      {
        "text": "IP3 from PIP2",
        "explanation": "Incorrect. IP3 from PIP2 is produced by phospholipase C in Gq-coupled signaling. This would be the correct answer if the question asked how an alpha-1 adrenergic receptor raises calcium instead."
      },
      {
        "text": "Diacylglycerol from PIP2",
        "explanation": "Incorrect. Diacylglycerol from PIP2 is also a product of phospholipase C and activates protein kinase C. This would be the correct answer if the question asked which lipid second messenger activates PKC instead."
      },
      {
        "text": "PIP3 from PIP2",
        "explanation": "Incorrect. PIP3 from PIP2 is produced by phosphatidylinositide 3-kinase downstream of RTKs. This would be the correct answer if the question asked how Akt is recruited to the membrane instead."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Both membrane-bound GC-A and soluble sGC convert GTP to cGMP, the shared second messenger behind ANP, BNP and NO signaling.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 8,
    "pdfQuote": "Both GC-A and sGC produce cGMP from GTP"
  },
  {
    "id": 8,
    "category": "Nitric Oxide: Biosynthesis",
    "questionText": "In vascular endothelial cells, nitric oxide is generated by which of the following enzymes?",
    "options": [
      {
        "text": "Neprilysin, a neutral endopeptidase",
        "explanation": "Incorrect. Neprilysin degrades the natriuretic peptides ANP and BNP and does not make nitric oxide. This would be the correct answer if the question asked which enzyme breaks down ANP instead."
      },
      {
        "text": "Guanylyl cyclase A on the endothelial membrane",
        "explanation": "Incorrect. GC-A on the endothelial membrane is the receptor for natriuretic peptides and makes cGMP, not nitric oxide. This would be the correct answer if the question asked how ANP produces its second messenger instead."
      },
      {
        "text": "Phosphodiesterase type 5 in smooth muscle",
        "explanation": "Incorrect. PDE5 in smooth muscle degrades cGMP and does not synthesize NO. This would be the correct answer if the question asked which enzyme sildenafil blocks instead."
      },
      {
        "text": "Nitric oxide synthase",
        "explanation": "Correct. The lecture states that NO is produced in vascular endothelial cells by the enzyme nitric oxide synthase, which converts arginine to citrulline and releases NO. The gas then diffuses to nearby smooth muscle cells and activates soluble guanylyl cyclase to raise cGMP. This underlies endothelium-dependent vasodilation."
      },
      {
        "text": "Adenylyl cyclase coupled to a beta receptor",
        "explanation": "Incorrect. Adenylyl cyclase produces cAMP and has no role in generating NO. This would be the correct answer if the question asked how a beta adrenergic receptor raises cAMP instead."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Endothelial nitric oxide synthase (NOS) makes NO from arginine, and NO then diffuses to smooth muscle to activate sGC and cause vasodilation.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 10,
    "pdfQuote": "endothelial cells by the enzyme nitric oxide synthase"
  },
  {
    "id": 9,
    "category": "Drugs Targeting NO-cGMP: Nitroglycerin",
    "questionText": "Which of the following best describes how nitroglycerin relieves angina pectoris?",
    "options": [
      {
        "text": "It breaks down spontaneously to release nitric oxide",
        "explanation": "Correct. The lecture states that nitroglycerin breaks down spontaneously to release nitric oxide. The released NO relaxes cardiac arterioles to improve cardiac perfusion and relaxes peripheral arterioles to reduce the work of the heart. Both of these effects help relieve the pain of angina pectoris."
      },
      {
        "text": "It inhibits phosphodiesterase type 5 to raise cGMP",
        "explanation": "Incorrect. PDE5 inhibition is the mechanism of sildenafil rather than nitroglycerin. This would be the correct answer if the question asked how sildenafil raises cGMP instead."
      },
      {
        "text": "It directly activates adenylyl cyclase to raise cAMP",
        "explanation": "Incorrect. Direct activation of adenylyl cyclase to raise cAMP is not the mechanism of nitroglycerin and is not covered as such in this lecture. This would be the correct answer if the question asked about the effect of forskolin instead."
      },
      {
        "text": "It blocks neprilysin to prolong natriuretic peptide activity",
        "explanation": "Incorrect. Blocking neprilysin to prolong natriuretic peptide signaling is the GC-A pathway strategy, not the mechanism of nitroglycerin. This would be the correct answer if the question asked how a neprilysin inhibitor works instead."
      },
      {
        "text": "It activates membrane-bound guanylyl cyclase A directly",
        "explanation": "Incorrect. Direct activation of GC-A would correspond to a natriuretic peptide ligand rather than nitroglycerin, which acts through NO on the soluble cyclase. This would be the correct answer if the question asked about the mechanism of ANP instead."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Nitroglycerin releases nitric oxide, which relaxes cardiac and peripheral arterioles to relieve angina pectoris.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 12,
    "pdfQuote": "Breaks down spontaneously to release NO"
  },
  {
    "id": 10,
    "category": "Drugs Targeting NO-cGMP: Sildenafil",
    "questionText": "Sildenafil (Viagra) elevates cGMP by inhibiting which of the following enzymes?",
    "options": [
      {
        "text": "Nitric oxide synthase",
        "explanation": "Incorrect. Nitric oxide synthase makes NO and is not inhibited by sildenafil. This would be the correct answer if the question asked which enzyme generates NO instead."
      },
      {
        "text": "Soluble guanylyl cyclase",
        "explanation": "Incorrect. Soluble guanylyl cyclase is the enzyme that makes cGMP; sildenafil raises cGMP by blocking its breakdown, not by changing its synthesis. This would be the correct answer if the question asked which enzyme NO activates instead."
      },
      {
        "text": "Phosphodiesterase type 3",
        "explanation": "Incorrect. PDE3 is a cAMP-preferring phosphodiesterase and is not the target of sildenafil. This would be the correct answer if the question asked about an inotropic phosphodiesterase inhibitor instead."
      },
      {
        "text": "Neprilysin",
        "explanation": "Incorrect. Neprilysin degrades ANP and BNP and is unrelated to sildenafil's mechanism. This would be the correct answer if the question asked which enzyme breaks down natriuretic peptides instead."
      },
      {
        "text": "Phosphodiesterase type 5",
        "explanation": "Correct. The lecture states that sildenafil elevates cGMP by inhibiting phosphodiesterase type 5, the enzyme that degrades cGMP. The resulting rise in cGMP in penile vascular tissue increases blood flow to the penis. Sildenafil is also used to treat pulmonary arterial hypertension."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Sildenafil blocks phosphodiesterase type 5, preventing cGMP breakdown and so sustaining NO-induced vasodilation.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 12,
    "pdfQuote": "inhibiting phosphodiesterase type 5 (PDE5)"
  },
  {
    "id": 11,
    "category": "Receptor Tyrosine Kinases: Insulin",
    "questionText": "Insulin exerts its cellular effects through which of the following receptor types?",
    "options": [
      {
        "text": "A G-protein-coupled receptor",
        "explanation": "Incorrect. A G-protein-coupled receptor is not the insulin receptor; the lecture explicitly contrasts enzyme-linked receptors with GPCRs. This would be the correct answer if the question asked about an adrenergic receptor instead."
      },
      {
        "text": "An intracellular (nuclear) receptor",
        "explanation": "Incorrect. Intracellular nuclear receptors are used by lipid-soluble hormones such as steroids, thyroid hormone and vitamin D. This would be the correct answer if the question asked about the receptor for cortisol instead."
      },
      {
        "text": "A receptor tyrosine kinase",
        "explanation": "Correct. The lecture emphasizes that insulin and many growth factors exert their effects through receptor tyrosine kinases. Ligand binding induces dimerization or multimerization and activates the intrinsic tyrosine kinase activity of the receptor. The receptor then autophosphorylates on tyrosine residues to assemble a downstream signaling complex that leads to responses including GLUT4 translocation and glucose uptake."
      },
      {
        "text": "A membrane-bound guanylyl cyclase",
        "explanation": "Incorrect. Membrane-bound guanylyl cyclases are used by the natriuretic peptides, not by insulin. This would be the correct answer if the question asked about the ANP or BNP receptor instead."
      },
      {
        "text": "A ligand-gated ion channel",
        "explanation": "Incorrect. Insulin does not act through a ligand-gated ion channel. This would be the correct answer if the question asked about the nicotinic acetylcholine receptor instead."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Insulin and most growth factors signal through receptor tyrosine kinases, which dimerize and autophosphorylate on tyrosine to assemble a downstream signaling complex.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 13,
    "pdfQuote": "Insulin and many growth factors exert their effect through RTKs"
  },
  {
    "id": 12,
    "category": "Receptor Tyrosine Kinases: VEGF",
    "questionText": "Which of the following ligand and response pairings is correct for a receptor tyrosine kinase?",
    "options": [
      {
        "text": "M-CSF stimulates angiogenesis",
        "explanation": "Incorrect. M-CSF stimulates monocyte and macrophage proliferation and differentiation rather than angiogenesis. This would be the correct answer if the question asked which cytokine drives monocyte and macrophage development instead."
      },
      {
        "text": "VEGF stimulates angiogenesis",
        "explanation": "Correct. The lecture table pairs vascular endothelial growth factor with the VEGF receptor and lists stimulation of angiogenesis as its response. The receptor is a classic RTK whose dimerization and autophosphorylation activate downstream signaling. VEGF signaling is a prominent target in cancer therapy because of its role in tumor angiogenesis."
      },
      {
        "text": "Insulin stimulates angiogenesis",
        "explanation": "Incorrect. Insulin stimulates carbohydrate utilization and protein synthesis, not angiogenesis. This would be the correct answer if the question asked which hormone drives GLUT4 translocation instead."
      },
      {
        "text": "NGF stimulates angiogenesis",
        "explanation": "Incorrect. Nerve growth factor stimulates survival and growth of some neurons through Trk A, not angiogenesis. This would be the correct answer if the question asked which growth factor supports sensory neuron survival instead."
      },
      {
        "text": "EGF stimulates angiogenesis",
        "explanation": "Incorrect. Epidermal growth factor stimulates proliferation of various cell types rather than being the dedicated angiogenic growth factor. This would be the correct answer if the question asked which growth factor drives epithelial proliferation instead."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Among the RTK ligands listed in the lecture, VEGF is the growth factor that stimulates angiogenesis.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 14,
    "pdfQuote": "VEGF receptor stimulates angiogenesis"
  },
  {
    "id": 13,
    "category": "Receptor Tyrosine Kinases: Activation Mechanism",
    "questionText": "What is the typical immediate consequence of agonist binding to the extracellular domain of a receptor tyrosine kinase?",
    "options": [
      {
        "text": "The receptor molecules form a dimer or multimer and activate their intrinsic tyrosine kinase",
        "explanation": "Correct. The lecture states that agonist binding typically causes RTK molecules to form a dimer or multimer, which activates their intrinsic tyrosine kinase activity. The activated kinase then phosphorylates specific tyrosine residues on the receptor itself. These phosphotyrosines assemble a complex of intracellular signaling proteins that relay the signal onward."
      },
      {
        "text": "The receptor couples to a heterotrimeric G protein and exchanges GDP for GTP",
        "explanation": "Incorrect. Coupling to a heterotrimeric G protein with GDP for GTP exchange describes a G-protein-coupled receptor rather than an RTK. This would be the correct answer if the question asked how a beta adrenergic receptor activates its signaling instead."
      },
      {
        "text": "The receptor translocates to the nucleus and binds DNA directly",
        "explanation": "Incorrect. Translocation to the nucleus to bind DNA directly describes nuclear hormone receptors. This would be the correct answer if the question asked about the mechanism of a steroid receptor instead."
      },
      {
        "text": "The receptor opens an ion channel to produce a graded potential",
        "explanation": "Incorrect. Opening an ion channel to produce a graded potential describes an ionotropic receptor rather than an RTK. This would be the correct answer if the question asked about the nicotinic acetylcholine receptor instead."
      },
      {
        "text": "The receptor is immediately degraded by lysosomes to terminate the signal",
        "explanation": "Incorrect. Immediate degradation would terminate signaling rather than initiate it. This would be the correct answer if the question asked about receptor downregulation instead."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Agonist binding to an RTK promotes dimerization or multimerization, which activates the intrinsic tyrosine kinase and leads to receptor autophosphorylation.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 15,
    "pdfQuote": "receptor molecules to form a dimer or multimer"
  },
  {
    "id": 14,
    "category": "Small G Proteins: Ras Family",
    "questionText": "Which of the following best describes Ras?",
    "options": [
      {
        "text": "A heterotrimeric G protein that activates adenylyl cyclase",
        "explanation": "Incorrect. A heterotrimeric G protein activating adenylyl cyclase is a Gs alpha-subunit, which is structurally distinct from the small G proteins. This would be the correct answer if the question asked about Gs signaling instead."
      },
      {
        "text": "A membrane-bound receptor tyrosine kinase",
        "explanation": "Incorrect. Ras is not a receptor tyrosine kinase; it functions downstream of RTKs rather than being the receptor itself. This would be the correct answer if the question asked which receptor binds EGF instead."
      },
      {
        "text": "A serine/threonine protein kinase at the apex of the MAP kinase cascade",
        "explanation": "Incorrect. The lecture places Raf, a serine/threonine kinase, as the MAPKKK apex of the MAP kinase module; Ras is a small G protein that activates Raf. This would be the correct answer if the question asked about MAPKKK instead."
      },
      {
        "text": "A small monomeric G protein activated by many growth factor RTKs",
        "explanation": "Correct. The lecture states that Ras is a superfamily of small G proteins and is activated by most growth factor RTKs. Like heterotrimeric G proteins it binds GTP for activity, is inactive when bound to GDP, and has innate GTPase activity that turns itself off. Activated Ras sets in motion a cascade that activates the MAP kinase module and regulates growth, proliferation, survival and death."
      },
      {
        "text": "A nuclear transcription factor that binds steroid response elements",
        "explanation": "Incorrect. A nuclear transcription factor that binds steroid response elements describes a nuclear hormone receptor rather than Ras. This would be the correct answer if the question asked about the glucocorticoid receptor instead."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Ras is a small monomeric G protein that binds GTP when active, has innate GTPase activity, and is switched on by most growth factor RTKs to drive the MAP kinase cascade.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 18,
    "pdfQuote": "small or monomeric G proteins"
  },
  {
    "id": 15,
    "category": "Small G Proteins: Ras in Cancer",
    "questionText": "Mutated Ras genes are found in approximately what fraction of human cancers?",
    "options": [
      {
        "text": "About 1 percent",
        "explanation": "Incorrect. One percent understates the frequency of Ras mutations in human cancers given in this lecture. This would be the correct answer if the question asked about a rare driver mutation instead."
      },
      {
        "text": "About 5 percent",
        "explanation": "Incorrect. Five percent is below the figure the lecture states for Ras mutations across human cancers. This would be the correct answer if the question asked about an uncommon oncogene instead."
      },
      {
        "text": "About 10 percent",
        "explanation": "Incorrect. Ten percent still understates the fraction given in the lecture. This would be the correct answer if the question asked about a less common signaling mutation instead."
      },
      {
        "text": "About 20 percent",
        "explanation": "Incorrect. Twenty percent is closer but still below the number the lecture provides for mutated Ras genes. This would be the correct answer if the question asked about a mid-frequency oncogene mutation instead."
      },
      {
        "text": "About 30 percent",
        "explanation": "Correct. The lecture states that mutated Ras genes are found in approximately 30 percent of human cancers. The mutated versions are called oncogenes and the normal versions proto-oncogenes. Mutant Ras can promote abnormal cell growth leading to cancer formation."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Ras mutations are found in roughly 30 percent of human cancers; mutated Ras is an oncogene while the normal gene is a proto-oncogene.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 19,
    "pdfQuote": "Mutated Ras genes found in 30% human cancers"
  },
  {
    "id": 16,
    "category": "MAP Kinase Module: Components",
    "questionText": "Which of the following correctly identifies the three tiers of the MAP kinase module activated by Ras?",
    "options": [
      {
        "text": "JAK, STAT and gene regulatory protein",
        "explanation": "Incorrect. JAK and STAT belong to the cytokine receptor pathway rather than the Ras-MAP kinase module. This would be the correct answer if the question asked about growth hormone or cytokine signaling instead."
      },
      {
        "text": "PI-3-kinase, Akt and mTOR",
        "explanation": "Incorrect. PI-3-kinase, Akt and mTOR constitute the parallel survival and growth pathway from RTKs, not the MAP kinase module. This would be the correct answer if the question asked about the pathway that promotes cell survival through phosphoinositides instead."
      },
      {
        "text": "Raf, MEK1/2 and ERK1/2",
        "explanation": "Correct. The lecture labels the MAP kinase module as MAPKKK which is Raf, MAPKK which is MEK1/2, and MAPK which is ERK1/2. Active Ras bound to GTP activates Raf, Raf phosphorylates MEK, and MEK phosphorylates ERK. ERK then phosphorylates target proteins and gene regulatory proteins to change protein activity and gene expression."
      },
      {
        "text": "Adenylyl cyclase, PKA and CREB",
        "explanation": "Incorrect. Adenylyl cyclase, PKA and CREB describe the cAMP pathway downstream of a Gs-coupled receptor, not the MAP kinase module. This would be the correct answer if the question asked about Gs signaling instead."
      },
      {
        "text": "Phospholipase C, DAG and PKC",
        "explanation": "Incorrect. Phospholipase C, DAG and PKC describe Gq signaling rather than the MAP kinase module. This would be the correct answer if the question asked about an alpha-1 adrenergic signaling pathway instead."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The MAP kinase module activated by Ras is a three-tier cascade: Raf (MAPKKK) phosphorylates MEK1/2 (MAPKK) which phosphorylates ERK1/2 (MAPK).",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 20,
    "pdfQuote": "MAPKKK: Raf MAPKK: MEK1/2 MAPK:ERK1/2"
  },
  {
    "id": 17,
    "category": "PI3K-Akt Pathway: Survival Signaling",
    "questionText": "Activated Akt promotes cell survival by phosphorylating and inactivating which of the following proteins?",
    "options": [
      {
        "text": "The anti-apoptotic protein Bcl2 at the mitochondrion",
        "explanation": "Incorrect. Bcl2 is the anti-apoptotic protein that is released and activated when Akt phosphorylates Bad, not the direct Akt target that gets inactivated. This would be the correct answer if the question asked which protein Bad sequesters instead."
      },
      {
        "text": "The pro-apoptotic protein Bad",
        "explanation": "Correct. The lecture states that activated Akt phosphorylates and inactivates the pro-apoptotic protein Bad. Normally Bad sequesters the cell death inhibitory protein Bcl2, so phosphorylation of Bad releases active Bcl2 and inhibits apoptosis. This is one of the key mechanisms by which RTK signaling through PI-3-kinase and Akt promotes cell survival."
      },
      {
        "text": "The Ras GTPase to prolong its activity",
        "explanation": "Incorrect. Phosphorylation to prolong Ras activity is not the Akt mechanism described in this lecture. This would be the correct answer if the question asked about a hypothetical Ras stabilizing modification instead."
      },
      {
        "text": "The transcription factor STAT in the cytoplasm",
        "explanation": "Incorrect. STAT is phosphorylated by JAK downstream of cytokine receptors, not inactivated by Akt. This would be the correct answer if the question asked about cytokine signaling instead."
      },
      {
        "text": "The nuclear receptor for cortisol",
        "explanation": "Incorrect. The nuclear receptor for cortisol is activated by hormone binding rather than regulated by Akt phosphorylation in this lecture. This would be the correct answer if the question asked about the glucocorticoid receptor mechanism instead."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Akt phosphorylates and inactivates the pro-apoptotic Bad protein, releasing Bcl2 to inhibit apoptosis and promote cell survival.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 24,
    "pdfQuote": "phosphorylates and inactivates a pro-apoptotic protein Bad"
  },
  {
    "id": 18,
    "category": "PI3K-Akt-mTOR Pathway: mTOR",
    "questionText": "mTOR is best described as which of the following?",
    "options": [
      {
        "text": "A serine/threonine protein kinase critical for cell growth",
        "explanation": "Correct. The lecture states that Akt also helps activate the mechanistic target of rapamycin, mTOR, which is a serine/threonine kinase critical for cell growth. Activated mTOR stimulates protein synthesis and inhibits protein degradation to drive cell growth. The PI-3-kinase-Akt-mTOR pathway is an important drug target for cancer, heart disease and other conditions."
      },
      {
        "text": "A receptor tyrosine kinase at the cell surface",
        "explanation": "Incorrect. mTOR is an intracellular serine/threonine kinase, not a membrane-bound receptor tyrosine kinase. This would be the correct answer if the question asked about the EGF receptor instead."
      },
      {
        "text": "A small G protein that activates MAP kinase",
        "explanation": "Incorrect. A small G protein that activates MAP kinase describes Ras, not mTOR. This would be the correct answer if the question asked about the switch upstream of Raf instead."
      },
      {
        "text": "A phosphatase that terminates Akt activity",
        "explanation": "Incorrect. mTOR is a kinase that is activated downstream of Akt, not a phosphatase that shuts off Akt. This would be the correct answer if the question asked about PTEN instead."
      },
      {
        "text": "A nuclear transcription factor for growth genes",
        "explanation": "Incorrect. mTOR is a cytosolic serine/threonine kinase and is not itself a nuclear transcription factor. This would be the correct answer if the question asked about a growth-regulating transcription factor instead."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: mTOR, the mechanistic target of rapamycin, is a serine/threonine protein kinase downstream of Akt that drives cell growth through protein synthesis.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 25,
    "pdfQuote": "mechanistic target of rapamycin (mTOR), a serine/threonine protein kinase"
  },
  {
    "id": 19,
    "category": "Tyrosine-Kinase-Associated Receptors: JAK/STAT",
    "questionText": "When growth hormone or cytokines bind their tyrosine-kinase-associated receptors, activated JAK phosphorylates which of the following downstream signaling proteins?",
    "options": [
      {
        "text": "Ras directly on a tyrosine residue",
        "explanation": "Incorrect. Ras is a small G protein activated through GEF-mediated GDP for GTP exchange, not through direct JAK phosphorylation on a tyrosine. This would be the correct answer if the question asked how a growth factor RTK activates Ras instead."
      },
      {
        "text": "Bad to promote cell survival",
        "explanation": "Incorrect. Bad is phosphorylated by Akt downstream of PI-3-kinase, not by JAK. This would be the correct answer if the question asked how Akt promotes survival instead."
      },
      {
        "text": "mTOR to drive protein synthesis",
        "explanation": "Incorrect. mTOR is activated downstream of Akt in the PI-3-kinase-Akt-mTOR pathway, not directly by JAK. This would be the correct answer if the question asked about the growth-promoting serine/threonine kinase downstream of Akt instead."
      },
      {
        "text": "STAT proteins, which then dimerize and modulate gene expression",
        "explanation": "Correct. The lecture states that growth hormone or cytokines induce receptor dimerization and activate JAK, which then phosphorylates the receptor and the STAT proteins (signal transducers and activators of transcription). The STATs associate with other STAT members to form a complex that modulates gene expression in the nucleus. This family includes receptors for GH, prolactin, leptin, interleukins, interferons, erythropoietin and GM-CSF."
      },
      {
        "text": "The nuclear receptor for thyroid hormone",
        "explanation": "Incorrect. The nuclear receptor for thyroid hormone is activated by T3 binding, not by JAK phosphorylation. This would be the correct answer if the question asked about T3 signaling instead."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: JAK phosphorylates STAT proteins, which dimerize, enter the nucleus and modulate gene expression; this is the pathway for GH, prolactin, leptin, interleukins, interferons and erythropoietin.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 27,
    "pdfQuote": "phosphorylates the receptor and the STAT proteins"
  },
  {
    "id": 20,
    "category": "Nuclear Receptors: Domain Structure",
    "questionText": "Which of the following is a core structural domain of an intracellular (nuclear) receptor as taught in this lecture?",
    "options": [
      {
        "text": "A tyrosine kinase domain in the cytoplasmic tail",
        "explanation": "Incorrect. A cytoplasmic tyrosine kinase domain is a feature of receptor tyrosine kinases rather than nuclear receptors. This would be the correct answer if the question asked about the structure of the insulin receptor instead."
      },
      {
        "text": "A guanylyl cyclase catalytic domain",
        "explanation": "Incorrect. A guanylyl cyclase catalytic domain is a feature of GC-A or sGC, not nuclear receptors. This would be the correct answer if the question asked about the ANP receptor structure instead."
      },
      {
        "text": "Seven transmembrane alpha helices",
        "explanation": "Incorrect. Seven transmembrane alpha helices are the structural signature of G-protein-coupled receptors rather than nuclear receptors. This would be the correct answer if the question asked about the structure of a beta adrenergic receptor instead."
      },
      {
        "text": "A JAK binding region on the cytoplasmic face",
        "explanation": "Incorrect. A JAK binding region on the cytoplasmic face belongs to cytokine or growth hormone receptors, not nuclear receptors. This would be the correct answer if the question asked about the growth hormone receptor instead."
      },
      {
        "text": "A hormone-binding domain, a DNA-binding domain and a gene regulatory domain",
        "explanation": "Correct. The lecture labels the structural organization of intracellular receptors as a hormone-binding domain (HBD), a DNA-binding domain (DBD) and a gene regulatory domain (GRD). Receptors for cortisol, aldosterone, androgens, progesterone, estrogen, thyroid hormone and vitamin D all share this layout. Once activated by their lipid-soluble ligands these receptors act as transcription factors that bind DNA and regulate target gene expression."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Nuclear receptors share a modular design with a hormone-binding domain, a DNA-binding domain and a gene regulatory domain, allowing them to act as ligand-activated transcription factors.",
    "lectureSource": "FOM78: Signal Transduction II",
    "pdfLecture": "FOM78",
    "pdfPage": 32,
    "pdfQuote": "HBD: hormone-binding domain DBD: DNA binding domain"
  }
];

window.Test_Review_FOM78 = Test_Review_FOM78;
