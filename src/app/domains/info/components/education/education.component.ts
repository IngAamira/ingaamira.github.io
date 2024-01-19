import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslationModule } from 'app/domains/shared/modules/translation.module';
import { TranslationService } from 'app/domains/shared/services/translation.service';

export interface ItemEducation {
  name: string;
  title: string;
  dateRange: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslationModule],
  template: `
    <div *ngFor="let item of itemsEducation; let last = last">
      <div style="text-align: left;">
        <div class="text-primary">{{ item.title | translate }}</div>
        <div class="mb-0">{{ item.name | translate }}</div>
        <div class="text-secondary">{{ 'DATE' | translate }}: {{ item.dateRange }} </div>
        <hr *ngIf="!last" />
      </div>
    </div>
  `,
})
export class EducationComponent {

  constructor( private translationService: TranslationService ) { }

  public itemsEducation: ItemEducation[] = [
    { name: 'UNIVERSITY_NAME', title: 'UNIVERSITY_TITLE_1', dateRange: '07/2018 - 08/2019' },
    { name: 'UNIVERSITY_NAME', title: 'UNIVERSITY_TITLE_2', dateRange: '12/2014 - 11/2017' },
  ];

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
