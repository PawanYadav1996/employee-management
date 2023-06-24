import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DropDownValuesInterface } from 'src/_appConstants/appLevelClassesAndInterfaces';
import { SetAndGetEmployeeDetailsService } from 'src/_services/set-and-get-employee-details.service';
import { EmployeeListClass } from '../employeeManagement.model';
import {
  DEFAULT_DESIGNATIONS,
  DEFAULT_ROLES,
  DEFAULT_TEAMS,
} from 'src/_appConstants/constantsValues';
import * as moment from 'moment';
import { ErrorDialogeComponent } from 'src/app/commonComponents/error-dialoge/error-dialoge.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialge: MatDialog,
    private activated: ActivatedRoute,
    private setAndgetService: SetAndGetEmployeeDetailsService
  ) {}
  maxAge: Date = new Date();
  minAge: Date = new Date();
  defaultTeamsList: DropDownValuesInterface[] = DEFAULT_TEAMS;
  defaultDesignationList: DropDownValuesInterface[] = DEFAULT_DESIGNATIONS;
  defaultRolesList: DropDownValuesInterface[] = DEFAULT_ROLES;
  employeeList: EmployeeListClass[] = [];
  employeeWhichIsNeedToEdit!: EmployeeListClass;
  ngOnInit() {
    this.employeeList = [];
    this.activated.params.subscribe((res) => {
      console.log(res);
      if (localStorage.getItem('employeList')) {
        this.employeeList = JSON.parse(
          localStorage.getItem('employeList') || ''
        );
        this.employeeWhichIsNeedToEdit = this.employeeList.filter(
          (item: EmployeeListClass) => {
            return item.employeeId === Number(res['empId']);
          }
        )[0];
        console.log(this.employeeWhichIsNeedToEdit);
        if (this?.employeeWhichIsNeedToEdit) {
          // let name = this.employeeWhichIsNeedToEdit.name.split(' ');
          this.form['firstName'].setValue(
            this.employeeWhichIsNeedToEdit.firstName
          );
          this.form['lastName'].setValue(
            this.employeeWhichIsNeedToEdit.lastName
          );
          this.form['gender'].setValue(this.employeeWhichIsNeedToEdit.gender);
          this.form['dob'].setValue(this.employeeWhichIsNeedToEdit.dob);
          this.form['mobile'].setValue(
            this.employeeWhichIsNeedToEdit.phoneNumber
          );
          this.form['designation'].setValue(
            this.employeeWhichIsNeedToEdit.designation
          );
          this.form['emailId'].setValue(this.employeeWhichIsNeedToEdit.email);
          this.form['team'].setValue(this.employeeWhichIsNeedToEdit.team);
          this.form['role'].setValue(this.employeeWhichIsNeedToEdit.role);
          this.form['salary'].setValue(this.employeeWhichIsNeedToEdit.salary);
        }
      }
    });
    let newdate = new Date();
    let date = newdate.getDate();
    let month = newdate.getMonth();
    let year = newdate.getFullYear();
    this.maxAge = new Date(year - 21, month, date);
    this.minAge = new Date(year - 100, month, date);
  }
  editEmployeeForm: FormGroup = this.formBuilder.group({
    firstName: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z ]*$'),
      ],
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.minLength(1),
      ],
    ],
    gender: ['male', [Validators.required]],
    dob: ['', [Validators.required]],
    mobile: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(11),
      ],
    ],
    designation: ['', [Validators.required]],
    emailId: [
      '',
      [Validators.required, Validators.pattern('^[a-zA-Z0-9.@-_]*$')],
    ],
    team: ['', [Validators.required]],
    role: ['', Validators.required],
    salary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
  });
  goBack() {
    this.router.navigate(['/employee/list']);
  }
  get form() {
    return this.editEmployeeForm.controls;
  }
  resetForm() {
    this.editEmployeeForm.reset();
  }
  employeeUpdateArray: EmployeeListClass[] = [];
  async updateEmployeeDetails() {
    let employeeListToUpdate = this.employeeList;
    if (!this.editEmployeeForm.valid) {
      this.openErrorDialoge(
        'error',
        false,
        'Please fill all the mandatory fields asked for.'
      );
      return;
    }
    this.employeeUpdateArray = [];
    console.log(this.editEmployeeForm.valid);
    let body: EmployeeListClass = new EmployeeListClass();
    body.employeeId = this.employeeWhichIsNeedToEdit.employeeId;
    body.designation = this.form['designation'].value;
    body.name =
      this.form['firstName'].value + ' ' + this.form['lastName'].value;
    body.firstName = this.form['firstName'].value;
    body.lastName = this.form['lastName'].value;
    body.dob = moment(this.form['dob'].value).format('yyyy-MM-DD');
    body.gender = this.form['gender'].value;
    body.email = this.form['emailId'].value;
    body.phoneNumber = this.form['mobile'].value;
    body.role = this.form['role'].value;
    body.team = this.form['team'].value;
    body.salary = this.form['salary'].value;
    employeeListToUpdate.forEach((item: EmployeeListClass) => {
      if (item.employeeId != body.employeeId) {
        this.employeeUpdateArray.push(item);
      }
    });
    this.employeeUpdateArray.push(body);
    await localStorage.removeItem('employeList');
    localStorage.setItem(
      'employeList',
      JSON.stringify(this.employeeUpdateArray)
    );
    this.openErrorDialoge(
      'success',
      true,
      `Details are update successfully for ${body.name}.`
    );
    // this.setAndgetService.updateEmployeeList(body);
    // this.openDialogeForAddMoreValue();
  }
  openErrorDialoge(type: string, navigate: boolean, msg: string) {
    const errorDialoge = this.dialge.open(ErrorDialogeComponent, {
      disableClose: true,
      width: '45%',
      data: {
        msg: msg,
        type: type,
      },
    });
    const sub = errorDialoge.afterClosed().subscribe((res) => {
      if (navigate) {
        this.router.navigate(['/employee/list/']);
      }
    });
  }
}
