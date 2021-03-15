import { Injectable } from "@angular/core";
import { Customer } from "../models/customer.model";
import { HttpClient } from "@angular/common/http";


@Injectable()export class CustomerService {
    private _customers: Customer[] = [
        {name: 'Robert', address: 'Gud street', creationDate: new Date(), customerId: 1},
        {name: 'William', address: 'Nice street street', creationDate: new Date(), customerId: 2},
        {name: 'Cindy', address: 'Fine street', creationDate: new Date(), customerId: 3},
    ];

    constructor(private http: HttpClient){
        http.get('https://localhost:5001/api/customer/')
            .subscribe((customers)=> { console.log(customers)})
    }

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