import { Component, OnDestroy, OnInit } from '@angular/core';
interface Image {
  src: string;
  alt: string;
  titulo: string;
  subtitulo: string;
  precio: number;
  descripcion: string;
}
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent implements OnInit, OnDestroy {
  images: Image[] = [
    { src: '../../assets/invitaciones/invitacion1.jpg', alt: 'Image 1', titulo: 'Invitación 1', subtitulo: 'Subtitulo 1', precio: 100, descripcion: 'Descripción 1' },
    { src: '../../assets/invitaciones/invitacion2.jpg', alt: 'Image 2', titulo: 'Invitación 2', subtitulo: 'Subtitulo 2 ', precio: 200, descripcion: 'Descripción 2' },
    { src: '../../assets/invitaciones/invitacion3.jpg', alt: 'Image 3', titulo: 'Invitación 3', subtitulo: 'Subtitulo 3 ', precio: 300, descripcion: 'Descripción 3' },
    { src: '../../assets/invitaciones/invitacion4.jpg', alt: 'Image 4', titulo: 'Invitación 4', subtitulo: 'Subtitulo 4 ', precio: 400, descripcion: 'Descripción 4' },
  ];
  
  currentIndex: number = 0;
  intervalId: any;
  interval: number = 3000; // tiempo en ms

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  changeSlide(index: number) {
    this.currentIndex = index;
    this.stopAutoSlide();
    this.startAutoSlide(); // Reinicia el carrusel después de cambiar la diapositiva
  }
}
