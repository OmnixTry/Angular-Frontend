import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { HeaderComponent } from './header/header.component';
import { CustomerListElementComponent } from './customers/customer-list/customer-list-element/customer-list-element.component';
import { CustomerService } from './shared/services/customer.service';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductElementComponent } from './products/product-list/product-element/product-element.component';
import { ProductService } from './shared/services/product.service';
import { AddProductComponent } from './products/add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';

const appRoutes : Routes = [
  {path: 'customer', component: CustomersComponent},
  {path: 'customer/add', component: CustomerAddComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'product/add', component: AddProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerListComponent,
    CustomerAddComponent,
    HeaderComponent,
    CustomerListElementComponent,
    ProductsComponent,
    ProductListComponent,
    ProductElementComponent,
    AddProductComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [CustomerService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
