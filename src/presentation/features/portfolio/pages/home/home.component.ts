import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { Project } from '@domain/models/project.model';
import { ProjectRepository } from '@domain/repositories/project.repository';

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

  private titleService = inject(Title);
  private projectRepository = inject(ProjectRepository);
  private translate = inject(TranslateService);

  project: Project | null = null;
  years: number;

  private startDate: Date = new Date(2012, 11, 16);

  constructor() {
    this.titleService.setTitle('Home');
    this.years = this.calculateYears(this.startDate);
  }

  async ngOnInit(): Promise<void> {
    this.project = await this.projectRepository.getProjectById(0);
  }

  private calculateYears(startDate: Date): number {
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
  }

  openContactPage() {
    const url = 'https://ingaamira.com/';
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
