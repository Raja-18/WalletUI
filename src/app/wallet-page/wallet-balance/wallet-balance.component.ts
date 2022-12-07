import { Component } from '@angular/core';
import { WalletRestServiceService } from 'src/app/service/wallet-rest-service.service';



@Component({
  selector: 'app-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.css']
})
export class WalletBalanceComponent {
  walletId:number;
  balance="";

  constructor(private walletRestService:WalletRestServiceService){}
  onGetBalance(){
    if(this.walletId){
      this.walletRestService.getBalancebyId(this.walletId).subscribe(
        (data)=>{this.balance=data;}
      );
    }
  }

}
