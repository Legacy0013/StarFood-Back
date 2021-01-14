import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountryComponent} from './components/country/country.component';
import {AddCountryComponent} from './components/country/add-country.component';
import {CountryService} from './services/country.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LangComponent} from './components/lang/lang.component';
import {AddLangComponent} from './components/lang/add-lang.component';
import {UserComponent} from './components/user/user.component';
import {AddUserComponent} from './components/user/add-user.component';
import {UserService} from './services/user.service';
import {LangService} from './services/lang.service';
import {NavComponent} from './components/nav/nav.component';
import {RoleComponent} from './components/role/role.component';
import {RoleService} from './services/role.service';
import {AddRoleComponent} from './components/role/add-role.component';
import {ProductComponent} from './components/product/product.component';
import {AddProductComponent} from './components/product/add-product.component';
import {ProductService} from './services/product.service';
import {CategoryComponent} from './components/category/category.component';
import {AddCategoryComponent} from './components/category/add-category.component';
import {CategoryService} from './services/category.service';
import {ProductTypeComponent} from './components/product-type/product-type.component';
import {ProductTypeService} from './services/product-type.service';
import {AddProductTypeComponent} from './components/product-type/add-product-type.component';
import {LocationComponent} from './components/location/location.component';
import {MenuComponent} from './components/menu/menu.component';
import {OfferComponent} from './components/offer/offer.component';
import {OrderComponent} from './components/order/order.component';
import {OrderLineComponent} from './components/order-line/order-line.component';
import {RecipeComponent} from './components/recipe/recipe.component';
import {StockComponent} from './components/stock/stock.component';
import {LocationService} from './services/location.service';
import {AddLocationComponent} from './components/location/add-location.component';
import {AddMenuComponent} from './components/menu/add-menu.component';
import {AddOfferComponent} from './components/offer/add-offer.component';
import {AddOrderComponent} from './components/order/add-order.component';
import {AddOrderLineComponent} from './components/order-line/add-order-line.component';
import {AddRecipeComponent} from './components/recipe/add-recipe.component';
import {MenuService} from './services/menu.service';
import {OfferService} from './services/offer.service';
import {OrderService} from './services/order.service';
import {OrderLineService} from './services/order-line.service';
import {RecipeService} from './services/recipe.service';
import {AddStockComponent} from './components/stock/add-stock.component';
import {StockService} from './services/stock.service';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import {LoginService} from './services/login.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { CounterComponent } from './components/counter/counter.component';
import { StatusComponent } from './components/status/status.component';
import {StatusService} from './services/status.service';
import {UpdUserComponent} from './components/user/upd-user.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    AddCountryComponent,
    LangComponent,
    AddLangComponent,
    UserComponent,
    AddUserComponent,
    NavComponent,
    RoleComponent,
    AddRoleComponent,
    ProductComponent,
    AddProductComponent,
    CategoryComponent,
    AddCategoryComponent,
    ProductTypeComponent,
    AddProductTypeComponent,
    LocationComponent,
    AddLocationComponent,
    MenuComponent,
    AddMenuComponent,
    OfferComponent,
    AddOfferComponent,
    OrderComponent,
    AddOrderComponent,
    OrderLineComponent,
    AddOrderLineComponent,
    RecipeComponent,
    AddRecipeComponent,
    StockComponent,
    AddStockComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    // AddStatusComponent,
    StatusComponent,
// TODO : developper components :
    KitchenComponent,
    CounterComponent,
    UpdUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    UserService,
    CountryService,
    LangService,
    RoleService,
    ProductService,
    CategoryService,
    ProductTypeService,
    LocationService,
    MenuService,
    OfferService,
    OrderService,
    OrderLineService,
    RecipeService,
    StockService,
    LoginService,
    StatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
