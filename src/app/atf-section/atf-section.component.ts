import { Component } from '@angular/core';

@Component({
  selector: 'app-atf-section',
  templateUrl: './atf-section.component.html',
  styleUrls: ['./atf-section.component.scss']
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
