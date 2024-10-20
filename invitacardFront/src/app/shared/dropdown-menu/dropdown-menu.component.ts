import { Component } from '@angular/core';
import { AuthGoogleService } from '../../services/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {

  isMenuOpen: boolean = false;
  constructor(private  authGoogleService: AuthGoogleService,private router:Router) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Ejemplo de navegación para las opciones
  goToAccount() {
    console.log('Mi cuenta');
  }

  goToOrders() {
    console.log('Mis pedidos');
  }

  goToDownloads() {
    console.log('Descargas');
  }

  goToSupport() {
    console.log('Soporte');
  }

  goToHelp() {
    console.log('Ayuda');
  }

  logout() { 
    this.authGoogleService.logout();
    this.router.navigate(['/home']);
  } 
}
