import { Component, OnInit, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { Project } from '@domain/models/project.model';
import { ProjectRepository } from '@domain/repositories/project.repository';

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

  private title = inject(Title);
  private meta = inject(Meta);
  private router = inject(Router);

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

    this.project = await this.projectRepository.getProjectById(0);
  }

  private setSEO(): void {
    const title = 'Portfolio IngAamira | Data Engineer & Fullstack Developer';
    const description = 'Desarrollador Fullstack y Data Engineer en Colombia. Especializado en desarrollo web, análisis de datos, automatización e inteligencia artificial.';
    const url = 'https://portfolio.ingaamira.com/';
    const image = 'https://portfolio.ingaamira.com/assets/preview.jpg';

    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private calculateYears(startDate: Date): number {
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
  }

  goToContact(): void {
    const lang = document.documentElement.lang || 'en';

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        cta_name: 'contact_home',
        page: 'home',
        language: lang
      });
    }

    this.router.navigate(['/contact']);
  }

  openMainWebsite(): void {
    const url = 'https://ingaamira.com/';
    const lang = document.documentElement.lang || 'en';

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'external_click_ingaamira', {
        destination: url,
        page: 'home',
        language: lang
      });
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
