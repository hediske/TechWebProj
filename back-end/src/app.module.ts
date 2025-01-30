import { Module } from '@nestjs/common';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { ConfigModule } from '@nestjs/config';
import { PaymentModule } from './payment/payment.module'; // Ensure this import is correct

@Module({
  imports: [PaymentModule], // Ensure PaymentModule is imported
})
export class AppModule {} // Ensure AppModule is exported