import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
