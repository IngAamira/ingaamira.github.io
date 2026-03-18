import { Project } from '@domain/models/project.model';

export abstract class ProjectDatasource {
  abstract getProjects(): Promise<Project[]>;
}
