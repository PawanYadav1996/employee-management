import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeListClass } from '../employeeManagement.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {}
  employeDetails!: EmployeeListClass;
  ngOnInit(): void {
    this.activateRoute.params.subscribe((paramRes) => {
      console.log(paramRes);
      if (localStorage.getItem('employeList')) {
        let employeeList = JSON.parse(
          localStorage.getItem('employeList') || ''
        );
        this.employeDetails = employeeList?.filter((emp: EmployeeListClass) => {
          return emp.employeeId == paramRes['empId'];
        })[0];
        console.log(this.employeDetails);
      }
    });
  }

}
