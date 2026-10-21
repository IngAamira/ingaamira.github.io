
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Project } from '@domain/models/project.model';
import { TAG_COLORS } from '@presentation/shared/constants/tag-colors';
import { TagType } from '@domain/models/tag.model';

@Component({
  standalone: true,
  selector: 'app-project-card',
  imports: [],
  changeDetection: ChangeDetectionStrategy.Eager,
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
    /* Clases del chip (fondo translúcido + texto/limite del matiz) para dark. */
    return TAG_COLORS[tag] ?? 'text-slate-300 bg-slate-500/10 border border-slate-500/40';
  }

}
