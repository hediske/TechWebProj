import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UserModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
