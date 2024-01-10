import { Component} from '@angular/core';
import { NgFor } from '@angular/common';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { Project } from '../../../shared/models/project';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CarouselModule, NgFor],
  templateUrl: './project-modal.component.html'
})
export class ProjectModalComponent {
  project = {} as Project;

  constructor(public bsModalRef: BsModalRef) {

  }

}
