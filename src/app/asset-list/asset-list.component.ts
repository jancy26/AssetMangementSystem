import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetDef } from '../asset-def';
import { AssetDefService } from '../asset-def.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  asset: Observable<AssetDef>;
  assets: Observable<AssetDef[]>;
  uname: string;

  constructor(private assetdefService: AssetDefService, private router: Router, private authservice: AuthService,private toastr:ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.asset = this.assetdefService.getAssetList();
    this.assets = this.assetdefService.getAssetList();

  }

  deleteAsset(id: number) {
    if (confirm('Do you want to delete this record?')) {
      this.assetdefService.deleteAsset(id).subscribe(data => {
        this.toastr.success('Deleted successfully..!!','success');
        console.log(data);
        this.reloadData();
      })
    }


  }
  search(name: string) {

    if (name == "") {
      this.assets = this.assetdefService.getAssetList();

    }
    else {
      this.assets = this.assetdefService.searchAsset(name);
    }
  }

  Logout() {
    this.authservice.logout();
    this.router.navigateByUrl("login");
  }

}
