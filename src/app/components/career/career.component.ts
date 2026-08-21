import { Component, inject } from '@angular/core';
import { CareerEntry } from './career.model';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-career',
  imports: [ScrollRevealDirective],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
  protected readonly i18n = inject(TranslationService);

  readonly entries: CareerEntry[] = [
    {
      type: 'work',
      role: 'Fullstack Developer',
      place: 'Atos Group Austria',
      period: 'Jan 2026 - Present',
      location: 'Vienna · Hybrid',
      description:
        'I develop enterprise applications from the interface down to the database, mostly with Angular, PrimeNG, Nx and .NET. My focus is on complex data tables, workflow tools and real-time updates over SignalR.',
      skills: [
        { name: 'Angular', icon: 'assets/skillicons/Angular.svg' },
        { name: '.NET', icon: 'assets/skillicons/net.svg' },
        { name: 'Nx', icon: 'assets/skillicons/nx.svg' },
        { name: 'PrimeNg', icon: 'assets/skillicons/primeng.svg' },
        {
          name: 'EF Core',
          icon: 'assets/skillicons/entityframeworkcore.svg',
        },
        { name: 'Docker', icon: 'assets/skillicons/Docker.svg' },
        { name: 'Figma', icon: 'assets/skillicons/figma.svg' },
        { name: 'Claude Code', icon: 'assets/skillicons/claudecode.svg' },
        { name: 'GitHub Copilot', icon: 'assets/skillicons/githubcopilot.svg' },
      ],
    },
    {
      type: 'work',
      role: 'Frontend Developer',
      place: 'Atos Group Austria',
      period: 'Aug 2024 - Dec 2025',
      location: 'Vienna · Hybrid',
      description:
        'Frontend work on enterprise applications, mostly Angular with PrimeNG and Nx. Turning complicated internal workflows into interfaces people can actually use, and keeping them maintainable once the requirements change again. All of it in an agile Scrum team, with Backend and Design right next to me.',
      skills: [
        { name: 'Angular', icon: 'assets/skillicons/Angular.svg' },
        { name: 'Nx', icon: 'assets/skillicons/nx.svg' },
        { name: 'PrimeNg', icon: 'assets/skillicons/primeng.svg' },
        { name: 'Docker', icon: 'assets/skillicons/Docker.svg' },
        { name: 'Figma', icon: 'assets/skillicons/figma.svg' },
        { name: 'GitHub Copilot', icon: 'assets/skillicons/githubcopilot.svg' },
      ],
    },
    {
      type: 'education',
      role: 'Back-End Development',
      place: 'Developer Akademie',
      period: 'May 2024 - Aug 2025',
      location: 'TÜV-certified training provider',
      description:
        'An intensive career-change program: 34+ modules, all project-driven, with code reviews from a mentor every day. My focus was Python and Django REST Framework, building full-stack projects like Join and Videoflix.',
      skills: [
        { name: 'Python', icon: 'assets/skillicons/Python.svg' },
        { name: 'Django', icon: 'assets/skillicons/Django.svg' },
        { name: 'Redis', icon: 'assets/skillicons/Redis.svg' },
        { name: 'PostgreSQL', icon: 'assets/skillicons/PostgreSQL.svg' },
        { name: 'Docker', icon: 'assets/skillicons/Docker.svg' },
        { name: 'Heroku', icon: 'assets/skillicons/Heroku.svg' },
      ],
    },
    {
      type: 'education',
      role: 'Front-End Development',
      place: 'Developer Akademie',
      period: 'Feb 2023 - Dec 2023',
      location: 'TÜV-certified training provider',
      description:
        'Same program, Frontend part. Started at HTML, CSS and JavaScript fundamentals and ended at Angular and Firebase. Projects like DABubble, built in agile teams with continuous mentor feedback.',
      skills: [
        { name: 'GitHub', icon: 'assets/skillicons/github.svg' },
        { name: 'HTML5', icon: 'assets/skillicons/HTML.svg' },
        { name: 'TypeScript', icon: 'assets/skillicons/TypeScript.svg' },
        { name: 'JavaScript', icon: 'assets/skillicons/JavaScript.svg' },
        { name: 'Firebase', icon: 'assets/skillicons/Firebase.svg' },
        { name: 'CSS', icon: 'assets/skillicons/css.svg' },
        { name: 'Angular', icon: 'assets/skillicons/Angular.svg' },
      ],
    },
  ];
}
