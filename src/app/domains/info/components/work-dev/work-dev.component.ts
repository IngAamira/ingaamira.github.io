import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { ItemTechnicalSkill } from '../../interfaces/i18n-item';

@Component({
  selector: 'app-work-dev',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="row" style="text-align: left">
      <div class="col" *ngFor="let skill of itemTechnicalSkills$ | async">
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
export class WorkDevComponent {
  itemTechnicalSkills$: Observable<ItemTechnicalSkill[]>;

  constructor(private readonly translate: TranslateService) {
    this.itemTechnicalSkills$ = this.translate.onLangChange.pipe(
      startWith(null),
      switchMap(() => this.translate.get('TECHNICAL_SKILLS_DEV.TOOLS')),
      map((data: any[]) =>
        (data || []).map(item => ({
          category: item.CATEGORY,
          items: (item.ITEMS || []).map((subItem: any) =>
            subItem.NAME
              ? { name: subItem.NAME, subitems: subItem.SUBITEMS }
              : subItem
          ),
        }) as ItemTechnicalSkill)
      )
    );
  }

  isSkillItemObject(item: string | { name: string; subitems?: string[] }): item is { name: string; subitems?: string[] } {
    return typeof item === 'object' && 'name' in item;
  }
  
}
