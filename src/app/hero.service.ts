import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    // this.messageService.add('Hello world!'); -- pot adauga mai multe mesaje
    return heroes;
  }
  // will inject singleton MessageService into the property when it creates the HeroService
  constructor(private messageService: MessageService) { }
}
