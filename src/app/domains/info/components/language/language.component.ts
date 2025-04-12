import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ItemLanguage } from '../../interfaces/i18n-item';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div style="text-align: left;">
      <ul>
        <li *ngFor="let item of itemsLanguage">
          <strong>{{ item.name | translate }}:</strong>
          {{ item.proficiency | translate }}
        </li>
      </ul>
    </div>
  `,
})
export class LanguageComponent implements OnInit, OnDestroy {
  itemsLanguage: ItemLanguage[] = [];
  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadLanguages();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadLanguages();
    });
  }

  private loadLanguages(): void {
    this.translate.get('LANGUAGES.DETAILS').subscribe((data: any[]) => {
      this.itemsLanguage = data.map(item => ({
        name: item.NAME,
        proficiency: item.PROFICIENCY,
      }));
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
