import { Component } from '@angular/core';
import { SectionContainerComponent } from '../section-container/section-container.component';
import { TagComponent } from '../tag/tag.component';
import { NgForOf } from '@angular/common';
import { NAVIGATION_MENU } from '../../constants/navigation-menu.constant';

@Component({
  selector: 'fnr-experience-section',
  imports: [SectionContainerComponent, TagComponent, NgForOf],
  templateUrl: './experience-section.component.html',
})
export class ExperienceSectionComponent {
  experiences: any[] = [
    {
      role: 'Frontend Developer',
      companyName: 'indocyber',
      companyLogo: '/assets/images/logo-iglo.png',
      description:
        'Assigned as a frontend developer at Bank Mandiri, I participated in the development team for Kopra by Mandiri, a wholesale banking application. My main responsibility involved developing Cash Management features, specifically Bill Payment and Tax Payment. Additionally, I contributed to the development of other features, including LAJU, SOPP, Payment Destination, Cash Advance, Payroll, and Transfer.',
      period: 'Mar - Dec 2024',
    },
    {
      role: 'Java Developer',
      companyName: 'indocyber',
      companyLogo: '/assets/images/logo-iglo.png',
      description:
        "Assigned to the internal chatbot product team as a developer, developing an omni-channel chatbot application utilizing 3Dolphin, a third-party platform, and its Java-based SDK. This project, designed for a financial services company (FIFGroup), to enhance the helpdesk team's efficiency in addressing employee ticketing processes.",
      period: 'Aug 2023 - Feb 2024',
    },
    {
      role: 'Java Developer Intern',
      companyName: 'indocyber',
      companyLogo: '/assets/images/logo-iglo.png',
      description:
        'Completed intensive web development training (± 4 months), mastering SQL-based database, programming language, and full stack web development. Deep dive into web development technologies such as SQL (Microsoft SQL Server), Java, Spring Boot, HTML/CSS/JavaScript, and key concepts like OOP, RESTful API, MVC architecture, etc.',
      period: 'Mar - Jul 2023',
    },
  ];
  protected readonly NAVIGATION_MENU = NAVIGATION_MENU;
}
