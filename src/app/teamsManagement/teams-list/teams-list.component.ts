import { Component, OnInit } from '@angular/core';
import {
  TeamsDetailsClass,
  TeamsListClass,
} from '../TeamsInterfaceAndClasses.model';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {
  constructor() {}
  teamsList: TeamsListClass[] = [];
  ngOnInit(): void {
    if (localStorage.getItem('teamsDetails')) {
      localStorage.removeItem('teamsDetails');
    }
    this.temperEmployData();
  }

  temperEmployData() {
    if (localStorage.getItem('employeList')) {
      let employeeList: TeamsDetailsClass[] = JSON.parse(
        localStorage.getItem('employeList') || ''
      );
      let newMergedArray = employeeList.reduce(
        (teamMerge: any, empl: TeamsDetailsClass) => {
          const team = empl.team;
          teamMerge[team] = teamMerge[team] ?? [];
          teamMerge[team].push(empl);
          return teamMerge;
        },
        {}
      );
      for (const team in newMergedArray) {
        let body: TeamsListClass = new TeamsListClass();
        if (newMergedArray.hasOwnProperty(team)) {
          body.teamName = team;
          body.teamMembers = newMergedArray[team];
          body.overallProgressOfTeam = Math.floor(Math.random() * 100 + 1);
          this.teamsList.push(body);
        }
      }
      localStorage.setItem('teamsDetails', JSON.stringify(this.teamsList));
    }
  }
  getPercentageOfBar(value: string | number): string {
    return String(value) + '%';
  }
}
