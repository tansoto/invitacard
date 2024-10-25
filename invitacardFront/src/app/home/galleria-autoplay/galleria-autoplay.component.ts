import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photoservice';
@Component({
  selector: 'app-galleria-autoplay',
  templateUrl: './galleria-autoplay.component.html',
  styleUrl: './galleria-autoplay.component.css',
  providers: [PhotoService]
})
export class GalleriaAutoplayComponent implements OnInit {
  images: any[] | undefined;

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
      this.photoService.getImages().then((images) => (this.images = images));
  }
}