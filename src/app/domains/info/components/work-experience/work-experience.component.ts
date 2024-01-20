import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

import { TranslationModule } from 'app/domains/shared/modules/translation.module';
import { TranslationService } from 'app/domains/shared/services/translation.service';
import { WorkExperienceService } from '../../services/work-experience';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, TranslationModule],
  templateUrl: './work-experience.component.html',
})

export class WorkExperienceComponent implements OnInit, OnDestroy {

  iasDevObjectivePattern: string = 'IAS_SD_OBJECTIVE_';
  iasDevObjectiveKeys: string[] = [];

  iasDataObjectivePattern: string = 'IAS_DWH_OBJECTIVE_';
  iasDataObjectiveKeys: string[] = [];

  avalonObjectivePattern: string = 'AVALON_OBJECTIVE_';
  avalonObjectiveKeys: string[] = [];

  emtelcoBiObjectivePattern: string = 'EMTELCO_BI_OBJECTIVE_';
  emtelcoBiObjectiveKeys: string[] = [];

  ultracomObjectivePattern: string = 'ULTRACOM_OBJECTIVE_';
  ultracomObjectiveKeys: string[] = [];

  emtelcoPcObjectivePattern: string = 'EMTELCO_PyC_OBJECTIVE_';
  emtelcoPcObjectiveKeys: string[] = [];

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private translationService: TranslationService,
    private workExperienceService: WorkExperienceService
  ) {}

  ngOnInit() {
    this.getAndSubscribe(this.iasDevObjectivePattern, this.iasDevObjectiveKeys);
    this.getAndSubscribe(this.iasDataObjectivePattern, this.iasDataObjectiveKeys);
    this.getAndSubscribe(this.avalonObjectivePattern, this.avalonObjectiveKeys);
    this.getAndSubscribe(this.emtelcoBiObjectivePattern, this.emtelcoBiObjectiveKeys);
    this.getAndSubscribe(this.ultracomObjectivePattern, this.ultracomObjectiveKeys);
    this.getAndSubscribe(this.emtelcoPcObjectivePattern, this.emtelcoPcObjectiveKeys);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getAndSubscribe(pattern: string, keysArray: string[]) {
    this.getObjetive(pattern)
      .pipe(takeUntil(this.destroy$))
      .subscribe(keys => {
        this.clearAndPush(keysArray, ...keys);
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
    array.length = 0;
    array.push(...elements);
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
