import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {
  private categoriaSource = new BehaviorSubject<string>("restaurante");
  currentCat = this.categoriaSource.asObservable();
  constructor() { }
  changeCat(cate: string) {
    this.categoriaSource.next(cate);
  }
}
