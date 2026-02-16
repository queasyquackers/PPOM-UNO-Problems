
// Lecture 67: Pharmacology of Opioid Analgesics
// Based on transcripts from M. Pino, Ph.D.

const Test_L67 = [
    {
        "id": 1,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 70-year-old female with metastatic ovarian cancer is being treated for severe pain. She was recently started on a transdermal patch to manage her chronic pain symptoms. The physician explains that this medication is highly potent and formulated to provide analgesia over a 72-hour period. Which of the following best describes the pharmacological profile of this agent compared to morphine?",
        "options": [
            {
                "text": "It is a partial agonist with a ceiling effect",
                "explanation": "Incorrect. This describes buprenorphine. The drug in question is fentanyl, which is a full agonist."
            },
            {
                "text": "It has 80-100 times the potency of morphine",
                "explanation": "Correct. Fentanyl is a strong synthetic opioid agonist that is approximately 80 to 100 times more potent than morphine. Its high potency allows for transdermal formulation (Duragesic patch) useful for chronic pain management."
            },
            {
                "text": "It is an antagonist at the Mu receptor",
                "explanation": "Incorrect. This describes naloxone or naltrexone. Fentanyl is a strong agonist."
            },
            {
                "text": "It is a weak agonist used for mild pain",
                "explanation": "Incorrect. This might describe codeine or tramadol. Fentanyl is reserved for severe pain."
            },
            {
                "text": "It has a short half-life requiring hourly dosing",
                "explanation": "Incorrect. While IV fentanyl has a short duration, the transdermal patch provides release over 72 hours."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Fentanyl is a synthetic opioid estimated to be 80-100 times more potent than morphine, making it suitable for transdermal delivery in chronic pain.",
        "pdfPage": 40,
        "pdfQuote": "80 to 100 times more potent"
    },
    {
        "id": 2,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 36-year-old male with a history of intravenous heroin use presents to the emergency department requesting help with detoxification. He is admitted and started on a medication to prevent withdrawal symptoms. The physician chooses an agent with a long half-life that allows for once-daily dosing and mitigates the 'highs and lows' associated with short-acting opioids. Which of the following is the primary mechanism of the drug administered?",
        "options": [
            {
                "text": "Full agonist at Mu opioid receptors",
                "explanation": "Correct. Methadone is a full Mu opioid agonist. Its utility in detoxification stems from its long half-life and slow elimination, allowing for stable serum levels that prevent withdrawal without inducing significant euphoria."
            },
            {
                "text": "Partial agonist at Mu opioid receptors",
                "explanation": "Incorrect. This describes buprenorphine. While buprenorphine is also used for detox, the vignette describes a full agonist often used in maintenance programs (methadone clinics)."
            },
            {
                "text": "Antagonist at Mu opioid receptors",
                "explanation": "Incorrect. Naloxone or Naltrexone are antagonists. Giving an antagonist to a dependent patient would precipitate immediate withdrawal, not prevent it."
            },
            {
                "text": "Inhibition of serotonin reuptake",
                "explanation": "Incorrect. This is a mechanism of tramadol or tapentadol, not the primary mechanism of methadone for detox."
            },
            {
                "text": "Blockade of voltage-gated sodium channels",
                "explanation": "Incorrect. This is the mechanism of local anesthetics, not opioid maintenance therapy."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Methadone is a lipid-soluble, full mu-agonist with a long half-life used in the detoxification and maintenance of opioid-dependent patients.",
        "pdfPage": 48,
        "pdfQuote": "long half-life preventing withdrawal"
    },
    {
        "id": 3,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 45-year-old male recovering from orthopedic surgery complains of severe constipation despite adequate hydration and fiber intake. He is currently taking oral oxycodone for pain control. His physician considers prescribing an agent to alleviate this specific side effect without reversing the analgesic effects of his pain medication. Which of the following drugs is most appropriate?",
        "options": [
            {
                "text": "Naloxone",
                "explanation": "Incorrect. Naloxone crosses the blood-brain barrier and would reverse both the constipation AND the analgesia, likely precipitating withdrawal."
            },
            {
                "text": "Methylnaltrexone",
                "explanation": "Correct. Methylnaltrexone is a peripheral mu-opioid receptor antagonist. Because of its quaternary amine structure, it does not cross the blood-brain barrier, allowing it to reverse opioid-induced constipation without affecting central analgesia."
            },
            {
                "text": "Loperamide",
                "explanation": "Incorrect. Loperamide is an opioid agonist used to TREAT diarrhea, which would worsen this patient's constipation."
            },
            {
                "text": "Methadone",
                "explanation": "Incorrect. Methadone is a full agonist and would contribute to constipation."
            },
            {
                "text": "Codeine",
                "explanation": "Incorrect. Codeine is an opioid agonist and causes constipation."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Methylnaltrexone limits its antagonism to peripheral receptors (gut) due to its quaternary structure, treating opioid-induced constipation without reversing central analgesia.",
        "pdfPage": 29,
        "pdfQuote": "does not cross blood brain barrier"
    },
    {
        "id": 4,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 22-year-old male is brought to the ED by friends after being found unresponsive at a party. Vital signs reveal a respiratory rate of 6/min, blood pressure of 90/60 mmHg, and heart rate of 50 bpm. Physical exam shows pinpoint pupils. The physician suspects an opioid overdose and administers an antidote. Which intracellular effect is normally mediated by the receptor that this antidote blocks?",
        "options": [
            {
                "text": "Activation of adenylyl cyclase",
                "explanation": "Incorrect. Opioid receptors are Gi-coupled, which inhibits adenylyl cyclase."
            },
            {
                "text": "Increased intracellular calcium influx",
                "explanation": "Incorrect. Opioid receptor activation leads to CLOSURE of voltage-gated calcium channels, reducing neurotransmitter release."
            },
            {
                "text": "Inhibition of adenylyl cyclase",
                "explanation": "Correct. Opioid receptors (Mu, Kappa, Delta) are G-protein coupled receptors (Gi/Go). Their activation leads to inhibition of adenylyl cyclase, decreased cAMP, decreased Ca2+ influx, and increased K+ efflux (hyperpolarization)."
            },
            {
                "text": "Stimulation of phospholipase C",
                "explanation": "Incorrect. This is the Gq pathway (e.g., alpha-1 adrenergic), not the opioid pathway."
            },
            {
                "text": "Blockade of potassium efflux",
                "explanation": "Incorrect. Opioid activation INCREASES potassium efflux to cause hyperpolarization."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Opioid receptors are Gi-coupled; stimulation inhibits adenylyl cyclase, closes presynaptic Ca2+ channels, and opens postsynaptic K+ channels.",
        "pdfPage": 15,
        "pdfQuote": "inhibition of adenylyl cyclase"
    },
    {
        "id": 5,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 55-year-old female with chronic back pain has been taking high-dose morphine for several months. She presents to her primary care physician with complaints of new-onset anxiety, rhinorrhea, lacrimation, and muscle aches after missing her medication doses for 24 hours. Vital signs show mild tachycardia and hypertension. Which of the following best explains her presentation?",
        "options": [
            {
                "text": "Opioid toxicity",
                "explanation": "Incorrect. Toxicity (overdose) presents with respiratory depression, sedation, and miosis. This patient has excitation signs."
            },
            {
                "text": "Serotonin syndrome",
                "explanation": "Incorrect. While anxiety and tachycardia are seen, rhinorrhea and lacrimation are classic specific signs of opioid withdrawal."
            },
            {
                "text": "Opioid withdrawal",
                "explanation": "Correct. Withdrawal from opioids manifests as autonomic hyperactivity (rhinorrhea, lacrimation, sweating, piloerection), anxiety, and agitation. It is essentially the opposite of the drug's effect."
            },
            {
                "text": "Tolerance",
                "explanation": "Incorrect. Tolerance is the need for higher doses to achieve the same effect. While she likely has tolerance, her current symptoms are due to withdrawal (abstinence)."
            },
            {
                "text": "Pseudo-allergy",
                "explanation": "Incorrect. Pseudo-allergy involves histamine release (itching, flushing). This patient has signs of sympathetic overactivity and secretory changes typical of withdrawal."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Opioid withdrawal presents with rhinorrhea, lacrimation, yawning, piloerection ('cold turkey'), and dilated pupils.",
        "pdfPage": 52,
        "pdfQuote": "rhinorrhea lacrimation yawning"
    },
    {
        "id": 6,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 28-year-old male with a history of depression and chronic pain is prescribed tramadol. He is also taking an SSRI (fluoxetine) for his depression. A few days after increasing his tramadol dose, he presents to the ED with agitation, tremors, muscle rigidity, and hyperthermia. Which of the following mechanisms of tramadol contributed to this interaction?",
        "options": [
            {
                "text": "Inhibition of serotonin reuptake",
                "explanation": "Correct. Tramadol is a weak Mu agonist but also inhibits the reuptake of serotonin and norepinephrine. Combining it with SSRIs increases the risk of serotonin syndrome."
            },
            {
                "text": "Antagonism of NMDA receptors",
                "explanation": "Incorrect. While methadone and dextromethorphan have NMDA antagonist properties, tramadol's serotonin risk comes from reuptake inhibition."
            },
            {
                "text": "Strong Mu receptor agonism",
                "explanation": "Incorrect. Tramadol is a WEAK Mu agonist. Its dual mechanism is what makes it unique and risky for serotonin syndrome."
            },
            {
                "text": "Induction of CYP2D6",
                "explanation": "Incorrect. Tramadol is metabolized BY CYP2D6, it does not induce it. The interaction is pharmacodynamic (serotonin excess)."
            },
            {
                "text": "Blockade of GABA receptors",
                "explanation": "Incorrect. Tramadol does lower seizure threshold, but the clinical picture of rigidity and hyperthermia with an SSRI points specifically to serotonin syndrome."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Tramadol inhibits norepinephrine and serotonin reuptake; concomitant use with SSRIs or MAOIs precipitates serotonin syndrome.",
        "pdfPage": 58,
        "pdfQuote": "inhibition of serotonin reuptake"
    },
    {
        "id": 7,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 60-year-old male is prescribed codeine for cough suppression. He reports no relief from his symptoms after several days. Genetic testing reveals he is a 'poor metabolizer' of a specific cytochrome P450 enzyme. Which metabolic conversion is impaired in this patient, leading to the lack of efficacy?",
        "options": [
            {
                "text": "Codeine to morphine via CYP2D6",
                "explanation": "Correct. Codeine is a prodrug that must be metabolized to morphine by CYP2D6 to exert its analgesic and sufficient antitussive effects. Poor metabolizers may experience lack of efficacy."
            },
            {
                "text": "Codeine to morphine via CYP3A4",
                "explanation": "Incorrect. CYP3A4 converts codeine to norcodeine (inactive). Functional CYP2D6 is required for activation."
            },
            {
                "text": "Morphine to codeine via CYP2D6",
                "explanation": "Incorrect. The conversion is Codeine -> Morphine. Morphine is the active metabolite."
            },
            {
                "text": "Codeine to normeperidine via CYP2C19",
                "explanation": "Incorrect. Normeperidine is a metabolite of meperidine, not codeine."
            },
            {
                "text": "Codeine to fentanyl via CYP2D6",
                "explanation": "Incorrect. Codeine is not converted to fentanyl; it is converted to morphine."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Codeine is a prodrug activated to morphine by CYP2D6. Genetic polymorphisms in CYP2D6 can lead to variable response (toxicity in ultra-rapid metabolizers, failure in poor metabolizers).",
        "pdfPage": 22,
        "pdfQuote": "metabolized to morphine CYP2D6"
    },
    {
        "id": 8,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 30-year-old female presents to the ED with severe abdominal pain. She has a history of biliary colic. The resident suggests using morphine for pain control. The attending advises against it, citing a specific adverse effect on the biliary tree. Which of the following effects is the attending referring to?",
        "options": [
            {
                "text": "Relaxation of the gallbladder",
                "explanation": "Incorrect. Morphine causes contraction, not relaxation."
            },
            {
                "text": "Contraction of the Sphincter of Oddi",
                "explanation": "Correct. Opioids like morphine can cause spasm/contraction of the Sphincter of Oddi, which can increase biliary pressure and potentially exacerbate biliary colic."
            },
            {
                "text": "Increased bile production",
                "explanation": "Incorrect. The issue is with flow/pressure (spasm), not production."
            },
            {
                "text": "Relaxation of the Sphincter of Oddi",
                "explanation": "Incorrect. Opioids cause contraction (spasm), which is why they are cautioned in biliary pathology."
            },
            {
                "text": "Direct hepatotoxicity",
                "explanation": "Incorrect. Morphine is not directly hepatotoxic in standard doses; the concern is the biliary spasm."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Opioids can cause contraction of the Sphincter of Oddi, leading to increased biliary pressure; Meperidine was historically preferred but has its own toxicity issues.",
        "pdfPage": 34,
        "pdfQuote": "contraction of sphincter of oddi"
    },
    {
        "id": 9,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 19-year-old male is brought to the ED after ingesting a large quantity of an over-the-counter cough syrup to 'get high'. He presents with confusion, nystagmus, and lethargy. The toxicology screen is negative for typical opioids. Which of the following substances did he likely ingest, which acts as an NMDA receptor antagonist?",
        "options": [
            {
                "text": "Codeine",
                "explanation": "Incorrect. Codeine is a standard opioid agonist and would likely show on a screen. It is not an NMDA antagonist."
            },
            {
                "text": "Dextromethorphan",
                "explanation": "Correct. Dextromethorphan is the d-isomer of the codeine analog levorphanol. It lacks analgesic effects at standard doses but acts as an NMDA antagonist and can be abused for its dissociative/hallucinogenic effects in high doses."
            },
            {
                "text": "Loperamide",
                "explanation": "Incorrect. Loperamide is an antidiarrheal that doesn't cross the BBB efficiently. It does not have NMDA antagonist properties."
            },
            {
                "text": "Guaifenesin",
                "explanation": "Incorrect. This is an expectorant often found in cough syrups but does not cause these CNS effects."
            },
            {
                "text": "Pseudoephedrine",
                "explanation": "Incorrect. This is a stimulant/decongestant, not a dissociative NMDA antagonist."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Dextromethorphan is an over-the-counter antitussive that functions as an NMDA receptor antagonist and can be abused for dissociative effects.",
        "pdfPage": 62,
        "pdfQuote": "NMDA receptor antagonist"
    },
    {
        "id": 10,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 35-year-old male with opioid use disorder is being treated with buprenorphine. He admits to trying to use heroin yesterday but claims it 'didn't do anything'. Which pharmacological property of buprenorphine explains this blocked effect?",
        "options": [
            {
                "text": "High affinity and partial agonism at Mu receptors",
                "explanation": "Correct. Buprenorphine has a very high affinity for the Mu receptor but low intrinsic activity (partial agonist). It binds tightly, displacing or blocking other opioids (like heroin) from binding, thus preventing the full agonist effect."
            },
            {
                "text": "Full antagonism at Mu receptors",
                "explanation": "Incorrect. Buprenorphine is a PARTIAL agonist, not a full antagonist like naloxone, though its high affinity essentially blocks other agonists."
            },
            {
                "text": "Agonism at Kappa receptors",
                "explanation": "Incorrect. Buprenorphine is actually an antagonist at Kappa receptors."
            },
            {
                "text": "Rapid metabolic induction of CYP3A4",
                "explanation": "Incorrect. The mechanism is receptor competition/blockade, not metabolic induction."
            },
            {
                "text": "Irreversible binding to the receptor",
                "explanation": "Incorrect. The binding is reversible (though dissociates slowly), it is not covalent/irreversible."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Buprenorphine acts as a partial Mu-agonist with high affinity, allowing it to displace full agonists and precipitate withdrawal or block their effects ('ceiling effect').",
        "pdfPage": 55,
        "pdfQuote": "partial agonist high affinity"
    },
    {
        "id": 11,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 50-year-old male with renal failure (CrCl < 30 mL/min) requires opioid analgesia for a fracture. The physician avoids morphine due to the risk of accumulation of a neurotoxic active metabolite. Which metabolite is of concern in this patient?",
        "options": [
            {
                "text": "Morphine-3-glucuronide",
                "explanation": "Correct. Morphine is metabolized to Morphine-3-glucuronide (neuroexcitatory) and Morphine-6-glucuronide (analgesic). In renal failure, M3G accumulates and can cause CNS excitation/seizures."
            },
            {
                "text": "Normeperidine",
                "explanation": "Incorrect. This is the toxic metabolite of Meperidine, not Morphine."
            },
            {
                "text": "Codeine-6-glucuronide",
                "explanation": "Incorrect. Not the relevant metabolite for morphine toxicity."
            },
            {
                "text": "Acetylmorphine",
                "explanation": "Incorrect. This is a metabolite of heroin."
            },
            {
                "text": "Norhydrocodone",
                "explanation": "Incorrect. This is a metabolite of hydrocodone."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Morphine-6-glucuronide is a potent analgesic, while Morphine-3-glucuronide is neuroexcitatory; both accumulate in renal failure.",
        "pdfPage": 25,
        "pdfQuote": "metabolite accumulation renal failure"
    },
    {
        "id": 12,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 24-year-old female is brought to the ED with a suspected opioid overdose. She is given IV naloxone and awakens within 2 minutes. However, 45 minutes later, she becomes obtunded again with a respiratory rate of 8/min. Which pharmacokinetic property of naloxone explains this phenomenon?",
        "options": [
            {
                "text": "It has a shorter half-life than most opioids",
                "explanation": "Correct. Naloxone has a short duration of action (30-60 mins). Many opioids (like morphine or heroin) last much longer. Once naloxone wears off, the opioid still present in the system re-binds the receptors, leading to 'renarcotization'."
            },
            {
                "text": "It is rapidly sequestered in adipose tissue",
                "explanation": "Incorrect. The issue is rapid elimination/metabolism, not redistribution to fat."
            },
            {
                "text": "It is converted to a depressed metabolite",
                "explanation": "Incorrect. Naloxone is an antagonist; it doesn't have an active depressant metabolite."
            },
            {
                "text": "It permanently desensitizes Mu receptors",
                "explanation": "Incorrect. Naloxone is a competitive antagonist; it does not permanently allow receptors to be desensitized."
            },
            {
                "text": "It has a delayed onset of action",
                "explanation": "Incorrect. Naloxone works very rapidly (minutes), which is why she woke up initially."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Naloxone has a short duration of action (1-2 hours) relative to most opioids, necessitating close monitoring for recurrence of respiratory depression.",
        "pdfPage": 51,
        "pdfQuote": "shorter duration than agonist"
    },
    {
        "id": 13,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A patient with terminal cancer has developed tolerance to the analgesic effects of their opioid medication. However, they continue to complain of a specific side effect to which tolerance rarely develops. Which of the following is that side effect?",
        "options": [
            {
                "text": "Sedation",
                "explanation": "Incorrect. Tolerance readily develops to sedation."
            },
            {
                "text": "Respiratory depression",
                "explanation": "Incorrect. Tolerance develops to respiratory depression (which is why addicts can survive massive doses)."
            },
            {
                "text": "Euphoria",
                "explanation": "Incorrect. Tolerance develops to the euphoric effect, driving dose escalation."
            },
            {
                "text": "Constipation",
                "explanation": "Correct. Tolerance develops to most opioid effects (sedation, respiratory depression, analgesia) but minimal to no tolerance develops to miosis and constipation."
            },
            {
                "text": "Nausea",
                "explanation": "Incorrect. Tolerance typically develops to the emetic effects of opioids."
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Little to no tolerance develops to the constipating and miotic effects of opioids.",
        "pdfPage": 32,
        "pdfQuote": "minimal tolerance to constipation"
    },
    {
        "id": 14,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 40-year-old male presents for a minor surgical procedure. The anesthesiologist plans to use an ultra-short-acting opioid for induction and maintenance of anesthesia. Which of the following agents, metabolized by plasma esterases, fits this description?",
        "options": [
            {
                "text": "Remifentanil",
                "explanation": "Correct. Remifentanil is an ultra-short-acting potent opioid metabolized by plasma esterases, allowing for rapid recovery regardless of infusion duration."
            },
            {
                "text": "Fentanyl",
                "explanation": "Incorrect. Fentanyl is short-acting but depends on hepatic metabolism, not plasma esterases."
            },
            {
                "text": "Methadone",
                "explanation": "Incorrect. Methadone is long-acting."
            },
            {
                "text": "Morphine",
                "explanation": "Incorrect. Morphine is not ultra-short acting and depends on hepatic glucuronidation."
            },
            {
                "text": "Meperidine",
                "explanation": "Incorrect. Meperidine has a longer duration and toxic metabolites."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Remifentanil is an ultra-short-acting opioid metabolized by plasma esterases, making it ideal for continuous infusion during surgery.",
        "pdfPage": 45,
        "pdfQuote": "metabolized by plasma esterases"
    },
    {
        "id": 15,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 25-year-old male is treated in a rehabilitation center for alcohol dependence. He is prescribed Naltrexone to help reduce cravings. Before starting this therapy, it is most critical to ensure the patient is NOT also taking which class of drugs?",
        "options": [
            {
                "text": "Opioids",
                "explanation": "Correct. Naltrexone is an opioid antagonist. If the patient is dependent on opioids (even for pain), starting naltrexone will precipitate severe acute withdrawal."
            },
            {
                "text": "Benzodiazepines",
                "explanation": "Incorrect. While caution is needed with CNS depressants, the interaction causing precipitated withdrawal is specific to opioids."
            },
            {
                "text": "SSRIs",
                "explanation": "Incorrect. Naltrexone does not have a direct major interaction with SSRIs."
            },
            {
                "text": "NSAIDs",
                "explanation": "Incorrect. No significant interaction."
            },
            {
                "text": "Beta-blockers",
                "explanation": "Incorrect. No significant interaction."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Naltrexone is a long-acting opioid antagonist used for alcohol and opioid dependence; patients must be opioid-free before initiation to avoid precipitated withdrawal.",
        "pdfPage": 53,
        "pdfQuote": "must be opioid free"
    },
    {
        "id": 16,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 32-year-old female is administered meperidine for pain relief during labor. Shortly after birth, the neonate displays irritability and seizure-like activity. The attending suspects accumulation of a toxic metabolite. Which metabolite is responsible?",
        "options": [
            {
                "text": "Normeperidine",
                "explanation": "Correct. Meperidine acts as a kappa-agonist and mu-agonist but its metabolite, Normeperidine, is neurotoxic and can cause tremors and seizures (CNS stimulation)."
            },
            {
                "text": "Morphine-6-glucuronide",
                "explanation": "Incorrect. Metabolite of morphine."
            },
            {
                "text": "Acetylcodeine",
                "explanation": "Incorrect. Impurity in street heroin/codeine synthesis, not meperidine."
            },
            {
                "text": "Noroxycodone",
                "explanation": "Incorrect. Metabolite of oxycodone."
            },
            {
                "text": "Desmethyltramadol",
                "explanation": "Incorrect. Metabolite of tramadol."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Meperidine is metabolized to normeperidine, which causes CNS excitation and seizures; it is generally avoided in patients with renal risk or for chronic use.",
        "pdfPage": 42,
        "pdfQuote": "normeperidine causes seizures"
    },
    {
        "id": 17,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A patient with a history of heroin abuse presents with signs of withdrawal. The physician considers using clonidine to aid in symptom management. Clonidine helps alleviate the autonomic symptoms of withdrawal by:",
        "options": [
            {
                "text": "Activating Alpha-2 adrenergic receptors",
                "explanation": "Correct. Clonidine is an alpha-2 agonist. It works centrally to decrease sympathetic outflow (norepinephrine release), thereby reducing the autonomic hyperactivity (sweating, tachycardia) associated with opioid withdrawal."
            },
            {
                "text": "Blocking Mu opioid receptors",
                "explanation": "Incorrect. Clonidine is not an opioid receptor blocker. That would be Naloxone."
            },
            {
                "text": "Activating Mu opioid receptors",
                "explanation": "Incorrect. Clonidine is not an opioid."
            },
            {
                "text": "Blocking Beta-1 adrenergic receptors",
                "explanation": "Incorrect. Clonidine acts on alpha-2 presynaptic receptors."
            },
            {
                "text": "Inhibiting dopamine reuptake",
                "explanation": "Incorrect. This is not the mechanism of clonidine."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Clonidine (alpha-2 agonist) mitigates the sympathetic hyperactivity of opioid withdrawal but does not relieve drug craving.",
        "pdfPage": 68,
        "pdfQuote": "alpha 2 agonist reduces sympathetic"
    },
    {
        "id": 18,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A 22-year-old pregnant female is addicted to heroin. She fears for her baby's health. Which of the following is the standard of care for maintenance therapy in this patient to prevent Neonatal Abstinence Syndrome complications associated with illicit use?",
        "options": [
            {
                "text": "Methadone maintenance",
                "explanation": "Correct. Methadone is the gold standard for opioid maintenance in pregnancy. It provides stable levels, prevents withdrawal (which induces fetal stress/miscarriage), and reduces illicit drug seeking. Buprenorphine is also used."
            },
            {
                "text": "Immediate detoxification with Naloxone",
                "explanation": "Incorrect. Acute detoxification is contraindicated in pregnancy due to the risk of fetal distress and miscarriage from uterine contractions during withdrawal."
            },
            {
                "text": "Tramadol",
                "explanation": "Incorrect. Not indicated for maintenance."
            },
            {
                "text": "Fentanyl patch",
                "explanation": "Incorrect. Not appropriate for addiction maintenance."
            },
            {
                "text": "Codeine syrup",
                "explanation": "Incorrect. Weak agonist, not suitable for heroin addiction maintenance."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Methadone or Buprenorphine maintenance is preferred in pregnancy over acute detox to prevent fetal distress caused by withdrawal.",
        "pdfPage": 65,
        "pdfQuote": "methadone used in pregnancy"
    },
    {
        "id": 19,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "A patient taking an opioid for chronic pain reports experiencing itching and flushing after each dose, but denies difficulty breathing or throat tightness. The physician explains this is likely a pseudo-allergy. Which mechanism mediates this reaction?",
        "options": [
            {
                "text": "Direct histamine release from mast cells",
                "explanation": "Correct. Many opioids (especially morphine and codeine) cause direct degranulation of mast cells, releasing histamine. This causes pruritus and vasodilation (flushing) but is not an IgE-mediated anaphylactic reaction."
            },
            {
                "text": "IgE-mediated immune response",
                "explanation": "Incorrect. This would be a true allergy, which is rarer."
            },
            {
                "text": "Formation of antigen-antibody complexes",
                "explanation": "Incorrect. This describes Type III hypersensitivity."
            },
            {
                "text": "T-cell mediated delay hypersensitivity",
                "explanation": "Incorrect. This describes Type IV hypersensitivity."
            },
            {
                "text": "Activation of the complement cascade",
                "explanation": "Incorrect. Not the mechanism of opioid-induced itching."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Opioids can cause non-immunologic histamine release leading to itching and hypotension, often mistaken for true allergy.",
        "pdfPage": 31,
        "pdfQuote": "histamine release pseudo allergy"
    },
    {
        "id": 20,
        "category": "Pharmacology: Opioid Analgesics",
        "questionText": "Which of the following opioid peptides is endogenous to the body and has high affinity for the Delta opioid receptor?",
        "options": [
            {
                "text": "Enkephalins",
                "explanation": "Correct. Enkephalins are endogenous peptides that have high affinity for Delta receptors. Endorphins target Mu, and Dynorphins target Kappa."
            },
            {
                "text": "Beta-endorphin",
                "explanation": "Incorrect. Beta-endorphin has high affinity for Mu receptors."
            },
            {
                "text": "Dynorphin A",
                "explanation": "Incorrect. Dynorphins have high affinity for Kappa receptors."
            },
            {
                "text": "Nociceptin",
                "explanation": "Incorrect. Targets the ORL-1 receptor."
            },
            {
                "text": "Substance P",
                "explanation": "Incorrect. Substance P is a nociceptive neurotransmitter, not an opioid peptide."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Endogenous opioid peptides include Enkephalins (Delta), Endorphins (Mu), and Dynorphins (Kappa).",
        "pdfPage": 10,
        "pdfQuote": "enkephalins bind delta receptors"
    }
];

window.Test_L67 = Test_L67;
