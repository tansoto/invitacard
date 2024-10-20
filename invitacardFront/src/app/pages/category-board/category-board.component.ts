import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-board',
  templateUrl: './category-board.component.html',
  styleUrls: ['./category-board.component.css']
})
export class CategoryBoardComponent implements OnInit {
onSelect(_t6: any) {
throw new Error('Method not implemented.');
}
  // Entrada para recibir el título y los elementos que se mostrarán
  @Input() title: string = '';
  @Input() items: any[] = [];  // Arreglo de ítems que cambiará según la categoría

  constructor() {}

  ngOnInit(): void {
    console.log('Título:', this.title);
    console.log('Ítems:', this.items);
  }
}
