import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit{
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
