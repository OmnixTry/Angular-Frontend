import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/shared/models/category.model';
import { Order } from 'src/app/shared/models/order.model';
import { Product } from 'src/app/shared/models/product.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
	selector: 'app-order-view',
	templateUrl: './order-view.component.html',
	styleUrls: ['./order-view.component.css'],
})
export class OrderViewComponent implements OnInit {
	order?: Order;
	products: Product[] = [];
	totalCost: number = 0;

	constructor(
		private orderService: OrderService,
		private router: ActivatedRoute,
		public categoryService: CategoryService
	) {
		const orderNumber = <number>this.router.snapshot.params['id'];
		orderService.getOrderById(orderNumber).subscribe((order) => {
			this.order = order;
			console.log(this.order);
			orderService.getOrderProducts(orderNumber).subscribe((products) => {
				for (let index = 0; index < products.length; index++) {
					const element = products[index];
					this.totalCost += element.price * element.availableQuantity;
					console.log(this.totalCost);
				}
				this.products = products;
			});
		});
	}

	ngOnInit(): void {}
}
