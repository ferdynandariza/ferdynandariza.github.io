import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LinkComponent } from '../link/link.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ThemeService } from '../../services/theme.service';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'fnr-navigation-bar',
  imports: [ButtonComponent, LinkComponent, IconButtonComponent, NgTemplateOutlet, NgIf],
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent {
  protected isExpandMenu: boolean = false;

  constructor(private readonly themeService: ThemeService) {}

  protected onClickThemeButton() {
    this.themeService.toggleTheme();
  }

  protected toggleExpandMenu() {
    this.isExpandMenu = !this.isExpandMenu;
  }

  protected onClickDownloadCv() {}
}
