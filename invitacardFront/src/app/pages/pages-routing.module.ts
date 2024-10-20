import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategorySelcetedComponent } from './category-selceted/category-selceted.component';

const routes: Routes = [
  {path:'main',component: MainComponent},
  { path: 'category-selected/:category', component: CategorySelcetedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
