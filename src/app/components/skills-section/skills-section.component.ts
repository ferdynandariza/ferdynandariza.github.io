import { Component } from '@angular/core';
import { SectionContainerComponent } from '../section-container/section-container.component';
import { TagComponent } from '../tag/tag.component';
import { NgForOf } from '@angular/common';
import { NAVIGATION_MENU } from '../../constants/navigation-menu.constant';

@Component({
  selector: 'fnr-skills-section',
  imports: [SectionContainerComponent, TagComponent, NgForOf],
  templateUrl: './skills-section.component.html',
})
export class SkillsSectionComponent {
  techs: any[] = [
    {
      icon: '/assets/images/icon-typescript.svg',
      subtitle: 'Typescript',
    },
    {
      icon: '/assets/images/icon-javscript.svg',
      subtitle: 'Javascript',
    },
    {
      icon: '/assets/images/icon-angular.svg',
      subtitle: 'Angular',
    },
    {
      icon: '/assets/images/icon-tailwindcss.svg',
      subtitle: 'TailwindcSS',
    },
    {
      icon: '/assets/images/icon-nodejs.svg',
      subtitle: 'Node.js',
    },
    {
      icon: '/assets/images/icon-sass.svg',
      subtitle: 'Sass/Scss',
    },
    {
      icon: '/assets/images/icon-java.svg',
      subtitle: 'Java',
    },
    {
      icon: '/assets/images/icon-maven.svg',
      subtitle: 'Maven',
    },
    {
      icon: '/assets/images/icon-springboot.svg',
      subtitle: 'SpringBoot',
    },
    {
      icon: '/assets/images/icon-postgresql.svg',
      subtitle: 'PostgreSQL',
    },
    {
      icon: '/assets/images/icon-python.svg',
      subtitle: 'Python',
    },
    {
      icon: '/assets/images/icon-git.svg',
      subtitle: 'Git',
    },
    {
      icon: '/assets/images/icon-github-actions.svg',
      subtitle: 'Github Actions',
    },
  ];
  protected readonly NAVIGATION_MENU = NAVIGATION_MENU;
}
