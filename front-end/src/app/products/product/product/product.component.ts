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

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.getProductById();
  }

  getProductById() {
    this.activatedRoute.params.subscribe (
      (params) => {
        this.id = params['id'];
      }
    );
    this.productService.getProductById(this.id).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        alert('Error retrieving product');
        console.log(error);
      }
    );
  }

}
