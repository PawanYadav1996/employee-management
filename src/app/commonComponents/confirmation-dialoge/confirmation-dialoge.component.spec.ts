import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogeComponent } from './confirmation-dialoge.component';

describe('ConfirmationDialogeComponent', () => {
  let component: ConfirmationDialogeComponent;
  let fixture: ComponentFixture<ConfirmationDialogeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationDialogeComponent]
    });
    fixture = TestBed.createComponent(ConfirmationDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
