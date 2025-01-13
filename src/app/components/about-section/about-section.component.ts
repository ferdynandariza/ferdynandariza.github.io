import { Component } from '@angular/core';
import { SectionContainerComponent } from '../section-container/section-container.component';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'fnr-about-section',
  imports: [SectionContainerComponent, TagComponent],
  templateUrl: './about-section.component.html',
  styles: ``,
})
export class AboutSectionComponent {}
