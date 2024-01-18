import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationModule } from '../../../shared/modules/translation.module';
import { TranslationService } from '../../../shared/services/translation.service';
import { MenuItemContact } from '../../../shared/interfaces/menu-item';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ TranslationModule, CommonModule ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css',]
})
export class FooterComponent {

  currentYear: number;

  constructor(private translationService: TranslationService) {
    this.currentYear = new Date().getFullYear();
  }

  public menuItemsFooter = signal<MenuItemContact[]> ([
    { url: 'https://linkedin.com/in/ingaamira/',      img: 'assets/icons/linkedin.png', flag: 'LinkedIn' },
    { url: 'https://github.com/IngAamira/',           img: 'assets/icons/github.png',   flag: 'GitHub'   },
    { url: 'https://platzi.com/p/IngAamira/',         img: 'assets/icons/platzi.png',   flag: 'Platzi'   },
    { url: 'https://www.udemy.com/user/andres-mira/', img: 'assets/icons/udemy.png',    flag: 'Udemy'    },
    { url: 'https://twitter.com/Ingaamira/',          img: 'assets/icons/twitter.png',  flag: 'Twitter'  },
    { url: 'mailto:andres.mira@outlook.com/',         img: 'assets/icons/e-mail.png',   flag: 'Email'    },
  ]);

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
