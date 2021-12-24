import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';

import { EligibilityModule } from './eligibility/eligibility.module';
import { NavmenuComponent } from './components/navmenu/navmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    NavmenuComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    SharedModule,
    EligibilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
