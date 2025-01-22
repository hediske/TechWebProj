import { Column, Entity, PrimaryColumn } from "typeorm";


// stock , archived , 
@Entity('product')
export class ProductEntity {

    @PrimaryColumn()
    id: number
 
    @Column()
    name: string

    @Column()
    brand: string

    @Column()
    stock: number

    @Column()
    archived: boolean

    @Column()
    type: string

    @Column()
    description: string

    @Column()
    price: number

    @Column()
    imageURL: string

    get availability(): boolean {
        return this.stock > 0 ? true : false;       
    }

}
