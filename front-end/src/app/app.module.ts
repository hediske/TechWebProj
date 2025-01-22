import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product/product.component';
import { ProductViewLeftComponent } from './products/product/product-view-left/product-view-left.component';
import { ProductViewRightComponent } from './products/product/product-view-right/product-view-right.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutModule } from "./main-layout/main-layout.module";
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
        RouterModule,
        HttpClientModule,
        MainLayoutModule,

        MainLayoutModule,
        CommonModule,
        BrowserAnimationsModule
  ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
