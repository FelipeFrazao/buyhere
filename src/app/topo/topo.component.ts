import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { DataService } from "../data.service";
import {OfertasService} from "../ofertas.service";
import {Oferta} from "../shared/oferta.model";

@Component({
  selector: 'bh-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor(private data: DataService, private os: OfertasService) {}

  public categ: string;

  public ofertas: Observable<Oferta[]>;

  ngOnInit() {
    this.data.currentCat.subscribe(cate => this.categ = cate);
  }
  public pegaCat(categoria): void {
    this.data.changeCat(categoria);
    console.log(categoria);
  }
  public pesquisa(termo: string): void {
    this.ofertas = this.os.pesquisarOferta(termo);
    this.ofertas.subscribe(
      (data: Oferta[]) => console.log(data),
      (erro: any) => console.log(erro)
    );
  }

}

