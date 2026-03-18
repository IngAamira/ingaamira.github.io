import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { TAG_COLORS } from '@presentation/shared/constants/tag-colors';
import { TagType } from '@domain/models/tag.model';
import { Project } from '@domain/models/project.model';

@Component({
  standalone: true,
  selector: 'app-project-modal',
  imports: [CommonModule, CarouselModule],
  templateUrl: './project-modal.component.html'
})
export class ProjectModalComponent {
  project = {} as Project;

  constructor(public bsModalRef: BsModalRef) { }

  getTagColor(tag: TagType): string {
    return TAG_COLORS[tag] ?? '#ccc';
  }

}
