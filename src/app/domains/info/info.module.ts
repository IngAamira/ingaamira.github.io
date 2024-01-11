import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoRoutingModule } from './info-routing.module';
import { NgxBootstrapModule } from '../shared/modules/ngx-bootstrap.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { TranslationModule } from '../shared/modules/translation.module';

@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InfoRoutingModule,
    NgxBootstrapModule,
    TranslationModule,
  ],
})

export class InfoModule { }
