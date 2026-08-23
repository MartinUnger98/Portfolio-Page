import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleButtonComponent } from '../../ui/toggle-button/toggle-button.component';
import { FooterComponent } from '../footer/footer.component';
import { Lang, TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, ToggleButtonComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  protected readonly i18n = inject(TranslationService);

  onLangChange(v: Lang) {
    this.i18n.setLang(v);
  }
}
