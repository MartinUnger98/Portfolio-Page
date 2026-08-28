import { Component, EventEmitter, Input, Output } from '@angular/core';

type Lang = 'en' | 'de';

@Component({
  selector: 'app-toggle-button',
  imports: [],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
})
export class ToggleButtonComponent {
  @Input() value: Lang = 'en';
  @Output() valueChange = new EventEmitter<Lang>();

  readonly labels: Record<Lang, string> = {
    en: 'Current language: English. Switch to German.',
    de: 'Aktuelle Sprache: Deutsch. Auf Englisch umschalten.',
  };

  toggle() {
    this.value = this.value === 'en' ? 'de' : 'en';
    this.valueChange.emit(this.value);
  }
}
