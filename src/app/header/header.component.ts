import { Component, ElementRef, ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public translate: TranslateService) {
    }
  @ViewChild('burgerimg') burgerimg!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('de') de!: ElementRef;
  @ViewChild('en') en!: ElementRef;

  private BURGER_MENU_OPEN = 'assets/icons/burgermenuclose.svg';
  private BURGER_MENU_CLOSE = 'assets/icons/burgermenu.svg';
  burgerMenuActive = false;


  /**
   * Toggles the burger menu by changing the image and menu visibility.
   */
  toggleBurgerMenu() {
    this.toggleImg();
    this.toggleMenu();
  }


   /**
   * Toggles the burger menu image between open and close states.
   */
  toggleImg() {
    let burgerImg = this.burgerimg.nativeElement;
    burgerImg.src = this.burgerMenuActive ? this.BURGER_MENU_CLOSE : this.BURGER_MENU_OPEN;
    this.burgerMenuActive = !this.burgerMenuActive;
  }


  /**
   * Toggles the menu visibility by applying fade-in or fade-out animations.
   */
  toggleMenu() {
    let menu = this.menu.nativeElement;
    menu.classList.contains('menu-visible') ? this.menuFadeOut(menu) : this.menuFadeIn(menu);
  } 


  /**
   * Applies fade-in animation to the menu.
   * @param menu - HTMLElement representing the menu.
   */
  menuFadeIn(menu: HTMLElement) {
    menu.classList.add('menu-visible');
    menu.classList.remove('menu-hidden');
  }


  /**
   * Applies fade-out animation to the menu.
   * @param menu - HTMLElement representing the menu.
   */
  menuFadeOut(menu: HTMLElement) {
    menu.classList.add('menu-hidden');
    menu.classList.remove('menu-visible');
  }


  /**
   * Handles language selection and triggers the translation service.
   * @param id - The language identifier (e.g., 'en' for English, 'de' for German).
   */
  buttonTranslate(id: string) {
    this.translate.use(`${id}`);
    this.select(id);
  }


  /**
   * Highlights the selected language button.
   * @param id - The selected language identifier.
   */
  select(id: string) {
    this.de.nativeElement.classList.toggle('selected', id === 'de');
    this.en.nativeElement.classList.toggle('selected', id !== 'de');
  }


  /**
   * scroll function which scrolls to top
   */
  scrollToTop() {
    window.scroll({ top: 0, left: 0});
  }
}
