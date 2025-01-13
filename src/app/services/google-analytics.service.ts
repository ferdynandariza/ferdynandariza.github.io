import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  constructor(private readonly platformService: PlatformService) {}

  initGoogleAnalytics() {
    const document = this.platformService.getDocument();
    if (!document) return;

    const trackingId = environment.googleAnalyticsTrackingId || 'G-M2X6DD2MTR';
    if (!trackingId) {
      console.error('Google Analytics tracking ID is not set!');
      return;
    }

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', '${trackingId}');
      `;
    document.head.appendChild(script2);
  }
}
