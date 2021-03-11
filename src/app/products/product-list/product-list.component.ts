import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  columns: string[];

  constructor(private productService: ProductService) { 
    this.products = this.productService.products;
    this.columns = productService.getCollumns();
  }

  ngOnInit(): void {
  }

  onDeleteClicked(productNumber: number){
    console.log(productNumber);
    this.productService.deleteProduct(productNumber)
  }
}
