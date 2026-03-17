import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LayoutComponent } from '@presentation/shared/components/layout/layout.component';

import HomeComponent from '@presentation/features/profile/pages/home/home.component';
import PortfolioComponent from '@presentation/features/profile/pages/portfolio/portfolio.component';
import ResumeComponent from '@presentation/features/profile/pages/resume/resume.component';
import ContactComponent from '@presentation/features/profile/pages/contact/contact.component';
import NotFoundComponent from '@presentation/features/profile/pages/not-found/not-found.component';

export const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true, useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
