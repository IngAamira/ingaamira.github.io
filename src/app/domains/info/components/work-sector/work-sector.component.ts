import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslationModule } from 'app/domains/shared/modules/translation.module';
import { TranslationService } from 'app/domains/shared/services/translation.service';

export interface ItemWorkSector {
  id: number;
  translationKey: string;
}

@Component({
  selector: 'app-work-sector',
  standalone: true,
  imports: [CommonModule, TranslationModule],
  template: `
    <div class="container">
      <ul style="text-align: left;">
        <li *ngFor="let ItemWorkSector of itemsWorkSector">
          {{ ItemWorkSector.translationKey | translate }}
        </li>
      </ul>
    </div>
  `,
})
export class WorkSectorComponent {

  constructor( private translationService: TranslationService ) { }

  public itemsWorkSector: ItemWorkSector[] = [
    { id: 1, translationKey: 'SECTOR_INFO_1' },
    { id: 2, translationKey: 'SECTOR_INFO_2' },
    { id: 3, translationKey: 'SECTOR_INFO_3' },
    { id: 4, translationKey: 'SECTOR_INFO_4' },
    { id: 5, translationKey: 'SECTOR_INFO_5' },
    { id: 6, translationKey: 'SECTOR_INFO_6' }
  ];

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
