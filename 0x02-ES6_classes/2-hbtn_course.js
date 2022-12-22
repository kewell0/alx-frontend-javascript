export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // name getter and setter
  get name() {
    // eslint-disable-next-line
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // eslint-disable-next-line
      this._name = value;
  }

  // length getter and setter
  get length() {
    // eslint-disable-next-line
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    // eslint-disable-next-line
      this._length = value;
  }

  // students getter and setter
  get students() {
    // eslint-disable-next-line
    return this._students;
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw Error('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    // eslint-disable-next-line
    this._students = value;
  }
}
