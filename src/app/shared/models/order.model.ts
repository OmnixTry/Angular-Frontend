import { Customer } from "./customer.model";
import { Product } from "./product.model";

export class Order{
    constructor(public orderNumber: number,
        public createdDate: Date,
        public customer: Customer,
        public status: string,
        public totalCost: number,
        public products: Product[]){}
}