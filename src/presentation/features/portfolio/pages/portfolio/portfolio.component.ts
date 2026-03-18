import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { Project } from '@domain/models/project.model';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectRepository } from '@domain/repositories/project.repository';
import { TagType } from '@domain/models/tag.model';

type FilterKey =
  | 'java'
  | 'python'
  | 'javascript'
  | 'typescript'
  | 'spring'
  | 'angular'
  | 'nodejs';

@Component({
  standalone: true,
  selector: 'app-portfolio',
  imports: [
    CommonModule,
    FormsModule,
    CollapseModule,
    ProjectCardComponent,
  ],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {

  private titleService = inject(Title);
  private projectRepository = inject(ProjectRepository);

  // 🔥 STATE (signals)
  projects = signal<Project[]>([]);
  filtering = signal(false);
  isCollapsed = signal(true);

  filters = signal<Record<FilterKey, boolean>>({
    java: false,
    python: false,
    javascript: false,
    typescript: false,
    spring: false,
    angular: false,
    nodejs: false,
  });

  languages: { name: string; binding: FilterKey }[] = [
    { name: 'Java', binding: 'java' },
    { name: 'JavaScript', binding: 'javascript' },
    { name: 'TypeScript', binding: 'typescript' },
    { name: 'Python', binding: 'python' },
  ];

  frameworks: { name: string; binding: FilterKey }[] = [
    { name: 'Spring Boot', binding: 'spring' },
    { name: 'Angular', binding: 'angular' },
    { name: 'Node Js', binding: 'nodejs' },
  ];

  categories = [
    { title: 'Languages', items: this.languages },
    { title: 'Frameworks', items: this.frameworks },
  ];

  constructor() {
    this.titleService.setTitle('Portfolio');

    this.loadProjects();

    effect(() => {
      this.applyFilters();
    });
  }

  private async loadProjects() {
    const data = await this.projectRepository.getProjects();
    this.projects.set(data);
  }

   private async applyFilters() {
    const currentFilters = this.filters();

    const filtersMap: Record<FilterKey, TagType> = {
      java: TagType.JAVA,
      python: TagType.PYTHON,
      javascript: TagType.JAVASCRIPT,
      typescript: TagType.TYPESCRIPT,
      spring: TagType.SPRING_BOOT,
      angular: TagType.ANGULAR,
      nodejs: TagType.NODE_JS,
    };

    const activeTags = Object.keys(currentFilters)
      .filter(key => currentFilters[key as FilterKey])
      .map(key => filtersMap[key as FilterKey]);

    this.filtering.set(activeTags.length > 0);

    const data = this.filtering()
      ? await this.projectRepository.getProjectsByFilter(activeTags)
      : await this.projectRepository.getProjects();

    this.projects.set(data);
  }

  // 🔥 Toggle filtro (reactivo)
  toggleFilter(key: FilterKey) {
    this.filters.update(f => ({
      ...f,
      [key]: !f[key],
    }));
  }

  // 🔥 Reset filtros
  resetFilters() {
    this.filters.set({
      java: false,
      python: false,
      javascript: false,
      typescript: false,
      spring: false,
      angular: false,
      nodejs: false,
    });
  }
}
