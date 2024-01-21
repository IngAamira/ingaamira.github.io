import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { TranslationModule } from 'app/domains/shared/modules/translation.module';
import { TranslationService } from 'app/domains/shared/services/translation.service';
import { WorkExperienceService } from '../../services/work-experience';

export interface ItemWorkSector {
  objective: string;
  items: string[];
}

interface ItemsObjective {
  [key: string]: string[];
}
@Component({
  selector: 'app-work-sector',
  standalone: true,
  imports: [CommonModule, TranslationModule],
  template: `
    <div class="container" *ngFor="let item of itemsWorkSector">
      <ul style="text-align: left;" *ngIf="item.items">
        <li *ngFor="let objective of item.items">
          {{ objective | translate }}
        </li>
      </ul>
    </div>
  `,
})
export class WorkSectorComponent implements OnInit, OnDestroy {

  public itemsWorkSector: ItemWorkSector[] = [
    { objective: 'SECTOR_INFO_', items: [] },
  ];

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private translationService: TranslationService,
    private workExperienceService: WorkExperienceService
    ) { }

  items: ItemsObjective = {
    sectorInfo: [],
  };

  ngOnInit() {
    for (const item of this.itemsWorkSector) {
      this.getAndSubscribe(item);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getAndSubscribe(item: ItemWorkSector) {
    this.workExperienceService.getObjetive(item.objective)
      .pipe(takeUntil(this.destroy$))
      .subscribe(keys => {
        this.workExperienceService.clearAndPush(item.items, ...keys);
      });
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
