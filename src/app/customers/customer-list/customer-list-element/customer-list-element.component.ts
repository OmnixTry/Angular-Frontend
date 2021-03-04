import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../customer.model';

@Component({
  selector: 'app-customer-list-element',
  templateUrl: './customer-list-element.component.html',
  styleUrls: ['./customer-list-element.component.css']
})
export class CustomerListElementComponent implements OnInit {
  @Input() customer!:  Customer;
  constructor() { }

  ngOnInit(): void {
  }

}
