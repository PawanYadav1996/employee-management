import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-intial-disclaimer-dialoge',
  templateUrl: './intial-disclaimer-dialoge.component.html',
  styleUrls: ['./intial-disclaimer-dialoge.component.scss'],
})
export class IntialDisclaimerDialogeComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<IntialDisclaimerDialogeComponent>
  ) {}
  disableDialge = new EventEmitter<boolean>();
  ngOnInit(): void {}
  close() {
    this.dialogRef.close();
  }
  clickedAccept() {
    this.disableDialge.emit(true);
    this.close();
  }
}
