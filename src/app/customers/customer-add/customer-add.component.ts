import { Component, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customer: Customer;
  constructor() {
      this.customer = new Customer('','',new Date());
   }

  ngOnInit(): void {
  }

}
