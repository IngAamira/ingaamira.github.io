import { CommonModule } from '@angular/common';
import { Component, Renderer2, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslateModule } from '@ngx-translate/core';

import { EducationComponent } from '../../components/education/education.component';
import { LanguageComponent } from '../../components/language/language.component';
import { MenuItemResume } from 'app/domains/shared/interfaces/menu-item';
import { NgxBootstrapModule } from 'app/domains/shared/modules/ngx-bootstrap.module';
import { TranslationService } from 'app/domains/shared/services/translation.service';
import { WorkDataComponent } from '../../components/work-data/work-data.component';
import { WorkDevComponent } from '../../components/work-dev/work-dev.component';
import { WorkExperienceComponent } from '../../components/work-experience/work-experience.component';
import { WorkSectorComponent } from '../../components/work-sector/work-sector.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NgxBootstrapModule,

    WorkExperienceComponent,
    WorkDataComponent,
    WorkDevComponent,
    WorkSectorComponent,
    EducationComponent,
    LanguageComponent
  ],
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
    { name: 'PROFILE.SOFTWARE_ENGINEER', event: () => this.DownloadFileDev() },
    { name: 'PROFILE.DATA_ENGINEER', event: () => this.DownloadFileData() },
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
}
