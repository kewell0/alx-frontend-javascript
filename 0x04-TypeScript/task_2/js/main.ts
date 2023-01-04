export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
      return 'Working from home';
  }
  getCoffeeBreak(){
      return 'Getting a coffee break';
  }
  workDirectorTasks() {
      return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
      return 'Cannot work from home';
  }
  getCoffeeBreak() {
      return 'Cannot get a break';
  }
  workTeacherTasks() {
      return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): Teacher | Director {
  return (typeof salary === 'number') && (salary < 500) ? new Teacher() : new Director();
}

export function isDirector(employee: (Teacher | Director)) {
  return employee instanceof Director;
}

export function executeWork(employee: (Director | Teacher)) {
  return isDirector(employee) ? (employee as Director).workDirectorTasks() 
  : (employee as Teacher).workTeacherTasks();
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
