import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
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
