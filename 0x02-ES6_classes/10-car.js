/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    // Validate attribute types
    if (typeof brand !== 'string' || typeof motor !== 'string' || typeof color !== 'string') {
      throw new TypeError('All attributes must be strings');
    }

    // Set private attributes
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Define a Symbol to use as a private cloning method
  static get [Symbol.species]() {
    return this;
  }

  // Method to clone the car
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species(this._brand, this._motor, this._color);
  }
}
