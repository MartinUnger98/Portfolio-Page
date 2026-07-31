import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleButtonComponent } from '../../ui/toggle-button/toggle-button.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, ToggleButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  lang: 'en' | 'de' = 'en';
  isScrolledPastHero = false;

  navLinks = [
    { label: 'About me', href: '#about-me' },
    { label: 'Skills', href: '#skills' },
    { label: 'Career', href: '#career' },
    { label: 'Projects', href: '#projects' },
  ];

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.updateScrolledState();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  updateScrolledState() {
    const hero = document.getElementById('hero');
    const headerHeight = this.elementRef.nativeElement.clientHeight;
    this.isScrolledPastHero = hero
      ? hero.getBoundingClientRect().bottom <= headerHeight
      : window.scrollY > 0;
  }

  onLangChange(v: 'en' | 'de') {
    this.lang = v;
  }
}
