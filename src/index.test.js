import { add, minus } from '.';
import * as addTestData from './fixtures/add';
import * as minusTestData from './fixtures/minus';

describe('test math functions', () => {
  it('should add', () => {
    const { a, b } = addTestData.given;
    expect(add(a, b)).toEqual(addTestData.expected);
  });

  it('should minus', () => {
    const { a, b } = minusTestData.given;
    expect(minus(a, b)).toEqual(minusTestData.expected);
  });
});
