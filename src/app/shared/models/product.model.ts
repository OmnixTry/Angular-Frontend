import { Category } from './category.model';

export class Product {
	id: number;
	creationDate: Date | string;
	productName: string;
	categoryId: number;
	availableQuantity: number;
	price: number;
	description?: string = '';
	size: string;
	category: Category | null;

	constructor(
		id: number,
		creationDate: Date | string,
		productName: string,
		categoryId: number,
		availableQuantity: number,
		price: number,
		description: string,
		size: string,
		category: Category | null
	) {
		this.id = id;
		this.creationDate = creationDate;
		this.productName = productName;
		this.categoryId = categoryId;
		this.availableQuantity = availableQuantity;
		this.price = price;
		this.description = description;
		this.size = size;
		this.category = category;
	}
}
