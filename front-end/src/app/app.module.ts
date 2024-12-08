import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewLeftComponent } from './product/product-view-left/product-view-left.component';
import { ProductViewRightComponent } from './product/product-view-right/product-view-right.component';
import { ProductComponent } from './product/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductViewLeftComponent,
    ProductViewRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
