import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TranslateModule } from '@ngx-translate/core';

import { NgxBootstrapModule } from '../../../shared/modules/ngx-bootstrap.module';
import { Project } from '../../../shared/interfaces/project';
import { ProjectsService } from '../../../shared/services/projects.service';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, NgxBootstrapModule, RouterLink, CarouselModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export default class HomeComponent implements OnInit {

  project = {} as Project;
  years: number;
  private startDate: Date = new Date(2011, 11, 28);
  //En JavaScript, los meses se indexan desde 0 (enero es 0, febrero es 1, etc.).
  //Fecha de incio de labores (28 de diciembre del 2011).

  constructor(
    private titleService: Title,
    private projectService: ProjectsService,
    public ngxBootstrapModule: NgxBootstrapModule,
  ) {
    this.titleService.setTitle('Home');
    this.years = this.calculateYears(new Date(this.startDate));
  }

  ngOnInit(): void {
    this.project = this.projectService.GetProjectById(0);
  }

  private calculateYears(startDate: Date): number {
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    const years = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
    return years;
  }

}
