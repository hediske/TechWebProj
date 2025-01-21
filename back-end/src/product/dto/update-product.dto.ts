import { IsOptional, IsString, IsNumber, IsUrl, Min, MaxLength } from "class-validator";

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @MaxLength(50, { message: 'The name must be at most 50 characters long.' })
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(30, { message: 'The brand must be at most 30 characters long.' })
  brand: string;

  @IsOptional()
  @IsString()
  @MaxLength(20, { message: 'The type must be at most 20 characters long.' })
  type: string;

  @IsOptional()
  @IsString()
  @MaxLength(255, { message: 'The description must be at most 255 characters long.' })
  description: string;

  @IsOptional()
  @IsNumber({}, { message: 'The price must be a valid number.' })
  @Min(0, { message: 'The price cannot be negative.' })
  price: number;

  @IsOptional()
  @IsString()
  @IsUrl({}, { message: 'The imageURL must be a valid URL.' })
  imageURL: string;
}
