import { Component } from '@angular/core';
import { SectionContainerComponent } from '../section-container/section-container.component';
import { TagComponent } from '../tag/tag.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { NgClass, NgForOf } from '@angular/common';
import { PlatformService } from '../../services/platform.service';
import { NAVIGATION_MENU } from '../../constants/navigation-menu.constant';

@Component({
  selector: 'fnr-work-section',
  imports: [SectionContainerComponent, TagComponent, IconButtonComponent, NgForOf, NgClass],
  templateUrl: './work-section.component.html',
})
export class WorkSectionComponent {
  works: any[] = [
    {
      title: 'Kopra by Mandiri',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      previewImage: '/assets/images/koprabymandiri.png',
      techStacks: [
        'Angular',
        'Typescript',
        'Javascript',
        'TailwindCSS',
        'Scss',
        'Git',
        'Bitbucket',
        'Jira',
      ],
      link: 'https://koprabymandiri.com',
    },
  ];
  protected readonly NAVIGATION_MENU = NAVIGATION_MENU;

  constructor(private readonly platformService: PlatformService) {}

  protected onClickItemLink(link: string) {
    const window = this.platformService.getWindow();
    if (!window) return;
    window.open(link, '_blank');
  }
}
