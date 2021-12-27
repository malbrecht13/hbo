import { Component, OnInit } from '@angular/core';
import { CheckboxService } from 'src/app/services/checkbox.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  checklistItems: any[] = [
    {key: 'eligibility', text: 'Confirm that patient meets eligibility criteria', isChecked: false},
    {key: 'contraindications', text: 'Determine if any contraindications', isChecked: false},
    {key: 'riskAssessment', text: 'Perform Risk Assessment', isChecked: false},
    {key: 'treatments', text: 'Select the appropriate HBO treatment regimen.', isChecked: false}
  ];

  checkboxValues?: any;

  constructor(private checkboxService: CheckboxService) { }

  ngOnInit(): void {
    this.checkboxValues = this.checkboxService.getCheckboxValues();
    this.checklistItems.forEach(item => {
      const checked = this.checkboxValues[item.key];
      item.isChecked = checked === 'true';
    });
  }

  toggleIsChecked(key: string): void {
    this.checklistItems.forEach(item => {
      if(item.key === key) {
        const value = !item.isChecked;
        this.checkboxService.setCheckboxKeyAndValue(key,value);
        return;
      }
    })
  }

  clearChecklist(): void {
    this.checklistItems.forEach(item => {
      item.isChecked = false;
      console.log(item.isChecked);
    });
    this.checkboxService.setCheckboxKeysToFalse();
    location.reload();
  }

}
