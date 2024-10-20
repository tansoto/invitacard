import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FAQComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FeaturesCardComponent } from './features-card/features-card.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ContactWspComponent } from './contact-wsp/contact-wsp.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { InfiniteCarouselComponent } from './infinite-carousel/infinite-carousel.component';

@NgModule({
  declarations: [
    HeaderHomeComponent,
    TestimonialsComponent,
    FAQComponent,
    FooterComponent,
    ContactFormComponent,
    FeaturesCardComponent,
    CarrouselComponent,
    ContactWspComponent,
    HeaderMainComponent,
    DropdownMenuComponent,
    InfiniteCarouselComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
  ],
  exports:[
    HeaderHomeComponent,
    FeaturesCardComponent,
    CarrouselComponent,
    TestimonialsComponent,
    FAQComponent,
    FooterComponent,
    ContactFormComponent,
    ContactWspComponent,
    HeaderMainComponent,
    DropdownMenuComponent,
    InfiniteCarouselComponent
  ]
})
export class SharedModule { }
