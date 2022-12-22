export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // getter and setter function for code
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

  // getter and setter function for name
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

  displayFullCurrency() {
    // eslint-disable-next-line
    return `${this._name} (${this._code})`;
  }
}
