import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslationModule } from 'app/domains/shared/modules/translation.module';
import { TranslationService } from 'app/domains/shared/services/translation.service';

interface Objective {
  id: number;
  translationKey: string;
}

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, TranslationModule],
  templateUrl: './work-experience.component.html',
})

export class WorkExperienceComponent {

  constructor( private translationService: TranslationService ) { }

  public objectives: Objective[] = [
    { id: 1, translationKey: 'IAS_SD_OBJECTIVE_1' },
    { id: 2, translationKey: 'IAS_SD_OBJECTIVE_2' },
    { id: 3, translationKey: 'IAS_SD_OBJECTIVE_3' },
    { id: 4, translationKey: 'IAS_SD_OBJECTIVE_4' },
    { id: 5, translationKey: 'IAS_SD_OBJECTIVE_5' },
    { id: 6, translationKey: 'IAS_SD_OBJECTIVE_6' },
    { id: 7, translationKey: 'IAS_SD_OBJECTIVE_7' },
    { id: 8, translationKey: 'IAS_SD_OBJECTIVE_8' }
  ];

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }


}
