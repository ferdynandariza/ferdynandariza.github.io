import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { WorkSectionComponent } from './components/work-section/work-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    HeroSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    WorkSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
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
