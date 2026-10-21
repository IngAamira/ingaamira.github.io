import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { BrowserService } from '@presentation/shared/services/browser.service';
import { SeoService } from '@presentation/shared/services/seo.service';
import { LocaleService } from '@presentation/shared/services/locale.service';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div class="max-w-3xl mx-auto m-3 p-3">
      <div class="text-center border rounded-xl shadow-sm p-6 mb-8 bg-ink-900">
        <h1 class="text-2xl md:text-3xl font-bold mb-2">
          {{ 'CONTACT.TITLE' | translate }}
        </h1>
        <p class="text-slate-300 text-sm md:text-base">
          {{ 'CONTACT.DESCRIPTION' | translate }}
        </p>
      </div>
    
      <div class="bg-ink-900 rounded-xl shadow-sm divide-y divide-slate-800">
        @for (item of menuItemsContact; track item) {
          <a
            [href]="item.url"
            target="_blank"
            rel="noopener noreferrer"
            (click)="trackClick(item.flag, item.url)"
            class="flex items-center gap-4 px-4 py-4 hover:bg-ink-800 transition group"
            >
            <img
              [src]="item.img"
              [alt]="item.flag"
              class="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition"
              />
              <span
                class="text-lg font-medium text-slate-100 group-hover:text-accent-soft transition"
                >
                {{ item.flag }}
              </span>
            </a>
          }
        </div>
      </div>
    `,
})
export class ContactComponent implements OnInit {
  private browser = inject(BrowserService);
  private seo = inject(SeoService);
  private translate = inject(TranslateService);
  private localeService = inject(LocaleService);

  ngOnInit(): void {
    this.seo.setSEO({
      title: this.translate.instant('SEO.CONTACT.TITLE'),
      description: this.translate.instant('SEO.CONTACT.DESCRIPTION'),
      url: this.localeService.url('/contact'),
      alternates: this.localeService.alternates('/contact'),
      image: 'https://portfolio.ingaamira.com/assets/icons/contact-information.png',
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
      timestamp: new Date().toISOString(),
    });

    if (type === 'direct_lead') {
      win?.gtag?.('event', 'generate_lead', {
        method: platform,
        page: 'contact',
        language: lang,
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
      url: 'https://api.whatsapp.com/send/?phone=573217295412&text=Hola%2C+vengo+de+la+p%C3%A1gina+Portfolio+IngAamira+y+quiero+m%C3%A1s+informaci%C3%B3n+sobre+tu+perfil&type=phone_number&app_absent=0',
      img: 'assets/icons/whatsapp.png',
      flag: 'WhatsApp',
    }
  ];
}
