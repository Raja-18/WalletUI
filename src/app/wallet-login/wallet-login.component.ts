import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WalletDetails } from '../entity/wallet-details';


@Component({
  selector: 'app-wallet-login',
  templateUrl: './wallet-login.component.html',
  styleUrls: ['./wallet-login.component.css']
})
export class WalletLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  
  constructor(private walletDetails:WalletDetails){};
    

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
    //this.walletDetails.walletId = this.loginForm.value;
    //alert(JSON.stringify(this.loginForm.value));
    //alert(JSON.parse(JSON.stringify(this.loginForm.value)).password);
    this.walletDetails.walletId = JSON.parse(JSON.stringify(this.loginForm.value)).login;
    this.walletDetails.walletPassword = JSON.parse(JSON.stringify(this.loginForm.value)).password;

    alert(this.walletDetails.walletId+" "+this.walletDetails.walletPassword);
  }
}
