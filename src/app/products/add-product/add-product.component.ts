import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  size: string='';


  newProductForm: FormGroup;

  constructor(private productService: ProductService) {
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
