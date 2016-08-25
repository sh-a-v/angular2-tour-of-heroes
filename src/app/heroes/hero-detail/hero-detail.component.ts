import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../../shared/hero.model';
import { HeroService } from '../../shared/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];

      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }
}
