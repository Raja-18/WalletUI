import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WalletDetails } from '../entity/wallet-details';
import { LoginService } from '../service/login-service';
import { WalletRestServiceService } from '../service/wallet-rest-service.service';

@Component({
  selector: 'app-wallet-register',
  templateUrl: './wallet-register.component.html',
  styleUrls: ['./wallet-register.component.css']
})
export class WalletRegisterComponent implements OnInit {
  loginForm: FormGroup;
  submitted =  false;
  walletResponse:WalletDetails[] = [];
  constructor(private walletDetails:WalletDetails, private walletRestservice:WalletRestServiceService, private loginService:LoginService){};
    

  ngOnInit(){
    this.loginForm = new FormGroup(
      {
        'login': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required)
      }
    );
  }

  onSubmit(){
    this.submitted = true;
    this.walletDetails.walletUser = JSON.parse(JSON.stringify(this.loginForm.value)).userName;
    this.walletDetails.walletPassword = JSON.parse(JSON.stringify(this.loginForm.value)).password;
    this.walletDetails.amount = JSON.parse(JSON.stringify(this.loginForm.value)).amount;
    this.walletRestservice.walletRegister(this.walletDetails).subscribe(
      (data)=>{ this.walletDetails=data;}
    );
    
    if(this.loginService.getLoginStatus()){
      alert("login success");
    }
    else{
      alert("login fail");
    }
    
  }
}
