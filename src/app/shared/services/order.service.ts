import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrderDetail } from '../models/IOrderDetail.model';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { Status } from '../models/status.model';
import { CustomerService } from './customer.service';
import { ProductService } from './product.service';

@Injectable()
export class OrderService {
	readonly baseUrl: string = 'https://localhost:5001/api/order/';

	get orders() {
		return this.http.get<Order[]>(this.baseUrl);
	}

	constructor(
		public productService: ProductService,
		//public customerService: CustomerService,
		private http: HttpClient
	) {}

	addProductsToOrder(orderNumber: number, products: IOrderDetail[]) {
		// const params = new HttpParams()
		// 	.append('productId', id.toString())
		// 	.append('quantity', quantity.toString());
		return this.http.post(this.baseUrl + orderNumber + '/products/', products);
	}

	substractQuantity(id: number, quantity: number): Product | undefined {
		const product: Product = this.productService.getProductById(id);
		if (product.availableQuantity >= quantity) {
			product.availableQuantity -= quantity;
			return product;
		} else {
			return undefined;
		}
	}

	getOrderById(orderNumber: number) {
		return this.http.get<Order>(this.baseUrl + orderNumber + '/');
	}

	addOrder(newOrder: Order) {
		return this.http.post<number>(this.baseUrl, newOrder);
	}

	updateOrder(newOrder: Order) {
		return this.http.put(this.baseUrl + newOrder.id + '/', newOrder);
	}

	updateOrderProducts(orderNumber: number, products: IOrderDetail[]) {
		return this.http.put(this.baseUrl + orderNumber + '/products/', products);
	}

	getOrderProducts(orderId: number) {
		return this.http.get<Product[]>(this.baseUrl + orderId + '/products/');
	}
}
