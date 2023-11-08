import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('burgerimg') burgerimg!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  burgerMenuActive = false;

  toggleBurgerMenu() {
    this.toggleImg();
    this.toggleMenu();
  }


  toggleImg() {
    let burgerImg = this.burgerimg.nativeElement;
    if (this.burgerMenuActive === false) {
      burgerImg.src = 'assets/icons/burgermenuclose.svg';
      this.burgerMenuActive = true;
    } else {
      burgerImg.src = 'assets/icons/burgermenu.svg';
      this.burgerMenuActive = false;
    }
    
  }

  toggleMenu() {
    let menu = this.menu.nativeElement;
    if (menu.classList.contains('menu-visible')) {
      this.menuFadeOut(menu);
    } else {
      this.menuFadeIn(menu);
    }
  } 

  menuFadeIn(menu: HTMLElement) {
    menu.classList.add('menu-visible');
    menu.classList.remove('menu-hidden');
  }

  menuFadeOut(menu: HTMLElement) {
    menu.classList.add('menu-hidden');
    menu.classList.remove('menu-visible');
  }

}
