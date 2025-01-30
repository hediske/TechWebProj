import { Component } from '@angular/core';
import { AuthService } from '../../user/auth.service';  // Adjust path if needed
import { Router } from '@angular/router';

@Component({
  selector: 'app-logging',  
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';  

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        this.router.navigate(['/admin']);
      },
      (error) => {
        this.errorMessage = 'Invalid username or password';  
      }
    );
  }
}
