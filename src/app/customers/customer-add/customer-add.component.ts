import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Customer } from '../../shared/models/customer.model';

@Component({
	selector: 'app-customer-add',
	templateUrl: './customer-add.component.html',
	styleUrls: ['./customer-add.component.css'],
})
export class CustomerAddComponent implements OnInit {
	@ViewChild('custForm') creationForm?: NgForm;
	createdDatee: Date;

	constructor(
		private customerService: CustomerService,
		private router: Router
	) {
		this.createdDatee = new Date();
	}

	ngOnInit(): void {}

	onSubmit(form: NgForm) {
		this.customerService.addCustomer(<Customer>form.value).subscribe(() => {
			this.router.navigate(['/customer']);
		});
	}
}
