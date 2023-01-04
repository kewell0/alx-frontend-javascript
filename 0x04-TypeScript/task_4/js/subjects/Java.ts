/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

namespace Subjects {
  export interface Teacher {
      experienceTeachingJava?: number;
  }

  export class Java extends Subjects.Subject {
      getRequirements(): string {
          return 'Here is the list of requirements for Java';
      }

      getAvailableTeacher(): string {
          return (!this.teacher || this.teacher.experienceTeachingJava <= 0) ?
          'No available teacher' :
          `Available Teacher: ${this.teacher.firstName}`;
      }
  }
}
