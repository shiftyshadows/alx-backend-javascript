import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class constructor with sqft
    super(sqft);

    // Validate floors type
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    /* eslint-disable no-underscore-dangle */
    // Set private attribute
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
  /* eslint-disable no-underscore-dangle */
}
