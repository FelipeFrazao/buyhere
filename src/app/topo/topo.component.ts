import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'bh-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor(private data: DataService) {}

  public categ: string;


  ngOnInit() {
    this.data.currentCat.subscribe(cate => this.categ = cate);
  }
  public pegaCat(categoria): void {
    this.data.changeCat(categoria);
    console.log(categoria);
  }
}

// export class Categoria {
//
//   constructor() {}
//
//   public categoria: string;
//
//   public pegaCat(cat): void {
//     this.categoria = cat;
//     console.log(cat);
//   }
// }
