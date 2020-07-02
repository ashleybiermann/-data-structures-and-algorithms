'use strict';

const k = require('./fizzbuzztree.js');

describe('Testing FizzBuzz function', () => {
  it('Should...', () => {
    let kt = new k.Tree();
    kt.root = new k.Node(15);
    kt.root.children[0] = new k.Node(1);
    kt.root.children[1] = new k.Node(3);
    kt.root.children[2] = new k.Node(5);
    kt.root.children[1].children[0] = new k.Node(4);
    kt.root.children[1].children[1] = new k.Node(30);
    kt.root.children[2].children[0] = new k.Node(7);

    expect(kt.preOrder(kt.fizzBuzzTree(kt.root))).toEqual([ 'FizzBuzz',
    [ '1' ],
    [ 'Fizz', [ '4' ], [ 'FizzBuzz' ] ],
    [ 'Buzz', [ '7' ] ] ]);
  });
});