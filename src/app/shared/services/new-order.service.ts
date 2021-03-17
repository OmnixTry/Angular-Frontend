import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { OrderService } from './order.service';
import { ProductService } from './product.service';

@Injectable()
export class NewOrderService {
	order: Order | undefined;
	//order: Order
	products: Product[] = [];

	constructor(
		private orderService: OrderService,
		private productService: ProductService
	) {
		//this.order = new Order(0, new Date(), new Customer('', '', new Date()), '', 0, []);
	}

	AddProduct(productId: number, quantity: number) {
		const product = this.orderService.substractQuantity(productId, quantity);
		if (product) {
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
			this.products.push(addedProduct);
		}
	}

	countTotalCost(): number {
		var sum = 0;
		for (let index = 0; index < this.products.length; index++) {
			const element = this.products[index];
			sum += element.price * element.availableQuantity;
		}
		return sum;
	}

	reset() {
		this.products = [];
		this.order = undefined;
	}
}
