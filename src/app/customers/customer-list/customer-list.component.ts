import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { httpFactory } from '@angular/http/src/http_module';
import { Observable, of } from 'rxjs';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Customer } from '../../shared/models/customer.model';
//import 'rxjs/Rx';
//import { switchMap } from 'rxjs/operators';
//import { threadId } from 'node:worker_threads';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  orderQuantity: Map<number, number>;
  orderCost: Map<number, number>

  constructor(public customerService: CustomerService,
    private http: HttpClient) {

//    this.customers= customerService.customers;
    this.orderQuantity = new Map<number, number>();
    this.orderCost = new Map<number, number>();
    /*
    console.log(this.customers);
    for (let index = 0; index < this.customers.length; index++) {
      const element = this.customers[index];
      console.log(element)
      this.countTotalCost(element.id).subscribe(num => { console.log({element, num}); return this.orderQuantity.set(element.id, num);});
    }

    console.log(this.orderQuantity);
    */
    //var a = of([1, 3]).pipe(delay(delay));;
    const obs = customerService.customersObservable().subscribe(customers => {
      this.customers = customers;
      
      for (let index = 0; index < this.customers.length; index++) {
        const element = this.customers[index];
        //console.log(element)
        this.countQuantity(element.id).subscribe(num => { console.log({element, num}); return this.orderQuantity.set(element.id, num);});
        this.countTotalCost(element.id).subscribe(num => {this.orderCost.set(element.id, num)});
      }



    });

  }

  ngOnInit(): void {
  }

  countQuantity(customerId: number){
    return this.http.get<number>('https://localhost:5001/api/customer/'+ customerId +'/orders/quantity');
  }

  countTotalCost(customerId: number){
    return this.http.get<number>('https://localhost:5001/api/customer/'+ customerId +'/orders/cost');
  }

}
