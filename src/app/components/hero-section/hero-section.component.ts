import { Component } from '@angular/core';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-hero-section',
  imports: [NgxMarqueeComponent, ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

  marqueeTexts = [
    "Building digital experiences",
    "Fullstack Developer",
    "Based in Vienna",
    "Let's connect",
  ]
}
