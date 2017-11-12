import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';

import { ROUTES } from "./app.routes";

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { DataService } from "./data.service";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyA_jmmwVK2LhypwmDvWVWYFfmlCVe888ok",
  authDomain: "buyhere-161a7.firebaseapp.com",
  databaseURL: "https://buyhere-161a7.firebaseio.com",
  projectId: "buyhere-161a7",
  storageBucket: "buyhere-161a7.appspot.com",
  messagingSenderId: "745705979940"
};

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    OfertasComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [DataService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }

