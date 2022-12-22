export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    // eslint-disable-next-line
    return this._name;
  }

  set name(value) {
    // eslint-disable-next-line
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // eslint-disable-next-line
    this._name = value;
  }

  get code() {
    // eslint-disable-next-line
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    // eslint-disable-next-line
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    // eslint-disable-next-line
    return this._code;
  }
}
