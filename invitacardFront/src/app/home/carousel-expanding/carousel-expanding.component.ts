import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-expanding',
  templateUrl: './carousel-expanding.component.html',
  styleUrl: './carousel-expanding.component.css'
})
export class CarouselExpandingComponent {
  panels = [
    {
      title: 'Explore the world',
      backgroundImage: "url('../../assets/invitaciones/juegos/invitacionfornite1.jpg')",
      active: true
    },
    {
      title: 'Wild Forest',
      backgroundImage: "url('../../assets/invitaciones/formales/invitacioncasamiento1.jpg')",      active: false
    },
    {
      title: 'Sunny Beach',
      backgroundImage: "url('../../assets/invitaciones/juegos/invitacionfornite2.jpg')",      active: false
    },
    {
      title: 'City on Winter',
      backgroundImage: "url('../../assets/invitaciones/formales/invitaciongraduacion1.jpg')",      active: false
    },
    {
      title: 'Mountains - Clouds',
      backgroundImage: "url('../../assets/invitaciones/juegos/invitacionfrefire1.jpg')",      active: false
    },
    {
      title: 'City on Winter',
      backgroundImage: "url('../../assets/invitaciones/formales/invitacionbautizo1.jpg')",      active: false
    },
    {
      title: 'City on Winter',
      backgroundImage: "url('../../assets/invitaciones/dibujos/invitacionrickymorty1.jpg')",      active: false
    },
    {
      title: 'City on Winter',
      backgroundImage: "url('../../assets/invitaciones/dibujos/invitacionpepa1.jpg')",      active: false
    },



  ];

  private currentIndex: number = 0;
  private interval: any;

  ngOnInit() {
    this.startImageRotation();
  }

  setActive(selectedPanel: any) {
    this.panels.forEach((panel) => {
      panel.active = false; // Desactivar todos los paneles
    });
    selectedPanel.active = true; // Activar el panel seleccionado
  }

  startImageRotation() {
    this.interval = setInterval(() => {
      this.panels[this.currentIndex].active = false; // Desactiva el panel actual

      this.currentIndex = (this.currentIndex + 1) % this.panels.length; // Incrementa el índice

      this.panels[this.currentIndex].active = true; // Activa el siguiente panel
    }, 3000); // Cambia cada 3 segundos
  }

  ngOnDestroy() {
    clearInterval(this.interval); // Limpia el intervalo al destruir el componente
  }
}
