import { Component } from '@angular/core';
import { AuthGoogleService } from '../../services/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private  authGoogleService: AuthGoogleService,private router:Router) { }
  login() {
    this.authGoogleService.login();
  }
  showData() {
    const data = JSON.stringify(this.authGoogleService.getProfile());

    console.log(data);
  }
  logout() { 
    this.authGoogleService.logout();
    this.router.navigate(['/home']);
  } 
}
