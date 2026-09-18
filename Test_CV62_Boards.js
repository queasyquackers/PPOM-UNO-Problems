// SET B - board-style items on the same lecture. File: Test_CV62_Boards.js
const Test_CV62_Boards = [
  {
    "id": 1,
    "category": "Biochemistry: Lipoprotein Classes",
    "questionText": "A 30-year-old man has blood drawn 2 hours after a high-fat breakfast. After the tube stands in a refrigerator overnight, a creamy layer floats above the plasma. The particles forming this layer most likely have which of the following properties?",
    "options": [
      {
        "text": "Higher protein fraction than HDL",
        "explanation": "Incorrect. A larger protein share raises density, so a protein-rich particle would not float. This would be the correct answer if the fraction had been collected from the bottom of a density gradient."
      },
      {
        "text": "Lower density than VLDL",
        "explanation": "Correct. Density falls as triglyceride content rises because triglyceride is less dense than protein. Particles appearing after a fatty meal are chylomicrons packed with dietary triglyceride, the least dense class, so they float. VLDL is also triglyceride-rich but carries a larger protein share, so it is denser than chylomicrons."
      },
      {
        "text": "ApoB-100 as the structural protein",
        "explanation": "Incorrect. ApoB-100 is the scaffold of hepatic VLDL, IDL and LDL, whereas dietary particles use apoB-48. This would be the correct answer if the sample had been drawn after an overnight fast."
      },
      {
        "text": "Secretion into the hepatic veins",
        "explanation": "Incorrect. Hepatocytes secrete VLDL into the hepatic veins, but dietary fat leaves enterocytes through lymph and the thoracic duct. This would be the correct answer if the triglyceride had been synthesized in the liver."
      },
      {
        "text": "Smaller diameter than LDL",
        "explanation": "Incorrect. Triglyceride-rich particles are the largest lipoproteins, and size falls toward HDL. This would be the correct answer if the isolated particles had been HDL, the smallest and densest class."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: More triglyceride means lower density and larger size, so dietary chylomicrons are the least dense lipoproteins and HDL the densest.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 7,
    "pdfQuote": "Major classes of lipoproteins"
  },
  {
    "id": 2,
    "category": "Biochemistry: Chylomicron Pathway",
    "questionText": "A 2-year-old boy is evaluated for poor weight gain and pale, bulky, foul-smelling stools. Pancreatic enzyme secretion is normal. Plasma lipoprotein analysis detects no chylomicrons, VLDL, or LDL. Which of the following steps is most likely defective in this patient?",
    "options": [
      {
        "text": "C-to-U editing of apoB mRNA",
        "explanation": "Incorrect. Editing determines only whether the intestine makes truncated apoB, and hepatic VLDL and LDL do not depend on it, yet both are absent. This would be the correct answer if chylomicrons carried full-length apoB."
      },
      {
        "text": "Hydrolysis of triglyceride at capillaries",
        "explanation": "Incorrect. Failed capillary hydrolysis makes chylomicrons and VLDL accumulate in plasma, the reverse of their absence here. This would be the correct answer if fasting plasma were milky with triglyceride-rich chylomicrons."
      },
      {
        "text": "Cholesterol efflux onto HDL",
        "explanation": "Incorrect. Impaired efflux lowers HDL but spares chylomicron and VLDL assembly and does not cause steatorrhea. This would be the correct answer if a child had very low HDL with cholesterol-laden tissues."
      },
      {
        "text": "Loading of lipid onto apoB",
        "explanation": "Correct. Microsomal triglyceride transfer protein loads lipid onto apoB-48 in enterocytes and apoB-100 in hepatocytes. Steatorrhea with absence of every apoB-containing lipoprotein points to failed assembly in both tissues, as in abetalipoproteinemia. An editing defect would affect only the intestinal protein length and would leave hepatic VLDL and LDL present."
      },
      {
        "text": "Micelle formation by bile salts",
        "explanation": "Incorrect. Bile salt deficiency causes steatorrhea, but hepatic VLDL and LDL production continues. This would be the correct answer if steatorrhea accompanied jaundice from bile duct blockage with normal plasma VLDL and LDL."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: MTP loads lipid onto apoB in both intestine and liver, so its absence removes chylomicrons, VLDL and LDL and causes steatorrhea.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 14,
    "pdfQuote": "Defect in MTP causes Abetalipoproteinemia"
  },
  {
    "id": 3,
    "category": "Biochemistry: Chylomicron Pathway",
    "questionText": "In an experimental mouse model, the intestinal enzyme that converts a cytidine to a uridine in apoB mRNA is knocked out, while hepatic apoB expression is unaffected. The mice are fed a high-fat diet. Which of the following findings in their intestinal lipoproteins is most likely?",
    "options": [
      {
        "text": "Larger apoB protein than normal",
        "explanation": "Correct. Intestinal C-to-U editing creates a stop codon, so enterocytes normally make truncated apoB-48, while the unedited message yields full-length apoB-100 in the liver. Without editing, enterocytes translate the whole message and build chylomicrons on the larger protein. Lipid loading and secretion into lymph still proceed because a structural scaffold is present."
      },
      {
        "text": "Absent lipoprotein secretion into lymph",
        "explanation": "Incorrect. Absent secretion follows failed lipid loading onto apoB, whereas loss of editing still leaves a usable scaffold. This would be the correct answer if the knocked-out gene encoded microsomal triglyceride transfer protein."
      },
      {
        "text": "Missing apoC-II after entry into plasma",
        "explanation": "Incorrect. Chylomicrons acquire apoC-II from HDL in plasma, a step unrelated to apoB mRNA editing. This would be the correct answer if the mice carried a null apoC-II allele."
      },
      {
        "text": "Cholesterol ester replacing core triglyceride",
        "explanation": "Incorrect. Editing changes the scaffold protein length, not the core lipids. This would be the correct answer if the particles had exchanged core lipid with HDL through cholesterol ester transfer protein."
      },
      {
        "text": "No apoE on the particle surface",
        "explanation": "Incorrect. ApoE is transferred from HDL during maturation regardless of apoB length. This would be the correct answer if the mice carried a null apoE allele."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: ApoB-48 exists because intestinal RNA editing inserts a stop codon; without editing the intestine makes full-length apoB-100.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 15,
    "pdfQuote": "C edited to U to create a STOP codon"
  },
  {
    "id": 4,
    "category": "Biochemistry: Chylomicron Pathway",
    "questionText": "A 12-year-old boy has recurrent episodes of severe epigastric pain. Blood drawn after an overnight fast is milky, and a creamy layer forms after the sample stands overnight. Sequencing of the gene for the capillary-bound lipase is normal, and the enzyme protein is present in normal amounts. Deficiency of which of the following is most likely?",
    "options": [
      {
        "text": "Apoprotein E",
        "explanation": "Incorrect. ApoE is the ligand for hepatic remnant uptake; triglyceride hydrolysis would still proceed, so fasting plasma would not be milky. This would be the correct answer if remnant particles accumulated despite normal triglyceride clearance."
      },
      {
        "text": "Apoprotein A-I",
        "explanation": "Incorrect. ApoA-I activates LCAT on HDL; its loss impairs HDL cholesterol esterification, not chylomicron triglyceride hydrolysis. This would be the correct answer if a patient had very low HDL with normal triglyceride."
      },
      {
        "text": "Apoprotein C-II",
        "explanation": "Correct. Apoprotein C-II, acquired from HDL during chylomicron maturation, activates lipoprotein lipase on capillary endothelium. With the enzyme present but unactivated, dietary triglyceride is not hydrolyzed and chylomicrons persist into the fasting state. ApoE deficiency would impair hepatic uptake of remnants that had already lost their triglyceride, so plasma would not be milky."
      },
      {
        "text": "Apoprotein B-48",
        "explanation": "Incorrect. Without apoB-48, chylomicrons are never assembled, so plasma would lack them rather than be milky. This would be the correct answer if a child had steatorrhea and no detectable chylomicrons."
      },
      {
        "text": "Apoprotein B-100",
        "explanation": "Incorrect. ApoB-100 is the VLDL scaffold and LDL receptor ligand; defective binding raises LDL cholesterol rather than chylomicron triglyceride. This would be the correct answer if fasting plasma were clear with markedly raised LDL cholesterol."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Lipoprotein lipase needs apoC-II from HDL to act, so apoC-II loss leaves triglyceride-rich chylomicrons in fasting plasma.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 16,
    "pdfQuote": "ApoC-II stimulates LPL"
  },
  {
    "id": 5,
    "category": "Biochemistry: Chylomicron Pathway",
    "questionText": "A 19-year-old woman with autoimmune diabetes mellitus stopped taking insulin several weeks ago. Fasting serum triglyceride concentration is 850 mg/dL (N=less than 150). Which of the following changes most likely contributes to her lipid abnormality?",
    "options": [
      {
        "text": "Decreased apoC-II transfer from HDL",
        "explanation": "Incorrect. ApoC-II transfer from HDL does not depend on insulin, and an inherited activator defect would not follow stopping insulin. This would be the correct answer if a child lacked apoC-II."
      },
      {
        "text": "Decreased hepatic LDL receptor synthesis",
        "explanation": "Incorrect. Less LDL receptor raises LDL cholesterol rather than fasting triglyceride. This would be the correct answer if a patient had clear plasma with high LDL cholesterol after a cholesterol-rich diet."
      },
      {
        "text": "Decreased SR-B1 uptake of HDL cholesterol",
        "explanation": "Incorrect. Impaired scavenger receptor uptake leaves cholesterol ester in HDL and raises HDL cholesterol, not triglyceride. This would be the correct answer if a patient had isolated high HDL cholesterol."
      },
      {
        "text": "Decreased apoE-mediated remnant uptake",
        "explanation": "Incorrect. Remnants have already lost most triglyceride to lipoprotein lipase, and apoE binding is not insulin dependent. This would be the correct answer if an inherited apoE defect caused remnant accumulation."
      },
      {
        "text": "Decreased lipoprotein lipase synthesis",
        "explanation": "Correct. Insulin released after a meal stimulates lipoprotein lipase synthesis in adipose tissue. Without insulin, adipose capillaries carry less enzyme, so triglyceride in chylomicrons and VLDL is cleared slowly and accumulates. An apoC-II defect is inherited and would not arise because insulin was stopped."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Insulin induces adipose lipoprotein lipase, so insulin deficiency slows triglyceride clearance from chylomicrons and VLDL.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 16,
    "pdfQuote": "Insulin stimulates LPL synthesis in adipose tissues"
  },
  {
    "id": 6,
    "category": "Biochemistry: Chylomicron Pathway",
    "questionText": "A 45-year-old man has yellow deposits in his palmar creases. Genetic testing shows a variant of the apoprotein that nascent chylomicrons and VLDL acquire from HDL to serve as a receptor ligand; the variant cannot bind hepatocyte receptors. Lipoprotein lipase activity is normal. Which of the following plasma changes is most likely?",
    "options": [
      {
        "text": "Increased triglyceride-rich mature chylomicrons",
        "explanation": "Incorrect. Normal lipoprotein lipase activity means chylomicron triglyceride is still hydrolyzed, so mature particles do not persist. This would be the correct answer if a child lacked apoC-II, the lipase activator."
      },
      {
        "text": "Increased chylomicron remnant particles",
        "explanation": "Correct. ApoE, acquired from HDL, is the ligand hepatocytes use to take up chylomicron remnants and IDL. Lipoprotein lipase still strips triglyceride normally, so particles shrink into remnants that cannot be cleared and accumulate. Triglyceride-rich mature chylomicrons would persist if lipase activation failed, which the normal lipase activity excludes."
      },
      {
        "text": "Increased plasma LDL from receptor loss",
        "explanation": "Incorrect. The LDL receptor itself is intact here; the defect lies in the ligand used for remnant uptake. This would be the correct answer if a patient had inherited loss of LDL receptors."
      },
      {
        "text": "Decreased VLDL secretion from liver",
        "explanation": "Incorrect. ApoE acts after secretion, so hepatic assembly of VLDL on apoB-100 is unaffected. This would be the correct answer if a drug inhibited hepatic microsomal triglyceride transfer protein."
      },
      {
        "text": "Increased HDL cholesterol ester content",
        "explanation": "Incorrect. HDL unloads cholesterol ester through the scavenger receptor SR-B1, which does not use apoE. This would be the correct answer if hepatocyte SR-B1 were defective."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: ApoE is the hepatic uptake ligand for chylomicron remnants, so a nonbinding apoE leaves triglyceride-depleted remnants in plasma.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 18,
    "pdfQuote": "Bound to the hepatocyte apoE receptor via apoE"
  },
  {
    "id": 7,
    "category": "Gastroenterology: Fat Malabsorption",
    "questionText": "A 52-year-old woman has 3 weeks of itching, dark urine, and pale, bulky, greasy stools that float. Ultrasonography shows a dilated common bile duct obstructed by a stone at its distal end. Serum lipase activity is within the reference range. Plasma concentration of which of the following is most likely decreased?",
    "options": [
      {
        "text": "Vitamin A",
        "explanation": "Correct. A stone blocking the common bile duct keeps bile salts from the intestine, so dietary lipid is poorly solubilized and malabsorbed, producing steatorrhea. Fat-soluble vitamins D, E, A and K are absorbed and transported with dietary lipid in chylomicrons, so their absorption falls. Water-soluble vitamins such as B12 do not travel in chylomicrons, so bile salt loss spares them."
      },
      {
        "text": "Vitamin B12",
        "explanation": "Incorrect. Vitamin B12 is water soluble and does not travel with dietary lipid in chylomicrons, so bile duct obstruction spares it. This would be the correct answer if a patient had pernicious anemia."
      },
      {
        "text": "Folic acid",
        "explanation": "Incorrect. Folic acid is water soluble and is absorbed without bile salt micelles. This would be the correct answer if a patient had a diet lacking leafy vegetables."
      },
      {
        "text": "Ascorbic acid",
        "explanation": "Incorrect. Ascorbic acid is water soluble and does not depend on chylomicron transport. This would be the correct answer if a patient had a diet lacking fresh fruit and vegetables."
      },
      {
        "text": "Thiamine",
        "explanation": "Incorrect. Thiamine is water soluble and is not carried with dietary fat. This would be the correct answer if a patient had chronic heavy alcohol use with poor intake."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Bile duct obstruction blocks lipid solubilization, so steatorrhea brings deficiency of the chylomicron-carried fat-soluble vitamins D, E, A and K.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 19,
    "pdfQuote": "Lack of bile salts (bile duct blockage)"
  },
  {
    "id": 8,
    "category": "Biochemistry: VLDL and LDL Pathway",
    "questionText": "A 48-year-old man has blood drawn after an overnight fast. Serum triglyceride concentration is 420 mg/dL (N=less than 150). The triglyceride in this sample was most likely packaged into lipoproteins by which of the following cells?",
    "options": [
      {
        "text": "Small intestinal enterocytes",
        "explanation": "Incorrect. Enterocytes package dietary triglyceride into chylomicrons, and after an overnight fast no dietary lipid is being absorbed. This would be the correct answer if the sample had been drawn soon after a fatty meal."
      },
      {
        "text": "Adipocytes",
        "explanation": "Incorrect. Adipocytes store triglyceride delivered by lipoprotein lipase and do not assemble lipoproteins. This would be the correct answer if the triglyceride had been sampled from an adipose tissue biopsy."
      },
      {
        "text": "Skeletal muscle fibers",
        "explanation": "Incorrect. Muscle takes up fatty acids released by lipoprotein lipase for energy and does not secrete lipoproteins. This would be the correct answer if intramuscular triglyceride had been sampled on muscle biopsy."
      },
      {
        "text": "Hepatocytes",
        "explanation": "Correct. After an overnight fast no dietary fat is being absorbed, so circulating triglyceride is endogenous lipid made in the liver. Hepatocytes load it onto apoB-100 with microsomal triglyceride transfer protein and secrete it as VLDL into the hepatic veins. Enterocytes package dietary triglyceride into chylomicrons, which dominate after a meal rather than after fasting."
      },
      {
        "text": "Arterial wall macrophages",
        "explanation": "Incorrect. Macrophages take up oxidized LDL and become foam cells but do not secrete triglyceride-carrying lipoproteins. This would be the correct answer if lipid had been sampled from an atherosclerotic plaque."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Fasting plasma triglyceride travels mainly in hepatic VLDL built on apoB-100, whereas chylomicrons from enterocytes carry dietary triglyceride after meals.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 21,
    "pdfQuote": "VLDL is synthesized in the liver"
  },
  {
    "id": 9,
    "category": "Biochemistry: VLDL and LDL Pathway",
    "questionText": "A 63-year-old man with long-standing hypercholesterolemia undergoes carotid endarterectomy. Microscopy of the plaque shows intimal cells with abundant foamy, lipid-filled cytoplasm, and oxidized lipoprotein is detected in the lesion. Which of the following processes most directly produced these cells?",
    "options": [
      {
        "text": "LDL receptor endocytosis of native LDL",
        "explanation": "Incorrect. Receptor uptake of native LDL is self-limited, because cellular cholesterol down-regulates LDL receptor synthesis through SREBP. This would be the correct answer if cholesterol-depleted adrenal cells were taking up LDL."
      },
      {
        "text": "SR-B1 transfer of HDL cholesterol",
        "explanation": "Incorrect. SR-B1 on hepatocytes accepts HDL cholesterol without endocytosis, returning it to the liver rather than loading the artery wall. This would be the correct answer if hepatocytes were acquiring HDL cholesterol."
      },
      {
        "text": "Lipoprotein lipase hydrolysis of VLDL",
        "explanation": "Incorrect. Lipoprotein lipase releases fatty acids from VLDL triglyceride for muscle and adipose use and does not create lipid-laden intimal cells. This would be the correct answer if adipocytes were storing newly delivered fat."
      },
      {
        "text": "CETP transfer of ester to VLDL",
        "explanation": "Incorrect. Cholesterol ester transfer protein moves ester from HDL to VLDL in plasma and does not load intimal cells. This would be the correct answer if VLDL cholesterol ester content rose in plasma."
      },
      {
        "text": "Macrophage uptake of oxidized LDL",
        "explanation": "Correct. When LDL is high, hepatic uptake saturates and LDL lingers in the vessel wall, where it becomes oxidized. Macrophages take up excess and oxidized LDL, fill with lipid and become foam cells that build atherosclerotic plaque. Native LDL uptake through the LDL receptor is limited because rising cellular cholesterol down-regulates receptor synthesis."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Excess LDL that becomes oxidized is taken up by macrophages, which become the foam cells that seed atherosclerotic plaque.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 23,
    "pdfQuote": "Excess and oxidized LDL taken up by macrophages"
  },
  {
    "id": 10,
    "category": "Biochemistry: VLDL and LDL Pathway",
    "questionText": "A 55-year-old woman with hypercholesterolemia begins a drug that inhibits hepatic cholesterol synthesis. Eight weeks later, her plasma LDL cholesterol concentration has fallen substantially, although her diet is unchanged. Which of the following changes in her hepatocytes most likely accounts for the fall in plasma LDL?",
    "options": [
      {
        "text": "Increased ACAT esterification of cholesterol",
        "explanation": "Incorrect. ACAT esterifies free cholesterol inside cells to keep it out of membranes and adds no receptors to clear plasma LDL. This would be the correct answer if hepatocytes were storing excess cholesterol as ester."
      },
      {
        "text": "Decreased LDL receptor recycling",
        "explanation": "Incorrect. Fewer recycled receptors would slow LDL clearance and raise plasma LDL. This would be the correct answer if rising plasma LDL were traced to receptors failing to return to the membrane."
      },
      {
        "text": "Increased LDL receptor synthesis",
        "explanation": "Correct. Falling hepatocyte cholesterol relieves SREBP-mediated repression, so hepatocytes make more LDL receptors. More receptors bind apoB-100 on LDL, internalize it by endocytosis and clear it from plasma. Reduced receptor recycling would lower surface receptors and raise plasma LDL, the opposite of what occurred."
      },
      {
        "text": "Increased SR-B1 uptake of whole HDL",
        "explanation": "Incorrect. SR-B1 takes cholesterol from HDL without endocytosing the particle and does not clear LDL. This would be the correct answer if hepatic HDL cholesterol uptake had risen."
      },
      {
        "text": "Decreased apoE receptor expression",
        "explanation": "Incorrect. Fewer apoE receptors would slow remnant clearance and raise plasma remnants rather than lower LDL. This would be the correct answer if a patient had accumulating chylomicron remnants."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Low hepatocyte cholesterol up-regulates LDL receptor synthesis through SREBP, increasing LDL clearance; high cellular cholesterol does the reverse.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 26,
    "pdfQuote": "LDL receptor synthesis can be down-regulated by cholesterol"
  },
  {
    "id": 11,
    "category": "Biochemistry: VLDL and LDL Pathway",
    "questionText": "A 7-year-old boy has progressive clumsiness, unsteady gait, and declining school performance. Examination shows hepatosplenomegaly. Cultured skin fibroblasts take up LDL normally, but unesterified cholesterol accumulates within their lysosomes. Which of the following steps in LDL cholesterol handling is most likely defective?",
    "options": [
      {
        "text": "Release of cholesterol from lysosomes",
        "explanation": "Correct. After LDL is endocytosed, lysosomal enzymes hydrolyze its cholesteryl esters, and the free cholesterol must then leave the lysosome for cellular use. Normal uptake with free cholesterol trapped inside lysosomes places the block at lysosomal release, as in Niemann-Pick type C disease, where nerve cells die. A hydrolysis defect would leave cholesteryl ester, not free cholesterol, accumulating."
      },
      {
        "text": "Receptor-mediated endocytosis of LDL",
        "explanation": "Incorrect. The fibroblasts take up LDL normally, so receptor binding and endocytosis are intact. This would be the correct answer if cells failed to internalize LDL and plasma LDL were markedly raised."
      },
      {
        "text": "Hydrolysis of LDL cholesteryl esters",
        "explanation": "Incorrect. The accumulating cholesterol is unesterified, showing that lysosomal hydrolysis of cholesteryl ester has occurred. This would be the correct answer if cholesteryl ester rather than free cholesterol filled the lysosomes."
      },
      {
        "text": "Esterification of cholesterol by ACAT",
        "explanation": "Incorrect. ACAT re-esterifies cholesterol in the cytoplasm after it leaves the lysosome, so its loss would not trap cholesterol inside lysosomes. This would be the correct answer if free cholesterol accumulated in cell membranes."
      },
      {
        "text": "Recycling of receptors to the membrane",
        "explanation": "Incorrect. Receptor recycling governs how much LDL enters the cell, but uptake here is normal. This would be the correct answer if cells showed dwindling surface LDL receptors with reduced LDL uptake."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: In Niemann-Pick type C disease, LDL-derived free cholesterol cannot leave lysosomes, so it builds up and nerve cells die.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 26,
    "pdfQuote": "Cholesterol builds up inside lysosomes"
  },
  {
    "id": 12,
    "category": "Biochemistry: Reverse Cholesterol Transport",
    "questionText": "A 16-year-old boy has enlarged, orange-yellow tonsils and numbness in his hands. Examination shows hepatosplenomegaly. Serum HDL cholesterol is undetectable. Tonsillar biopsy shows macrophages filled with cholesterol ester. Which of the following is the most likely diagnosis?",
    "options": [
      {
        "text": "Abetalipoproteinemia",
        "explanation": "Incorrect. Abetalipoproteinemia removes apoB-containing lipoproteins and causes steatorrhea, whereas isolated HDL loss points to failed efflux. This would be the correct answer if a child had steatorrhea and absent chylomicrons, VLDL and LDL."
      },
      {
        "text": "Niemann-Pick type C disease",
        "explanation": "Incorrect. Niemann-Pick type C traps free cholesterol in lysosomes and kills nerve cells but does not abolish plasma HDL. This would be the correct answer if a child had progressive ataxia with lysosomal free cholesterol."
      },
      {
        "text": "Pancreatic insufficiency",
        "explanation": "Incorrect. Pancreatic insufficiency reduces lipase and colipase secretion and causes steatorrhea, not absent HDL with cholesterol-laden tonsils. This would be the correct answer if a patient with chronic pancreatitis had greasy stools."
      },
      {
        "text": "Familial hypercholesterolemia",
        "explanation": "Incorrect. Familial hypercholesterolemia raises LDL through receptor loss and does not abolish HDL. This would be the correct answer if tendon xanthomas accompanied a very high LDL cholesterol."
      },
      {
        "text": "Tangier disease",
        "explanation": "Correct. ABCA1 flips cholesterol from the inner to the outer membrane leaflet so HDL can pick it up. Its deficiency stops cholesterol efflux from peripheral cells, so HDL is nearly absent while cholesterol accumulates in tissue macrophages such as those of the tonsils. Niemann-Pick type C traps LDL-derived cholesterol in lysosomes but does not abolish HDL."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: ABCA1 deficiency, Tangier disease, blocks cholesterol efflux to HDL, giving near-absent HDL and cholesterol-laden tissues.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 29,
    "pdfQuote": "HDL in reverse cholesterol transport-II"
  },
  {
    "id": 13,
    "category": "Biochemistry: Reverse Cholesterol Transport",
    "questionText": "A 35-year-old woman has bilateral corneal clouding. Genetic testing shows complete absence of apoA-I, the major apoprotein coating nascent HDL. Plasma triglyceride concentration is within the reference range. Which of the following plasma changes is most likely?",
    "options": [
      {
        "text": "Decreased lipoprotein lipase activation",
        "explanation": "Incorrect. Lipoprotein lipase is activated by apoC-II, and the normal triglyceride shows its activity is intact. This would be the correct answer if a child with milky fasting plasma lacked apoC-II."
      },
      {
        "text": "Decreased cholesterol esterification in HDL",
        "explanation": "Correct. ApoA-I activates LCAT, which transfers a fatty acid from lecithin to cholesterol, making cholesterol ester that is trapped in HDL. Without apoA-I, LCAT stays inactive, so HDL cannot esterify and retain cholesterol picked up from tissues. Lipoprotein lipase depends on apoC-II instead, and the normal triglyceride shows chylomicron clearance is intact."
      },
      {
        "text": "Decreased LDL receptor binding of LDL",
        "explanation": "Incorrect. LDL receptors bind apoB-100 on LDL, which is unaffected by loss of an HDL apoprotein. This would be the correct answer if a patient carried an apoB-100 variant that failed to bind receptors."
      },
      {
        "text": "Decreased chylomicron assembly",
        "explanation": "Incorrect. Chylomicron assembly depends on apoB-48 and microsomal triglyceride transfer protein in enterocytes, not on HDL apoproteins. This would be the correct answer if a child had steatorrhea with absent apoB lipoproteins."
      },
      {
        "text": "Decreased remnant uptake by hepatocytes",
        "explanation": "Incorrect. Hepatic remnant uptake uses apoE as the ligand, not apoA-I. This would be the correct answer if a patient carried an apoE variant unable to bind hepatocyte receptors."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: ApoA-I activates LCAT, which esterifies cholesterol with a lecithin fatty acid and traps it in HDL for reverse transport.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 30,
    "pdfQuote": "LCAT - lecithin cholesterol acyl transferase"
  },
  {
    "id": 14,
    "category": "Biochemistry: Reverse Cholesterol Transport",
    "questionText": "A 40-year-old man scheduled for partial hepatectomy for a benign liver mass joins a metabolic study. Two hours before surgery he receives an infusion of HDL whose cholesterol ester core and apoA-I shell carry distinct radioactive labels. Which of the following findings is most likely in hepatocytes from the resected tissue?",
    "options": [
      {
        "text": "Both labels within lysosomes",
        "explanation": "Incorrect. Lysosomal delivery of lipid and protein together follows whole-particle endocytosis, not HDL unloading. This would be the correct answer if the infused particle had been a labeled chylomicron remnant taken up through apoE."
      },
      {
        "text": "Protein label without the ester label",
        "explanation": "Incorrect. The scavenger receptor transfers lipid, not apoprotein, so the apoA-I label stays on HDL that returns to plasma. This would be the correct answer if lipid-free labeled apoA-I had been infused alone."
      },
      {
        "text": "Neither label inside the cells",
        "explanation": "Incorrect. The scavenger receptor does move HDL cholesterol ester into hepatocytes, so the lipid label enters the cells. This would be the correct answer if hepatocyte SR-B1 were absent."
      },
      {
        "text": "Ester label without the protein label",
        "explanation": "Correct. HDL binds the scavenger receptor SR-B1 on hepatocytes, which transfers cholesterol and cholesterol ester into the cell without endocytosis. The emptied HDL particle, with its apoA-I, dissociates and re-enters the circulation. Both labels in lysosomes would require whole-particle endocytosis, the route LDL receptors use, not SR-B1."
      },
      {
        "text": "Both labels bound to LDL receptors",
        "explanation": "Incorrect. LDL receptors bind apoB-100 and apoE, which HDL does not use for hepatic delivery. This would be the correct answer if the labels had been placed on LDL cholesterol ester and apoB-100."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: HDL unloads cholesterol and ester to hepatocytes through SR-B1 without endocytosis, and the HDL particle returns to the circulation.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 31,
    "pdfQuote": "HDL dissociates and re-enters the circulation"
  },
  {
    "id": 15,
    "category": "Cardiology: Lipoprotein(a)",
    "questionText": "A 44-year-old man has a myocardial infarction. His father had a myocardial infarction in his forties. Fasting LDL cholesterol, HDL cholesterol, and triglyceride concentrations are within reference ranges. Lipoprotein analysis shows abundant particles that resemble LDL but carry an extra apoprotein, disulfide-linked to apoB-100 and structurally similar to plasminogen. Which of the following effects of these particles most likely contributed to his infarction?",
    "options": [
      {
        "text": "Decreased hepatic LDL receptor clearance",
        "explanation": "Incorrect. Impaired LDL receptor clearance raises LDL cholesterol, yet his LDL is within the reference range. This would be the correct answer if a patient with an inherited receptor defect had markedly raised LDL."
      },
      {
        "text": "Impaired cholesterol efflux to HDL",
        "explanation": "Incorrect. Failed efflux to HDL lowers HDL, which is normal here. This would be the correct answer if a patient with ABCA1 deficiency had near-absent HDL and premature coronary disease."
      },
      {
        "text": "Reduced plasmin-mediated fibrin clot breakdown",
        "explanation": "Correct. These particles are lipoprotein(a), LDL whose apoB-100 is disulfide-linked to apo(a), a protein structurally similar to plasminogen. By competing with plasminogen for fibrin, it is thought to slow breakdown of the clots that trigger heart attacks. Its level is largely genetic, so risk persists despite a normal lipid panel."
      },
      {
        "text": "Excess hepatic VLDL output",
        "explanation": "Incorrect. Excess VLDL output raises fasting triglyceride, which is normal in this patient. This would be the correct answer if a patient with markedly raised fasting triglyceride developed coronary disease."
      },
      {
        "text": "Accumulation of chylomicron remnants",
        "explanation": "Incorrect. Remnant accumulation follows a nonbinding apoE and raises fasting lipids, which are normal here. This would be the correct answer if a patient with an apoE variant had palmar xanthomas and remnant excess."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Lp(a) is LDL carrying plasminogen-like apo(a) on apoB-100; high, largely genetic levels raise coronary risk, possibly by slowing clot breakdown.",
    "lectureSource": "CV62: Lipid Metabolism Part 2 - Lipoproteins",
    "pdfLecture": "CV62",
    "pdfPage": 34,
    "pdfQuote": "Lp(a) - one last clinically important lipoprotein"
  }
];

window.Test_CV62_Boards = Test_CV62_Boards;
