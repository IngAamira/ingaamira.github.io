import {
  Component,
  OnInit,
  signal,
  computed,
  inject,
  HostListener,
  ChangeDetectionStrategy
} from '@angular/core';


import { GetProjectsUseCase } from '@domain/use-cases/get-projects.use-case';
import { FilterProjectsUseCase } from '@domain/use-cases/filter-projects.use-case';

import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

import { Project } from '@domain/models/project.model';
import { TagType } from '@domain/models/tag.model';

import { BrowserService } from '@presentation/shared/services/browser.service';
import { SeoService } from '@presentation/shared/services/seo.service';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from '@presentation/shared/services/locale.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ProjectCardComponent,
    ProjectModalComponent
],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {

  private browser = inject(BrowserService);
  private seo = inject(SeoService);
  private translate = inject(TranslateService);
  private localeService = inject(LocaleService);

  private getProjectsUseCase = inject(GetProjectsUseCase);
  private filterProjectsUseCase = inject(FilterProjectsUseCase);

  private readonly allProjects = signal<Project[]>([]);

  readonly isFilterOpen = signal(false);
  readonly loading = signal(true);
  readonly selectedProject = signal<Project | null>(null);

  readonly filters = signal<Record<TagType, boolean>>(
    this.createInitialFilters()
  );

  readonly selectedTags = computed(() =>
    Object.entries(this.filters())
      .filter(([_, active]) => active)
      .map(([tag]) => tag as TagType)
  );

  readonly filtering = computed(() => this.selectedTags().length > 0);

  readonly projects = computed(() => {
    const tags = this.selectedTags();
    const projects = this.allProjects();

    return tags.length
      ? this.filterProjectsUseCase.execute(projects, tags)
      : projects;
  });

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
  ] as const;

  async ngOnInit(): Promise<void> {
    this.setSEO();
    await this.loadProjects();
  }

  private async loadProjects(): Promise<void> {
    this.loading.set(true);

    try {
      const data = await this.getProjectsUseCase.execute();
      this.allProjects.set(Array.isArray(data) ? data : []);

    } catch (error) {
      console.error('[Portfolio] Error loading projects', error);
      this.allProjects.set([]);

    } finally {
      this.loading.set(false);
    }
  }

  private setSEO(): void {
    this.seo.setSEO({
      title: this.translate.instant('SEO.PORTFOLIO.TITLE'),
      description: this.translate.instant('SEO.PORTFOLIO.DESCRIPTION'),
      url: this.localeService.url('/portfolio'),
      alternates: this.localeService.alternates('/portfolio'),
      image: 'https://portfolio.ingaamira.com/assets/icons/idea.png',
    });
  }

  toggleFilter(tag: TagType): void {
    this.filters.update(current => ({
      ...current,
      [tag]: !current[tag],
    }));

    this.closeFilterOnMobile();
  }

  resetFilters(): void {
    this.filters.set(this.createInitialFilters());
    this.isFilterOpen.set(false);
  }

  private closeFilterOnMobile(): void {
    const win = this.browser.window;

    if (win && win.innerWidth < 768) {
      this.isFilterOpen.set(false);
    }
  }

  openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  closeProject(): void {
    this.selectedProject.set(null);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeProject();
  }

  private createInitialFilters(): Record<TagType, boolean> {
    return Object.values(TagType).reduce((acc, tag) => {
      acc[tag as TagType] = false;
      return acc;
    }, {} as Record<TagType, boolean>);
  }

}
