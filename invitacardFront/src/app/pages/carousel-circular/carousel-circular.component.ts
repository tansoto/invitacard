import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
}

@Component({
  selector: 'app-carousel-circular',
  templateUrl: './carousel-circular.component.html',
  styleUrls: ['./carousel-circular.component.css']
})
export class CarouselCircularComponent implements OnInit {
  products: Product[] = []; // Inicializado como array vacío
  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
    this.getProductsSmall().then((products: Product[]) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getProductsSmall(): Promise<Product[]> {
    const products: Product[] = [
      { id: 1, name: 'Videojuegos', price: 1000, image: 'videojuegos2.png', inventoryStatus: 'INSTOCK' },
      { id: 2, name: 'Artistas', price: 1100, image: 'artistas2.png', inventoryStatus: 'LOWSTOCK' },
      { id: 3, name: 'Dibujos Animados', price: 1450, image: 'dibujosanimados2.png', inventoryStatus: 'OUTOFSTOCK' },
      { id: 4, name: 'Tematicas', price: 2300, image: 'tematicas2.png', inventoryStatus: 'INSTOCK' },
      { id: 5, name: 'Festividades', price: 1200, image: 'festividades2.png', inventoryStatus: 'OUTOFSTOCK' },
      { id: 6, name: 'Peliculas', price: 1350, image: 'peliculas2.png', inventoryStatus: 'INSTOCK' },
      { id: 7, name: 'Deportes', price: 1200, image: 'deportistas2.png', inventoryStatus: 'LOWSTOCK' }
    ];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  }

  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' | undefined {// Cambiado el tipo de retorno 
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined; // En lugar de devolver una cadena vacía
    }
  }
}
