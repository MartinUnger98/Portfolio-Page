import {
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../ui/button/button.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { TranslationService } from '../../i18n/translation.service';

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';
type ContactField = 'name' | 'email' | 'message' | 'privacyAccepted';

const EMAIL_PATTERN = /^[a-z0-9_.-]+@[a-z0-9.-]+\.[a-z.]{2,6}$/i;
const MESSAGE_MAX_HEIGHT_PX = 240;

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    ScrollRevealDirective,
    RouterLink,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly i18n = inject(TranslationService);
  private readonly http = inject(HttpClient);
  private readonly fb = inject(FormBuilder);

  @ViewChild('messageInput')
  private readonly messageInput?: ElementRef<HTMLTextAreaElement>;

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  private readonly formspreeEndpoint = 'https://formspree.io/f/mjvqzpqy';

  readonly status = signal<SubmitStatus>('idle');

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    message: ['', Validators.required],
    privacyAccepted: [false, Validators.requiredTrue],
  });

  showError(control: ContactField): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.touched || field.dirty);
  }

  autoResizeMessage(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, MESSAGE_MAX_HEIGHT_PX)}px`;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.focusFirstInvalidControl();
      return;
    }

    const { privacyAccepted, ...payload } = this.form.getRawValue();
    this.status.set('sending');

    this.http
      .post(this.formspreeEndpoint, payload, {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: () => {
          this.status.set('sent');
          this.form.reset({ privacyAccepted: false });
          if (this.messageInput) {
            this.messageInput.nativeElement.style.height = 'auto';
          }
        },
        error: () => this.status.set('error'),
      });
  }

  private focusFirstInvalidControl() {
    const firstInvalid = Object.keys(this.form.controls).find(
      (name) => this.form.get(name)?.invalid,
    );
    if (!firstInvalid) return;

    const element = this.host.nativeElement.querySelector<HTMLElement>(
      `#${firstInvalid}`,
    );
    element?.focus();
  }
}
