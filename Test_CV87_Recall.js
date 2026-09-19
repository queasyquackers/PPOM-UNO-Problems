// SET A - first-order recall items, in lecture order. File: Test_CV87_Recall.js
const Test_CV87_Recall = [
  {
    "id": 1,
    "category": "Calcium: Physiology and Regulation",
    "questionText": "Which serum calcium fraction is physiologically active and filtered at the glomerulus?",
    "options": [
      {
        "text": "Albumin-bound calcium, the protein fraction",
        "explanation": "Incorrect. Albumin-bound calcium is tied up and inactive. This would be the correct answer if asked about protein-bound calcium."
      },
      {
        "text": "Ionized calcium, the free fraction",
        "explanation": "Correct. About 45% of serum calcium is ionized, and only this free fraction is physiologically active and filtered. Albumin-bound (about 40%) and complexed (about 15%) calcium are inactive."
      },
      {
        "text": "Citrate-complexed calcium, an anion complex",
        "explanation": "Incorrect. Citrate complexes hold a small inactive share. This would be the correct answer if asked about anion-complexed calcium."
      },
      {
        "text": "Skeletal calcium, the bone mineral store",
        "explanation": "Incorrect. Bone stores about 99% of body calcium. This would be the correct answer if asked about the main calcium reservoir."
      },
      {
        "text": "Phosphate-complexed calcium, a salt complex",
        "explanation": "Incorrect. Phosphate complexes are part of the inactive 15%. This would be the correct answer if asked about calcium-phosphate complexes."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Only ionized calcium is active and filtered, so a total calcium must be read against albumin.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 3,
    "pdfQuote": "45% ionized (free)"
  },
  {
    "id": 2,
    "category": "Calcium: Physiology and Regulation",
    "questionText": "The active, regulated step of renal calcium reabsorption takes place in which nephron segment?",
    "options": [
      {
        "text": "Proximal tubule, passive with sodium",
        "explanation": "Incorrect. The proximal tubule reclaims about 70% passively. This would be the correct answer if asked about the largest share of reabsorption."
      },
      {
        "text": "Thick ascending limb, via claudin-16",
        "explanation": "Incorrect. This limb reclaims about 20% paracellularly. This would be the correct answer if asked about passive paracellular calcium transport."
      },
      {
        "text": "Glomerulus, where free calcium is filtered",
        "explanation": "Incorrect. The glomerulus filters ionized calcium but reabsorbs none. This would be the correct answer if asked where calcium enters the tubule."
      },
      {
        "text": "Distal nephron, via TRPV5 channels",
        "explanation": "Correct. Only about 15% is reclaimed distally, but it is the active step through TRPV5 and the main site of regulation and dysregulation. Proximal and thick ascending limb reabsorption are passive."
      },
      {
        "text": "Thin descending limb of the loop",
        "explanation": "Incorrect. The thin descending limb reclaims no calcium here. This would be the correct answer if asked about water-permeable loop segments."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Distal nephron TRPV5 transport is the only active, regulated step of renal calcium reabsorption.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 6,
    "pdfQuote": "15% Distal Nephron"
  },
  {
    "id": 3,
    "category": "Calcium: Physiology and Regulation",
    "questionText": "Parathyroid cells detect a fall in plasma ionized calcium through which structure?",
    "options": [
      {
        "text": "CaSR on the parathyroid cell surface",
        "explanation": "Correct. The calcium-sensing receptor on parathyroid cells registers any change in ionized calcium and adjusts PTH release. The same receptor type in the nephron lets calcium self-regulate its excretion."
      },
      {
        "text": "TRPV5 channel in the distal tubule",
        "explanation": "Incorrect. TRPV5 is the distal nephron calcium entry channel. This would be the correct answer if asked about active renal calcium reabsorption."
      },
      {
        "text": "TRPV6 channel in the duodenum",
        "explanation": "Incorrect. TRPV6 carries active intestinal calcium uptake. This would be the correct answer if asked about duodenal calcium absorption."
      },
      {
        "text": "Vitamin D receptor in enterocytes",
        "explanation": "Incorrect. This receptor mediates vitamin D effects. This would be the correct answer if asked how calcitriol acts on intestine."
      },
      {
        "text": "PTH receptor on renal tubular cells",
        "explanation": "Incorrect. This receptor responds to PTH, not calcium. This would be the correct answer if asked about PTH target cells."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: The calcium-sensing receptor links ionized calcium to PTH output, so a normal gland suppresses PTH when calcium is high.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 7,
    "pdfQuote": "Parathyroid hormone"
  },
  {
    "id": 4,
    "category": "Calcium: Physiology and Regulation",
    "questionText": "Vitamin D raises intestinal calcium absorption mainly through which change?",
    "options": [
      {
        "text": "Increased passive uptake in the colon",
        "explanation": "Incorrect. Passive paracellular uptake is about 5% of intake. This would be the correct answer if asked about the minor route."
      },
      {
        "text": "Decreased luminal calcium binding to citrate",
        "explanation": "Incorrect. Citrate complexing describes a serum calcium fraction. This would be the correct answer if asked about inactive serum complexes."
      },
      {
        "text": "Increased TRPV6 expression in duodenum",
        "explanation": "Correct. Vitamin D upregulates TRPV6, the apical channel for active transcellular uptake in the duodenum and proximal jejunum. In the kidney it acts through TRPV5 instead."
      },
      {
        "text": "Increased TRPV5 expression in enterocytes",
        "explanation": "Incorrect. TRPV5 is the renal distal channel. This would be the correct answer if asked about vitamin D in the collecting duct."
      },
      {
        "text": "Increased hepatic albumin synthesis",
        "explanation": "Incorrect. Albumin binds calcium in serum but does not drive absorption. This would be the correct answer if asked about protein-bound calcium."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Vitamin D drives gut calcium uptake through TRPV6 and renal reabsorption through TRPV5.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 8,
    "pdfQuote": "Vitamin D and Calcium"
  },
  {
    "id": 5,
    "category": "Calcium: Hypercalcemia",
    "questionText": "Primary hyperparathyroidism is most often caused by which lesion?",
    "options": [
      {
        "text": "Gland hyperplasia after renal transplant",
        "explanation": "Incorrect. This is tertiary hyperparathyroidism, a rare cause. This would be the correct answer if asked about persistent PTH after transplant."
      },
      {
        "text": "Ectopic PTH secretion by a tumor",
        "explanation": "Incorrect. Ectopic PTH is rare and mentioned for completeness. This would be the correct answer if asked about non-parathyroid PTH."
      },
      {
        "text": "Lung tumor secreting PTH-related protein",
        "explanation": "Incorrect. PTHrP causes humoral hypercalcemia of malignancy. This would be the correct answer if asked about squamous cell lung cancer."
      },
      {
        "text": "Granulomas producing calcitriol",
        "explanation": "Incorrect. Granulomas raise 1,25-dihydroxyvitamin D. This would be the correct answer if asked about sarcoidosis."
      },
      {
        "text": "Parathyroid adenoma",
        "explanation": "Correct. An adenoma autonomously oversecretes PTH, raising calcium, which makes primary hyperparathyroidism the most common excess-PTH cause. With malignancy it accounts for about 90% of hypercalcemia."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Hypercalcemia with high PTH is usually primary hyperparathyroidism from a parathyroid adenoma.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 9,
    "pdfQuote": "Primary Hyperparathyroidism"
  },
  {
    "id": 6,
    "category": "Calcium: Hypercalcemia",
    "questionText": "Hypercalcemia from tumor-secreted PTH-related protein is accompanied by which serum PTH pattern?",
    "options": [
      {
        "text": "Suppressed by the high ionized calcium",
        "explanation": "Correct. PTHrP raises calcium, and a normally working gland senses this and lowers PTH. Low PTH with high calcium points away from primary hyperparathyroidism."
      },
      {
        "text": "Raised by parathyroid hyperplasia",
        "explanation": "Incorrect. Hyperplasia raises PTH in tertiary disease. This would be the correct answer if asked about post-transplant hyperparathyroidism."
      },
      {
        "text": "Raised by an autonomous adenoma",
        "explanation": "Incorrect. An adenoma raises PTH despite hypercalcemia. This would be the correct answer if asked about primary hyperparathyroidism."
      },
      {
        "text": "Unchanged, as PTHrP escapes feedback",
        "explanation": "Incorrect. The gland still senses the high calcium. This would be the correct answer if asked about a gland lacking calcium sensing."
      },
      {
        "text": "Raised to offset renal calcium loss",
        "explanation": "Incorrect. Compensatory PTH rise is secondary hyperparathyroidism. This would be the correct answer if asked about chronic kidney disease."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: In every non-parathyroid hypercalcemia, a normal gland suppresses PTH.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 9,
    "pdfQuote": "PTHrP - Squamous cell carcinomas"
  },
  {
    "id": 7,
    "category": "Calcium: Hypercalcemia",
    "questionText": "Milk-alkali syndrome results from excessive intake of which substance?",
    "options": [
      {
        "text": "Cholecalciferol supplements",
        "explanation": "Incorrect. Excess vitamin D supplements cause hypervitaminosis D. This would be the correct answer if asked about vitamin D intoxication."
      },
      {
        "text": "Thiazide diuretics",
        "explanation": "Incorrect. Thiazides aggravate hypercalcemia but do not define this syndrome. This would be the correct answer if asked what to avoid."
      },
      {
        "text": "Aluminum-containing antacids",
        "explanation": "Incorrect. Aluminum antacids bind phosphate in the gut. This would be the correct answer if asked about hypophosphatemia."
      },
      {
        "text": "Calcium carbonate antacids",
        "explanation": "Correct. Chronic heavy use of calcium carbonate, for example for heartburn, delivers excess calcium and causes hypercalcemia. PTH is appropriately low because the gland works normally."
      },
      {
        "text": "Phosphate-containing enemas",
        "explanation": "Incorrect. These deliver an exogenous phosphate load. This would be the correct answer if asked about hyperphosphatemia."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Heartburn treated with calcium carbonate all day is the classic milk-alkali history, with suppressed PTH.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 10,
    "pdfQuote": "Milk alkali syndrome"
  },
  {
    "id": 8,
    "category": "Calcium: Hypercalcemia",
    "questionText": "Severe hypercalcemia produces which ECG change?",
    "options": [
      {
        "text": "Prolonged QT with torsades risk",
        "explanation": "Incorrect. A long QT reflects low calcium. This would be the correct answer if asked about hypocalcemia."
      },
      {
        "text": "Shortened QT interval",
        "explanation": "Correct. High calcium shortens the QT interval and slows the heart rate. Hypocalcemia does the opposite, prolonging the QT."
      },
      {
        "text": "Widened QRS complex",
        "explanation": "Incorrect. A wide QRS is described with low magnesium. This would be the correct answer if asked about hypomagnesemia."
      },
      {
        "text": "Peaked T waves",
        "explanation": "Incorrect. Peaked T waves are a potassium finding. This would be the correct answer if asked about hyperkalemia."
      },
      {
        "text": "Lengthened PR interval",
        "explanation": "Incorrect. A widened PR is described with magnesium depletion. This would be the correct answer if asked about magnesium deficiency."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: High calcium gives a short QT and bradycardia; low calcium gives a long QT.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 11,
    "pdfQuote": "Renal & Cardiovascular"
  },
  {
    "id": 9,
    "category": "Calcium: Hypercalcemia",
    "questionText": "Hypercalcemia with low PTH and no elevation of PTHrP, calcidiol, or calcitriol suggests which cause?",
    "options": [
      {
        "text": "Humoral hypercalcemia of malignancy",
        "explanation": "Incorrect. This form raises PTHrP. This would be the correct answer if asked about an elevated PTHrP branch."
      },
      {
        "text": "Primary hyperparathyroidism",
        "explanation": "Incorrect. This gives a high PTH. This would be the correct answer if asked about hypercalcemia with elevated PTH."
      },
      {
        "text": "Ectopic calcitriol from granulomas",
        "explanation": "Incorrect. Granulomatous disease raises calcitriol. This would be the correct answer if asked about the elevated calcitriol branch."
      },
      {
        "text": "Excess vitamin D ingestion",
        "explanation": "Incorrect. Excess intake raises calcidiol. This would be the correct answer if asked about the elevated calcidiol branch."
      },
      {
        "text": "Lytic metastases, as in myeloma",
        "explanation": "Correct. When PTH is low and none of the three markers is elevated, lytic metastases, often multiple myeloma, are most likely. Bone destruction releases calcium directly without a hormonal marker."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Low PTH with normal PTHrP and vitamin D metabolites points to lytic bone disease such as myeloma.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 12,
    "pdfQuote": "Hypercalcemia Diagnosis"
  },
  {
    "id": 10,
    "category": "Calcium: Hypercalcemia",
    "questionText": "In severe hypercalcemia, large-volume normal saline lowers calcium through which mechanism?",
    "options": [
      {
        "text": "Reduced gut calcium absorption",
        "explanation": "Incorrect. Saline has no binding action in the gut. This would be the correct answer if asked about an oral binder."
      },
      {
        "text": "Suppressed parathyroid PTH release",
        "explanation": "Incorrect. PTH is already suppressed in most non-parathyroid causes. This would be the correct answer if asked about CaSR activation."
      },
      {
        "text": "Increased renal calcium clearance",
        "explanation": "Correct. Hypovolemia impairs renal calcium clearance and worsens hypercalcemia, so 4-6 L of saline in 24 hours restores excretion. Bisphosphonates and glucocorticoids act on bone and vitamin D instead."
      },
      {
        "text": "Enhanced calcium shift into cells",
        "explanation": "Incorrect. Cellular shift is a phosphate mechanism. This would be the correct answer if asked about insulin and phosphate."
      },
      {
        "text": "Greater calcium binding to albumin",
        "explanation": "Incorrect. Albumin binding changes total, not ionized, handling. This would be the correct answer if asked about albumin correction."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Volume first in severe hypercalcemia, because dehydration impairs renal calcium clearance.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 13,
    "pdfQuote": "4-6 L NS in first 24 hours"
  },
  {
    "id": 11,
    "category": "Calcium: Hypercalcemia",
    "questionText": "Glucocorticoids lower serum calcium in hypercalcemia through which action?",
    "options": [
      {
        "text": "Decreasing 1,25-dihydroxyvitamin D production",
        "explanation": "Correct. Glucocorticoids reduce 1,25-dihydroxyvitamin D production, removing a hormone that raises calcium. Bisphosphonates, by contrast, act directly on osteoclasts."
      },
      {
        "text": "Inhibiting osteoclast-mediated bone resorption",
        "explanation": "Incorrect. This is how bisphosphonates such as zoledronic acid work. This would be the correct answer if asked about bisphosphonates."
      },
      {
        "text": "Blocking distal TRPV5 reabsorption",
        "explanation": "Incorrect. TRPV5 is the active distal calcium channel. This would be the correct answer if asked where PTH raises reabsorption."
      },
      {
        "text": "Expanding extracellular volume",
        "explanation": "Incorrect. Volume expansion is the saline mechanism. This would be the correct answer if asked about normal saline."
      },
      {
        "text": "Stimulating osteoblast bone formation",
        "explanation": "Incorrect. Osteoblasts store calcium in bone. This would be the correct answer if asked which bone cell lowers calcium."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Steroids lower calcium by cutting calcitriol production, while bisphosphonates block osteoclasts.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 13,
    "pdfQuote": "Hypercalcemia Treatment"
  },
  {
    "id": 12,
    "category": "Calcium: Hypocalcemia",
    "questionText": "Hypoparathyroidism most commonly results from which cause?",
    "options": [
      {
        "text": "Autoantibodies against the CaSR",
        "explanation": "Incorrect. Autoimmunity is a less common destructive cause. This would be the correct answer if asked about autoimmune hypoparathyroidism."
      },
      {
        "text": "Iron deposition in hemochromatosis",
        "explanation": "Incorrect. Iron overload can damage the gland but is uncommon. This would be the correct answer if asked about storage disease."
      },
      {
        "text": "Copper deposition in Wilson disease",
        "explanation": "Incorrect. Copper storage is a rare destructive cause. This would be the correct answer if asked about copper overload."
      },
      {
        "text": "Radiation to the parathyroids",
        "explanation": "Incorrect. Radiation is a less common destructive cause. This would be the correct answer if asked about radiation injury."
      },
      {
        "text": "Thyroid or neck surgery",
        "explanation": "Correct. Surgical removal or damage during thyroid or other neck surgery is the most common cause of gland destruction. These patients need lifelong calcium and vitamin D."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: New hypocalcemia after thyroid or neck surgery suggests surgical hypoparathyroidism.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 15,
    "pdfQuote": "Destruction of gland"
  },
  {
    "id": 13,
    "category": "Calcium: Hypocalcemia",
    "questionText": "Pseudohypoparathyroidism is defined by which hormonal finding?",
    "options": [
      {
        "text": "Low PTH from gland destruction",
        "explanation": "Incorrect. Low PTH from damage is true hypoparathyroidism. This would be the correct answer if asked about postsurgical disease."
      },
      {
        "text": "Elevated PTH with end-organ unresponsiveness",
        "explanation": "Correct. In PTH resistance the gland makes PTH but target organs do not respond, so calcium falls while PTH rises. It presents in childhood and mimics hypoparathyroidism."
      },
      {
        "text": "Elevated PTH from an autonomous tumor",
        "explanation": "Incorrect. Autonomous PTH raises calcium. This would be the correct answer if asked about primary hyperparathyroidism."
      },
      {
        "text": "Low calcitriol from renal failure",
        "explanation": "Incorrect. Impaired renal 1,25-D production occurs in kidney disease. This would be the correct answer if asked about CKD."
      },
      {
        "text": "Low PTH from magnesium depletion",
        "explanation": "Incorrect. Low magnesium gives a normal-to-low PTH. This would be the correct answer if asked about hypomagnesemia."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Hypocalcemia with a high PTH means the gland works; in pseudohypoparathyroidism the tissues ignore PTH.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 16,
    "pdfQuote": "Parathyroid hormone resistance"
  },
  {
    "id": 14,
    "category": "Calcium: Hypocalcemia",
    "questionText": "Trousseau sign of hypocalcemia is elicited by which maneuver?",
    "options": [
      {
        "text": "Tapping the facial nerve below the ear",
        "explanation": "Incorrect. Facial nerve tapping elicits Chvostek sign. This would be the correct answer if asked about Chvostek sign."
      },
      {
        "text": "Tapping the patellar tendon",
        "explanation": "Incorrect. This tests a deep tendon reflex. This would be the correct answer if asked about checking reflexes in hypermagnesemia."
      },
      {
        "text": "Percussing the median nerve at the wrist",
        "explanation": "Incorrect. This is a test for nerve entrapment. This would be the correct answer if asked about Tinel sign."
      },
      {
        "text": "Inflating a BP cuff above systolic",
        "explanation": "Correct. A cuff held 20 mm Hg above systolic pressure for 3 minutes provokes carpal spasm. Chvostek sign instead uses facial nerve tapping."
      },
      {
        "text": "Shining light into each pupil",
        "explanation": "Incorrect. This tests the pupillary light reflex. This would be the correct answer if asked about pupillary dilation in hypermagnesemia."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Carpal spasm under an inflated blood pressure cuff is Trousseau sign of hypocalcemia.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 17,
    "pdfQuote": "Trousseau's and Chvostek's signs"
  },
  {
    "id": 15,
    "category": "Calcium: Hypocalcemia",
    "questionText": "Hypocalcemia is associated with which cardiac conduction change?",
    "options": [
      {
        "text": "Short QT with slow heart rate",
        "explanation": "Incorrect. A short QT with bradycardia reflects high calcium. This would be the correct answer if asked about hypercalcemia."
      },
      {
        "text": "Heart block progressing to asystole",
        "explanation": "Incorrect. This conduction failure is described with magnesium excess. This would be the correct answer if asked about hypermagnesemia."
      },
      {
        "text": "Prolonged QT interval",
        "explanation": "Correct. Low calcium prolongs the QT, which can lead to torsades de pointes and ventricular tachycardia. High calcium shortens it."
      },
      {
        "text": "Wide QRS with a long PR",
        "explanation": "Incorrect. This pattern is described with low magnesium. This would be the correct answer if asked about low serum magnesium."
      },
      {
        "text": "ST-segment elevation",
        "explanation": "Incorrect. ST elevation suggests myocardial injury. This would be the correct answer if asked about acute infarction."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Low calcium lengthens the QT and can trigger torsades de pointes.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 17,
    "pdfQuote": "Clinical Manifestations"
  },
  {
    "id": 16,
    "category": "Calcium: Hypocalcemia",
    "questionText": "Hypoparathyroidism accompanies its low calcium with which laboratory pattern?",
    "options": [
      {
        "text": "PTH low, phosphate elevated",
        "explanation": "Correct. PTH normally raises calcium and lowers phosphate, so its absence leaves calcium low and phosphate high. Other labs, including vitamin D and creatinine, stay normal."
      },
      {
        "text": "PTH elevated, phosphate elevated",
        "explanation": "Incorrect. This pattern fits PTH resistance or kidney disease. This would be the correct answer if asked about pseudohypoparathyroidism."
      },
      {
        "text": "PTH normal to low, phosphate normal",
        "explanation": "Incorrect. This pattern fits magnesium depletion. This would be the correct answer if asked about hypomagnesemia."
      },
      {
        "text": "PTH elevated, phosphate low to normal",
        "explanation": "Incorrect. This pattern fits secondary hyperparathyroidism from low 25-OH D. This would be the correct answer if asked about vitamin D deficiency."
      },
      {
        "text": "PTH suppressed, phosphate reduced",
        "explanation": "Incorrect. This pattern fits PTHrP excess with high calcium. This would be the correct answer if asked about humoral hypercalcemia."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Low calcium with high phosphate and low PTH is hypoparathyroidism; high PTH instead means resistance.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 18,
    "pdfQuote": "Diagnostic Approach to Hypocalcemia"
  },
  {
    "id": 17,
    "category": "Calcium: Hypocalcemia",
    "questionText": "Severe or symptomatic hypocalcemia is treated initially with which therapy?",
    "options": [
      {
        "text": "Oral calcium with vitamin D3",
        "explanation": "Incorrect. Oral calcium and vitamin D3 treat mild or chronic cases. This would be the correct answer if asked about mild hypocalcemia."
      },
      {
        "text": "Glucocorticoid therapy",
        "explanation": "Incorrect. Glucocorticoids lower calcitriol and calcium. This would be the correct answer if asked about severe hypercalcemia."
      },
      {
        "text": "Parathyroidectomy",
        "explanation": "Incorrect. Gland removal treats excess PTH. This would be the correct answer if asked about symptomatic primary hyperparathyroidism."
      },
      {
        "text": "Bisphosphonate infusion",
        "explanation": "Incorrect. Bisphosphonates block bone resorption and lower calcium. This would be the correct answer if asked about hypercalcemia."
      },
      {
        "text": "IV calcium, then transition to oral",
        "explanation": "Correct. Severe or symptomatic hypocalcemia gets intravenous calcium first, followed by oral therapy. Concurrent hypomagnesemia must also be corrected."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Symptomatic hypocalcemia gets IV calcium first, then oral calcium, with any low magnesium corrected.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 19,
    "pdfQuote": "Correct concurrent hypomagnesemia"
  },
  {
    "id": 18,
    "category": "Phosphate: Regulation",
    "questionText": "Serum phosphate concentration is set mainly by which process?",
    "options": [
      {
        "text": "Intestinal phosphate absorption rate",
        "explanation": "Incorrect. Gut absorption is highly efficient and poorly regulated. This would be the correct answer if asked about phosphate intake."
      },
      {
        "text": "Renal tubular phosphate reabsorption",
        "explanation": "Correct. Because the gut absorbs phosphate so efficiently, the kidney controls serum phosphate through the rate of tubular reabsorption. Fractional excretion normally runs about 10-15%."
      },
      {
        "text": "Osteoblast phosphate deposition in bone",
        "explanation": "Incorrect. Bone holds about 85% of phosphate. This would be the correct answer if asked about the main phosphate reservoir."
      },
      {
        "text": "Insulin-driven phosphate entry into cells",
        "explanation": "Incorrect. Insulin shifts phosphate acutely. This would be the correct answer if asked about refeeding hypophosphatemia."
      },
      {
        "text": "Fecal phosphate excretion",
        "explanation": "Incorrect. Fecal loss is not the control point. This would be the correct answer if asked about unabsorbed dietary phosphate."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: The kidney, not the gut, sets serum phosphate through tubular reabsorption.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 21,
    "pdfQuote": "Determined by rate of renal"
  },
  {
    "id": 19,
    "category": "Phosphate: Regulation",
    "questionText": "PTH and FGF-23 each have which effect on proximal tubular phosphate reabsorption?",
    "options": [
      {
        "text": "Stimulated via TRPV5 channel insertion",
        "explanation": "Incorrect. TRPV5 is a distal calcium channel. This would be the correct answer if asked how PTH raises calcium reabsorption."
      },
      {
        "text": "Increased through vitamin D activation",
        "explanation": "Incorrect. Low intake or low serum phosphate raises reabsorption. This would be the correct answer if asked about phosphate deprivation."
      },
      {
        "text": "Increased through claudin-16 opening",
        "explanation": "Incorrect. Claudin-16 is a thick ascending limb pathway for divalent cations. This would be the correct answer if asked about magnesium."
      },
      {
        "text": "Decreased by removing Na-phosphate co-transporters",
        "explanation": "Correct. Both hormones reduce sodium-phosphate co-transporters in the proximal tubule, so phosphate is lost in urine and serum phosphate falls. Low intake does the opposite."
      },
      {
        "text": "Inhibited at the thick ascending limb",
        "explanation": "Incorrect. Phosphate is reclaimed in the proximal tubule. This would be the correct answer if asked where magnesium is mostly reabsorbed."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: High PTH or FGF-23 means fewer phosphate co-transporters and a lower serum phosphate.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 22,
    "pdfQuote": "PTH and FGF-23 reduce phosphate absorption"
  },
  {
    "id": 20,
    "category": "Phosphate: Regulation",
    "questionText": "PTH secretion is most strongly stimulated by which serum change?",
    "options": [
      {
        "text": "Increased serum phosphate",
        "explanation": "Incorrect. PTH lowers phosphate, but phosphate is a weak stimulus. This would be the correct answer if asked what PTH decreases."
      },
      {
        "text": "Increased FGF-23 level",
        "explanation": "Incorrect. FGF-23 lowers phosphate reabsorption. This would be the correct answer if asked about a phosphaturic bone hormone."
      },
      {
        "text": "Decreased ionized calcium",
        "explanation": "Correct. The parathyroid is far more sensitive to calcium than phosphate, so falling ionized calcium is the main stimulus. When forced to choose, it regulates calcium."
      },
      {
        "text": "Increased calcitriol level",
        "explanation": "Incorrect. Calcitriol is produced in response to PTH. This would be the correct answer if asked what PTH promotes renally."
      },
      {
        "text": "Decreased serum albumin",
        "explanation": "Incorrect. Low albumin lowers total, not ionized, calcium. This would be the correct answer if asked when to correct total calcium."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The parathyroid defends calcium first; phosphate is a secondary concern.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 22,
    "pdfQuote": "Main factor stimulating PTH is calcium"
  },
  {
    "id": 21,
    "category": "Phosphate: Hypophosphatemia",
    "questionText": "Fanconi syndrome causes hypophosphatemia through which defect?",
    "options": [
      {
        "text": "Excess PTH lowering reabsorption",
        "explanation": "Incorrect. High PTH reduces phosphate reabsorption in hyperparathyroidism. This would be the correct answer if asked about hyperparathyroidism."
      },
      {
        "text": "Antacid binding of phosphate in gut",
        "explanation": "Incorrect. Aluminum or magnesium antacids block absorption. This would be the correct answer if asked about decreased intestinal absorption."
      },
      {
        "text": "Alkalemia shifting phosphate into cells",
        "explanation": "Incorrect. Respiratory alkalosis shifts phosphate intracellularly. This would be the correct answer if asked about internal redistribution."
      },
      {
        "text": "Chronic diarrhea with malabsorption",
        "explanation": "Incorrect. Diarrhea and steatorrhea reduce gut uptake. This would be the correct answer if asked about intestinal phosphate loss."
      },
      {
        "text": "Global proximal tubular dysfunction",
        "explanation": "Correct. Fanconi syndrome impairs proximal tubular function, so solutes reclaimed there, including glucose, calcium, and phosphate, are wasted in urine. It belongs to the reduced renal reabsorption group."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Fanconi syndrome wastes glucose, calcium, and phosphate because the proximal tubule fails.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 23,
    "pdfQuote": "Fanconi syndrome"
  },
  {
    "id": 22,
    "category": "Phosphate: Hypophosphatemia",
    "questionText": "Refeeding after prolonged starvation causes hypophosphatemia mainly through which mechanism?",
    "options": [
      {
        "text": "Increased insulin-mediated uptake",
        "explanation": "Correct. Feeding triggers insulin release, which shifts phosphate into cells on top of depleted stores. Urine phosphate stays low because the kidney is conserving."
      },
      {
        "text": "Renal phosphate wasting from high PTH",
        "explanation": "Incorrect. PTH-driven wasting raises urine phosphate. This would be the correct answer if asked about hyperparathyroidism."
      },
      {
        "text": "Reduced phosphate content of feeds",
        "explanation": "Incorrect. Intake alone rarely causes it. This would be the correct answer if asked about prolonged phosphate deprivation."
      },
      {
        "text": "Phosphate binding by magnesium antacids",
        "explanation": "Incorrect. Magnesium salts bind gut phosphate. This would be the correct answer if asked about antacid-related hypophosphatemia."
      },
      {
        "text": "Steatorrhea limiting gut absorption",
        "explanation": "Incorrect. Fat malabsorption reduces uptake. This would be the correct answer if asked about decreased intestinal absorption."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Insulin release during refeeding drives phosphate into cells and can cause severe hypophosphatemia.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 25,
    "pdfQuote": "Increased insulin secretion"
  },
  {
    "id": 23,
    "category": "Phosphate: Hypophosphatemia",
    "questionText": "In hypophosphatemia, a 24-hour urine phosphate above 100 mg indicates which mechanism?",
    "options": [
      {
        "text": "Internal redistribution into cells",
        "explanation": "Incorrect. Redistribution gives urine phosphate below 100 mg. This would be the correct answer if asked about a low urine value."
      },
      {
        "text": "Reduced renal phosphate reabsorption",
        "explanation": "Correct. A kidney that keeps excreting phosphate despite low serum levels is wasting it. Below 100 mg points instead to redistribution or poor intestinal absorption."
      },
      {
        "text": "Decreased intestinal absorption",
        "explanation": "Incorrect. Gut loss leaves the kidney conserving phosphate. This would be the correct answer if asked about chronic diarrhea."
      },
      {
        "text": "Aluminum antacid binding",
        "explanation": "Incorrect. Antacid binding is a gut cause with low urine phosphate. This would be the correct answer if asked about antacid use."
      },
      {
        "text": "Increased osteoblast phosphate uptake",
        "explanation": "Incorrect. Bone uptake is not a lecture cause of hypophosphatemia. This would be the correct answer if asked about bone mineral storage."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: High urine phosphate despite hypophosphatemia means renal wasting; low urine phosphate means shift or gut loss.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 27,
    "pdfQuote": "24 hour urine phosphate excretion"
  },
  {
    "id": 24,
    "category": "Phosphate: Hyperphosphatemia",
    "questionText": "Tumor lysis syndrome releases which combination of intracellular solutes?",
    "options": [
      {
        "text": "Calcium, sodium, and bicarbonate",
        "explanation": "Incorrect. These are mainly extracellular solutes. This would be the correct answer if asked about extracellular fluid composition."
      },
      {
        "text": "Myoglobin, phosphate, and creatine",
        "explanation": "Incorrect. Muscle breakdown releases myoglobin and phosphate. This would be the correct answer if asked about rhabdomyolysis."
      },
      {
        "text": "Magnesium, chloride, and glucose",
        "explanation": "Incorrect. These are not the lysis triad. This would be the correct answer if asked about unrelated serum solutes."
      },
      {
        "text": "Phosphate, potassium, and uric acid",
        "explanation": "Correct. Chemotherapy or radiation breaking down a large tumor burden releases phosphate, potassium, and uric acid. It is a cause of acute phosphate load."
      },
      {
        "text": "Calcium, PTHrP, and phosphate",
        "explanation": "Incorrect. PTHrP is secreted by living tumor cells. This would be the correct answer if asked about humoral hypercalcemia."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Tumor lysis after chemotherapy releases phosphate, potassium, and uric acid.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 29,
    "pdfQuote": "Tumor lysis syndrome"
  },
  {
    "id": 25,
    "category": "Phosphate: Hyperphosphatemia",
    "questionText": "Which therapy is most effective for severe hyperphosphatemia with renal failure?",
    "options": [
      {
        "text": "Volume expansion with saline",
        "explanation": "Incorrect. Volume promotes renal clearance but needs working kidneys. This would be the correct answer if asked about preserved renal function."
      },
      {
        "text": "Aluminum-containing phosphate binders",
        "explanation": "Incorrect. Aluminum antacids limit gut absorption. This would be the correct answer if asked about chelating dietary phosphate."
      },
      {
        "text": "Hemodialysis",
        "explanation": "Correct. Hemodialysis is the most effective option and should be considered early in renal failure or symptomatic hypocalcemia. Acute options are otherwise limited."
      },
      {
        "text": "Zoledronic acid infusion",
        "explanation": "Incorrect. Zoledronic acid blocks osteoclasts. This would be the correct answer if asked about severe hypercalcemia."
      },
      {
        "text": "Dietary phosphate restriction",
        "explanation": "Incorrect. Restriction is slow and inadequate acutely. This would be the correct answer if asked about chronic phosphate control."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Hemodialysis is the most effective treatment for severe hyperphosphatemia, especially with renal failure.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 31,
    "pdfQuote": "Limited therapeutic options"
  },
  {
    "id": 26,
    "category": "Magnesium: Handling",
    "questionText": "Magnesium, crucial for neuromuscular activity, forms a key complex with which molecule?",
    "options": [
      {
        "text": "Serum albumin",
        "explanation": "Incorrect. Albumin binds about 40% of serum calcium. This would be the correct answer if asked about protein-bound calcium."
      },
      {
        "text": "Adenosine triphosphate",
        "explanation": "Correct. Magnesium forms a key complex with ATP, which is why it matters for neuromuscular activity. Only about 1% of total magnesium sits in the extracellular fluid."
      },
      {
        "text": "Plasma citrate",
        "explanation": "Incorrect. Citrate complexes a small share of calcium. This would be the correct answer if asked about complexed calcium."
      },
      {
        "text": "Claudin-16 protein",
        "explanation": "Incorrect. Claudin-16 is a tight junction pathway. This would be the correct answer if asked about paracellular reabsorption."
      },
      {
        "text": "Fibroblast growth factor 23",
        "explanation": "Incorrect. FGF-23 is a phosphate-lowering hormone. This would be the correct answer if asked about phosphaturic hormones."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Magnesium partners with ATP, so its deficiency disturbs neuromuscular function.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 36,
    "pdfQuote": "Forms key complex with ATP"
  },
  {
    "id": 27,
    "category": "Magnesium: Handling",
    "questionText": "Most filtered magnesium is reabsorbed in which nephron segment?",
    "options": [
      {
        "text": "Proximal convoluted tubule",
        "explanation": "Incorrect. The proximal tubule takes about 20%. This would be the correct answer if asked where most calcium is reclaimed."
      },
      {
        "text": "Distal convoluted tubule",
        "explanation": "Incorrect. The DCT reclaims about 10% and fine-tunes. This would be the correct answer if asked about magnesium fine-tuning."
      },
      {
        "text": "Cortical collecting duct",
        "explanation": "Incorrect. The collecting duct is a minor magnesium site. This would be the correct answer if asked about vitamin D and TRPV5."
      },
      {
        "text": "Thin descending limb",
        "explanation": "Incorrect. This segment is not a magnesium reabsorption site. This would be the correct answer if asked about water permeability."
      },
      {
        "text": "Thick ascending limb",
        "explanation": "Correct. About 70% of magnesium is reclaimed passively in the thick ascending limb through claudin-16 and claudin-19. Calcium, by contrast, is mostly reclaimed proximally."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: The thick ascending limb reclaims most magnesium, so drugs and ions acting there disturb magnesium balance.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 38,
    "pdfQuote": "70% thick ascending loop of Henle"
  },
  {
    "id": 28,
    "category": "Magnesium: Handling",
    "questionText": "Hypercalcemia has which effect on magnesium reabsorption in the thick ascending limb?",
    "options": [
      {
        "text": "Decreased, raising urinary magnesium loss",
        "explanation": "Correct. Calcium and magnesium compete for transport in the thick ascending limb, so hypercalcemia reduces magnesium reabsorption and can cause hypomagnesemia. PTH and hypomagnesemia increase reabsorption instead."
      },
      {
        "text": "Increased, as with PTH",
        "explanation": "Incorrect. PTH raises thick ascending limb reabsorption. This would be the correct answer if asked about the effect of PTH."
      },
      {
        "text": "Increased through TRPM6 upregulation",
        "explanation": "Incorrect. TRPM6 carries transcellular magnesium transport. This would be the correct answer if asked about intestinal magnesium channels."
      },
      {
        "text": "Shifted to the proximal tubule",
        "explanation": "Incorrect. The proximal tubule takes a minor share. This would be the correct answer if asked about proximal magnesium reabsorption."
      },
      {
        "text": "Enhanced via claudin-19 synthesis",
        "explanation": "Incorrect. Claudins form the paracellular route. This would be the correct answer if asked about the junctional proteins used."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Hypercalcemia and hypermagnesemia reduce thick ascending limb magnesium reabsorption.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 39,
    "pdfQuote": "Decreased reabsorption with hypercalcemia or"
  },
  {
    "id": 29,
    "category": "Magnesium: Hypomagnesemia",
    "questionText": "Proton pump inhibitors cause hypomagnesemia through which mechanism?",
    "options": [
      {
        "text": "Renal wasting in the thick ascending limb",
        "explanation": "Incorrect. Loop-segment wasting occurs with loop diuretics. This would be the correct answer if asked about furosemide."
      },
      {
        "text": "NaCl co-transporter blockade",
        "explanation": "Incorrect. Distal NaCl blockade is the thiazide mechanism. This would be the correct answer if asked about thiazide diuretics."
      },
      {
        "text": "Magnesium shift into cells",
        "explanation": "Incorrect. Cellular shift is a phosphate mechanism. This would be the correct answer if asked about refeeding phosphate."
      },
      {
        "text": "Reduced intestinal magnesium absorption",
        "explanation": "Correct. The presumed PPI mechanism is impaired magnesium absorption by intestinal epithelial cells. Diarrhea is the other major intestinal cause."
      },
      {
        "text": "Osmotic diuresis from glycosuria",
        "explanation": "Incorrect. Osmotic diuresis wastes magnesium in diabetes. This would be the correct answer if asked about uncontrolled diabetes."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: PPIs impair intestinal magnesium absorption; check magnesium in long-term users.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 40,
    "pdfQuote": "Proton pump inhibitors"
  },
  {
    "id": 30,
    "category": "Magnesium: Hypomagnesemia",
    "questionText": "Hypomagnesemia complicated by torsades de pointes is treated with which therapy?",
    "options": [
      {
        "text": "Oral magnesium salts",
        "explanation": "Incorrect. Oral salts treat mild asymptomatic cases. This would be the correct answer if asked about mild hypomagnesemia."
      },
      {
        "text": "Glucocorticoid infusion",
        "explanation": "Incorrect. Glucocorticoids lower calcitriol production. This would be the correct answer if asked about treating severe hypercalcemia."
      },
      {
        "text": "Intravenous magnesium",
        "explanation": "Correct. Severe hypomagnesemia, particularly with torsades de pointes, is treated with IV magnesium. Concurrent deficiencies such as calcium and phosphate should also be corrected."
      },
      {
        "text": "Loop diuretic infusion",
        "explanation": "Incorrect. Loop diuretics cause magnesium wasting. This would be the correct answer if asked about a drug cause."
      },
      {
        "text": "Thiazide diuretic therapy",
        "explanation": "Incorrect. Thiazides also inhibit magnesium reabsorption. This would be the correct answer if asked about medication-induced losses."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Torsades from low magnesium calls for IV magnesium.",
    "lectureSource": "CV87: Clinical: Electrolyte Disorders - Calcium, Magnesium and Phosphate",
    "pdfLecture": "CV87",
    "pdfPage": 43,
    "pdfQuote": "IV magnesium (i.e. torsades)"
  }
];

window.Test_CV87_Recall = Test_CV87_Recall;
