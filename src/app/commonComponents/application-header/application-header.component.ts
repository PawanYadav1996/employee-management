import { Component } from '@angular/core';
import { AuthenticationService } from 'src/_services/authentication.service';

@Component({
  selector: 'app-application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.scss'],
})
export class ApplicationHeaderComponent {
  constructor(public authService: AuthenticationService) {}
}
