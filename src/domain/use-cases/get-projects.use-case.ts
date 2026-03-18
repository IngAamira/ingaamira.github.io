import { Injectable } from '@angular/core';
import { Project } from '@domain/models/project.model';
import { ProjectRepository } from '@domain/repositories/project.repository';

@Injectable({ providedIn: 'root' })
export class GetProjectsUseCase {

  constructor(private repository: ProjectRepository) {}

  execute(): Promise<Project[]> {
    return this.repository.getProjects();
  }

}
