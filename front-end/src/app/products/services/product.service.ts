import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];
  link = 'http://localhost:3000/product';
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.link);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.link}/${id}`)
  }

  getRelatedProductsByType(productType: string, excludeProductId: number): Observable<Product[]> {
    return this.http.get<Product[]>(
        `${this.link}/related?type=${productType}&excludeId=${excludeProductId}`
    );
  }


  addProduct(formData: FormData):Observable<any> {
    return this.http.post(`${this.link}`, formData);
}
  
}
