import { Component, inject, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MenuItemContact } from '@presentation/shared/types/menu-item.type';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="max-w-3xl mx-auto px-4 pb-6">

      <!-- 🔹 Header -->
      <div class="text-center border rounded-xl shadow-sm p-6 mb-8 bg-white">
        <h1 class="text-2xl md:text-3xl font-bold mb-2">
          {{ 'CONTACT.TITLE' | translate }}
        </h1>

        <p class="text-gray-600 text-sm md:text-base">
          {{ 'CONTACT.DESCRIPTION' | translate }}
        </p>
      </div>

      <!-- 🔹 Contact list -->
      <div class="bg-white rounded-xl shadow-sm divide-y">

        <a
          *ngFor="let item of menuItemsContact()"
          [href]="item.url"
          target="_blank"
          rel="noopener noreferrer"
          (click)="trackClick(item.flag, item.url)"
          class="flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition group"
        >

          <!-- Icon -->
          <img
            [src]="item.img"
            [alt]="item.flag"
            class="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition"
          />

          <!-- Text -->
          <span class="text-lg font-medium text-gray-800 group-hover:text-purple-600 transition">
            {{ item.flag }}
          </span>

        </a>

      </div>

    </div>
  `,
})
export class ContactComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    const title = 'Portfolio IngAamira | Data Engineer & Fullstack Developer | Contact';
    const description = 'Contacta a Andrés Mira, Data Engineer y Fullstack Developer en Colombia. Disponible para proyectos de desarrollo web, análisis de datos e inteligencia artificial.';
    const url = 'https://portfolio.ingaamira.com/contact';
    const image = 'https://portfolio.ingaamira.com/assets/icons/contact-information.png';

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private getType(platform: string): string {
    const direct = ['WhatsApp', 'Email'];
    return direct.includes(platform) ? 'direct_lead' : 'social';
  }

  trackClick(platform: string, url: string): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {

      const lang = document.documentElement.lang || 'en';
      const type = this.getType(platform);

      (window as any).gtag('event', 'contact_click', {
        contact_method: platform,
        link_url: url,
        page: 'contact',
        language: lang,
        engagement_type: type,
        timestamp: new Date().toISOString()
      });

      if (type === 'direct_lead') {
        (window as any).gtag('event', 'generate_lead', {
          method: platform,
          page: 'contact',
          language: lang
        });
      }
    }
  }

  public menuItemsContact = signal<MenuItemContact[]>([
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
  ]);

}
