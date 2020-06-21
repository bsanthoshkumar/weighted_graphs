const assert = require('chai').assert;
const { mstPrims } = require('../src/mstPrims');

describe('mstPrims', function () {
  it('should give tree from vertex f', function () {
    const pairs = [
      ['f', 'e', 2],
      ['a', 'b', 5],
      ['b', 'c', 3],
      ['a', 'c', 8],
      ['b', 'd', 1],
      ['c', 'd', 1],
      ['d', 'f', 4],
      ['e', 'b', 2],
    ];
    const expected = {
      f: [['e', 2]],
      e: [['b', 2]],
      b: [
        ['d', 1],
        ['a', 5],
      ],
      d: [['c', 1]],
      c: [],
      a: [],
    };
    assert.deepStrictEqual(mstPrims(pairs), expected);
  });

  it('should give tree from vertex a', function () {
    const pairs = [
      ['a', 'b', 5],
      ['b', 'c', 3],
      ['a', 'c', 8],
      ['b', 'd', 1],
      ['c', 'd', 1],
      ['d', 'f', 4],
      ['f', 'e', 2],
      ['e', 'b', 2],
    ];
    const expected = {
      a: [['b', 5]],
      b: [
        ['d', 1],
        ['e', 2],
      ],
      d: [['c', 1]],
      c: [],
      e: [['f', 2]],
      f: [],
    };
    assert.deepStrictEqual(mstPrims(pairs), expected);
  });

  it('should give tree from vertex c', function () {
    const pairs = [
      ['c', 'd', 1],
      ['a', 'b', 5],
      ['b', 'c', 3],
      ['a', 'c', 8],
      ['b', 'd', 1],
      ['d', 'f', 4],
      ['f', 'e', 2],
      ['e', 'b', 2],
    ];
    const expected = {
      c: [['d', 1]],
      d: [['b', 1]],
      b: [
        ['e', 2],
        ['a', 5],
      ],
      e: [['f', 2]],
      f: [],
      a: [],
    };
    assert.deepStrictEqual(mstPrims(pairs), expected);
  });
});
