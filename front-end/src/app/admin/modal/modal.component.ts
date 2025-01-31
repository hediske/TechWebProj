import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(private modalService:ModalService) { }
  modals:{ id: string; title: string; template:any; }[]=[] ;
  
  ngOnInit(): void {
    this.modalService.modalChanges.subscribe((modals) => {
      this.modals = modals;
    })
  }

  closeModal(id:string){
    this.modalService.closeModal(id);
  }
}
