import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

const routes: Routes = [
  {
    path: 'list',
    component: EmployeeListComponent,
  },
  {
    path: 'list/:empId',
    children: [
      {
        path: 'details',
        component: EmployeeDetailsComponent,
      },
      {
        path: 'editEmployee',
        component: EditEmployeeComponent,
      },
    ],
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeManagementRoutingModule {}
