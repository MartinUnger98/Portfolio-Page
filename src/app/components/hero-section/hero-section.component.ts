import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { TranslationService } from '../../i18n/translation.service';
import { focusSection } from '../../shared/focus-section';

@Component({
  selector: 'app-hero-section',
  imports: [ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  protected readonly i18n = inject(TranslationService);

  readonly nameWords = 'Martin Unger'.split(' ');

  readonly socialLinks = [
    {
      href: 'https://github.com/MartinUnger98',
      icon: 'fa-brands fa-github',
      label: 'GitHub profile',
    },
    {
      href: 'https://www.linkedin.com/in/martin-unger-profile/',
      icon: 'fa-brands fa-square-linkedin',
      label: 'LinkedIn profile',
    },
  ];

  private readonly marqueeSource = [
    'Building digital experiences',
    'Fullstack Developer',
    'Based in Vienna',
    "Let's connect",
  ];

  get marqueeTexts(): string[] {
    return this.marqueeSource.map((text) => this.i18n.translate(text));
  }

  get subtitleWords(): string[] {
    return this.i18n.translate('Fullstack Developer').split(' ');
  }

  scrollToSection(id: string) {
    focusSection(id);
  }
}
