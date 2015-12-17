/* global Tree, describe, it, expect, should */

describe('Tree()', function() {
  var tree;

  beforeEach(function() {
    tree = new Tree();
  });

  it('should make a new tree object', function() {
    expect(tree).to.be.a('object');
  });

  it('should have properties: children, value', function() {
    expect(tree).to.have.property('children');
    expect(tree).to.have.property('value');
  });

  it('should have methods: addChild, contains', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
  });

  it('should add children to tree', function() {
    tree.addChild(4);
    expect(tree.children[0].value).to.equal(4);
  });

  it('contain should return true for values added to tree', function() {
    tree.addChild(4);
    expect(tree.contains(4)).to.equal(true);
  });

  it('contain should return false for values not added', function() {
    tree.addChild(4);
    expect(tree.contains(5)).to.equal(false);
  });

  it('should add value directly to children', function() {
    tree.addChild(4);
    tree.children[0].addChild(5);
    expect(tree.contains(5)).to.equal(true);
  })


});
