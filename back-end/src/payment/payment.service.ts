import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor(private configService: ConfigService) {
    this.stripe = new Stripe(this.configService.get<string>('sk_test_51QmkJRLbFajN15ea0K6s6a1wvsQGNZt6rukkF9ZMQJOxMWMxNeExKilgQIxNU7LM4OoXO5nQjn9RlId38cDggzZ2003SekjUup'), {
      apiVersion: '2025-01-27.acacia', // Use the correct Stripe API version
    });
  }

  async createPaymentIntent(amount: number, currency: string): Promise<string> {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount,
      currency,
    });

    return paymentIntent.client_secret;
  }

  async handleWebhookEvent(payload: any, signature: string): Promise<void> {
    const webhookSecret = this.configService.get<string>('STRIPE_WEBHOOK_SECRET');

    try {
      const event = this.stripe.webhooks.constructEvent(payload, signature, webhookSecret);

      // Handle the event
      switch (event.type) {
        case 'payment_intent.succeeded':
          const paymentIntent = event.data.object;
          console.log('PaymentIntent was successful:', paymentIntent.id);
          break;
        case 'payment_intent.payment_failed':
          const failedPaymentIntent = event.data.object;
          console.log('PaymentIntent failed:', failedPaymentIntent.id);
          break;
        default:
          console.log(`Unhandled event type: ${event.type}`);
      }
    } catch (err) {
      console.error('Webhook error:', err.message);
      throw new Error('Webhook error');
    }
  }
}