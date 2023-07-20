import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { CategoryListComponent } from './product/category-list/category-list.component';
import { CategoryEditComponent } from './product/category-edit/category-edit.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TopThreeProductsComponent,
    LastFewTransactionsComponent,
    SalesByCategoryComponent,
    SalesByMonthComponent,
    TopWidgetsComponent,
    MainComponent,
    SideNavComponent,
    HeaderComponent,
    ProductListComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryEditComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
