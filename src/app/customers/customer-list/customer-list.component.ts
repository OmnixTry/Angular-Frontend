import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { httpFactory } from '@angular/http/src/http_module';
import { Observable, of } from 'rxjs';
import { ICustomerDetail } from 'src/app/shared/models/customerDetail.model';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Customer } from '../../shared/models/customer.model';
//import 'rxjs/Rx';
//import { switchMap } from 'rxjs/operators';
//import { threadId } from 'node:worker_threads';

@Component({
	selector: 'app-customer-list',
	templateUrl: './customer-list.component.html',
	styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent {
	customers: ICustomerDetail[] = [];

	constructor(
		public customerService: CustomerService,
		private http: HttpClient
	) {
		const obs = customerService.customers.subscribe((customers) => {
			this.customers = customers;
		});
	}
}
