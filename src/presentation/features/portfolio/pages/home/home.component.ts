import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { Project } from '@domain/models/project.model';
import { ProjectRepository } from '@domain/repositories/project.repository';

import { BrowserService } from '@presentation/shared/services/browser.service';
import { SeoService } from '@presentation/shared/services/seo.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  private router = inject(Router);
  private browser = inject(BrowserService);
  private seo = inject(SeoService);
  private projectRepository = inject(ProjectRepository);
  private translate = inject(TranslateService);

  project: Project = {
    id: -1,
    name: '',
    summary: [],
    projectLink: '',
    pictures: [],
    tags: []
  };

  readonly years: number;
  selectedImage: string | null = null;

  private readonly startDate: Date = new Date(2012, 11, 16);

  constructor() {
    this.years = this.calculateYears(this.startDate);
  }

  async ngOnInit(): Promise<void> {
    this.setSEO();
    await this.loadProject();
  }

  private async loadProject(): Promise<void> {
    try {
      const data = await this.projectRepository.getProjectById(0);

      if (data) {
        this.project = data;
      }

    } catch (error) {
      console.error('[HomeComponent] Error loading project', error);
    }
  }

  private setSEO(): void {
    this.seo.setSEO({
      title: 'Portfolio IngAamira | Data Engineer & Fullstack Developer',
      description: 'Portfolio de Andres Mira, un talentoso Data Engineer y Fullstack Developer en Colombia. Especializado en desarrollo web, análisis de datos, automatización e inteligencia artificial.',
      url: 'https://portfolio.ingaamira.com/',
      image: 'https://portfolio.ingaamira.com/assets/preview.jpg',
      type: 'website'
    });
  }

  private calculateYears(startDate: Date): number {
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
  }

  private get lang(): string {
    return this.browser.lang;
  }

  goToContact(): void {
    this.browser.gtag('cta_click', {
      cta_name: 'contact_home',
      page: 'home',
      language: this.lang
    });

    this.router.navigate(['/contact']);
  }

  openMainWebsite(): void {
    const url = 'https://ingaamira.com/';

    this.browser.gtag('external_click_ingaamira', {
      destination: url,
      page: 'home',
      language: this.lang
    });

    this.browser.open(url);
  }

  get aboutTexts(): string[] {
    const value = this.translate.instant('ABOUT_ME.TEXT');

    if (Array.isArray(value)) return value;
    if (typeof value === 'string') return [value];

    return [];
  }

}
