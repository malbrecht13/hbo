import { NgModule } from '@angular/core';
import { EligibilityConditionsComponent } from './eligibility-conditions/eligibility-conditions.component';
import { EligibilityPageComponent } from './eligibility-page/eligibility-page.component';
import { SharedModule } from '../shared/shared.module';
import { EligibilityDetailComponent } from './eligibility-detail/eligibility-detail.component';
import { WagnerGradesComponent } from './wagner-grades/wagner-grades.component';

@NgModule({
  declarations: [
    EligibilityConditionsComponent,
    EligibilityPageComponent,
    EligibilityDetailComponent,
    WagnerGradesComponent,
  ],
  entryComponents: [WagnerGradesComponent],
  imports: [
    SharedModule
  ],
  exports: [
    EligibilityPageComponent
  ]
})
export class EligibilityModule { }
