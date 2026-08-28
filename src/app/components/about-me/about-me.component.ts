import { Component, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-about-me',
  imports: [ScrollRevealDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  protected readonly i18n = inject(TranslationService);

  private readonly icons = [
    {
      icon: '/assets/images/location.svg',
      alt: 'location icon',
      text: 'Currently, I work at Atos Austria as a Fullstack Developer, where I focus on developing enterprise solutions using Angular and .NET.',
    },
    {
      icon: '/assets/images/cognition.svg',
      alt: 'cognition icon',
      text: 'Over time I got more interested in the architecture around the code, how the pieces fit together and what breaks under load.',
    },
    {
      icon: '/assets/images/check-icon.svg',
      alt: 'check icon',
      text: 'I build things meant to last longer than the sprint they were written in.',
    },
  ];

  get aboutPoints() {
    return this.icons.map((entry) => ({
      ...entry,
      text: this.i18n.translate(entry.text),
    }));
  }
}
