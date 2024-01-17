import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxBootstrapModule } from '../shared/modules/ngx-bootstrap.module';
import { TranslationModule } from '../shared/modules/translation.module';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    FormsModule,
    NgxBootstrapModule,
    TranslationModule,
  ],
})

export class InfoModule { }
