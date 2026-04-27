import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="max-w-2xl mx-auto text-left">
      <ul class="space-y-3">
        <li
          *ngFor="let item of itemsLanguage"
          class="flex items-center justify-between bg-white border rounded-lg px-4 py-3 shadow-sm"
        >
          <span class="font-medium text-gray-800">
            {{ item.name | translate }}
          </span>
          <span class="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
            {{ item.proficiency | translate }}
          </span>
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
      this.itemsLanguage = data.map((item) => ({
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
