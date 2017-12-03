import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from './shared/oferta.model';
import {reject} from "q";
import 'rxjs/add/operator/toPromise';
import {toPromise} from "rxjs/operator/toPromise";
import { URL_API } from "./app.api";
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface Ofertta { titulo: string; categoria: string; }

@Injectable()
export class OfertasService {

  OfertaCollection: AngularFirestoreCollection<Ofertta>;
  oferttas: Observable<Ofertta[]>;
  constructor (private http: Http, private afs: AngularFirestore) {

    this.OfertaCollection = this.afs.collection<Ofertta>('ofertas', ref => {
      // Compose a query using multiple .where() methods
      return ref
        .where('categoria', '==', 'diversao');
    });
    this.oferttas = this.OfertaCollection.valueChanges();
  }
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
