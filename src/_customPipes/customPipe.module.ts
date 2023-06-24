import { NgModule, PipeTransform, Pipe } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { EmployeeListClass } from 'src/app/EmployeeManagement/employeeManagement.model';
import { ConfirmationDialogeComponent } from 'src/app/commonComponents/confirmation-dialoge/confirmation-dialoge.component';
import { MatIconModule } from '@angular/material/icon';
import { ErrorDialogeComponent } from 'src/app/commonComponents/error-dialoge/error-dialoge.component';
import { DropDownValuesInterface } from 'src/_appConstants/appLevelClassesAndInterfaces';
import {
  DEFAULT_DESIGNATIONS,
  DEFAULT_ROLES,
  DEFAULT_TEAMS,
} from 'src/_appConstants/constantsValues';

@Pipe({ name: 'nullValue' })
export class NullValuePipe implements PipeTransform {
  transform(value: string | number): string | number {
    if (value) {
      return value;
    } else {
      return '-';
    }
  }
}
@Pipe({ name: 'truncateString' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: any[]): any {
    if (value) {
      const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
      const trail = args.length > 1 ? args[1] : '...';
      return value.length > limit ? value.substring(0, limit) + trail : value;
    }
  }
}
@Pipe({ name: 'sortEmployeesList' })
export class EmployeeSorting implements PipeTransform {
  transform(array: EmployeeListClass[]): EmployeeListClass[] {
    if (array) {
      return array.sort(function (a, b) {
        if (a.employeeId > b.employeeId) {
          return 1;
        } else if (a.employeeId < b.employeeId) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      return [];
    }
  }
}
@Pipe({ name: 'gender' })
export class GenderPipe implements PipeTransform {
  transform(value: string): any {
    if (value === 'male') return 'Male';
    else if (value === 'female') return 'Female';
    else if (value === 'other') return 'Other';
    else return null;
  }
}
@Pipe({ name: 'teamPipe' })
export class TeamPipe implements PipeTransform {
  transform(value: string): string {
    let filterValue = DEFAULT_TEAMS.filter((item: DropDownValuesInterface) => {
      return item.id === value;
    })[0];
    if (filterValue?.value) {
      return filterValue.value;
    } else {
      return value;
    }
  }
}
@Pipe({ name: 'rolesPipe' })
export class RolePipe implements PipeTransform {
  transform(value: string): string {
    let filterValue = DEFAULT_ROLES.filter((item: DropDownValuesInterface) => {
      return item.id === value;
    })[0];
    if (filterValue?.value) {
      return filterValue.value;
    } else {
      return value;
    }
  }
}
@Pipe({ name: 'designationPipe' })
export class DesignationPipe implements PipeTransform {
  transform(value: string): string {
    let filterValue = DEFAULT_DESIGNATIONS.filter(
      (item: DropDownValuesInterface) => {
        return item.id === value;
      }
    )[0];
    if (filterValue?.value) {
      return filterValue.value;
    } else {
      return value;
    }
  }
}
@Pipe({ name: 'clipName' })
export class ClipNamePipe implements PipeTransform {
  transform(name: string): any {
    let splitArray = name.split(' ');
    let shortName = splitArray.map((n) => n[0]);
    if (shortName[1] && shortName[0]) {
      return shortName[0] + shortName[1];
    } else if (shortName[1] == null) {
      return shortName[0];
    }
  }
}
@NgModule({
  declarations: [
    NullValuePipe,
    TruncatePipe,
    EmployeeSorting,
    ConfirmationDialogeComponent,
    GenderPipe,
    ErrorDialogeComponent,
    DesignationPipe,
    TeamPipe,
    ClipNamePipe,
    RolePipe,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    NullValuePipe,
    TruncatePipe,
    EmployeeSorting,
    ConfirmationDialogeComponent,
    GenderPipe,
    ErrorDialogeComponent,
    DesignationPipe,
    ClipNamePipe,
    TeamPipe,
    RolePipe,
  ],
})
export class CustomPipesAndFunctions {}
