import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faUserCircle,
  faLock,
  faEyeSlash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/_services/authentication.service';
import { UtilityServiceService } from 'src/_services/utility-service.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private util: UtilityServiceService,
    private auth: AuthenticationService
  ) {}
  loginForm: FormGroup = this.fb.group({
    userid: ['', [Validators.required, Validators.email]], //, Validators.email
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  faUserCircle = faUserCircle;
  faLock = faLock;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  hide = true;
  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (this.auth.isLogin()) {
      this.router.navigate(['/employee/list']);
    } else {
      this.showForm = true;
    }
  }
  setContainerHt() {
    let height = window.innerHeight;
    let bgDiv = document.getElementById('bgDiv') as HTMLElement;
    bgDiv.style.minHeight = height + 'px';
    let alignment = document.getElementById('alignment-login') as HTMLElement;
    let marginTopOrBottom = (height - alignment.clientHeight) / 2;
    if (marginTopOrBottom > 0) {
      alignment.style.marginTop = marginTopOrBottom + 'px';
    }
  }
  ngAfterViewInit() {
    // this.auth.isOnLoginPage = true;
  }
  submitted = false;
  get form() {
    return this.loginForm.controls;
  }
  trimEmailValue() {
    let id = this.form['userid'].value;
    this.form['userid'].setValue(id.trim());
  }
  trimPasswordValue() {
    let pass = this.form['password'].value;
    this.form['password'].setValue(pass.trim());
  }
  showForm: boolean = false;
  eyeClass: any = faEyeSlash;
  password_field = 'password';
  eyeBackgroundCss: string = 'toggle-eye-css';
  toggleEye() {
    if (this.password_field == 'password') {
      this.password_field = 'text';
      this.eyeClass = faEye;
    } else {
      this.password_field = 'password';
      this.eyeClass = faEyeSlash;
    }
  }
  eyeBackground() {
    this.eyeBackgroundCss = 'toggle-eye-css-focus';
  }
  loginWithPassword() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    let token: string = this.auth.getAccessToken(
      this.form['userid'].value,
      this.form['password'].value
    );
    this.util.setCookie1('token', token, 1688291120);
    this.router.navigate(['/employee/list']);
  }
}
