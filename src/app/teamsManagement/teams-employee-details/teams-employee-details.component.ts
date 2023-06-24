import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeListClass } from 'src/app/EmployeeManagement/employeeManagement.model';

@Component({
  selector: 'app-teams-employee-details',
  templateUrl: './teams-employee-details.component.html',
  styleUrls: ['./teams-employee-details.component.scss'],
})
export class TeamsEmployeeDetailsComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {}
  employeDetails!: EmployeeListClass;
  teamId!: string;
  ngOnInit(): void {
    this.activateRoute.params.subscribe((paramRes) => {
      console.log(paramRes);
      if (paramRes) {
        this.teamId = paramRes['teamId'];
        if (localStorage.getItem('employeList')) {
          let employeeList = JSON.parse(
            localStorage.getItem('employeList') || ''
          );
          this.employeDetails = employeeList?.filter(
            (emp: EmployeeListClass) => {
              return emp.employeeId == paramRes['empId'];
            }
          )[0];
          console.log(this.employeDetails);
        }
      }
    });
  }
}
