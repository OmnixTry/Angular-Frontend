import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/shared/models/category.model';
import { Order } from 'src/app/shared/models/order.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
	selector: 'app-order-view',
	templateUrl: './order-view.component.html',
	styleUrls: ['./order-view.component.css'],
})
export class OrderViewComponent implements OnInit {
	order?: Order;
	categories: Category[] = [];

	constructor(
		private orderService: OrderService,
		private router: ActivatedRoute,
		public categoryService: CategoryService
	) {
		const orderNumber = <number>this.router.snapshot.params['id'];
		this.order = this.orderService.getOrderById(orderNumber);
	}

	ngOnInit(): void {}
}
