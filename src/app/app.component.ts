import { Component } from '@angular/core';

import { LayoutComponent } from "@presentation/shared/components/layout/layout.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [LayoutComponent],
  template: `<app-layout />`,
})
export class AppComponent {
  title = 'Business Card IngAamira';
}
