import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(public productService: ProductService,
    private router: Router) {
    this.categories = productService.getCategories();
    this.products = productService.products;

    this.newProductForm = new FormGroup({
      'productName' : new FormControl(null, [Validators.required]),
      'category' : new FormControl(null, [Validators.required]),
      'availableQuantity': new FormControl(null, [Validators.required, Validators.min(1)]),
      'price': new FormControl(null, [Validators.required, Validators.min(1)]),
      'description': new FormControl(null),
      'size': new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
   
  }

  onSubmit() {
    this.productService.addProduct(this.newProductForm.value['productName'],
      this.newProductForm.value['category'],
      this.newProductForm.value['productName'],
      this.newProductForm.value['availableQuantity'],
      this.newProductForm.value['description'],
      this.newProductForm.value['size'])
    this.router.navigate(['/product']);
  }
}
