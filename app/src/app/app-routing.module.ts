import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StockComponent } from './components/stock/stock.component';
import { AppConstants } from 'src/utils/app.constants';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "ingresar", component: LoginComponent },
  { path: AppConstants.Routes.stock, component: StockComponent },
  { path: AppConstants.Routes.productList, component: ProductListComponent },
  { path: AppConstants.Routes.dishList, component: DishListComponent },
  { path: "*", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
