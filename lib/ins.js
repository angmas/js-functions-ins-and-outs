'use strict';

const product = function () {

};

const max = function () {
  let result = arguments[0]
  for (let i=1; i < arguments.length; i ++) {
  // terniary operator example result = result < arguments[i] ? arguments[i] : result
    if (result < arguments[i]) {result = arguments[i]}
  }
  return result
  };

const arrayTimes2 = function () {

};

const addProperty = function () {

};

const transform = function (value, predicate, mutator) {

};

module.exports = {
  product,
  max,
  arrayTimes2,
  addProperty,
  transform,
};
