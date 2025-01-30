import { Component, OnInit } from '@angular/core';
import { userAdminData, UserAdminInterface } from './userModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements  OnInit {

  users : UserAdminInterface[] = []
  ngOnInit(): void {
    this.users= userAdminData
  }

  
  

}
