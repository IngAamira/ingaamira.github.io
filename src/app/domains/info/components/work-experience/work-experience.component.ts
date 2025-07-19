import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { Company, Job, Contribution } from '../../interfaces/i18n-item';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <ng-container *ngIf="companies$ | async as companies">
      <div *ngFor="let company of companies" style="text-align: left;">
        <div class="text-primary">{{ company.name | translate }}</div>
        <ng-container *ngFor="let job of company.jobs">
          <div class="mb-0">{{ job.title | translate }}</div>
          <div class="text-secondary">{{ 'TIME.DATE' | translate }}: {{ job.date }}</div>
          <p>🚀 {{ job.title_achievements | translate }}:</p>
          <ul>
            <li *ngFor="let achievement of job.achievements">
              {{ achievement | translate }}
            </li>
          </ul>
          <p class="font-weight-bold">🔧 {{ job.title_contributions | translate }}:</p>
          <ul>
            <li *ngFor="let contribution of job.contributions">
              {{ contribution.category | translate }}
              <ul>
                <li *ngFor="let detail of contribution.details">
                  {{ detail | translate }}
                </li>
              </ul>
            </li>
          </ul>
        </ng-container>
        <hr />
      </div>
    </ng-container>
  `,
})
export class WorkExperienceComponent {
  companies$: Observable<Company[]>;

  constructor(private readonly translate: TranslateService) {
    this.companies$ = this.translate.onLangChange.pipe(
      startWith(null),
      switchMap(() => this.translate.get('WORK.COMPANIES')),
      map((data: any[]) => (data || []).map(company => this.mapCompany(company)))
    );
  }

  private mapCompany(company: any): Company {
    return {
      name: company.NAME,
      jobs: (company.JOBS || []).map((job: any) => this.mapJob(job)),
    };
  }

  private mapJob(job: any): Job {
    return {
      title: job.TITLE,
      date: job.DATE,
      title_achievements: job.TITLE_ACHIEVEMENTS,
      achievements: job.ACHIEVEMENTS || [],
      title_contributions: job.TITLE_CONTRIBUTIONS,
      contributions: (job.CONTRIBUTIONS || []).map((c: any) => this.mapContribution(c)),
    };
  }

  private mapContribution(contribution: any): Contribution {
    return {
      category: contribution.category,
      details: contribution.details || [],
    };
  }

}
