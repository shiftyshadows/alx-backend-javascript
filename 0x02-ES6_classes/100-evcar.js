import Car from './10-car';

/* eslint-disable no-underscore-dangle */
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class constructor with brand, motor, and color
    super(brand, motor, color);

    // Validate the range type
    if (typeof range !== 'string') {
      throw new TypeError('Range must be a string');
    }

    // Set private attribute for range
    this._range = range;
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Override Symbol.species to ensure cloneCar returns an instance of Car
  static get [Symbol.species]() {
    return Car;
  }
}
