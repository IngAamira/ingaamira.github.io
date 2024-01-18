import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot()
  ],
  exports: [
    ModalModule,
    CarouselModule,
    CollapseModule,
    AccordionModule
  ]
})
export class NgxBootstrapModule { }
