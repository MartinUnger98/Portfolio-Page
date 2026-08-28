import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleButtonComponent } from '../../ui/toggle-button/toggle-button.component';
import { Lang, TranslationService } from '../../i18n/translation.service';
import { focusSection } from '../../shared/focus-section';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, ToggleButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  protected readonly i18n = inject(TranslationService);

  isScrolledPastHero = false;
  isMobileMenuOpen = false;

  @ViewChild('menuToggle')
  private readonly menuToggle?: ElementRef<HTMLButtonElement>;
  @ViewChild('mobileNav') private readonly mobileNav?: ElementRef<HTMLElement>;

  navLinks = [
    { label: 'About me', href: '#about-me' },
    { label: 'Skills', href: '#skills' },
    { label: 'Career', href: '#career' },
    { label: 'Projects', href: '#projects' },
  ];

  private readonly cdr = inject(ChangeDetectorRef);

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

  @HostListener('document:keydown.escape')
  onEscape() {
    if (!this.isMobileMenuOpen) return;
    this.closeMobileMenu();
    this.menuToggle?.nativeElement.focus();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isMobileMenuOpen) return;
    if (this.elementRef.nativeElement.contains(event.target as Node)) return;
    this.closeMobileMenu();
  }

  onLangChange(v: Lang) {
    this.i18n.setLang(v);
  }

  toggleMobileMenu(event?: MouseEvent) {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) return;

    this.cdr.detectChanges();
    const openedByKeyboard = !event || event.detail === 0;
    if (openedByKeyboard) {
      this.mobileNav?.nativeElement.querySelector('a')?.focus();
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    focusSection('hero');
  }

  scrollToSection(event: MouseEvent, href: string) {
    event.preventDefault();
    this.closeMobileMenu();
    focusSection(href.slice(1));
  }
}
