const batch3 = [
  {
    "id": 21,
    "category": "Rheumatology: Joint Disease",
    "questionText": "A 38-year-old male presents with acute, severe pain and swelling in his left knee that began abruptly overnight. He is afebrile. He recalls having a severe diarrheal illness roughly three weeks ago after eating at a questionable barbecue restaurant. On examination, the left knee is inflamed, and there is distinct, profound swelling of his right Achilles tendon insertion. Moreover, he reports mild pain with urination but denies any urethral discharge. Synovial fluid aspiration from the knee reveals a WBC count of 15,000 cells/mm3 (predominantly neutrophils) but is utterly sterile on culture. What is the most likely fundamental pathogenesis behind this patient's acute arthritis?",
    "options": [
      {
        "text": "Direct invasion of the synovial space by an intracellular gastrointestinal pathogen",
        "explanation": "Incorrect. This describes septic arthritis (e.g., from Salmonella or Shigella directly invading the joint). However, in septic arthritis, the synovial fluid culture would typically be positive, and the WBC count is usually much higher (>50,000). This would be correct if the knee culture grew the pathogen directly."
      },
      {
        "text": "Deposition of circulating IgG-antigen soluble immune complexes within the joint capsule",
        "explanation": "Incorrect. This mechanism describes a Type III hypersensitivity reaction, such as in serum sickness or Lupus. While it can cause polyarthritis, the specific triad of symptoms (post-diarrheal, asymmetric oligoarthritis, enthesitis, urethritis) points strongly away from a generalized immune complex disease. This would be correct for early SLE."
      },
      {
        "text": "An autoimmune cross-reaction where antibodies primarily target cartilage glycoproteins",
        "explanation": "Incorrect. This heavily describes relapsing polychondritis, which primarily attacks cartilaginous structures like the ears, nose, and trachea. This would be correct if a patient presented with 'floppy' ears and saddle-nose deformity."
      },
      {
        "text": "Aberrant immune activation driven by molecular mimicry following a remote mucosal infection",
        "explanation": "Correct. This patient is presenting with Reactive Arthritis (formerly Reiter's syndrome), characterized by the classic triad: inflammatory arthritis (often asymmetric lower extremity), non-gonococcal urethritis, and conjunctivitis/uveitis ('can't see, can't pee, can't climb a tree'). Note he also has Achilles enthesitis. Reactive arthritis famously occurs weeks after a gastrointestinal (e.g., Shigella, Salmonella, Campylobacter) or genitourinary (e.g., Chlamydia) infection. The joint fluid is characteristically sterile because the disease is driven by an aberrant autoimmune response (molecular mimicry), primarily in HLA-B27 positive individuals, not by active joint infection."
      },
      {
        "text": "Precipitation of large quantities of calcium pyrophosphate within the meniscal cartilage",
        "explanation": "Incorrect. This describes Pseudogout. While it causes acute sterile knee flares, it is far more common in the elderly and is not characteristically provoked by a remote diarrheal illness or associated with urethritis. This would be the correct answer for an 80-year-old male with chondrocalcinosis on x-ray."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Reactive arthritis is an HLA-B27 associated, sterile inflammatory asymmetric oligoarthritis triggered predominantly by molecular mimicry weeks after a GI or GU infection.",
    "lectureSource": "Lecture 127: Rheumatology 1: Diseases of Joints"
  },
  {
    "id": 22,
    "category": "Pharmacology: DMARDs I",
    "questionText": "A 30-year-old female with Systemic Lupus Erythematosus (SLE) is maintained on hydroxychloroquine. Her disease has been beautifully controlled; she experiences no joint pain and her malar rash has completely resolved. However, her rheumatologist absolutely demands she attends a specialized medical appointment annually. Failure to attend this specific appointment risks permanent, irreversible morbidity associated exactly with this medication's toxic accumulation. To which specialist must she go?",
    "options": [
      {
        "text": "Cardiologist, to monitor for progressive structural deterioration of the cardiac valves",
        "explanation": "Incorrect. While some drugs (like historical ergot-derived dopaminergic agents or fenfluramine) cause valvulopathy, hydroxychloroquine does not. This would be true if the patient was taking cabergoline for Parkinson's."
      },
      {
        "text": "Ophthalmologist, to perform a dilated funduscopic exam assessing for maculopathy",
        "explanation": "Correct. Hydroxychloroquine is an essential, baseline DMARD heavily used in SLE to prevent flares. Its most feared, unique, and irreversible side effect is retinal toxicity. The drug binds avidly to melanin-containing cells within the retinal pigment epithelium. Over years, it can accumulate, leading to irreversible 'bulls-eye' maculopathy and permanent central vision loss. Therefore, annual ophthalmologic screening utilizing advanced modalities (like OCT or visual fields) is absolutely mandatory."
      },
      {
        "text": "Pulmonologist, to conduct rigorous pulmonary function tests for interstitial fibrosis",
        "explanation": "Incorrect. Methotrexate is highly associated with rare but severe interstitial pneumonitis. Hydroxychloroquine does not characteristically cause lung fibrosis. This would be the correct answer if the patient had newly developed dry cough on methotrexate."
      },
      {
        "text": "Hepatologist, to ultrasound the liver tracking silent, progressive portal cirrhosis",
        "explanation": "Incorrect. Methotrexate and Leflunomide are heavily hepatotoxic and require routine tracking of LFTs, but hydroxychloroquine is relatively liver-safe. This would be the correct choice if the patient was chronically using methotrexate or heavy daily acetaminophen."
      },
      {
        "text": "Nephrologist, to evaluate for acute tubular necrosis using regular renal biopsies",
        "explanation": "Incorrect. NSAIDs and calcineurin inhibitors (like cyclosporine) are heavily nephrotoxic, but hydroxychloroquine is not typically associated with primary structural renal toxicity requiring screening biopsies. This would be the correct answer if the patient had uncontrolled Lupus Nephritis."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Chronic hydroxychloroquine use carries a very specific, severely irreversible risk of retinal toxicity ('bulls-eye' maculopathy), absolutely necessitating rigorous baseline and annual ophthalmologic screening.",
    "lectureSource": "Lecture 132: Pharm: Pharmacology of DMARDs I"
  },
  {
    "id": 23,
    "category": "Pharmacology: Gout and Pseudogout",
    "questionText": "A 45-year-old obese male presents for his annual physical. Routine laboratory work reveals an asymptomatic hyperuricemia with a serum uric acid level of 9.5 mg/dL (Normal < 7.0 mg/dL). He has absolutely no history of joint pain, swelling, kidney stones, or tophi. He asks if he should be placed on daily allopurinol to 'clean out the uric acid' and prevent future arthritis. According to strict clinical guidelines, what is the best pharmacological course of action?",
    "options": [
      {
        "text": "Initiate colchicine immediately to prevent the imminent first gout attack",
        "explanation": "Incorrect. Colchicine is used strictly for acute attacks (or prophylaxis when initiating urate-lowering therapy in someone who already has gout). It is toxic and not indicated for someone who has never had a flare. This would be the correct answer if he possessed a hot, swollen toe today."
      },
      {
        "text": "Prescribe indomethacin daily to suppress the formation of urate crystals",
        "explanation": "Incorrect. Indomethacin is an NSAID used for acute attacks. It does not alter uric acid levels or prevent crystal formation, it only suppresses the inflammation once crystals form. Daily indomethacin would cause profound gastric and renal toxicity. This would be correct if treating an active acute flare."
      },
      {
        "text": "Start low-dose allopurinol to slowly bring the level below 6.0 mg/dL",
        "explanation": "Incorrect. While allopurinol is the exact drug used to lower uric acid chronically, it is generally NOT indicated for asymptomatic hyperuricemia. Most patients with asymptomatic hyperuricemia never develop clinical gout. Treating a number on a lab sheet exposes the patient to unnecessary drug risks (e.g., Allopurinol Hypersensitivity Syndrome). This would be the correct answer if he had a documented history of two or more gout flares per year."
      },
      {
        "text": "Do not initiate any pharmacological urate-lowering therapy",
        "explanation": "Correct. Asymptomatic hyperuricemia (elevated uric acid without a history of gout flares, tophi, or uric acid nephrolithiasis) should generally NOT be treated pharmacologically. The vast majority of these patients will never suffer a gout attack. Exposing them to potential severe hypersensitivity reactions (like DRESS syndrome or Stevens-Johnson from allopurinol) or financial burden is not clinically justified. Management involves lifestyle modifications (weight loss, decreased alcohol, avoiding purine-rich meats)."
      },
      {
        "text": "Prescribe probenecid to rapidly enhance proximal tubule uric acid excretion",
        "explanation": "Incorrect. Again, asymptomatic patients are not treated. Furthermore, rapidly dumping massive amounts of uric acid via probenecid risks precipitating a devastating uric acid kidney stone. This would be the correct answer if the patient had active, chronic gout and a 24-hour urine showing significant underexcretion."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Asymptomatic hyperuricemia (elevated uric acid without clinical symptoms) is generally not an indication for pharmacological urate-lowering therapy; management relies strictly on lifestyle modification.",
    "lectureSource": "Lecture 130: Pharm: Pharmacology of Gout and Pseudogout"
  },
  {
    "id": 24,
    "category": "Immunology: Autoimmune Pathology",
    "questionText": "A 55-year-old male with long-standing rheumatoid arthritis managed with methotrexate experiences a worsening of symmetric joint pain in his hands. Believing he is having a typical flare, he delays seeking care. Months later, he begins exhibiting profound fatigue, massive splenomegaly on physical exam, and recurrent, severe bacterial infections. A complete blood count reveals marked, dangerous neutropenia (Absolute Neutrophil Count = 300 cells/mm3). This patient's rapidly progressive triad of symptoms is historically named:",
    "options": [
      {
        "text": "Sjogren's Syndrome",
        "explanation": "Incorrect. Sjogren’s presents with dry eyes and dry mouth due to lymphocytic infiltration of exocrine glands. Splenomegaly and severe neutropenia are not its classic defining triad. This would be the correct answer if the patient couldn't produce tears or saliva."
      },
      {
        "text": "Felty Syndrome",
        "explanation": "Correct. The patient has developed Felty Syndrome, an extremely severe, though now uncommon, complication of long-standing Rheumatoid Arthritis. It is classically defined by the clinical triad of: 1) severe Rheumatoid Arthritis, 2) Splenomegaly, and 3) profound Neutropenia. The massive splenomegaly sequesters and destroys neutrophils, significantly elevating the patient's risk for deadly, recurrent bacterial infections."
      },
      {
        "text": "Caplan Syndrome",
        "explanation": "Incorrect. Caplan Syndrome is Rheumatoid Arthritis occurring concurrently with massive pulmonary fibrotic nodules, specifically in the setting of coal worker's pneumoconiosis. This would be the correct answer if the patient was a long-time coal miner presenting with severe shortness of breath and progressive massive fibrosis."
      },
      {
        "text": "Still's Disease",
        "explanation": "Incorrect. Adult-onset Still's disease involves quotidian spiking fevers, a transient salmon-colored rash, and polyarthritis, mirroring Systemic JIA. It does not predominantly feature massive splenomegaly driving profound neutropenia. This would be the correct answer if he had daily fevers and a rash."
      },
      {
        "text": "Evans Syndrome",
        "explanation": "Incorrect. Evans syndrome is an autoimmune disorder defined by the simultaneous occurrence of Autoimmune Hemolytic Anemia (AIHA) and Immune Thrombocytopenic Purpura (ITP). It is not inherently linked to RA or severe neutropenia. This would be the correct answer if he presented with jaundice, low platelets, and a positive direct Coombs test."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Felty Syndrome is a severe complication of long-standing Rheumatoid Arthritis defined by the classic triad of aggressive RA, splenomegaly, and dangerous neutropenia leading to severe infections.",
    "lectureSource": "Lecture 128: Rheumatology 2: Systemic Rheumatologic Disease"
  },
  {
    "id": 25,
    "category": "Orthopedics: Ankle and Foot Exam",
    "questionText": "A 40-year-old male presents to the clinic complaining of excruciating heel pain that is remarkably sharp and intense during his first few steps out of bed every morning. The pain notably decreases after walking for about ten minutes, but returns powerfully if he sits at his desk for a long period and then stands up. During the physical exam, passively dorsiflexing all his toes (especially the hallux) while manually palpating the medial calcaneal tubercle reproduces his sharp pain perfectly. Based on the pathogenesis, into which fascial structure is the stress primarily being distributed?",
    "options": [
      {
        "text": "The massive, collagenous structure of the Achilles tendon",
        "explanation": "Incorrect. Achilles tendinopathy causes posterior heel pain, distinct from the plantar surface. Dorsiflexing the toes doesn't primarily stress the Achilles. This would be the correct answer if he experienced pain squeezing the posterior ankle precisely during the Thompson test."
      },
      {
        "text": "The deep compartment encompassing the posterior tibial tendon",
        "explanation": "Incorrect. Posterior tibial tendon dysfunction leads to medial ankle pain and the collapse of the medial longitudinal arch (acquired flatfoot). This would be the correct answer if the patient had medial ankle pain and was completely unable to perform a single-leg heel raise."
      },
      {
        "text": "The robust aponeurosis extending from the calcaneus to the proximal phalanges",
        "explanation": "Correct. This patient presents with the classic symptoms and physical exam findings of Plantar Fasciitis. The intense pain with the first steps in the morning is pathognomonic. The plantar fascia is a thick, robust aponeurosis originating from the medial calcaneal tubercle and inserting into the bases of the proximal phalanges. 'The Windlass mechanism'—passively extending the toes (especially the big toe)—heavily tightens the plantar fascia, reproducing the pain exactly at its stressed calcaneal origin."
      },
      {
        "text": "The retinaculum wrapping the tarsal tunnel surrounding the tibial nerve",
        "explanation": "Incorrect. Tarsal tunnel syndrome causes burning, tingling pain localized to the medial ankle radiating to the sole of the foot due to tibial nerve entrapment. Tinel's sign would be positive. This would be the correct answer if he complained of electrical shock sensations on the bottom of his foot."
      },
      {
        "text": "The intermetatarsal bursae surrounding the digital nerves",
        "explanation": "Incorrect. This describes a Morton's neuroma, causing burning pain and a 'pebble in the shoe' sensation classically between the 3rd and 4th metatarsophalangeal joints. This would be the correct answer if squeezing the forefoot caused a painful 'click' (Mulder's sign)."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Plantar fasciitis classically causes severe morning heel pain; the pain is accurately reproduced by extending the toes (the Windlass test), which places maximal tension across the inflamed calcaneal origin of the plantar aponeurosis.",
    "lectureSource": "Lecture 135: DPR: Ankle and Foot Exam"
  },
  {
    "id": 26,
    "category": "Rheumatology: Joint Disease",
    "questionText": "A 75-year-old female complains of deep, aching pain in her right hip and bilateral knees that reliably worsens throughout the day, especially after walking around the grocery store. She notes her knees feel stiff when she wakes up, but this resolves within roughly ten minutes. Radiographs of her knees demonstrate asymmetric joint space narrowing, subchondral sclerosis, and notable osteophyte formation. Which of the following best defines the underlying pathophysiologic trigger for her symptoms?",
    "options": [
      {
        "text": "Autoantibody formation against the highly modified citrullinated peptides within the synovium",
        "explanation": "Incorrect. This mechanism describes Rheumatoid Arthritis (anti-CCP antibodies). RA features prolonged morning stiffness (>1 hour) and symmetric polyarthritis, usually sparing the DIP joints. This would be the correct answer if she presented with symmetric hand swelling, marginal erosions, and systemic fatigue."
      },
      {
        "text": "Mechanical disruption of the articular cartilage surface leading to chaotic chondrocyte responses",
        "explanation": "Correct. The patient presents with Osteoarthritis (OA), the most incredibly common joint disease, heavily driven by aging and biomechanical wear-and-tear. Unlike RA, OA morning stiffness is generally brief (<30 mins) and pain characteristically worsens with active use over the day. The primary insult is mechanical injury to the focal articular cartilage. Chondrocytes attempt to repair the damage but fail, releasing degradative enzymes. This results in cartilage loss (joint space narrowing), bone rubbing on bone (subchondral sclerosis), and the reactive formation of new peripheral bone (osteophytes)."
      },
      {
        "text": "Precipitation of monosodium urate crystals causing a massive neutrophil influx",
        "explanation": "Incorrect. This describes Gout, an acute, excruciatingly painful inflammatory arthropathy. Osteoarthritis is largely a non-inflammatory (or low-grade inflammatory) degenerative process. This would be the correct answer for sudden, severe swelling and erythema localized to the first MTP joint."
      },
      {
        "text": "Systemic infiltration of the joint capsule by inflammatory Th17 lymphocytes",
        "explanation": "Incorrect. Inflammatory T-cells are prominent in autoimmune arthritides like Rheumatoid Arthritis or Psoriatic Arthritis, not primarily in degenerative Osteoarthritis. This would be the correct answer if identifying the primary cellular driving force behind severe autoimmune pannus formation."
      },
      {
        "text": "Bacterial seeding via hematogenous spread from a remote occult infection",
        "explanation": "Incorrect. Septic arthritis presents abruptly with profound fever, massive swelling, and excruciating pain upon any joint movement. This would be the correct answer if she presented acutely with a hot, red, immensely swollen knee."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Osteoarthritis is fundamentally a degenerative disease involving mechanical disruption of articular cartilage, leading to chaotic chondrocyte responses, focal cartilage loss, and reactive osteophyte formation; pain worsens with use.",
    "lectureSource": "Lecture 127: Rheumatology 1: Diseases of Joints"
  },
  {
    "id": 27,
    "category": "Pharmacology: DMARDs II",
    "questionText": "A 40-year-old male with severe plaque psoriasis and progressive psoriatic arthritis has failed topical therapies, methotrexate, and a primary TNF-alpha inhibitor. The rheumatologist decides to utilize Ustekinumab, a potent, targeted monoclonal biologic. Which two specific inflammatory interleukins are directly intercepted and blocked by this medication?",
    "options": [
      {
        "text": "IL-1 and IL-6",
        "explanation": "Incorrect. IL-1 represents the target of Anakinra; IL-6 is the target of Tocilizumab. While both are used in inflammatory arthritides, they do not accurately identify Ustekinumab. This would be the correct answer if identifying separate drugs used in severe RA or Systemic JIA."
      },
      {
        "text": "IL-12 and IL-23",
        "explanation": "Correct. Ustekinumab is a highly targeted human monoclonal antibody specifically engineered to bind the p40 protein subunit. This p40 subunit is completely shared by two specific cytokines: Interleukin-12 (IL-12) and Interleukin-23 (IL-23). Blocking IL-12 paralyzes Th1 pathway development, and blocking IL-23 paralyzes Th17 pathway development. This dual-blockade profoundly decreases mucosal and cutaneous inflammation, making it highly effective for Psoriasis, Psoriatic Arthritis, and Crohn's disease."
      },
      {
        "text": "IL-2 and IL-4",
        "explanation": "Incorrect. IL-2 drives broad T-cell proliferation (targeted heavily by older transplant drugs like Basiliximab/Daclizumab), and IL-4 drives Th2 allergic responses. This would be the correct answer if discussing anti-rejection or severe allergy mechanics."
      },
      {
        "text": "IL-17 and IL-10",
        "explanation": "Incorrect. While IL-17 is a massive downstream player in psoriasis (targeted directly by Secukinumab), IL-10 is purely an anti-inflammatory, regulatory cytokine. Blocking it would catastrophically worsen autoimmunity. This would be the correct answer if describing the downstream target (IL-17) alongside an incorrect regulatory cytokine."
      },
      {
        "text": "IL-5 and IL-13",
        "explanation": "Incorrect. These are Th2 cytokines intricately involved in eosinophilia and asthma. Drugs like Mepolizumab target IL-5. This would be the correct answer if treating severe eosinophilic asthma."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Ustekinumab directly targets the shared p40 subunit of IL-12 and IL-23, potently blocking both Th1 and Th17 inflammatory pathways often implicated in Psoriasis and Crohn's disease.",
    "lectureSource": "Lecture 133: Pharm: Pharmacology of DMARDs II"
  },
  {
    "id": 28,
    "category": "Rheumatology: Diseases Affecting Muscle",
    "questionText": "A 52-year-old female presents with severe, progressive difficulty standing up from a seated position and lifting items onto high shelves. She notes she has to 'throw her body weight' to stand up. Despite this marked muscular weakness, she reports absolutely no muscle pain. A physical exam confirms profound, symmetric, 3/5 strength in her shoulders and hips, with largely normal distal strength. Her physician orders an endomysial muscle biopsy. The resulting pathology perfectly demonstrates a diffuse invasion of CD8+ cytotoxic T cells directly surrounding and aggressively destroying individual healthy muscle fibers. Which specific autoimmune myopathy does this presentation best describe?",
    "options": [
      {
        "text": "Dermatomyositis",
        "explanation": "Incorrect. While Dermatomyositis presents identically with painless proximal muscle weakness, its pathology is vastly different. It involves CD4+ T cells targeting the vasculature within the perimysium, leading to perifascicular atrophy. Furthermore, it classically features skin manifestations (Gottron papules, heliotrope rash). This would be the correct answer if the biopsy showed perimysial inflammation and the patient had a rash."
      },
      {
        "text": "Polymyalgia Rheumatica",
        "explanation": "Incorrect. PMR is characterized by severe pain and immense morning stiffness in the shoulders and hips, NOT primarily by actual muscular weakness on exam. Muscle enzymes (CK) are normal. This would be the correct answer for a 70-year-old woman with severe morning shoulder pain who magically improved on low-dose prednisone."
      },
      {
        "text": "Polymyositis",
        "explanation": "Correct. This patient presents with the classic symptoms of an inflammatory myopathy: symmetric, painless proximal muscle weakness. The defining histopathological hallmark of Polymyositis (unlike Dermatomyositis) is an aggressive, endomysial inflammatory infiltrate predominantly composed of CD8+ cytotoxic T-cells that purposefully surround and directly attack healthy individual muscle fibers. There are typically no overlying cutaneous manifestations."
      },
      {
        "text": "Inclusion Body Myositis",
        "explanation": "Incorrect. IBM notably involves distal muscles (finger flexors) alongside proximal muscles, often asymmetrically. The biopsy reveals distinctive rimmed vacuoles inside the muscle fibers, not just CD8+ invasion. This would be the correct answer if the patient was a 65-year-old male with an asymmetrical weak grip and rimmed vacuoles on biopsy."
      },
      {
        "text": "Myasthenia Gravis",
        "explanation": "Incorrect. This involves antibodies against the post-synaptic acetylcholine receptor. Fatigable weakness (worsening notably with use) is the hallmark, and extraocular muscles (ptosis, diplopia) are incredibly common. This would be the correct answer if her symptoms worsened immensely by the evening and she exhibited ptosis."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Polymyositis causes painless proximal muscle weakness; histologically, it is distinctly marked by a dense endomysial infiltrate composed of CD8+ T-cells aggressively attacking intact, healthy muscle fibers.",
    "lectureSource": "Lecture 129: Rheumatology 3: Diseases Affecting Muscle"
  },
  {
    "id": 29,
    "category": "Immunology: Adaptive Responses",
    "questionText": "An immunologist is heavily investigating the fundamental process of immunoglobulin class switching in human B cells. She discovers that despite having normal V(D)J recombination and generating fully functional IgM molecules, a patient's B cells completely fail to switch their heavily chains to produce IgG, IgA, or IgE. The patient is found to lack the expression of a critical enzymatic mediator. The genetic deficiency in this patient most likely involves severely compromised function of which enzyme?",
    "options": [
      {
        "text": "Recombination-activating genes 1 and 2 (RAG1/RAG2)",
        "explanation": "Incorrect. RAG enzymes are responsible for initial V(D)J recombination to form the variable region. If they were absent, the patient would lack mature B cells entirely (SCID). The stem states V(D)J recombination is normal. This would be the correct answer for a patient with Omenn Syndrome."
      },
      {
        "text": "Activation-induced cytidine deaminase (AID)",
        "explanation": "Correct. Activation-induced cytidine deaminase (AID) is the absolute master enzyme responsible for immunoglobulin class switching (isotype switching) and somatic hypermutation. Present in active, germinal center B-cells, AID enzymatically functions by aggressively deaminating cytosine to uracil in single-stranded DNA. This essentially introduces intentional DNA breaks in specific 'switch regions', triggering repair mechanisms that ultimately delete sections of the heavy chain constant region, replacing IgM arrays with IgG, IgA, or IgE. A deficiency in AID directly causes Hyper-IgM Syndrome type 2."
      },
      {
        "text": "Terminal deoxynucleotidyl transferase (TdT)",
        "explanation": "Incorrect. TdT adds random N-nucleotides to the joints between V, D, and J segments during initial recombination, creating vast junctional diversity. It is not involved in heavy chain class switching. This would be the correct answer if analyzing the earliest stages of bone marrow lymphocyte diversity generation."
      },
      {
        "text": "Bruton tyrosine kinase (BTK)",
        "explanation": "Incorrect. BTK is necessary for early B-cell maturation. Without it, B cells arrest in the bone marrow, yielding essentially zero peripheral CD19/CD20 cells and zero IgM. The stem notes functional IgM exists. This would be the correct answer for X-linked Agammaglobulinemia."
      },
      {
        "text": "Adenosine deaminase (ADA)",
        "explanation": "Incorrect. ADA deficiency causes a profound accumulation of toxic purine metabolites, selectively killing all developing lymphocytes, leading to severe SCID. This would be the correct answer for an infant presenting with massive opportunistic infections and wholly absent lymphoid tissue."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Activation-induced cytidine deaminase (AID) is the indispensable enzyme required for B-cells to perform both somatic hypermutation and immunoglobulin isotype switching.",
    "lectureSource": "Lecture 124: Adaptive Immunity Part 2"
  },
  {
    "id": 30,
    "category": "Rheumatology: Joint Disease",
    "questionText": "A 40-year-old male with a 15-year history of severe plaque psoriasis affecting his knees and elbows presents to the rheumatologist. Over the past 6 months, he has developed insidious, destructive joint pain affecting the distal interphalangeal (DIP) joints of his hands symmetrically. Physical examination of the hands reveals noticeable destruction of the nails with deep 'pitting' and massive, uniform swelling of a single index finger (dactylitis/sausage digit). Which radiographic finding is considered a classic hallmark of his specific underlying arthropathy?",
    "options": [
      {
        "text": "Symmetric, severe narrowing of the joint space with vast, marginal osteophyte formation",
        "explanation": "Incorrect. This describes Ostearthritis (OA). While OA heavily targets the DIP joints, it rarely causes entire digit swelling (dactylitis) or nail pitting, and it definitely lacks a strong association with severe cutaneous psoriasis. This would be the correct answer if evaluating an elderly patient with Heberden's nodes."
      },
      {
        "text": "Diffuse osteopenia, subluxation of the MCP joints, and widespread ulnar deviation",
        "explanation": "Incorrect. This extensively describes end-stage Rheumatoid Arthritis. Crucially, RA almost universally spares the DIP joints entirely. This would be the correct answer if the patient had bilateral PIP/MCP swelling with positive RF/anti-CCP."
      },
      {
        "text": "Formation of bridging syndesmophytes fusing the entire lumbar and thoracic spine",
        "explanation": "Incorrect. This describes a 'bamboo spine,' the classic ultimate outcome of severe Ankylosing Spondylitis. While Psoriatic Arthritis can involve the spine asymmetrically, bridging syndesmophytes defines AS. This would be the correct answer for a young male with positive HLA-B27 complaining entirely of lower back pain."
      },
      {
        "text": "Significant periarticular erosions showing a distinctive 'pencil-in-cup' deformity",
        "explanation": "Correct. This patient possesses classic Psoriatic Arthritis (PsA), a seronegative spondyloarthropathy occurring in 15-30% of severe plaque psoriasis patients. PsA classically attacks the DIP joints (unlike RA) and exhibits massive dactylitis ('sausage digits') and extensive nail pitting. Radiographically, the simultaneous destruction of the distal phalanx (whittling it to a 'pencil') and the erosion/expansion of the adjacent proximal phalanx (creating a 'cup') produces the pathognomonic 'pencil-in-cup' deformity on x-ray."
      },
      {
        "text": "Punched-out, intra-articular bony erosions characterized by overhanging edges",
        "explanation": "Incorrect. This radiograph sign describes Gout (the 'rat-bite' or overhanging edge erosions) caused by tophaceous crystal deposition. This would be the correct answer if evaluating chronic tophaceous gout."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Psoriatic Arthritis uniquely involves the DIP joints, features dactylitis and nail pitting, and is famously characterized radiographically by the destructive 'pencil-in-cup' articular deformity.",
    "lectureSource": "Lecture 127: Rheumatology 1: Diseases of Joints"
  }
];

window.Test_Cumulative_Week14 = window.Test_Cumulative_Week14.concat(batch3);
