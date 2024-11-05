/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand = undefined, motor = undefined, color = undefined) {
    // Validate attribute types only if values are provided
    if (
      (brand !== undefined && typeof brand !== 'string')
            || (motor !== undefined && typeof motor !== 'string')
            || (color !== undefined && typeof color !== 'string')
    ) {
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

  // Define Symbol.species to allow cloning to respect inheritance
  static get [Symbol.species]() {
    return this;
  }

  // Method to clone the car
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species(this._brand, this._motor, this._color);
  }
}
