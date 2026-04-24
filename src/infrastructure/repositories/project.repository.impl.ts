import { inject, Injectable } from "@angular/core";
import { Project } from "@domain/models/project.model";
import { TagType } from "@domain/models/tag.model";
import { ProjectRepository } from "@domain/repositories/project.repository";
import { ProjectDatasource } from "@infrastructure/datasources/project.datasource";

@Injectable()
export class ProjectRepositoryImpl implements ProjectRepository {

  private datasource = inject(ProjectDatasource)
  private cache: Project[] | null = null;

  async getProjects(): Promise<Project[]> {
    if (this.cache) return this.cache;

    try {
      const data = await this.datasource.getProjects();
      this.cache = data;
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getProjectById(id: number): Promise<Project> {
    try {
      const projects = await this.datasource.getProjects();
      const project = projects.find(p => p.id === id);

      if (!project) {
        throw new Error('Project not found');
      }

      return project;

    } catch (error) {
      console.error('[ProjectRepository] getProjectById error:', error);

      return {
        id: -1,
        name: 'Project not available',
        summary: ['No data available'],
        pictures: [],
        tags: [],
        projectLink: ''
      };
    }
  }

  async getProjectsByFilter(tags: TagType[]): Promise<Project[]> {
    const projects = await this.datasource.getProjects();

    return projects.filter(project =>
      tags.every(tag => project.tags.includes(tag))
    );
  }
}
