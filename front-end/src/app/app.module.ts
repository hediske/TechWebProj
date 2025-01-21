import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product/product.component';
import { ProductViewLeftComponent } from './products/product/product-view-left/product-view-left.component';
import { ProductViewRightComponent } from './products/product/product-view-right/product-view-right.component';

import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductViewLeftComponent,
    ProductViewRightComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUTING,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
