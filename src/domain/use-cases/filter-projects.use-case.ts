import { inject, Injectable } from "@angular/core";
import { ProjectRepository } from "@domain/repositories/project.repository";

import { TagType } from "@domain/models/tag.model";

@Injectable({ providedIn: 'root' })
export class FilterProjectsUseCase {

  private repo = inject(ProjectRepository);

  execute(tags: TagType[]) {
    return this.repo.getProjectsByFilter(tags);
  }
}
