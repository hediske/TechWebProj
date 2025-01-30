import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loadStripe, Stripe, StripeElements, StripeCardElement } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  stripe: Stripe | null = null;
  cardElement: StripeCardElement | null = null;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvc: ['', Validators.required]
    });
  }

  async ngOnInit() {
    this.stripe = await loadStripe('your-publishable-key-here');
    if (this.stripe) {
      const elements = this.stripe.elements();
      this.cardElement = elements.create('card');
      this.cardElement.mount('#card-element');
    }
  }

  async onSubmit() {
    if (!this.stripe || !this.cardElement) {
      return;
    }

    const { token, error } = await this.stripe.createToken(this.cardElement);

    if (error) {
      console.error(error);
    } else {
      // Send the token to your server to process the payment
      console.log(token);
      // You can now send this token to your backend to complete the payment
    }
  }
}