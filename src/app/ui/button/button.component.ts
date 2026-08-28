import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() href?: string;
  @Input() target: '_blank' | '_self' = '_self';
  @Input() icon?: string;
  @Input() outlined: boolean = true;
  @Input() disabled: boolean = false;
  @Input() ariaLabel?: string;
  @Input() newTabHint = 'opens in a new tab';

  @Output() clicked = new EventEmitter<Event>();

  handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.clicked.emit(event);
  }
}
