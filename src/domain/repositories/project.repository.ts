import { Project } from "@domain/models/project.model";
import { TagType } from "@domain/models/tag.model";

export abstract class ProjectRepository {
  abstract getProjects(): Promise<Project[]>;
  abstract getProjectById(id: number): Promise<Project>;
  abstract getProjectsByFilter(tags: TagType[]): Promise<Project[]>;
}
