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

  projects = {} as Project[];

  /* Processes */
  isCollapsed: boolean = true;
  filtering: boolean = false;

  /* Filters */
  java: boolean = false;
  python: boolean = false;
  javascript: boolean = false;
  typescript: boolean = false;
  spring: boolean = false;
  angular: boolean = false;
  nodejs: boolean = false;

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
      if (this[key as FilterKey]) {
        filterTags.push(filters[key as FilterKey]);
      }
    }

    this.filtering = filterTags.length > 0;
    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    const filters: FilterKey[] = ['java', 'python', 'javascript', 'typescript', 'spring', 'angular', 'nodejs'];

    filters.forEach(filter => {
      this[filter] = false;
    });

    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
