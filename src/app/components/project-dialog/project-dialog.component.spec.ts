import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDialogComponent } from './project-dialog.component';

describe('ProjectDialogComponent', () => {
  let component: ProjectDialogComponent;
  let fixture: ComponentFixture<ProjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
