import { GetProjectsUseCase } from './get-projects.use-case';
import { ProjectRepository } from '@domain/repositories/project.repository';
import { Project } from '@domain/models/project.model';
import { TagType } from '@domain/models/tag.model';

describe('GetProjectsUseCase', () => {
  it('delega en el repositorio y devuelve sus proyectos', async () => {
    const expected: Project[] = [
      {
        id: 1,
        name: 'project-1',
        summary: [],
        projectLink: '',
        pictures: [],
        tags: [TagType.ANGULAR],
      },
    ];

    const repository = {
      getProjects: async () => expected,
      getProjectById: async () => expected[0],
      getProjectsByFilter: async () => expected,
    } as unknown as ProjectRepository;

    const useCase = new GetProjectsUseCase(repository);

    await expect(useCase.execute()).resolves.toBe(expected);
  });
});
