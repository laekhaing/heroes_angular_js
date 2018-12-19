import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Naing Ye Lynn'},
      { id: 12, name: 'Mr. Moe Arkar'},
      { id: 13, name: 'Mr. Si Thu Naing'},
      { id: 14, name: 'Mr. La Won Maung'},
      { id: 15, name: 'Mr. Myat Lynn Maung'},
      { id: 16, name: 'Mr. Lynn Myat Maung'},
      { id: 17, name: 'Ms. Myat Muu Haethi'}
    ];
    return {heroes}
  }

  getId(heroes : Hero[]) : number {
    return heroes.length ?  Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
