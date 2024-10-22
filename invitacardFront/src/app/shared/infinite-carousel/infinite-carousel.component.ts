import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinite-carousel',
  templateUrl: './infinite-carousel.component.html',
  styleUrl: './infinite-carousel.component.css'
})
export class InfiniteCarouselComponent {
// Array de imágenes
images = [
  '../../assets/invitaciones/juegos/invitacionfornite1.jpg',
  '../../assets/invitaciones/dibujos/invitacionpepa1.jpg',
  '../../assets/invitaciones/juegos/invitacionfornite2.jpg',
  '../../../assets/invitaciones/formales/invitaciongraduacion1.jpg',
  '../../assets/invitaciones/juegos/invitacionfrefire1.jpg',
  '../../assets/invitaciones/dibujos/invitacionbobesponja1.jpg',
  '../../assets/invitaciones/juegos/invitacionfornite2.jpg'
];

// Referencia al contenedor box
@ViewChild('box') box!: ElementRef;

// Función para mover al siguiente
moveNext() {
  const items = this.box.nativeElement.children;// Obtiene todos los elementos hijos
  console.log(items);
  this.box.nativeElement.appendChild(items[0]); // Mueve el primer elemento al final
}

// Función para mover al anterior
movePrev() {
  const items = this.box.nativeElement.children;
  this.box.nativeElement.insertBefore(items[items.length - 1], items[0]); // Mueve el último elemento al principio
  // Asegurarse de que el z-index se actualice después de mover el último elemento
  }

}
