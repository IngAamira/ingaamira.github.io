import { Routes } from '@angular/router';

import { LayoutComponent } from '@presentation/shared/components/layout/layout.component';
import { NotFoundComponent } from '@presentation/features/portfolio/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@presentation/features/portfolio/pages/home/home.component')
            .then(m => m.HomeComponent),
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('@presentation/features/portfolio/pages/portfolio/portfolio.component')
            .then(m => m.PortfolioComponent),
      },
      {
        path: 'resume',
        loadComponent: () =>
          import('@presentation/features/portfolio/pages/resume/resume.component')
            .then(m => m.ResumeComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('@presentation/features/portfolio/pages/contact/contact.component')
            .then(m => m.ContactComponent),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
