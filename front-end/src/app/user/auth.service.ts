import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  register = () =>{

  }

  login = () => {

  }

  logout = () => {


  }

  isLoggedIn : () => boolean = () => {
    return false;
    //TODO: to implement later
  }


  constructor() { }
}
