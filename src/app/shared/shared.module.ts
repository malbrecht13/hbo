import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { ListtileComponent } from '../components/listtile/listtile.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

import {ConditionDataService} from '../services/condition-data.service';
import { CheckboxService } from '../services/checkbox.service';
@NgModule({
  declarations: [
    PageNotFoundComponent,
    ListtileComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    PageNotFoundComponent,
    ListtileComponent,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [ConditionDataService, CheckboxService]
})
export class SharedModule { }
