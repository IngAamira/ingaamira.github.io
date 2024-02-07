import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { Project } from '../../../shared/interfaces/project';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './project-modal.component.html'
})
export class ProjectModalComponent {
  project = {} as Project;

  constructor(public bsModalRef: BsModalRef) { }

}
