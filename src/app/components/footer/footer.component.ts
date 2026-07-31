import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-footer',
  imports: [ScrollRevealDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  socialLinks = [
    {
      href: 'https://github.com/MartinUnger98',
      icon: 'fa-brands fa-github',
    },
    {
      href: 'mailto:mail@martin-unger.at',
      icon: 'fa-solid fa-envelope',
      external: false,
    },
    {
      href: 'https://www.linkedin.com/in/martin-unger-profile/',
      icon: 'fa-brands fa-linkedin-in',
    },
  ];

  open(href: string, external: boolean = true) {
    if (external) {
      window.open(href, '_blank', 'noopener');
    } else {
      window.location.href = href;
    }
  }
}
