import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Customer } from '../../../shared/models/customer.model';

@Component({
  selector: 'app-customer-list-element',
  templateUrl: './customer-list-element.component.html',
  styleUrls: ['./customer-list-element.component.css']
})
export class CustomerListElementComponent implements OnInit {
  @Input() customer!:  Customer;
  totalCost: number = 0;
  numberOfOrders: number = 0;

  constructor(private customerService: CustomerService) {
    
   }

  ngOnInit(): void {
  }

}
