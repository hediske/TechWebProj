export class Product {
    id: number;
    name: string;
    brand: string;
    availability: string;
    type: string;
    description: string;
    price: number;
    imageURL: string;

    constructor(id = 0, name = '', brand = '', availability = '', type = '', description = '', price = 0, imageURL = '') {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.availability = availability;
        this.type = type;
        this.description = description;
        this.price = price;
        this.imageURL = imageURL;
    }
}