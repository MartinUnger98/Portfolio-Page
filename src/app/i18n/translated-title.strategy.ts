import { Injectable, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslationService } from './translation.service';

const SITE_NAME = 'Martin Unger';

@Injectable({ providedIn: 'root' })
export class TranslatedTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly i18n = inject(TranslationService);

  private currentRouteTitle: string | undefined;

  constructor() {
    super();
    effect(() => {
      this.i18n.lang();
      this.applyTitle();
    });
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.currentRouteTitle = this.buildTitle(snapshot);
    this.applyTitle();
  }

  private applyTitle(): void {
    if (!this.currentRouteTitle) return;

    const translated = this.i18n.translate(this.currentRouteTitle);
    this.title.setTitle(
      translated.includes(SITE_NAME)
        ? translated
        : `${translated} | ${SITE_NAME}`,
    );
  }
}
