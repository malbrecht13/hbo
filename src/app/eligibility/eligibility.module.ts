import { NgModule } from '@angular/core';
import { EligibilityConditionsComponent } from './eligibility-conditions/eligibility-conditions.component';
import { EligibilityPageComponent } from './eligibility-page/eligibility-page.component';
import { SharedModule } from '../shared/shared.module';
import { EligibilityDetailComponent } from './eligibility-detail/eligibility-detail.component';

@NgModule({
  declarations: [
    EligibilityConditionsComponent,
    EligibilityPageComponent,
    EligibilityDetailComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    EligibilityPageComponent
  ]
})
export class EligibilityModule { }
