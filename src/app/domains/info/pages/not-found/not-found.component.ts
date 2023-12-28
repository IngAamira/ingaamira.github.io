import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  constructor (private titleService: Title) {
    this.titleService.setTitle('404')
  }

}
