import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    // eslint-disable-next-line
    return this._floors;
  }

  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    // eslint-disable-next-line
    this._floors = value;
  }

  evacuationWarningMessage() {
    // eslint-disable-next-line
    return `Evacuate slowly the ${this._floors} floors`
  }
}
