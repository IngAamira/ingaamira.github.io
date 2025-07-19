import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxBootstrapModule } from '../../../shared/modules/ngx-bootstrap.module';
import { Project, FeaturedProject } from '../../../shared/interfaces/project';
import { ProjectsService } from '../../../shared/services/projects.service';
import { Observable, map, startWith, switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, NgxBootstrapModule, RouterLink, CarouselModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export default class HomeComponent {
  project: Project;
  years: number;
  aboutMeTexts$: Observable<string[]>;
  featuredProject$: Observable<FeaturedProject>;

  private readonly startDate: Date = new Date(2012, 11, 16);

  constructor(
    private readonly titleService: Title,
    private readonly projectService: ProjectsService,
    public ngxBootstrapModule: NgxBootstrapModule,
    private readonly translate: TranslateService
  ) {
    this.titleService.setTitle('Home');
    this.project = this.projectService.GetProjectById(0);
    this.years = this.calculateYears(this.startDate);

    this.aboutMeTexts$ = this.translate.onLangChange.pipe(
      startWith(null),
      switchMap(() => this.translate.get('ABOUT_ME.TEXT')),
      map(texts => Array.isArray(texts) ? texts : [String(texts)])
    );

    this.featuredProject$ = this.translate.onLangChange.pipe(
      startWith(null),
      switchMap(() => this.translate.get('FEATURED_PROJECT'))
    );
  }

  private calculateYears(startDate: Date): number {
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    const years = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
    return years;
  }

}
