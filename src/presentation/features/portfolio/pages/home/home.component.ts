import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { Project } from '@domain/models/project.model';
import { ProjectRepository } from '@domain/repositories/project.repository';

import { BrowserService } from '@presentation/shared/services/browser.service';
import { SeoService } from '@presentation/shared/services/seo.service';
import { LocaleService } from '@presentation/shared/services/locale.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    TranslateModule,
    RouterLink
],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  private router = inject(Router);
  private browser = inject(BrowserService);
  private seo = inject(SeoService);
  private localeService = inject(LocaleService);
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

  /** Caso destacado en la home (Fase 4: Eye Care Hub → opticarlos.ingaamira.com). */
  private readonly featuredProjectName = 'Eye Care Hub';

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
      /* Fase 4: el destacado de la home es el caso con demo en producción. */
      const data = await this.projectRepository.getProjects();
      this.project =
        data.find((p) => p.name === this.featuredProjectName) ?? data[0];

    } catch (error) {
      console.error('[HomeComponent] Error loading project', error);
    }
  }

private setSEO(): void {
    this.seo.setSEO({
      title: this.translate.instant('SEO.HOME.TITLE'),
      description: this.translate.instant('SEO.HOME.DESCRIPTION'),
      url: this.localeService.url(''),
      alternates: this.localeService.alternates(''),
      image: 'https://portfolio.ingaamira.com/assets/og/preview.png',
      type: 'website',
    });
  }

  /** Enlace al portfolio con el idioma de la URL. */
  get portfolioLink(): string {
    return this.localeService.path('/portfolio');
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

    this.router.navigateByUrl(this.localeService.path('/contact'));
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
