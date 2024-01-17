import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { Project } from '../../../shared/classes/project';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './project-modal.component.html'
})
export class ProjectModalComponent {
  project = {} as Project;

  constructor(public bsModalRef: BsModalRef) { }

  getWidth(): number {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
      return 600;
    } else if (screenWidth >= 480) {
      return 400;
    } else {
      return 300;
    }
  }

  getHeight(): number {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
      return 220;
    } else if (screenWidth >= 480) {
      return 150;
    } else {
      return 150;
    }
  }

  isResponsive(): boolean {
    return window.innerWidth < 768;
  }

}
