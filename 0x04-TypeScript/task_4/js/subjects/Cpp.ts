/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

namespace Subjects {
  export interface Teacher {
      experienceTeachingC?: number;
  }

  export class Cpp extends Subjects.Subject {
      getRequirements(): string {
          return 'Here is the list of requirements for Cpp';
      }

      getAvailableTeacher(): string {
          return (!this.teacher || this.teacher.experienceTeachingC <= 0) ?
              `No available teacher` :
              `Available Teacher: ${this.teacher.firstName}`;
      }
  }
}
