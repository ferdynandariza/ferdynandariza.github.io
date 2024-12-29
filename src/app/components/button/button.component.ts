import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fnr-button',
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() public fnrButtonText: string = 'Button';
  @Output() public fnrButtonClick: EventEmitter<void> = new EventEmitter();

  protected onClickButton(): void {
    this.fnrButtonClick.emit();
  }
}
