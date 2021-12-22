import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { ListtileComponent } from '../components/listtile/listtile.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

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
    AppRoutingModule
  ],
  exports: [
    PageNotFoundComponent,
    ListtileComponent,
    MatCardModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class SharedModule { }
