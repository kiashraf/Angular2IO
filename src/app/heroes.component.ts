/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
*/

import { Component, Input, OnInit } from '@angular/core';
import{Router} from '@angular/router';

import { Hero } from './hero';
//import{HEROES } from './mock-heroes';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
styleUrls : ['./heroes.component.css']
//<!--<hero-detail [selectedHero]="selectedHero"></hero-detail>-->
})
export class HeroesComponent implements OnInit {
  //heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router:Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}
}
