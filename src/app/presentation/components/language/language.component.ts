import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

export interface ItemLanguage {
  title: string;
  name: string;
}

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
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

  constructor( ) { }

  public itemsLanguage: ItemLanguage[] = [
    { name: 'SPANISH', title: 'SPANISH_PROFICIENCY' },
    { name: 'ENGLISH', title: 'ENGLISH_PROFICIENCY' },
  ];

}
