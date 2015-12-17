/*! Tree v1.0.0 - MIT license */
'use strict';

var Tree = function(val) {
  this.children = [];
  this.value = val;
};

Tree.prototype.addChild = function(val) {
  var newTree = new Tree(val);
  this.children.push(newTree);
  return newTree;
};

Tree.prototype.contains = function(val) {
  var found = false;
  function traverse(tree) {
    if (tree.value === val) {
      found = true;
      return;
    }
    tree.children.forEach(function(child) {
      traverse(child);
    });
  }
  traverse(this);
  return found;
};
