import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './components/country/country.component';
import {AddCountryComponent} from './components/country/add-country.component';
import {LangComponent} from './components/lang/lang.component';
import {AddLangComponent} from './components/lang/add-lang.component';
import {UserComponent} from './components/user/user.component';
import {AddUserComponent} from './components/user/add-user.component';
import {RoleComponent} from './components/role/role.component';
import {AddRoleComponent} from './components/role/add-role.component';
import {ProductComponent} from './components/product/product.component';
import {AddProductComponent} from './components/product/add-product.component';
import {CategoryComponent} from './components/category/category.component';
import {AddCategoryComponent} from './components/category/add-category.component';
import {AddProductTypeComponent} from './components/product-type/add-product-type.component';
import {ProductTypeComponent} from './components/product-type/product-type.component';
import {AddLocationComponent} from './components/location/add-location.component';
import {LocationComponent} from './components/location/location.component';
import {MenuComponent} from './components/menu/menu.component';
import {AddMenuComponent} from './components/menu/add-menu.component';
import {OfferComponent} from './components/offer/offer.component';
import {AddOfferComponent} from './components/offer/add-offer.component';
import {OrderComponent} from './components/order/order.component';
import {AddOrderComponent} from './components/order/add-order.component';
import {OrderLineComponent} from './components/order-line/order-line.component';
import {AddOrderLineComponent} from './components/order-line/add-order-line.component';
import {RecipeComponent} from './components/recipe/recipe.component';
import {AddRecipeComponent} from './components/recipe/add-recipe.component';
import {StockComponent} from './components/stock/stock.component';
import {AddStockComponent} from './components/stock/add-stock.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countries', component: CountryComponent },
  { path: 'addCountry', component: AddCountryComponent },
  { path: 'langs', component: LangComponent },
  { path: 'addLang', component: AddLangComponent },
  { path: 'users', component: UserComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'roles', component: RoleComponent },
  { path: 'addRole', component: AddRoleComponent },
  { path: 'products', component: ProductComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'productTypes', component: ProductTypeComponent },
  { path: 'addProductType', component: AddProductTypeComponent },
  { path: 'locations', component: LocationComponent },
  { path: 'addLocation', component: AddLocationComponent },
  { path: 'menus', component: MenuComponent },
  { path: 'addMenu', component: AddMenuComponent },
  { path: 'offers', component: OfferComponent },
  { path: 'addOffer', component: AddOfferComponent },
  { path: 'order', component: OrderComponent },
  { path: 'addOrder', component: AddOrderComponent },
  { path: 'orderLine', component: OrderLineComponent },
  { path: 'addOrderLine', component: AddOrderLineComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'addRecipe', component: AddRecipeComponent },
  { path: 'stock', component: StockComponent },
  { path: 'addStock', component: AddStockComponent },
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
