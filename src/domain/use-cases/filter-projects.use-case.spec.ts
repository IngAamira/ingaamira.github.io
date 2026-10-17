import { FilterProjectsUseCase } from './filter-projects.use-case';
import { Project } from '@domain/models/project.model';
import { TagType } from '@domain/models/tag.model';

const makeProject = (id: number, tags: TagType[]): Project => ({
  id,
  name: `project-${id}`,
  summary: [],
  projectLink: '',
  pictures: [],
  tags,
});

describe('FilterProjectsUseCase', () => {
  const useCase = new FilterProjectsUseCase();

  const projects: Project[] = [
    makeProject(1, [TagType.ANGULAR, TagType.JAVA]),
    makeProject(2, [TagType.ANGULAR]),
    makeProject(3, [TagType.PYTHON]),
  ];

  it('devuelve todos los proyectos si no hay etiquetas seleccionadas', () => {
    expect(useCase.execute(projects, [])).toEqual(projects);
  });

  it('filtra con lógica AND entre etiquetas', () => {
    const result = useCase.execute(projects, [TagType.ANGULAR, TagType.JAVA]);

    expect(result.map((project) => project.id)).toEqual([1]);
  });

  it('devuelve una lista vacía cuando ninguna coincide', () => {
    expect(useCase.execute(projects, [TagType.POSTGRES])).toEqual([]);
  });
});
