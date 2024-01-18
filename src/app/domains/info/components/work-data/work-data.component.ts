import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslationModule } from 'app/domains/shared/modules/translation.module';
import { TranslationService } from 'app/domains/shared/services/translation.service';

@Component({
  selector: 'app-work-data',
  standalone: true,
  imports: [CommonModule, TranslationModule],
  templateUrl: './work-data.component.html',
  styles: ``
})
export class WorkDataComponent {

  constructor( private translationService: TranslationService ) { }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }
  
}
