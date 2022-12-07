import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WalletDetails } from '../entity/wallet-details';

@Injectable({
  providedIn: 'root'
})
export class WalletRestServiceService {

  constructor(private httpClient:HttpClient) { }

  public getGreetMessage():Observable<any>{
    return this.httpClient.get("http://localhost:8080/",{responseType:"text"});
  }

  public getBalancebyId(walletId:number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/wallet-balance/"+walletId,{responseType:"text"});
  }

  public addFundsToWallet(wallet:WalletDetails):Observable<any>{
    return this.httpClient.patch("http://localhost:8080/wallet-add-funds",wallet,{responseType:"text"});
  }
}
