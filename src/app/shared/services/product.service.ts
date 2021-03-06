import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { sanitizeIdentifier } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
	private _products: Product[] = [];
	private readonly baseUrl = 'https://localhost:5001/api/product/';
	private readonly datePipe = new DatePipe('en-US');

	constructor(private http: HttpClient, private router: Router) {}

	get products(): Product[] {
		this.http.get<Product[]>(this.baseUrl).subscribe((customers) => {
			this._products.splice(0, this._products.length);
			this._products.push(...customers);
		});
		return this._products;
	}

	addProduct(
		productName: string,
		categoryId: number,
		availableQuantity: number,
		price: number,
		description: string,
		size: number
	) {
		var date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
		var newProduct: Product = new Product(
			0,
			date ? date : '',
			productName,
			categoryId,
			availableQuantity,
			price,
			description,
			size,
			null
		);

		console.log(newProduct);

		return this.http.post(this.baseUrl, newProduct);
	}

	getCollumns(): string[] {
		return [
			'id',
			'productName',
			'createdDate',
			'categoryId',
			'availableQuantity',
			'price',
			'description',
		];
	}

	getCategories(): string[] {
		return ['Beverage', 'Fruit', 'Vegetable'];
	}

	getSizes(): string[] {
		return ['Small', 'Medium', 'Large'];
	}

	deleteProduct(id: number) {
		return this.http.delete(this.baseUrl + id + '/');
	}

	getProductById(id: number): Product {
		const index = this.products.findIndex((el) => {
			return el.id == id;
		});
		return this.products[index];
	}
}
