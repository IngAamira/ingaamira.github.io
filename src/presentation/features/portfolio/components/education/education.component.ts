import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="max-w-3xl mx-auto space-y-6">
      <div
        *ngFor="let university of universities"
        class="bg-white border rounded-xl p-5 shadow-sm"
      >
        <h3 class="text-lg md:text-xl font-semibold text-purple-700 mb-3">
          {{ university.name | translate }}
        </h3>
        <div class="space-y-4">
          <div
            *ngFor="let degree of university.degrees"
            class="pl-3 border-l-2 border-purple-200"
          >
            <p class="font-medium text-gray-800">
              {{ degree.title | translate }}
            </p>
            <p class="text-xs text-gray-500 mt-1">
              {{ degree.dateRange }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class EducationComponent implements OnInit, OnDestroy {
  universities: University[] = [];
  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadEducationData();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadEducationData();
    });
  }

  private loadEducationData(): void {
    this.translate.get('EDUCATION.UNIVERSITIES').subscribe((data: any[]) => {
      this.universities = data.map((university) => ({
        name: university.NAME,
        degrees: university.DEGREES.map(
          (degree: { TITLE: any; DATE_RANGE: any }) => ({
            title: degree.TITLE,
            dateRange: degree.DATE_RANGE,
          }),
        ),
      }));
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
