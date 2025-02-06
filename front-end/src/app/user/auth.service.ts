import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUserRole() {
    return 'admin';
  }

  register = () =>{

  }

  login = () => {

  }

  logout = () => {

  }

  isLoggedIn : () => boolean = () => {
    return true;
    //TODO: to implement later
  }


  constructor() { }
}
