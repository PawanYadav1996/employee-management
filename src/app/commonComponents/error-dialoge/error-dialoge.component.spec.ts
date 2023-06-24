import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialogeComponent } from './error-dialoge.component';

describe('ErrorDialogeComponent', () => {
  let component: ErrorDialogeComponent;
  let fixture: ComponentFixture<ErrorDialogeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorDialogeComponent]
    });
    fixture = TestBed.createComponent(ErrorDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
