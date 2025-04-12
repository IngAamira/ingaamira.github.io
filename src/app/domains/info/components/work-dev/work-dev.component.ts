import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

interface TechnicalSkill {
  CATEGORY: string;
  ITEMS: { NAME: string; SUBITEMS: string[] }[];
}

@Component({
  selector: 'app-work-dev',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './work-dev.component.html',
})
export class WorkDevComponent implements OnInit, OnDestroy {
  technicalSkills: TechnicalSkill[] = [];
  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadTechnicalSkills();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadTechnicalSkills();
    });
  }

  private loadTechnicalSkills(): void {
    this.translate.get('TECHNICAL_SKILLS_DEV.TOOLS').subscribe((skills: TechnicalSkill[]) => {
      this.technicalSkills = skills;
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
