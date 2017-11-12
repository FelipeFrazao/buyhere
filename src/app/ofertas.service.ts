import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from './shared/oferta.model';
import {reject} from "q";
import 'rxjs/add/operator/toPromise';
import {toPromise} from "rxjs/operator/toPromise";
import { URL_API } from "./app.api";

@Injectable()
export class OfertasService {

  constructor (private http: Http) {}

  public getOfertas(): Promise<Oferta[]> {

    // Fazer get na api rest
    return this.http.get(`${URL_API}?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorCategoria(cat: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}?categoria=${cat}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }
  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()[0];
      });
  }
}
