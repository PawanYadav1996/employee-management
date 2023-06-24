import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsEmployeeDetailsComponent } from './teams-employee-details.component';

describe('TeamsEmployeeDetailsComponent', () => {
  let component: TeamsEmployeeDetailsComponent;
  let fixture: ComponentFixture<TeamsEmployeeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsEmployeeDetailsComponent]
    });
    fixture = TestBed.createComponent(TeamsEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
