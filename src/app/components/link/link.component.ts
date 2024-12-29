import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'fnr-link',
  imports: [],
  templateUrl: './link.component.html',
})
export class LinkComponent {
  @Input() fnrLinkText: string = 'Link';
  @Output() fnrLinkClicked: EventEmitter<void> = new EventEmitter();

  protected onClickLink(): void {
    this.fnrLinkClicked.emit();
  }
}
