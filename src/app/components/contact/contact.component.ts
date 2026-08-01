import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { TranslationService } from '../../i18n/translation.service';

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

const EMAIL_PATTERN = /^[a-z0-9_.-]+@[a-z0-9.-]+\.[a-z.]{2,6}$/i;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, ButtonComponent, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly i18n = inject(TranslationService);
  private readonly http = inject(HttpClient);
  private readonly fb = inject(FormBuilder);

  private readonly formspreeEndpoint = 'https://formspree.io/f/mjvqzpqy';

  readonly status = signal<SubmitStatus>('idle');

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    message: ['', Validators.required],
    privacyAccepted: [false, Validators.requiredTrue],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
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
        },
        error: () => this.status.set('error'),
      });
  }
}
