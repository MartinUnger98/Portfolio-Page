import { Component, computed, inject, signal } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { Project } from './project.model';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-projects',
  imports: [ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly dialog = inject(Dialog);
  protected readonly i18n = inject(TranslationService);

  readonly projects: Project[] = [
    {
      number: '01',
      name: 'Join',
      image: 'assets/images/Join.svg',
      imagePosition: '50% 10%',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      techs: [
        { name: 'Angular', icon: 'assets/skillicons/Angular.svg' },
        { name: 'TypeScript', icon: 'assets/skillicons/TypeScript.svg' },
        { name: 'C#', icon: 'assets/skillicons/csharp.svg' },
        { name: '.NET', icon: 'assets/skillicons/net.svg' },
        { name: 'Python', icon: 'assets/skillicons/Python.svg' },
        { name: 'Django', icon: 'assets/skillicons/Django.svg' },
        { name: 'Docker', icon: 'assets/skillicons/Docker.svg' },
      ],
      github: 'https://github.com/MartinUnger98/Join',
      live: 'https://join.martin-unger.at/login',
    },
    {
      number: '02',
      name: 'DABubble',
      image: 'assets/images/dabubble_portfolio.svg',
      imagePosition: '50% 85%',
      description:
        'A Slack-style chat app with custom channels, direct messages, image uploads and mentions. Everything updates live through Firebase, so keeping the state consistent across open sessions was most of the work.',
      techs: [
        { name: 'Angular', icon: 'assets/skillicons/Angular.svg' },
        { name: 'TypeScript', icon: 'assets/skillicons/TypeScript.svg' },
        { name: 'Firebase', icon: 'assets/skillicons/Firebase.svg' },
        { name: 'RxJs', icon: 'assets/skillicons/RxJs.svg' },
      ],
      github: 'https://github.com/MartinUnger98/DABubble',
      live: 'https://dabubble.martin-unger.at/',
    },
    {
      number: '03',
      name: 'Videoflix',
      image: 'assets/images/videoflix-portfolio.svg',
      imagePosition: '50% 55%',
      description:
        'A streaming platform with categorized content, resume playback and multiple quality levels. Videos get converted into different resolutions in the background after upload, which taught me more about backend queues than about video.',
      techs: [
        { name: 'Angular', icon: 'assets/skillicons/Angular.svg' },
        { name: 'TypeScript', icon: 'assets/skillicons/TypeScript.svg' },
        { name: 'Python', icon: 'assets/skillicons/Python.svg' },
        { name: 'Django', icon: 'assets/skillicons/Django.svg' },
        { name: 'PostgreSQL', icon: 'assets/skillicons/PostgreSQL.svg' },
        { name: 'Docker', icon: 'assets/skillicons/Docker.svg' },
      ],
      github: 'https://github.com/MartinUnger98/Videoflix',
      live: 'https://videoflix.martin-unger.at/',
    },
  ];

  private readonly hoveredIndex = signal<number | null>(null);

  readonly previewProject = computed(() => {
    const index = this.hoveredIndex();
    return index === null ? null : this.projects[index];
  });

  setHovered(index: number) {
    this.hoveredIndex.set(index);
  }

  clearHovered() {
    this.hoveredIndex.set(null);
  }

  openProject(index: number) {
    this.dialog.open(ProjectDialogComponent, {
      data: { projects: this.projects, activeIndex: index },
      panelClass: 'project-dialog-panel',
      backdropClass: 'project-dialog-backdrop',
    });
  }
}
