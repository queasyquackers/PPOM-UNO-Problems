
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
                "explanation": "Incorrect. While chronic constipation is a common autonomic symptom in PD (often preceding motor symptoms), REM sleep behavior disorder is a more specific and strong predictor of synucleinopathies."
            },
            {
                "text": "REM sleep behavior disorder",
                "explanation": "Correct. REM sleep behavior disorder (acting out dreams) is a strong prodromal marker for alpha-synucleinopathies like Parkinson's disease and can precede motor symptoms by years."
            },
            {
                "text": "Resting tremor",
                "explanation": "Incorrect. Resting tremor is a cardinal *motor* sign of clinical PD, not a prodromal symptom (which occurs before motor onset). This diagnosis is already clinically apparent."
            },
            {
                "text": "Decreased arm swing",
                "explanation": "Incorrect. This is an early *motor* sign of PD, often the first sign noticed by family, but it is not a prodromal symptom (pre-motor)."
            },
            {
                "text": "Orthostatic hypotension",
                "explanation": "Incorrect. This is a feature of autonomic dysfunction seen in PD but is more prominent and early in Multiple System Atrophy (MSA). It is not the strongest prodromal marker compared to RBD."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "REM sleep behavior disorder and anosmia are key prodromal symptoms that can precede the motor manifestations of Parkinson's disease by years.",
        "pdfPage": 11,
        "pdfQuote": "Injuring bed partner or self (REM sleep behavior disorder)"
    },
    {
        "id": 2,
        "category": "Neurology: Movement Disorders",
        "questionText": "A 55-year-old female presents with a 2-year history of hand tremor. She notes the tremor is worse when she is drinking from a cup or writing. She denies any resting tremor or slowness of movement. Her father had a similar tremor. Physical exam reveals a high-frequency postural tremor in both hands but normal tone and gait. Which of the following is the most likely diagnosis?",
        "options": [
            {
                "text": "Parkinson's Disease",
                "explanation": "Incorrect. PD typically presents with a *resting* tremor (pill-rolling) that improves with action. This patient has an action/postural tremor."
            },
            {
                "text": "Essential Tremor",
                "explanation": "Correct. Essential tremor is characterized by a postural and kinetic (action) tremor, often with a family history (autosomal dominant), and lacks the bradykinesia/rigidity of PD."
            },
            {
                "text": "Drug-induced Parkinsonism",
                "explanation": "Incorrect. This would present with parkinsonian features (rigidity, bradykinesia) due to dopamine blockade, not an isolated action tremor."
            },
            {
                "text": "Cerebellar Ataxia",
                "explanation": "Incorrect. While cerebellar disease causes an intention tremor (worse at target), it is usually associated with ataxia, dysmetria, and gait instability, which are absent here."
            },
            {
                "text": "Physiologic Tremor",
                "explanation": "Incorrect. Physiologic tremor is low amplitude and usually invisible unless exacerbated by stress/caffeine. A 2-year progressive tremor affecting function is pathologic."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "The tremor of Parkinson's disease is a RESTING tremor (3-5 Hz), whereas Essential Tremor is a POSTURAL/ACTION tremor.",
        "pdfPage": 17,
        "pdfQuote": "Postural/action → essential tremor"
    },
    {
        "id": 3,
        "category": "Pharmacology: Adverse Effects",
        "questionText": "A 72-year-old male with a history of schizophrenia is brought to the clinic for evaluation of a shuffling gait and stiffness. He has been stable on his psychiatric medication for 15 years. Physical exam reveals generalized rigidity and bradykinesia without tremor. Review of his medication list reveals a long-term prescription for haloperidol. Which mechanism explains his motor symptoms?",
        "options": [
            {
                "text": "Depletion of presynaptic dopamine",
                "explanation": "Incorrect. This is the mechanism of tetrabenazine or reserpine. Haloperidol blocks receptors."
            },
            {
                "text": "Blockade of postsynaptic dopamine D2 receptors",
                "explanation": "Correct. Haloperidol is a typical antipsychotic that blocks D2 receptors in the striatum, mimicking the dopamine depletion of Parkinson's disease (Drug-induced Parkinsonism)."
            },
            {
                "text": "Alpha-synuclein aggregation in the substantia nigra",
                "explanation": "Incorrect. This is the pathophysiology of idiopathic Parkinson's disease. While possible, the history of long-term antipsychotic use makes drug-induced more likely."
            },
            {
                "text": "Degeneration of GABAergic neurons in the striatum",
                "explanation": "Incorrect. This is the pathology of Huntington's disease."
            },
            {
                "text": "Excessive cholinergic activity in the cortex",
                "explanation": "Incorrect. While relative cholinergic excess in the striatum contributes to symptoms (hence anticholinergic treatment), the *primary* cause here is dopamine receptor blockade."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Drug-induced parkinsonism is a common mimic of PD caused by dopamine blockers (antipsychotics, antiemetics like metoclopramide).",
        "pdfPage": 5,
        "pdfQuote": "Dopamine blockers → parkinsonism"
    },
    {
        "id": 4,
        "category": "Neurology: Genetics",
        "questionText": "A 45-year-old male of Ashkenazi Jewish descent presents with early-onset bradykinesia and resting tremor. Genetic testing is performed due to his young age and ethnicity. Which gene mutation is most commonly associated with Parkinson's disease in this specific population?",
        "options": [
            {
                "text": "HTT",
                "explanation": "Incorrect. The HTT gene mutation (CAG repeats) causes Huntington's Disease."
            },
            {
                "text": "LRRK2",
                "explanation": "Correct. LRRK2 and GBA1 mutations are the most common genetic causes of PD, particularly in the Ashkenazi Jewish population."
            },
            {
                "text": "SOD1",
                "explanation": "Incorrect. SOD1 mutations are associated with Amyotrophic Lateral Sclerosis (ALS)."
            },
            {
                "text": "APOE4",
                "explanation": "Incorrect. APOE4 is a major risk factor allele for sporadic Alzheimer's Disease."
            },
            {
                "text": "ATP7B",
                "explanation": "Incorrect. ATP7B mutation causes Wilson's Disease (copper accumulation)."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "LRRK2 and GBA1 are the most common genetic mutations associated with Parkinson's disease, especially in Ashkenazi Jewish populations.",
        "pdfPage": 7,
        "pdfQuote": "Individuals of Ashkenazi Jewish descent are at a higher risk"
    },
    {
        "id": 5,
        "category": "Neurology: Physical Exam",
        "questionText": "During the physical examination of a patient with suspected Parkinson's disease, you passively move the patient's wrist and elbow. You feel a rhythmic, ratchety resistance throughout the range of motion. What is the specific term for this finding?",
        "options": [
            {
                "text": "Spasticity",
                "explanation": "Incorrect. Spasticity is velocity-dependent resistance ('clasp-knife') seen in upper motor neuron lesions."
            },
            {
                "text": "Lead-pipe rigidity",
                "explanation": "Incorrect. Lead-pipe rigidity is smooth, constant resistance throughout the range of motion. The finding described here is ratchety."
            },
            {
                "text": "Cogwheeling",
                "explanation": "Correct. Cogwheel rigidity is the superposition of tremor on rigidity, creating a ratchety or jerky sensation during passive movement."
            },
            {
                "text": "Paratonia",
                "explanation": "Incorrect. Paratonia (Gegenhalten) is velocity-dependent resistance where the patient appears to actively resist movement, often seen in frontal lobe dementia."
            },
            {
                "text": "Hypotonia",
                "explanation": "Incorrect. Hypotonia is decreased tone, often seen in cerebellar disease or lower motor neuron lesions."
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Cogwheel rigidity is a classic sign of Parkinson's disease, representing a combination of underlying rigidity and tremor.",
        "pdfPage": 16,
        "pdfQuote": "Cogwheeling"
    },
    {
        "id": 6,
        "category": "Neurology: Environmental Exposures",
        "questionText": "A 60-year-old farmer presents with symptoms of Parkinsonism. He has no family history of the disease. He has worked for 40 years applying herbicides and pesticides to crops. Exposure to which of the following agents is a known risk factor for the development of Parkinson's disease?",
        "options": [
            {
                "text": "Asbestos",
                "explanation": "Incorrect. Asbestos exposure causes mesothelioma and lung disease."
            },
            {
                "text": "Rotenone",
                "explanation": "Correct. Pesticides like rotenone and paraquat are known mitochondrial toxins that inhibit Complex I and are linked to an increased risk of Parkinson's disease."
            },
            {
                "text": "Silica dust",
                "explanation": "Incorrect. Silica exposure causes silicosis (lung fibrosis)."
            },
            {
                "text": "Benzene",
                "explanation": "Incorrect. Benzene exposure is linked to leukemia and aplastic anemia."
            },
            {
                "text": "Radon",
                "explanation": "Incorrect. Radon gas is a cause of lung cancer."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Exposure to pesticides such as rotenone and paraquat is an environmental risk factor for developing Parkinson's disease.",
        "pdfPage": 8,
        "pdfQuote": "Pesticides include rotenone, paraquat, trichloroethylene"
    },
    {
        "id": 7,
        "category": "Neurology: Facial Signs",
        "questionText": "You are observing a 70-year-old male who is sitting in the exam room. You note that he rarely blinks and his face appears expressionless, staring straight ahead with a fixed gaze. When he speaks, his voice is soft and monotone. Which term best describes this facial finding?",
        "options": [
            {
                "text": "Bell's Palsy",
                "explanation": "Incorrect. Bell's Palsy is a unilateral facial paralysis (CN VII)."
            },
            {
                "text": "Hypomimia",
                "explanation": "Correct. Hypomimia, or 'masked facies,' is a reduction in facial expression and blinking frequency, a cardinal non-motor sign of Parkinson's disease."
            },
            {
                "text": "Ptosis",
                "explanation": "Incorrect. Ptosis is drooping of the upper eyelid."
            },
            {
                "text": "Proptosis",
                "explanation": "Incorrect. Proptosis is bulging of the eyes (e.g., Graves' disease)."
            },
            {
                "text": "Facial Myokymia",
                "explanation": "Incorrect. Facial myokymia involves involuntary rippling of facial muscles."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Hypomimia (masked facies) and decreased blink rate are classic signs of Parkinson's disease reflecting bradykinesia of facial muscles.",
        "pdfPage": 15,
        "pdfQuote": "Hypomimia (masked facies)"
    },
    {
        "id": 8,
        "category": "Neurology: Gait",
        "questionText": "A patient with Parkinson's disease is asked to walk down the hallway. You notice that when he attempts to turn around to return to you, he takes multiple small, choppy steps instead of a smooth pivot. This gait abnormality is known as:",
        "options": [
            {
                "text": "Ataxic turning",
                "explanation": "Incorrect. Ataxia involves uncoordinated, wide-based stumbling."
            },
            {
                "text": "En bloc turning",
                "explanation": "Correct. En bloc turning is turning 'as a block,' requiring multiple small steps to pivot the body, characteristic of the axial rigidity in PD."
            },
            {
                "text": "Steppage gait",
                "explanation": "Incorrect. Steppage gait (foot drop) involves lifting the leg high to clear the toes, seen in peroneal neuropathy."
            },
            {
                "text": "Antalgic gait",
                "explanation": "Incorrect. Antalgic gait is a limp adopted to avoid pain on weight-bearing."
            },
            {
                "text": "Trendelenburg gait",
                "explanation": "Incorrect. Trendelenburg gait involves hip drop due to gluteus medius weakness."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "En bloc turning (turning rigid like a statue) and shuffling steps are hallmark gait abnormalities in Parkinson's disease.",
        "pdfPage": 18,
        "pdfQuote": "En bloc turning"
    },
    {
        "id": 9,
        "category": "Neurology: History Taking",
        "questionText": "A 65-year-old female presents for evaluation of tremors. In taking her history to differentiate Parkinson's disease from other conditions, which specific question regarding her sense of smell is most relevant?",
        "options": [
            {
                "text": "Do you smell burnt rubber?",
                "explanation": "Incorrect. Phantosmia (hallucinated smells) is often a seizure aura (uncinate fits)."
            },
            {
                "text": "Have you lost your sense of smell?",
                "explanation": "Correct. Anosmia (loss of smell) is a very common and early non-motor symptom of Parkinson's disease, often preceding motor signs."
            },
            {
                "text": "Is your sense of smell heightened?",
                "explanation": "Incorrect. Hyperosmia is implicated in migraines or pregnancy, not PD."
            },
            {
                "text": "Does food taste metallic?",
                "explanation": "Incorrect. Dysgeusia is a side effect of medications (e.g., metronidazole, ACE inhibitors) or zinc deficiency."
            },
            {
                "text": "Do odors trigger headaches?",
                "explanation": "Incorrect. This suggests osmophobia, associated with migraines."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Anosmia is a supportive criteria for Parkinson's disease diagnosis and can be an early prodromal feature.",
        "pdfPage": 12,
        "pdfQuote": "Loss of smell (when first noticed)"
    },
    {
        "id": 10,
        "category": "Neurology: Differential Diagnosis",
        "questionText": "A 75-year-old male presents with falls and gait difficulty. Examination reveals vertical gaze palsy (inability to look up or down), axial rigidity which is greater than appendicular rigidity, and frequent backward falls. He has mild cognitive changes but no resting tremor. This presentation is most suggestive of:",
        "options": [
            {
                "text": "Idiopathic Parkinson's Disease",
                "explanation": "Incorrect. PD typically presents with resting tremor, appendicular rigidity, and better response to levodopa. Vertical gaze palsy is NOT a feature."
            },
            {
                "text": "Progressive Supranuclear Palsy (PSP)",
                "explanation": "Correct. PSP is a 'Parkinson-Plus' syndrome characterized by vertical gaze palsy, early falls (especially backwards), and axial rigidity."
            },
            {
                "text": "Multiple System Atrophy (MSA)",
                "explanation": "Incorrect. MSA features prominent autonomic failure (orthostasis, incontinence) and cerebellar or parkinsonian signs."
            },
            {
                "text": "Corticobasal Degeneration",
                "explanation": "Incorrect. CBD presents with asymmetric limb rigidity, alien limb phenomenon, and apraxia."
            },
            {
                "text": "Essential Tremor",
                "explanation": "Incorrect. ET is an action tremor disorder without significant gait or gaze abnormalities."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Vertical gaze limitation (supranuclear ophthalmoplegia) and early falls are the hallmarks of Progressive Supranuclear Palsy (PSP), a Parkinson mimic.",
        "pdfPage": 15,
        "pdfQuote": "Vertical gaze limitation→ consider PSP"
    },
    {
        "id": 11,
        "category": "Pharmacology: Side Effects",
        "questionText": "A 65-year-old male with Parkinson's disease has been treated with Dopamine Agonists (e.g., ropinirole or pramipexole). He returns to the clinic for a follow-up. His wife is distressed and pulls you aside to mention a new, concerning behavior. Which of the following side effects is uniquely associated with this class of medications?",
        "options": [
            {
                "text": "Hypertensive crisis",
                "explanation": "Incorrect. This is associated with MAO inhibitors and tyramine."
            },
            {
                "text": "Impulse control disorders (Gambling, Hypersexuality)",
                "explanation": "Correct. Dopamine agonists are strongly linked to impulse control disorders, including pathological gambling, compulsive shopping, and hypersexuality."
            },
            {
                "text": "Gingival hyperplasia",
                "explanation": "Incorrect. This is a side effect of phenytoin or calcium channel blockers."
            },
            {
                "text": "Pulmonary fibrosis",
                "explanation": "Incorrect. This is a side effect of amiodarone, bleomycin, or older ergoline agonists (bromocriptine - rare now), but impulse control is the classic board association for modern agonists."
            },
            {
                "text": "Cholestatic jaundice",
                "explanation": "Incorrect. Associated with drugs like erythromycin or chlorpromazine."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Dopamine agonists (pramipexole, ropinirole) can cause impulse control disorders (gambling, sex, shopping) and sudden sleep attacks.",
        "pdfPage": 5,
        "pdfQuote": "Dopamine agonists → impulse control, sleep attacks"
    },
    {
        "id": 12,
        "category": "Neurology: Diagnosis",
        "questionText": "A 70-year-old male presents with suspected Parkinson's disease. His symptoms are subtle and the diagnosis is equivocal. Which specific nuclear medicine imaging study can be used to visualize the density of dopamine transporters in the striatum to aid in diagnosis?",
        "options": [
            {
                "text": "MRI of the Brain",
                "explanation": "Incorrect. MRI is used to rule out *other* causes (stroke, tumor, hydrocephalus) but is often normal in early PD."
            },
            {
                "text": "DaTscan (Dopamine Transporter Scan)",
                "explanation": "Correct. A DaTscan uses Ioflupane I-123 to visualize dopamine transporters in the striatum. It shows reduced uptake in PD."
            },
            {
                "text": "CT Angiography",
                "explanation": "Incorrect. Used for vascular pathology."
            },
            {
                "text": "EEG",
                "explanation": "Incorrect. Measures electrical activity, used in seizures."
            },
            {
                "text": "Lumbar Puncture",
                "explanation": "Incorrect. CSF analysis is research-based for synuclein but not a standard clinical imaging test."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "A DaTscan (Dopamine Transporter scan) can distinguish essential tremor (normal scan) from Parkinsonian syndromes (reduced tracer uptake in striatum).",
        "pdfPage": 19,
        "pdfQuote": "Dopamine transporter (DAT) scan"
    },
    {
        "id": 13,
        "category": "Neurology: Gait",
        "questionText": "A patient is observed walking. He initiates gait with difficulty. Once moving, his steps are short and shuffling. He appears to be 'chasing his center of gravity' with a forward-flexed posture. This gait pattern is best described as:",
        "options": [
            {
                "text": "Festinating gait",
                "explanation": "Correct. Festination is the involuntary acceleration of gait with short steps to prevent falling forward due to a stooped posture, classic for PD."
            },
            {
                "text": "Scissoring gait",
                "explanation": "Incorrect. Scissoring gait involves legs crossing over, seen in spastic cerebral palsy or myelopathy."
            },
            {
                "text": "Waddling gait",
                "explanation": "Incorrect. Waddling gait is due to proximal muscle weakness (myopathy)."
            },
            {
                "text": "Magnetic gait",
                "explanation": "Incorrect. Magnetic gait (feet stuck to floor) is seen in Normal Pressure Hydrocephalus (NPH)."
            },
            {
                "text": "Sensory ataxia",
                "explanation": "Incorrect. High-stepping, stamping gait due to loss of proprioception."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Festinating gait (hastening steps) and stooped posture result from the loss of postural reflexes in Parkinson's disease.",
        "pdfPage": 18,
        "pdfQuote": "Stooped posture"
    },
    {
        "id": 14,
        "category": "Neurology: Mental Status",
        "questionText": "A 72-year-old female with long-standing Parkinson's disease is brought in by her family. They report she has become increasingly forgetful and has difficulty planning her day. On exam, she has slow processing speed. Which cognitive assessment tool is cited as 'best' for screening for cognitive impairment in this population?",
        "options": [
            {
                "text": "Glasgow Coma Scale (GCS)",
                "explanation": "Incorrect. GCS is for level of consciousness in trauma/acute settings."
            },
            {
                "text": "Montreal Cognitive Assessment (MoCA)",
                "explanation": "Correct. The MoCA is more sensitive than the MMSE for detecting mild cognitive impairment and executive dysfunction common in PD."
            },
            {
                "text": "PHQ-9",
                "explanation": "Incorrect. PHQ-9 is a depression screen."
            },
            {
                "text": "NIH Stroke Scale",
                "explanation": "Incorrect. For acute stroke neurological deficit quantification."
            },
            {
                "text": "CAM (Confusion Assessment Method)",
                "explanation": "Incorrect. For delirium assessment."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "The MoCA (Montreal Cognitive Assessment) is preferred over the MMSE for detecting the executive dysfunction and mild cognitive impairment in Parkinson's disease.",
        "pdfPage": 14,
        "pdfQuote": "MOCA best"
    },
    {
        "id": 15,
        "category": "Neurology: OMM",
        "questionText": "In performing the osteopathic structural exam on a patient with Parkinson's gait, you look for somatic dysfunctions that may contribute to their ambulation difficulties. Which specific pelvic finding is listed as a key component of the gait exam in the lecture?",
        "options": [
            {
                "text": "Pubic shear",
                "explanation": "Incorrect."
            },
            {
                "text": "Sacral base unleveling",
                "explanation": "Correct. Sacral base unleveling (one hip lower than the other) affects leg length and mechanics, exacerbating gait issues."
            },
            {
                "text": "Innominate rotation",
                "explanation": "Incorrect. While relevant, sacral base unleveling is the specific finding highlighted in the gait exam slide."
            },
            {
                "text": "Psoas syndrome",
                "explanation": "Incorrect."
            },
            {
                "text": "L5 rotation",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Assessing for sacral base unleveling is a critical part of the osteopathic gait examination in patients with movement disorders.",
        "pdfPage": 18,
        "pdfQuote": "Sacral base unleveling (one hip lower than the other)"
    },
    {
        "id": 16,
        "category": "Neurology: Genetics",
        "questionText": "A 35-year-old male presents with rest tremor and rigidity. He has a strong family history of Parkinson's disease. Genetic analysis reveals a mutation in the PRKN gene (Parkin). Based on this mutation, what is the primary cellular mechanism defective in his disease?",
        "options": [
            {
                "text": "Impaired protein degradation (ubiquitin-proteasome system)",
                "explanation": "Correct. Parkin is a ubiquitin ligase. Mutations result in failure to tag proteins for degradation, leading to toxic accumulation."
            },
            {
                "text": "Mitochondrial oxidative phosphorylation defect",
                "explanation": "Incorrect. This is more associated with PINK1 or toxin exposures."
            },
            {
                "text": "Alpha-synuclein aggregation",
                "explanation": "Incorrect. While synuclein accumulates, PRKN specifically codes for an E3 ubiquitin ligase involved in proteasomal degradation (mitophagy)."
            },
            {
                "text": "Dopamine synthesis failure",
                "explanation": "Incorrect. This is the result, not the primary genetic defect."
            },
            {
                "text": "Tau protein hyperphosphorylation",
                "explanation": "Incorrect. This is the mechanism of Alzheimer's and PSP (tauopathies)."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "PRKN (Parkin) mutations lead to impaired protein degradation via the ubiquitin-proteasome system, a core mechanism in hereditary PD.",
        "pdfPage": 7,
        "pdfQuote": "impaired protein degradation"
    },
    {
        "id": 17,
        "category": "Neurology: Gait",
        "questionText": "A patient with Parkinson's disease experiences 'freezing of gait' (FOG). This phenomenon typically occurs in which specific situation?",
        "options": [
            {
                "text": "Walking on an open beach",
                "explanation": "Incorrect. Visual open space usually helps."
            },
            {
                "text": "Turning or passing through a narrow doorway",
                "explanation": "Correct. Freezing often happens upon initiation of gait, turning (en bloc), or navigating narrow spaces (doorways, elevators)."
            },
            {
                "text": "Walking backward",
                "explanation": "Incorrect. Retropulsion is a balance issue, not 'freezing' per se."
            },
            {
                "text": "Running",
                "explanation": "Incorrect. Paradoxically, some PD patients can run or bike better than they can walk (kinesia paradoxa)."
            },
            {
                "text": "Sleeping",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Freezing of Gait (FOG) is a disturbing motor block that typically occurs when initiating movement, turning, or passing through narrow spaces.",
        "pdfPage": 18,
        "pdfQuote": "Freezing"
    },
    {
        "id": 18,
        "category": "Neurology: Pharmacology",
        "questionText": "You are reviewing the medication list of a patient with Parkinson's disease. He complains of nausea and dizziness. You suspect his Levodopa/Carbidopa dosing may need adjustment. What is the phenomenon where the medication effect wears off before the next dose, causing a return of symptoms?",
        "options": [
            {
                "text": "On-Off phenomenon",
                "explanation": "Correct. 'Wearing off' or 'On-Off' fluctuations are common complications of long-term Levodopa therapy, requiring dose frequency adjustments."
            },
            {
                "text": "Serotonin syndrome",
                "explanation": "Incorrect."
            },
            {
                "text": "Tachyphylaxis",
                "explanation": "Incorrect. Acute tolerance."
            },
            {
                "text": "Idiosyncratic reaction",
                "explanation": "Incorrect."
            },
            {
                "text": "Potentiation",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Long-term Levodopa use is complicated by motor fluctuations, including 'wearing off' periods and dyskinesias.",
        "pdfPage": 5,
        "pdfQuote": "Levodopa → on/off periods"
    },
    {
        "id": 19,
        "category": "Neurology: Non-Motor Symptoms",
        "questionText": "A 65-year-old male with Parkinson's disease complains of 'dizzy spells' when he stands up. His blood pressure drops from 130/80 sitting to 100/60 standing. This finding represents which domain of Parkinson's non-motor symptoms?",
        "options": [
            {
                "text": "Cognitive dysfunction",
                "explanation": "Incorrect."
            },
            {
                "text": "Autonomic dysfunction (Dysautonomia)",
                "explanation": "Correct. Orthostatic hypotension, constipation, and urinary frequency are key signs of autonomic failure in PD."
            },
            {
                "text": "Sensory dysfunction",
                "explanation": "Incorrect."
            },
            {
                "text": "Sleep dysfunction",
                "explanation": "Incorrect."
            },
            {
                "text": "Psychiatric dysfunction",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Autonomic dysfunction (constipation, orthostasis, urinary urgency) is a major non-motor burden in Parkinson's disease.",
        "pdfPage": 12,
        "pdfQuote": "Cardiac (lightheaded)"
    },
    {
        "id": 20,
        "category": "Neurology: Diagnosis",
        "questionText": "According to the lecture, the clinical diagnosis of Parkinson's disease REQUIRES which specific motor finding, usually accompanied by rigidity or tremor?",
        "options": [
            {
                "text": "Postural instability",
                "explanation": "Incorrect. This is a late finding."
            },
            {
                "text": "Bradykinesia",
                "explanation": "Correct. Bradykinesia (slowness of movement) is the central feature required for the diagnosis of Parkinsonism."
            },
            {
                "text": "Resting tremor",
                "explanation": "Incorrect. 20-30% of PD patients present without tremor (Akinetic-rigid type)."
            },
            {
                "text": "Freezing",
                "explanation": "Incorrect."
            },
            {
                "text": "Festination",
                "explanation": "Incorrect."
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Bradykinesia is the sine qua non of Parkinsonism; without it, the diagnosis implies another condition.",
        "pdfPage": 16,
        "pdfQuote": "Diagnosis requires bradykinesia with rigidity"
    }
];

window.Test_L61 = Test_L61;
