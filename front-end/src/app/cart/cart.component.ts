import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  addToCart(item: CartItem) {
    this.cartService.addToCart(item).subscribe(() => {
      this.loadCart();  // Refresh the cart after adding an item
    });
  }

  removeFromCart(itemId: number) {
    this.cartService.removeFromCart(itemId).subscribe(() => {
      this.loadCart();  // Refresh the cart after removing an item
    });
  }
}
