import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

}
