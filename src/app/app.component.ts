import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/_services/authentication.service';
import { IntialDisclaimerDialogeComponent } from './commonComponents/intial-disclaimer-dialoge/intial-disclaimer-dialoge.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'employee-management-system';
  constructor(
    public authentication: AuthenticationService,
    private dialoge: MatDialog
  ) {}
  ngOnInit(): void {
    this.setContainerHt();
    if (!sessionStorage.getItem('noNeedToShow')) {
      this.openDisclaimerDialoge();
    }
  }
  setContainerHt() {
    let height = window.screen.height;
    let bgDiv = document.getElementById('bgDiv') as HTMLElement;
    bgDiv.style.minHeight = height - 60 + 'px';
  }
  openDisclaimerDialoge() {
    const disclamer = this.dialoge.open(IntialDisclaimerDialogeComponent, {
      disableClose: true,
      width: '75%',
    });
    const subDialgoe = disclamer.componentInstance.disableDialge.subscribe(
      (res) => {
        if (res) {
          sessionStorage.setItem('noNeedToShow', String(res));
        }
      }
    );
  }
}
