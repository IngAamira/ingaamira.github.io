import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BrowserService } from '@presentation/shared/services/browser.service';
import { SeoService } from '@presentation/shared/services/seo.service';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="max-w-3xl mx-auto px-4 pb-6">

      <div class="text-center border rounded-xl shadow-sm p-6 mb-8 bg-white">
        <h1 class="text-2xl md:text-3xl font-bold mb-2">
          {{ 'CONTACT.TITLE' | translate }}
        </h1>

        <p class="text-gray-600 text-sm md:text-base">
          {{ 'CONTACT.DESCRIPTION' | translate }}
        </p>
      </div>

      <div class="bg-white rounded-xl shadow-sm divide-y">

        <a
          *ngFor="let item of menuItemsContact"
          [href]="item.url"
          target="_blank"
          rel="noopener noreferrer"
          (click)="trackClick(item.flag, item.url)"
          class="flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition group"
        >
          <img
            [src]="item.img"
            [alt]="item.flag"
            class="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition"
          />

          <span class="text-lg font-medium text-gray-800 group-hover:text-purple-600 transition">
            {{ item.flag }}
          </span>
        </a>

      </div>

    </div>
  `,
})
export class ContactComponent implements OnInit {

  private browser = inject(BrowserService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setSEO({
      title: 'Portfolio IngAamira | Data Engineer & Fullstack Developer | Contact',
      description: 'Contacta a Andrés Mira, Data Engineer y Fullstack Developer en Colombia. Disponible para proyectos de desarrollo web, análisis de datos e inteligencia artificial.',
      url: 'https://portfolio.ingaamira.com/contact',
      image: 'https://portfolio.ingaamira.com/assets/icons/contact-information.png'
    });
  }

  private getType(platform: string): string {
    const direct = ['WhatsApp', 'Email'];
    return direct.includes(platform) ? 'direct_lead' : 'social';
  }

  trackClick(platform: string, url: string): void {
    if (!this.browser.isBrowser()) return;

    const doc = this.browser.document;
    const win = this.browser.window;

    const lang = doc?.documentElement.lang || 'en';
    const type = this.getType(platform);

    win?.gtag?.('event', 'contact_click', {
      contact_method: platform,
      link_url: url,
      page: 'contact',
      language: lang,
      engagement_type: type,
      timestamp: new Date().toISOString()
    });

    if (type === 'direct_lead') {
      win?.gtag?.('event', 'generate_lead', {
        method: platform,
        page: 'contact',
        language: lang
      });
    }
  }

  public menuItemsContact: MenuItemContact[] = [
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
      url: 'https://api.whatsapp.com/send/?phone=573217295412&text=Hola...',
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
