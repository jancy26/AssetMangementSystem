import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendorcreation } from './vendorcreation';


@Injectable({
  providedIn: 'root'
})
export class VendorCreationervice {
  private baseUrl = 'http://localhost:49333/api';
  constructor(private http: HttpClient) { }
  getVendorList(): Observable<any> {
    return this.http.get(this.baseUrl + '/VendorCreation');
  }
  deleteVendor(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/VendorCreation/' + id);
  }
  addVendor(vendor: Vendorcreation) {
    return this.http.post(this.baseUrl + '/VendorCreation', vendor);
  }
  getAssetType(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetType/' + id);
  }
  getAssetTypes(): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetType');
  }
  putVendor(id: number, vendor: Vendorcreation): Observable<any> {
    return this.http.put(this.baseUrl + '/VendorCreation/' + id, vendor);
  }
  getVendor(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/VendorCreation/' + id);
  }
}