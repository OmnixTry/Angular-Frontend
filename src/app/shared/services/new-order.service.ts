import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { IOrderDetail } from '../models/IOrderDetail.model';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { OrderService } from './order.service';
import { ProductService } from './product.service';

@Injectable()
export class NewOrderService {
	order: Order | undefined;
	//order: Order
	products: IOrderDetail[] = [];
	totalCost: number = 0;

	constructor(
		private orderService: OrderService,
		private productService: ProductService
	) {
		//this.order = new Order(0, new Date(), new Customer('', '', new Date()), '', 0, []);
	}

	AddProduct(orderDetail: IOrderDetail) {
		this.products.push(orderDetail);
		this.countTotalCost();
	}

	countTotalCost(): number {
		var sum = 0;
		for (let index = 0; index < this.products.length; index++) {
			const element = this.products[index];
			sum += element.price;
		}
		this.totalCost = sum;
		return sum;
	}

	reset() {
		this.products = [];
		this.order = undefined;
	}

	deleteFromOrder(productId: number, fullProducts: Product[]) {
		var index: number = this.products.findIndex(
			(orderDetail) => orderDetail.productId == productId
		);
		var productDetail = this.products[index];
		this.products.splice(index, 1);

		var product = fullProducts.find(
			(product) => product.id == productDetail.productId
		);
		if (product) {
			product.availableQuantity += productDetail.quantity;
		}

		this.countTotalCost();
	}
}
