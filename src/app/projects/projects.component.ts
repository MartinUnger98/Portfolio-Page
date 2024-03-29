import { Component, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', './projects.component.media-query.scss'],
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Anfangszustand direkt in der Transition
        animate('1s 500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }), // Anfangszustand direkt in der Transition
        animate('1s 500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
  ]
})
export class ProjectsComponent {

  isVisible = false;
  constructor(private el: ElementRef) {}
  projects = [
    {
      title:"DABubble",
      technologies: "Angular | Typescript | Firebase | RxJs | SCSS ",
      description: "Inspired by Slack, this chat messenger allows you to create custom channels for smooth communication with colleagues. Exchange direct messages, share images, and tag individuals effortlessly.",
      img: "assets/img/dabubble_portfolio.svg",
      link_live: "https://dabubble.martin-unger.at/",
      link_github: "https://github.com/MartinUnger98/DABubble",
      live: true,
    },
    {
      title:"Join",
      technologies: "Javascript | HTML | CSS",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ",
      img: "assets/img/Join.svg",
      link_live: "https://join.martin-unger.at/html/login.html",
      link_github: "https://github.com/MartinUnger98/Join",
      live: true,
    },
    {
      title:"El pollo Loco",
      technologies: "Javascript | HTML | CSS",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      img: "assets/img/pollo_loco.svg",
      link_live: "https://elpolloloco.martin-unger.at/",
      link_github: "https://github.com/MartinUnger98/El-Pollo-Loco",
      live: true,
    },
    {
      title:"Pokedex",
      technologies: "Angular | Typescript | Api | RxJs",
      description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      img: "assets/img/Pokedex.svg",
      link_live: "https://pokedex.martin-unger.at/",
      link_github: "https://github.com/MartinUnger98/Pokedex-Angular",
      live: true,
    },
   /*  {
      title:"Ring of Fire",
      technologies: "Angular | Typescript | SCSS | Firebase",
      description: "Discover an Angular-based project about the popular drinking game. Invite your friends and dive into a thrilling game session together.",
      img: "assets/img/Ring_of_Fire.svg",
      link_live: "https://ringoffire.martin-unger.at/",
      link_github: "https://github.com/MartinUnger98/Ring-of-Fire",
      live: true,
    }, */
  ];


  /**
   * Host listener for the 'window:scroll' event.
   *
   * @param {Event} $event - The scroll event object.
   */
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    let element = this.el.nativeElement;
    let elementTop = element.offsetTop + 270 + 170;
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    if (elementTop < (scrollTop + windowHeight) && (elementTop + element.offsetHeight) > scrollTop) {
      this.isVisible = true;
    }
  }
}
