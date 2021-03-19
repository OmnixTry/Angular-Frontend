import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { NewOrderService } from 'src/app/shared/services/new-order.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
	selector: 'app-edit-order-product',
	templateUrl: './edit-order-product.component.html',
	styleUrls: ['./edit-order-product.component.css'],
})
export class EditOrderProductComponent implements OnInit {
	readonly productId: number;
	product: Product;
	productForm: FormGroup;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService,
		private newOrderService: NewOrderService,
		private router: Router
	) {
		this.productId = +this.route.snapshot.params['productId'];
		this.product = productService.getProductById(this.productId);

		this.productForm = new FormGroup({
			quantity: new FormControl(null, [
				Validators.required,
				Validators.min(1),
				Validators.max(this.product.availableQuantity),
			]),
		});
	}

	ngOnInit(): void {}

	onSubmit() {
		var existingOrderDetail = this.newOrderService.products.find(
			(orderDetail) => orderDetail.productId == this.productId
		);
		if (existingOrderDetail) {
			existingOrderDetail.quantity = +this.productForm.value['quantity'];
			existingOrderDetail.price =
				+this.productForm.value['quantity'] * this.product.price;
		} else {
			this.newOrderService.AddProduct({
				productId: +this.productId,
				quantity: +this.productForm.value['quantity'],
				price: +this.productForm.value['quantity'] * this.product.price,
				name: this.product.productName,
			});
		}

		this.router.navigate(['/order', this.route.snapshot.params['id'], 'edit']);
	}
}
