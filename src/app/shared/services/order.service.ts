import { Injectable } from "@angular/core";
import { Order } from "../models/order.model";
import { Product } from "../models/product.model";
import { CustomerService } from "./customer.service";
import { ProductService } from "./product.service";

@Injectable()export class OrderService{
    orders: Order[];

    constructor(public productService: ProductService,
        public customerService: CustomerService){
        this.orders = [
            {
                orderNumber: 1,
                createdDate: new Date(),
                customer: customerService.customers[0],
                status: 'New',
                totalCost: 0,
                products: []
            },
            {
                orderNumber: 2,
                createdDate: new Date(),
                customer: customerService.customers[1],
                status: 'New',
                totalCost: 0,
                products: []
            }          
        ]
        
        this.addProductToOrder(1, 1, 10);
        this.addProductToOrder(1, 2, 20);
        this.addProductToOrder(2, 3, 2);
    }

    addProductToOrder(orderNumber: number, productNumber: number, quantity: number): void{
        const product = this.substractQuantity(productNumber, quantity);
        const order = this.getOrderById(orderNumber);
        if(product && order){
            const addedProduct = {
                productNumber: product.productNumber,
                createdDate: product.createdDate,
                productName: product.productName,
                productCategory: product.productCategory,
                availableQuantity: quantity,
                price: product.price,
                description: product.description,
                size: product.size,
            };
            
            order
            .products
            .push(addedProduct);
            order.totalCost 
                += addedProduct.price * addedProduct.availableQuantity;
        }
    }

    private substractQuantity(productNumber: number, quantity: number):Product|undefined {
        const product: Product = this.productService.getProductById(productNumber);
        if(product.availableQuantity>= quantity){
            product.availableQuantity -= quantity;
            return product;
        }
        else{
            return undefined;
        }
    }

    getOrderById(orderNumber: number){
        return this.orders.find((el)=> {return el.orderNumber === orderNumber;});
    }

}