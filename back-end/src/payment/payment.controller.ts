import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { PaymentService } from './payment.service'; // Correct import path
import { CreatePaymentIntentDto } from '../payment/create-payment-intent.dto'; // Correct import path
import { Request, Response } from 'express';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-payment-intent')
  async createPaymentIntent(@Body() createPaymentIntentDto: CreatePaymentIntentDto) {
    const { amount, currency } = createPaymentIntentDto;
    const clientSecret = await this.paymentService.createPaymentIntent(amount, currency);
    return { clientSecret };
  }

  @Post('webhook')
  async handleWebhook(@Req() request: Request, @Res() response: Response) {
    const payload = request.body;
    const signature = request.headers['stripe-signature'] as string; // Ensure signature is a string

    try {
      await this.paymentService.handleWebhookEvent(payload, signature);
      response.status(200).send('Webhook received');
    } catch (err) {
      response.status(400).send(`Webhook error: ${err.message}`);
    }
  }
}