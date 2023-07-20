import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryEditComponent } from './product/category-edit/category-edit.component';
import { CategoryListComponent } from './product/category-list/category-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: 'home' , component:HomeComponent},
  { path: 'prod', component: ProductListComponent },
  { path: 'prod/new', component: ProductEditComponent },
  { path: 'prod/:id/edit', component: ProductEditComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/new', component: CategoryEditComponent },
  { path: 'categories/:id/edit', component: CategoryEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
