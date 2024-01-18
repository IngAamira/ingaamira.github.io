import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslationModule } from 'app/domains/shared/modules/translation.module';
import { TranslationService } from 'app/domains/shared/services/translation.service';

@Component({
  selector: 'app-work-dev',
  standalone: true,
  imports: [CommonModule, TranslationModule],
  templateUrl: './work-dev.component.html',
})
export class WorkDevComponent {

  constructor( private translationService: TranslationService ) { }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
