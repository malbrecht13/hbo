import { Component, OnInit } from '@angular/core';
import { ConditionDataService } from 'src/app/services/condition-data.service';

@Component({
  selector: 'app-therapy-page',
  templateUrl: './therapy-page.component.html',
  styleUrls: ['./therapy-page.component.scss']
})
export class TherapyPageComponent implements OnInit {
  conditions: any[] = [];

  constructor(private conditionDataService: ConditionDataService) { }

  ngOnInit(): void {
    this.conditions = this.conditionDataService.getConditions().map(condition => {
      return {
        title: condition.title,
        treatment_ata: condition.treatment_ata,
        treatment_number: condition.treatment_number,
        utilization_review: condition.utilization_review,
        isCollapsed: true
      }
    });
    console.log(this.conditions);
  }

  toggleCollapsed(condition: any): void {
    condition.isCollapsed = !condition.isCollapsed;
  }

  expandAll(): void {
    this.conditions.forEach(condition => {
      condition.isCollapsed = false;
    });
  }

  collapseAll(): void {
    this.conditions.forEach(condition => {
      condition.isCollapsed = true;
    });
  }

}
