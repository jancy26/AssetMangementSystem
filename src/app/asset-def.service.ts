import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetDef } from './asset-def';
import { AssetDefComponent } from './asset-def/asset-def.component';

@Injectable({
  providedIn: 'root'
})
export class AssetDefService {
  private baseUrl = 'http://localhost:49333/api';

  constructor(private http: HttpClient) { }
  getAssetList(): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetDef');
  }
  deleteAsset(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/AssetDef/' + id);
  }
  getAsset(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetDef/' + id);
  }
  updateAsset(id: number, asset: AssetDef) {
    return this.http.put(this.baseUrl + '/AssetDef/' + id, asset);
  }
  addAsset(asset: AssetDef) {
    return this.http.post(this.baseUrl + '/AssetDef', asset);
  }
  getAssetType(): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetType');
  }
  getAssetTypes(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetType/' + id);
 }
  searchAsset(ad_name: string): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetDef?name=' + ad_name);
 }


}


