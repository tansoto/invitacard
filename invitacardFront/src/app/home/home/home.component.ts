import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthGoogleService } from '../../services/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor(private  authGoogleService: AuthGoogleService,private router:Router) { }

  images = [
    '../../assets/invitaciones/invitacion1.jpg',
    '../../assets/invitaciones/invitacion2.jpg',
    '../../assets/invitaciones/invitacion3.jpg',
    '../../assets/invitaciones/invitacion4.jpg',
  ];
  
  images2 = [
    '../../assets/invitaciones/invitacion5.jpg',
    '../../assets/invitaciones/invitacion6.jpg',
    '../../assets/invitaciones/invitacion7.jpg',
    '../../assets/invitaciones/invitacion8.jpg',
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
  showData() {
    const data = JSON.stringify(this.authGoogleService.getProfile());
    console.log(data);
  }
  logout() { 
    this.authGoogleService.logout();
    this.router.navigate(['/login']);
  } 
}
