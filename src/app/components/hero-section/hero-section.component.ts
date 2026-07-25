import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-hero-section',
  imports: [ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  marqueeTexts = [
    'Building digital experiences',
    'Fullstack Developer',
    'Based in Vienna',
    "Let's connect",
  ];
}
