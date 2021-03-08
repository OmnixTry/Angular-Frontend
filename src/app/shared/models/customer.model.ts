export class Customer {
    public name: string;
    public address: string;
    readonly creationDate: Date;

    constructor(name: string, address: string, creationDate: Date){
        this.name = name;
        this.address = address;
        this.creationDate = creationDate;
    }
}