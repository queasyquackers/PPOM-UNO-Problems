// Thinking Process:
// 1. High-Yield Concept: Fibrinolytics (recombinant tPA, streptokinase), antiplatelet agents
//    (aspirin/COX-1, P2Y12 blockers, GP IIb/IIIa inhibitors), and reversal agents (protamine,
//    vitamin K, idarucizumab, andexanet alfa, 4-factor PCC). Mechanism, indications, timing
//    windows, adverse effects, and antidote pairing are paramount.
// 2. The "Trap": Confusing fibrinolytic specificity (fibrin-bound vs. systemic plasminogen),
//    irreversible vs. reversible P2Y12 inhibition, CYP2C19 vs. CYP3A4 prodrug activation,
//    and matching the correct antidote to the correct anticoagulant.
// 3. Key Distractor: Vitamin K for DOAC bleeding, protamine for warfarin, andexanet for
//    dabigatran, idarucizumab for apixaban — pair-mismatches are the classic miss.
// 4. Vignette Strategy: Mechanism-first stems describing adverse effects (GI bleed, hemorrhagic
//    stroke, dyspnea, hypersensitivity), CYP poor metabolizer phenotypes, and "patient with X
//    bleeding on Y anticoagulant — what reverses it?" — drug name withheld when testing MOA/AE.
//
// PDF Mapping Check: Found
// PDF Filename: Lecture # 165. L. Goldstein, Pharm.D. (PPT).pdf
// Mapping Key: 18-Pharmacology: Drugs Used in Coagulation Disorders, Part 2 (L165)
// Status: Verified

window.Test_L165 = [
  {
    "id": 1,
    "category": "Pharmacology: Fibrinolytics",
    "questionText": "A class of recombinant intravenous agents is administered for acute ischemic stroke to restore vessel patency. What is the direct molecular mechanism by which these agents dissolve a thrombus?",
    "options": [
      { "text": "They directly cleave fibrin strands within the thrombus", "explanation": "Incorrect. Fibrinolytic drugs themselves do not cleave fibrin; plasmin is the protease that performs fibrin digestion. This would be the correct answer if the drug were itself a fibrin-specific protease rather than a plasminogen activator." },
      { "text": "They catalyze conversion of plasminogen to plasmin, which then cleaves fibrin", "explanation": "Correct. Recombinant tPA agents (alteplase, tenecteplase, reteplase) preferentially activate fibrin-bound plasminogen, generating plasmin locally. Plasmin then proteolytically digests fibrin strands within the thrombus, dissolving the clot and restoring perfusion. This is why fibrinolytics must be given early — clots become more resistant to fibrinolysis as they age." },
      { "text": "They irreversibly inhibit thromboxane A2 synthesis in platelets", "explanation": "Incorrect. This describes aspirin's antiplatelet mechanism via COX-1 acetylation. This would be the correct answer if the drug were intended to prevent new platelet aggregation rather than dissolve an existing fibrin-rich thrombus." },
      { "text": "They bind antithrombin and accelerate inactivation of thrombin and factor Xa", "explanation": "Incorrect. This describes heparin's anticoagulant mechanism. Heparin prevents new clot formation but does not dissolve an established thrombus, and it is not used to restore vessel patency in acute stroke." },
      { "text": "They competitively inhibit vitamin K epoxide reductase (VKORC1)", "explanation": "Incorrect. This describes warfarin's mechanism, which slowly reduces synthesis of vitamin K-dependent factors over days. Warfarin is not a fibrinolytic and cannot lyse an acute thrombus." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Fibrinolytics work indirectly — they convert plasminogen to plasmin, and plasmin (not the drug) is the enzyme that actually digests fibrin.",
    "pdfPage": 11,
    "pdfQuote": "catalyze the formation of plasmin"
  },
  {
    "id": 2,
    "category": "Pharmacology: Fibrinolytics",
    "questionText": "A recombinant tPA variant has been engineered with a relocated K1 glycosylation site and a substitution in the protease domain (KHRR to AAAA). Which two pharmacologic properties result from these structural modifications?",
    "options": [
      { "text": "Longer half-life and resistance to plasminogen activator inhibitor-1 (PAI-1)", "explanation": "Correct. Tenecteplase's repositioned K1 glycosylation site extends the terminal half-life to roughly 90–130 minutes (allowing single bolus dosing), while the protease domain KHRR-to-AAAA substitution confers relative resistance to PAI-1 inhibition. Both modifications produce a more potent and convenient fibrinolytic compared to native tPA." },
      { "text": "Shorter half-life and increased fibrin binding affinity", "explanation": "Incorrect. The repositioned glycosylation site lengthens — not shortens — the half-life. This would be the correct answer if the variant were designed for very brief activity, but tenecteplase is specifically engineered for prolonged action allowing single bolus dosing." },
      { "text": "Conversion from a protein to a small molecule and oral bioavailability", "explanation": "Incorrect. All tPA derivatives remain large recombinant proteins administered intravenously; structural tweaks do not alter route of administration or change them into small molecules." },
      { "text": "Loss of fibrin selectivity and direct activation of circulating plasminogen", "explanation": "Incorrect. This describes streptokinase's behavior. Tenecteplase actually retains fibrin selectivity — the engineering goal was longer duration and PAI-1 resistance, not loss of specificity." },
      { "text": "Acquisition of antigenicity due to bacterial origin", "explanation": "Incorrect. Streptokinase, not tenecteplase, is antigenic because it is produced by beta-hemolytic streptococci. Recombinant tPA derivatives are human protein sequences and are not antigenic." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Tenecteplase's two engineered changes give it a long half-life (single bolus dose) and PAI-1 resistance — distinguishing it from alteplase, which requires continuous infusion.",
    "pdfPage": 10,
    "pdfQuote": "resistance to PAI-1 inhibition"
  },
  {
    "id": 3,
    "category": "Pharmacology: Fibrinolytics",
    "questionText": "A bacterial protein historically used as a fibrinolytic agent has no intrinsic enzymatic activity. Which mechanism best describes how it produces clot lysis?",
    "options": [
      { "text": "It directly cleaves fibrin into degradation products", "explanation": "Incorrect. The agent has no intrinsic enzymatic activity and cannot directly cleave fibrin. This would be the correct answer if the drug were a true protease like plasmin itself." },
      { "text": "It irreversibly acetylates a serine residue on plasminogen, constitutively activating it", "explanation": "Incorrect. Acetylation describes aspirin's COX-1 inhibition, not streptokinase's mechanism. Streptokinase activates plasminogen via conformational change, not covalent modification." },
      { "text": "It complexes with plasminogen, induces a conformational change exposing the active site, then cleaves plasminogen to plasmin", "explanation": "Correct. Streptokinase, a 47,000 Da protein from beta-hemolytic streptococci, has no intrinsic enzymatic activity. It binds plasminogen in a 1:1 complex; the complex undergoes a conformational change exposing plasminogen's active site, and that complex then cleaves additional free and clot-bound plasminogen into plasmin. Because it activates both free and fibrin-bound plasminogen, it produces a systemic lytic state." },
      { "text": "It binds the platelet GP IIb/IIIa integrin receptor and prevents fibrinogen-mediated platelet cross-linking on the surface of activated platelets", "explanation": "Incorrect. This is the mechanism of eptifibatide and tirofiban, which are antiplatelet agents — not fibrinolytics. They prevent new platelet aggregation and do not lyse fibrin." },
      { "text": "It binds antithrombin and accelerates the inactivation of thrombin and factor Xa, preventing further fibrin generation in the cascade", "explanation": "Incorrect. This is heparin's mechanism. Heparin is an anticoagulant that prevents propagation of clot but does not dissolve an existing thrombus, so it cannot lyse a formed clot." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Streptokinase is a bacterial protein with no intrinsic enzyme activity — it activates plasminogen by complex formation, and because it acts on both free and clot-bound plasminogen, it produces a generalized lytic state.",
    "pdfPage": 12,
    "pdfQuote": "complex induces conformational change in plasminogen"
  },
  {
    "id": 4,
    "category": "Pharmacology: Antiplatelet agents",
    "questionText": "A commonly used antiplatelet drug taken orally daily produces a cumulative inhibitory effect that lasts the entire 7–10 day lifespan of the platelet. What is the molecular basis for this prolonged effect from such a short-lived drug?",
    "options": [
      { "text": "The drug is sequestered in platelet alpha-granules and slowly released over days", "explanation": "Incorrect. There is no granular sequestration mechanism for this drug; alpha-granules contain procoagulant proteins like vWF and fibrinogen, not drug stores. This would be the correct answer if the drug functioned as a depot, but it does not." },
      { "text": "The drug accumulates in red blood cells and is slowly redistributed back to platelets", "explanation": "Incorrect. Although aspirin enters red blood cells, RBC sequestration is not the basis for the prolonged antiplatelet effect; the mechanism is irreversible COX-1 acetylation in anucleate platelets." },
      { "text": "The drug reversibly binds P2Y12 receptors with a slow dissociation rate", "explanation": "Incorrect. This describes the reversible P2Y12 inhibitors ticagrelor or cangrelor — but those have rapid offset of action, not platelet-lifespan duration. The drug in question acts on COX-1." },
      { "text": "The drug irreversibly acetylates COX-1, and platelets are anucleate and cannot synthesize new enzyme", "explanation": "Correct. Aspirin covalently acetylates a serine residue at an allosteric site on platelet COX-1, irreversibly preventing thromboxane A2 synthesis. Because platelets are anucleate, they cannot produce new COX-1 protein. The effect therefore persists for the entire lifespan of the affected platelet (7–10 days), and repeated low daily doses produce a cumulative effect as new platelets are also acetylated." },
      { "text": "The drug is converted in the liver to an active metabolite with a half-life of 11 days", "explanation": "Incorrect. The active species (acetylating aspirin) actually has a very short half-life (~20 minutes); the long-duration effect comes from irreversible target modification, not a long-lived metabolite." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Aspirin's antiplatelet effect outlasts the drug by days because platelets are anucleate — they cannot regenerate acetylated COX-1, so the irreversible inhibition lasts the platelet's entire lifespan.",
    "pdfPage": 17,
    "pdfQuote": "irreversibly acetylates an allosteric site"
  },
  {
    "id": 5,
    "category": "Pharmacology: Antiplatelet agents",
    "questionText": "A class of oral antiplatelet prodrugs blocks an ADP receptor on platelets. Activation of which receptor pathway is being inhibited, and what downstream effect does this produce?",
    "options": [
      { "text": "P2Y1 (Gq); inhibits PLC-IP3-Ca2+ signaling and reduces GP IIb/IIIa conformational activation", "explanation": "Incorrect. Although P2Y1 is a Gq-coupled platelet ADP receptor, the thienopyridines and other clinical P2Y blockers selectively target P2Y12, not P2Y1. This would be the correct answer if the drugs were P2Y1 antagonists, but no such clinical agent in this lecture targets P2Y1." },
      { "text": "Thromboxane A2 receptor (Gq); reduces calcium mobilization", "explanation": "Incorrect. Aspirin reduces TXA2 synthesis (via COX-1), but no drug in this class is a TXA2 receptor antagonist. The drugs in question block ADP, not thromboxane signaling." },
      { "text": "GP IIb/IIIa integrin; prevents fibrinogen binding to its receptor", "explanation": "Incorrect. GP IIb/IIIa is blocked directly by eptifibatide and tirofiban — those are intravenous drugs, not oral prodrugs, and they act at the final common pathway downstream of ADP signaling." },
      { "text": "Protease-activated receptor-1 (PAR-1); blocks thrombin-mediated platelet activation downstream of the major thrombin signaling pathway on platelets", "explanation": "Incorrect. This describes vorapaxar, which targets the major thrombin receptor on platelets — not an ADP receptor blocker. PAR-1 antagonism is mechanistically distinct from P2Y12 blockade." },
      { "text": "P2Y12 (Gi); blocking it prevents decreased cAMP signaling that activates GP IIb/IIIa and platelet aggregation", "explanation": "Correct. P2Y12 is a Gi-coupled purinergic ADP receptor on platelets. Normally, ADP binding inhibits adenylyl cyclase, decreasing cAMP and triggering downstream signaling that drives platelet aggregation including GP IIb/IIIa activation. P2Y12 blockers (clopidogrel, prasugrel, ticagrelor, cangrelor) prevent this signaling cascade, reducing platelet aggregation." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: P2Y12 is a Gi-coupled ADP receptor; blocking it removes the signal that activates GP IIb/IIIa and platelet aggregation. P2Y1 (Gq) and P2Y12 (Gi) must both be engaged for full aggregation, so P2Y12 blockade alone is sufficient to reduce thrombosis.",
    "pdfPage": 19,
    "pdfQuote": "P2Y12 is an ADP GiPCR on platelets"
  },
  {
    "id": 6,
    "category": "Pharmacology: Antiplatelet agents",
    "questionText": "Two oral thienopyridine P2Y12 prodrugs differ markedly in onset of action — one takes about 2 days while the other acts in under 30 minutes. The slower agent depends on which cytochrome P450 enzyme for conversion to its active thiol metabolite?",
    "options": [
      { "text": "CYP3A4", "explanation": "Incorrect. CYP3A4 is the primary activator of prasugrel (after initial hydrolysis) and ticagrelor — both of these have faster onsets, not the slower 2-day onset described. This would be the correct answer if asked about prasugrel's activation pathway." },
      { "text": "CYP2C19", "explanation": "Correct. Clopidogrel is a prodrug that requires CYP2C19 for conversion to its active thiol metabolite, and only ~15% of the parent dose undergoes this activation. This inefficient activation, plus the dependence on CYP2C19 (which has common loss-of-function alleles), explains clopidogrel's slow onset (~Day 2) and variable response. Poor CYP2C19 metabolizers have reduced therapeutic effect." },
      { "text": "CYP2D6", "explanation": "Incorrect. CYP2D6 is involved in many psychiatric and analgesic drug metabolism pathways (e.g., codeine activation) but is not the primary enzyme for clopidogrel activation." },
      { "text": "CYP1A2", "explanation": "Incorrect. CYP1A2 metabolizes drugs like caffeine and theophylline; it is not responsible for thienopyridine activation." },
      { "text": "Plasma esterases", "explanation": "Incorrect. Plasma esterases handle drugs such as aspirin (deacetylation to salicylate) and rapidly inactivate cangrelor by dephosphorylation, but they do not activate clopidogrel — CYP2C19 does." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Clopidogrel is a CYP2C19 prodrug — only ~15% is activated, and CYP2C19 poor metabolizers have reduced antiplatelet effect. Prasugrel uses CYP3A4 (after hydrolysis) and is activated more efficiently, explaining its faster onset.",
    "pdfPage": 20,
    "pdfQuote": "CYP2C19 conversion to active thiol metab"
  },
  {
    "id": 7,
    "category": "Pharmacology: Reversal agents",
    "questionText": "A highly cationic protein is administered intravenously to neutralize the anticoagulant effect of a previously infused drug. What is the molecular basis for this neutralization?",
    "options": [
      { "text": "The cationic protein binds the anionic anticoagulant, forming an inactive complex", "explanation": "Correct. Protamine sulfate is a highly cationic (positively charged) protein that electrostatically combines with the highly anionic (negatively charged) heparin to form a stable, inactive complex that is then excreted. It acts within ~5 minutes (half-life ~7 min) and fully reverses unfractionated heparin, partially reversing low-molecular-weight heparin. Excessive protamine dosing can paradoxically worsen bleeding because protamine itself has weak anticoagulant properties." },
      { "text": "The cationic protein outcompetes the anticoagulant at vitamin K epoxide reductase", "explanation": "Incorrect. This describes vitamin K (phytonadione) reversing warfarin — but vitamin K is not a highly cationic protein, and the mechanism is competitive enzyme binding, not electrostatic neutralization." },
      { "text": "The protein is a monoclonal antibody fragment that specifically binds dabigatran", "explanation": "Incorrect. This describes idarucizumab, which is a humanized Fab fragment specific to dabigatran — not a generic cationic protein for heparin reversal." },
      { "text": "The protein is recombinant inactivated factor Xa that serves as a decoy for direct Xa inhibitors", "explanation": "Incorrect. This describes andexanet alfa, which reverses apixaban and rivaroxaban. Andexanet alfa is not used to reverse heparin." },
      { "text": "The protein provides activated vitamin K-dependent coagulation factors", "explanation": "Incorrect. This describes 4-factor PCC, which contains factors II, VII, IX, X (plus protein C and S). PCC is used for urgent reversal of VKAs and DOACs, not heparin." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Protamine reverses heparin via simple electrostatic binding (cationic protein + anionic heparin = inert complex). Beware: too much protamine can itself cause bleeding because it has intrinsic weak anticoagulant activity.",
    "pdfPage": 25,
    "pdfQuote": "Highly cationic protein combines with acidic"
  },
  {
    "id": 8,
    "category": "Pharmacology: Reversal agents",
    "questionText": "A patient on a long-term oral anticoagulant requires urgent reversal. The chosen antidote works by outcompeting the anticoagulant at its molecular target enzyme. Which anticoagulant is being reversed, and what is the target enzyme?",
    "options": [
      { "text": "Heparin; antithrombin III binding site", "explanation": "Incorrect. Heparin is reversed by protamine via electrostatic complex formation — not by competitive enzyme binding. Heparin does not act at an intracellular reductase." },
      { "text": "Dabigatran; thrombin active site", "explanation": "Incorrect. Dabigatran is a direct thrombin inhibitor, but it is reversed by idarucizumab (a specific monoclonal antibody fragment) — not by competitive enzyme inhibition at thrombin." },
      { "text": "Warfarin; vitamin K epoxide reductase complex 1 (VKORC1)", "explanation": "Correct. Warfarin inhibits VKORC1, blocking regeneration of reduced vitamin K and thereby impairing gamma-carboxylation of vitamin K-dependent factors (II, VII, IX, X). Vitamin K (phytonadione) reverses warfarin by outcompeting it at VKORC1, restoring the enzyme's ability to regenerate active vitamin K. Oral onset is 6–10 hours; INR normalizes in 24–48 hours. Excessive vitamin K can cause warfarin resistance for days." },
      { "text": "Rivaroxaban; factor Xa active site", "explanation": "Incorrect. Rivaroxaban is reversed by andexanet alfa, a decoy inactivated factor Xa molecule. The reversal mechanism is binding sequestration, not enzyme competition at VKORC1." },
      { "text": "Apixaban; antithrombin active site", "explanation": "Incorrect. Apixaban inhibits factor Xa directly and is reversed by andexanet alfa. Apixaban does not act at antithrombin and is not reversed by vitamin K." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Vitamin K reverses warfarin by competing at VKORC1. Onset is slow (6–10 hours orally) because new functional clotting factors must be synthesized — so PCC is added for emergent bleeding.",
    "pdfPage": 25,
    "pdfQuote": "Outcompetes warfarin at VKORC1"
  },
  {
    "id": 9,
    "category": "Pharmacology: Reversal agents",
    "questionText": "A humanized monoclonal antibody fragment binds with high specificity to a particular oral anticoagulant and its active acylglucuronide metabolites, neutralizing anticoagulant activity within minutes. Which class of anticoagulant does this antidote reverse?",
    "options": [
      { "text": "Vitamin K antagonists (e.g., warfarin)", "explanation": "Incorrect. Warfarin is reversed by vitamin K (phytonadione) and, in urgent settings, 4-factor PCC — not by a monoclonal antibody fragment. This would be the correct answer if the antidote acted at VKORC1." },
      { "text": "Direct oral factor Xa inhibitors (apixaban, rivaroxaban)", "explanation": "Incorrect. These are reversed by andexanet alfa, a recombinant modified inactive factor Xa decoy — not by a Fab antibody fragment. Idarucizumab is dabigatran-specific and does not bind factor Xa inhibitors." },
      { "text": "Unfractionated heparin", "explanation": "Incorrect. Heparin is reversed by protamine sulfate via electrostatic complex formation, not by monoclonal antibody binding." },
      { "text": "Direct oral thrombin inhibitor (dabigatran)", "explanation": "Correct. Idarucizumab is a humanized Fab fragment that specifically binds dabigatran (and its active acylglucuronide metabolites) with very high affinity, neutralizing direct thrombin inhibition within minutes. Duration is approximately 24 hours, making it the preferred urgent reversal agent for dabigatran-associated bleeding." },
      { "text": "Low-molecular-weight heparin", "explanation": "Incorrect. LMWH is partially reversed by protamine. No monoclonal antibody fragment is used clinically for LMWH reversal." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Idarucizumab = dabigatran's specific antibody-fragment antidote (fast onset, ~24 h duration). Andexanet alfa = decoy Xa for apixaban/rivaroxaban. Don't swap these pairs — wrong pairing = no reversal.",
    "pdfPage": 25,
    "pdfQuote": "specifically binds dabigatran and its active"
  },
  {
    "id": 10,
    "category": "Pharmacology: Antiplatelet agents",
    "questionText": "An intravenous reversible antagonist of a platelet ADP receptor reaches peak concentration within 2 minutes and is rapidly dephosphorylated in plasma to an inactive form, so platelet function returns within minutes of discontinuation. What feature of this drug's chemistry enables this profile?",
    "options": [
      { "text": "It is a humanized Fab fragment antibody", "explanation": "Incorrect. That describes abciximab (GP IIb/IIIa) or idarucizumab — neither has the rapid plasma dephosphorylation property described, and neither is an ADP receptor antagonist." },
      { "text": "It is a thienopyridine prodrug requiring hepatic CYP2C19 activation", "explanation": "Incorrect. Thienopyridines (clopidogrel, prasugrel) are oral irreversible inhibitors with onset measured in hours-to-days and platelet effects lasting ~11 days — the opposite kinetic profile of the drug described." },
      { "text": "It is a cyclic heptapeptide that blocks GP IIb/IIIa", "explanation": "Incorrect. That describes eptifibatide, which blocks fibrinogen binding at GP IIb/IIIa — not an ADP receptor. Eptifibatide's offset (~4 hours) is also slower than the drug in question." },
      { "text": "It is a small molecule that covalently acetylates the receptor binding site, producing prolonged inhibition lasting many hours after a single dose", "explanation": "Incorrect. Covalent acetylation produces irreversible effects (like aspirin on COX-1), not the rapid-on/rapid-off reversible profile described in the vignette." },
      { "text": "It is an ADP analog, allowing rapid plasma dephosphorylation by endogenous phosphatases", "explanation": "Correct. Cangrelor is an ADP analog given IV (bolus followed by infusion); its phosphate groups are rapidly removed in plasma, yielding an inactive metabolite with a 3–6 minute half-life. Because it is reversible and rapidly inactivated, platelet function returns within minutes of stopping the infusion — useful when bridging or when surgery may be needed urgently." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Cangrelor is an IV ADP analog reversible P2Y12 blocker — rapid on (peak <2 min) and rapid off (function returns 3–6 min after stopping). Ideal as PCI adjunct or bridge before urgent cardiac surgery.",
    "pdfPage": 20,
    "pdfQuote": "Rapid dephosphorylation in plasma, inactive"
  },
  {
    "id": 11,
    "category": "Pharmacology: Fibrinolytics",
    "questionText": "A 67-year-old man develops sudden right-sided weakness and slurred speech 90 minutes before arrival at the ED. CT head shows no hemorrhage. BP is 152/88. He has no recent surgery, trauma, or known bleeding. After confirming eligibility, the team administers an IV recombinant tissue plasminogen activator. Two hours later he becomes obtunded with a fixed and dilated right pupil. Which mechanism best explains the most likely complication?",
    "options": [
      { "text": "Direct neurotoxicity of plasmin on neuronal cell membranes", "explanation": "Incorrect. Plasmin does not produce direct neuronal cytotoxicity at therapeutic concentrations. This would be the correct answer if the question described seizures or a metabolic encephalopathy without mass effect, but the clinical picture (obtundation + fixed dilated pupil) is structural — herniation from a hemorrhage." },
      { "text": "Lysis of protective hemostatic plugs and systemic plasmin generation causing intracranial hemorrhage", "explanation": "Correct. The major adverse effect of fibrinolytic therapy is hemorrhage, most catastrophically intracranial hemorrhage. Plasmin not only dissolves the target thrombus but also lyses protective hemostatic plugs throughout the circulation. Systemic plasmin generation also degrades fibrin and circulating coagulation factors (especially V and VIII), producing a systemic lytic state. The sudden obtundation with unilateral fixed pupil signals uncal herniation from an intracerebral hemorrhage." },
      { "text": "Embolic showering from the dissolving cardiac thrombus", "explanation": "Incorrect. Cardiac thromboembolism would typically produce additional focal ischemic deficits rather than the global decline plus signs of mass effect/herniation described here." },
      { "text": "Anaphylaxis from antibodies against the recombinant protein", "explanation": "Incorrect. Recombinant tPA derivatives are essentially non-antigenic. Hypersensitivity is a streptokinase concern (because of prior streptococcal exposure), not alteplase. Anaphylaxis would also present with airway/cardiovascular collapse, not focal herniation signs." },
      { "text": "Reperfusion-induced cerebral edema with osmotic shifts across the blood-brain barrier producing rapid mass effect independent of any new bleeding", "explanation": "Incorrect. While reperfusion injury can occur, it does not typically cause rapid herniation within hours; the abrupt deterioration with focal pupillary findings strongly suggests new intracranial hemorrhage from the lytic state, which is the well-known major toxicity." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Hemorrhage — especially intracranial — is the dreaded fibrinolytic adverse effect. It results from lysis of normal hemostatic plugs and systemic plasmin generation that degrades coagulation factors. Always screen for absolute contraindications first.",
    "pdfPage": 11,
    "pdfQuote": "lysis of hemostatic plugs at site of injury"
  },
  {
    "id": 12,
    "category": "Pharmacology: Fibrinolytics",
    "questionText": "A 58-year-old woman presents with crushing substernal chest pain that began 70 minutes ago. ECG shows ST elevations in leads II, III, and aVF. PCI is not available within 120 minutes. Her past medical history includes well-controlled hypertension, no prior stroke, no recent surgery, and no bleeding diathesis. However, the team identifies one absolute contraindication to fibrinolytic therapy. Which finding would be an absolute contraindication?",
    "options": [
      { "text": "A known unruptured cerebral arteriovenous malformation", "explanation": "Correct. A known structural cerebral vascular lesion (e.g., AVM, aneurysm) is an absolute contraindication to fibrinolytic therapy because the systemic lytic state can precipitate catastrophic intracranial hemorrhage from the abnormal vessels. Other absolute contraindications include prior intracranial hemorrhage, malignant intracranial neoplasm, ischemic stroke within 3 months, suspected aortic dissection, active bleeding/diathesis (excluding menses), and significant closed-head or facial trauma within 3 months." },
      { "text": "Active menstruation", "explanation": "Incorrect. Active bleeding is an absolute contraindication except menses, which is explicitly excluded. This would be the correct answer if any other source of active bleeding (e.g., melena) were noted." },
      { "text": "Blood pressure of 158/92 mm Hg", "explanation": "Incorrect. Uncontrolled hypertension is a relative contraindication only when SBP >180 or DBP >110 mm Hg. This patient's BP is below those thresholds." },
      { "text": "An active duodenal ulcer", "explanation": "Incorrect. Active peptic ulcer is a relative contraindication (not absolute) — it warrants weighing risk versus life-saving benefit, but does not by itself preclude therapy." },
      { "text": "Knee surgery 4 weeks ago", "explanation": "Incorrect. Major surgery within 3 weeks is a relative contraindication; 4 weeks ago is outside the relative window and is not absolute." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Memorize the absolute fibrinolytic contraindications — prior ICH, structural cerebral vascular lesion, malignant brain tumor, ischemic stroke <3 mo, aortic dissection, active bleeding (not menses), and significant head/facial trauma <3 mo.",
    "pdfPage": 13,
    "pdfQuote": "Known structural cerebral vascular lesion"
  },
  {
    "id": 13,
    "category": "Pharmacology: Antiplatelet agents",
    "questionText": "A 54-year-old man with a remote MI has been on daily low-dose aspirin for 5 years. He develops worsening epigastric pain and presents with hematemesis. Endoscopy reveals a bleeding gastric ulcer. Which mechanism best explains his ulcer disease in the context of his antiplatelet therapy?",
    "options": [
      { "text": "Increased gastric acid secretion from direct H+/K+-ATPase activation by salicylate", "explanation": "Incorrect. Salicylates do not directly stimulate gastric acid secretion via the proton pump. This would be the correct answer if the drug were a parietal-cell agonist, but the GI toxicity mechanism is loss of mucosal protection, not acid hypersecretion." },
      { "text": "Immune-mediated gastric injury from antibody formation against aspirin-protein adducts", "explanation": "Incorrect. Aspirin GI toxicity is not immunologic in origin; it is a direct prostaglandin-depletion effect on the mucosa." },
      { "text": "Loss of mucosal prostaglandins from COX-1 inhibition plus impaired platelet hemostasis", "explanation": "Correct. Aspirin irreversibly acetylates COX-1 not only in platelets but also in gastric mucosa, decreasing protective prostaglandins (especially PGE2) that maintain mucus secretion, bicarbonate production, and mucosal blood flow. Simultaneously, the antiplatelet effect impairs hemostasis when bleeding occurs. The combination produces both the ulcer (mucosal vulnerability) and the bleeding (impaired clotting). Upper GI bleeding is a recognized adverse effect even at low cardioprotective doses." },
      { "text": "Reduction in thromboxane A2 causing severe gastric arterial vasoconstriction and resulting mucosal ischemia, infarction, and ulceration of the gastric wall", "explanation": "Incorrect. Reducing TXA2 actually decreases vasoconstriction (the opposite). The relevant mediator depleted in the gastric mucosa is cytoprotective PGE2, not TXA2." },
      { "text": "Inhibition of the P2Y12 receptor on gastric parietal cells", "explanation": "Incorrect. Aspirin does not act at P2Y12, and P2Y12 is not the relevant gastric mucosal protective pathway. This would be the correct answer if asked about clopidogrel-related effects, but even there, the GI risk is via platelet inhibition, not parietal cell activity." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Aspirin's GI bleeding risk is dual — loss of protective mucosal prostaglandins (COX-1 in gut) plus impaired platelet hemostasis (COX-1 in platelets). Even low cardioprotective doses carry this risk.",
    "pdfPage": 18,
    "pdfQuote": "Upper gastrointestinal bleeding"
  },
  {
    "id": 14,
    "category": "Pharmacology: Antiplatelet agents",
    "questionText": "A 5-year-old boy with a febrile viral illness is given an analgesic-antipyretic by his grandmother. Two days later he develops vomiting, lethargy, and altered mental status. Labs reveal hyperammonemia and elevated transaminases without hyperbilirubinemia. Liver biopsy would show microvesicular steatosis. Administration of which agent best explains his condition?",
    "options": [
      { "text": "Acetaminophen", "explanation": "Incorrect. Acetaminophen toxicity causes centrilobular hepatic necrosis with markedly elevated transaminases, often with jaundice — not microvesicular steatosis with hyperammonemia. This would be the correct answer if the picture were of fulminant hepatitis after a large APAP overdose." },
      { "text": "Ibuprofen", "explanation": "Incorrect. Ibuprofen is not associated with Reye syndrome. Although it is an NSAID, the Reye association is specific to aspirin (salicylates) in pediatric viral illness." },
      { "text": "Diphenhydramine", "explanation": "Incorrect. Diphenhydramine causes anticholinergic toxidrome (dry skin, mydriasis, urinary retention, delirium) — not the hepatic encephalopathy and steatosis pattern of Reye syndrome." },
      { "text": "Aspirin (acetylsalicylic acid)", "explanation": "Correct. Aspirin given to a child or adolescent with a viral illness (especially varicella or influenza) is associated with Reye syndrome — an acute encephalopathy with hyperammonemia, transaminitis without jaundice, and microvesicular hepatic steatosis. The proposed mechanism involves salicylate-induced mitochondrial dysfunction. This is why aspirin is specifically cautioned against in children with viral illness." },
      { "text": "Amoxicillin", "explanation": "Incorrect. Amoxicillin can cause rash (especially in EBV infection) and rare cholestatic injury but does not cause Reye syndrome's microvesicular steatosis and hyperammonemic encephalopathy." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Aspirin + viral illness in children/adolescents = risk of Reye syndrome (encephalopathy + microvesicular hepatic steatosis + hyperammonemia, usually without jaundice). Always use acetaminophen instead for pediatric viral fever.",
    "pdfPage": 18,
    "pdfQuote": "Association with Reye's syndrome"
  },
  {
    "id": 15,
    "category": "Pharmacology: Antiplatelet agents",
    "questionText": "A 62-year-old man with acute coronary syndrome is started on aspirin plus an oral thienopyridine prodrug for dual antiplatelet therapy after PCI. Several weeks later, surveillance platelet function testing reveals minimal P2Y12 inhibition despite documented adherence. Genotyping reveals a CYP2C19 loss-of-function variant. Which best explains the lack of therapeutic effect?",
    "options": [
      { "text": "The variant accelerates renal clearance of the drug", "explanation": "Incorrect. CYP2C19 is a hepatic metabolic enzyme, not a renal transporter. Loss-of-function variants do not increase renal elimination." },
      { "text": "Increased plasma protein binding sequesters the active metabolite", "explanation": "Incorrect. Plasma protein binding is high (~98%) for clopidogrel regardless of CYP2C19 status; this is not the cause of variable response in poor metabolizers." },
      { "text": "The variant produces autoantibodies against the platelet P2Y12 ADP receptor itself, displacing any active drug from the receptor binding pocket", "explanation": "Incorrect. CYP2C19 variants affect metabolism, not immune responses. There is no antibody-mediated mechanism here." },
      { "text": "The variant prevents drug absorption from the gut", "explanation": "Incorrect. CYP2C19 polymorphisms affect hepatic activation, not intestinal absorption. The drug is absorbed normally; it just is not converted efficiently to its active form." },
      { "text": "Impaired hepatic conversion of the prodrug to its active thiol metabolite", "explanation": "Correct. Clopidogrel is an oral prodrug requiring CYP2C19-mediated hepatic conversion to its active thiol metabolite (only ~15% of the dose is activated even in normal metabolizers). In CYP2C19 poor metabolizers, generation of the active species is reduced, leading to inadequate P2Y12 inhibition and increased risk of recurrent thrombotic events. Switching to prasugrel (CYP3A4-activated) or ticagrelor (active drug) bypasses this issue." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: Clopidogrel needs CYP2C19 activation. CYP2C19 poor metabolizers have reduced antiplatelet effect and higher thrombotic risk — consider prasugrel or ticagrelor as alternatives.",
    "pdfPage": 21,
    "pdfQuote": "CYP2C19 poor metabolizers"
  },
  {
    "id": 16,
    "category": "Pharmacology: Antiplatelet agents",
    "questionText": "A 64-year-old man started on a reversible oral P2Y12 inhibitor after recent ACS reports a new symptom: episodic shortness of breath unrelated to exertion that began shortly after starting the drug. Pulmonary exam, CXR, and BNP are unremarkable. Echocardiogram is normal. Which antiplatelet agent most likely explains his symptom?",
    "options": [
      { "text": "Aspirin", "explanation": "Incorrect. Aspirin can cause hypersensitivity bronchospasm in susceptible patients but is not classically associated with the unprovoked dyspnea pattern described in patients started on a reversible P2Y12 blocker." },
      { "text": "Clopidogrel", "explanation": "Incorrect. Clopidogrel is an irreversible thienopyridine; its main adverse effect is bleeding. It is not characteristically associated with dyspnea." },
      { "text": "Ticagrelor", "explanation": "Correct. Ticagrelor is a reversible oral P2Y12 inhibitor and is uniquely associated with dyspnea (often without underlying cardiopulmonary cause) that typically resolves over time. Other ticagrelor-specific adverse effects include thrombocytopenic purpura (rare, can be fatal) and bradyarrhythmia. Bleeding is the class effect shared with other P2Y12 blockers." },
      { "text": "Prasugrel", "explanation": "Incorrect. Prasugrel is an irreversible thienopyridine with higher bleeding rates than clopidogrel and is contraindicated in patients ≥75 years, but it does not characteristically cause dyspnea." },
      { "text": "Eptifibatide", "explanation": "Incorrect. Eptifibatide is an IV GP IIb/IIIa inhibitor used as a PCI adjunct, not a chronic oral agent. Its main adverse effect is bleeding, not dyspnea." }
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Key takeaway: Ticagrelor has a unique adverse-effect profile: dyspnea (usually self-limiting), bradyarrhythmia, and rare thrombocytopenic purpura — in addition to the bleeding common to all P2Y12 blockers.",
    "pdfPage": 21,
    "pdfQuote": "Dyspnea (resolves)"
  },
  {
    "id": 17,
    "category": "Pharmacology: Reversal agents",
    "questionText": "A 78-year-old woman on a long-term oral anticoagulant for atrial fibrillation presents with melena and hypotension. Her medication is a direct oral inhibitor of factor Xa. Which agent is the targeted reversal agent for this anticoagulant?",
    "options": [
      { "text": "Andexanet alfa", "explanation": "Correct. Andexanet alfa is a recombinant, modified, catalytically inactive factor Xa decoy molecule that binds and sequesters the direct oral factor Xa inhibitors rivaroxaban and apixaban, restoring hemostasis. It is the targeted reversal agent for these DOACs. 4-factor PCC may be used as an alternative for urgent reversal of DOACs when specific antidote is unavailable." },
      { "text": "Protamine sulfate", "explanation": "Incorrect. Protamine reverses heparin via electrostatic complex formation with anionic heparin chains; it has no effect on direct oral factor Xa inhibitors." },
      { "text": "Idarucizumab", "explanation": "Incorrect. Idarucizumab is a Fab fragment specific for dabigatran (direct thrombin inhibitor) and its acylglucuronide metabolites. It does not bind factor Xa inhibitors." },
      { "text": "Vitamin K (phytonadione)", "explanation": "Incorrect. Vitamin K reverses warfarin (a VKA) by outcompeting it at VKORC1. DOACs do not act via vitamin K-dependent factors, so vitamin K is ineffective for their reversal." },
      { "text": "Tranexamic acid", "explanation": "Incorrect. Tranexamic acid is an antifibrinolytic (lysine analog blocking plasminogen-fibrin binding) and is not a specific reversal agent for direct factor Xa inhibitors. It is not covered as the targeted antidote here." }
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Key takeaway: Andexanet alfa (decoy inactive factor Xa) reverses apixaban and rivaroxaban. Idarucizumab reverses dabigatran. Vitamin K is for warfarin. Protamine is for heparin. Memorize the pairings.",
    "pdfPage": 24,
    "pdfQuote": "Andexanet alfa (apixaban and rivaroxaban reversal)"
  },
  {
    "id": 18,
    "category": "Pharmacology: Reversal agents",
    "questionText": "A 71-year-old man on chronic warfarin for a mechanical mitral valve presents with a large intracranial hemorrhage. His INR is 6.2. The team administers IV vitamin K plus a plasma-derived product containing factors II, VII, IX, and X (with proteins C and S) for rapid normalization of his coagulopathy. Which clinical concern is associated with this concentrated factor product?",
    "options": [
      { "text": "Transfusion-related acute lung injury more severe than with fresh frozen plasma", "explanation": "Incorrect. 4-factor PCC actually carries less TRALI risk than FFP because it is a smaller volume, processed product. This would be the correct answer if the question described a typical FFP transfusion reaction." },
      { "text": "Hyperkalemia from intracellular potassium release", "explanation": "Incorrect. 4-factor PCC does not characteristically cause hyperkalemia; this is more associated with massive RBC transfusion." },
      { "text": "Anaphylaxis from murine antibody contaminants", "explanation": "Incorrect. PCC is human plasma-derived, not murine; classic anaphylactic reactions from murine antibodies would apply to early-generation monoclonal antibodies, not PCC." },
      { "text": "Inhibition of the patient's endogenous fibrinolytic system", "explanation": "Incorrect. PCC contains coagulation factors and proteins C/S; it does not inhibit fibrinolysis. The relevant concern is thrombosis, not impaired clot dissolution." },
      { "text": "Predisposition to thromboembolic complications from the restored factors", "explanation": "Correct. 4-factor PCC contains unactivated vitamin K-dependent coagulation factors (II, VII, IX, X) plus protein C and protein S. Rapidly restoring these factors normalizes coagulation but predisposes the patient to thromboembolic events — particularly in patients already at high thrombotic risk (e.g., mechanical valves, recent stroke, AFib). The clinician must weigh the bleeding risk against the thrombosis risk." }
    ],
    "correctAnswerIndex": 4,
    "clinicalPearl": "Key takeaway: 4-factor PCC rapidly reverses warfarin (and may be used for DOACs) by providing the missing vitamin K-dependent factors, but rapid factor restoration carries real thromboembolic risk — weigh the risk versus benefit.",
    "pdfPage": 25,
    "pdfQuote": "May predispose the patient to a thromboembolic"
  },
  {
    "id": 19,
    "category": "Pharmacology: Antiplatelet agents",
    "questionText": "A 60-year-old man undergoes PCI with stent placement for acute coronary syndrome. The interventional cardiologist administers an IV cyclic heptapeptide that reversibly blocks the final common pathway of platelet aggregation. Platelet function returns approximately 4 hours after the infusion is stopped. Which receptor does this agent target, and how does it inhibit aggregation?",
    "options": [
      { "text": "P2Y12 receptor; prevents ADP-mediated activation of GP IIb/IIIa", "explanation": "Incorrect. P2Y12 blockers (cangrelor IV; clopidogrel, prasugrel, ticagrelor oral) act upstream of GP IIb/IIIa. This would be the correct answer if the drug were cangrelor (also IV) — but cangrelor has a 3–6 minute half-life with platelet function returning within minutes, not 4 hours, and it is not a cyclic heptapeptide." },
      { "text": "COX-1; prevents thromboxane A2 generation", "explanation": "Incorrect. COX-1 inhibition describes aspirin's mechanism — and aspirin is oral, not an IV cyclic peptide. COX-1 acts upstream of platelet activation, not at the final common pathway." },
      { "text": "PAR-1; blocks thrombin-mediated platelet activation", "explanation": "Incorrect. PAR-1 is the thrombin receptor blocked by vorapaxar — not by eptifibatide. PAR-1 antagonism is mechanistically distinct from GP IIb/IIIa blockade." },
      { "text": "GP IIb/IIIa integrin; reversibly blocks fibrinogen bridging", "explanation": "Correct. Eptifibatide is a cyclic heptapeptide GP IIb/IIIa inhibitor that reversibly blocks fibrinogen binding to the activated integrin, preventing platelet cross-linking and aggregation. Half-life ~2.5 hours with platelet function restored in ~4 hours. Tirofiban (a synthetic nonpeptide) acts similarly with platelet function returning in 4–8 hours. Both are IV adjuncts to PCI." },
      { "text": "Antithrombin; accelerates inactivation of factor Xa", "explanation": "Incorrect. This describes heparin's anticoagulant mechanism, not an antiplatelet agent. Eptifibatide acts on platelets directly, not via the coagulation cascade." }
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Key takeaway: Eptifibatide (cyclic heptapeptide) and tirofiban (synthetic nonpeptide) are IV GP IIb/IIIa inhibitors used as PCI adjuncts — they block fibrinogen bridging at the final common pathway of platelet aggregation.",
    "pdfPage": 23,
    "pdfQuote": "reversibly block fibrinogen binding"
  },
  {
    "id": 20,
    "category": "Pharmacology: Reversal agents",
    "questionText": "A 70-year-old patient is in the cardiac surgical suite for emergent CABG. She was anticoagulated intraoperatively with high-dose IV unfractionated heparin. After successful bypass, the team needs to rapidly neutralize the heparin. The clinician administers an IV agent that acts within 5 minutes. However, an excessive dose is given. Which adverse outcome is most likely?",
    "options": [
      { "text": "Acute thromboembolic stroke from over-reversal of anticoagulation", "explanation": "Incorrect. Although thrombosis is a theoretical concern after reversing anticoagulation, the unique pitfall of giving too much of this specific reversal agent is bleeding, not thrombosis. This would be the correct answer for a scenario about rapid PCC administration." },
      { "text": "Paradoxical worsening of bleeding from the agent's own anticoagulant activity", "explanation": "Correct. Protamine sulfate is a highly cationic protein that complexes with anionic heparin, neutralizing it. However, protamine itself has weak anticoagulant effects, so excessive dosing produces paradoxical bleeding. This is why dosing protocols (typically 1 mg per 100 units of heparin) must be followed carefully rather than administering empirically large doses." },
      { "text": "Acute renal failure from glomerular deposition of the heparin-protein complex causing tubulointerstitial nephritis and rapid decline in creatinine clearance", "explanation": "Incorrect. The heparin-protamine complex is excreted without typically causing acute renal injury at therapeutic doses." },
      { "text": "Severe hypoglycemia from insulin release", "explanation": "Incorrect. Protamine does not stimulate insulin secretion. (Note: protamine is contained in some long-acting insulin formulations — NPH — but the antidote use does not cause hypoglycemia.)" },
      { "text": "Methemoglobinemia from oxidation of hemoglobin iron", "explanation": "Incorrect. Protamine does not cause methemoglobinemia; this adverse effect is associated with drugs such as benzocaine, dapsone, or nitrites." }
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Key takeaway: Protamine is the heparin antidote (cationic + anionic = inert complex), acting in ~5 min with t1/2 ~7 min. But protamine has its OWN weak anticoagulant effect — overdose paradoxically worsens bleeding, so dose carefully.",
    "pdfPage": 25,
    "pdfQuote": "excessive protamine dosing may worsen bleeding"
  }
];
