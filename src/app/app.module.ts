import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { WalletAddFundsComponent } from './wallet-page/wallet-add-funds/wallet-add-funds.component';
import { WalletFundTransferComponent } from './wallet-page/wallet-fund-transfer/wallet-fund-transfer.component';
import { WalletWithdrawComponent } from './wallet-page/wallet-withdraw/wallet-withdraw.component';
import { WalletLoginComponent } from './wallet-login/wallet-login.component';
import { WalletAdminComponent } from './wallet-admin/wallet-admin.component';
import { WalletBalanceComponent } from './wallet-page/wallet-balance/wallet-balance.component';

import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {InputNumberModule} from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { WalletRegisterComponent } from './wallet-register/wallet-register.component';


@NgModule({
  declarations: [
    AppComponent,
    WalletPageComponent,
    WalletAddFundsComponent,
    WalletFundTransferComponent,
    WalletWithdrawComponent,
    WalletLoginComponent,
    WalletAdminComponent,
    WalletBalanceComponent,
    WalletRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule,
    FormsModule,
    InputNumberModule,
    PanelModule,
    InputTextModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
