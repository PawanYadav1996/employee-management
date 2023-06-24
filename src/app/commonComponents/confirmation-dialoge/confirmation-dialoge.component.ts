import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialoge',
  templateUrl: './confirmation-dialoge.component.html',
  styleUrls: ['./confirmation-dialoge.component.scss'],
})
export class ConfirmationDialogeComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  yesClicked = new EventEmitter<boolean>();
  ngOnInit(): void {}
  close() {
    this.yesClicked.emit(false);
    this.dialogRef.close(true);
  }
  clickedYes() {
    this.yesClicked.emit(true);
    this.dialogRef.close(true);
  }
}
