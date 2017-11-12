import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'bh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Buy Here';

  ngOnInit(): void {

    const config = {
      apiKey: "AIzaSyA_jmmwVK2LhypwmDvWVWYFfmlCVe888ok",
      authDomain: "buyhere-161a7.firebaseapp.com",
      databaseURL: "https://buyhere-161a7.firebaseio.com",
      projectId: "buyhere-161a7",
      storageBucket: "buyhere-161a7.appspot.com",
      messagingSenderId: "745705979940"
    };
  }
}
