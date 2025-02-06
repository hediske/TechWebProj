import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserModule } from '../user/user.module';
import { TableComponent } from './table/table.component';
import { CustomSectionComponent } from './table/custom-section/custom-section.component';
import { FilterSectionComponent } from './table/filter-section/filter-section.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PaginatorComponent } from './table/paginator/paginator.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TableComponent,
    CustomSectionComponent,
    FilterSectionComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UserModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    TableComponent,
  ]
})
export class SharedModule { }
