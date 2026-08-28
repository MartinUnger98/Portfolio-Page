import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ButtonComponent } from '../../../ui/button/button.component';
import { Project } from '../../projects/project.model';
import { TranslationService } from '../../../i18n/translation.service';

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
  protected readonly i18n = inject(TranslationService);
  private readonly data = inject<ProjectDialogData>(DIALOG_DATA);
  private readonly dialogRef = inject(DialogRef<void, ProjectDialogComponent>);
  private readonly cdr = inject(ChangeDetectorRef);

  readonly activeIndex = signal(this.data.activeIndex);

  readonly project = computed<Project>(
    () => this.data.projects[this.activeIndex()],
  );

  readonly hasMultipleProjects = computed(() => this.data.projects.length > 1);

  @ViewChild('dialogTitle')
  private readonly dialogTitle?: ElementRef<HTMLElement>;

  nextProject() {
    this.activeIndex.update((index) => (index + 1) % this.data.projects.length);
    this.cdr.detectChanges();
    this.dialogTitle?.nativeElement.focus();
  }

  previousProject() {
    this.activeIndex.update(
      (index) =>
        (index - 1 + this.data.projects.length) % this.data.projects.length,
    );
  }

  close() {
    this.dialogRef.close();
  }
}
