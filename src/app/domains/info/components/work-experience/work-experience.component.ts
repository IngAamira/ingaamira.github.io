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
      <div *ngFor="let job of company.jobs">
        <div class="mb-0">{{ job.title | translate }}</div>
        <div class="text-secondary">{{ 'TIME.DATE' | translate }}: {{ job.date }}</div>
        <ul>
          <li *ngFor="let achievement of job.achievements">
            {{ achievement | translate }}
          </li>
        </ul>
        <p>🔧 Technical Contributions</p>
        <ul>
          <li *ngFor="let contribution of job.contributions">
            {{ contribution | translate }}
          </li>
        </ul>
      </div>
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
    this.translate.get('WORK.COMPANIES').subscribe((data: any[]) => {
      this.companies = data.map(company => ({
        name: company.NAME,
        jobs: company.JOBS.map((job: any) => ({
          title: job.TITLE,
          date: job.DATE,
          achievements: job.ACHIEVEMENTS,
          contributions: job.CONTRIBUTIONS,
        })),
      }));
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
