import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order.model';
import { Product } from 'src/app/shared/models/product.model';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { NewOrderService } from 'src/app/shared/services/new-order.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { OrdersComponent } from '../orders.component';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit, OnDestroy {
  addOrderForm: FormGroup;
  products: Product[];
  totalCost: number;

  constructor(public customerService: CustomerService,
    public orderService: OrderService,
    public newOrderService: NewOrderService,
    public productService: ProductService,
    private router: Router) { 
      this.products = productService.products;
      this.totalCost = newOrderService.countTotalCost();


      this.addOrderForm = new FormGroup({
        'createdDate': new FormControl(newOrderService.order ? newOrderService.order.createdDate : new Date()),
        'customerId': new FormControl(newOrderService.order ? newOrderService.order.customer : null, [Validators.required]),
        'status': new FormControl(newOrderService.order ? newOrderService.order.status : null, [Validators.required]),
        'comment': new FormControl(),
        'totalCost': new FormControl(this.totalCost, [Validators.min(1)])
      })
    }
  ngOnDestroy(): void {
    this.newOrderService.order = this.generateOrder();
  }

  ngOnInit(): void {
  }

  private generateOrder():Order| undefined{
    const customer = this.customerService.getCustomerById(this.addOrderForm.value['customerId']);
    if(customer){
      return new Order(0, new Date(), customer, this.addOrderForm.value['status'], 1 ,this.totalCost, this.newOrderService.products);
    }
    return undefined;
  }

  onSubmit(){
    const newOrder = this.generateOrder();

    if(newOrder){
      this.orderService.addOrder(newOrder);
    }
    else{
      console.log("bad");
    }
    this.newOrderService.reset();
    this.router.navigate(['/order']);
  }

  onCancel(){
    this.newOrderService.reset();

  }
}
