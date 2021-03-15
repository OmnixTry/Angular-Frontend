import { Injectable } from "@angular/core";
import { Customer } from "../models/customer.model";
import { HttpClient } from "@angular/common/http";
import { Order } from "../models/order.model";

@Injectable()export class CustomerService {
    readonly originalLink = 'https://localhost:5001/api/customer/';
    private _customers: Customer[] = [];

    constructor(private http: HttpClient,){
        
    }

    get customers(){
        this.http.get<Customer[]>(this.originalLink)
        .subscribe((customers)=> { this._customers.splice(0, this._customers.length); this._customers.push(...customers)});
        return this._customers;
    }

    customersObservable(){
        return this.http.get<Customer[]>(this.originalLink);
    }

    addCustomer(customer: Customer): void{
        this._customers.push(customer);
    }

    getCustomerById(id: number){
        return this.customers.find((el) => {return el.id == id})
    }
    getCustomerOrders(customerId: number){
        return this.http.get<Order[]>(this.originalLink + customerId + "/orders/");
    }
}