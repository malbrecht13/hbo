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
        "As an adjunct to conventional treatment"
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
        "Adjunctive therapy in combination with accepted standard therapeutic measures when loss of function, limb, or life is threatened"
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
        "As an adjunct to conventional treatment"
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
      title: "Chronic and/or refractory osteomyelitis",
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
      treatment_ata: [...gasEmbolismRegimen],
      treatment_number: [...gasEmbolismTreatmentRange],
      utilization_review: ['5 treatments']
    },
    {
      title: "Decompression illness",
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
