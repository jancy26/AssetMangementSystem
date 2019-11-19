import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetDefComponent } from './asset-def/asset-def.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'create',component:AssetDefComponent},
  {path:'Edit/:id',component:AssetEditComponent},
  {path:'Assets',component:AssetListComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
