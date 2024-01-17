import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Project } from '../../../shared/classes/project';
import { ProjectsService } from '../../../shared/services/projects.service';
import { NgxBootstrapModule } from '../../../shared/modules/ngx-bootstrap.module';
import { TranslationService } from '../../../shared/services/translation.service';
import { TranslationModule } from 'app/domains/shared/modules/translation.module';

@Component({
  standalone: true,
  imports: [CommonModule, TranslationModule, NgxBootstrapModule, RouterLink],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export default class HomeComponent implements OnInit {
  featureProject: Project = {} as Project;
  years: number;

  private startDate: Date = new Date(2011, 11, 28);
  //En JavaScript, los meses se indexan desde 0 (enero es 0, febrero es 1, etc.).
  //Fecha de incio de labores (28 de diciembre del 2011).

  constructor(
    private titleService: Title,
    private projectService: ProjectsService,
    public ngxBootstrapModule: NgxBootstrapModule,
    private translationService: TranslationService
  ) {
    this.titleService.setTitle('Home');
    this.years = this.calculateYears(new Date(this.startDate));
  }
  ngOnInit(): void {
    this.featureProject = this.projectService.GetProjectById(0);
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

  private calculateYears(startDate: Date): number {
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    const years = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
    return years;
  }

  getWidth(): number {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
      return 600;
    } else if (screenWidth >= 480) {
      return 400;
    } else {
      return 300;
    }
  }

  getHeight(): number {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
      return 220;
    } else if (screenWidth >= 480) {
      return 150;
    } else {
      return 150;
    }
  }

  isResponsive(): boolean {
    return window.innerWidth < 768;
  }

}
