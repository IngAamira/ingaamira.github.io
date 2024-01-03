import { Component } from '@angular/core';

import { TranslationModule } from '../../../shared/modules/translation.module';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ TranslationModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private translationService: TranslationService) {

  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
