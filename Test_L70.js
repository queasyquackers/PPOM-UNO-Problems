
// Lecture 70 Questions
// Source: Lecture # 70. A. Patel, D.O. (PPT).pdf + Transcript
// 20 Questions (Types A & B interleaved)

const Test_L70 = [
    {
        "id": 1,
        "category": "Newborn Exam",
        "questionText": "A newborn male is evaluated at 1 minute of life. The infant has a heart rate of 90/min, a weak cry with irregular breathing, some flexion of the extremities, and grimaces with stimulation. His body is pink, but his extremities are blue. Based on these findings, what is the most accurate APGAR score for this infant?",
        "options": [
            {
                "text": "5",
                "explanation": "Correct. The score is calculated as follows: Appearance: Body pink, extremities blue (Acrocyanosis) = 1. Pulse: <100/min = 1. Grimace: Grimaces with stimulation = 1. Activity: Some flexion = 1. Respiration: Weak/Irregular = 1. Total = 1+1+1+1+1 = 5.",
                "lectureSource": undefined
            },
            {
                "text": "8",
                "explanation": "Incorrect. A score of 8-10 is considered excellent condition. This infant has signs of moderate depression (score 4-6). This would be the correct answer if the infant was completely pink (rare) and had vigorous activity.",
                "lectureSource": undefined
            },
            {
                "text": "7",
                "explanation": "Incorrect. A score of 7 usually indicates a vigorous infant. This would require 2s in several categories, such as HR >100, strong cry, and active motion. This would be the correct answer if the baby had a strong cry and heart rate >100/min.",
                "lectureSource": undefined
            },
            {
                "text": "6",
                "explanation": "Incorrect. A score of 6 would require an additional point, such as a heart rate >100 (2 points) or active motion (2 points). This would be the correct answer if the heart rate were >100/min.",
                "lectureSource": undefined
            },
            {
                "text": "4",
                "explanation": "Incorrect. Let's calculate: Heart rate <100 (1), Irregular breathing (1), Some flexion (1), Grimace (1), Acrocyanosis (1). Total = 5. A score of 4 would imply one less point in a category, such as being flaccid (0 for activity) or having no response to stimulation (0 for grimace). This would be the correct answer if the infant had no response to stimulation.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "APGAR scores are calculated at 1 and 5 minutes: Appearance, Pulse, Grimace, Activity, Respiration. A score of 7-10 is excellent; 4-6 is moderately depressed.",
        "lectureSource": undefined
    },
    {
        "id": 2,
        "category": "Growth & Development",
        "questionText": "A 4-day-old female is brought to the clinic for her first newborn visit. She was born at 3.5 kg. Her current weight is 3.3 kg. The mother is exclusively breastfeeding and is concerned about the weight loss. Physical exam is unremarkable, and the infant is feeding well every 3 hours. What is the most appropriate counseling for this weight change?",
        "options": [
            {
                "text": "Reassure that up to 10% weight loss is normal",
                "explanation": "Correct. Newborns typically lose up to 10% of their birth weight in the first few days of life due to fluid shifts and establishing feeding. This infant has lost ~5.7% (200g/3500g), which is well within normal limits. They typically regain birth weight by 10-14 days.",
                "lectureSource": undefined
            },
            {
                "text": "Increase feeding frequency to every hour",
                "explanation": "Incorrect. Every 2-3 hours is standard. Every hour is unnecessary and exhausting for the mother. This would be the correct answer if the infant was hypoglycemic and needed frequent stabilization.",
                "lectureSource": undefined
            },
            {
                "text": "Start formula supplementation immediately",
                "explanation": "Incorrect. This weight loss is within the normal range. Supplementation is not indicated unless weight loss exceeds 10% or there are signs of dehydration. This would be the correct answer if the baby had lost >10% of birth weight.",
                "lectureSource": undefined
            },
            {
                "text": "Refer to the emergency department for dehydration",
                "explanation": "Incorrect. There are no signs of dehydration mentioned, and the weight loss is physiologic. This would be the correct answer if the infant was lethargic with sunken fontanelles.",
                "lectureSource": undefined
            },
            {
                "text": "Admit for failure to thrive workup",
                "explanation": "Incorrect. This is physiologic weight loss, not failure to thrive. Failure to thrive is a long-term growth failure. This would be the correct answer if the child was older and crossing major percentiles downward.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Newborns can lose up to 10% of birth weight in the first week but should regain it by 10-14 days of life.",
        "lectureSource": undefined
    },
    {
        "id": 3,
        "category": "Head & Neck",
        "questionText": "A newborn male delivered via vacuum extraction is found to have a scalp swelling. Physical examination reveals a soft, boggy mass that crosses suture lines. The skin overlying the mass appears normal with some mild bruising. The infant is otherwise asymptomatic. Which of the following is the most likely diagnosis?",
        "options": [
            {
                "text": "Cranial meningocele",
                "explanation": "Incorrect. This would be a protrusion of meninges through a skull defect, typically pulsatile and associated with other anomalies. This would be the correct answer if there was a palpable skull defect.",
                "lectureSource": undefined
            },
            {
                "text": "Cephalohematoma",
                "explanation": "Incorrect. Cephalohematoma is a subperiosteal collection of blood that DOES NOT cross suture lines. It is firm and limited by the sutures. This would be the correct answer if the mass was limited to one bone and did not cross sutures.",
                "lectureSource": undefined
            },
            {
                "text": "Caput succedaneum",
                "explanation": "Correct. Caput succedaneum is edema of the scalp soft tissue that crosses suture lines. It is commonly caused by vacuum extraction or prolonged labor ('Cap' covers the head). It typically resolves spontaneously in a few days.",
                "lectureSource": undefined
            },
            {
                "text": "Porencephalic cyst",
                "explanation": "Incorrect. This is an intracerebral cyst, not a scalp swelling. It is not visible on external exam. This would be the correct answer if seen on cranial ultrasound.",
                "lectureSource": undefined
            },
            {
                "text": "Subgaleal hemorrhage",
                "explanation": "Incorrect. Subgaleal hemorrhage is a dangerous collection of blood that crosses suture lines but often presents with a fluid wave, diffuse boggy swelling, and signs of hypovolemia/shock. This would be the correct answer if the infant had signs of shock and a fluid wave.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "Caput succedaneum crosses suture lines (edema). Cephalohematoma does NOT cross suture lines (blood under periosteum).",
        "lectureSource": undefined
    },
    {
        "id": 4,
        "category": "Nutrition",
        "questionText": "A 2-week-old infant is brought in for a routine checkup. The mother asks about vitamin supplementation. The infant is exclusively breastfed. Which of the following is the most appropriate recommendation?",
        "options": [
            {
                "text": "Vitamin D supplementation",
                "explanation": "Correct. Breast milk does not contain sufficient Vitamin D. All exclusively breastfed infants should receive 400 IU of Vitamin D daily starting in the first few days of life to prevent rickets.",
                "lectureSource": undefined
            },
            {
                "text": "No supplementation is needed",
                "explanation": "Incorrect. Exclusively breastfed infants require Vitamin D. Formula often has it added. This would be the correct answer if the infant was drinking >1L of fortified formula daily.",
                "lectureSource": undefined
            },
            {
                "text": "Vitamin B12 supplementation",
                "explanation": "Incorrect. Usually only needed if the mother is a strict vegan. This would be the correct answer if the mother had a documented B12 deficiency.",
                "lectureSource": undefined
            },
            {
                "text": "Fluoride supplementation",
                "explanation": "Incorrect. Fluoride is usually not needed until 6 months of age, depending on water supply. This would be the correct answer if the child was >6 months in a non-fluoridated area.",
                "lectureSource": undefined
            },
            {
                "text": "Iron supplementation immediately",
                "explanation": "Incorrect. Iron stores typically last until 4-6 months. Supplementation starts around 4 months if exclusively breastfed. This would be the correct answer if the infant was 4-6 months old.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Exclusively breastfed infants require Vitamin D supplementation to prevent rickets.",
        "lectureSource": undefined
    },
    {
        "id": 5,
        "category": "Musculoskeletal",
        "questionText": "A 2-week-old female is evaluated for hip dysplasia. She was born breech via C-section. On examination, the physician flexes the hips to 90 degrees and abducts the thigh while lifting the greater trochanter anteriorly. A 'clunk' is felt as the femoral head reduces into the acetabulum. Which maneuver was performed and what is the next best step?",
        "options": [
            {
                "text": "Barlow maneuver; Orthopedic referral",
                "explanation": "Incorrect. This describes the Ortolani maneuver (Out/Abduction), not Barlow (Back/Adduction). This would be correct if the maneuver involved adducting tight hips.",
                "lectureSource": undefined
            },
            {
                "text": "Galeazzi maneuver; X-ray",
                "explanation": "Incorrect. Galeazzi checks for knee height asymmetry. X-rays are not useful until >4 months when the femoral head ossifies. Ultrasound is used for infants <4 months.",
                "lectureSource": undefined
            },
            {
                "text": "Ortolani maneuver; Reassurance",
                "explanation": "Incorrect. While this is the Ortolani maneuver, a positive 'clunk' indicates a dislocated hip that was reduced. This is a positive finding requiring referral/treatment, not reassurance.",
                "lectureSource": undefined
            },
            {
                "text": "Ortolani maneuver; Orthopedic referral",
                "explanation": "Correct. The Ortolani maneuver involves Abduction ('Out') and lifting to reduce a dislocated hip. A palpable 'clunk' is a positive sign indicating hip dysplasia, requiring referral to orthopedics for potential harnessing (Pavlik harness).",
                "lectureSource": undefined
            },
            {
                "text": "Barlow maneuver; Reassurance",
                "explanation": "Incorrect. The Barlow maneuver dislocates an unstable hip (adduction + posterior pressure). This description is Ortolani. Also, a positive finding requires evaluation, not reassurance.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Ortolani reduces the hip (Abduction/'Out'). Barlow dislocates the hip (Adduction/'Back'). Ultrasound is the imaging of choice <4 months.",
        "lectureSource": undefined
    },
    {
        "id": 6,
        "category": "Neurology",
        "questionText": "A 4-month-old male is brought to the clinic. The mother notes that when she startles him or there is a loud noise, he extends his arms and legs and then pulls them back in. She is concerned this is a seizure. You explain asking if this reflex is disappearing. By what age should the Moro reflex typically disappear?",
        "options": [
            {
                "text": "4 months",
                "explanation": "Correct. The Moro (startle) reflex typically appears at birth and disappears by 4-6 months of age. Persistence beyond this age can indicate neurologic abnormalities.",
                "lectureSource": undefined
            },
            {
                "text": "1 month",
                "explanation": "Incorrect. Primitive reflexes like Moro are present at birth and persist longer than 1 month. This would be too early for it to disappear.",
                "lectureSource": undefined
            },
            {
                "text": "It persists into adulthood",
                "explanation": "Incorrect. Only certain reflexes like the parachute or corneal reflex persist. The Moro reflex must disappear to allow for voluntary movement.",
                "lectureSource": undefined
            },
            {
                "text": "9 months",
                "explanation": "Incorrect. This is too late. Persistence at 9 months would be concerning for cerebral palsy or other neurologic deficits.",
                "lectureSource": undefined
            },
            {
                "text": "12 months",
                "explanation": "Incorrect. This is significantly delayed. By 12 months, voluntary motor control should dominate.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "The Moro reflex (startle reflex) typically disappears by 4 months of age.",
        "lectureSource": undefined
    },
    {
        "id": 7,
        "category": "Ophthalmology",
        "questionText": "A 6-month-old male is noted to have a white reflex in the left eye during a photograph with flash. The red reflex is present in the right eye but absent in the left, replaced by a white opacity. The infant is otherwise developing normally. Which of the following is the most concerning etiology that must be ruled out?",
        "options": [
            {
                "text": "Conjunctivitis",
                "explanation": "Incorrect. Conjunctivitis presents with injection and discharge, not an abnormal red reflex. This would be the correct answer if there was purulent discharge.",
                "lectureSource": undefined
            },
            {
                "text": "Retinoblastoma",
                "explanation": "Correct. Leukocoria (white pupillary reflex) is the classic presentation of Retinoblastoma, a malignant tumor of the retina. It is a 'can't miss' diagnosis in pediatrics.",
                "lectureSource": undefined
            },
            {
                "text": "Glaucoma",
                "explanation": "Incorrect. Congenital glaucoma typically presents with buphthalmos (large eye), clouding, and tearing, not necessarily a discrete white reflex on exam. This would be the correct answer if the eye was enlarged and cloudy.",
                "lectureSource": undefined
            },
            {
                "text": "Congenital Cataract",
                "explanation": "Incorrect. While this causes leukocoria (white reflex), Retinoblastoma is a life-threatening malignancy that must be the primary concern to rule out first. Cataracts are important but less immediately dangerous.",
                "lectureSource": undefined
            },
            {
                "text": "Strabismus",
                "explanation": "Incorrect. Strabismus is misalignment of the eyes. While it can be associated with retinoblastoma, strabismus itself does not cause a white reflex. This would be the correct answer if the corneal light reflexes were asymmetric.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Leukocoria (white reflex) requires immediate referral to ophthalmology to rule out Retinoblastoma.",
        "lectureSource": undefined
    },
    {
        "id": 8,
        "category": "Infectious Disease",
        "questionText": "A 3-day-old newborn presents with copious, purulent eye discharge and eyelid swelling. The mother had limited prenatal care. A Gram stain of the discharge reveals Gram-negative intracellular diplococci. What is the most appropriate treatment?",
        "options": [
            {
                "text": "Oral Erythromycin",
                "explanation": "Incorrect. Oral erythromycin is the treatment for Chlamydial conjunctivitis, which typically presents later (5-14 days) and has a watery/mucopurulent discharge. This would be correct if the Gram stain showed no organisms (as Chlamydia is not seen on Gram stain).",
                "lectureSource": undefined
            },
            {
                "text": "Intramuscular Ceftriaxone",
                "explanation": "Correct. This is Gonococcal conjunctivitis (ophthalmia neonatorum), which presents early (2-5 days) with severe purulent discharge. The organism is Neisseria gonorrhoeae (Gram-negative diplococci). Systemic treatment (IM Ceftriaxone/Cefotaxime) is required to prevent dissemination.",
                "lectureSource": undefined
            },
            {
                "text": "Warm compresses and massage",
                "explanation": "Incorrect. This is the treatment for a blocked tear duct (dacryostenosis), which presents with tearing but not this degree of severe acute purulence in a newborn. This would be correct if the eye was strictly tearing with no redness.",
                "lectureSource": undefined
            },
            {
                "text": "Topical Erythromycin only",
                "explanation": "Incorrect. Topical prophylaxis prevents it, but established infection requires systemic treatment. Topical alone is insufficient for active Gonococcal infection. This would be correct for prophylaxis at birth.",
                "lectureSource": undefined
            },
            {
                "text": "Topical Ciprofloxacin",
                "explanation": "Incorrect. Topical antibiotics alone are not sufficient for Gonococcal conjunctivitis due to the risk of sepsis and meningitis. Systemic treatment is mandatory.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Gonococcal conjunctivitis presents early (2-5 days) with purulent discharge and requires IM Cephalosporin (systemic treatment).",
        "lectureSource": undefined
    },
    {
        "id": 9,
        "category": "Dermatology",
        "questionText": "A 2-day-old full-term male has a rash on his face and trunk. Examination reveals yellow-white papules on an erythematous base. The infant is afebrile and feeding well. A microscopic examination of the pustule contents would reveal which of the following?",
        "options": [
            {
                "text": "Gram-positive cocci",
                "explanation": "Incorrect. This would imply a bacterial folliculitis or impetigo (Staph aureus). ETN is sterile. This would be correct if the lesions were honey-crusted.",
                "lectureSource": undefined
            },
            {
                "text": "Keratin cysts",
                "explanation": "Incorrect. This describes Milia (small white papules on the nose/face), which are epidermal inclusion cysts. They do not have an erythematous base. This would be correct for Milia.",
                "lectureSource": undefined
            },
            {
                "text": "Multinucleated giant cells",
                "explanation": "Incorrect. This would be seen in a Tzanck smear for Herpes Simplex Virus (HSV). HSV typically presents with vesicular lesions, not the 'flea-bitten' appearance of ETN. This would be correct if the infant had vesicular clusters.",
                "lectureSource": undefined
            },
            {
                "text": "Eosinophils",
                "explanation": "Correct. The description is classic for Erythema Toxicum Neonatorum (ETN), a benign, self-limiting rash common in newborns. A Wright stain of the lesion contents typically reveals numerous eosinophils.",
                "lectureSource": undefined
            },
            {
                "text": "Neutrophils",
                "explanation": "Incorrect. Neutrophils would be seen in transient neonatal pustular melanosis or bacterial infections. This presentation describes Erythema Toxicum Neonatorum. This would be correct if the rash was pustular melanosis.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Erythema Toxicum Neonatorum is a benign newborn rash containing eosinophils.",
        "lectureSource": undefined
    },
    {
        "id": 10,
        "category": "Development",
        "questionText": "A 9-month-old female is brought in for a well-child check. She is sitting well without support and transfers objects from hand to hand. Which fine motor milestone is most appropriate to expect at this age?",
        "options": [
            {
                "text": "Using a spoon",
                "explanation": "Incorrect. Self-feeding with a spoon usually begins around 15-18 months. This would be correct for a toddler.",
                "lectureSource": undefined
            },
            {
                "text": "Copying a square",
                "explanation": "Incorrect. Copying a square is a 4-5 year old milestone. This is much too advanced.",
                "lectureSource": undefined
            },
            {
                "text": "Pincer grasp",
                "explanation": "Correct. The pincer grasp (using the thumb and index finger to pick up small objects) typically develops around 9 months of age. Before this, infants use a 'rake' grasp.",
                "lectureSource": undefined
            },
            {
                "text": "Drawing a circle",
                "explanation": "Incorrect. Drawing a circle is a 3-year-old milestone. This is too advanced for a 9-month-old.",
                "lectureSource": undefined
            },
            {
                "text": "Stacking 6 blocks",
                "explanation": "Incorrect. Stacking 6 blocks is a milestone for a 2-year-old (24 months). A 12-15 month old might stack 2 blocks.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "The pincer grasp develops around 9 months. 'Raking' is the precursor.",
        "lectureSource": undefined
    },
    {
        "id": 11,
        "category": "Physical Exam",
        "questionText": "During a routine newborn exam, you note a large, soft, fluid-filled swelling on the infant's scalp that crosses the suture lines. The parents report a difficult delivery requiring vacuum assistance. The swelling seems to shift with movement (positive fluid wave) and the infant appears pale. Vital signs show tachycardia. What is the most critical diagnosis to consider?",
        "options": [
            {
                "text": "Caput succedaneum",
                "explanation": "Incorrect. Caput is edema (not fluid/blood) and is benign. It does not cause hypovolemia or a fluid wave. This would be correct if the infant was stable and the swelling was just edema.",
                "lectureSource": undefined
            },
            {
                "text": "Subgaleal hemorrhage",
                "explanation": "Correct. Subgaleal hemorrhage is rupture of emissary veins between the galea aponeurotica and periosteum. It is dangerous because this potential space can hold a large volume of blood (up to 40% of blood volume), leading to hypovolemic shock and anemia. The fluid wave and tachycardia are key red flags.",
                "lectureSource": undefined
            },
            {
                "text": "Cephalohematoma",
                "explanation": "Incorrect. Cephalohematoma leads to blood accumulation but is limited by suture lines and rarely causes significant hypovolemia acutely. It does not cross sutures. This would be correct if the mass was firm and non-fluctuant.",
                "lectureSource": undefined
            },
            {
                "text": "Hydrocephalus",
                "explanation": "Incorrect. Hydrocephalus is internal fluid accumulation in the ventricles. It presents with a bulging fontanelle and rapid head growth, not an extracranial fluid wave. This would be correct if the fontanelles were bulging.",
                "lectureSource": undefined
            },
            {
                "text": "Positional plagiocephaly",
                "explanation": "Incorrect. This is flattening of the skull from positioning, not an acute fluid collection or hemorrhage. This would be correct for a flat spot on the head.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "Subgaleal hemorrhage crosses sutures, has a fluid wave, and can cause life-threatening hypovolemia.",
        "lectureSource": undefined
    },
    {
        "id": 12,
        "category": "Abdominal Exam",
        "questionText": "A 3-week-old male newborn has a small umbilical mass that becomes more prominent when he cries. The mass is soft, easily reducible, and the skin overlying it is normal. The parents are concerned. What is the most appropriate management?",
        "options": [
            {
                "text": "Silver nitrate cauterization",
                "explanation": "Incorrect. Silver nitrate is used for umbilical granulomas (moist, pink tissue at the stump base), not hernias. This would be correct for a granuloma.",
                "lectureSource": undefined
            },
            {
                "text": "Apply a belly band or coin",
                "explanation": "Incorrect. This is an old wives' tale (strapping). It does not speed closure and can cause skin irritation. This is not recommended medical practice. This would be correct in historical context only.",
                "lectureSource": undefined
            },
            {
                "text": "Antibiotics",
                "explanation": "Incorrect. There is no sign of infection (omphalitis). Antibiotics are not indicated. This would be correct if there was redness and purulence (omphalitis).",
                "lectureSource": undefined
            },
            {
                "text": "Observation and reassurance",
                "explanation": "Correct. This is an umbilical hernia. The majority of small umbilical hernias close spontaneously by 3-5 years of age. Unless it is incarcerated (painful, non-reducible), observation is standard care.",
                "lectureSource": undefined
            },
            {
                "text": "Immediate surgical repair",
                "explanation": "Incorrect. Umbilical hernias in infants often close spontaneously. Surgery is usually reserved for those persisting after age 4-5 years or if incarceration occurs. This would be correct if the hernia was incarcerated (stuck/painful).",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Umbilical hernias in infants typically resolve spontaneously by age 3-5; surgery is rarely needed right away.",
        "lectureSource": undefined
    },
    {
        "id": 13,
        "category": "Genitourinary",
        "questionText": "A newborn male is examined and noted to have the urethral meatus located on the ventral surface of the ***** (underside). What is the appropriate diagnosis and contraindicated procedure?",
        "options": [
            {
                "text": "Hypospadias; Renal Ultrasound",
                "explanation": "Incorrect. While renal anomalies can co-occur, the specific procedural contraindication asked for is circumcision. Routine renal US is not always mandated for isolated mild hypospadias. This would be correct if asking for imaging workup.",
                "lectureSource": undefined
            },
            {
                "text": "Phimosis; Retraction",
                "explanation": "Incorrect. Phimosis is the inability to retract the foreskin, which is physiologic in newborns. This is unrelated to meatal placement. This would be correct if the foreskin was tight.",
                "lectureSource": undefined
            },
            {
                "text": "Epispadias; Circumcision",
                "explanation": "Incorrect. Epispadias is the meatus on the DORSAL (top) surface. This patient has ventral placement. However, circumcision is contraindicated in both. This would be correct if the hole was on top.",
                "lectureSource": undefined
            },
            {
                "text": "Cryptorchidism; Orchiopexy",
                "explanation": "Incorrect. Cryptorchidism is an undescended testicle. It is treated with orchiopexy, but the question describes a urethral issue. This would be correct for an undescended testicle.",
                "lectureSource": undefined
            },
            {
                "text": "Hypospadias; Circumcision",
                "explanation": "Correct. Hypospadias is the ventral placement of the urethra. Circumcision is contraindicated because the prepuce (foreskin) may be needed for surgical reconstruction of the urethra later.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 4,
        "clinicalPearl": "Hypospadias (ventral urethra) is a contraindication to circumcision because the foreskin is used for repair.",
        "lectureSource": undefined
    },
    {
        "id": 14,
        "category": "Development",
        "questionText": "A 2-year-old male comes for a well-child visit. He can run, kick a ball, and stack 6 blocks. He speaks in 2-3 word sentences. The mother is concerned because he does not yet share toys well with other children. What is the best assessment of his development?",
        "options": [
            {
                "text": "Autism spectrum disorder",
                "explanation": "Incorrect. Lack of sharing at age 2 is normal. Red flags for autism would be lack of joint attention, no pointing, or regression. There is no evidence of this here. This would be correct if he had poor eye contact and repetitive behaviors.",
                "lectureSource": undefined
            },
            {
                "text": "Hearing impairment",
                "explanation": "Incorrect. He speaks in sentences, suggesting his hearing is adequate for speech development. This would be correct if he had speech delay.",
                "lectureSource": undefined
            },
            {
                "text": "Normal development",
                "explanation": "Correct. This child meets all standard milestones for a 2-year-old. 'Parallel play' (playing near but not typically *with*) is normal at this age. True cooperative play and sharing develop later (preschool age).",
                "lectureSource": undefined
            },
            {
                "text": "Delayed language skills",
                "explanation": "Incorrect. 2-word sentences are the milestone for 2 years ('detectable speech' rule of thumb: 2 years = 2/4 understandable, 2 word sentences). He is on track.",
                "lectureSource": undefined
            },
            {
                "text": "Delayed gross motor skills",
                "explanation": "Incorrect. Running and kicking a ball are appropriate for a 2-year-old. He is on track.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 2,
        "clinicalPearl": "2-year-old milestones: Run, 2-word sentences, parallel play, stack 6 blocks.",
        "lectureSource": undefined
    },
    {
        "id": 15,
        "category": "Preventive Medicine",
        "questionText": "You are counseling a mother about 'Safe Sleep' practices to prevent SIDS. Which of the following instructions is most aligned with AAP guidelines?",
        "options": [
            {
                "text": "Place the baby in a prone position (on stomach)",
                "explanation": "Incorrect. Prone sleeping is the single highest risk factor for SIDS. 'Back to Sleep' is the standard. This would be correct if discussing 'tummy time' while awake.",
                "lectureSource": undefined
            },
            {
                "text": "Use bumper pads to protect the head",
                "explanation": "Incorrect. Bumper pads, loose bedding, and stuffed animals are suffocation hazards and should not be in the crib. This would be correct if discussing crib aesthetics, not safety.",
                "lectureSource": undefined
            },
            {
                "text": "Bed-sharing is recommended for bonding",
                "explanation": "Incorrect. Bed-sharing increases the risk of SIDS/suffocation. Room-sharing (sleeping in the same room but separate surface) is recommended. This would be correct if discussing attachment parenting, not SIDS safety.",
                "lectureSource": undefined
            },
            {
                "text": "Place the baby on their side to prevent aspiration",
                "explanation": "Incorrect. Side sleeping is unstable and not recommended. Back sleeping is the safest. This would be correct in outdated advice.",
                "lectureSource": undefined
            },
            {
                "text": "Place the baby supine (on back) on a firm surface",
                "explanation": "Correct. 'Back to Sleep' (Supine) on a firm surface without loose bedding is the gold standard for SIDS prevention.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 4,
        "clinicalPearl": "Safe Sleep: Supine ('Back to Sleep'), firm mattress, no loose bedding.",
        "lectureSource": undefined
    },
    {
        "id": 16,
        "category": "Musculoskeletal",
        "questionText": "A newborn is noted to have a large birth weight (LGA). On exam, the infant holds the right arm adducted and internally rotated. The startle reflex is absent on the right. You palpate a crepitus over the right clavicle. What is the most likely diagnosis?",
        "options": [
            {
                "text": "Congenital Torticollis",
                "explanation": "Incorrect. Torticollis is neck muscle spasm causing head tilt. It does not cause arm paralysis or clavicular crepitus. This would be correct for a head tilt.",
                "lectureSource": undefined
            },
            {
                "text": "Nursemaid's Elbow",
                "explanation": "Incorrect. This is radial head subluxation, common in toddlers, not newborns. It occurs from pulling on the arm. This would be correct for a toddler with a traction injury.",
                "lectureSource": undefined
            },
            {
                "text": "Humerus Fracture",
                "explanation": "Incorrect. Crepitus is palpated over the clavicle, not the arm/humerus. This would be correct if crepitus was in the upper arm.",
                "lectureSource": undefined
            },
            {
                "text": "Clavicular Fracture",
                "explanation": "Correct. Clavicular fracture is the most common birth fracture, especially in LGA infants. Signs include crepitus, discontinuity (step-off), and pseudoparalysis (decreased movement due to pain). Treatment is pinning the sleeve.",
                "lectureSource": undefined
            },
            {
                "text": "Erb's Palsy",
                "explanation": "Incorrect. Erb's palsy (C5-C6) presents with the 'waiter's tip' position. While this infant has a nerve injury, the *cause* described—crepitus over the clavicle—points specifically to the fracture as the primary structural issue causing the pseudoparalysis. Erb's is the nerve issue; the fracture is the bone issue.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "Clavicle fracture is common in LGA newborns. Look for crepitus and decreased arm movement. Tx: Pin sleeve to chest.",
        "lectureSource": undefined
    },
    {
        "id": 17,
        "category": "Otolaryngology",
        "questionText": "A 3-year-old child presents with right ear pain. Examination reveals a swollen, erythematous ear canal with discharge. There is significant pain when you traction the pinna. The tympanic membrane is difficult to visualize due to edema. What is the diagnosis?",
        "options": [
            {
                "text": "Otitis Externa",
                "explanation": "Correct. Otitis Externa (External ear infection/Swimmer's ear) presents with canal inflammation and classic pain on traction of the pinna or tragus.",
                "lectureSource": undefined
            },
            {
                "text": "Foreign Body",
                "explanation": "Incorrect. While a foreign body can cause infection, the description is classic for diffuse otitis externa. A foreign body would usually be visualized or described explicitly. This would be correct if an object was seen.",
                "lectureSource": undefined
            },
            {
                "text": "Cholesteatoma",
                "explanation": "Incorrect. This is a destructive growth behind the ear drum, usually painless or associated with chronic drainage, not acute canal swelling/tenderness. This would be correct for a pearly mass behind the TM.",
                "lectureSource": undefined
            },
            {
                "text": "Acute Otitis Media",
                "explanation": "Incorrect. AOM affects the middle ear (behind the TM). Tragal/pinna tenderness is the hallmark of Otitis EXTERNA (Swimmer's ear), not AOM. This would be correct if there was a bulging TM with no canal pain.",
                "lectureSource": undefined
            },
            {
                "text": "Mastoiditis",
                "explanation": "Incorrect. Mastoiditis presents with post-auricular swelling and erythema, pushing the ear forward. While a complication, the primary description is canal pathology. This would be correct for post-auricular swelling.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 0,
        "clinicalPearl": "Otitis Externa: Pain on tragal/pinna pulling + swollen canal. Otitis Media: Bulging TM, no pain on pinna pull.",
        "lectureSource": undefined
    },
    {
        "id": 18,
        "category": "Cardiology",
        "questionText": "A newborn has a continuous 'machinery-like' murmur heard best at the left infraclavicular area. The pulses are bounding. The infant is otherwise pink and well-perfused. What is the most likely diagnosis?",
        "options": [
            {
                "text": "Ventricular Septal Defect (VSD)",
                "explanation": "Incorrect. VSD causes a harsh, holosystolic murmur at the left sternal border. This would be correct for a holosystolic murmur.",
                "lectureSource": undefined
            },
            {
                "text": "Patent Ductus Arteriosus (PDA)",
                "explanation": "Correct. A PDA connects the aorta and pulmonary artery. Because aortic pressure is higher than PA pressure in both systole and diastole, the flow is continuous, creating a 'machinery-like' murmur.",
                "lectureSource": undefined
            },
            {
                "text": "Atrial Septal Defect (ASD)",
                "explanation": "Incorrect. ASD causes a fixed split S2 and a systolic ejection murmur, not a continuous murmur. This would be correct for a fixed split S2.",
                "lectureSource": undefined
            },
            {
                "text": "Coarctation of the Aorta",
                "explanation": "Incorrect. Coarctation presents with decreased femoral pulses and potentially a systolic murmur at the back, not a continuous machinery murmur. This would be correct for weak femoral pulses.",
                "lectureSource": undefined
            },
            {
                "text": "Tetralogy of Fallot",
                "explanation": "Incorrect. TOF typically presents with a systolic ejection murmur from pulmonary stenosis and cyanosis ('Tet spell'). This would be correct for a cyanotic baby with a systolic murmur.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 1,
        "clinicalPearl": "PDA: Continuous machinery murmur. Indomethacin closes it; Prostaglandins keep it open.",
        "lectureSource": undefined
    },
    {
        "id": 19,
        "category": "Metabolic",
        "questionText": "A 3-day-old female infant presents with vomiting, poor feeding, and lethargy. The parents report a sweet, burnt sugar smell to the urine. Newborn screen results are pending. Which metabolic disorder is most likely?",
        "options": [
            {
                "text": "Phenylketonuria (PKU)",
                "explanation": "Incorrect. PKU causes a musty or 'mousy' odor, not sweet. It presents later with developmental delay if untreated. This would be correct for a musty odor.",
                "lectureSource": undefined
            },
            {
                "text": "Galactosemia",
                "explanation": "Incorrect. Galactosemia presents with jaundice, hepatomegaly, and cataracts (associated with E. coli sepsis). It does not typically have a sweet odor. This would be correct for jaundice/cataracts after milk feeding.",
                "lectureSource": undefined
            },
            {
                "text": "Homocystinuria",
                "explanation": "Incorrect. Presents with Marfanoid habitus and lens dislocation later in life. This would be correct for a Marfanoid child with lens issues.",
                "lectureSource": undefined
            },
            {
                "text": "Congenital Hypothyroidism",
                "explanation": "Incorrect. Presents with lethargy, large tongue, umbilical hernia, and constipation, but no sweet odor. This would be correct for a lethargic baby with a large tongue.",
                "lectureSource": undefined
            },
            {
                "text": "Maple Syrup Urine Disease (MSUD)",
                "explanation": "Correct. MSUD is a defect in branched-chain amino acid metabolism. It presents in the first few days with poor feeding, vomiting, and a classic sweet 'maple syrup' or burnt sugar odor to the urine/cerumen.",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 4,
        "clinicalPearl": "Maple Syrup Urine Disease: Branched-chain amino acid defect -> Sweet smelling urine.",
        "lectureSource": undefined
    },
    {
        "id": 20,
        "category": "Ethics/Social",
        "questionText": "A mother is concerned about her 18-month-old who says 'mama' and 'dada' but has no other words. He does not point to objects to show interest. She read online this could be autism. What is the most appropriate screening tool to administer at this age?",
        "options": [
            {
                "text": "SCOFF Questionnaire",
                "explanation": "Incorrect. SCOFF is used for eating disorders. This would be correct for an adolescent with body image issues.",
                "lectureSource": undefined
            },
            {
                "text": "Vanderbilt Scale",
                "explanation": "Incorrect. Vanderbilt is used for ADHD screening, typically in school-aged children (>6 years). his would be correct for a 7-year-old with focus issues.",
                "lectureSource": undefined
            },
            {
                "text": "Edinburgh Scale",
                "explanation": "Incorrect. Edinburgh Postnatal Depression Scale is for maternal postpartum depression. This would be correct for screening the mother.",
                "lectureSource": undefined
            },
            {
                "text": "M-CHAT",
                "explanation": "Correct. The M-CHAT (Modified Checklist for Autism in Toddlers) is the standard autism screening tool administered at 18 and 24 months. It assesses social-emotional milestones like pointing and joint attention.",
                "lectureSource": undefined
            },
            {
                "text": "PHQ-9",
                "explanation": "Incorrect. PHQ-9 is for depression screening in adolescents/adults. This would be correct for the mother (Edinburgh scale).",
                "lectureSource": undefined
            }
        ],
        "correctAnswerIndex": 3,
        "clinicalPearl": "M-CHAT is the autism screening tool used at 18 and 24 months.",
        "lectureSource": undefined
    }
];
