import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetDef } from '../asset-def';
import { AssetDefService } from '../asset-def.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
asset:Observable<AssetDef>;
assets:Observable<AssetDef[]>;
uname:string;
  constructor(private assetdefService:AssetDefService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData()
  {
    this.asset=this.assetdefService.getAssetList();
    this.assets=this.assetdefService.getAssetList();

  }
  addAsset()
  {
    
  }
  deleteAsset(id:number){
    if(confirm('Do you want to delete this record?'))
    {
      this.assetdefService.deleteAsset(id).subscribe(data=>{
      console.log(data);
    })
  }
  

}
  
}
