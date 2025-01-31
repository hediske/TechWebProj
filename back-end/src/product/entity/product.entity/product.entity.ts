import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, IsBoolean, IsNumber, IsPositive, IsString, MaxLength, Min, IsOptional } from "class-validator";
import { ImageEntity } from "../image.entity/image.entity";
import { Expose } from "class-transformer";


// stock , archived , 
@Entity('product')
export class ProductEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({ nullable: false })
    @IsNotEmpty()
    @IsString()
    @MaxLength(100) 
    name: string;

    @Column({ nullable: false })
    @IsNotEmpty()
    @IsString()
    @MaxLength(50) 
    brand: string;

    @Column({ nullable: false, default: 0 })
    @IsNumber()
    @Min(0)
    stock: number;

    @Column({ nullable: false, default: false })
    @IsBoolean() 
    archived: boolean;

    @Column({ nullable: false })
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    type: string;

    @Column('text')
    @IsString()
    description: string;

    @Column({ nullable: false, type: 'decimal', precision: 10, scale: 2 })
    @IsNotEmpty()
    @IsPositive() 
    price: number;

    @Expose()
        @IsOptional()
        get availability(): boolean {
            return this.stock > 0;
        }
    
    @OneToMany(() => ImageEntity, (image) => image.product, { cascade: true })
    images: ImageEntity[];

    
}
