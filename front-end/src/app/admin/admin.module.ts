import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { LoggingComponent } from './logging/logging.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    OrdersComponent,
    LoggingComponent,
    ProductsComponent,
    NavbarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ModalService]
})
export class AdminModule { }
