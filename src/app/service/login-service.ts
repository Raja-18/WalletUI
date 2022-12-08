import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class LoginService {
    loginStatus:boolean = false;

    constructor(){}

    public getLoginStatus():boolean{
        return this.loginStatus;
    }

    public setLoginStatus(status:boolean){
        this.loginStatus=status;
    }
}
