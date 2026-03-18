import { Routes } from '@angular/router';

import { LayoutComponent } from '@presentation/shared/components/layout/layout.component';
import { NotFoundComponent } from '@presentation/features/portfolio/pages/not-found/not-found.component';

import { portfolioRoutes } from '@presentation/features/portfolio/portfolio.routes';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      ...portfolioRoutes,
      {
        path: '**',
        component: NotFoundComponent,
      }
    ]
  }
];
