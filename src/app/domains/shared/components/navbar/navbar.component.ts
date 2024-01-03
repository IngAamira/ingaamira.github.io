import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

import { TranslationModule } from '../../../shared/modules/translation.module';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLinkWithHref, RouterLinkActive, TranslationModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private translationService: TranslationService) {

  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
