import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {OfertasService} from "../../ofertas.service";

@Component({
  selector: 'bh-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private oS: OfertasService) { }

  public comoUsar: string;
  ngOnInit() {
    const ID = this.route.parent.snapshot.params['id'];
    this.oS.getComoUsar(ID)
      .then((response: any) => {
        this.comoUsar = response;
      })
      .catch((erro: Error) => {
      this.comoUsar = erro.message;
      });
  }

}
