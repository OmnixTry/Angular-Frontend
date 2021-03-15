import { HttpClient } from '@angular/common/http';
import { sanitizeIdentifier } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable()export class ProductService {
  private _products: Product[] = [];

  constructor(private http: HttpClient){

  }

  get products(): Product[] {
    this.http.get<Product[]>('https://localhost:5001/api/product/')
            .subscribe((customers)=> 
            { 
              this._products.splice(0, this._products.length); 
              this._products.push(...customers)
            });
    return this._products;
  }

  addProduct(
    productName: string,
    categoryId: number,
    availableQuantity: number,
    price: number,
    description: string,
    size: string
  ) {
    this._products.push({
      id: 0,
      creationDate: new Date(),
      productName: productName,
      categoryId: categoryId,
      availableQuantity: availableQuantity,
      price: price,
      description: description,
      size: size,
      category: ''
    });
  }

  getCollumns(): string[] {
    return [
      'id',
      'productName',
      'createdDate',
      'categoryId',
      'availableQuantity',
      'price',
      'description',
    ];
  }

  getCategories(): string[]{
    return ['Beverage', 'Fruit', 'Vegetable']
  }

  getSizes(): string[]{
    return ['Small', 'Medium', 'Large'];
  }

  deleteProduct(id: number){
    const index = this.products.findIndex(el => { return el.id == id})
    this.products.splice(index, 1);
  }

  getProductById(id: number): Product{
    const index = this.products.findIndex(el => { return el.id == id})
    return this.products[index];
  }
}
