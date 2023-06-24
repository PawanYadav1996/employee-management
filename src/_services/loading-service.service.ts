import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingServiceService {
  constructor() {}

  isLoading = new Subject<boolean>();

  showLoading() {
    console.log('start loading....');
    this.isLoading.next(true);
  }

  hideLoading() {
    console.log('loading ended!!!');
    this.isLoading.next(false);
  }
}
