import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { Project } from '../../../shared/models/project';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  OpenProjectModal() {
    const modalOptions:ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    };

    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  };

}
