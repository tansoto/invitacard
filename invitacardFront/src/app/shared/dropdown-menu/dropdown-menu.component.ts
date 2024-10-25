import { Component, Input } from '@angular/core';
import { AuthGoogleService } from '../../services/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {

  @Input() menuItems: { label: string, action: () => void }[] = []; // Recibe el menú dinámico
  isMenuOpen: boolean = false;

  constructor(private authGoogleService: AuthGoogleService, private router: Router) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() { 
    this.authGoogleService.logout();
    this.router.navigate(['/home']);
  }
}
