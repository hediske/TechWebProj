import { Component, Input } from '@angular/core';
import { Product } from 'src/app/products/Model/Product';



@Component({
  selector: 'app-product-view-left',
  templateUrl: './product-view-left.component.html',
  styleUrls: ['./product-view-left.component.css']
})
export class ProductViewLeftComponent {

  @Input() product: Product | null = null;

  ngOnInit(){
    console.log(this.product)
  }
}
