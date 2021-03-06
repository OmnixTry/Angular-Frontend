import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { httpFactory } from '@angular/http/src/http_module';
import { Router } from '@angular/router';
import { Customer } from 'src/app/shared/models/customer.model';
import { IOrderDetail } from 'src/app/shared/models/IOrderDetail.model';
import { Order } from 'src/app/shared/models/order.model';
import { Product } from 'src/app/shared/models/product.model';
import { Status } from 'src/app/shared/models/status.model';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { NewOrderService } from 'src/app/shared/services/new-order.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { SizeService } from 'src/app/shared/services/size.service';
import { StatusService } from 'src/app/shared/services/status.service';
import { OrdersComponent } from '../orders.component';

@Component({
	selector: 'app-add-order',
	templateUrl: './add-order.component.html',
	styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit, OnDestroy {
	addOrderForm: FormGroup;
	products: Product[];
	customers: Customer[] = [];
	statuses: Status[] = [];

	constructor(
		public customerService: CustomerService,
		public orderService: OrderService,
		public newOrderService: NewOrderService,
		public productService: ProductService,
		public sizeService: SizeService,
		public statusService: StatusService,
		private router: Router
	) {
		this.products = productService.products;

		this.statusService
			.getAll()
			.subscribe((statuses) => (this.statuses = statuses));

		this.addOrderForm = new FormGroup({
			createdDate: new FormControl(
				newOrderService.order ? newOrderService.order.createdDate : new Date()
			),
			customerId: new FormControl(
				newOrderService.order ? newOrderService.order.customerId : null,
				[Validators.required]
			),
			status: new FormControl(
				newOrderService.order ? newOrderService.order.status : null,
				[Validators.required]
			),
			comment: new FormControl(
				newOrderService.order ? newOrderService.order.comment : null
			),
			//totalCost: new FormControl(this.totalCost, [Validators.min(1)]),
		});

		customerService.customers.subscribe(
			(customers) => (this.customers = customers)
		);
	}
	ngOnDestroy(): void {
		this.newOrderService.order = this.generateOrder();
	}

	ngOnInit(): void {}

	private generateOrder(): Order | undefined {
		return new Order(
			0,
			new Date(),
			null,
			this.addOrderForm.value['status'],
			+this.addOrderForm.value['status'],
			this.newOrderService.totalCost,
			[],
			this.addOrderForm.value['comment'],
			+this.addOrderForm.value['customerId']
		);
	}

	onSubmit() {
		const newOrder = this.generateOrder() as Order;
		console.log(newOrder);
		this.orderService.addOrder(newOrder).subscribe((newId) => {
			this.orderService
				.addProductsToOrder(newId, this.newOrderService.products)
				.subscribe();

			this.newOrderService.reset();
			this.router.navigate(['/order']);
		});
	}

	onDeleteSelected(productId: number) {
		this.newOrderService.deleteFromOrder(productId, this.products);
	}

	onCancel() {
		this.newOrderService.reset();
	}
}
