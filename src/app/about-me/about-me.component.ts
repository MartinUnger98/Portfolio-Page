import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './about-me.component.media-query.scss'],
  animations: [
    trigger('slideInFromLeft1', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Anfangszustand direkt in der Transition
        animate('250ms 0ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
    trigger('slideInFromLeft2', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Anfangszustand direkt in der Transition
        animate('250ms 250ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
    trigger('slideInFromLeft3', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Anfangszustand direkt in der Transition
        animate('250ms 500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }), // Anfangszustand direkt in der Transition
        animate('500ms 500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
  ]
  
})
export class AboutMeComponent implements OnInit{
  isVisible = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.checkScroll();
  }

  /**
   * Host listener for the 'window:scroll' event.
   *
   * @param {Event} $event - The scroll event object.
   */
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    let element = this.el.nativeElement;
    let elementTop = element.offsetTop + 270 + 170;
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    if (elementTop < (scrollTop + windowHeight) && (elementTop + element.offsetHeight) > scrollTop) {
      this.isVisible = true;
    }
  }
}


