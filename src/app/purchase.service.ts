import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchaseorder } from './purchaseorder';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private baseUrl = 'http://localhost:49333/api';

  constructor(private http: HttpClient) { }
  getpurchaseList(): Observable<any> {
    return this.http.get(this.baseUrl + '/PurchaseOrder');
  }
  postpurchase(purchase: Purchaseorder) {
    return this.http.post(this.baseUrl + '/PurchaseOrder', purchase);
  }
  getAssetTypes(name: string): Observable<any> {
    return this.http.get(this.baseUrl + '/PurchaseOrder?name=' + name);
  }
  getallAssetTypes(): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetType');
  }
  getAsset(name: string): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetDef?ad_name=' + name);
  }
  getVendor(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/PurchaseOrder/' + id);
  }
  getPurchase(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/PurchaseEdit/' + id);
  }
  updatePurchase(id: number, purchase: Purchaseorder): Observable<any> {
    return this.http.put(this.baseUrl + '/PurchaseEdit/' + id, purchase);
  }
  cancelPurchase(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/PurchaseOrder/' + id);
  }
}
