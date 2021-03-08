export class Product{
    productNumber: number;
    createdDate: Date;
    productName: string;
    productCategory: string;
    availableQuantity: number;
    price: number;
    description?: string = '';

    constructor(productNumber: number,
        createdDate: Date,
        productName: string,
        productCategory: string,
        availableQuantity: number,
        price: number,
        description: string)
    {
        this.productNumber = productNumber;
        this.createdDate = createdDate;
        this.productName = productName;
        this.productCategory = productCategory;
        this.availableQuantity = availableQuantity;
        this.price = price;
        this.description = description;
    }
}