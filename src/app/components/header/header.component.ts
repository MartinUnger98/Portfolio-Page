import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  langs = [
    { label: 'EN', value: 'en' },
    { label: 'DE', value: 'de' },
  ];

  selectedLang: 'en' | 'de' = 'de';

  onLangChange(lang: 'en' | 'de') {
    console.log('Language switched to', lang);
  }
}
