import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { GoogleAnalyticsService } from './services/google-analytics.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBarComponent, HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private readonly themeService: ThemeService,
    private readonly analyticsService: GoogleAnalyticsService,
  ) {}

  ngOnInit(): void {
    this.themeService.initTheme();
    this.analyticsService.initGoogleAnalytics();
  }
}
