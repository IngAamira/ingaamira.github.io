import { Injectable, inject } from '@angular/core';
import { ProjectRepository } from '../repositories/project.repository';

@Injectable({ providedIn: 'root' })
export class GetProjectsUseCase {

  private repo = inject(ProjectRepository);

  execute() {
    return this.repo.getProjects();
  }
}
