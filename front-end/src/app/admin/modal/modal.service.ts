import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modals: {id: string, title: string, template: any }[] = [];
  private modalState = new BehaviorSubject<{ id: string; title: string; template: any }[]>([]);
  modalChanges = this.modalState.asObservable();

  closeModal(id:string) {
    this.modals = this.modals.filter(modal => modal.id !== id);
    this.modalState.next(this.modals);
    console.log(this.modals);
  }


  registerModal(id: string,title: string, template: any) {
    this.modals.push({id, title, template});
    this.modalState.next(this.modals);
    console.log(this.modals);
  }
}
