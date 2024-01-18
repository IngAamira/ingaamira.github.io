import { CommonModule } from '@angular/common';
import { Component, Renderer2, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MenuItemResume } from 'app/domains/shared/interfaces/menu-item';
import { NgxBootstrapModule } from 'app/domains/shared/modules/ngx-bootstrap.module';
import { TranslationModule } from 'app/domains/shared/modules/translation.module';
import { TranslationService } from 'app/domains/shared/services/translation.service';

interface Objective {
  id: number;
  translationKey: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, TranslationModule, NgxBootstrapModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export default class ResumeComponent {
  isWorkExperienceOpen: boolean = false;
  isSectorExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isSkillsSdOpen: boolean = false;
  isSkillsDeOpen: boolean = false;
  isLanguagesOpen: boolean = false;

  constructor(
    private titleService: Title,
    private renderer: Renderer2,
    private translationService: TranslationService
  ) {
    this.titleService.setTitle('Resume');
  }

  public menuItemsResume = signal<MenuItemResume[]> ([
    { name: 'SOFTWARE_DEVELOPER',  event: () => this.DownloadFileDev()  },
    { name: 'DATA_ENGINEER', event: () => this.DownloadFileData() },
  ]);

  public objectives: Objective[] = [
    { id: 1, translationKey: 'IAS_SD_OBJECTIVE_1' },
    { id: 2, translationKey: 'IAS_SD_OBJECTIVE_2' },
    { id: 3, translationKey: 'IAS_SD_OBJECTIVE_3' },
    { id: 4, translationKey: 'IAS_SD_OBJECTIVE_4' },
    { id: 5, translationKey: 'IAS_SD_OBJECTIVE_5' },
    { id: 6, translationKey: 'IAS_SD_OBJECTIVE_6' },
    { id: 7, translationKey: 'IAS_SD_OBJECTIVE_7' },
    { id: 8, translationKey: 'IAS_SD_OBJECTIVE_8' }
  ];

  DownloadFileDev() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.translationService.getPdfPathDev());
    link.click();
    link.remove();
  }

  DownloadFileData() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.translationService.getPdfPathData());
    link.click();
    link.remove();
  }

  changeLanguage(lang: string): void {
    this.translationService.changeLanguage(lang);
  }

}
