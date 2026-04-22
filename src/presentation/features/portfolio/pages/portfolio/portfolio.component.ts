import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Title, Meta } from '@angular/platform-browser';

import { GetProjectsUseCase } from '@domain/use-cases/get-projects.use-case';
import { FilterProjectsUseCase } from '@domain/use-cases/filter-projects.use-case';
import { ProjectCardComponent } from '../project-card/project-card.component';

import { Project } from '@domain/models/project.model';
import { TagType } from '@domain/models/tag.model';
import { Category } from '@presentation/shared/types/category-dev.type';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, CollapseModule, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  private allProjects = signal<Project[]>([]);
  readonly isFilterOpen = signal(false);
  readonly loading = signal(true);

  readonly filters = signal<Record<TagType, boolean>>(
    {} as Record<TagType, boolean>
  );

  selectedTags = computed(() => {
    const filters = this.filters();
    return Object.keys(filters)
      .filter(key => filters[key as TagType])
      .map(key => key as TagType);
  });

  readonly filtering = computed(() => this.selectedTags().length > 0);

  readonly projects = computed(() => {
    const projects = this.allProjects();
    const tags = this.selectedTags();

    if (!tags.length) return projects;

    return this.filterProjectsUseCase.execute(projects, tags);
  });

  readonly categories: Category[] = [
    {
      title: 'Backend',
      items: [
        { name: 'Java', binding: TagType.JAVA },
        { name: 'Spring Boot', binding: TagType.SPRING_BOOT },
        { name: 'Node JS', binding: TagType.NODE_JS },
      ]
    },
    {
      title: 'Frontend',
      items: [
        { name: 'Angular', binding: TagType.ANGULAR },
        { name: 'TypeScript', binding: TagType.TYPESCRIPT },
      ]
    }
  ];

  constructor(
    private getProjectsUseCase: GetProjectsUseCase,
    private filterProjectsUseCase: FilterProjectsUseCase
  ) {}

  async ngOnInit() {
    this.setSEO();

    this.loading.set(true);

    try {
      const data = await this.getProjectsUseCase.execute();
      this.allProjects.set(data);

      this.filters.set(this.createInitialFilters());

    } catch (error) {
      console.error('Error loading projects', error);
    } finally {
      this.loading.set(false);
    }
  }

  private setSEO(): void {
    const title = 'Portfolio IngAamira | Data Engineer & Fullstack Developer | Portfolio';
    const description = 'Explora los proyectos de Andrés Mira, Data Engineer y Fullstack Developer en Colombia. Desarrollo web, análisis de datos, automatización e inteligencia artificial.';
    const url = 'https://portfolio.ingaamira.com/portfolio';
    const image = 'https://portfolio.ingaamira.com/assets/icons/idea.png';

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private createInitialFilters(): Record<TagType, boolean> {
    return Object.values(TagType).reduce((acc, tag) => {
      acc[tag] = false;
      return acc;
    }, {} as Record<TagType, boolean>);
  }

  toggleFilter(tag: TagType) {
    this.filters.update(current => ({
      ...current,
      [tag]: !current[tag],
    }));

    if (window.innerWidth < 768) {
      this.isFilterOpen.set(false);
    }
  }

  resetFilters() {
    this.filters.set(this.createInitialFilters());
    this.isFilterOpen.set(false);
  }
}
