import { Component, Input, OnInit, Output } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Customer } from '../../shared/models/customer.model';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  name: string = '';
  address: string = '';

  constructor(private customerService: CustomerService) {
    
  }

  ngOnInit(): void {
  }

  onCustomerAdd(){
    this.customerService.addCustomer(this.name, this.address);
  }

  
}
