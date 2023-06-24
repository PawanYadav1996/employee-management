import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsListComponent } from '../teams-list/teams-list.component';
import { TeamsDetailsComponent } from '../teams-details/teams-details.component';
import { TeamsEmployeeDetailsComponent } from '../teams-employee-details/teams-employee-details.component';

const routes: Routes = [
  { path: 'list', component: TeamsListComponent },
  { path: 'list/:teamId', component: TeamsDetailsComponent },
  { path: 'list/:teamId/:empId', component: TeamsEmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsReportsModuleRoutingModule {}
