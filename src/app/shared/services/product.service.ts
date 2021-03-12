import { sanitizeIdentifier } from '@angular/compiler';
import { Product } from '../models/product.model';

export class ProductService {
  private _products: Product[] = [
    {
      productNumber: 1,
      createdDate: new Date(),
      productName: 'Onion',
      productCategory: 'Vegetable',
      availableQuantity: 100,
      price: 10,
      description: 'funny onions',
      size: 'Medium'
      
    },
    {
      productNumber: 2,
      createdDate: new Date(),
      productName: 'Cucumber',
      productCategory: 'Vegetable',
      availableQuantity: 120,
      price: 20,
      size: 'Medium'
    },
    {
      productNumber: 3,
      createdDate: new Date(),
      productName: 'Cabbage',
      productCategory: 'Vegetable',
      availableQuantity: 150,
      price: 15,
      description: 'yet another product',
      size: 'Medium'
    },
    {
      productNumber: 4,
      createdDate: new Date(),
      productName: 'Pepsi',
      productCategory: 'Beverage',
      availableQuantity: 1000,
      price: 100,
      description: 'Nice drincc',
      size: 'Medium'
    },
  ];

  get products(): Product[] {
    return this._products;
  }

  addProduct(
    productName: string,
    productCategory: string,
    availableQuantity: number,
    price: number,
    description: string,
    size: string
  ) {
    this._products.push({
      productNumber: 0,
      createdDate: new Date(),
      productName: productName,
      productCategory: productCategory,
      availableQuantity: availableQuantity,
      price: price,
      description: description,
      size: size,
    });
  }

  getCollumns(): string[] {
    return [
      'productNumber',
      'productName',
      'createdDate',
      'productCategory',
      'availableQuantity',
      'price',
      'description',
    ];
  }

  getCategories(): string[]{
    return ['Beverage', 'Fruit', 'Vegetable']
  }

  deleteProduct(productNumber: number){
    const index = this.products.findIndex(el => { return el.productNumber === productNumber})
    this.products.splice(index, 1);
  }

  getProductById(productNumber: number): Product{
    const index = this.products.findIndex(el => { return el.productNumber === productNumber})
    return this.products[index];
  }
}
