import { Component, OnInit } from '@angular/core';
import { Oferta } from "../shared/oferta.model";
import { OfertasService } from '../ofertas.service';
import { DataService } from "../data.service";

@Component({
  selector: 'bh-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  public categoria: string;
  // Variavel que irá receber as ofertas
  public ofertas: Oferta[];
  // Atribuindo o service de ofertas
  constructor(private ofertasService: OfertasService, private data: DataService) { }

  ngOnInit() {
    this.data.currentCat.subscribe(cate => this.categoria = cate);
    // Atribuindo e definindo o filtro para as ofertas
    this.ofertasService.getOfertasPorCategoria(this.categoria)
      .then(( ofertas: Oferta[]) => {
        this.ofertas = ofertas;
        console.log(this.categoria);
      });
  }

}
