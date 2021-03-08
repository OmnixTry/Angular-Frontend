import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.css'],
})
export class ProductElementComponent implements OnInit {


  @Input() product: any;
  @Input() columns?: string[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onItemDelete(){
    this.productService.deleteProduct(this.product);
  }
}
