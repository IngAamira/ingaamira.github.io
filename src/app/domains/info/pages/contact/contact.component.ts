import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { TranslationService } from '../../../shared/services/translation.service';
import { MenuItemContact } from '../../../shared/interfaces/menu-item';
import { TranslationModule } from 'app/domains/shared/modules/translation.module';

@Component({
  standalone: true,
  imports: [CommonModule, TranslationModule],
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export default class ContactComponent {

  constructor(
    private titleService: Title,
    private translationService: TranslationService) {
    this.titleService.setTitle('Contact Me');
  }

  public menuItemsContact = signal<MenuItemContact[]> ([
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
