import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  order?: Order
  constructor(private orderService: OrderService,
    private router: ActivatedRoute) { 
    const orderNumber = <number>this.router.snapshot.params['id'];
    order = this.orderService.getOrderById(orderNumber);
  }

  ngOnInit(): void {
  }

}
