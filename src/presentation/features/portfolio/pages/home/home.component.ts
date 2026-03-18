import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TranslateModule } from '@ngx-translate/core';


import { Project } from '@presentation/shared/interfaces/project';
import { ProjectsService } from '@presentation/shared/services/projects.service';
import { AboutMeTexts } from '../../interfaces/i18n-item';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink,
    CarouselModule
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  project = {} as Project;
  years: number;
  private startDate: Date = new Date(2012, 11, 16);
  //En JavaScript, los meses se indexan desde 0 (enero es 0, febrero es 1, etc.).
  //Fecha de incio de labores (16 de diciembre del 2012).

  aboutMeTexts: AboutMeTexts = { texts: [] };

  constructor(
    private titleService: Title,
    private projectService: ProjectsService,
    private translate: TranslateService
  ) {
    this.titleService.setTitle('Home');
    this.years = this.calculateYears(new Date(this.startDate));
  }

  ngOnInit(): void {
    this.project = this.projectService.GetProjectById(0);
    this.translate.get('ABOUT_ME.TEXT').subscribe((texts: string[]) => {
      this.aboutMeTexts.texts = texts;
    });
  }

  private calculateYears(startDate: Date): number {
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    const years = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
    return years;
  }

  openContactPage() {
    const url = 'https://ingaamira.netlify.app/';
    window.open(url, '_blank', 'noopener,noreferrer');
  }

}
