import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id: string;
  @Input() thumbnail: string;
  @Input() titulo: string;
  @Input() descripcion: string;
  @Input() generos: string[];
  @Input() duracion: string;

  constructor(private router:Router){
    this.id="";
    this.thumbnail="";
    this.titulo="";
    this.descripcion="";
    this.generos=[];
    this.duracion="";
  }
  ngOnInit(): void {
  }
  onSubmitVer(){
    this.router.navigate(['/detalle'], { queryParams: { id: this.id }});
  }
  onSubmitAnadir(){
    alert("pelicula: " + this.titulo + " Añadida al carrito");
  }

}
