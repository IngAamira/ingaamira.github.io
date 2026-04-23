import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";

import { routes } from './app.routes';
import { ProjectDatasource } from "@infrastructure/datasources/project.datasource";
import { ProjectLocalDatasource } from "@infrastructure/datasources/project-local.datasource";
import { ProjectRepository } from "@domain/repositories/project.repository";
import { ProjectRepositoryImpl } from "@infrastructure/repositories/project.repository.impl";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),

    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json'
      }),
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
