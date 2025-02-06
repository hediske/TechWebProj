import { Component, Input } from '@angular/core';
import { AuthService } from '../../user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
setDashboard() {
  this.title = "Dashboard";
  this.router.navigate(['/']);
}
  @Input() title: string = "Dashboard";

  constructor(private authService: AuthService, private router:Router) {}

  logout() {
    this.authService.logout();
  }
}