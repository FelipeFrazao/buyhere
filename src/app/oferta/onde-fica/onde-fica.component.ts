import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {OfertasService} from "../../ofertas.service";

@Component({
  selector: 'bh-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private oS: OfertasService) { }

  public ondeFica: string;
  ngOnInit() {
    const ID = this.route.parent.snapshot.params['id'];
    this.oS.getondeFica(ID)
      .then((response: any) => {
        this.ondeFica = response;
      })
      .catch((erro: Error) => {
        this.ondeFica = erro.message;
      });
  }

}
