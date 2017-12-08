import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from './shared/oferta.model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { URL_API } from "./app.api";
import { Observable } from "rxjs/Observable";

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
  public getondeFica(id: number): Promise <string> {
    return this.http.get(`${URL_API}onde-fica?id=${id}`)
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
  public pesquisarOferta(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}ofertas?descricao_oferta${termo}`)
      .map((response: any) => response.json());
  }
}
