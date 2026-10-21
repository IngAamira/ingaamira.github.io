
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div class="max-w-3xl mx-auto space-y-6">
      @for (university of universities; track university) {
        <div
          class="bg-ink-900 border rounded-xl p-5 shadow-sm"
          >
          <h3 class="text-lg md:text-xl font-semibold text-accent-soft mb-3">
            {{ university.name | translate }}
          </h3>
          <div class="space-y-4">
            @for (degree of university.degrees; track degree) {
              <div
                class="pl-3 border-l-2 border-accent/30"
                >
                <p class="font-medium text-slate-100">
                  {{ degree.title | translate }}
                </p>
                <p class="text-xs text-slate-400 mt-1">
                  {{ degree.dateRange }}
                </p>
              </div>
            }
          </div>
        </div>
      }
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
