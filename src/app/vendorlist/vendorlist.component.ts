import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { VendorCreationervice } from '../vendorcreation.service';
import { Vendorcreation } from '../vendorcreation';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {

  vendor: Observable<Vendorcreation>;
  vendors: Observable<Vendorcreation[]>;

  constructor(private vendorService: VendorCreationervice, private router: Router, private toastr: ToastrService) { }


  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.vendor = this.vendorService.getVendorList();
    this.vendors = this.vendorService.getVendorList();

  }
  deleteVendor(id: number) {
    if (confirm('Do you want to delete this record?')) {
      this.vendorService.deleteVendor(id).subscribe(data => {
        this.toastr.success('Deletion Successfully..!!','success');
        console.log(data);
        this.reloadData();
      })
    }
  }
}