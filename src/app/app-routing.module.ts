import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from './auth/user-auth.guard';
import { WalletAdminComponent } from './wallet-admin/wallet-admin.component';
import { WalletLoginComponent } from './wallet-login/wallet-login.component';
import { WalletAddFundsComponent } from './wallet-page/wallet-add-funds/wallet-add-funds.component';
import { WalletBalanceComponent } from './wallet-page/wallet-balance/wallet-balance.component';
import { WalletFundTransferComponent } from './wallet-page/wallet-fund-transfer/wallet-fund-transfer.component';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { WalletWithdrawComponent } from './wallet-page/wallet-withdraw/wallet-withdraw.component';

const routes: Routes = [
  {path:'wallet-page', component:WalletPageComponent},
  {path:'login', component:WalletLoginComponent},
  {path:'wallet-admin', component:WalletAdminComponent},
  {path:'wallet-balance', component:WalletBalanceComponent, canActivate:[UserAuthGuard]},
  {path:'wallet-add-funds', component:WalletAddFundsComponent},
  {path:'wallet-withdraw', component:WalletWithdrawComponent},
  {path:'wallet-transfer', component:WalletFundTransferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
