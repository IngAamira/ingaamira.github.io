import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslationModule } from 'app/domains/shared/modules/translation.module';
import { TranslationService } from 'app/domains/shared/services/translation.service';

export interface ItemLanguage {
  title: string;
  name: string;
}

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [ CommonModule, TranslationModule ],
  template: `
    <div style="text-align: left;">
      <ul>
        <li *ngFor="let item of itemsLanguage; let last = last">
          <strong>
            {{ item.name | translate }}:
          </strong>
            {{ item.title | translate }}
        </li>
      </ul>
    </div>
  `,
})
export class LanguageComponent {

  constructor( private translationService: TranslationService ) { }

  public itemsLanguage: ItemLanguage[] = [
    { name: 'SPANISH', title: 'SPANISH_PROFICIENCY' },
    { name: 'ENGLISH', title: 'ENGLISH_PROFICIENCY' },
  ];

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
