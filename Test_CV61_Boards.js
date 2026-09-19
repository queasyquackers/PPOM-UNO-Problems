// SET B - board-style items on the same lecture. File: Test_CV61_Boards.js
const Test_CV61_Boards = [
  {
    "id": 1,
    "category": "Biochemistry: Cholesterol Synthesis and Fates",
    "questionText": "A 52-year-old man comes for follow-up of hyperlipidemia. Fasting total cholesterol is 268 mg/dL. He is started on atorvastatin. Which of the following reactions in his hepatocytes is most directly inhibited?",
    "options": [
      {
        "text": "Two acetyl CoA to acetoacetyl CoA",
        "explanation": "Incorrect. Thiolase performs this first condensation, and atorvastatin does not act on it. This would be the correct answer if he had an inherited deficiency of cytosolic thiolase."
      },
      {
        "text": "Acetoacetyl CoA to HMG CoA",
        "explanation": "Incorrect. HMG CoA synthase acts just before the regulated step, so statins leave it running. This would be the correct answer if he had a loss-of-function variant in cytosolic HMG CoA synthase."
      },
      {
        "text": "HMG CoA to mevalonate",
        "explanation": "Correct. Statins inhibit HMG CoA reductase, which reduces HMG CoA to mevalonate using two NADPH. This ER-bound, irreversible reaction is the rate-limiting step of cholesterol synthesis. The preceding HMG CoA synthase reaction is unregulated by this drug and is not its target."
      },
      {
        "text": "Cholesterol to cholesterol ester in cells",
        "explanation": "Incorrect. ACAT esterifies cholesterol for storage and is not the statin target. This would be the correct answer if he had been given an experimental ACAT inhibitor."
      },
      {
        "text": "Cholesterol to 7-alpha-hydroxycholesterol",
        "explanation": "Incorrect. 7-alpha-hydroxylase starts bile acid synthesis, not cholesterol synthesis. This would be the correct answer if he carried a loss-of-function variant in hepatic 7-alpha-hydroxylase."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Statins block the HMG CoA to mevalonate step catalyzed by HMG CoA reductase, the rate-limiting step of cholesterol synthesis.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 29,
    "pdfQuote": "molecular target of cholesterol lowering drugs"
  },
  {
    "id": 2,
    "category": "Biochemistry: Cholesterol Regulation",
    "questionText": "A 60-year-old woman with hypercholesterolemia has taken simvastatin daily for 3 months, and the cholesterol content of her hepatocytes has fallen. Which of the following changes in her hepatocytes is most likely?",
    "options": [
      {
        "text": "Increased SREBP cleavage in the Golgi",
        "explanation": "Correct. Lower hepatocyte cholesterol frees SCAP, so SCAP-SREBP moves from the ER to the Golgi. Golgi proteases cleave SREBP, and its DNA-binding domain enters the nucleus to activate HMG CoA reductase transcription. ER retention of SREBP occurs only when cholesterol is high."
      },
      {
        "text": "Greater retention of SREBP in the ER",
        "explanation": "Incorrect. Cholesterol-bound SCAP traps SREBP in the ER only when cholesterol is high, unlike her depleted cells. This would be the correct answer if she had just eaten a very high-cholesterol diet."
      },
      {
        "text": "Increased ACAT esterification of cellular cholesterol",
        "explanation": "Incorrect. With cholesterol depleted, there is less free cholesterol to store as esters. This would be the correct answer if her hepatocytes held surplus free cholesterol after a cholesterol-rich diet."
      },
      {
        "text": "Greater AMPK phosphorylation of the reductase",
        "explanation": "Incorrect. AMPK responds to a high AMP, low-energy state, not to sterol depletion. This would be the correct answer if she had been fasting for most of a day."
      },
      {
        "text": "Reduced transcription of the reductase gene",
        "explanation": "Incorrect. Low cholesterol activates SREBP, so transcription rises rather than falls. This would be the correct answer if her hepatocyte cholesterol content were high."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Statins lower hepatocyte cholesterol, releasing SCAP-SREBP to the Golgi for cleavage and upregulating HMG CoA reductase transcription.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 25,
    "pdfQuote": "SCAP-SREBP is transported to Golgi"
  },
  {
    "id": 3,
    "category": "Biochemistry: Cholesterol Regulation",
    "questionText": "A 34-year-old man has had nothing to eat for 20 hours before elective hernia repair. He has no medical conditions and takes no medications. Which of the following best characterizes hepatic HMG CoA reductase at this time?",
    "options": [
      {
        "text": "Targeted to the proteasome by excess sterol",
        "explanation": "Incorrect. Proteasomal degradation follows cholesterol excess, and a fasting man has no sterol surplus. This would be the correct answer if he had been eating a very high-cholesterol diet."
      },
      {
        "text": "Cleaved to release a nuclear fragment",
        "explanation": "Incorrect. Cleavage releasing a nuclear fragment happens to SREBP, not to the reductase itself. This would be the correct answer if the question concerned SREBP in a statin-treated patient."
      },
      {
        "text": "Activated by glucagon-driven dephosphorylation",
        "explanation": "Incorrect. Glucagon activates kinases, and dephosphorylation is the insulin effect. This would be the correct answer if he had just eaten a large carbohydrate meal."
      },
      {
        "text": "Transcriptionally induced by nuclear SREBP",
        "explanation": "Incorrect. SREBP induction follows low cholesterol, which fasting alone does not produce. This would be the correct answer if he had been taking a statin."
      },
      {
        "text": "Phosphorylated with reduced activity",
        "explanation": "Correct. Prolonged fasting raises glucagon and cellular AMP, both activating AMPK. AMPK phosphorylates HMG CoA reductase, which lowers its activity and slows cholesterol synthesis. Sterol-driven proteasomal degradation is not the fasting signal."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Fasting glucagon and high AMP activate AMPK, which phosphorylates and inactivates HMG CoA reductase.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 27,
    "pdfQuote": "Phosphorylation of HMG CoA reductase reduces its activity"
  },
  {
    "id": 4,
    "category": "Biochemistry: Cholesterol Regulation",
    "questionText": "A 25-year-old woman eats a large carbohydrate-rich meal. One hour later, hepatic cholesterol synthesis has accelerated. Which of the following enzymes is most directly responsible for the change in HMG CoA reductase activity?",
    "options": [
      {
        "text": "AMP-activated protein kinase",
        "explanation": "Incorrect. AMPK phosphorylates and inactivates the reductase, slowing synthesis rather than speeding it. This would be the correct answer if she had been fasting and cellular AMP were high."
      },
      {
        "text": "Protein phosphatase",
        "explanation": "Correct. After a meal, insulin rises and activates a protein phosphatase. It removes the phosphate from HMG CoA reductase, activating it and speeding cholesterol synthesis. AMP-activated protein kinase does the reverse during low energy states."
      },
      {
        "text": "Protein kinase A",
        "explanation": "Incorrect. PKA is a glucagon-activated kinase that lowers reductase activity. This would be the correct answer if she were in a prolonged fast with high glucagon."
      },
      {
        "text": "Golgi site protease",
        "explanation": "Incorrect. Golgi proteases cleave SREBP to raise enzyme amount over hours, not activity within an hour of a meal. This would be the correct answer if she had been on a statin for weeks."
      },
      {
        "text": "HMG CoA synthase",
        "explanation": "Incorrect. HMG CoA synthase makes the substrate but does not regulate the reductase. This would be the correct answer if she had an inherited HMG CoA synthase deficiency."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Insulin activates a protein phosphatase that dephosphorylates and activates HMG CoA reductase in the fed state.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 27,
    "pdfQuote": "Insulin activates a protein phosphatase"
  },
  {
    "id": 5,
    "category": "Pharmacology: Lipid-Lowering Therapy",
    "questionText": "A 58-year-old woman with hypercholesterolemia develops severe myalgias on two different statins. Her physician adds a drug that lowers the fraction of dietary cholesterol taken up from the intestinal lumen into enterocytes. Which of the following proteins is the most likely target of this drug?",
    "options": [
      {
        "text": "Statin-sensitive HMG CoA reductase",
        "explanation": "Incorrect. HMG CoA reductase controls synthesis, not intestinal uptake, and is the statin target. This would be the correct answer if she had tolerated a statin well."
      },
      {
        "text": "SREBP cleavage-activating protein",
        "explanation": "Incorrect. SCAP senses cholesterol and moves SREBP, and no uptake-blocking drug targets it. This would be the correct answer if the drug had changed transcription of cholesterol synthesis genes."
      },
      {
        "text": "Hepatic 7-alpha-hydroxylase",
        "explanation": "Incorrect. This enzyme starts bile acid synthesis in the liver, not intestinal absorption. This would be the correct answer if the drug had altered hepatic bile acid production."
      },
      {
        "text": "Niemann-Pick C1-like 1 protein",
        "explanation": "Correct. About half of dietary cholesterol is absorbed through NPC1L1, the target of ezetimibe. Blocking it lowers uptake without touching hepatic synthesis. HMG CoA reductase is the statin target she could not tolerate."
      },
      {
        "text": "Energy-sensing AMP-activated kinase",
        "explanation": "Incorrect. AMPK inactivates HMG CoA reductase when energy is low, acting in cells rather than on absorption. This would be the correct answer if the drug had slowed synthesis by mimicking low energy."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Ezetimibe lowers cholesterol by blocking NPC1L1-mediated intestinal cholesterol absorption.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 15,
    "pdfQuote": "the target of ezetimibe"
  },
  {
    "id": 6,
    "category": "Pharmacology: Lipid-Lowering Therapy",
    "questionText": "A 47-year-old man with borderline hypercholesterolemia prefers dietary measures. He begins using a margarine enriched with sitosterol and sitostanol, and 8 weeks later his serum cholesterol has fallen. Which of the following is the most likely mechanism of this effect?",
    "options": [
      {
        "text": "Efflux of sterols from enterocytes with cholesterol",
        "explanation": "Correct. Plant sterols enter enterocytes but are actively transported back to the lumen, taking some cholesterol with them. Their own absorption is in the single digits. Bile salt binding, the strongest alternative, is how resins work, not sterols."
      },
      {
        "text": "Inhibition of hepatic cholesterol synthesis",
        "explanation": "Incorrect. Plant sterols act in the gut lumen and enterocyte rather than on hepatic synthesis. This would be the correct answer if he had started a statin."
      },
      {
        "text": "Binding of bile salts in the lumen",
        "explanation": "Incorrect. Luminal bile salt binding interrupts the enterohepatic circulation and is not how sterols act. This would be the correct answer if he had started cholestyramine."
      },
      {
        "text": "Increased bile acid synthesis in the liver",
        "explanation": "Incorrect. Plant sterols do not directly upregulate 7-alpha-hydroxylase. This would be the correct answer if he were losing bile salts in stool from a sequestrant."
      },
      {
        "text": "Replacement of cholesterol in cell membranes",
        "explanation": "Incorrect. Plant sterols are poorly absorbed, so they do not replace membrane cholesterol. This would be the correct answer if he had absorbed large amounts of plant sterol."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Plant sterols are pumped back out of enterocytes and carry cholesterol with them, lowering cholesterol absorption.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 13,
    "pdfQuote": "Plant sterols are not absorbed efficiently"
  },
  {
    "id": 7,
    "category": "Pharmacology: Lipid-Lowering Therapy",
    "questionText": "A 50-year-old man with hypercholesterolemia begins a powdered resin taken with meals that is not absorbed from the gut and binds bile salts. Which of the following is the most likely effect of this drug on bile acid handling?",
    "options": [
      {
        "text": "Decreased NPC1L1 cholesterol uptake",
        "explanation": "Incorrect. NPC1L1 blockade is a separate absorption mechanism unrelated to bile salt binding. This would be the correct answer if he had been started on ezetimibe."
      },
      {
        "text": "Greater return of bile salts to the liver",
        "explanation": "Incorrect. A resin traps bile salts in the gut, so fewer return in portal blood. This would be the correct answer if he had stopped the resin and bile salts recirculated normally."
      },
      {
        "text": "Increased fecal excretion of bile acids",
        "explanation": "Correct. The sequestrant traps bile salts in the intestine and interrupts the enterohepatic circulation. More bile acid is lost in stool, and replacing it consumes cholesterol. Blocking cholesterol uptake through NPC1L1 would be ezetimibe instead."
      },
      {
        "text": "Reduced hepatic 7-alpha-hydroxylase activity",
        "explanation": "Incorrect. Losing bile salts gives the liver more reason to make bile acids, not less. This would be the correct answer if he had an inherited 7-alpha-hydroxylase deficiency."
      },
      {
        "text": "More secondary bile acids reabsorbed",
        "explanation": "Incorrect. Trapped bile acids are excreted rather than reabsorbed. This would be the correct answer if his enterohepatic circulation were intact and untreated."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Bile acid sequestrants block reabsorption and increase fecal bile acid loss, forcing the liver to use cholesterol.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 35,
    "pdfQuote": "decreasing the re-absorption of bile salts"
  },
  {
    "id": 8,
    "category": "Gastroenterology: Gallstone Disease",
    "questionText": "A 42-year-old woman has recurrent right upper quadrant pain 30 minutes after fatty meals. Ultrasonography shows multiple echogenic stones in the gallbladder. A removed stone is composed mainly of cholesterol. Which of the following most likely caused the stones to form?",
    "options": [
      {
        "text": "Excess bacterial formation of secondary bile acids",
        "explanation": "Incorrect. Secondary bile acids form in the intestine and do not explain cholesterol precipitating in the gallbladder. This would be the correct answer if her stool bile acid profile were being explained after antibiotics."
      },
      {
        "text": "Increased taurine conjugation of bile acids",
        "explanation": "Incorrect. Taurine conjugation makes bile salts better detergents, which would help keep cholesterol dissolved. This would be the correct answer if the finding concerned improved fat emulsification."
      },
      {
        "text": "Accelerated enterohepatic return of bile salts",
        "explanation": "Incorrect. Returning more bile salts to bile would raise solubilizing capacity. This would be the correct answer if the finding concerned efficient bile salt conservation."
      },
      {
        "text": "Deficient HMG CoA reductase activity in the liver",
        "explanation": "Incorrect. Reduced synthesis would lower biliary cholesterol and lessen stone risk. This would be the correct answer if she were taking a statin."
      },
      {
        "text": "Too much cholesterol relative to bile salts and phospholipid",
        "explanation": "Correct. Bile is a mixture of hydrophobic cholesterol with amphipathic phospholipid and bile salts. Excess cholesterol tilts the balance toward hydrophobicity, and cholesterol precipitates as stones. Faster enterohepatic return would supply more bile salt and protect against stones."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Cholesterol gallstones form when bile contains more cholesterol than bile salts and phospholipids can solubilize.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 36,
    "pdfQuote": "Cholelithiasis (cholesterol gallstone disease)"
  },
  {
    "id": 9,
    "category": "Gastroenterology: Bile Acid Metabolism",
    "questionText": "A 66-year-old man receives a prolonged course of broad-spectrum oral antibiotics that markedly suppress his colonic flora. Which of the following bile acids is most likely to be decreased in his stool?",
    "options": [
      {
        "text": "Cholic acid",
        "explanation": "Incorrect. Cholic acid is a primary bile acid made in the liver independent of gut bacteria. This would be the correct answer if he had severe liver disease limiting bile acid synthesis."
      },
      {
        "text": "Deoxycholic acid",
        "explanation": "Correct. Deoxycholic acid is a secondary bile acid made from cholic acid by intestinal bacterial enzymes that remove the carbon 7 hydroxyl. Suppressing the flora lowers its formation. Cholic and chenodeoxycholic acids are primary bile acids made in the liver."
      },
      {
        "text": "Chenodeoxycholic acid",
        "explanation": "Incorrect. Chenodeoxycholic acid is made in the liver, so flora loss does not reduce it. This would be the correct answer if he had a hepatic 7-alpha-hydroxylase deficiency."
      },
      {
        "text": "Glycine-conjugated cholic acid",
        "explanation": "Incorrect. Glycine conjugation occurs in the liver and does not depend on colonic bacteria. This would be the correct answer if his hepatic conjugation capacity were impaired."
      },
      {
        "text": "Taurine-conjugated chenodeoxycholic acid",
        "explanation": "Incorrect. Taurine conjugation is hepatic, so antibiotics would not lower it. This would be the correct answer if he had impaired hepatic taurine conjugation."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Secondary bile acids such as deoxycholic acid depend on intestinal bacteria, so suppressing gut flora lowers them.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 33,
    "pdfQuote": "formed in the intestine from the primary bile acids"
  },
  {
    "id": 10,
    "category": "Gastroenterology: Bile Acid Metabolism",
    "questionText": "In a laboratory study, cholic acid (pKa about 6), glycocholic acid (pKa about 4), and taurocholic acid (pKa about 2) are each placed in a buffer at pH 6, similar to the intestinal lumen. Which compound will be the most effective detergent for emulsifying dietary lipid?",
    "options": [
      {
        "text": "Glycocholic acid",
        "explanation": "Incorrect. With pKa near 4 it is largely ionized at pH 6, but less than the taurine conjugate. This would be the correct answer if the buffer pH had been far above both pKa values."
      },
      {
        "text": "Unconjugated cholic acid",
        "explanation": "Incorrect. With pKa near 6, only about half is ionized at intestinal pH. This would be the correct answer if the buffer pH had been far above 6."
      },
      {
        "text": "Lithocholic acid",
        "explanation": "Incorrect. This secondary bile acid lacks the carbon 7 hydroxyl and is less soluble. This would be the correct answer if the study had compared the least soluble bile acid."
      },
      {
        "text": "Taurocholic acid",
        "explanation": "Correct. At pH 6, the compound with the lowest pKa is most fully ionized and most water soluble. Taurocholic acid, with pKa near 2, is almost entirely ionized. Glycocholic acid is also mostly ionized but less so."
      },
      {
        "text": "Unconjugated chenodeoxycholic acid",
        "explanation": "Incorrect. As an unconjugated primary bile acid, it lacks the pKa-lowering conjugate. This would be the correct answer if only unconjugated primary bile acids had been tested."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Conjugation lowers pKa, so conjugated bile salts, especially taurine conjugates, are more ionized and better detergents at intestinal pH.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 34,
    "pdfQuote": "They are better detergents than the"
  },
  {
    "id": 11,
    "category": "Gastroenterology: Bile Acid Metabolism",
    "questionText": "A 63-year-old man has 3 weeks of jaundice and pale, bulky, foul-smelling stools that float. Imaging shows a stone obstructing the common hepatic duct. Which of the following best explains his abnormal stools?",
    "options": [
      {
        "text": "Loss of NPC1L1-mediated cholesterol uptake",
        "explanation": "Incorrect. NPC1L1 handles cholesterol absorption and would not cause bulky fatty stools with jaundice. This would be the correct answer if he had been taking ezetimibe."
      },
      {
        "text": "Excess bacterial secondary bile acid formation",
        "explanation": "Incorrect. Bacteria need bile acids in the gut to act on, and obstruction reduces them. This would be the correct answer if he had bacterial overgrowth with normal bile flow."
      },
      {
        "text": "Increased enterohepatic bile acid recycling",
        "explanation": "Incorrect. Obstruction interrupts the cycle, so recycling falls. This would be the correct answer if his biliary tract were patent and functioning."
      },
      {
        "text": "Deficient hepatic cholesterol synthesis",
        "explanation": "Incorrect. Cholesterol synthesis does not determine fat emulsification in the gut. This would be the correct answer if he were taking a high-dose statin."
      },
      {
        "text": "Failure of bile salts to emulsify dietary fat",
        "explanation": "Correct. Obstruction keeps bile salts from reaching the intestine. Without these detergents, poorly soluble dietary lipids are not emulsified, so fat passes into stool. Loss of NPC1L1 would affect cholesterol uptake only, not bulk dietary fat."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Bile salts emulsify dietary fat; biliary obstruction removes them from the gut and causes fat malabsorption.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 31,
    "pdfQuote": "Dietary lipids (fat) have low solubility"
  },
  {
    "id": 12,
    "category": "Biochemistry: Cholesterol Synthesis and Fates",
    "questionText": "A 28-year-old man has bilateral corneal clouding. Genetic testing shows homozygous loss-of-function variants in lecithin-cholesterol acyltransferase. Which of the following plasma findings is most likely?",
    "options": [
      {
        "text": "Higher proportion of free cholesterol in HDL",
        "explanation": "Correct. LCAT esterifies cholesterol in HDL using an acyl group from carbon 2 of lecithin. Without it, HDL cholesterol stays unesterified. ACAT, the intracellular esterifying enzyme, is a separate enzyme and is unaffected."
      },
      {
        "text": "Lower plasma phosphatidylcholine concentration",
        "explanation": "Incorrect. LCAT consumes lecithin, so losing it would not deplete lecithin. This would be the correct answer if LCAT activity were abnormally high."
      },
      {
        "text": "Reduced ACAT esterification in hepatocytes",
        "explanation": "Incorrect. ACAT is an intracellular enzyme distinct from LCAT, so it is unaffected. This would be the correct answer if he had an ACAT gene defect."
      },
      {
        "text": "Elevated fecal bile acid excretion",
        "explanation": "Incorrect. LCAT has no direct role in bile acid excretion. This would be the correct answer if he were taking a bile acid sequestrant."
      },
      {
        "text": "Absent VLDL secretion by the liver",
        "explanation": "Incorrect. VLDL secretion carries hepatic cholesterol and does not depend on LCAT. This would be the correct answer if he had a defect in hepatic lipoprotein secretion."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: LCAT esterifies cholesterol in plasma HDL using lecithin; its deficiency leaves HDL cholesterol unesterified.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 22,
    "pdfQuote": "in HDL in the plasma"
  },
  {
    "id": 13,
    "category": "Endocrinology: Cholesterol-Derived Hormones",
    "questionText": "A 79-year-old woman has lived indoors in a nursing facility for 2 years with almost no sun exposure and eats a limited diet. She sustains a wrist fracture after a minor fall. Which of the following is the most likely consequence of her limited sun exposure?",
    "options": [
      {
        "text": "Decreased adrenal cortisol synthesis",
        "explanation": "Incorrect. Cortisol comes from cholesterol in the adrenal cortex without any UV requirement. This would be the correct answer if she had adrenal insufficiency."
      },
      {
        "text": "Impaired hepatic cholesterol synthesis",
        "explanation": "Incorrect. Hepatic synthesis depends on acetyl CoA and HMG CoA reductase, not sunlight. This would be the correct answer if she were taking a statin."
      },
      {
        "text": "Decreased intestinal calcium absorption",
        "explanation": "Correct. Vitamin D3 is made from a cholesterol derivative in skin exposed to UV light. Its active hormone form enhances intestinal calcium absorption. Without sun, this hormone falls and calcium absorption declines, weakening bone. Cortisol, also cholesterol-derived, does not depend on UV."
      },
      {
        "text": "Increased NPC1L1 cholesterol absorption",
        "explanation": "Incorrect. Sun exposure does not regulate intestinal NPC1L1. This would be the correct answer if the question concerned intestinal sterol uptake after a cholesterol-rich meal."
      },
      {
        "text": "Reduced bile salt emulsification of fat",
        "explanation": "Incorrect. Bile salt production does not depend on sunlight. This would be the correct answer if she had biliary obstruction."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Skin synthesis of vitamin D3 from cholesterol requires UV light, and vitamin D enhances intestinal calcium absorption.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 9,
    "pdfQuote": "synthesized endogenously from cholesterol"
  },
  {
    "id": 14,
    "category": "Biochemistry: Cholesterol Regulation",
    "questionText": "Cultured hepatocytes are engineered to express a mutant SCAP that cannot bind cholesterol. The mutant and control cells are loaded with cholesterol, and SREBP processing and HMG CoA reductase transcription are measured. Compared with control cells, which result is most likely in the mutant cells?",
    "options": [
      {
        "text": "SREBP retained in the ER as in controls",
        "explanation": "Incorrect. Retention requires cholesterol binding to SCAP, which the mutant cannot do. This would be the correct answer if the cells had expressed normal SCAP."
      },
      {
        "text": "Absent SREBP cleavage in the Golgi",
        "explanation": "Incorrect. Cleavage continues because the complex escapes to the Golgi. This would be the correct answer if the Golgi proteases had been knocked out."
      },
      {
        "text": "Reduced SREBP entry into the nucleus",
        "explanation": "Incorrect. Cleaved SREBP fragments still reach the nucleus in the mutant cells. This would be the correct answer if SREBP cleavage had been pharmacologically blocked."
      },
      {
        "text": "Increased SREBP-driven gene expression despite loading",
        "explanation": "Correct. Normally, cholesterol binds SCAP and traps SCAP-SREBP in the ER. A SCAP that cannot bind cholesterol lets the complex reach the Golgi, where SREBP is cleaved and activates HMG CoA reductase transcription. Feedback suppression is therefore lost."
      },
      {
        "text": "Loss of SREBP binding to the SRE",
        "explanation": "Incorrect. The SREBP DNA-binding domain is intact, so SRE binding is preserved. This would be the correct answer if the SREBP DNA-binding domain had been mutated."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Cholesterol-bound SCAP is the sensor that holds SREBP in the ER; without it, cholesterol cannot suppress HMG CoA reductase transcription.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 25,
    "pdfQuote": "which then traps SREBP at the ER"
  },
  {
    "id": 15,
    "category": "Gastroenterology: Bile Acid Metabolism",
    "questionText": "A 35-year-old man has hypercholesterolemia that responds poorly to diet. Genetic testing shows homozygous loss of function of the enzyme catalyzing the rate-limiting step of bile acid synthesis. Which of the following findings is most likely?",
    "options": [
      {
        "text": "Increased secondary bile acids in stool",
        "explanation": "Incorrect. Secondary bile acids come from primary ones, which he makes less of. This would be the correct answer if he had normal synthesis with bacterial overgrowth."
      },
      {
        "text": "Reduced fecal bile acid excretion",
        "explanation": "Correct. Loss of 7-alpha-hydroxylase cuts conversion of cholesterol to bile acids. Bile acid excretion is the main route that balances cholesterol synthesis, so less is excreted and cholesterol accumulates. More secondary bile acids would require more primary bile acids, the opposite of this defect."
      },
      {
        "text": "Increased hepatic SREBP cleavage",
        "explanation": "Incorrect. Cholesterol accumulating in his liver would trap SREBP in the ER. This would be the correct answer if his hepatocytes were cholesterol depleted by a statin."
      },
      {
        "text": "Increased plasma taurine-conjugated bile salts",
        "explanation": "Incorrect. His liver makes fewer primary bile acids to conjugate. This would be the correct answer if he had liver disease impairing bile acid extraction."
      },
      {
        "text": "Decreased hepatic cholesterol content",
        "explanation": "Incorrect. Blocked bile acid synthesis keeps cholesterol in the liver instead. This would be the correct answer if he were taking a bile acid sequestrant."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: 7-alpha-hydroxylase converts cholesterol to bile acids; losing it reduces bile acid excretion and raises cholesterol.",
    "lectureSource": "CV61: Lipid Metabolism Part 1: Cholesterol and Bile Acids",
    "pdfLecture": "CV61",
    "pdfPage": 12,
    "pdfQuote": "precursor for bile acids/salts biosynthesis"
  }
];

window.Test_CV61_Boards = Test_CV61_Boards;
