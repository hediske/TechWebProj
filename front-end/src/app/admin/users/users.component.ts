import { Component, OnInit } from '@angular/core';
import { userAdminData, UserAdminInterface, userColumns } from './userModel';
import { columnInterface } from 'src/app/shared/table/types/tableInterfaces';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements  OnInit {
setActiveTab(tab: string) {
  this.activeTab = tab;
}
addModal(userId: string , template:any) {
    const id = userId + '_' + Date.now();
    this.modalService.registerModal(id, "User Details", template);
}

  constructor(private modalService : ModalService) { }

  loading : boolean = false 
  error: string | null = null;
  activeTab: string = 'user';

  users : UserAdminInterface[] = []
  columns:  columnInterface[] = []
  ngOnInit(): void {
    this.users= userAdminData
    this.columns = userColumns
  }


}
