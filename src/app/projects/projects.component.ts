import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      title:"Join",
      technologies: "HTML | CSS | Javascript",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      img: "assets/img/Join.svg",
      link_live: "https://martin-unger.developerakademie.net/Join/html/login.html",
      link_github: "https://github.com/MartinUnger98/Join",
    },
    {
      title:"El pollo Loco",
      technologies: "HTML | CSS | Javascript",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      img: "assets/img/pollo_loco.svg",
      link_live: "https://martin-unger.developerakademie.net/El%20Pollo%20Loco/index.html",
      link_github: "https://github.com/MartinUnger98/El-Pollo-Loco",
    },
    {
      title:"Pokedex",
      technologies: "HTML | CSS | Javascript | Api",
      description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      img: "assets/img/Pokedex.svg",
      link_live: "https://martin-unger.developerakademie.net/Pokedex/index.html",
      link_github: "https://github.com/MartinUnger98/Pokedex",
    },
    {
      title:"Ring of Fire",
      technologies: "Angular | Typescript | SCSS | Firebase",
      description: "Angular based project about the popular drinking game. Get your friends and play a round.",
      img: "assets/img/Ring_of_Fire.svg",
      link_live: "https://martin-unger.developerakademie.net/angular-projects/Ring%20of%20Fire/",
      link_github: "https://github.com/MartinUnger98/Ring-of-Fire",
    },
  ];
}
