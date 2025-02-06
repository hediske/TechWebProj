


import { Component, OnInit } from '@angular/core';
import { ProductAdminInterface, productColumns } from './productModel';
import { columnInterface } from 'src/app/shared/table/types/tableInterfaces';
import { ModalService } from '../modal/modal.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements  OnInit {


  BASE_URL = "http://localhost:3000/product"



  constructor(private modalService : ModalService , private http : HttpClient , private fb : FormBuilder , private router: Router) { }


  navigateToAddProduct() {
    this.router.navigate(['/products/add']);
  }

  loading : boolean = false 
  error: string | null = null;
  activeTab: string = 'user';
  prods : ProductAdminInterface[] = []
  columns:  columnInterface[] = []
  userForm!: FormGroup;



  ngOnInit(): void {
    this.columns = productColumns
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      role: [{ value: '', disabled: true }], 
      email: [{ value: '', disabled: true }], 
      phoneNumber: [{ value: '', disabled: true }] 
    });

  
  this.loading = true;
  this.error = null;
  this.http.get<ProductAdminInterface[]>(this.BASE_URL).subscribe({
    next: (data) => {
      this.prods = data;
      this.loading = false;
    },
    error: (err) => {
      this.error = err.message;
      this.loading = false;
    }
  });}
  onSubmit() {
    throw new Error('Method not implemented.');
    }



  datafetcher = (filters: any, page: number, size: number, sort: any): Promise<any> =>{
    const res = firstValueFrom(this.http.get<any>(`${this.BASE_URL}`));
    return res
  }


  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  addModal(userId: string , template:any) {
      const id = userId + '_' + Date.now();
      this.modalService.registerModal(id, "User Details", template);
  }

}
