import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() type: 'button' | 'submit' = 'button';

  @Output() clicked = new EventEmitter<Event>();

  handleClick(event: Event) {
    this.clicked.emit(event);
  }
}
