/* global Queue, describe, it, expect, should */

describe('Queue()', function() {
  'use strict';
  var queue;
  beforeEach(function() {
    queue = new Queue();
  });

  it('should create queue object', function() {
    expect(queue).to.be.a('object');
  });

  it('should do have functions: enqueue(), dequeue(), size()', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  it('new queue should have size of 0', function() {
    expect(queue.size()).to.equal(0);
  });

  it('should have a size of two after adding two items', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.size()).to.equal(2);
  });

  it('should have a size of one after adding two and removing one item', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    expect(queue.size()).to.equal(1);
  });

  it('should have a size of zero if removing more items than added', function() {
    queue.enqueue('a');
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).to.equal(0);
  });

  it('removes last added item', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.dequeue()).to.equal('a');
  });

  it('removes oldest item', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    queue.enqueue('c');
    expect(queue.dequeue()).to.equal('b');
  });

});
