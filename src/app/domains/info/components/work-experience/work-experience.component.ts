import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

import { TranslationModule } from 'app/domains/shared/modules/translation.module';
import { TranslationService } from 'app/domains/shared/services/translation.service';
import { WorkExperienceService } from '../../services/work-experience';

interface ItemExperience {
  position: string;
  name: string;
  objective: string;
  dateRange: string;
  objectives: string[];
}

interface WorkExperienceObjectives {
  [key: string]: string[];
}

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, TranslationModule],
  template: `
    <div style="text-align: left;" *ngFor="let item of itemsSelector; let last = last">
      <div class="text-primary">{{ item.position | translate }}</div>
      <div class="mb-0">{{ item.name }}</div>
      <div class="text-secondary">{{ 'DATE' | translate }}: {{ item.dateRange }} </div>
      <ul *ngIf="item.objectives">
        <li *ngFor="let objective of item.objectives">
          {{ objective | translate }}
        </li>
      </ul>
      <hr *ngIf="!last" />
    </div>
  `,
})

export class WorkExperienceComponent implements OnInit, OnDestroy {

  public itemsSelector: ItemExperience[] = [
    { position: 'SOFTWARE_DEVELOPER', name: 'IAS Software',      objective: 'IAS_SD_OBJECTIVE_',      dateRange: '07/2023 - PRESENT', objectives: [] },
    { position: 'IAS_JOB_2',          name: 'IAS Software',      objective: 'IAS_DWH_OBJECTIVE_',     dateRange: '12/2022 - 06/2023', objectives: [] },
    { position: 'AVALON_JOB',         name: 'Avalon Group',      objective: 'AVALON_OBJECTIVE_',      dateRange: '06/2022 - 11/2022', objectives: [] },
    { position: 'EMTELCO_JOB_1',      name: 'Emtelco CX & BPO',  objective: 'EMTELCO_BI_OBJECTIVE_',  dateRange: '03/2021 - 06/2022', objectives: [] },
    { position: 'ULTRACOM_JOB',       name: 'Ultracom IT S.A.S', objective: 'ULTRACOM_OBJECTIVE_',    dateRange: '12/2019 - 03/2021', objectives: [] },
    { position: 'EMTELCO_JOB_2',      name: 'Emtelco CX & BPO',  objective: 'EMTELCO_PyC_OBJECTIVE_', dateRange: '12/2011 - 11/2019', objectives: [] },
  ];

  private destroy$: Subject<void> = new Subject<void>();

  objectives: WorkExperienceObjectives = {
    iasDev: [],
    iasData: [],
    avalon: [],
    emtelcoBi: [],
    ultracom: [],
    emtelcoPc: [],
  };

  constructor(
    private translationService: TranslationService,
    private workExperienceService: WorkExperienceService
  ) {}

  ngOnInit() {
    for (const item of this.itemsSelector) {
      this.getAndSubscribe(item);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getAndSubscribe(item: ItemExperience) {
    this.getObjetive(item.objective)
      .pipe(takeUntil(this.destroy$))
      .subscribe(keys => {
        this.clearAndPush(item.objectives, ...keys);
        //console.log('Objetivos actualizados:', item.objectives);
      });
  }

  private handleError(error: any) {
    if (error.status === 0) {
      console.error('Error de red:', error);
    } else if (error.status >= 500) {
      console.error('Error del servidor:', error);
    } else {
      console.error('Error desconocido:', error);
    }
    return of([]);
  }

  private getObjetive(pattern: string) {
    return this.workExperienceService.getWorkExperienceData().pipe(
      map(data => Object.keys(data).filter(key => key.startsWith(pattern))),
      catchError(this.handleError)
    );
  }

  private clearAndPush(array: string[], ...elements: string[]) {
    if (array) {
      array.length = 0;
      array.push(...elements);
    }
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
