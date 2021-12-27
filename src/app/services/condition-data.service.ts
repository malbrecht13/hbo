import { Injectable } from '@angular/core';

const std_treatments = [
  '2.0 ATA with 90 minutes oxygen with/without airbreaks',
  '2.5 ATA with 90 minutes oxygen with 30 minutes between 5 minute air breaks**'
];
const review10 = 'Review should take place every 10 treatments after initial review.';
const upTo60 = 'In some cases up to 60 treatments may be required to normalize the wound.  Clinical evidence of improvement should be evident and documented at each review point.';
const severelyHypoxic = 'Severely hypoxic wounds may require BID treatment or may be treated at 2.0 or 2.5 ATA with 120 minutes with 30 minutes with air breaks every 30 minutes.';
const airBreaks20 = '**20 minutes oxygen breathing periods between 5 minute air breaks if CNS oxygen toxicity risk is increased';
const crushRegimen = [
  '2.8 ATA with 80 minutes oxygen with 20 minutes between 5 minute air breaks if higher risk of CNS oxygen toxicity',
  '2.5 ATA with 90 minutes oxygen with 30 minutes between 5 minute air breaks**',
  '2.0 ATA with 90 minutes oxygen if air break capability not available',
  airBreaks20
];
const carbonMonixide = [
  'Weaver protocol:\n\tFirst treatment: 3 ATA 25+25 minutes + 30+30 minutes at 2 ATA\n\tNext 2 treatments)2 ATA 30+30+30 minutes',
  '2.8 ATA 25+25 minutes + 30+30 minutes at 2 ATA',
  '2.0 ATA 90 minutes if no air break capability'
];
const gasEmbolismRegimen = [
  'U.S. Navy Tretment Table 6',
  'Kindwall monoplace oxygen table with or without air breaks'
];
const gasEmbolismTreatmentRange = ['1 (follow up treatment USN Table 6, Table 5, or one of wound care treatment tables may be indicated for persistent deficits)'];

@Injectable({
  providedIn: 'root'
})
export class ConditionDataService {

  hbo_indications: any[] = [
    {
      title: "Diabetic wounds of lower extremities",
      elig_criteria: [
        "Patient has type I or type II diabetes and a lower extremity wound that is due to diabetes",
        "Wagner grade III or higher",
        "No measurable signs of healing for at least 30 consecutive days with standard wound therapy",
        "HBO must be used in addition to standard wound care",
        "Wounds must be evaluated at least every 30 days during administration of HBO therapy",
        "If no measurable signs of healing have not been demonstrated within any 30-day period of HBO treatment, HBO will no longer be covered"
      ],
      standard_wound_care: [
        "Assessment of vascular status and correction of any vascular problems in the affected limb if possible",
        "Optimization of nutritional status",
        "Optimization of glucose control",
        "Debridement to remove devitalized tissue",
        "Maintenance of a clean, moist bed of granulation tissue with appropriate moist dressings",
        "Appropriate off-loading",
        "Treatment of infection"
      ],
      treatment_number: ['30 treatments', upTo60],
      treatment_ata: [
        ...std_treatments,
        airBreaks20,
        severelyHypoxic
      ],
      utilization_review: [
        '30 treatments',
        review10
      ]
    },
    {
      title: "Osteoradionecrosis",
      elig_criteria: [
        "CMS:  As an adjunct to conventional treatment.  Documentation needs to link radiation to tissue injury (i.e., \"late effects\")",
        "Healogics: Bone injury or necrosis and prior radiation exposure as mechanism of tissue injury",
        "Healogics: Document specific radiation dose and field of therapy, dates of administration, and indication for radiation therapy",
        "Healogics: Document objective findings of tissue injury and/or necrosis."
      ],
      treatment_number: [
        'Treatment: 30 pre and 10 post-op (40 total)',
        'Prevention in dental extraction: 20 pre and 10 postop'
      ],
      treatment_ata: [...std_treatments],
      utilization_review: [
        '40 treatments',
        review10
      ]
    },
    {
      title: "Acute peripheral arterial insufficiency",
      elig_criteria: [
        "Healogics: Critical limb ischemia or chronic critical limb ischemia persisting following revascularization when possible",
        "Healogics: Critical limb ischemia is defined as the presence of a clinical indicator, in this case ischemic tissue necrosis, ulcer, or cutaneous or deep tissue gangrene and one of objective indicators including: ABI < 0.5, TBI < 0.2, SPP < 30 mmHg, or PtcO2 < 30 mmHg",
        "For CMS:\n\t1. Evidence of skin or deep tissue necrosis secondary to ischemia\n\t2. Evidence of arterial embolization or thrombosis at the large to mid-sized arterial level\n\t3. Documentation of the ischemic event and that it occurred within 90 days of initial evaluation.",
        "For some MACs, covered only when HBO is provided as an inpatient service"
      ],
      treatment_number: ['20-30 treatments',
        'Consider BID if critical ischemia',
        upTo60
      ],
      treatment_ata: [
        ...std_treatments,
        airBreaks20,
        severelyHypoxic
      ],
      utilization_review: [
        '20 treatments',
        review10
      ],
    },
    {
      title: "Crush injuries/Compartment syndrome",
      elig_criteria: [
        "Emergnency indication",
        "Healogics: Wound or extremity associated with crushing or compressive trauma, a primary acute arterial occlusion of flow compromise associated with trauma, or other extensive soft tissue (expecially multi-tissue) trauma at any location with resulting ischemic or hypoxic compromise (typically Gustillo III A with age > 40, and Gustillo IIIB and C).",
        "For CMS:  Adjunctive therapy in combination with accepted standard therapeutic measures when loss of function, limb, or life is threatened.  Limited to extremity traumatic ischemias, extremity crushing injury, and reattachment of severed limbs or digits",
      ],
      treatment_ata: [...crushRegimen],
      treatment_number: [
        'Consider TID-QID initially',
        '5-20 treatments'
      ],
      utilization_review: [
        '12 treatments in 6 days for crush injury',
        '3 treatments in 1 day for compartment syndrome'
      ]
    },
    {
      title: "Preparation and preservation of compromised skin grafts",
      elig_criteria: [
        "Acute indication: initiate HBO within 3 weeks",
        "Healogics: Ischemic or infectious compromise to graft or flap (subset of graft) or surgical wound violating two planes creating a flap with some portion of graft or flap potentially salvageable",
        "For CMS: Preparation and preservation of compromised skin grafts (not for primary management of wounds)",
        "CMS requires: 1. Cannot use for initial site preparation for application of graft or flap, presenting within 3 weeks of placement.  2. Describe the nature of the graft or flap, the date created, and objective findings supporting graft or flap failure. 3. Some portion of graft or flap must still be viable and potentially salvageable and should be documented. 4. Cannot be used to support healing of bioengineered skin substitue as the \"graft.\""
      ],
      treatment_ata: [
        ...std_treatments,
        airBreaks20,
        severelyHypoxic
      ],
      treatment_number: [
        'Consider TID-QID initially',
        '10-30 treatments'
      ],
      utilization_review: [
        '10 treatments in graft salvage',
        '20 treatments in preparation for graft'
      ]
    }, 
    {
      title: "Soft tissue radionecrosis",
      elig_criteria: [
        "Healogics: Soft tissue injury or necrosis of skin, bladder (cystitis), rectum (proctitis), small bowel (enteritis), and prior radiation exposure as mechanism of tissue injury.  Document specific radiation dose and field of therapy, dates of administration, and indication for radiation therapy.  Documents objective findings of tissue injury and/or necrosis.",
        "CMS: As an adjunct to conventional treatment.  Documentation needs to link radiation to tissue injury (i.e., \"late effects\")."
      ],
      treatment_ata: [
        ...std_treatments,
        airBreaks20
      ],
      treatment_number: [
        'Consider TID-QID initially',
        '10-30 treatments'
      ],
      utilization_review: [
        '10 treatments in graft salvage',
        '20 treatments in preparation for graft'
      ]
    },
    {
      title: "Chronic and/or refractory osteomyelitis (non DFU)",
      elig_criteria: [
        "Healogics: Persistent wound or ulcer due to underlying osteomyelitis unresponsive to conventional care meeting Cierny-Mader III (Permeative/Stable infection penetrating cortex) or IV (Permeative/Unstable infection through bone in segmental fashion producing instability) B (locally or systemically compromised host).  Can be chronic and refractory to conventional care.",
        "For CMS: Chronic refractory osteomyelitis unresponsive to conventional medical and surgical management.",
        "CMS requires: 1. Must be chronic osteomyelitis that has failed appropriate conventional management alone (antibiotic therapy, debridement) which must continue during HBO.  2. Must document evidence confirming osteomyelitis: culture, histopathology, imaging studies.  3. Must continue appropriate other care (antibiotic therapy, mechanical stabilization, surgical management)."

      ],
      treatment_ata: [
        ...std_treatments,
        airBreaks20
      ],
      treatment_number: [
        '40 initial treatments',
      ],
      utilization_review: [
        '40 treatments',
        upTo60
      ]
    },
    {
      title: "Necrotizing soft tissue infections",
      elig_criteria: [
         "Healogics: Wound associated with rapidly progressive necrotizing soft tissue infection including progressive synergistic bacterial gangrene (severe cases), necrotizing fasciitis, and non-clostridial myonecrosis",
         "For CMS: Progressive necrotizing fasciitis (necrotizing fasciitis).",
         "For some MACs, covered only when HBO provided as an inpatient service.",
      ],
      treatment_ata: [...crushRegimen],
      treatment_number: [
        '8-10 treatments',
        'Consider TID-QID initially'
      ],
      utilization_review: [
        '10 treatments',
      ]
    },
    {
      title: "Gas gangrene/Clostridial Myonecrosis",
      elig_criteria: [
        "Emergency indication",
        "CMS: Gas gangrene could include clostridial myonecrosis or non-clostridial myonecrosis (determined by muscle involvement and organism, not just gas in tissue).",
        "For some MACs, covered only when HBO provided as an inpatient service.",
        "Healogics: Wound associated with rapidly progressive soft tissue infection involving muscle and due to infection with clostridium species."
      ],
      treatment_ata: [...crushRegimen],
      treatment_number: [
        '8-10 treatments',
        'Consider TID-QID initially'
      ],
      utilization_review: [
        '10 treatments',
        'Once the patient is stabilized, treatments may be given on a daily basis until the infection is controlled'
      ]
    }, 
    {
      title: "Acute carbon monoxide intoxication",
      elig_criteria: [
        "Acute carbon monoxide intoxciation"
      ],
      treatment_ata: [...carbonMonixide],
      treatment_number: [
        '3 treatments if Weaver protocol',
        'May treat to 1 past no further improvement'
      ],
      utilization_review: [
        '4 treatments',
      ]
    },
    {
      title: "Arterial gas embolism",
      elig_criteria: [
        "Arterial gas embolism"
      ],
      treatment_ata: [...gasEmbolismRegimen],
      treatment_number: [...gasEmbolismTreatmentRange],
      utilization_review: ['5 treatments']
    },
    {
      title: "Decompression illness",
      elig_criteria: [
         "Decompression illness"
      ],
      treatment_ata: [...gasEmbolismRegimen],
      treatment_number: [...gasEmbolismTreatmentRange],
      utilization_review: ['5 treatments']
    },
    // {
    //   title: "Actinomycosis, refractory to treatment",
    //   elig_criteria: [
    //     "As an adjunct to conventional treatment",
    //     "Only if the disease process is refractory to antibiotics and surgical treatment"
    //   ]
    // }
  ];

  constructor() { }

  getConditions(): any[] {
    return this.hbo_indications.sort(this.sortByTitle);
  }

  private sortByTitle(a: any, b: any): any {
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  }
}
