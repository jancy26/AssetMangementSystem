import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable, Subscribable, Subscriber } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  login: Login = new Login();
  logins: Observable<Login[]>;
  ErrorMessage: string;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.logins = this.authService.getLoginDet();
    this.loginForm = this.formBuilder.group({
      uname: ['', Validators.compose([Validators.required])],
      pass: ['', [Validators.required]]
    });

  }

  get formControls() {
    return this.loginForm.controls;
  }
  loginUser() {
    this.login.uname = this.loginForm.controls.uname.value;
    this.login.pass = this.loginForm.controls.pass.value;
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.toastr.error('Enter username and passsword');
      return;
    }
    this.authService.Login(this.login).subscribe(x => {
      x.forEach(element => {
        //  this.login.utype=element["utype"];
        console.log(this.login.utype);
        if (element["utype"] == 'Admin') {
          localStorage.setItem('ACCESS_TOKEN', element["uname"]);
          this.router.navigateByUrl('admin');
          this.toastr.success('Login Successfull..!!');

        }
        else {
          localStorage.setItem('ACCESS_TOKEN', element["uname"]);
          this.router.navigateByUrl('user');
          this.toastr.success('Login Successfull..!!');

        }

      });
      //this.ErrorMessage="Invalid username or password"
      // console.log(this.login.utype);
    });
  }
}