import { Component, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { Project } from './project.model';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly dialog = inject(Dialog);

  readonly projects: Project[] = [
    {
      number: '01',
      name: 'Join',
      image: 'assets/images/Join.svg',
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
      description:
        'Inspired by Slack, this chat messenger allows you to create custom channels for smooth communication with colleagues. Exchange direct messages, share images, and tag individuals effortlessly.',
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
      description:
        'Videoflix is a video platform where users can explore categorized content, resume playback and stream videos in multiple quality levels.',
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

  openProject(index: number) {
    this.dialog.open(ProjectDialogComponent, {
      data: { projects: this.projects, activeIndex: index },
      panelClass: 'project-dialog-panel',
      backdropClass: 'project-dialog-backdrop',
    });
  }
}
