import { Component, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skills.component.media-query.scss'],
  animations: [
    trigger('fadeInFromBottom', [
      state('void', style({ transform: 'translateX(70%)', opacity: 0 })),
      transition(':enter', [
        animate('1s 500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class SkillsComponent {
skills = [
  'javaScript.svg',
  'css.svg',
  'html.svg',
  'Angular.svg',
  'Api.svg',
  'Firebase.svg',
  'git.svg',
  'material.svg',
  'scrum.svg',
  'typescript.svg',
];

isVisible = false;

  constructor(private el: ElementRef) {}
  

  /**
   * Host listener for the 'window:scroll' event. Checks the scroll position
   * to determine if the element is visible in the viewport.
   *
   * @param {Event} $event - The scroll event object.
   */
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    let element = this.el.nativeElement;
    let elementTop = element.offsetTop + 250 + 150;
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;

    if (elementTop < (scrollTop + windowHeight) && (elementTop + element.offsetHeight) > scrollTop) {
      this.isVisible = true;
    }
  }
}
