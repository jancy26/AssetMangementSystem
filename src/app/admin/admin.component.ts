import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router, private formbuilder: FormBuilder, private locationstratergy: LocationStrategy) { }

  ngOnInit() {
    history.pushState(null, null, window.location.href);
    this.locationstratergy.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }

}
