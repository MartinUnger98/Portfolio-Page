import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-atf-section',
  templateUrl: './atf-section.component.html',
  styleUrls: ['./atf-section.component.scss', './atf-section.component.media-query.scss'],
  animations: [
    trigger('slideInFromBottom', [
      state('void', style({ transform: 'translateY(100%)', opacity: 0 })),
      transition(':enter', [
        animate('1s 1s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
    trigger('slideInFromTop', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      transition(':enter', [
        animate('1s 2s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
    trigger('fadeInTitle', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1s 3s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AtfSectionComponent {
  socialMedia = [
    {
      img:'github.svg', 
      link: 'https://github.com/MartinUnger98',
    },
    {
      img: 'mail.svg',
      link: 'mailto:martin-unger2@live.at',
    },
    {
      img: 'linkedin.svg',
      link: 'https://www.linkedin.com/in/martin-unger-profile',
    },
  ]
}
