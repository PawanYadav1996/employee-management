import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  MatRippleModule,
} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationHeaderComponent } from './commonComponents/application-header/application-header.component';
import { ApplicationFooterComponent } from './commonComponents/application-footer/application-footer.component';
import { CustomPipesAndFunctions } from 'src/_customPipes/customPipe.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginPageComponent } from './commonComponents/login-page/login-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderComponentComponent } from './commonComponents/loader-component/loader-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IntialDisclaimerDialogeComponent } from './commonComponents/intial-disclaimer-dialoge/intial-disclaimer-dialoge.component';
// import { TeamsEmployeeDetailsComponent } from './teamsManagement/teams-employee-details/teams-employee-details.component';
// import { TeamsListComponent } from './teamsManagement/teams-list/teams-list.component';
// import { TeamsDetailsComponent } from './teamsManagement/teams-details/teams-details.component';
// import { ErrorDialogeComponent } from './commonComponents/error-dialoge/error-dialoge.component';
// import { ConfirmationDialogeComponent } from './commonComponents/confirmation-dialoge/confirmation-dialoge.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponentComponent,
    ApplicationHeaderComponent,
    ApplicationFooterComponent,
    LoginPageComponent,
    IntialDisclaimerDialogeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatDialogModule,
    FontAwesomeModule,
    MatRippleModule,
    MatButtonModule,
    CustomPipesAndFunctions,
    MatDatepickerModule,
    MatFormFieldModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
