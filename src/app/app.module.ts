import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
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
 
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    AssetDefComponent,
    AssetListComponent,
    AssetEditComponent,
    AdminComponent,
    PurchaseManagerComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
