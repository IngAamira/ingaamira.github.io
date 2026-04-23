import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { EducationComponent } from '@presentation/features/portfolio/components/education/education.component';
import { LanguageComponent } from '@presentation/features/portfolio/components/language/language.component';
import { WorkDataComponent } from '@presentation/features/portfolio/components/work-data/work-data.component';
import { WorkDevComponent } from '@presentation/features/portfolio/components/work-dev/work-dev.component';
import { WorkExperienceComponent } from '@presentation/features/portfolio/components/work-experience/work-experience.component';
import { WorkSectorComponent } from '@presentation/features/portfolio/components/work-sector/work-sector.component';
import { WorkAiComponent } from '@presentation/features/portfolio/components/work-ai/work-ai.component';

import { MenuItemResume } from '@presentation/shared/types/menu-item.type';
import { TranslationService } from '@presentation/shared/services/translation.service';

@Component({
  standalone: true,
  selector: 'app-resume',
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './resume.component.html',
})
export class ResumeComponent {

  private title = inject(Title);
  private meta = inject(Meta);
  private renderer = inject(Renderer2);
  private translationService = inject(TranslationService);

  // 🔥 Estado del accordion
  isOpenState: Record<string, boolean> = {
    isWorkExperienceOpen: false,
    isSectorExperienceOpen: false,
    isSkillsIaOpen: false,
    isSkillsDevOpen: false,
    isSkillsDataOpen: false,
    isEducationOpen: false,
    isLanguagesOpen: false,
  };

  // 🔹 Toggle simple
  toggle(key: string) {
    this.isOpenState[key] = !this.isOpenState[key];
  }

  // 🔹 Grupos
  accordionGroups = [
    { isOpen: 'isWorkExperienceOpen', title: 'WORK.TITLE', component: WorkExperienceComponent },
    { isOpen: 'isSectorExperienceOpen', title: 'SECTOR.TITLE', component: WorkSectorComponent },
    { isOpen: 'isSkillsIaOpen', title: 'TECHNICAL_SKILLS_AI.TITLE', component: WorkAiComponent },
    { isOpen: 'isSkillsDevOpen', title: 'TECHNICAL_SKILLS_DEV.TITLE', component: WorkDevComponent },
    { isOpen: 'isSkillsDataOpen', title: 'TECHNICAL_SKILLS_DATA.TITLE', component: WorkDataComponent },
    { isOpen: 'isEducationOpen', title: 'EDUCATION.TITLE', component: EducationComponent },
    { isOpen: 'isLanguagesOpen', title: 'LANGUAGES.TITLE', component: LanguageComponent },
  ];

  ngOnInit(): void {
    const title = 'Portfolio IngAamira | Resume';
    const description = 'Hoja de vida de Andrés Mira.';
    const url = 'https://portfolio.ingaamira.com/resume';
    const image = 'https://portfolio.ingaamira.com/assets/icons/cv.png';

    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  // 🔹 Botones
  public menuItemsResume = signal<MenuItemResume[]>([
    { name: 'ABOUT_ME.CV', event: () => this.downloadFile() },
  ]);

  downloadFile(): void {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');

    const pdfPath = this.translationService.getPdfPath();
    const lang = this.translationService.getCurrentLanguage();

    link.setAttribute('href', pdfPath);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download_cv', {
        language: lang,
        file_name: pdfPath
      });
    }

    link.click();
    link.remove();
  }

}
