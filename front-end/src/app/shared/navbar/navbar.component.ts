import { Component, OnInit } from '@angular/core';
import { navLinks, navLink } from 'src/assets/data/navLinks'; 
import { AuthService } from '../../user/auth.service';
import { UserService } from 'src/app/user/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private userService : UserService){}

  navLinks : navLink[] | undefined;
  searchValue : string | undefined = undefined;
  isLoggedIn :boolean = false;
  imgUrl: string = '';
  
  
  /**
   * TODO: ADD a search method here !
   */
  handleSearch(){ 
    if(!this.searchValue || this.searchValue.length < 3) return;
    // TODO: ADD a search method here
  }
  
  checkLogin(){
    if (this.authService.isLoggedIn()){
      this.isLoggedIn = true;
      this.imgUrl = this.userService.getAvatar();
    }
  }
  
  
  ngOnInit(): void {
    this.navLinks = navLinks
    console.log(this.navLinks)
    this.checkLogin()
  }

}
