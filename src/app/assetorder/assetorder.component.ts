import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchaseorder } from '../purchaseorder';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetmasterService } from '../assetmaster.service';

@Component({
  selector: 'app-assetorder',
  templateUrl: './assetorder.component.html',
  styleUrls: ['./assetorder.component.scss']
})
export class AssetorderComponent implements OnInit {
  purchases: Observable<Purchaseorder[]>;
  constructor(private authservice: AuthService, private router: Router, private toastr: ToastrService, private assetservice: AssetmasterService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.purchases = this.assetservice.getAssetOrders();
  }

  Logout() {
    this.authservice.logout();
    this.router.navigateByUrl('logout');
  }



}


