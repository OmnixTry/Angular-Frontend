import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { NewOrderService } from 'src/app/shared/services/new-order.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-add-product-to-order',
  templateUrl: './add-product-to-order.component.html',
  styleUrls: ['./add-product-to-order.component.css']
})
export class AddProductToOrderComponent implements OnInit {

  readonly productId: number;
  product: Product;
  productForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private newOrderService: NewOrderService,
    private router: Router) { 
    this.productId = this.route.snapshot.params['id'];
    this.product = productService.getProductById(this.productId)
    
    this.productForm = new FormGroup({
      'quantity': new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.productForm.value['quantity']);
    this.newOrderService.AddProduct(this.productId, this.productForm.value['quantity']);
    this.router.navigate(['/order', 'add']);
  }
}
