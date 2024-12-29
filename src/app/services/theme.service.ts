import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { PlatformService } from './platform.service';
import { Theme } from '../models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _renderer: Renderer2;
  private readonly THEME_KEY = 'fnr-theme';

  constructor(
    rendererFactory2: RendererFactory2,
    private readonly platformService: PlatformService,
  ) {
    this._renderer = rendererFactory2.createRenderer(null, null);
  }

  initTheme(): void {
    const storedTheme = this.getCurrentTheme();
    this.setTheme(storedTheme);
  }

  toggleTheme(): void {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  private setTheme(theme: string): void {
    const document = this.platformService.getDocument();
    if (!document) return;

    this.platformService.setLocalStorage(this.THEME_KEY, theme);
    if (theme === 'dark') {
      this._renderer.addClass(document?.documentElement, 'dark');
    } else {
      this._renderer.removeClass(document?.documentElement, 'dark');
    }
  }

  getCurrentTheme(): Theme {
    return (this.platformService.getLocalStorage(this.THEME_KEY) as Theme) || 'light';
  }
}
