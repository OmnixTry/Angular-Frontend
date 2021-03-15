export class Customer {
    public id:number;
    public name: string;
    public address: string;
    readonly createdDate: Date;

    constructor(name: string, address: string, createdDate: Date, id: number = 0){
        this.name = name;
        this.address = address;
        this.createdDate = createdDate;
        this.id = id;
    }
}