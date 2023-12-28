import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './domains/info/pages/contact/contact.component';
import { HomeComponent } from './domains/info/pages/home/home.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { PortfolioComponent } from './domains/info/pages/portfolio/portfolio.component';
import { ResumeComponent } from './domains/info/pages/resume/resume.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
