import { DropDownValuesInterface } from './appLevelClassesAndInterfaces';
export enum DefaultTeams {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  GRAPHIC = 'graphic',
  TESTING = 'testing',
  CICD = 'cicd',
  HR = 'hr',
}
export enum DefaultDesignation {
  SOFTENG = 'softeng',
  SNRENG = 'snrEng',
  TL = 'tl',
  MANAGER = 'manager',
  SNRMANAGER = 'snrmanager',
}
export const DEFAULT_TEAMS: DropDownValuesInterface[] = [
  { id: 'frontend', value: 'Front-End Team' },
  { id: 'backend', value: 'Backend Team' },
  { id: 'graphic', value: 'Graphic Team' },
  { id: 'testing', value: 'Testing Team' },
  { id: 'cicd', value: 'Deployment Team' },
  { id: 'hr', value: 'HR Team' },
];

export const DEFAULT_DESIGNATIONS: DropDownValuesInterface[] = [
  { id: 'softeng', value: 'Engineer' },
  { id: 'snrEng', value: 'Snr. Engineer' },
  { id: 'tl', value: 'Team Lead' },
  { id: 'manager', value: 'Manager' },
  { id: 'snrmanager', value: 'Snr. Manager' },
];
export enum DefaultGender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}
export const DEFAULT_GENDER: DropDownValuesInterface[] = [
  { id: 'male', value: 'Male' },
  { id: 'female', value: 'Female' },
  { id: 'other', value: 'other' },
];
export enum DefaultRoles {
  EMPLOYEE = 'employee',
  ADMIN = 'admin',
}

export const DEFAULT_ROLES: DropDownValuesInterface[] = [
  { id: 'employee', value: 'User/Employee' },
  { id: 'admin', value: 'Admin' },
];
