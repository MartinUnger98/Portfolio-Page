import { Component, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ButtonComponent } from '../../../ui/button/button.component';
import { Project } from '../../projects/project.model';

export interface ProjectDialogData {
  projects: Project[];
  activeIndex: number;
}

@Component({
  selector: 'app-project-dialog',
  imports: [ButtonComponent],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss',
})
export class ProjectDialogComponent {
  private readonly data = inject<ProjectDialogData>(DIALOG_DATA);
  private readonly dialogRef = inject(DialogRef<void, ProjectDialogComponent>);

  activeIndex = this.data.activeIndex;

  get project(): Project {
    return this.data.projects[this.activeIndex];
  }

  get hasMultipleProjects(): boolean {
    return this.data.projects.length > 1;
  }

  nextProject() {
    this.activeIndex = (this.activeIndex + 1) % this.data.projects.length;
  }

  previousProject() {
    this.activeIndex =
      (this.activeIndex - 1 + this.data.projects.length) %
      this.data.projects.length;
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  close() {
    this.dialogRef.close();
  }
}
