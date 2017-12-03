import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface Oferta { titulo: string; categoria: string; }

@Component({
  selector: 'bh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Buy Here';

  constructor () {}

  ngOnInit(): void {
  }
}
