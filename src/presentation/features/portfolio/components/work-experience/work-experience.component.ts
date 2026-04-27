import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="space-y-8">
      <div *ngFor="let company of companies" class="border-b pb-6">
        <h3 class="text-lg font-semibold text-purple-600 mb-2">
          {{ company.name | translate }}
        </h3>
        <div *ngFor="let job of company.jobs" class="mb-6">
          <h4 class="text-base font-medium text-gray-800">
            {{ job.title | translate }}
          </h4>
          <p class="text-sm text-gray-500 mb-2">
            {{ 'TIME.DATE' | translate }}: {{ job.date }}
          </p>
          <div class="mb-3">
            <p class="text-sm font-semibold text-gray-700 mb-1">
              🚀 {{ job.title_achievements | translate }}
            </p>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li *ngFor="let achievement of job.achievements">
                {{ achievement | translate }}
              </li>
            </ul>
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-700 mb-1">
              🔧 {{ job.title_contributions | translate }}
            </p>

            <ul class="space-y-2 text-sm text-gray-600">
              <li *ngFor="let contribution of job.contributions">
                <p class="font-medium text-gray-700">
                  {{ contribution.category | translate }}
                </p>
                <ul class="list-disc list-inside ml-4 text-gray-600 space-y-1">
                  <li *ngFor="let detail of contribution.details">
                    {{ detail | translate }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
        this.companies = data.map((company) => ({
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
      },
    });
  }

  ngOnDestroy(): void {
    this.langChangeSubscription?.unsubscribe();
  }
}
