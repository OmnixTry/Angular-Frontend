import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers:Customer[] = [
    new Customer('Name1', 'Street1', new Date('01.01.2000')),
    new Customer('Name2', 'Street2', new Date('01.01.2002')),
    new Customer('Name3', 'Street3', new Date('01.01.2006')),

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
