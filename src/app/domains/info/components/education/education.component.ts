import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

interface Degree {
  title: string;
  dateRange: string;
}

interface University {
  name: string;
  degrees: Degree[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="container">
      <div *ngFor="let university of universities">
        <div style="text-align: left;">
          <div class="text-primary">{{ university.name | translate }}</div>
          <ul>
            <li *ngFor="let degree of university.degrees">
              <div>{{ degree.title | translate }}</div>
              <div class="text-secondary">{{ degree.dateRange }}</div>
            </li>
          </ul>
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
      this.universities = data.map(university => ({
        name: university.NAME,
        degrees: university.DEGREES.map((degree: { TITLE: any; DATE_RANGE: any; }) => ({
          title: degree.TITLE,
          dateRange: degree.DATE_RANGE,
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
