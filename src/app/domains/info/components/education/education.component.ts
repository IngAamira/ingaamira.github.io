import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { University } from '../../interfaces/i18n-item';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="container">
      <div *ngFor="let university of universities$ | async">
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
export class EducationComponent {
  universities$: Observable<University[]>;

  constructor(private readonly translate: TranslateService) {
    this.universities$ = this.translate.onLangChange.pipe(
      startWith(null),
      switchMap(() => this.translate.get('EDUCATION.UNIVERSITIES')),
      map((data: any[]) =>
        (data || []).map(university => ({
          name: university.NAME,
          degrees: (university.DEGREES || []).map((degree: any) => ({
            title: degree.TITLE,
            dateRange: degree.DATE_RANGE,
          })),
        }))
      )
    );
  }
  
}
