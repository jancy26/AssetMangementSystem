import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetDefComponent } from './asset-def/asset-def.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendoreditComponent } from './vendoredit/vendoredit.component';
import { VendoraddComponent } from './vendoradd/vendoradd.component';
import { AuthGuard } from './auth.guard';
import { PurchaselistComponent } from './purchaselist/purchaselist.component';
import { PurchaseManagerComponent } from './purchase-manager/purchase-manager.component';
import { PurchaseeditComponent } from './purchaseedit/purchaseedit.component';
import { AssetmasterlistComponent } from './assetmasterlist/assetmasterlist.component';
import { AssetorderComponent } from './assetorder/assetorder.component';
import { AssetmasterComponent } from './assetmaster/assetmaster.component';
import { AuthService } from './auth.service';





const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'create', component: AssetDefComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: AssetEditComponent, canActivate: [AuthGuard] },
  { path: 'Assets', component: AssetListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'list', component: VendorlistComponent, canActivate: [AuthGuard] },
  { path: 'vdedit/:id', component: VendoreditComponent, canActivate: [AuthGuard] },
  { path: 'addvendor', component: VendoraddComponent, canActivate: [AuthGuard] },
  { path: 'purchaselist', component:PurchaselistComponent, canActivate: [AuthGuard] },
  { path: 'purchasemanager', component: PurchaseManagerComponent, canActivate: [AuthGuard] },
  {path:'Edit/:id',component:PurchaseeditComponent,canActivate:[AuthGuard]},
  {path:'assetmaster/:id',component:AssetmasterComponent,canActivate:[AuthGuard]},
  {path:'masterlist',component:AssetmasterlistComponent,canActivate:[AuthGuard]},
  {path:'masterorderlist',component:AssetorderComponent,canActivate:[AuthGuard]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
