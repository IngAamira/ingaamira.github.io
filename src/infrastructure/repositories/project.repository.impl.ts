import { Injectable } from "@angular/core";
import { Project } from "@domain/models/project.model";
import { TagType } from "@domain/models/tag.model";
import { ProjectRepository } from "@domain/repositories/project.repository";
import { ProjectDatasource } from "@infrastructure/datasources/project.datasource";

@Injectable()
export class ProjectRepositoryImpl implements ProjectRepository {

  constructor(private datasource: ProjectDatasource) {}

  async getProjects(): Promise<Project[]> {
    return this.datasource.getProjects();
  }

  async getProjectById(id: number): Promise<Project> {
    const projects = await this.datasource.getProjects();
    const project = projects.find(p => p.id === id);

    if (!project) throw new Error('Project not found');

    return project;
  }

  async getProjectsByFilter(tags: TagType[]): Promise<Project[]> {
    const projects = await this.datasource.getProjects();

    return projects.filter(project =>
      tags.every(tag => project.tags.includes(tag))
    );
  }
}
