import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchaseorder } from './purchaseorder';
import { Assetmaster } from './assetmaster';

@Injectable({
  providedIn: 'root'
})
export class AssetmasterService {
  private baseUrl = 'http://localhost:49333/api';
  constructor(private http:HttpClient) { }
  
 getAssetOrders(): Observable<any>{
  return this.http.get(this.baseUrl+'/AssetMasterOrder');
}

getAssetOrder(id:string): Observable<any>{
  return this.http.get(this.baseUrl+'/AssetMasterOrder?ordno='+id);
}

postAsset(asset: Assetmaster){
  return this.http.post(this.baseUrl+'/AssetMaster',asset);
}

updatePurchase(id:number, purchase: Purchaseorder): Observable<any>{
  return this.http.put(this.baseUrl+'/AssetMaster/'+ id, purchase);
}

getMasterList(): Observable<any>{
  return this.http.get(this.baseUrl+'/AssetMaster');
}

}
