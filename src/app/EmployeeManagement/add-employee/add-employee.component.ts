import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DropDownValuesInterface } from 'src/_appConstants/appLevelClassesAndInterfaces';
import {
  DEFAULT_DESIGNATIONS,
  DEFAULT_ROLES,
  DEFAULT_TEAMS,
} from 'src/_appConstants/constantsValues';
import { EmployeeListClass } from '../employeeManagement.model';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { ErrorDialogeComponent } from 'src/app/commonComponents/error-dialoge/error-dialoge.component';
import { ConfirmationDialogeComponent } from 'src/app/commonComponents/confirmation-dialoge/confirmation-dialoge.component';
import { SetAndGetEmployeeDetailsService } from 'src/_services/set-and-get-employee-details.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialge: MatDialog,
    private setAndgetService: SetAndGetEmployeeDetailsService
  ) {}
  maxAge: Date = new Date();
  minAge: Date = new Date();
  defaultTeamsList: DropDownValuesInterface[] = DEFAULT_TEAMS;
  defaultDesignationList: DropDownValuesInterface[] = DEFAULT_DESIGNATIONS;
  defaultRolesList: DropDownValuesInterface[] = DEFAULT_ROLES;
  employeeList: EmployeeListClass[] = [];
  ngOnInit() {
    this.setAndgetService.getEmployeeListMethod().subscribe((res) => {
      console.log(res);
      if (res) {
        console.log(res);
        if (localStorage.getItem('employeList')) {
          this.employeeList = JSON.parse(
            localStorage.getItem('employeList') || ''
          );
        }
        this.employeeList.push(res);
        console.log(this.employeeList.length);

        if (this.employeeList.length > 0) {
          localStorage.setItem(
            'employeList',
            JSON.stringify(this.employeeList)
          );
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
  addEmployeeForm: FormGroup = this.formBuilder.group({
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
    return this.addEmployeeForm.controls;
  }
  resetForm() {
    this.addEmployeeForm.reset();
  }
  // imageUrl!: string | ArrayBuffer | null;
  // uploadBannerFunction(event: Event) {
  //   console.log((event.target as HTMLInputElement)?.files);
  //   const uplaodedImage: any = (event.target as HTMLInputElement)?.files;
  //   const render = new FileReader();
  //   render.readAsDataURL(uplaodedImage[0]);
  //   render.addEventListener('load', () => {
  //     let imagContainr = document.getElementById('imageUpload') as HTMLElement;
  //     imagContainr.setAttribute('src', render.result as string);
  //     console.log(render.result);
  //     this.imageUrl = render.result;
  //     this.form['profileImage'].setValue(render.result);
  //   });
  // }
  addEmployee() {
    if (!this.addEmployeeForm.valid) {
      this.openErrorDialoge();
      return;
    }
    console.log(this.addEmployeeForm.valid);
    let body: EmployeeListClass = new EmployeeListClass();
    body.employeeId = Math.floor(Math.random() * 1000 + 1);
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
    this.setAndgetService.updateEmployeeList(body);
    this.openDialogeForAddMoreValue();
  }
  openErrorDialoge() {
    const errorDialoge = this.dialge.open(ErrorDialogeComponent, {
      disableClose: true,
      width: '45%',
      data: {
        msg: 'Please fill all the mandatory fields asked for.',
        type: 'error',
      },
    });
  }
  openDialogeForAddMoreValue() {
    const addEmployeedCnf = this.dialge.open(ConfirmationDialogeComponent, {
      disableClose: true,
      width: '45%',
      data: {
        msg: 'Employee is added successfully. Do you want to add another employee?',
        dialogeType: 'CONFIRMATION',
      },
    });
    const subOnCondition =
      addEmployeedCnf.componentInstance.yesClicked.subscribe((res) => {
        if (res) {
          this.addEmployeeForm.reset();
        } else {
          this.router.navigate(['/employee/list']);
        }
      });
  }
}
