import { Component } from '@angular/core';
import { SectionContainerComponent } from '../section-container/section-container.component';
import { TagComponent } from '../tag/tag.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { SocialMedia } from '../../models/social-media.model';
import { CONTACT } from '../../constants/contact.constant';
import { NAVIGATION_MENU } from '../../constants/navigation-menu.constant';

@Component({
  selector: 'fnr-contact-section',
  imports: [SectionContainerComponent, TagComponent, IconButtonComponent],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  protected readonly CONTACT = CONTACT;
  protected readonly NAVIGATION_MENU = NAVIGATION_MENU;

  onClickCopy(text: string) {
    navigator.clipboard.writeText(text);
  }

  onClickProfile(media: SocialMedia) {
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
      case 'email':
        window.open(CONTACT.MAILTO, '_blank');
        break;
      case 'phone':
        window.open(CONTACT.TEL, '_blank');
        break;
    }
  }
}
