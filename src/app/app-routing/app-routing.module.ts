import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { EligibilityPageComponent } from '../eligibility/eligibility-page/eligibility-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "eligibility", component: EligibilityPageComponent},
  {path: "**", component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
