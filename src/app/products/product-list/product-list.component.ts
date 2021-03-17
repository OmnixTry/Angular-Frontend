import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { Product } from 'src/app/shared/models/product.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
	products: Product[];
	columns: string[];
	categories: Category[] = [];

	constructor(
		private productService: ProductService,
		public categoryService: CategoryService
	) {
		categoryService
			.getAll()
			.subscribe((categories) => (this.categories = categories));
		this.products = this.productService.products;
		console.log(this.products);
		this.columns = productService.getCollumns();
	}

	ngOnInit(): void {}

	onDeleteClicked(id: number) {
		console.log(id);
		this.productService.deleteProduct(id).subscribe(() => {
			var index = this.products.findIndex((product) => product.id == id);
			this.products.splice(index, 1);
		});
	}

	getCategoryName(categoryId: number) {
		return this.categories.find((cat) => cat.id == categoryId)?.name;
	}
}
