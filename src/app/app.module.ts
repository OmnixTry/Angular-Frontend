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
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderService } from './shared/services/order.service';
import { OrderViewComponent } from './orders/order-view/order-view.component';
import { AddProductToOrderComponent } from './orders/add-product-to-order/add-product-to-order.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { NewOrderService } from './shared/services/new-order.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './shared/services/category.service';
import { SizeService } from './shared/services/size.service';
import { StatusService } from './shared/services/status.service';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';

const appRoutes: Routes = [
	{ path: 'customer', component: CustomersComponent },
	{ path: 'customer/add', component: CustomerAddComponent },
	{ path: 'product', component: ProductsComponent },
	{ path: 'product/add', component: AddProductComponent },
	{ path: 'order', component: OrdersComponent },
	{ path: 'order/add', component: AddOrderComponent },
	{ path: 'order/add/:id', component: AddProductToOrderComponent },
	{ path: 'order/:id', component: OrderViewComponent },
	{ path: 'order/:id/edit', component: EditOrderComponent },
];

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
		OrdersComponent,
		OrderListComponent,
		OrderViewComponent,
		AddProductToOrderComponent,
		AddOrderComponent,
		EditOrderComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [
		CustomerService,
		ProductService,
		OrderService,
		NewOrderService,
		CategoryService,
		SizeService,
		StatusService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
