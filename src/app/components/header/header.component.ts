import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButtonComponent } from '../../ui/toggle-button/toggle-button.component';

@Component({
  selector: 'app-header',
  imports: [FormsModule, ToggleButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  lang: 'en' | 'de' = 'en';
  onLangChange(v: 'en' | 'de') { this.lang = v; }
}
