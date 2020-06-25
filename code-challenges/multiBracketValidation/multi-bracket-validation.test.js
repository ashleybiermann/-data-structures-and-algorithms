'use strict';

const multiBracketValidation = require('./multi-bracket-validation');

describe('Testing the multiBracketValidation function', () => {
  it('Should return true', () => {
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
  });
  it('Should return true', () => {
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
  });
  it('Should return false', () => {
    expect(multiBracketValidation('[({}]')).toBe(false);
  });
  it('Should return false', () => {
    expect(multiBracketValidation('{(})')).toBe(false);
  });
})

