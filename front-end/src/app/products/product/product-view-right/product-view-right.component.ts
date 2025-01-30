import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Model/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view-right',
  templateUrl: './product-view-right.component.html',
  styleUrls: ['./product-view-right.component.css']
})
export class ProductViewRightComponent {
 
  @Input() product: Product | null = null;
  quantity: number = 1;
  subtotal: number = 0;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }
  
  // Met à jour le sous-total
  calculateSubtotal() {
    if (this.product) {
      this.subtotal = this.quantity * this.product.price;
    }
  }

  // Fonction appelée lorsqu'on change la quantité
  updateQuantity(event: any) {
    this.quantity = event.target.value;
    this.calculateSubtotal();
  }
}
