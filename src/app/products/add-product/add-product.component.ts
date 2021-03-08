import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productName: string = '';
  productCategory: string = '';
  availableQuantity: number = 0;
  price: number = 0;
  description: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onProductAdd() {
    this.productService.addProduct(
      this.productName,
      this.productCategory,
      this.availableQuantity,
      this.price,
      this.description
    );
  }
}
