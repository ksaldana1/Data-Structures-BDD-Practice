/* global Linked List, describe, it, expect, should */

describe('LinkedList()', function() {
  'use strict';
  var linkedList;
  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('Constructor function creates object', function() {
    expect(linkedList).to.be.a('object');
  });

  it('Should have head and tail properties', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('Should have methods: addToTail(), removeHead(), contains()', function() {
    expect(linkedList.addToTail()).to.be.a('function');
    expect(linkedList.removeHead()).to.be.a('function');
    expect(linkedList.contains()).to.be.a('function');
  });

  it('Should assign tail to newly added node', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('Should remove head when function called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('Should contain added values', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('Should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // Add more assertions here
});
