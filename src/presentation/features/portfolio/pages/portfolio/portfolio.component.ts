import { Component, OnInit, signal, computed, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

import { GetProjectsUseCase } from '@domain/use-cases/get-projects.use-case';
import { FilterProjectsUseCase } from '@domain/use-cases/filter-projects.use-case';

import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

import { Project } from '@domain/models/project.model';
import { TagType } from '@domain/models/tag.model';
import { Category } from '@presentation/shared/types/category-dev.type';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent,
    ProjectModalComponent // 🔥 IMPORTANTE
  ],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  private allProjects = signal<Project[]>([]);

  readonly isFilterOpen = signal(false);
  readonly loading = signal(true);

  // 🔥 NUEVO: estado del modal
  readonly selectedProject = signal<Project | null>(null);

  readonly filters = signal<Record<TagType, boolean>>(
    {} as Record<TagType, boolean>
  );

  // 🔹 Tags seleccionados
  readonly selectedTags = computed(() => {
    const filters = this.filters();

    return Object.keys(filters)
      .filter(key => filters[key as TagType])
      .map(key => key as TagType);
  });

  // 🔹 Si hay filtros activos
  readonly filtering = computed(() => this.selectedTags().length > 0);

  // 🔹 Proyectos filtrados
  readonly projects = computed(() => {
    const projects = this.allProjects();
    const tags = this.selectedTags();

    if (!tags.length) return projects;

    return this.filterProjectsUseCase.execute(projects, tags);
  });

  // 🔹 Categorías
  readonly categories: Category[] = [
    {
      title: 'Backend',
      items: [
        { name: 'Java', binding: TagType.JAVA },
        { name: 'Python', binding: TagType.PYTHON },
        { name: 'Spring Boot', binding: TagType.SPRING_BOOT },
        { name: 'Node JS', binding: TagType.NODE_JS },
      ]
    },
    {
      title: 'Frontend',
      items: [
        { name: 'Angular', binding: TagType.ANGULAR },
        { name: 'JavaScript', binding: TagType.JAVASCRIPT },
        { name: 'TypeScript', binding: TagType.TYPESCRIPT },
      ]
    },
    {
      title: 'Database',
      items: [
        { name: 'Postgres', binding: TagType.POSTGRES },
      ]
    },
    {
      title: 'Web',
      items: [
        { name: 'Html', binding: TagType.HTML },
        { name: 'CSS', binding: TagType.CSS },
        { name: 'Bootstrap', binding: TagType.BOOTSTRAP },
        { name: 'Thymeleaf', binding: TagType.THYMELEAF },
      ]
    },
    {
      title: 'API',
      items: [
        { name: 'Giphy', binding: TagType.GIPHY },
        { name: 'Fast API', binding: TagType.FAST_API },
        { name: 'WhatsApp API', binding: TagType.WHATSAPP_API },
        { name: 'Open AI', binding: TagType.OPEN_AI },
      ]
    },
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

  // 🔥 UX PRO: cerrar modal con ESC
  @HostListener('document:keydown.escape')
  onEscape() {
    this.selectedProject.set(null);
  }

  private setSEO(): void {
    const title = 'Portfolio IngAamira | Data Engineer & Fullstack Developer | Portfolio';
    const description = 'Explora los proyectos de Andrés Mira, Data Engineer y Fullstack Developer en Colombia.';
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

    // UX mobile
    if (window.innerWidth < 768) {
      this.isFilterOpen.set(false);
    }
  }

  resetFilters() {
    this.filters.set(this.createInitialFilters());
    this.isFilterOpen.set(false);
  }

}
