import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
export class AddOrderComponent implements OnInit {
  addOrderForm: FormGroup;
  products: Product[];
  totalCost: number;

  constructor(public customerService: CustomerService,
    public orderService: OrderService,
    public newOrderService: NewOrderService,
    public productService: ProductService) { 
      this.products = productService.products;
      this.totalCost = newOrderService.countTotalCost();


      this.addOrderForm = new FormGroup({
        'createdDate': new FormControl(new Date()),
        'customerId': new FormControl(),
        'status': new FormControl(),
        'comment': new FormControl()
      })
    }

  ngOnInit(): void {
  }

  onSubmit(){
    const customer = this.customerService.getCustomerById(this.addOrderForm.value['customerId'])
    if(customer){
      const newOrder = new Order(0, new Date(), customer, 'New', this.totalCost, this.newOrderService.products);
      this.orderService.addOrder(newOrder);
    }
    else{
      console.log("baad");
    }
    this.newOrderService.reset();
  }
}
