import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RiskAssessmentHomeComponent } from './risk-assessment-home/risk-assessment-home.component';
import { RiskRecsComponent } from './risk-recs/risk-recs.component';



@NgModule({
  declarations: [
    RiskAssessmentHomeComponent,
    RiskRecsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    
  ],
  exports: [
    RiskAssessmentHomeComponent
  ]
})
export class RiskAssessmentModule { }
