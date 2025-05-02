import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { NgxBootstrapModule } from 'app/domains/shared/modules/ngx-bootstrap.module';
import { Project } from '../../../shared/interfaces/project';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectsService } from '../../../shared/services/projects.service';
import { Tag } from '../../../shared/classes/tag';

type FilterKey = 'java' | 'python' | 'javascript' | 'typescript' | 'spring' | 'angular' | 'nodejs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule, NgxBootstrapModule, FormsModule],
  templateUrl: './portfolio.component.html'
})
export default class PortfolioComponent implements OnInit {

  languages: { name: string; binding: FilterKey }[] = [
    { name: 'Java', binding: 'java' },
    { name: 'JavaScript', binding: 'javascript' },
    { name: 'TypeScript', binding: 'typescript' },
    { name: 'Python', binding: 'python' }
  ];

  frameworks: { name: string; binding: FilterKey }[] = [
    { name: 'Spring Boot', binding: 'spring' },
    { name: 'Angular', binding: 'angular' },
    { name: 'Node Js', binding: 'nodejs' }
  ];

  projects = {} as Project[];

  /* Processes */
  isCollapsed: boolean = true;
  filtering: boolean = false;

  /* Filters */
  filters: Record<FilterKey, boolean> = {
    java: false,
    python: false,
    javascript: false,
    typescript: false,
    spring: false,
    angular: false,
    nodejs: false
  };

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    const filterTags: Tag[] = [];
    const filters: Record<FilterKey, Tag> = {
      java: Tag.JAVA,
      python: Tag.PYTHON,
      javascript: Tag.JAVASCRIPT,
      typescript: Tag.TYPESCRIPT,
      spring: Tag.SPRING,
      angular: Tag.ANGULAR,
      nodejs: Tag.NODEJS
    };

    for (const key in filters) {
      if (this.filters[key as FilterKey]) {
        filterTags.push(filters[key as FilterKey]);
      }
    }

    this.filtering = filterTags.length > 0;
    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    for (const key in this.filters) {
      this.filters[key as FilterKey] = false;
    }

    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
