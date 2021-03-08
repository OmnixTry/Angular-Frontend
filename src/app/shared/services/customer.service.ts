import { Customer } from "../models/customer.model";

export class CustomerService {
    customers: Customer[] = [
        {name: 'Robert', address: 'Gud street', creationDate: new Date()},
        {name: 'William', address: 'Nice street street', creationDate: new Date()},
        {name: 'Cindy', address: 'Fine street', creationDate: new Date()},
    ];

    addCustomer(name: string, address: string): void{
        this.customers.push({name: name, address: address, creationDate:new Date()});
    }
}