import { Injectable } from "@angular/core";

import { Project } from "@domain/models/project.model";
import { ProjectRepository } from "@domain/repositories/project.repository";

@Injectable({ providedIn: 'root' })
export class GetProjectByIdUseCase {

  constructor(private repository: ProjectRepository) {}

  execute(id: number): Promise<Project | null> {
    return this.repository.getProjectById(id);
  }

}
