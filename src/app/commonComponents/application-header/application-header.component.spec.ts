import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationHeaderComponent } from './application-header.component';

describe('ApplicationHeaderComponent', () => {
  let component: ApplicationHeaderComponent;
  let fixture: ComponentFixture<ApplicationHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationHeaderComponent]
    });
    fixture = TestBed.createComponent(ApplicationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
