import { Injectable } from '@angular/core';
import { UtilityServiceService } from './utility-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private utilityService: UtilityServiceService,
    private router: Router
  ) {}
  token!: string;
  getAccessToken(id: string, pass: string): string {
    this.token = btoa(id + ':' + pass);
    return this.token;
  }
  isLogin(): boolean {
    if (this.utilityService.getCookie('token')) {
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    this.utilityService.deleteCookie('token', '');
    if (localStorage.getItem('teamsDetails')) {
      localStorage.removeItem('teamsDetails');
    }
    if (localStorage.getItem('employeList')) {
      localStorage.removeItem('employeList');
    }
    if (sessionStorage.getItem('noNeedToShow')) {
      sessionStorage.removeItem('noNeedToShow');
    }
    this.router.navigate(['/login']);
  }
}
