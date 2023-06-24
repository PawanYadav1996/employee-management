import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeListClass } from '../employeeManagement.model';
import { SetAndGetEmployeeDetailsService } from 'src/_services/set-and-get-employee-details.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogeComponent } from 'src/app/commonComponents/confirmation-dialoge/confirmation-dialoge.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  constructor(
    private setAndGetEmplyeeList: SetAndGetEmployeeDetailsService,
    private dialoge: MatDialog,
    private router: Router
  ) {}
  employeeList: EmployeeListClass[] = [];

  ngOnInit() {
    // this.setAndGetEmplyeeList.getEmployeeListMethod().subscribe((res) => {
    //   console.log(res);
    //   if (res?.employeeId) {
    //     if (localStorage.getItem('employeList')) {
    //       this.employeeList = JSON.parse(
    //         localStorage.getItem('employeList') || ''
    //       );
    //     }
    //     this.employeeList.push(res);
    //     // if (this.employeeList.length > 0) {
    //     localStorage.setItem('employeList', JSON.stringify(this.employeeList));
    //     // }
    //   } else
    // });
    if (localStorage.getItem('employeList')) {
      this.employeeList = JSON.parse(localStorage.getItem('employeList') || '');
    }
  }
  searchEmployee!: string;
  searchEmploye(event: Event) {
    let allEmployeeList: EmployeeListClass[] = JSON.parse(
      localStorage.getItem('employeList') || ''
    );
    let searchEmployee = (event.target as HTMLInputElement).value;

    setTimeout(() => {
      this.employeeList = allEmployeeList.filter((emp: EmployeeListClass) => {
        return emp.name.toLowerCase().includes(searchEmployee.toLowerCase());
      });
    }, 1000);
  }

  removeEmployee(value: string | number) {
    let allEmployeeList: EmployeeListClass[] = JSON.parse(
      localStorage.getItem('employeList') || ''
    );
    this.employeeList = allEmployeeList.filter((emp: EmployeeListClass) => {
      return value != emp.employeeId;
    });
    localStorage.setItem('employeList', JSON.stringify(this.employeeList));
  }
  openConfirmationDialoge(empId: string | number) {
    const confDialoge = this.dialoge.open(ConfirmationDialogeComponent, {
      disableClose: true,
      width: '50%',
      data: {
        msg: 'Are you sure you want to remove/delete employee from portal?',
        dialogeType: 'CONFIRMATION',
      },
    });
    const subDialog = confDialoge.componentInstance.yesClicked.subscribe(
      (res) => {
        console.log(res);
        if (res) {
          this.removeEmployee(empId);
        }
      }
    );
  }
  navigateToDetailsPage(empId: number | string) {
    this.router.navigate([`/employee/list/${empId}/details`]);
  }
  navigateToEditDetails(empId: number | string) {
    this.router.navigate([`/employee/list/${empId}/editEmployee`]);
  }
}
