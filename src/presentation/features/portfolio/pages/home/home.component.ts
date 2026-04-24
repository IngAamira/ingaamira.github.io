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

  project: Project | null = null;
  years: number;

  private startDate: Date = new Date(2012, 11, 16);

  constructor() {
    this.years = this.calculateYears(this.startDate);
  }

  async ngOnInit(): Promise<void> {
    this.setSEO();

    try {
      this.project = await this.projectRepository.getProjectById(0);
    } catch (error) {
      console.error('[HomeComponent] Error loading project', error);

      this.project = {
        id: -1,
        name: 'Default project',
        summary: [],
        pictures: [],
        tags: [],
        projectLink: ''
      };
    }
  }

  private setSEO(): void {
    this.seo.setSEO({
      title: 'Portfolio IngAamira | Data Engineer & Fullstack Developer',
      description: 'Desarrollador Fullstack y Data Engineer en Colombia. Especializado en desarrollo web, análisis de datos, automatización e inteligencia artificial.',
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

  private getLang(): string {
    const doc = this.browser.document;
    return doc?.documentElement?.lang || 'en';
  }

  goToContact(): void {
    const lang = this.getLang();

    if (this.browser.window?.gtag) {
      this.browser.window.gtag('event', 'cta_click', {
        cta_name: 'contact_home',
        page: 'home',
        language: lang
      });
    }

    this.router.navigate(['/contact']);
  }

  openMainWebsite(): void {
    const url = 'https://ingaamira.com/';
    const lang = this.getLang();

    if (this.browser.window?.gtag) {
      this.browser.window.gtag('event', 'external_click_ingaamira', {
        destination: url,
        page: 'home',
        language: lang
      });
    }

    this.browser.window?.open(url, '_blank', 'noopener,noreferrer');
  }
}
