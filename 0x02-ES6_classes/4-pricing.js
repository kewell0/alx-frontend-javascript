import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // getter and setter method for amount
  get amount() {
    // eslint-disable-next-line
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    // eslint-disable-next-line
    this._amount = value;
  }

  get currency() {
    // eslint-disable-next-line
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    // eslint-disable-next-line
    this._currency = value;
  }

  displayFullPrice() {
    // eslint-disable-next-line
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion Rate must be a number');
    }
    return amount * conversionRate;
  }
}
