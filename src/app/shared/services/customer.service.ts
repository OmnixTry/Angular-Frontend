import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';
import { DatePipe } from '@angular/common';
import { ICustomerDetail } from '../models/customerDetail.model';

@Injectable()
export class CustomerService {
	readonly originalLink = 'https://localhost:5001/api/customer/';
	private _customers: Customer[] = [];

	constructor(private http: HttpClient) {}

	get customers() {
		return this.http.get<ICustomerDetail[]>(this.originalLink);
	}

	addCustomer(customer: Customer) {
		var pipe = new DatePipe('en-US');
		console.log(pipe.transform(customer.createdDate, 'yyyy-MM-dd'));
		//customer.createdDate = customer.createdDate.toJSON();

		return this.http.post(this.originalLink, {
			id: 0,
			address: customer.address,
			createdDate: pipe.transform(customer.createdDate, 'yyyy-MM-dd'),
			name: customer.name,
		});
	}

	getCustomerById(id: number) {
		this.http.get<Customer>(this.originalLink + id + '/');
	}
	getCustomerOrders(customerId: number) {
		return this.http.get<Order[]>(this.originalLink + customerId + '/orders/');
	}
}
