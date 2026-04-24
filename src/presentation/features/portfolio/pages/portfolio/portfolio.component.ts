import {
  Component,
  OnInit,
  signal,
  computed,
  inject,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetProjectsUseCase } from '@domain/use-cases/get-projects.use-case';
import { FilterProjectsUseCase } from '@domain/use-cases/filter-projects.use-case';

import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

import { Project } from '@domain/models/project.model';
import { TagType } from '@domain/models/tag.model';

import { BrowserService } from '@presentation/shared/services/browser.service';
import { SeoService } from '@presentation/shared/services/seo.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent,
    ProjectModalComponent
  ],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {

  private browser = inject(BrowserService);
  private seo = inject(SeoService);

  private getProjectsUseCase = inject(GetProjectsUseCase);
  private filterProjectsUseCase = inject(FilterProjectsUseCase);

  /** 🔥 SIEMPRE array inicial */
  private allProjects = signal<Project[]>([]);

  readonly isFilterOpen = signal(false);
  readonly loading = signal(true);
  readonly selectedProject = signal<Project | null>(null);

  readonly filters = signal<Record<TagType, boolean>>(
    this.createInitialFilters()
  );

  readonly selectedTags = computed(() => {
    const filters = this.filters() || {};

    return Object.keys(filters)
      .filter(key => filters[key as TagType])
      .map(key => key as TagType);
  });

  readonly filtering = computed(() => this.selectedTags().length > 0);

  /** 🔥 SIEMPRE retorna array */
  readonly projects = computed(() => {
    const projects = this.allProjects() || [];
    const tags = this.selectedTags();

    if (!tags.length) return projects;

    return this.filterProjectsUseCase.execute(projects, tags) || [];
  });

  readonly categories = [
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

  async ngOnInit() {
    this.setSEO();

    try {
      this.loading.set(true);

      const data = await this.getProjectsUseCase.execute();

      /** 🔥 DEFENSA SSR */
      this.allProjects.set(Array.isArray(data) ? data : []);

    } catch (error) {
      console.error('Error loading projects', error);

      /** 🔥 fallback SSR */
      this.allProjects.set([]);

    } finally {
      this.loading.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (!this.browser.isBrowser()) return;
    this.selectedProject.set(null);
  }

  private setSEO(): void {
    this.seo.setSEO({
      title: 'Portfolio IngAamira | Portfolio',
      description: 'Explora proyectos de Andrés Mira.',
      url: 'https://portfolio.ingaamira.com/portfolio',
      image: 'https://portfolio.ingaamira.com/assets/icons/idea.png'
    });
  }

  private createInitialFilters(): Record<TagType, boolean> {
    return Object.values(TagType).reduce((acc, tag) => {
      acc[tag as TagType] = false;
      return acc;
    }, {} as Record<TagType, boolean>);
  }

  toggleFilter(tag: TagType) {
    this.filters.update(current => ({
      ...current,
      [tag]: !current[tag],
    }));

    if (!this.browser.isBrowser()) return;

    if (this.browser.window && this.browser.window.innerWidth < 768) {
      this.isFilterOpen.set(false);
    }
  }

  resetFilters() {
    this.filters.set(this.createInitialFilters());
    this.isFilterOpen.set(false);
  }
}
