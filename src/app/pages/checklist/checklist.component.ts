import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  checklistItems: string[] = [
    'Confirm that patient meets eligibility criteria',
    'Determine if any contraindications',
    'Obtain screening Chest-xray if history of pulmonary disease or smoking',
    'Obtain appropriate labs',
    'Determine presence of prostheses, including contact lenses'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
