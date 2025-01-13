import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LinkComponent } from '../link/link.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ThemeService } from '../../services/theme.service';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { PlatformService } from '../../services/platform.service';
import { NAVIGATION_MENU } from '../../constants/navigation-menu.constant';

@Component({
  selector: 'fnr-navigation-bar',
  imports: [ButtonComponent, LinkComponent, IconButtonComponent, NgTemplateOutlet, NgIf, NgForOf],
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent {
  protected isExpandMenu: boolean = false;
  SECTIONS: any[] = [
    { label: 'Skills', id: NAVIGATION_MENU.SKILLS },
    { label: 'Experience', id: NAVIGATION_MENU.EXPERIENCE },
    { label: 'Work', id: NAVIGATION_MENU.WORK },
    { label: 'Contact', id: NAVIGATION_MENU.CONTACT },
  ];

  constructor(
    private readonly themeService: ThemeService,
    private readonly platformService: PlatformService,
  ) {}

  protected onClickThemeButton() {
    this.themeService.toggleTheme();
  }

  protected toggleExpandMenu() {
    this.isExpandMenu = !this.isExpandMenu;
  }

  protected onClickDownloadCv() {}

  protected onClickLinkMenu(section: string) {
    const document = this.platformService.getDocument();
    if (!document) return;
    document.getElementById(section)?.scrollIntoView();
  }
}
