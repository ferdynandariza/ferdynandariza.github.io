import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'fnr-section-container',
  imports: [NgClass],
  templateUrl: './section-container.component.html',
})
export class SectionContainerComponent {
  @Input() fnrCustomStyling: string = '';
}
