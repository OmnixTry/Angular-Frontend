import { Product } from '../models/product.model';

export class ProductService {
  private _products: Product[] = [
    {
      productNumber: 1,
      createdDate: new Date(),
      productName: 'Onion',
      productCategory: 'Vegetables',
      availableQuantity: 100,
      price: 10,
      description: 'funny onions',
    },
    {
      productNumber: 2,
      createdDate: new Date(),
      productName: 'Cucumber',
      productCategory: 'Vegetables',
      availableQuantity: 120,
      price: 20,
    },
    {
      productNumber: 3,
      createdDate: new Date(),
      productName: 'Cabbage',
      productCategory: 'Vegetables',
      availableQuantity: 150,
      price: 15,
      description: 'yet another product',
    },
    {
      productNumber: 4,
      createdDate: new Date(),
      productName: 'Pepsi',
      productCategory: 'Beverage',
      availableQuantity: 1000,
      price: 100,
      description: 'Nice drincc',
    },
  ];

  get products(): Product[] {
    return this._products;
  }

  addProduct(
    createdDate: Date,
    productName: string,
    productCategory: string,
    availableQuantity: number,
    price: number,
    description: string
  ) {
    this._products.push({
      productNumber: 0,
      createdDate: createdDate,
      productName: productName,
      productCategory: productCategory,
      availableQuantity: availableQuantity,
      price: price,
      description: description,
    });
  }
}
