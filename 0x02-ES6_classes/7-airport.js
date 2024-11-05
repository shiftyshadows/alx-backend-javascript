/* eslint-disable no-underscore-dangle */
export default class Airport {
    constructor(name, code) {
        // Validate attribute types
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a string');
        }

        // Set private attributes
        this._name = name;
        this._code = code;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = value;
    }

    // Getter for code
    get code() {
        return this._code;
    }

    // Setter for code
    set code(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Code must be a string');
        }
        this._code = value;
    }

    // Define Symbol.toStringTag to customize the string representation
    get [Symbol.toStringTag]() {
        return this._code;
    }
}
/* eslint-enable no-underscore-dangle */

