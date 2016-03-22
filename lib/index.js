"use strict";

/**
 * splitByCommaRegex
 * Regular expression for splitting strings by comma.
 *
 * @name splitByCommaRegex
 * @function
 * @return {RegExp} The regular expression.
 */
module.exports = function splitByCommaRegex (a, b) {
    return /[ ,]+/gm;
};
