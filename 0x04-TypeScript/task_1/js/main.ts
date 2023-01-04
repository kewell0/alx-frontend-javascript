export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attr: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export let printTeacher: printTeacherFunction =
  (firstName: string, lastName: string): string => {
      return `${firstName[0]}. ${lastName}`
  }

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

export interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

export const StudentClass: StudentConstructor = class StudentClass implements StudentInterface {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
      this._firstName = firstName;
      this._lastName = lastName;
  }
  workOnHomework() {
      return 'Currently working';
  }
  displayName() {
      return this._firstName;
  }
}
