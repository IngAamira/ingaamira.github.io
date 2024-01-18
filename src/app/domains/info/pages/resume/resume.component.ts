import { CommonModule } from '@angular/common';
import { Component, Renderer2, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MenuItemResume } from 'app/domains/shared/interfaces/menu-item';
import { NgxBootstrapModule } from 'app/domains/shared/modules/ngx-bootstrap.module';
import { TranslationModule } from 'app/domains/shared/modules/translation.module';
import { TranslationService } from 'app/domains/shared/services/translation.service';
import { WorkExperienceComponent } from '../../components/work-experience/work-experience.component';
import { WorkDataComponent } from '../../components/work-data/work-data.component';
import { WorkDevComponent } from '../../components/work-dev/work-dev.component';

@Component({
  standalone: true,
  imports: [CommonModule, TranslationModule, NgxBootstrapModule, WorkExperienceComponent, WorkDataComponent, WorkDevComponent],
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
