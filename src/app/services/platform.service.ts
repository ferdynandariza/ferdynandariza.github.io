import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
  ) { }

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getLocalStorage(key: string): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(key);
  }

  setLocalStorage(key: string, value: string): void {
    if (this.isBrowser()) {
      localStorage.setItem(key, value);
    }
  }

  getDocument(): Document | null {
    if (!this.isBrowser()) return null;
    return document;
  }

  getWindow(): Window | null {
    if (!this.isBrowser()) return null;
    return window;
  }
}
