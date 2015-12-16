/*! Queue v1.0.0 - MIT license */
'use strict';
// Queue constructor
var Queue = function() {
  this._storage = {};
  this._start = -1;
  this._end = -1;
};

// Add value to queue
Queue.prototype.enqueue = function(val) {
  // add to end property (first value will be this._storage[0])
  this._end++;
  this._storage[this._end] = val;
  // return value passed into function
  return val;
};

Queue.prototype.dequeue = function() {
  // if queue is empty, return
  if (this.size() === 0) {
    return;
  }
  // increase start property (first value will be this._storage[0])
  this._start++;
  // assign to temp variable to return
  var temp = this._storage[this._start];
  // remove from queue
  delete this._storage[this._start];
  return temp;
};

Queue.prototype.size = function() {
  // calculate number of items in queue
  return this._end - this._start;
};
