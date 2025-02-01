import { Injectable } from '@nestjs/common';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable()
export class CartService {
  private cart: CartItem[] = [];

  // Add item to the cart
  addItem(item: CartItem): CartItem[] {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
    
    return this.cart;
  }

  // Get all items in the cart
  getCart(): CartItem[] {
    return this.cart;
  }

  // Remove item from the cart
  removeItem(itemId: number): CartItem[] {
    this.cart = this.cart.filter(item => item.id !== itemId);
    return this.cart;
  }
}
