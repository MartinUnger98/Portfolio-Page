import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
