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
  {
    img: 'javaScript.svg',
    txt: 'JavaScript',
  },
  {
    img: 'css.svg',
    txt: 'CSS'
  },
  {
    img: 'html.svg',
    txt: 'HTML'
  },
  {
    img: 'Angular.svg',
    txt: 'Angular'
  },
  {
    img: 'Api.svg',
    txt: 'Rest-Api'
  },
  {
    img: 'Firebase.svg',
    txt: 'Firebase'
  },
  {
    img: 'git.svg',
    txt: 'Git'
  },
  {
    img: 'material.svg',
    txt: 'Material design'
  },
  {
    img: 'scrum.svg',
    txt: 'Scrum'
  },
  { 
    img: 'typescript.svg',
    txt: 'TypeScript'
  },
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
    let elementTop = element.offsetTop + 270 + 150;
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    if (elementTop < (scrollTop + windowHeight) && (elementTop + element.offsetHeight) > scrollTop) {
      this.isVisible = true;
    }
  }
}
