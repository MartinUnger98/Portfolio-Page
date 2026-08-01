import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { TranslationService } from '../../i18n/translation.service';

interface Skill {
  name: string;
  src: string;
}

@Component({
  selector: 'app-skills',
  imports: [ButtonComponent, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  protected readonly i18n = inject(TranslationService);

  readonly skills: Skill[] = [
    { name: 'Angular', src: 'assets/skillicons/Angular.svg' },
    { name: 'C#', src: 'assets/skillicons/csharp.svg' },
    { name: '.NET', src: 'assets/skillicons/net.svg' },
    { name: 'Azure', src: 'assets/skillicons/azure.svg' },
    { name: 'Django', src: 'assets/skillicons/Django.svg' },
    { name: 'Docker', src: 'assets/skillicons/Docker.svg' },
    { name: 'Firebase', src: 'assets/skillicons/Firebase.svg' },
    { name: 'Git', src: 'assets/skillicons/git.svg' },
    { name: 'PostgreSQL', src: 'assets/skillicons/PostgreSQL.svg' },
    { name: 'Python', src: 'assets/skillicons/Python.svg' },
    { name: 'RxJS', src: 'assets/skillicons/RxJs.svg' },
    { name: 'Nx', src: 'assets/skillicons/nx.svg' },
    { name: 'JavaScript', src: 'assets/skillicons/JavaScript.svg' },
    { name: 'TypeScript', src: 'assets/skillicons/TypeScript.svg' },
    { name: 'Tailwind', src: 'assets/skillicons/tailwind.svg' },
    { name: 'PrimeNG', src: 'assets/skillicons/primeng.svg' },
  ];
}
