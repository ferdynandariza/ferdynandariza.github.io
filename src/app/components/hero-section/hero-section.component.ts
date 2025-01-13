import { Component } from '@angular/core';
import { SectionContainerComponent } from '../section-container/section-container.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { SocialMedia } from '../../models/social-media.model';
import { PlatformService } from '../../services/platform.service';
import { CONTACT } from '../../constants/contact.constant';

@Component({
  selector: 'fnr-hero-section',
  imports: [SectionContainerComponent, IconButtonComponent],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  constructor(private readonly platformService: PlatformService) {}

  onClickProfile(media: SocialMedia): void {
    const window = this.platformService.getWindow();
    if (!window) return;

    switch (media) {
      case 'github':
        window.open(CONTACT.GITHUB, '_blank');
        break;
      case 'linkedin':
        window.open(CONTACT.LINKEDIN, '_blank');
        break;
      case 'instagram':
        window.open(CONTACT.INSTAGRAM, '_blank');
        break;
    }
  }
}
