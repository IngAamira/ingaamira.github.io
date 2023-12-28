import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

import { TranslateModule} from '@ngx-translate/core';

import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive, TranslateModule],
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
