import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { TranslationService } from '../../i18n/translation.service';

interface SocialLink {
  href: string;
  icon: string;
  label: string;
  external: boolean;
}

@Component({
  selector: 'app-footer',
  imports: [ScrollRevealDirective, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly i18n = inject(TranslationService);
  readonly year = new Date().getFullYear();

  readonly socialLinks: SocialLink[] = [
    {
      href: 'https://github.com/MartinUnger98',
      icon: 'fa-brands fa-github',
      label: 'GitHub profile',
      external: true,
    },
    {
      href: 'mailto:mail@martin-unger.at',
      icon: 'fa-solid fa-envelope',
      label: 'Email Martin Unger',
      external: false,
    },
    {
      href: 'https://www.linkedin.com/in/martin-unger-profile/',
      icon: 'fa-brands fa-linkedin-in',
      label: 'LinkedIn profile',
      external: true,
    },
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
