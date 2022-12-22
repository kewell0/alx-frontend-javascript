export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  get sqft() {
    // eslint-disable-next-line
        return this._sqft;
  }

  set sqft(value) {
    // eslint-disable-next-line
        this._sqft = value;
  }
}
