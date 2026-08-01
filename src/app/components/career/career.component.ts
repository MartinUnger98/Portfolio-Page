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
        'Full-stack development on a large enterprise application for a major Austrian company. I build features end-to-end across an Angular/PrimeNG/Nx frontend and a .NET backend, focusing on complex data tables and workflow tools, automated GDPR-compliant data deletion processes, and real-time updates with SignalR.',
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
        'Frontend-focused role on the same enterprise platform, turning complex business processes into clean, maintainable Angular interfaces built with PrimeNG and Nx, working closely with backend and design in an agile Scrum team.',
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
        'Intensive training program for career changers in software development, with over 34 project-driven modules and daily mentor code reviews. My focus was on Python and Django REST Framework, building full-stack projects such as Join and Videoflix.',
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
        'Same program, with the module focused entirely on frontend development — from HTML, CSS and JavaScript fundamentals up to Angular and Firebase. Built projects such as DABubble in agile teams with continuous mentor feedback.',
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
