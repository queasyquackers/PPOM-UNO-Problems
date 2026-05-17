// Thinking Process:
// 1. High-Yield Concept: Differentiating Megaloblastic Anemia causes (B12 vs Folate) using metabolic markers (MMA) and clinical findings (Neuro).
// 2. The "Trap": Misidentifying folate deficiency in a patient with neuro symptoms or neglecting the "folate trap" mechanism.
// 3. Key Distractor: Folate deficiency (often presents with macrocytosis but normal MMA).
// 4. Vignette Strategy: Use a strict vegan or post-gastric bypass patient to point toward B12, and provide specific sensory deficits (vibration/proprioception) to confirm.
//
// PDF Mapping Check: Found
// PDF Filename: Lecture # 152. G. Saggio, D.O. (PPT).pdf
// Mapping Key: 16-Hematology: Laboratory Medicine and Anemias Part 2 (L152)
// Status: Verified

const Test_L152 = [
  {
    "id": 1,
    "category": "Hematology: Megaloblastic Anemia",
    "questionText": "Megaloblastic anemias are fundamentally characterized by impaired DNA synthesis, which results in a delay in nuclear maturation relative to cytoplasmic development. Which of the following peripheral blood smear findings is a hallmark of this class of anemias?",
    "options": [
      {
        "text": "Basophilic stippling",
        "explanation": "Incorrect. Basophilic stippling represents ribosomal precipitates and is typically seen in lead poisoning or sideroblastic anemia, not megaloblastic processes. This would be the correct answer if the question asked about lead-induced inhibition of rRNA degradation."
      },
      {
        "text": "Hypersegmented neutrophils",
        "explanation": "Correct. Hypersegmented neutrophils (defined as having 6 or more lobes) are a pathognomonic finding in megaloblastic anemias. They result from the same impaired DNA synthesis and delayed nuclear maturation that causes the macrocytosis seen in the red cell lineage."
      },
      {
        "text": "Howell-Jolly bodies",
        "explanation": "Incorrect. Howell-Jolly bodies are nuclear remnants that persist due to functional asplenia or splenectomy. This would be the correct answer if the patient had sickle cell disease with repeated splenic infarctions."
      },
      {
        "text": "Schistocytes",
        "explanation": "Incorrect. Schistocytes are fragmented red blood cells seen in micro- or macroangiopathic hemolytic anemias (mechanical trauma). This would be the correct answer if the patient had a mechanical heart valve or DIC."
      },
      {
        "text": "Target cells",
        "explanation": "Incorrect. Target cells occur when there is an increased surface area-to-volume ratio, common in thalassemias or liver disease. This would be the correct answer if the question focused on hemoglobin C disease or asplenia."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Hypersegmented neutrophils (>5 lobes) are a hallmark of megaloblastic anemia and indicate impaired DNA synthesis.",
    "pdfPage": 6,
    "pdfQuote": "impaired DNA synthesis and hypersegmented neutrophils"
  },
  {
    "id": 2,
    "category": "Hematology: B12 vs Folate",
    "questionText": "A patient is found to have a macrocytic anemia with an MCV of 115 fL and hypersegmented neutrophils on peripheral smear. Laboratory studies reveal an elevated serum homocysteine level, while the methylmalonic acid (MMA) level is normal. Which of the following is the most likely deficiency?",
    "options": [
      {
        "text": "Vitamin B12 (Cobalamin)",
        "explanation": "Incorrect. While B12 deficiency causes macrocytic anemia and elevated homocysteine, it is characteristically associated with an elevated methylmalonic acid (MMA) level. This would be the correct answer if the MMA was significantly increased."
      },
      {
        "text": "Vitamin B9 (Folate)",
        "explanation": "Correct. Folate deficiency causes megaloblastic anemia and elevated homocysteine because folate is required for the conversion of homocysteine to methionine. However, unlike B12, folate is not involved in the conversion of methylmalonyl-CoA to succinyl-CoA, so MMA levels remain normal."
      },
      {
        "text": "Iron",
        "explanation": "Incorrect. Iron deficiency causes a microcytic, hypochromic anemia (MCV < 80), not a macrocytic one. This would be the correct answer if the patient had a low ferritin and high TIBC."
      },
      {
        "text": "Vitamin B6 (Pyridoxine)",
        "explanation": "Incorrect. Vitamin B6 deficiency can lead to sideroblastic anemia (microcytic), not megaloblastic anemia. This would be the correct answer if the question described ringed sideroblasts in the marrow."
      },
      {
        "text": "Intrinsic Factor",
        "explanation": "Incorrect. A deficiency in intrinsic factor (Pernicious Anemia) leads to Vitamin B12 deficiency, which would result in an elevated MMA. This would be the correct answer if both homocysteine and MMA were elevated."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Normal methylmalonic acid (MMA) with elevated homocysteine distinguishes folate deficiency from Vitamin B12 deficiency.",
    "pdfPage": 9,
    "pdfQuote": "B9 (Folate) ... Methylmalonic-CoA - [Normal]"
  },
  {
    "id": 3,
    "category": "Hematology: Vitamin B12 Absorption",
    "questionText": "The absorption of Vitamin B12 is a complex multi-step process involving several organs. In which specific anatomical location is the B12-Intrinsic Factor complex primarily absorbed into the bloodstream?",
    "options": [
      {
        "text": "Duodenum",
        "explanation": "Incorrect. The duodenum is where pancreatic proteases cleave B12 from R-binder, but it is not the site of absorption. This would be the correct answer if the question asked where iron is primarily absorbed."
      },
      {
        "text": "Jejunum",
        "explanation": "Incorrect. Folate is primarily absorbed in the jejunum, but B12 requires a more distal site. This would be the correct answer if the question asked about the absorption site of Vitamin B9."
      },
      {
        "text": "Terminal ileum",
        "explanation": "Correct. The B12-Intrinsic Factor complex travels through the small intestine to the terminal ileum, where specialized receptors (cubulin) mediate its uptake into the enterocytes and subsequently the blood."
      },
      {
        "text": "Stomach antrum",
        "explanation": "Incorrect. The stomach is the site of R-binder secretion and Intrinsic Factor production (by parietal cells), but not absorption. This would be the correct answer if the question asked where Intrinsic Factor is produced."
      },
      {
        "text": "Descending colon",
        "explanation": "Incorrect. The colon is primarily involved in water and electrolyte absorption, not vitamin uptake. This would be the correct answer if the question concerned the primary site of water reclamation."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Vitamin B12 is absorbed in the terminal ileum only when complexed with Intrinsic Factor.",
    "pdfPage": 13,
    "pdfQuote": "Intrinsic factor-B12 complex travels to the terminal ileum"
  },
  {
    "id": 4,
    "category": "Hematology: Pernicious Anemia",
    "questionText": "Pernicious anemia is the most common cause of Vitamin B12 deficiency worldwide. What is the underlying pathophysiology responsible for the lack of B12 absorption in this condition?",
    "options": [
      {
        "text": "Dietary lack of animal products",
        "explanation": "Incorrect. While a vegan diet causes B12 deficiency, Pernicious Anemia specifically refers to an autoimmune process. This would be the correct answer if the patient were a long-term strict vegan."
      },
      {
        "text": "Autoimmune destruction of gastric parietal cells",
        "explanation": "Correct. Pernicious anemia involves an autoimmune attack on the gastric parietal cells (or intrinsic factor itself). Destruction of these cells leads to atrophic gastritis, achlorhydria (increased stomach pH), and a failure to produce Intrinsic Factor."
      },
      {
        "text": "Chronic infestation with Diphyllobothrium latum",
        "explanation": "Incorrect. The fish tapeworm can consume B12 in the gut, but this is an infectious cause, not Pernicious Anemia. This would be the correct answer if the question described a patient with recent raw fish consumption and eggs in the stool."
      },
      {
        "text": "Exocrine pancreatic insufficiency",
        "explanation": "Incorrect. Pancreatic enzymes are needed to cleave B12 from haptocorrin (R-binder), but this is usually due to chronic pancreatitis or cystic fibrosis. This would be the correct answer if the question mentioned steatorrhea."
      },
      {
        "text": "Inflammation of the distal ileum",
        "explanation": "Incorrect. Conditions like Crohn's disease can damage the site of B12 absorption, but this is distinct from the stomach pathology of Pernicious Anemia. This would be the correct answer if the question focused on a patient with chronic bloody diarrhea and RLQ pain."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Pernicious anemia is caused by autoimmune destruction of parietal cells, leading to loss of Intrinsic Factor.",
    "pdfPage": 14,
    "pdfQuote": "autoimmune destruction of the parietal cells"
  },
  {
    "id": 5,
    "category": "Hematology: Sickle Cell Genetics",
    "questionText": "Sickle cell anemia results from a specific point mutation in the β-globin chain of hemoglobin. Which of the following amino acid substitutions is responsible for the formation of Hemoglobin S?",
    "options": [
      {
        "text": "Glutamic acid replaced by Lysine",
        "explanation": "Incorrect. This substitution (Glutamic acid to Lysine) results in Hemoglobin C, not Hemoglobin S. This would be the correct answer if the question described HbC crystals and target cells."
      },
      {
        "text": "Glutamic acid replaced by Valine",
        "explanation": "Correct. Hemoglobin S is formed when the hydrophilic amino acid glutamic acid is replaced by the hydrophobic amino acid valine at the 6th position of the β-globin chain. This allows for polymerization under deoxygenated conditions."
      },
      {
        "text": "Valine replaced by Glutamic acid",
        "explanation": "Incorrect. This is the reverse of the actual mutation. Sickle cell involves the loss of the negative charge of glutamic acid. This would be the correct answer if the question were describing a hypothetical reverse mutation."
      },
      {
        "text": "Phenylalanine replaced by Tyrosine",
        "explanation": "Incorrect. This is not a classic hemoglobinopathy mutation. This would be the correct answer if the question focused on the metabolic pathway of PKU."
      },
      {
        "text": "Deletion of the α-globin gene",
        "explanation": "Incorrect. Gene deletions are the hallmark of α-thalassemia, not sickle cell disease. This would be the correct answer if the question focused on microcytic anemia in a Southeast Asian patient."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Sickle cell disease is caused by a glutamic acid to valine substitution in the beta-globin chain.",
    "pdfPage": 37,
    "pdfQuote": "Glutamic acid (hydrophilic) is replaced by valine (hydrophobic)"
  },
  {
    "id": 6,
    "category": "Hematology: PNH Pathophysiology",
    "questionText": "Paroxysmal Nocturnal Hemoglobinuria (PNH) is an acquired clonal disorder of hematopoietic stem cells. What is the fundamental cellular defect that renders red blood cells susceptible to complement-mediated destruction?",
    "options": [
      {
        "text": "Mutation in the spectrin cytoskeletal protein",
        "explanation": "Incorrect. Spectrin defects lead to Hereditary Spherocytosis, not PNH. This would be the correct answer if the question described increased osmotic fragility."
      },
      {
        "text": "Absent glycosylphosphatidylinositol (GPI) anchor",
        "explanation": "Correct. PNH is caused by a mutation in the PIGA gene, leading to a deficiency of the GPI anchor. This anchor is required to attach protective proteins like CD55 (DAF) and CD59 (MIRL) to the cell membrane."
      },
      {
        "text": "Deficiency of Glucose-6-phosphate dehydrogenase",
        "explanation": "Incorrect. G6PD deficiency leads to oxidative stress-induced hemolysis, not complement-mediated lysis. This would be the correct answer if the question focused on Heinz bodies and bite cells."
      },
      {
        "text": "Defect in the pyruvate kinase enzyme",
        "explanation": "Incorrect. PK deficiency leads to ATP depletion and rigid RBCs, causing extravascular hemolysis. This would be the correct answer if the question mentioned burr cells and neonatal jaundice."
      },
      {
        "text": "Production of IgG autoantibodies against RBCs",
        "explanation": "Incorrect. This describes Warm Autoimmune Hemolytic Anemia. PNH is characteristically Coombs negative. This would be the correct answer if the question mentioned a positive direct antiglobulin test."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "PNH is caused by a lack of the GPI anchor, which normally secures CD55 and CD59 (complement inhibitors) to the RBC membrane.",
    "pdfPage": 34,
    "pdfQuote": "absent glycosylphosphatidylinositol (GPI)"
  },
  {
    "id": 7,
    "category": "Hematology: Hereditary Spherocytosis",
    "questionText": "A 22-year-old male is evaluated for recurrent jaundice and splenomegaly. A peripheral blood smear shows spherocytes, and an osmotic fragility test is positive. Which of the following is the most common protein defect associated with this condition?",
    "options": [
      {
        "text": "Band 3",
        "explanation": "Incorrect. While Band 3 defects can cause Hereditary Spherocytosis, it is not the most common. This would be the correct answer if specifically indicated in a more detailed biochemical analysis."
      },
      {
        "text": "Ankyrin",
        "explanation": "Correct. Defects in membrane-tethering proteins, most commonly ankyrin (followed by spectrin and Band 3), lead to the loss of membrane blebs. This results in the formation of spherical cells that are less deformable and destroyed in the spleen."
      },
      {
        "text": "Hemoglobin A2",
        "explanation": "Incorrect. HbA2 is elevated in β-thalassemia minor, not spherocytosis. This would be the correct answer if the patient had a microcytic anemia with target cells."
      },
      {
        "text": "PIGA gene product",
        "explanation": "Incorrect. The PIGA gene is mutated in PNH, not spherocytosis. This would be the correct answer if the patient had dark morning urine."
      },
      {
        "text": "Ribonucleotide reductase",
        "explanation": "Incorrect. This is the enzyme inhibited by hydroxyurea. This would be the correct answer if the question asked about the mechanism of sickle cell treatment."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Hereditary Spherocytosis most commonly involves defects in ankyrin or spectrin, leading to increased osmotic fragility.",
    "pdfPage": 31,
    "pdfQuote": "Most commonly ankyrin, spectrin, band 3"
  },
  {
    "id": 8,
    "category": "Hematology: G6PD Deficiency",
    "questionText": "G6PD deficiency is an X-linked recessive disorder that renders red blood cells susceptible to oxidative stress. Which of the following histological findings is typically seen on a peripheral smear during an acute hemolytic crisis in these patients?",
    "options": [
      {
        "text": "Schistocytes",
        "explanation": "Incorrect. Schistocytes indicate mechanical shearing, not oxidative damage. This would be the correct answer if the patient had TTP or HUS."
      },
      {
        "text": "Bite cells",
        "explanation": "Correct. During oxidative stress, hemoglobin precipitates as Heinz bodies. Splenic macrophages 'bite' these inclusions out, resulting in the characteristic 'bite cells' (degmacytes) seen on peripheral smear."
      },
      {
        "text": "Ringed sideroblasts",
        "explanation": "Incorrect. These are seen in the bone marrow of patients with sideroblastic anemia, not in G6PD. This would be the correct answer if the question focused on iron-laden mitochondria."
      },
      {
        "text": "Hypersegmented neutrophils",
        "explanation": "Incorrect. These are a sign of megaloblastic anemia, not G6PD. This would be the correct answer if the patient had B12 or Folate deficiency."
      },
      {
        "text": "Auer rods",
        "explanation": "Incorrect. Auer rods are found in myeloblasts in Acute Myeloid Leukemia (AML). This would be the correct answer if the question were about acute leukemia."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Bite cells in G6PD deficiency result from the splenic removal of Heinz bodies (precipitated hemoglobin).",
    "pdfPage": 47,
    "pdfQuote": "Heinz bodies are removed by spleen, creating bite cells"
  },
  {
    "id": 9,
    "category": "Hematology: Autoimmune Hemolysis",
    "questionText": "Warm autoimmune hemolytic anemia (WAIHA) is characterized by the production of autoantibodies that react with red blood cells at body temperature. Which class of antibody is most commonly responsible for this condition?",
    "options": [
      {
        "text": "IgM",
        "explanation": "Incorrect. IgM is responsible for Cold Autoimmune Hemolytic Anemia (CAIHA), which often occurs after Mycoplasma infection. This would be the correct answer if the patient had blue fingers in the cold."
      },
      {
        "text": "IgG",
        "explanation": "Correct. WAIHA is primarily mediated by IgG antibodies. These antibodies coat the RBCs, leading to their partial phagocytosis by splenic macrophages and the formation of spherocytes (extravascular hemolysis)."
      },
      {
        "text": "IgA",
        "explanation": "Incorrect. IgA is not typically involved in hemolytic anemias. This would be the correct answer if the question asked about the most common primary immunodeficiency."
      },
      {
        "text": "IgE",
        "explanation": "Incorrect. IgE is involved in Type I hypersensitivity and parasitic infections. This would be the correct answer if the patient had asthma or helminthic infection."
      },
      {
        "text": "IgD",
        "explanation": "Incorrect. IgD is found on the surface of mature B-cells but does not mediate hemolysis. This would be the correct answer if the question were about B-cell maturation markers."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Warm autoimmune hemolytic anemia is typically IgG-mediated, whereas Cold autoimmune hemolytic anemia is IgM-mediated.",
    "pdfPage": 53,
    "pdfQuote": "Warm Agglutination: mostly due to IgG"
  },
  {
    "id": 10,
    "category": "Hematology: Reticulocyte Count",
    "questionText": "To evaluate the bone marrow's response to anemia, clinicians calculate a corrected reticulocyte count. If the corrected reticulocyte count is found to be 1.5% in an anemic patient, what does this primarily indicate?",
    "options": [
      {
        "text": "Adequate marrow response to hemolysis",
        "explanation": "Incorrect. An adequate response to anemia (e.g., in hemolysis or hemorrhage) should result in a corrected reticulocyte count of >3%. This would be the correct answer if the count were 5%."
      },
      {
        "text": "Anemia of underproduction",
        "explanation": "Correct. A corrected reticulocyte count of <3% in the setting of anemia indicates that the bone marrow is not producing new red blood cells at an appropriate rate. This occurs in conditions like iron deficiency, aplastic anemia, or renal failure."
      },
      {
        "text": "Active intravascular hemolysis",
        "explanation": "Incorrect. Hemolysis is a 'peripheral destruction' process that typically results in a high reticulocyte count (>3%). This would be the correct answer if the count were high and haptoglobin was low."
      },
      {
        "text": "Splenic sequestration of mature RBCs",
        "explanation": "Incorrect. Sequestration would still trigger a marrow response, leading to reticulocytosis. This would be the correct answer if the question described a sickle cell patient with sudden splenic enlargement and a high reticulocyte count."
      },
      {
        "text": "Recent successful treatment with erythropoietin",
        "explanation": "Incorrect. Successful EPO treatment would cause a spike in the reticulocyte count, not a low value. This would be the correct answer if the count had risen from 0.5% to 6%."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "A corrected reticulocyte count <3% in anemia signifies a failure of production (anemia of underproduction).",
    "pdfPage": 23,
    "pdfQuote": "If the corrected reticulocyte count is <3%, we know the issue lies with RBC production"
  },
  {
    "id": 11,
    "category": "Hematology: Sickle Cell Complications",
    "questionText": "Acute Chest Syndrome is a life-threatening complication of sickle cell disease. Which of the following is the most likely presentation of this condition in an adult patient?",
    "options": [
      {
        "text": "Sudden splenomegaly and hypotension",
        "explanation": "Incorrect. This describes splenic sequestration crisis, which is more common in children. This would be the correct answer if the spleen was rapidly enlarging."
      },
      {
        "text": "Fever, chest pain, and new infiltrates on chest X-ray",
        "explanation": "Correct. Acute Chest Syndrome is defined by the triad of respiratory symptoms (chest pain, shortness of breath), fever, and a new pulmonary infiltrate on imaging. It is the leading cause of death in adults with sickle cell disease."
      },
      {
        "text": "Swelling and pain of the hands and feet",
        "explanation": "Incorrect. This describes dactylitis, which is typically the first sign of sickle cell disease in infants. This would be the correct answer if the question focused on an infant with sausage-like digits."
      },
      {
        "text": "Painless hematuria due to papillary necrosis",
        "explanation": "Incorrect. While renal papillary necrosis occurs in sickle cell, it is not 'Acute Chest Syndrome.' This would be the correct answer if the question focused on the renal medulla's low oxygen environment."
      },
      {
        "text": "Aplastic crisis following a viral illness",
        "explanation": "Incorrect. Aplastic crisis involves a drop in hemoglobin due to Parvovirus B19, not a primary pulmonary event. This would be the correct answer if the reticulocyte count was 0%."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Acute Chest Syndrome is the most common cause of death in adults with sickle cell disease and presents with chest pain, fever, and lung infiltrates.",
    "pdfPage": 39,
    "pdfQuote": "Acute Chest Syndrome: ... Most common cause of death in adults"
  },
  {
    "id": 12,
    "category": "Hematology: Aplastic Anemia",
    "questionText": "Aplastic anemia results from the destruction or failure of the hematopoietic stem cells in the bone marrow. Which of the following sets of lab findings is most consistent with this diagnosis?",
    "options": [
      {
        "text": "Low RBC, High WBC, High Platelets",
        "explanation": "Incorrect. Aplastic anemia involves a global failure, not just red cells. This would be the correct answer if the patient had a myeloproliferative disorder like CML."
      },
      {
        "text": "Pancytopenia with a low reticulocyte count",
        "explanation": "Correct. Aplastic anemia is characterized by pancytopenia (anemia, neutropenia, and thrombocytopenia) along with a very low reticulocyte count. The bone marrow biopsy typically shows hypocellularity with fatty infiltration."
      },
      {
        "text": "Low RBC, Low Hemoglobin, Normal MCV, High Reticulocyte count",
        "explanation": "Incorrect. A high reticulocyte count indicates a functional marrow responding to loss. This would be the correct answer if the patient had acute hemorrhage."
      },
      {
        "text": "Anemia with many blast cells (>20%)",
        "explanation": "Incorrect. Blasts indicate an acute leukemia (overproduction of immature cells), not a failure of production. This would be the correct answer if the question focused on AML or ALL."
      },
      {
        "text": "Macrocytic anemia with hypersegmented neutrophils",
        "explanation": "Incorrect. This describes megaloblastic anemia, not aplastic anemia. This would be the correct answer if the question focused on B12/Folate."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Aplastic anemia presents with pancytopenia and a hypocellular, fatty bone marrow.",
    "pdfPage": 63,
    "pdfQuote": "Pancytopenia w/ normal cell morphology ... fatty infiltration"
  },
  {
    "id": 13,
    "category": "Hematology: Pyruvate Kinase Deficiency",
    "questionText": "Pyruvate kinase deficiency leads to an extravascular hemolytic anemia due to the depletion of ATP within red blood cells. Which of the following is a characteristic metabolic consequence of this enzyme defect?",
    "options": [
      {
        "text": "Decreased levels of 2,3-bisphosphoglycerate (BPG)",
        "explanation": "Incorrect. Because the block is at the end of the glycolytic pathway, upstream metabolites actually accumulate. This would be the correct answer if the defect were earlier in glycolysis (e.g., hexokinase)."
      },
      {
        "text": "Increased levels of 2,3-bisphosphoglycerate (BPG)",
        "explanation": "Correct. PK deficiency leads to a buildup of glycolytic intermediates, including 2,3-BPG. High 2,3-BPG shifts the oxygen dissociation curve to the right, increasing oxygen delivery to the tissues, which partially compensates for the anemia."
      },
      {
        "text": "Inability to reduce glutathione",
        "explanation": "Incorrect. This is the hallmark of G6PD deficiency (Pentose Phosphate Pathway), not PK deficiency. This would be the correct answer if the question described Heinz bodies."
      },
      {
        "text": "Production of Hemoglobin F",
        "explanation": "Incorrect. HbF is not primarily associated with PK deficiency. This would be the correct answer if the question focused on Sickle Cell treatment with hydroxyurea."
      },
      {
        "text": "Elevated serum methylmalonic acid",
        "explanation": "Incorrect. This is a marker for B12 deficiency. This would be the correct answer if the question focused on subacute combined degeneration."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Pyruvate kinase deficiency causes an increase in 2,3-BPG, which enhances oxygen delivery to tissues by shifting the dissociation curve to the right.",
    "pdfPage": 49,
    "pdfQuote": "buildup of BPG ... increases oxygen delivery"
  },
  {
    "id": 14,
    "category": "Hematology: Orotic Aciduria",
    "questionText": "Orotic aciduria is a rare autosomal recessive disorder resulting from a defect in UMP synthase. Which of the following findings distinguishes this condition from other causes of megaloblastic anemia?",
    "options": [
      {
        "text": "Absence of hypersegmented neutrophils",
        "explanation": "Incorrect. Orotic aciduria is a form of megaloblastic anemia, so hypersegmented neutrophils are present. This would be the correct answer if it were a non-megaloblastic macrocytic anemia like liver disease."
      },
      {
        "text": "Response to Vitamin B12 and Folate therapy",
        "explanation": "Incorrect. The defect is in pyrimidine synthesis, so B12 and folate will not correct the anemia. This would be the correct answer if it were Pernicious Anemia."
      },
      {
        "text": "Presence of orotic acid in the urine",
        "explanation": "Correct. The cardinal sign of this disorder is the excretion of large amounts of orotic acid in the urine. Additionally, it presents with failure to thrive and a megaloblastic anemia that is refractory to B12/folate."
      },
      {
        "text": "Increased serum ammonia levels",
        "explanation": "Incorrect. Hyperammonemia is seen in ornithine transcarbamylase (OTC) deficiency (Urea cycle defect), which also has orotic aciduria. However, OTC deficiency does NOT cause megaloblastic anemia. This would be the correct answer if the question described a urea cycle defect."
      },
      {
        "text": "Positive direct Coombs test",
        "explanation": "Incorrect. This is a marker for autoimmune hemolysis. This would be the correct answer if the question described jaundice and spherocytes."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Orotic aciduria presents with megaloblastic anemia refractory to B12/folate, failure to thrive, and orotic acid in the urine (without hyperammonemia).",
    "pdfPage": 18,
    "pdfQuote": "Megaloblastic anemia not treated by folate or B12"
  },
  {
    "id": 15,
    "category": "Hematology: Diamond-Blackfan Anemia",
    "questionText": "Diamond-Blackfan Anemia (DBA) is a congenital pure red cell aplasia. Which of the following physical examination findings is most characteristically associated with this condition?",
    "options": [
      {
        "text": "Cafe-au-lait spots",
        "explanation": "Incorrect. Cafe-au-lait spots are characteristic of Fanconi Anemia (which involves all cell lines), not DBA. This would be the correct answer if the question described pancytopenia."
      },
      {
        "text": "Triphalangeal thumbs",
        "explanation": "Correct. DBA is associated with several craniofacial and upper extremity abnormalities, most notably triphalangeal thumbs. It presents within the first year of life with a rapid-onset macrocytic anemia and a lack of RBC precursors in the marrow."
      },
      {
        "text": "Splenomegaly",
        "explanation": "Incorrect. Splenomegaly is more common in hemolytic anemias (e.g., spherocytosis). DBA is an underproduction anemia. This would be the correct answer if the question focused on extravascular hemolysis."
      },
      {
        "text": "Absence of the radial bone",
        "explanation": "Incorrect. While upper extremity defects occur, the classic 'thumb' finding in Fanconi is a hypoplastic/absent thumb, not triphalangeal. This would be the correct answer if the question were about Fanconi Anemia."
      },
      {
        "text": "Jaundice",
        "explanation": "Incorrect. Jaundice indicates hemolysis or liver disease. DBA is an underproduction state. This would be the correct answer if the question described bilirubin elevation."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Diamond-Blackfan Anemia is a congenital macrocytic anemia associated with triphalangeal thumbs and craniofacial defects.",
    "pdfPage": 20,
    "pdfQuote": "Short statue, craniofacial abnormalities, ... (triphalangeal thumbs)"
  },
  {
    "id": 16,
    "category": "Hematology: B12 Application",
    "questionText": "A 65-year-old female presents to her primary care physician with a 4-month history of progressive fatigue, lightheadedness, and a 'burning sensation' on her tongue. She also notes occasional tingling in her toes. Her medical history is significant for hypothyroidism and a total gastrectomy performed 5 years ago for gastric cancer. Physical examination reveals conjunctival pallor and a smooth, beefy-red tongue. A positive Romberg sign is noted. Laboratory studies show a Hemoglobin of 9.0 g/dL and an MCV of 118 fL. Which of the following is the most likely metabolic finding in this patient?",
    "options": [
      {
        "text": "Elevated methylmalonic acid and elevated homocysteine",
        "explanation": "Correct. This patient has a clear risk factor for B12 deficiency (total gastrectomy = no parietal cells = no Intrinsic Factor) and classic clinical signs (glossitis, subacute combined degeneration). B12 deficiency leads to the accumulation of both MMA and homocysteine."
      },
      {
        "text": "Normal methylmalonic acid and elevated homocysteine",
        "explanation": "Incorrect. This pattern is characteristic of folate deficiency. While it causes macrocytic anemia and glossitis, it does not cause the neurological symptoms (positive Romberg) or result from gastrectomy. This would be the correct answer if the patient had a 'tea and toast' diet and no neuro deficits."
      },
      {
        "text": "Low serum ferritin and high TIBC",
        "explanation": "Incorrect. This describes iron deficiency, which causes microcytic anemia. While pica or glossitis can occur, the MCV of 118 and neuro symptoms rule this out. This would be the correct answer if the MCV was 70."
      },
      {
        "text": "Elevated serum ammonia and orotic acid",
        "explanation": "Incorrect. This suggests a urea cycle defect. While orotic aciduria causes megaloblastic anemia, it does not fit the post-gastrectomy or neuro presentation. This would be the correct answer if the question described an infant with lethargy."
      },
      {
        "text": "Decreased haptoglobin and elevated LDH",
        "explanation": "Incorrect. These are markers of hemolysis. While some 'ineffective hematopoiesis' occurs in megaloblastic states, the primary issue here is a deficiency. This would be the correct answer if the patient had schistocytes or jaundice."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "B12 deficiency results in BOTH elevated MMA and homocysteine, along with neurological symptoms due to impaired myelin maintenance.",
    "pdfPage": 15,
    "pdfQuote": "Methylmalonic acid: [Elevated] ... B12 is needed for the myelination"
  },
  {
    "id": 17,
    "category": "Hematology: Folate Application",
    "questionText": "An 82-year-old male who lives alone is brought to the clinic by his daughter due to persistent fatigue. She notes that his diet consists almost entirely of tea and dry toast. He denies any numbness, tingling, or difficulty with balance. Vital signs are stable. Physical exam shows conjunctival pallor but a normal neurological evaluation. CBC reveals a macrocytic anemia (MCV 112) with hypersegmented neutrophils. Which of the following describes the most likely underlying mechanism for his condition?",
    "explanation": "Incorrect.",
    "options": [
      {
        "text": "Autoimmune destruction of terminal ileum receptors",
        "explanation": "Incorrect. While ileal damage causes B12 deficiency, this patient has a classic dietary risk for folate deficiency ('tea and toast') and lacks neuro symptoms. This would be the correct answer if the question focused on Crohn's disease."
      },
      {
        "text": "Impaired DNA synthesis due to lack of tetrahydrofolate",
        "explanation": "Correct. The 'tea and toast' diet in the elderly is a classic setup for folate deficiency. Folate is required to produce tetrahydrofolate, the active form needed for purine and thymidylate synthesis. Deficiency stalls DNA replication, causing megaloblastic changes."
      },
      {
        "text": "Accumulation of abnormal fatty acids in neuronal lipids",
        "explanation": "Incorrect. This is the mechanism for neurological damage in B12 deficiency. This patient's neurological exam was normal, which favors folate deficiency. This would be the correct answer if the patient had ataxia."
      },
      {
        "text": "Competitive inhibition of dihydrofolate reductase",
        "explanation": "Incorrect. This is the mechanism of methotrexate. While it causes folate deficiency, this patient is not on medications. This would be the correct answer if he were being treated for rheumatoid arthritis."
      },
      {
        "text": "Malabsorption due to chronic alcohol overuse",
        "explanation": "Incorrect. While alcoholics are at high risk for folate deficiency (via jejunal block), there is no mention of alcohol use here. This would be the correct answer if the question stated he drank a pint of vodka daily."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The 'tea and toast' diet in elderly patients often leads to folate deficiency within months, causing megaloblastic anemia without neurological symptoms.",
    "pdfPage": 11,
    "pdfQuote": "Poor diet (the elderly & alcoholics)"
  },
  {
    "id": 18,
    "category": "Hematology: Sickle Cell Application",
    "questionText": "A 10-year-old African American boy with known sickle cell anemia is brought to the emergency department with a 1-day history of high fever, productive cough, and shortness of breath. His oxygen saturation is 89% on room air. A chest X-ray reveals a new consolidation in the right middle lobe. Which of the following is the most appropriate next step in the management of this life-threatening condition?",
    "options": [
      {
        "text": "Immediate surgical splenectomy",
        "explanation": "Incorrect. Splenectomy is used for sequestration or persistent hemolysis, not for Acute Chest Syndrome. This would be the correct answer if the spleen was rapidly enlarging and hemoglobin was dropping."
      },
      {
        "text": "Administration of antibiotics and supplemental oxygen",
        "explanation": "Correct. This patient has Acute Chest Syndrome (ACS), defined by respiratory distress and a new infiltrate. Management involves oxygen, pain control, antibiotics (to cover pneumonia, which can trigger ACS), and often exchange transfusion."
      },
      {
        "text": "Daily hydroxyurea therapy titration",
        "explanation": "Incorrect. Hydroxyurea is a maintenance therapy to prevent crises; it is not used to treat acute life-threatening episodes like ACS. This would be the correct answer if the question asked about long-term prevention."
      },
      {
        "text": "Observation and fluid restriction",
        "explanation": "Incorrect. Sickle cell patients in crisis require hydration (to reduce viscosity) and ACS requires aggressive intervention, not mere observation. This would be the correct answer if the patient had stable sickle cell trait."
      },
      {
        "text": "Bone marrow biopsy to check for blast percentage",
        "explanation": "Incorrect. There is no suspicion of leukemia here. ACS is a vaso-occlusive complication. This would be the correct answer if the patient had unexplained pancytopenia and bruising."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Acute Chest Syndrome requires aggressive management with oxygen and antibiotics; it is a major cause of morbidity in sickle cell patients.",
    "pdfPage": 39,
    "pdfQuote": "Presents w/ chest pain, shortness of breath, lung infiltrates"
  },
  {
    "id": 19,
    "category": "Hematology: G6PD Application",
    "questionText": "A 19-year-old male presents with sudden onset of jaundice and dark urine after being treated for a urinary tract infection with trimethoprim-sulfamethoxazole. A peripheral blood smear shows 'bite cells'. Which of the following describes the most likely biochemical consequence of his underlying enzyme deficiency?",
    "options": [
      {
        "text": "Inability to maintain hemoglobin in the reduced state",
        "explanation": "Incorrect. While true that G6PD helps prevent oxidation, the specific issue is the lack of NADPH to reduce glutathione. This would be the correct answer if it focused specifically on methemoglobinemia."
      },
      {
        "text": "Decreased production of NADPH and reduced glutathione",
        "explanation": "Correct. G6PD is the rate-limiting enzyme in the hexose monophosphate shunt, which produces NADPH. NADPH is essential for regenerating reduced glutathione, which protects RBCs from oxidative damage (e.g., from sulfa drugs)."
      },
      {
        "text": "Excessive accumulation of 2,3-bisphosphoglycerate",
        "explanation": "Incorrect. This occurs in Pyruvate Kinase deficiency, not G6PD. This would be the correct answer if the question mentioned right-shifted oxygen affinity."
      },
      {
        "text": "Failure to anchor CD55 and CD59",
        "explanation": "Incorrect. This describes PNH. This would be the correct answer if the patient had morning hematuria and venous thrombosis."
      },
      {
        "text": "Accumulation of iron in the mitochondria",
        "explanation": "Incorrect. This occurs in sideroblastic anemia. This would be the correct answer if the question described ringed sideroblasts with Prussian Blue stain."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "G6PD deficiency leads to decreased NADPH, leaving RBCs vulnerable to oxidative damage and Heinz body formation.",
    "pdfPage": 46,
    "pdfQuote": "G6PD helps produce NADPH, which will reduce glutathione"
  },
  {
    "id": 20,
    "category": "Hematology: PNH Application",
    "questionText": "A 35-year-old male presents with dark-colored urine in the morning for the past three days. He also reports a sharp pain in his right upper quadrant. An ultrasound reveals a thrombosis in the hepatic vein (Budd-Chiari syndrome). Laboratory testing shows a normocytic anemia, a high reticulocyte count, and a negative direct Coombs test. What is the most definitive diagnostic test for this patient's condition?",
    "options": [
      {
        "text": "Osmotic fragility test",
        "explanation": "Incorrect. This is used for Hereditary Spherocytosis. While it causes hemolysis, it does not cause venous thrombosis. This would be the correct answer if the patient had spherocytes on smear."
      },
      {
        "text": "Flow cytometry for CD55 and CD59",
        "explanation": "Correct. The presentation of morning hemoglobinuria and venous thrombosis (especially Budd-Chiari) is classic for PNH. Flow cytometry is the modern diagnostic standard, demonstrating the absence of GPI-anchored proteins like CD55 and CD59 on the cell surface."
      },
      {
        "text": "Hemoglobin electrophoresis",
        "explanation": "Incorrect. This is used for sickle cell and thalassemias. It would show HbS or HbF levels. This would be the correct answer if the patient had sickled cells on smear."
      },
      {
        "text": "Serum B12 and folate levels",
        "explanation": "Incorrect. These would be used for macrocytic anemia. This patient has a normocytic anemia with a high reticulocyte count, indicating destruction, not deficiency. This would be the correct answer if the MCV was 110."
      },
      {
        "text": "Schilling test",
        "explanation": "Incorrect. This is a historical test for the cause of B12 deficiency. It has no role in the diagnosis of PNH. This would be the correct answer if the question focused on the historical workup of Pernicious Anemia."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "PNH is a rare but important cause of venous thrombosis (e.g., hepatic vein) and morning hemoglobinuria; diagnosis is via flow cytometry.",
    "pdfPage": 35,
    "pdfQuote": "Flow cytometry showing absent CD55 & CD59"
  },
  {
    "id": 21,
    "category": "Hematology: Sickle Cell Aplastic Crisis",
    "questionText": "A 14-year-old with sickle cell anemia is brought to the clinic because of worsening fatigue. He recently recovered from a mild illness characterized by a bright red rash on his cheeks. His hemoglobin is found to be 4.2 g/dL (his baseline is 8.0), and his corrected reticulocyte count is 0.2%. Which of the following is the most likely cause of this acute decline?",
    "options": [
      {
        "text": "Splenic sequestration crisis",
        "explanation": "Incorrect. Sequestration would cause a drop in hemoglobin but typically presents with a high reticulocyte count (as the marrow responds) and splenomegaly. This would be the correct answer if the spleen was palpable and the retics were 10%."
      },
      {
        "text": "Parvovirus B19 infection",
        "explanation": "Correct. Parvovirus B19 infects erythroid progenitors and halts RBC production. In patients with high turnover (like sickle cell), this causes an 'aplastic crisis' marked by severe anemia and a very low reticulocyte count (<1%). The 'slapped cheek' rash is the classic sign of Erythema Infectiosum."
      },
      {
        "text": "Vaso-occlusive pain crisis",
        "explanation": "Incorrect. Pain crises cause severe pain but do not typically cause a sudden, profound drop in hemoglobin with reticulocytopenia. This would be the correct answer if the patient had deep bone pain without a drop in RBC production."
      },
      {
        "text": "Acute Chest Syndrome",
        "explanation": "Incorrect. This would present with respiratory distress and infiltrates on CXR. This would be the correct answer if the patient had hypoxia and chest pain."
      },
      {
        "text": "Iron deficiency anemia",
        "explanation": "Incorrect. Iron deficiency is a slow, chronic process and would result in microcytosis. This would be the correct answer if the question described chronic occult bleeding."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Parvovirus B19 causes a transient cessation of erythropoiesis, which is life-threatening in patients with sickle cell anemia (aplastic crisis).",
    "pdfPage": 62,
    "pdfQuote": "Parvovirus B19: infects progenitor RBCs and halts erythropoiesis"
  },
  {
    "id": 22,
    "category": "Hematology: Mechanical Hemolysis",
    "questionText": "A 55-year-old male with a history of a mechanical aortic valve replacement presents with mild jaundice. A peripheral blood smear reveals fragmented red blood cells (schistocytes). Which of the following laboratory findings is most expected in this patient?",
    "options": [
      {
        "text": "Elevated serum haptoglobin",
        "explanation": "Incorrect. Haptoglobin binds free hemoglobin and is subsequently cleared; therefore, it is decreased, not elevated, in intravascular hemolysis. This would be the correct answer if the patient had an acute phase reaction without hemolysis."
      },
      {
        "text": "Decreased serum haptoglobin",
        "explanation": "Correct. Mechanical destruction of RBCs by a prosthetic valve is a form of macroangiopathic (intravascular) hemolysis. Free hemoglobin is released into the plasma and binds to haptoglobin, leading to a marked decrease in serum haptoglobin levels."
      },
      {
        "text": "Increased serum methylmalonic acid",
        "explanation": "Incorrect. This is a marker for B12 deficiency, not mechanical hemolysis. This would be the correct answer if the patient had macrocytic anemia and ataxia."
      },
      {
        "text": "Positive direct Coombs test",
        "explanation": "Incorrect. Mechanical hemolysis is an extrinsic, non-immune process; the Coombs test should be negative. This would be the correct answer if the patient had AIHA."
      },
      {
        "text": "Presence of Heinz bodies",
        "explanation": "Incorrect. Heinz bodies represent oxidative damage to hemoglobin (G6PD), not mechanical fragmentation. This would be the correct answer if the patient had sulfa drug exposure."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Intravascular hemolysis (like that caused by mechanical valves) is characterized by decreased haptoglobin and the presence of schistocytes.",
    "pdfPage": 28,
    "pdfQuote": "Decreased serum haptoglobin ... Schistocytes on peripheral blood smear"
  },
  {
    "id": 23,
    "category": "Hematology: Cold Agglutinin Disease",
    "questionText": "A 20-year-old college student presents with fatigue and jaundice following a week-long recovery from 'walking pneumonia.' She reports that her fingers become painfully blue when she walks outside in the winter cold. Laboratory studies reveal a positive direct Coombs test for C3. What is the most likely diagnosis?",
    "options": [
      {
        "text": "Warm Autoimmune Hemolytic Anemia",
        "explanation": "Incorrect. Warm AIHA is IgG-mediated and does not typically present with cold-induced symptoms like Raynaud's phenomenon. This would be the correct answer if the antibody was IgG and the patient had SLE."
      },
      {
        "text": "Cold Autoimmune Hemolytic Anemia",
        "explanation": "Correct. Cold agglutinin disease is mediated by IgM, which binds RBCs in the cooler periphery and fixes complement (C3). It is classically associated with Mycoplasma pneumoniae and infectious mononucleosis."
      },
      {
        "text": "Hereditary Spherocytosis",
        "explanation": "Incorrect. This is a genetic membrane defect, not an autoimmune process, and would be Coombs negative. This would be the correct answer if there was a family history and positive osmotic fragility."
      },
      {
        "text": "G6PD Deficiency",
        "explanation": "Incorrect. G6PD is an enzyme defect triggered by oxidative stress, not cold temperature. This would be the correct answer if the trigger was fava beans or primaquine."
      },
      {
        "text": "Sickle Cell Trait",
        "explanation": "Incorrect. Sickle cell trait is usually asymptomatic and does not cause cold-induced hemolysis or a positive Coombs test. This would be the correct answer if the patient had microscopic hematuria but no anemia."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Cold autoimmune hemolytic anemia is often post-infectious (Mycoplasma) and involves IgM-mediated complement fixation.",
    "pdfPage": 53,
    "pdfQuote": "Cold Agglutination: mostly due to IgM ... Mycoplasma pneumoniae"
  },
  {
    "id": 24,
    "category": "Hematology: B12 Treatment Risk",
    "questionText": "A patient with severe macrocytic anemia and neurological deficits is treated with high doses of folic acid without checking his Vitamin B12 status. His anemia improves significantly over the next month, but his difficulty with balance and numbness in his feet worsens. What is the pharmacological explanation for this progression?",
    "options": [
      {
        "text": "Folic acid is a direct neurotoxin to the spinal cord",
        "explanation": "Incorrect. Folic acid is not neurotoxic. The issue is the omission of B12. This would be the correct answer if the question concerned lead poisoning."
      },
      {
        "text": "Folic acid treatment unmasked B12 deficiency",
        "explanation": "Correct. High-dose folate can bypass the 'folate trap' caused by B12 deficiency, correcting the anemia (the 'unmasking'). However, folate cannot substitute for B12 in the methylation reactions required for myelin maintenance, allowing the neurological damage to continue or worsen."
      },
      {
        "text": "Folic acid competitively inhibits B12 absorption",
        "explanation": "Incorrect. Folic acid does not block B12 uptake in the ileum. This would be the correct answer if the question focused on calcium's effect on iron."
      },
      {
        "text": "The patient developed an antibody to folic acid",
        "explanation": "Incorrect. Hypersensitivity to folate is not the mechanism for worsening neuropathy. This would be the correct answer if the patient had anaphylaxis."
      },
      {
        "text": "Improved red cell count increased blood viscosity",
        "explanation": "Incorrect. While increased viscosity occurs with ESAs, it does not explain the specific progression of neuropathy in a megaloblastic patient. This would be the correct answer if the patient had a stroke while on epoetin."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Never treat macrocytic anemia with folate alone until B12 deficiency is ruled out, as folate can 'unmask' and worsen neurological damage.",
    "pdfPage": 15,
    "pdfQuote": "neurologic symptoms of B12 deficiency will not resolve, and may even be exacerbated"
  },
  {
    "id": 25,
    "category": "Hematology: Sickle Cell Recap",
    "questionText": "In sickle cell disease, the primary cause of chronic morbidity is repeated vaso-occlusion. Which of the following conditions is characteristically avoided in the first few months of life due to the presence of a specific hemoglobin type?",
    "options": [
      {
        "text": "Acute hemolytic episodes",
        "explanation": "Incorrect. While hemolysis is reduced, the primary 'avoided' event is the sickling process itself. This would be the correct answer if the question focused on jaundice."
      },
      {
        "text": "Sickle cell crises and sickling",
        "explanation": "Correct. Newborns with sickle cell disease are protected for the first 6 months of life because they still have high levels of Hemoglobin F (HbF). HbF lacks the β-chain (it is α2γ2) and does not sickle, effectively diluting the abnormal HbS."
      },
      {
        "text": "Aplastic anemia",
        "explanation": "Incorrect. DBA or other congenital aplasias can occur in infancy. This would be the correct answer if the question focused on triphalangeal thumbs."
      },
      {
        "text": "Megaloblastic changes",
        "explanation": "Incorrect. These depend on dietary intake and are not prevented by HbF. This would be the correct answer if the question focused on milk-only diets in infants."
      },
      {
        "text": "Iron overload",
        "explanation": "Incorrect. Iron overload occurs later in life after multiple transfusions. This would be the correct answer if the question focused on hereditary hemochromatosis."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Fetal hemoglobin (HbF) protects newborns from sickle cell symptoms for the first 6 months of life.",
    "pdfPage": 37,
    "pdfQuote": "HbF protects against sickling, as there is no β chain"
  },
  {
    "id": 26,
    "category": "Hematology: Schilling Test (Historical)",
    "questionText": "A historical diagnostic test involves administering radioactive Vitamin B12 and measuring its excretion in the urine. If the B12 is excreted in the urine ONLY when Intrinsic Factor is co-administered, what is the most likely diagnosis?",
    "options": [
      {
        "text": "Tropical sprue",
        "explanation": "Incorrect. Sprue causes general malabsorption, so B12 wouldn't be absorbed even with Intrinsic Factor. This would be the correct answer if the test remained abnormal in Stage 2."
      },
      {
        "text": "Pernicious Anemia",
        "explanation": "Correct. In the Schilling test, if Stage 1 (B12 alone) is abnormal but Stage 2 (B12 + IF) is normal, it confirms that the patient lacks Intrinsic Factor (Pernicious Anemia). Excretion in the urine indicates the B12 was successfully absorbed from the gut."
      },
      {
        "text": "Chronic pancreatitis",
        "explanation": "Incorrect. Pancreatitis requires pancreatic enzymes (Stage 3) to correct the B12 absorption. This would be the correct answer if B12 + IF failed but B12 + Enzymes worked."
      },
      {
        "text": "Veganism",
        "explanation": "Incorrect. A vegan has a dietary lack but normal absorption; they would pass Stage 1 of the Schilling test. This would be the correct answer if the question focused on a patient with no history of animal product intake."
      },
      {
        "text": "Crohn's disease",
        "explanation": "Incorrect. Terminal ileum damage prevents B12 absorption regardless of Intrinsic Factor. This would be the correct answer if the test was abnormal in all stages."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The Schilling test (Stage 2) differentiates lack of Intrinsic Factor (Pernicious Anemia) from more distal malabsorption.",
    "pdfPage": 16,
    "pdfQuote": "B12 is only present when given with intrinsic factor, we know the issue is with intrinsic factor"
  },
  {
    "id": 27,
    "category": "Hematology: Pyruvate Kinase Findings",
    "questionText": "A newborn presents with severe jaundice and anemia. A peripheral blood smear shows 'burr cells' (echinocytes) and numerous reticulocytes. Which of the following metabolic pathways is defective in this patient?",
    "options": [
      {
        "text": "Pentose Phosphate Pathway",
        "explanation": "Incorrect. This is the pathway for G6PD. While it causes jaundice, it typically results in bite cells, not burr cells. This would be the correct answer if the question focused on NADPH production."
      },
      {
        "text": "Glycolysis",
        "explanation": "Correct. Pyruvate kinase is the final enzyme in the glycolytic pathway. A deficiency leads to ATP depletion, causing the RBC membrane to become rigid and dehydrated, forming burr cells and undergoing extravascular hemolysis."
      },
      {
        "text": "Heme synthesis pathway",
        "explanation": "Incorrect. Defects here lead to porphyrias or sideroblastic anemia. This would be the correct answer if the question focused on photosensitivity or lead poisoning."
      },
      {
        "text": "Globin gene transcription",
        "explanation": "Incorrect. This is the defect in thalassemias or sickle cell. This would be the correct answer if the question focused on quantitative or qualitative hemoglobin defects."
      },
      {
        "text": "Urea Cycle",
        "explanation": "Incorrect. Urea cycle defects cause hyperammonemia, not primary hemolytic anemia. This would be the correct answer if the question described an infant with lethargy and poor feeding."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Pyruvate kinase deficiency is a common cause of neonatal hemolytic anemia and characteristically shows burr cells on smear.",
    "pdfPage": 49,
    "pdfQuote": "Hemolytic anemia, especially in newborn ... burr cells"
  },
  {
    "id": 28,
    "category": "Hematology: Intravascular Hemolysis Labs",
    "questionText": "During a marathon, a runner develops dark, reddish-brown urine. He has no other symptoms. Laboratory evaluation shows hemoglobinuria but no red blood cells on urine microscopy. Which of the following best explains this finding?",
    "options": [
      {
        "text": "Glomerular damage due to extreme exercise",
        "explanation": "Incorrect. Glomerular damage would result in whole RBCs (hematuria) in the urine, not just free hemoglobin. This would be the correct answer if the urine microscopy showed dysmorphic RBCs."
      },
      {
        "text": "Mechanical trauma to RBCs in the feet (Foot-strike hemolysis)",
        "explanation": "Correct. This is a form of mechanical intravascular hemolysis. The repetitive impact of running shears RBCs in the vessels of the feet. Free hemoglobin is released, cleared by haptoglobin until saturated, and then excreted in the urine (hemoglobinuria)."
      },
      {
        "text": "Rhabdomyolysis and myoglobinuria",
        "explanation": "Incorrect. While exercise causes rhabdomyolysis, the slide explicitly mentions intravascular hemolysis in the context of marathon runners. This would be the correct answer if the question focused on muscle breakdown and high creatine kinase."
      },
      {
        "text": "Acute post-streptococcal glomerulonephritis",
        "explanation": "Incorrect. This would present with edema, hypertension, and whole RBCs. This would be the correct answer if the patient had a recent skin infection."
      },
      {
        "text": "Bilirubinuria due to bile duct obstruction",
        "explanation": "Incorrect. Bilirubinuria would turn urine dark but would not test positive for 'blood' on a dipstick without whole cells or hemoglobin. This would be the correct answer if the patient had clay-colored stools."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Mechanical trauma (like running) can cause intravascular hemolysis, leading to hemoglobinuria with a negative urine microscopy for RBCs.",
    "pdfPage": 28,
    "pdfQuote": "Mechanical Injury: ... repetitive physical trauma (marathon runners)"
  },
  {
    "id": 29,
    "category": "Hematology: Hemoglobin C",
    "questionText": "A patient is found to have 'rod-shaped' crystals within their red blood cells on a peripheral smear. Further testing reveals target cells. Which of the following describes the most likely genetic defect?",
    "options": [
      {
        "text": "Glutamic acid replaced by Valine at position 6",
        "explanation": "Incorrect. This describes Sickle Cell Disease. While it has target cells, it does not have the classic 'rod' crystals of HbC. This would be the correct answer if the question mentioned sickle-shaped cells."
      },
      {
        "text": "Glutamic acid replaced by Lysine at position 6",
        "explanation": "Correct. Hemoglobin C is caused by the substitution of lysine for glutamic acid in the β-globin chain. This mutation makes the hemoglobin less soluble, leading to the formation of characteristic intracellular crystals and target cells."
      },
      {
        "text": "Point mutation in the PIGA gene",
        "explanation": "Incorrect. This describes PNH. This would be the correct answer if the question focused on complement-mediated lysis."
      },
      {
        "text": "Deficiency of the ankyrin protein",
        "explanation": "Incorrect. This describes Hereditary Spherocytosis. This would be the correct answer if the question focused on spherocytes and osmotic fragility."
      },
      {
        "text": "Defect in the UMP synthase enzyme",
        "explanation": "Incorrect. This describes Orotic Aciduria. This would be the correct answer if the question focused on megaloblastic anemia refractory to B12."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Hemoglobin C disease is characterized by Glutamic acid to Lysine mutation, target cells, and intracellular 'rod' crystals.",
    "pdfPage": 44,
    "pdfQuote": "Β Globin Mutation: Glutamic acid to lysine mutation"
  },
  {
    "id": 30,
    "category": "Hematology: Sickle Cell Trait",
    "questionText": "An individual is diagnosed with sickle cell trait (HbAS). They are generally asymptomatic and have no anemia. However, they are warned that sickling can still occur under extreme conditions in which specific organ?",
    "options": [
      {
        "text": "Liver",
        "explanation": "Incorrect. The liver is not a common site for sickling in trait carriers. This would be the correct answer if the question asked about extramedullary hematopoiesis."
      },
      {
        "text": "Renal medulla",
        "explanation": "Correct. The renal medulla is extremely hypoxic and hypertonic. This environment can trigger sickling even in trait carriers (HbS ~40%), leading to microinfarctions, painless hematuria, and an inability to concentrate urine (isosthenuria)."
      },
      {
        "text": "Splenic sinusoids",
        "explanation": "Incorrect. Sickling in the spleen is the hallmark of sickle cell disease (HbSS), not trait. This would be the correct answer if the patient had homozygous disease."
      },
      {
        "text": "Bone marrow",
        "explanation": "Incorrect. The bone marrow is involved in the 'overdrive' response to anemia in disease, but is not the site of sickling in trait. This would be the correct answer if the question focused on erythroid hyperplasia."
      },
      {
        "text": "Brain",
        "explanation": "Incorrect. ****** is a risk in sickle cell disease, but not typically in sickle cell trait. This would be the correct answer if the question focused on vaso-occlusive complications in HbSS."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Individuals with sickle cell trait are generally healthy but can experience microinfarctions and hematuria in the renal medulla.",
    "pdfPage": 40,
    "pdfQuote": "Sickling can still be present in the renal medulla"
  },
  {
    "id": 31,
    "category": "Hematology: Megaloblastic Differentiation",
    "questionText": "B12 deficiency and folate deficiency both cause megaloblastic anemia. Which clinical feature is present in B12 deficiency but NOT in folate deficiency?",
    "options": [
      { "text": "Macrocytic RBCs with MCV >100", "explanation": "Incorrect. BOTH B12 and folate deficiency cause macrocytosis." },
      { "text": "Hypersegmented neutrophils", "explanation": "Incorrect. BOTH cause hypersegmented neutrophils (>5 lobes)." },
      { "text": "Subacute combined degeneration of the spinal cord (neurologic symptoms)", "explanation": "Correct. Neurologic symptoms — particularly loss of vibratory sensation and proprioception due to demyelination of dorsal columns and lateral corticospinal tracts — occur ONLY in B12 deficiency. Folate deficiency does NOT cause neurologic disease. This is why supplementing folate alone in undiagnosed B12 deficiency is dangerous: it corrects the anemia but allows neurologic damage to progress." },
      { "text": "Elevated homocysteine", "explanation": "Incorrect. BOTH cause elevated homocysteine (both vitamins are required for the methionine synthase reaction that recycles homocysteine)." },
      { "text": "Glossitis and angular cheilitis", "explanation": "Incorrect. BOTH can cause these epithelial/mucosal findings due to impaired DNA synthesis in rapidly dividing cells." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "B12 vs Folate: NEUROLOGIC symptoms (loss of vibration/proprioception, ataxia, dementia) occur ONLY in B12 deficiency. Never give folate alone without checking B12.",
    "pdfPage": 12,
    "pdfQuote": "subacute combined degeneration"
  },
  {
    "id": 32,
    "category": "Hematology: Megaloblastic Differentiation",
    "questionText": "Which laboratory finding distinguishes B12 deficiency from folate deficiency in a patient with megaloblastic anemia?",
    "options": [
      { "text": "Elevated homocysteine", "explanation": "Incorrect. Elevated in BOTH B12 and folate deficiency." },
      { "text": "Elevated methylmalonic acid (MMA)", "explanation": "Correct. MMA is elevated ONLY in B12 deficiency. The mechanism: B12 is a cofactor for methylmalonyl-CoA mutase (converts methylmalonyl-CoA → succinyl-CoA). When B12 is deficient, methylmalonyl-CoA accumulates and is converted to MMA. Folate is NOT involved in this pathway, so MMA stays normal in folate deficiency." },
      { "text": "Decreased haptoglobin", "explanation": "Incorrect. Haptoglobin is a marker of intravascular hemolysis, not specific to B12/folate deficiency." },
      { "text": "MCV >100 fL", "explanation": "Incorrect. Macrocytosis occurs in both." },
      { "text": "Hypersegmented neutrophils", "explanation": "Incorrect. Present in both." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "MMA elevated = B12 deficiency. MMA normal + homocysteine elevated = folate deficiency. Both cause macrocytosis and hypersegmented PMNs.",
    "pdfPage": 11,
    "pdfQuote": "methylmalonic acid"
  },
  {
    "id": 33,
    "category": "Hematology: B12 Deficiency Causes",
    "questionText": "Which of the following is the most common cause of vitamin B12 deficiency in Western adults?",
    "options": [
      { "text": "Inadequate dietary intake (strict vegan diet)", "explanation": "Incorrect. While vegans are at risk, dietary deficiency is much less common than autoimmune causes in Western adults." },
      { "text": "Pernicious anemia (autoimmune destruction of parietal cells)", "explanation": "Correct. Pernicious anemia is the most common cause of B12 deficiency. Autoantibodies target either parietal cells (producing intrinsic factor) or intrinsic factor itself, preventing B12 absorption in the terminal ileum. Associated with other autoimmune diseases and atrophic gastritis (risk for gastric cancer)." },
      { "text": "Diphyllobothrium latum (fish tapeworm)", "explanation": "Incorrect. This causes B12 deficiency but is a rare cause limited to people who eat raw freshwater fish." },
      { "text": "Crohn disease affecting the terminal ileum", "explanation": "Incorrect. This can cause B12 deficiency but is much less common than pernicious anemia." },
      { "text": "Chronic pancreatitis", "explanation": "Incorrect. Pancreatic insufficiency can rarely impair B12 release from R-binder, but is an uncommon cause." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Pernicious anemia = autoimmune destruction of parietal cells (or intrinsic factor) = #1 cause of B12 deficiency in Western adults.",
    "pdfPage": 10,
    "pdfQuote": "pernicious anemia"
  },
  {
    "id": 34,
    "category": "Hematology: Hemolytic Anemia Classification",
    "questionText": "Hemolytic anemias are classified as INTRINSIC (intracorpuscular) or EXTRINSIC (extracorpuscular). Which of the following is an EXTRINSIC hemolytic anemia?",
    "options": [
      { "text": "Sickle cell disease", "explanation": "Incorrect. Sickle cell disease is INTRINSIC — the defect is in the hemoglobin molecule itself." },
      { "text": "Hereditary spherocytosis", "explanation": "Incorrect. HS is INTRINSIC — the defect is in the RBC membrane proteins (spectrin, ankyrin, band 3)." },
      { "text": "G6PD deficiency", "explanation": "Incorrect. G6PD deficiency is INTRINSIC — an enzyme defect within the RBC." },
      { "text": "Autoimmune hemolytic anemia", "explanation": "Correct. AIHA is EXTRINSIC — the RBC itself is normal, but circulating antibodies (warm IgG or cold IgM) attack it from outside. Other extrinsic causes: microangiopathic hemolysis (TTP, HUS, DIC), mechanical (prosthetic valve), and infections (malaria, babesiosis)." },
      { "text": "Paroxysmal nocturnal hemoglobinuria", "explanation": "Incorrect. PNH is INTRINSIC — PIGA mutation causes loss of GPI-anchored complement inhibitors (CD55, CD59), making cells susceptible to complement-mediated destruction." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Intrinsic hemolysis = defect IN the cell (HS, G6PD, PK, SC, thal, PNH). Extrinsic = attack FROM OUTSIDE (AIHA, MAHA, mechanical, infection).",
    "pdfPage": 25,
    "pdfQuote": "intrinsic and extrinsic hemolytic"
  },
  {
    "id": 35,
    "category": "Hematology: AIHA Differentiation",
    "questionText": "Warm autoimmune hemolytic anemia and cold autoimmune hemolytic anemia differ by antibody class. Which is correct?",
    "options": [
      { "text": "Warm AIHA = IgM; Cold AIHA = IgG", "explanation": "Incorrect. This is reversed." },
      { "text": "Warm AIHA = IgG; Cold AIHA = IgM", "explanation": "Correct. Warm AIHA: IgG antibodies bind at body temperature, RBCs are opsonized and consumed in the SPLEEN (extravascular hemolysis); associated with SLE, CLL, drugs (methyldopa, penicillin). Cold AIHA: IgM antibodies bind at cold temperatures, fix complement, cause intravascular hemolysis; associated with Mycoplasma pneumoniae and EBV infections (post-infectious cold agglutinin disease)." },
      { "text": "Both are IgG", "explanation": "Incorrect. Cold AIHA is classically IgM." },
      { "text": "Both are IgM", "explanation": "Incorrect. Warm AIHA is classically IgG." },
      { "text": "Warm AIHA is non-immune mediated", "explanation": "Incorrect. Both are immune-mediated (autoimmune)." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Warm = WAIHA = IgG, splenic destruction (SLE, CLL, drugs). Cold = CAIHA = IgM, complement-mediated (Mycoplasma, EBV).",
    "pdfPage": 32,
    "pdfQuote": "warm... cold autoimmune"
  },
  {
    "id": 36,
    "category": "Hematology: Direct vs Indirect Coombs",
    "questionText": "What does a POSITIVE direct Coombs test (direct antiglobulin test, DAT) indicate?",
    "options": [
      { "text": "Antibodies are present in the patient's serum (not yet bound to RBCs)", "explanation": "Incorrect. This describes the INDIRECT Coombs test, used in pre-transfusion antibody screening and pregnancy/Rh workup." },
      { "text": "Antibodies are already coating the patient's RBCs", "explanation": "Correct. The direct Coombs adds anti-IgG/anti-C3 reagent to the patient's washed RBCs. Agglutination indicates antibodies are already bound to the RBC surface, confirming immune-mediated hemolysis (warm AIHA, cold AIHA, drug-induced, hemolytic disease of newborn)." },
      { "text": "The patient is iron deficient", "explanation": "Incorrect. Coombs has no role in iron deficiency workup." },
      { "text": "The patient has hereditary spherocytosis", "explanation": "Incorrect. HS shows spherocytes but Coombs is NEGATIVE (the defect is intrinsic, not antibody-mediated). This is a key way to distinguish HS from AIHA, since both show spherocytes." },
      { "text": "The RBC membrane lacks GPI-anchored proteins", "explanation": "Incorrect. This describes PNH, diagnosed by flow cytometry for CD55/CD59, not by Coombs." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "DIRECT Coombs (DAT) = antibodies ON the patient's RBCs (AIHA, drug-induced, HDN). INDIRECT Coombs = antibodies in serum (used for pretransfusion, Rh screening).",
    "pdfPage": 33,
    "pdfQuote": "direct Coombs"
  },
  {
    "id": 37,
    "category": "Hematology: Hereditary Spherocytosis vs AIHA",
    "questionText": "Both hereditary spherocytosis (HS) and warm autoimmune hemolytic anemia (WAIHA) show spherocytes on smear. What is the single best test to distinguish them?",
    "options": [
      { "text": "MCV", "explanation": "Incorrect. Both can have small MCV due to RBC volume loss; MCHC is more useful (elevated in HS) but still not definitive." },
      { "text": "Direct Coombs test", "explanation": "Correct. WAIHA: Coombs POSITIVE (IgG-coated RBCs). HS: Coombs NEGATIVE (the defect is intrinsic — spectrin/ankyrin/band 3 deficiency, not antibody mediated). The Coombs test is the single most useful discriminator." },
      { "text": "Reticulocyte count", "explanation": "Incorrect. Both show reticulocytosis." },
      { "text": "LDH", "explanation": "Incorrect. Both show elevated LDH from hemolysis." },
      { "text": "Bilirubin", "explanation": "Incorrect. Both show elevated indirect bilirubin." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Spherocytes + POSITIVE Coombs = WAIHA. Spherocytes + NEGATIVE Coombs = HS (also look at osmotic fragility/EMA binding test).",
    "pdfPage": 28,
    "pdfQuote": "spherocytosis"
  },
  {
    "id": 38,
    "category": "Hematology: G6PD Deficiency",
    "questionText": "A young man of African descent develops sudden hemolytic anemia after starting trimethoprim-sulfamethoxazole. Peripheral smear shows BITE CELLS and HEINZ BODIES. Which enzyme is deficient?",
    "options": [
      { "text": "Pyruvate kinase", "explanation": "Incorrect. PK deficiency causes chronic hemolytic anemia from birth without drug triggers; smear shows echinocytes." },
      { "text": "Glucose-6-phosphate dehydrogenase (G6PD)", "explanation": "Correct. G6PD deficiency (X-linked recessive) impairs NADPH production, leaving RBCs unable to detoxify oxidative stress. Triggers: sulfa drugs, dapsone, primaquine, nitrofurantoin, fava beans, infection, DKA. Oxidized hemoglobin precipitates as HEINZ BODIES; splenic macrophages 'bite out' the precipitates leaving BITE CELLS." },
      { "text": "Hexokinase", "explanation": "Incorrect. Hexokinase deficiency is rare and not the classic 'drug-induced hemolysis' enzyme." },
      { "text": "Spectrin", "explanation": "Incorrect. Spectrin deficiency causes hereditary spherocytosis." },
      { "text": "Glucose-6-phosphatase", "explanation": "Incorrect. G6Pase deficiency causes von Gierke disease (glycogen storage disease type I), not hemolytic anemia." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "G6PD deficiency: oxidative trigger (sulfa, primaquine, fava bean, infection) → Heinz bodies + bite cells. X-linked, most severe in Mediterranean variant.",
    "pdfPage": 30,
    "pdfQuote": "G6PD"
  },
  {
    "id": 39,
    "category": "Hematology: Intrinsic Hemolytic Anemias",
    "questionText": "Which of the following describes pyruvate kinase (PK) deficiency?",
    "options": [
      { "text": "X-linked recessive; episodic hemolysis after oxidative stress", "explanation": "Incorrect. This describes G6PD deficiency." },
      { "text": "Autosomal recessive; chronic hemolytic anemia from birth due to impaired ATP production in RBCs", "explanation": "Correct. PK deficiency (autosomal recessive) impairs the final step of glycolysis, reducing ATP production. Since RBCs have no mitochondria, they depend entirely on glycolysis for ATP — leading to chronic hemolytic anemia present from birth/infancy. Smear shows ECHINOCYTES (burr cells)." },
      { "text": "Autosomal dominant; spherocytes; positive osmotic fragility test", "explanation": "Incorrect. This describes hereditary spherocytosis." },
      { "text": "Acquired; PIGA mutation; CD55/CD59 deficiency", "explanation": "Incorrect. This describes PNH." },
      { "text": "Autoimmune destruction triggered by Mycoplasma pneumoniae", "explanation": "Incorrect. This describes cold AIHA." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "PK deficiency = autosomal recessive glycolysis defect → chronic hemolysis from birth → echinocytes/burr cells on smear.",
    "pdfPage": 30,
    "pdfQuote": "pyruvate kinase"
  },
  {
    "id": 40,
    "category": "Hematology: PNH",
    "questionText": "A patient presents with dark urine in the morning, intravascular hemolysis, pancytopenia, and venous thrombosis (Budd-Chiari syndrome). Flow cytometry shows absence of CD55 and CD59. What is the diagnosis?",
    "options": [
      { "text": "Hereditary spherocytosis", "explanation": "Incorrect. HS does not cause intravascular hemolysis or CD55/CD59 loss." },
      { "text": "Paroxysmal nocturnal hemoglobinuria", "explanation": "Correct. PNH is an acquired hematopoietic stem cell mutation in the PIGA gene, which produces the GPI anchor for membrane proteins including the complement inhibitors CD55 and CD59. Without these inhibitors, RBCs are destroyed by complement, causing intravascular hemolysis (worse at night/early morning when respiratory acidosis activates complement). Classic triad: hemolytic anemia, pancytopenia, venous thrombosis (especially hepatic veins → Budd-Chiari). Treat with eculizumab." },
      { "text": "G6PD deficiency", "explanation": "Incorrect. G6PD causes episodic hemolysis after oxidative triggers, not the chronic intravascular pattern with thrombosis." },
      { "text": "Warm autoimmune hemolytic anemia", "explanation": "Incorrect. WAIHA is extravascular and Coombs-positive; PNH is intravascular and CD55/CD59 negative on flow." },
      { "text": "Sickle cell disease", "explanation": "Incorrect. Sickle cell shows characteristic sickled RBCs and a different presentation." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "PNH triad: intravascular hemolysis (morning hemoglobinuria) + pancytopenia + venous thrombosis. Loss of CD55/CD59 on flow. Treat with eculizumab.",
    "pdfPage": 31,
    "pdfQuote": "paroxysmal nocturnal hemoglobinuria"
  },
  {
    "id": 41,
    "category": "Hematology: Sickle Cell Disease vs Trait",
    "questionText": "Which is true of sickle cell TRAIT (HbAS) compared to sickle cell DISEASE (HbSS)?",
    "options": [
      { "text": "Trait causes severe chronic hemolytic anemia", "explanation": "Incorrect. Patients with trait are typically asymptomatic with normal hemoglobin levels." },
      { "text": "Trait causes splenic infarction and autosplenectomy", "explanation": "Incorrect. These are complications of sickle cell DISEASE, not trait." },
      { "text": "Trait is typically asymptomatic but can cause renal medullary issues (hematuria, isosthenuria)", "explanation": "Correct. Sickle trait (HbAS) heterozygotes are largely asymptomatic. However, the renal medulla's hypoxic, hypertonic, and acidic environment can still promote local sickling, causing painless hematuria and impaired urinary concentrating ability (isosthenuria). Rarely, exertion at high altitude can trigger vaso-occlusive episodes." },
      { "text": "Trait shows HbS predominance on electrophoresis (>50%)", "explanation": "Incorrect. Trait shows HbA > HbS (typically ~60:40 HbA:HbS). Disease shows HbS predominant." },
      { "text": "Trait requires hydroxyurea therapy", "explanation": "Incorrect. Hydroxyurea is for sickle cell DISEASE (to increase HbF and reduce vaso-occlusive crises)." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Sickle trait (HbAS): mostly asymptomatic, HbA predominant on EP, but watch for painless hematuria and isosthenuria due to renal medullary sickling.",
    "pdfPage": 40,
    "pdfQuote": "sickle cell trait"
  },
  {
    "id": 42,
    "category": "Hematology: Hemolytic Anemia Differentiation",
    "questionText": "Which of the following indicates INTRAVASCULAR hemolysis rather than extravascular hemolysis?",
    "options": [
      { "text": "Splenomegaly with extravascular RBC destruction", "explanation": "Incorrect. This describes extravascular hemolysis (HS, WAIHA)." },
      { "text": "Decreased haptoglobin and hemoglobinuria", "explanation": "Correct. Intravascular hemolysis releases free hemoglobin into the plasma. Haptoglobin binds the free Hb and is consumed (LOW haptoglobin). Once haptoglobin is saturated, free Hb is filtered into urine (HEMOGLOBINURIA — red/cola-colored urine without RBCs on micro). Classic causes: PNH, mechanical (prosthetic valve), microangiopathic (TTP, HUS, DIC), cold AIHA, malaria, transfusion reactions." },
      { "text": "Indirect hyperbilirubinemia only", "explanation": "Incorrect. Both intra- and extravascular hemolysis raise indirect bilirubin." },
      { "text": "Elevated LDH only", "explanation": "Incorrect. LDH is elevated in both types of hemolysis." },
      { "text": "Reticulocytosis only", "explanation": "Incorrect. Reticulocytosis occurs in both." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Intravascular hemolysis = LOW haptoglobin + HEMOGLOBINURIA + hemosiderinuria. Extravascular = splenomegaly + indirect hyperbilirubinemia (haptoglobin only mildly low).",
    "pdfPage": 26,
    "pdfQuote": "intravascular hemolysis... haptoglobin"
  },
  {
    "id": 43,
    "category": "Hematology: MAHA Differentiation",
    "questionText": "Microangiopathic hemolytic anemia (MAHA) shows SCHISTOCYTES on smear. Which condition is caused by ADAMTS13 deficiency leading to large vWF multimers and platelet microthrombi?",
    "options": [
      { "text": "DIC", "explanation": "Incorrect. DIC is widespread activation of coagulation with consumption of factors and platelets; not an ADAMTS13 defect." },
      { "text": "HUS (typical, Shiga toxin-associated)", "explanation": "Incorrect. Typical HUS is caused by Shiga toxin from EHEC (O157:H7) damaging endothelium, particularly in children with bloody diarrhea." },
      { "text": "TTP (thrombotic thrombocytopenic purpura)", "explanation": "Correct. TTP is caused by deficiency of ADAMTS13 (a metalloprotease that cleaves ultra-large von Willebrand factor multimers). Without it, vWF multimers accumulate and cause platelet aggregation/microthrombi in small vessels. Classic pentad: thrombocytopenia, MAHA, fever, neurologic symptoms, renal dysfunction (often incomplete). Treat with plasma exchange." },
      { "text": "Hereditary spherocytosis", "explanation": "Incorrect. HS is an intrinsic membrane defect, not microangiopathic." },
      { "text": "G6PD deficiency", "explanation": "Incorrect. G6PD causes oxidative hemolysis (Heinz bodies, bite cells), not schistocytes." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "TTP = ADAMTS13 deficiency → large vWF multimers → platelet microthrombi. Pentad: thrombocytopenia, MAHA, fever, neuro, renal. Plasma exchange.",
    "pdfPage": 36,
    "pdfQuote": "ADAMTS13"
  },
  {
    "id": 44,
    "category": "Hematology: HUS vs TTP",
    "questionText": "A 5-year-old develops bloody diarrhea after eating at a fair, then 1 week later presents with renal failure, thrombocytopenia, and schistocytes. Which is the most likely diagnosis?",
    "options": [
      { "text": "TTP", "explanation": "Incorrect. TTP is more common in adults and typically has prominent neurologic symptoms rather than predominantly renal failure." },
      { "text": "HUS (Shiga toxin-mediated)", "explanation": "Correct. The classic vignette: child + bloody diarrhea (often from E. coli O157:H7 EHEC, undercooked ground beef or unpasteurized juice) + later triad of MAHA + thrombocytopenia + acute KIDNEY injury. Shiga toxin damages endothelium primarily in the renal microvasculature. Predominantly RENAL > neuro is the key distinction from TTP." },
      { "text": "DIC", "explanation": "Incorrect. DIC would show abnormal coagulation labs (low fibrinogen, elevated D-dimer, prolonged PT/PTT)." },
      { "text": "ITP", "explanation": "Incorrect. ITP causes isolated thrombocytopenia without hemolysis or renal failure." },
      { "text": "Pernicious anemia", "explanation": "Incorrect. PA causes megaloblastic anemia, not MAHA with renal failure." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "HUS: kids + bloody diarrhea (EHEC) → MAHA + thrombocytopenia + AKI. Mostly RENAL. TTP: adults + neurologic predominant.",
    "pdfPage": 37,
    "pdfQuote": "HUS"
  },
  {
    "id": 45,
    "category": "Hematology: Smear Findings Differentiation",
    "questionText": "Which RBC smear finding is correctly matched to its disease?",
    "options": [
      { "text": "Heinz bodies — pernicious anemia", "explanation": "Incorrect. Heinz bodies (denatured hemoglobin precipitates) are seen in G6PD deficiency, not pernicious anemia." },
      { "text": "Schistocytes — TTP, HUS, DIC, mechanical hemolysis", "explanation": "Correct. Schistocytes (fragmented helmet/triangle-shaped RBCs) are produced by mechanical shearing in microangiopathic hemolytic anemia (TTP, HUS, DIC, HELLP) or by mechanical destruction (prosthetic heart valve, malignant hypertension)." },
      { "text": "Howell-Jolly bodies — iron deficiency", "explanation": "Incorrect. Howell-Jolly bodies (nuclear remnants) indicate functional asplenia (sickle cell with autosplenectomy, post-splenectomy)." },
      { "text": "Basophilic stippling — folate deficiency", "explanation": "Incorrect. Basophilic stippling is classic for lead poisoning." },
      { "text": "Target cells — autoimmune hemolytic anemia", "explanation": "Incorrect. Target cells appear in thalassemia, HbC disease, liver disease, and asplenia — not AIHA." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Schistocytes = MAHA (TTP/HUS/DIC) or mechanical hemolysis. The fragmentation pattern is pathognomonic.",
    "pdfPage": 35,
    "pdfQuote": "schistocytes"
  },
  {
    "id": 46,
    "category": "Hematology: HbC Disease",
    "questionText": "An African-American patient has a chronic mild hemolytic anemia. Peripheral smear shows TARGET CELLS and crystalline INCLUSIONS in RBCs. Hemoglobin electrophoresis shows HbC only. Which is the diagnosis?",
    "options": [
      { "text": "Sickle cell disease (HbSS)", "explanation": "Incorrect. Sickle cell would show HbS predominance and sickled cells, not HbC crystals." },
      { "text": "HbC disease (homozygous HbC)", "explanation": "Correct. HbC disease is a less severe hemoglobinopathy caused by a glutamate-to-lysine substitution at position 6 of beta-globin (vs glutamate-to-valine in HbS). It produces mild hemolytic anemia with target cells and characteristic intracellular HbC crystals. HbSC (compound heterozygous) is more severe than HbC alone but less severe than HbSS." },
      { "text": "Beta-thalassemia minor", "explanation": "Incorrect. Beta-thal minor shows elevated HbA2 on electrophoresis, not HbC." },
      { "text": "Alpha-thalassemia trait", "explanation": "Incorrect. Alpha-thal shows normal electrophoresis." },
      { "text": "Hereditary spherocytosis", "explanation": "Incorrect. HS shows spherocytes, not target cells with crystals." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "HbC disease: glu→lys at β6 (vs glu→val in HbS). Mild hemolysis + target cells + HbC crystals on smear.",
    "pdfPage": 41,
    "pdfQuote": "HbC"
  },
  {
    "id": 47,
    "category": "Hematology: Aplastic Anemia",
    "questionText": "Which of the following anemias is characterized by PANCYTOPENIA with a HYPOCELLULAR bone marrow (no infiltrate, no marrow fibrosis)?",
    "options": [
      { "text": "Iron deficiency anemia", "explanation": "Incorrect. IDA causes isolated anemia, not pancytopenia." },
      { "text": "B12 deficiency", "explanation": "Incorrect. Severe B12 deficiency can cause pancytopenia, but the marrow is HYPERCELLULAR (megaloblastic) with ineffective hematopoiesis." },
      { "text": "Aplastic anemia", "explanation": "Correct. Aplastic anemia is bone marrow failure producing pancytopenia with a markedly HYPOCELLULAR marrow (fatty replacement). Causes: idiopathic, drugs (chloramphenicol, carbamazepine, sulfa), benzene, radiation, parvovirus B19 (pure red cell aplasia), viral hepatitis. Treatment: immunosuppression (ATG, cyclosporine), allogeneic stem cell transplant." },
      { "text": "Myelodysplastic syndrome", "explanation": "Incorrect. MDS shows pancytopenia but the marrow is typically HYPERCELLULAR with dysplastic morphology." },
      { "text": "Sickle cell disease", "explanation": "Incorrect. Sickle cell causes hemolytic anemia with normal or hypercellular marrow (compensating)." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Aplastic anemia = PANCYTOPENIA + HYPOcellular marrow (fatty). MDS = pancytopenia + HYPERcellular marrow (dysplastic). Megaloblastic = pancytopenia + hypercellular (ineffective).",
    "pdfPage": 23,
    "pdfQuote": "aplastic anemia"
  },
  {
    "id": 48,
    "category": "Hematology: Bilirubin in Hemolysis",
    "questionText": "Hemolytic anemias produce hyperbilirubinemia. Which fraction is elevated?",
    "options": [
      { "text": "Direct (conjugated) bilirubin only", "explanation": "Incorrect. Conjugated bilirubin elevation indicates hepatic or post-hepatic obstruction (cholestasis, hepatitis)." },
      { "text": "Indirect (unconjugated) bilirubin", "explanation": "Correct. Hemolysis releases heme → unconjugated bilirubin overwhelms the liver's conjugation capacity → INDIRECT (unconjugated) hyperbilirubinemia. Classic pattern: indirect bili up, direct bili normal, no urinary bilirubin (unconjugated bili is bound to albumin and not filtered). Urobilinogen in urine may be increased." },
      { "text": "Both direct and indirect equally", "explanation": "Incorrect. The pattern is predominantly INDIRECT in pure hemolysis." },
      { "text": "Neither — bilirubin is normal in hemolysis", "explanation": "Incorrect. Hemolysis classically elevates bilirubin." },
      { "text": "Bilirubin levels do not change in hemolysis", "explanation": "Incorrect. They do change — they rise (indirect)." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Hemolysis → INDIRECT (unconjugated) hyperbilirubinemia. Direct bili and urinary bili are normal. Urobilinogen may rise.",
    "pdfPage": 26,
    "pdfQuote": "indirect bilirubin"
  },
  {
    "id": 49,
    "category": "Hematology: Anemia of Pregnancy",
    "questionText": "Which megaloblastic anemia risk is specifically increased in pregnancy?",
    "options": [
      { "text": "B12 deficiency from impaired absorption", "explanation": "Incorrect. Pregnancy does not classically impair B12 absorption; B12 stores last years." },
      { "text": "Folate deficiency from increased demand", "explanation": "Correct. Folate stores are small (only ~3-month supply) and rapidly dividing fetal/placental cells massively increase demand. Folate deficiency in pregnancy → megaloblastic anemia AND neural tube defects in the fetus (spina bifida, anencephaly). Hence universal folate supplementation (400-800 mcg/day) before/during pregnancy is standard of care." },
      { "text": "Iron deficiency only", "explanation": "Incorrect. Iron deficiency is common in pregnancy but is microcytic, not megaloblastic." },
      { "text": "Aplastic anemia", "explanation": "Incorrect. Pregnancy does not specifically increase aplastic anemia risk." },
      { "text": "G6PD deficiency", "explanation": "Incorrect. G6PD deficiency is genetic; pregnancy does not cause it." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Pregnancy = high risk for FOLATE deficiency (small stores + high demand). Folate supplementation pre-pregnancy prevents NTDs.",
    "pdfPage": 9,
    "pdfQuote": "folate"
  },
  {
    "id": 50,
    "category": "Hematology: Hereditary Spherocytosis",
    "questionText": "Hereditary spherocytosis is caused by a defect in which class of RBC proteins?",
    "options": [
      { "text": "Glycolytic enzymes (hexokinase, pyruvate kinase)", "explanation": "Incorrect. These cause PK deficiency and similar enzymopathies, not HS." },
      { "text": "Membrane cytoskeletal proteins (spectrin, ankyrin, band 3, protein 4.2)", "explanation": "Correct. HS is caused by mutations in proteins that link the RBC membrane to the underlying cytoskeleton — most commonly ankyrin, followed by spectrin, band 3, and protein 4.2. Without these proper anchors, the membrane buds off, RBCs lose surface area, become spherical, and are trapped/destroyed in the spleen. Diagnosed by osmotic fragility test or EMA-binding flow cytometry. Treat with splenectomy in severe cases." },
      { "text": "Hemoglobin alpha chains", "explanation": "Incorrect. Alpha-chain defects cause alpha-thalassemia." },
      { "text": "Hemoglobin beta chains", "explanation": "Incorrect. Beta-chain defects cause sickle cell or beta-thalassemia." },
      { "text": "GPI-anchored complement inhibitors (CD55, CD59)", "explanation": "Incorrect. These are deficient in PNH, not HS." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "HS = membrane cytoskeleton defect (spectrin, ankyrin, band 3, protein 4.2) → spherocytes → splenic destruction. Treat with splenectomy if severe.",
    "pdfPage": 28,
    "pdfQuote": "spherocytosis"
  }
];

window.Test_L152 = Test_L152;
