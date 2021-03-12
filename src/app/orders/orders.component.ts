import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order.model';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  

  ngOnInit(): void {
  }

}
