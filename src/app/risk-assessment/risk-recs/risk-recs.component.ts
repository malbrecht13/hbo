import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-risk-recs',
  templateUrl: './risk-recs.component.html',
  styleUrls: ['./risk-recs.component.scss']
})
export class RiskRecsComponent implements OnInit {
  keysFromRiskAssessment: string[] = [];
  riskRecs: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService) { }

  ngOnInit(): void {
    const keyArray = this.activatedRoute.snapshot.queryParamMap.get('data');
    if(keyArray) {
      this.keysFromRiskAssessment = JSON.parse(keyArray);
    }
    this.riskRecs = this.questionService.getRiskRecommendations(this.keysFromRiskAssessment);
    if(this.riskRecs.length === 0) {
      this.riskRecs.push('You did not select any items.  Continue with pre-HBO checklist.');
    }
  }

}
