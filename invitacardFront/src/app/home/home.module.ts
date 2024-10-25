import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FeaturedinvitationsComponent } from './featuredinvitations/featuredinvitations.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../shared/shared.module';
import { CarouselExpandingComponent } from './carousel-expanding/carousel-expanding.component';
import { FieldsetModule } from 'primeng/fieldset';
import { GalleriaAutoplayComponent } from './galleria-autoplay/galleria-autoplay.component';
import { GalleriaModule } from 'primeng/galleria';
@NgModule({
  declarations: [
    HomeComponent,
    FeaturedinvitationsComponent,
    HowitworksComponent,
    CarouselExpandingComponent,
    GalleriaAutoplayComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    SharedModule,
    FieldsetModule,
    GalleriaModule

  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
