import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-selceted',
  templateUrl: './category-selceted.component.html',
  styleUrl: './category-selceted.component.css'
})
export class CategorySelcetedComponent {

  category!: string;
  items: any[] = [];  // Aquí almacenamos los elementos dinámicos

  // Datos de ejemplo para diferentes categorías
  games = [
    { title: 'Super Mario', image: '../../assets/categorias/juegos.jpeg', description: 'Descripción del Juego 1',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Fortnite', image: '../../assets/categorias/juegos/fortnite.jpg', description: 'Descripción del Juego 2',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Among Us', image: '../../assets/categorias/juegos/amongus.jpg', description: 'Descripción del Juego 3',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Free Fire', image: '../../assets/categorias/juegos/freefire.jpg', description: 'Descripción del Juego 4',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Call of Duty', image: '../../assets/categorias/juegos/callofduty.jpg', description: 'Descripción del Juego 5',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Minecraft', image: '../../assets/categorias/juegos/minecraft.jpg', description: 'Descripción del Juego 6',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Clash Royale', image: '../../assets/categorias/juegos/clashroyale.jpg', description: 'Descripción del Juego 7',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'GTA V', image: '../../assets/categorias/juegos/gtav.jpg', description: 'Descripción del Juego 8',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'FIFA 21', image: '../../assets/categorias/juegos/fifa21.jpg', description: 'Descripción del Juego 9',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'PUBG', image: '../../assets/categorias/juegos/pubg.jpg', description: 'Descripción del Juego 10',price: '1000',rating: '4.5',downloads: '13450' }

  ];

  drawings = [
    { title: 'Paw patrol', image: '../../assets/categorias/dibujos/pawpatrol.jpg', description: 'Descripción del Dibujo 1',price: '1000',rating: '4.5',downloads: '13450'  },
    { title: 'Peppa Pig', image: '../../assets/categorias/dibujos/pepa.jpg', description: 'Descripción del Dibujo 2' ,price: '1000',rating: '4.5',downloads: '13450'},
    { title: 'La Granja de Zenon', image: '../../assets/categorias/dibujos/zenon.jpg', description: 'Descripción del Dibujo 3' ,price: '1000',rating: '4.5',downloads: '13450'},
    { title: 'Mickey Mouse y amigos', image: '../../assets/categorias/dibujos/micky.jpg', description: 'Descripción del Dibujo 4' ,price: '1000',rating: '4.5',downloads: '13450'},
    { title: 'Frozen', image: '../../assets/categorias/dibujos/frozen.jpg', description: 'Descripción del Dibujo 5',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Minions', image: '../../assets/categorias/dibujos/minions.jpg', description: 'Descripción del Dibujo 6' ,price: '1000',rating: '4.5',downloads: '13450'},
    { title: 'Toy Story', image: '../../assets/categorias/dibujos/toystory.jpg', description: 'Descripción del Dibujo 7',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Bob Esponja', image: '../../assets/categorias/dibujos/bob.jpg', description: 'Descripción del Dibujo 8',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'PJ Masks', image: '../../assets/categorias/dibujos/pjmask.jpg', description: 'Descripción del Dibujo 9' ,price: '1000',rating: '4.5',downloads: '13450'},
    { title: 'Skibidi Toilet', image: '../../assets/categorias/dibujos/skibidi.jpg', description: 'Descripción del Dibujo 10',price: '1000',rating: '4.5',downloads: '13450' }
  ];
  artists = [
    { title: 'Bad Bunny', image: '../../assets/categorias/artistas/badbunny.jpg', description: 'Descripción del Artista 1',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'J Balvin', image: '../../assets/categorias/artistas/jbalvin.jpg', description: 'Descripción del Artista 2',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Shakira', image: '../../assets/categorias/artistas/shakira.jpg', description: 'Descripción del Artista 3',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Maluma', image: '../../assets/categorias/artistas/maluma.jpg', description: 'Descripción del Artista 4',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Daddy Yankee', image: '../../assets/categorias/artistas/daddyyankee.jpg', description: 'Descripción del Artista 5',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Anuel AA', image: '../../assets/categorias/artistas/anuelaa.jpg', description: 'Descripción del Artista 6',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Karol G', image: '../../assets/categorias/artistas/karolg.jpg', description: 'Descripción del Artista 7',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Romeo Santos', image: '../../assets/categorias/artistas/romeosantos.jpg', description: 'Descripción del Artista 8',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Ozuna', image: '../../assets/categorias/artistas/ozuna.jpg', description: 'Descripción del Artista 9',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Natti Natasha', image: '../../assets/categorias/artistas/nattinatasha.jpg', description: 'Descripción del Artista 10',price: '1000',rating: '4.5',downloads: '13450' }
  ];
  movies = [
    { title: 'Titanic', image: '../../assets/categorias/peliculas/titanic.jpg', description: 'Descripción de la Película 1',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Avengers', image: '../../assets/categorias/peliculas/avengers.jpg', description: 'Descripción de la Película 2',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Harry Potter', image: '../../assets/categorias/peliculas/harrypotter.jpg', description: 'Descripción de la Película 3',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Rápidos y Furiosos', image: '../../assets/categorias/peliculas/rapidosyfuriosos.jpg', description: 'Descripción de la Película 4',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'El Rey León', image: '../../assets/categorias/peliculas/elreyleon.jpg', description: 'Descripción de la Película 5',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'La Bella y la Bestia', image: '../../assets/categorias/peliculas/labellaylabestia.jpg', description: 'Descripción de la Película 6',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'La Sirenita', image: '../../assets/categorias/peliculas/lasirenita.jpg', description: 'Descripción de la Película 7',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Mulan', image: '../../assets/categorias/peliculas/mulan.jpg', description: 'Descripción de la Película 8',price: '1000',rating: '4.5',downloads: '13450' },
    { title: 'Coco', image: '../../assets/categorias/peliculas/coco.jpg', description: 'Descripción de la Película 9',price: '1000',rating: '4.5',downloads: '13450' }, 
    { title: 'El Conjuro', image: '../../assets/categorias/peliculas/elconjuro.jpg', description: 'Descripción de la Película 10',price: '1000',rating: '4.5',downloads: '13450' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtén la categoría de la URL
    this.category = this.route.snapshot.paramMap.get('category') || '';

    // Cargar los elementos basados en la categoría seleccionada
    this.loadCategoryItems();
  }

  loadCategoryItems() {
    switch (this.category) {
      case 'videojuegos':/* Aquí puedes agregar más categorías que tienen que coincidir con el titulo*/
        this.items = this.games;
        break;
      case 'dibujos animados':
        this.items = this.drawings;
        break;
      default:

        this.items = [];  // Otras categorías
    }
  }
}
