import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  styleUrls: ['./page.component.scss'],
  template: `
  <app-atf-section></app-atf-section>
  <app-about-me></app-about-me>
  <app-skills></app-skills>
  <app-projects></app-projects>
  <app-contact></app-contact>
  `,
})
export class PageComponent {

}
