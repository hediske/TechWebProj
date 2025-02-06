import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class AddProductDto {
    
    @IsString()
    @IsNotEmpty({ message: 'Le nom du produit est obligatoire.' })
    @MinLength(2, { message: 'Le nom du produit doit contenir au moins 2 caractères.' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'La marque est obligatoire.' })
    @MinLength(2, { message: 'La marque doit contenir au moins 2 caractères.' })
    brand: string;

    @IsNumber()
    @IsNotEmpty({ message: 'Le stock du produit est obligatoire.' })
    @IsPositive({ message: 'Le stock doit être un nombre positif.' })
    stock: number;

    @IsBoolean()
    @IsOptional()
    archived?: boolean;

    @IsString()
    @IsNotEmpty({ message: 'Le type est obligatoire.' })
    type: string;

    @IsString()
    @IsOptional()
    @MinLength(10, { message: 'La description doit contenir au moins 10 caractères.' })
    description?: string;

    @IsNumber()
    @IsNotEmpty({ message: 'Le price du produit est obligatoire.' })
    @IsPositive({ message: 'Le prix doit être un nombre positif.' })
    price: number;

    // @IsArray()
    // @IsOptional()
    // @ValidateNested({ each: true })
    // @Type(() => String)
    // images?: string[]; // URLs des images
}
