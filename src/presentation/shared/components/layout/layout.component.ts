import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@presentation/shared/components/header/header.component';
import { NavbarComponent } from '@presentation/shared/components/navbar/navbar.component';
import { FooterComponent } from '@presentation/shared/components/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

}
