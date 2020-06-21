const assert = require('chai').assert;
const { mst_prims } = require('../src/graph');

describe('mst_prims', function () {
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

  it('should give tree from vertex f', function () {
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
    assert.deepStrictEqual(mst_prims(pairs, 'f'), expected);
  });

  it('should give tree from vertex a', function () {
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
    assert.deepStrictEqual(mst_prims(pairs, 'a'), expected);
  });

  it('should give tree from vertex c', function () {
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
    assert.deepStrictEqual(mst_prims(pairs, 'c'), expected);
  });
});
