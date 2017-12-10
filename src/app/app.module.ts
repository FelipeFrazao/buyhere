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
import { AngularFirestoreModule} from "angularfire2/firestore";
import { AngularFireModule } from 'angularfire2';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import {OfertasService} from "./ofertas.service";

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
    ComoUsarComponent,
    OndeFicaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [DataService, OfertasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

