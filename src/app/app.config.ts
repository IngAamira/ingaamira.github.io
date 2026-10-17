import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideTranslateService } from "@ngx-translate/core";

import { provideBundledTranslateLoader } from "@infrastructure/i18n/bundled-translate.loader";

import { routes } from './app.routes';
import { ProjectDatasource } from "@infrastructure/datasources/project.datasource";
import { ProjectLocalDatasource } from "@infrastructure/datasources/project-local.datasource";
import { ProjectRepository } from "@domain/repositories/project.repository";
import { ProjectRepositoryImpl } from "@infrastructure/repositories/project.repository.impl";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideTranslateService({
      loader: provideBundledTranslateLoader(),
      fallbackLang: 'en',
      lang: 'en'
    }),

    {
      provide: ProjectDatasource,
      useClass: ProjectLocalDatasource
    },
    {
      provide: ProjectRepository,
      useClass: ProjectRepositoryImpl
    }
  ],
};
