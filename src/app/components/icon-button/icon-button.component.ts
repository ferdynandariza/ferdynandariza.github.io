import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'fnr-icon-button',
  imports: [NgIf, AsyncPipe, NgClass],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  @Input() fnrIconButtonSrc: string = '/assets/icon/light/github-light.svg';
  @Input() fnrDarkIconButtonSrc: string = '';
  @Input() fnrIconButtonSize: 'small' | 'large' = 'small';
  @Output() fnrIconButtonClicked: EventEmitter<void> = new EventEmitter();

  constructor(private readonly themeService: ThemeService) {}

  protected onClickButton() {
    this.fnrIconButtonClicked.emit();
  }

  protected isDarkTheme() {
    return this.themeService.isDarkMode$;
  }
}
