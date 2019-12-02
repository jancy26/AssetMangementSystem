import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Assetmaster } from '../assetmaster';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AssetmasterService } from '../assetmaster.service';

@Component({
  selector: 'app-assetmasterlist',
  templateUrl: './assetmasterlist.component.html',
  styleUrls: ['./assetmasterlist.component.scss']
})
export class AssetmasterlistComponent implements OnInit {

  masters: Observable<Assetmaster[]>;
  constructor(private authservice:AuthService,private router:Router,private masterservice:AssetmasterService) { }

  ngOnInit() {
     this.reloadData();
  }


  reloadData(){
    this.masters=this.masterservice.getMasterList();
    this.masters.forEach(x=>{
    console.log(x);
    })
  }

  Logout(){
    this.authservice.logout();
    this.router.navigateByUrl('logout');
  }
}


  


