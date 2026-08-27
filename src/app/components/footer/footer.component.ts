import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-footer',
  imports: [ScrollRevealDirective, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly i18n = inject(TranslationService);
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

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  open(href: string, external: boolean = true) {
    if (external) {
      window.open(href, '_blank', 'noopener');
    } else {
      window.location.href = href;
    }
  }
}
