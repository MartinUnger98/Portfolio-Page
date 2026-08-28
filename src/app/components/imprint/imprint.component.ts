import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleButtonComponent } from '../../ui/toggle-button/toggle-button.component';
import { FooterComponent } from '../footer/footer.component';
import { Lang, TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-imprint',
  imports: [RouterLink, ToggleButtonComponent, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent implements AfterViewInit {
  protected readonly i18n = inject(TranslationService);

  @ViewChild('pageTitle') private readonly pageTitle?: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    this.pageTitle?.nativeElement.focus({ preventScroll: true });
  }

  onLangChange(v: Lang) {
    this.i18n.setLang(v);
  }
}
