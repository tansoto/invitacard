import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { MatExpansionModule } from '@angular/material/expansion';
import { DobleCarruselComponent } from './doble-carrusel/doble-carrusel.component';
import { CategorySelcetedComponent } from './category-selceted/category-selceted.component';
import { CategoryBoardComponent } from './category-board/category-board.component';



@NgModule({
  declarations: [
    MainComponent,
    DobleCarruselComponent,
    CategorySelcetedComponent,
    CategoryBoardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatCardModule, // Asegúrate de que esté aquí
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,

  ],
  exports: [ 
    DobleCarruselComponent,
    MainComponent,
    CategorySelcetedComponent
  ]
})
export class PagesModule { }
