import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '@domain/models/project.model';
import { TAG_COLORS } from '@presentation/shared/constants/tag-colors';
import { TagType } from '@domain/models/tag.model';

@Component({
  standalone: true,
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {

  @Input() project: Project = {
    id: 0,
    name: '',
    summary: [],
    projectLink: '',
    pictures: [],
    tags: []
  };

  @Output() viewProject = new EventEmitter<Project>();

  openProject() {
    this.viewProject.emit(this.project);
  }

  getTagColor(tag: TagType): string {
    return TAG_COLORS[tag] ?? '#ccc';
  }

}
