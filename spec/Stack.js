/* global Stack, describe, it, expect, should */

describe('Stack()', function() {
  var stack;
  beforeEach(function() {
    stack = new Stack();
  });

  it('should create a stack object', function() {
    expect(stack).to.be.a('object');
  });

  it('should do stuff', function() {
    expect(true).to.equal(false);
  });

  it('should do more stuff', function() {
    expect(true).to.equal(false);
  });

});
