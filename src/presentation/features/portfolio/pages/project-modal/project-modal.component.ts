import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '@domain/models/project.model';
import { TAG_COLORS } from '@presentation/shared/constants/tag-colors';
import { TagType } from '@domain/models/tag.model';

@Component({
  standalone: true,
  selector: 'app-project-modal',
  imports: [CommonModule],
  templateUrl: './project-modal.component.html'
})
export class ProjectModalComponent {

  @Input() project = {} as Project;

  @Output() close = new EventEmitter<void>();

  selectedImage: string | null = null;

  getTagColor(tag: TagType): string {
    return TAG_COLORS[tag] ?? '#ccc';
  }

}
