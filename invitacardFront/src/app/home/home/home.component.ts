import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  faqs = [
    { 
      question: '¿Cómo puedo crear una invitación?', 
      answer: 'Para crear una invitación, simplemente selecciona una plantilla, personalízala y descárgala.' 
    },
    { 
      question: '¿Puedo usar mis propias imágenes?', 
      answer: 'Sí, puedes subir tus propias imágenes para personalizar tus invitaciones.' 
    },
    { 
      question: '¿Las invitaciones son imprimibles?', 
      answer: 'Sí, todas nuestras invitaciones están diseñadas para ser imprimibles en alta calidad.' 
    },
    { 
      question: '¿Cómo puedo compartir mis invitaciones?', 
      answer: 'Puedes compartir tus invitaciones a través de email o redes sociales directamente desde nuestra plataforma.' 
    },
    { 
      question: '¿Puedo cambiar el tamaño de las invitaciones?', 
      answer: 'Sí, puedes personalizar el tamaño de tus invitaciones antes de descargarlas.'
    },
    {
      question: '¿Puedo descargar mis invitaciones en formato PDF?',
      answer: 'Sí, puedes descargar tus invitaciones en formato PDF para imprimir en alta calidad.'
    }
    // Agrega más preguntas y respuestas según sea necesario
  ];
  //Imagen de la barra de navegacion
  imagenBarra = '../../assets/logotipos/logo-2-r.png';
  images = [
   '../../assets/invitaciones/invitacion1.jpg',
    '../../assets/invitaciones/invitacion2.jpg',
    '../../assets/invitaciones/invitacion3.jpg',
    '../../assets/invitaciones/invitacion4.jpg',
  ];
  totalImages = this.images.length;
  currentIndex = 0;

  get previousIndex(): number {
    return (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  get nextIndex(): number {
    return (this.currentIndex + 1) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
  
}
