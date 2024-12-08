import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('product')
export class ProductEntity {

    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column()
    brand: string

    @Column()
    availability: string

    @Column()
    type: string

    @Column()
    description: string

    @Column()
    price: number

    @Column()
    imageURL: string
}
