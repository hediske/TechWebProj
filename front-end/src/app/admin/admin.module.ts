import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    OrdersComponent,
    ProductsComponent,
    NavbarComponent,
    RegisterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule
  ],
  providers: [ModalService]
})
export class AdminModule { }
