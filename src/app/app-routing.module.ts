import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './commonComponents/login-page/login-page.component';
import { AuthenticationGuard } from 'src/_guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'employee',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import(
        './EmployeeManagement/employee-management/employee-management.module'
      ).then((m) => m.EmployeeManagementModule),
  },
  {
    path: 'teams',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import(
        './teamsManagement/teams-reports-module/teams-reports-module.module'
      ).then((m) => m.TeamsReportsModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
