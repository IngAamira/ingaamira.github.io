import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-work-sector',
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="max-w-3xl mx-auto">
      <ul class="space-y-2 text-sm md:text-base text-gray-700">
        <li
          *ngFor="let sector of itemsSector[0]?.sectors"
          class="flex items-start gap-2"
        >
          <span class="text-purple-500 mt-1">•</span>
          <span>{{ sector | translate }}</span>
        </li>
      </ul>
    </div>
  `,
})
export class WorkSectorComponent implements OnInit, OnDestroy {
  itemsSector: ItemSector[] = [];
  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadSectors();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadSectors();
    });
  }

  private loadSectors(): void {
    this.translate.get('SECTOR').subscribe((data: any) => {
      this.itemsSector = [
        {
          title: data.TITLE,
          sectors: data.SECTORS,
        },
      ];
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
