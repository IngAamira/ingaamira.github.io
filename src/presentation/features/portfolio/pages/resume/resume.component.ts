import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  Renderer2,
  OnInit
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { EducationComponent } from '@presentation/features/portfolio/components/education/education.component';
import { LanguageComponent } from '@presentation/features/portfolio/components/language/language.component';
import { WorkDataComponent } from '@presentation/features/portfolio/components/work-data/work-data.component';
import { WorkDevComponent } from '@presentation/features/portfolio/components/work-dev/work-dev.component';
import { WorkExperienceComponent } from '@presentation/features/portfolio/components/work-experience/work-experience.component';
import { WorkSectorComponent } from '@presentation/features/portfolio/components/work-sector/work-sector.component';
import { WorkAiComponent } from '@presentation/features/portfolio/components/work-ai/work-ai.component';

import { TranslationService } from '@presentation/shared/services/translation.service';
import { BrowserService } from '@presentation/shared/services/browser.service';
import { SeoService } from '@presentation/shared/services/seo.service';

type ResumeSection =
  | 'work'
  | 'sector'
  | 'ai'
  | 'dev'
  | 'data'
  | 'education'
  | 'language';

@Component({
  standalone: true,
  selector: 'app-resume',
  imports: [
    CommonModule,
    TranslateModule,
    WorkExperienceComponent,
    WorkSectorComponent,
    WorkAiComponent,
    WorkDevComponent,
    WorkDataComponent,
    EducationComponent,
    LanguageComponent
  ],
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements OnInit {

  private renderer = inject(Renderer2);
  private translationService = inject(TranslationService);
  private browser = inject(BrowserService);
  private seo = inject(SeoService);

  /** 🔹 Estado accordion */
  isOpenState: Record<ResumeSection, boolean> = {
    work: false,
    sector: false,
    ai: false,
    dev: false,
    data: false,
    education: false,
    language: false,
  };

  /** 🔹 Config limpia */
  accordionGroups = [
    { key: 'work', title: 'WORK.TITLE' },
    { key: 'sector', title: 'SECTOR.TITLE' },
    { key: 'ai', title: 'TECHNICAL_SKILLS_AI.TITLE' },
    { key: 'dev', title: 'TECHNICAL_SKILLS_DEV.TITLE' },
    { key: 'data', title: 'TECHNICAL_SKILLS_DATA.TITLE' },
    { key: 'education', title: 'EDUCATION.TITLE' },
    { key: 'language', title: 'LANGUAGES.TITLE' },
  ] as const;

  public menuItemsResume: MenuItemResume[] = [
    { name: 'ABOUT_ME.CV', event: () => this.downloadFile() },
  ];

  ngOnInit(): void {
    this.seo.setSEO({
      title: 'Portfolio IngAamira | Resume',
      description: 'Hoja de vida de Andrés Mira.',
      url: 'https://portfolio.ingaamira.com/resume',
      image: 'https://portfolio.ingaamira.com/assets/icons/cv.png',
    });
  }

  toggle(key: ResumeSection) {
    this.isOpenState[key] = !this.isOpenState[key];
  }

  downloadFile(): void {
    if (!this.browser.isBrowser()) return;

    const pdfPath = this.translationService.getPdfPath();
    const lang = this.translationService.getCurrentLanguage();

    const documentRef = this.browser.document;
    if (!documentRef) return;

    const link = this.renderer.createElement('a');

    this.renderer.setAttribute(link, 'href', pdfPath);
    this.renderer.setAttribute(link, 'target', '_blank');

    this.renderer.appendChild(documentRef.body, link);
    link.click();
    this.renderer.removeChild(documentRef.body, link);

    const win = this.browser.window;
    const gtag = win?.gtag;

    if (gtag) {
      gtag('event', 'download_cv', {
        language: lang,
        file_name: pdfPath
      });
    }
  }

  trackByName(index: number, item: MenuItemResume) {
    return item.name;
  }

  trackByKey(index: number, item: any) {
    return item.key;
  }

}
