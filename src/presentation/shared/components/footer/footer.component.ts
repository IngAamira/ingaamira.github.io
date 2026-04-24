import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BrowserService } from '@presentation/shared/services/browser.service';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  private browser = inject(BrowserService);

  currentYear: number = new Date().getFullYear();

  private isBrowser(): boolean {
    return this.browser.isBrowser();
  }

  private getLang(): string {
    const doc = this.browser.document;
    return doc?.documentElement?.lang || 'en';
  }

  private getType(platform: string): string {
    const direct = ['WhatsApp', 'Email'];
    return direct.includes(platform) ? 'direct_lead' : 'social';
  }

  trackFooterClick(platform: string, url: string): void {
    if (!this.isBrowser()) return;

    const windowRef = this.browser.window;
    const gtag = windowRef?.gtag;
    if (!gtag) return;

    const lang = this.getLang();
    const type = this.getType(platform);

    gtag('event', 'footer_click', {
      contact_method: platform,
      link_url: url,
      page: 'footer',
      language: lang,
      engagement_type: type,
      timestamp: new Date().toISOString()
    });

    if (type === 'direct_lead') {
      gtag('event', 'generate_lead', {
        method: platform,
        source: 'footer',
        language: lang
      });
    }
  }

  goToWhatsApp(): void {
    if (!this.isBrowser()) return;

    const number = '573217295412';
    const message = 'Hola, vengo de la página Portfolio IngAamira y quiero más información sobre tu perfil';

    const url = this.getWhatsAppLink(number, message);

    const windowRef = this.browser.window;
    const gtag = windowRef?.gtag;

    if (gtag) {
      gtag('event', 'whatsapp_click_signature', {
        source: 'footer_signature',
        language: this.getLang()
      });
    }

    windowRef?.open(url, '_blank', 'noopener,noreferrer');
  }

  getWhatsAppLink(number: string, message: string): string {
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  public menuItemsFooter: MenuItemContact[] = [
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
      url: 'https://api.whatsapp.com/send/?phone=573217295412&text=Hola%2C+vengo+de+la+p%C3%A1gina+Portfolio+IngAamira+y+quiero+m%C3%A1s+informaci%C3%B3n+sobre+tu+perfil&type=phone_number&app_absent=0',
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
  ];
}
