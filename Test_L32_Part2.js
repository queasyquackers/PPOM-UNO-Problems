// Thinking Process:
// 1.  **Analyze the Request:** generate 20 application-based questions for Lecture 32 (Cerebellum) Part 2, strictly following the v5 prompt.
// 2.  **Review Source Material (L32 Transcript):**
//     *   **Key Concepts:**
//         *   Lobes: Anterior (Walking/Legs), Posterior (Fine motor), Flocculonodular (Balance/Eyes).
//         *   Functional Divisions: Spinocerebellum (Vermis/Paravermis), Cerebrocerebellum (Lat Hemi), Vestibulocerebellum.
//         *   Nuclei: Fastigial (Medial), Interposed (Middle), Dentate (Lateral).
//         *   Circuitry: Mossy (Input), Climbing (Olive), Purkinje (Inhibitory Output), Granule (Parallel fibers).
//         *   Peduncles: ICP (Input from Medulla), MCP (Input from Pons), SCP (Output to Thalamus).
//         *   Clinical: Ataxia, Dysdiadochokinesia (DDK), Intention Tremor, Nystagmus, Hypotonia, Titubation.
//         *   Specifics: Alcohol -> Anterior Lobe (Gait ataxia); Chiari -> Tonsils; Medulloblastoma -> Kids/Vermis.
//         *   Essential Tremor vs Intention Tremor.
// 3.  **Drafting Questions (Iterative Application Focus):**
//     *   *Q1: Anterior Lobe Syndrome (Alcohol).* Vignette: Chronic alcoholic, wide stance.
//     *   *Q2: PICA Stroke/Lateral Medullary (ICP damage).*
//     *   *Q3: Cerebrocerebellum/Dentate (Fine motor analysis).* Vignette: Pianist/Surgeon messing up fine movements.
//     *   *Q4: Dysdiadochokinesia mechanism.*
//     *   *Q5: Essential Tremor vs Intention Tremor.* Vignette: Tremor while drinking coffee vs tremor reaching for cup.
//     *   *Q6: Vestibulocerebellum/Flocculonodular.* Vignette: Dizziness, Nystagmus.
//     *   *Q7: Circuitry - Purkinje inhibition.* Concept: Disinhibition of Deep Nuclei.
//     *   *Q8: Climbing Fibers (Olive).* Distinctive signal.
//     *   *Q9: Decussations (SCP).* Why right cerebellum controls right body.
//     *   *Q10: Tonsillar Herniation.* Clinical emergency.
//     *   *Q11: Spinocerebellum/Interposed.* Tremor during movement execution? No, that's more intention. Stick to gait/truncal for vermis, limb placement for paravermis.
//     *   *Q12: MCP Input.* Corticopontocerebellar pathway.
//     *   *Q13: Granule Cells.* Data compression concept.
//     *   *Q14: Somatotopy (Verified in slides? Not heavily emphasized in transcript, stick to funct divisions).*
//     *   *Q15: Medulloblastoma.* Child with balance issues.
//     *   *Q16: DANISH mnemonic application.* Hypotonia.
//     *   *Q17: Feedforward control/Error correction.*
//     *   *Q18: Rosettes/Histology? No, stick to functional circuitry.*
//     *   *Q19: SCA/MSA? Not in transcript. Stick to "general cerebellar damage".*
//     *   *Q20: Lateral vs Medial logic.*
// 4.  **Refining into Code:** Ensure 75/25 split (many full vignettes), random answers, distinct distractors.

window.Test_L32_Part2 = [
  {
    "id": 1,
    "category": "Cerebellar Pathology: Chronic Alcoholism",
    "questionText": "A 58-year-old male with a 30-year history of heavy alcohol use presents with difficulty walking. He reports frequent falls and feels unsteady on his feet. On physical examination, he exhibits a wide-based, staggering gait. However, his finger-to-nose testing and rapid alternating movements of the upper extremities are relatively preserved. He has no nystagmus. Which anatomical region of the cerebellum is most likely degenerated in this patient?",
    "options": [
      {
        "text": "Posterior Lobe (Lateral Hemispheres)",
        "explanation": "Incorrect. Damage here would cause issues with fine motor control of the hands (dysmetria, intention tremor), which this patient preserves. This, combined with the lack of speech issues, makes posterior lobe involvement unlikely. This would be correct if he had intention tremor and dysdiadochokinesia."
      },
      {
        "text": "Anterior Lobe (Vermis)",
        "explanation": "Correct. Chronic alcohol toxicity specifically targets the anterior vermis. This region (Spinocerebellum) is responsible for lower limb and trunk coordination. Its degeneration leads to the classic 'drunk sailor' wide-based gait while sparing the upper limbs.",
        "isCorrect": true
      },
      {
        "text": "Flocculonodular Lobe",
        "explanation": "Incorrect. Lesions here affect equilibrium and eye movements, typically presenting with nystagmus and vertigo. This patient has no nystagmus. This would be the correct answer if the patient had prominent eye movement abnormalities and vertigo."
      },
      {
        "text": "Dentate Nucleus",
        "explanation": "Incorrect. The dentate nucleus is the output for the cerebrocerebellum (lateral hemispheres). Damage here would manifest similarly to posterior lobe damage (distal limb incoordination). This would be correct if the patient had severe issues with motor planning and distal dexterity."
      },
      {
        "text": "Inferior Olivary Nucleus",
        "explanation": "Incorrect. While the olive creates climbing fibers, alcohol specifically creates cortical atrophy in the anterior lobe. Olivary degeneration (like in palatal myoclonus) presents differently. This would be correct for specific hypertrophic olivary degeneration syndromes."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Chronic alcohol abuse causes degeneration of the Anterior Lobe (Vermis), resulting in gait ataxia with sparing of the upper limbs.",
    "pdfPage": 29,
    "pdfQuote": "Alcohol intoxication"
  },
  {
    "id": 2,
    "category": "Functional Anatomy: Vestibulocerebellum",
    "questionText": "A 6-year-old boy is brought to the pediatrician due to frequent refreshing morning vomiting and stumbling. His mother notes he holds his head tilted to the right and often complains that the room is spinning. On exam, he has truncal instability and cannot stand without support, but his limb coordination when lying in bed is normal. He exhibits downward beating nystagmus. An MRI reveals a mass in the posterior fossa. Which structure is most likely compressed or infiltrated by this mass?",
    "options": [
      {
        "text": "Dentate Nucleus",
        "explanation": "Incorrect. Dentate lesions affect voluntary modification of locomotor cycles and fine motor control. They do not typically present with pure vestibular signs like vertigo and nystagmus without limb dysmetria. This would be correct for a lateral hemisphere lesion."
      },
      {
        "text": "Lateral Hemisphere",
        "explanation": "Incorrect. Lateral hemisphere damage impairs motor planning and distal limb coordination (dysdiadochokinesia). This patient's limb coordination is preserved when supported. This would be correct for a cerebrocerebellar lesion."
      },
      {
        "text": "Flocculonodular Lobe",
        "explanation": "Correct. This child likely has a medulloblastoma affecting the flocculonodular lobe (Vestibulocerebellum). Dysfunction here causes truncal ataxia (instability), vertigo, and nystagmus due to its intimate reciprocal connections with the vestibular nuclei.",
        "isCorrect": true
      },
      {
        "text": "Red Nucleus",
        "explanation": "Incorrect. The red nucleus, located in the midbrain, is part of the rubrospinal tract for upper limb flexion. Lesions here cause tremor or decerebrate/decorticate posturing depending on the level, not pure vestibular signs. This would be correct for a midbrain tegmentum lesion."
      },
      {
        "text": "Pontine Nuclei",
        "explanation": "Incorrect. Pontine nuclei relay cortical information to the cerebellum. Damage would cause widespread ataxia but is less likely to present with isolated vestibular signs compared to direct flocculonodular compression. This would be correct for a ventral pons infarction."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Flocculonodular lobe lesions (Vestibulocerebellum) present with truncal ataxia, vertigo, and nystagmus, often caused by Medulloblastoma in children.",
    "pdfPage": 28,
    "pdfQuote": "Medulloblastoma"
  },
  {
    "id": 3,
    "category": "Cerebellar Circuitry: Cell Types",
    "questionText": "During a neurophysiology experiment, a researcher records from a neuron in the cerebellar cortex. The neuron has an enormous dendritic tree extending into the molecular layer and releases GABA onto deep cerebellar nuclei, providing a tonic inhibitory signal. Which cell type is being recorded?",
    "options": [
      {
        "text": "Granule Cell",
        "explanation": "Incorrect. Granule cells are excitatory (glutamatergic) and their axons form parallel fibers. They are the input to Purkinje cells, not the output of the cortex. This would be correct if the neuron was small, excitatory, and projected to the molecular layer."
      },
      {
        "text": "Mossy Fiber",
        "explanation": "Incorrect. Mossy fibers are axons (not cell bodies in the cortex) entering from the pons/spinal cord. They are excitatory. This would be correct if describing an afferent definition."
      },
      {
        "text": "Purkinje Cell",
        "explanation": "Correct. Purkinje cells are the sole output of the cerebellar cortex. They are GABAergic (inhibitory) and project to the Deep Cerebellar Nuclei, 'sculpting' the motor output via inhibition.",
        "isCorrect": true
      },
      {
        "text": "Climbing Fiber",
        "explanation": "Incorrect. Climbing fibers are axons originating from the Inferior Olive. They are excitatory. This would be correct if describing the input that creates 'complex spikes'."
      },
      {
        "text": "Basket Cell",
        "explanation": "Incorrect. Basket cells are inhibitory interneurons that inhibit Purkinje cell bodies (lateral inhibition), but they do not project to the deep nuclei. This would be correct if describing local cortical inhibition."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Purkinje Cells are the ONLY output of the cerebellar cortex and are INHIBITORY (GABAergic) to the Deep Cerebellar Nuclei.",
    "pdfPage": 24,
    "pdfQuote": "Purkinje cell layer"
  },
  {
    "id": 4,
    "category": "Clinical Signs: Intention Tremor",
    "questionText": "A 35-year-old female presents with a movement disorder. When she rests her hands in her lap, they are still. However, when she attempts to reach for a cup of coffee, her hand begins to shake rhythmically, and the shaking amplitude increases dramatically as her hand approaches the handle, causing her to spill it. This finding is most specific for damage to which pathway?",
    "options": [
      {
        "text": "Nigrostriatal pathway",
        "explanation": "Incorrect. This causes Parkinson's disease, characterized by a RESTING tremor (pill-rolling) that improves with movement. This would be correct if her hand shook while resting in her lap."
      },
      {
        "text": "Corticospinal tract",
        "explanation": "Incorrect. Damage here causes weakness (paresis) and spasticity, not tremor. This would be correct if she had weakness and hyperreflexia."
      },
      {
        "text": "Dentatorubrothalamic tract",
        "explanation": "Correct. This defines an Intention Tremor, the hallmark of Cerebrocerebellar (Lateral Hemisphere) dysfunction. The circuit involves the Dentate nucleus projecting to the Thalamus/Cortex to error-correct voluntary movement.",
        "isCorrect": true
      },
      {
        "text": "Vestibulospinal tract",
        "explanation": "Incorrect. This tract controls upright posture and anti-gravity muscles. Damage leads to truncal instability, not limb tremor. This would be correct if she fell over when closing her eyes."
      },
      {
        "text": "Dorsal columns",
        "explanation": "Incorrect. Loss of proprioception can cause sensory ataxia (stomping gait), but does not typically cause a rhythmic intention tremor. This would be correct if she had a positive Romberg sign and loss of vibration sense."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Intention Tremor (worsens at target) = Cerebellar damage. Resting Tremor = Basal Ganglia damage.",
    "pdfPage": 26,
    "pdfQuote": "Intention tremor"
  },
  {
    "id": 5,
    "category": "Cerebellar Circuitry: Inputs",
    "questionText": "A pathologist examines a slide of the cerebellar cortex showing fibers originating from the Inferior Olivary Nucleus. These fibers wrap around the dendrites of Purkinje cells in a 1:1 relationship and provide powerful excitatory input. These fibers are identified as:",
    "options": [
      {
        "text": "Mossy Fibers",
        "explanation": "Incorrect. Mossy fibers originate from the Pons and Spinal cord, synapse on Granule cells, and have a divergent signal. This would be correct for all non-olivary inputs."
      },
      {
        "text": "Parallel Fibers",
        "explanation": "Incorrect. Parallel fibers are the axons of Granule cells within the molecular layer. This would be correct if describing the T-shaped axons of granule cells."
      },
      {
        "text": "Climbing Fibers",
        "explanation": "Correct. Climbing fibers originate EXCLUSIVELY from the Inferior Olive and 'climb' the Purkinje dendrites, providing a potent error signal for motor learning.",
        "isCorrect": true
      },
      {
        "text": "Corticopontine Fibers",
        "explanation": "Incorrect. These go from Cortex to Pons. They become Mossy fibers after the Pons. This would be correct for the descending cortical input."
      },
      {
        "text": "Vestibular Fibers",
        "explanation": "Incorrect. These enter as Mossy fibers. This would be correct for inputs from the vestibular ganglion."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Climbing Fibers = Inferior Olive origin = Powerful 1:1 excitatory input to Purkinje cells.",
    "pdfPage": 22,
    "pdfQuote": "Climbing fibers"
  },
  {
    "id": 6,
    "category": "Anatomy: Peduncles",
    "questionText": "A stroke affecting the lateral aspect of the upper pons damages the Superior Cerebellar Peduncle (SCP). Which of the following consequences is most likely to result from interruption of this specific tract?",
    "options": [
      {
        "text": "Loss of input from the spinal cord",
        "explanation": "Incorrect. Spinal cord input (Spinocerebellar tracts) travels via the Inferior (ICP) and Superior peduncles, but the massive input is ICP. More importantly, the SCP is primarily OUTPUT. This would be correct for ICP damage."
      },
      {
        "text": "Disruption of cortical input to the cerebellum",
        "explanation": "Incorrect. Cortical input travels via the Pons through the Middle Cerebellar Peduncle (MCP). This would be correct for MCP damage."
      },
      {
        "text": "Failure of cerebellar output to reach the thalamus",
        "explanation": "Correct. The SCP is the major EFFERENT (output) pathway. It carries fibers from the Dentate and Interposed nuclei to the contralateral Red Nucleus and Thalamus. Damage blocks the cerebellum's ability to correct motor commands.",
        "isCorrect": true
      },
      {
        "text": "Loss of vestibular input to the flocculonodular lobe",
        "explanation": "Incorrect. Vestibular connections travel via the Inferior Cerebellar Peduncle (ICP) or direct Juxtarestiform body. This would be correct for ICP damage."
      },
      {
        "text": "Degeneration of the Inferior Olive",
        "explanation": "Incorrect. The Olive connects via the ICP. This would be correct for a medullary lesion."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Superior Cerebellar Peduncle (SCP) = Primary Output -> Thalamus/Red Nucleus.",
    "pdfPage": 9,
    "pdfQuote": "Superior cerebellar peduncle"
  },
  {
    "id": 7,
    "category": "Clinical Signs: Dysdiadochokinesia",
    "questionText": "During a neurological exam, a patient is asked to rapidly pronate and supinate their hand on their thigh. The patient performs this slowly and irregularly, with one hand lagging significantly behind the other and losing rhythm. This finding is termed ____ and suggests damage to the ____.",
    "options": [
      {
        "text": "Dysmetria; Anterior Lobe",
        "explanation": "Incorrect. Dysmetria is 'past-pointing' (missing the target). While cerebellar, the specific term for rapid alternating movement failure is DDK. Anterior lobe is more gait."
      },
      {
        "text": "Dysdiadochokinesia; Lateral Hemisphere (Cerebrocerebellum)",
        "explanation": "Correct. Dysdiadochokinesia (DDK) is the inability to perform rapid alternating movements. It is a hallmark of damage to the Lateral Hemispheres (Cerebrocerebellum), which manage fine motor timing and sequencing.",
        "isCorrect": true
      },
      {
        "text": "Ataxia; Vestibulocerebellum",
        "explanation": "Incorrect. Vestibulocerebellar damage causes truncal ataxia and balance issues, not typically distal limb DDK. This would be correct for a balance problem."
      },
      {
        "text": "Bradykinesia; Basal Ganglia",
        "explanation": "Incorrect. Bradykinesia is slowness (decrement in amplitude) seen in Parkinson's. It is rhythmical but small. Cerebellar DDK is irregular and chaotic. This would be correct for Parkinson's."
      },
      {
        "text": "Apraxia; Premotor Cortex",
        "explanation": "Incorrect. Apraxia is the inability to plan/execute a complex motor task despite normal strength. DDK is a coordination failure, not a planning failure of the 'how-to'. This would be correct for cortical damage."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Dysdiadochokinesia (DDK) = Inability to do rapid alternating movements = Lateral Hemisphere dysfunction.",
    "pdfPage": 26,
    "pdfQuote": "dysdiadochokinesia"
  },
  {
    "id": 8,
    "category": "Functional Anatomy: Deep Nuclei",
    "questionText": "A neurologist is evaluating a patient with a suspected lesion in the paravermal zone of the spinocerebellum. This region projects its output to which Deep Cerebellar Nucleus to control limb movements?",
    "options": [
      {
        "text": "Dentate Nucleus",
        "explanation": "Incorrect. The Dentate receives input from the Lateral Hemispheres (Cerebrocerebellum). This would be correct for a lesion affecting motor planning/complexity."
      },
      {
        "text": "Fastigial Nucleus",
        "explanation": "Incorrect. The Fastigial nucleus receives input from the Vermis (midline) and controls axial/trunk muscles. This would be correct for a midline lesion."
      },
      {
        "text": "Interposed Nuclei (Globose/Emboliform)",
        "explanation": "Correct. The Paravermis (Intermediate zone) projects to the Interposed Nuclei. This system controls the rubrospinal/corticospinal tracts for limb execution.",
        "isCorrect": true
      },
      {
        "text": "Vestibular Nuclei",
        "explanation": "Incorrect. The Flocculonodular lobe projects here. This would be correct for a vestibular lesion."
      },
      {
        "text": "Red Nucleus direct",
        "explanation": "Incorrect. The cortex projects to Deep Nuclei, which THEN project to the Red Nucleus. The cortex does not bypass the deep nuclei (except vestibular). This would be correct if asking about the target of the deep nuclei."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Paravermis -> Interposed Nuclei -> Limbs. Vermis -> Fastigial -> Trunk. Lateral -> Dentate -> Planning.",
    "pdfPage": 10,
    "pdfQuote": "interposed nuclei"
  },
  {
    "id": 9,
    "category": "Clinical Signs: Hypotonia",
    "questionText": "A patient with an acute cerebellar hemorrhage exhibits 'pendular' knee jerk reflexes. When the patellar tendon is tapped, the leg swings back and forth multiple times like a pendulum instead of stopping promptly. This phenomenon is best explained by:",
    "options": [
      {
        "text": "Hypertonia and spasticity",
        "explanation": "Incorrect. This is an Upper Motor Neuron sign (corticospinal). It causes a brisk, high-amplitude reflex that stops (clonus is different). Cerebellar is hypotonic."
      },
      {
        "text": "Hypotonia and failure of dampening",
        "explanation": "Correct. Cerebellar damage causes Hypotonia (loss of muscle tone). Without the cerebellum's predictive dampening, the limb oscillates freely after the reflex, creating the pendular sign.",
        "isCorrect": true
      },
      {
        "text": "Rigidity",
        "explanation": "Incorrect. Rigidity is a Basal Ganglia sign (Lead-pipe/Cogwheel). It increases resistance. This would be correct for Parkinson's."
      },
      {
        "text": "Lower Motor Neuron destruction",
        "explanation": "Incorrect. LMN damage causes Areflexia (NO reflex). Pendular reflexes require the reflex arc to be intact, just uncontrolled. This would be correct for Polio."
      },
      {
        "text": "Sensory loss",
        "explanation": "Incorrect. Sensory loss abolishes the afferent limb of the reflex, leading to Areflexia. This would be correct for Tabes Dorsalis."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Cerebellar damage causes Hypotonia, leading to Pendular Reflexes (swinging leg).",
    "pdfPage": 26,
    "pdfQuote": "Low muscle tone"
  },
  {
    "id": 10,
    "category": "Functional Anatomy: Lateralization",
    "questionText": "A patient presents with dysmetria and intention tremor of the LEFT arm. The RIGHT arm is normal. Gait is normal. Which of the following is the most likely location of the lesion?",
    "options": [
      {
        "text": "Right Lateral Cerebellar Hemisphere",
        "explanation": "Incorrect. The Cerebellum controls the IPSILATERAL body. A Right lesion affects the Right side. The Cortex is Contralateral. This would be correct for Right arm symptoms."
      },
      {
        "text": "Left Lateral Cerebellar Hemisphere",
        "explanation": "Correct. Cerebellar symptoms are IPSILATERAL. The double-crossing of pathways (Input crosses, Output crosses back) results in the Left Cerebellum controlling the Left Body.",
        "isCorrect": true
      },
      {
        "text": "Left Motor Cortex",
        "explanation": "Incorrect. The Motor Cortex controls the Contralateral side (Right). A Left cortical lesion causes Right-sided weakness. This would be correct for specific cortical damage."
      },
      {
        "text": "Right Red Nucleus",
        "explanation": "Incorrect. The Red Nucleus controls the Contralateral side (Rubrospinal decussates immediately). Right Red Nucleus controls Left arm, BUT Red Nucleus damage typically causes tremor at rest or benediction signs, and is less specific than cerebellar hemisphere for intention tremor. More importantly, Cerebellum is the 'classic' answer for ipsilateral intention tremor."
      },
      {
        "text": "Vermis",
        "explanation": "Incorrect. Vermis lesions cause truncal/midline ataxia, affecting gait and upright posture, not isolated unilateral limb tremor. This would be correct if the patient was falling over."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Cerebellar lesions cause IPSILATERAL symptoms (Left lesion = Left arm tremor).",
    "pdfPage": 14,
    "pdfQuote": "ipsilateral body"
  },
  {
    "id": 11,
    "category": "Pathology: Tonsillar Herniation",
    "questionText": "A patient with a large brain tumor causing raised intracranial pressure suddenly develops respiratory arrest. Imaging shows the cerebellar tonsils have been pushed inferiorly through the foramen magnum. This 'coning' event is life-threatening because it directly compresses the:",
    "options": [
      {
        "text": "Midbrain",
        "explanation": "Incorrect. This is Uncal Herniation (Temporal lobe), affecting CN III and consciousness. Tonsillar herniation is lower."
      },
      {
        "text": "Medulla Oblongata",
        "explanation": "Correct. The tonsils are the most inferior/medial part of the posterior lobe. Herniation compresses the Medulla, which houses the vital Respiratory and Cardiac centers.",
        "isCorrect": true
      },
      {
        "text": "Pons",
        "explanation": "Incorrect. The Pons is superior to the foramen magnum. While pressure increases, the direct compression point of tonsils is the medulla. This would be correct for central herniation."
      },
      {
        "text": "Thalamus",
        "explanation": "Incorrect. Way too high. This would be correct for upward herniation."
      },
      {
        "text": "Spinal Cord (Cervical)",
        "explanation": "Incorrect. While it pushes into the spinal canal, the fatal mechanism is compression of the brainstem respiratory centers (Medulla), not the spinal cord itself."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Tonsillar Herniation (Chiari) compresses the Medulla -> Respiratory Arrest.",
    "pdfPage": 7,
    "pdfQuote": "tonsil"
  },
  {
    "id": 12,
    "category": "Differentiation: Essential vs. Cerebellar Tremor",
    "questionText": "A 40-year-old male complains of shaking hands. He notes the shaking is present when he holds his hands out to read a paper or use a screwdriver, but it improves significantly after he drinks a glass of wine. He has a family history of 'shaky hands'. His finger-to-nose test shows tremor throughout the movement but no worsening at the target. What is the most likely diagnosis?",
    "options": [
      {
        "text": "Cerebellar Degeneration",
        "explanation": "Incorrect. Cerebellar tremor is an INTENTION tremor (worsens at target) and does not typically improve with alcohol (alcohol makes cerebellar function worse). This would be correct if the tremor worsened at the nose."
      },
      {
        "text": "Parkinson's Disease",
        "explanation": "Incorrect. PD is a RESTING tremor (pill-rolling) that improves with action. This patient has the opposite (Action tremor). This would be correct if he shook while relaxed."
      },
      {
        "text": "Essential Tremor",
        "explanation": "Correct. Essential Tremor is a Postural/Action tremor that often runs in families (AD) and improves with alcohol (self-medication). It is distinct from cerebellar intention tremor.",
        "isCorrect": true
      },
      {
        "text": "Physiologic Tremor",
        "explanation": "Incorrect. Everyone has this (enhanced by caffeine/thyroid), but a strong family history and alcohol response points strongly to Essential Tremor. This would be correct for a caffeine overdose."
      },
      {
        "text": "Huntington's Disease",
        "explanation": "Incorrect. This presents with Chorea (Jerky, dance-like movements), not a rhythmic tremor. This would be correct for a patient with chorea and dementia."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Essential Tremor = Action Tremor + Alcohol responsive + Family History.",
    "pdfPage": 30,
    "pdfQuote": "Essential tremor"
  },
  {
    "id": 13,
    "category": "Circuitry: Granule Cells",
    "questionText": "Which statement best describes the unique connectivity of Granule Cells in the cerebellar cortex?",
    "options": [
      {
        "text": "They are the only inhibitory neurons in the cortex.",
        "explanation": "Incorrect. Purkinje, Stellate, Basket, and Golgi cells are all inhibitory. Granule cells are the ONLY Excitatory ones."
      },
      {
        "text": "They receive direct input from Climbing Fibers.",
        "explanation": "Incorrect. Climbing fibers go straight to Purkinje cells. Granule cells receive Mossy Fibers."
      },
      {
        "text": "Their axons bifurcate to form Parallel Fibers.",
        "explanation": "Correct. Granule cell axons ascend to the molecular layer, split into a 'T', and run parallel to the folia, contacting thousands of Purkinje dendritic trees ('Telephone wires').",
        "isCorrect": true
      },
      {
        "text": "They are the largest neurons in the brain.",
        "explanation": "Incorrect. Thy are the smallest and most numerous (billions). Purkinje cells are large. This would be correct for Betz cells."
      },
      {
        "text": "They project directly to the spinal cord.",
        "explanation": "Incorrect. No cortical cell projects out of the cerebellum except Purkinje (to deep nuclei). This would be correct for UMNs."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Granule Cells = Smallest, Most numerous, Excitatory, form Parallel Fibers.",
    "pdfPage": 23,
    "pdfQuote": "Granule cell"
  },
  {
    "id": 14,
    "category": "Syndrome: Anterior Lobe",
    "questionText": "The Anterior Lobe of the cerebellum is functionally synonymous with the ____ and receives major input from the ____.",
    "options": [
      {
        "text": "Vestibulocerebellum; Inner Ear",
        "explanation": "Incorrect. That's Flocculonodular."
      },
      {
        "text": "Spinocerebellum; Spinal Cord",
        "explanation": "Correct. The Anterior Lobe (plus Vermis) constitutes the Spinocerebellum. It receives dorsal/ventral spinocerebellar tracts to monitor limb position and gait.",
        "isCorrect": true
      },
      {
        "text": "Cerebrocerebellum; Cortex",
        "explanation": "Incorrect. That's Posterior Lobe/Lateral Hemispheres."
      },
      {
        "text": "Pontocerebellum; Red Nucleus",
        "explanation": "Incorrect."
      },
      {
        "text": "Archicerebellum; Thalamus",
        "explanation": "Incorrect."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Anterior Lobe = Spinocerebellum = Spinal input (Gait/Legs).",
    "pdfPage": 11,
    "pdfQuote": "Spinocerebellum"
  },
  {
    "id": 15,
    "category": "Neurophysiology: Motor Learning",
    "questionText": "A tennis player is learning a new serve. When she misses the ball, an 'error signal' is generated to correct the next movement. This error signal is carried to the cerebellar Purkinje cells via which pathway?",
    "options": [
      {
        "text": "Mossy Fibers from the Pons",
        "explanation": "Incorrect. Mossy fibers carry the 'state' (what is happening). Climbing fibers carry the 'error' (what went wrong). This would be correct for the context signal."
      },
      {
        "text": "Climbing Fibers from the Inferior Olive",
        "explanation": "Correct. The Inferior Olive acts as a comparator. When intended movement != actual movement, it fires Climbing Fibers to induce Long Term Depression (LTD) in Purkinje cells, adjusting the synaptic weight for learning.",
        "isCorrect": true
      },
      {
        "text": "Parallel Fibers from Granule Cells",
        "explanation": "Incorrect. Parallel fibers provide the massive context data. This would be correct for the mossy fiber relay."
      },
      {
        "text": "Dopaminergic fibers from Substantia Nigra",
        "explanation": "Incorrect. This is Basal Ganglia reward/movement facilitation. This would be correct for reward learning."
      },
      {
        "text": "Serotonergic fibers from Raphe Nuclei",
        "explanation": "Incorrect. This modulates generalized arousal/mood. This would be correct for sleep/wake cycles."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Climbing Fibers (Olive) = Error Signal -> Motor Learning.",
    "pdfPage": 21,
    "pdfQuote": "error signal"
  },
  {
    "id": 16,
    "category": "Clinical Signs: Nystagmus",
    "questionText": "A patient is stopped for erratic driving. The police officer performs a lateral gaze test. The patient's eyes drift back to the center and then quickly jerk outward to the target. This 'beating' oscillation is known as:",
    "options": [
      {
        "text": "Saccadic dysmetria",
        "explanation": "Incorrect. This is overshooting the target with the eyes. Nystagmus is a rhythmic oscillation."
      },
      {
        "text": "Strabismus",
        "explanation": "Incorrect. This is misalignment of the eyes (cross-eyed). This would be correct for a CN palsy."
      },
      {
        "text": "Nystagmus",
        "explanation": "Correct. Nystagmus is the rhythmic oscillation of the eyes, often defined by the fast phase. It is a classic sign of Vestibulocerebellar dysfunction (or intoxication).",
        "isCorrect": true
      },
      {
        "text": "Ophthalmoplegia",
        "explanation": "Incorrect. This is paralysis of eye muscles. The eyes wouldn't move at all. This would be correct for complete nerve palsy."
      },
      {
        "text": "Diplopia",
        "explanation": "Incorrect. This is double vision (a symptom), not the physical sign of oscillation. This would be correct for a subjective complaint."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Nystagmus = Vestibulocerebellar sign (drunk or damaged).",
    "pdfPage": 28,
    "pdfQuote": "Nystagmus"
  },
  {
    "id": 17,
    "category": "Anatomy: Middle Cerebellar Peduncle",
    "questionText": "The Middle Cerebellar Peduncle (MCP) is the largest white matter tract in the brainstem. It consists entirely of axons originating from the:",
    "options": [
      {
        "text": "Cerebral Cortex",
        "explanation": "Incorrect. Cortex projects to Pons. Pons projects to Cerebellum via MCP. Cortex axons are in the Cerebral Peduncles (Crus cerebri). This would be correct for the origin of the whole path."
      },
      {
        "text": "Contralateral Pontine Nuclei",
        "explanation": "Correct. The Cortico-Ponto-Cerebellar pathway involves the Pons sending transverse fibers across the midline into the contralateral Cerebellum via the MCP.",
        "isCorrect": true
      },
      {
        "text": "Ipsilateral Spinal Cord",
        "explanation": "Incorrect. This is ICP/SCP. This would be correct for Spinocerebellar tracts."
      },
      {
        "text": "Red Nucleus",
        "explanation": "Incorrect. This relates to the SCP/Olive. This would be correct for the rubro-olivary tract."
      },
      {
        "text": "Thalamus",
        "explanation": "Incorrect. Thalamus sends to Cortex. This would be correct if describing Thalamocortical fibers."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: MCP = Axons from Pontine Nuclei (input from cortex).",
    "pdfPage": 9,
    "pdfQuote": "Middle cerebellar peduncle"
  },
  {
    "id": 18,
    "category": "Clinical Signs: Decomposition of Movement",
    "questionText": "A patient is asked to touch their nose. Instead of a smooth arc, they break the movement into separate, jerky mechanical segments (shoulder moves, then elbow, then wrist). This 'Decomposition of Movement' is characteristic of damage to the:",
    "options": [
      {
        "text": "Supplementary Motor Area",
        "explanation": "Incorrect. This would cause trouble initiating sequences."
      },
      {
        "text": "Spinal Cord",
        "explanation": "Incorrect. Weakness or sensory loss."
      },
      {
        "text": "Cerebrocerebellum (Lateral Hemisphere)",
        "explanation": "Correct. The lateral hemisphere plans compound movements. Without it, the brain reverts to moving one joint at a time (decomposition) to avoid the complexity of multi-joint coordination.",
        "isCorrect": true
      },
      {
        "text": "Vestibulocerebellum",
        "explanation": "Incorrect. Balance issues."
      },
      {
        "text": "Basal Ganglia",
        "explanation": "Incorrect. Bradykinesia or rigidity."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Decomposition of Movement = Cerebrocerebellar failure to coordinate multi-joint actions.",
    "pdfPage": 26,
    "pdfQuote": "lack of order"
  },
  {
    "id": 19,
    "category": "Syndrome: Pancerebellar",
    "questionText": "A patient presents with a 'Danish' constellation of symptoms: Dysdiadochokinesia, Ataxia, Nystagmus, Intention Tremor, Slurred Speech, and Hypotonia. Which etiology would most likely cause such global cerebellar dysfunction affecting multiple lobes?",
    "options": [
      {
        "text": "Alcoholism",
        "explanation": "Incorrect. Selectively hits Anterior Lobe (legs). Arms/speech usually spared relative to legs."
      },
      {
        "text": "Small PICA stroke",
        "explanation": "Incorrect. Affects lateral medulla/ICP, causing specific Wallenberg signs (vertigo, ataxia), but usually unilateral and not global."
      },
      {
        "text": "Hypothyroidism",
        "explanation": "Incorrect. Can cause ataxia, but usually reversible and less dramatic than structural global damage. "
      },
      {
        "text": "Chiari Malformation",
        "explanation": "Incorrect. Mostly headache/vestibular/lower CN issues from tonsillar pressure."
      },
      {
        "text": "Paraneoplastic cerebellar degeneration or Pan-cerebellar atrophy",
        "explanation": "Correct. Autoimmune (anti-Yo/Hu) or degenerative conditions can destroy the entire cerebellar cortex, leading to the full 'DANISH' spectrum.",
        "isCorrect": true
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Global cerebellar signs (DANISH) imply a diffuse process like degeneration, toxicity, or paraneoplastic syndrome, not a focal stroke.",
    "pdfPage": 29,
    "pdfQuote": "DANISH"
  },
  {
    "id": 20,
    "category": "Anatomy: Deep Nuclei Output",
    "questionText": "Which Deep Cerebellar Nucleus provides the output for the Vestibulocerebellum (Flocculonodular Lobe)?",
    "options": [
      {
        "text": "Dentate Nucleus",
        "explanation": "Incorrect. Cerebrocerebellum output."
      },
      {
        "text": "Interposed Nuclei",
        "explanation": "Incorrect. Spinocerebellum output."
      },
      {
        "text": "Fastigial Nucleus",
        "explanation": "Incorrect. Vermis output (Spinocerebellum). Though some vestibular overlap, it's not the primary route for the flocculonodular lobe."
      },
      {
        "text": "None (Direct projection to Vestibular Nuclei)",
        "explanation": "Correct. Uniquely, the Flocculonodular Lobe bypasses the Deep Cerebellar Nuclei and Purkinje axons project directly to the Vestibular Nuclei in the brainstem.",
        "isCorrect": true
      },
      {
        "text": "Red Nucleus",
        "explanation": "Incorrect. Not a cerebellar nucleus."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Vestibulocerebellum is the exception - it projects DIRECTLY to Vestibular Nuclei, bypassing deep nuclei.",
    "pdfPage": 11,
    "pdfQuote": "vestibular cerebellum"
  }
];
