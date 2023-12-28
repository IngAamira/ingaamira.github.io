import { Component } from '@angular/core';

import { TranslateModule} from '@ngx-translate/core';

import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
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
