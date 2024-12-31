import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'fnr-icon-button',
  imports: [NgIf, AsyncPipe],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  @Input() fnrIconButtonSrc: string = '/assets/icon/light/icon-github-light-sm.svg';
  @Input() fnrDarkIconButtonSrc: string = '';
  @Output() fnrIconButtonClicked: EventEmitter<void> = new EventEmitter();

  constructor(private readonly themeService: ThemeService) {}

  protected onClickButton() {
    this.fnrIconButtonClicked.emit();
  }

  protected isDarkTheme() {
    return this.themeService.isDarkMode$;
  }
}
