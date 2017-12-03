import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from './shared/oferta.model';
import {reject} from "q";
import 'rxjs/add/operator/toPromise';
import {toPromise} from "rxjs/operator/toPromise";
import { URL_API } from "./app.api";

export interface Ofertta { titulo: string; categoria: string; }

@Injectable()
export class OfertasService {

  constructor (private http: Http) { }
  public getOfertas(): Promise<Oferta[]> {

    // Fazer get na api rest
    return this.http.get(`${URL_API}ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorCategoria(cat: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}ofertas?categoria=${cat}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }
  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()[0];
      });
  }
  public getComoUsar(id: number): Promise<string> {
    return this.http.get(`${URL_API}como-usar?id=${id}`)
      .toPromise()
      .then((response: any) => {
        return response.json()[0].descricao;
      })
      .catch((erro: Error) => {
        console.log(`Nome do erro ${erro.name}
      Mensagem do erro ${erro.message}
      `);
      });
  }
}
