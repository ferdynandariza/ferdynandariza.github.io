import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ThemeService} from '../../services/theme.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'fnr-icon-button',
  imports: [
    NgIf
  ],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  @Input() fnrIconButtonSrc: string = '/assets/icon/icon-github-light-sm.svg';
  @Input() fnrDarkIconButtonSrc: string = '';
  @Output() fnrIconButtonClicked: EventEmitter<void> = new EventEmitter();

  constructor(private readonly themeService: ThemeService) {}

  protected onClickButton() {
    this.fnrIconButtonClicked.emit();
  }

   protected isDarkTheme() {
    return this.themeService.getCurrentTheme() === 'dark';
   }
}
