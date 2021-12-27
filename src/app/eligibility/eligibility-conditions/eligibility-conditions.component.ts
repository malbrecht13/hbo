import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WagnerGradesComponent } from '../wagner-grades/wagner-grades.component';
import { ConditionDataService } from 'src/app/services/condition-data.service';

@Component({
  selector: 'app-eligibility-conditions',
  templateUrl: './eligibility-conditions.component.html',
  styleUrls: ['./eligibility-conditions.component.scss']
})
export class EligibilityConditionsComponent implements OnInit {

  hbo_indications: any[] = [];

  constructor(public dialog: MatDialog, private conditionService: ConditionDataService) { }

  ngOnInit(): void {
    this.hbo_indications = this.conditionService.getConditions().map(condition => {
      return {
        isCollapsed: true,
        title: condition.title,
        elig_criteria: condition.elig_criteria,
        standard_wound_care: condition.standard_wound_care
      }
    });
  }

  toggleCollapsed(indication: any): void {
    indication.isCollapsed = !indication.isCollapsed;
  }

  openWagnerDialog(): void {
    this.dialog.open(WagnerGradesComponent);
  }

  expandAll(): void {
    this.hbo_indications.forEach(condition => {
      condition.isCollapsed = false;
    });
  }

  collapseAll(): void {
    this.hbo_indications.forEach(condition => {
      condition.isCollapsed = true;
    });
  }
  

}
