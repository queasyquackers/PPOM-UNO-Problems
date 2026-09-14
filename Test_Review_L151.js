// CPR Block 1 - Review Lecture: Laboratory Medicine and Anemias Part 1 (L151)
// Faculty: Saggio
// 20 first-order recall questions. Slide links resolve through PDF_MAPPING["L151"].
const Test_Review_L151 = [
  {
    "id": 1,
    "category": "Anemia Basics: Definition",
    "questionText": "Which of the following best defines anemia?",
    "options": [
      {
        "text": "An increase in circulating white blood cell mass",
        "explanation": "Incorrect. An increase in circulating white blood cell mass describes leukocytosis, a response to infection, inflammation, or a myeloproliferative process, and it is not what the lecture defines as anemia. Anemia is specifically a red cell mass problem. This would be the correct answer if the question asked for the definition of leukocytosis instead of anemia."
      },
      {
        "text": "A significant deficit in circulating red cell mass",
        "explanation": "Correct. The lecture defines anemia as a significant deficit in the mass of circulating red blood cells. This matters because red blood cells transport oxygen to cells and tissues, so a decreased red cell mass means a decreased capacity to carry and deliver oxygen. Every downstream sign and symptom of anemia traces back to the resulting tissue hypoxia."
      },
      {
        "text": "A decrease in circulating platelet number per liter",
        "explanation": "Incorrect. A decrease in circulating platelets describes thrombocytopenia, which produces bleeding and bruising rather than the oxygen delivery failure that defines anemia. Platelet number is reported on the CBC but is not part of the anemia definition. This would be the correct answer if the question asked for the definition of thrombocytopenia instead of anemia."
      },
      {
        "text": "An excess of plasma volume relative to cell mass",
        "explanation": "Incorrect. An excess of plasma volume relative to cell mass describes a dilutional or relative anemia, a volume effect rather than a true deficit in red cell mass. The lecture definition centers on an actual deficit in circulating red blood cells. This would be the correct answer if the question asked how volume overload lowers a measured hematocrit instead of asking for the definition of anemia."
      },
      {
        "text": "A defect in the clotting cascade protein activity",
        "explanation": "Incorrect. A defect in clotting cascade proteins describes a coagulopathy such as hemophilia, which impairs clot formation and has nothing to do with red cell mass. Blood loss from a coagulopathy can eventually cause anemia, but it is not the definition. This would be the correct answer if the question asked for the definition of a factor deficiency bleeding disorder instead of anemia."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Anemia is a significant deficit in circulating red cell mass, and every symptom of it traces back to reduced oxygen delivery and tissue hypoxia.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 6,
    "pdfQuote": "Anemia: a significant deficit in the mass of circulating red blood"
  },
  {
    "id": 2,
    "category": "Erythrocyte Life Cycle: Erythropoietin",
    "questionText": "Erythropoietin is secreted by which of the following cell populations?",
    "options": [
      {
        "text": "Macrophages of the splenic red pulp sinusoids",
        "explanation": "Incorrect. Splenic red pulp macrophages remove senescent red blood cells as part of the reticuloendothelial system, which recycles red cell components. They clear old cells rather than signaling for new ones. This would be the correct answer if the question asked which cells remove senescent erythrocytes instead of which cells secrete erythropoietin."
      },
      {
        "text": "Hepatocytes within the periportal zone of liver",
        "explanation": "Incorrect. Hepatocytes synthesize transferrin, the plasma iron carrier measured as total iron binding capacity, and they also make the regulator hepcidin. The lecture assigns erythropoietin production to the kidney, not the liver. This would be the correct answer if the question asked where transferrin is synthesized instead of where erythropoietin is secreted."
      },
      {
        "text": "Stromal fibroblasts of the marrow erythroid niche",
        "explanation": "Incorrect. The marrow stroma is the site where erythropoiesis occurs and where erythropoietin acts on erythroid progenitors, but it is the target of the signal rather than its source. The marrow responds by releasing reticulocytes. This would be the correct answer if the question asked where erythropoietin exerts its effect instead of where it is produced."
      },
      {
        "text": "Interstitial cells of the renal peritubular bed",
        "explanation": "Correct. Interstitial cells in the peritubular capillary bed of the renal cortex sense a decrease in oxygen and secrete erythropoietin, which then stimulates the bone marrow to increase red cell production. The lecture also emphasizes that erythropoietin and hematocrit levels are inversely proportional. Reticulocytes released in response mature into erythrocytes in about 24 to 48 hours."
      },
      {
        "text": "Endothelial cells lining the pulmonary capillaries",
        "explanation": "Incorrect. Pulmonary capillary endothelium is the interface for gas exchange, where red blood cells pick up oxygen and release carbon dioxide. It plays no role in the hormonal sensing of hypoxia described in the lecture. This would be the correct answer if the question asked where oxygen loading of hemoglobin occurs instead of where erythropoietin is secreted."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Interstitial cells of the renal cortical peritubular capillary bed sense hypoxia and release erythropoietin, and erythropoietin levels are inversely proportional to hematocrit.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 8,
    "pdfQuote": "Decreased O2 is sensed by interstitial cells in the"
  },
  {
    "id": 3,
    "category": "RBC Indices: Reticulocyte Count",
    "questionText": "An elevated reticulocyte count in the setting of anemia indicates which of the following?",
    "options": [
      {
        "text": "The bone marrow is responding appropriately to anemia",
        "explanation": "Correct. The reticulocyte count is the percentage of total red blood cells that are immature, and it is the key value for judging whether the marrow recognizes the anemia. An anemia with an increased reticulocyte count means the marrow is being driven by erythropoietin and is pushing out new cells appropriately. The lecture cautions that the marrow response is delayed, so an early count may not yet be elevated."
      },
      {
        "text": "The bone marrow itself is the underlying cause of anemia",
        "explanation": "Incorrect. A marrow that is itself the problem shows anemia WITHOUT an increase in the reticulocyte count, which is the opposite finding. A low or inappropriately normal count points to a production failure. This would be the correct answer if the question asked what a low reticulocyte count in the setting of anemia indicates."
      },
      {
        "text": "The patient has an iron deficiency as the sole cause",
        "explanation": "Incorrect. Iron deficiency is a production problem and belongs in the decreased production category, which generally shows a low rather than an elevated reticulocyte count. The reticulocyte count is nonspecific and never establishes a single etiology by itself. This would be the correct answer if the question asked which anemia is the most common cause worldwide instead of what an elevated reticulocyte count means."
      },
      {
        "text": "The spleen has stopped clearing senescent red cells",
        "explanation": "Incorrect. Splenic clearance of senescent red cells is a normal function of the reticuloendothelial system that removes about one percent of red blood cells each day. Increased rather than decreased splenic activity is what accompanies hemolysis. This would be the correct answer if the question asked which organ removes old erythrocytes instead of what a high reticulocyte count signifies."
      },
      {
        "text": "The kidneys have ceased producing erythropoietin",
        "explanation": "Incorrect. Loss of renal erythropoietin production would remove the stimulus for erythropoiesis and therefore lower, not raise, the reticulocyte count. A brisk reticulocytosis actually implies that erythropoietin signaling is intact. This would be the correct answer if the question asked what happens to the marrow when erythropoietin production fails instead of what an elevated reticulocyte count means."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Anemia with a high reticulocyte count means the marrow is responding appropriately, while anemia without a reticulocyte rise points to the marrow as the problem, remembering there is a normal delay in the response.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 14,
    "pdfQuote": "important when determining if the bone marrow is responding appropriately to anemia"
  },
  {
    "id": 4,
    "category": "Measurements of Anemia: CBC Rule of 3",
    "questionText": "The CBC rule of 3 uses which of the following as its normal reference set for red blood cell count, hemoglobin, and hematocrit?",
    "options": [
      {
        "text": "RBC 3, hemoglobin 10, hematocrit 30",
        "explanation": "Incorrect. This set describes a clearly anemic patient rather than the normal reference values used to teach the rule. Values like these would prompt a workup, not serve as the baseline. This would be the correct answer if the question asked for a representative set of values in a moderately anemic patient instead of the normal reference set."
      },
      {
        "text": "RBC 4.2, hemoglobin 13.6, hematocrit 41.0",
        "explanation": "Incorrect. These are ordinary reference range values, not the memorized 5, 15, and 45 triplet the lecture uses to teach the rule. The rule is taught with round numbers that multiply cleanly in both steps. This would be the correct answer if the question asked for any single set of values inside the normal range rather than the specific rule of 3 triplet."
      },
      {
        "text": "RBC 5, hemoglobin 15, hematocrit 45",
        "explanation": "Correct. The lecture teaches the CBC rule of 3 with a red blood cell count of 5, a hemoglobin of 15, and a hematocrit of 45, so that multiplying the red cell count by 3 gives the hemoglobin and multiplying the hemoglobin by 3 gives the hematocrit. The same factor of 3 appears in the transfusion pearl, where one unit of packed red blood cells raises hemoglobin by 1 gram per deciliter and hematocrit by 3 percent. These three values come off every CBC and are the first numbers checked when anemia is suspected."
      },
      {
        "text": "RBC 5, hemoglobin 12, hematocrit 36",
        "explanation": "Incorrect. Here the hemoglobin and hematocrit do keep a threefold relationship with each other but not with the red cell count, so the chain breaks at the first step. It also sits at the low end of the female reference ranges. This would be the correct answer if the question asked only about the relationship between hemoglobin and hematocrit instead of the full rule of 3 set."
      },
      {
        "text": "RBC 6, hemoglobin 18, hematocrit 50",
        "explanation": "Incorrect. This set is at or above the upper limits of normal and the hematocrit does not equal three times the hemoglobin, so it fails the rule. Values like these suggest polycythemia rather than a teaching baseline. This would be the correct answer if the question asked for values suggesting an elevated red cell mass instead of the normal rule of 3 reference set."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: The CBC rule of 3 anchors on RBC 5, hemoglobin 15, hematocrit 45, and the same factor of 3 explains why one unit of packed red cells raises hemoglobin by 1 and hematocrit by 3.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 11,
    "pdfQuote": "RBC Count        (5)\nHemoglobin   (15)\nHematocrit     (45)"
  },
  {
    "id": 5,
    "category": "RBC Indices: Red Cell Distribution Width",
    "questionText": "Which of the following does the red blood cell distribution width measure?",
    "options": [
      {
        "text": "The average amount of hemoglobin in one erythrocyte",
        "explanation": "Incorrect. The average amount of hemoglobin in a single erythrocyte is the mean corpuscular hemoglobin, one of the two indices the lecture groups under amount of hemoglobin per red cell. It says nothing about size variability. This would be the correct answer if the question asked what mean corpuscular hemoglobin measures instead of what the distribution width measures."
      },
      {
        "text": "The percentage of circulating red cells that are young",
        "explanation": "Incorrect. The percentage of circulating red cells that are immature is the reticulocyte count, normally 1 to 2 percent, and it is used to judge the marrow response to anemia. It is a maturity measure rather than a size measure. This would be the correct answer if the question asked what the reticulocyte count measures instead of what the distribution width measures."
      },
      {
        "text": "The percentage of erythrocyte volume in whole blood",
        "explanation": "Incorrect. The percentage of a blood sample occupied by erythrocyte volume is the hematocrit, normally 40 to 54 percent in males and 36 to 48 percent in females. Hematocrit quantifies red cell bulk, not the spread of cell sizes. This would be the correct answer if the question asked what hematocrit measures instead of what the distribution width measures."
      },
      {
        "text": "The average diameter of the central area of pallor",
        "explanation": "Incorrect. The central area of pallor is a morphologic feature seen on a Wright Giemsa peripheral smear that reflects the biconcave shape and the hemoglobin content of the cell center. It is inspected visually and is not an automated index. This would be the correct answer if the question asked what enlarges on the smear in a hypochromic microcytic anemia instead of what the distribution width measures."
      },
      {
        "text": "The variability in size among circulating red cells",
        "explanation": "Correct. The red blood cell distribution width measures the variability of the mean cell volume, normally 12 to 15 percent, and a higher value means a wider range of red cell sizes. This is why iron deficiency anemia and anemia of chronic disease show a high distribution width, since they begin as normocytic and become microcytic, leaving a mixed population in circulation. Because red cells live about 120 days, the older normocytic cells persist alongside the newer microcytic ones."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: RDW measures the variability of the MCV, so it rises in anemias that shift from normocytic to microcytic over time, such as iron deficiency and anemia of chronic disease.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 14,
    "pdfQuote": "Red Blood Cell Distribution Width (RDW): measures the variability of the MCV"
  },
  {
    "id": 6,
    "category": "Anemia Classification: MCV Cutoffs",
    "questionText": "Which of the following mean cell volume values defines a microcytic anemia?",
    "options": [
      {
        "text": "An MCV between 80 and 100 femtoliters",
        "explanation": "Incorrect. A mean cell volume of 80 to 100 femtoliters is the normocytic range, which includes early iron deficiency and anemia of chronic disease before they become microcytic. Normal sized cells do not meet the microcytic definition. This would be the correct answer if the question asked for the normocytic range instead of the microcytic range."
      },
      {
        "text": "An MCV between 100 and 120 femtoliters",
        "explanation": "Incorrect. A mean cell volume above 100 femtoliters places the anemia in the macrocytic category, which the lecture defers to part two of the series. Macrocytosis reflects a different set of mechanisms entirely. This would be the correct answer if the question asked which values fall in the macrocytic category instead of the microcytic one."
      },
      {
        "text": "An MCV greater than 100 femtoliters",
        "explanation": "Incorrect. Greater than 100 femtoliters is the stated cutoff for macrocytic anemia, the opposite end of the size spectrum from microcytosis. Macrocytic causes are covered in the second part of this lecture series. This would be the correct answer if the question asked for the definition of macrocytic anemia instead of microcytic anemia."
      },
      {
        "text": "An MCV less than 80 femtoliters",
        "explanation": "Correct. After a low hemoglobin, hematocrit, or red cell count establishes that a patient is anemic, the mean cell volume is the next value examined, and less than 80 femtoliters defines microcytic anemia. The five microcytic anemias taught here are iron deficiency, anemia of chronic disease, lead poisoning, sideroblastic anemia, and thalassemia. A very low value under 70 femtoliters should raise particular suspicion for thalassemia."
      },
      {
        "text": "An MCV greater than 120 femtoliters",
        "explanation": "Incorrect. This is an extreme macrocytic value, well above the 100 femtoliter macrocytic threshold, and is the reverse of what microcytosis means. Cells this large point toward the megaloblastic processes of part two. This would be the correct answer if the question asked which values represent marked macrocytosis instead of microcytosis."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: MCV under 80 is microcytic, 80 to 100 is normocytic, and over 100 is macrocytic, and MCV is the next value to check once the CBC confirms anemia.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 16,
    "pdfQuote": "Microcytic = MCV <80\nNormocytic = MCV 80-100\nMacrocytic = MCV >100"
  },
  {
    "id": 7,
    "category": "Hemoglobin Structure: Heme Composition",
    "questionText": "Heme is composed of which of the following?",
    "options": [
      {
        "text": "Two alpha chains and two beta globin chains",
        "explanation": "Incorrect. Two alpha and two beta chains describe the globin portion of hemoglobin A, the protein half of the molecule rather than the heme half. Thalassemia, not iron deficiency, is the disorder of these chains. This would be the correct answer if the question asked about the globin composition of adult hemoglobin A instead of the composition of heme."
      },
      {
        "text": "Iron combined with a protoporphyrin ring",
        "explanation": "Correct. Hemoglobin has two parts, heme and globin, and heme itself is iron plus protoporphyrin. This structure explains the entire microcytic differential taught in this lecture, since a problem with iron, with protoporphyrin, or with the globin chains all reduce hemoglobin production. Ferrochelatase is the enzyme that attaches iron to protoporphyrin to complete heme."
      },
      {
        "text": "Transferrin bound to circulating plasma iron",
        "explanation": "Incorrect. Transferrin bound to iron is the plasma transport form of iron, made in the liver and measured indirectly as total iron binding capacity. It carries iron to the cell but is not part of the heme molecule. This would be the correct answer if the question asked how iron travels through the plasma instead of what heme is made of."
      },
      {
        "text": "Ferritin complexed with stored marrow iron",
        "explanation": "Incorrect. Ferritin is the intracellular storage protein for iron in bone marrow macrophages and the liver, and serum ferritin reflects those stores. Storage iron is a reservoir rather than a structural component of heme. This would be the correct answer if the question asked which protein stores iron inside cells instead of what heme is made of."
      },
      {
        "text": "Two alpha chains and two delta globin chains",
        "explanation": "Incorrect. Two alpha chains paired with two delta chains is hemoglobin A2, the minor adult hemoglobin that rises in beta thalassemia minor. That is a globin arrangement rather than the heme moiety. This would be the correct answer if the question asked about the chain composition of hemoglobin A2 instead of the composition of heme."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Hemoglobin equals heme plus globin, and heme equals iron plus protoporphyrin, which is why iron problems, protoporphyrin problems, and globin problems all produce microcytic anemia.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 13,
    "pdfQuote": "Heme (Iron + Protoporphyrin)"
  },
  {
    "id": 8,
    "category": "Microcytic Anemia: Mechanism of Microcytosis",
    "questionText": "Red blood cells are small in the microcytic anemias because of which of the following?",
    "options": [
      {
        "text": "Premature release of immature reticulocytes from marrow",
        "explanation": "Incorrect. Early release of immature cells describes reticulocytosis and, in severe cases such as beta thalassemia major, the appearance of nucleated red cells on the smear. Immature cells are actually larger, not smaller. This would be the correct answer if the question asked why nucleated red cells appear on the smear in severe thalassemia instead of why microcytosis occurs."
      },
      {
        "text": "Increased splenic trimming of red cell membrane surface",
        "explanation": "Incorrect. Splenic processing of red cell membranes belongs to the extravascular hemolysis and membrane defect discussions rather than to the mechanism of microcytosis taught here. The spleen removes cells rather than shrinking them to preserve hemoglobin. This would be the correct answer if the question asked how the spleen handles damaged or abnormal red cells instead of why microcytic cells are small."
      },
      {
        "text": "Loss of cytoplasm during extravascular hemolysis events",
        "explanation": "Incorrect. Extravascular hemolysis is the splenic removal of damaged cells, seen in beta thalassemia major when unpaired alpha chains precipitate, and it destroys cells rather than shrinking them. Hemolysis presents with splenomegaly and jaundice. This would be the correct answer if the question asked what causes jaundice and splenomegaly in increased red cell destruction instead of why cells are microcytic."
      },
      {
        "text": "Decreased cytoplasmic water content within each red cell",
        "explanation": "Incorrect. Cellular dehydration is not the mechanism the lecture gives for microcytosis, which is instead framed entirely around hemoglobin content and cell division. The erythroblast controls size by dividing, not by shedding water. This would be the correct answer if the question asked about a dehydration related red cell disorder instead of the mechanism of microcytosis."
      },
      {
        "text": "Extra divisions to preserve hemoglobin concentration",
        "explanation": "Correct. Erythroblasts maintain a fixed ratio of hemoglobin to cytoplasm, so when hemoglobin production falls the cell must undergo additional divisions to keep that concentration constant, producing smaller cells. All five microcytic anemias share a defect somewhere in hemoglobin production, whether in iron, protoporphyrin, or globin. The same hemoglobin deficit also causes hypochromia and an enlarged central area of pallor on the smear."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Every microcytic anemia is a hemoglobin production problem, and the cells are small because erythroblasts divide extra times to hold hemoglobin concentration constant.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 20,
    "pdfQuote": "Since there is less hemoglobin, the RBC must undergo"
  },
  {
    "id": 9,
    "category": "Iron Studies: Total Iron Binding Capacity",
    "questionText": "Total iron binding capacity is a measure of which of the following?",
    "options": [
      {
        "text": "The amount of transferrin circulating in the blood",
        "explanation": "Correct. Total iron binding capacity is simply the amount of transferrin circulating in the plasma, and the lecture instructs students to read TIBC as transferrin. Transferrin is made in the liver, and when marrow iron stores fall the liver is signaled to make more of it, which is why TIBC is high in iron deficiency. Ferritin and TIBC therefore generally move in opposite directions."
      },
      {
        "text": "The iron stored in marrow macrophages and liver",
        "explanation": "Incorrect. Iron stored in bone marrow macrophages and the liver is reflected by serum ferritin, the storage protein for iron. Ferritin and TIBC are related but move in opposite directions. This would be the correct answer if the question asked what serum ferritin reflects instead of what TIBC measures."
      },
      {
        "text": "The percentage of transferrin that is bound to iron",
        "explanation": "Incorrect. The fraction of transferrin actually carrying iron is the percent saturation, normally about 33 percent, and it is calculated as serum iron divided by TIBC. It is derived from TIBC rather than being TIBC itself. This would be the correct answer if the question asked what percent saturation represents instead of what TIBC measures."
      },
      {
        "text": "The total amount of iron present in the serum",
        "explanation": "Incorrect. The quantity of iron present in the blood itself is the serum iron, a direct measurement rather than a binding capacity. Serum iron is the numerator in the percent saturation calculation while TIBC is the denominator. This would be the correct answer if the question asked what serum iron measures instead of what TIBC measures."
      },
      {
        "text": "The quantity of hepcidin made by the liver cells",
        "explanation": "Incorrect. Hepcidin is an acute phase reactant made by the liver that regulates iron entry by decreasing ferroportin, and it is not a component of the standard iron study panel. It acts on absorption rather than reporting binding capacity. This would be the correct answer if the question asked which liver derived acute phase reactant regulates ferroportin instead of what TIBC measures."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: TIBC is transferrin, so low iron stores drive the liver to make more transferrin and raise TIBC, keeping ferritin and TIBC moving in opposite directions.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 22,
    "pdfQuote": "Total Iron Binding Capacity: the amount of transferrin circulating in the blood"
  },
  {
    "id": 10,
    "category": "Thalassemia: Beta Thalassemia Major",
    "questionText": "In beta thalassemia major, expansion of hematopoiesis into the skull and facial bones produces which of the following?",
    "options": [
      {
        "text": "Target cells on the peripheral blood smear",
        "explanation": "Incorrect. Target cells are a peripheral smear finding in the thalassemias, reflecting excess membrane relative to the reduced hemoglobin content of the cell. They are a red cell morphology change rather than a skeletal consequence of marrow expansion. This would be the correct answer if the question asked which red cell shape abnormality appears on the smear in thalassemia instead of what marrow expansion into bone produces."
      },
      {
        "text": "Basophilic stippling of red cell cytoplasm",
        "explanation": "Incorrect. Basophilic stippling is aggregated residual ribosomal material and belongs to lead poisoning, where lead separately inhibits ribosomal RNA degradation. It is a cytoplasmic finding with no relationship to bone remodeling. This would be the correct answer if the question asked what the peripheral smear shows in lead poisoning instead of what marrow expansion into the skull produces."
      },
      {
        "text": "Crew cut skull and chipmunk facies",
        "explanation": "Correct. In beta thalassemia major, unpaired alpha chains precipitate and cause ineffective erythropoiesis and extravascular hemolysis, driving massive erythroid hyperplasia that expands the marrow into the skull and facial bones to give a crew cut skull and chipmunk facies. Extramedullary hematopoiesis also produces hepatosplenomegaly, and parvovirus infection can precipitate an aplastic crisis. Treatment is chronic transfusion with iron chelation, plus splenectomy."
      },
      {
        "text": "Ringed sideroblasts in the marrow aspirate",
        "explanation": "Incorrect. Ringed sideroblasts are perinuclear mitochondrial iron deposits shown on a bone marrow aspirate with Prussian blue, and they define sideroblastic anemia rather than thalassemia. They are a staining finding within the marrow, not a change in the shape of bone. This would be the correct answer if the question asked what the marrow aspirate shows in sideroblastic anemia instead of what erythroid hyperplasia does to the skull."
      },
      {
        "text": "Koilonychia of the fingernails and toenails",
        "explanation": "Incorrect. Koilonychia, the thin spoon shaped nails, is one of the distinctive clinical features of iron deficiency anemia alongside pica, angular cheilitis, and alopecia. It reflects a tissue iron deficit rather than marrow expansion. This would be the correct answer if the question asked which nail change accompanies iron deficiency anemia instead of what marrow expansion into bone produces."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: In beta thalassemia major, precipitating unpaired alpha chains drive ineffective erythropoiesis and erythroid hyperplasia, so the marrow expands into the skull and face for a crew cut skull and chipmunk facies, with hepatosplenomegaly from extramedullary hematopoiesis.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 47,
    "pdfQuote": "Expansion of hematopoiesis into the skull and"
  },
  {
    "id": 11,
    "category": "Iron Metabolism: Hepcidin",
    "questionText": "Hepcidin regulates body iron by which of the following actions?",
    "options": [
      {
        "text": "Decreasing ferroportin on enterocyte surfaces",
        "explanation": "Correct. Hepcidin is an acute phase reactant that regulates iron by decreasing ferroportin, and since ferroportin is the only exit for iron from the duodenal enterocyte, less ferroportin means less iron allowed into the body. This same mechanism drives anemia of chronic disease, where interleukin 6 raises hepcidin during inflammation. Hepcidin also limits iron transfer from macrophages to erythroid precursors and suppresses erythropoietin production."
      },
      {
        "text": "Increasing transferrin synthesis by hepatocytes",
        "explanation": "Incorrect. Increased hepatic transferrin synthesis is the liver response to low marrow iron stores, and it is what raises TIBC in iron deficiency anemia. That response is driven by depleted stores rather than by hepcidin. This would be the correct answer if the question asked why TIBC rises in iron deficiency instead of what hepcidin does."
      },
      {
        "text": "Increasing DMT1 expression on enterocyte apices",
        "explanation": "Incorrect. DMT1 is the apical importer that brings reduced non heme iron into the enterocyte, and hepcidin works on the export side of the cell rather than upregulating uptake. Hepcidin restricts iron entry into the body overall. This would be the correct answer if the question asked which transporter carries reduced non heme iron into the enterocyte instead of what hepcidin does."
      },
      {
        "text": "Increasing erythropoietin release by the kidneys",
        "explanation": "Incorrect. Hepcidin has the opposite effect described in the lecture, since it suppresses erythropoietin production as part of the anemia of chronic disease mechanism. Erythropoietin release is driven by renal hypoxia sensing. This would be the correct answer if the question asked what stimulates erythropoietin release instead of what hepcidin does."
      },
      {
        "text": "Increasing ferritin breakdown inside macrophages",
        "explanation": "Incorrect. Hepcidin sequesters iron within storage cells and limits its transfer out of macrophages, which raises rather than depletes ferritin bound stores. That sequestration is why ferritin is high in anemia of chronic disease. This would be the correct answer if the question asked why ferritin rises during chronic inflammation instead of what hepcidin does mechanistically."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Hepcidin is the acute phase reactant that shuts down ferroportin, locking iron away from the plasma and from bacteria, which is the core mechanism of anemia of chronic disease.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 26,
    "pdfQuote": "Hepcidin is an acute phase reactant that regulates this process by"
  },
  {
    "id": 12,
    "category": "Iron Deficiency Anemia: Causes by Age",
    "questionText": "The most common cause of iron deficiency anemia in the elderly in the Western world is which of the following?",
    "options": [
      {
        "text": "Hookworm infestation of the small intestine",
        "explanation": "Incorrect. Hookworm is the leading cause of iron deficiency in the elderly of the developing world, where parasitic blood loss predominates. The lecture explicitly splits the elderly category by geography. This would be the correct answer if the question asked about elderly patients in the developing world instead of the Western world."
      },
      {
        "text": "Menorrhagia with heavy menstrual blood loss",
        "explanation": "Incorrect. Menorrhagia is the classic cause in adult females roughly 20 to 50 years old, along with pregnancy, which raises overall iron demand. It does not apply to the elderly age group. This would be the correct answer if the question asked about iron deficiency in premenopausal adult women instead of the elderly."
      },
      {
        "text": "Peptic ulcer disease of the upper GI tract",
        "explanation": "Incorrect. Peptic ulcer disease is the most common cause listed for adult males in the 20 to 50 year age band, representing upper gastrointestinal blood loss. It is not the age specific answer for elderly Western patients. This would be the correct answer if the question asked about iron deficiency in adult males aged 20 to 50 instead of the elderly."
      },
      {
        "text": "Exclusive breastfeeding with low iron milk",
        "explanation": "Incorrect. Human breast milk is naturally low in iron, which makes breastfeeding the most common cause of iron deficiency in infants. This is at the opposite end of the age spectrum from the question. This would be the correct answer if the question asked about the most common cause of iron deficiency in infants instead of the elderly."
      },
      {
        "text": "Colon polyps or underlying colon carcinoma",
        "explanation": "Correct. In the Western world, colon polyps and colon cancer are the leading causes of iron deficiency anemia in the elderly, reflecting occult gastrointestinal blood loss. The lecture states the clinical pearl that any elderly individual with iron deficiency anemia should be considered to have colon cancer until proven otherwise, usually by colonoscopy. Iron deficiency in general reflects iron loss exceeding iron intake, and iron excretion is not itself regulated."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: An elderly patient in the Western world with iron deficiency anemia has colon cancer until proven otherwise, while the same age group in the developing world points toward hookworm.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 27,
    "pdfQuote": "Western world: colon polyps/cancer"
  },
  {
    "id": 13,
    "category": "Iron Deficiency Anemia: Stages",
    "questionText": "Which of the following is the first laboratory change to occur as iron deficiency develops?",
    "options": [
      {
        "text": "A fall in serum iron and in percent saturation",
        "explanation": "Incorrect. Falling serum iron and percent saturation define the second stage, once the cells have drawn down plasma iron after storage iron is already gone. TIBC continues climbing at that point. This would be the correct answer if the question asked about the second stage of iron deficiency instead of the first."
      },
      {
        "text": "A fall in mean cell volume below 80 femtoliters",
        "explanation": "Incorrect. A mean cell volume under 80 femtoliters marks the fourth and latest stage, the microcytic hypochromic phase, when the marrow makes smaller and fewer cells. Microcytosis is a late consequence, not an early signal. This would be the correct answer if the question asked which change marks the late stage of iron deficiency instead of the earliest one."
      },
      {
        "text": "A rise in the red cell distribution width value",
        "explanation": "Incorrect. The distribution width rises in the late microcytic stage, when newly made small cells mix with the normocytic cells produced earlier that still have part of their 120 day lifespan remaining. It is normal in the earlier normocytic stage. This would be the correct answer if the question asked why RDW increases as iron deficiency progresses instead of which change comes first."
      },
      {
        "text": "Depletion of stored iron with a falling ferritin",
        "explanation": "Correct. Stage one of iron deficiency is depletion of storage iron in the cells, which lowers ferritin and simultaneously raises TIBC as the liver is signaled to produce more transferrin. Only afterward do serum iron and percent saturation fall, then a normocytic anemia appears, and finally the anemia becomes microcytic and hypochromic. Ferritin is therefore the earliest and most sensitive of the iron study values."
      },
      {
        "text": "A fall in hemoglobin with normally sized red cells",
        "explanation": "Incorrect. A drop in hemoglobin, hematocrit, and red cell count with a normal mean cell volume and a normal distribution width describes the third stage, the early normocytic anemia. Anemia itself appears only after the iron studies have already shifted. This would be the correct answer if the question asked about the third stage of iron deficiency instead of the first."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Iron deficiency moves in order from depleted stores with low ferritin and high TIBC, to low serum iron and saturation, to normocytic anemia, and finally to microcytic hypochromic anemia with a high RDW.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 28,
    "pdfQuote": "1. Storage of iron is depleted in the cells"
  },
  {
    "id": 14,
    "category": "Iron Deficiency Anemia: Plummer Vinson Syndrome",
    "questionText": "Plummer Vinson syndrome is defined by which of the following triads?",
    "options": [
      {
        "text": "Anemia, pica, and koilonychia of the fingernails",
        "explanation": "Incorrect. Pica and koilonychia are indeed features of iron deficiency, with pica being the desire to eat non nutritive substances such as ice, dirt, or clay, and koilonychia being thin spoon shaped nails. They are separate clinical findings rather than the named triad. This would be the correct answer if the question asked to list unique clinical features of iron deficiency instead of the components of Plummer Vinson syndrome."
      },
      {
        "text": "Anemia, esophageal webs, and atrophic glossitis",
        "explanation": "Correct. Plummer Vinson syndrome is the triad of iron deficiency anemia, esophageal webs, and atrophic glossitis, which the lecture also phrases clinically as anemia, dysphagia, and a beefy red tongue. It sits among the distinctive iron deficiency findings alongside pica, koilonychia, alopecia, and angular cheilitis. The nonspecific anemia symptoms of fatigue, malaise, and dyspnea accompany it."
      },
      {
        "text": "Anemia, angular cheilitis, and scalp alopecia",
        "explanation": "Incorrect. Angular cheilitis, which is lesions at the corners of the mouth, and alopecia are both listed as clinical features of iron deficiency, and the lecture notes that angular cheilitis is not specific to iron deficiency. They are not grouped into this eponymous syndrome. This would be the correct answer if the question asked which mucocutaneous findings accompany iron deficiency instead of what defines Plummer Vinson syndrome."
      },
      {
        "text": "Anemia, basophilic stippling, and abdominal colic",
        "explanation": "Incorrect. Basophilic stippling and abdominal colic belong to lead poisoning, captured in the LLEEAAD mnemonic along with lead lines, encephalopathy, and wrist and foot drop. That is a different microcytic anemia entirely. This would be the correct answer if the question asked about the clinical features of lead poisoning instead of Plummer Vinson syndrome."
      },
      {
        "text": "Anemia, target cells, and hepatosplenomegaly",
        "explanation": "Incorrect. Target cells on the peripheral smear and hepatosplenomegaly from extramedullary hematopoiesis are features of thalassemia, particularly beta thalassemia major. They are unrelated to iron deficiency. This would be the correct answer if the question asked which findings characterize severe thalassemia instead of Plummer Vinson syndrome."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Plummer Vinson syndrome is iron deficiency anemia plus esophageal webs plus atrophic glossitis, or clinically anemia, dysphagia, and a beefy red tongue.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 30,
    "pdfQuote": "Triad of Symptoms: iron deficiency anemia, esophageal webs,"
  },
  {
    "id": 15,
    "category": "Anemia of Chronic Disease: Iron Study Pattern",
    "questionText": "Which of the following iron study patterns is characteristic of anemia of chronic disease?",
    "options": [
      {
        "text": "Low ferritin, high TIBC, low serum iron",
        "explanation": "Incorrect. Low ferritin with a high TIBC and low serum iron is the classic pattern of iron deficiency anemia, where true iron stores are exhausted and the liver makes extra transferrin. It is the mirror image of anemia of chronic disease. This would be the correct answer if the question asked about the iron studies in iron deficiency anemia instead of anemia of chronic disease."
      },
      {
        "text": "Low ferritin, low TIBC, high serum iron",
        "explanation": "Incorrect. This combination is internally inconsistent with the lecture rule that ferritin and TIBC generally move in opposite directions, and low stores with high circulating iron does not match any of the taught anemias. It is a distractor pattern. This would be the correct answer if the question asked which pattern violates the expected reciprocal relationship between ferritin and TIBC."
      },
      {
        "text": "High ferritin, low TIBC, low serum iron",
        "explanation": "Correct. In anemia of chronic disease, inflammatory mediators such as interleukin 6 raise hepcidin, which sequesters iron in marrow macrophages, so ferritin is high while serum iron and percent saturation are low. Because stores are full, the liver makes less transferrin and TIBC falls. The evolutionary logic is that bacteria need iron, so the host hides it, and treatment is directed at the underlying disease or inflammation."
      },
      {
        "text": "High ferritin, high TIBC, high serum iron",
        "explanation": "Incorrect. Ferritin and TIBC rising together contradicts the reciprocal relationship the lecture emphasizes, since abundant stores signal the liver to make less transferrin. No microcytic anemia in this lecture produces that combination. This would be the correct answer if the question asked which pattern is inconsistent with normal transferrin regulation."
      },
      {
        "text": "High ferritin, low TIBC, high serum iron",
        "explanation": "Incorrect. High ferritin and high serum iron with a low TIBC describes the iron overload state of sideroblastic anemia and lead poisoning, where the defect is in protoporphyrin synthesis rather than in iron availability. Percent saturation is also elevated there. This would be the correct answer if the question asked about the iron studies in sideroblastic anemia instead of anemia of chronic disease."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Ferritin is LOW in iron deficiency and HIGH in anemia of chronic disease, while TIBC is HIGH in iron deficiency and LOW in anemia of chronic disease.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 32,
    "pdfQuote": "liver will produce less transferrin because our stores are high"
  },
  {
    "id": 16,
    "category": "Heme Synthesis: Enzyme Cofactors",
    "questionText": "Aminolevulinic acid synthetase requires which of the following vitamins as its cofactor?",
    "options": [
      {
        "text": "Vitamin B9, called folate",
        "explanation": "Incorrect. Folate is absorbed in the small bowel and is a cause of macrocytic anemia, which the lecture assigns to part two of the series. It plays no role in the first step of heme synthesis. This would be the correct answer if the question asked which vitamin deficiency causes a megaloblastic macrocytic anemia instead of which cofactor aminolevulinic acid synthetase uses."
      },
      {
        "text": "Vitamin B12, cobalamin",
        "explanation": "Incorrect. Vitamin B12 is absorbed in the terminal ileum, per the Iron Fist Bro mnemonic, and its deficiency also produces macrocytic anemia rather than a microcytic one. It is not a cofactor in the heme pathway. This would be the correct answer if the question asked which vitamin is absorbed in the terminal ileum instead of which one aminolevulinic acid synthetase requires."
      },
      {
        "text": "Vitamin C, ascorbic acid",
        "explanation": "Incorrect. The lecture assigns reduction of dietary non heme iron to ferrireductase, also called cytochrome B, and vitamin C appears nowhere in the heme synthesis pathway presented. This enzyme is linked specifically to a B vitamin. This would be the correct answer if the question asked which enzyme reduces dietary non heme iron instead of which cofactor this enzyme requires."
      },
      {
        "text": "Vitamin B3, called niacin",
        "explanation": "Incorrect. Niacin is not mentioned anywhere in the heme synthesis pathway presented, which names only aminolevulinic acid synthetase with vitamin B6, aminolevulinic acid dehydratase, and ferrochelatase. It serves other metabolic roles. This would be the correct answer if the question asked about a vitamin outside the heme synthesis pathway."
      },
      {
        "text": "Vitamin B6, pyridoxine",
        "explanation": "Correct. Aminolevulinic acid synthetase converts succinyl CoA plus glycine to aminolevulinic acid using vitamin B6, and it also shifts the pathway from the mitochondrion into the cytoplasm. A B6 deficiency therefore causes sideroblastic anemia, classically as a side effect of the tuberculosis drug isoniazid. A congenital X linked defect in this same enzyme is the most common inherited cause of sideroblastic anemia."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: ALA synthetase needs vitamin B6, so isoniazid induced B6 deficiency in a tuberculosis patient is a classic cause of sideroblastic anemia, and an X linked ALAS defect is the most common congenital cause.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 35,
    "pdfQuote": "aminolevulinic acid (ALA) with the help of Vitamin B6"
  },
  {
    "id": 17,
    "category": "Lead Poisoning: Enzyme Inhibition",
    "questionText": "Lead produces a sideroblastic anemia by inhibiting which pair of enzymes?",
    "options": [
      {
        "text": "ALA synthetase and ferrochelatase together",
        "explanation": "Incorrect. ALA synthetase is the vitamin B6 dependent first step and is the enzyme affected in congenital X linked sideroblastic anemia and in B6 deficiency, not by lead. Lead strikes a different pair. This would be the correct answer if the question asked which enzyme is defective in congenital sideroblastic anemia instead of which enzymes lead inhibits."
      },
      {
        "text": "ALA synthetase and ALA dehydratase together",
        "explanation": "Incorrect. This pairing includes the first step enzyme, which lead does not inhibit, even though ALA dehydratase is correctly included. Lead targets the second step and the final step rather than the first two. This would be the correct answer if the question asked which enzymes carry out the first two reactions of heme synthesis instead of which enzymes lead inhibits."
      },
      {
        "text": "ALA dehydratase and ferrochelatase together",
        "explanation": "Correct. Lead inhibits aminolevulinic acid dehydratase, the second step, and ferrochelatase, the last step, which decreases heme synthesis and raises red blood cell protoporphyrin because protoporphyrin can be made but cannot be joined to iron. Lead separately inhibits ribosomal RNA degradation, producing basophilic stippling on the smear. The LLEEAAD mnemonic covers lead lines on gingivae and long bone metaphyses, encephalopathy with basophilic stippling, abdominal colic with sideroblastic anemia, and wrist and foot drop."
      },
      {
        "text": "Porphobilinogen deaminase and ferrochelatase",
        "explanation": "Incorrect. Porphobilinogen deaminase is not one of the three enzymes highlighted in this lecture, which names ALA synthetase, ALA dehydratase, and ferrochelatase. Only ferrochelatase in this pairing is a genuine lead target. This would be the correct answer if the question asked about an enzyme step outside the three emphasized in this heme synthesis scheme."
      },
      {
        "text": "Porphobilinogen deaminase and ALA synthetase",
        "explanation": "Incorrect. Neither enzyme in this pair is inhibited by lead, since ALA synthetase is the B6 dependent step tied to congenital and isoniazid related sideroblastic anemia. Porphobilinogen is the product of the second reaction rather than a named lead target. This would be the correct answer if the question asked which pair contains the vitamin B6 dependent enzyme of heme synthesis rather than which enzymes lead inhibits."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Lead blocks ALA dehydratase and ferrochelatase, so heme falls while red cell protoporphyrin rises, and blocked rRNA degradation gives basophilic stippling on the peripheral smear.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 37,
    "pdfQuote": "Lead inhibits ferrochetalase (last step) and ALAD (second step)"
  },
  {
    "id": 18,
    "category": "Sideroblastic Anemia: Diagnostic Findings",
    "questionText": "Ringed sideroblasts are demonstrated by which of the following?",
    "options": [
      {
        "text": "Bone marrow aspirate with a Prussian blue stain",
        "explanation": "Correct. Ringed sideroblasts require a bone marrow aspirate stained with Prussian blue, because they represent excess iron accumulating in perinuclear mitochondria. The lecture stresses that they are NOT seen on a peripheral blood smear, a point tested directly in its own practice question. Sideroblastic anemia is an iron overload state, with high ferritin, high serum iron, high percent saturation, and low TIBC, since the defect lies in protoporphyrin synthesis."
      },
      {
        "text": "Peripheral blood smear with a Prussian blue stain",
        "explanation": "Incorrect. This combines the correct stain with the wrong specimen, and the lecture explicitly warns that ringed sideroblasts appear on marrow aspirate rather than on a peripheral smear. That distinction was the trap in the alcohol related practice question. This would be the correct answer if the question asked which stain demonstrates iron, since Prussian blue is that stain, but the lecture is explicit that ringed sideroblasts are seen on marrow aspirate and NOT on a peripheral smear."
      },
      {
        "text": "Peripheral blood smear with a Wright Giemsa stain",
        "explanation": "Incorrect. A routine Wright Giemsa peripheral smear in sideroblastic anemia and lead poisoning shows basophilic stippling from aggregates of residual ribosomes, not ringed sideroblasts. Both findings occur in the same disease but on different tests. This would be the correct answer if the question asked what is seen on the peripheral smear in sideroblastic anemia instead of how ringed sideroblasts are demonstrated."
      },
      {
        "text": "Bone marrow aspirate with a Wright Giemsa stain",
        "explanation": "Incorrect. This uses the right specimen but the wrong stain, since the perinuclear mitochondrial iron ring requires Prussian blue to be visualized. Wright Giemsa is the routine stain for red cell shape and color. This would be the correct answer if the question asked which stain is used for a routine peripheral blood smear instead of how ringed sideroblasts are shown."
      },
      {
        "text": "Hemoglobin electrophoresis of a whole blood sample",
        "explanation": "Incorrect. Hemoglobin electrophoresis separates hemoglobin types such as HbA, HbA2, HbF, HbH, and Hb Barts, and it is the confirmatory test for thalassemia rather than for sideroblastic anemia. Electrophoresis says nothing about mitochondrial iron. This would be the correct answer if the question asked which test confirms a thalassemia instead of how ringed sideroblasts are demonstrated."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Ringed sideroblasts need a bone marrow aspirate with Prussian blue, while basophilic stippling is what shows up on the routine peripheral smear.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 39,
    "pdfQuote": "Bone Marrow Aspirate: ringed sideroblasts appear with Prussian"
  },
  {
    "id": 19,
    "category": "Thalassemia: Alpha Thalassemia Genetics",
    "questionText": "Which of the following describes the genetic basis of alpha thalassemia?",
    "options": [
      {
        "text": "Point mutations in two genes on chromosome 11",
        "explanation": "Incorrect. Two genes on chromosome 11 altered by point mutations in promoter or splice sites is the description of beta thalassemia, which yields absent beta zero or diminished beta plus chain production. Alpha thalassemia uses a different chromosome and a different mutation type. This would be the correct answer if the question asked about the genetic basis of beta thalassemia instead of alpha thalassemia."
      },
      {
        "text": "Splice site mutations in two genes on chromosome 16",
        "explanation": "Incorrect. This mixes the alpha chromosome with the beta gene number and the beta mutation mechanism, since splice site mutations belong to beta thalassemia while chromosome 16 belongs to alpha. Alpha thalassemia is a deletion disorder involving four genes. This would be the correct answer if the question asked which mutation type underlies beta thalassemia, ignoring the chromosome."
      },
      {
        "text": "Promoter mutations in four genes on chromosome 11",
        "explanation": "Incorrect. Promoter mutations are the beta thalassemia mechanism and chromosome 11 carries the beta genes, but there are two of those, not four. The lecture practice question specifically flags promoter errors as belonging to beta rather than alpha. This would be the correct answer if the question asked which promoter based defect affects the beta globin chain instead of describing alpha thalassemia."
      },
      {
        "text": "Deletions of one to four genes on chromosome 16",
        "explanation": "Correct. Alpha thalassemia results from gene deletions among the four alpha genes on chromosome 16, and severity increases with the number of deletions. One deletion is the silent carrier state, two produce a mild microcytic anemia, three cause hemoglobin H disease with excess beta tetramers, and four cause hemoglobin Barts with gamma tetramers and hydrops fetalis, which is incompatible with life. Prevalence is highest in Asian and African populations, with cis deletions more common in Asian and trans deletions more common in African populations."
      },
      {
        "text": "Frameshift mutations in four genes on chromosome 9",
        "explanation": "Incorrect. Chromosome 9 is not one of the globin loci taught here, and frameshift mutations are not the mechanism given for either thalassemia. The lecture pairs alpha with chromosome 16 deletions and beta with chromosome 11 mutations. This would be the correct answer if the question asked about a globin locus outside the two described in this lecture."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Alpha thalassemia is gene DELETION of up to four alpha genes on chromosome 16, while beta thalassemia is point MUTATION of two beta genes on chromosome 11.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 43,
    "pdfQuote": "As the number of gene deletions increase, the severity of the"
  },
  {
    "id": 20,
    "category": "Thalassemia: Beta Thalassemia Minor",
    "questionText": "Which hemoglobin is characteristically increased on electrophoresis in beta thalassemia minor?",
    "options": [
      {
        "text": "HbA, made of two alpha and two beta chains",
        "explanation": "Incorrect. HbA is the dominant normal adult hemoglobin at 95 to 98 percent, and because it depends on beta chains it is mildly DECREASED in beta thalassemia minor and absent in beta thalassemia major. It moves in the opposite direction from the answer. This would be the correct answer if the question asked which hemoglobin predominates in a normal adult instead of which one rises in beta thalassemia minor."
      },
      {
        "text": "HbA2, made of two alpha and two delta chains",
        "explanation": "Correct. In beta thalassemia minor the mutation affects one beta gene, so reduced beta globin drives compensatory delta globin production and HbA2 rises, roughly to 5 percent from a normal near 2.5 percent. HbF also rises mildly to around 2 percent, and HbA falls slightly. These patients are usually asymptomatic with an increased red blood cell count despite the microcytosis."
      },
      {
        "text": "HbH, a tetramer of four beta globin chains",
        "explanation": "Incorrect. HbH is a tetramer of four beta chains that forms when three alpha genes are deleted, so it is a finding of alpha thalassemia rather than beta thalassemia. Excess beta chains require a shortage of alpha chains to accumulate. This would be the correct answer if the question asked which hemoglobin appears with three alpha gene deletions instead of what rises in beta thalassemia minor."
      },
      {
        "text": "Hb Barts, a tetramer of four gamma chains",
        "explanation": "Incorrect. Hemoglobin Barts consists of gamma tetramers formed in utero when all four alpha genes are deleted, producing hydrops fetalis that is incompatible with life. It is the most severe alpha thalassemia, not a beta trait finding. This would be the correct answer if the question asked which hemoglobin appears when no alpha globin chains are produced."
      },
      {
        "text": "HbS, which contains a mutated beta globin chain",
        "explanation": "Incorrect. HbS is the abnormal hemoglobin of sickle cell disease and was used as a distractor in the lecture practice question about the Italian boy with a low MCV. It is not a compensatory hemoglobin in thalassemia. This would be the correct answer if the question asked which hemoglobin is found in sickle cell disease instead of which one rises in beta thalassemia minor."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Reduced beta globin shunts production toward delta and gamma chains, so beta thalassemia minor shows a raised HbA2 with a mild HbF rise, and beta thalassemia major shows absent HbA with markedly raised HbF.",
    "lectureSource": "L151: Laboratory Medicine and Anemias Part 1 - Intro and Microcytic Anemia",
    "pdfLecture": "L151",
    "pdfPage": 46,
    "pdfQuote": "Electrophoresis: mild decrease in HbA, increase"
  }
];

window.Test_Review_L151 = Test_Review_L151;
