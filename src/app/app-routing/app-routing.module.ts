import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { EligibilityPageComponent } from '../eligibility/eligibility-page/eligibility-page.component';
import { ContraindicationsComponent } from '../pages/contraindications/contraindications.component';
import { ChecklistComponent } from '../pages/checklist/checklist.component';
import { TherapyPageComponent } from '../therapy/therapy-page/therapy-page.component';
import { RiskAssessmentHomeComponent } from '../risk-assessment/risk-assessment-home/risk-assessment-home.component';
import { RiskRecsComponent } from '../risk-assessment/risk-recs/risk-recs.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "eligibility", component: EligibilityPageComponent},
  {path: "contraindications", component: ContraindicationsComponent},
  {path: "hbo-checklist", component: ChecklistComponent},
  {path: "treatments", component: TherapyPageComponent},
  {path: "risk-assessment", component: RiskAssessmentHomeComponent},
  {path: "risk-recommendations", component: RiskRecsComponent},
  {path: "**", component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
