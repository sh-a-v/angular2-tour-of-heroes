/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';

describe('Component: HeroDetail', () => {
  it('should create an instance', () => {
    let component = new HeroDetailComponent();
    expect(component).toBeTruthy();
  });
});
