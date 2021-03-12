import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  categories: string[];
  products: Product[];

  newProductForm: FormGroup;

  constructor(private productService: ProductService) {
    this.categories = productService.getCategories();
    this.products = productService.products;

    this.newProductForm = new FormGroup({
      'productName' : new FormControl(null, [Validators.required]),
      'category' : new FormControl(null, [Validators.required]),
      'availableQuantity': new FormControl(null, [Validators.required, Validators.min(1)]),
      'price': new FormControl(null, [Validators.required, Validators.min(1)]),
      'description': new FormControl(null)
    });
  }

  ngOnInit(): void {
   
  }

  onSubmit() {
    console.log(this.newProductForm);
  }
}
