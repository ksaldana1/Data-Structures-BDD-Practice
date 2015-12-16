/* global Stack, describe, it, expect, should */

describe('Stack()', function() {
  var stack;
  beforeEach(function() {
    stack = new Stack();
  });

  it('should create a stack object', function() {
    expect(stack).to.be.a('object');
  });

  it('should do have methods: push, pop, size', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  it('should report size of zero for new stack', function() {
    expect(stack.size()).to.equal(0);
  });

  it('should report a size of two after adding two items', function() {
    stack.push('a');
    stack.push('b');
    expect(stack.size()).to.equal(2);
  });

  it('should report a size of one after adding two items then removing one', function() {
    stack.push('a');
    stack.push('b');
    stack.pop();
    expect(stack.size()).to.equal(1);
  });

  it('should return a size of 0 if more items removed than added', function() {
    stack.push('a');
    stack.pop();
    stack.pop();
    expect(stack.size()).to.equal(0);
  });

  it('should remove most recently added item', function() {
    stack.push('a');
    stack.push('b');
    expect(stack.pop()).to.equal('b');
  });

  it('should allow for sequential add/remove', function() {
    stack.push('a');
    expect(stack.pop()).to.equal('a');
    stack.push('b');
    expect(stack.pop()).to.equal('b');
  });

  it('removes newest after newer added and removed', function() {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    expect(stack.pop()).to.equal('b');
  })

});
