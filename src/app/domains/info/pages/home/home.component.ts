import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { Project } from '../../../shared/models/project';
import { ProjectsService } from '../../../shared/services/projects.service';
import { TranslationModule } from '../../../shared/modules/translation.module';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, RouterLink, NgFor, TranslationModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  featureProject: Project = {} as Project;
  years: number;

  private startDate: Date = new Date(2011, 11, 28);
  //En JavaScript, los meses se indexan desde 0 (enero es 0, febrero es 1, etc.).
  //Fecha de incio de labores (28 de diciembre del 2011).

  constructor (
    private titleService: Title,
    private projectService: ProjectsService,
    public bsModalRef: BsModalRef,
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

}
