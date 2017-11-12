import { Component, OnInit } from '@angular/core';
import { Oferta } from "../shared/oferta.model";
import { OfertasService } from '../ofertas.service';
import { DataService } from "../data.service";

@Component({
  selector: 'bh-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
  providers: [OfertasService]
})
export class OfertasComponent implements OnInit {

  public categoria: string;
  // Variavel que irá receber as ofertas
  public ofertas: Oferta[];
  // Atribuindo o service de ofertas
  constructor(private ofertasService: OfertasService, private data: DataService) { }

  ngOnInit() {
    this.data.currentCat.subscribe(categoria => this.categoria = categoria);
    // Atribuindo e definindo o filtro para as ofertas
    this.ofertasService.getOfertasPorCategoria(this.categoria)
      .then(( ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      });
  }

}
