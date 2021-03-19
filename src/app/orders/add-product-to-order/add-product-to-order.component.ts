import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { NewOrderService } from 'src/app/shared/services/new-order.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
	selector: 'app-add-product-to-order',
	templateUrl: './add-product-to-order.component.html',
	styleUrls: ['./add-product-to-order.component.css'],
})
export class AddProductToOrderComponent implements OnInit {
	readonly productId: number;
	product: Product;
	productForm: FormGroup;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService,
		private newOrderService: NewOrderService,
		private router: Router
	) {
		this.productId = this.route.snapshot.params['id'];
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
		console.log(this.productForm.value['quantity']);
		console.log(this.product.price);
		this.newOrderService.AddProduct({
			productId: +this.productId,
			quantity: +this.productForm.value['quantity'],
			price: +this.productForm.value['quantity'] * this.product.price,
			name: this.product.productName,
		});
		this.router.navigate(['/order', 'add']);
	}
}
