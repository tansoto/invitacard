import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-doble-carrusel',
  templateUrl: './doble-carrusel.component.html',
  styleUrl: './doble-carrusel.component.css'
})
export class DobleCarruselComponent implements OnInit{
  @ViewChild('carousel1', { static: true }) carousel1!: ElementRef;
  @ViewChild('carousel2', { static: true }) carousel2!: ElementRef;

  currentIndex1 = 0;
  currentIndex2 = 2;

  cards1 = [
    { title: 'Videojuegos', image: '../../assets/categorias/juegos.jpg', description: 'Conjunto  de tus juegos favoritos' },
    { title: 'Artistas', image: '../../assets/categorias/artistas.jpg', description: 'Conjunto de tus artistas favoritos' },
    { title: 'Dibujos Animados', image: '../../assets/categorias/dibujos.jpg', description: 'Conjunto de tus dubujos animados favoritos' },
    { title: 'Peliculas', image: '../../assets/categorias/peliculas.jpg', description: 'Conjunto de tus peliculas favoritas' },
  ];

  cards2 = [
    { title: 'Formales', image: '../../assets/categorias/formal.jpeg', description: 'Conjunto para esa ocación especial' },
    { title: 'Festividades', image: '../../assets/categorias/festividades.jpg', description: 'Para esas fechas donde no pares decelebrar' },
    { title: 'Personalizados', image: '../../assets/categorias/perzonalizados.jpg', description: 'Si necesitas algún requerimiento especial este es tu sitio' },
    { title: 'Deportes', image: '../../assets/categorias/deportes.jpg', description: 'Para esos dias donde nadie te puede parar' },
  ];

  ngOnInit() {
    this.startAutoRotate();
  }

  startAutoRotate() {
    setInterval(() => {
      this.nextCarousel1();
      this.prevCarousel2(); // El segundo carrusel se mueve en dirección contraria
    }, 3000);
  }

  nextCarousel1() {
    const items = this.carousel1.nativeElement.children;
    console.log(items);
    this.currentIndex1 = (this.currentIndex1 + 1) % this.cards1.length+1;// Se asegura de que el índice no sea mayor que la longitud del array
    if (this.currentIndex1 >2){
      this.currentIndex1 = 2; 
    }
  }

  prevCarousel1() {
    this.currentIndex1 = (this.currentIndex1 - 1 + this.cards1.length) % this.cards1.length;
  }

  nextCarousel2() {
    this.currentIndex2 = (this.currentIndex2 + 1) % this.cards2.length;
  }

  prevCarousel2() {
    this.currentIndex2 = (this.currentIndex2 - 1 + this.cards2.length) % this.cards2.length;
    if (this.currentIndex2 >2){
      this.currentIndex2 = 2;
    }
  }
}