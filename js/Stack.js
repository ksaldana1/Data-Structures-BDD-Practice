/*! Stack v1.0.0 - MIT license */
'use strict';
// Stack constructor
var Stack = function() {
  this._storage = {};
  this._size = 0;
};

// add value to stack
Stack.prototype.push = function(val) {
  this._size++;
  this._storage[this._size] = val;
};

// remove value from stack --> return removed value
Stack.prototype.pop = function() {
  // check if anything is in stack
  if (this.size() === 0) {
    return;
  }
  var temp = this._storage[this._size];
  delete this._storage[this._size];
  this._size--;
  return temp;
};

// getter function for stack size property
Stack.prototype.size = function() {
  return this._size;
};
