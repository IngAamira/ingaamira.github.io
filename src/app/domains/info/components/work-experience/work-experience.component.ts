import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Company } from '../../interfaces/i18n-item';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
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
  `,
})
export class WorkExperienceComponent implements OnInit, OnDestroy {
  companies: Company[] = [];
  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadWorkExperience();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadWorkExperience();
    });
  }

  private loadWorkExperience(): void {
    this.translate.get('WORK.COMPANIES').subscribe({
      next: (data: any[]) => {
        this.companies = data.map(company => ({
          name: company.NAME,
          jobs: company.JOBS.map((job: any) => ({
            title: job.TITLE,
            date: job.DATE,
            title_achievements: job.TITLE_ACHIEVEMENTS,
            achievements: job.ACHIEVEMENTS,
            title_contributions: job.TITLE_CONTRIBUTIONS,
            contributions: job.CONTRIBUTIONS.map((contribution: any) => ({
              category: contribution.category,
              details: contribution.details,
            })),
          })),
        }));
      },
      error: (err) => {
        console.error('Error loading work experience data:', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.langChangeSubscription?.unsubscribe();
  }
}
