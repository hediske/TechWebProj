import { Component } from '@angular/core';
import { sidebar } from './data/sidebar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  items = sidebar

  panel = "Users"

  setPanel(name: string) {
    this.panel = name
  } 
    
}
 