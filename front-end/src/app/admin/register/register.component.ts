import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  address: string = '';
  email: string = '';
  password: string = '';
  role: string = 'admin';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private registerService: RegisterService, private router: Router) { }

  onRegister() {
    if (this.firstName && this.lastName && this.phoneNumber && this.address && this.email && this.password) {
      this.registerService.register(this.firstName, this.lastName, this.phoneNumber, this.address, this.email, this.password, this.role).subscribe({
        next: (response) => {
          this.successMessage = 'Registration successful!';
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'All fields are required.';
    }
  }
}