import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Add this import

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component'; // <-- Ensure your component is imported

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent // <-- Ensure your component is declared
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // <-- Add ReactiveFormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }