import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import {OfertaComponent} from "./oferta/oferta.component";
import {OfertasComponent} from "./ofertas/ofertas.component";
import {ComoUsarComponent} from "./oferta/como-usar/como-usar.component";
import {OndeFicaComponent} from "./oferta/onde-fica/onde-fica.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ofertas', component: OfertasComponent},
  {path: 'diversao', component: OfertasComponent},
  {path: 'oferta', component: HomeComponent},
  {path: 'oferta/:id', component: OfertaComponent,
    children: [
      {path: '', component: ComoUsarComponent},
      {path: 'comousar', component: ComoUsarComponent},
      {path: 'ondefica', component: OndeFicaComponent}
    ]
  }
];
