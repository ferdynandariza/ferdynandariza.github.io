import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LinkComponent } from '../link/link.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fnr-navigation-bar',
  imports: [
    ButtonComponent,
    LinkComponent,
    IconButtonComponent,
  ],
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent {

  constructor(private readonly themeService: ThemeService) {
  }

  onClickThemeButton() {
    this.themeService.toggleTheme();
  }
}
