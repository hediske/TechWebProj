import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product [] = [];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        alert('API access problem');
        console.log(error);
      }
    );
  }
}
