export class Product{
    id: number;
    creationDate: Date;
    productName: string;
    categoryId: number;
    availableQuantity: number;
    price: number;
    description?: string = '';
    size: string;
    category: string;

    constructor(id: number,
        creationDate: Date,
        productName: string,
        categoryId: number,
        availableQuantity: number,
        price: number,
        description: string,
        size: string,
        category: string)
    {
        this.id = id;
        this.creationDate = creationDate;
        this.productName = productName;
        this.categoryId = categoryId;
        this.availableQuantity = availableQuantity;
        this.price = price;
        this.description = description;
        this.size = size;
        this.category = category;
    }
}