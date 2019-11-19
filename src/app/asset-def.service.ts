import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetDef } from './asset-def';
import { AssetDefComponent } from './asset-def/asset-def.component';

@Injectable({
  providedIn: 'root'
})
export class AssetDefService {
  private baseUrl='http://localhost:49333/api';

  constructor(private http:HttpClient) { }
  getAssetList(): Observable<any> {
    return this.http.get(this.baseUrl + '/asset_def');
  }
  deleteAsset(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/asset_def/'+id);
  }
  getAsset(id: number):Observable<any>
  {
    return this.http.get(this.baseUrl+'/asset_def/'+id);
  }
  updateAsset(id: number,asset: AssetDef)
  {
    return this.http.put(this.baseUrl+'/asset_def/'+id,AssetDef);
  }
  addAsset(asset:AssetDefComponent)
  {
    return this.http.post(this.baseUrl+'/asset_def',asset);
  }
  searchAsset(asset:AssetDefComponent)
  {
    return this.http.post(this.baseUrl+'/asset_def',asset);
  }


}


