import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MenuItemContact } from '@presentation/shared/types/menu-item.type';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  private getType(platform: string): string {
    const direct = ['WhatsApp', 'Email'];
    return direct.includes(platform) ? 'direct_lead' : 'social';
  }

  trackFooterClick(platform: string, url: string): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {

      const lang = document.documentElement.lang || 'en';
      const type = this.getType(platform);

      (window as any).gtag('event', 'footer_click', {
        contact_method: platform,
        link_url: url,
        page: 'footer',
        language: lang,
        engagement_type: type,
        timestamp: new Date().toISOString()
      });

      if (type === 'direct_lead') {
        (window as any).gtag('event', 'generate_lead', {
          method: platform,
          source: 'footer',
          language: lang
        });
      }
    }
  }

  public menuItemsFooter = signal<MenuItemContact[]>([
    {
      url: 'https://linkedin.com/in/ingaamira/',
      img: 'assets/icons/linkedin.png',
      flag: 'LinkedIn',
    },
    {
      url: 'https://github.com/IngAamira/',
      img: 'assets/icons/github.png',
      flag: 'GitHub',
    },
    {
      url: 'https://api.whatsapp.com/send/?phone=573217295412&text=Hola%2C+vengo+de+tu+p%C3%A1gina+de+portfolio+y+quiero+m%C3%A1s+informaci%C3%B3n+sobre+tu+perfil',
      img: 'assets/icons/whatsapp.png',
      flag: 'WhatsApp',
    },
    {
      url: 'https://platzi.com/p/IngAamira/',
      img: 'assets/icons/platzi.png',
      flag: 'Platzi',
    },
    {
      url: 'https://www.udemy.com/user/andres-mira/',
      img: 'assets/icons/udemy.png',
      flag: 'Udemy',
    },
    {
      url: 'https://twitter.com/Ingaamira/',
      img: 'assets/icons/twitter.png',
      flag: 'Twitter',
    },
    {
      url: 'mailto:andres.mira@outlook.com',
      img: 'assets/icons/e-mail.png',
      flag: 'Email',
    },
  ]);
}
