
// Lecture 61: Gait and Movement (Focus on Parkinson's Disease Assessment)
// Content Source: pdfs/Lecture # 61. A. Leder, D.O. (PPT - updated 1.29.26).pdf

const Test_L61 = [
    {
        "id": 1,
        "category": "Neurology: Parkinson's Disease",
        "questionText": "A 68-year-old male presents to the clinic with a 6-month history of progressive difficulty walking and stiffness in his right arm. His wife reports that he has been 'acting out his dreams' and has fallen out of bed twice in the last month. He also complains of chronic constipation. On physical examination, he has a resting tremor in the right hand and decreased right arm swing while walking. Which of the following prodromal symptoms most strongly supports a diagnosis of Parkinson's disease in this patient?",
        "options": [
            {
                "text": "Chronic constipation",
                "explanation": "Incorrect. While chronic constipation is a common autonomic symptom in PD (often preceding motor symptoms), REM sleep behavior disorder is a more specific and strong predictor of synucleinopathies.",
                "lectureSource": undefined
            },
            {
                "text": "Orthostatic hypotension",
                "explanation": "Incorrect. This is a feature of autonomic dysfunction seen in PD but is more prominent and early in Multiple System Atrophy (MSA). It is not the strongest prodromal marker compared to RBD.",
                "lectureSource": undefined
            },
            {
                "text": "REM sleep behavior disorder",
                "explanation": "Correct. REM sleep behavior disorder (acting out dreams) is a strong prodromal marker for alpha-synucleinopathies like Parkinson's disease and can precede motor symptoms by years.",
                "lectureSource": undefined
            },
            {
                "text": "Resting tremor",
                "explanation": "Incorrect. Resting tremor is a cardinal *motor* sign of clinical PD, not a prodromal symptom (which occurs before motor onset). This diagnosis is already clinically apparent.",
                "lectureSource": undefined
            },
            {
                "text": "Decreased arm swing",
                "explanation": "Incorrect. This is an early *motor* sign of PD, often the first sign noticed by family, but it is not a prodromal symptom (pre-motor).",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "REM sleep behavior disorder and anosmia are key prodromal symptoms that can precede the motor manifestations of Parkinson's disease by years.",
        "lectureSource": undefined
    },
    {
        "id": 2,
        "category": "Neurology: Movement Disorders",
        "questionText": "A 55-year-old female presents with a 2-year history of hand tremor. She notes the tremor is worse when she is drinking from a cup or writing. She denies any resting tremor or slowness of movement. Her father had a similar tremor. Physical exam reveals a high-frequency postural tremor in both hands but normal tone and gait. Which of the following is the most likely diagnosis?",
        "options": [
            {
                "text": "Parkinson's Disease",
                "explanation": "Incorrect. PD typically presents with a *resting* tremor (pill-rolling) that improves with action. This patient has an action/postural tremor.",
                "lectureSource": undefined
            },
            {
                "text": "Cerebellar Ataxia",
                "explanation": "Incorrect. While cerebellar disease causes an intention tremor (worse at target), it is usually associated with ataxia, dysmetria, and gait instability, which are absent here.",
                "lectureSource": undefined
            },
            {
                "text": "Physiologic Tremor",
                "explanation": "Incorrect. Physiologic tremor is low amplitude and usually invisible unless exacerbated by stress/caffeine. A 2-year progressive tremor affecting function is pathologic.",
                "lectureSource": undefined
            },
            {
                "text": "Essential Tremor",
                "explanation": "Correct. Essential tremor is characterized by a postural and kinetic (action) tremor, often with a family history (autosomal dominant), and lacks the bradykinesia/rigidity of PD.",
                "lectureSource": undefined
            },
            {
                "text": "Drug-induced Parkinsonism",
                "explanation": "Incorrect. This would present with parkinsonian features (rigidity, bradykinesia) due to dopamine blockade, not an isolated action tremor.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "The tremor of Parkinson's disease is a RESTING tremor (3-5 Hz), whereas Essential Tremor is a POSTURAL/ACTION tremor.",
        "lectureSource": undefined
    },
    {
        "id": 3,
        "category": "Pharmacology: Adverse Effects",
        "questionText": "A 72-year-old male with a history of schizophrenia is brought to the clinic for evaluation of a shuffling gait and stiffness. He has been stable on his psychiatric medication for 15 years. Physical exam reveals generalized rigidity and bradykinesia without tremor. Review of his medication list reveals a long-term prescription for haloperidol. Which mechanism explains his motor symptoms?",
        "options": [
            {
                "text": "Excessive cholinergic activity in the cortex",
                "explanation": "Incorrect. While relative cholinergic excess in the striatum contributes to symptoms (hence anticholinergic treatment), the *primary* cause here is dopamine receptor blockade.",
                "lectureSource": undefined
            },
            {
                "text": "Alpha-synuclein aggregation in the substantia nigra",
                "explanation": "Incorrect. This is the pathophysiology of idiopathic Parkinson's disease. While possible, the history of long-term antipsychotic use makes drug-induced more likely.",
                "lectureSource": undefined
            },
            {
                "text": "Depletion of presynaptic dopamine",
                "explanation": "Incorrect. This is the mechanism of tetrabenazine or reserpine. Haloperidol blocks receptors.",
                "lectureSource": undefined
            },
            {
                "text": "Degeneration of GABAergic neurons in the striatum",
                "explanation": "Incorrect. This is the pathology of Huntington's disease.",
                "lectureSource": undefined
            },
            {
                "text": "Blockade of postsynaptic dopamine D2 receptors",
                "explanation": "Correct. Haloperidol is a typical antipsychotic that blocks D2 receptors in the striatum, mimicking the dopamine depletion of Parkinson's disease (Drug-induced Parkinsonism).",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 4,
        "clinicalPearl": "Drug-induced parkinsonism is a common mimic of PD caused by dopamine blockers (antipsychotics, antiemetics like metoclopramide).",
        "lectureSource": undefined
    },
    {
        "id": 4,
        "category": "Neurology: Genetics",
        "questionText": "A 45-year-old male of Ashkenazi Jewish descent presents with early-onset bradykinesia and resting tremor. Genetic testing is performed due to his young age and ethnicity. Which gene mutation is most commonly associated with Parkinson's disease in this specific population?",
        "options": [
            {
                "text": "APOE4",
                "explanation": "Incorrect. APOE4 is a major risk factor allele for sporadic Alzheimer's Disease.",
                "lectureSource": undefined
            },
            {
                "text": "SOD1",
                "explanation": "Incorrect. SOD1 mutations are associated with Amyotrophic Lateral Sclerosis (ALS).",
                "lectureSource": undefined
            },
            {
                "text": "ATP7B",
                "explanation": "Incorrect. ATP7B mutation causes Wilson's Disease (copper accumulation).",
                "lectureSource": undefined
            },
            {
                "text": "HTT",
                "explanation": "Incorrect. The HTT gene mutation (CAG repeats) causes Huntington's Disease.",
                "lectureSource": undefined
            },
            {
                "text": "LRRK2",
                "explanation": "Correct. LRRK2 and GBA1 mutations are the most common genetic causes of PD, particularly in the Ashkenazi Jewish population.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 4,
        "clinicalPearl": "LRRK2 and GBA1 are the most common genetic mutations associated with Parkinson's disease, especially in Ashkenazi Jewish populations.",
        "lectureSource": undefined
    },
    {
        "id": 5,
        "category": "Neurology: Physical Exam",
        "questionText": "During the physical examination of a patient with suspected Parkinson's disease, you passively move the patient's wrist and elbow. You feel a rhythmic, ratchety resistance throughout the range of motion. What is the specific term for this finding?",
        "options": [
            {
                "text": "Cogwheeling",
                "explanation": "Correct. Cogwheel rigidity is the superposition of tremor on rigidity, creating a ratchety or jerky sensation during passive movement.",
                "lectureSource": undefined
            },
            {
                "text": "Paratonia",
                "explanation": "Incorrect. Paratonia (Gegenhalten) is velocity-dependent resistance where the patient appears to actively resist movement, often seen in frontal lobe dementia.",
                "lectureSource": undefined
            },
            {
                "text": "Hypotonia",
                "explanation": "Incorrect. Hypotonia is decreased tone, often seen in cerebellar disease or lower motor neuron lesions.",
                "lectureSource": undefined
            },
            {
                "text": "Spasticity",
                "explanation": "Incorrect. Spasticity is velocity-dependent resistance ('clasp-knife') seen in upper motor neuron lesions.",
                "lectureSource": undefined
            },
            {
                "text": "Lead-pipe rigidity",
                "explanation": "Incorrect. Lead-pipe rigidity is smooth, constant resistance throughout the range of motion. The finding described here is ratchety.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Cogwheel rigidity is a classic sign of Parkinson's disease, representing a combination of underlying rigidity and tremor.",
        "lectureSource": undefined
    },
    {
        "id": 6,
        "category": "Neurology: Environmental Exposures",
        "questionText": "A 60-year-old farmer presents with symptoms of Parkinsonism. He has no family history of the disease. He has worked for 40 years applying herbicides and pesticides to crops. Exposure to which of the following agents is a known risk factor for the development of Parkinson's disease?",
        "options": [
            {
                "text": "Benzene",
                "explanation": "Incorrect. Benzene exposure is linked to leukemia and aplastic anemia.",
                "lectureSource": undefined
            },
            {
                "text": "Radon",
                "explanation": "Incorrect. Radon gas is a cause of lung cancer.",
                "lectureSource": undefined
            },
            {
                "text": "Silica dust",
                "explanation": "Incorrect. Silica exposure causes silicosis (lung fibrosis).",
                "lectureSource": undefined
            },
            {
                "text": "Rotenone",
                "explanation": "Correct. Pesticides like rotenone and paraquat are known mitochondrial toxins that inhibit Complex I and are linked to an increased risk of Parkinson's disease.",
                "lectureSource": undefined
            },
            {
                "text": "Asbestos",
                "explanation": "Incorrect. Asbestos exposure causes mesothelioma and lung disease.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Exposure to pesticides such as rotenone and paraquat is an environmental risk factor for developing Parkinson's disease.",
        "lectureSource": undefined
    },
    {
        "id": 7,
        "category": "Neurology: Facial Signs",
        "questionText": "You are observing a 70-year-old male who is sitting in the exam room. You note that he rarely blinks and his face appears expressionless, staring straight ahead with a fixed gaze. When he speaks, his voice is soft and monotone. Which term best describes this facial finding?",
        "options": [
            {
                "text": "Facial Myokymia",
                "explanation": "Incorrect. Facial myokymia involves involuntary rippling of facial muscles.",
                "lectureSource": undefined
            },
            {
                "text": "Ptosis",
                "explanation": "Incorrect. Ptosis is drooping of the upper eyelid.",
                "lectureSource": undefined
            },
            {
                "text": "Hypomimia",
                "explanation": "Correct. Hypomimia, or 'masked facies,' is a reduction in facial expression and blinking frequency, a cardinal non-motor sign of Parkinson's disease.",
                "lectureSource": undefined
            },
            {
                "text": "Bell's Palsy",
                "explanation": "Incorrect. Bell's Palsy is a unilateral facial paralysis (CN VII).",
                "lectureSource": undefined
            },
            {
                "text": "Proptosis",
                "explanation": "Incorrect. Proptosis is bulging of the eyes (e.g., Graves' disease).",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Hypomimia (masked facies) and decreased blink rate are classic signs of Parkinson's disease reflecting bradykinesia of facial muscles.",
        "lectureSource": undefined
    },
    {
        "id": 8,
        "category": "Neurology: Gait",
        "questionText": "A patient with Parkinson's disease is asked to walk down the hallway. You notice that when he attempts to turn around to return to you, he takes multiple small, choppy steps instead of a smooth pivot. This gait abnormality is known as:",
        "options": [
            {
                "text": "En bloc turning",
                "explanation": "Correct. En bloc turning is turning 'as a block,' requiring multiple small steps to pivot the body, characteristic of the axial rigidity in PD.",
                "lectureSource": undefined
            },
            {
                "text": "Steppage gait",
                "explanation": "Incorrect. Steppage gait (foot drop) involves lifting the leg high to clear the toes, seen in peroneal neuropathy.",
                "lectureSource": undefined
            },
            {
                "text": "Antalgic gait",
                "explanation": "Incorrect. Antalgic gait is a limp adopted to avoid pain on weight-bearing.",
                "lectureSource": undefined
            },
            {
                "text": "Trendelenburg gait",
                "explanation": "Incorrect. Trendelenburg gait involves hip drop due to gluteus medius weakness.",
                "lectureSource": undefined
            },
            {
                "text": "Ataxic turning",
                "explanation": "Incorrect. Ataxia involves uncoordinated, wide-based stumbling.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "En bloc turning (turning rigid like a statue) and shuffling steps are hallmark gait abnormalities in Parkinson's disease.",
        "lectureSource": undefined
    },
    {
        "id": 9,
        "category": "Neurology: History Taking",
        "questionText": "A 65-year-old female presents for evaluation of tremors. In taking her history to differentiate Parkinson's disease from other conditions, which specific question regarding her sense of smell is most relevant?",
        "options": [
            {
                "text": "Do you smell burnt rubber?",
                "explanation": "Incorrect. Phantosmia (hallucinated smells) is often a seizure aura (uncinate fits).",
                "lectureSource": undefined
            },
            {
                "text": "Does food taste metallic?",
                "explanation": "Incorrect. Dysgeusia is a side effect of medications (e.g., metronidazole, ACE inhibitors) or zinc deficiency.",
                "lectureSource": undefined
            },
            {
                "text": "Do odors trigger headaches?",
                "explanation": "Incorrect. This suggests osmophobia, associated with migraines.",
                "lectureSource": undefined
            },
            {
                "text": "Have you lost your sense of smell?",
                "explanation": "Correct. Anosmia (loss of smell) is a very common and early non-motor symptom of Parkinson's disease, often preceding motor signs.",
                "lectureSource": undefined
            },
            {
                "text": "Is your sense of smell heightened?",
                "explanation": "Incorrect. Hyperosmia is implicated in migraines or pregnancy, not PD.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Anosmia is a supportive criteria for Parkinson's disease diagnosis and can be an early prodromal feature.",
        "lectureSource": undefined
    },
    {
        "id": 10,
        "category": "Neurology: Differential Diagnosis",
        "questionText": "A 75-year-old male presents with falls and gait difficulty. Examination reveals vertical gaze palsy (inability to look up or down), axial rigidity which is greater than appendicular rigidity, and frequent backward falls. He has mild cognitive changes but no resting tremor. This presentation is most suggestive of:",
        "options": [
            {
                "text": "Essential Tremor",
                "explanation": "Incorrect. ET is an action tremor disorder without significant gait or gaze abnormalities.",
                "lectureSource": undefined
            },
            {
                "text": "Corticobasal Degeneration",
                "explanation": "Incorrect. CBD presents with asymmetric limb rigidity, alien limb phenomenon, and apraxia.",
                "lectureSource": undefined
            },
            {
                "text": "Progressive Supranuclear Palsy (PSP)",
                "explanation": "Correct. PSP is a 'Parkinson-Plus' syndrome characterized by vertical gaze palsy, early falls (especially backwards), and axial rigidity.",
                "lectureSource": undefined
            },
            {
                "text": "Idiopathic Parkinson's Disease",
                "explanation": "Incorrect. PD typically presents with resting tremor, appendicular rigidity, and better response to levodopa. Vertical gaze palsy is NOT a feature.",
                "lectureSource": undefined
            },
            {
                "text": "Multiple System Atrophy (MSA)",
                "explanation": "Incorrect. MSA features prominent autonomic failure (orthostasis, incontinence) and cerebellar or parkinsonian signs.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Vertical gaze limitation (supranuclear ophthalmoplegia) and early falls are the hallmarks of Progressive Supranuclear Palsy (PSP), a Parkinson mimic.",
        "lectureSource": undefined
    },
    {
        "id": 11,
        "category": "Pharmacology: Side Effects",
        "questionText": "A 65-year-old male with Parkinson's disease has been treated with Dopamine Agonists (e.g., ropinirole or pramipexole). He returns to the clinic for a follow-up. His wife is distressed and pulls you aside to mention a new, concerning behavior. Which of the following side effects is uniquely associated with this class of medications?",
        "options": [
            {
                "text": "Hypertensive crisis",
                "explanation": "Incorrect. This is associated with MAO inhibitors and tyramine.",
                "lectureSource": undefined
            },
            {
                "text": "Impulse control disorders (Gambling, Hypersexuality)",
                "explanation": "Correct. Dopamine agonists are strongly linked to impulse control disorders, including pathological gambling, compulsive shopping, and hypersexuality.",
                "lectureSource": undefined
            },
            {
                "text": "Pulmonary fibrosis",
                "explanation": "Incorrect. This is a side effect of amiodarone, bleomycin, or older ergoline agonists (bromocriptine - rare now), but impulse control is the classic board association for modern agonists.",
                "lectureSource": undefined
            },
            {
                "text": "Gingival hyperplasia",
                "explanation": "Incorrect. This is a side effect of phenytoin or calcium channel blockers.",
                "lectureSource": undefined
            },
            {
                "text": "Cholestatic jaundice",
                "explanation": "Incorrect. Associated with drugs like erythromycin or chlorpromazine.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Dopamine agonists (pramipexole, ropinirole) can cause impulse control disorders (gambling, sex, shopping) and sudden sleep attacks.",
        "lectureSource": undefined
    },
    {
        "id": 12,
        "category": "Neurology: Diagnosis",
        "questionText": "A 70-year-old male presents with suspected Parkinson's disease. His symptoms are subtle and the diagnosis is equivocal. Which specific nuclear medicine imaging study can be used to visualize the density of dopamine transporters in the striatum to aid in diagnosis?",
        "options": [
            {
                "text": "MRI of the Brain",
                "explanation": "Incorrect. MRI is used to rule out *other* causes (stroke, tumor, hydrocephalus) but is often normal in early PD.",
                "lectureSource": undefined
            },
            {
                "text": "CT Angiography",
                "explanation": "Incorrect. Used for vascular pathology.",
                "lectureSource": undefined
            },
            {
                "text": "Lumbar Puncture",
                "explanation": "Incorrect. CSF analysis is research-based for synuclein but not a standard clinical imaging test.",
                "lectureSource": undefined
            },
            {
                "text": "DaTscan (Dopamine Transporter Scan)",
                "explanation": "Correct. A DaTscan uses Ioflupane I-123 to visualize dopamine transporters in the striatum. It shows reduced uptake in PD.",
                "lectureSource": undefined
            },
            {
                "text": "EEG",
                "explanation": "Incorrect. Measures electrical activity, used in seizures.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "A DaTscan (Dopamine Transporter scan) can distinguish essential tremor (normal scan) from Parkinsonian syndromes (reduced tracer uptake in striatum).",
        "lectureSource": undefined
    },
    {
        "id": 13,
        "category": "Neurology: Gait",
        "questionText": "A patient is observed walking. He initiates gait with difficulty. Once moving, his steps are short and shuffling. He appears to be 'chasing his center of gravity' with a forward-flexed posture. This gait pattern is best described as:",
        "options": [
            {
                "text": "Waddling gait",
                "explanation": "Incorrect. Waddling gait is due to proximal muscle weakness (myopathy).",
                "lectureSource": undefined
            },
            {
                "text": "Festinating gait",
                "explanation": "Correct. Festination is the involuntary acceleration of gait with short steps to prevent falling forward due to a stooped posture, classic for PD.",
                "lectureSource": undefined
            },
            {
                "text": "Scissoring gait",
                "explanation": "Incorrect. Scissoring gait involves legs crossing over, seen in spastic cerebral palsy or myelopathy.",
                "lectureSource": undefined
            },
            {
                "text": "Sensory ataxia",
                "explanation": "Incorrect. High-stepping, stamping gait due to loss of proprioception.",
                "lectureSource": undefined
            },
            {
                "text": "Magnetic gait",
                "explanation": "Incorrect. Magnetic gait (feet stuck to floor) is seen in Normal Pressure Hydrocephalus (NPH).",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Festinating gait (hastening steps) and stooped posture result from the loss of postural reflexes in Parkinson's disease.",
        "lectureSource": undefined
    },
    {
        "id": 14,
        "category": "Neurology: Mental Status",
        "questionText": "A 72-year-old female with long-standing Parkinson's disease is brought in by her family. They report she has become increasingly forgetful and has difficulty planning her day. On exam, she has slow processing speed. Which cognitive assessment tool is cited as 'best' for screening for cognitive impairment in this population?",
        "options": [
            {
                "text": "NIH Stroke Scale",
                "explanation": "Incorrect. For acute stroke neurological deficit quantification.",
                "lectureSource": undefined
            },
            {
                "text": "Montreal Cognitive Assessment (MoCA)",
                "explanation": "Correct. The MoCA is more sensitive than the MMSE for detecting mild cognitive impairment and executive dysfunction common in PD.",
                "lectureSource": undefined
            },
            {
                "text": "PHQ-9",
                "explanation": "Incorrect. PHQ-9 is a depression screen.",
                "lectureSource": undefined
            },
            {
                "text": "Glasgow Coma Scale (GCS)",
                "explanation": "Incorrect. GCS is for level of consciousness in trauma/acute settings.",
                "lectureSource": undefined
            },
            {
                "text": "CAM (Confusion Assessment Method)",
                "explanation": "Incorrect. For delirium assessment.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "The MoCA (Montreal Cognitive Assessment) is preferred over the MMSE for detecting the executive dysfunction and mild cognitive impairment in Parkinson's disease.",
        "lectureSource": undefined
    },
    {
        "id": 15,
        "category": "Neurology: OMM",
        "questionText": "In performing the osteopathic structural exam on a patient with Parkinson's gait, you look for somatic dysfunctions that may contribute to their ambulation difficulties. Which specific pelvic finding is listed as a key component of the gait exam in the lecture?",
        "options": [
            {
                "text": "Psoas syndrome",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            },
            {
                "text": "Innominate rotation",
                "explanation": "Incorrect. While relevant, sacral base unleveling is the specific finding highlighted in the gait exam slide.",
                "lectureSource": undefined
            },
            {
                "text": "Pubic shear",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            },
            {
                "text": "Sacral base unleveling",
                "explanation": "Correct. Sacral base unleveling (one hip lower than the other) affects leg length and mechanics, exacerbating gait issues.",
                "lectureSource": undefined
            },
            {
                "text": "L5 rotation",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Assessing for sacral base unleveling is a critical part of the osteopathic gait examination in patients with movement disorders.",
        "lectureSource": undefined
    },
    {
        "id": 16,
        "category": "Neurology: Genetics",
        "questionText": "A 35-year-old male presents with rest tremor and rigidity. He has a strong family history of Parkinson's disease. Genetic analysis reveals a mutation in the PRKN gene (Parkin). Based on this mutation, what is the primary cellular mechanism defective in his disease?",
        "options": [
            {
                "text": "Impaired protein degradation (ubiquitin-proteasome system)",
                "explanation": "Correct. Parkin is a ubiquitin ligase. Mutations result in failure to tag proteins for degradation, leading to toxic accumulation.",
                "lectureSource": undefined
            },
            {
                "text": "Dopamine synthesis failure",
                "explanation": "Incorrect. This is the result, not the primary genetic defect.",
                "lectureSource": undefined
            },
            {
                "text": "Alpha-synuclein aggregation",
                "explanation": "Incorrect. While synuclein accumulates, PRKN specifically codes for an E3 ubiquitin ligase involved in proteasomal degradation (mitophagy).",
                "lectureSource": undefined
            },
            {
                "text": "Mitochondrial oxidative phosphorylation defect",
                "explanation": "Incorrect. This is more associated with PINK1 or toxin exposures.",
                "lectureSource": undefined
            },
            {
                "text": "Tau protein hyperphosphorylation",
                "explanation": "Incorrect. This is the mechanism of Alzheimer's and PSP (tauopathies).",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "PRKN (Parkin) mutations lead to impaired protein degradation via the ubiquitin-proteasome system, a core mechanism in hereditary PD.",
        "lectureSource": undefined
    },
    {
        "id": 17,
        "category": "Neurology: Gait",
        "questionText": "A patient with Parkinson's disease experiences 'freezing of gait' (FOG). This phenomenon typically occurs in which specific situation?",
        "options": [
            {
                "text": "Turning or passing through a narrow doorway",
                "explanation": "Correct. Freezing often happens upon initiation of gait, turning (en bloc), or navigating narrow spaces (doorways, elevators).",
                "lectureSource": undefined
            },
            {
                "text": "Walking on an open beach",
                "explanation": "Incorrect. Visual open space usually helps.",
                "lectureSource": undefined
            },
            {
                "text": "Sleeping",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            },
            {
                "text": "Walking backward",
                "explanation": "Incorrect. Retropulsion is a balance issue, not 'freezing' per se.",
                "lectureSource": undefined
            },
            {
                "text": "Running",
                "explanation": "Incorrect. Paradoxically, some PD patients can run or bike better than they can walk (kinesia paradoxa).",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Freezing of Gait (FOG) is a disturbing motor block that typically occurs when initiating movement, turning, or passing through narrow spaces.",
        "lectureSource": undefined
    },
    {
        "id": 18,
        "category": "Neurology: Pharmacology",
        "questionText": "You are reviewing the medication list of a patient with Parkinson's disease. He complains of nausea and dizziness. You suspect his Levodopa/Carbidopa dosing may need adjustment. What is the phenomenon where the medication effect wears off before the next dose, causing a return of symptoms?",
        "options": [
            {
                "text": "Serotonin syndrome",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            },
            {
                "text": "Tachyphylaxis",
                "explanation": "Incorrect. Acute tolerance.",
                "lectureSource": undefined
            },
            {
                "text": "Idiosyncratic reaction",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            },
            {
                "text": "On-Off phenomenon",
                "explanation": "Correct. 'Wearing off' or 'On-Off' fluctuations are common complications of long-term Levodopa therapy, requiring dose frequency adjustments.",
                "lectureSource": undefined
            },
            {
                "text": "Potentiation",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Long-term Levodopa use is complicated by motor fluctuations, including 'wearing off' periods and dyskinesias.",
        "lectureSource": undefined
    },
    {
        "id": 19,
        "category": "Neurology: Non-Motor Symptoms",
        "questionText": "A 65-year-old male with Parkinson's disease complains of 'dizzy spells' when he stands up. His blood pressure drops from 130/80 sitting to 100/60 standing. This finding represents which domain of Parkinson's non-motor symptoms?",
        "options": [
            {
                "text": "Sensory dysfunction",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            },
            {
                "text": "Psychiatric dysfunction",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            },
            {
                "text": "Autonomic dysfunction (Dysautonomia)",
                "explanation": "Correct. Orthostatic hypotension, constipation, and urinary frequency are key signs of autonomic failure in PD.",
                "lectureSource": undefined
            },
            {
                "text": "Cognitive dysfunction",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            },
            {
                "text": "Sleep dysfunction",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Autonomic dysfunction (constipation, orthostasis, urinary urgency) is a major non-motor burden in Parkinson's disease.",
        "lectureSource": undefined
    },
    {
        "id": 20,
        "category": "Neurology: Diagnosis",
        "questionText": "According to the lecture, the clinical diagnosis of Parkinson's disease REQUIRES which specific motor finding, usually accompanied by rigidity or tremor?",
        "options": [
            {
                "text": "Festination",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            },
            {
                "text": "Postural instability",
                "explanation": "Incorrect. This is a late finding.",
                "lectureSource": undefined
            },
            {
                "text": "Resting tremor",
                "explanation": "Incorrect. 20-30% of PD patients present without tremor (Akinetic-rigid type).",
                "lectureSource": undefined
            },
            {
                "text": "Bradykinesia",
                "explanation": "Correct. Bradykinesia (slowness of movement) is the central feature required for the diagnosis of Parkinsonism.",
                "lectureSource": undefined
            },
            {
                "text": "Freezing",
                "explanation": "Incorrect.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Bradykinesia is the sine qua non of Parkinsonism; without it, the diagnosis implies another condition.",
        "lectureSource": undefined
    }
];
