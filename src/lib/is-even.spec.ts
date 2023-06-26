import { describe, it } from "mocha";
import { expect } from "chai";

import { isEven } from './is-even';


describe('isEven', () => {
  it('should work', () => {
    expect(isEven()).to.equals('is-even');
  });
});
