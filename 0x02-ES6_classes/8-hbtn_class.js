export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    // eslint-disable-next-line
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a number');
    }
    // eslint-disable-next-line
    this._size = value;
  }

  get location() {
    // eslint-disable-next-line
    return this._location;
  }

  set location(value) {
    // eslint-disable-next-line
    if (typeof value !== 'string') {
      throw new TypeError('Location must be string');
    }
    // eslint-disable-next-line
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      // eslint-disable-next-line
      return this._size;
    }

    if (hint === 'string') {
      // eslint-disable-next-line
      return this._location;
    }

    return this;
  }
}
