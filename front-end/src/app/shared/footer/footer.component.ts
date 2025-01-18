import { Component, OnInit } from '@angular/core';
import { footerLink, footerLinks } from 'src/assets/data/footerlinks';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor(private authService : AuthService){}

  footerLinks : footerLink[] | undefined = undefined;
  anio = new Date().getFullYear();

  isLoggedIn: boolean = false;
  isUser: boolean = false;
  

  checkLogin(){
    if (this.authService.isLoggedIn()){
      this.isLoggedIn = true;
      if(this.authService.getUserRole() === 'user'){
        this.isUser = true;
      }
      else {
        this.isUser = false;
      }
    }
  }


  footerCards : string[] = [
    "american-express.svg",
    "discover.svg",
    "maestro-alt.svg",
    "uatp.svg",
    "cartes-bancaires.svg",
    "elo.svg",
    "maestro.svg",
    "unionpay.svg",
    "dankort.svg",
    "hipercard.svg",
    "visa.svg",
    "diners.svg",
  ]
  
  ngOnInit(): void {
    this.footerLinks = footerLinks
    this.checkLogin()
  }

}
