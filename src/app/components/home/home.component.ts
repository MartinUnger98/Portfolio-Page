import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { HeaderComponent } from '../header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
