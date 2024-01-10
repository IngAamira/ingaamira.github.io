import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './../../../shared/components/header/header.component';
import { NavbarComponent } from './../../../shared/components/navbar/navbar.component';
import { FooterComponent } from './../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

}
