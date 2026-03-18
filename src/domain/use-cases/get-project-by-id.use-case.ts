import { inject, Injectable } from "@angular/core";
import { ProjectRepository } from "@domain/repositories/project.repository";

@Injectable({ providedIn: 'root' })
export class GetProjectByIdUseCase {

  private repo = inject(ProjectRepository);

  execute(id: number) {
    return this.repo.getProjectById(id);
  }
}
