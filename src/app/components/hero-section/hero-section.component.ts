import { Component } from '@angular/core';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';

@Component({
  selector: 'app-hero-section',
  imports: [NgxMarqueeComponent],
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
