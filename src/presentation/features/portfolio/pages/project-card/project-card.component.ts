import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { Project } from '@domain/models/project.model';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

import { TAG_COLORS } from '@presentation/shared/constants/tag-colors';
import { TagType } from '@domain/models/tag.model';

@Component({
  standalone: true,
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {

  @Input() project = {} as Project;
  private modalService = inject(BsModalService);

  bsModalRef?: BsModalRef;

  OpenProjectModal() {
    const modalOptions:ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    };

    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  };

  getTagColor(tag: TagType): string {
    return TAG_COLORS[tag] ?? '#ccc';
  }

}
