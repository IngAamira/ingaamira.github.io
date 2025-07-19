import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { ItemLanguage } from '../../interfaces/i18n-item';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div style="text-align: left;">
      <ul>
        <li *ngFor="let item of itemsLanguage$ | async">
          <strong>{{ item.name | translate }}:</strong>
          {{ item.proficiency | translate }}
        </li>
      </ul>
    </div>
  `,
})
export class LanguageComponent {
  itemsLanguage$: Observable<ItemLanguage[]>;

  constructor(private readonly translate: TranslateService) {
    this.itemsLanguage$ = this.translate.onLangChange.pipe(
      startWith(null),
      switchMap(() => this.translate.get('LANGUAGES.DETAILS')),
      map((data: any[]) =>
        (data || []).map(item => ({
          name: item.NAME,
          proficiency: item.PROFICIENCY,
        }))
      )
    );
  }
  
}
