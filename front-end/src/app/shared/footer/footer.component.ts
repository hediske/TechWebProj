import { Component, OnInit } from '@angular/core';
import { footerLink, footerLinks } from 'src/assets/data/footerlinks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  footerLinks : footerLink[] | undefined = undefined;
  anio = new Date().getFullYear();
  
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
  }

}
