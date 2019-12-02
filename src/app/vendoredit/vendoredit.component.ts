import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AssetType } from '../asset-type';
import { Vendorcreation } from '../vendorcreation';
import { VendorCreationervice } from '../vendorcreation.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendoredit',
  templateUrl: './vendoredit.component.html',
  styleUrls: ['./vendoredit.component.scss']
})
export class VendoreditComponent implements OnInit {
  vendor: Vendorcreation;
  vendorForm: FormGroup;
  assettypes: Observable<AssetType[]>;

  constructor(private vendorservice: VendorCreationervice, private route: ActivatedRoute, private formBuilder: FormBuilder, private toastr: ToastrService) { }
  id: number;
  pdt: any;
  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.vendorForm = this.formBuilder.group({
      vd_id: [Validators.required],
      vd_name: [Validators.compose([Validators.required])],
      vd_type: 'Supplier',
      vd_atype_id: [Validators.compose([Validators.required])],
      vd_from: [Validators.compose([Validators.required])],
      vd_to: [Validators.compose([Validators.required])],
      vd_addr: [Validators.compose([Validators.required])]
    });
    this.vendorservice.getVendor(this.id).subscribe(x => {
      this.vendor = x;
    });
    this.assettypes = this.vendorservice.getAssetTypes();
  }
  get formControls() {
    return this.vendorForm.controls;

  }
  updateVendor() {

    this.vendor.vd_id = this.id;
    this.vendor.vd_name = this.vendorForm.controls.vd_name.value;
    this.vendor.vd_type = this.vendorForm.controls.vd_type.value;
    this.vendor.vd_atype_id = this.vendorForm.controls.vd_atype_id.value;
    this.vendor.vd_from = this.vendorForm.controls.vd_from.value;
    this.vendor.vd_to = this.vendorForm.controls.vd_to.value;
    this.vendor.vd_addr = this.vendorForm.controls.vd_addr.value;

    this.vendorservice.putVendor(this.id, this.vendor).subscribe(res => {
      this.toastr.success('Vendor Updated');
    });

  }

}
