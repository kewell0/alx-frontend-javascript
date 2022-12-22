import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    // eslint-disable-next-line
    this._range = range;
  }

  get range() {
    // eslint-disable-next-line
    return this._range;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}
