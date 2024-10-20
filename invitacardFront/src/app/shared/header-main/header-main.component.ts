import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../../services/auth-google.service';
import { Router } from '@angular/router';
interface UserData {
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
}

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.css'
})
export class HeaderMainComponent implements OnInit {
  userName: string = '';
  constructor(private  authGoogleService: AuthGoogleService,private router:Router) { }
  ngOnInit(): void {
    const profile=this.getProfile();
    console.log(profile);
    this.userName = profile.name;
  }

  onSettings() {
    console.log('Configuración');
    // Aquí puedes agregar la lógica para redirigir a la configuración.
  }

  onLogout() {
    console.log('Cerrar sesión');
    // Aquí puedes agregar la lógica para cerrar sesión.
  }
  //muestra los datos del usuario
  getProfile() {
        // Obtener el perfil del usuario como un objeto
        const userProfile = this.authGoogleService.getProfile();
        // Convertir el objeto a string y luego de vuelta a un objeto
        const data = JSON.stringify(userProfile); // Esta línea convierte el objeto a string
        const parsedData: UserData = JSON.parse(data); // Esta línea convierte el string de vuelta a un objeto
        return parsedData;              // Devuelve el objeto de usuario
  }
}
