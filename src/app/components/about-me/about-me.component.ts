import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  aboutPoints = [
    {
      icon: '/assets/images/location.svg',
      alt: 'location icon',
      text: 'Currently, I work at Atos Austria as a Fullstack Developer, where I focus on developing enterprise solutions using Angular and .NET.',
    },
    {
      icon: '/assets/images/cognition.svg',
      alt: 'cognition icon',
      text: 'Beyond that, I also contribute to projects involving cloud-based solutions with Microsoft Azure, which gives me the opportunity to explore modern architectures and cloud-native development practices.',
    },
    {
      icon: '/assets/images/check-icon.svg',
      alt: 'check icon',
      text: 'I`m passionate about creating clean, efficient code and delivering applications that are both user-friendly and technically strong.',
    },
  ];
}
