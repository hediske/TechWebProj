import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAvatar(): string {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
