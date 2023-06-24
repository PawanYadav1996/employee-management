import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeListClass } from 'src/app/EmployeeManagement/employeeManagement.model';
@Injectable({
  providedIn: 'root',
})
export class SetAndGetEmployeeDetailsService {
  constructor() {}
  private defaulEmployeetList!: EmployeeListClass;

  public shareableEmployeeList = new BehaviorSubject<EmployeeListClass>(
    this.defaulEmployeetList
  );
  getEmployeeListMethod() {
    return this.shareableEmployeeList.asObservable();
  }
  updateEmployeeList(employee: EmployeeListClass) {
    let Employeebody: EmployeeListClass = new EmployeeListClass();
    if (employee?.employeeId) {
      Employeebody.employeeId = employee.employeeId;
      Employeebody.designation = employee.designation;
      Employeebody.dob = employee.dob;
      Employeebody.email = employee.email;
      Employeebody.gender = employee.gender;
      Employeebody.name = employee.name;
      Employeebody.firstName = employee.firstName;
      Employeebody.lastName = employee.lastName;
      Employeebody.salary = employee.salary;
      Employeebody.role = employee.role;
      Employeebody.team = employee.team;
      Employeebody.phoneNumber = employee.phoneNumber;
      this.shareableEmployeeList.next(Employeebody);
    }
  }
}
