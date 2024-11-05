export default class Building {
  constructor(sqft) {
    // Validate sqft type
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    /* eslint-disable no-underscore-dangle */
    // Set private attribute
    this._sqft = sqft;

    // Check if the subclass implements evacuationWarningMessage
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
  /* eslint-disable no-underscore-dangle */
}
