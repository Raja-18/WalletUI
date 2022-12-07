import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class WalletDetails {
    public walletId!:number;
    public walletUser!:string;
    public amount!:number;
    public walletPassword!:string;

    constructor(){}
}
