import { Component } from '@angular/core';
import { WalletDetails } from 'src/app/entity/wallet-details';
import { WalletRestServiceService } from 'src/app/service/wallet-rest-service.service';

@Component({
  selector: 'app-wallet-add-funds',
  templateUrl: './wallet-add-funds.component.html',
  styleUrls: ['./wallet-add-funds.component.css']
})
export class WalletAddFundsComponent {
  walletId:number=0;
  amountToAdd:number=0;
  balanceAmount:number;
  errorMsg:string;
  constructor(private walletDetails:WalletDetails, private walletRestService:WalletRestServiceService){}
  

  onAddFund(){
    this.walletDetails.walletId=this.walletId;
    this.walletDetails.amount = this.amountToAdd;
    if(this.walletId && this.amountToAdd){
      this.walletRestService.addFundsToWallet(this.walletDetails).subscribe(
        (data)=>{this.balanceAmount=data;},
        (error)=>{this.errorMsg = error.message;}
      );
    }
  }
}
