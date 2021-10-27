import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero; //  selectedHero: Hero | undefined;

  heroes: Hero[]  = [];

  // when creating an object of HeroesComp, DI sets heroS param to the singleton instance of HS
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void{
    //"const heroes <Observable>.subscribe" -> fct lambda cu param heroes => this.heroes = heroes din param
    // functie care se va exec in continuare (lazy, nu stiu cand exact)
    // subscribe == calling
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }




}
