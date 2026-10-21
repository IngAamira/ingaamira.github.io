import { Routes, RouterLink } from '@angular/router';

import { LayoutComponent } from '@presentation/shared/components/layout/layout.component';
import { NotFoundComponent } from '@presentation/features/portfolio/pages/not-found/not-found.component';
import {
  localeMatchGuard,
  localeResolver,
  rootLocaleRedirectGuard,
} from '@presentation/shared/guards/locale.guard';

import { portfolioRoutes } from '@presentation/features/portfolio/portfolio.routes';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      /* `/` nunca se indexa: el 302 real lo emite `server.ts`; este guard es el fallback en cliente. */
      {
        path: '',
        pathMatch: 'full',
        component: NotFoundComponent,
        canActivate: [rootLocaleRedirectGuard],
      },
      {
        path: ':lang',
        canMatch: [localeMatchGuard],
        resolve: { locale: localeResolver },
        children: [
          ...portfolioRoutes,
          {
            path: '**',
            component: NotFoundComponent,
          },
        ],
      },
      {
        path: '**',
        component: NotFoundComponent,
      }
    ]
  }
];
