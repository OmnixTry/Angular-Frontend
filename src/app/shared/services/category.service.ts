import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {
	readonly baseUrl = 'https://localhost:5001/api/category/';
	category: Category[] = [];
	constructor(private http: HttpClient) {
		this.http.get<Category[]>(this.baseUrl).subscribe((categories) => {
			this.category = categories;
		});
	}

	getAll() {
		return this.http.get<Category[]>(this.baseUrl);
	}

	getCategory(id: number) {
		return this.http.get<Category[]>(this.baseUrl + id + '/');
	}
}
