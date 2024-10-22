
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './components/stock/stock.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishComponent } from './components/dish/dish.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StockComponent,
    ProductListComponent,
    DishListComponent,
    DishComponent,
    ProductComponent,
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
