/*! Linked List v1.0.0 - MIT license */
'use strict';

// Linked List constructor
var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

// Linked List node constructor
var Node = function(value) {
  this.value = value;
  this.next = null;
};

// add nodes to Linked List
LinkedList.prototype.addToTail = function(value) {
  // create new node
  var newNode = new Node(value);
  // if linked list does not have any nodes
  if (this.head === null) {
    // set head & tail to new node
    this.head = newNode;
    this.tail = newNode;
  } else {
    // set node.next value of tail to new node --> new node assigned to tail
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

// remove head node from Linked List
LinkedList.prototype.removeHead = function() {
  // if only one node in linked list
  if (this.head === this.tail) {
    // empty linked list
    this.head = null;
    this.tail = null;
  } else {
    // assign new head to be current head node next reference
    this.head = this.head.next;
  }
};

// check if value exists in Linked List
LinkedList.prototype.contains = function(value) {
  // set variable for while
  var current = this.head;
  // while node !== null
  while (current) {
    // check if node value === target value
    if (current.value === value) {
      return true;
    }
    // check for next node value
    current = current.next;
  }
  // return false if while loop does not return
  return false;
};


