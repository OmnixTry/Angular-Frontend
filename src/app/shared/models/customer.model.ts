export class Customer {
    public customerId:number;
    public name: string;
    public address: string;
    readonly creationDate: Date;

    constructor(name: string, address: string, creationDate: Date, customerId: number = 0){
        this.name = name;
        this.address = address;
        this.creationDate = creationDate;
        this.customerId = customerId;
    }
}