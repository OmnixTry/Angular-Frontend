import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { CustomerService } from './customer.service';
import { ProductService } from './product.service';

@Injectable()
export class OrderService {
	readonly baseUrl: string = 'https://localhost:5001/api/order/';
	_orders: Order[];

	get orders(): Order[] {
		this.http.get<Order[]>(this.baseUrl).subscribe((orders) => {
			console.log(orders);
			this._orders.splice(0, this._orders.length);
			this._orders.push(...orders);
			console.log(this._orders);
		});
		return this._orders;
	}

	constructor(
		public productService: ProductService,
		//public customerService: CustomerService,
		private http: HttpClient
	) {
		this._orders = [];

		this.addProductToOrder(1, 1, 10);
		this.addProductToOrder(1, 2, 20);
		this.addProductToOrder(2, 3, 2);
	}

	addProductToOrder(orderNumber: number, id: number, quantity: number): void {
		const product = this.substractQuantity(id, quantity);
		const order = this.getOrderById(orderNumber);
		if (product && order) {
			const addedProduct = {
				id: product.id,
				creationDate: product.creationDate,
				productName: product.productName,
				categoryId: product.categoryId,
				availableQuantity: quantity,
				price: product.price,
				description: product.description,
				size: product.size,
				category: null,
			};

			order.products.push(addedProduct);
			order.totalCost += addedProduct.price * addedProduct.availableQuantity;
		}
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
		let order = this._orders.find((ord) => ord.id == orderNumber);
		// WHY === doesn't work!!!!!!
		if (order) {
			this.http
				.get<Product[]>(this.baseUrl + orderNumber + '/products/')
				.subscribe((products) => {
					(order as Order).totalCost = 0;
					(order as Order).products = products;
					products.forEach(
						(prod) =>
							((order as Order).totalCost +=
								prod.price * prod.availableQuantity)
					);
				});
		}

		return order;
	}

	get status() {
		return ['New', 'Done'];
	}

	addOrder(newOrder: Order) {
		this.orders.push(newOrder);
	}
}
