import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRippleModule } from '@angular/material/core';
import { CustomPipesAndFunctions } from 'src/_customPipes/customPipe.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MatButtonModule,
    MatCardModule,
    NgSelectModule,
    MatTooltipModule,
    CustomPipesAndFunctions,
    MatDatepickerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatRippleModule,
  ],
})
export class EmployeeManagementModule {}
