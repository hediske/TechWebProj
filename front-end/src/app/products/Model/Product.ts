import { Images } from "./Images";


export class Product {
    id: number = 0;
    name: string = '';
    brand: string = '';
    stock: number = 0;
    archived: boolean = false;
    type: string = '';
    description: string = '';
    price: number = 0;
    images: Images[] = [];
    availability: string = '';
}