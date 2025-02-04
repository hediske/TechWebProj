import { Component, OnInit } from '@angular/core';
import { UserAdminInterface, userColumns } from './userModel';
import { columnInterface } from 'src/app/shared/table/types/tableInterfaces';
import { ModalService } from '../modal/modal.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements  OnInit {
  BASE_URL = "http://localhost:3000/user"



  constructor(private modalService : ModalService , private http : HttpClient , private fb : FormBuilder) { }


  loading : boolean = false 
  error: string | null = null;
  activeTab: string = 'user';
  users : UserAdminInterface[] = []
  columns:  columnInterface[] = []
  userForm!: FormGroup;
  selectedUser : any;


  ngOnInit(): void {
    this.columns = userColumns
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      role: [{ value: '', disabled: true }], 
      email: [{ value: '', disabled: true }], 
      phoneNumber: [{ value: '', disabled: true }] 
    });
  }

  onSubmit() {
    throw new Error('Method not implemented.');
    }



  datafetcher = (filters: any, page: number, size: number, sort: any): Promise<any> =>{
    console.log(this.http)
    return firstValueFrom(this.http.get<any>(`${this.BASE_URL}?page=${page}&limit=${size}`));
  }


  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  addModal(userId: string , template:any , user: any) {
      this.selectedUser = user
      console.log(user)


      if (this.selectedUser) {
        this.userForm.patchValue({
          firstName: this.selectedUser.firstName,
          lastName: this.selectedUser.lastName,
          address: this.selectedUser.address,
          role: this.selectedUser.role,
          email: this.selectedUser.email,
          phoneNumber: this.selectedUser.phoneNumber
        });
      }
      const id = userId + '_' + Date.now();
      this.modalService.registerModal(id, "User Details", template);
  }

}
