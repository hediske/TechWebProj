import { Component } from '@angular/core';
import { AuthService } from '../../user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        const role = this.authService.getUserRole();
        role=='admin' ? this.router.navigate(['/admin']) : this.router.navigate(['/products']) 
      },
      (error) => {
        this.errorMessage = 'Invalid email or password';
      }
    );
  }
}