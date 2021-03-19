import { Customer } from './customer.model';
import { Product } from './product.model';

export class Order {
	constructor(
		public id: number,
		public createdDate: Date,
		public customer: Customer | null,
		public status: string,
		public statusId: number,
		public totalCost: number = 0,
		public products: Product[] = [],
		public comment: string = '',
		public customerId: number = 0
	) {}
}
