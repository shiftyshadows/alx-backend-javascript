/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    // Validate attribute types
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    // Set private attributes
    this._size = size;
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Override valueOf for casting to Number
  valueOf() {
    return this._size;
  }

  // Override toString for casting to String
  toString() {
    return this._location;
  }
}
/* eslint-enable no-underscore-dangle */
