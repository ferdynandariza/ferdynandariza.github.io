import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { PlatformService } from './platform.service';
import { Theme } from '../models/theme.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'fnr-theme';

  private _renderer: Renderer2;
  private _isDarkMode = new BehaviorSubject<boolean>(this.isSystemPreferDarkMode());

  constructor(
    readonly rendererFactory2: RendererFactory2,
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

  private setTheme(theme: Theme): void {
    const document = this.platformService?.getDocument();
    if (!document) return;

    this.platformService.setLocalStorage(this.THEME_KEY, theme);
    const isDark = theme === 'dark';
    this._isDarkMode.next(isDark);
    if (isDark) {
      this._renderer.addClass(document?.documentElement, 'fnr-dark');
      this._renderer.addClass(document?.documentElement, 'dark');
    } else {
      this._renderer.removeClass(document?.documentElement, 'fnr-dark');
      this._renderer.removeClass(document?.documentElement, 'dark');
    }
  }

  getCurrentTheme(): Theme {
    const systemPreference = this.isSystemPreferDarkMode() ? 'dark' : 'light';
    return (this.platformService?.getLocalStorage(this.THEME_KEY) as Theme) || systemPreference;
  }

  get isDarkMode$() {
    return this._isDarkMode.asObservable();
  }

  protected isSystemPreferDarkMode(): boolean {
    return !!this.platformService?.getWindow()?.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
