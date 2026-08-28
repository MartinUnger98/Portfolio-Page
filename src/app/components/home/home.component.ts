import { Component, inject } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { HeaderComponent } from '../header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CareerComponent } from '../career/career.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    CareerComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly i18n = inject(TranslationService);
}
