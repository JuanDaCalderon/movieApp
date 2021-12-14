import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() thumbnail: string;
  @Input() titulo: string;
  @Input() descripcion: string;
  @Input() generos: string[];
  @Input() duracion: string;

  constructor(){
    this.thumbnail="";
    this.titulo="";
    this.descripcion="";
    this.generos=[];
    this.duracion="";
  }
  ngOnInit(): void {
  }

}
