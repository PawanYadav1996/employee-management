import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  TeamsDetailsClass,
  TeamsListClass,
} from '../TeamsInterfaceAndClasses.model';

@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.scss'],
})
export class TeamsDetailsComponent implements OnInit {
  constructor(private activiated: ActivatedRoute) {}
  teamsId!: string | number;
  employeeList: TeamsDetailsClass[] = [];
  teamsDetails!: TeamsListClass;
  ngOnInit(): void {
    this.activiated.params.subscribe((res) => {
      console.log(res);
      if (res) {
        if (localStorage.getItem('teamsDetails')) {
          let employeeOfTeam: TeamsListClass[] = JSON.parse(
            localStorage.getItem('teamsDetails') || ''
          );

          this.teamsDetails = employeeOfTeam.filter((team: TeamsListClass) => {
            return team.teamName === res['teamId'];
          })[0];
          console.log(this.teamsDetails);

          this.employeeList = this.teamsDetails.teamMembers;
          console.log(this.employeeList);
        }
      }
    });
  }
  getPercentageOfBar(value: string | number): string {
    return String(value) + '%';
  }
}
