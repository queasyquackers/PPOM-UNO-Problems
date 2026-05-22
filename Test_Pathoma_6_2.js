// Thinking Process:
// 1. High-Yield Concept: Acute leukemia = neoplastic blast proliferation (>20% in marrow), subclassified into AML vs ALL by MPO/Auer rod vs TDT and surface markers, with specific cytogenetic and clinical associations (t(15;17) APL, t(12;21) and t(9;22) B-ALL, monocytic gum infiltration, megakaryoblastic in Down syndrome <5).
// 2. The "Trap": Confusing AML lineage subtypes with each other (megakaryoblastic vs monoblastic vs APL); confusing the two Down syndrome leukemias (age <5 megakaryoblastic vs >5 ALL); confusing t(15;17) RAR disruption with other translocations; confusing Auer rods (AML) with TDT (ALL).
// 3. Key Distractor: t(9;22) BCR-ABL â€” students reflexively map this to CML, but it can also drive a Ph+ B-ALL in adults with poor prognosis.
// 4. Vignette Strategy: Use age, surface marker panels, gum involvement, mediastinal mass, prior alkylator exposure, and DIC labs to force students to reason from features â†’ subtype rather than buzzword matching.
//
// PDF Mapping Check: Missing (newly added)
// PDF Filename: 6.2 acute leukemia.pdf
// Mapping Key: Pathoma-Acute Leukemia (6.2)
// Status: Verified â€” added to scripts/pdf_mapping.js in this change.

window.Test_Pathoma_6_2 = [
  {
    "id": 1,
    "category": "Hematology: Acute Leukemia Diagnosis",
    "questionText": "Acute leukemias are defined by a disruption in the normal stepwise maturation of hematopoietic precursors, allowing immature cells to pile up in the bone marrow. What minimum percentage of blasts in the bone marrow is required to meet the strict definition of an acute leukemia rather than a myelodysplastic process?",
    "options": [
      {
        "text": "Greater than 20% blasts in the bone marrow",
        "explanation": "Correct. The lecturer emphasized that 1â€“2% blasts is the normal background in marrow and that >20% blasts is the strict threshold defining acute leukemia. Below that, increased but <20% blasts in a hypercellular marrow with peripheral cytopenias falls into the myelodysplastic syndrome category, which is a precursor lesion that can transform into acute leukemia."
      },
      {
        "text": "Greater than 10% lymphocytes circulating in the peripheral blood",
        "explanation": "Incorrect. Peripheral lymphocyte percentage is not the defining criterion for acute leukemia and is not mentioned in the lecture as a diagnostic threshold. This would be the correct answer if the question concerned a chronic lymphoproliferative process where mature circulating lymphocytes are the predominant abnormal cell population."
      },
      {
        "text": "Greater than 5% myeloblasts isolated in the peripheral blood smear",
        "explanation": "Incorrect. A small fraction of blasts may appear normally or in reactive marrow conditions, and the lecturer explicitly cited 1â€“2% as physiologic. This would be the correct answer if the question concerned an early threshold for further investigation of dysplastic marrow rather than the diagnostic criterion for acute leukemia itself."
      },
      {
        "text": "Greater than 50% of nucleated cells in marrow expressing CD34",
        "explanation": "Incorrect. CD34 expression marks hematopoietic stem cells generally and is not the defining diagnostic criterion for acute leukemia given in the lecture. This would be the correct answer if the question were about identifying hematopoietic stem cells for transplantation, not establishing the diagnosis of acute leukemia."
      },
      {
        "text": "Any detectable Auer rods identified within the cytoplasm of blastic cells",
        "explanation": "Incorrect. Although Auer rods identify AML, their presence alone does not satisfy the quantitative blast threshold required to define an acute leukemia. This would be the correct answer if the question asked how to distinguish a myeloblast from a lymphoblast rather than how to define acute leukemia itself."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: >20% blasts in the bone marrow is the strict definition of acute leukemia; 1â€“2% is normal background, and increased blasts <20% falls into myelodysplastic syndrome.",
    "pdfPage": 1,
    "pdfQuote": "greater than 20% blasts in the bone marrow"
  },
  {
    "id": 2,
    "category": "Hematology: Acute Leukemia Pathophysiology",
    "questionText": "In a patient with newly diagnosed acute leukemia, the explosive expansion of blasts in the bone marrow produces the classic acute presentation with fatigue, bleeding, and recurrent infection. Which underlying mechanism best explains how a single neoplastic process produces this triad of symptoms?",
    "options": [
      {
        "text": "Autoimmune destruction of mature myeloid and lymphoid elements by aberrant antibodies",
        "explanation": "Incorrect. The lecturer described the mechanism as physical replacement of marrow by blasts, not autoantibody-mediated destruction. This would be the correct answer if the question described a chronic lymphocytic leukemia patient developing autoimmune hemolytic anemia from antibodies made by neoplastic B cells."
      },
      {
        "text": "Direct cytotoxic invasion of peripheral organs by blasts via the lymphatic system",
        "explanation": "Incorrect. Although blasts do enter peripheral blood and may infiltrate tissues, the lecturer explained that the cytopenia triad arises from intramedullary crowding rather than from peripheral tissue invasion. This would be the correct answer if the patient had gum infiltration causing localized tissue dysfunction in acute monocytic leukemia."
      },
      {
        "text": "Crowding of the bone marrow by accumulating blasts that displaces normal hematopoiesis",
        "explanation": "Correct. The lecturer emphasized that blasts pile up in the marrow because they lose the ability to mature, and as they accumulate they crowd out normal red cell, platelet, and granulocyte production. Loss of erythropoiesis produces anemia and hypoxic symptoms, loss of megakaryopoiesis produces thrombocytopenia and bleeding, and loss of granulopoiesis produces neutropenia and infection â€” explaining the entire acute presentation from one mechanism."
      },
      {
        "text": "Cytokine-driven peripheral apoptosis of circulating erythrocytes and platelets by tumor secretion",
        "explanation": "Incorrect. The lecturer did not describe a cytokine-mediated peripheral destruction mechanism for acute leukemia and instead emphasized intramedullary crowding. This would be the correct answer if the question concerned Hodgkin lymphoma's reactive B symptoms, where Reed-Sternberg cells produce cytokines that drive systemic inflammation rather than displacing marrow."
      },
      {
        "text": "Disseminated intravascular coagulation consuming red cells, platelets, and clotting factors",
        "explanation": "Incorrect. DIC can complicate acute promyelocytic leukemia but is not the unifying mechanism of cytopenias in all acute leukemias. This would be the correct answer if the question specifically described an APL patient with bleeding and laboratory evidence of consumptive coagulopathy from Auer-rodâ€“driven thrombin activation."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Acute leukemia symptoms (anemia, bleeding, infection) reflect bone marrow crowding by blasts that displaces normal red cell, platelet, and granulocyte production.",
    "pdfPage": 1,
    "pdfQuote": "blasts will crowd out normal hematopoiesis"
  },
  {
    "id": 3,
    "category": "Hematology: Blast Identification",
    "questionText": "A pathologist examining a bone marrow aspirate identifies sheets of large, immature cells with scant cytoplasm and a single prominent punched-out nucleolus, but cannot yet determine whether they are lymphoblasts or myeloblasts. Which marker, when found in the nucleus of the neoplastic cells, would most specifically identify them as lymphoid in origin?",
    "options": [
      {
        "text": "Myeloperoxidase, an enzyme commonly visualized as elongated cytoplasmic crystalline aggregates",
        "explanation": "Incorrect. Myeloperoxidase is the hallmark marker of myeloid lineage and produces the Auer rod when it crystallizes, identifying AML rather than ALL. This would be the correct answer if the cells in question showed cytoplasmic crystalline rods on staining, indicating a myeloblast rather than a lymphoblast."
      },
      {
        "text": "CD20, a B-cell surface marker often used to monitor response to anti-B-cell therapies",
        "explanation": "Incorrect. CD20 is a B-cell surface marker but the lecturer specifically identified TDT â€” a nuclear DNA polymerase â€” as the unique marker that defines a lymphoblast regardless of B or T lineage. This would be the correct answer if the question concerned a mature B-cell neoplasm or distinguishing B-ALL from T-ALL by surface phenotype rather than identifying any blast as lymphoid."
      },
      {
        "text": "Tartrate-resistant acid phosphatase, an enzyme that resists dephosphorylation in acidic conditions",
        "explanation": "Incorrect. TRAP is the marker associated with hairy cell leukemia, a chronic B-cell neoplasm, not a marker of acute lymphoblastic lineage. This would be the correct answer if the question described a patient with splenomegaly, dry tap on marrow aspiration, and cells with hairy cytoplasmic projections."
      },
      {
        "text": "Glycophorin A, an erythroid surface marker expressed on maturing red cell precursors",
        "explanation": "Incorrect. Glycophorin A is an erythroid marker that would identify a precursor of the red blood cell lineage, not a lymphoblast. This would be the correct answer if the question described a rare erythroblastic AML in which the proliferating blasts were of erythroid lineage."
      },
      {
        "text": "Terminal deoxynucleotidyl transferase (TDT), a DNA polymerase localized to the nucleus",
        "explanation": "Correct. The lecturer stressed that TDT is a DNA polymerase present only in the nucleus of lymphoblasts; it is absent in mature lymphocytes and in myeloid blasts, making it the most specific lineage marker for identifying any cell as lymphoid in origin. Once TDT positivity is confirmed, subsequent surface marker panels (CD10, CD19, CD20 vs CD2â€“CD8) then distinguish B-ALL from T-ALL."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: TDT is a nuclear DNA polymerase expressed only in lymphoblasts (B or T) â€” it is absent in mature lymphocytes and myeloblasts, making it the defining marker of ALL.",
    "pdfPage": 2,
    "pdfQuote": "TDT is a DNA polymerase"
  },
  {
    "id": 4,
    "category": "Hematology: AML Identification",
    "questionText": "A blood smear from a 58-year-old man with pancytopenia and circulating blasts shows large immature cells, several of which contain elongated pink crystalline structures in the cytoplasm. Which underlying intracellular content is being visualized in these structures, and what does it signify?",
    "options": [
      {
        "text": "Crystallized hemoglobin tetramers, signifying an erythroid blast lineage in marrow expansion",
        "explanation": "Incorrect. Hemoglobin does not crystallize visibly in blast cells, and the lecturer did not describe such an entity. This would be the correct answer if the cells in question represented mature red cells in conditions like hemoglobin C disease, where intracellular hemoglobin crystallization may be discussed in other contexts."
      },
      {
        "text": "Crystallized lysosomal enzymes from monoblasts, signifying acute monocytic leukemia specifically",
        "explanation": "Incorrect. Monoblastic AML is identified primarily by lineage and clinical features (gum infiltration) rather than by cytoplasmic crystalline rods. This would be the correct answer if the question described a patient with prominent gum swelling and blasts lacking Auer rods rather than the cytoplasmic crystals described here."
      },
      {
        "text": "Condensed terminal deoxynucleotidyl transferase, signifying a lymphoid origin for the blasts",
        "explanation": "Incorrect. TDT is a nuclear protein, not a cytoplasmic crystalline structure, and its presence identifies lymphoblasts rather than myeloblasts. This would be the correct answer if the question described a positive nuclear immunostain in a blast population suspected of being ALL rather than describing pink cytoplasmic rods."
      },
      {
        "text": "Aggregates of myeloperoxidase, signifying that the blasts are of myeloid lineage (AML)",
        "explanation": "Correct. The lecturer explained that myeloperoxidase normally cannot be seen on light microscopy, but it can crystallize into pink, elongated cytoplasmic structures called Auer rods. The presence of an Auer rod inside a blast definitively identifies that blast as a myeloid blast and therefore diagnoses AML rather than ALL â€” a critical distinction because treatment and prognosis differ significantly."
      },
      {
        "text": "Condensed mitochondrial cytochrome c released by blocked apoptotic machinery in the cytoplasm",
        "explanation": "Incorrect. Cytochrome c release is part of intrinsic apoptosis and is not visible as a cytoplasmic rod on light microscopy. This would be the correct answer if the question concerned the molecular events downstream of BCL-2 inhibition during normal somatic hypermutation, which has nothing to do with Auer rod identification."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Auer rods are crystallized aggregates of myeloperoxidase visible in the cytoplasm of myeloblasts â€” their presence defines AML.",
    "pdfPage": 2,
    "pdfQuote": "myeloperoxidase can sometimes crystallize"
  },
  {
    "id": 5,
    "category": "Hematology: B-ALL Surface Phenotype",
    "questionText": "A 4-year-old child has fatigue, petechiae, and a WBC of 38,000/ÂµL with circulating blasts. Flow cytometry shows the blasts are TDT-positive in the nucleus. Which surface marker pattern would most strongly support the most common subtype of ALL in this age group?",
    "options": [
      {
        "text": "CD2 positive, CD5 positive, CD7 positive, with absence of CD10 expression",
        "explanation": "Incorrect. CD2â€“CD8 expression with absent CD10 describes T-ALL, which classically presents in teenagers as a mediastinal mass and is not the most common ALL subtype in a 4-year-old. This would be the correct answer if the patient were a teenager presenting with an anterior mediastinal mass and superior vena cavaâ€“type symptoms rather than a young child with marrow failure."
      },
      {
        "text": "CD15 positive, CD30 positive, with absence of CD20 in the malignant population",
        "explanation": "Incorrect. CD15/CD30 positivity with absent CD20 describes the Reed-Sternberg cell of Hodgkin lymphoma, not a B-ALL blast. This would be the correct answer if the lymph node biopsy in a teenager showed a single large multilobed cell with prominent nucleoli surrounded by a reactive inflammatory infiltrate."
      },
      {
        "text": "Tartrate-resistant acid phosphatase positive cells with cytoplasmic projections on smear",
        "explanation": "Incorrect. TRAP positivity with hairy projections describes hairy cell leukemia, a mature B-cell chronic process in adults, not a pediatric B-ALL. This would be the correct answer if the patient were an older adult with splenomegaly, dry tap marrow, and lymphocytes with delicate cytoplasmic projections."
      },
      {
        "text": "Co-expression of CD5 and CD20 with smudge cells appearing on the peripheral blood smear",
        "explanation": "Incorrect. CD5/CD20 co-expression with smudge cells is characteristic of chronic lymphocytic leukemia in older adults, not a B-ALL in a pediatric patient. This would be the correct answer if the patient were an asymptomatic 70-year-old with incidental lymphocytosis and smudge cells noted on routine CBC."
      },
      {
        "text": "CD10 positive, CD19 positive, CD20 positive â€” the classic markers of B-ALL",
        "explanation": "Correct. The lecturer identified CD10, CD19, and CD20 as the classic surface markers of B-ALL, which is the most common subtype of ALL and most common in children. Recognition is high-yield because B-ALL has an excellent response to chemotherapy but requires prophylactic chemotherapy to the CSF and scrotum (sanctuary sites)."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: B-ALL is TDT+ and CD10/CD19/CD20+, presents most commonly in children, and responds well to chemotherapy with required prophylaxis to CSF and scrotum.",
    "pdfPage": 2,
    "pdfQuote": "CD10, CD19, and CD20"
  },
  {
    "id": 6,
    "category": "Hematology: ALL Sanctuary Sites",
    "questionText": "A 6-year-old boy diagnosed with B-ALL is being initiated on systemic chemotherapy. The oncology team plans prophylactic chemotherapy directed at sites that systemic agents cannot effectively reach. Which best explains why these prophylactic measures are necessary?",
    "options": [
      {
        "text": "Systemic chemotherapy cannot reach the bone marrow because the marrow stromal cells form a fibrotic barrier around the niche where leukemic blasts hide., which the lecture rejected explicitly when describing barrier biology",
        "explanation": "Incorrect. The marrow itself is well perfused and is the primary target of systemic chemotherapy. This would be the correct answer if the question concerned myelofibrosis, where bone marrow stromal collagen deposition impedes hematopoiesis and forces extramedullary blood production."
      },
      {
        "text": "Systemic chemotherapy cannot effectively cross the bloodâ€“brain barrier or the bloodâ€“testicle barrier, requiring direct delivery to the CSF and scrotum.",
        "explanation": "Correct. The lecturer explained that B-ALL responds well to chemotherapy overall, but that systemic chemotherapy does not adequately cross the bloodâ€“brain barrier or the bloodâ€“testicle barrier. Therefore prophylactic chemotherapy must be delivered directly to the CSF (intrathecal) and to the scrotum to prevent relapse in these sanctuary sites."
      },
      {
        "text": "Prophylactic radiation is required because chemotherapy uniformly induces secondary AML, prompting preemptive eradication of the marrow stem cell pool.",
        "explanation": "Incorrect. Although alkylator exposure can predispose to therapy-related AML, the lecturer's rationale for prophylactic site-directed therapy is sanctuary-site coverage, not preemptive marrow eradication. This would be the correct answer if the question concerned the secondary AML that arises after chemotherapy or radiotherapy in patients with prior dysplasia."
      },
      {
        "text": "Prophylactic chemotherapy to the lymph nodes is mandatory because circulating blasts seed nodes preferentially.",
        "explanation": "Incorrect. Lymph nodes are not described as sanctuary sites for B-ALL requiring special prophylaxis, and they are typically reached by systemic chemotherapy. This would be the correct answer if the question concerned a non-Hodgkin lymphoma involving multiple nodal stations with planned consolidative radiotherapy."
      },
      {
        "text": "Sanctuary site prophylaxis is required because the gut microbiome inactivates systemic chemotherapeutics before they reach the marrow.",
        "explanation": "Incorrect. Gut microbiome interactions with chemotherapy were not invoked in the lecture as the rationale for prophylactic therapy. This would be the correct answer if the question concerned drug metabolism by gut flora altering oral chemotherapy bioavailability, which is unrelated to sanctuary site prophylaxis."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: B-ALL requires prophylactic chemotherapy to the CSF and scrotum because systemic chemotherapy cannot effectively cross the bloodâ€“brain or bloodâ€“testicle barriers.",
    "pdfPage": 2,
    "pdfQuote": "prophylaxis to the scrotum and the CSF"
  },
  {
    "id": 7,
    "category": "Hematology: ALL Cytogenetics",
    "questionText": "Pediatric B-ALL is generally chemosensitive, but prognosis is stratified largely by cytogenetic findings. A 4-year-old with newly diagnosed B-ALL has karyotyping showing a translocation between chromosomes 12 and 21. What is the prognostic implication of this finding?",
    "options": [
      {
        "text": "Good prognosis â€” this is the most common and classically favorable B-ALL translocation in children",
        "explanation": "Correct. The lecturer specifically taught that the t(12;21) translocation is the classic cytogenetic abnormality of pediatric B-ALL and carries a good prognosis. He used the mnemonic 'twelve flipped over is twenty-one' and contrasted it with the unfavorable t(9;22), which is more common in adults and confers a poor prognosis (Ph+ ALL)."
      },
      {
        "text": "Poor prognosis â€” t(12;21) reliably predicts early CNS relapse despite intensive intrathecal prophylaxis",
        "explanation": "Incorrect. The lecturer stated that t(12;21) is the classic good-prognosis pediatric finding, not a poor-prognosis marker. This would be the correct answer if the patient had t(9;22) Ph+ ALL, which carries a poor prognosis and is more often seen in adults."
      },
      {
        "text": "Intermediate prognosis â€” outcomes depend entirely on whether the patient is over or under five years old",
        "explanation": "Incorrect. Age stratification is relevant for Down syndromeâ€“associated leukemia subtype (megakaryoblastic AML <5 vs ALL >5), but t(12;21) itself carries a good prognosis regardless of where the patient sits within the pediatric age range. This would be the correct answer if the question concerned the Down syndrome leukemia subtype split rather than t(12;21) prognosis."
      },
      {
        "text": "Equivalent prognosis to Philadelphia-chromosome positivity in B-ALL given identical signaling pathway activation",
        "explanation": "Incorrect. Philadelphia-chromosome positivity (t(9;22)) carries a distinctly worse prognosis than t(12;21) and involves a different fusion product. This would be the correct answer if the patient had a BCR-ABL fusion driving constitutive tyrosine kinase signaling in an adult-pattern B-ALL."
      },
      {
        "text": "Poor prognosis â€” the translocation activates a tyrosine kinase fusion analogous to CML's BCR-ABL gene product",
        "explanation": "Incorrect. The BCR-ABL tyrosine kinase fusion belongs to t(9;22), not t(12;21), and is the unfavorable Ph+ pattern. This would be the correct answer if the patient's karyotype showed t(9;22) producing the BCR-ABL fusion driving Ph+ ALL with poor prognosis."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: t(12;21) is the classic favorable cytogenetic finding in pediatric B-ALL; t(9;22) Ph+ ALL is the unfavorable pattern more often seen in adults.",
    "pdfPage": 2,
    "pdfQuote": "translocation between chromosomes 12 and 21"
  },
  {
    "id": 8,
    "category": "Hematology: T-ALL Presentation",
    "questionText": "A 15-year-old presents with stridor and dyspnea from an anterior mediastinal mass. Biopsy of the mass shows sheets of TDT-positive immature cells that express CD2, CD5, and CD7 but lack CD10. The malignant cells have not yet entered the peripheral blood in significant numbers. By what name should this disease be classified, and why?",
    "options": [
      {
        "text": "Acute lymphoblastic leukemia, because TDT positivity defines a leukemic process regardless of clinical distribution",
        "explanation": "Incorrect. TDT identifies cells as lymphoblasts but does not by itself dictate the leukemia vs lymphoma terminology â€” the lecturer was explicit that distribution (mass vs blood) determines that nomenclature. This would be the correct answer if the same TDT-positive blasts were predominantly circulating in the blood rather than forming a mediastinal mass."
      },
      {
        "text": "Diffuse large B-cell lymphoma, because aggressive lymphomas in young patients are typically of B-cell lineage and CD20 positive",
        "explanation": "Incorrect. DLBCL would show CD20-positive large B cells, not TDT-positive T-lineage blasts. This would be the correct answer if biopsy showed CD20+ large lymphoid cells with diffuse architecture and no follicular pattern, often in older adults rather than teenagers."
      },
      {
        "text": "Hodgkin lymphoma of nodular sclerosis subtype, because this is the classic anterior mediastinal mass in a teenager",
        "explanation": "Incorrect. Nodular sclerosis Hodgkin lymphoma also presents in young patients with mediastinal masses, but the biopsy would show Reed-Sternberg cells (CD15+, CD30+, multilobed nuclei) within broad bands of fibrosis, not TDT-positive lymphoblasts. This would be the correct answer if biopsy revealed lacunar Reed-Sternberg cells with fibrotic bands rather than sheets of TDT+ blasts."
      },
      {
        "text": "Acute lymphoblastic lymphoma, because the neoplastic lymphoblasts form a mass rather than circulate in blood",
        "explanation": "Correct. The lecturer stressed that T-ALL classically presents as a thymic mass in a teenager because T cells normally home to the thymus. Because the malignant cells form a mass instead of floating in the blood, the lecturer specifically reclassified this presentation as acute lymphoblastic LYMPHOMA â€” the suffix -oma indicating mass â€” even though the underlying cell biology is the same as leukemic T-ALL."
      },
      {
        "text": "Burkitt lymphoma, because intermediate-size CD20-positive B cells with starry-sky histology classically involve extranodal sites",
        "explanation": "Incorrect. Burkitt lymphoma is a B-cell tumor with c-MYC translocation that classically presents as a jaw mass (African) or abdominal mass (sporadic) with starry-sky histology, not a TDT-positive thymic mass. This would be the correct answer if the patient had a jaw or abdominal mass with starry-sky histology rather than a thymic mass."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: T-ALL presenting as a thymic/mediastinal mass in a teenager is classically called acute lymphoblastic LYMPHOMA because the malignant lymphoblasts form a mass rather than circulating in the blood.",
    "pdfPage": 2,
    "pdfQuote": "acute lymphoblastic lymphoma instead of leukemia"
  },
  {
    "id": 9,
    "category": "Hematology: APL Cytogenetics",
    "questionText": "Acute promyelocytic leukemia is considered a medical emergency because of a high risk of disseminated intravascular coagulation at presentation. Which specific translocation drives this disease, and what does it disrupt?",
    "options": [
      {
        "text": "t(9;22) fusing BCR and ABL, producing a constitutive tyrosine kinase that drives granulocyte overproduction",
        "explanation": "Incorrect. t(9;22) BCR-ABL is the defining translocation of CML and a poor-prognosis subset of B-ALL, not APL. This would be the correct answer if the patient presented with marked leukocytosis dominated by mature granulocytes and basophilia, characteristic of chronic myeloid leukemia."
      },
      {
        "text": "t(12;21) involving ETV6-RUNX1, the most common pediatric B-cell leukemic translocation with favorable prognosis",
        "explanation": "Incorrect. t(12;21) is the favorable pediatric B-ALL translocation, not the driver of APL. This would be the correct answer if the patient were a child with TDT+ CD10/CD19/CD20+ blasts and a good-prognosis karyotype."
      },
      {
        "text": "t(15;17) disrupting the retinoic acid receptor, blocking maturation so promyelocytes accumulate with many Auer rods",
        "explanation": "Correct. The lecturer emphasized that APL is driven by the t(15;17) translocation, which disrupts the retinoic acid receptor. Loss of functional RAR halts maturation, so promyelocytes accumulate. These promyelocytes carry numerous Auer rods, and Auer rods can activate the coagulation cascade, producing the DIC that makes APL a medical emergency."
      },
      {
        "text": "t(14;18) translocating BCL-2 to the immunoglobulin heavy chain locus, inhibiting apoptosis in germinal center cells",
        "explanation": "Incorrect. t(14;18) with BCL-2 overexpression drives follicular lymphoma by blocking apoptosis in germinal-center B cells, not APL. This would be the correct answer if the patient had painless generalized lymphadenopathy with follicle-forming small B cells lacking tingible body macrophages."
      },
      {
        "text": "t(8;14) repositioning c-MYC under the immunoglobulin heavy chain promoter, driving rapid mitotic activity, which would shift the diagnostic pathway toward a mature B-cell lymphoma entirely",
        "explanation": "Incorrect. t(8;14) drives Burkitt lymphoma by overexpressing c-MYC, producing the rapidly proliferating starry-sky tumor, not APL. This would be the correct answer if the patient had a jaw or abdominal mass with starry-sky histology and very high mitotic rate."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: APL is defined by t(15;17), which disrupts the retinoic acid receptor and blocks promyelocyte maturation; the resulting Auer-rodâ€“rich promyelocytes activate clotting and drive DIC.",
    "pdfPage": 3,
    "pdfQuote": "15-17 translocation"
  },
  {
    "id": 10,
    "category": "Hematology: APL Treatment Mechanism",
    "questionText": "A 45-year-old woman with newly diagnosed APL is started on all-trans retinoic acid (ATRA). Within days her promyelocyte count falls and circulating neutrophils begin to appear. Which mechanism best explains the response to this agent?",
    "options": [
      {
        "text": "ATRA inhibits the BCR-ABL tyrosine kinase, halting downstream proliferative signaling within neoplastic cells",
        "explanation": "Incorrect. ATRA does not inhibit BCR-ABL â€” that mechanism describes imatinib's action in CML. This would be the correct answer if the patient had been started on imatinib for chronic myeloid leukemia driven by the Philadelphia chromosome."
      },
      {
        "text": "ATRA binds the disrupted retinoic acid receptor and restores maturation, allowing promyelocytes to become neutrophils",
        "explanation": "Correct. The lecturer was explicit: ATRA, a derivative of vitamin A, binds the disrupted retinoic acid receptor produced by t(15;17). Binding restores the differentiation signal that had been lost, causing the trapped promyelocytes to mature into neutrophils. As the promyelocyte burden falls, the leukemic mass is cleared and the DIC risk resolves."
      },
      {
        "text": "ATRA selectively induces apoptosis in neoplastic B cells by inhibiting adenosine deaminase metabolism",
        "explanation": "Incorrect. Inhibition of adenosine deaminase causing toxic adenosine accumulation in neoplastic B cells is the mechanism of 2-CDA in hairy cell leukemia, not ATRA in APL. This would be the correct answer if the patient had hairy cell leukemia being treated with 2-CDA."
      },
      {
        "text": "ATRA crosslinks DNA in rapidly dividing promyelocytes, producing direct cytotoxic kill of the leukemic clone",
        "explanation": "Incorrect. ATRA is a differentiation agent, not a DNA-crosslinking cytotoxic agent. This would be the correct answer if the patient were being treated with a classical alkylating agent such as cyclophosphamide for a chemo-sensitive lymphoma."
      },
      {
        "text": "ATRA inhibits cyclin Dâ€“driven progression through the G1/S checkpoint, arresting promyelocyte cell-cycle entry, a finding outside the scope of differentiation therapy for APL described in this lecture",
        "explanation": "Incorrect. Cyclin D dysregulation drives mantle cell lymphoma through t(11;14), and ATRA does not act on that pathway. This would be the correct answer if the question concerned the mechanism of cyclin D overexpression in mantle cell lymphoma rather than APL therapy."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: ATRA treats APL by binding the disrupted retinoic acid receptor and restoring promyelocyte maturation into neutrophils, eliminating the leukemic burden.",
    "pdfPage": 3,
    "pdfQuote": "ATRA, which is all trans-retinoic acid"
  },
  {
    "id": 11,
    "category": "Hematology: Acute Monocytic Leukemia",
    "questionText": "A 62-year-old man presents to his dentist for swollen, bleeding gums that have progressively enlarged over the past six weeks. He has fatigue and easy bruising. Temperature 38.2Â°C, BP 118/72 mmHg, HR 96/min. Examination reveals diffuse hyperplastic, infiltrated gingivae with petechial bleeding and several scattered ecchymoses on his forearms. CBC shows WBC 56,000/ÂµL with circulating blasts, hemoglobin 8.2 g/dL, platelets 32,000/ÂµL. Bone marrow aspirate shows >50% blasts that lack Auer rods. Flow cytometry and chemical staining for myeloperoxidase are positive in the blast lineage. Which of the following best identifies this patient's disease?",
    "options": [
      {
        "text": "Acute lymphoblastic leukemia driven by TDT-positive lymphoblasts infiltrating the oral mucosa as an extramedullary site",
        "explanation": "Incorrect. The blasts are MPO positive, identifying them as myeloid (AML) rather than lymphoid. This would be the correct answer if the blasts had been TDT positive in the nucleus and lacked any myeloperoxidase or Auer rod evidence, supporting an ALL diagnosis with tissue infiltration."
      },
      {
        "text": "Acute monocytic leukemia, a subtype of AML in which monoblasts characteristically infiltrate the gums",
        "explanation": "Correct. The lecturer specifically taught that acute monocytic leukemia is a high-yield AML subtype defined by proliferation of monoblasts, and that these monoblasts characteristically infiltrate the gums to produce the swollen, hyperplastic gingival appearance shown here. The myeloid lineage (positive MPO chemistry) plus the gum infiltration phenotype defines this subtype within AML classified by lineage of differentiation."
      },
      {
        "text": "Acute promyelocytic leukemia with secondary DIC producing gingival hemorrhage from coagulopathic bleeding",
        "explanation": "Incorrect. APL would show numerous Auer rods within promyelocytes and present with prominent DIC and bleeding rather than mass-like gum infiltration. This would be the correct answer if the blasts contained abundant Auer rods and the patient had laboratory evidence of consumptive coagulopathy without infiltrative gum lesions."
      },
      {
        "text": "Acute megakaryoblastic leukemia presenting with platelet dysfunctionâ€“mediated gum bleeding and gingival friability",
        "explanation": "Incorrect. Megakaryoblastic AML is characterized by megakaryoblasts that lack MPO and is most commonly associated with Down syndrome children under five. This would be the correct answer if the patient were a Down syndrome child under age five with MPO-negative blasts of megakaryoblast lineage."
      },
      {
        "text": "Chronic myeloid leukemia presenting in a transformation phase with mature granulocytes infiltrating oral tissues",
        "explanation": "Incorrect. CML is defined by mature granulocyte proliferation with the t(9;22) translocation and presents insidiously rather than with gum infiltration. This would be the correct answer if the patient had a markedly elevated WBC dominated by mature granulocytes with basophilia, splenomegaly, and a leukocyte alkaline phosphataseâ€“negative result."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Acute monocytic leukemia is the AML subtype to remember when blasts infiltrate the gums producing diffuse, swollen, hyperplastic gingiva.",
    "pdfPage": 4,
    "pdfQuote": "infiltrate the gums"
  },
  {
    "id": 12,
    "category": "Hematology: Down Syndrome Leukemia",
    "questionText": "A 3-year-old girl with Down syndrome is brought to the emergency department with pallor, lethargy, and bruising. CBC shows hemoglobin 6.4 g/dL, platelets 24,000/ÂµL, and WBC 22,000/ÂµL with 38% blasts. Bone marrow aspirate confirms >50% blasts. Cytochemistry for myeloperoxidase is negative. Flow cytometry shows the blasts express megakaryocyte-lineage surface markers. Which of the following best categorizes her diagnosis given her age and underlying syndrome?",
    "options": [
      {
        "text": "B-acute lymphoblastic leukemia, the most common pediatric leukemia in Down syndrome regardless of age, with classic CD10/CD19/CD20 positivity",
        "explanation": "Incorrect. The blasts are MPO-negative and express megakaryocyte markers (not TDT+ lymphoid markers), and the lecturer specifically taught that Down syndrome leukemia under age five is most commonly megakaryoblastic AML rather than ALL. This would be the correct answer if the same Down syndrome patient were older than five and her blasts were TDT positive with B-cell markers."
      },
      {
        "text": "Adult T-cell leukemia/lymphoma driven by HTLV-1 infection, which can mimic acute presentations in young children",
        "explanation": "Incorrect. ATLL is a mature CD4+ T-cell neoplasm associated with HTLV-1 exposure in Caribbean and Japanese populations, not a pediatric Down syndrome leukemia. This would be the correct answer if the patient were an adult with rash, lytic bone lesions, hypercalcemia, and lymphadenopathy with HTLV-1 exposure history."
      },
      {
        "text": "Acute monocytic leukemia presenting with circulating monoblasts and clinically apparent infiltration of the gingival tissues",
        "explanation": "Incorrect. Monocytic AML is defined by monoblasts and characteristic gum infiltration, not by megakaryoblastic lineage in a Down syndrome toddler. This would be the correct answer if her blasts were monocytic in lineage with classic gingival hyperplasia and infiltration on examination."
      },
      {
        "text": "Acute megakaryoblastic leukemia, the AML subtype that lacks MPO and is associated with Down syndrome before the age of five",
        "explanation": "Correct. The lecturer emphasized that megakaryoblastic AML lacks MPO (because megakaryocytes do not perform oxygen-dependent killing) and is the leukemia associated with Down syndrome before age five. After age five, the association in Down syndrome shifts to ALL, so the patient's age (3) plus megakaryoblast lineage plus absent MPO cleanly identifies this subtype."
      },
      {
        "text": "Acute promyelocytic leukemia presenting with multiple Auer rods and a severe consumptive coagulopathy at diagnosis",
        "explanation": "Incorrect. APL would have MPO-positive promyelocytes packed with Auer rods, plus DIC, not MPO-negative megakaryoblastic blasts. This would be the correct answer if the same Down syndrome child had MPO-positive promyelocytes with Auer rods and laboratory evidence of DIC at presentation."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Down syndrome leukemia under age 5 = acute megakaryoblastic AML (MPO negative); over age 5 = ALL.",
    "pdfPage": 4,
    "pdfQuote": "acute megakaryoblastic leukemia"
  },
  {
    "id": 13,
    "category": "Hematology: APL â€” DIC",
    "questionText": "A 50-year-old woman presents with fatigue, gingival bleeding, and persistent oozing from venipuncture sites. Temperature 37.8Â°C, BP 108/68 mmHg, HR 110/min. Examination reveals extensive ecchymoses and bleeding from intravenous sites. CBC shows hemoglobin 9.4 g/dL, platelets 28,000/ÂµL, and circulating immature myeloid cells. PT and PTT are prolonged, fibrinogen is markedly low, and D-dimer is dramatically elevated. Marrow aspirate shows >40% blasts, many of which contain multiple stacked elongated pink cytoplasmic crystalline structures. Which best explains the patient's coagulopathy?",
    "options": [
      {
        "text": "Tumor-secreted procoagulant cytokines stimulate hepatic acute-phase reactants, indirectly elevating fibrinogen and factor VIII to consumptive levels",
        "explanation": "Incorrect. APL drives DIC by direct release of procoagulant material from blasts, not by hepatic acute-phase upregulation. This would be the correct answer if the question concerned the cytokine-driven hepatic acute-phase response, which is unrelated to the coagulopathy of APL."
      },
      {
        "text": "Numerous Auer rods packed within promyelocytes spill into circulation and activate the coagulation cascade, producing DIC",
        "explanation": "Correct. The lecturer explained that APL promyelocytes contain numerous Auer rods, and that these Auer rods have the potential to activate the coagulation cascade when released. This produces the catastrophic DIC that makes APL a medical emergency and explains the patient's prolonged PT/PTT, low fibrinogen, high D-dimer, and bleeding picture. Definitive therapy is ATRA, which binds the disrupted RAR and matures the promyelocytes."
      },
      {
        "text": "Autoimmune antibodies generated by the leukemic clone destroy platelets in a pattern that mimics immune thrombocytopenia",
        "explanation": "Incorrect. Autoimmune cytopenias are a complication of CLL (autoimmune hemolytic anemia, ITP), not the mechanism of bleeding in APL. This would be the correct answer if the patient had asymptomatic lymphocytosis with smudge cells on smear and laboratory evidence of immune-mediated red cell or platelet destruction."
      },
      {
        "text": "Direct invasion of hepatic sinusoids by lymphoblasts produces hepatic synthetic failure with loss of all coagulation factors",
        "explanation": "Incorrect. Hepatic invasion by lymphoblasts is not the mechanism of DIC in APL, and the patient has clear marrow findings of myeloid blasts. This would be the correct answer if the patient had fulminant hepatic failure with synthetic dysfunction (low albumin, prolonged PT, low all factors) without isolated fibrinogen depletion and elevated D-dimer."
      },
      {
        "text": "Megakaryoblast proliferation generates structurally abnormal platelets that aggregate spontaneously and consume coagulation factors",
        "explanation": "Incorrect. Megakaryoblastic AML lacks MPO and Auer rods and is not the entity described here. This would be the correct answer if the marrow showed MPO-negative megakaryoblastic blasts in a Down syndrome toddler, where the spontaneous platelet dysfunction theory still would not explain a true DIC picture."
      }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: APL produces DIC because promyelocytes are packed with Auer rods that activate the coagulation cascade upon release, making APL a true medical emergency.",
    "pdfPage": 3,
    "pdfQuote": "risk for DIC"
  },
  {
    "id": 14,
    "category": "Hematology: Therapy-related AML",
    "questionText": "A 68-year-old woman who completed adjuvant chemotherapy with alkylating agents for breast cancer five years ago now presents with fatigue, recurrent sinopulmonary infections, and easy bruising. Temperature 38.1Â°C, BP 124/78 mmHg, HR 92/min. CBC shows WBC 2,200/ÂµL with absolute neutropenia, hemoglobin 8.6 g/dL, and platelets 41,000/ÂµL. Bone marrow biopsy reveals a hypercellular marrow with dysplastic erythroid, granulocytic, and megakaryocytic precursors. Blasts comprise approximately 14% of nucleated marrow cells. Which best characterizes her current process and its trajectory?",
    "options": [
      {
        "text": "Acute myeloid leukemia arising in a background of myelodysplasia, with treatment intent guided by anthracycline-based induction, a strategy the lecturer did not endorse because the diagnostic blast threshold has not yet been met in this clinical scenario as described in the marrow report",
        "explanation": "Incorrect. The blast percentage is 14% (<20%), which fails to meet the strict acute leukemia threshold; the process is currently myelodysplastic syndrome, with potential to transform to AML once blasts exceed 20%. This would be the correct answer if the patient's blast count had been documented to exceed 20% in marrow, which would convert the diagnosis to AML arising from MDS."
      },
      {
        "text": "Chronic myeloid leukemia in chronic phase, with mature granulocyte expansion driven by the BCR-ABL fusion product",
        "explanation": "Incorrect. CML produces a high WBC dominated by mature granulocytes with basophilia, not a hypercellular dysplastic marrow with cytopenias and 14% blasts. This would be the correct answer if she had leukocytosis with basophilia, a leukocyte alkaline phosphataseâ€“negative pattern, and t(9;22) on cytogenetics."
      },
      {
        "text": "Aplastic anemia from delayed chemotherapy toxicity, with hypocellular marrow showing absence of trilineage precursors",
        "explanation": "Incorrect. The marrow here is hypercellular with dysplasia, not hypocellular. This would be the correct answer if the marrow biopsy had revealed a hypocellular marrow with marked reduction of all three hematopoietic lineages and no dysplasia."
      },
      {
        "text": "Adult T-cell leukemia/lymphoma due to HTLV-1 exposure during a prior transfusion, presenting with cytopenias from marrow infiltration",
        "explanation": "Incorrect. ATLL presents with rash, generalized lymphadenopathy, hepatosplenomegaly, and lytic bone lesions with hypercalcemia in HTLV-1â€“exposed populations, not dysplastic marrow morphology following alkylator therapy. This would be the correct answer if she had a rash, lytic skeletal lesions, hypercalcemia, and a HTLV-1 exposure history."
      },
      {
        "text": "Myelodysplastic syndrome from prior alkylating agent exposure, with hypercellular marrow, peripheral cytopenias, and risk of transformation to AML if blasts exceed 20%",
        "explanation": "Correct. The lecturer described exactly this scenario: prior exposure to alkylating agents or radiotherapy predisposes to myelodysplastic syndrome, in which the marrow becomes hypercellular but cells fail to mature normally, producing peripheral cytopenias and an increased blast count <20%. Most patients die of infection or bleeding, but a subset progress to AML when blasts exceed 20% (then called AML arising in a background of myelodysplasia)."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Prior alkylator or radiation exposure predisposes to MDS â€” hypercellular marrow with cytopenias and <20% blasts; transformation to AML occurs when blasts exceed 20%.",
    "pdfPage": 5,
    "pdfQuote": "myelodysplastic syndrome"
  },
  {
    "id": 15,
    "category": "Hematology: Pediatric ALL Presentation",
    "questionText": "A previously healthy 5-year-old boy is brought in for a one-week history of pallor, fatigue, nosebleeds, and limping due to bilateral leg pain. Temperature 38.7Â°C, BP 102/64 mmHg, HR 124/min. Examination shows hepatosplenomegaly, scattered ecchymoses, and an oral ulcer. CBC reveals hemoglobin 6.8 g/dL, platelets 18,000/ÂµL, WBC 92,000/ÂµL with 78% blasts. Flow cytometry shows the blasts are TDT-positive in the nucleus, CD10-positive, CD19-positive, and CD20-positive. Karyotyping reveals t(12;21). Beyond standard induction chemotherapy, which next step is most critical to address sanctuary-site disease?",
    "options": [
      {
        "text": "Splenectomy to remove the largest reservoir of extramedullary leukemic cells before systemic chemotherapy begins",
        "explanation": "Incorrect. Splenomegaly in pediatric ALL is reactive infiltration and does not require splenectomy; the lecturer described prophylaxis to CSF and scrotum as the sanctuary intervention. This would be the correct answer if the question concerned a different chronic process where splenic sequestration of cells (e.g., hereditary spherocytosis) drives the pathology."
      },
      {
        "text": "Hepatic embolization to interrupt drug-clearance pathways that prevent chemotherapy from reaching therapeutic marrow levels",
        "explanation": "Incorrect. There is no role for hepatic embolization in pediatric ALL; the rationale for sanctuary-site prophylaxis is the bloodâ€“brain and bloodâ€“testicle barriers, not hepatic drug clearance. This would be the correct answer if the question concerned an interventional radiology approach for hepatic tumors, which is unrelated."
      },
      {
        "text": "Imatinib monotherapy targeting the BCR-ABL fusion that drives the constitutive tyrosine kinase activity in this leukemia",
        "explanation": "Incorrect. The patient's karyotype is t(12;21), not t(9;22); BCR-ABL inhibition with imatinib targets Ph+ disease (CML or Ph+ ALL), not the favorable pediatric pattern shown here. This would be the correct answer if the same patient's cytogenetics had shown t(9;22), placing him in the unfavorable Ph+ ALL category where BCR-ABLâ€“targeted therapy is added."
      },
      {
        "text": "Empiric high-dose corticosteroids to suppress autoimmune hemolytic anemia from antibody-producing neoplastic B cells, which the lecturer attributed to a different chronic neoplastic context entirely",
        "explanation": "Incorrect. Autoimmune hemolytic anemia is a complication of CLL, not pediatric ALL. This would be the correct answer if the patient were an older adult with chronic lymphocytic leukemia developing warm-antibody hemolysis from neoplastic-cloneâ€“derived autoantibodies."
      },
      {
        "text": "Intrathecal chemotherapy and prophylactic chemotherapy to the scrotum to cover sites that systemic agents cannot effectively reach",
        "explanation": "Correct. The lecturer made this point specifically for B-ALL: it has an excellent response to chemotherapy but requires prophylactic chemotherapy delivered into the CSF (intrathecally) and into the scrotum, because systemic chemotherapy cannot effectively cross the bloodâ€“brain barrier or the bloodâ€“testicle barrier. The t(12;21) finding here also confirms the good-prognosis pediatric pattern, but sanctuary-site prophylaxis remains essential to prevent relapse."
      }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Sanctuary-site prophylaxis (intrathecal chemotherapy + scrotal therapy) is required in B-ALL because systemic agents cannot effectively cross the bloodâ€“brain or bloodâ€“testicle barriers.",
    "pdfPage": 2,
    "pdfQuote": "prophylaxis to the scrotum and the CSF"
  },
  {
    "id": 16,
    "category": "Hematology: Adult Ph+ ALL",
    "questionText": "A 52-year-old man presents with fatigue, weight loss, and bone pain. Temperature 37.6Â°C, BP 132/82 mmHg, HR 88/min. Examination shows scattered petechiae and sternal tenderness. CBC shows hemoglobin 8.2 g/dL, platelets 38,000/ÂµL, WBC 78,000/ÂµL with 64% blasts. Flow cytometry identifies the blasts as TDT-positive, CD10-positive, CD19-positive, and CD20-positive. Karyotype reveals a t(9;22) translocation. Which best characterizes the prognostic implication of this finding in this specific clinical context?",
    "options": [
      {
        "text": "Poor prognosis Ph+ ALL â€” the same t(9;22) that defines CML can drive a B-ALL subset more common in adults and carries a poor prognosis",
        "explanation": "Correct. The lecturer specifically addressed this distinction: t(9;22) is the defining feature of CML but can also drive a subset of B-ALL more common in adults, in which it is called Ph+ ALL and portends a poor prognosis. This contrasts with the favorable pediatric pattern of t(12;21). Recognition matters because Ph+ ALL alters treatment intensity and the role of BCR-ABLâ€“targeted therapy in induction."
      },
      {
        "text": "Favorable prognosis equivalent to pediatric t(12;21) disease, with similar response to standard chemotherapy regimens",
        "explanation": "Incorrect. The lecturer contrasted t(12;21) (favorable, pediatric) with t(9;22) (unfavorable, adult). This would be the correct answer if the karyotype had shown t(12;21) in a pediatric patient with B-ALL, which would carry the favorable pattern."
      },
      {
        "text": "Chronic myeloid leukemia in lymphoid blast transformation, requiring shift in therapeutic strategy toward myeloid-targeted agents",
        "explanation": "Incorrect. Although CML can transform to either AML or ALL phenotypically, the presentation here is a de novo acute leukemia with TDT+ B-ALL phenotype and t(9;22) â€” the lecturer treated this as Ph+ ALL with poor prognosis, not as a blast crisis of underlying CML. This would be the correct answer if the patient had a documented prior chronic phase of CML with prior elevated mature granulocytes and basophilia who now developed accelerated lymphoid transformation."
      },
      {
        "text": "Intermediate prognosis driven by the patient's age alone, independent of the underlying cytogenetic abnormality",
        "explanation": "Incorrect. Age modifies risk in many leukemias but the lecturer was explicit that t(9;22) in B-ALL specifically carries a poor prognosis and is the more common pattern in adults. This would be the correct answer if the question concerned a non-cytogenetic age-stratified risk score rather than a translocation-specific prognosis."
      },
      {
        "text": "Favorable risk because the BCR-ABL fusion makes the disease uniquely sensitive to BCR-ABL inhibition, abolishing relapse risk, an interpretation that contradicts the explicit prognostic stratification taught in this lecture",
        "explanation": "Incorrect. The lecturer stated explicitly that t(9;22) in B-ALL portends a poor prognosis, even if BCR-ABLâ€“targeted therapy can be added to the regimen. This would be the correct answer if the question incorrectly equated targetable molecular biology with favorable outcomes, which the lecture explicitly refuted."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: t(9;22) Ph+ ALL â€” more common in adults â€” carries a poor prognosis; t(12;21) is the favorable pediatric pattern.",
    "pdfPage": 2,
    "pdfQuote": "9/22 translocation"
  },
  {
    "id": 17,
    "category": "Hematology: APL Cytogenetic Reasoning",
    "questionText": "A 38-year-old woman presents with fatigue and oozing from her gums for two weeks. Temperature 37.4Â°C, BP 110/70 mmHg, HR 102/min. Examination shows pallor and scattered ecchymoses. CBC reveals hemoglobin 8.0 g/dL, platelets 22,000/ÂµL, WBC 24,000/ÂµL with circulating immature myeloid cells. Coagulation panel shows PT 22 sec, PTT 48 sec, fibrinogen 80 mg/dL, D-dimer dramatically elevated. Bone marrow shows >50% blasts that contain numerous stacked, elongated pink cytoplasmic crystalline structures. Which best identifies the underlying receptor disruption and the rationale for the first-line differentiating therapy?",
    "options": [
      {
        "text": "Loss of the retinoic acid receptor function from t(15;17); ATRA binds the disrupted receptor and restores maturation of the trapped promyelocytes",
        "explanation": "Correct. The lecturer was emphatic about this complete chain: t(15;17) disrupts the retinoic acid receptor â†’ promyelocyte maturation halts â†’ Auer-rodâ€“rich promyelocytes accumulate â†’ Auer rods drive DIC â†’ ATRA (a vitamin A derivative) binds the disrupted retinoic acid receptor â†’ promyelocytes mature into neutrophils â†’ leukemic burden falls and the DIC risk resolves. The constellation of myeloid blasts with abundant Auer rods plus DIC labs fits APL cleanly."
      },
      {
        "text": "Loss of BCL-2 regulation from t(14;18); high-dose corticosteroid therapy restores apoptosis in the malignant germinal-center cells",
        "explanation": "Incorrect. t(14;18) overexpresses BCL-2 (gain, not loss) and drives follicular lymphoma, not APL. This would be the correct answer if the patient had painless generalized lymphadenopathy with neoplastic follicles lacking tingible body macrophages and expressing BCL-2 on immunostain."
      },
      {
        "text": "Disruption of BCR-ABL tyrosine kinase regulation from t(9;22); imatinib selectively inhibits the constitutively active kinase",
        "explanation": "Incorrect. t(9;22) creates a gain-of-function BCR-ABL kinase driving CML or Ph+ ALL â€” not APL â€” and imatinib targets that kinase rather than restoring maturation. This would be the correct answer if the patient had marked mature granulocytosis, basophilia, and a t(9;22) karyotype consistent with CML."
      },
      {
        "text": "Disruption of cyclin D regulation from t(11;14); cyclin-dependent kinase inhibitors restore G1/S checkpoint control in mantle-zone cells, a presentation that does not match the myeloid blast morphology described above in this case",
        "explanation": "Incorrect. t(11;14) overexpresses cyclin D and drives mantle cell lymphoma, not APL. This would be the correct answer if the patient had painless lymphadenopathy with neoplastic small B cells expanding the mantle zone around the follicles."
      },
      {
        "text": "Loss of c-MYC repression from t(8;14); intensive cytotoxic therapy halts the rapidly dividing tumor at the G2/M boundary",
        "explanation": "Incorrect. t(8;14) overexpresses c-MYC and drives Burkitt lymphoma, which presents as a jaw or abdominal mass with starry-sky histology, not APL with DIC. This would be the correct answer if the patient had a rapidly growing extranodal mass with tingible body macrophages within sheets of intermediate-sized lymphoid cells."
      }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: APL = t(15;17) disrupting the retinoic acid receptor; ATRA binds the disrupted receptor and restores promyelocyte maturation, eliminating both the leukemic clone and the DIC risk.",
    "pdfPage": 3,
    "pdfQuote": "disrupted retinoic acid receptor"
  },
  {
    "id": 18,
    "category": "Hematology: Down Syndrome Leukemia by Age",
    "questionText": "A 9-year-old girl with Down syndrome presents with three weeks of progressive pallor and bone pain. Temperature 38.0Â°C, BP 108/68 mmHg, HR 110/min. Examination shows hepatosplenomegaly and scattered petechiae. CBC reveals hemoglobin 7.4 g/dL, platelets 34,000/ÂµL, WBC 48,000/ÂµL with 70% blasts. Flow cytometry shows TDT-positive blasts that express CD10, CD19, and CD20. Compared with the leukemia association seen in Down syndrome patients under five years old, what best characterizes the lineage shift seen in this age group?",
    "options": [
      {
        "text": "Under five Down syndrome leukemia is typically chronic lymphocytic, while after five it shifts to a megakaryoblastic AML driven by gum-infiltrating monoblasts",
        "explanation": "Incorrect. The lecturer described the opposite pattern: megakaryoblastic AML under age five, then ALL after age five. CLL is not a pediatric disease, and gum infiltration is a feature of monocytic AML, not megakaryoblastic AML. This would be the correct answer if the question scrambled the lineage and age associations in a way that does not match the lecture."
      },
      {
        "text": "Down syndrome leukemia is uniformly chronic myeloid leukemia at every age, driven by a high-penetrance trisomy 21 effect on BCR-ABL",
        "explanation": "Incorrect. CML is not the Down syndromeâ€“associated leukemia; the association is with acute leukemia, with a lineage shift by age. This would be the correct answer if the question incorrectly suggested CML's t(9;22) is somehow related to trisomy 21, which the lecture did not teach."
      },
      {
        "text": "Under five, Down syndrome patients have an increased risk of acute megakaryoblastic AML (MPO negative); after five, the risk shifts to ALL",
        "explanation": "Correct. The lecturer explicitly summarized the rule: Down syndrome carries an increased risk of acute leukemia, with megakaryoblastic AML predominating before age five and ALL predominating after age five. The 9-year-old with TDT+ CD10/CD19/CD20+ blasts cleanly fits the postâ€“age-five ALL pattern, consistent with this rule."
      },
      {
        "text": "Both periods are dominated by acute promyelocytic leukemia, with Auer-rodâ€“driven DIC being the unifying acute presentation in Down syndrome children",
        "explanation": "Incorrect. APL is not the Down syndromeâ€“associated leukemia, and the patient has a TDT+ lymphoid phenotype rather than promyelocytic morphology with Auer rods. This would be the correct answer if a Down syndrome patient at any age presented with MPO+ promyelocytes packed with Auer rods plus DIC."
      },
      {
        "text": "Adult T-cell leukemia/lymphoma is the dominant entity in both age groups, with HTLV-1 reactivation accelerating its onset in trisomy 21 patients",
        "explanation": "Incorrect. ATLL is an HTLV-1â€“associated mature CD4+ T-cell neoplasm in adults, with no described pediatric Down syndrome association. This would be the correct answer if the patient were an adult with rash, lymphadenopathy, lytic bone lesions, and hypercalcemia in an HTLV-1 endemic area."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: In Down syndrome, acute leukemia <5 yrs old is most commonly megakaryoblastic AML (MPO negative); after age 5 it is most commonly ALL.",
    "pdfPage": 4,
    "pdfQuote": "Down syndrome have an increased risk"
  },
  {
    "id": 19,
    "category": "Hematology: Blast Lineage Differentiation",
    "questionText": "A 22-year-old woman presents with one week of fatigue, bruising, and gingival bleeding. Temperature 38.4Â°C, BP 120/76 mmHg, HR 110/min. CBC shows hemoglobin 7.4 g/dL, platelets 16,000/ÂµL, WBC 60,000/ÂµL with circulating blasts that are large and immature with punched-out nucleoli. The team cannot reliably distinguish lymphoid from myeloid lineage on morphology alone. Two markers are ordered. One stain is positive in the cytoplasm of the blasts and reveals occasional crystallized aggregates. A nuclear immunostain is negative for a DNA polymerase classically expressed in immature lymphoid precursors. Which lineage assignment and rationale best matches these results?",
    "options": [
      {
        "text": "Lymphoid lineage (ALL), because the negative nuclear stain rules out myeloid origin while the cytoplasmic stain is nonspecific",
        "explanation": "Incorrect. A negative TDT nuclear stain argues against lymphoid lineage (TDT is the defining lymphoblast marker), and the cytoplasmic crystallized aggregates are diagnostic of myeloperoxidase, supporting myeloid lineage. This would be the correct answer if the nuclear stain had been positive and the cytoplasmic crystalline aggregates had been absent."
      },
      {
        "text": "Mixed-lineage acute leukemia, because both stains contribute equally to lineage assignment regardless of cellular localization",
        "explanation": "Incorrect. The lecturer described TDT and MPO as discriminating markers (lymphoid vs myeloid), not as overlapping markers of mixed-lineage disease. This would be the correct answer if both stains were positive, indicating ambiguous lineage assignment that the lecturer did not emphasize."
      },
      {
        "text": "Mature lymphocytic leukemia rather than acute leukemia, because TDT positivity is required to call any process 'acute'",
        "explanation": "Incorrect. TDT is the marker of lymphoblasts within ALL â€” it is not a universal requirement for any acute leukemia (AML lacks TDT). This would be the correct answer if the question were probing the diagnosis of chronic lymphocytic leukemia, which involves mature B cells lacking TDT."
      },
      {
        "text": "Myeloid lineage (AML), because the cytoplasmic crystallized aggregates are myeloperoxidase (Auer rods) and the absent nuclear TDT excludes lymphoid lineage",
        "explanation": "Correct. The lecturer taught that myeloperoxidase visualized as crystallized cytoplasmic aggregates (Auer rods) identifies AML, and that TDT â€” a nuclear DNA polymerase â€” must be present in the nucleus to identify a blast as lymphoid (ALL). With absent TDT and present MPO/Auer rods, the assignment is unambiguous: AML."
      },
      {
        "text": "Acute lymphoblastic lymphoma, because intermediate-sized blast morphology with absent surface phenotype favors a thymic origin requiring confirmatory mediastinal imaging",
        "explanation": "Incorrect. Acute lymphoblastic lymphoma is T-ALL presenting as a mediastinal mass, which would require TDT positivity (cells of lymphoid lineage). With absent TDT and positive MPO/Auer rods, this is myeloid disease (AML), not T-ALL forming a mediastinal mass. This would be the correct answer if the patient had a teenager with thymic mass and TDT+ blasts expressing CD2â€“CD8."
      }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: TDT-positive nuclei â†’ lymphoid (ALL); MPO-positive cytoplasm / Auer rods â†’ myeloid (AML). The two are mutually exclusive lineage markers.",
    "pdfPage": 2,
    "pdfQuote": "myeloperoxidase can be detected in two ways"
  },
  {
    "id": 20,
    "category": "Hematology: AML Lineage Classification",
    "questionText": "A 60-year-old man is admitted with fatigue and recurrent infections. Temperature 38.5Â°C, BP 116/74 mmHg, HR 102/min. CBC shows hemoglobin 7.8 g/dL, platelets 28,000/ÂµL, WBC 38,000/ÂµL with 60% blasts. Cytochemistry shows the blasts are negative for myeloperoxidase. Flow cytometry shows expression of megakaryocyte surface markers. Cytogenetics fail to identify a recurring translocation. Based on the lecturer's classification scheme, which next-step rationale best describes how this leukemia would be subcategorized?",
    "options": [
      {
        "text": "Default to a Philadelphia-chromosomeâ€“positive subset, even with negative cytogenetics, and start BCR-ABL inhibition empirically, a strategy that ignores the absence of a confirmed cytogenetic finding",
        "explanation": "Incorrect. With negative cytogenetics, defaulting to Ph+ disease is not supported, and the lecturer's classification scheme prioritizes lineage of differentiation when no recurring translocation is found. This would be the correct answer if cytogenetics had identified t(9;22), placing the patient in the Ph+ category."
      },
      {
        "text": "Reclassify as ALL because absence of myeloperoxidase rules out a myeloid origin entirely regardless of surface markers",
        "explanation": "Incorrect. Absent MPO does not automatically reclassify a case as ALL; the lecturer described megakaryoblastic AML as MPO-negative because megakaryocytes do not perform oxygen-dependent killing. Surface markers (megakaryocyte-lineage) confirm myeloid (megakaryoblastic) origin here. This would be the correct answer if flow cytometry had also shown TDT positivity in the nucleus, which would force reclassification to ALL."
      },
      {
        "text": "Subclassify by lineage of differentiation â€” here megakaryoblastic AML â€” because no recurring cytogenetic abnormality is identified",
        "explanation": "Correct. The lecturer outlined three approaches to AML subclassification (cytogenetics first; then lineage of differentiation; then surface markers). When no recurring cytogenetic abnormality is found, lineage of differentiation drives the subclassification. The megakaryocyte-lineage surface markers plus absent MPO place this patient in the megakaryoblastic AML category."
      },
      {
        "text": "Subclassify as therapy-related AML even without prior chemotherapy exposure, because cytogenetics are the only diagnostic determinant",
        "explanation": "Incorrect. Therapy-related AML requires prior alkylator or radiation exposure, which is not provided here, and cytogenetics are only the first step in the lecturer's classification scheme rather than the only determinant. This would be the correct answer if the patient had completed alkylator-based therapy years earlier and now had AML arising in a background of dysplasia."
      },
      {
        "text": "Subclassify as acute promyelocytic leukemia by default whenever DIC is present and Auer rods cannot be confidently identified",
        "explanation": "Incorrect. APL classification requires the t(15;17) translocation or characteristic promyelocyte morphology with abundant Auer rods, neither of which applies here (Auer rods would be MPO-derived and the cells are MPO-negative). This would be the correct answer if cytogenetics had revealed t(15;17), confirming the APL subtype."
      }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: AML subclassification first uses recurring cytogenetic abnormalities; when none are found, lineage of differentiation (e.g. megakaryoblastic, monoblastic) becomes the primary classifier.",
    "pdfPage": 4,
    "pdfQuote": "subclassify the AML based on the lineage of differentiation"
  }
];
