import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/models/category.model';
import { Product } from 'src/app/shared/models/product.model';
import { Size } from 'src/app/shared/models/size.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { SizeService } from 'src/app/shared/services/size.service';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
	categories: Category[] = [];
	products: Product[];
	sizes: Size[] = [];

	newProductForm: FormGroup;

	constructor(
		public productService: ProductService,
		private router: Router,
		private categoryService: CategoryService,
		private sizeService: SizeService
	) {
		categoryService.getAll().subscribe((categories) => {
			this.categories = categories;
		});
		this.products = productService.products;
		this.sizes = sizeService.getAll();

		this.newProductForm = new FormGroup({
			productName: new FormControl(null, [Validators.required]),
			category: new FormControl(null, [Validators.required]),
			availableQuantity: new FormControl(null, [
				Validators.required,
				Validators.min(1),
			]),
			price: new FormControl(null, [Validators.required, Validators.min(1)]),
			description: new FormControl(null),
			size: new FormControl(null, [Validators.required]),
		});
	}

	ngOnInit(): void {}

	onSubmit() {
		this.productService
			.addProduct(
				this.newProductForm.value['productName'],
				+this.newProductForm.value['category'],
				+this.newProductForm.value['availableQuantity'],
				+this.newProductForm.value['price'],
				this.newProductForm.value['description'],
				this.newProductForm.value['size']
			)
			.subscribe(() => {
				this.router.navigate(['/product']);
			});
	}
}
