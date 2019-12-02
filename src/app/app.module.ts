import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetDefComponent } from './asset-def/asset-def.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AdminComponent } from './admin/admin.component';
import { PurchaseManagerComponent } from './purchase-manager/purchase-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { UserComponent } from './user/user.component';
import { VendoraddComponent } from './vendoradd/vendoradd.component';
import { VendoreditComponent } from './vendoredit/vendoredit.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { PurchaselistComponent } from './purchaselist/purchaselist.component';
import { PurchaseeditComponent } from './purchaseedit/purchaseedit.component';
import { AssetmasterlistComponent } from './assetmasterlist/assetmasterlist.component';

import { AssetmasterComponent } from './assetmaster/assetmaster.component';
import { AssetorderComponent } from './assetorder/assetorder.component';



@NgModule({
  declarations: [
    AppComponent,
    AssetDefComponent,
    AssetListComponent,
    AssetEditComponent,
    AdminComponent,
    PurchaseManagerComponent,
    LoginComponent,
    UserComponent,
    VendoraddComponent,
    VendoreditComponent,
    VendorlistComponent,
    PurchaselistComponent,
    PurchaseeditComponent,
    AssetmasterlistComponent,
    AssetmasterComponent,
    AssetorderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
