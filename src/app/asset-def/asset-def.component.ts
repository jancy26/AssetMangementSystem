import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AssetDefService } from '../asset-def.service';
import { AssetDef } from '../asset-def';
import { Observable } from 'rxjs';
import { AssetType } from '../asset-type';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-asset-def',
  templateUrl: './asset-def.component.html',
  styleUrls: ['./asset-def.component.scss']
})
export class AssetDefComponent implements OnInit {


  assetForm: FormGroup;
  asset: AssetDef = new AssetDef();
  id: number;

  assettypes: Observable<AssetType[]>;



  constructor(private formBuilder: FormBuilder, private service: AssetDefService, private route: ActivatedRoute,
    private toastr: ToastrService, private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.assetForm = this.formBuilder.group({
      ad_name: ['', Validators.compose([Validators.required])],
      ad_type_id: ['', Validators.compose([Validators.required])],
      ad_class: ['', Validators.compose([Validators.required])],

    });
    this.assettypes = this.service.getAssetType();
  }
  addAsset() {
    this.asset.ad_name = this.assetForm.controls.ad_name.value;
    this.asset.ad_type_id = this.assetForm.controls.ad_type_id.value;
    this.asset.ad_class = this.assetForm.controls.ad_class.value;

    this.service.addAsset(this.asset).subscribe(res => {
      if (res == 1) {
        this.toastr.success('Added Successfully..!!', 'Success');
      }
      else {
        this.toastr.error("Asset already exist");
      }
    });

    this.ngOnInit();
  }
  Logout() {
    this.authservice.logout();
    this.router.navigateByUrl('login');
  }
}


