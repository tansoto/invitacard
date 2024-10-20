import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-wsp',
  templateUrl: './contact-wsp.component.html',
  styleUrl: './contact-wsp.component.css'
})
export class ContactWspComponent {
  phoneNumber: string = '+51992744072'; // Número de WhatsApp sin espacios ni caracteres especiales

  openWhatsApp() {
    const message = 'Hola, me gustaría obtener más información';
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
