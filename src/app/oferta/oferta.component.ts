import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from "../shared/oferta.model";
import { OfertasService} from "../ofertas.service";

@Component({
  selector: 'bh-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  public oferta: Oferta;

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });
  }

}
