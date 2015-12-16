/*! Queue v1.0.0 - MIT license */
'use strict';
var Queue = function() {
  this._storage = {};
  this._start = -1;
  this._end = -1;
};

Queue.prototype.enqueue = function(val) {
  this._end++;
  this._storage[this._end] = val;
  return val;
};

Queue.prototype.dequeue = function() {
  if (this.size() === 0) {
    return;
  }
  this._start++;
  var temp = this._storage[this._start];
  delete this._storage[this._start];
  return temp;
};

Queue.prototype.size = function() {
  return this._end - this._start;
};
