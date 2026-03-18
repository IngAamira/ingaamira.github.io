import { Injectable } from "@angular/core";

import { TagType } from "@domain/models/tag.model";
import { Project } from "@domain/models/project.model";

@Injectable({ providedIn: 'root' })
export class FilterProjectsUseCase {

  execute(projects: Project[], tags: TagType[]): Project[] {
    if (!tags.length) return projects;

    return projects.filter(project =>
      tags.every(tag => project.tags.includes(tag))
    );
  }

}
