import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import {OfertaComponent} from "./oferta/oferta.component";
import {OfertasComponent} from "./ofertas/ofertas.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ofertas', component: OfertasComponent},
  {path: 'diversao', component: OfertasComponent},
  {path: 'oferta', component: HomeComponent},
  {path: 'oferta/:id', component: OfertaComponent}
];
