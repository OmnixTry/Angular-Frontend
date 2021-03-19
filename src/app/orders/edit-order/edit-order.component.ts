import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { httpFactory } from '@angular/http/src/http_module';
import { ActivatedRoute, Router } from '@angular/router';
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
	selector: 'app-edit-order',
	templateUrl: './edit-order.component.html',
	styleUrls: ['./edit-order.component.css'],
})
export class EditOrderComponent implements OnInit {
	orderId: number;

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
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {
		//newOrderService.reset();
		this.orderId = <number>this.activatedRoute.snapshot.params['id'];

		this.products = productService.products;

		this.statusService
			.getAll()
			.subscribe((statuses) => (this.statuses = statuses));

		this.addOrderForm = new FormGroup({
			createdDate: new FormControl(
				newOrderService.order ? newOrderService.order.createdDate : null
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

		this.orderService.getOrderById(this.orderId).subscribe((order) => {
			newOrderService.order = order;
			this.addOrderForm.value['status'] = newOrderService.order.status;
			this.addOrderForm.value['createdDate'] =
				newOrderService.order.createdDate;
			this.addOrderForm.value['customerId'] = newOrderService.order.customerId;
			this.addOrderForm.value['comment'] = newOrderService.order.comment;

			this.addOrderForm = new FormGroup({
				createdDate: new FormControl(
					newOrderService.order ? newOrderService.order.createdDate : null
				),
				customerId: new FormControl(
					newOrderService.order ? newOrderService.order.customerId : null,
					[Validators.required]
				),
				status: new FormControl(
					newOrderService.order ? newOrderService.order.statusId : null,
					[Validators.required]
				),
				comment: new FormControl(
					newOrderService.order ? newOrderService.order.comment : null
				),
				//totalCost: new FormControl(this.totalCost, [Validators.min(1)]),
			});
		});
		if (newOrderService.products.length == 0) {
			orderService.getOrderProducts(this.orderId).subscribe((product) => {
				for (let index = 0; index < product.length; index++) {
					const element = product[index];
					newOrderService.AddProduct({
						productId: element.id,
						quantity: element.availableQuantity,
						price: element.availableQuantity * element.price,
						name: element.productName,
					});
				}
			});
		}
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
			(+this.addOrderForm.value['status']).toString(),
			+this.addOrderForm.value['status'],
			this.newOrderService.totalCost,
			[],
			this.addOrderForm.value['comment'],
			+this.addOrderForm.value['customerId']
		);
	}

	onSubmit() {
		const newOrder = this.generateOrder() as Order;
		newOrder.id = +this.orderId;
		console.log(newOrder);
		this.orderService.updateOrder(newOrder).subscribe((newId) => {
			this.orderService
				.updateOrderProducts(this.orderId, this.newOrderService.products)
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
