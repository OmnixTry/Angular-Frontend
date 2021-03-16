import { Injectable } from "@angular/core";
import { Customer } from "../models/customer.model";
import { HttpClient } from "@angular/common/http";
import { Order } from "../models/order.model";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Injectable()export class CustomerService {
    readonly originalLink = 'https://localhost:5001/api/customer/';
    private _customers: Customer[] = [];

    constructor(private http: HttpClient){
        
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
        var pipe = new DatePipe('en-US');
        console.log(pipe.transform(customer.createdDate, 'yyyy-MM-dd'));
          //customer.createdDate = customer.createdDate.toJSON();

        this.http.post(this.originalLink, {
            id: 0, 
            address:customer.address, 
            createdDate: pipe.transform(customer.createdDate, 'yyyy-MM-dd'),
            name: customer.name}).subscribe(res => console.log(res));
    }

    getCustomerById(id: number){
        return this.customers.find((el) => {return el.id == id})
    }
    getCustomerOrders(customerId: number){
        return this.http.get<Order[]>(this.originalLink + customerId + "/orders/");
    }
}