import { Component, OnInit } from '@angular/core';

interface pelicula {
  titulo: string;
  thumbnail : string;
  descripcion : string;
  genero : string[];
  duracion : string;
}
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})

export class ListadoComponent implements OnInit {
  peliculas : pelicula[];
  constructor() {
    this.peliculas = [
      {
        titulo: "007: Sin Tiempo Para Morir",
        thumbnail: "../../../assets/IMGS/007-Sin-Tiempo-Para-Morir.jpg",
        descripcion: "En ‘No Time to Die’, James Bond se encuentra disfrutando de unas merecidas vacaciones en Jamaica. Sin embargo, su paz termina cuando su amigo de la CIA, Felix Leiter, lo busca para una nueva misión que implica rescatar a un importante científico que ha sido secuestrado.",
        genero: ["Acción", "Aventura", "Suspenso"],
        duracion: "146 Min"
      },
      {
        titulo: "Alerta Roja",
        thumbnail: "../../../assets/IMGS/Alerta-roja.jpg",
        descripcion: "Un agente de la Interpol, la Organización Internacional de Policía Criminal, tiene como misión encontrar y capturar al ladrón de piezas de arte más buscado del mundo.",
        genero: ["Acción", "Aventura", "Comedia", "Crimen"],
        duracion: "120 Min"
      }
    ]
   }

  ngOnInit(): void {
  }

}
