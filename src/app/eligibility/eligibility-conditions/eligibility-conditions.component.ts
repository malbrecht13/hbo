import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WagnerGradesComponent } from '../wagner-grades/wagner-grades.component';

@Component({
  selector: 'app-eligibility-conditions',
  templateUrl: './eligibility-conditions.component.html',
  styleUrls: ['./eligibility-conditions.component.scss']
})
export class EligibilityConditionsComponent implements OnInit {

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
      source_url: "https://www.cms.gov/medicare-coverage-database/view/ncd.aspx?ncdid=12"
    },
    {
      title: "Osteoradionecrosis",
      elig_criteria: [
        "As an adjunct to conventional treatment"
      ]
    },
    {
      title: "Acute peripheral arterial insufficiency",
      
    },
    {
      title: "Crush injuries and suturing of severed limbs",
      elig_criteria: [
        "Adjunctive therapy in combination with accepted standard therapeutic measures when loss of function, limb, or life is threatened"
      ]
    },
    {
      title: "Preparation and preservation of compromised skin grafts",
    }, 
    {
      title: "Acute traumatic peripheral ischemia",
      elig_criteria: [
        "Adjunctive therapy in combination with accepted standard therapeutic measures when loss of function, limb, or life is threatened"
      ]
    }, 
    {
      title: "Soft tissue radionecrosis",
      elig_criteria: [
        "As an adjunct to conventional treatment"
      ]
    },
    {
      title: "Chronic and/or refractory osteomyelitis",
    },
    {
      title: "Necrotizing soft tissue infections"
    },
    {
      title: "Gas gangrene"
    }, 
    {
      title: "Acute carbon monoxide intoxication"
    },
    {
      title: "Gas embolism"
    },
    {
      title: "Decompression illness"
    },
    {
      title: "Cyanide poisoning"
    },
    {
      title: "Actinomycosis, refractory to treatment",
      elig_criteria: [
        "As an adjunct to conventional treatment",
        "Only if the disease process is refractory to antibiotics and surgical treatment"
      ]
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.hbo_indications.forEach(item => {
      item.isCollapsed = true;
    });
  }

  toggleCollapsed(indication: any): void {
    indication.isCollapsed = !indication.isCollapsed;
  }

  openWagnerDialog(): void {
    this.dialog.open(WagnerGradesComponent);
  }
  

}
