import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.css'
})
export class HeaderHomeComponent {
 menu = [{ label: 'Iniciar sesion', action: this.goToLogin.bind(this) },
    { label: 'Registrarse', action: this.goToRegister.bind(this) },
  ]; // Menú dinámico
  //Imagen de la barra de navegacion
  imagenBarra = '../../assets/logotipos/logo-2-r.png';
  isSmallScreen: boolean = false; // Estado de pantalla pequeña
  isMenuOpen: boolean = false;
  constructor(private router:Router) { }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Ejemplo de navegación para las opciones
  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
  goToRegister() {
    this.router.navigate(['/auth/signin']);
  }
}
