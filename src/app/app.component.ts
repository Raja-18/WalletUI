import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { WalletRestServiceService } from './service/wallet-rest-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:MenuItem[];
  showPage:number = 0;
  msg= "";
 
  constructor(private walletRestService:WalletRestServiceService, private router:Router){}

  ngOnInit(){
    this.items = [
      {
          label:'wallet',
          icon:'pi pi-star',
          routerLink: "wallet-page",
          //command:()=>this.onClickWallet(1)
      },
      {
        label:'login',
        icon:'pi pi-user',
        routerLink: "login",
        //command: ()=>this.onClickWallet(2),
        // disabled:true
      }
    ]
  }

  onClickWallet(pageNo:number){
    this.showPage=pageNo;
    this.walletRestService.getGreetMessage().subscribe(
      (data)=>{this.msg=data;}
    );
  }

  adminClick(){
    this.router.navigate(['wallet-admin']);
  }



}
