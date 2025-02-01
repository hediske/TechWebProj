import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // Add item to the cart
  @Post()
  addToCart(@Body() item: CartItem) {
    return this.cartService.addItem(item);
  }

  // Get all cart items
  @Get()
  getCartItems() {
    return this.cartService.getCart();
  }

  // Remove an item from the cart
  @Delete(':id')
  removeFromCart(@Param('id') id: string) {
    return this.cartService.removeItem(Number(id));
  }
}
