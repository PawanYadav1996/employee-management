export class TeamsListClass {
  teamName!: string;
  teamMembers!: TeamsDetailsClass[];
  teamMostActiveEmpName!: string;
  overallProgressOfTeam!: string | number;
}
export class TeamsDetailsClass {
  employeeId!: string | number;
  name!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  dob!: string;
  gender!: string;
  role!: string;
  team!: string;
  designation!: string;
  phoneNumber!: string | number;
  salary!: number | string;
}
