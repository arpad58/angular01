import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  list: Hero [] =

  [{
    "id": 1,
    "name": "Kendal",
    "superPower": "VP Marketing",
    "address": "Zhushan Chengguanzhen"
  }, {
    "id": 2,
    "name": "Marion",
    "superPower": "VP Product Management",
    "address": "Bang Saphan"
  }, {
    "id": 3,
    "name": "Brandea",
    "superPower": "Marketing Assistant",
    "address": "Gostivar"
  }, {
    "id": 4,
    "name": "Fidelia",
    "superPower": "Safety Technician I",
    "address": "Fengyi"
  }, {
    "id": 5,
    "name": "Kristo",
    "superPower": "Geological Engineer",
    "address": "Santiaoshi"
  }, {
    "id": 6,
    "name": "Cynthy",
    "superPower": "Analyst Programmer",
    "address": "Kamien Pomorski"
  }, {
    "id": 7,
    "name": "Joannes",
    "superPower": "Database Administrator IV",
    "address": "Dainan"
  }, {
    "id": 8,
    "name": "Dre",
    "superPower": "Geological Engineer",
    "address": "Fentange"
  }, {
    "id": 9,
    "name": "Poul",
    "superPower": "Director of Sales",
    "address": "Kryevidh"
  }, {
    "id": 10,
    "name": "Christie",
    "superPower": "Operator",
    "address": "Al Jarrahī"
  }];

  getAllHeroes(): Hero[] {
    return this.list;
  }

  constructor() { }
}
