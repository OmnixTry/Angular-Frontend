import { Customer } from "./customer.model";
import { Product } from "./product.model";

export class Order{
    constructor(public id: number,
        public createdDate: Date,
        public customer: Customer,
        public status: string,
        public StatusId: number,
        public totalCost: number = 0,
        public products: Product[] = [],
        public comment: string = '',
        public customerId: number = 0){}
        
}