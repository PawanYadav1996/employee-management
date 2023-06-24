import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntialDisclaimerDialogeComponent } from './intial-disclaimer-dialoge.component';

describe('IntialDisclaimerDialogeComponent', () => {
  let component: IntialDisclaimerDialogeComponent;
  let fixture: ComponentFixture<IntialDisclaimerDialogeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntialDisclaimerDialogeComponent]
    });
    fixture = TestBed.createComponent(IntialDisclaimerDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
