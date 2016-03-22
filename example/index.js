"use strict";

const splitByCommaRegex = require("../lib");

console.log(splitByCommaRegex());
// => /[ ,]+/gm

console.log("1, 2,3   ,   4,   5    ,6".split(splitByCommaRegex()));
// => [ '1', '2', '3', '4', '5', '6' ]
