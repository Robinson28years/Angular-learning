import { Component } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';

// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
  <li *ngFor="let hero of heroes"
  [class.selected]="hero === selectedHero"
  (click)="onSelect(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  providers: [HeroService]
})
export class AppComponent {
  constructor(private heroService: HeroService) { }
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
};
}
