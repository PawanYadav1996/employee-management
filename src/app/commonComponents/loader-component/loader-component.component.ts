import { Component, OnInit } from '@angular/core';
import { LoadingServiceService } from 'src/_services/loading-service.service';

@Component({
  selector: 'app-loader-component',
  templateUrl: './loader-component.component.html',
  styleUrls: ['./loader-component.component.scss'],
})
export class LoaderComponentComponent implements OnInit {
  constructor(private loadingService: LoadingServiceService) {
    this.loadingService.isLoading.subscribe((res) => {
      this.isLoading = res;
    });
  }
  isLoading: boolean = false;
  ngOnInit(): void {}
}
