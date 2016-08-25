import { Injectable } from '@angular/core';

import { Hero } from './hero.model';
import { HEROES } from './heroes.data';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 0)
    );
  }
}
