import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-risk-assessment-home',
  templateUrl: './risk-assessment-home.component.html',
  styleUrls: ['./risk-assessment-home.component.scss']
})
export class RiskAssessmentHomeComponent implements OnInit {
  conditions: any[] = [];

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.conditions = this.questionService.getRiskConditions();
    this.conditions.forEach(condition => {
      condition.isChecked = false;
    });
  }

  toggleIsChecked(key: string): void {
    this.conditions.forEach(item => {
      if(item.key === key) {
        item.isChecked = !(item.isChecked);
      }
    })
  }

  // get keys of items that are checked and pass to next screen (risk-recommendations path)
  passCheckedData(): void {
    let keys: string[] = [];
    this.conditions.forEach(condition => {
      if(condition.isChecked) {
        keys.push(condition.key);
      }
    });
    const queryParams: any = {};
    queryParams.data = JSON.stringify(keys);
    const navigationExtras: NavigationExtras = {
      queryParams
    };

    this.router.navigate(['risk-recommendations'], navigationExtras);
  }

}
