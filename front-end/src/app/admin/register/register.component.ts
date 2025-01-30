import { Component } from '@angular/core';
import { AuthService } from '../../user/auth.service'; // Adjust path based on your structure
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  role: string = 'admin';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onRegister() {
    if (this.name && this.email && this.password) {
      this.authService.register(this.name, this.email, this.password, this.role).subscribe({
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
