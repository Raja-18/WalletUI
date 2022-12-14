import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WalletDetails } from '../entity/wallet-details';
import { LoginService } from '../service/login-service';
import { WalletRestServiceService } from '../service/wallet-rest-service.service';


@Component({
  selector: 'app-wallet-login',
  templateUrl: './wallet-login.component.html',
  styleUrls: ['./wallet-login.component.css']
})
export class WalletLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted =  false;
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
    this.walletDetails.walletId = JSON.parse(JSON.stringify(this.loginForm.value)).login;
    this.walletDetails.walletPassword = JSON.parse(JSON.stringify(this.loginForm.value)).password;
    this.walletRestservice.loginMethod(this.walletDetails).subscribe(
      (data)=>{ this.loginService.setLoginStatus(data);}
    );
    
    if(this.loginService.getLoginStatus()){
      alert("login success");
    }
    else{
      alert("login fail");
    }
    
  }
}
