import { Component } from '@angular/core';

import { TranslationModule } from '../../../shared/modules/translation.module';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ TranslationModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear: number;

  constructor(private translationService: TranslationService) {
    this.currentYear = new Date().getFullYear();
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
