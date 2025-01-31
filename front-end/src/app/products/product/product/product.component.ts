import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Model/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product: Product | null = null;
  id: number = 0;
  relatedProducts: Product[] = [];

  constructor(
    private readonly productService: ProductService,
    private readonly activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    // Écouter les changements dans les paramètres de l'URL
    this.activatedRoute.params.subscribe((params) => {
      const productId = params['id'];
      if (productId) {
        this.loadProductData(productId);
      }
    });
  }

  private loadProductData(productId: number): void {
    this.productService.getProductById(productId).subscribe(
      (product) => {
        this.product = product;
        this.loadRelatedProductsByType(this.product.type, this.product.id);
      },
      (error) => {
        console.error('Error retrieving product:', error);
        alert('Error retrieving product.');
        this.product = null;
        this.relatedProducts = [];
      }
    );
  }

  private loadRelatedProductsByType(productType: string, productId: number): void {
    this.productService.getRelatedProductsByType(productType, productId).subscribe({
      next: (products) => {
        this.relatedProducts = products;
      },
      error: (err) => {
        console.error('Failed to load related products:', err);
        this.relatedProducts = [];
      },
    });
  }
}