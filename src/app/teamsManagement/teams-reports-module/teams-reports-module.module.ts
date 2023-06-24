import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsReportsModuleRoutingModule } from './teams-reports-module-routing.module';
import { TeamsDetailsComponent } from '../teams-details/teams-details.component';
import { TeamsListComponent } from '../teams-list/teams-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomPipesAndFunctions } from 'src/_customPipes/customPipe.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { TeamsEmployeeDetailsComponent } from '../teams-employee-details/teams-employee-details.component';

@NgModule({
  declarations: [
    TeamsListComponent,
    TeamsDetailsComponent,
    TeamsEmployeeDetailsComponent,
  ],
  imports: [
    CommonModule,
    TeamsReportsModuleRoutingModule,
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
export class TeamsReportsModuleModule {}
