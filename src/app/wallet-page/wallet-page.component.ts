import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wallet-page',
  templateUrl: './wallet-page.component.html',
  styleUrls: ['./wallet-page.component.css']
})
export class WalletPageComponent {
  constructor(private router:Router){}
  onButtonClick(num:number){
    switch(num){
      case 1: this.router.navigate(["wallet-balance"]); break;
      case 2: this.router.navigate(["wallet-add-funds"]); break;
      case 3: this.router.navigate(["wallet-withdraw"]); break;
      case 4: this.router.navigate(["wallet-transfer"]); break;
    }
    
  }

}
