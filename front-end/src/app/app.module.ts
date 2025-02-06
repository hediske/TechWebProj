import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product/product.component';
import { ProductViewLeftComponent } from './products/product/product-view-left/product-view-left.component';
import { ProductViewRightComponent } from './products/product/product-view-right/product-view-right.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutModule } from "./main-layout/main-layout.module";
import { AuthInterceptor } from './user/interceptors/auth.interceptor';
import { LoggingComponent } from './admin/logging/logging.component';  
@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        ProductViewLeftComponent,
        ProductViewRightComponent,
        ProductsComponent,
        LoggingComponent,  
        AddProductComponent,
        CartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        MainLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MainLayoutModule,
        CommonModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
