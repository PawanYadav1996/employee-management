import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityServiceService {
  constructor() {}
  getCookie(id: string) {
    var allcookies = document.cookie;
    let cookiearray = allcookies.split(';');
    for (var i = 0; i < cookiearray.length; i++) {
      let name = cookiearray[i].split('=')[0];
      let value = cookiearray[i].split('=')[1];
      if (id.trim() == name.trim()) return value;
    }
    return null;
  }
  deleteCookie(cname: string, cvalue: string) {
    var d = new Date(0);
    d.setTime(d.getTime());
    var expires = 'expires=' + d.toUTCString();
    document.cookie =
      cname +
      '=' +
      cvalue +
      ';' +
      expires +
      ';domain=' +
      window.location.hostname +
      ';path=/';
  }
  setCookie1(cname: string, cvalue: any, time: any) {
    var d = new Date();
    d.setTime(time * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie =
      cname +
      '=' +
      cvalue +
      ';' +
      expires +
      ';domain=' +
      window.location.hostname +
      ';path=/;';
  }
}
