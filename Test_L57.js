// Thinking Process:
// 1.  **High-Yield Concepts:** Parkinson's motor symptoms (TRAP), non-motor symptoms (REM sleep behavior, anosmia), Genetics (GBA, LRRK2), Environmental risks (pesticides), Pathology (SNpc degeneration, Lewy bodies), Treatment (Levodopa, Agonists, COMT, MAO-B, Amantadine), Side effects (Dyskinesia, Impulse control, Hallucinations), Atypical Parkinsonism (MSA, PSP, LBD, NPH).
// 2.  **The "Trap":** Confusing PD with atypicals (PSP has gaze palsy, MSA has autonomic failure), confusing drug side effects (Agonists vs Levodopa), Differentiating Essential Tremor from PD (Postural vs Resting).
// 3.  **Vignette Strategy:** Use realistic vignettes with "rule-out" details. E.g., for PSP, mention "falling backwards" or "difficulty looking down". For MSA, mention "fainting" (orthostasis). For LBD, mention "visual hallucinations early".
// 4.  **PDF Mapping:** Verified filename "Lecture # 57. A. Leder, D.O. (PPT).pdf".
// 5.  **Question Mix:** 75% Vignette (Type A), 25% Focused (Type B).

const Test_L57 = [
    {
        "id": 1,
        "category": "Neurology: Parkinson's Disease",
        "questionText": "A 68-year-old male presents to the clinic with a 1-year history of right hand shaking that is most prominent when his hand is resting in his lap. He reports that the shaking improves when he reaches for a cup of coffee. He has also noticed that his handwriting has become smaller and more cramped. His wife mentions that he has been moving slower than usual. On physical examination, there is increased resistance to passive flexion of the right wrist. Which of the following pathological findings is most characteristic of this patient's condition?",
        "options": [
            {
                "text": "Neurofibrillary tangles in the hippocampus",
                "explanation": "Incorrect. Neurofibrillary tangles (composed of hyperphosphorylated tau) are characteristic of Alzheimer's disease. While dementia can occur in Parkinson's, it is usually a late finding, and the primary pathology involves the substantia nigra."
            },
            {
                "text": "Degeneration of the caudate nucleus",
                "explanation": "Incorrect. Caudate nucleus atrophy is a hallmark of Huntington's disease, which presents with chorea (jerky, involuntary movements) rather than the resting tremor and rigidity seen in this patient. This would be correct if the patient had chorea and behavioral changes."
            },
            {
                "text": "Loss of dopaminergic neurons in the substantia nigra pars compacta",
                "explanation": "Correct. This patient presents with classic signs of Parkinson's disease: resting tremor (asymmetric), bradykinesia (slow movement), micrographia (small handwriting), and rigidity. The underlying pathology is the degeneration of pigmented dopaminergic neurons in the ventral lateral region of the substantia nigra pars compacta."
            },
            {
                "text": "Extensive demyelination of the periventricular white matter",
                "explanation": "Incorrect. This finding is characteristic of Multiple Sclerosis or vascular dementia. While vascular parkinsonism exists, it typically affects the lower body more (gait) and doesn't present with the classic 'pill-rolling' resting tremor of idiopathic PD."
            },
            {
                "text": "Accumulation of copper in the basal ganglia",
                "explanation": "Incorrect. This describes Wilson's disease. While Wilson's can present with parkinsonian features, it typically presents in younger patients (before age 40) and is associated with liver disease and Kayser-Fleischer rings."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Parkinson's disease pathology involves the degeneration of dopaminergic neurons in the substantia nigra pars compacta and the presence of Lewy bodies.",
        "pdfPage": 59,
        "pdfQuote": "Degeneration of the nigrostriatal dopaminergic"
    },
    {
        "id": 2,
        "category": "Neurology: Parkinson's Disease",
        "questionText": "A 55-year-old female presents for evaluation of shoulder pain and stiffness. She initially saw an orthopedist for a 'frozen shoulder' but has not improved with physical therapy. Review of systems reveals that she has lost her sense of smell over the last few years and has chronic constipation. On exam, she has a masked facies and decreased right arm swing while walking. Which of the following environmental exposures is a known risk factor for the development of her likely condition?",
        "options": [
            {
                "text": "Smoking cigarettes",
                "explanation": "Incorrect. Interestingly, smoking cigarettes is associated with a *decreased* risk of developing Parkinson's disease. This is a common epidemiological pearl."
            },
            {
                "text": "High caffeine intake",
                "explanation": "Incorrect. Similar to smoking, high caffeine intake has been inversely associated with the risk of developing Parkinson's disease. It is considered a protective factor."
            },
            {
                "text": "Exposure to pesticides such as paraquat",
                "explanation": "Correct. Exposure to pesticides, particularly paraquat and rotenone, is a well-established environmental risk factor for Parkinson's disease. Other risk factors include rural living, well water consumption, and head injury. This patient's presentation of frozen shoulder, anosmia, and constipation are prodromal/early signs of PD."
            },
            {
                "text": "Living in an urban environment",
                "explanation": "Incorrect. Rural living, not urban living, is associated with a higher risk of Parkinson's disease, likely due to increased exposure to agricultural chemicals and well water."
            },
            {
                "text": "Moderate alcohol consumption",
                "explanation": "Incorrect. Alcohol consumption does not have a strong established link as a risk factor for Parkinson's disease, unlike the protective effects seen with smoking and caffeine."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Pesticide exposure (e.g., Paraquat) is a significant environmental risk factor for Parkinson's disease, increasing risk by up to 150%.",
        "pdfPage": 100,
        "pdfQuote": "Pesticides, rural living, well water"
    },
    {
        "id": 3,
        "category": "Neurology: Atypical Parkinsonism",
        "questionText": "A 62-year-old male is brought to the neurologist by his wife because he has been falling frequently. She reports that he often falls backwards. He also seems to have trouble looking down to eat his food. On examination, the physician notes a surprised facial expression with widened eyes and a furrowed brow. When the physician moves the patient's head passively, full range of eye movements is observed, but voluntary vertical gaze is restricted. Which of the following is the most likely diagnosis?",
        "options": [
            {
                "text": "Idiopathic Parkinson's Disease",
                "explanation": "Incorrect. While PD causes falls, they typically occur later in the disease course. Early falls, especially backwards, are a red flag for atypical parkinsonism. Additionally, PD does not typically cause vertical gaze palsy."
            },
            {
                "text": "Multiple System Atrophy (MSA)",
                "explanation": "Incorrect. MSA is characterized by severe autonomic dysfunction (orthostasis, incontinence) and cerebellar signs. While falls occur, the hallmark of this patient's presentation is the supranuclear gaze palsy."
            },
            {
                "text": "Progressive Supranuclear Palsy (PSP)",
                "explanation": "Correct. The classic features of PSP include early falls (often backwards), supranuclear vertical gaze palsy (difficulty looking down), and a surprised facial expression (procerus sign). The 'doll's eyes' maneuver overcoming the gaze restriction confirms the supranuclear nature of the palsy."
            },
            {
                "text": "Corticobasal Degeneration",
                "explanation": "Incorrect. Corticobasal Degeneration typically presents with marked asymmetry, apraxia, alien limb phenomenon, and cortical sensory loss. This patient's symmetric axial presentation with gaze palsy fits PSP better."
            },
            {
                "text": "Normal Pressure Hydrocephalus",
                "explanation": "Incorrect. NPH presents with the triad of 'Wet, Wobbly, and Wacky' (incontinence, gait disturbance, dementia). It typically causes a magnetic gait, not the specific vertical gaze palsy seen here."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Progressive Supranuclear Palsy (PSP) is characterized by early backward falls and vertical supranuclear gaze palsy (difficulty looking down).",
        "pdfPage": 319,
        "pdfQuote": "Supranuclear gaze palsy"
    },
    {
        "id": 4,
        "category": "Pharmacology: Parkinson's Disease",
        "questionText": "A 72-year-old female with Parkinson's disease has been managed on carbidopa/levodopa for 5 years. She is experiencing 'wearing off' symptoms where her mobility decreases before her next scheduled dose. Her neurologist decides to add a medication to inhibit the enzyme catechol-O-methyltransferase (COMT) to extend the half-life of levodopa. Which of the following counseling points is most appropriate for the new medication prescribed?",
        "options": [
            {
                "text": "This medication requires monthly blood tests to monitor for agranulocytosis.",
                "explanation": "Incorrect. This monitoring is required for Clozapine, an antipsychotic used for PD psychosis, not for COMT inhibitors."
            },
            {
                "text": "You must avoid tyramine-rich foods like aged cheese and wine.",
                "explanation": "Incorrect. This dietary restriction is associated with MAO-A inhibitors or high doses of non-selective MAO inhibitors. MAO-B inhibitors used in PD (selegiline, rasagiline) generally do not require this at standard doses, and COMT inhibitors definitely do not."
            },
            {
                "text": "This medication may cause your urine to turn a harmless reddish-brown/orange color.",
                "explanation": "Correct. Entacapone, a commonly used COMT inhibitor, is known to cause harmless discoloration of the urine (orange/reddish-brown). Patients should be counseled on this to avoid unnecessary alarm."
            },
            {
                "text": "This drug is administered as a daily transdermal patch.",
                "explanation": "Incorrect. The Rotigotine (Neupro) patch is a dopamine agonist. Entacapone and opicapone are oral medications."
            },
            {
                "text": "You should check your skin regularly for lace-like purple discoloration.",
                "explanation": "Incorrect. Livedo reticularis (lace-like purplish discoloration) is a side effect of Amantadine, not COMT inhibitors."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Entacapone (COMT inhibitor) can cause harmless orange/reddish-brown discoloration of urine.",
        "pdfPage": 476,
        "pdfQuote": "Turns urine dark"
    },
    {
        "id": 5,
        "category": "Neurology: Atypical Parkinsonism",
        "questionText": "A 65-year-old male is evaluated for parkinsonism. He reports significant lightheadedness upon standing, requiring him to sit back down immediately. His wife notes that he has been impotent for the past year and has started acting out his dreams violently at night. On exam, he has rigidity and bradykinesia but also mild ataxia. His blood pressure drops from 140/80 mmHg supine to 100/60 mmHg standing. Which of the following is the most likely diagnosis?",
        "options": [
            {
                "text": "Idiopathic Parkinson's Disease",
                "explanation": "Incorrect. While PD can cause autonomic symptoms, severe early orthostatic hypotension and impotence are red flags for Multiple System Atrophy. In PD, these symptoms typically appear much later."
            },
            {
                "text": "Multiple System Atrophy (MSA)",
                "explanation": "Correct. MSA is a synucleinopathy characterized by parkinsonism, cerebellar signs (ataxia), and severe autonomic failure (orthostatic hypotension, impotence, urinary incontinence). REM sleep behavior disorder is also very common in synucleinopathies like MSA."
            },
            {
                "text": "Progressive Supranuclear Palsy (PSP)",
                "explanation": "Incorrect. PSP is characterized by vertical gaze palsy and early falls. Marked autonomic failure is not its primary feature."
            },
            {
                "text": "Corticobasal Degeneration",
                "explanation": "Incorrect. CBD presents with asymmetric cortical signs like apraxia and alien limb phenomenon, not primarily with severe autonomic failure."
            },
            {
                "text": "Vascular Parkinsonism",
                "explanation": "Incorrect. Vascular parkinsonism often presents with lower body parkinsonism (gait issues) and a history of strokes/vascular risk factors. It does not typically present with the severe autonomic failure seen in MSA."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Multiple System Atrophy (MSA) is characterized by the combination of parkinsonism, cerebellar ataxia, and severe autonomic failure (e.g., orthostasis, impotence).",
        "pdfPage": 331,
        "pdfQuote": "Autonomic insufficiency"
    },
    {
        "id": 6,
        "category": "Neurology: Genetics",
        "questionText": "A 45-year-old male of Ashkenazi Jewish descent presents with tremors and slowness of movement. His father also had Parkinson's disease. Genetic testing is performed. Which of the following gene mutations is most commonly associated with Parkinson's disease in this specific demographic and is also linked to a lysosomal storage disorder?",
        "options": [
            {
                "text": "PARKIN",
                "explanation": "Incorrect. PARKIN mutations are a common cause of early-onset autosomal recessive Parkinson's, but they are not the most common mutation in Ashkenazi Jews specifically linked to a lysosomal storage disease."
            },
            {
                "text": "PINK1",
                "explanation": "Incorrect. PINK1 is another cause of early-onset recessive Parkinson's but is not the specific association described."
            },
            {
                "text": "GBA (Glucocerebrosidase)",
                "explanation": "Correct. GBA mutations are the most common genetic risk factor for Parkinson's disease, particularly in the Ashkenazi Jewish population. Homozygous GBA mutations cause Gaucher's disease, a lysosomal storage disorder. Heterozygous carriers are at increased risk for PD."
            },
            {
                "text": "LRRK2",
                "explanation": "Incorrect. LRRK2 mutations are indeed common in Ashkenazi Jews (specifically the G2019S mutation) and cause autosomal dominant PD. However, the vignette specifies a link to a lysosomal storage disorder, which points to GBA (Gaucher's)."
            },
            {
                "text": "SNCA (Alpha-synuclein)",
                "explanation": "Incorrect. SNCA mutations/duplications were the first identified genetic cause of PD but are rare. They are not the specific link to lysosomal storage diseases."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "GBA mutations are a common genetic cause of Parkinson's disease, especially in Ashkenazi Jews, and are the same gene involved in Gaucher's disease.",
        "pdfPage": 125,
        "pdfQuote": "GBA... Glucocerebrosidase"
    },
    {
        "id": 7,
        "category": "Pharmacology: Parkinson's Disease",
        "questionText": "A 50-year-old male with early-onset Parkinson's disease is started on ropinirole. Two months later, his wife calls the office in distress. She reports that he has been gambling away their savings online and has developed an intense interest in pornography, which is out of character for him. Which mechanism explains this adverse effect?",
        "options": [
            {
                "text": "Blockade of muscarinic acetylcholine receptors",
                "explanation": "Incorrect. Antimuscarinic effects include dry mouth, urinary retention, and confusion, but not typically impulse control disorders."
            },
            {
                "text": "Inhibition of monoamine oxidase type B",
                "explanation": "Incorrect. MAO-B inhibitors (selegiline) can cause insomnia or nausea, but impulse control disorders are predominantly associated with dopamine agonists."
            },
            {
                "text": "Direct stimulation of dopamine receptors",
                "explanation": "Correct. Ropinirole is a dopamine agonist that directly stimulates dopamine receptors. A known and serious class effect is Impulse Control Disorders (ICDs), manifesting as pathological gambling, hypersexuality, or compulsive shopping. This is due to stimulation of the mesolimbic reward pathways."
            },
            {
                "text": "Increased release of glutamate in the striatum",
                "explanation": "Incorrect. This mechanism is not related to ropinirole or the development of impulse control disorders."
            },
            {
                "text": "Blockade of NMDA glutamate receptors",
                "explanation": "Incorrect. This is the mechanism of action of Amantadine. While Amantadine can cause confusion and livedo reticularis, the specific impulse control issues described are classic for dopamine agonists."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Dopamine agonists (e.g., ropinirole, pramipexole) are strongly associated with impulse control disorders like pathological gambling and hypersexuality.",
        "pdfPage": 460,
        "pdfQuote": "Impulse control disorder"
    },
    {
        "id": 8,
        "category": "Neurology: Parkinson's Disease",
        "questionText": "A 70-year-old male with a 10-year history of Parkinson's disease has developed visual hallucinations. He sees small children playing in the corners of the room. The hallucinations are not frightening to him, but they are persistent. His neurologist wants to prescribe a medication to treat these hallucinations without worsening his parkinsonian motor symptoms. Which of the following is the most appropriate agent?",
        "options": [
            {
                "text": "Haloperidol",
                "explanation": "Incorrect. Haloperidol is a high-potency first-generation antipsychotic with strong D2 receptor blockade. It would significantly worsen his parkinsonism and is contraindicated."
            },
            {
                "text": "Risperidone",
                "explanation": "Incorrect. While an atypical antipsychotic, Risperidone has high D2 affinity at therapeutic doses and frequently causes extrapyramidal side effects, worsening parkinsonism."
            },
            {
                "text": "Quetiapine",
                "explanation": "Correct. Quetiapine (Seroquel) and Clozapine are the preferred antipsychotics for PD psychosis because they have low affinity for D2 receptors in the striatum and do not significantly worsen motor symptoms. Pimavanserin is also FDA approved specifically for this indication."
            },
            {
                "text": "Olanzapine",
                "explanation": "Incorrect. Olanzapine, similar to Risperidone, carries a risk of worsening motor symptoms in PD patients compared to Quetiapine or Clozapine."
            },
            {
                "text": "Chlorpromazine",
                "explanation": "Incorrect. Chlorpromazine is a low-potency first-generation antipsychotic but still blocks D2 receptors enough to worsen parkinsonism."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Quetiapine and Clozapine are the preferred antipsychotics for treating psychosis in Parkinson's disease as they least affect motor function. Pimavanserin is the only FDA-approved drug for PD psychosis.",
        "pdfPage": 250,
        "pdfQuote": "Safe to use... Quetiapine"
    },
    {
        "id": 9,
        "category": "Neurology: Diagnosis",
        "questionText": "A 60-year-old female presents with a hand tremor. She is unsure if it is Parkinson's disease or Essential Tremor. The physician orders a DaTscan (Dopamine Transporter Scan). If this patient has idiopathic Parkinson's disease, what would the scan demonstrate?",
        "options": [
            {
                "text": "Increased uptake in the occipital lobes",
                "explanation": "Incorrect. This is not a relevant finding for a DaTscan."
            },
            {
                "text": "Normal uptake in the striatum appearing as a 'comma' shape",
                "explanation": "Incorrect. This would be the finding in a normal patient or someone with Essential Tremor. The preservation of the 'comma' shape indicates intact dopaminergic terminals."
            },
            {
                "text": "Reduced uptake in the striatum, particularly the putamen",
                "explanation": "Correct. In Parkinson's disease, there is a loss of presynaptic dopaminergic nerve terminals. This results in reduced uptake of the radiotracer in the striatum (caudate and putamen), often turning the normal 'comma' shape into a 'period' shape due to preferential loss in the putamen."
            },
            {
                "text": "Amyloid plaque deposition in the frontal cortex",
                "explanation": "Incorrect. This would be seen on an Amyloid PET scan for Alzheimer's disease, not a DaTscan."
            },
            {
                "text": "Hypometabolism in the temporal lobes",
                "explanation": "Incorrect. This would be a finding on an FDG-PET scan, characteristic of Alzheimer's or other dementias, not specific to the dopamine transporter system."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "A DaTscan helps differentiate Parkinson's disease (reduced dopamine transporter uptake) from Essential Tremor (normal uptake).",
        "pdfPage": 381,
        "pdfQuote": "Dopamine transporter single photon emission CT"
    },
    {
        "id": 10,
        "category": "Neurology: Atypical Parkinsonism",
        "questionText": "A 75-year-old male presents with memory loss, gait instability, and urinary incontinence. His family describes his gait as 'magnetic', as if his feet are stuck to the floor. A high-volume lumbar puncture is performed, and his walking significantly improves afterward. What is the definitive treatment for this condition?",
        "options": [
            {
                "text": "Levodopa/Carbidopa",
                "explanation": "Incorrect. While NPH can mimic parkinsonian gait, it does not respond primarily to levodopa. The 'Wet, Wobbly, Wacky' triad and response to LP point to NPH."
            },
            {
                "text": "Deep Brain Stimulation",
                "explanation": "Incorrect. DBS is a treatment for advanced idiopathic Parkinson's disease or essential tremor, not NPH."
            },
            {
                "text": "Ventriculoperitoneal (VP) Shunt",
                "explanation": "Correct. This patient has Normal Pressure Hydrocephalus (NPH), characterized by the triad of incontinence, magnetic gait, and dementia. The improvement after LP (removing CSF) confirms the diagnosis, and the treatment is shunting to permanently drain excess CSF."
            },
            {
                "text": "Cholinesterase inhibitors",
                "explanation": "Incorrect. These are used for Alzheimer's dementia or Lewy Body Dementia but do not treat the underlying hydrocephalus of NPH."
            },
            {
                "text": "Botulinum toxin injections",
                "explanation": "Incorrect. This might be used for focal dystonia or spasticity but has no role in treating NPH."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Normal Pressure Hydrocephalus (NPH) presents with gait disturbance ('magnetic'), dementia, and urinary incontinence. It is treated with a VP shunt.",
        "pdfPage": 360,
        "pdfQuote": "Shunt... Ventricular peritoneal"
    },
    {
        "id": 11,
        "category": "Neurology: Parkinson's Disease",
        "questionText": "A 58-year-old male with Parkinson's disease has been managed on levodopa. He recently began experiencing involuntary, writhing movements of his arms and head about an hour after taking his medication. These movements are bothersome to him. Which term best describes this phenomenon?",
        "options": [
            {
                "text": "Dystonia",
                "explanation": "Incorrect. Dystonia describes sustained muscle contractions causing twisting or abnormal postures. While seen in PD, the 'writhing' movements peaking with medication dose are classically dyskinesias."
            },
            {
                "text": "Akinesia",
                "explanation": "Incorrect. Akinesia is the lack of movement, an 'off' symptom. This patient has *excessive* movement."
            },
            {
                "text": "Peak-dose Dyskinesia",
                "explanation": "Correct. Dyskinesias are involuntary, dance-like (choreiform) or writhing movements that typically occur when levodopa levels are at their peak (high dopamine state). They are a common complication of long-term levodopa therapy."
            },
            {
                "text": "Myoclonus",
                "explanation": "Incorrect. Myoclonus refers to sudden, brief, shock-like muscle jerks. It is not the writhing movement described."
            },
            {
                "text": "Resting Tremor",
                "explanation": "Incorrect. Resting tremor is a feature of untreated or under-treated PD. These movements are occurring *after* medication, suggesting a complication of treatment."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Levodopa-induced dyskinesias are involuntary writhing movements that typically occur at the peak of the medication's effect.",
        "pdfPage": 489,
        "pdfQuote": "Extended release amantadine... dyskinesia"
    },
    {
        "id": 12,
        "category": "Pharmacology: Parkinson's Disease",
        "questionText": "A 45-year-old patient with Parkinson's disease is being started on a monoamine oxidase type B (MAO-B) inhibitor as monotherapy. Which of the following drugs belongs to this class?",
        "options": [
            {
                "text": "Entacapone",
                "explanation": "Incorrect. Entacapone is a COMT inhibitor."
            },
            {
                "text": "Rasagiline",
                "explanation": "Correct. Rasagiline and Selegiline are MAO-B inhibitors. They prevent the breakdown of dopamine in the brain and can be used as monotherapy in early disease or adjuncts in late disease."
            },
            {
                "text": "Ropinirole",
                "explanation": "Incorrect. Ropinirole is a dopamine agonist."
            },
            {
                "text": "Amantadine",
                "explanation": "Incorrect. Amantadine is an antiviral with NMDA antagonist and dopamine releasing properties."
            },
            {
                "text": "Benztropine",
                "explanation": "Incorrect. Benztropine is an anticholinergic drug."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Rasagiline and Selegiline are MAO-B inhibitors used in Parkinson's disease to effectively increase dopamine levels.",
        "pdfPage": 437,
        "pdfQuote": "Seleguline, risaguline... MAOIB"
    },
    {
        "id": 13,
        "category": "Neurology: Atypical Parkinsonism",
        "questionText": "A 70-year-old male is brought in by his daughter. She reports that he has been having visual hallucinations of small animals for the past year. Around the same time, he developed a shuffle in his walk and some hand tremors. He also has days where he seems fully alert and other days where he is very confused and sleepy. Which feature in this vignette most strongly supports a diagnosis of Dementia with Lewy Bodies (DLB) rather than idiopathic Parkinson's Disease?",
        "options": [
            {
                "text": "The presence of a shuffle in his walk",
                "explanation": "Incorrect. This is a standard parkinsonian motor sign found in both PD and DLB."
            },
            {
                "text": "The onset of dementia/hallucinations within one year of motor symptoms",
                "explanation": "Correct. The '1-year rule' is a key clinical pearl. If dementia and hallucinations occur within 1 year of the onset of motor symptoms (or before), the diagnosis is Dementia with Lewy Bodies. In idiopathic PD, dementia typically occurs much later (>10 years)."
            },
            {
                "text": "The presence of hand tremors",
                "explanation": "Incorrect. Tremors can occur in both, though resting tremor is more classic for PD."
            },
            {
                "text": "The patient's age",
                "explanation": "Incorrect. Both conditions are common in the elderly."
            },
            {
                "text": "The presence of REM sleep behavior disorder",
                "explanation": "Incorrect. RBD is a strong prodromal feature for all synucleinopathies (PD, DLB, MSA) and does not distinguish between them."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "In Dementia with Lewy Bodies (DLB), cognitive impairment and hallucinations occur early (within 1 year of motor onset), whereas in PD, they occur late.",
        "pdfPage": 304,
        "pdfQuote": "Dementia is common in the first year"
    },
    {
        "id": 14,
        "category": "Pharmacology: Parkinson's Disease",
        "questionText": "A 66-year-old female with Parkinson's disease is bothered by a severe resting tremor that has not fully responded to levodopa. She is cognitively intact. Her physician prescribes trihexyphenidyl. What is the mechanism of action of this drug?",
        "options": [
            {
                "text": "Antagonism of adenosine A2A receptors",
                "explanation": "Incorrect. This describes Istradefylline."
            },
            {
                "text": "Inhibition of DOPA decarboxylase",
                "explanation": "Incorrect. This is the mechanism of Carbidopa."
            },
            {
                "text": "Muscarinic acetylcholine receptor antagonism",
                "explanation": "Correct. Trihexyphenidyl and Benztropine are anticholinergics (muscarinic antagonists). They restore the balance between dopamine (low in PD) and acetylcholine (relative excess) in the striatum. They are particularly effective for tremor but must be used with caution in the elderly due to cognitive side effects."
            },
            {
                "text": "Agonism of dopamine D2 receptors",
                "explanation": "Incorrect. This describes dopamine agonists like Pramipexole."
            },
            {
                "text": "Inhibition of catechol-O-methyltransferase",
                "explanation": "Incorrect. This describes Entacapone."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Anticholinergics like trihexyphenidyl are useful for tremor-predominant Parkinson's but can cause confusion and anticholinergic side effects.",
        "pdfPage": 482,
        "pdfQuote": "Trihexafenadil... anticholinergic drug"
    },
    {
        "id": 15,
        "category": "Neurology: Pathophysiology",
        "questionText": "An autopsy is performed on a 78-year-old male who died with end-stage Parkinson's disease. Examination of the brainstem reveals eosinophilic intracytoplasmic inclusions within the pigmented neurons. Which protein is the primary component of these inclusions?",
        "options": [
            {
                "text": "Tau",
                "explanation": "Incorrect. Tau inclusions are seen in Alzheimer's (tangles), PSP, and Corticobasal Degeneration (tauopathies)."
            },
            {
                "text": "Beta-amyloid",
                "explanation": "Incorrect. Beta-amyloid plaques are extracellular deposits seen in Alzheimer's disease."
            },
            {
                "text": "Alpha-synuclein",
                "explanation": "Correct. The inclusions described are Lewy bodies, the pathological hallmark of Parkinson's disease and Dementia with Lewy Bodies. They are composed primarily of aggregated alpha-synuclein."
            },
            {
                "text": "TDP-43",
                "explanation": "Incorrect. TDP-43 inclusions are seen in Frontotemporal Dementia (FTD) and ALS."
            },
            {
                "text": "Huntingtin",
                "explanation": "Incorrect. This protein is associated with Huntington's disease."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Lewy bodies are eosinophilic cytoplasmic inclusions found in Parkinson's disease neurons and are composed of alpha-synuclein.",
        "pdfPage": 66,
        "pdfQuote": "Composed of alpha-synuclein"
    },
    {
        "id": 16,
        "category": "Neurology: Atypical Parkinsonism",
        "questionText": "A 68-year-old female presents with an asymmetric rigid-akinetic syndrome. Her left hand seems to have a 'mind of its own,' often grasping objects without her intent, which she describes as an 'alien hand.' She also has significant difficulty performing complex motor tasks (apraxia) despite having normal strength. This clinical presentation is most consistent with:",
        "options": [
            {
                "text": "Dementia with Lewy Bodies",
                "explanation": "Incorrect. DLB presents with hallucinations and fluctuations, not alien limb phenomenon."
            },
            {
                "text": "Multiple System Atrophy",
                "explanation": "Incorrect. MSA presents with autonomic failure and cerebellar signs."
            },
            {
                "text": "Corticobasal Degeneration (CBD)",
                "explanation": "Correct. CBD is an atypical parkinsonism characterized by marked asymmetry, cortical signs (apraxia, alien limb phenomenon, cortical sensory loss), and rigidity/dystonia. It does not respond well to levodopa."
            },
            {
                "text": "Progressive Supranuclear Palsy",
                "explanation": "Incorrect. PSP presents with vertical gaze palsy and axial rigidity/falls."
            },
            {
                "text": "Vascular Parkinsonism",
                "explanation": "Incorrect. This presents with lower body parkinsonism and gait issues."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Corticobasal Degeneration (CBD) is associated with the 'Alien Limb' phenomenon and asymmetric cortical signs like apraxia.",
        "pdfPage": 347,
        "pdfQuote": "Alien limb phenomenon"
    },
    {
        "id": 17,
        "category": "Pharmacology: Parkinson's Disease",
        "questionText": "A patient taking carbidopa-levodopa for Parkinson's disease complains of nausea and vomiting shortly after taking his morning dose. Which mechanism explains how carbidopa helps reduce this side effect?",
        "options": [
            {
                "text": "It blocks dopamine receptors in the Chemoreceptor Trigger Zone (CTZ).",
                "explanation": "Incorrect. While blocking D2 receptors in the CTZ (like metoclopramide) reduces nausea, carbidopa does not block receptors. It inhibits an enzyme."
            },
            {
                "text": "It inhibits DOPA decarboxylase in the peripheral nervous system.",
                "explanation": "Correct. Levodopa is converted to dopamine by DOPA decarboxylase. Dopamine in the periphery activates the CTZ (outside the BBB) causing nausea. Carbidopa inhibits peripheral DOPA decarboxylase, preventing this conversion and ensuring more Levodopa reaches the brain while reducing peripheral side effects like nausea."
            },
            {
                "text": "It increases the absorption of levodopa from the stomach.",
                "explanation": "Incorrect. Carbidopa does not directly affect gastric absorption mechanisms."
            },
            {
                "text": "It inhibits DOPA decarboxylase in the central nervous system.",
                "explanation": "Incorrect. Carbidopa does not cross the blood-brain barrier. If it did, it would prevent Levodopa from converting to dopamine in the brain, negating therapeutic effect."
            },
            {
                "text": "It acts as a prokinetic agent to speed gastric emptying.",
                "explanation": "Incorrect. It does not have prokinetic properties."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Carbidopa inhibits peripheral DOPA decarboxylase, reducing peripheral conversion of Levodopa to Dopamine, thereby decreasing nausea and increasing brain availability.",
        "pdfPage": 419,
        "pdfQuote": "Prevents the peripheral breakdown"
    },
    {
        "id": 18,
        "category": "Neurology: Treatment",
        "questionText": "A 62-year-old male with Parkinson's disease has developed severe levodopa-induced dyskinesias that are limiting his quality of life. His neurologist decides to add a medication specifically to reduce these dyskinesias. This medication, which is also an antiviral, works primarily by:",
        "options": [
            {
                "text": "Stimulating D3 receptors",
                "explanation": "Incorrect. This is a property of some dopamine agonists."
            },
            {
                "text": "Inhibiting NMDA glutamate receptors",
                "explanation": "Correct. Amantadine is an NMDA receptor antagonist. While originally an antiviral, its ability to reduce levodopa-induced dyskinesias is attributed to its anti-glutamatergic effects at the NMDA receptor. It comes in an extended-release form (Gocovri) for this indication."
            },
            {
                "text": "Inhibiting Acetylcholinesterase",
                "explanation": "Incorrect. This is the mechanism of Donepezil/Rivastigmine."
            },
            {
                "text": "Blocking sodium channels",
                "explanation": "Incorrect. This is the mechanism of many anti-seizure drugs (e.g., Phenytoin)."
            },
            {
                "text": "Inhibiting COMT",
                "explanation": "Incorrect. COMT inhibitors extend Levodopa action but can sometimes *worsen* dyskinesia by increasing peak levels."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Amantadine is an NMDA receptor antagonist used to treat levodopa-induced dyskinesias.",
        "pdfPage": 487,
        "pdfQuote": "Amantadine... extended release"
    },
    {
        "id": 19,
        "category": "Neurology: Clinical Presentation",
        "questionText": "A 60-year-old female is diagnosed with Parkinson's disease. Which of the following gait abnormalities is most characteristic of this condition?",
        "options": [
            {
                "text": "Wide-based, ataxic gait",
                "explanation": "Incorrect. This is characteristic of cerebellar disorders or alcohol intoxication. PD gait is typically narrow-based."
            },
            {
                "text": "High-steppage gait",
                "explanation": "Incorrect. This is seen in foot drop (peroneal neuropathy)."
            },
            {
                "text": "Festinating gait",
                "explanation": "Correct. The classic PD gait involves short, shuffling steps (marche \u00e0 petits pas) with a tendency to accelerate (festination) as if chasing one's center of gravity. There is also reduced arm swing and en bloc turning."
            },
            {
                "text": "Scissoring gait",
                "explanation": "Incorrect. This is characteristic of spastic diplegia (e.g., cerebral palsy)."
            },
            {
                "text": "Waddling gait",
                "explanation": "Incorrect. This is seen in proximal muscle weakness (myopathy)."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Festinating gait (short, accelerating steps) and reduced arm swing are hallmark gait abnormalities in Parkinson's disease.",
        "pdfPage": 195,
        "pdfQuote": "Festinating gait"
    },
    {
        "id": 20,
        "category": "Neurology: Non-Motor Symptoms",
        "questionText": "A 70-year-old male with Parkinson's disease complains of difficulty sleeping. His wife reports that he frequently yells, punches, and kicks in his sleep, sometimes falling out of bed. He has no memory of these events upon waking. Which of the following is the most likely diagnosis?",
        "options": [
            {
                "text": "Obstructive Sleep Apnea",
                "explanation": "Incorrect. OSA presents with snoring and daytime sleepiness, not violent dream enactment."
            },
            {
                "text": "Narcolepsy",
                "explanation": "Incorrect. Narcolepsy presents with sleep attacks and cataplexy."
            },
            {
                "text": "REM Sleep Behavior Disorder (RBD)",
                "explanation": "Correct. RBD prevents the normal atonia (muscle paralysis) during REM sleep, allowing patients to 'act out' their dreams. It is highly associated with synucleinopathies (PD, DLB, MSA) and can precede motor symptoms by years."
            },
            {
                "text": "Restless Leg Syndrome",
                "explanation": "Incorrect. RLS causes an urge to move the legs while awake/resting, typically in the evening, relieving discomfort. It does not involve acting out dreams."
            },
            {
                "text": "Night Terrors",
                "explanation": "Incorrect. Night terrors occur in non-REM sleep and are more common in children. Patients appear terrified but are unresponsive and have no memory of the event."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "REM Sleep Behavior Disorder (acting out dreams) is a common non-motor symptom of Parkinson's disease and other synucleinopathies.",
        "pdfPage": 234,
        "pdfQuote": "REM sleep behavior disorder"
    }
];

window.Test_L57 = Test_L57;
