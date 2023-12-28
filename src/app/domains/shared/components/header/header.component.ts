import { Component } from '@angular/core';

import { TranslateModule} from '@ngx-translate/core';

import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
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
