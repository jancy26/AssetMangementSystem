import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PurchaseService } from '../purchase.service';
import { Purchaseorder } from '../purchaseorder';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-purchaseedit',
  templateUrl: './purchaseedit.component.html',
  styleUrls: ['./purchaseedit.component.scss']
})
export class PurchaseeditComponent implements OnInit {
  purchase: Purchaseorder = new Purchaseorder();
  purchaseForm: FormGroup;
  id: number;

  constructor(private formbuilder: FormBuilder, private toastr: ToastrService, private purchaseservice: PurchaseService, private router: Router, private route: ActivatedRoute, private authservice: AuthService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    this.purchaseForm = this.formbuilder.group({
      pd_id: 'null',
      pd_order_no: ['', Validators.compose([Validators.required])],
      assetname: ['', Validators.compose([Validators.required])],
      assettype: ['', Validators.compose([Validators.required])],
      pd_qty: ['', Validators.compose([Validators.required])],
      vendorname: ['', Validators.compose([Validators.required])],
      pd_status: ['', Validators.compose([Validators.required])],
      pd_odatestr: ['', Validators.compose([Validators.required])],
      pd_pdatestr: ['', Validators.compose([Validators.required])]
    });

    this.purchaseservice.getPurchase(this.id).subscribe(x => {
      this.purchase = x;
    })

  }
  get formControls() {
    return this.purchaseForm.controls;
  }

  updatePurchase() {
    this.purchase.pd_id = this.id;
    this.purchase.pd_odate = this.purchaseForm.controls.pd_odatestr.value;
    this.purchase.pd_pdate = this.purchaseForm.controls.pd_pdatestr.value;
    this.purchase.pd_status = 'Consignment Received';
    this.purchase.pd_order_no = this.purchaseForm.controls.pd_order_no.value;
    this.purchase.pd_ad_id = this.purchase.pd_ad_id;
    this.purchase.pd_qty = this.purchase.pd_qty;
    this.purchase.pd_type_id = this.purchase.pd_type_id;
    this.purchase.pd_vendor_id = this.purchase.pd_vendor_id;
    if (this.purchase.pd_odate < this.purchase.pd_pdate) {
      this.purchaseservice.updatePurchase(this.id, this.purchase).subscribe(res => {
        this.toastr.success('Purchase Updated');
        this.router.navigateByUrl("purchaselist");
      });
    }
    else {
      this.toastr.warning('Purchase date must be less than Delivery date');
    }

  }

 

  }







