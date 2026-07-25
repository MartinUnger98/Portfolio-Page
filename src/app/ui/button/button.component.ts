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

  @Output() clicked = new EventEmitter<Event>();

  handleClick(event: Event) {
    this.clicked.emit(event);
  }
}
