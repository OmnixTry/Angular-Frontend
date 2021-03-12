import { Customer } from "../models/customer.model";

export class CustomerService {
    private _customers: Customer[] = [
        {name: 'Robert', address: 'Gud street', creationDate: new Date(), customerId: 1},
        {name: 'William', address: 'Nice street street', creationDate: new Date(), customerId: 2},
        {name: 'Cindy', address: 'Fine street', creationDate: new Date(), customerId: 3},
    ];

    get customers(){
        return this._customers;
    }
    addCustomer(customer: Customer): void{
        this._customers.push(customer);
    }

    getCustomerById(customerId: number){
        return this.customers.find((el) => {return el.customerId == customerId})
    }
}