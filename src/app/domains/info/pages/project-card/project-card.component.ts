import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { Project } from '../../../shared/models/project';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { MaterialModule } from '../../../shared/modules/material.module';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project: Project | undefined;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  OpenProjectModal() {
    if (this.project) {
      const modalOptions: ModalOptions = {
        class: 'modal-lg',
        initialState: {
          project: this.project,
        },
      };

      this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
    }
  }

  trackByTag(index: number, tag: any): string {
    return tag;
  }

}
