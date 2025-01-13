import { Component, Input } from '@angular/core';

@Component({
  selector: 'fnr-tag',
  imports: [],
  templateUrl: './tag.component.html',
})
export class TagComponent {
  @Input() fnrTagText: string = 'Tag';
}
