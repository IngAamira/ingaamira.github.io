import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ItemTechnicalSkill } from '../../interfaces/i18n-item';

@Component({
  selector: 'app-work-data',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="row" style="text-align: left">
    <div class="col" *ngFor="let skill of itemTechnicalSkills">
      <h3>{{ skill.category | translate }}:</h3>
      <ul>
        <li *ngFor="let item of skill.items">
          <ng-container *ngIf="isSkillItemObject(item); else simpleItem">
            {{ item.name }}
            <ul>
              <li *ngFor="let subitem of item.subitems">{{ subitem }}</li>
            </ul>
          </ng-container>
          <ng-template #simpleItem>
            {{ item }}
          </ng-template>
        </li>
      </ul>
    </div>
    </div>
  `,
})
export class WorkDataComponent implements OnInit, OnDestroy {
  itemTechnicalSkills: ItemTechnicalSkill[] = [];
  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  isSkillItemObject(item: string | { name: string; subitems?: string[] }): item is { name: string; subitems?: string[] } {
    return typeof item === 'object' && 'name' in item;
  }

  ngOnInit(): void {
    this.loadTechnicalSkills();
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadTechnicalSkills();
    });
  }

  private loadTechnicalSkills(): void {
    this.translate.get('TECHNICAL_SKILLS_DATA.TOOLS').subscribe((data: any[]) => {
      this.itemTechnicalSkills = data.map(item => ({
        category: item.CATEGORY,
        items: item.ITEMS.map((subItem: any) => {
          if (subItem.NAME) {
            return {
              name: subItem.NAME,
              subitems: subItem.SUBITEMS,
            };
          }
          return subItem;
        }),
      }) as ItemTechnicalSkill);
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
