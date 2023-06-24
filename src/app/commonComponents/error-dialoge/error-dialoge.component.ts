import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialoge',
  templateUrl: './error-dialoge.component.html',
  styleUrls: ['./error-dialoge.component.scss'],
})
export class ErrorDialogeComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ErrorDialogeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}
  close() {
    this.dialogRef.close(true);
  }
}
