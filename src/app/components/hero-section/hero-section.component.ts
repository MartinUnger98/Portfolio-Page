import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-hero-section',
  imports: [ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  protected readonly i18n = inject(TranslationService);

  readonly nameWords = 'Martin Unger'.split(' ');

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
    document.getElementById(id)?.scrollIntoView();
  }
}
