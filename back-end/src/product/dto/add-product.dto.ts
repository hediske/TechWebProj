import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsNumber, IsUrl, Min, MaxLength } from "class-validator";

export class AddProductDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50, { message: 'The name must be at most 50 characters long.' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50, { message: 'The brand must be at most 50 characters long.' })
  brand: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50, { message: 'The type must be at most 50 characters long.' })
  type: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255, { message: 'The description must be at most 255 characters long.' })
  description: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({}, { message: 'The price must be a valid number.' })
  @Min(0, { message: 'The price cannot be negative.' })
  price: number;

  @IsNotEmpty()
  @IsString()
  @IsUrl({}, { message: 'The imageURL must be a valid URL.' })
  imageURL: string;
}
