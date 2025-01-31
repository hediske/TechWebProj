import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../product.entity/product.entity';

@Entity('image')
export class ImageEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => ProductEntity, (product) => product.images, { onDelete: 'CASCADE' })
    product: ProductEntity;
}