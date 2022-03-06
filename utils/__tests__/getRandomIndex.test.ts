import { getRandomIndex } from '../getRandomIndex';

it("returns 0 when given array's length is 0", () => {
  const result = getRandomIndex([]);
  expect(result).toBe(0);
});
