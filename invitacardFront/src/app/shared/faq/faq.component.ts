import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {
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
}
