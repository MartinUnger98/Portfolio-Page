import { Component, OnInit } from '@angular/core';

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
export class PageComponent implements OnInit {
  /**
     * scrolls to the top when the component is initialized
     */
  ngOnInit(): void {
    this.scrollToTop();
  }


  /**
   * scroll function which scrolls to top
   */
  scrollToTop() {
    window.scroll({ top: 0, left: 0});
  }
}
