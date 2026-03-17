import { Component } from '@angular/core';

import { LayoutComponent } from "@presentation/shared/components/layout/layout.component";

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  template: `<layout-page />`,
})
export class AppComponent {

  title = 'Business Card IngAamira';

}
