import { CommonModule } from '@angular/common';
import { Component, Renderer2, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslateModule } from '@ngx-translate/core';

import { EducationComponent } from '@presentation/features/profile/components/education/education.component';
import { LanguageComponent } from '@presentation/features/profile/components/language/language.component';
import { MenuItemResume } from '@presentation/shared/interfaces/menu-item';
import { NgxBootstrapModule } from '@presentation/shared/modules/ngx-bootstrap.module';
import { TranslationService } from '@presentation/shared/services/translation.service';
import { WorkDataComponent } from '@presentation/features/profile/components/work-data/work-data.component';
import { WorkDevComponent } from '@presentation/features/profile/components/work-dev/work-dev.component';
import { WorkExperienceComponent } from '@presentation/features/profile/components/work-experience/work-experience.component';
import { WorkSectorComponent } from '@presentation/features/profile/components/work-sector/work-sector.component';
import { WorkAiComponent } from '@presentation/features/profile/components/work-ai/work-ai.component';

@Component({
  selector: 'app-resume',
  imports: [
    CommonModule,
    TranslateModule,
    NgxBootstrapModule
  ],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export default class ResumeComponent {
  isOpenState: Record<string, boolean> = {
    isWorkExperienceOpen: false,
    isSectorExperienceOpen: false,
    isSkillsIaOpen: false,
    isSkillsDevOpen: false,
    isSkillsDataOpen: false,
    isEducationOpen: false,
    isLanguagesOpen: false,
  };

  accordionGroups = [
    { isOpen: 'isWorkExperienceOpen', title: 'WORK.TITLE', component: WorkExperienceComponent },
    { isOpen: 'isSectorExperienceOpen', title: 'SECTOR.TITLE', component: WorkSectorComponent },
    { isOpen: 'isSkillsIaOpen', title: 'TECHNICAL_SKILLS_AI.TITLE', component: WorkAiComponent },
    { isOpen: 'isSkillsDevOpen', title: 'TECHNICAL_SKILLS_DEV.TITLE', component: WorkDevComponent },
    { isOpen: 'isSkillsDataOpen', title: 'TECHNICAL_SKILLS_DATA.TITLE', component: WorkDataComponent },
    { isOpen: 'isEducationOpen', title: 'EDUCATION.TITLE', component: EducationComponent },
    { isOpen: 'isLanguagesOpen', title: 'LANGUAGES.TITLE', component: LanguageComponent },
  ];

  constructor(
    private titleService: Title,
    private renderer: Renderer2,
    private translationService: TranslationService
  ) {
    this.titleService.setTitle('Resume');
  }

  public menuItemsResume = signal<MenuItemResume[]>([
    { name: 'ABOUT_ME.CV', event: () => this.DownloadFile() },
  ]);

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.translationService.getPdfPath());
    link.click();
    link.remove();
  }
}
