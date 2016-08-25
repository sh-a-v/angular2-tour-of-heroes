import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { HeroesComponent } from './heroes';
import { HeroDetailComponent } from './heroes/hero-detail';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
